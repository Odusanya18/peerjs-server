#!/usr/bin/env node

const express = require('express')
const http = require('http')
const WServer = require('ws').Server
const cors = require('cors')
const url = require('url')
const messages = require('./messages')

const app = express()

app.use(express.static('public'))
app.use(cors())
app.get('/app.json', (req, res) => {
  res.send(require('../app.json'))
})

const connectionStore = {}
const hashMap = {}
const numIpsConnected = {}
const outstandingPeers = {}

const hserver = http.createServer(app)

app.ws = new WServer({ path: '/peerjs', server: hserver})
app.ws.on('connection', (socket) => {
  const sockUpgradeR = socket.upgradeReq
  const query = url.parse(sockUpgradeR.url, true).query

  const id = query.id
  const key = query.page
  const ip = sockUpgradeR.socket.remoteAddress

  let message

  if (!(id && key)) {
    message = {
      tag: messages.SWARM_NOT_FOUND,
      body: 'Unknown connection'
    }
    socket.send(JSON.stringify(message))
    socket.close()
    return
  }
  if (!(connectionStore[key] && connectionStore[key][id])) {
    app.confirmKey(key, ip, (error) => {
      if (error) {
        message = {
          tag: messages.SWARM_NOT_FOUND,
          body: error
        }
        socket.send(JSON.stringify(message))
        return
      } else {
        if (!connectionStore[key][id]) {
          connectionStore[key][id] = {
            ip: ip,
            key: key,
            id: id
          }
          numIpsConnected[ip]++
          message = {
            tag: messages.HEARTBEAT, 
            body: 'Connection Opened'
          }
          socket.send(JSON.stringify(message))
        }
      }
    })
  }
  app.setUpSocket(socket, key, id)
})

app.setUpSocket = (socket, key, id) => {
  const client = connectionStore[key][id]

  client.socket = socket
  app.proOutstandingMsgs(key, id)

  // Cleanup after a socket closes.
  socket.on('close', () => {
    if (client.socket === socket) {
      removePeerForId(key, id)
    }
  })

  // Handle messages from peers.
  socket.on('message', (data) => {
    try {
      const message = JSON.parse(data)
      let swarmId

      switch (message.tag) {
        case messages.ASK_FOR_PEERS:
          swarmId = message.swarmId

          if (hashMap[swarmId]) {
            const resp = {
              tag: messages.GROUP_MATCH, 
              peerIds: hashMap[swarmId]
            }

            socket.send(JSON.stringify(resp))
          }
          break
        case messages.HAVE_SWARM:
          swarmId = message.swarmId

          if (!hashMap[swarmId]) {
            hashMap[swarmId] = []
          }
          hashMap[swarmId].push(id)
          break
        case messages.SESSION_REPORT:
          // Save the session report
          break
        case messages.GROUP_REPORT:
          // Handle the group report
          break
        case messages.HEARTBEAT:
          socket.send(JSON.stringify({
            tag: messages.HEARTBEAT, 
            body: "Connection Alive"
          }))
          break
        default:
          if (message.destId) {
            app.forwardToPeer(key, message) 
          }
      }
    } catch (error) {
      console.log(error)
    }
  })
  // We're going to emit here, because for XHR we don't *know* when someone
  // disconnects.
  app.emit('connection', id);
}

app.confirmKey = (key, ip, callback) => {
    //Initialise stores
    if (!connectionStore[key]) {
      connectionStore[key] = {}
    }
    if (!outstandingPeers[key]) {
      outstandingPeers[key] = {}
    }
    if (!numIpsConnected[ip]) {
      numIpsConnected[ip] = 0
    }
    // Check concurrency limit

    if (Object.keys(connectionStore[key]).length >= app.options.concurrent_limit) {
      callback('Server reached concurrency limit')
      return
    }
    if (numIpsConnected[ip] >= app.options.ip_limit) {
      callback(ip + ' reached its concurrency limit')
      return
    }

      //Correct key and everything looks good
    callback(null)
}

