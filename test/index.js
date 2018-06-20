const { 
  hserver,
  app,
  connectionStore,
  numIpsConnected,
  removePeerForId,
  outstandingPeers,
} = require('../')
const expect = require('expect.js')
const sinon = require('sinon')
const messages =  require('../lib/messages')

describe('PeerServer', () => {
  describe('method', () => {
    let p

    before(() => {
      p = hserver.listen({port: 9000})
    })

    describe('confirmKey', () => {

      it('should accept valid hostame/ip pairs', (done) => {
        app.confirmKey('https://github.com/odusanya18', '127.0.0.1', (response) => {
          expect(response).to.be(null)
          done()
        })
      })

      it('should reject ips that have reached max connections', (done) => {
        app.options.ip_limit = 0
        app.confirmKey('https://github.com/odusanya18', '127.0.0.1', (response) => {
          expect(response).to.be('127.0.0.1 reached its concurrency limit')
          done()
        })
      })

      it('should reject when the server has reached max connections', (done) => {
        app.options.concurrent_limit = 0
        app.confirmKey('https://github.com/odusanya18', '127.0.0.1', (response) => {
          expect(response).to.be('Server reached concurrency limit')
          done()
        })
      })
    })

    describe('removePeerForId', () => {
      before(() => {
        const fakePeer = {
          ip: '127.0.0.1',
          id: 'da37f766-9039-48ab-8394-e992f3401f33',
          key: 'https://github.com/odusanya18'
        }
        numIpsConnected[fakePeer.ip] = 1
        connectionStore[fakePeer.key] = {}
        connectionStore[fakePeer.key][fakePeer.id] = fakePeer
      })

      it('should decrement the number of ips being used and remove the connection', () => {
        expect(numIpsConnected['127.0.0.1']).to.be(1)
        removePeerForId('https://github.com/odusanya18', 'da37f766-9039-48ab-8394-e992f3401f33')
        expect(numIpsConnected['127.0.0.1']).to.be(0)
        expect(connectionStore['https://github.com/odusanya18']['da37f766-9039-48ab-8394-e992f3401f33']).to.be(undefined)
      })
    })

    describe('forwardToPeer', () => {
      const key = 'https://github.com/odusanya18'
      const id = 'da37f766-9039-48ab-8394-e992f3401f33'

      before(() => {
        connectionStore[key] = {}
      })

      it('should send to the socket when appropriate', () => {
        const send = sinon.spy()
        const write = sinon.spy()
        const message = {destId: id}

        connectionStore[key][id] = {
          socket: {
            send: send
          },
          res: {
            write: write
          }
        }
        app.forwardToPeer(key, message)
        expect(send.calledWith(JSON.stringify(message))).to.be(true)
        expect(write.calledWith(JSON.stringify(message))).to.be(false)
      })

      it('should push to outstanding messages if the destination is not found', () => {
        const message = {destId: id}
        connectionStore[key] = {}
        app.forwardToPeer(key, message)
        expect(outstandingPeers[key][id][0]).to.be(message)
      })

      it('should not push to outstanding messages if the message is a LEAVE or EXPIRE', () => {
        let message = {destId: id, tag: messages.LEAVE}
        outstandingPeers[key] = {}
        connectionStore[key] = {}
        app.forwardToPeer(key, message)
        expect(outstandingPeers[key][id]).to.be(undefined)

        message = {destId: id, tag: messages.CLOSE}
        app.forwardToPeer(key, message)
        expect(outstandingPeers[key][id]).to.be(undefined)
      })

      it('should remove the peer if there is no dst in the message', () => {
        const send = sinon.stub().throws()
        connectionStore[key][id] = {
          socket: {
            send: send
          }
        }
        var message = {tag: messages.LEAVE, originId: id}
        outstandingPeers[key] = {}
        app.forwardToPeer(key, message)
        expect(connectionStore[key][id]).to.be(undefined)
      })

      it('should remove the peer and send a LEAVE message if the socket appears to be closed', function() {
        const originId = id + '-2abs2'
        let originMessage
        const send = sinon.stub().throws()
        const message = {destId: id, originId: originId}
        const leaveMessage =  {
          tag: messages.LEAVE,
          destId: originId,
          originId: id,
          body: "Peer socket was dropped"
        }
        connectionStore[key][id] = {
          socket: {
            send: send
          }
        }
        connectionStore[key][originId] = {
          socket: {
            send: (data) => {
              originMessage = JSON.parse(data)
            }
          }
        }
        app.forwardToPeer(key, message)
        expect(originMessage).to.eql(leaveMessage)
      })
    })
  })
})