/** Handles passing on a message. */
app.forwardToPeer = function(key, message) {
  const data = JSON.stringify(message);
  const tag = message.tag;
  const reciever = message.destId
  const sender =  message.originId

  const destination = connectionStore[key][reciever]

  // User is connected!
  if (destination) {
    try {
      if (destination.socket) {
        destination.socket.send(data)
      } else {
        //Socket not available, Peer dead?
        throw 'Socket was dropped'
      }
    } catch (error) {
      // This happens when a peer disconnects without closing connections and
      // the associated WebSocket has not closed.
      // Tell other side to stop trying.
      removePeerForId(key, destId)
      app.forwardToPeer(key, {
        tag: messages.LEAVE,
        destId: sender,
        originId: reciever,
        body: "Peer socket was dropped"
      })
    }
  } else {
    // Wait for this client to connect/reconnect (WS) for important
    // messages.
    if (tag !== messages.LEAVE && tag !== messages.CLOSE && destId) {
      
      if (!connectionStore[key][destId]) {
        outstandingPeers[key][destId] = []
      }
      outstandingPeers[key][destId].push(message)
    } else if (type === messages.LEAVE && !destId) {
      removePeerForId(key, sender)
    } else {
      // Unavailable destination specified with message LEAVE or EXPIRE
      // Ignore
    }
  }
}

const removePeerForId = (key, id) => {
  const hashKeys = Object.keys(hashMap)

  for (let i = 0; i < hashKeys.length; i++) {

    let attributes = hashKeys[i]

    for (let j = 0; j < hashMap[attributes].length; j++){
      if (hashMap[attributes][j] == id){
        hashMap[attributes].splice(j, 1)
        j--
      }
    }
    if (!hashMap[attributes].length) {
      delete hashMap[attributes]
    }
  }

  if (connectionStore[key] && connectionStore[key][id]) {
    numIpsConnected[connectionStore[key][id].ip]--
    delete connectionStore[key][id]
    app.emit('disconnect', id)
  }
}

app.pruneOutstandingMsgs = () => {
  let hashKeys = Object.keys(outstandingPeers)

  for (let k = 0, kk = hashKeys.length; k < kk; k += 1) {
    let key = hashKeys[k]
    let destId = Object.keys(outstandingPeers[key])

    for (let i = 0, ii = destId.length; i < ii; i += 1) {
      let offers = outstandingPeers[key][destId[i]];
      let seen = {}

      for (let j = 0, jj = offers.length; j < jj; j += 1) {
        let message = offers[j]

        if (!seen[message.originId]) {
          app.forwardToPeer(key, {
            tag: messages.LEAVE, 
            originId: message.destId, 
            destId: message.originId
          })
          seen[message.originId] = true
        }
      }
    }
    outstandingPeers[key] = {}
  }
}

app.proOutstandingMsgs = (key, id) => {
  let offers = outstandingPeers[key][id]
  if (!offers) {
    return
  }
  for (let j = 0, jj = offers.length; j < jj; j += 1) {
    app.forwardToPeer(key, offers[j])
  }
  delete outstandingPeers[key][id]
}

app.setCleanupIntervals = () => {

  // Clean up ips every 10 minutes
  setInterval(() => {
    let ipKeys = Object.key(numIpsConnected)

    for (let i = 0, ii = ipKeys.length; i < ii; i += 1) {
      let ip = ipKeys[i]

      if (numIpsConnected[ip] === 0) {
        delete numIpsConnected[ip]
      }
    }
  }, 600000)

  // Clean up outstanding messages every 5 seconds
  setInterval(() => {
    app.pruneOutstandingMsgs()
  }, 5000)
}

app.options = {
  debug: false,
  timeout: 5000,
  key: 'peerjs',
  ip_limit: 5000,
  concurrent_limit: 80000,
  port: 9000
}

let port = app.options.port

app.on('mount', () => {
  app.setCleanupIntervals()
})

hserver.listen(port)

let host = hserver.address().address
port = hserver.address().port

console.log('Started PeerServer on %s, port: %s, path: /', host, port)
