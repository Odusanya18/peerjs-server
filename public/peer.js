/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
        /******/
            return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
                /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        var peer5 = __webpack_require__(1);
        module.exports = peer5({});

        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports) {

        module.exports = function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "/", t(0)
        }([function(e, t, n) {
            e.exports = n(124)
        }, function(e, t, n) {
            "use strict";
            var r = n(12),
                i = n(72),
                o = n(108);
            e.exports = {
                VERSION: "4.1",
                PLAYER_REQUEST_ALWAYS_HTTP: !1,
                MIMIC_REAL_HTTP_DOWNLOAD: !1,
                MIMIC_REDUCE_PARSE_TIME: 750,
                PROGRESS_MIN_REPORT_INTERVAL: 100,
                PROGRESS_MAX_FAKING_DURATION: 1e4,
                PROGRESS_MIN_REPORTED_SPEED: 3e4,
                PROGRESS_MAX_REPORTED_SPEED: 4e6,
                FETCH_ENABLED: !1,
                FETCH_INIT_WITH_HEADERS: !1,
                FETCH_SKIP_HTTP_VALIDATION: !1,
                REMOVE_QUERYSTRING_FOR_HASH: !0,
                REMOVE_WOWZA_SESSION_ID_FOR_HASH: !0,
                REPLACE_HOSTNAME_WITH_TOKEN_FOR_HASH: !0,
                HASH_ALLOWED_QUERY_PARAMETERS: [],
                REMOVE_REGEX_MATCH_FOR_HASH: null,
                REMOVE_PROTOCOL_FOR_HASH: !0,
                GROUP_BY_SUBNETS: !1,
                SUBNET_GROUPING_FIRST_BITS: 23,
                NO_P2P_SUBNETS: [],
                EVICT_INTERVAL: 5e3,
                MAX_CONNECTIONS: 15,
                MIN_CONNECTIONS: 10,
                CHUNK_SIZE: 16e3,
                BLOCK_SIZE: 12e5,
                SOCKET_RECONNECTION_INTERVAL: 3e4,
                WS_ENABLED: !0,
                WS_URL: "wss://peerhls.herokuapp.com/peerjs",
                WS_COMPRESS_SDP: !0,
                WS_IDLE_TIMEOUT: 3e5,
                DONT_SEND_SDP: !1,
                REPORT_TTL_MS: 3e5,
                GOOGLE_ANALYTICS_REPORTING: !0,
                GOOGLE_ANALYTICS_SAMPLING: .05,
                REPORT_INTERVAL: 2e4,
                REPORT_REQUEST_STATS: Math.random() < 5e-4,
                REPORT_ESTIMATION_STATS: Math.random() < 1e-4,
                REPORT_DYNAMIC_REQUEST_STATS: Math.random() < .001,
                REPORT_MAX_PLAYER_DURATIONS: 3e4,
                REPORT_PLAYER_EVENTS: Math.random() < .01,
                REPORT_PEER_STATS: Math.random() < .025,
                REPORT_BASIC_REQUEST_STATS: Math.random() < .0025,
                REPORT_PLAYLIST_URL: Math.random() < .01,
                REPORT_SEEDERS_MAP: Math.random() < .001,
                MAX_REPORTED_SIZE: 100,
                INITIAL_DL_SECS_ESTIMATION: 0,
                PARALLEL_HTTP_AND_P2P: !0,
                SEND_EMPTY_CHUNKS: !1,
                DONT_SEND_DATA: !1,
                HIGH_BUFFER_HTTP_CONSTRAINT: 1e4,
                EXTERNAL_MINIMUM_HTTP_CONSTRAINT: "auto",
                EXTERNAL_MAXIMUM_HTTP_CONSTRAINT: "auto",
                BLOCK_ALLOCATION_INTERVAL: 100,
                SET_CURRENT_SEGMENT_DURATION_FOR_CONSTRAINT: !0,
                ENABLE_HTTP_CACHE_CONTROL: !1,
                LIVE_DETECTION_WINDOW: 10,
                LIVE_DETECTION_ENABLED: !0,
                ORDER_PEERS_ALLOCATION: "window",
                CONNECT_ESTIMATION_TO_ALLOCATION: !1,
                SORT_ALLOCATION_RESOURCES_ASCENDING: !0,
                ALLOCATION_IN_REVERSE: !1,
                P2P_VOD_WINDOW: 10,
                MAX_P2P_REQUESTS: 2,
                MAX_REQUEST_CACHE_SIZE_VOD: o(314572800, window.navigator),
                MAX_REQUEST_CACHE_SIZE_LIVE: o(104857600, window.navigator),
                SKIP_JOIN: !1,
                SHORTCUT_SEGMENT_REQUESTS: !1,
                DECRYPT_ENCRYPTED_STREAMS: !1,
                DONT_PARSE_PLAYLIST: !1,
                INIT_DESTROY_ON_MASTER_PLAYLIST: !1,
                INIT_DESTROY_ON_MASTER_PLAYLIST_MAX: 10,
                DISABLE_ON_ENCRYPTED_STREAMS: !1,
                EXTERNAL_MEDIA_FALLBACK_ON_FLASH: !1,
                EXTERNAL_MEDIA_LOWBUFFER: .1,
                EXTERNAL_MEDIA_MINBUFFER: -1,
                EXTERNAL_MEDIA_MINBUFFER_LENGTH_CAPPING: -1,
                EXTERNAL_MEDIA_MAXBUFFER: 120,
                EXTERNAL_MEDIA_LIVE_START_POS: -1,
                EXTERNAL_MEDIA_MAXBUFFER_SIZE: 6e7,
                EXTERNAL_MEDIA_MANIFEST_TIMEOUT: 1e4,
                EXTERNAL_MEDIA_MANIFEST_RETRIES: 6,
                EXTERNAL_MEDIA_MANIFEST_RETRY_DELAY: 1e3,
                EXTERNAL_MEDIA_LEVEL_TIMEOUT: 1e4,
                EXTERNAL_MEDIA_LEVEL_RETRIES: 6,
                EXTERNAL_MEDIA_LEVEL_RETRY_DELAY: 1e3,
                EXTERNAL_MEDIA_FRAGMENT_TIMEOUT: 2e4,
                EXTERNAL_DYNAMIC_FRAGMENT_TIMEOUT: 2e4,
                EXTERNAL_MEDIA_FRAGMENT_RETRIES: 6,
                EXTERNAL_MEDIA_FRAGMENT_RETRY_DELAY: 500,
                EXTERNAL_MEDIA_FPS_MONITOR_PERIOD: 5e3,
                EXTERNAL_MEDIA_FPS_MONITOR_THRESHOLD: .2,
                EXTERNAL_MEDIA_HLSJS_ENABLE: !0,
                EXTERNAL_MEDIA_HLSJS_DEBUG: i.get("HLSJS_LOG_LEVEL") || !1,
                EXTERNAL_MEDIA_HLSJS_OVERRIDE: !0,
                EXTERNAL_MEDIA_MAX_BUFFER_HOLE: .5,
                EXTERNAL_MEDIA_MAX_SEEK_HOLE: 10,
                EXTERNAL_MEDIA_WATERMARK: !1,
                EXTERNAL_DISABLE_UNSUPPORTED: !0,
                EXTERNAL_ENABLE_VIDEOTAG_ANALYTICS: !1,
                EXTERNAL_ALWAYS_OVERRIDE_BW: !0,
                EXTERNAL_ENABLE_MP4: !1,
                EXTERNAL_MEDIA_MP4_SEGMENT_SIZE: 524288,
                EXTERNAL_FORCE_XHR_PLUGIN: !1,
                EXTERNAL_PREFER_HLSJS_OVER_NATIVE: !1,
                EXTERNAL_DISABLE_PLUGINS: !1,
                EXTERNAL_VIDEOTAG_SEARCH_INTERVAL: 500,
                EXTERNAL_CONSENT_PROMPT_ENABLED: !1,
                EXTERNAL_CONSENT_PROMPT_ENABLED_GEOS: null,
                EXTERNAL_CONSENT_PROMPT_PRIVACY_POLICY: "/privacy-policy",
                EXTERNAL_CONSENT_PROMPT_TOS: "/terms-of-service",
                MEDIA_BUFFER_INTERVAL: 2e3,
                DISABLE_ABR_CONFIGURE: !1,
                INITIAL_P2P_SLOTS: 2,
                MINIMUM_P2P_SLOTS: 1,
                ADD_SLOT_LOADED_REQUESTS_THRESHOLD: 3,
                REDUCE_SLOT_ABORTS_THRESHOLD: 2,
                TIME_ESTIMATION_LIST_LENGTH: 5,
                ZIXI_DIGEST: !1,
                LIVE_SECONDS_DELAY: r.randomOffset(10, 35, 5),
                MAX_AUTOMATIC_DELAY: 35,
                DELAY_DASH: !0,
                MIN_NUMBER_OF_REMAINING_SEGMENTS: 3,
                SEGMENTS_AFTER_PRUNE: 3,
                ALWAYS_DELAY_MANIFEST: !1,
                USE_PEER_PRIORITIZER: !1,
                FEATURE_PRUNE_SEGMENTS_FROM_START: !1,
                FEATURE_PRE_PLAY_PREFETCH: !0,
                SEGMENTS_TO_PREFETCH_BEFORE_PLAY: 10,
                STOP_PREFETCH_AFTER_SECONDS: 60,
                PLAYER_SEGMENTS_BUFFER: 3,
                PREFETCH_LIVE_INTERVAL_MS: 2e3,
                PRELOAD_HIGHEST_RENDITION: !1,
                MAX_REBUFFER_DURATION: 18e4,
                SPEED_SMOOTH_FACTOR: .1,
                SPEED_FACTOR: 1,
                PLAYLIST_METATDATA_AREA: 3e3,
                PLAYLIST_TYPE_DETECTION_AREA: 1e3,
                PAGE_URL_ALLOWED_QUERY_PARAMETERS: [],
                PAGE_URL_STRIP_REGEX: null,
                PAGE_URL_STRIP_HASH: !0,
                PLAYLIST_URL_ALLOWED_QUERY_PARAMETERS: [],
                PLAYLIST_URL_STRIP_REGEX: null,
                FEATURE_WS_HEARTBEAT: !1,
                FEATURE_WS_HEARTBEAT_INTERVAL: 5e3,
                FEATURE_WS_HEARTBEAT_ELAPSED: 6e4,
                LOG_LEVEL: i.get("LOG_LEVEL") || 0,
                TRACK_REPORT_LEVEL: 1,
                TRACK_PLAYER_EVENTS_MAX: 16,
                SENTRY_APP_URL: "https://a9e5ea6c873c451cbc2da95cbdb1e74e@app.getsentry.com/78409",
                SENTRY_THROTTLE_FACTOR: .01,
                SENTRY_MAX_BREADCRUMBS: 100,
                EXTERNAL_XHR_FALLBACK: Math.random() < .01,
                A_B_TEST_TOGETHER: !1,
                LEECH: !1,
                BUFFER_LENGTH_LEECH_LOW_SEC: 0,
                LEECH_ON_METERED: !0,
                A_B_TEST: {},
                A_B_SLOTS: 0,
                DYNAMIC_CONFIG: !0,
                STATS_RECENT_QUERY_AGE: 15e3,
                STATS_RECENT_MAX_AGE: 12e4,
                EXTERNAL_STATS_ENABLE_OVERLAY: !1,
                EXTERNAL_JW_MUX_PLUGIN: !1,
                PC_AVAILABLE_THRESHOLD: .5,
                MIN_AVAILABLE_CHUNKS_THRESHOLD: 6,
                PC_REQUESTS_DROPPED_THRESH: 20,
                PC_MINIMUM_WINDOW: 0,
                PC_MAX_PENDING_CHUNKS_LIMIT: 100,
                PC_MAX_PENDING_CHUNKS_START: 2,
                PC_MAX_PENDING_CHUNKS_INCR: 1,
                PC_CHUNK_EXPIRATION_TIMEOUT: 4e3,
                PC_WINDOW_BY_DURATION: !0,
                PC_WINDOW_DURATION_GOAL_RATIO: .75,
                PC_REQUEST_GOAL_ESTIMATION: !1,
                PC_WINDOW_INCREASE_DURATION_RATIO: .5,
                NEW_PEER_THRESHOLD: 6,
                PC_STUN_SERVERS: ["stun:stun.l.google.com:19302"],
                PC_CONNECTION_TIMEOUT: 3e4,
                PC_MAX_RECONNECT_ATTEMPT: 4,
                PC_LIMITER_MIN_AMOUNT: 200,
                PC_LIMITER_FAIL_RATIO: .95,
                PC_BATCH_SDP_COUNT: 4,
                PC_STATS_INTERVAL: 5e3,
                PC_MOCK: !1,
                PC_FAIL_RATIO: .66,
                DUD_PEER: !1,
                WEBRTC_TEMASYS_SUPPORT: !1,
                FRESH_RTCPEERCONNECTION: !1,
                DC_CHECK_BUFFER: !0,
                DC_SEND_QUEUE: !0,
                DC_ORDERED: !1,
                DC_MAX_BUFFERED_AMOUNT: 15728640,
                REPORT_SENTRY_ON_REQUEST_ERROR: !1,
                REPORT_SENTRY_ON_NATIVE_FALLBACK: !1,
                PC_CHUNK_MAX_CHUNK_EXPIRATION: 4e3,
                PC_CHUNK_EXPIRATION_TIMEOUT_DELTA: 500,
                COMPUTED_MAXIMUM_HTTP_CONSTRAINT_ALPHA: 5e3,
                COMPUTED_MINIMUM_HTTP_CONSTRAINT_ALPHA: 1e3,
                COMPUTED_MINIMUM_CONSTRAINT_SINGLE_RENDITION: 6e3,
                ADJUST_CONSTRAINT_BY_RENDITION_COUNT: !0,
                defaults: {
                    EXTERNAL_MINIMUM_HTTP_CONSTRAINT: 21e3,
                    EXTERNAL_MAXIMUM_HTTP_CONSTRAINT: 25e3,
                    PC_CHUNK_EXPIRATION_TIMEOUT: 4e3
                }
            }
        }, function(e, t, n) {
            (function(t) {
                "use strict";

                function r(e, t, n) {
                    n ? console[e](t, n) : console[e](t)
                }

                function i(e, t) {
                    var n = d;
                    return n += "string" != typeof e ? JSON.stringify(e) : e, t && (n += " " + t), n
                }

                function o(e) {
                    var t = e;
                    return "string" == typeof e && (t = {
                        message: e
                    }), t.lastPlayerEvents = h, t
                }

                function s(e, t, n) {
                    p[l[e]]++;
                    var s = i(t, n);
                    u.trackBreadcrumb(s);
                    var c = a.LOG_LEVEL;
                    if (!(e > a.TRACK_REPORT_LEVEL && e > c)) switch (e) {
                        case 1:
                            a.TRACK_REPORT_LEVEL >= 1 && u.trackError(n, o(t)), c >= 1 && r("error", s, n);
                            break;
                        case 2:
                            a.TRACK_REPORT_LEVEL >= 2 && u.trackWarning(n, o(t)), c >= 2 && r("warn", s, n);
                            break;
                        case 3:
                            c >= 3 && r("info", s, n);
                            break;
                        default:
                            throw new Error("internal")
                    }
                }
                var a = n(1),
                    u = n(43),
                    c = n(72),
                    l = ["none", "error", "warn", "info"],
                    d = "[peer5] > ",
                    f = {},
                    p = {
                        error: 0,
                        warn: 0,
                        info: 0
                    },
                    h = [];
                f.setLogLevel = function(e) {
                    a.LOG_LEVEL = e, c.set("LOG_LEVEL", e), window.peer5.emit("log-level", e)
                }, f.logPlayerEvent = function(e) {
                    for (; h.length >= a.TRACK_PLAYER_EVENTS_MAX;) h.shift();
                    h.push([Date.now(), e])
                }, f.info = function(e) {
                    s(3, e)
                }, f.warn = function(e, t) {
                    s(2, e, t)
                }, f.error = function e(t, e) {
                    s(1, t, e)
                }, f.getMetrics = function() {
                    return p
                }, ["setLogLevel", "info", "warn", "error"].forEach(function(e) {
                    t[e] = f[e]
                }), e.exports = f
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";

            function r() {}

            function i(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function o(e, t, n, r, o) {
                if ("function" != typeof n) throw new TypeError("The listener must be a function");
                var s = new i(n, r || e, o),
                    a = c ? c + t : t;
                return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], s] : e._events[a].push(s) : (e._events[a] = s, e._eventsCount++), e
            }

            function s(e, t) {
                0 === --e._eventsCount ? e._events = new r : delete e._events[t]
            }

            function a() {
                this._events = new r, this._eventsCount = 0
            }
            var u = Object.prototype.hasOwnProperty,
                c = "~";
            Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (c = !1)), a.prototype.eventNames = function() {
                var e, t, n = [];
                if (0 === this._eventsCount) return n;
                for (t in e = this._events) u.call(e, t) && n.push(c ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }, a.prototype.listeners = function(e) {
                var t = c ? c + e : e,
                    n = this._events[t];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var r = 0, i = n.length, o = new Array(i); r < i; r++) o[r] = n[r].fn;
                return o
            }, a.prototype.listenerCount = function(e) {
                var t = c ? c + e : e,
                    n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }, a.prototype.emit = function(e, t, n, r, i, o) {
                var s = c ? c + e : e;
                if (!this._events[s]) return !1;
                var a, u, l = this._events[s],
                    d = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0), d) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, n), !0;
                        case 4:
                            return l.fn.call(l.context, t, n, r), !0;
                        case 5:
                            return l.fn.call(l.context, t, n, r, i), !0;
                        case 6:
                            return l.fn.call(l.context, t, n, r, i, o), !0
                    }
                    for (u = 1, a = new Array(d - 1); u < d; u++) a[u - 1] = arguments[u];
                    l.fn.apply(l.context, a)
                } else {
                    var f, p = l.length;
                    for (u = 0; u < p; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d) {
                        case 1:
                            l[u].fn.call(l[u].context);
                            break;
                        case 2:
                            l[u].fn.call(l[u].context, t);
                            break;
                        case 3:
                            l[u].fn.call(l[u].context, t, n);
                            break;
                        case 4:
                            l[u].fn.call(l[u].context, t, n, r);
                            break;
                        default:
                            if (!a)
                                for (f = 1, a = new Array(d - 1); f < d; f++) a[f - 1] = arguments[f];
                            l[u].fn.apply(l[u].context, a)
                    }
                }
                return !0
            }, a.prototype.on = function(e, t, n) {
                return o(this, e, t, n, !1)
            }, a.prototype.once = function(e, t, n) {
                return o(this, e, t, n, !0)
            }, a.prototype.removeListener = function(e, t, n, r) {
                var i = c ? c + e : e;
                if (!this._events[i]) return this;
                if (!t) return s(this, i), this;
                var o = this._events[i];
                if (o.fn) o.fn !== t || r && !o.once || n && o.context !== n || s(this, i);
                else {
                    for (var a = 0, u = [], l = o.length; a < l; a++)(o[a].fn !== t || r && !o[a].once || n && o[a].context !== n) && u.push(o[a]);
                    u.length ? this._events[i] = 1 === u.length ? u[0] : u : s(this, i)
                }
                return this
            }, a.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = c ? c + e : e, this._events[t] && s(this, t)) : (this._events = new r, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = c, a.EventEmitter = a, e.exports = a
        }, function(e, t) {
            e.exports = {
                core: {
                    apis: {},
                    dataStructures: {},
                    data: {},
                    controllers: {},
                    util: {}
                },
                client: {},
                state: {}
            }
        }, function(e, t) {
            "use strict";

            function n() {
                function e() {
                    var e = r() - o;
                    return e < 0 ? 0 : e
                }

                function t() {
                    return "Stopwatch(" + e() + "ms)"
                }

                function n() {
                    return o
                }
                var i = Object.create(null),
                    o = r();
                return i.elapsed = e, i.toString = t, i.epoch = n, i
            }
            var r = function() {
                return Math.floor(performance.now())
            };
            e.exports = n, e.exports.now = r
        }, function(e, t, n) {
            (function(t) {
                "use strict";

                function r() {
                    function e(e, t) {
                        $[e] && $[e](t)
                    }

                    function r(e) {
                        X[e] = {
                            p2pDown: 0,
                            p2pUp: 0,
                            p2pWaste: 0,
                            httpDown: 0,
                            httpWaste: 0,
                            preloadDown: 0
                        }
                    }

                    function d(e, t) {
                        X[e] || r(e);
                        for (var n in t) !n in X["*"] || (X["*"][n] += t[n], X[e][n] += t[n])
                    }

                    function f(e) {
                        var t = e || "*",
                            r = {};
                        for (var i in X[t]) r[i] = X[t][i];
                        for (var i in B) r[i] = B[i];
                        return r.numOfPeers = n(22).numOfConnectedPeers, r
                    }

                    function p(e) {
                        return s.getPredictedSpeed(e) || V || z || s.getSpeed(e) || 0
                    }

                    function h(e) {
                        q.addDimension("cdn", e)
                    }

                    function g() {
                        return q.build()
                    }

                    function v(e, t) {
                        X[e] && (Object.keys(t).forEach(function(n) {
                            X[e][n] = (X[e][n] || 0) + t[n]
                        }), Q.sum(t))
                    }

                    function E(e) {
                        Q.sum(e)
                    }

                    function _(e) {
                        Q.max(e)
                    }

                    function m(e) {
                        Q.average(e)
                    }

                    function T(e) {
                        Q.sumRecent(e)
                    }

                    function R(e) {
                        Q.averageRecent(e)
                    }

                    function S(e) {
                        return Q.getStats(e)
                    }

                    function y(e, t) {
                        s.onProgress(e, t)
                    }

                    function P(e) {
                        var n = s.getPredictedSpeed(e),
                            r = s.getSpeed(e);
                        r > 0 && (z = r, q.addMetric("actual", r), t.info("last http speed for " + e + " updated to: " + r)), n > 0 && (V = n, q.addMetric("predicted", n), t.info("last http predicted speed for " + e + " updated to: " + n))
                    }

                    function A(e, t) {
                        delete X[e], delete X[t], s.removeResource(e)
                    }

                    function w(e) {
                        X[e].end = X[e].start.elapsed(), P(e)
                    }

                    function I(e) {
                        s.removeResource(e)
                    }

                    function O(e) {
                        Y[e] = (Y[e] || 0) + 1
                    }

                    function b() {
                        if (0 !== Object.keys(Y).length) return a({}, Y)
                    }

                    function N(e) {
                        K[e] = (K[e] || 0) + 1
                    }

                    function C() {
                        if (0 !== Object.keys(K).length) return a({}, K)
                    }

                    function L(e) {
                        a(G, e)
                    }

                    function M() {
                        return a({}, G)
                    }

                    function D() {
                        return Object.keys(W).reduce(function(e, t) {
                            return e[t] = a({}, W[t]), e
                        }, {})
                    }

                    function k() {
                        radio("resourceAdded").subscribe([function(e) {
                            X[e] || r(e), X[e].start = u(), X[e].startBufferHealth = Math.round(1e3 * t.core.apis.MediaFetcher.mediaController.getBufferLength())
                        }]), radio("external.player").subscribe([function(e) {
                            J.processEvent(e.action), F.indexOf(e.action) !== -1 && L({
                                lastPlayerEvent: e.action,
                                sinceLastPlayerEvent: u()
                            }), "load.end" === e.action && e.duration > 0 && Q.average({
                                loadTime: e.duration
                            }), void 0 !== B[e.action] && "number" == typeof e.duration ? B[e.action].push(e.duration) : "fps.drop" === e.action && (j.push(e.value), e.value && Q.sum({
                                totalFPSDrop: e.value
                            }))
                        }]), radio("player.attach").subscribe([function(e) {
                            function t(t, n) {
                                e.on(t, n), x.push(function() {
                                    e.off(t, n)
                                })
                            }
                            Object.keys(B).forEach(function(e) {
                                function n(t) {
                                    "load.end" === e && t.duration > 0 && Q.average({
                                        loadTime: t.duration
                                    }), B[e].push(t.duration)
                                }
                                t(e, n)
                            }), F.forEach(function(e) {
                                t(e, function() {
                                    J.processEvent(e), L({
                                        lastPlayerEvent: e,
                                        sinceLastPlayerEvent: u()
                                    })
                                })
                            }), t("fps.drop", function(e) {
                                j.push(e.value)
                            }), t("fps.drop.raw", function(e) {
                                Q.sum({
                                    totalFPSDrop: e.value || 0
                                })
                            }), t("bitsDecoded", function(e) {
                                if (e.value) {
                                    Q.sum({
                                        totalBitsDecoded: e.value
                                    });
                                    var t = J.getTotalDurations();
                                    L({
                                        avgBitrate: 1e3 * Math.round(Q.getStats().totalBitsDecoded / t.play) || 0
                                    })
                                }
                            }), t("media.info", function(e) {
                                L(e)
                            }), t("error", function(e) {
                                e.action && "error" === e.action && (W[e.source] = W[e.source] || {}, W[e.source][e.code] = (W[e.source][e.code] || 0) + 1)
                            })
                        }]), radio("resourceInitialized").subscribe([function(e) {
                            e.swarmId && e.url && (X[e.swarmId] && !X[e.url] ? X[e.url] = X[e.swarmId] : X[e.url] && !X[e.swarmId] ? X[e.swarmId] = X[e.url] : X[e.swarmId] || X[e.url] || (r(e.swarmId), X[e.url] = X[e.swarmId]))
                        }]), radio("request:finished").subscribe([function(e) {
                            "http" === e.type && q.addMetric("latency", e.latency)
                        }])
                    }

                    function H() {
                        var e = f();
                        return e.totalP2PDownloaded = e.p2pDown, e.totalP2PUploaded = e.p2pUp, e.totalP2PWaste = e.p2pWaste, e.totalHttpDownloaded = e.httpDown, e.totalHttpWaste = e.httpWaste, e
                    }

                    function U() {
                        x.forEach(function(e) {
                            e()
                        })
                    }
                    var x = [],
                        q = l(),
                        B = {
                            "load.end": [],
                            "seek.end": [],
                            "rebuffer.end": []
                        },
                        F = ["ready", "load.start", "load.end", "pause.start", "pause.end", "rebuffer.start", "rebuffer.end", "seek.start", "seek.end"],
                        G = {},
                        j = [],
                        z = 0,
                        V = 0,
                        X = {},
                        W = {},
                        Y = {},
                        K = {},
                        Q = i(),
                        J = o(),
                        Z = c(),
                        $ = {
                            "peer-pool": function(e) {
                                e.on("peer:connecting", function(e) {
                                    Z.onPeerConnecting(e.peerId)
                                }), e.on("peer:open", function(e) {
                                    Z.onPeerOpen(e.peerId)
                                }), e.on("peer:close", function(e) {
                                    Z.onPeerClose(e.peerId)
                                })
                            }
                        };
                    return r("*"), k(), {
                        setStats: d,
                        getStats: f,
                        getSpeed: p,
                        sum: v,
                        sumGlobal: E,
                        maxGlobal: _,
                        avgGlobal: m,
                        sumRecentGlobal: T,
                        averageRecentGlobal: R,
                        getGlobalStats: S,
                        getSpeedReport: g,
                        setCDNDimension: h,
                        removeResource: A,
                        stopResource: I,
                        trackHttpSpeed: y,
                        publicGetStats: H,
                        getTotalDurations: J.getTotalDurations,
                        countNetworkError: O,
                        getNetworkErrors: b,
                        countMemoryError: N,
                        getMemoryErrors: C,
                        setMediaInfo: L,
                        getMediaInfo: M,
                        getMediaErrors: D,
                        getPeerConnectionAttemptsPerAttempt: Z.getPeerConnectionAttemptsPerAttempt,
                        getPeerAttempts: Z.getPeerAttempts,
                        getPeerConnectionAttemptsSummary: Z.getPeerConnectionAttemptsSummary,
                        attachMonitor: e,
                        trackResourceCompletion: w,
                        destroy: U
                    }
                }
                var i = n(161),
                    o = n(156),
                    s = n(46),
                    a = n(7),
                    u = n(5),
                    c = n(158),
                    l = n(26),
                    d = r();
                e.exports = d
            }).call(t, n(4))
        }, function(e, t) {
            "use strict";

            function n(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }

            function r() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    var r = Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    });
                    if ("0123456789" !== r.join("")) return !1;
                    var i = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                        i[e] = e
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                } catch (e) {
                    return !1
                }
            }
            var i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable;
            e.exports = r() ? Object.assign : function(e, t) {
                for (var r, a, u = n(e), c = 1; c < arguments.length; c++) {
                    r = Object(arguments[c]);
                    for (var l in r) o.call(r, l) && (u[l] = r[l]);
                    if (i) {
                        a = i(r);
                        for (var d = 0; d < a.length; d++) s.call(r, a[d]) && (u[a[d]] = r[a[d]])
                    }
                }
                return u
            }
        }, function(e, t) {
            "use strict";
            e.exports = window.XMLHttpRequest, e.exports.__KEEP__ = !0
        }, function(e, t) {
            "use strict";

            function n(e, n, r) {
                this.tag = t.P2P_DATA, this.requestId = e, this.chunkId = n, this.payload = r
            }

            function r(e, n, r) {
                this.tag = t.P2P_REQUEST, this.requestId = e, this.swarmId = n, this.chunkIds = r
            }

            function i(e, n, r, i) {
                this.tag = t.P2P_HAVE, this.swarmId = e, this.hashUrl = n, this.filesize = r, this.availabilityMap = i
            }

            function o(e, n) {
                this.tag = t.P2P_DONT_HAVE, this.swarmId = e, this.hashUrl = n
            }

            function s(e, n, r) {
                this.tag = t.P2P_DOWNLOADING, this.swarmId = e, this.hashUrl = n, this.filesize = r
            }

            function a(e) {
                this.tag = t.P2P_NEW_SEGMENT, this.segSeq = e
            }

            function u(e) {
                this.tag = t.P2P_INITIALIZING, this.hashUrl = e
            }

            function c(e, n, r, i, o, s) {
                this.tag = t.FILE_INFO, this.swarmId = e, this.size = n, this.hash = r, this.hashes = i, this.blockSize = o, this.url = s
            }

            function l(e) {
                this.tag = t.JOIN, this.swarmId = e
            }

            function d(e) {
                this.tag = t.ASK_FOR_PEERS, this.swarmId = e
            }

            function f(e) {
                this.tag = t.HAVE_SWARM, this.swarmId = e
            }

            function p(e) {
                this.tag = t.LEAVE, this.swarmId = e
            }

            function h(e) {
                this.tag = t.GROUP_REPORT, this.body = e
            }

            function g() {
                this.tag = t.HEARTBEAT
            }

            function v(e, n, r) {
                this.tag = t.GROUP_SDP, this.originId = e, this.destId = n, this.sdp = r
            }

            function E(e) {
                this.tag = t.AB_CONFIG, this.conf = e
            }

            function _(e) {
                this.tag = t.UPDATE_PLAYLIST, this.url = e
            }

            function m(e) {
                this.tag = t.SESSION_REPORT, this.body = e
            }
            t.SWARM_NOT_FOUND = 0, t.P2P_DATA = 17, t.P2P_REQUEST = 18, t.P2P_HAVE = 20, t.P2P_DONT_HAVE = 22, t.P2P_DOWNLOADING = 26, t.P2P_NEW_SEGMENT = 27, t.P2P_INITIALIZING = 28, t.FILE_INFO = 34, t.JOIN = 36, t.LEAVE = 37, t.CLOSE = 38, t.GROUP_REPORT = 51, t.GROUP_MATCH = 52, t.HEARTBEAT = 57, t.GROUP_SDP = 61, t.AB_CONFIG = 62, t.SESSION_REPORT = 63, t.INFO_UPDATE_FROM_SERVER = 64, t.UPDATE_PLAYLIST = 65, t.ASK_FOR_PEERS = 66, t.HAVE_SWARM = 67, t.DataMessage = n, t.RequestMessage = r, t.HaveMessage = i, t.DontHaveMessage = o, t.DownloadingMessage = s, t.NewSegmentMessage = a, t.InitializingMessage = u, t.FileInfoMessage = c, t.JoinMessage = l, t.LeaveMessage = p, t.GroupReportMessage = h, t.HeartbeatMessage = g, t.GroupSdpMessage = v, t.ABConfigMessage = E, t.SessionReport = m, t.UpdatePlaylistMessage = _, t.AskForPeersMessage = d, t.HaveSwarmMessage = f
        }, function(e, t, n) {
            "use strict";
            var r = n(13),
                i = n(49);
            e.exports = function(e) {
                var t = r.swarmId(e);
                return i.hash(t)
            }
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    if ("auto" !== i.EXTERNAL_MAXIMUM_HTTP_CONSTRAINT) return Number(i.EXTERNAL_MAXIMUM_HTTP_CONSTRAINT);
                    if (!o) return i.defaults.EXTERNAL_MAXIMUM_HTTP_CONSTRAINT;
                    var e = 2 * o + i.COMPUTED_MAXIMUM_HTTP_CONSTRAINT_ALPHA;
                    if (1 === s && i.ADJUST_CONSTRAINT_BY_RENDITION_COUNT) {
                        var t = o + i.COMPUTED_MAXIMUM_HTTP_CONSTRAINT_ALPHA;
                        return Math.min(e, t)
                    }
                    return e
                }

                function t() {
                    if ("auto" !== i.EXTERNAL_MINIMUM_HTTP_CONSTRAINT) return Number(i.EXTERNAL_MINIMUM_HTTP_CONSTRAINT);
                    if (!o) return i.defaults.EXTERNAL_MINIMUM_HTTP_CONSTRAINT;
                    var t = 2 * o + i.COMPUTED_MINIMUM_HTTP_CONSTRAINT_ALPHA;
                    if (1 === s && i.ADJUST_CONSTRAINT_BY_RENDITION_COUNT) {
                        var n = o + i.COMPUTED_MINIMUM_HTTP_CONSTRAINT_ALPHA,
                            r = Math.max(n, i.COMPUTED_MINIMUM_CONSTRAINT_SINGLE_RENDITION);
                        return Math.min(r, t, e())
                    }
                    return t
                }

                function n(e) {
                    o = e
                }

                function r(e) {
                    s = e
                }
                var o = null,
                    s = null;
                return {
                    max: e,
                    min: t,
                    setSegmentLength: n,
                    setRenditionCount: r
                }
            }
            var i = n(1);
            e.exports = r(), e.exports.factory = r
        }, function(e, t) {
            "use strict";

            function n(e) {
                return Math.floor((Math.sqrt(1 + 8 * e) - 1) / 2)
            }
            var r = {};
            r.randomOffset = function(e, t, r) {
                var i = Math.floor(1 + (t - e) / r),
                    o = (i + 1) * i / 2,
                    s = Math.floor(Math.random() * o);
                return n(s) * r + e
            }, r.getRandomIntInclusive = function(e, t) {
                return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
            }, e.exports = r
        }, function(e, t, n) {
            function r(e, t) {
                t = t || [];
                var n = e.split("&"),
                    r = n.filter(function(e) {
                        var n = e.split("=")[0];
                        return t.indexOf(n) > -1
                    });
                return r.join("&")
            }
            var i = n(1),
                o = n(29),
                s = n(52),
                a = n(15),
                u = n(25);
            t.zixi = function(e) {
                var t, n = e.indexOf("hlsid=HLS_"),
                    r = e.indexOf("interstream");
                if (n !== -1 && r !== -1) {
                    e = e.replace(":80/", "/");
                    var i = e.split("?"),
                        o = i[0] + "?",
                        s = i[1].split("&"),
                        a = s[0].indexOf("interstream"),
                        u = s[0].substring(0, a + 13) + "1&",
                        c = s[1] + "&",
                        l = s[2].indexOf("hlsid=HLS"),
                        d = s[2].substring(0, l) + "hlsid=HLS_1";
                    t = [o, u, c, d].join("")
                } else t = e;
                return t
            }, t.urlWithAllowedKeys = function(e, t) {
                var n = e.indexOf("?");
                if (n !== -1) {
                    var i = e.substring(0, n),
                        o = e.substring(n + 1),
                        s = r(o, t);
                    return s ? i + "?" + s : i
                }
                return e
            }, t.swarmId = function(e) {
                var n, r = e,
                    c = "|peer5|";
                if (r.indexOf(c) !== -1) {
                    var l = r.split(c);
                    r = l[0], n = l[1]
                }
                return s.params.replacer && (r = s.params.replacer(r)), s.params.id && s.params.urlRegex && (r = r.replace(s.params.urlRegex, s.params.id)), i.REMOVE_QUERYSTRING_FOR_HASH === !0 && (r = t.urlWithAllowedKeys(r, i.HASH_ALLOWED_QUERY_PARAMETERS)), i.REMOVE_WOWZA_SESSION_ID_FOR_HASH === !0 && (r = o.removeWowzaSessionTokens(r)), i.REPLACE_HOSTNAME_WITH_TOKEN_FOR_HASH === !0 && (r = a.replaceHostWithStr(r, u())), i.REMOVE_PROTOCOL_FOR_HASH === !0 && (r = a.removeProtocol(r, "")), i.REMOVE_REGEX_MATCH_FOR_HASH && (r = r.replace(i.REMOVE_REGEX_MATCH_FOR_HASH, "")), n && (r = r + c + n), r
            }
        }, function(e, t) {
            "use strict";
            e.exports = {
                HYBRID: 1,
                P2P: 2,
                HTTP: 3,
                DYNAMIC: 4
            }
        }, function(e, t, n) {
            "use strict";
            var r = /^[a-zA-Z0-9]+:(?=\/\/)/,
                i = n(186);
            t.getAbsoluteURL = i(function(e, t) {
                "/" === e.charAt(0) && "/" === e.charAt(1) && (e = window.location.protocol + e);
                var n = new URL(t, e || window.location.href);
                return n.hash = "", n.toString()
            }, 15e3), t.normalizeUrl = function(e) {
                var t = new URL(e, window.location.href);
                return t.hash = "", t.toString()
            }, t.removeKeysFromQuery = function(e, t) {
                var n = e.indexOf("?"),
                    r = e.indexOf("#");
                if (!e || !t || !t.length || n === -1 || r > 0 && r < n) return e;
                var i = e.substring(0, n),
                    o = e.substring(n + 1, r !== -1 ? r : e.length),
                    s = r !== -1 ? e.substring(r + 1) : "",
                    a = o.split("&").filter(function(e) {
                        var n = e.split("=");
                        return t.indexOf(decodeURIComponent(n[0])) === -1
                    }).join("&");
                return i + (a ? "?" + a : "") + (s ? "#" + s : "")
            }, t.replaceHostWithStr = function(e, t) {
                return t + e.substring(e.indexOf("/", "https://".length))
            }, t.removeProtocol = function(e) {
                return e.replace(r, "")
            }, t.getQueryParameter = function(e, t) {
                t = t.replace(/[\[\]]/g, "\\$&");
                var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
                    r = n.exec(e);
                return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
            }
        }, function(e, t, n) {
            (function(t) {
                function r() {
                    return Math.round(1e3 * t.core.apis.MediaFetcher.mediaController.getBufferLength())
                }
                n(47);
                var i = n(14),
                    o = n(21),
                    s = n(6),
                    a = n(40),
                    u = n(8),
                    c = n(15),
                    l = n(1),
                    d = n(151),
                    f = n(152),
                    p = n(153)(),
                    h = n(23),
                    g = n(6),
                    v = n(2),
                    E = n(5),
                    _ = n(189),
                    m = n(190),
                    T = n(64),
                    R = n(26),
                    S = n(10),
                    y = "﻿",
                    P = i.HYBRID,
                    A = i.P2P,
                    w = i.HTTP,
                    I = i.DYNAMIC,
                    O = 0,
                    b = Object.subClass({
                        ctor: function(e) {
                            try {
                                this.readyState = 0, this.response, this._headers = [], this.responseText = null, this.responseType = "", this._switchedToHttp = !1, this.timeout = 0, this.status, this._url, this._method, this.withCredentials = !1, this.size = 0, this._meta = {}, e = this.sanitizeCtorArgs(e), this.downloadMode = e.downloadMode, this.origin = e.origin || "none", this._responseHeadersMap = Object.create(null), this._responseHeadersMap.server = "peer5", this._forceHttp = !1, this._startStopper = E(), this._progressManager = f(), this._progressData = {
                                    loadedHTTP: 0,
                                    loadedP2P: 0
                                }, this._constraint, this.onloadstart, this.onprogress, this.onabort, this.onerror, this.onload, this.ontimeout, this.onloadend, this.onreadystatechange, this.onswarmstatechange, this.report = R(), this.report.addDimension("requestId", O++), this.eventListeners = Object.create(null), this._resetAllEventListeners(), this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4
                            } catch (e) {
                                throw v.error("basicRequest ctor", e), e
                            }
                        },
                        getSpeed: function() {
                            try {
                                var e = this._getDownloadSpeed(this._url),
                                    t = l.SPEED_FACTOR;
                                return t && (e *= t), e
                            } catch (e) {
                                throw v.error("basicRequest.getSpeed", e), e
                            }
                        },
                        open: function(e, t) {
                            try {
                                if (t = c.normalizeUrl(t), this._method = e && e.toUpperCase(), !this._method) return v.error("Request was opened with no method"), !1;
                                if ("GET" === this._method && t) this._url = t;
                                else {
                                    if (!this.isCatchAllRequest) return this._url = t, v.error("Request opened with invalid method"), !1;
                                    this._url = t
                                }
                                if (this.changeReadyState(1), !this.isMethodSupported(this._method)) return this.fallbackToNative();
                                this._hashUrl = S(this._url), this.report.addDimension("hashUrl", this._hashUrl)
                            } catch (e) {
                                throw v.error("basicRequest.open", e), e
                            }
                        },
                        setResponseHeaders: function(e) {
                            Object.keys(e).forEach(function(t) {
                                this._responseHeadersMap[t.toLowerCase()] = e[t]
                            }, this), this.readyState < 2 && (this.status = 200, this.changeReadyState(2))
                        },
                        setContentLengthHeaderFromSize: function(e) {
                            var t = "content-length";
                            this._responseHeadersMap[t] || this.setResponseHeaders({
                                "content-length": e
                            })
                        },
                        HTTPHeadersReceivedEvent: function(e, t) {
                            this.setResponseHeaders(e), t && !this.size && (this.size = t)
                        },
                        forceImmediateLoad: function(e) {
                            t.client.bypassServer(this, e)
                        },
                        setRequestHeader: function(e, t) {
                            if (0 === this.readyState) throw new DOMException("XMLHttpRequest state must be OPENED.");
                            if (this._sent === !0) throw new DOMException("XMLHttpRequest state must be sending.");
                            this._headers.push({
                                key: e,
                                value: t
                            })
                        },
                        send: function() {
                            this._sent = !0;
                            try {
                                if (!t.clientInstance.isValidated()) {
                                    var e = this.fallbackToNative();
                                    return e.send(), this.discontinue(), void v.error("Sent basic request when not supported")
                                }
                                var n = _(this._headers, "range");
                                n && (this._url = this._url + "|peer5|" + n), radio("requestSent").broadcast(this), this.report.addDimension("origin", this.origin), this.report.addDimension("downloadMode", this.downloadMode), this.report.addDimension("constraintStart", this._constraint && this._constraint()), this.report.addDimension("forceHttp", this._forceHttp), this.report.addDimension("responseType", this.responseType), "GET" === this._method && 1 === this.readyState && (this.downloadMode === I && (this.basicRequestMonitor = T(r())), this._meta = {
                                    origin: this.origin,
                                    constraint: this._constraint,
                                    forceHttp: this._forceHttp,
                                    withCredentials: this.withCredentials,
                                    httpRequestHeaders: this._headers,
                                    encryptionKey: this.key
                                }, p.addRequest(this))
                            } catch (e) {
                                if (!this._url || this._url.indexOf("chrome-extension") !== -1) return;
                                throw v.error("basicRequest.send", e), e
                            }
                        },
                        getResponseHeader: function(e) {
                            if (this.readyState < 2) throw "Response headers are available only when readystate >=2";
                            var t = this._responseHeadersMap[e.toLowerCase()];
                            return t ? t : (v.warn('Refused to get unsafe header "' + e + '"'), null)
                        },
                        getAllResponseHeaders: function() {
                            return m(this._responseHeadersMap)
                        },
                        abort: function() {
                            try {
                                this.readyState >= 1 && this.readyState < 3 && v.warn("peer5.Request::abort: aborting a request with readyState < 3: " + this.readyState + " " + this._url), v.info("peer5.Request::abort " + this.readyState + " " + this._url);
                                var e = this.createProgressEvent();
                                if (t.clientInstance.stopResource(this._url), !this.changeReadyState(4, !0)) return;
                                this.status = 0, this.report.addDimension("constraintEnd", this._constraint && this._constraint()), this.report.addDimension("age", this._startStopper.elapsed()), this.report.addDimension("status", this.status), this._triggerEvent("progress", e), this._triggerEvent("abort", e), this._triggerEvent("loadend", e), p.removeRequest(this), s.sumGlobal({
                                    requestAborts: 1
                                }), this.basicRequestMonitor && this.basicRequestMonitor.end(r(), "abort")
                            } catch (e) {
                                throw v.error("basicRequest.abort", e), e
                            }
                        },
                        addEventListener: function(e, t) {
                            this.eventListeners[e] && this.eventListeners[e].push(t)
                        },
                        removeEventListener: function(e, t) {
                            if (this.eventListeners[e]) {
                                var n = this.eventListeners[e].indexOf(t);
                                n !== -1 && this.eventListeners[e].splice(n, 1)
                            }
                        },
                        resourceInitializedEvent: function(e) {
                            this.size = e.size, this.setContentLengthHeaderFromSize(e.size), this.readyState < 2 && (this.status = 200, this.changeReadyState(2));
                            var t = e.getStats(),
                                n = Math.round((t.p2pDown + t.httpDown) / e.size * 100);
                            this.report.addDimension("resourceFillOnStart", n), this.report.addDimension("resourceFullOnStart", e.isFull), this.report.addDimension("resourceSize", e.size)
                        },
                        resourceReadyEvent: function(e) {
                            if ("GET" !== this._method) return void v.error("resourceReadyEvent with unknown method " + this._method);
                            if (this.changeReadyState(3) && 3 === this.readyState) {
                                var t = this.createProgressEvent();
                                this._triggerEvent("loadstart", t);
                                var n = e.isFull;
                                v.info("Resource " + e.url + " is ready and full=" + n)
                            }
                        },
                        httpProgressEvent: function(e) {
                            this._progressData.loadedHTTP += e;
                            var t = this.createProgressEvent();
                            this._triggerEvent("progress", t)
                        },
                        requestErrorEvent: function(e) {
                            this.handleRequestError(e)
                        },
                        sanitizeCtorArgs: function(e) {
                            switch (e || (e = Object.create(null)), e.downloadMode) {
                                case "p2p":
                                    e.downloadMode = A;
                                    break;
                                case "http":
                                    e.downloadMode = w;
                                    break;
                                case "dynamic":
                                    e.downloadMode = I;
                                    break;
                                default:
                                    e.downloadMode = P
                            }
                            return e
                        },
                        getProgressData: function() {
                            if (4 === this.readyState) {
                                var e = t.clientInstance.getLoadedStats(this._url);
                                this._progressData.loadedHTTP = e.httpDown, this._progressData.loadedP2P = e.p2pDown
                            }
                            return this._progressManager.trackProgress(this._progressData), this._progressData
                        },
                        createProgressEvent: function(e) {
                            e = e || this.getProgressData();
                            var t = d(this);
                            return t.loadedHTTP = e.loadedHTTP, t.loadedP2P = e.loadedP2P, t.loaded = e.loadedHTTP + e.loadedP2P, t.lengthComputable = Boolean(this.size), this.size && (t.total = this.size), t
                        },
                        createEvent: function() {
                            var e = {};
                            return e.currentTarget = this, e.target = this, e
                        },
                        changeReadyState: function(e, n) {
                            if (n || this.readyState === e - 1) {
                                if (4 === e && 4 === this.readyState) return v.info("request has already finished (readystate=4)"), !1;
                                if (v.info("changing readyState from " + this.readyState + " to " + e + " " + this._url), this.readyState = e, 3 === this.readyState && this.queuedCommand && t.core.util.executeFunctionByName(this.queuedCommand[0], this, [this.queuedCommand[1]]), this.size) {
                                    var r = this.createProgressEvent();
                                    this._triggerEvent("readystatechange", r)
                                } else {
                                    var i = d(this);
                                    this._triggerEvent("readystatechange", i)
                                }
                                return !0
                            }
                            return v.info("ready state has jumped a stage"), !1
                        },
                        handleRequestError: function(e) {
                            if (this.status = e, this.report.addDimension("age", this._startStopper.elapsed()), this.report.addDimension("status", this.status), p.removeRequest(this), this.changeReadyState(4, !0)) {
                                l.REPORT_SENTRY_ON_REQUEST_ERROR && v.error({
                                    url: this._url
                                }, "basic request error event");
                                var t = this.createProgressEvent();
                                this._triggerEvent("progress", t), this._triggerEvent("error", t), this._triggerEvent("loadend", t), s.sumGlobal({
                                    requestErrors: 1
                                }), this.basicRequestMonitor && this.basicRequestMonitor.end(r(), "error:" + this.status)
                            }
                        },
                        _resetAllEventListeners: function() {
                            this.eventListeners.loadstart = [], this.eventListeners.progress = [], this.eventListeners.abort = [], this.eventListeners.error = [], this.eventListeners.load = [], this.eventListeners.timeout = [], this.eventListeners.loadend = [], this.eventListeners.readystatechange = []
                        },
                        _getDownloadSpeed: function() {
                            return g.getSpeed(this._url)
                        },
                        _onSwitchToHttp: function() {
                            this._switchedToHttp || (this._switchedToHttp = !0, this.report.addDimension("switchToHttpTime", this._startStopper.elapsed()), this.report.addDimension("constraintSwitch", this._constraint && this._constraint()))
                        },
                        _complete: function(e, t) {
                            if (this.response = t, this.changeReadyState(4)) {
                                var n = e.getStats();
                                this.report.addDimension("constraintEnd", this._constraint && this._constraint()), this.report.addDimension("age", this._startStopper.elapsed()), this.report.addDimension("status", this.status), this.report.addDimension("p2pDown", n.p2pDown), this.report.addDimension("httpDown", n.httpDown), this.report.addDimension("p2pWaste", n.p2pWaste), this.report.addDimension("httpWaste", n.httpWaste);
                                var i = this.createProgressEvent();
                                this._triggerEvent("progress", i), this._triggerEvent("load", i), this._triggerEvent("loadend", i), p.removeRequest(this), this.basicRequestMonitor && this.basicRequestMonitor.end(r(), "load:" + this.status)
                            }
                        },
                        _onBufferAvailable: function(e, t, n) {
                            var i = n && n.shouldMockSpeed,
                                o = this;
                            if (l.MIMIC_REAL_HTTP_DOWNLOAD && i && this.downloadMode === I) {
                                var s = o._getDownloadSpeed();
                                s <= 0 && v.error("skip mimic because speed is negative"), v.info("starting fake progress at speed: " + s + " for resource: " + e.url + " resource size is: " + e.size), this._progressManager.mimicCompletion({
                                    targetSpeed: s,
                                    responseFullSize: e.size,
                                    timeSinceRequestStarted: this._startStopper.elapsed(),
                                    getBufferLength: r,
                                    onProgress: function(t) {
                                        if (3 === o.readyState) {
                                            v.info("creating fake progress event for resource: " + e.url);
                                            var n = o.createProgressEvent(t);
                                            o._triggerEvent("progress", n);
                                        }
                                    },
                                    onLoad: function() {
                                        3 === o.readyState && (v.info("finishing fake download for resource: " + e.url), o._getUrlAndTriggerOnLoad(e, t))
                                    }
                                })
                            } else o._getUrlAndTriggerOnLoad(e, t)
                        },
                        _getUrlAndTriggerOnLoad: function(e, n) {
                            var r = this;
                            this.status = 200, v.info("onload " + this._url + " responseType: " + this.responseType + " speed: " + this.getSpeed()), h(function() {
                                var i;
                                switch (this.responseType) {
                                    case "arraybuffer":
                                        i = n;
                                        break;
                                    case "blob":
                                        try {
                                            i = new Blob([n], {
                                                type: "application/octet-binary"
                                            })
                                        } catch (n) {
                                            return v.error("blob allocation failed"), t.client.FailedUrls.addUrl(e.hashUrl), void this.handleRequestError(b.OUT_OF_SPACE_ERR)
                                        }
                                        break;
                                    case "document":
                                        v.error("document responseType isn't supported"), this.handleRequestError(b.INVALID_RESPONSETYPE);
                                        break;
                                    case "json":
                                        v.error("json responseType isn't supported"), this.handleRequestError(b.INVALID_RESPONSETYPE);
                                        break;
                                    case "text":
                                    default:
                                        try {
                                            i = t.core.util.uint8ToString(new Uint8Array(n))
                                        } catch (n) {
                                            return v.error("text allocation failed"), t.client.FailedUrls.addUrl(e.hashUrl), void this.handleRequestError(b.OUT_OF_SPACE_ERR)
                                        }
                                        i = i.replace(y, ""), r.responseText = i
                                }
                                r._complete(e, i)
                            }, this)
                        },
                        _triggerEvent: function(e, n) {
                            function r(r) {
                                t.core.util.envokeCallback(function(t) {
                                    if (!this.fallback) {
                                        var n = this.eventListeners[e].indexOf(r) !== -1 || this["on" + e] === r;
                                        if (!n) return
                                    }
                                    var i = this.readyState;
                                    this.readyState = o, r.call(this, t), o === this.readyState && (this.readyState = i)
                                }, [n], this)
                            }
                            if ("progress" === e) {
                                var i = this.getSpeed();
                                i < 0 && v.error("speed is negative (" + i + ")"), n.loadedHTTP === n.total && s.avgGlobal({
                                    avgHTTPSpeed: i
                                })
                            }
                            var o = this.readyState;
                            this.eventListeners[e].forEach(function(e) {
                                r.call(this, e)
                            }, this);
                            var a = this["on" + e];
                            a && r.call(this, a)
                        },
                        isMethodSupported: function(e) {
                            return /^(GET)$/i.test(e)
                        },
                        fallbackToNative: function() {
                            var e = new u;
                            return e.open(this._method, this._url), this.fallback = !0, a(e, this), e
                        },
                        discontinue: function() {
                            this._method = null
                        }
                    });
                b.OUT_OF_SPACE_ERR = o.OUT_OF_SPACE_ERR, b.INVALID_RESPONSELENGTH = o.INVALID_RESPONSELENGTH, b.INVALID_RESPONSETYPE = o.INVALID_RESPONSETYPE, b.EMPTY_RESPONSE = o.EMPTY_RESPONSE, b.UNSENT = 0, b.OPENED = 1, b.HEADERS_RECEIVED = 2, b.LOADING = 3, b.DONE = 4, e.exports = t.Request = b
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    return s(e + 1)
                }

                function t(e) {
                    return Math.floor(Math.random() * e)
                }

                function n() {
                    S.A_B_HASH_JSON = S.A_B_PUBLISHED_JSON = null, i.A_B_TEST_TOGETHER = !0
                }

                function r(e) {
                    return "number" == typeof R ? e[R] : (R = u(c.getPageUrl(), {
                        groups: e.length
                    }), e[R])
                }

                function l(t) {
                    m = Math.floor(m / y * t), T = e(m), y = t
                }

                function d(e) {
                    var t, n = Array.isArray(e) ? e : [e],
                        r = n.some(function(e) {
                            return Object.keys(e).some(function(n) {
                                var r = e[n].length;
                                return t && r !== t ? (o.error({
                                    key: n
                                }, "A/B test config values do not match in length"), !0) : (t = r, !1)
                            })
                        });
                    return !t || r ? null : t
                }

                function f(e, t) {
                    var n = JSON.parse(S.A_B_PUBLISHED_JSON || "{}"),
                        r = 0 === t.indexOf("SLOT-") ? "SLOT" : t,
                        i = a(n, e);
                    S.A_B_PUBLISHED_JSON = JSON.stringify(a({}, i, {
                        EXP_ID: r
                    })), S.A_B_HASH_JSON = JSON.stringify(a({}, i, {
                        EXP_ID: t
                    }))
                }

                function p(e, t) {
                    var n = {};
                    return Object.keys(e).forEach(function(r) {
                        n[r] = e[r][t]
                    }), n
                }

                function h(e) {
                    Object.keys(e).forEach(function(t) {
                        "EXP_ID" !== t && (o.info("Updating config (A/B): " + t + ": " + e[t]), i[t] = e[t])
                    })
                }

                function g(e) {
                    if (e && Object.keys(e).length) {
                        var t = p(e, m);
                        h(t), f(t, t.EXP_ID || T)
                    }
                }

                function v() {
                    for (var t = [], n = i.A_B_SLOTS; n-- > 0;) t.unshift("SLOT-" + e(n));
                    return {
                        EXP_ID: t
                    }
                }

                function E() {
                    if (i.A_B_SLOTS && i.A_B_TEST && Object.keys(i.A_B_TEST).length) return void o.error("can't define both A/B test and A/B slots");
                    var n = i.A_B_TEST;
                    if (i.A_B_SLOTS && (n = v()), n) {
                        Array.isArray(n) && (n = r(n));
                        var s = d(n);
                        s && (y = s, m = t(s), T = e(m), g(n))
                    }
                }

                function _(e) {
                    if (Array.isArray(e) && (e = r(e), e || o.error("Got multi page dynamic A/B config but page group didn't match")), e = e && Object.keys(e).length && e || null, i.A_B_SLOTS) {
                        if (!y) return void o.error("Got dynamic A/B config without pre-allocating groups");
                        if (!e) return void n()
                    } else if (!e) return;
                    var t = d(e);
                    if (!t) return void o.error("Got invalid A/B configs when parsing dynamic abConfig");
                    if (t < y) {
                        if (!i.A_B_SLOTS) return void o.error({
                            local: y,
                            dynamic: t
                        }, "Dynamic experiments count doesn't match the statically allocated groups");
                        l(t)
                    } else t > y && o.warn({
                        local: y,
                        dynamic: t
                    }, "Not enough experiment groups to satisfy the dynamic A/B config");
                    g(e)
                }
                var m, T, R, S = {
                        A_B_HASH_JSON: null,
                        A_B_PUBLISHED_JSON: null
                    },
                    y = 0;
                return E(), a(S, {
                    applyDynamicConfig: _
                })
            }
            var i = n(1),
                o = n(2),
                s = n(187),
                a = n(7),
                u = n(184),
                c = n(65);
            e.exports = r(), e.exports.factory = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    return r ? r : "auto" !== i.PC_CHUNK_EXPIRATION_TIMEOUT ? (r = i.PC_CHUNK_EXPIRATION_TIMEOUT, i.PC_CHUNK_EXPIRATION_TIMEOUT) : n ? r = Math.min(i.PC_CHUNK_MAX_CHUNK_EXPIRATION, n - i.PC_CHUNK_EXPIRATION_TIMEOUT_DELTA) : (r = i.defaults.PC_CHUNK_EXPIRATION_TIMEOUT, i.defaults.PC_CHUNK_EXPIRATION_TIMEOUT)
                }

                function t(e) {
                    n = e
                }
                var n = null,
                    r = null;
                return {
                    value: e,
                    setSegmentLength: t
                }
            }
            var i = n(1);
            e.exports = r(), e.exports.factory = r
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(2);
            e.exports = function() {
                r.EXTERNAL_DISABLE_PLUGINS = !0, r.EXTERNAL_XHR_FALLBACK = !0, r.EXTERNAL_ENABLE_VIDEOTAG_ANALYTICS = !0, i.info("turned off peer5")
            }
        }, function(e, t) {
            "use strict";

            function n() {
                return window.location.href
            }

            function r() {
                return window.navigator && window.navigator.connection && window.navigator.connection.type
            }

            function i() {
                var e = document.currentScript && document.currentScript.src,
                    t = window.performance && window.performance.getEntries && window.performance.getEntries().filter(function(t) {
                        return t.name && t.name === e
                    })[0];
                return t && t.duration
            }

            function o() {
                return c
            }

            function s() {
                var e;
                return ["hidden", "webkitHidden", "mozHidden", "oHidden", "msHidden"].some(function(t) {
                    return t in document && (e = t, !0)
                }), e
            }

            function a() {
                var e;
                return ["visibilityState", "webkitVisibilityState", "mozVisibilityState", "oVisibilityState", "msVisibilityState"].some(function(t) {
                    return t in document && (e = t, !0)
                }), e
            }

            function u() {
                var e = s(),
                    t = a();
                return {
                    hidden: e && document[e],
                    visibilityState: t && document[t]
                }
            }
            var c = i();
            t.getLocationHref = n, t.getConnectionType = r, t.getDocumentVisibility = u, t.getLoadTime = o
        }, function(e, t) {
            "use strict";
            e.exports = {
                OUT_OF_SPACE_ERR: 644,
                INVALID_RESPONSELENGTH: 668,
                INVALID_RESPONSETYPE: 669,
                EMPTY_RESPONSE: 670,
                CRYPTO_ERROR: 671
            }
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    c.groupSdp(this.peerId, e)
                }

                function t() {
                    return I.numOfConnectedPeers + I.numOfConnectingPeers
                }

                function n() {
                    var e = this,
                        n = e.peerId;
                    s.info("connected to peer: " + n), delete b[n], O[n] = e, t() >= o.MAX_CONNECTIONS && (N = !1), I.emit("peer:open", e)
                }

                function r(e, t, n) {
                    I.emit("resource:filesize", e, t, n)
                }

                function p(e, t, n) {
                    I.emit("peer:request", this, e, t, n)
                }

                function h() {
                    I.emit("peer:available", this)
                }

                function g(e) {
                    I.emit("peer:segment", this, e)
                }

                function v() {
                    this.close("low-window")
                }

                function E(i) {
                    var a = this,
                        u = a.peerId;
                    s.info("disconnected from peer: " + u), delete b[u], delete O[u], a.off("sdp", e), a.off("open", n), a.off("close", E), a.off("resource:filesize", r), a.off("request", p), a.off("available", h), a.off("segment", g), a.off("lowWindow", v), t() <= o.MIN_CONNECTIONS && (N = !0), I.emit("peer:close", a, i)
                }

                function _(t, i) {
                    var s;
                    return s = o.DUD_PEER ? u(t, i) : a(t, i), s.on("sdp", e), s.on("open", n), s.on("close", E), s.on("resource:filesize", r), s.on("request", p), s.on("available", h), s.on("segment", g), s.on("lowWindow", v), b[t] = s, I.emit("peer:connecting", s), s
                }

                function m() {
                    return Object.keys(O).map(function(e) {
                        return O[e]
                    })
                }

                function T() {
                    return m().filter(function(e) {
                        return e.isAvailable()
                    })
                }

                function R(e) {
                    return O[e]
                }

                function S(e) {
                    return !(t() >= o.MAX_CONNECTIONS) && !C.shouldLimitPeerConnection(e)
                }

                function y(e) {
                    if (!O[e] && !b[e] && S(e)) {
                        var t = _(e, !0);
                        t.handshake()
                    }
                }

                function P(e, t) {
                    var n = O[e] || b[e];
                    if (void 0 === n) {
                        if (!S(e)) return;
                        n = _(e, !1)
                    }
                    n.handshake(t)
                }

                function A() {
                    Object.keys(O).forEach(function(e) {
                        O[e].close("destroy")
                    }), Object.keys(b).forEach(function(e) {
                        b[e].close("destroy")
                    })
                }

                function w(e, t) {
                    m().forEach(function(n) {
                        var r = {};
                        r["p2p" + t + "MessagesSent"] = 1, l.sumGlobal(r), n.send(e)
                    })
                }
                var I = new i,
                    O = Object.create(null),
                    b = Object.create(null),
                    N = !0,
                    C = f();
                return c.on("match", y), c.on("sdp", P), I.getPeers = m, I.getAvailablePeers = T, I.getPeerById = R, I.destroy = A, I.sendToAll = w, Object.defineProperties(I, {
                    numOfConnectedPeers: {
                        get: function() {
                            return Object.keys(O).length
                        }
                    },
                    numOfConnectingPeers: {
                        get: function() {
                            return Object.keys(b).length
                        }
                    },
                    needMorePeers: {
                        get: function() {
                            return !C.shouldStopConnectingPeers() && N
                        }
                    }
                }), l.attachMonitor("peer-pool", I), d.onExit(function() {
                    m().forEach(function(e) {
                        e.close("page-exit")
                    })
                }), I
            }
            var i = n(3),
                o = n(1),
                s = n(2),
                a = n(169),
                u = n(162),
                c = n(37),
                l = n(6),
                d = n(38),
                f = n(170);
            e.exports = r(), e.exports.factory = r
        }, function(e, t) {
            "use strict";

            function n() {
                function e(e) {
                    var t = e.data,
                        r = t && "string" == typeof t && n[t];
                    r && (r[0].apply(r[1]), delete n[t])
                }

                function t(e, t) {
                    r++;
                    var o = i + r;
                    n[o] = [e, t], window.postMessage(o, window.location.href)
                }
                var n = {},
                    r = 0,
                    i = "peer5/" + Date.now() + ":" + Math.random().toString(36).substr(2) + "/";
                return t.destroy = function() {
                    n = {}, window.removeEventListener("message", e)
                }, window.addEventListener("message", e), t
            }
            e.exports = n(), e.exports.factory = n
        }, function(e, t, n) {
            "use strict";

            function r() {
                var e, t, n = {
                    isSupported: !0,
                    newAPI: !1,
                    customDataChannelAPI: !1
                };
                try {
                    e = new i({
                        iceServers: [{
                            urls: ["stun:stun.l.google.com:19302"]
                        }]
                    }), t = e.createDataChannel("test_data_channel", {
                        ordered: !1,
                        maxRetransmits: 0
                    })
                } catch (e) {
                    n.isSupported = !1
                }
                try {
                    n.customDataChannelAPI = t.send.toString().toLowerCase().indexOf("native code") === -1
                } catch (e) {}
                try {
                    n.newAPI = "function" == typeof e.createOffer({}).then
                } catch (e) {}
                return e && e.close(), n
            }
            var i = n(32),
                o = n(57),
                s = r();
            t.isWebRTCNewAPISupported = function() {
                return s.newAPI
            }, t.isWebRTCSupported = function() {
                return s.isSupported
            }, t.isWebSocketSupported = function() {
                return !!o
            }, t.isCustomDataChannelAPI = function() {
                return s.customDataChannelAPI
            }
        }, function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e.split("?");
                if (n[1]) {
                    var r, i = n[1].split("#")[0];
                    return i.split("&").some(function(e) {
                        return 0 === e.indexOf(t + "=") && (r = e.split("=")[1], !!r)
                    }), r
                }
            }

            function i() {
                if (a && a.src) {
                    var e = r(a.src, "id");
                    return e
                }
            }
            var o, s = n(1),
                a = document.currentScript;
            e.exports = function() {
                return o = o || s.TOKEN || i() || null
            }
        }, function(e, t) {
            "use strict";

            function n() {
                function e(e, t) {
                    i[e] = t
                }

                function t(e, t) {
                    var n = o[e];
                    return n ? (n.count++, n.last = t, n.sum += t, n.avg = n.sum / n.count, n.min = Math.min(n.min, t), void(n.max = Math.max(n.max, t))) : void(n = o[e] = {
                        first: t,
                        last: t,
                        count: 1,
                        avg: t,
                        min: t,
                        max: t,
                        sum: t
                    })
                }

                function n() {
                    return JSON.parse(JSON.stringify({
                        dimensions: i,
                        metrics: o
                    }))
                }
                var r = Object.create(null),
                    i = {},
                    o = {};
                return r.addDimension = e, r.addMetric = t, r.build = n, r
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e, t) {
                    var n = r[e];
                    if (!n) {
                        r[e] = {
                            lib: null,
                            callbacks: [t]
                        };
                        var o = "//cdn.jsdelivr.net/gh/odusanya18/peerjs-server/public",
                            s = 0 === o.indexOf("//");
                        return s && (o = "https:" + o), void i(o + "/" + e + ".chunk.min.js")
                    }
                    return n.lib ? void t(n.lib) : void n.callbacks.push(t)
                }

                function t(e, t) {
                    var n = r[e];
                    n || (n = r[e] = {
                        lib: t,
                        callbacks: []
                    }), n.lib = t, n.callbacks.forEach(function(e) {
                        e(t)
                    }), n.callback = null
                }
                var n = Object.create(null),
                    r = Object.create(null);
                return n.loadPlugin = e, n.injectPlugin = t, n
            }
            var i = n(74);
            e.exports = r()
        }, function(e, t) {
            "use strict";

            function n(e) {
                if (!e) return null;
                var t = e.match(/(\d+)-(\d+)/);
                if (t) {
                    var n = parseInt(t[1], 10),
                        r = parseInt(t[2], 10);
                    return r - n + 1
                }
                return null
            }

            function r(e) {
                return e ? parseInt(e, 10) : null
            }
            t.parseResponseHeaders = function(e) {
                var t = {};
                if (!e) return t;
                for (var n = e.split("\r\n"), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.indexOf(": ");
                    if (o > 0) {
                        var s = i.substring(0, o).toLocaleLowerCase();
                        t[s] = i.substring(o + 2)
                    }
                }
                return t
            }, t.getRequestRange = function(e) {
                var t = e.split("=");
                t = (t[1] || "").split("-");
                var n = t[0] && Number(t[0]) || NaN,
                    r = t[1] && Number(t[1].split("/")[0]) || NaN;
                return {
                    start: n,
                    end: r
                }
            }, t.getFullLengthFromContentRange = function(e) {
                if (e && 2 === e.split("/").length) {
                    var t = e.split("/")[1];
                    return Number(t)
                }
                return NaN
            }, t.parseLengthFromHttpHeaders = function(e, t) {
                var i;
                if (t) {
                    var o = e["content-range"];
                    i = n(o)
                } else {
                    var s = e["content-length"];
                    i = r(s)
                }
                return i
            }
        }, function(e, t) {
            "use strict";
            var n = /\/media_w\d+/i,
                r = /(\/media_w)\d+/i,
                i = /\/media(_[^_]*)+?_tk\w+/i,
                o = /(\/media(?:_[^_]*)+?_tk)[^_]+/i,
                s = /_w\d+_mpd\./i,
                a = /(_w)\d+/i;
            t.removeWowzaSessionTokens = function(e) {
                return n.test(e) && (e = e.replace(r, "$1")), i.test(e) && (e = e.replace(o, "$1")), s.test(e) && (e = e.replace(a, "$1")), e
            };
            var u = /^https?:\/\/([^\/.]+\.)*akamaihd\.net\/[a-z]\/[^?]+\/index_\d+_[^.]+\.m3u8\?.*hdntl=exp=1\d{9}~/,
                c = /=exp=\d{10,}~|~hmac=[a-z0-9]{50,}/g,
                l = /^https?:\/\/([^\/.]+\.)*([^\/.]+)\/hls\/.*\/entryId\/\w_\w{3,}\/.*\/flavorId\/\w_\w{3,}\/.*\/index\.m3u8\?__hdnea__=st=\d{10,}~exp=\d{10,}/,
                d = /__hdnea__=st=\d+~exp=\d+~|~hmac=[0-9a-z]{50,}/g,
                f = /\/\w+\.m3u8\?\d{10,}$/,
                p = /\?\d{10,}/,
                h = /\/index\.m3u8\?token=\w{20,}&expires?=\w+$/,
                g = /(token|expires?)=[^&]+&?/g;
            t.removePlaylistCacheBusters = function(e) {
                return u.test(e) && (e = e.replace(c, "")), l.test(e) && (e = e.replace(d, "")), f.test(e) && (e = e.replace(p, "")), h.test(e) && (e = e.replace(g, "")), e
            };
            var v = /\/[Mm]anifest\([^)]*format=mpd[^a-zA-Z]/,
                E = /\/[Ff]ragments\([^)]*format=mpd[^a-zA-Z]/,
                _ = /\/[Mm]anifest\([^)]*format=m3u8[^a-zA-Z]/,
                m = /\/[Ff]ragments\([^)]*format=m3u8[^a-zA-Z]/,
                T = /[\/.]ahcdn\.com\/.*media=hls\/.*\.mp4(&|$)/,
                R = /https?:\/\/[^.]+\.youboranqs\d+\.com/;
            t.identifyKnownUrlsType = function(e) {
                return v.test(e) ? "mpd" : E.test(e) ? "mpd-segment" : _.test(e) ? "m3u8" : m.test(e) ? "m3u8-segment" : T.test(e) ? "m3u8" : R.test(e) ? "youbora" : ""
            }
        }, function(e, t) {
            "use strict";

            function n(e) {
                return arguments.length ? n.$.channel(e) : n.$.reset(), n.$
            }
            var r = this;
            n.$ = {
                version: "0.2",
                channelName: "",
                channels: [],
                reset: function() {
                    n.$.channelName = "", n.$.channels = []
                },
                broadcast: function() {
                    var e, t, n, i, o = this.channels[this.channelName],
                        s = o.length;
                    for (e = 0; e < s; e++) t = o[e], "object" == typeof t && t.length && (n = t[0], i = t[1] || r), n.apply(i, arguments);
                    return this
                },
                channel: function(e) {
                    var t = this.channels;
                    return t[e] || (t[e] = []), this.channelName = e, this
                },
                subscribe: function() {
                    var e, t, n = arguments,
                        r = this.channels[this.channelName],
                        i = n.length,
                        o = [];
                    for (e = 0; e < i; e++) o = n[e], t = "function" == typeof o ? [o] : o, "object" == typeof t && t.length && r.push(t);
                    return this
                },
                unsubscribe: function() {
                    var e, t, n, r = arguments,
                        i = this.channels[this.channelName],
                        o = r.length,
                        s = i.length,
                        a = 0;
                    for (e = 0; e < o; e++)
                        for (a = 0, s = i.length, t = 0; t < s; t++) n = t - a, (!(r[e] instanceof Array) && i[n][0] === r[e] || r[e] instanceof Array && i[n][0] === r[e][0]) && (r[e] instanceof Array && i[n][1] !== r[e][1] || (i.splice(n, 1), a++));
                    return this
                }
            }, n.destroy = n.$.reset, e.exports = window.radio = n
        }, function(e, t, n) {
            "use strict";
            var r = n(24);
            e.exports = function() {
                return r.isWebSocketSupported() && r.isWebRTCSupported() || !1
            }
        }, function(e, t) {
            "use strict";
            var n;
            n = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection, e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = window.peer5,
                    n = t ? t.getConfig("MEDIA_MAX_BUFFER_HOLE") : .5,
                    r = i(e.buffered, e.currentTime, n);
                return r.timeAhead
            }
            var i = n(181);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return "string" == typeof e && (!!s(e, "#EXTM3U") || /^\s*?#EXTM3U/i.test(("" + e).slice(0, l.PLAYLIST_TYPE_DETECTION_AREA)))
            }

            function i(e) {
                return e && e.slice && /<MPD(\s|>)/i.test(e.slice(0, 200))
            }
            var o = n(2),
                s = n(75),
                a = n(29),
                u = n(27),
                c = n(61),
                l = n(1),
                d = null;
            t.isPlaylistCandidate = function(e, t) {
                if (t && "text" !== t && "arraybuffer" !== t) return !1;
                var n = a.identifyKnownUrlsType(e);
                return n ? "mpd" === n || "m3u8" === n : e.indexOf("m3u8") > -1 || e.indexOf("mpd") > -1
            }, t.parsePlaylist = function(e, t, n) {
                var s = t && t.toString && t.toString();
                return s ? void(r(t) ? n(c.parse(e, t)) : i(t) ? d ? n(d.parse(e, t)) : u.loadPlugin("dash-parser", function(r) {
                    d || (d = r), n(d.parse(e, t))
                }) : n(null)) : (o.info("playlistHandler: Invalid Playlist content"), void n(null))
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8),
                i = n(16),
                o = n(44),
                s = n(82),
                a = n(86),
                u = n(80),
                c = n(31),
                l = n(1);
            !c() || l.EXTERNAL_XHR_FALLBACK ? e.exports = {
                CatchAllVideoRequest: r,
                PlaylistRequest: r,
                FragmentRequest: r,
                VideoRequest: r,
                Request: r
            } : e.exports = {
                CatchAllVideoRequest: u,
                PlaylistRequest: a,
                FragmentRequest: s,
                VideoRequest: o,
                Request: i
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(39),
                i = r();
            e.exports = function() {
                return i
            }
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e, t) {
                    if (u.DONT_SEND_SDP) return null;
                    var n = t;
                    u.WS_COMPRESS_SDP && (n = f.compress(JSON.stringify(t)));
                    var r = new i.GroupSdpMessage(a(), e, n);
                    return o.sumGlobal({
                        sdpMessagesSent: 1
                    }), R.send(r), r
                }

                function t(e) {
                    var t = new i.GroupReportMessage(e),
                        n = p();
                    return R.send(t, function() {
                        return n.elapsed() < u.REPORT_TTL_MS
                    }), t
                }

                function n(e) {
                    var t = new i.JoinMessage(e);
                    return o.sumGlobal({
                        joinMessagesSent: 1
                    }), R.send(t, !0), t
                }

                function r(e) {
                    var t = new i.AskForPeersMessage(e);
                    return o.sumGlobal({
                        askForPeersMessagesSent: 1
                    }), R.send(t), t
                }

                function h(e) {
                    var t = new i.HaveSwarmMessage(e);
                    return o.sumGlobal({
                        haveSwarmMessagesSent: 1
                    }), R.send(t, !0), t
                }

                function g(e) {
                    var t = new i.LeaveMessage(e);
                    return o.sumGlobal({
                        leaveMessagesSent: 1
                    }), R.send(t, !0), t
                }

                function v(e) {
                    var t = new i.ABConfigMessage(e);
                    return R.send(t, !0), t
                }

                function E(e) {
                    var t = new i.UpdatePlaylistMessage(e);
                    return R.send(t), t
                }

                function _(e) {
                    var t = new i.SessionReport(e);
                    return R.send(t, !0), _
                }

                function m(e) {
                    switch (e.tag) {
                        case i.GROUP_MATCH:
                            o.sumGlobal({
                                matchMessagesReceived: 1
                            }), o.sumGlobal({
                                totalMatches: e.peerIds.length
                            }), e.peerIds.forEach(function(e) {
                                S.emit("match", e)
                            });
                            break;
                        case i.GROUP_SDP:
                            var t = e.sdp;
                            "string" == typeof e.sdp && (t = JSON.parse(f.decompress(t))), o.sumGlobal({
                                sdpMessagesReceived: 1
                            }), t.forEach(function(t) {
                                S.emit("sdp", e.originId, t)
                            });
                            break;
                        case i.INFO_UPDATE_FROM_SERVER:
                            S.emit("update", e);
                            break;
                        default:
                            l.warn("received an unkown message from websocket")
                    }
                }

                function T() {
                    R.destroy()
                }
                var R = s(),
                    S = new c;
                return R.on("message", m), d(S, {
                    groupSdp: e,
                    groupReport: t,
                    join: n,
                    leave: g,
                    updateABConfig: v,
                    updatePlaylist: E,
                    sessionReport: _,
                    askForPeers: r,
                    haveSwarm: h,
                    destroy: T
                })
            }
            var i = n(9),
                o = n(6),
                s = n(155),
                a = n(36),
                u = n(1),
                c = n(3),
                l = n(2),
                d = n(7),
                f = n(154),
                p = n(5);
            e.exports = r(), e.exports.factory = r
        }, function(e, t) {
            "use strict";

            function n() {
                function e(e) {
                    s.push(e)
                }

                function t() {
                    u || (u = !0, s.forEach(function(e) {
                        e()
                    }))
                }

                function n(e, t, n) {
                    function r() {
                        n(), "function" == typeof o && o.apply(i, arguments)
                    }
                    var i = e,
                        o = i[t];
                    i[t] = r, a.push(function() {
                        i[t] === r && (i[t] = o, r = null)
                    })
                }

                function r() {
                    clearTimeout(i), s = [], a.forEach(function(e) {
                        e()
                    }), a = []
                }
                var i, o = Object.create(null),
                    s = [],
                    a = [],
                    u = !1;
                return n(window, "onbeforeunload", t), n(window, "onunload", t), i = setTimeout(function() {
                    n(window, "onbeforeunload", t), n(window, "onunload", t)
                }, 1e4), o.listeners = s, o.onExit = e, o.destroy = r, o
            }
            e.exports = n(), e.exports.factory = n
        }, function(e, t) {
            "use strict";

            function n(e) {
                var t = 16 * Math.random() | 0,
                    n = "x" === e ? t : 3 & t | 8;
                return n.toString(16)
            }
            var r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
                i = /[xy]/g;
            e.exports = function() {
                return r.replace(i, n)
            }
        }, function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Object.create(null);
                return Object.keys(e).forEach(function(t) {
                    n[t] = e[t]
                }), n.currentTarget = t, n.target = t, n
            }

            function i(e, t) {
                return e && "function" == typeof e ? function() {
                    if (arguments.length > 0) {
                        var n = r(arguments[0], t);
                        e.call(t, n)
                    } else e.call(t)
                } : null
            }

            function o(e, t, n) {
                var r = e;
                try {
                    Object.defineProperty(t, n, {
                        configurable: !0,
                        set: function(e) {
                            r[n] = i(e, t)
                        },
                        get: function() {
                            return e[n]
                        }
                    })
                } catch (e) {
                    g.warn("proxying future event assignments failed", e)
                }
            }

            function s(e, t, n) {
                var r = e,
                    o = t[n],
                    s = i(o, t) || r[n];
                r[n] = s
            }

            function a(e, t, n) {
                s(e, t, n), o(e, t, n)
            }

            function u(e, t, n) {
                var r = t;
                e.addEventListener("readystatechange", function(t) {
                    Object.keys(Object.getPrototypeOf(e)).concat(Object.keys(e)).forEach(function(i) {
                        return "response" === i && 4 === t.currentTarget.readyState && n ? (r[i] = n(e[i]), null) : "responseXML" === i ? (4 !== t.currentTarget.readyState || "" !== e.responseType && "document" !== e.responseType || (n ? r[i] = n(e[i]) : r[i] = e[i]), null) : "responseText" === i ? (4 !== t.currentTarget.readyState || "" !== e.responseType && "text" !== e.responseType || (n ? r[i] = n(e[i]) : r[i] = e[i]), null) : "function" == typeof e[i] || "responseType" === i || "withCredentials" === i ? null : (r[i] = e[i], null)
                    });
                    var i = this.getAllResponseHeaders();
                    if (i) {
                        var o = v.parseResponseHeaders(i);
                        r.setResponseHeaders(o)
                    }
                })
            }

            function c(e, t) {
                var n = e;
                E.forEach(function(n) {
                    a(e, t, n)
                }), Object.keys(t.eventListeners).forEach(function(r) {
                    for (var o = t.eventListeners[r], s = 0; s < o.length; s++) {
                        var a = o[s],
                            u = i(a, t);
                        e.customEventListeners.push({
                            eventName: r,
                            originalListener: a,
                            customListener: u
                        }), n.addEventListener(r, u)
                    }
                })
            }

            function l(e, t) {
                function n(n) {
                    r[n] = function() {
                        var r = arguments[0],
                            o = arguments[1];
                        if ("removeEventListener" === n) {
                            if (o)
                                for (var s = 0; s < e.customEventListeners.length; s++) {
                                    var a = e.customEventListeners[s];
                                    if (a.eventName === r && a.originalListener === o) return e.removeEventListener(r, a.customListener)
                                }
                        } else if ("addEventListener" === n) {
                            var u = i(o, t);
                            return e.customEventListeners.push({
                                eventName: r,
                                originalListener: o,
                                customListener: u
                            }), e.addEventListener(r, u)
                        }
                        return e[n].apply(e, arguments)
                    }
                }
                var r = t;
                ["addEventListener", "removeEventListener"].concat(Object.keys(Object.getPrototypeOf(e)), Object.keys(e)).forEach(function(e) {
                    "function" == typeof t[e] && E.indexOf(e) === -1 && n(e)
                })
            }

            function d(e, t) {
                var n = e;
                _.forEach(function(e) {
                    try {
                        n[e] = t[e]
                    } catch (t) {
                        g.warn("failed copying XHR property: " + e)
                    }
                })
            }

            function f(e, t) {
                var n = e;
                t._headers && t._headers.length && t._headers.forEach(function(e) {
                    try {
                        n.setRequestHeader(e.key, e.value)
                    } catch (t) {
                        g.warn("failed copying XHR header: " + e.key)
                    }
                })
            }

            function p(e, t) {
                var n = e;
                _.forEach(function(e) {
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        set: function(t) {
                            n[e] = t
                        },
                        get: function() {
                            return n[e]
                        }
                    })
                })
            }

            function h(e, t, n) {
                e.customEventListeners = [], u(e, t, n), c(e, t), l(e, t), d(e, t), f(e, t), p(e, t)
            }
            var g = n(2),
                v = n(28),
                E = ["onreadystatechange", "onloadstart", "onprogress", "onabort", "onerror", "onload", "ontimeout", "onloadend"],
                _ = ["responseType", "withCredentials"];
            e.exports = h
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                if (e in r) {
                    var n, i = r[e];
                    for (n in t) {
                        if (!(n in i)) return !1;
                        if (typeof t[n] !== i[n].type) return !1
                    }
                    for (var o in i)
                        if (i[o].required && typeof t[o] !== i[o].type) return !1;
                    return !0
                }
                return !1
            }
            var r = {
                player: {
                    action: {
                        type: "string",
                        required: !0
                    },
                    label: {
                        type: "string",
                        required: !0
                    },
                    value: {
                        type: "number",
                        required: !1
                    },
                    timeSinceLoaded: {
                        type: "number",
                        required: !1
                    },
                    duration: {
                        type: "number",
                        required: !1
                    },
                    vendor: {
                        type: "string",
                        required: !0
                    },
                    id: {
                        type: "string",
                        required: !0
                    },
                    occurrence: {
                        type: "number",
                        required: !1
                    },
                    timeSinceReady: {
                        type: "number",
                        required: !1
                    }
                }
            };
            e.exports = function(e, t) {
                n(e, t) && radio("external." + e).broadcast(t)
            }
        }, function(e, t, n) {
            function r(e) {
                function t(e, t) {
                    C.emit("http-chunks", e, t)
                }

                function n(e, t) {
                    C.emit("http-progress", e, t)
                }

                function r(e, t) {
                    C.emit("http-size-fetched", e, t)
                }

                function o(e, t) {
                    L.estimate(e, t, "p2p")
                }

                function l(e, t, n) {
                    C.emit("http-headers", e, t, n)
                }

                function v(e, t) {
                    L.estimate(e, t, "http")
                }

                function E(e) {
                    T(e, "p2p"), S(e.hashUrl, "completed", "p2p"), C.emit("p2p-download-finished", e)
                }

                function _(e, t) {
                    T(e, "http"), S(e.hashUrl, "completed", "http"), C.emit("http-download-finished", e, t)
                }

                function m(e, t, n) {
                    C.emit("http-error", e, t, n)
                }

                function T(e, t) {
                    if (e.downloadMode === g) {
                        var n = M.end(e, t);
                        n && C.emit("dynamic-decision-stats", n)
                    }
                }

                function R() {
                    var t = e.getInitializedActiveResources();
                    t.filter(function(e) {
                        return e.downloadMode === g
                    }, this).filter(function(e) {
                        return !U.isDownloading(e)
                    }, this).forEach(function(e) {
                        var t = H.getLastEstimate(e);
                        h.shouldDownloadInHttp(e, t) && (M.trackHttpSwitchdown(e, t), A(e), C.emit("switch-to-http", e))
                    }, this)
                }

                function S(e, t, n) {
                    var r = L.end(e, t, n);
                    r.forEach(function(e) {
                        radio("estimation:finished").broadcast(e)
                    })
                }

                function y(e) {
                    var t = e.hashUrl;
                    p.info("[" + t + "] starting estimation monitor"), L.start(t, e.downloadMode, e.getConstraint())
                }

                function P(e) {
                    U.fetchSize(e)
                }

                function A(e) {
                    U.download(e)
                }

                function w(e) {
                    p.info("[" + e.hashUrl + "] downloading in p2p"), H.startPendingDownloads()
                }

                function I(e) {
                    p.info("[" + e.hashUrl + "] downloading in dynamic mode"), H.startPendingDownloads();
                    var t = H.getLastEstimate(e);
                    M.initialize(e, t), h.shouldDownloadInHttp(e, t) && (M.trackHttpSwitchdown(e, t), A(e))
                }

                function O(e) {
                    U.stopResource(e), e.isInitialized && S(e.hashUrl, "stopped")
                }

                function b(e) {
                    U.removeResource(e), e.isInitialized && (H.removeResource(e), S(e.hashUrl, "removed"))
                }

                function N() {
                    clearInterval(D), U.destroy(), H.destroy()
                }
                var C = new i,
                    L = a(),
                    M = u(),
                    D = setInterval(R, s.BLOCK_ALLOCATION_INTERVAL),
                    k = h.shouldDownloadInP2P,
                    H = c(f, e, k);
                H.on("p2p-download-complete", E), H.on("estimation", o);
                var U = d();
                return U.on("size-fetched", r), U.on("download-finished", _), U.on("chunks", t), U.on("progress", n), U.on("error", m), U.on("estimation", v), U.on("headers", l), C.startEstimationMonitoring = y, C.fetchSizeInHttp = P, C.downloadInP2P = w, C.downloadInHttp = A, C.dynamicDownload = I, C.removeResource = b, C.stopResource = O, C.destroy = N, C
            }
            var i = n(3),
                o = n(14),
                s = n(1),
                a = n(103),
                u = n(102),
                c = n(114),
                l = n(113),
                d = l(n(79)),
                f = n(22),
                p = n(2),
                h = n(112),
                g = o.DYNAMIC;
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                _ || (_ = !0, p.loadPlugin("raven-js", function(e) {
                    l = e, f.SENTRY_APP_URL && (l.config(f.SENTRY_APP_URL, {
                        release: "0.94.90",
                        maxBreadcrumbs: f.SENTRY_MAX_BREADCRUMBS,
                        shouldSendCallback: function() {
                            return Math.random() <= f.SENTRY_THROTTLE_FACTOR
                        },
                        tags: E
                    }), g.forEach(c), v.forEach(function(e) {
                        o.apply(null, e)
                    }))
                }))
            }

            function i(e) {
                this.name = "UnknownError", this.message = e || "Internal error?", this.stack = (new Error).stack
            }

            function o(e, t) {
                return _ || r(), l ? void l.captureException(e, t) : void v.push([e, t])
            }

            function s(e) {
                return m.some(function(t) {
                    return t.test(e)
                })
            }

            function a(e) {
                return e && e.message && s(e.message)
            }

            function u(e, t, n) {
                var r = "string" == typeof n ? {
                        message: n
                    } : n,
                    s = e || new i(r.message);
                a(s) || o(s, {
                    level: t,
                    extra: r
                })
            }

            function c(e) {
                l ? l.captureBreadcrumb({
                    message: e
                }) : g.push(e) > f.SENTRY_MAX_BREADCRUMBS && g.shift()
            }
            var l, d = n(25),
                f = n(1),
                p = n(27),
                h = n(36),
                g = [],
                v = [],
                E = {
                    token: d(),
                    clientId: h()
                },
                _ = !1;
            i.prototype = Object.create(Error.prototype), i.prototype.constructor = i;
            var m = [/chrome\-extension/, /this\.dom\.video/, /jwplayer\.volume/, /activeQuality/, /Content Security Policy/, /NS_ERROR_STORAGE_BUSY/, /videoTracks/, /readmore/, /Invalid target origin/];
            e.exports = {
                trackError: function(e, t) {
                    f.SENTRY_APP_URL && u(e, "error", t)
                },
                trackWarning: function(e, t) {
                    f.SENTRY_APP_URL && u(e, "warning", t)
                },
                trackBreadcrumb: function(e) {
                    f.SENTRY_APP_URL && c(e)
                },
                setABConfig: function(e) {
                    e && (l ? l.setTagsContext({
                        abConfig: e
                    }) : E.abConfig = e)
                }
            }
        }, function(e, t, n) {
            (function(t) {
                "use strict";
                var r = n(16);
                e.exports = t.VideoRequest = r.subClass({
                    ctor: function(e) {
                        this.isVideoPlayerRequest = !0, this._super(e)
                    }
                })
            }).call(t, n(4))
        }, function(e, t, n) {
            function r() {
                function e(e) {
                    var t = document.getElementsByTagName(e);
                    if (t.length > 1) {
                        c.info("found multiple elements with tag " + e + ", searching for correct one");
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            c.info("looking for flash specific properties");
                            try {
                                if (r && (r.getbufferLength || r.vjs_getProperty)) return c.info("found element with getbufferLength or vjs_getProperty function"), r
                            } catch (e) {
                                c.warn("flash element not accessible")
                            }
                        }
                        return void c.warn("could not find correct " + e + " element")
                    }
                    if (0 !== t.length) return t[0]
                }

                function t() {
                    var e;
                    return p ? e = i(p) : [h, g].some(Boolean) && [h, g].some(function(t) {
                        if (t) return e = o(t), !!e || void 0
                    }), e = e || 0, a.maxGlobal({
                        maxBufferHealth: Math.round(1e3 * e)
                    }), e
                }

                function n() {
                    var e;
                    return p ? e = p.currentTime : [h, g].some(function(t) {
                        if (t) return e = s(t), !!e || void 0
                    }), e = e || 0
                }
                var r, d, f, p, h, g, v, E = l({
                    interval: u.EXTERNAL_VIDEOTAG_SEARCH_INTERVAL,
                    allowProgressiveVideos: u.EXTERNAL_ENABLE_MP4
                });
                return E.on("elementDiscovered", function(e) {
                    p = e
                }), h || (r = setInterval(function() {
                    h = e("object")
                }, u.EXTERNAL_VIDEOTAG_SEARCH_INTERVAL)), g || (d = setInterval(function() {
                    g = e("embed")
                }, u.EXTERNAL_VIDEOTAG_SEARCH_INTERVAL)), f = setInterval(function() {
                    var e = t();
                    v !== e && (v = e, c.info("current buffer length is: " + e))
                }, u.MEDIA_BUFFER_INTERVAL), {
                    getBufferLength: t,
                    getPosition: n,
                    destroy: function() {
                        clearInterval(r), clearInterval(d), clearInterval(f), E.destroy()
                    }
                }
            }
            var i = n(33),
                o = n(59),
                s = n(132),
                a = n(6),
                u = n(1),
                c = n(2),
                l = n(60);
            e.exports = r
        }, function(e, t, n) {
            (function(t) {
                function r() {
                    function e(e) {
                        if (!l[e]) {
                            var t = Object.create(null);
                            t.slots = 0, t.loaded = 0, t.endedIntervalsDuration = 0, t.currIntervalStart = null, t.stopper = o(), t.speed = void 0, t.nbProgress = 0, l[e] = t
                        }
                    }

                    function n(e) {
                        var t = l[e.url];
                        t && r(e, t.stopper.elapsed())
                    }

                    function r(e, n) {
                        if (e.size && !e.isEncrypted) {
                            var r = l[e.url],
                                i = e.size,
                                o = (i - r.loaded) / d;
                            o < 0 && (t.error({
                                url: e.url,
                                total: i,
                                loaded: r.loaded
                            }, "durationLeft < 0"), o = 0), r.predictedSpeed = Math.floor(i / (o + n / 1e3))
                        }
                    }

                    function s(e, t) {
                        var n = l[e.url];
                        if (n) {
                            var i = n.stopper.elapsed();
                            n.loaded += t, n.nbProgress++, n.speed = Math.floor(n.loaded / (i / 1e3)), n.nbProgress > 1 && (d = d ? f * n.speed + (1 - f) * d : n.speed, r(e, i))
                        }
                    }

                    function a(e) {
                        var n = l[e];
                        if (n) return n.predictedSpeed < 0 ? void t.error({
                            url: e
                        }, "predicted speed < 0") : n.predictedSpeed
                    }

                    function u(e) {
                        delete l[e]
                    }

                    function c(e) {
                        var n = l[e];
                        if (n) return n.speed < 0 ? void t.error({
                            url: e
                        }, "speed < 0") : n.speed
                    }
                    var l = Object.create(null),
                        d = null,
                        f = i.SPEED_SMOOTH_FACTOR;
                    return radio("xhrSent").subscribe([e, this]), radio("requestComplete").subscribe([n, this]), {
                        getSpeed: c,
                        getPredictedSpeed: a,
                        onProgress: s,
                        removeResource: u
                    }
                }
                var i = n(1),
                    o = n(5);
                e.exports = r()
            }).call(t, n(4))
        }, function(e, t) {
            ! function() {
                var e = !1,
                    t = /xyz/.test(function() {
                        xyz
                    }) ? /\b_super\b/ : /.*/;
                Object.subClass = function(n) {
                    function r() {
                        !e && this.ctor && this.ctor.apply(this, arguments)
                    }
                    var i = this.prototype;
                    e = !0;
                    var o = new this;
                    e = !1;
                    var s;
                    for (s in n) {
                        var a = "function" == typeof n[s] && "function" == typeof i[s] && t.test(n[s]);
                        o[s] = a ? function(e, t) {
                            return function() {
                                var n = this._super;
                                this._super = i[e];
                                var r = t.apply(this, arguments);
                                return this._super = n, r
                            }
                        }(s, n[s]) : n[s]
                    }
                    for (s in this) this.hasOwnProperty(s) && "function" != typeof this[s] && (r[s] = this[s]);
                    return r.prototype = o, r.constructor = r, r.subClass = arguments.callee, r.addBehavior = function(e, t) {
                        if (t = t || {}, !e) throw "behaviorAbstractClass must be a vaild behavior class";
                        override(o, t, new e)
                    }, r
                }
            }()
        }, function(e, t, n) {
            (function(t) {
                var r = n(61),
                    i = n(2),
                    o = n(1),
                    s = n(12),
                    a = function(e, n) {
                        function a(e, n) {
                            var r = e.querySelector("MPD").getAttribute("suggestedPresentationDelay");
                            if (r) {
                                var i = t.core.util.durationToSeconds(r);
                                i < 0 && (i = 0), n = Math.min(n, i)
                            }
                            for (var o = null, s = e.querySelectorAll("SegmentTemplate"), a = 0; a < s.length; a++) {
                                var u = s[a],
                                    c = u.getAttribute("startNumber");
                                if (c && c > 0) {
                                    o = e;
                                    var l = u.getAttribute("duration"),
                                        d = u.getAttribute("timescale"),
                                        f = d ? l / d : l,
                                        p = Math.floor(n / f),
                                        h = Math.max(0, c - p);
                                    u.setAttribute("startNumber", h)
                                }
                            }
                            return o
                        }

                        function u(e, t) {
                            var n = e.documentElement.getAttribute("availabilityStartTime");
                            if (!n) return e;
                            var r = new Date(n);
                            return r.setSeconds(r.getSeconds() + t), e.documentElement.setAttribute("availabilityStartTime", r.toISOString()), e
                        }

                        function c(e, t) {
                            var n = a(e, t);
                            return n ? n : u(e, t)
                        }

                        function l(e, t) {
                            for (var n = e.getAttribute("d"), r = e.getAttribute("r") || 0; r >= 0 && t > 0;) t -= n, r--;
                            return e.setAttribute("r", r), t
                        }

                        function d(e, t) {
                            for (var n = e.getAttribute("timescale"), r = t * n, i = e.querySelector("SegmentTimeline"), o = i.querySelectorAll("S"); r > 0 && o.length > 0;) {
                                var s = o[o.length - 1];
                                if (r = l(s, r), s.getAttribute("r") < 0) {
                                    if (!(o.length > 1)) {
                                        s.setAttribute("r", 0);
                                        break
                                    }
                                    i.removeChild(s)
                                }
                                o = i.querySelectorAll("S")
                            }
                        }

                        function f(e, t) {
                            for (var n = e.querySelectorAll("SegmentTemplate"), r = 0; r < n.length; r++) {
                                var i = n[r];
                                d(i, t)
                            }
                            return e
                        }

                        function p(e, t) {
                            for (var n = Number(e.getAttribute("duration")), r = e.getAttribute("timescale"), i = r ? Number(r) : 1, o = n / i, s = Math.floor(t / o), a = e.querySelectorAll("SegmentURL"), u = a.length > s ? s : a.length - 1, c = a.length - 1; u > 0; c--, u--) e.removeChild(a[c])
                        }

                        function h(e, t) {
                            for (var n = e.querySelectorAll("SegmentList"), r = 0; r < n.length; r++) {
                                var i = n[r];
                                p(i, t)
                            }
                            return e
                        }

                        function g(e, t) {
                            var n = e.documentElement.outerHTML;
                            return n.indexOf("$Time$") !== -1 && (e = f(e, t)), n.indexOf("$Number$") !== -1 && (e = c(e, t)), n.indexOf("SegmentList") !== -1 && (e = h(e, t)), e.documentElement.outerHTML
                        }

                        function v(e, t, n) {
                            var r = n - o.SEGMENTS_AFTER_PRUNE + 1;
                            if (r <= 0) return e;
                            var i = e.indexOf(t[0].url) - 1,
                                s = e.indexOf(t[r].url) - 1,
                                a = e.slice(0, i),
                                u = e.slice(s),
                                c = a.concat(u);
                            return c = c.map(function(e) {
                                if (e.indexOf("#EXT-X-MEDIA-SEQUENCE") !== -1) {
                                    var t = +e.match(/\d+/)[0];
                                    e = "#EXT-X-MEDIA-SEQUENCE:" + (t + r)
                                }
                                return e
                            })
                        }

                        function E(e) {
                            if (o.EXTERNAL_MEDIA_LIVE_START_POS && o.EXTERNAL_MEDIA_LIVE_START_POS !== -1) return m;
                            var t = r.parse("", m)[""];
                            if (!t || "live" !== t.mode) return m;
                            if (!t || !t.segments.length) return m;
                            if (!e || "auto" === e) {
                                for (var n = 0, a = 0; a < t.segments.length; a++) n += t.segments[a].duration / 1e3;
                                var u = n / t.segments.length,
                                    c = Math.min(2 * u, o.MAX_AUTOMATIC_DELAY),
                                    l = Math.min(n, o.MAX_AUTOMATIC_DELAY);
                                e = s.randomOffset(c, l, u), o.LIVE_SECONDS_DELAY = e
                            }
                            for (var d = 0, f = t.segments.length; d < e && f > 0;) d += t.segments[f - 1].duration / 1e3, f--;
                            if (f = Math.max(f, o.MIN_NUMBER_OF_REMAINING_SEGMENTS), t.segments.length <= f) return m;
                            var p = m.split(/\r?\n/),
                                h = t.segments[f].url,
                                g = p.indexOf(h);
                            if (g === -1) return i.warn({
                                firstSegToRemove: h
                            }, "playlist manipulation error - can't find slicing point"), m;
                            for (var E = g - 1, a = E; a >= 0; a--) {
                                var _ = p[a].trim();
                                if ("#" !== _.charAt(0)) {
                                    E = a + 1;
                                    break
                                }
                            }
                            var T, R = p.slice(0, E);
                            return T = o.FEATURE_PRUNE_SEGMENTS_FROM_START ? v(R, t.segments, f - 1) : R,
                                "" === p[p.length - 1] && "" !== T[T.length - 1] && T.push(""), T.join("\n")
                        }

                        function _(e) {
                            if ("string" != typeof m || !m || 0 === m.length) return m;
                            if (m.indexOf("#EXTM3U") > -1) return E(e);
                            if (o.DELAY_DASH) {
                                var t = new DOMParser,
                                    n = t.parseFromString(m, "application/xml"),
                                    r = n.querySelector("MPD");
                                if (r && "dynamic" === r.getAttribute("type")) {
                                    var i = g(n, e);
                                    return i
                                }
                            }
                            return m
                        }
                        var m = n;
                        return {
                            manipulateManifest: _
                        }
                    };
                e.exports = a
            }).call(t, n(4))
        }, function(e, t, n) {
            ! function(t) {
                e.exports = t()
            }(function(e) {
                "use strict";

                function t(e, t) {
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3];
                    n += (r & i | ~r & o) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + r | 0, o += (n & r | ~n & i) + t[1] - 389564586 | 0, o = (o << 12 | o >>> 20) + n | 0, i += (o & n | ~o & r) + t[2] + 606105819 | 0, i = (i << 17 | i >>> 15) + o | 0, r += (i & o | ~i & n) + t[3] - 1044525330 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & i | ~r & o) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + r | 0, o += (n & r | ~n & i) + t[5] + 1200080426 | 0, o = (o << 12 | o >>> 20) + n | 0, i += (o & n | ~o & r) + t[6] - 1473231341 | 0, i = (i << 17 | i >>> 15) + o | 0, r += (i & o | ~i & n) + t[7] - 45705983 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & i | ~r & o) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + r | 0, o += (n & r | ~n & i) + t[9] - 1958414417 | 0, o = (o << 12 | o >>> 20) + n | 0, i += (o & n | ~o & r) + t[10] - 42063 | 0, i = (i << 17 | i >>> 15) + o | 0, r += (i & o | ~i & n) + t[11] - 1990404162 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & i | ~r & o) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + r | 0, o += (n & r | ~n & i) + t[13] - 40341101 | 0, o = (o << 12 | o >>> 20) + n | 0, i += (o & n | ~o & r) + t[14] - 1502002290 | 0, i = (i << 17 | i >>> 15) + o | 0, r += (i & o | ~i & n) + t[15] + 1236535329 | 0, r = (r << 22 | r >>> 10) + i | 0, n += (r & o | i & ~o) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + r | 0, o += (n & i | r & ~i) + t[6] - 1069501632 | 0, o = (o << 9 | o >>> 23) + n | 0, i += (o & r | n & ~r) + t[11] + 643717713 | 0, i = (i << 14 | i >>> 18) + o | 0, r += (i & n | o & ~n) + t[0] - 373897302 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r & o | i & ~o) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + r | 0, o += (n & i | r & ~i) + t[10] + 38016083 | 0, o = (o << 9 | o >>> 23) + n | 0, i += (o & r | n & ~r) + t[15] - 660478335 | 0, i = (i << 14 | i >>> 18) + o | 0, r += (i & n | o & ~n) + t[4] - 405537848 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r & o | i & ~o) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + r | 0, o += (n & i | r & ~i) + t[14] - 1019803690 | 0, o = (o << 9 | o >>> 23) + n | 0, i += (o & r | n & ~r) + t[3] - 187363961 | 0, i = (i << 14 | i >>> 18) + o | 0, r += (i & n | o & ~n) + t[8] + 1163531501 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r & o | i & ~o) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + r | 0, o += (n & i | r & ~i) + t[2] - 51403784 | 0, o = (o << 9 | o >>> 23) + n | 0, i += (o & r | n & ~r) + t[7] + 1735328473 | 0, i = (i << 14 | i >>> 18) + o | 0, r += (i & n | o & ~n) + t[12] - 1926607734 | 0, r = (r << 20 | r >>> 12) + i | 0, n += (r ^ i ^ o) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + r | 0, o += (n ^ r ^ i) + t[8] - 2022574463 | 0, o = (o << 11 | o >>> 21) + n | 0, i += (o ^ n ^ r) + t[11] + 1839030562 | 0, i = (i << 16 | i >>> 16) + o | 0, r += (i ^ o ^ n) + t[14] - 35309556 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (r ^ i ^ o) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + r | 0, o += (n ^ r ^ i) + t[4] + 1272893353 | 0, o = (o << 11 | o >>> 21) + n | 0, i += (o ^ n ^ r) + t[7] - 155497632 | 0, i = (i << 16 | i >>> 16) + o | 0, r += (i ^ o ^ n) + t[10] - 1094730640 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (r ^ i ^ o) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + r | 0, o += (n ^ r ^ i) + t[0] - 358537222 | 0, o = (o << 11 | o >>> 21) + n | 0, i += (o ^ n ^ r) + t[3] - 722521979 | 0, i = (i << 16 | i >>> 16) + o | 0, r += (i ^ o ^ n) + t[6] + 76029189 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (r ^ i ^ o) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + r | 0, o += (n ^ r ^ i) + t[12] - 421815835 | 0, o = (o << 11 | o >>> 21) + n | 0, i += (o ^ n ^ r) + t[15] + 530742520 | 0, i = (i << 16 | i >>> 16) + o | 0, r += (i ^ o ^ n) + t[2] - 995338651 | 0, r = (r << 23 | r >>> 9) + i | 0, n += (i ^ (r | ~o)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + r | 0, o += (r ^ (n | ~i)) + t[7] + 1126891415 | 0, o = (o << 10 | o >>> 22) + n | 0, i += (n ^ (o | ~r)) + t[14] - 1416354905 | 0, i = (i << 15 | i >>> 17) + o | 0, r += (o ^ (i | ~n)) + t[5] - 57434055 | 0, r = (r << 21 | r >>> 11) + i | 0, n += (i ^ (r | ~o)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + r | 0, o += (r ^ (n | ~i)) + t[3] - 1894986606 | 0, o = (o << 10 | o >>> 22) + n | 0, i += (n ^ (o | ~r)) + t[10] - 1051523 | 0, i = (i << 15 | i >>> 17) + o | 0, r += (o ^ (i | ~n)) + t[1] - 2054922799 | 0, r = (r << 21 | r >>> 11) + i | 0, n += (i ^ (r | ~o)) + t[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + r | 0, o += (r ^ (n | ~i)) + t[15] - 30611744 | 0, o = (o << 10 | o >>> 22) + n | 0, i += (n ^ (o | ~r)) + t[6] - 1560198380 | 0, i = (i << 15 | i >>> 17) + o | 0, r += (o ^ (i | ~n)) + t[13] + 1309151649 | 0, r = (r << 21 | r >>> 11) + i | 0, n += (i ^ (r | ~o)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + r | 0, o += (r ^ (n | ~i)) + t[11] - 1120210379 | 0, o = (o << 10 | o >>> 22) + n | 0, i += (n ^ (o | ~r)) + t[2] + 718787259 | 0, i = (i << 15 | i >>> 17) + o | 0, r += (o ^ (i | ~n)) + t[9] - 343485551 | 0, r = (r << 21 | r >>> 11) + i | 0, e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = i + e[2] | 0, e[3] = o + e[3] | 0
                }

                function n(e) {
                    var t, n = [];
                    for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                    return n
                }

                function r(e) {
                    var t, n = [];
                    for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                    return n
                }

                function i(e) {
                    var r, i, o, s, a, u, c = e.length,
                        l = [1732584193, -271733879, -1732584194, 271733878];
                    for (r = 64; r <= c; r += 64) t(l, n(e.substring(r - 64, r)));
                    for (e = e.substring(r - 64), i = e.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < i; r += 1) o[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
                    if (o[r >> 2] |= 128 << (r % 4 << 3), r > 55)
                        for (t(l, o), r = 0; r < 16; r += 1) o[r] = 0;
                    return s = 8 * c, s = s.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), u = parseInt(s[1], 16) || 0, o[14] = a, o[15] = u, t(l, o), l
                }

                function o(e) {
                    var n, i, o, s, a, u, c = e.length,
                        l = [1732584193, -271733879, -1732584194, 271733878];
                    for (n = 64; n <= c; n += 64) t(l, r(e.subarray(n - 64, n)));
                    for (e = n - 64 < c ? e.subarray(n - 64) : new Uint8Array(0), i = e.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < i; n += 1) o[n >> 2] |= e[n] << (n % 4 << 3);
                    if (o[n >> 2] |= 128 << (n % 4 << 3), n > 55)
                        for (t(l, o), n = 0; n < 16; n += 1) o[n] = 0;
                    return s = 8 * c, s = s.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), u = parseInt(s[1], 16) || 0, o[14] = a, o[15] = u, t(l, o), l
                }

                function s(e) {
                    var t, n = "";
                    for (t = 0; t < 4; t += 1) n += g[e >> 8 * t + 4 & 15] + g[e >> 8 * t & 15];
                    return n
                }

                function a(e) {
                    var t;
                    for (t = 0; t < e.length; t += 1) e[t] = s(e[t]);
                    return e.join("")
                }

                function u(e) {
                    return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
                }

                function c(e, t) {
                    var n, r = e.length,
                        i = new ArrayBuffer(r),
                        o = new Uint8Array(i);
                    for (n = 0; n < r; n += 1) o[n] = e.charCodeAt(n);
                    return t ? o : i
                }

                function l(e) {
                    return String.fromCharCode.apply(null, new Uint8Array(e))
                }

                function d(e, t, n) {
                    var r = new Uint8Array(e.byteLength + t.byteLength);
                    return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer
                }

                function f(e) {
                    var t, n = [],
                        r = e.length;
                    for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                    return String.fromCharCode.apply(String, n)
                }

                function p() {
                    this.reset()
                }
                var h = function(e, t) {
                        return e + t & 4294967295
                    },
                    g = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                return "5d41402abc4b2a76b9719d911017c592" !== a(i("hello")) && (h = function(e, t) {
                    var n = (65535 & e) + (65535 & t),
                        r = (e >> 16) + (t >> 16) + (n >> 16);
                    return r << 16 | 65535 & n
                }), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || ! function() {
                    function t(e, t) {
                        return e = 0 | e || 0, e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                    }
                    ArrayBuffer.prototype.slice = function(n, r) {
                        var i, o, s, a, u = this.byteLength,
                            c = t(n, u),
                            l = u;
                        return r !== e && (l = t(r, u)), c > l ? new ArrayBuffer(0) : (i = l - c, o = new ArrayBuffer(i), s = new Uint8Array(o), a = new Uint8Array(this, c, i), s.set(a), o)
                    }
                }(), p.prototype.append = function(e) {
                    return this.appendBinary(u(e)), this
                }, p.prototype.appendBinary = function(e) {
                    this._buff += e, this._length += e.length;
                    var r, i = this._buff.length;
                    for (r = 64; r <= i; r += 64) t(this._hash, n(this._buff.substring(r - 64, r)));
                    return this._buff = this._buff.substring(r - 64), this
                }, p.prototype.end = function(e) {
                    var t, n, r = this._buff,
                        i = r.length,
                        o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (t = 0; t < i; t += 1) o[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                    return this._finish(o, i), n = a(this._hash), e && (n = f(n)), this.reset(), n
                }, p.prototype.reset = function() {
                    return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, p.prototype.getState = function() {
                    return {
                        buff: this._buff,
                        length: this._length,
                        hash: this._hash
                    }
                }, p.prototype.setState = function(e) {
                    return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
                }, p.prototype.destroy = function() {
                    delete this._hash, delete this._buff, delete this._length
                }, p.prototype._finish = function(e, n) {
                    var r, i, o, s = n;
                    if (e[s >> 2] |= 128 << (s % 4 << 3), s > 55)
                        for (t(this._hash, e), s = 0; s < 16; s += 1) e[s] = 0;
                    r = 8 * this._length, r = r.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(r[2], 16), o = parseInt(r[1], 16) || 0, e[14] = i, e[15] = o, t(this._hash, e)
                }, p.hash = function(e, t) {
                    return p.hashBinary(u(e), t)
                }, p.hashBinary = function(e, t) {
                    var n = i(e),
                        r = a(n);
                    return t ? f(r) : r
                }, p.ArrayBuffer = function() {
                    this.reset()
                }, p.ArrayBuffer.prototype.append = function(e) {
                    var n, i = d(this._buff.buffer, e, !0),
                        o = i.length;
                    for (this._length += e.byteLength, n = 64; n <= o; n += 64) t(this._hash, r(i.subarray(n - 64, n)));
                    return this._buff = n - 64 < o ? new Uint8Array(i.buffer.slice(n - 64)) : new Uint8Array(0), this
                }, p.ArrayBuffer.prototype.end = function(e) {
                    var t, n, r = this._buff,
                        i = r.length,
                        o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (t = 0; t < i; t += 1) o[t >> 2] |= r[t] << (t % 4 << 3);
                    return this._finish(o, i), n = a(this._hash), e && (n = f(n)), this.reset(), n
                }, p.ArrayBuffer.prototype.reset = function() {
                    return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, p.ArrayBuffer.prototype.getState = function() {
                    var e = p.prototype.getState.call(this);
                    return e.buff = l(e.buff), e
                }, p.ArrayBuffer.prototype.setState = function(e) {
                    return e.buff = c(e.buff, !0), p.prototype.setState.call(this, e)
                }, p.ArrayBuffer.prototype.destroy = p.prototype.destroy, p.ArrayBuffer.prototype._finish = p.prototype._finish, p.ArrayBuffer.hash = function(e, t) {
                    var n = o(new Uint8Array(e)),
                        r = a(n);
                    return t ? f(r) : r
                }, p
            })
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                this.source = e, this.sink = t, this.capacity = n, this.reverseEdge = null, this.flow = 0
            }

            function i() {
                this.edges = {}, this.q = new Array(300), this.fetchPathFromSink = function(e, t) {
                    for (var n = [], r = e; r !== !0;) n.push(r), r = t[r];
                    return n.reverse()
                }, this.bfs = function(e, t) {
                    var n = new Array(300),
                        r = 0,
                        i = 0;
                    this.q[r++] = e, n[e] = !0;
                    for (var o = null; r > i;) {
                        if (o = this.q[i++], o === t) return this.fetchPathFromSink(o, n);
                        for (var s = this.edges[o], a = 0; a < s.length; a++) {
                            var u = s[a],
                                c = u.capacity - u.flow;
                            if (c > 0 && void 0 === n[u.sink]) {
                                if (n[u.sink] = o, u.sink === t) return this.fetchPathFromSink(t, n);
                                this.q[r++] = u.sink
                            }
                        }
                    }
                    return []
                }, this.addEdge = function(e, t, n) {
                    if (e !== t) {
                        var i = new r(e, t, n),
                            o = new r(t, e, 0);
                        i.reverseEdge = o, o.reverseEdge = i, void 0 === this.edges[e] && (this.edges[e] = []), void 0 === this.edges[t] && (this.edges[t] = []), this.edges[e].push(i), this.edges[t].push(o)
                    }
                }, this.getEdge = function(e, t) {
                    var n = this.edges[e];
                    if (!n) return null;
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i.sink === t) return i
                    }
                    return null
                }, this.nodePathToEdgePath = function(e) {
                    if (e.length < 2) return [];
                    for (var t = [], n = 0; n < e.length - 1; n++) {
                        var r = e[n],
                            i = e[n + 1],
                            s = this.getEdge(r, i);
                        if (null === s) return o.error("Error missing edge between nodes " + r + " and " + i), [];
                        t.push(s)
                    }
                    return t
                }, this.maxFlow = function(e, t) {
                    for (var n = 0, r = this.bfs(e, t), i = this.nodePathToEdgePath(r), o = 0; i.length > 0;) {
                        var s = 999999;
                        for (o = 0; o < i.length; o++) {
                            var a = i[o].capacity - i[o].flow;
                            a < s && (s = a)
                        }
                        for (o = 0; o < i.length; o++) i[o].flow += s, i[o].reverseEdge.flow -= s;
                        r = this.bfs(e, t), i = this.nodePathToEdgePath(r)
                    }
                    for (o = 0; o < this.edges[e].length; o++) n += this.edges[e][o].flow;
                    return n
                }
            }
            var o = n(2);
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r() {
                window.peer5.Request = u, window.peer5.VideoRequest = u, window.peer5.CatchAllVideoRequest = u, window.peer5.FragmentRequest = u, window.peer5.PlaylistRequest = u
            }

            function i() {
                window.peer5.Request = s.Request, window.peer5.VideoRequest = s.VideoRequest, window.peer5.CatchAllVideoRequest = s.CatchAllVideoRequest, window.peer5.FragmentRequest = s.FragmentRequest, window.peer5.PlaylistRequest = s.PlaylistRequest
            }
            var o = n(2),
                s = n(35),
                a = n(1),
                u = n(8),
                c = n(52),
                l = n(27),
                d = {
                    p2p: function(e) {
                        e === !0 ? (i(), o.info("P2P requests have been enabled")) : e === !1 && (r(), o.info("P2P requests have been disabled"))
                    },
                    upload: function(e) {
                        e === !0 ? (a.LEECH = !1, o.info("Enabling p2p upload")) : e === !1 && (a.LEECH = !0, o.info("Disabling p2p upload"))
                    },
                    abr: function(e) {
                        if (!a.DISABLE_ABR_CONFIGURE) switch (e) {
                            case "hlsjs":
                                a.MIMIC_REAL_HTTP_DOWNLOAD = !1, a.PLAYER_REQUEST_ALWAYS_HTTP = !1, a.EXTERNAL_MEDIA_HLSJS_OVERRIDE = !0, a.ALWAYS_DELAY_MANIFEST = !1, o.info("changed ABR mode to [hlsjs]");
                                break;
                            case "transparent":
                                a.MIMIC_REAL_HTTP_DOWNLOAD = !0, a.PLAYER_REQUEST_ALWAYS_HTTP = !0, a.EXTERNAL_MEDIA_HLSJS_OVERRIDE = !1, a.ALWAYS_DELAY_MANIFEST = !0, o.info("changed ABR mode to [transparent]");
                                break;
                            default:
                                o.error("Requested unknown abr mode [" + e + "]")
                        }
                    },
                    contentId: function(e) {
                        c.set({
                            contentId: e
                        })
                    },
                    contentIdUrlRegex: function(e) {
                        c.set({
                            contentIdUrlRegex: e
                        })
                    },
                    contentIdReplacer: function(e) {
                        c.set({
                            contentIdReplacer: e
                        })
                    },
                    plugin: function(e) {
                        l.injectPlugin(e.name, e.lib)
                    }
                };
            e.exports = function(e) {
                if (!e || "object" != typeof e) throw new TypeError("Invalid options - expected object");
                Object.keys(e).forEach(function(t) {
                    d[t] && d[t](e[t])
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2),
                i = t.params = {};
            t.set = function(e) {
                var t = e || {};
                Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    switch (e) {
                        case "contentId":
                            r.info("changing content id to: " + n), i.id = n;
                            break;
                        case "contentIdUrlRegex":
                            n instanceof RegExp ? (r.info("changing content id url regex to: " + n), i.urlRegex = n) : r.error({
                                urlRegex: n
                            }, "Invalid contentIdUrlRegex - expected RegExp");
                            break;
                        case "contentIdReplacer":
                            "function" != typeof n ? r.error({
                                contentIdReplacer: n
                            }, "Invalid contentIdReplacer - expected function") : (r.info("updating content id replacer function"), i.replacer = function(e) {
                                try {
                                    return n(e) || e
                                } catch (t) {
                                    return console.warn("url replace function has thrown an error", t), e
                                }
                            })
                    }
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(19),
                i = n(195),
                o = {
                    flags: {}
                };
            o.processFlags = function(e) {
                e && "object" == typeof e && Object.keys(e).forEach(function(t) {
                    var n = e[t];
                    switch (t) {
                        case "page":
                            n && window.location.href.indexOf(n) === -1 && r();
                            break;
                        case "deployment":
                            var s = parseInt(n, 10) / 100;
                            !Number.isNaN(s) && Math.random() >= s && r();
                            break;
                        case "cellular":
                            "disable" !== n && "full" !== n || (o.flags.cellular = n);
                            break;
                        case "mobile":
                            "disable" === n && i() && r()
                    }
                })
            }, e.exports = o
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(11),
                o = {
                    MINIMUM_HTTP_CONSTRAINT: function() {
                        return i.min()
                    },
                    MAXIMUM_HTTP_CONSTRAINT: function() {
                        return i.max()
                    }
                };
            e.exports = function(e) {
                var t = "EXTERNAL_" + e;
                return t = t.toUpperCase(), "auto" !== r[t] ? r[t] : e in o ? o[e]() : r.defaults[t]
            }
        }, function(e, t) {
            "use strict";

            function n(e) {
                for (var t = e.slice(2), n = (1 & t.length ? "0" : "") + t, r = new Uint8Array(n.length / 2), i = 0; i < n.length / 2; i++) r[i] = parseInt(n.slice(2 * i, 2 * i + 2), 16);
                return r
            }
            var r = window.crypto && (window.crypto.subtle || window.crypto.webkitSubtle);
            t.isCryptoSupported = function() {
                return "object" == typeof r && null !== r
            }, t.encrypt = function(e, t, i, o) {
                var s = n(i);
                return r.importKey("raw", t, {
                    name: "AES-CBC"
                }, !1, ["encrypt", "decrypt"]).then(function(t) {
                    return r.encrypt({
                        name: "AES-CBC",
                        iv: s
                    }, t, e)
                }).then(function(e) {
                    o(null, e)
                }, function(e) {
                    o(e)
                })
            }, t.decrypt = function(e, t, i, o) {
                var s = n(i);
                return r.importKey("raw", t, {
                    name: "AES-CBC"
                }, !1, ["encrypt", "decrypt"]).then(function(t) {
                    return r.decrypt({
                        name: "AES-CBC",
                        iv: s
                    }, t, e)
                }).then(function(e) {
                    o(null, new Uint8Array(e))
                }, function(e) {
                    o(e)
                })
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e >> 3;
                return e % 8 !== 0 && t++, t
            }

            function i(e, t) {
                function n(e) {
                    var t = e >> 3;
                    return !(t >= a.length) && !!(a[t] & 128 >> e % 8)
                }

                function i(t, n) {
                    var r = t >> 3;
                    if (n === !0) {
                        if (t >= e) return void o.error("Trying to set bit array out of bounds");
                        a[r] |= 128 >> t % 8, u++
                    } else r < a.length && (a[r] &= ~(128 >> t % 8), u--)
                }
                var s = Object.create(null),
                    a = t || new Uint8Array(r(e)),
                    u = 0;
                if (Object.defineProperties(s, {
                        length: {
                            get: function() {
                                return e
                            }
                        },
                        numOfOnBits: {
                            get: function() {
                                return u
                            }
                        },
                        buffer: {
                            get: function() {
                                return a
                            }
                        }
                    }), t)
                    for (var c = 0; c < e; c++) n(c) && u++;
                return s.isSet = n, s.set = i, s
            }
            var o = n(2);
            e.exports = i
        }, function(e, t) {
            "use strict";
            e.exports = window.WebSocket || window.MozWebSocket
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    var e;
                    try {
                        e = Number(localStorage.getItem(h)) || o.LIVE_SECONDS_DELAY
                    } catch (t) {
                        e = o.LIVE_SECONDS_DELAY
                    }
                    try {
                        localStorage.setItem(h, e)
                    } catch (e) {}
                    return e
                }

                function t() {
                    var e = i.getMediaErrors(),
                        t = {
                            regular: 0,
                            emergency: 0
                        };
                    return e.hlsjs ? (t.regular = e.hlsjs.ABR_SWITCH || 0, t.emergency = e.hlsjs.EMERGENCY_SWITCH || 0, t) : t
                }

                function n(e, t) {
                    var n = e.p2pUp / (e.p2pDown + e.httpDown),
                        r = n / (t + 1),
                        i = o.LIVE_SECONDS_DELAY;
                    return r > 1 ? 1.2 : n > .5 ? 1.1 : i > d ? 1.1 : .9
                }

                function r(e) {
                    try {
                        localStorage.setItem(p, e)
                    } catch (e) {}
                }

                function g() {
                    try {
                        var e = Number(localStorage.getItem(p));
                        return e || 1
                    } catch (e) {
                        return 1
                    }
                }

                function v() {
                    var e = i.getStats();
                    if (E && !(e.p2pUp < s)) {
                        var o = t();
                        if (!(o.regular - m.regular > a || o.emergency - m.emergency > u || e["rebuffer.end"].length > c)) {
                            var l = n(e, o.regular - m.regular);
                            r(l * T)
                        }
                    }
                }
                var E = !1,
                    _ = 1e4,
                    m = {
                        regular: 0,
                        emergency: 0
                    },
                    T = g();
                return radio("player.attach").subscribe(function(e) {
                    e.on("media.info", function(e) {
                        E = "hlsjs" === e.provider || "hlsjs" === e.vendor
                    }), setTimeout(function() {
                        m = t()
                    }, _)
                }), {
                    monitor: function() {
                        setInterval(v, l)
                    },
                    getDelay: function() {
                        var t = e() * (1 / g());
                        return t < f ? Math.min(e(), f) : t
                    }
                }
            }
            var i = n(6),
                o = n(1),
                s = 104857600,
                a = 8,
                u = 1,
                c = 3,
                l = 100,
                d = 20,
                f = 8,
                p = "peer5.peer-power",
                h = "peer5.peer-metric";
            e.exports = r, e.exports.instance = r()
        }, function(e, t) {
            "use strict";
            e.exports = function(e) {
                if (e.getbufferLength) try {
                    return e.getbufferLength()
                } catch (e) {}
                if (e.vjs_getProperty) try {
                    return (e.vjs_getProperty("buffered") || NaN) - (e.vjs_getProperty("currentTime") || NaN) || 0
                } catch (e) {}
                return 0
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e) {
                    var t = s(e.currentSrc || e.src, {
                        ignoreQuery: c.ignoreQuery
                    });
                    return "mse" === t || "hls" === t || "dash" === t || !(!c.allowProgressiveVideos || "progressive" !== t)
                }

                function n(e) {
                    return (!e.className || e.className.indexOf("hola_video_preview") === -1) && ((!e.previousElementSibling || e.previousElementSibling.className.indexOf("hola_preview_") === -1) && (!e.parentNode || e.parentNode.className.indexOf("hola_preview_") === -1))
                }

                function r(e, t) {
                    return !e.paused && t.paused ? -1 : !t.paused && e.paused ? 1 : e.currentTime > t.currentTime ? -1 : t.currentTime > e.currentTime ? 1 : 0
                }

                function a() {
                    var e = i({
                        html5Only: !0,
                        includeAudio: !0,
                        multiple: !0
                    });
                    e && (e = e.filter(t), e = e.filter(n), e.length > 1 && (e = e.sort(r)), e.length && d !== e[0] && (d = e[0], f.emit("elementDiscovered", e[0])))
                }

                function u() {
                    clearInterval(l), f.removeAllListeners(), d = null
                }
                var c = e || {};
                c.interval = c.interval || 1e3, c.allowProgressiveVideos = Boolean(c.allowProgressiveVideos);
                var l, d, f = new o;
                return l = setInterval(a, c.interval), f.destroy = u, f
            }
            var i = n(180),
                o = n(3),
                s = n(77);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!e) return t;
                var n = f.getAbsoluteURL(e, t);
                return c.ZIXI_DIGEST && (n = d.zixi(n)), n
            }

            function i(e) {
                var t = {},
                    n = e.replace(/^#[^:]+:/, "").match(g);
                return n && n.forEach(function(e) {
                    var n = e.split("=");
                    1 === n.length ? t[n[0].toLowerCase()] = "" : 2 === n.length ? t[n[0].toLowerCase()] = n[1].replace(/^"|"$/g, "") : t[n.shift().toLowerCase()] = n.join("=").replace(/^"|"$/g, "")
                }), t
            }

            function o(e, t) {
                var n = t.match(h);
                if (null === n) return [];
                for (var o = [], s = 0; s < n.length; s++) {
                    var a = n[s].split(/\r?\n/);
                    if (a[1]) {
                        var u = i(a[0]);
                        u.url = r(e, a[1]), o.push(u)
                    }
                }
                return o
            }

            function s(e) {
                var t = e.slice(0, c.PLAYLIST_METATDATA_AREA),
                    n = e.slice(Math.max(e.length - c.PLAYLIST_METATDATA_AREA, 0), e.length),
                    r = {};
                if (r.type = t.indexOf("#EXT-X-STREAM-INF") !== -1 ? "levels" : "segments", "levels" === r.type) return r;
                var i = n.indexOf("#EXT-X-ENDLIST") !== -1 || t.indexOf("#EXT-X-PLAYLIST-TYPE:VOD") !== -1;
                r.mode = i ? "vod" : "live";
                var o = /#EXT-X-KEY:METHOD=AES-128,URI="?(.*?)"?,IV=(.*)\r?\n/.exec(t),
                    s = null !== o;
                s && (r.key = {
                    url: o[1],
                    iv: o[2]
                });
                var a = /^\s*#EXT-X-TARGETDURATION:\s*(\d+)\s*(:|$)/im.exec(t),
                    u = a && 1e3 * parseFloat(a[1]);
                u && (r.targetDuration = u);
                var l = /^\s*#EXT-X-VERSION:\s*(\d+)\s*(:|$)/im.exec(t),
                    d = l && parseFloat(l[1]);
                d && (r.version = d);
                var f = /^\s*#EXT-X-MEDIA-SEQUENCE:\s*(\d+)\s*(:|$)/im.exec(t),
                    p = f && parseInt(f[1], 10);
                return r.sequence = "number" != typeof p || Number.isNaN(p) ? 0 : p, r
            }

            function a(e, t) {
                var n = e.split(/\r?\n/);
                if (n.length < 2) return null;
                var i, o = 0;
                do o++, i = n[o]; while (o < n.length && "#" === i.charAt(0));
                if (o === n.length) return null;
                var s = n[0].substring("#EXTINF:".length),
                    a = 1e3 * parseFloat(s) || 0;
                return {
                    duration: a,
                    url: r(t, i)
                }
            }

            function u(e, t, n) {
                for (var r = [], i = 0, o = e.length, s = t; i < o;) {
                    var u, c = e.indexOf("#EXTINF", i + 1);
                    if (c === -1 && (c = o), u = e.slice(i, c), u = u.trim(), s === t && u.indexOf("#EXT-X-BYTERANGE:") !== -1) return [];
                    if (i = c, p(u, "#EXTINF:")) {
                        var d = a(u, n);
                        d ? (r.push({
                            url: d.url,
                            duration: d.duration,
                            sequence: s
                        }), s++) : v || (v = !0, l.error({
                            playlistUrl: n,
                            segmentStr: u,
                            segmentStrArea: e.slice(i - 200, i + 200)
                        }, "couldn't parse segment string"))
                    }
                }
                return r
            }
            var c = n(1),
                l = n(2),
                d = n(13),
                f = n(15),
                p = n(75),
                h = /^#EXT-X-STREAM-INF.*\r?\n.+(?!#EXT)(?:\r?\n|$)/gim,
                g = /[^=,]+="[^"]+"|[^,]+/g,
                v = !1;
            t.parse = function(e, t) {
                var n = t,
                    r = s(n),
                    i = {
                        type: r.type,
                        targetDuration: r.targetDuration,
                        version: r.version,
                        mode: r.mode,
                        key: r.key,
                        protocol: "hls"
                    };
                "levels" === r.type ? i.levels = o(e, n) : (i.segments = u(n, r.sequence, e), i.segments.length || (i = null));
                var a = {};
                return a[e] = i, a
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                if (a) return !0;
                try {
                    if (!e) return sessionStorage.getItem("_p2p_consent_") || localStorage.getItem("_p2p_consent_");
                    a = !0, sessionStorage.setItem("_p2p_consent_", "1"), localStorage.setItem("_p2p_consent_", "1")
                } catch (e) {}
                return !1
            }

            function i() {
                r() || o.loadPlugin("consent-prompt", function(e) {
                    e.render({
                        privacyPolicyLink: u,
                        termsOfServiceLink: c,
                        onApproved: function() {
                            r(!0)
                        }
                    })
                })
            }
            var o = n(27),
                s = [],
                a = !1,
                u = "",
                c = "";
            t.init = function(e) {
                var t = e || {};
                return t.privacyPolicyLink && (u = t.privacyPolicyLink), t.termsOfServiceLink && (c = t.termsOfServiceLink), t.showPrompt ? void i() : void(Array.isArray(t.showForGEOs) && t.showForGEOs.length && s.push.apply(s, t.showForGEOs))
            }, t.setMyGeo = function(e) {
                s.indexOf(e) !== -1 && i()
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return e.length > w && (e = e.substr(0, w)), new Array(w - e.length + 1).join(" ").concat(e)
            }

            function i(e) {
                var t = e.reduce(function(e, t) {
                        return e + t.length
                    }, 0),
                    n = new Uint8Array(t),
                    r = 0;
                return e.forEach(function(e) {
                    n.set(e, r), r += e.length
                }), n
            }

            function o(e) {
                return String.fromCharCode.apply(null, e).trim()
            }

            function s(e) {
                for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                return t
            }

            function a(e, t) {
                var n = t,
                    r = 0;
                return r += e[n++] << 24, r += e[n++] << 16, r += e[n++] << 8, r += e[n]
            }

            function u(e) {
                var t = 0,
                    n = e;
                "number" != typeof n.length && (n = Array.prototype.slice.call(arguments));
                for (var r = new Uint8Array(4 * n.length), i = 0; i < n.length; i++) {
                    var o = n[i];
                    r[t++] = (4278190080 & o) >> 24, r[t++] = (16711680 & o) >> 16, r[t++] = (65280 & o) >> 8, r[t++] = 255 & o
                }
                return r
            }

            function c(e) {
                var t = u(e.requestId),
                    n = u(e.chunkId);
                return i([t, n, e.payload])
            }

            function l(e, t, n) {
                var r = t,
                    i = a(e, r);
                r += 4;
                var o = a(e, r);
                r += 4;
                var s = e.subarray(r, r + n);
                return new A.DataMessage(i, o, s)
            }

            function d(e) {
                var t = u(e.requestId),
                    n = s(r(e.swarmId)),
                    o = u(e.chunkIds);
                return i([t, n, o])
            }

            function f(e, t, n) {
                var r = t,
                    i = a(e, r);
                r += 4;
                var s = o(e.subarray(r, r + w));
                r += w;
                for (var u = []; r < t + n;) u.push(a(e, r)), r += 4;
                return new A.RequestMessage(i, s, u)
            }

            function p(e) {
                var t = [],
                    n = s(r(e.swarmId));
                t.push(n);
                var o = s(e.hashUrl);
                t.push(o);
                var a = u(e.filesize);
                return t.push(a), t.push(e.availabilityMap), i(t)
            }

            function h(e) {
                var t = s(r(e.swarmId)),
                    n = s(e.hashUrl);
                return i([t, n])
            }

            function g(e) {
                var t = s(r(e.swarmId)),
                    n = s(e.hashUrl),
                    o = u(e.filesize);
                return i([t, n, o])
            }

            function v(e) {
                var t = s(e.hashUrl);
                return i([t])
            }

            function E(e) {
                var t = u(e.segSeq);
                return i([t])
            }

            function _(e, t, n) {
                var r, i = t,
                    s = o(e.subarray(i, i + w));
                i += w;
                var u = o(e.subarray(i, i + I));
                i += I;
                var c = a(e, i);
                return i += 4, r = e.subarray(i, t + n), new A.HaveMessage(s, u, c, r)
            }

            function m(e, t) {
                var n = t,
                    r = o(e.subarray(n, n + w));
                n += w;
                var i = o(e.subarray(n, n + I));
                return new A.DontHaveMessage(r, i)
            }

            function T(e, t) {
                var n = t,
                    r = o(e.subarray(n, n + w));
                n += w;
                var i = o(e.subarray(n, n + I));
                n += I;
                var s = a(e, n);
                return new A.DownloadingMessage(r, i, s)
            }

            function R(e, t) {
                var n = t,
                    r = o(e.subarray(n, n + I));
                return new A.InitializingMessage(r)
            }

            function S(e, t) {
                var n = t,
                    r = a(e, n);
                return new A.NewSegmentMessage(r)
            }

            function y(e, t, n) {
                var r = e,
                    i = n,
                    o = new Uint8Array(5 + i.length),
                    s = i.length;
                return o[r++] = t, o.set(u(s), r), r += b, o.set(i, r), o
            }

            function P(e, t) {
                var n = t,
                    r = e[n++],
                    i = a(e, n);
                n += b;
                var o = e.subarray(n, n + i);
                return [r, o]
            }
            var A = n(9),
                w = 36,
                I = 32,
                O = 1,
                b = 4,
                N = {};
            N[A.P2P_DATA] = {
                encode: c,
                decode: l
            }, N[A.P2P_REQUEST] = {
                encode: d,
                decode: f
            }, N[A.P2P_HAVE] = {
                encode: p,
                decode: _
            }, N[A.P2P_DONT_HAVE] = {
                encode: h,
                decode: m
            }, N[A.P2P_DOWNLOADING] = {
                encode: g,
                decode: T
            }, N[A.P2P_NEW_SEGMENT] = {
                encode: E,
                decode: S
            }, N[A.P2P_INITIALIZING] = {
                encode: v,
                decode: R
            }, t.encode = function(e) {
                var t = [];
                return e.forEach(function(e) {
                    var n = N[e.tag];
                    if (n && n.encode) {
                        var r = n.encode(e);
                        t.push(y(0, e.tag, r))
                    }
                }), i(t)
            }, t.decode = function(e) {
                for (var t = 0, n = []; t < e.length;) {
                    var r = P(e, t),
                        i = r[0],
                        o = r[1];
                    t += O + b;
                    var s = N[i];
                    if (!s || !s.decode) return null;
                    n.push(s.decode(e, t, o.length)), t += o.length
                }
                return n
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e, t) {
                    r.endBuffer = e, r.endEvent = t, r.duration = n.elapsed(), i.ended = !0, l.every(function(e) {
                        return e.ended
                    }) && (c = a())
                }
                var n = a(),
                    r = Object.create(null),
                    i = Object.create(null);
                return i.ended = !1, c = null, u.push(r), r.startBuffer = e, i.end = t, l.push(i), i
            }

            function i() {
                return u
            }

            function o(e, t) {
                l.forEach(function(n) {
                    n.ended || n.end(e, t)
                }), l = l.filter(function(e, t) {
                    return t > l.length - 3 || !e.ended
                })
            }

            function s() {
                return null === c ? 0 : c.elapsed()
            }
            var a = n(5),
                u = [],
                c = a(),
                l = [];
            e.exports = r, e.exports.getRequestStats = i, e.exports.endRequests = o, e.exports.getDurationSinceLastActiveRequest = s
        }, function(e, t, n) {
            "use strict";

            function r() {
                var e = c.getLocationHref(),
                    t = a.urlWithAllowedKeys(e, u.PAGE_URL_ALLOWED_QUERY_PARAMETERS);
                return u.PAGE_URL_STRIP_REGEX && (t = t.replace(u.PAGE_URL_STRIP_REGEX, "")), u.PAGE_URL_STRIP_HASH && (t = t.split("#")[0]), encodeURIComponent(t).replace(/'/g, "%27").replace(/"/g, "%22")
            }

            function i() {
                return "0.94.90"
            }

            function o() {
                return u.VERSION
            }

            function s() {
                return window.__peer5SdkVersion
            }
            var a = n(13),
                u = n(1),
                c = n(20);
            t.getMobileSdkVersion = s, t.getPageUrl = r, t.getClientVersion = i, t.getConfigVersion = o
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e) {
                    if (!E) {
                        E = !0;
                        try {
                            g.onopen = null, g.onclose = null, g.onerror = null, g.onmessage = null, g.close()
                        } catch (e) {
                            s.warn("RTCDataChannel close failed: " + (e && e.message))
                        }
                        g = null, m.reset(), v.emit("close", e), v.removeAllListeners()
                    }
                }

                function n() {
                    return g.bufferedAmount >= o.DC_MAX_BUFFERED_AMOUNT
                }

                function r(e) {
                    function r() {
                        if ("open" === g.readyState) {
                            if (_.length > 0 || o.DC_CHECK_BUFFER && n()) return void _.push(e);
                            try {
                                o.WEBRTC_TEMASYS_SUPPORT && u.isCustomDataChannelAPI() ? g.send(e, "Uint8Array") : g.send(e)
                            } catch (e) {
                                s.warn("RTCDataChannel send error: " + (e && e.message)), t("dc-send-error")
                            }
                        }
                    }
                    E || (o.DC_SEND_QUEUE ? m.push(r) : r())
                }

                function l() {
                    v.emit("open")
                }

                function d() {
                    t("dc-close")
                }

                function f() {
                    t("dc-error")
                }

                function p(e) {
                    var n;
                    try {
                        n = new Uint8Array(e.data)
                    } catch (e) {
                        return void t("dc-oom")
                    }
                    v.emit("message", n)
                }

                function h() {
                    if (_.length > 0) {
                        var e = _;
                        _ = [], e.forEach(r)
                    }
                }
                var g, v = new i,
                    E = !1,
                    _ = [],
                    m = a();
                m.canrun = function() {
                    return !(E || o.DC_CHECK_BUFFER && n())
                };
                try {
                    g = e.createDataChannel("channel", c), g.binaryType = "arraybuffer", g.bufferedAmountLowThreshold = o.DC_MAX_BUFFERED_AMOUNT, g.onopen = l, g.onmessage = p, g.onclose = d, g.onerror = f, g.onbufferedamountlow = h
                } catch (e) {
                    s.warn("RTCDataChannel creation failed: " + (e && e.message)), setTimeout(t.bind(null, "dc-create-error"), 0)
                }
                return v.send = r, v.close = t, v
            }
            var i = n(3),
                o = n(1),
                s = n(2),
                a = n(89),
                u = n(24),
                c = {
                    negotiated: !0,
                    ordered: o.DC_ORDERED,
                    id: 1
                };
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                function d() {
                    if (!T && !R) {
                        T = !0;
                        var e = n.length - _;
                        w.chunksInTime = _, w.chunksLate = e, 0 === e && s.error({
                            requestId: m
                        }, "P2PRequest expired, but no chunks actually did"), E.emit("late", w)
                    }
                }

                function f() {
                    w.chunksInTime = _, E.emit("timeGoal", w)
                }

                function p() {
                    w.duration = A.elapsed(), w.endTime = w.startTime + w.duration, clearTimeout(S), S = null, clearTimeout(y), y = null, T || R || (w.chunksInTime = _), E.emit("finish", w), E.removeAllListeners()
                }

                function h(e, t) {
                    w.latency || (w.latency = A.elapsed()), w.size += t.length, w.speed = Math.round(w.size / (A.elapsed() / 1e3)), _++;
                    var r = _ === n.length;
                    r && s.info("received last chunk: requestId=" + m + " chunksInTime=" + _);
                    try {
                        E.emit("chunk", e, t)
                    } catch (e) {
                        s.error("emit chunk throws, requestId=" + m, e)
                    }
                    r && s.info("emitted last chunk: requestId=" + m + " chunksInTime=" + _ + " chunks=" + n.length), _ === n.length && p()
                }

                function g() {
                    R || (R = !0, T || (w.chunksInTime = _), w.chunksAborted = n.length - _, E.emit("abort"), p())
                }

                function v() {
                    S = setTimeout(d, c.value()), y = setTimeout(f, P()), e.send(new a.RequestMessage(m, t, n))
                }
                var E = new i,
                    _ = 0,
                    m = l++,
                    T = !1,
                    R = !1,
                    S = null,
                    y = null,
                    P = function() {
                        return c.value() * o.PC_WINDOW_DURATION_GOAL_RATIO
                    },
                    A = u(),
                    w = {
                        type: "p2p",
                        id: m,
                        counter: r,
                        startTime: A.epoch(),
                        size: 0,
                        chunks: n.length,
                        duration: void 0,
                        speed: void 0,
                        latency: void 0,
                        swarmId: t,
                        peerId: e.peerId,
                        window: e.maxNumOfPendingChunks,
                        numOfPendingChunks: e.numOfPendingChunks,
                        availableChunks: e.maxNumOfPendingChunks - e.numOfPendingChunks - n.length,
                        chunksInTime: 0,
                        chunksLate: 0,
                        chunksAborted: 0
                    };
                return s.info("Created p2pRequest: id=" + m + " peerId=" + e.peerId + " swarm=" + t + " chunks=" + n.length + " window=" + e.maxNumOfPendingChunks + " pending=" + e.numOfPendingChunks), E.send = v, E.abort = g, E.receiveChunk = h, Object.defineProperties(E, {
                    requestId: {
                        value: m
                    },
                    peerId: {
                        value: e.peerId
                    },
                    swarmId: {
                        value: t
                    },
                    chunkIds: {
                        value: n
                    },
                    numOfPendingChunks: {
                        get: function() {
                            return n.length - _
                        }
                    },
                    aborted: {
                        get: function() {
                            return R
                        }
                    },
                    expired: {
                        get: function() {
                            return T
                        }
                    }
                }), E
            }
            var i = n(3),
                o = n(1),
                s = n(2),
                a = n(9),
                u = n(5),
                c = n(18),
                l = 1;
            e.exports = r
        }, function(e, t) {
            "use strict";
            t.sortPeersByLoad = function(e) {
                return e.slice().sort(function(e, t) {
                    return e.numOfPendingChunks > t.numOfPendingChunks ? 1 : e.numOfPendingChunks < t.numOfPendingChunks ? -1 : t.maxNumOfPendingChunks - t.numOfPendingChunks - (e.maxNumOfPendingChunks - e.numOfPendingChunks)
                })
            }, t.sortPeersByWindow = function(e) {
                return e.slice().sort(function(e, t) {
                    return t.maxNumOfPendingChunks - e.maxNumOfPendingChunks
                })
            }, t.sortPeersByAvailableChunks = function(e) {
                return e.slice().sort(function(e, t) {
                    return t.maxNumOfPendingChunks - t.numOfPendingChunks - (e.maxNumOfPendingChunks - e.numOfPendingChunks)
                })
            }, t.countPendingChunksPerPeer = function(e) {
                var t = Object.create(null);
                return e.forEach(function(e) {
                    t[e.peerId] = e.numOfPendingChunks
                }), t
            }
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                var n = t / 2,
                    r = t - 2 * e.chunksLate;
                return Math.ceil(Math.max(n, r))
            }
            t.calculateExponentialWindowDecrease = n
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    return "function" == typeof document.hasFocus ? document.hasFocus() : void 0
                }

                function t() {
                    var e = i.getDocumentVisibility();
                    return "boolean" == typeof e.hidden ? !e.hidden : void 0 !== e.visibilityState ? "visible" === e.visibilityState : void 0
                }

                function n() {
                    var e = [].concat([].slice.call(document.querySelectorAll("video")), [].slice.call(document.querySelectorAll("audio")));
                    return e.some(function(e) {
                        return !e.paused && !e.muted && Boolean(e.played && e.played.length)
                    })
                }
                return {
                    isFocused: e,
                    isVisible: t,
                    isAudioPlaying: n
                }
            }
            var i = n(20);
            e.exports = r(), e.exports.factory = r
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t, n) {
                function r(e, t) {
                    return i.multiple ? [].slice.call(e.querySelectorAll(t)) : e.querySelector(t)
                }
                var i = n || {},
                    o = t;
                return o = "string" == typeof o ? document.getElementById(o) : o, o = o ? o.tagName.toLowerCase() !== e ? r(o, e) : o : r(document, e), i.multiple && (o = Array.isArray(o) ? o : o && [o] || [], o = o.length ? o : null), o
            }
        }, function(e, t) {
            "use strict";

            function n() {
                return {
                    get: function(e) {
                        try {
                            return JSON.parse(window.sessionStorage.getItem("PEER5_" + e))
                        } catch (e) {
                            return
                        }
                    },
                    set: function(e, t) {
                        try {
                            return sessionStorage.setItem("PEER5_" + e, JSON.stringify(t))
                        } catch (e) {
                            return
                        }
                    }
                }
            }
            e.exports = n()
        }, function(e, t) {
            "use strict";

            function n(e) {
                return i.encode(e)
            }

            function r(e) {
                return o.decode(e)
            }
            var i = window.TextEncoder && new window.TextEncoder,
                o = window.TextDecoder && new window.TextDecoder;
            e.exports = {
                encode: n,
                decode: r
            }
        }, function(e, t) {
            "use strict";

            function n() {}
            e.exports = function(e, t) {
                function r() {
                    o.parentNode && o.parentNode.removeChild(o)
                }
                var i = t || n,
                    o = document.createElement("script");
                o.src = e, o.onload = function() {
                    r(), i(null)
                }, o.onerror = function() {
                    r(), i(new Error("failed to load script"))
                }, (document.body || document.head).appendChild(o)
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t) {
                if (e.length < t.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (e.charCodeAt(n) !== t.charCodeAt(n)) return !1;
                return !0
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    clearTimeout(d), d = null
                }

                function n() {
                    if (t(), f.length > 0) {
                        var e = f;
                        f = [], l.emit("flush", e)
                    }
                }

                function r(e) {
                    f.push(e), f.length === u ? n() : d || (d = setTimeout(function() {
                        n()
                    }, c))
                }

                function o() {
                    f = [], t()
                }

                function s() {
                    o(), l.removeAllListeners()
                }
                var a = e || {},
                    u = a.count || 4,
                    c = a.timeout || 300,
                    l = new i,
                    d = null,
                    f = [];
                return l.push = r, l.destroy = s, l
            }
            var i = n(3);
            e.exports = r
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t) {
                var n = e;
                return t && t.ignoreQuery === !1 || (n = (e || "").split("?")[0]), /\.m3u8(\?|#|$)/.test(n) ? "hls" : /\.mpd(\?|#|$)/.test(n) ? "dash" : /^(blob|mediasource):/i.test(n) ? "mse" : /\.(mp4|webm|ogg|ogv)(\?|#|$)/i.test(n) ? "progressive" : ""
            }
        }, function(e, t, n) {
            (function(t) {
                var r = n(37),
                    i = n(14),
                    o = n(1),
                    s = n(109),
                    a = n(90),
                    u = n(6),
                    c = n(38),
                    l = n(10),
                    d = n(110),
                    f = n(22),
                    p = n(17),
                    h = n(43),
                    g = n(111),
                    v = n(183),
                    E = n(192),
                    _ = n(31),
                    m = n(123),
                    T = n(12),
                    R = n(19),
                    S = n(2),
                    y = n(119),
                    P = n(21),
                    A = n(11),
                    w = n(42),
                    I = n(13),
                    O = n(163),
                    b = n(177),
                    N = n(191);
                e.exports = Object.subClass({
                    ctor: function(e) {
                        var t = e || {},
                            n = this;
                        if (this.windowErrorListener = v(function(e, t, n, r, i) {
                                S.error('Uncaught exception: "' + e + '" url:"' + t + '" line: ' + n + " col: " + r, i)
                            }), this.windowErrorListener.listen(), this.resources = m(), this.resourceSizesMap = y(), this.controller = w(this.resources), this.encryptedSegmentManager = O(), this.registerEvents(), _()) {
                            if (this.validated = !0,
                                this.reportBuilder = new a(this.resources, t.clientInstanceIndex), h.setABConfig(p.A_B_PUBLISHED_JSON), o.DYNAMIC_CONFIG) {
                                var i = p.A_B_PUBLISHED_JSON;
                                s(function(e) {
                                    g(e), p.applyDynamicConfig(e && e.EXPERIMENTS), e && i !== p.A_B_PUBLISHED_JSON && (r.updateABConfig(p.A_B_PUBLISHED_JSON), h.setABConfig(p.A_B_PUBLISHED_JSON)), n.initGAManager()
                                })
                            }
                            if (o.liveSecondsDelayAbTest)
                                if ("auto" === o.liveSecondsDelayAbTest) o.LIVE_SECONDS_DELAY = "auto";
                                else {
                                    var u = o.liveSecondsDelayAbTest;
                                    o.LIVE_SECONDS_DELAY = T.randomOffset(u.low, u.high, u.bucket)
                                } else this.initGAManager();
                            this.reportInterval = window.setInterval(this.sendReport.bind(this), o.REPORT_INTERVAL)
                        } else this.validated = !1, this.initGAManager();
                        c.onExit(function() {
                            n.handleSessionEnd()
                        })
                    },
                    destroy: function() {
                        clearInterval(this.reportInterval);
                        var e = this.resources.getAllResources();
                        e.forEach(function(e) {
                            this.removeResource(e)
                        }, this), f.destroy(), this.handleSessionEnd(), this.reportBuilder && this.reportBuilder.destroy(), this.controller && this.controller.destroy(), this.encryptedSegmentManager.destroy(), this.windowErrorListener.unListen()
                    },
                    initGAManager: function() {
                        E({
                            enabled: o.GOOGLE_ANALYTICS_REPORTING && o.GOOGLE_ANALYTICS_SAMPLING > Math.random(),
                            trackingId: "UA-37859224-1"
                        })
                    },
                    isValidated: function() {
                        return this.validated
                    },
                    addBasicRequestReport: function(e) {
                        var t = u.getMediaInfo();
                        e.addDimension("mediaType", t.type), e.addDimension("mediaProtocol", t.protocol), e.addDimension("mediaIsEncrypted", t.isEncrypted), this.reportBuilder.addBasicRequestReport(e.build())
                    },
                    addResource: function(e, t, n) {
                        radio("resourceAdded").broadcast(e), u.sum(e, {
                            requestsCount: 1
                        });
                        var r = N.fromURL(e);
                        r && u.setCDNDimension(r);
                        var i = l(e);
                        S.info("hashUrl for " + e + " is " + i);
                        var o = this.resources.get(i);
                        if (o) return void this.addExistingResource(o, e, t, n);
                        var s = this.resources.add(e, t, n);
                        this.addNewResource(s)
                    },
                    addNewResource: function(e) {
                        function t() {
                            if (!e.isStopped) return e.getConstraint() < A.min() ? (S.info("[" + n + "] finished waiting, downloading in http"), void a.controller.downloadInHttp(e)) : void setTimeout(t, 100)
                        }
                        var n = e.hashUrl;
                        S.info("[" + n + "] starting resource initialization process");
                        var r = this.resourceSizesMap.get(n);
                        if (e.isEncrypted && this.encryptedSegmentManager.preloadKey(e), r) return S.info("[" + n + "] initializing with pre-saved size from peers"), this.initializeResource(e, r), void(e.isInitialized && this.startResourceDownload(e));
                        if ("preload" === e.origin) return S.info("[" + n + "] is a preload request, initializing with HEAD"), void this.controller.fetchSizeInHttp(e);
                        if (e.forceHttp) return S.info("[" + n + "] is forced to download in http"), void this.controller.downloadInHttp(e);
                        var o = e.getConstraint();
                        if (o) {
                            if (o < A.min()) return S.info("[" + n + "] is already past its constraint, downloading in http"), void this.controller.downloadInHttp(e);
                            var s = Math.round(o - A.min());
                            S.info("[" + n + "] waiting up to " + s + "ms");
                            var a = this;
                            return void setTimeout(t, 100)
                        }
                        return e.downloadMode === i.P2P ? void S.warn("[" + n + "] p2p mode but no size, waiting for ever") : (S.info("[" + n + "] no mode is set, defaulting to http download"), void this.controller.downloadInHttp(e))
                    },
                    initializeResource: function(e, t) {
                        var n = e.hashUrl;
                        try {
                            e.initialize(t)
                        } catch (t) {
                            return S.warn("[" + n + "] initialization failed with error: " + t.message), R(), u.countMemoryError(t.message), void this.removeResource(e)
                        }
                        var r = e.url,
                            i = e.swarmId,
                            o = e.getStats();
                        S.info("[" + n + "] initialized with size: " + t + ", swarmId: " + i + ", httpProgressBytes: " + o.httpProgress + ", httpWaste: " + o.httpWaste), this.resources.alias(i, r), this.controller.startEstimationMonitoring(e), radio("resourceInitialized").broadcast(e), radio("resourceReady" + e.url).broadcast(e), e.isJoinAllowed && this.askForPeers(i)
                    },
                    addExistingResource: function(e, t, n, r) {
                        S.info("Adding existing resource: " + t + " initialized: " + e.isInitialized + " stopped: " + e.isStopped), e.url !== t && this.resources.alias(t, e.url), e.update(t, n, r), e.isFull || e.restart(), this.controller.startEstimationMonitoring(e), radio("resourceInitialized").broadcast(e), radio("resourceReady" + t).broadcast(e), e.isFull ? this.respondWithResourceBuffer(e, !0) : this.startResourceDownload(e)
                    },
                    removeResource: function(e) {
                        if (S.info("removeResource: removing resource " + e.url + " initialized: " + e.isInitialized + " stopped: " + e.isStopped), e.isInitialized && r.leave(e.swarmId), e.stopBeforeRemoval(), this.controller.removeResource(e), u.removeResource(e.url, e.swarmId), !e.isFull) {
                            var t = e.getStats();
                            S.info("[" + e.hashUrl + "] removed with stats: " + JSON.stringify(t)), this.reportBuilder.reportResourceStats(t), u.setStats(e.swarmId || e.url, t)
                        }
                        this.resources.remove(e.url), this.resourceSizesMap.remove(e.hashUrl)
                    },
                    onRemoveResource: function(e, t) {
                        S.warn("radio:removeResource " + e);
                        var n = this.resources.get(e);
                        return n ? (this.removeResource(n), void radio("requestError" + e).broadcast(t)) : void S.warn("Tried removing resource: " + e + " but it was already removed")
                    },
                    stopResource: function(e) {
                        var t = this.resources.get(e);
                        if (t) {
                            if (S.info("stopResource: stopping resource " + e + " initialized: " + t.isInitialized + " stopped: " + t.isStopped), !t.isInitialized) return void this.removeResource(t);
                            t.stop(), this.controller.stopResource(t), u.stopResource(e)
                        }
                    },
                    getLoadedStats: function(e) {
                        var t = this.resources.get(e);
                        return t ? t.getStats() : {
                            p2pDown: 0,
                            p2pWaste: 0,
                            httpDown: 0,
                            httpWaste: 0,
                            httpProgress: 0
                        }
                    },
                    sendReport: function() {
                        if (this.validated) {
                            var e = this.reportBuilder.rotateReport();
                            e && r.groupReport(e)
                        }
                    },
                    respondWithResourceBuffer: function(e, n) {
                        S.info("[" + e.hashUrl + "] responding to request with buffer");
                        var r;
                        try {
                            r = e.getBufferCopy()
                        } catch (t) {
                            return R(), u.countMemoryError("BUFFER_COPY_FAILED"), void this.onRemoveResource(e.url, P.OUT_OF_SPACE_ERR)
                        }
                        e.isEncrypted ? (S.info("[" + e.hashUrl + "] encrypting resource"), this.encryptedSegmentManager.encrypt(e, r, function(r, i) {
                            return r ? (S.error("[" + e.hashUrl + "] encryption failed: " + r.message), t.client.FailedUrls.addUrl(e.hashUrl), void this.onRemoveResource(e.url, P.CRYPTO_ERROR)) : (S.info("[" + e.hashUrl + "] encrypted resource"), void radio("resource:complete").broadcast(e, i, {
                                shouldMockSpeed: n
                            }))
                        }.bind(this))) : radio("resource:complete").broadcast(e, r, {
                            shouldMockSpeed: n
                        })
                    },
                    askForPeers: function(e) {
                        f.needMorePeers && !o.SKIP_JOIN && r.askForPeers(e)
                    },
                    haveSwarm: function(e) {
                        o.SKIP_JOIN || r.haveSwarm(e)
                    },
                    finishResource: function(e) {
                        e.finish();
                        var t = e.swarmId,
                            n = e.getStats(),
                            r = n.p2pDown > 0;
                        S.info("[" + e.hashUrl + "] finished with stats: " + JSON.stringify(n)), "preload" === e.origin && u.setStats(e.swarmId, {
                            preloadDown: n.p2pDown
                        }), e.isJoinAllowed && this.haveSwarm(t), this.reportBuilder.reportResourceStats(n), u.setStats(t, n), this.controller.stopResource(e), u.trackResourceCompletion(e.url), this.respondWithResourceBuffer(e, r)
                    },
                    startResourceDownload: function(e) {
                        e.downloadMode === i.DYNAMIC ? this.controller.dynamicDownload(e) : e.downloadMode === i.HTTP ? this.controller.downloadInHttp(e) : this.controller.downloadInP2P(e)
                    },
                    registerEvents: function() {
                        var e = this;
                        radio("mediafetcher:new-playlist-type").subscribe([function(t) {
                            "live" === t ? e.resources.updateMaxSize(o.MAX_REQUEST_CACHE_SIZE_LIVE) : e.resources.updateMaxSize(o.MAX_REQUEST_CACHE_SIZE_VOD)
                        }, this]), radio("mediafetcher:new-playlist-url").subscribe([function(e) {
                            if (o.REPORT_PLAYLIST_URL) {
                                var t = I.urlWithAllowedKeys(e, o.PLAYLIST_URL_ALLOWED_QUERY_PARAMETERS);
                                o.PLAYLIST_URL_STRIP_REGEX && (t = t.replace(o.PLAYLIST_URL_STRIP_REGEX, "")), t = encodeURIComponent(t).replace(/'/g, "%27").replace(/"/g, "%22"), r.updatePlaylist(t)
                            }
                        }, this]), this.controller.on("switch-to-http", function(e) {
                            radio("resource:switch-to-http").broadcast(e)
                        }), this.controller.on("http-chunks", function(t, n) {
                            n.forEach(function(e) {
                                t.setChunk(e.id, "http", e.buffer)
                            }), t.isFull && e.finishResource(t)
                        }), this.controller.on("http-progress", function(e, t) {
                            e.addHttpProgressBytes(t), u.trackHttpSpeed(e, t), radio("httpProgress" + e.url).broadcast(t)
                        }), this.controller.on("http-headers", function(e, t, n) {
                            var r = b.isCachingAllowByCacheControlHeaders(t);
                            o.ENABLE_HTTP_CACHE_CONTROL && !r && (e.disallowJoin(), e.disallowP2P());
                            var i = N.fromHeaders(t);
                            i && u.setCDNDimension(i), radio("HTTPHeadersReceived" + e.url).broadcast(t, n)
                        }), this.controller.on("http-size-fetched", function(t, n) {
                            !t.isInitialized && n > 0 && (S.info("[" + t.hashUrl + "] initializing with size from http metadata"), e.initializeResource(t, n), t.isInitialized && e.startResourceDownload(t))
                        }), this.controller.on("http-download-finished", function(n, r) {
                            function i(n, r) {
                                S.info("[" + n.hashUrl + "] completing resource");
                                var i = n.hashUrl;
                                if (n.isInitialized || (S.info("[" + n.hashUrl + "] initializing with size from http GET"), e.initializeResource(n, r.length), n.isInitialized)) {
                                    if (n.isFull) return void(n.isEncrypted || S.error("[" + i + "] http download complete but resource is already full"));
                                    var o = r.length;
                                    if (o !== n.size) return S.warn("[" + i + "] was downloaded in http with different size (" + o + ") than the resource size (" + n.size + ")"), t.client.FailedUrls.addUrl(i), u.countNetworkError("HTTP_RESPONSE_LENGTH_MISMATCH"), void e.onRemoveResource(n.url, P.INVALID_RESPONSELENGTH);
                                    S.info("[" + n.hashUrl + "] setting buffer"), n.setBuffer(r), e.finishResource(n)
                                }
                            }
                            r && (n.isEncrypted ? (S.info("[" + n.hashUrl + "] decrypting resource"), e.encryptedSegmentManager.decrypt(n, r, function(t, r) {
                                return t ? (S.error("[" + n.hashUrl + "] decryption failed: " + t.message), void e.onRemoveResource(n.url, P.CRYPTO_ERROR)) : (S.info("[" + n.hashUrl + "] decrypted resource"), void i(n, r))
                            })) : i(n, r))
                        }), this.controller.on("http-error", function(n, r, i) {
                            "preload" !== n.origin && (S.warn("[" + n.hashUrl + "] http request failed, marking resource as failed - next retry in native"), t.client.FailedUrls.addUrl(n.hashUrl)), u.countNetworkError(r.message), e.onRemoveResource(n.url, i)
                        }), this.controller.on("p2p-download-finished", function(e) {
                            this.finishResource(e)
                        }.bind(this)), this.controller.on("dynamic-decision-stats", function(e) {
                            this.reportBuilder.reportDynamicRequestDecisionStats(e)
                        }.bind(this)), f.on("resource:filesize", function(t, n, r) {
                            e.resourceSizesMap.set(t, r, n);
                            var i = e.resources.get(t);
                            !i || i.isInitialized || i.isStopped || (S.info("[" + i.hashUrl + "] initializing with p2p size"), e.initializeResource(i, n), i.isInitialized && e.startResourceDownload(i))
                        }), f.on("peer:close", function(t, n) {
                            e.reportBuilder.addPeerConnectionReport(n)
                        }), this.resources.on("evict", function(t) {
                            S.info("evicting resource " + t.url), e.removeResource(t)
                        }), this.resources.on("block-complete", function(e) {
                            radio("blockReceived").broadcast(e.swarmId)
                        }), radio("resourceInitialized").subscribe([function(e) {
                            radio("resourceInitialized" + e.url).broadcast(e)
                        }, this]), r.on("update", function(e) {
                            d(e.body)
                        }), radio("report:p2pWaste").subscribe([function(e, t) {
                            u.setStats(e, {
                                p2pWaste: t
                            })
                        }, this])
                    },
                    sendSessionSummary: function() {
                        if (this.validated) {
                            var e = this.reportBuilder.getSessionSummary();
                            e && r.sessionReport(e)
                        }
                    },
                    sendSeedersReport: function() {
                        if (this.validated) {
                            var e = this.reportBuilder.getSeedersMapReport();
                            e && r.groupReport(e)
                        }
                    },
                    handleSessionEnd: function() {
                        this.sendReport(), this.sendSessionSummary(), this.sendSeedersReport()
                    }
                })
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                return !(t > 0 && n > 0 && t !== n) && (!(t > 0 && r > 0 && t !== r) && (!(n > 0 && r > 0 && n !== r) && (!(t > 0 && e > 0 && t !== e) && (!(n > 0 && e > 0 && n !== e) && !(r > 0 && e > 0 && r !== e)))))
            }

            function i() {
                function e(e) {
                    var t = S[e];
                    t && (t.removeAllListeners(), t.abort(), delete S[e], p.info("[" + e + "] http request aborted"))
                }

                function t(t) {
                    function n(n, r) {
                        p.warn("[" + t.hashUrl + "] (HEAD) http request error: " + n.message), e(t.hashUrl), R.emit("error", t, n, r)
                    }

                    function r(e) {
                        R.emit("headers", t, e)
                    }

                    function i(n) {
                        p.info("[" + t.hashUrl + "] (HEAD) http request finished successfully"), e(t.hashUrl), R.emit("size-fetched", t, n)
                    }
                    if (!S[t.hashUrl] && !t.isEncrypted) {
                        var o = S[t.hashUrl] = s(t.url, t.httpRequestHeaders);
                        o.on("error", n), o.on("headers", r), o.on("finish", i), o.send(), p.info("[" + t.hashUrl + "] (HEAD) http request sent")
                    }
                }

                function n(e) {
                    return h.FETCH_ENABLED && l.isSupported() && !e.isEncrypted
                }

                function i(t) {
                    function n(n, r) {
                        p.warn("[" + t.hashUrl + "] http request error: " + n.message), e(t.hashUrl), R.emit("error", t, n, r)
                    }

                    function i(e) {
                        return u = f.parseLengthFromHttpHeaders(e, _), R.emit("headers", t, e, u), t.isInitialized && !r(t.size, u) ? void n(new Error("HTTP_HEADERS_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH) : void(h.FETCH_INIT_WITH_HEADERS && !t.isInitialized && u > 0 && R.emit("size-fetched", t, u))
                    }

                    function o(e) {
                        E += e.byteLength, R.emit("progress", t, e.byteLength);
                        try {
                            a.append(e)
                        } catch (e) {
                            return void n(new Error("HTTP_PROGRESS_BUFFER_ALLOCATION_FAILED"), d.OUT_OF_SPACE_ERR)
                        }
                        if (t.isInitialized && E > t.size) return void n(new Error("HTTP_DOWNLOAD_OVERFLOW"), d.INVALID_RESPONSELENGTH);
                        if (t.isInitialized && e.byteLength > 0) {
                            var r = g(t.url),
                                i = (t.size - E) / r * 1e3;
                            0 !== i && R.emit("estimation", t.hashUrl, i)
                        }
                        if (t.isInitialized && (u > 0 || h.FETCH_SKIP_HTTP_VALIDATION)) {
                            c = !0;
                            var o = a.getAllChunksAndReset();
                            o.length > 0 && R.emit("chunks", t, o)
                        }
                    }

                    function s() {
                        if (e(t.hashUrl), a.end(), !r(void 0, u, void 0, E)) return p.error({
                            responseSizeFromHeaders: u,
                            bufferLength: E
                        }, "HTTP_SAME_REQUEST_BUFFER_CONTENT_LENGTH_MISMATCH"), void n(new Error("HTTP_SAME_REQUEST_BUFFER_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH);
                        if (t.isInitialized && !r(t.size, u, void 0, E)) return void n(new Error("HTTP_BUFFER_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH);
                        if (c) {
                            var i = a.getAllChunksAndReset();
                            i.length > 0 && R.emit("chunks", t, i)
                        }
                        if (radio("requestComplete").broadcast(t), p.info("[" + t.hashUrl + "] http request finished successfully"), c) R.emit("download-finished", t);
                        else {
                            var o;
                            try {
                                o = new Uint8Array(E)
                            } catch (e) {
                                return void n(new Error("HTTP_BUFFER_ALLOCATION_FAILED"), d.OUT_OF_SPACE_ERR)
                            }
                            var s = 0;
                            a.getAllChunksAndReset().forEach(function(e) {
                                o.set(e.buffer, s), s += e.buffer.byteLength
                            }), R.emit("download-finished", t, o)
                        }
                    }
                    if (!S[t.hashUrl]) {
                        var a = v(),
                            u = null,
                            c = !1,
                            E = 0,
                            _ = t.httpRequestHeaders.some(function(e) {
                                return "range" === e.key.toLowerCase()
                            }),
                            m = S[t.hashUrl] = l(t.url, t.httpRequestHeaders, t.withCredentials);
                        m.on("error", n), m.on("headers", i), m.on("progress", o), m.on("finish", s), m.send(), p.info("[" + t.hashUrl + "] http request sent"), radio("xhrSent").broadcast(t.url)
                    }
                }

                function a(t) {
                    function n(n, r) {
                        p.warn("[" + t.hashUrl + "] http request error: " + n.message), e(t.hashUrl), R.emit("error", t, n, r)
                    }

                    function i(e) {
                        return l = f.parseLengthFromHttpHeaders(e, h), R.emit("headers", t, e, l), t.isEncrypted || !t.isInitialized || r(t.size, l) ? void(!t.isEncrypted && !t.isInitialized && l > 0 && R.emit("size-fetched", t, l)) : void n(new Error("HTTP_HEADERS_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH)
                    }

                    function o(e, i) {
                        var o = e - a;
                        if (a = e, R.emit("progress", t, o), c = !h && i, !t.isEncrypted && !r(void 0, l, c)) return void n(new Error("HTTP_SAME_REQUEST_PROGRESS_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH);
                        if (!t.isEncrypted && t.isInitialized && !r(t.size, l, c)) return void n(new Error("HTTP_PROGRESS_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH);
                        if (!t.isEncrypted && t.isInitialized && e > t.size) return void n(new Error("HTTP_DOWNLOAD_OVERFLOW"), d.INVALID_RESPONSELENGTH);
                        if (!t.isEncrypted && !t.isInitialized && c > 0 && R.emit("size-fetched", t, c), !t.isEncrypted && t.isInitialized && o > 0) {
                            var s = g(t.url),
                                u = (t.size - e) / s * 1e3;
                            0 !== u && R.emit("estimation", t.hashUrl, u)
                        }
                    }

                    function s(i) {
                        return e(t.hashUrl), t.isEncrypted || r(void 0, l, c, i.byteLength) ? t.isEncrypted || !t.isInitialized || r(t.size, l, c, i.byteLength) ? (radio("requestComplete").broadcast(t), p.info("[" + t.hashUrl + "] http request finished successfully"), void R.emit("download-finished", t, i)) : void n(new Error("HTTP_BUFFER_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH) : (p.error({
                            responseSizeFromHeaders: l,
                            responseSizeFromProgressEvent: c,
                            bufferLength: i.byteLength
                        }, "HTTP_SAME_REQUEST_BUFFER_CONTENT_LENGTH_MISMATCH"), void n(new Error("HTTP_SAME_REQUEST_BUFFER_CONTENT_LENGTH_MISMATCH"), d.INVALID_RESPONSELENGTH))
                    }
                    if (!S[t.hashUrl]) {
                        var a = 0,
                            c = null,
                            l = null,
                            h = t.httpRequestHeaders.some(function(e) {
                                return "range" === e.key.toLowerCase()
                            }),
                            v = S[t.hashUrl] = u(t.url, t.httpRequestHeaders, t.withCredentials);
                        v.on("error", n), v.on("headers", i), v.on("progress", o), v.on("finish", s), v.send(), p.info("[" + t.hashUrl + "] http request sent"), radio("xhrSent").broadcast(t.url)
                    }
                }

                function c(e) {
                    n(e) ? i(e) : a(e)
                }

                function E(t) {
                    e(t.hashUrl)
                }

                function _(t) {
                    e(t.hashUrl)
                }

                function m(e) {
                    return void 0 !== S[e.hashUrl]
                }

                function T() {
                    Object.keys(S).forEach(e)
                }
                var R = new o,
                    S = Object.create(null);
                return R.fetchSize = t, R.stopResource = E, R.removeResource = _, R.destroy = T, R.isDownloading = m, R.download = c, R
            }
            var o = n(3),
                s = n(166),
                a = n(174),
                u = a(n(175)),
                c = n(164),
                l = c(n(165)),
                d = n(21),
                f = n(28),
                p = n(2),
                h = n(1),
                g = n(6).getSpeed,
                v = n(176);
            e.exports = i
        }, function(e, t, n) {
            "use strict";
            var r = n(44);
            e.exports = r.subClass({
                ctor: function(e) {
                    this.isVideoPlayerRequest = !0, this.isCatchAllRequest = !0, this._super(e)
                }
            })
        }, function(e, t, n) {
            (function(e) {
                ! function(e) {
                    function t() {
                        function e(e) {
                            n[e] = !0
                        }

                        function t(e) {
                            return !!n[e]
                        }
                        var n = Object.create(null);
                        return {
                            addUrl: e,
                            contains: t
                        }
                    }
                    e.FailedUrls = t()
                }(e.client)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(t) {
                "use strict";
                var r = n(16);
                e.exports = t.FragmentRequest = r.subClass({
                    ctor: function(e) {
                        this.isFragmentRequest = !0, this._super(e)
                    }
                })
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                var t = n(40),
                    r = n(8),
                    i = n(2),
                    o = n(48),
                    s = n(73),
                    a = n(1),
                    u = n(58).instance;
                ! function(n) {
                    function c(e, t, n) {
                        var r = o(t, e),
                            i = r.manipulateManifest(n);
                        return i
                    }

                    function l(o) {
                        function l(t) {
                            try {
                                if (!t) return t;
                                var r;
                                if (t instanceof window.ArrayBuffer) {
                                    if (r = s.decode(t), r.indexOf("#EXTM3U") === -1) return t
                                } else {
                                    if ("string" != typeof t) return t;
                                    r = t
                                }
                                if (r.indexOf(".m3u8") !== -1) return t;
                                n.setDelayedAlready(!0);
                                var l;
                                if (l = a.USE_PEER_PRIORITIZER ? c(r, o._url, u.getDelay()) : c(r, o._url, e.config.LIVE_SECONDS_DELAY), t instanceof window.ArrayBuffer) {
                                    var d = s.encode(l);
                                    return d.buffer
                                }
                                return l
                            } catch (e) {
                                return i.error("manipulating manifest failed", e), t
                            }
                        }
                        var f = new r;
                        return f.open("GET", o._url), d ? t(f, o) : t(f, o, l), f
                    }
                    var d = !1;
                    a.USE_PEER_PRIORITIZER && u.monitor(), n.createManifestRequest = l, n.setDelayedAlready = function(e) {
                        a.ALWAYS_DELAY_MANIFEST || (d = e)
                    }
                }(e.client)
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e, t) {
                    void 0 === r[e] && (r[e] = i(e, t))
                }

                function t(e, t) {
                    var i = r[e],
                        o = i.getEvents(t);
                    n("player", o)
                }

                function n(e, t) {
                    t.forEach(function(t) {
                        o(e, t)
                    })
                }
                var r = Object.create(null);
                return {
                    updateAction: t,
                    initPlayer: e
                }
            }
            var i = n(85),
                o = n(41);
            e.exports = r()
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                function n() {
                    if (h) return [];
                    if (g) return [];
                    T++, h = Date.now();
                    var e = Date.now() - E,
                        t = {
                            action: "rebuffer.start",
                            label: "playback",
                            timeSinceLoaded: e,
                            id: f,
                            vendor: p,
                            occurrence: T
                        };
                    return [t]
                }

                function r() {
                    R++, g = Date.now();
                    var e = Date.now() - E,
                        t = {
                            action: "seek.start",
                            label: "seek",
                            timeSinceLoaded: e,
                            id: f,
                            vendor: p,
                            occurrence: R
                        };
                    return [t]
                }

                function i() {
                    var e = Date.now();
                    if (!v) {
                        v = e;
                        var t = {
                            action: "load.start",
                            label: "load",
                            id: f,
                            vendor: p
                        };
                        return m && (m = !1, _ && (t.timeSinceReady = e - _)), [t]
                    }
                    return []
                }

                function o() {
                    var e = Date.now();
                    if (v) {
                        var t = e - v;
                        v = null;
                        var n = {
                            action: "load.end",
                            label: "load",
                            duration: t,
                            id: f,
                            vendor: p
                        };
                        return E = e, [n]
                    }
                    return []
                }

                function s() {
                    var e = Date.now();
                    if (h) {
                        var t = e - h;
                        h = null;
                        var n = e - E,
                            r = {
                                action: "rebuffer.end",
                                label: "playback",
                                timeSinceLoaded: n,
                                duration: t,
                                id: f,
                                vendor: p,
                                occurrence: T
                            };
                        return [r]
                    }
                    if (g) {
                        var t = e - g;
                        g = null;
                        var n = e - E,
                            i = {
                                action: "seek.end",
                                label: "seek",
                                timeSinceLoaded: n,
                                duration: t,
                                id: f,
                                vendor: p,
                                occurrence: R
                            };
                        return [i]
                    }
                    return []
                }

                function a() {
                    _ = Date.now(), m = !0;
                    var e = {
                        action: "ready",
                        label: "ready",
                        id: f,
                        vendor: p
                    };
                    return [e]
                }

                function u() {
                    S = !0;
                    var e = {
                        action: "pause.start",
                        label: "pause",
                        id: f,
                        vendor: p
                    };
                    return [e]
                }

                function c() {
                    var e = {
                        action: "stop",
                        label: "stop",
                        id: f,
                        vendor: p
                    };
                    return [e]
                }

                function l() {
                    S = !1;
                    var e = {
                        action: "pause.end",
                        label: "pause",
                        id: f,
                        vendor: p
                    };
                    return [e]
                }

                function d(e) {
                    var t = [];
                    switch (e) {
                        case "ready":
                            t = a();
                            break;
                        case "buffer":
                            t = n();
                            break;
                        case "seek":
                            t = r();
                            break;
                        case "loadStart":
                            t = i();
                            break;
                        case "loadEnd":
                            t = o();
                            break;
                        case "pause":
                            t = u();
                            break;
                        case "stop":
                            t = c();
                            break;
                        case "play":
                            t = l();
                            break;
                        case "resume":
                            t = s();
                            break;
                        default:
                            console.error("unrecognized action:" + e)
                    }
                    return t
                }
                var f = e,
                    p = t,
                    h = null,
                    g = null,
                    v = null,
                    E = null,
                    _ = null,
                    m = !0,
                    T = 0,
                    R = 0,
                    S = !0;
                return {
                    getEvents: d
                }
            }
            e.exports = n
        }, function(e, t, n) {
            (function(t) {
                "use strict";
                var r = n(16);
                e.exports = t.PlaylistRequest = r.subClass({
                    ctor: function(e) {
                        this.isPlaylistRequest = !0, this._super(e)
                    }
                })
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                ! function(t) {
                    function n(t, n) {
                        t.response = n, "" !== t.responseType && "text" !== t.responseType || (t.responseText = n), t.readyState = 4, t.responseURL = t._url, t.status = 200;
                        for (var r = {
                                currentTarget: t,
                                target: t,
                                lengthComputable: !0,
                                loaded: n.length,
                                loadedFS: 0,
                                loadedHTTP: n.length,
                                loadedP2P: 0,
                                total: n.length
                            }, i = 0; i < t.eventListeners.readystatechange.length; i++) {
                            var o = t.eventListeners.readystatechange[i];
                            e.core.util.envokeCallback(o, [r], t)
                        }
                        e.core.util.envokeCallback(t.onreadystatechange, [r], t);
                        for (var i = 0; i < t.eventListeners.load.length; i++) {
                            var o = t.eventListeners.load[i];
                            e.core.util.envokeCallback(o, [r], t)
                        }
                        e.core.util.envokeCallback(t.onload, [r], t);
                        for (var i = 0; i < t.eventListeners.loadend.length; i++) {
                            var o = t.eventListeners.loadend[i];
                            e.core.util.envokeCallback(o, [r], t)
                        }
                        e.core.util.envokeCallback(t.onloadend, [r], t)
                    }
                    t.bypassServer = n
                }(e.client)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(t) {
                var r = n(14),
                    i = n(40),
                    o = n(6),
                    s = n(9),
                    a = n(8),
                    u = n(10),
                    c = n(1),
                    l = n(149),
                    d = n(34),
                    f = n(22),
                    p = n(45),
                    h = (n(5), n(11)),
                    g = n(18),
                    v = n(35),
                    E = n(55),
                    _ = n(160),
                    m = n(73),
                    T = r.HYBRID,
                    R = r.P2P,
                    S = r.HTTP,
                    y = r.DYNAMIC;
                ! function(n) {
                    t.core.apis.MediaFetcher = Object.subClass({
                        ctor: function() {
                            function e() {
                                this.reportProgress({
                                    type: "swarmChange",
                                    peers: f.numOfConnectedPeers
                                })
                            }
                            this.playlistsHandler = l(), this.reportedFirstManifest = !1, this.playlistsCache = t.core.util.createPlaylistCache(), this.prePlaySegmentsPrefetcher = null, this.prefetchRequests = Object.create(null), this.playerRequests = Object.create(null), this.httpPendingRequests = 0, this.p2pPendingRequests = 0, this.numberOfMasterPlaylistsSeen = 0, this.playerStarted = !1, this.mediaController = new p, this.playlistXhr = null, this.playlistXhrTimer = null, this.playlistType = null, this.forceHttpOn = !0, this.httpConstraintChanged = !1, this.seedersMap = _.seedersMapMonitor(), radio("requestSent").subscribe([this._interceptP5Request, this]), radio("external.prePlayPrefetch").subscribe([this._prePlayPrefetch, this]), f.on("peer:open", e.bind(this)), f.on("peer:close", e.bind(this)), f.on("peer:available", function() {
                                this._prefetch()
                            }.bind(this)), f.on("peer:segment", function(e, t) {
                                this._handleDiscoveredSegment(t)
                            }.bind(this)), this._initPrefetchers()
                        },
                        destroy: function() {
                            this.prePlaySegmentsPrefetcher.stopPrefetch(), this.mediaController.destroy()
                        },
                        _initPrefetchers: function() {
                            var e = this,
                                n = {
                                    requestSwarmStateChanged: function() {
                                        return e._requestSwarmStateChanged.apply(e, arguments)
                                    },
                                    reportProgress: this.reportProgress
                                },
                                r = {
                                    playlistsHandler: this.playlistsHandler,
                                    prefetchSlotsHandler: t.core.util.PrefetchSlotsHandler(),
                                    prefetchSpeedEstimator: t.core.util.PrefetchSpeedEstimator(),
                                    playlistsCache: this.playlistsCache
                                };
                            this.prePlaySegmentsPrefetcher = t.core.util.prePlayPrefetcher(r, n)
                        },
                        _prePlayPrefetch: function(e) {
                            c.FEATURE_PRE_PLAY_PREFETCH && v.VideoRequest !== a && this.prePlaySegmentsPrefetcher.startPrefetch(e)
                        },
                        _interceptP5Request: function(e) {
                            if (!e.mediaPrefetch) {
                                var n = e._url,
                                    r = u(n);
                                if (this.playlistsHandler.isKnownSegment(r)) this._interceptSegmentRequest(e);
                                else if (e.isFragmentRequest) t.info("segment is not in known manifests " + n), this._interceptSegmentRequest(e);
                                else if (d.isPlaylistCandidate(e._url, e.responseType) || e.isPlaylistRequest) this.prePlaySegmentsPrefetcher.stopPrefetch(), this.playerStarted = !0, this._interceptPlaylistRequest(e);
                                else if (e.isVideoPlayerRequest) {
                                    c.REPORT_SENTRY_ON_NATIVE_FALLBACK && t.error({
                                        url: n
                                    }, "fallback to native");
                                    var i = e.fallbackToNative();
                                    i.send(), e.discontinue()
                                } else t.info("didnt intercept: " + n)
                            }
                        },
                        _interceptPlaylistRequest: function(e) {
                            this.playlistXhr && (this.playlistXhr.onloadend = null, this.playlistXhr.abort(), this.playlistXhr = null), this.playlistXhrTimer && (clearInterval(this.playlistXhrTimer), this.playlistXhrTimer = null), t.info("Intercepted a playlist request"), e.discontinue();
                            var n = this,
                                r = e._url,
                                i = this.playlistsCache.load(r);
                            if (i) return void t.core.util.envokeCallback(function() {
                                t.client.setDelayedAlready(!0), setTimeout(function() {
                                    n.playlistsCache.remove(r)
                                }, 1e3), e.addEventListener("load", function(e) {
                                    var t = e.currentTarget.responseURL || r;
                                    n._parsePlaylist(e, t)
                                }), e.forceImmediateLoad(i)
                            }, null, this);
                            e.addEventListener("load", function(e) {
                                var t = e.currentTarget.status;
                                t < 200 || t >= 300 || n._cachePlaylist(e)
                            });
                            var s = t.client.createManifestRequest(e),
                                a = s.onreadystatechange;
                            s.onreadystatechange = function(e) {
                                var t = e.currentTarget.status,
                                    i = e.currentTarget.responseURL || r;
                                4 === s.readyState && t >= 200 && t < 300 && n._parsePlaylist(e, i, !1, s.withCredentials), a && a.apply(this, arguments)
                            }, s.addEventListener("loadend", function(e) {
                                var t = e.currentTarget.status,
                                    n = e.currentTarget.response;
                                return t < 200 || t >= 300 ? void o.countNetworkError("HTTP_MANIFEST_INVALID_STATUS_CODE_" + t) : n ? void 0 : void o.countNetworkError("HTTP_MANIFEST_EMPTY_RESPONSE")
                            }), s.send()
                        },
                        _interceptSegmentRequest: function(e) {
                            var n = this,
                                r = e._url,
                                s = u(r);
                            if (t.info("intercepted an interesting request: " + r), c.SHORTCUT_SEGMENT_REQUESTS) {
                                e.discontinue();
                                var l = new a;
                                return l.open("GET", e._url), i(l, e), void l.send()
                            }
                            var d = this.playlistsHandler.getPlaylistOfSegment(s, r);
                            if (d && d.isEncrypted && (o.setMediaInfo({
                                    isEncrypted: !0
                                }), c.DECRYPT_ENCRYPTED_STREAMS && E.isCryptoSupported() && (e.key = d.key), c.DISABLE_ON_ENCRYPTED_STREAMS)) {
                                var f = e.fallbackToNative();
                                return f.send(), void e.discontinue()
                            }
                            if (t.client.FailedUrls.contains(s)) {
                                var f = new a;
                                return f.open("GET", r.replace(/\|peer5\|.*/, "")), i(f, e), f.addEventListener("load", function(t) {
                                    n._onXhrLoad(e, t)
                                }), f.send(), void e.discontinue()
                            }
                            this.playlistsHandler.setLastRequestedSegment(r), e.addEventListener("load", function() {
                                n._requestLoaded.apply(n, arguments)
                            }), e.addEventListener("swarmstatechange", function() {
                                n._requestSwarmStateChanged.apply(n, arguments)
                            }), this._overrideInterceptedRequest(e), this._prefetchRequestExist(r) && this._abortPrefetchRequest(r), this._addPlayerRequest(e, r)
                        },
                        _onXhrLoad: function(e, n) {
                            var r = e._url;
                            if (t.info("failed request " + r + " loaded"), n.currentTarget.status >= 200 && n.currentTarget.status < 300) {
                                this.playlistsHandler.setLastLoadedSegment(r);
                                var i = this;
                                setTimeout(function() {
                                    i._prefetch()
                                }, 10)
                            }
                        },
                        _buildAndReportSeedersMap: function() {
                            if (c.REPORT_SEEDERS_MAP) {
                                var e = 1e3 * this.mediaController.getBufferLength(),
                                    t = this.playlistsHandler.getLastRequestedSegment();
                                if (t) {
                                    var n = _.createSeedersMap(f, this.playlistsHandler, e, t);
                                    this.seedersMap.addSeedersMap(n, f.getPeers().length), radio("seeders:report").broadcast(this.seedersMap.getSeedersMapReport())
                                }
                            }
                        },
                        _requestLoaded: function(e) {
                            var n = e.currentTarget._url;
                            if (t.info("request " + n + " loaded"), this._decreasePendingRequests(e.currentTarget.downloadMode), this.reportProgress({
                                    type: "fileDownloaded",
                                    url: n,
                                    loaded: e.loaded,
                                    p2p: e.loadedP2P,
                                    http: e.loadedHTTP,
                                    waste: e.loadedP2P + e.loadedHTTP - e.total,
                                    fileSize: e.total,
                                    downloadTimeMS: e.currentTarget._startStopper.elapsed()
                                }), this._buildAndReportSeedersMap(), e.currentTarget.status >= 200 && e.currentTarget.status < 300) {
                                this.playlistsHandler.setLastLoadedSegment(n);
                                var r = this;
                                setTimeout(function() {
                                    r._prefetch()
                                }, 10)
                            }
                            this._updateRequestHttpConstraint(), o.avgGlobal({
                                segmentSize: e.total
                            })
                        },
                        _requestSwarmStateChanged: function(e) {
                            if (e.sent) {
                                var t = {
                                    type: "swarmChange",
                                    sent: e.sent
                                };
                                this.reportProgress(t)
                            }
                        },
                        _prefetch: function() {
                            if (this.playerStarted && 0 !== f.numOfConnectedPeers && !(this.p2pPendingRequests >= c.MAX_P2P_REQUESTS || 0 === c.MAX_P2P_REQUESTS)) {
                                for (var e = [], n = 1, r = this.playlistsHandler.getNextSegmentsUrls(c.P2P_VOD_WINDOW), i = 0; i < r.length; i++) {
                                    var o = r[i];
                                    if (!this._prefetchRequestExist(o) && !this._playerRequestExist(o)) {
                                        var s = u(o),
                                            a = f.getPeers().filter(function(e) {
                                                return e.hasSomeBlocksOfResource(s)
                                            }).length;
                                        a === n ? e.push(o) : a > n && (e = [o], n = a)
                                    }
                                }
                                var o = e[Math.floor(Math.random() * e.length)];
                                o && (t.info("prefetching " + o), this._requestP5(o, null, {
                                    downloadMode: "p2p"
                                }), this._prefetch())
                            }
                        },
                        _requestP5: function(e, n, r) {
                            var i = new v.VideoRequest({
                                downloadMode: r.downloadMode
                            });
                            i.mediaPrefetch = !0, i.responseType = "arraybuffer", i.open("GET", e);
                            var o = this;
                            i.addEventListener("swarmstatechange", function() {
                                return o._requestSwarmStateChanged.apply(o, arguments)
                            }), i.addEventListener("error", function(n) {
                                t.warn("onerror prefetching resource: " + e + " " + n)
                            }), i.addEventListener("loadend", function(n) {
                                t.info("MediaFetcher::_requestP5:onloadend " + e + " status " + this.status), o._decreasePendingRequests(n.currentTarget.downloadMode), this.status >= 200 && this.status < 300 && o.reportProgress({
                                    type: "fileDownloaded",
                                    url: e,
                                    loaded: n.loaded,
                                    p2p: n.loadedP2P,
                                    http: n.loadedHTTP,
                                    waste: n.loadedP2P + n.loadedHTTP - n.total,
                                    fileSize: n.total,
                                    downloadTimeMS: n.currentTarget._startStopper.elapsed()
                                }), o._prefetch()
                            }), t.info("MediaFetcher::_requestP5:requesting " + e), this._increasePendingRequests(i.downloadMode), this._addPrefetchRequest(i, e), i.send()
                        },
                        _playerRequestExist: function(e) {
                            var t = u(e);
                            return t in this.playerRequests
                        },
                        _prefetchRequestExist: function(e) {
                            var t = u(e);
                            return t in this.prefetchRequests
                        },
                        _abortPrefetchRequest: function(e) {
                            t.info("removing request " + e + " that was a prefetch request");
                            var n = u(e),
                                r = this.prefetchRequests[n];
                            r.abort(), delete this.prefetchRequests[n]
                        },
                        _addPrefetchRequest: function(e) {
                            var n = e._url,
                                r = u(n);
                            t.info("adding request " + n + " as a prefetch request"), this.prefetchRequests[r] = e
                        },
                        _addPlayerRequest: function(e) {
                            var n = e._url,
                                r = u(n);
                            t.info("adding request " + n + " as a player request"), this.playerRequests[r] = e, e.addEventListener("loadend", function() {
                                this.playerRequests[r] === e && (t.info("removing request " + n + " that was a player request"), delete this.playerRequests[r])
                            }.bind(this))
                        },
                        _cachePlaylist: function(e) {
                            if ("arraybuffer" !== e.currentTarget.responseType) {
                                t.info("caching playlist");
                                var n = e.currentTarget.responseURL || e.currentTarget._url,
                                    r = e.currentTarget.response;
                                this.playlistsCache.save(n, r);
                                var i = this;
                                setTimeout(function() {
                                    i.playlistsCache.remove(n)
                                }, 1e3)
                            }
                        },
                        _parsePlaylist: function(e, n, r, i) {
                            if (t.info("parsing playlist"), !c.DONT_PARSE_PLAYLIST) {
                                var a;
                                switch (e.currentTarget.responseType) {
                                    case "blob":
                                        return void t.warn("playlist was requested as a blob: " + n);
                                    case "arraybuffer":
                                        a = m.decode(e.currentTarget.response);
                                        break;
                                    default:
                                        a = e.currentTarget.response
                                }
                                var u = this,
                                    l = this.playlistsHandler.getNewestSegment();
                                this.playlistsHandler.digestPlaylist(n, a, i, function(i) {
                                    var a = i && i[n];
                                    if (a && "levels" === a.type && (h.setRenditionCount(a.levels.length), c.INIT_DESTROY_ON_MASTER_PLAYLIST && (u.numberOfMasterPlaylistsSeen++, u.numberOfMasterPlaylistsSeen < c.INIT_DESTROY_ON_MASTER_PLAYLIST_MAX))) {
                                        var d = e.currentTarget;
                                        d.addEventListener("loadend", function() {
                                            setTimeout(function() {
                                                window.peer5.destroy(), window.peer5.init()
                                            }, 0)
                                        })
                                    }
                                    var f = u.playlistsHandler.getNextSegments(1 / 0);
                                    if (null !== f && f.length > 0) {
                                        var p = f.reduce(function(e, t) {
                                                return e + t.duration
                                            }, 0),
                                            v = p / f.length;
                                        c.SET_CURRENT_SEGMENT_DURATION_FOR_CONSTRAINT || h.setSegmentLength(v), g.setSegmentLength(v)
                                    }
                                    u.reportedFirstManifest || (u.reportedFirstManifest = !0, radio("mediafetcher:new-playlist-url").broadcast(n), o.setMediaInfo({
                                        playlistUrl: n
                                    }));
                                    var E = u.playlistsHandler.getMode();
                                    if (E !== u.playlistType && (u.playlistType = E, radio("mediafetcher:new-playlist-type").broadcast(E)), "live" === E && c.LIVE_DETECTION_ENABLED) {
                                        var _ = u.playlistsHandler.getNewestSegment();
                                        if (!_ || l && _.sequence <= l.sequence) return;
                                        t.info("detected new segment sequence " + _.sequence + " , sending to peers");
                                        var m = new s.NewSegmentMessage(_.sequence);
                                        radio("p2p.send.all").broadcast(m, "NewSegment"), !u._isActivePlayerRequest() && r && (t.info("discovered new segment - prefetching: " + _.url), u._prefetch())
                                    }
                                    t.info("playlist parsed")
                                })
                            }
                        },
                        _overrideInterceptedRequest: function(e) {
                            t.info("override interception to dynamic mode"), e.downloadMode = y, this._addRequestTimeConstraints(e), this._increasePendingRequests(e.downloadMode)
                        },
                        _getRequestConstraints: function(e) {
                            var t = 1e3 * this.mediaController.getBufferLength(),
                                n = e.mediaPrefetch ? this.playlistsHandler.getDurationFromLastLoadedToSegment(e._url) : 0,
                                r = t + n,
                                i = 1 / 0;
                            e._timeout > 0 && (i = e._timeout - c.HIGH_BUFFER_HTTP_CONSTRAINT + h.min() - e._startStopper.elapsed());
                            var o = Math.min(r, i);
                            return {
                                playerBufferMs: t,
                                totalDurationUntilNeeded: r,
                                durationFromLastLoadedSegment: n,
                                timeUntilNeeded: o
                            }
                        },
                        _addRequestTimeConstraints: function(e) {
                            var n = this,
                                r = e._url;
                            if (c.SET_CURRENT_SEGMENT_DURATION_FOR_CONSTRAINT) {
                                var i = this.playlistsHandler.getSegmentFromUrl(r);
                                i && h.setSegmentLength(i.duration)
                            }
                            var o = (1e3 * this.mediaController.getPosition(), this._getRequestConstraints(e)),
                                s = o.playerBufferMs,
                                a = o.totalDurationUntilNeeded,
                                u = o.durationFromLastLoadedSegment;
                            this._updateRequestHttpConstraint(), e._constraint = function() {
                                return Math.floor(n._getRequestConstraints(e).timeUntilNeeded)
                            }, e._forceHttp = this.forceHttpOn, !e.mediaPrefetch && c.PLAYER_REQUEST_ALWAYS_HTTP ? (e._forceHttp = !0, t.info("resource " + r + " was requested by the player, downloading in http")) : a > h.max() && (e._forceHttp = !1, t.info("resource " + r + " is further than maximum http constraint")), this.httpConstraintChanged || e._forceHttp !== !1 || (this.httpConstraintChanged = !0, t.info("resource " + r + " flipped initial http constraint")), t.info("player buffer is " + s + "ms, extra buffer is " + u / 1e3 + "s for resource " + r + ". httpConstraint is " + e._forceHttp)
                        },
                        _updateRequestHttpConstraint: function() {
                            var e = this.mediaController.getBufferLength();
                            this.forceHttpOn === !1 && e < h.min() / 1e3 ? (this.forceHttpOn = !0, t.info("player buffer (" + e + "s) is lower than minimum http constraint, enabling forceHttp")) : this.forceHttpOn === !0 && e > h.max() / 1e3 && (this.forceHttpOn = !1, t.info("player buffer (" + e + "s) is higher than maximum http constraint, disabling forceHttp"))
                        },
                        _increasePendingRequests: function(e) {
                            e && e === R ? this._increaseP2PPendingRequests() : e && e === S ? this._increaseHTTPPendingRequests() : e && e === y || t.warn("unidentified downloadMode request started: " + e)
                        },
                        _decreasePendingRequests: function(e) {
                            e === R ? this._decreaseP2PPendingRequests() : e === S || e === T ? this._decreaseHTTPPendingRequests() : e === y || t.warn("unidentified downloadMode request loaded: " + e)
                        },
                        _increaseHTTPPendingRequests: function() {
                            this.httpPendingRequests++
                        },
                        _increaseP2PPendingRequests: function() {
                            this.p2pPendingRequests++
                        },
                        _decreaseHTTPPendingRequests: function() {
                            this.httpPendingRequests--, this.httpPendingRequests < 0 && t.error("httpPendingRequests smaller than 0")
                        },
                        _decreaseP2PPendingRequests: function() {
                            this.p2pPendingRequests--, this.p2pPendingRequests < 0 && t.error("p2pPendingRequests smaller than 0")
                        },
                        _requestPlaylist: function(e) {
                            if (!this.playlistXhr) {
                                var t = e.url,
                                    n = new a,
                                    r = this;
                                n.open("GET", t), n.withCredentials = e.needsCredentials, n.onloadend = function(e) {
                                    r.playlistXhr = !1;
                                    var n = e.currentTarget.status,
                                        i = e.currentTarget.response,
                                        s = e.currentTarget.responseURL || t;
                                    return n < 200 || n >= 300 ? void o.countNetworkError("HTTP_INTERNAL_MANIFEST_INVALID_STATUS_CODE_" + n) : i ? void r._parsePlaylist(e, s, !0) : void o.countNetworkError("HTTP_INTERNAL_MANIFEST_EMPTY_RESPONSE")
                                }, n.send(), this.playlistXhr = n
                            }
                        },
                        _handleDiscoveredSegment: function(e) {
                            if ("live" === this.playlistsHandler.getMode() && c.LIVE_DETECTION_ENABLED) {
                                var n = this.playlistsHandler.getNewestSegment();
                                if (n) {
                                    var r = n.sequence,
                                        i = this.playlistsHandler.getLastRequestedSegment();
                                    if (i) {
                                        var o = i.sequence,
                                            s = e - o < c.LIVE_DETECTION_WINDOW;
                                        if (e > r && s) {
                                            t.info("new segment #" + e + " discovered by a peer, downloading playlist (old seq # is " + r + ")");
                                            var a = this.playlistsHandler.getCurrentPlaylist();
                                            this._requestPlaylist(a)
                                        }
                                    }
                                }
                            }
                        },
                        _isActivePlayerRequest: function() {
                            var e = this.playlistsHandler.getLastRequestedSegment();
                            if (!e) return !1;
                            var t = this.playerRequests[e.hashUrl];
                            return !!t && t.readyState < 4
                        },
                        reportProgress: function(e) {
                            window.P2PPerformanceUpdate && window.P2PPerformanceUpdate(e)
                        }
                    }), n.core.apis.MediaFetcher = new t.core.apis.MediaFetcher, e.exports = n.core.apis.MediaFetcher, n.prefetch = function(e) {
                        radio("external.prePlayPrefetch").broadcast(e)
                    }
                }(t)
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";
            var r = n(2),
                i = n(23);
            e.exports = function() {
                function e() {
                    return f[0]
                }

                function t() {
                    d = i(n)
                }

                function n() {
                    if (0 !== p) {
                        var n = u();
                        n === !0 ? o(e()) : ("number" != typeof n && (n = 0), window.setTimeout(t, n))
                    }
                }

                function o(e) {
                    try {
                        e()
                    } catch (e) {
                        r.error("taskQueue::task() failed", e)
                    }
                    a(), p > 0 && t()
                }

                function s(e) {
                    f[p] = e, p++, 1 === p && t()
                }

                function a() {
                    f.shift(), p--
                }

                function u() {
                    if (!h.canrun) return !0;
                    try {
                        return h.canrun()
                    } catch (e) {
                        return r.warn("taskQueue::canrun failed", e), a(), !1
                    }
                }

                function c() {
                    f = [], p = 0
                }

                function l() {
                    return f
                }
                var d, f = [],
                    p = 0,
                    h = {
                        push: s,
                        getTasks: l,
                        reset: c,
                        canrun: null
                    };
                return h
            }
        }, function(e, t, n) {
            (function(t) {
                "use strict";

                function r(e, t) {
                    this.clientInstanceIndex = t, this.resources = e, this.currentReport = {}, this.seedersMapReport, this.playerEventsSanitizer = i(), this.subscriptions = this.registerEvents()
                }
                var i = n(159),
                    o = n(30),
                    s = n(2),
                    a = n(6),
                    u = n(1),
                    c = n(7),
                    l = n(64),
                    d = n(150),
                    f = n(70),
                    p = n(20),
                    h = {
                        httpDown: "http",
                        p2pDown: "p2p"
                    };
                r.prototype.destroy = function() {
                    this.subscriptions.forEach(function(e) {
                        e()
                    })
                }, r.prototype.reportResourceStats = function(e) {
                    var t = this.getStatsReport();
                    for (var n in e)
                        if (n in h) {
                            var r = e[n],
                                i = h[n];
                            r > 0 && (t[i] = (t[i] || 0) + e[n])
                        }
                }, r.prototype.registerEvents = function() {
                    var e = [],
                        t = {
                            "external.player": function(e) {
                                var t = this.playerEventsSanitizer.handle(e);
                                if (t) {
                                    if ("load.end" === t.action) {
                                        var n = this.getStatsReport();
                                        n.views = (n.views || 0) + 1, t.duration && (n.load_time = (n.load_time || 0) + t.duration)
                                    }
                                    if ("rebuffer.start" === t.action || "rebuffer.end" === t.action ? (s.warn("player event: " + t.action, e), this.enrichRebufferReport(t)) : s.info("player event: " + t.action, e), u.REPORT_PLAYER_EVENTS) {
                                        var r = this.getPlayerReport();
                                        r.push(t)
                                    }
                                }
                            },
                            "player.attach": function(t) {
                                function n(e) {
                                    var t = this.getStatsReport();
                                    t.views = (t.views || 0) + 1, e.duration && (t.load_time = (t.load_time || 0) + e.duration)
                                }["ready", "load.start", "load.end", "pause.start", "pause.end", "rebuffer.start", "rebuffer.end", "seek.start", "seek.end"].forEach(function(n) {
                                    function r(e) {
                                        var t = a.getMediaInfo(),
                                            r = c({
                                                vendor: t.vendor,
                                                tracking: t.tracking,
                                                provider: t.provider
                                            }, e),
                                            i = this.playerEventsSanitizer.handle(r);
                                        if (i && ("rebuffer.start" === i.action || "rebuffer.end" === i.action ? (s.warn(n, r), this.enrichRebufferReport(i)) : s.info("Player event: " + n, r), u.REPORT_PLAYER_EVENTS)) {
                                            var o = this.getPlayerReport();
                                            o.push(i)
                                        }
                                    }
                                    t.on(n, r, this), e.push(function() {
                                        t.off(n, r)
                                    })
                                }, this), t.on("load.end", n, this), e.push(function() {
                                    t.off("load.end", n)
                                })
                            },
                            "request:finished": function(e) {
                                if (u.REPORT_REQUEST_STATS) {
                                    var t = this.getRequestsReport();
                                    t.push(e)
                                }
                            },
                            "estimation:finished": function(e) {
                                if (u.REPORT_ESTIMATION_STATS) {
                                    var t = this.getEstimationsReport();
                                    t.push(e)
                                }
                            },
                            "seeders:report": function(e) {
                                this.seedersMapReport = {
                                    seedersMapReport: e
                                }
                            }
                        };
                    return Object.keys(t).forEach(function(e) {
                        o(e).subscribe([t[e], this])
                    }, this), e
                }, r.prototype.reportDynamicRequestDecisionStats = function(e) {
                    if (u.REPORT_DYNAMIC_REQUEST_STATS) {
                        var t = this.getDynamicDecisionReport();
                        t.push(e)
                    }
                }, r.prototype.enrichRebufferReport = function(e) {
                    var n = a.getStats("*");
                    e.context = {}, e.context.peers = n.numOfPeers, e.context.p2pDown = n.p2pDown, e.context.p2pWaste = n.p2pWaste, e.context.httpDown = n.httpDown, e.context.httpWaste = n.httpWaste, e.context["load.end"] = n["load.end"][0], e.context.numOfSeeks = n["seek.end"].length, e.context.numOfResources = this.getNumOfResources(), e.context.activeRequests = [], e.context.currentBuffer = t.core.apis.MediaFetcher.mediaController.getBufferLength();
                    var r = this.getActiveResources();
                    e.context.numOfActiveResources = r.length, r.forEach(function(t) {
                        var n = t.resourceId || t.url;
                        if (!n) return void s.error("Active resource without resourceId and url");
                        var r = t.getStats(),
                            i = a.getStats(n),
                            o = a.getSpeed(n);
                        e.context.activeRequests.push({
                            url: t.url,
                            size: t.size,
                            downloadMode: t.downloadMode,
                            p2pDown: r.p2pDown,
                            p2pWaste: r.p2pWaste,
                            httpDown: r.httpDown,
                            httpWaste: r.httpWaste,
                            requestsCount: i.requestsCount,
                            startBufferHealth: i.startBufferHealth,
                            age: t.getAge(),
                            httpSpeed: Math.round(o)
                        })
                    });
                    var i = a.getGlobalStats({
                        recentAge: u.STATS_RECENT_QUERY_AGE
                    });
                    e.context.maxBufferHealth = i.maxBufferHealth || 0, e.context.avgHTTPSpeed = Math.round(i.avgHTTPSpeed || 0), e.context.recentP2PUploaded = i.recentP2PUploaded || 0, e.context.peerConnectionsCreated = i.peerConnectionsCreated || 0, e.context.totalFPSDrop = i.totalFPSDrop || 0, e.context.p2pHaveReceived = i.p2pHaveMessagesReceived || 0, e.context.p2pDontHaveReceived = i.p2pDontHaveMessagesReceived || 0, e.context.p2pRequestReceived = i.p2pRequestMessagesReceived || 0, e.context.p2pDataReceived = i.p2pDataMessagesReceived || 0, e.context.p2pDownloadingReceived = i.p2pDownloadingMessagesReceived || 0, e.context.p2pNewSegmentReceived = i.p2pNewSegmentMessagesReceived || 0, e.context.p2pInitializingReceived = i.p2pInitializingMessagesReceived || 0, e.context.p2pHaveSent = i.p2pHaveMessagesSent || 0, e.context.p2pDontHaveSent = i.p2pDontHaveMessagesSent || 0, e.context.p2pRequestSent = i.p2pRequestMessagesSent || 0, e.context.p2pDataSent = i.p2pDataMessagesSent || 0, e.context.p2pDownloadingSent = i.p2pDownloadingMessagesSent || 0, e.context.p2pNewSegmentSent = i.p2pNewSegmentMessagesSent || 0, e.context.p2pInitializingSent = i.p2pInitializingMessagesSent || 0, e.context.matchReceived = i.matchMessagesReceived || 0, e.context.sdpReceived = i.sdpMessagesReceived || 0, e.context.sdpSent = i.sdpMessagesSent || 0, e.context.joinSent = i.joinMessagesSent || 0, e.context.leaveSent = i.leaveMessagesSent || 0, e.context.numOfErrors = s.getMetrics().error, e.context.pageFocused = f.isFocused(), e.context.pageVisible = f.isVisible(), e.context.audioPlaying = f.isAudioPlaying()
                }, r.prototype.getActiveResources = function() {
                    return this.resources.getActiveResources()
                }, r.prototype.getNumOfResources = function() {
                    return this.resources.getNumOfResources()
                }, r.prototype.addPeerConnectionReport = function(e) {
                    u.REPORT_PEER_STATS && (this.currentReport.peers || (this.currentReport.peers = []), this.currentReport.peers.push(e))
                }, r.prototype.addBasicRequestReport = function(e) {
                    u.REPORT_BASIC_REQUEST_STATS && (this.currentReport.basicRequests || (this.currentReport.basicRequests = []), this.currentReport.basicRequests.push(e))
                }, r.prototype.getPlayerReport = function() {
                    return this.currentReport.player || (this.currentReport.player = []), this.currentReport.player
                }, r.prototype.getStatsReport = function() {
                    return this.currentReport.stats || (this.currentReport.stats = {}), this.currentReport.stats
                }, r.prototype.getRequestsReport = function() {
                    return this.currentReport.requests || (this.currentReport.requests = []), this.currentReport.requests
                }, r.prototype.getDynamicDecisionReport = function() {
                    return this.currentReport.decisionStats || (this.currentReport.decisionStats = []), this.currentReport.decisionStats
                }, r.prototype.getEstimationsReport = function() {
                    return this.currentReport.estimations || (this.currentReport.estimations = []), this.currentReport.estimations
                }, r.prototype.addPeriodicalReports = function() {
                    var e = a.getTotalDurations(),
                        t = e.play - (this.lastPlayDuration || 0),
                        n = e.rebuffer - (this.lastRebufferDuration || 0);
                    if (this.lastPlayDuration = e.play, this.lastRebufferDuration = e.rebuffer, (t || n) && !(t > u.REPORT_MAX_PLAYER_DURATIONS || n > u.REPORT_MAX_PLAYER_DURATIONS)) {
                        var r = this.getStatsReport();
                        t > 0 && (r.played = t), n > 0 && (r.rebuffered = n)
                    }
                }, r.prototype.rotateReport = function() {
                    this.addPeriodicalReports();
                    var e = this.currentReport;
                    if (e.stats && 0 === Object.keys(e.stats).length && delete e.stats, Object.keys(e).length > 0) return this.currentReport = {}, e
                }, r.prototype.getSessionSummary = function() {
                    var e = a.getTotalDurations(),
                        n = a.getStats(),
                        r = a.getGlobalStats(),
                        i = a.getMediaInfo(),
                        o = a.getMediaErrors(),
                        u = a.getNetworkErrors(),
                        c = a.getMemoryErrors(),
                        f = t.core.apis.MediaFetcher.mediaController.getBufferLength(),
                        h = a.getPeerConnectionAttemptsPerAttempt();
                    l.endRequests(Math.floor(1e3 * f), "session.end");
                    var g = l.getRequestStats(),
                        v = l.getDurationSinceLastActiveRequest(),
                        E = a.getSpeedReport();
                    return {
                        action: "session.end",
                        randomBool: Math.random() > .5,
                        vendor: i.vendor,
                        provider: i.provider,
                        tracking: i.tracking,
                        mediaType: i.type,
                        mediaProtocol: i.protocol,
                        mediaElement: i.mediaElement,
                        mediaSrc: i.mediaSrc,
                        playlistUrl: i.playlistUrl,
                        trackedLevelsManifest: i.trackedLevelsManifest,
                        isEncrypted: i.isEncrypted,
                        playDuration: e.play,
                        rebufferDuration: e.rebuffer,
                        lastPlayerEvent: i.lastPlayerEvent,
                        sinceLastPlayerEvent: i.sinceLastPlayerEvent ? i.sinceLastPlayerEvent.elapsed() : void 0,
                        numOfSeeks: n["seek.end"].length,
                        numOfErrors: s.getMetrics().error,
                        p2pDown: n.p2pDown,
                        p2pUp: n.p2pUp,
                        httpDown: n.httpDown,
                        httpWaste: n.httpWaste,
                        p2pWaste: n.p2pWaste,
                        preloadDown: n.preloadDown,
                        fpsDrop: r.totalFPSDrop,
                        avgBitrate: Math.round(i.avgBitrate) || void 0,
                        loadTime: r.loadTime,
                        currentBuffer: f,
                        maxBufferHealth: r.maxBufferHealth,
                        requestErrors: r.requestErrors,
                        requestAborts: r.requestAborts,
                        requestsWithLengthCount: r.requestsWithLength,
                        requestsWithoutLengthCount: r.requestsWithoutLength,
                        segmentDuration: Math.ceil(r.segmentDuration) || void 0,
                        segmentSize: Math.ceil(r.segmentSize) || void 0,
                        playlistLength: Math.ceil(r.playlistLength) || void 0,
                        renditionCount: Math.ceil(r.renditionCount) || void 0,
                        errors: {
                            hlsjs: o.hlsjs,
                            videoTag: o.videoTag,
                            network: u,
                            memory: c,
                            PEER5_STUCK_REQUESTS: d.getStuckRequestCount(g)
                        },
                        attempt1Success: h.attempt1Success,
                        attempt1Fail: h.attempt1Fail,
                        attempt2Success: h.attempt2Success,
                        attempt2Fail: h.attempt2Fail,
                        attempt3Success: h.attempt3Success,
                        attempt3Fail: h.attempt3Fail,
                        attemptRestSuccess: h.attemptRestSuccess,
                        attemptRestFail: h.attemptRestFail,
                        p5Request2BeforeLast: g[g.length - 3],
                        p5Request1BeforeLast: g[g.length - 2],
                        p5Request0BeforeLast: g[g.length - 1],
                        durationSinceLastActiveRequest: v,
                        averageMatchSize: (r.totalMatches || 0) / ((r.joinMessagesSent || 0) + (r.askForPeersMessagesSent || 0) || 0) || void 0,
                        instance: this.clientInstanceIndex,
                        serverSpeed: {
                            cdn: E.dimensions.cdn,
                            actual: E.metrics.actual,
                            predicted: E.metrics.predicted,
                            latency: E.metrics.latency
                        },
                        scriptLoadTime: p.getLoadTime() || void 0
                    }
                }, r.prototype.getSeedersMapReport = function() {
                    return this.seedersMapReport
                }, e.exports = r
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";
            var r = n(13),
                i = n(49),
                o = n(17),
                s = n(39),
                a = n(131),
                u = n(1),
                c = "";
            if (u.GROUP_BY_SUBNETS) {
                var l = a();
                l.once("group:id", function(e) {
                    c = e
                })
            }
            e.exports = function(e, t, n) {
                var a = r.swarmId(e);
                n && (a += s());
                var l = c + t + a + u.VERSION;
                return o.A_B_HASH_JSON && !u.A_B_TEST_TOGETHER && (l += o.A_B_HASH_JSON), i.hash(l)
            }
        }, function(e, t, n) {
            (function(e) {
                window = window || self;
                var t = n(23);
                ! function(e) {
                    e.envokeCallback = function(e, n, r) {
                        r = r || window, e && "function" == typeof e && t(function() {
                            e.apply(r, n)
                        })
                    }, e.executeFunctionByName = function(e, t, n) {
                        for (var r = e.split("."), i = r.pop(), o = 0; o < r.length; o++) t = t[r[o]];
                        return t[i].apply(t, n)
                    }, e.uint8ToString = function(e) {
                        for (var t = 32768, n = [], r = 0; r < e.length; r += t) n.push(String.fromCharCode.apply(null, e.subarray(r, r + t)));
                        return n.join("")
                    }, e.parseResponseHeaders = function(e) {
                        var t = {};
                        if (!e) return t;
                        for (var n = e.split("\r\n"), r = 0; r < n.length; r++) {
                            var i = n[r],
                                o = i.indexOf(": ");
                            if (o > 0) {
                                var s = i.substring(0, o).toLocaleLowerCase(),
                                    a = i.substring(o + 2);
                                t[s] = a
                            }
                        }
                        return t
                    }, e.parseResponseLengthHeader = function(e, t) {
                        return e && 2 == e.split("/").length ? parseInt(e.split("/")[1]) : t ? parseInt(t) : void 0
                    }, e.durationToSeconds = function(e) {
                        function t(e) {
                            if (!e) return 0;
                            var t = e.substring(0, e.length - 1);
                            return Number(t)
                        }
                        var n = /P([0-9.]+Y)?([0-9.]+M)?([0-9.]+D)?T([0-9.]+H)?([0-9.]+M)?([0-9.]+S)?$/i;
                        if (n.test(e)) {
                            var r = n.exec(e),
                                i = 0;
                            return i += 31536e3 * t(r[1]), i += 2592e3 * t(r[2]), i += 86400 * t(r[3]), i += 3600 * t(r[4]), i += 60 * t(r[5]), i += t(r[6])
                        }
                        return -1
                    }
                }(e.core.util)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                ! function(e) {
                    function t() {
                        function e(e, t) {
                            i[e] = t
                        }

                        function t(e) {
                            return i[e]
                        }

                        function n(e) {
                            i[e] = null
                        }

                        function r() {
                            i = Object.create(null)
                        }
                        var i = Object.create(null);
                        return {
                            save: e,
                            load: t,
                            remove: n,
                            clear: r
                        }
                    }
                    e.createPlaylistCache = t
                }(e.core.util)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                var t = n(8),
                    r = n(1),
                    i = n(34),
                    o = n(48),
                    s = n(58).instance,
                    a = n(11);
                ! function(n) {
                    function u(n, u) {
                        function f(t, n) {
                            e.info("prefetching " + t.url + " in p2p");
                            var r = {
                                    onswarmstatechange: function(e) {
                                        A.requestSwarmStateChanged(e)
                                    },
                                    onerror: function() {
                                        I.reportRequestDone(c), L++ < 3 && n()
                                    },
                                    onabort: function(e) {
                                        I.reportRequestDone(d), O.onRequestEvent("abort", e), n()
                                    },
                                    onload: function(e) {
                                        L = 0, I.reportRequestDone(l), O.onRequestEvent("load", e), n()
                                    }
                                },
                                i = e.core.util.PrefetchRequestSender(t, r),
                                o = i.send();
                            return I.useP2PSlot(), b[t.url] = o, o
                        }

                        function p(e) {
                            var n = new t;
                            n.open("GET", e), n.onloadend = function() {
                                if (this.status >= 200 && this.status < 300 && this.response) {
                                    var t = this.responseURL || e,
                                        n = this;
                                    i.parsePlaylist(t, this.response, function(e) {
                                        if (e) {
                                            var i = Object.keys(e),
                                                o = e[i[0]];
                                            if (o)
                                                if ("levels" === o.type) {
                                                    N.save(t, n.response), a.setRenditionCount(o.levels.length);
                                                    var s = o.levels[0].url;
                                                    r.PRELOAD_HIGHEST_RENDITION && (s = o.levels.sort(function(e, t) {
                                                        return Number(t.bandwidth) - Number(e.bandwidth)
                                                    })[0].url), p(s)
                                                } else w.digestPlaylist(t, n.response, !1, function() {
                                                    o.rawContent = n.response, o.manifestUrl = t, "live" === o.mode ? _(o) : (N.save(t, n.response), T(o))
                                                })
                                        }
                                    })
                                }
                            }, n.send()
                        }

                        function h(e) {
                            var t, n = o(P.manifestUrl, P.rawContent);
                            t = r.USE_PEER_PRIORITIZER ? n.manipulateManifest(s.getDelay()) : n.manipulateManifest(r.LIVE_SECONDS_DELAY), N.save(P.manifestUrl, t), i.parsePlaylist(P.manifestUrl, t, function(t) {
                                if (!t) return void e(null);
                                var n = Object.keys(t),
                                    r = t[n[0]];
                                e(r)
                            })
                        }

                        function g(t) {
                            var n = t.segments;
                            if (!n || 0 === n.length) return e.warn("delayed manifest shouldnt be empty"), null;
                            for (var r = null, i = 0; i < e.config.PLAYER_SEGMENTS_BUFFER && n.length > 0; i++) r = n.pop();
                            return r
                        }

                        function v(e) {
                            h(function(t) {
                                if (!t) return void e(null);
                                var n = g(t);
                                if (!n) return 0;
                                var r;
                                P.segments.some(function(e, t) {
                                    return e.url === n.url && (r = t, !0)
                                });
                                for (var i = 0, o = r; o < P.segments.length; o++) {
                                    var s = O.getAvgDownloadTime(P.manifestUrl),
                                        a = P.segments[o].duration / 1e3,
                                        u = a * s;
                                    if (i >= u) break;
                                    i += a
                                }
                                e(o)
                            })
                        }

                        function E() {
                            if (!C) {
                                var e = null;
                                v(function(t) {
                                    if (t) {
                                        for (; t < P.segments.length && (e = P.segments[t], b[e.url]); t++);
                                        if (e) {
                                            var n = w.getSegmentFromUrl(e.url);
                                            if (n) {
                                                var r = R(n);
                                                if (r)
                                                    for (var i = I.availableP2PSlots(); r.length && i > 0; t++) {
                                                        var o = r.shift();
                                                        f(o, function() {
                                                            E()
                                                        }), i--
                                                    }
                                            }
                                        }
                                    }
                                })
                            }
                        }

                        function _(t) {
                            P = t, E(), C || setTimeout(function() {
                                p(t.manifestUrl)
                            }, e.config.PREFETCH_LIVE_INTERVAL_MS)
                        }

                        function m(e) {
                            if (!C)
                                for (var t = I.availableP2PSlots(); t > 0 && e.length > 0;) {
                                    var n = e.shift();
                                    f(n, function() {
                                        m(e)
                                    }), t--
                                }
                        }

                        function T(e) {
                            if (e.segments && 0 !== e.segments.length) {
                                var t = e.segments[0],
                                    n = w.getSegmentFromUrl(t.url);
                                if (n) {
                                    var r = R(n);
                                    r && m(r)
                                }
                            }
                        }

                        function R(e) {
                            w.setLastRequestedSegment(e.url);
                            var t = w.getNextSegments(r.SEGMENTS_TO_PREFETCH_BEFORE_PLAY, e.url);
                            return [e].concat(t)
                        }

                        function S(t) {
                            p(t), setTimeout(function() {
                                y(), N.clear()
                            }, 1e3 * e.config.STOP_PREFETCH_AFTER_SECONDS)
                        }

                        function y() {
                            C = !0, Object.keys(b).forEach(function(e) {
                                var t = b[e];
                                4 !== t.readyState && t.abort()
                            })
                        }
                        var P, A = u,
                            w = n.playlistsHandler,
                            I = n.prefetchSlotsHandler,
                            O = n.prefetchSpeedEstimator,
                            b = Object.create(null),
                            N = n.playlistsCache,
                            C = !1,
                            L = 0;
                        return {
                            startPrefetch: S,
                            stopPrefetch: y
                        }
                    }
                    var c = "error",
                        l = "load",
                        d = "abort";
                    n.prePlayPrefetcher = u
                }(e.core.util)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                ! function(t) {
                    function n(t, n) {
                        function r(e) {
                            var t = {
                                type: "fileDownloaded",
                                url: e.currentTarget._url,
                                loaded: e.loaded,
                                p2p: e.loadedP2P,
                                http: e.loadedHTTP,
                                waste: e.loadedP2P + e.loadedHTTP - e.total,
                                fileSize: e.total,
                                downloadTimeMS: e.currentTarget._startStopper.elapsed()
                            };
                            window.P2PPerformanceUpdate && window.P2PPerformanceUpdate(t)
                        }

                        function i() {
                            var n = new e.VideoRequest({
                                    downloadMode: "p2p",
                                    origin: "preload"
                                }),
                                i = t.url;
                            return n._segmentData = t, n.mediaPrefetch = !0, n.responseType = "arraybuffer", n.open("GET", i), n.onswarmstatechange = function(e) {
                                s.onswarmstatechange && s.onswarmstatechange(e)
                            }, n.onerror = function(t) {
                                e.info("onerror prefetching resource: " + i), s.onerror && s.onerror(t)
                            }, n.onabort = function(e) {
                                s.onabort && s.onabort(e)
                            }, n.onload = function(t) {
                                e.info("prefetch onload " + i), r(t), s.onload && s.onload(t)
                            }, e.info("requesting " + i), n
                        }

                        function o() {
                            return a.send(), a
                        }
                        var s = n,
                            a = i();
                        return {
                            send: o
                        }
                    }
                    t.PrefetchRequestSender = n
                }(e.core.util)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                ! function(t) {
                    function n() {
                        function t() {
                            E++, E >= e.config.ADD_SLOT_LOADED_REQUESTS_THRESHOLD && v && c()
                        }

                        function n() {
                            E = 0
                        }

                        function s() {
                            _++, _ >= e.config.REDUCE_SLOT_ABORTS_THRESHOLD && l()
                        }

                        function a() {
                            _ = 0
                        }

                        function u(e) {
                            switch (f(), e) {
                                case r:
                                    n();
                                    break;
                                case o:
                                    s(), n();
                                    break;
                                case i:
                                    t()
                            }
                        }

                        function c() {
                            m.availableP2PSlots++, v = !1, a(), n()
                        }

                        function l() {
                            var t = p();
                            t <= e.config.MINIMUM_P2P_SLOTS || (m.availableP2PSlots--, a(), n())
                        }

                        function d() {
                            m.availableP2PSlots--, g++
                        }

                        function f() {
                            m.availableP2PSlots++, g--
                        }

                        function p() {
                            var e = m.availableP2PSlots + g;
                            return e
                        }

                        function h() {
                            return m.availableP2PSlots
                        }
                        var g = 0,
                            v = !1,
                            E = 0,
                            _ = 0,
                            m = {
                                availableP2PSlots: e.config.INITIAL_P2P_SLOTS
                            };
                        return {
                            availableP2PSlots: h,
                            useP2PSlot: d,
                            reportRequestDone: u
                        }
                    }
                    var r = "error",
                        i = "load",
                        o = "abort";
                    t.PrefetchSlotsHandler = n
                }(e.core.util)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                ! function(t) {
                    function n() {
                        function t(t, n) {
                            var i = t.playlist.url,
                                s = n / 1e3;
                            o[i] || (o[i] = []);
                            var a = t.duration / 1e3;
                            o[i].unshift({
                                duration: a,
                                downloadTime: s
                            }), o[i].length > r && o[i].splice(e.config.TIME_ESTIMATION_LIST_LENGTH, e.config.TIME_ESTIMATION_LIST_LENGTH)
                        }

                        function n(t) {
                            if (!o[t] || 0 === o[t].length) return e.config.INITIAL_DL_SECS_ESTIMATION;
                            for (var n = o[t], r = 0, i = 0, s = 0; s < Math.min(e.config.TIME_ESTIMATION_LIST_LENGTH, n.length); s++) {
                                var a = n[s];
                                r += a.duration, i += a.downloadTime
                            }
                            var u = i / r;
                            return u
                        }

                        function i(e, n) {
                            var r = n.currentTarget,
                                i = r._startStopper.elapsed();
                            if ("load" === e) t(r._segmentData, i);
                            else if ("abort" === e) {
                                var o = n.total ? n.loadedP2P / n.total : 0;
                                if (0 === o) return;
                                var s = i / o;
                                t(r._segmentData, s)
                            }
                        }
                        var o = Object.create(null);
                        return {
                            onRequestEvent: i,
                            getAvgDownloadTime: n
                        }
                    }
                    var r = 2 * e.config.TIME_ESTIMATION_LIST_LENGTH;
                    t.PrefetchSpeedEstimator = n
                }(e.core.util)
            }).call(t, n(4))
        }, function(e, t, n) {
            (function(e) {
                ! function(e) {
                    var t = function() {
                            function e(e, t) {
                                if (!e) return t;
                                if (!t) return e;
                                var n = "/",
                                    r = "";
                                if (e.indexOf("://") !== -1) {
                                    var i = e.split("://");
                                    n = i[0] + "://", r = i[1]
                                } else r = e;
                                for (var o = r.split("/").filter(function(e) {
                                        return e.length > 0
                                    }), s = (t.match(/\.\.\//g) || []).length, a = 0; a < s; a++) o.pop();
                                var u = n + o.join("/");
                                t = t.replace(/\.\.\//g, ""), "/" === t[0] && (t = t.replace("/", ""));
                                var c = u.lastIndexOf("/") === u.length - 1 ? u + t : u + "/" + t;
                                return c
                            }
                            return {
                                combine: e
                            }
                        },
                        n = t();
                    e.UrlUtils = n
                }(e.core.util)
            }).call(t, n(4))
        }, function(e, t) {
            function n(e) {
                this.size = 0, this.limit = e, this.oldest = this.newest = void 0, this._keymap = {}
            }
            n.prototype._markEntryAsUsed = function(e) {
                e !== this.newest && (e.newer && (e === this.oldest && (this.oldest = e.newer), e.newer.older = e.older), e.older && (e.older.newer = e.newer), e.newer = void 0, e.older = this.newest, this.newest && (this.newest.newer = e), this.newest = e)
            }, n.prototype.put = function(e, t) {
                var n = this._keymap[e];
                return n ? (n.value = t, void this._markEntryAsUsed(n)) : (this._keymap[e] = n = {
                    key: e,
                    value: t,
                    older: void 0,
                    newer: void 0
                }, this.newest ? (this.newest.newer = n, n.older = this.newest) : this.oldest = n, this.newest = n, this.size++, this.size > this.limit ? this.shift() : void 0)
            }, n.prototype.shift = function() {
                var e = this.oldest;
                return e && (this.oldest.newer ? (this.oldest = this.oldest.newer, this.oldest.older = void 0) : (this.oldest = void 0, this.newest = void 0), e.newer = e.older = void 0, delete this._keymap[e.key], this.size--), e
            }, n.prototype.get = function(e, t) {
                var n = this._keymap[e];
                if (void 0 !== n) return this._markEntryAsUsed(n), t ? n : n.value
            }, n.prototype.find = function(e) {
                return this._keymap[e]
            }, n.prototype.set = function(e, t) {
                var n, r = this.get(e, !0);
                return r ? (n = r.value, r.value = t) : (n = this.put(e, t), n && (n = n.value)), n
            }, n.prototype.remove = function(e) {
                var t = this._keymap[e];
                if (t) return delete this._keymap[t.key], t.newer && t.older ? (t.older.newer = t.newer, t.newer.older = t.older) : t.newer ? (t.newer.older = void 0, this.oldest = t.newer) : t.older ? (t.older.newer = void 0, this.newest = t.older) : this.oldest = this.newest = void 0, this.size--, t.value
            }, n.prototype.removeAll = function() {
                this.oldest = this.newest = void 0, this.size = 0, this._keymap = {}
            }, "function" == typeof Object.keys ? n.prototype.keys = function() {
                return Object.keys(this._keymap)
            } : n.prototype.keys = function() {
                var e = [];
                for (var t in this._keymap) e.push(t);
                return e
            }, n.prototype.forEach = function(e, t, n) {
                var r;
                if (t === !0 ? (n = !0, t = void 0) : "object" != typeof t && (t = this), n)
                    for (r = this.newest; r;) e.call(t, r.key, r.value, this), r = r.older;
                else
                    for (r = this.oldest; r;) e.call(t, r.key, r.value, this), r = r.newer
            }, n.prototype.toJSON = function() {
                for (var e = new Array(this.size), t = 0, n = this.oldest; n;) e[t++] = {
                    key: n.key,
                    value: n.value
                }, n = n.newer;
                return e
            }, n.prototype.toString = function() {
                for (var e = "", t = this.oldest; t;) e += String(t.key) + ":" + t.value, t = t.newer, t && (e += " < ");
                return e
            }, "object" == typeof this && (this.LRUCache = n)
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                for (var i = Object.keys(r), o = i.length - 1; o >= 0; o--) {
                    var s = Number(i[o]);
                    e.addEdge(l, s, r[s].length);
                    for (var a = 0; a < t.length; a++) {
                        var u = t[a],
                            c = 100 + a;
                        u.hasBlock(n, s) && e.addEdge(s, c, r[s].length)
                    }
                }
            }

            function i(e, t, n) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = 100 + r;
                    e.addEdge(o, d, n(i))
                }
            }

            function o(e) {
                return e.maxFlow(l, d)
            }

            function s(e, t) {
                return t - e
            }

            function a(e, t, n) {
                var r = {};
                return e.map(function(e, i) {
                    var o = [],
                        a = 100 + i,
                        u = t.edges[a];
                    return u.forEach(function(e) {
                        var t = -1 * e.flow;
                        if (!(t <= 0)) {
                            var i = e.sink,
                                s = n[i],
                                a = r[i] || s.length,
                                u = s.slice(a - t, a);
                            o = o.concat(u), r[i] = (r[i] || s.length) - t
                        }
                    }), o.length > 0 && {
                        peer: e,
                        chunkIds: o.sort(s)
                    }
                }).filter(function(e) {
                    return e
                })
            }
            var u = n(50),
                c = n(2),
                l = 200,
                d = 201;
            e.exports.reduce = function(e, t, n, s, l) {
                if (Object.keys(n).length > 100) return c.error({
                    numOfBlocks: Object.keys(n).length
                }, "Too many blocks for p2p allocation"), [];
                if (e.length > 100) return c.error({
                    numOfPeers: e.length
                }, "Too many peers for p2p allocation"), [];
                var d = new u;
                return r(d, e, t, n), i(d, e, function(e) {
                    var t, n = s[e.peerId] || 0;
                    return t = l ? l[e.peerId] ? e.maxOldNumOfPendingChunks : e.maxNewNumOfPendingChunks : e.maxNumOfPendingChunks, t - n
                }), o(d), a(e, d, n)
            }, e.exports.isSatisfiable = function(e, t, n) {
                if (Object.keys(n).length > 100) return c.error({
                    numOfBlocks: Object.keys(n).length
                }, "Too many blocks for p2p allocation"), !1;
                if (e.length > 100) return c.error({
                    numOfPeers: e.length
                }, "Too many peers for p2p allocation"), !1;
                var s = new u;
                r(s, e, t, n), i(s, e, function() {
                    return Number.MAX_VALUE
                });
                var a = o(s),
                    l = Object.keys(n).reduce(function(e, t) {
                        return e + n[t].length
                    }, 0);
                return a === l
            }
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n, r, i) {
                for (var o = 0; o < t.length; o++) {
                    var s = t[o],
                        a = 100 + o;
                    e.addEdge(c, a, i(s));
                    for (var u = Object.keys(r), l = 0; l < u.length; l++) {
                        var d = Number(u[l]);
                        s.hasBlock(n, d) && e.addEdge(a, d, r[d].length)
                    }
                }
            }

            function i(e, t) {
                for (var n = Object.keys(t), r = n.length - 1; r >= 0; r--) {
                    var i = n[r];
                    e.addEdge(i, l, t[i].length)
                }
            }

            function o(e) {
                return e.maxFlow(c, l)
            }

            function s(e, t, n) {
                var r = {};
                return e.map(function(e, i) {
                    var o = [],
                        s = 100 + i,
                        a = t.edges[s];
                    return a.forEach(function(e) {
                        if (!(e.flow <= 0)) {
                            var t = e.flow,
                                i = e.sink,
                                s = n[i],
                                a = r[i] || s.length,
                                u = s.slice(a - t, a);
                            o = o.concat(u), r[i] = (r[i] || s.length) - t
                        }
                    }), o.length > 0 && {
                        peer: e,
                        chunkIds: o.reverse()
                    }
                }).filter(function(e) {
                    return e
                })
            }
            var a = n(50),
                u = n(2),
                c = 200,
                l = 201;
            e.exports.reduce = function(e, t, n, c, l) {
                if (Object.keys(n).length > 100) return u.error({
                    numOfBlocks: Object.keys(n).length
                }, "Too many blocks for p2p allocation"), [];
                if (e.length > 100) return u.error({
                    numOfPeers: e.length
                }, "Too many peers for p2p allocation"), [];
                var d = new a;
                return r(d, e, t, n, function(e) {
                    var t, n = c[e.peerId] || 0;
                    return t = l ? l[e.peerId] ? e.maxOldNumOfPendingChunks : e.maxNewNumOfPendingChunks : e.maxNumOfPendingChunks, t - n
                }), i(d, n), o(d), s(e, d, n)
            }, e.exports.isSatisfiable = function(e, t, n) {
                if (Object.keys(n).length > 100) return u.error({
                    numOfBlocks: Object.keys(n).length
                }, "Too many blocks for p2p allocation"), !1;
                if (e.length > 100) return u.error({
                    numOfPeers: e.length
                }, "Too many peers for p2p allocation"), !1;
                var s = new a;
                r(s, e, t, n, function() {
                    return Number.MAX_VALUE
                }), i(s, n);
                var c = o(s),
                    l = Object.keys(n).reduce(function(e, t) {
                        return e + n[t].length
                    }, 0);
                return c === l
            }
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e, t) {
                    r.set(e, {
                        initialConstraint: e.getConstraint(),
                        initialConstraintRatio: e.getConstraint() / i.min(),
                        initialEstimation: t,
                        initialForceHttp: e.forceHttp || !1,
                        initialTimeSinceCreated: e.getAge(),
                        swarmId: e.swarmId,
                        get timeToHttpSwitch() {
                            return this.switchTimeSinceCreated - this.initialTimeSinceCreated
                        },
                        switchConstraint: null,
                        switchConstraintRatio: null,
                        switchP2PEstimationRatio: null,
                        switchP2PEstimation: null,
                        switchTimeSinceCreated: null,
                        finishedBy: null,
                        finishTime: null,
                        finishConstraint: null,
                        finishConstraintRatio: null
                    })
                }

                function t(e, t) {
                    var n = r.get(e);
                    n && (n.switchTimeSinceCreated || (n.switchTimeSinceCreated = e.getAge(), n.switchP2PEstimation = t, n.switchConstraint = e.getConstraint(), n.switchConstraintRatio = e.getConstraint() / i.min(), n.switchP2PEstimationRatio = t / i.min()))
                }

                function n(e, t) {
                    var n = r.get(e);
                    return n ? (n.finishedBy = t, n.finishTime = e.getAge() - n.initialTimeSinceCreated, n.finishConstraint = e.getConstraint(), n.finishConstraintRatio = e.getConstraint() / i.min(), r.delete(e), n) : null
                }
                var r = new window.WeakMap;
                return {
                    initialize: e,
                    trackHttpSwitchdown: t,
                    end: n
                }
            }
            var i = n(11);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r(t, n) {
                    var r = [];
                    return a || (a = u.elapsed(), r = c.map(function(r, i) {
                        var o = r.estimationId,
                            u = r.estimationTime,
                            c = r.estimation,
                            f = c + u,
                            p = a - u,
                            h = s.sign(c - p),
                            g = Math.round(1e4 * h * Math.pow(c / p, h)),
                            v = s.sign(f - a),
                            E = Math.round(1e4 * v * Math.pow(f / a, v));
                        return {
                            type: r.type,
                            estimationId: o,
                            estimationCounter: i,
                            swarmId: e,
                            downloadMode: l,
                            resourceConstraint: d,
                            finishStatus: t,
                            finishedBy: n,
                            estimationTime: u,
                            completionTime: a,
                            estimationDuration: c,
                            timeToCompletion: p,
                            completionEstimation: f,
                            estimationDeviation: g,
                            completionDeviation: E
                        }
                    })), r
                }

                function i(e, t, n) {
                    c.push({
                        estimationId: t,
                        estimationTime: u.elapsed(),
                        estimation: e,
                        type: n
                    })
                }
                var a, u = o(),
                    c = [],
                    l = t,
                    d = n;
                return {
                    end: r,
                    estimate: i
                }
            }

            function i() {
                function e(e, t, n) {
                    i[e] || (i[e] = r(e, t, n))
                }

                function t(e, t, n) {
                    var r = i[e];
                    return r ? r.end(t, n) : []
                }

                function n(e, t, n) {
                    var r = i[e];
                    r && r.estimate(t, o++, n)
                }
                var i = Object.create(null),
                    o = 0;
                return {
                    start: e,
                    end: t,
                    estimate: n
                }
            }
            var o = n(5),
                s = n(185);
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = f.SORT_ALLOCATION_RESOURCES_ASCENDING ? 1 : -1;
                return e.slice().sort(function(e, n) {
                    return (e.getConstraint() - n.getConstraint()) * t
                })
            }

            function i(e, t, n) {
                return l.findResourceAllocation(e, t, n)
            }

            function o(e, t, n) {
                var r = i(e, t, n),
                    o = l.findResourceEstimation(e, t, r.totalChunksPerPeer, r.peerAllocations);
                return o.peerAllocations = r.peerAllocations, o
            }

            function s(e, t, n, r) {
                var s = [],
                    a = d.countPendingChunksPerPeer(e);
                return t.forEach(function(t) {
                    var u, c, l;
                    r ? (c = o(e, t, a), u = c.durationEstimate) : c = i(e, t, a), n(t, u) ? (a = c.totalChunksPerPeer, l = {
                        resource: t,
                        durationEstimate: u,
                        peerAllocations: c.peerAllocations
                    }) : l = {
                        resource: t,
                        durationEstimate: u,
                        peerAllocations: void 0
                    }, s.push(l)
                }), s
            }

            function a(e, t, n) {
                var r = e.filter(function(e) {
                    return !e.isNew()
                });
                if (0 === r.length) return [];
                var i = s(r, t, n, !0);
                return i.forEach(function(e) {
                    var t = e.peerAllocations;
                    t && t.forEach(function(e) {
                        e.markAsPending = !0
                    })
                }), i
            }

            function u(e, t, n) {
                var r = e.filter(function(e) {
                    return e.isNew()
                });
                return 0 === r.length ? [] : s(r, t, n, !1)
            }

            function c(e, t, n) {
                var i = r(t),
                    o = a(e, i, n),
                    s = u(e, i, n);
                return o.concat(s)
            }
            var l = n(105),
                d = n(68),
                f = n(1);
            t.findChunksAllocation = c
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = Object.create(null);
                return e.forEach(function(e) {
                    t[e.peer.peerId] = e.chunkIds.length
                }), t
            }

            function i(e, t) {
                function n(e) {
                    return !r[e]
                }
                var r = Object.create(null),
                    i = Object.create(null);
                return e.forEach(function(e) {
                    e.chunkIds.forEach(function(e) {
                        r[e] = !0
                    })
                }), Object.keys(t).forEach(function(e) {
                    var r = t[e],
                        o = r.filter(n);
                    o.length > 0 && (i[e] = o)
                }), i
            }

            function o() {
                var e = Object.create(null),
                    t = p.mergeSumDictionaries.apply(void 0, arguments);
                return Object.keys(t).forEach(function(n) {
                    e[n] = t[n] > 0
                }), e
            }

            function s(e, t, n, r, i) {
                if (!e || 0 === e.length || !n || 0 === Object.keys(n).length) return [];
                var o = f.ALLOCATION_IN_REVERSE ? g : h;
                return o.reduce(e, t, n, r, i)
            }

            function a(e, t, n, a, u) {
                var c = r(n);
                if (0 === e.length) return {
                    estimation: Number.POSITIVE_INFINITY,
                    allocationPerPeer: a
                };
                if (0 === Object.keys(u).length) return {
                    estimation: 0,
                    allocationPerPeer: a
                };
                var l = f.ALLOCATION_IN_REVERSE ? g : h;
                if (!l.isSatisfiable(e, t.swarmId, u)) return {
                    estimation: Number.POSITIVE_INFINITY,
                    allocationPerPeer: a
                };
                var d = 0,
                    v = Object.create(null),
                    E = u;
                if (E = i(n, E), 0 === Object.keys(E).length) return {
                    estimation: _(),
                    allocationPerPeer: a
                };
                for (var m = a; Object.keys(E).length > 0;) {
                    var T = o(v, a, c),
                        R = s(e, t.swarmId, E, m, T);
                    d += _(), e.forEach(function(e) {
                        var t = m[e.peerId] || 0;
                        if (t > 0) {
                            var n;
                            n = T ? T[e.peerId] ? e.maxOldNumOfPendingChunks : e.maxNewNumOfPendingChunks : e.maxNumOfPendingChunks, t >= n ? m[e.peerId] -= n : m[e.peerId] = 0
                        }
                    }), R.forEach(function(e) {
                        v[e.peer.peerId] = (v[e.peer.peerId] || 0) + e.chunkIds.length
                    }), E = i(R, E)
                }
                return {
                    estimation: d,
                    allocationPerPeer: p.mergeSumDictionaries(v, a, c)
                }
            }

            function u(e) {
                switch (f.ORDER_PEERS_ALLOCATION) {
                    case "window":
                        return v.sortPeersByWindow(e);
                    case "load":
                        return v.sortPeersByLoad(e);
                    case "availableChunks":
                        return v.sortPeersByAvailableChunks(e);
                    default:
                        return e.slice()
                }
            }

            function c(e) {
                return e.filter(function(e) {
                    return e.isAvailable()
                })
            }

            function l(e, t, n) {
                var i = u(e),
                    o = c(i),
                    a = t.getNeededChunksByBlockId(),
                    l = s(o, t.swarmId, a, n),
                    d = r(l),
                    f = p.mergeSumDictionaries(n, d);
                return {
                    peerAllocations: l,
                    totalChunksPerPeer: f
                }
            }

            function d(e, t, n, r) {
                var i = u(e),
                    o = t.getNeededChunksByBlockId(),
                    s = a(i, t, r, n, o);
                return {
                    durationEstimate: s.estimation,
                    totalChunksPerPeer: s.allocationPerPeer
                }
            }
            var f = n(1),
                p = n(178),
                h = n(101),
                g = n(100),
                v = n(68),
                E = n(18),
                _ = function() {
                    return E.value() * f.PC_WINDOW_DURATION_GOAL_RATIO
                };
            t.findResourceAllocation = l, t.findResourceEstimation = d
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    e instanceof Error && i.error("playerAdapterError: " + e.message, e)
                }

                function t(t) {
                    return t ? "function" == typeof t.on && "function" == typeof t.off ? (t.on("error", e), n.push(function() {
                        t.off("error", e)
                    }), o("player.attach").broadcast(t), !0) : (i.error("attachPlayer received invalid adapter - " + (t && (typeof t || "undefined"))), !1) : (i.error('called "attachPlayer" without adapter'), !1)
                }
                var n = [];
                return t.destroy = function() {
                    n.forEach(function(e) {
                        e()
                    })
                }, t
            }
            var i = n(2),
                o = n(30);
            e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(8);
            e.exports = function() {
                return window.peer5.Request !== r && window.peer5.VideoRequest !== r && window.peer5.CatchAllVideoRequest !== r && window.peer5.FragmentRequest !== r && window.peer5.PlaylistRequest !== r
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t) {
                return t.userAgent.toLowerCase().indexOf("webos") !== -1 || t.userAgent.toLowerCase().indexOf("hpwos") !== -1 || t.userAgent.toLowerCase().indexOf("web0s") !== -1 ? Math.min(e, 62914560) : e
            }
        }, function(e, t, n) {
            "use strict";

            function r() {}

            function i(e) {
                var t = e || r,
                    n = s();
                if (!n) return void t();
                o.info("fetching dynamic config");
                var i = new XMLHttpRequest;
                i.open("GET", "//api.peer5.com/config/" + n + ".json"), i.responseType = "text", i.onloadend = function() {
                    if (i.status < 200 || i.status > 299) return o.warn("Failed to load dynamic config - bad status " + i.status), void t();
                    var e;
                    try {
                        e = JSON.parse(i.response)
                    } catch (e) {
                        return o.warn("Failed to parse dynamic config - " + (e && e.message || e)), void t()
                    }
                    e && "object" == typeof e && !Array.isArray(e) ? (t(e), o.info("Loaded dynamic config")) : (o.info("Tried to load invalid dynamic config format - " + typeof e), t())
                }, i.send()
            }
            var o = n(2),
                s = n(25);
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                e && "object" == typeof e && Object.keys(e).forEach(function(t) {
                    switch (t) {
                        case "metered":
                            var n = e[t];
                            "full" === u.cellular || (n && "disable" === u.cellular ? (i.info("client is on a metered network and flag is cellular=disable - disabling peer5"), s()) : n && o.LEECH_ON_METERED && (i.info("Server info key: [" + t + "=" + n + "] - setting leech mode"), a({
                                upload: !1
                            })));
                            break;
                        case "geo":
                            e[t] && c.setMyGeo(e[t]);
                            break;
                        default:
                            i.info("Received unknown info key from the server: " + t + " = " + n)
                    }
                })
            }
            var i = n(2),
                o = n(1),
                s = n(19),
                a = n(51),
                u = n(53).flags,
                c = n(62);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                e && "object" == typeof e && !Array.isArray(e) && Object.keys(e).forEach(function(t) {
                    "EXPERIMENTS" !== t && (o.info("Updating config: " + t + ": " + e[t]), i[t] = e[t])
                })
            }
            var i = n(1),
                o = n(2);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                return c.CONNECT_ESTIMATION_TO_ALLOCATION ? f.estimationAndAtLeastOneSegmentHeuristic.apply(this, arguments) : f.constraintHeuristic.apply(this, arguments)
            }

            function i(e) {
                return e.downloadMode !== d
            }

            function o(e) {
                return e.forceHttp
            }

            function s(e, t) {
                var n = e.getConstraint();
                if (!i(e)) return !1;
                if (o(e)) return !1;
                var s = !n;
                return !!s || r(n, t)
            }

            function a(e, t) {
                return !!e.forceHttp || !s(e, t)
            }
            var u = n(11),
                c = n(1),
                l = n(14),
                d = l.HTTP,
                f = Object.create(null);
            f.constraintHeuristic = function(e) {
                return e >= u.min()
            }, f.estimationAndAtLeastOneSegmentHeuristic = function(e, t) {
                return e > u.min() || !(e < u.min() / 2) && e >= t
            }, e.exports.heuristics = f, e.exports.shouldDownloadInHttp = a, e.exports.shouldDownloadInP2P = function() {
                return c.PARALLEL_HTTP_AND_P2P ? i.apply(this, arguments) : s.apply(this, arguments)
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    function t(e, t, n) {
                        n > 0 ? o.sumGlobal({
                            requestsWithLength: 1
                        }) : o.sumGlobal({
                            requestsWithoutLength: 1
                        })
                    }
                    var n = e.apply(this, arguments);
                    return n.on("headers", t), n
                }
                return i(t, e)
            }
            var i = n(7),
                o = n(6);
            e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(6),
                i = n(104),
                o = n(115),
                s = n(117),
                a = n(116),
                u = n(2),
                c = n(3);
            e.exports = function(e, t, n) {
                var l, d = new c;
                l = o(e, i, t, n), l.on("p2p-download-complete", function(e) {
                    d.emit("p2p-download-complete", e)
                }), l.on("estimation", function(e, t) {
                    d.emit("estimation", e, t)
                }), l.listen();
                var f = s(e, r, t);
                f.listen();
                var p = a(e, t);
                return p.listen(), d.destroy = Function.prototype, d.startPendingDownloads = l.startPendingDownloads, d.removeResource = function(e) {
                    u.info("removed p2p resource " + e.swarmId), p.notifyPeersResourceRemoved(e.swarmId)
                }, d.getLastEstimate = l.getLastEstimate, d.numOfSeeders = function(t) {
                    var n = 0;
                    return e.getPeers().forEach(function(e) {
                        (e.knowsResource(t.swarmId) || e.knowsResource(t.hashUrl)) && n++
                    }), n
                }, d
            }
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                function a(e, t, r, s) {
                    function a(t, r) {
                        return n.get(e.url) ? e.isFull ? void radio("report:p2pWaste").broadcast(e.swarmId, r.length) : (o.SEND_EMPTY_CHUNKS || e.setChunk(t, "p2p", r), void(e.isFull && (i.info("Resource " + e.url + " finished in p2p"), h.emit("p2p-download-complete", e)))) : void radio("report:p2pWaste").broadcast(e.swarmId, r.length)
                    }

                    function u() {
                        c.off("late", u), c.off("abort", u), n.get(e.swarmId) && (s && e.markChunksAsNew(c.chunkIds), l())
                    }
                    var c = t.createDataRequest(e.swarmId, r);
                    c.on("chunk", a), c.on("late", u), c.on("abort", u), c.on("finish", function(e) {
                        radio("request:finished").broadcast(e)
                    }), c.send(), s && e.markChunksAsPending(r)
                }

                function u(e, t) {
                    t.forEach(function(t) {
                        a(e, t.peer, t.chunkIds, t.markAsPending)
                    }, this)
                }

                function c(e) {
                    e.forEach(function(e) {
                        var t = e.resource,
                            n = e.peerAllocations,
                            r = e.durationEstimate;
                        r && (p.set(t, r), h.emit("estimation", t.hashUrl, r)), n && u(t, n)
                    })
                }

                function l() {
                    var i = e.getPeers().filter(function(e) {
                        return e.maxNumOfPendingChunks > 0
                    });
                    if (0 !== i.length) {
                        var o = n.getInitializedActiveResources(),
                            s = t.findChunksAllocation(i, o, r);
                        c(s)
                    }
                }

                function d() {
                    e.on("peer:available", l)
                }

                function f(e) {
                    return p.get(e) || 1 / 0
                }
                var p = new window.WeakMap,
                    h = new s;
                return h.startPendingDownloads = l, h.listen = d, h.getLastEstimate = f, h
            }
            var i = n(2),
                o = n(1),
                s = n(3);
            e.exports = r
        }, function(e, t, n) {
            (function(t) {
                "use strict";

                function r(e, n) {
                    function r() {
                        if (o.LEECH) return !0;
                        if (!o.BUFFER_LENGTH_LEECH_LOW_SEC) return !1;
                        var e = t.core.apis.MediaFetcher.mediaController.getBufferLength();
                        return e < o.BUFFER_LENGTH_LEECH_LOW_SEC
                    }

                    function s(e) {
                        var t = n.get(e);
                        return new i.DontHaveMessage(e, t.hashUrl)
                    }

                    function a(e) {
                        var t = n.get(e);
                        if (t && t.isP2PAllowed && !r() && 0 !== t.numOfBlocksDownloaded) return new i.HaveMessage(e, t.hashUrl, t.size, t.availabilityMap)
                    }

                    function u(e) {
                        var t = [];
                        n.getInitializedResources().forEach(function(e) {
                            var n = a(e.swarmId);
                            n && t.push(n)
                        });
                        var r = o.CHUNK_SIZE / 76;
                        r = Math.floor(.9 * r);
                        for (var i = 0, s = t.length; i < s; i += r) e.send(t.slice(i, i + r))
                    }

                    function c() {
                        radio("blockReceived").subscribe(function(t) {
                            var n = a(t);
                            n && e.sendToAll(n, "Have")
                        }), e.on("peer:open", function(e) {
                            u(e)
                        }), radio("p2p.send.all").subscribe(function(t, n) {
                            e.sendToAll(t, n)
                        })
                    }

                    function l(t) {
                        e.sendToAll(s(t), "DontHave")
                    }
                    return {
                        listen: c,
                        notifyPeersResourceRemoved: l
                    }
                }
                var i = n(9),
                    o = n(1);
                e.exports = r
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r(e, r, a, u) {
                    if (!s.DONT_SEND_DATA) {
                        var c = n.get(a);
                        if (c) {
                            var l = 0;
                            u.forEach(function(t) {
                                var n = c.getChunk(t);
                                return n ? (l += n.length, s.SEND_EMPTY_CHUNKS && (n = new Uint8Array([])), void e.send(new i.DataMessage(r, t, n))) : void o.warn("cannot send data, getChunk failed for swarm: " + a + ", chunkId: " + t)
                            }), t.sum(a, {
                                p2pUp: l
                            }), t.sum("*", {
                                p2pUp: l
                            }), t.sumRecentGlobal({
                                p2pUp: l
                            })
                        }
                    }
                }

                function a() {
                    e.on("peer:request", r)
                }
                return {
                    listen: a
                }
            }
            var i = n(9),
                o = n(2),
                s = n(1);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return e * c.CHUNK_SIZE
            }

            function i(e, t) {
                return Math.floor(e / t)
            }

            function o(e) {
                return {
                    id: e,
                    source: null,
                    state: h
                }
            }

            function s(e, t) {
                for (var n = {
                        id: e,
                        numOfChunks: t,
                        numOfChunksDownloaded: 0,
                        chunks: []
                    }, r = 0; r < t; r++) n.chunks.push(o(r));
                return n
            }

            function a(e) {
                function t(e) {
                    return e + 1 === O
                }

                function n(e) {
                    return e + 1 === b
                }

                function o(e) {
                    return e % N
                }

                function a(e) {
                    var n = i(e, N),
                        r = D[n];
                    if (!r) {
                        var o = t(n) ? L : N;
                        r = D[n] = s(n, o)
                    }
                    return r
                }

                function g(e, t) {
                    var n = a(e),
                        r = o(e),
                        i = n.chunks[r],
                        s = i.state;
                    i.state = f, i.source = t, s !== f && (n.numOfChunksDownloaded += 1, n.numOfChunksDownloaded === n.numOfChunks && (k.set(n.id, !0), I.emit("block-complete", n.id)))
                }

                function v(e) {
                    var t = a(e),
                        n = o(e),
                        r = t.chunks[n];
                    return r.state === f ? void d.warn("trying to set an already-downloaded chunk as pending") : void(r.state = p)
                }

                function E(e) {
                    var t = a(e),
                        n = o(e),
                        r = t.chunks[n];
                    return r.state === f ? void d.warn("trying to set an already-downloaded chunk as new") : void(r.state = h)
                }

                function _(e) {
                    var t = a(e),
                        n = o(e),
                        r = t.chunks[n];
                    return Boolean(r) && r.state === f
                }

                function m(e, t, i) {
                    var o = n(e) ? M : c.CHUNK_SIZE;
                    if (o !== i.length) return void d.error({
                        chunkBufferLength: i.length,
                        sizeOfChunk: o
                    }, ".setChunk called with incorrect chunk buffer size");
                    var s = r(e);
                    return s >= w.length ? void d.error({
                        chunkOffset: s,
                        bufferLength: w.length
                    }, ".setChunk called with out-of-range chunk offset") : s + i.length > w.length ? void d.error({
                        chunkOffset: s,
                        chunkBufferLength: i.length,
                        bufferLength: w.length
                    }, ".setChunk called with out-of-range chunk buffer size") : (w.set(i, s), void g(e, t))
                }

                function T(e) {
                    w.set(e, 0);
                    for (var t = 0; t < b; t++) g(t, "http")
                }

                function R(e) {
                    var t = r(e);
                    return t >= w.length ? (d.error({
                        chunkId: e,
                        chunkOffset: t,
                        bufferLength: w.length
                    }, ".getChunk called with out-of-range chunk offset"), null) : _(e) ? w.subarray(t, t + c.CHUNK_SIZE) : (d.error({
                        chunkId: e
                    }, ".getChunk called with non-downloaded chunk id"), null)
                }

                function S(e) {
                    var t = a(e),
                        n = o(e),
                        r = t.chunks[n];
                    return r && r.source
                }

                function y() {
                    return k.length === k.numOfOnBits
                }

                function P() {
                    for (var e = {}, t = 0; t < b; t++) {
                        var n = a(t),
                            r = o(t);
                        n.chunks[r].state === h && (e[n.id] = e[n.id] || [], e[n.id].push(t))
                    }
                    return e
                }

                function A(e) {
                    var t = b - 1;
                    return e.indexOf(t) !== -1 ? (e.length - 1) * c.CHUNK_SIZE + M : e.length * c.CHUNK_SIZE
                }
                var w, I = new u,
                    O = Math.ceil(e / c.BLOCK_SIZE),
                    b = Math.ceil(e / c.CHUNK_SIZE),
                    N = c.BLOCK_SIZE / c.CHUNK_SIZE,
                    C = e % c.BLOCK_SIZE || c.BLOCK_SIZE,
                    L = Math.ceil(C / c.CHUNK_SIZE),
                    M = C % c.CHUNK_SIZE || c.CHUNK_SIZE,
                    D = [];
                try {
                    w = new Uint8Array(e)
                } catch (e) {
                    throw new Error("BLOCKMAP_ALLOCATION_FAILED")
                }
                var k;
                try {
                    k = l(O)
                } catch (e) {
                    throw new Error("BITARRAY_ALLOCATION_FAILED")
                }
                return I.getChunk = R, I.getChunkSource = S, I.setChunk = m, I.setBuffer = T, I.isFull = y, I.hasChunk = _, I.markChunkAsNew = E, I.markChunkAsPending = v, I.getSizeOfChunks = A, I.getNeededChunksByBlockId = P, Object.defineProperties(I, {
                    size: {
                        get: function() {
                            return e
                        }
                    },
                    buffer: {
                        get: function() {
                            return w
                        }
                    },
                    numOfBlocksDownloaded: {
                        get: function() {
                            return k.numOfOnBits
                        }
                    },
                    availabilityMap: {
                        get: function() {
                            return k.buffer
                        }
                    }
                }), I
            }
            var u = n(3),
                c = n(1),
                l = n(56),
                d = n(2),
                f = 3,
                p = 2,
                h = 1;
            e.exports = a
        }, function(e, t) {
            "use strict";
            e.exports = function() {
                function e(e, t, n) {
                    r[e] || (r[e] = []), i[e] || (i[e] = []);
                    var o = r[e],
                        s = i[e],
                        a = s.indexOf(t) !== -1;
                    a || (o.push(n), s.push(t))
                }

                function t(e) {
                    var t = r[e];
                    if (t) {
                        var n, i = Object.create(null),
                            o = -(1 / 0);
                        return t.forEach(function(e) {
                            i[e] = (i[e] || 0) + 1, i[e] > o && (n = e, o = i[e])
                        }), n
                    }
                }

                function n(e) {
                    delete r[e], delete i[e]
                }
                var r = Object.create(null),
                    i = Object.create(null);
                return {
                    set: e,
                    get: t,
                    remove: n
                }
            }
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e, t) {
                    var n = Object.create(null);
                    n.value = t, n.keys = [e], a[e] = n, u[e] = e, c++
                }

                function t(e, t) {
                    var n = u[t];
                    if (!n) return void i.warn("cant alias a non existing key");
                    if (u[e]) {
                        var r = u[e],
                            o = a[r].keys;
                        o.splice(o.indexOf(e), 1)
                    }
                    u[e] = n, a[n].keys.push(e)
                }

                function n(e) {
                    var t = u[e],
                        n = a[t];
                    return n ? n.value : void 0
                }

                function r(e) {
                    var t = u[e];
                    return t ? (a[t].keys.forEach(function(e) {
                        delete u[e]
                    }), delete a[t], void c--) : void i.warn("cant remove a non existing key")
                }

                function o() {
                    return Object.keys(a)
                }
                var s = Object.create(null),
                    a = Object.create(null),
                    u = Object.create(null),
                    c = 0;
                return s.add = e, s.get = n, s.alias = t, s.remove = r, s.getAllKeys = o, Object.defineProperties(s, {
                    size: {
                        get: function() {
                            return c
                        }
                    }
                }), s
            }
            var i = n(2);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    u = e, c = Math.ceil(u / i.BLOCK_SIZE)
                }

                function t(t, n) {
                    e(n), l = o(c, t)
                }

                function n(e) {
                    return null !== l && l.isSet(e)
                }

                function r(e) {
                    var t = Math.floor(e / (i.BLOCK_SIZE / i.CHUNK_SIZE));
                    return n(t)
                }

                function s() {
                    return null !== l && l.numOfOnBits === c
                }
                var a = Object.create(null),
                    u = null,
                    c = null,
                    l = null;
                return Object.defineProperties(a, {
                    numOfBlocks: {
                        get: function() {
                            return c
                        }
                    },
                    numOfDownloadedBlocks: {
                        get: function() {
                            return l ? l.numOfOnBits : 0
                        }
                    },
                    fileSize: {
                        get: function() {
                            return u
                        }
                    }
                }), a.setFileSize = e, a.setAvailabilityMap = t, a.hasBlock = n, a.hasChunk = r, a.isFull = s, a
            }
            var i = n(1),
                o = n(56);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r(e, t, n) {
                    if (!D) return void c.error("trying to access setChunk without a blockmap");
                    if (D.hasChunk(e)) {
                        var r = D.getChunkSource(e);
                        if ("http" === r && "http" === t) return V.httpWaste += n.byteLength, void(V.httpProgress -= n.length);
                        if ("http" === r && "p2p" === t) return void(V.p2pWaste += n.byteLength);
                        if ("p2p" === r && "p2p" === t) return void(V.p2pWaste += n.byteLength);
                        "p2p" === r && "http" === t && (V.p2pWaste += n.byteLength, V.p2pDown -= n.byteLength)
                    }
                    "http" === t ? (V.httpDown += n.length, V.httpProgress -= n.length) : V.p2pDown += n.length, D.setChunk(e, t, n)
                }

                function l(t) {
                    D = o(t), M = a(e, t, !G), D.on("block-complete", function(e) {
                        C.emit("block-complete", e)
                    })
                }

                function d(n, r, i) {
                    e = n, t = r, H = i.origin || "none", U = i.constraint, x = i.withCredentials || !1, q = i.forceHttp || !1, B = i.httpRequestHeaders || [], F = !0, z = i.encryptionKey || null
                }

                function f() {
                    return C.isFull ? void c.error("called .restart() on a full resource") : void(j = !1)
                }

                function p() {
                    C.isStopped || (V.httpWaste += V.httpProgress, V.httpProgress = 0, j = !0)
                }

                function h() {
                    p(), V.p2pWaste = V.p2pDown, V.p2pDown = 0
                }

                function g() {
                    F = !1
                }

                function v() {
                    F = !0
                }

                function E() {
                    G = !1
                }

                function _() {
                    G = !0
                }

                function m() {
                    return {
                        p2pDown: V.p2pDown,
                        p2pWaste: V.p2pWaste,
                        httpDown: V.httpDown,
                        httpWaste: V.httpWaste,
                        httpProgress: V.httpProgress
                    }
                }

                function T(e) {
                    V.httpProgress += e
                }

                function R() {
                    return U ? U() : null
                }

                function S() {
                    return k.elapsed()
                }

                function y(e) {
                    return D ? (V.p2pWaste += V.p2pDown, V.p2pDown = 0, V.httpWaste += V.httpDown, V.httpDown = e.length, V.httpProgress = 0, void D.setBuffer(e)) : void c.error("trying to access setBuffer without a blockmap")
                }

                function P(e) {
                    return D ? D.getChunk(e) : (c.error("trying to access getChunk without a blockmap"), null)
                }

                function A() {
                    C.isFull && (V.httpWaste += V.httpProgress, V.httpProgress = 0)
                }

                function w() {
                    return D ? D.buffer.buffer.slice(0) : (c.error("trying to access getBufferCopy without a blockmap"), null)
                }

                function I(e) {
                    return D ? void e.forEach(function(e) {
                        D.hasChunk(e) || D.markChunkAsNew(e)
                    }) : void c.error("trying to access markChunksAsNew without a blockmap")
                }

                function O(e) {
                    return D ? void e.forEach(D.markChunkAsPending) : void c.error("trying to access markChunksAsPending without a blockmap")
                }

                function b() {
                    return D ? D.getNeededChunksByBlockId() : (c.error("trying to access getNeededChunksByBlockId without a blockmap"), {})
                }

                function N(e) {
                    return D ? D.getSizeOfChunks(e) : (c.error("trying to access getSizeOfChunks without a blockmap"), 0)
                }
                n = n || {};
                var C = new u,
                    L = i(e),
                    M = null,
                    D = null,
                    k = s(),
                    H = n.origin || "none",
                    U = n.constraint,
                    x = n.withCredentials || !1,
                    q = n.forceHttp || !1,
                    B = n.httpRequestHeaders || [],
                    F = !0,
                    G = !0,
                    j = !1,
                    z = n.encryptionKey || null,
                    V = {
                        p2pDown: 0,
                        p2pWaste: 0,
                        httpDown: 0,
                        httpWaste: 0,
                        httpProgress: 0,
                        httpExtraWaste: 0
                    };
                return Object.defineProperties(C, {
                    url: {
                        get: function() {
                            return e
                        }
                    },
                    hashUrl: {
                        get: function() {
                            return L
                        }
                    },
                    downloadMode: {
                        get: function() {
                            return t
                        }
                    },
                    size: {
                        get: function() {
                            return D ? D.size : 0
                        }
                    },
                    swarmId: {
                        get: function() {
                            return M
                        }
                    },
                    origin: {
                        get: function() {
                            return H
                        }
                    },
                    isInitialized: {
                        get: function() {
                            return null !== D
                        }
                    },
                    isFull: {
                        get: function() {
                            return !!D && D.isFull()
                        }
                    },
                    isStopped: {
                        get: function() {
                            return j || C.isFull
                        }
                    },
                    isJoinAllowed: {
                        get: function() {
                            return F
                        }
                    },
                    isP2PAllowed: {
                        get: function() {
                            return G
                        }
                    },
                    forceHttp: {
                        get: function() {
                            return q
                        }
                    },
                    withCredentials: {
                        get: function() {
                            return x
                        }
                    },
                    numOfBlocksDownloaded: {
                        get: function() {
                            return D ? D.numOfBlocksDownloaded : (c.error("trying to access numOfBlocksDownloaded without a blockmap"), 0)
                        }
                    },
                    isEncrypted: {
                        get: function() {
                            return Boolean(z)
                        }
                    },
                    encryptionKey: {
                        get: function() {
                            return z
                        }
                    },
                    availabilityMap: {
                        get: function() {
                            return D ? D.availabilityMap : (c.error("trying to access availabilityMap without a blockmap"), null)
                        }
                    },
                    httpRequestHeaders: {
                        get: function() {
                            return B
                        }
                    }
                }), C.initialize = l, C.update = d, C.restart = f, C.stop = p, C.stopBeforeRemoval = h, C.disallowJoin = g, C.allowJoin = v, C.disallowP2P = E, C.allowP2P = _, C.getStats = m, C.addHttpProgressBytes = T, C.getConstraint = R, C.getAge = S, C.finish = A, C.setChunk = r, C.setBuffer = y, C.getChunk = P, C.getBufferCopy = w, C.markChunksAsNew = I, C.markChunksAsPending = O, C.getNeededChunksByBlockId = b, C.getSizeOfChunks = N, C
            }
            var i = n(10),
                o = n(118),
                s = n(5),
                a = n(91),
                u = n(3),
                c = n(2);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    for (var e = 0; e < _.length; e++) {
                        var t = _[e];
                        if (t.isStopped) return t
                    }
                    return null
                }

                function t() {
                    return d().reduce(function(e, t) {
                        return e += t.size
                    }, 0)
                }

                function n() {
                    for (var n = t(), r = 0; n - r > m;) {
                        var i = e();
                        if (!i) return;
                        v.emit("evict", i), r += i.size
                    }
                }

                function r(e, t, r) {
                    var i = o(e, t, r);
                    return E.add(e, i), E.alias(i.hashUrl, i.url), _.push(i), i.on("block-complete", function(e) {
                        v.emit("block-complete", i, e)
                    }), 1 === E.size && (g = setInterval(n, a.EVICT_INTERVAL)), i
                }

                function u(e) {
                    var t = E.get(e);
                    t && (t.removeAllListeners(), E.remove(e), _.splice(_.indexOf(t), 1), 0 === E.size && clearInterval(g))
                }

                function c() {
                    var e = E.getAllKeys();
                    return e.map(E.get).filter(function(e) {
                        return !e.isStopped
                    })
                }

                function l() {
                    var e = E.getAllKeys();
                    return e.map(E.get)
                }

                function d() {
                    var e = E.getAllKeys();
                    return e.map(E.get).filter(function(e) {
                        return e.isInitialized
                    })
                }

                function f() {
                    var e = E.getAllKeys();
                    return e.map(E.get).filter(function(e) {
                        return e.isInitialized && !e.isStopped
                    })
                }

                function p() {
                    return E.getAllKeys().length
                }

                function h(e) {
                    m = e
                }
                var g, v = new s,
                    E = i(),
                    _ = [],
                    m = Math.max(a.MAX_REQUEST_CACHE_SIZE_VOD, a.MAX_REQUEST_CACHE_SIZE_LIVE);
                return v.get = E.get, v.alias = E.alias, v.add = r, v.remove = u, v.getInitializedResources = d, v.getActiveResources = c, v.getInitializedActiveResources = f, v.getAllResources = l, v.getNumOfResources = p, v.updateMaxSize = h, v
            }
            var i = n(120),
                o = n(122),
                s = n(3),
                a = n(1);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    return l ? void console.warn("Called peer5.init() while already initiated") : (g++, l = s(e, v, g), h.forEach(function(e) {
                        l.configure.apply(l, e)
                    }), r && l.attachPlayer(r), Object.keys(l).forEach(function(e) {
                        "destroy" !== e && Object.defineProperty(p, e, {
                            configurable: !0,
                            get: function() {
                                return l || console.warn("window.peer5." + e + " was accessed while being destroyed"), l ? "configure" === e ? function() {
                                    h.push(arguments);
                                    var t = l && l[e] || f[e];
                                    return t.apply(l, arguments)
                                } : "attachPlayer" === e ? function(t) {
                                    t && (r = t);
                                    var n = l && l[e] || f[e];
                                    return n.apply(l, arguments)
                                } : l[e] : f[e]
                            },
                            set: function(t) {
                                return l ? void(l[e] = t) : void console.warn("window.peer5." + e + " was override while being destroyed")
                            }
                        })
                    }), void p.emit("init"))
                }

                function n() {
                    l && (l.destroy(), l = null, p.emit("destroy"))
                }
                var r, l = null,
                    p = new o,
                    h = [],
                    g = 0,
                    v = !window.p5_flags && "undefined" != typeof p5_flags && p5_flags;
                return i(p, {
                    version: "0.94.90",
                    init: t,
                    destroy: n,
                    isSupported: a,
                    isEnabled: d,
                    isInitialized: function() {
                        return null != l
                    },
                    showStats: u.showStats,
                    hideStats: u.hideStats
                }), t(), u.init({
                    forceEnabled: p.getConfig("STATS_ENABLE_OVERLAY")
                }), c.init({
                    showPrompt: p.getConfig("CONSENT_PROMPT_ENABLED"),
                    showForGEOs: p.getConfig("CONSENT_PROMPT_ENABLED_GEOS"),
                    privacyPolicyLink: p.getConfig("CONSENT_PROMPT_PRIVACY_POLICY"),
                    termsOfServiceLink: p.getConfig("CONSENT_PROMPT_TOS")
                }), window.peer5 = p, p
            }
            var i = n(7),
                o = n(3),
                s = n(129),
                a = n(31),
                u = n(157),
                c = n(62),
                l = n(8),
                d = n(107),
                f = {
                    getConfig: function() {},
                    attachPlayer: function() {},
                    configure: function() {},
                    trigger: function() {},
                    prefetch: function() {},
                    getStats: function() {},
                    Request: l,
                    VideoRequest: l,
                    FragmentRequest: l,
                    PlaylistRequest: l,
                    CatchAllVideoRequest: l
                };
            e.exports = r
        }, function(e, t) {
            "use strict";
            e.exports = window.RTCIceCandidate || window.webkitRTCIceCandidate || window.mozRTCIceCandidate
        }, function(e, t) {
            "use strict";
            var n;
            try {
                var r = document.createElement("iframe");
                document.head.appendChild(r), n = r.contentWindow.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection, Object.freeze(n.prototype), Object.defineProperty(window, n.constructor.name, {
                    configurable: !1,
                    writable: !1
                })
            } catch (e) {
                n = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection
            }
            e.exports = n
        }, function(e, t) {
            "use strict";
            e.exports = window.RTCSessionDescription || window.webkitRTCSessionDescription || window.mozRTCSessionDescription
        }, function(e, t, n) {
            "use strict";

            function r(e, t, r) {
                function o() {
                    P(), T.destroy(), s.clientInstance.destroy(), v.destroy(), g.destroy(), d.destroy(), c.destroy(), R.destroy(), S.destroy()
                }
                var s = n(4),
                    a = n(1);
                s.config = a, e && i(a, e);
                var u = n(53);
                t && u.processFlags(t);
                var c = n(23),
                    l = n(54);
                n(17);
                var d = n(30),
                    f = n(2);
                n(47), n(98), n(92), n(46);
                var p = n(6);
                n(81), n(42), n(45);
                var h = n(41);
                n(87);
                var g = n(37);
                n(93), n(95), n(94), n(97), n(96), n(83);
                var v = n(88),
                    E = n(78);
                s.clientInstance = new E({
                    clientInstanceIndex: r
                }), n(84);
                var _ = n(146),
                    m = n(147),
                    T = _(m),
                    R = n(38),
                    S = n(106)(),
                    y = n(51),
                    P = n(19),
                    A = n(35);
                return {
                    destroy: o,
                    Request: A.Request,
                    VideoRequest: A.VideoRequest,
                    CatchAllVideoRequest: A.CatchAllVideoRequest,
                    FragmentRequest: A.FragmentRequest,
                    PlaylistRequest: A.PlaylistRequest,
                    setLogLevel: f.setLogLevel,
                    logger: {
                        info: f.info,
                        warn: f.warn,
                        error: f.error
                    },
                    prefetch: s.prefetch,
                    getStats: p.publicGetStats,
                    trigger: h,
                    getConfig: l,
                    attachPlayer: S,
                    configure: y
                }
            }
            var i = n(7);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, r) {
                var i = n(128),
                    o = i(e, t, r),
                    s = o.destroy;
                return o.destroy = function() {
                    s.apply(o), Object.keys(n.c).forEach(function(e) {
                        n.c[e] && n.c[e].exports && n.c[e].exports.__KEEP__ || delete n.c[e]
                    })
                }, o
            }
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {}

            function i() {
                function e() {
                    if (!g) {
                        g = !0, p.close(), p = null;
                        try {
                            f.onicecandidate = null, f.close()
                        } catch (e) {
                            a.warn("RTCPeerConnection close failed: " + (e && e.message))
                        }
                        f = null, h.emit("close"), h.removeAllListeners()
                    }
                }

                function t(t) {
                    v ? f.setLocalDescription(t).then(r).catch(e) : f.setLocalDescription(t, r, e)
                }

                function n() {
                    function n(e) {
                        !g && e && t(e)
                    }
                    v ? f.createOffer({}).then(n).catch(e) : f.createOffer(n, e, {})
                }

                function i(e) {
                    var t = e.split(" "),
                        n = t[7],
                        r = t[4];
                    "host" === n && h.emit("ip:local", r)
                }

                function s(e) {
                    var t = e && e.candidate && e.candidate.candidate;
                    t && i(t)
                }
                var f, p, h = new o,
                    g = !1,
                    v = l.isWebRTCNewAPISupported();
                try {
                    f = new c(d), f.onicecandidate = s, p = u(f)
                } catch (t) {
                    a.warn("RTCPeerConnection creation failed: " + (t && t.message)), setTimeout(e, 0)
                }
                return n(), h.close = e, h
            }
            var o = n(3),
                s = n(1),
                a = n(2),
                u = n(66),
                c = n(32),
                l = n(24),
                d = {
                    iceServers: [{
                        urls: s.PC_STUN_SERVERS
                    }]
                };
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    return e.substring(0, s.SUBNET_GROUPING_FIRST_BITS)
                }

                function t(e) {
                    var t = s.NO_P2P_SUBNETS;
                    return t.some(function(t) {
                        return a.isIpInSubnet(e, t)
                    })
                }

                function n(n) {
                    if (r.close(), t(n)) return void c.emit("group:id", u());
                    var i = a.convertIpToBinaryString(n),
                        o = e(i);
                    c.emit("group:id", o)
                }
                var r = i(),
                    c = new o;
                return r.once("ip:local", n), c
            }
            var i = n(130),
                o = n(3),
                s = n(1),
                a = n(193),
                u = n(39);
            e.exports = r
        }, function(e, t) {
            "use strict";
            e.exports = function(e) {
                if (e.getPosition) try {
                    return e.getPosition()
                } catch (e) {}
                if (e.vjs_getProperty) try {
                    return e.vjs_getProperty("currentTime")
                } catch (e) {}
                return 0
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e, t) {
                    p.emit(e, v(e, t))
                }

                function n(e) {
                    var t = e && e.tagName && e.tagName.toLowerCase();
                    t && /^(video|audio|object|embed)$/.test(t) && (g = t, h = e)
                }

                function r() {
                    if ("function" == typeof f.getBufferLength) return f.getBufferLength();
                    switch (g) {
                        case "video":
                        case "audio":
                            return s(h);
                        case "object":
                        case "embed":
                            return a(h);
                        default:
                            return 0
                    }
                }

                function i(e) {
                    f = c({}, f, e), f.element && n(f.element)
                }

                function d() {
                    p.emit("remove"), p.removeAllListeners()
                }
                var f, p = new o;
                p.instanceId = l++;
                var h, g, v = u(p.instanceId);
                return i(e), p.onEvent = t, p.getBufferLength = r, p.useElement = n, p.mergeOptions = i, p.destroy = d, p
            }

            function i(e, t) {
                var n = d[e];
                return n ? t && n.mergeOptions(t) : n = d[e] = r(t), n
            }
            var o = n(3),
                s = n(33),
                a = n(59),
                u = n(134),
                c = n(7),
                l = 1,
                d = {};
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = null,
                    n = null,
                    r = null,
                    o = null,
                    s = null,
                    a = null,
                    u = 0,
                    c = 0;
                return function(l, d) {
                    var f = {
                        action: l,
                        id: e
                    };
                    switch (a = a || i(), l) {
                        case "rebuffer.start":
                            s = s || i(), u++, t = i(), f.timeSinceLoaded = s.elapsed(), f.occurrence = u;
                            break;
                        case "rebuffer.end":
                            s = s || i(), t && (f.duration = t.elapsed()), f.timeSinceLoaded = s.elapsed(), f.occurrence = u, t = null;
                            break;
                        case "seek.start":
                            s = s || i(), c++, n = i(), f.timeSinceLoaded = s.elapsed(), f.occurrence = c;
                            break;
                        case "seek.end":
                            s = s || i(), n && (f.duration = n.elapsed()), f.timeSinceLoaded = s.elapsed(), f.occurrence = c, n = null;
                            break;
                        case "load.start":
                            var p = d && d.delayed || 0;
                            r = r || i(), o = p, f.timeSinceReady = a.elapsed() - p, s && (f.timeSinceLoaded = s.elapsed());
                            break;
                        case "load.end":
                            if (!(s || d && d.ignoreDuration === !0)) {
                                var h = r && r.elapsed() + (o || 0);
                                o = null, h && (f.duration = h)
                            }
                            s && (f.timeSinceLoaded = s.elapsed()), s = s || i();
                            break;
                        case "fps.drop":
                        case "fps.drop.raw":
                        case "bitsDecoded":
                            d && d.count && (f.value = d.count);
                            break;
                        case "ready":
                        case "pause.start":
                        case "pause.end":
                            break;
                        case "error":
                            d instanceof Error ? f = d : (f.source = d.source, f.code = d.code, f.message = d.message);
                            break;
                        case "ad.start":
                        case "ad.end":
                            f = null;
                            break;
                        default:
                            f = null
                    }
                    return f
                }
            }
            var i = n(5);
            e.exports = r
        }, function(e, t) {
            "use strict";

            function n() {
                function e(e, t) {
                    var n = window.peer5 && window.peer5.logger && window.peer5.logger[e];
                    n && n.apply(window.peer5.logger, t)
                }

                function t() {
                    e("info", arguments)
                }

                function n() {
                    e("warn", arguments)
                }

                function r() {
                    e("error", arguments)
                }
                var i = Object.create(null);
                return i.info = t, i.warn = n, i.error = r, i
            }
            e.exports = n
        }, function(e, t) {
            "use strict";

            function n(e) {
                if ("number" == typeof e.webkitDroppedFrameCount) return {
                    total: e.webkitDecodedFrameCount,
                    dropped: e.webkitDroppedFrameCount
                };
                if ("function" == typeof e.getVideoPlaybackQuality) {
                    var t = e.getVideoPlaybackQuality();
                    if ("number" == typeof t.droppedVideoFrames) return {
                        total: t.totalVideoFrames,
                        dropped: t.droppedVideoFrames
                    }
                }
                return "number" == typeof e.mozDecodedFrames && "number" == typeof e.mozPresentedFrames ? {
                    total: e.mozDecodedFrames,
                    dropped: e.mozDecodedFrames - e.mozPresentedFrames
                } : {
                    total: 0,
                    dropped: 0
                }
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r() {
                return !!o() && (!i.isFocused() && !i.isVisible() && !i.isAudioPlaying())
            }
            var i = n(70),
                o = n(179);
            e.exports = r
        }, function(e, t) {
            "use strict";

            function n(e) {
                var t = 8 * e.webkitVideoDecodedByteCount || 0,
                    n = 8 * e.webkitAudioDecodedByteCount || 0;
                return t || n ? {
                    video: t,
                    audio: n,
                    total: t + n
                } : {
                    video: 0,
                    audio: 0,
                    total: 0
                }
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r(e) {
                    return "progressive" === e && (h || g || v)
                }

                function o() {
                    var n = e.currentSrc || e.src;
                    if (n) {
                        var o = i(n, {
                                ignoreQuery: l.ignoreQuery
                            }),
                            s = f && "hls" === o,
                            a = p && "dash" === o,
                            u = l.allowProgressiveVideos && r(o),
                            d = "mse" === o,
                            h = /^(blob|mediasource):(https?(%3A|:)\/\/)[^\/]*youtube\.com\//i.test(n);
                        s || a || d && !h || u ? c && (c = !1, t({
                            adPlaying: !1
                        })) : c || (c = !0, t({
                            adPlaying: !0
                        }))
                    }
                }

                function s() {
                    d.forEach(function(t) {
                        e.addEventListener(t, o)
                    })
                }

                function a() {
                    d.forEach(function(t) {
                        e.removeEventListener(t, o)
                    })
                }

                function u() {
                    a()
                }
                var c, l = n || {},
                    d = ["abort", "canplay", "canplaythrough", "durationChange", "emptied", "encrypted", "ended", "error", "interruptbegin", "interruptend", "loadeddata", "loadedmetadata", "seeked", "seeking", "volumechange", "waiting", "loadstart", "pause", "play", "playing", "suspend"],
                    f = e.canPlayType && (e.canPlayType("application/x-mpegURL") || e.canPlayType("vnd.apple.mpegURL") || e.canPlayType("audio/mpegurl"));
                f = Boolean(f);
                var p = Boolean(e.canPlayType && e.canPlayType("application/dash+xml")),
                    h = Boolean(e.canPlayType && e.canPlayType("video/mp4")),
                    g = Boolean(e.canPlayType && e.canPlayType("video/webm")),
                    v = Boolean(e.canPlayType && e.canPlayType("video/ogg"));
                return s(), o(), {
                    destroy: u
                }
            }
            var i = n(77);
            e.exports = r
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                function n() {
                    var n, i = e.error;
                    Object.keys(r).some(function(e) {
                        return !(!i || r[e] !== i.code) && (n = e, !0)
                    }), t("error", {
                        source: "videoTag",
                        code: n || "UNKNOWN_ERROR_" + (i && i.code || "UNDEFINED"),
                        message: i && i.message || ""
                    })
                }

                function i() {
                    e.removeEventListener("error", n)
                }
                return e.addEventListener("error", n), {
                    destroy: i
                }
            }
            var r = {
                MEDIA_ERR_ABORTED: 1,
                MEDIA_ERR_NETWORK: 2,
                MEDIA_ERR_DECODE: 3,
                MEDIA_ERR_SRC_NOT_SUPPORTED: 4
            };
            e.exports = n
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                function n() {
                    Object.keys(r).forEach(function(t) {
                        e.removeEventListener(t, r[t])
                    })
                }
                var r = {
                    playing: function() {
                        t("playing")
                    },
                    canplaythrough: function() {
                        !e.paused && e.currentTime && t("playing")
                    },
                    progress: function() {
                        !e.paused && e.currentTime && t("playing")
                    },
                    pause: function() {
                        t("pause")
                    },
                    play: function() {
                        t("play")
                    }
                };
                return Object.keys(r).forEach(function(t) {
                    e.addEventListener(t, r[t])
                }), !e.paused && e.currentTime ? r.playing() : !e.paused && e.autoplay && r.play(), {
                    destroy: n
                }
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r() {
                    clearInterval(s), clearInterval(a)
                }
                var s, a, u = {},
                    c = {};
                return s = setInterval(function() {
                    var r = i(e),
                        o = r.total - u.total,
                        s = r.dropped - u.dropped;
                    s > 0 && t("fps.drop.raw", {
                        count: s
                    }), o && s > 0 && s / o > n.droppedFramesThreshold && t("fps.drop", {
                        count: s
                    }), u = r
                }, n.droppedFramesSampleRate), a = setInterval(function() {
                    var n = o(e),
                        r = n.total - c.total;
                    r > 0 && t("bitsDecoded", {
                        count: r
                    }), c = n
                }, n.bitsDecodedSampleRate), {
                    destroy: r
                }
            }
            var i = n(136),
                o = n(138);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r() {
                    var t = i(e),
                        n = !H && x !== t;
                    return H = !1, x = t, n
                }

                function a() {
                    return !(!e.paused || !B && !j) && r()
                }

                function u() {
                    var e = o();
                    e && !U ? (U = !0, t({
                        background: !0
                    })) : !e && U && (U = !1, t({
                        background: !1
                    }))
                }

                function c() {
                    return b && A === b && !w && !O
                }

                function l() {
                    return G || (G = A), A - G >= M
                }

                function d() {
                    return O
                }

                function f() {
                    return q
                }

                function p() {
                    return !c() && (F = null, !!B && (d() || f() || l()))
                }

                function h() {
                    return !!c() && (G = null, !B && (F || (F = s()), F.elapsed() >= L))
                }

                function g() {
                    h() ? (B = !0, F = null, t({
                        rebuffering: !0
                    })) : p() && (B = !1, G = null, t({
                        rebuffering: !1
                    }))
                }

                function v() {
                    return I && !w
                }

                function E() {
                    return V || (V = A), A - V > k
                }

                function _() {
                    return q
                }

                function m() {
                    return !v() && (z = null, !!j && (_() || E()))
                }

                function T() {
                    if (v()) return V = null, !j && (z || (z = s()), z.elapsed() > D)
                }

                function R() {
                    T() ? (j = !0, z = null, t({
                        seeking: !0
                    })) : m() && (j = !1, V = null, t({
                        seeking: !1
                    }))
                }

                function S() {
                    clearInterval(P), P = setInterval(function() {
                        e.paused || (H = !0), (!e.paused || B || j) && (A = 1e3 * e.currentTime, w = e.paused, I = e.seeking, O = I || j, q = a(), u(), g(), R(), b = A)
                    }, C)
                }

                function y() {
                    clearInterval(P)
                }
                var P, A, w, I, O, b, N = n || {},
                    C = N.sampleRate || 50,
                    L = N.bufferEnterThreshold || 250,
                    M = N.bufferExitThreshold || 250,
                    D = N.seekEnterThreshold || 250,
                    k = N.seekExitThreshold || 100,
                    H = !0,
                    U = !1,
                    x = null,
                    q = !1,
                    B = !1,
                    F = null,
                    G = null,
                    j = !1,
                    z = null,
                    V = null;
                return S(), {
                    destroy: y
                }
            }
            var i = n(33),
                o = n(137),
                s = n(5);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(t) {
                    if (!c.loaded) {
                        var n = t || {},
                            r = n.ignoreDuration || !1;
                        if (c.loading || !n.cancelIfPossible) {
                            if (c.loading || (r = !0), !l && n.cancelIfPossible) return c.loading = !1, u = null, void clearTimeout(a);
                            l || (l = !0, clearTimeout(a), e("load.start", {
                                delayed: u && u.elapsed() || 0
                            })), c.loaded = !0, e("load.end", {
                                ignoreDuration: r
                            })
                        }
                    }
                }

                function r() {
                    n({
                        ignoreDuration: !0,
                        cancelIfPossible: !0
                    }), c.rebuffering && (c.rebuffering = !1, e("rebuffer.end")), c.seeking && (c.seeking = !1, e("seek.end")), !c.loading && !c.loaded || c.paused || (c.paused = !0, e("pause.start"))
                }

                function o() {
                    clearTimeout(a), s({
                        adPlaying: !1,
                        paused: !0
                    })
                }

                function s(e) {
                    Object.keys(e).forEach(function(t) {
                        f[t](e[t])
                    })
                }
                var a, u, c = {
                        paused: !1,
                        loading: !1,
                        loaded: !1,
                        rebuffering: !1,
                        seeking: !1,
                        adPlaying: !1,
                        background: !1
                    },
                    l = !1,
                    d = !1,
                    f = {
                        paused: function(t) {
                            c.paused !== Boolean(t) && (c.adPlaying || (t ? r({
                                ignoreDuration: !0
                            }) : (c.paused = !1, e("pause.end"))))
                        },
                        play: function(n) {
                            c.adPlaying || n && (c.loaded || c.loading !== Boolean(n) && (u = i(), c.loading = !0, a = setTimeout(function() {
                                l = !0, e("load.start", {
                                    delayed: u && u.elapsed() || 0
                                })
                            }, t.loadStartMaxDelay)))
                        },
                        playing: function() {
                            c.adPlaying || (n(), f.paused(!1))
                        },
                        adPlaying: function(t) {
                            c.adPlaying !== Boolean(t) && (t ? (c.loading && !c.loaded, r(), c.adPlaying = !0, e("ad.start")) : (c.adPlaying = !1, e("ad.end")))
                        },
                        background: function(t) {
                            c.background !== Boolean(t) && (t ? (c.rebuffering && (d = !0, c.rebuffering = !1, e("rebuffer.end")), c.background = !0) : (!c.rebuffering && d && (c.rebuffering = !0, e("rebuffer.start")), c.background = !1))
                        },
                        rebuffering: function(t) {
                            c.rebuffering !== Boolean(t) && (c.adPlaying || (t ? c.background ? d = !0 : (c.rebuffering = !0, e("rebuffer.start")) : c.background ? d = !1 : (c.rebuffering = !1, e("rebuffer.end"))))
                        },
                        seeking: function(t) {
                            c.seeking !== Boolean(t) && (c.adPlaying || (t ? (n({
                                ignoreDuration: !0
                            }), c.seeking = !0, e("seek.start")) : (c.seeking = !1, e("seek.end"))))
                        }
                    },
                    p = {};
                return Object.keys(c).forEach(function(e) {
                    Object.defineProperty(p, e, {
                        get: function() {
                            return c[e]
                        }
                    })
                }), p.stateChanged = s, p.destroy = o, p
            }
            var i = n(5);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r(e) {
                    h = e, S && S.destroy(), S = c(t, g), E && E.destroy(), E = u(h, function(e) {
                        S.stateChanged(e)
                    }, g), v && v.destroy(), v = o(h, function(e) {
                        S.stateChanged(e)
                    }, g), R && R.destroy(), R = l(h, function(e) {
                        switch (e) {
                            case "play":
                                S.stateChanged({
                                    play: !0
                                });
                                break;
                            case "playing":
                                S.stateChanged({
                                    playing: !0
                                });
                                break;
                            case "pause":
                                S.stateChanged({
                                    paused: !0
                                })
                        }
                    }), _ && _.destroy(), _ = s(h, function(e, n) {
                        S.adPlaying || t(e, n)
                    }, g), m = a(h, function(e, n) {
                        S.adPlaying || t(e, n)
                    }), y && (y = !1, S.stateChanged({
                        play: !0
                    }))
                }

                function d() {
                    S ? (y = !1, S.stateChanged({
                        play: !0
                    })) : y = !0
                }

                function f() {
                    S && S.destroy(), E && E.destroy(), v && v.destroy(), _ && _.destroy(), m && m.destroy(), R && R.destroy(), clearTimeout(T)
                }

                function p(e, n) {
                    n && t("ready");
                    var o = i("video", e) || i("audio", e);
                    o && r(o)
                }
                var h, g = n || {};
                g.droppedFramesSampleRate = g.droppedFramesSampleRate || 5e3, g.droppedFramesThreshold = g.droppedFramesThreshold || .2, g.bitsDecodedSampleRate = g.bitsDecodedSampleRate || 5e3, g.loadStartMaxDelay = g.loadStartMaxDelay || 4e3;
                var v, E, _, m, T, R, S, y = !1;
                return T = setTimeout(function() {
                    h || p(e, !0)
                }, 0), {
                    forceLoadStart: d,
                    useElement: p,
                    destroy: f
                }
            }
            var i = n(71),
                o = n(143),
                s = n(142),
                a = n(140),
                u = n(139),
                c = n(144),
                l = n(141);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    s = null, r = e()
                }

                function n() {
                    clearTimeout(a), s && s.stop(), r && r.destroy()
                }
                var r, s, a;
                return a = setTimeout(function() {
                    i("ENABLE_VIDEOTAG_ANALYTICS") && (s = o({
                        onConditionsMet: t,
                        globalsCondition: ["peer5"]
                    }))
                }, 0), {
                    destroy: n
                }
            }
            var i = n(54),
                o = n(182);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    if (c && (c.destroy(), c = null), a && (a.destroy(), a = null), r) {
                        var e = r;
                        r = null, e.destroy()
                    }
                }

                function n(e) {
                    u !== e && (u = e, r ? (a.useElement(e), r.useElement(e), r.emit("newMediaElement", {
                        tagName: e.tagName.toLowerCase()
                    })) : (r = i("videoTag", {
                        element: e
                    }), window.peer5.attachPlayer(r), r.emit("media.info", {
                        vendor: l.vendor || "videoTag",
                        tracking: "videoTag",
                        provider: l.provider,
                        mediaElement: e.tagName.toLowerCase(),
                        mediaSrc: e.src || e.currentSrc
                    }), r.on("remove", function() {
                        r && t()
                    }), a = o(e, r.onEvent, {
                        allowProgressiveVideos: l.allowProgressiveVideos,
                        ignoreQuery: l.ignoreQuery
                    })))
                }
                var r, a, u, c, l = e || {};
                return c = s({
                    interval: window.peer5.getConfig("VIDEOTAG_SEARCH_INTERVAL"),
                    allowProgressiveVideos: l.allowProgressiveVideos,
                    ignoreQuery: l.ignoreQuery
                }), c.on("elementDiscovered", n), {
                    destroy: t
                }
            }
            var i = n(133),
                o = n(145),
                s = n(60);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e, t) {
                    function n(t) {
                        var n = e[t],
                            s = i(n.url);
                        return !(!T[s] || s === r) || (T[s] = o({
                            hashUrl: s
                        }, n), a.mergeToStart ? u.push(s) : u.push(s), r = s, !1)
                    }
                    var r, s, a = t || {},
                        u = [];
                    if (a.mergeToStart)
                        for (s = 0; s < e.length && !n(s); s++);
                    else
                        for (s = e.length - 1; s >= 0 && !n(s); s--);
                    return a.mergeToStart ? R.unshift.apply(R, u) : R.push.apply(R, u.reverse()), u
                }

                function n(e, t) {
                    if (!e || !t) return [];
                    var n = R.indexOf(e);
                    return n === -1 ? [] : R.slice(n + 1, n + 1 + t)
                }

                function r() {
                    T = {}, R = []
                }

                function c() {
                    return S
                }

                function l(e) {
                    var t = T[e];
                    return t ? o({
                        playlist: A
                    }, t) : null
                }

                function d() {
                    return l(R[R.length - 1])
                }

                function f(n) {
                    S = n.mode, m = n.key;
                    var o = n.segments;
                    if (0 === o.length) return void s.warn("No segments found in playlist");
                    var a = o[0],
                        u = o[o.length - 1],
                        c = !!T[i(a.url)],
                        l = !!T[i(u.url)];
                    R.length ? c && l || (l ? t(o, {
                        mergeToStart: !0
                    }) : c ? t(o) : (s.warn({
                        playlist: e
                    }, "playlist-abstraction: non-overlapping consecutive playlists"), r(), t(o))) : t(o)
                }

                function p(e, t) {
                    return n(e, t).map(function(e) {
                        return l(e).url
                    })
                }

                function h(e, t) {
                    return n(e, t).map(function(e) {
                        return l(e)
                    })
                }

                function g(e, t) {
                    var n = R.indexOf(e),
                        r = R.indexOf(t);
                    return n === -1 || r === -1 ? 0 : n + 1 >= r ? 0 : R.slice(n + 1, r).reduce(function(e, t) {
                        return e + T[t].duration
                    }, 0)
                }

                function v() {
                    return y ? y : (y = a.normalizeUrl(e), y = u.removePlaylistCacheBusters(y))
                }

                function E(e, t) {
                    var n = R.indexOf(t);
                    if (n === -1) return null;
                    for (var r = T[t], i = n - 1, o = 0; i >= 0 && o < e;) {
                        var s = R[i];
                        r = T[s], o += r.duration, i--
                    }
                    return r
                }

                function _() {
                    P = !0
                }
                var m, T = {},
                    R = [],
                    S = "",
                    y = "",
                    P = !1,
                    A = {
                        url: e
                    };
                return {
                    url: e,
                    get needsCredentials() {
                        return P
                    },
                    get key() {
                        return m
                    },
                    get isEncrypted() {
                        return Boolean(m)
                    },
                    digestPlaylist: f,
                    requireCredentials: _,
                    getSegment: l,
                    getNewestSegment: d,
                    getNextSegmentsUrls: p,
                    getNextSegments: h,
                    getDurationFromRange: g,
                    getMode: c,
                    getStrippedPlaylistUrl: v,
                    getSegmentMsBehindSegmentHashUrl: E
                }
            }
            var i = n(10),
                o = n(7),
                s = n(2),
                a = n(15),
                u = n(29);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e, t) {
                    if (!e) return null;
                    var n = Object.keys(I).filter(function(t) {
                        var n = I[t];
                        return !!n.getSegment(e)
                    });
                    if (!n.length) return null;
                    if (!t || 1 === n.length) return I[n[0]] || null;
                    var r = n.filter(function(n) {
                        var r = I[n].getSegment(e);
                        return r && r.url === t
                    });
                    return r.length ? (r.length > 1 && i.warn({
                        segmentUrl: t,
                        playlists: r
                    }, "got multiple matches on segment hash"), I[r[0]]) : (O || (O = !0, i.error({
                        segmentUrl: t,
                        segments: n.map(function(t) {
                            return I[t].getSegment(e).url
                        }),
                        playlists: n
                    }, "multiple hash url matches but no strict url match")), I[n[0]])
                }

                function t(e) {
                    var t = c.normalizeUrl(e);
                    t = l.removePlaylistCacheBusters(t);
                    var n;
                    return Object.keys(I).some(function(e) {
                        var r = I[e];
                        return r.getStrippedPlaylistUrl() === t && (n = r, !0)
                    }), n
                }

                function n(e, n, r, i) {
                    i = i || function() {}, u.parsePlaylist(e, n, function(e) {
                        if (!e) return void i(null);
                        var n = Object.keys(e);
                        n.length > 1 && (b = !0, o.avgGlobal({
                            renditionCount: n.length
                        })), n.forEach(function(n) {
                            var i = e[n];
                            if (i && ("levels" === i.type && (b = !0, o.setMediaInfo({
                                    trackedLevelsManifest: !0
                                }), o.avgGlobal({
                                    renditionCount: i.levels.length || 1
                                })), "segments" === i.type)) {
                                var s = I[n];
                                !s && /^(https?:)?\/\//.test(n) && Object.keys(I).length && (s = t(n)), s || (s = I[n] = a(n)), r && s.requireCredentials(), s.digestPlaylist(i), o.setMediaInfo({
                                    type: i.mode,
                                    protocol: i.protocol
                                });
                                var u = i.segments.slice(-20).reduce(function(e, t) {
                                    return e + t.duration
                                }, 0) / Math.min(20, i.segments.length);
                                o.avgGlobal({
                                    playlistLength: i.segments.length,
                                    segmentDuration: u || 0
                                }), b || 1 !== Object.keys(I).length || o.avgGlobal({
                                    renditionCount: 1
                                })
                            }
                        }), i(e)
                    })
                }

                function r(e) {
                    return Object.keys(I).some(function(t) {
                        return !!I[t].getSegment(e)
                    })
                }

                function d(e) {
                    P = e, y = s(e)
                }

                function f() {
                    var t = e(y, P);
                    return t && t.getSegment(y) || null
                }

                function p(e) {
                    w = e, A = s(e)
                }

                function h() {
                    var t = e(y, P);
                    return t && t.getNewestSegment() || null
                }

                function g(t, n) {
                    var r = n ? s(n) : y,
                        i = n || P,
                        o = e(r, i);
                    return o ? o.getNextSegmentsUrls(r, t) : []
                }

                function v(t, n) {
                    var r = n ? s(n) : y,
                        i = n || P,
                        o = e(r, i);
                    return o ? o.getNextSegments(r, t) : []
                }

                function E() {
                    if (!y) return null;
                    var t = e(y, P);
                    return t || null
                }

                function _(t) {
                    if (!A) return 0;
                    var n = s(t),
                        r = e(n, t);
                    return r ? r.getDurationFromRange(A, n) : 0
                }

                function m(t) {
                    var n = s(t),
                        r = e(n, t);
                    return r ? r.getSegment(n) : null
                }

                function T() {
                    var e = Object.keys(I);
                    if (0 === e.length) return null;
                    var t = e.map(function(e) {
                        return I[e].getMode()
                    });
                    return t.every(function(e) {
                        return e === t[0]
                    }) ? t[0] : null
                }

                function R() {
                    var t = y || A,
                        n = P || w,
                        r = e(t, n);
                    return r && r.getMode() || T()
                }

                function S(t, n) {
                    if (!Number.isFinite(t)) return null;
                    var r = s(n),
                        i = e(r, n);
                    return i ? i.getSegmentMsBehindSegmentHashUrl(t, r).url : null
                }
                var y, P, A, w, I = {},
                    O = !1,
                    b = !1;
                return {
                    getPlaylistOfSegment: e,
                    digestPlaylist: n,
                    setLastRequestedSegment: d,
                    getLastRequestedSegment: f,
                    setLastLoadedSegment: p,
                    isKnownSegment: r,
                    getNewestSegment: h,
                    getNextSegmentsUrls: g,
                    getNextSegments: v,
                    getCurrentPlaylist: E,
                    getDurationFromLastLoadedToSegment: _,
                    getSegmentFromUrl: m,
                    getMode: R,
                    getSegmentUrlMsBehindSegmentUrl: S
                }
            }
            var i = n(2),
                o = n(6),
                s = n(10),
                a = n(148),
                u = n(34),
                c = n(15),
                l = n(29);
            e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(1);
            t.getStuckRequestCount = function(e) {
                for (var t = 0, n = e.length - 1; n >= 0; n--) {
                    var i = e[n];
                    if (i.duration < r.EXTERNAL_DYNAMIC_FRAGMENT_TIMEOUT - 1e3) {
                        if ("session.end" === i.endEvent) continue;
                        break
                    }
                    t++
                }
                return t
            }
        }, function(e, t) {
            "use strict";
            e.exports = function(e) {
                return {
                    currentTarget: e,
                    target: e
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                i = n(5);
            e.exports = function() {
                function e(e) {
                    n = e.loadedHTTP, o = e.loadedP2P
                }

                function t(e) {
                    function t() {
                        var e = g.elapsed(),
                            i = p - e,
                            s = d() - r.MIMIC_REDUCE_PARSE_TIME;
                        if (i = Math.min(i, s), i < r.PROGRESS_MIN_REPORT_INTERVAL) return void(i <= 0 ? l() : setTimeout(l, i));
                        var h = n + o,
                            v = (u + e) / f,
                            E = Math.round(a * v);
                        E = Math.max(E, h);
                        var _ = E - h;
                        setTimeout(t, r.PROGRESS_MIN_REPORT_INTERVAL), c({
                            loadedHTTP: n,
                            loadedP2P: o + _
                        })
                    }
                    var s = e.targetSpeed,
                        a = e.responseFullSize,
                        u = e.timeSinceRequestStarted,
                        c = e.onProgress,
                        l = e.onLoad,
                        d = e.getBufferLength;
                    (!s || s < 0 || s > r.PROGRESS_MAX_REPORTED_SPEED) && (s = r.PROGRESS_MAX_REPORTED_SPEED), s < r.PROGRESS_MIN_REPORTED_SPEED && (s = r.PROGRESS_MIN_REPORTED_SPEED);
                    var f = Math.floor(a / s * 1e3),
                        p = f - u,
                        h = d() - r.MIMIC_REDUCE_PARSE_TIME;
                    if (h <= 0 && (h = Math.floor(a / r.PROGRESS_MAX_REPORTED_SPEED * 1e3)), p > h && (p = h), p > r.PROGRESS_MAX_FAKING_DURATION && (p = r.PROGRESS_MAX_FAKING_DURATION), p < 0) return void setTimeout(l, 0);
                    if (p < r.PROGRESS_MIN_REPORT_INTERVAL) return void setTimeout(l, p);
                    var g = i();
                    setTimeout(t, r.PROGRESS_MIN_REPORT_INTERVAL)
                }
                var n = 0,
                    o = 0;
                return {
                    trackProgress: e,
                    mimicCompletion: t
                }
            }
        }, function(e, t, n) {
            (function(t) {
                "use strict";
                var r = n(10);
                e.exports = function() {
                    function e(e) {
                        radio("requestError" + e._url).subscribe([e.requestErrorEvent, e]), radio("HTTPHeadersReceived" + e._url).subscribe([e.HTTPHeadersReceivedEvent, e]), radio("resourceInitialized" + e._url).subscribe([e.resourceInitializedEvent, e]), radio("resourceReady" + e._url).subscribe([e.resourceReadyEvent, e]), radio("httpProgress" + e._url).subscribe([e.httpProgressEvent, e])
                    }

                    function n(e) {
                        radio("requestError" + e._url).unsubscribe([e.requestErrorEvent, e]), radio("HTTPHeadersReceived" + e._url).unsubscribe([e.HTTPHeadersReceivedEvent, e]), radio("resourceInitialized" + e._url).unsubscribe([e.resourceInitializedEvent, e]), radio("resourceReady" + e._url).unsubscribe([e.resourceReadyEvent, e]), radio("httpProgress" + e._url).unsubscribe([e.httpProgressEvent, e])
                    }

                    function i(n) {
                        var i = r(n._url),
                            o = s[i];
                        o || (o = s[i] = {
                            activeRequest: null,
                            pendingRequests: []
                        }), o.activeRequest ? o.pendingRequests.push(n) : (o.activeRequest = n, e(n), t.clientInstance.addResource(n._url, n.downloadMode, n._meta))
                    }

                    function o(e) {
                        var o = r(e._url),
                            a = s[o];
                        if (a)
                            if (t.clientInstance.addBasicRequestReport(e.report), a.activeRequest === e) {
                                a.activeRequest = null, n(e);
                                var u = a.pendingRequests.shift();
                                u ? i(u) : delete s[o]
                            } else a.pendingRequests = a.pendingRequests.filter(function(t) {
                                return t !== e
                            })
                    }
                    var s = Object.create(null);
                    return radio("resource:complete").subscribe(function(e, t, n) {
                        var r = s[e.hashUrl];
                        if (r) {
                            var i = r.activeRequest;
                            i && i._onBufferAvailable(e, t, n)
                        }
                    }), radio("resource:switch-to-http").subscribe(function(e) {
                        var t = s[e.hashUrl];
                        if (t) {
                            var n = t.activeRequest;
                            n && n._onSwitchToHttp()
                        }
                    }), {
                        addRequest: i,
                        removeRequest: o
                    }
                }
            }).call(t, n(4))
        }, function(e, t, n) {
            "use strict";
            var r = n(197),
                i = r(['{"type":"offer","sdp":"v=0', '{"type":"answer","sdp":"v=0', "a=msid-semantic: WMS", "a=msid-semantic:WMS ", "m=application 9 DTLS/SCTP 5000", " DTLS/SCTP ", "a=ice-ufrag:", "a=ice-pwd:", "a=fingerprint:sha-256 ", '{"candidate":"candidate:', '","sdpMid":"data","sdpMLineIndex":', '","sdpMid":"sdparta_0","sdpMLineIndex":', " network-cost ", "a=setup:actpass", "a=setup:active", "a=ssrc:", " cname:", " typ srflx raddr ", " typ host generation ", " typ host", "\\r\\n", "a=group:BUNDLE data", "a=sctpmap:5000 webrtc-datachannel ", " rport ", " generation ", " ufrag ", "a=mid:data", " udp ", " UDP ", " IN IP4 ", "127.0.0.1", "0.0.0.0", "o=mozilla...THIS_IS_SDPARTA-", "a=ice-options:trickle", "c=IN IP4 ", "a=sendrecv", "a=mid:sdparta_0", " typ srflx", "o=- "]);
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    var e = {
                        token: s(),
                        ver: l.getClientVersion(),
                        id: d(),
                        page: l.getPageUrl(),
                        conf: l.getConfigVersion(),
                        sdkVersion: l.getMobileSdkVersion(),
                        fallback: i.EXTERNAL_XHR_FALLBACK,
                        abconfig: g.A_B_PUBLISHED_JSON,
                        connectionType: f.getConnectionType()
                    };
                    i.EXTERNAL_CONSENT_PROMPT_ENABLED_GEOS && (e.geo = !0);
                    var t = a(e);
                    return B + "?" + t
                }

                function t() {
                    x = !1, D = !1, M = 0, P(), m()
                }

                function n() {
                    u.warn("websocket connection closed"), y()
                }

                function r() {
                    D && window.navigator.onLine !== !1 && (console.log("Server connection was rejected, please check WS_URL"), D = !1)
                }

                function E(e) {
                    u.warn("websocket had socket err", e), y(), R(), S(), r()
                }

                function _(e) {
                    if ("string" != typeof e.data) return void u.error("non string messages aren't supported");
                    var t;
                    try {
                        t = JSON.parse(e.data)
                    } catch (e) {
                        return void u.error("couldnt parse message from websockets", e)
                    }
                    P(), F.emit("message", t)
                }

                function m() {
                    for (; q.length;) {
                        var e = q.shift();
                        (e.shouldRetry === !0 || "function" == typeof e.shouldRetry && e.shouldRetry()) && I(e.msg, e.shouldRetry)
                    }
                }

                function T(e, t) {
                    q.push({
                        msg: e,
                        shouldRetry: t
                    })
                }

                function R() {
                    M = 0 === M ? 5e3 + Math.random() * i.SOCKET_RECONNECTION_INTERVAL : 2 * M
                }

                function S() {
                    x || (x = window.setTimeout(A, M))
                }

                function y() {
                    if (window.clearTimeout(x), window.clearInterval(C), window.clearTimeout(H), x = null, U) {
                        U.onerror = null, U.onclose = null, U.onmessage = null, U.onopen = null;
                        try {
                            U.close()
                        } catch (e) {}
                        U = null
                    }
                }

                function P() {
                    window.clearTimeout(H), H = window.setTimeout(function() {
                        u.info("closing websocket due to idle timeout"), y()
                    }, i.WS_IDLE_TIMEOUT)
                }

                function A() {
                    if (!i.WS_ENABLED) return void u.warn("websocket is disabled");
                    U && U.OPEN && u.error("websockets trying to reconnect while there is an open socket"), u.info("trying to connect to a new websocket");
                    try {
                        U = new c(e())
                    } catch (e) {
                        return void E(e)
                    }
                    U.binaryType = "arraybuffer", U.onopen = t, U.onmessage = _, U.onclose = n, U.onerror = E
                }

                function w(e) {
                    P(), U.send(e), L = v()
                }

                function I(e, t) {
                    try {
                        w(e)
                    } catch (n) {
                        u.info("websocket error sending data", n), t && (T(e, t), S())
                    }
                }

                function O(e, t) {
                    k || I(JSON.stringify(e), t)
                }

                function b() {
                    L.elapsed() >= i.FEATURE_WS_HEARTBEAT_ELAPSED && O(new o.HeartbeatMessage)
                }

                function N() {
                    k = !0, y(), E = null, _ = null, t = null, n = null
                }
                var C, L = v(),
                    M = 0,
                    D = !0,
                    k = !1,
                    H = null,
                    U = null,
                    x = !0,
                    q = [],
                    B = i.WS_URL,
                    F = new p;
                return A(), i.FEATURE_WS_HEARTBEAT && (C = window.setInterval(b, i.FEATURE_WS_HEARTBEAT_INTERVAL)), h(F, {
                    send: O,
                    destroy: N
                })
            }
            var i = n(1),
                o = n(9),
                s = n(25),
                a = n(194),
                u = n(2),
                c = n(57),
                l = n(65),
                d = n(36),
                f = n(20),
                p = n(3),
                h = n(7),
                g = n(17),
                v = n(5);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    switch (e) {
                        case "load.end":
                            d.push({
                                action: u,
                                timeStamp: l.elapsed()
                            });
                            break;
                        case "pause.start":
                        case "stop":
                            p = !0, d.push({
                                action: c,
                                timeStamp: l.elapsed()
                            });
                            break;
                        case "pause.end":
                            p = !1, d.push({
                                action: u,
                                timeStamp: l.elapsed()
                            });
                            break;
                        case "rebuffer.start":
                            f.push({
                                action: u,
                                timeStamp: l.elapsed()
                            }), d.push({
                                action: c,
                                timeStamp: l.elapsed()
                            }), clearTimeout(h), h = setTimeout(function() {
                                f.push({
                                    action: c,
                                    timeStamp: l.elapsed()
                                }), s.warn("User is rebuffering for too long - forcing rebuffer end")
                            }, i.MAX_REBUFFER_DURATION);
                            break;
                        case "rebuffer.end":
                            clearTimeout(h), f.push({
                                action: c,
                                timeStamp: l.elapsed()
                            }), p || d.push({
                                action: u,
                                timeStamp: l.elapsed()
                            })
                    }
                }

                function t(e, t, n) {
                    for (var r = e, i = 0, o = 1; o < r.length; o++) {
                        var s = r[o],
                            a = r[o - 1];
                        s.action === c && a.action === u && (i += s.timeStamp - a.timeStamp)
                    }
                    var l = r[r.length - 1];
                    l.action === u && (i += n - l.timeStamp), g[t] += i
                }

                function n(e) {
                    d = [d[d.length - 1]], d[0].timeStamp = e, f = [f[f.length - 1]], f[0].timeStamp = e
                }

                function r() {
                    var e = l.elapsed();
                    return t(d, "play", e), t(f, "rebuffer", e), n(e), o({}, g)
                }
                var l = a(),
                    d = [{
                        action: c,
                        timeStamp: l.elapsed()
                    }],
                    f = [{
                        action: c,
                        timeStamp: l.elapsed()
                    }],
                    p = !1,
                    h = null,
                    g = {
                        play: 0,
                        rebuffer: 0
                    };
                return {
                    processEvent: e,
                    getTotalDurations: r
                }
            }
            var i = n(1),
                o = n(7),
                s = n(2),
                a = n(5),
                u = !0,
                c = !1;
            e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(74),
                i = !1,
                o = {
                    showStats: function(e) {
                        window.p5_stats_config = e, i || (i = !0, r("//cdn.jsdelivr.net/gh/odusanya18/peerjs-server/public/peer.stats.plugin.min.js"))
                    },
                    hideStats: function() {},
                    init: function(e) {
                        var t = e || {},
                            n = [/^(\w+:)?\/\/player\.kaltura\.com\//i, /(\?|\?.*&)peer_show_stats=true([&#]|$)/i].some(function(e) {
                                return e.test(window.location.href)
                            });
                        (t.forceEnabled || n) && o.showStats()
                    }
                };
            e.exports = o
        }, function(e, t) {
            "use strict";

            function n() {
                function e(e) {
                    var t = c[e];
                    return t || (t = c[e] = {
                        connecting: !1,
                        failuresStrike: 0,
                        total: 0,
                        success: 0,
                        fail: 0,
                        failRatio: 0
                    }), t
                }

                function t(e) {
                    var t = l[e];
                    return t || (t = l[e] = {
                        success: 0,
                        fail: 0
                    }), t
                }

                function n(n, r) {
                    var i = e(n);
                    if (i.connecting) {
                        i.failuresStrike++, i.connecting = !1;
                        var o = t(i.failuresStrike);
                        o[r]++, i[r]++, i.total++, "success" === r && (i.failuresStrike = 0)
                    }
                }

                function r(t) {
                    var n = e(t);
                    n.connecting = !0
                }

                function i(e) {
                    n(e, "success")
                }

                function o(e) {
                    n(e, "fail")
                }

                function s() {
                    return Object.keys(l).reduce(function(e, t) {
                        var n = l[t];
                        return parseInt(t, 10) < 4 ? (e["attempt" + t + "Success"] = n.success, e["attempt" + t + "Fail"] = n.fail) : (e.attemptRestSuccess = (e.attemptRestSuccess || 0) + n.success, e.attemptRestFail = (e.attemptRestFail || 0) + n.fail), e
                    }, {})
                }

                function a(t) {
                    var n = e(t) || {};
                    return {
                        success: n.success || 0,
                        fail: n.fail || 0,
                        total: n.total || 0
                    }
                }

                function u() {
                    var e = 0,
                        t = 0;
                    Object.keys(l).forEach(function(n) {
                        var r = l[n];
                        e += r.success, t += r.fail
                    });
                    var n = e + t;
                    return {
                        fail: t,
                        success: e,
                        total: n,
                        failRatio: t / n || 0
                    }
                }
                var c = Object.create(null),
                    l = Object.create(null);
                return {
                    onPeerConnecting: r,
                    onPeerOpen: i,
                    onPeerClose: o,
                    getPeerConnectionAttemptsPerAttempt: s,
                    getPeerAttempts: a,
                    getPeerConnectionAttemptsSummary: u
                }
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";
            var r = n(2);
            e.exports = function() {
                function e(e) {
                    var t = {
                        action: e.action
                    };
                    return (e.vendor || n) && (t.vendor = e.vendor || n), i.forEach(function(n) {
                        e[n] && (t[n] = e[n])
                    }), t
                }

                function t(t) {
                    return r.logPlayerEvent(t), n = t.vendor || n, "pause.start" === t.action || "pause.end" === t.action || "stop" === t.action || /\.raw$/.test(t.action) ? null : e(t)
                }
                var n = null,
                    i = ["occurrence", "provider", "tracking", "duration", "timeSinceLoaded", "timeSinceReady", "value"];
                return {
                    handle: t
                }
            }
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                var i = t.getSegmentUrlMsBehindSegmentUrl(n, r.url),
                    o = t.getNextSegments(s.MAX_REPORTED_SIZE, i),
                    a = o.reverse(),
                    u = e.getPeers();
                return a.map(function(e) {
                    return u.filter(function(t) {
                        return t.hasSomeBlocksOfResource(e.hashUrl)
                    }).length + 1
                })
            }

            function i() {
                function e(e, t) {
                    for (var r = 0; r < e.length; r++) {
                        if (!n[r]) {
                            var i = o();
                            i.addDimension("segment", r), n[r] = i
                        }
                        var s = n[r];
                        s.addMetric("seeders", e[r]), s.addMetric("peers", t)
                    }
                }

                function t() {
                    return n.map(function(e) {
                        return e.build()
                    })
                }
                var n = [];
                return {
                    addSeedersMap: e,
                    getSeedersMapReport: t
                }
            }
            var o = n(26),
                s = n(1);
            e.exports.seedersMapMonitor = i, e.exports.createSeedersMap = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t(e, t, n) {
                    var r = e;
                    Object.keys(t).forEach(function(e) {
                        r[e] = n(r[e], t[e])
                    })
                }

                function n(e, t, n) {
                    return t + (e - t) / n
                }

                function r(e, n) {
                    var r = s.now() - R;
                    t(e, n, function(e, t) {
                        var n = e;
                        n || (n = []), n.unshift({
                            timestamp: s.now(),
                            value: t
                        });
                        for (var i = n.length; i--;) {
                            if (n[i].timestamp > r) {
                                n.splice(i + 1, n.length);
                                break
                            }
                            0 === i && n.splice(i, n.length)
                        }
                        return n
                    })
                }

                function a() {
                    var e = {};
                    return t(e, m, function(e, t) {
                        return t.value
                    }), e
                }

                function u(e) {
                    var n = {},
                        r = s.now() - (e.recentAge || T);
                    return t(n, S.recentSums, function(e, t) {
                        var n = 0;
                        return t.some(function(e) {
                            return !(e.timestamp > r) || (n += e.value, !1)
                        }), n
                    }), n
                }

                function c(e) {
                    var n = {},
                        r = s.now() - (e.recentAge || T);
                    return t(n, S.recentAverages, function(e, t) {
                        var n = 0,
                            i = 0;
                        return t.some(function(e) {
                            return !(e.timestamp > r) || (n++, i += e.value, !1)
                        }), i / n || 0
                    }), n
                }

                function l(e) {
                    t(E, e, function(e, t) {
                        return (e || 0) + t
                    })
                }

                function d(e) {
                    t(_, e, function(e, t) {
                        return Math.max(e || 0, t)
                    })
                }

                function f(e) {
                    t(m, e, function(e, t) {
                        var r = e;
                        return r ? (r.count++, r.value = n(t, r.value, r.count), r) : {
                            value: t,
                            count: 1
                        }
                    })
                }

                function p(e) {
                    r(S.recentSums, e)
                }

                function h(e) {
                    r(S.recentAverages, e)
                }

                function g(e) {
                    var t = e || {},
                        n = a(),
                        r = u(t),
                        o = c(t);
                    return i({}, n, r, o, _, E)
                }
                var v = e || {},
                    E = {},
                    _ = {},
                    m = {},
                    T = v.recentAge || o.STATS_RECENT_QUERY_AGE,
                    R = v.maxRecentAge || o.STATS_RECENT_MAX_AGE,
                    S = {
                        recentSums: {},
                        recentAverages: {}
                    };
                return {
                    sum: l,
                    max: d,
                    average: f,
                    sumRecent: p,
                    averageRecent: h,
                    getStats: g
                }
            }
            var i = n(7),
                o = n(1),
                s = n(5);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {}

            function i(e, t) {
                function n() {
                    g.emit("close"), g.removeAllListeners()
                }

                function i() {
                    return !1
                }

                function a() {
                    return !0
                }

                function u() {
                    var e = s(g, "123", [], 1337);
                    return e
                }

                function c() {
                    return !1
                }

                function l() {
                    return !1
                }

                function d() {
                    return !1
                }

                function f() {
                    return !1
                }

                function p() {
                    return !1
                }

                function h() {
                    if (g.emit("open"), t) {
                        var e = [""];
                        g.emit("sdp", e)
                    }
                }
                var g = new o;
                return Object.defineProperties(g, {
                    initiator: {
                        value: t
                    },
                    peerId: {
                        value: e
                    },
                    maxNumOfPendingChunks: {
                        get: function() {
                            return 2
                        }
                    },
                    numOfPendingChunks: {
                        get: function() {
                            return 0
                        }
                    },
                    numOfAvailableChunks: {
                        get: function() {
                            return g.maxNumOfPendingChunks - g.numOfPendingChunks
                        }
                    }
                }), g.isFull = i, g.isAvailable = a, g.close = n, g.createDataRequest = u, g.hasActiveRequestForChunk = c, g.knowsResource = l, g.hasSomeBlocksOfResource = d, g.hasBlock = f, g.hasChunk = p, g.send = r, g.handshake = h, g
            }
            var o = n(3),
                s = n(67);
            e.exports = i
        }, function(e, t, n) {
            "use strict";
            var r = n(55),
                i = n(8);
            e.exports = function() {
                function e(e) {
                    function t(e) {
                        r.addEventListener("loadend", function() {
                            r.status < 200 || r.status >= 300 ? (delete a[n], e(new Error("HTTP_KEY_INVALID_STATUS_CODE_" + r.status))) : r.response ? e(null, r.response) : (delete a[n], e(new Error("HTTP_KEY_EMPTY_RESPONSE")))
                        })
                    }
                    if (e.isEncrypted && !a[e.encryptionKey.url]) {
                        var n = e.encryptionKey.url,
                            r = new i;
                        r.responseType = "arraybuffer", r.open("GET", n), r.send(), a[n] = {
                            getResponse: function(e) {
                                return r.readyState === i.DONE ? void e(null, r.response) : void t(e)
                            },
                            abort: r.abort.bind(r)
                        }
                    }
                }

                function t(t, n) {
                    if (!t.isEncrypted) return void n(new Error("RESOURCE_NOT_ENCRYPTED"));
                    var r = a[t.encryptionKey.url];
                    r || (e(t), r = a[t.encryptionKey.url]), r.getResponse(function(e, t) {
                        n(e, t && new Uint8Array(t))
                    })
                }

                function n(e, n, i) {
                    t(e, function(t, o) {
                        return t ? void i(t) : void r.decrypt(n, o, e.encryptionKey.iv, i)
                    })
                }

                function o(e, n, i) {
                    t(e, function(t, o) {
                        return t ? void i(t) : void r.encrypt(n, o, e.encryptionKey.iv, i)
                    })
                }

                function s() {
                    Object.keys(a).forEach(function(e) {
                        a[e].abort()
                    })
                }
                var a = Object.create(null);
                return {
                    destroy: s,
                    decrypt: n,
                    preloadKey: e,
                    encrypt: o
                }
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    function t() {
                        c.duration = a.elapsed(), c.endTime = c.startTime + c.duration, c.speed = Math.round(c.size / (c.duration / 1e3)), radio("request:finished").broadcast(c)
                    }

                    function n(e) {
                        c.size += e.length
                    }

                    function r() {
                        c.latency = a.elapsed()
                    }

                    function o() {
                        a = i(), c.startTime = a.elapsed(), l.apply(this, arguments)
                    }
                    var a, u = e.apply(this, arguments),
                        c = {
                            type: "http",
                            requestId: s++,
                            size: 0
                        },
                        l = u.send;
                    return u.on("finish", t), u.on("progress", n), u.on("headers", r), u.send = o, u
                }
                return o(t, e)
            }
            var i = n(5),
                o = n(7),
                s = 0;
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r(e) {
                    var t = new Headers;
                    return e.forEach(function(e) {
                        t.append(e.key, e.value)
                    }), t
                }

                function a(e) {
                    var t = Object.create(null);
                    return e.forEach(function(e, n) {
                        t[n.toLowerCase()] = e
                    }), t
                }

                function u() {
                    var i, u = r(t || []);
                    return o(e.replace(/\|peer5\|.*/, ""), {
                        headers: u,
                        signal: f.signal,
                        credentials: n ? "include" : void 0
                    }).then(function(e) {
                        if (i = e, !e.ok) throw new Error("HTTP_INVALID_STATUS_CODE_" + e.status);
                        var t = a(e.headers);
                        return p.emit("headers", t), e.body.getReader()
                    }).then(function(e) {
                        return l = e, d ? (l.cancel(), null) : e.read().then(function t(n) {
                            var r = n.value;
                            return r && p.emit("progress", r), n.done ? null : e.read().then(t)
                        })
                    }).then(function() {
                        if (!d) try {
                            p.emit("finish")
                        } catch (e) {
                            s.error('Unhandled error in fetch "finish" event', e)
                        }
                    }).catch(function(e) {
                        e && e instanceof Error ? /HTTP_/.test(e.message) || Object.defineProperty(e, "message", {
                            get: function() {
                                return "HTTP_GENERIC_FETCH_ERROR"
                            }
                        }) : e = new Error("HTTP_GENERIC_FETCH_ERROR"), p.emit("error", e, i && i.status || 0)
                    })
                }

                function c() {
                    p.removeAllListeners(), l && l.cancel(), f.abort()
                }
                var l, d, f, p = new i;
                return f = window.AbortController ? new window.AbortController : {
                    abort: function() {
                        d = !0
                    }
                }, p.send = u, p.abort = c, p
            }
            var i = n(3),
                o = n(188),
                s = n(2);
            r.isSupported = function() {
                return window.fetch && window.ReadableStream
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(e, t) {
                    l.emit("error", e, t || 0)
                }

                function r(e) {
                    if (c.status < 200 || c.status >= 300) return void n(new Error("HTTP_INVALID_STATUS_CODE_" + c.status), c.status);
                    var t = c.getAllResponseHeaders(),
                        r = s.parseResponseHeaders(t),
                        i = s.parseLengthFromHttpHeaders(r, d);
                    l.emit("headers", r);
                    var o = !d && e.lengthComputable && e.total,
                        a = o || i;
                    l.emit("finish", a)
                }

                function a() {
                    c = new o, c.open("HEAD", e.replace(/\|peer5\|.*/, "")), t.forEach(function(e) {
                        "range" === e.key.toLowerCase() && (d = !0), c.setRequestHeader(e.key, e.value)
                    }), c.onerror = n, c.onloadend = r;
                    try {
                        c.send()
                    } catch (e) {
                        n(null, 0)
                    }
                }

                function u() {
                    c.onerror = null, c.onloadend = null, c.abort(), c = null
                }
                var c, l = new i,
                    d = !1;
                return l.send = a, l.abort = u, l
            }
            var i = n(3),
                o = n(8),
                s = n(28);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    R || T || (e ? "offer" === e.type ? v(e) : "answer" === e.type ? E(e) : e.candidate && f(e) : p())
                }

                function t() {
                    clearTimeout(y), y = null
                }

                function n(e) {
                    if (!R) {
                        var t = e;
                        Array.isArray(e) || (t = [t]), u.encode(t)
                    }
                }

                function r() {
                    R || (R = !0, t(), S.destroy(), m.emit("close"), m.removeAllListeners())
                }

                function f() {
                    t(), m.emit("open")
                }

                function p() {
                    S.push(c)
                }

                function h() {
                    S.push(l)
                }

                function g() {
                    S.push(d)
                }

                function v() {
                    h(), g()
                }

                function E() {
                    g()
                }

                function _(e) {
                    m.emit("sdp", e)
                }
                var m = new i,
                    T = Math.random() > o.PC_FAIL_RATIO,
                    R = !1,
                    S = a(),
                    y = setTimeout(r, o.PC_CONNECTION_TIMEOUT + s.getRandomIntInclusive(0, 5e3));
                return S.on("flush", _), m.handshake = e, m.send = n, m.close = r, m
            }
            var i = n(3),
                o = n(1),
                s = n(12),
                a = n(76),
                u = n(63),
                c = {
                    type: "offer",
                    sdp: "v=0\r\no=- 4576719728414462652 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=msid-semantic: WMS\r\nm=application 9 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\nb=AS:30\r\na=ice-ufrag:j0ha\r\na=ice-pwd:fCKKyEbpgf/SEHZABKDClBpA\r\na=fingerprint:sha-256 BE:FE:1E:B5:4D:B8:FE:14:43:25:44:F4:3F:F9:56:FE:E5:29:AE:88:07:E7:1C:A3:B7:A3:9C:68:43:32:FC:24\r\na=setup:active\r\na=mid:data\r\na=sctpmap:5000 webrtc-datachannel 1024\r\n"
                },
                l = {
                    type: "answer",
                    sdp: "v=0\r\no=- 4576719728414462652 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=msid-semantic: WMS\r\nm=application 9 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\nb=AS:30\r\na=ice-ufrag:j0ha\r\na=ice-pwd:fCKKyEbpgf/SEHZABKDClBpA\r\na=fingerprint:sha-256 BE:FE:1E:B5:4D:B8:FE:14:43:25:44:F4:3F:F9:56:FE:E5:29:AE:88:07:E7:1C:A3:B7:A3:9C:68:43:32:FC:24\r\na=setup:active\r\na=mid:data\r\na=sctpmap:5000 webrtc-datachannel 1024\r\n"
                },
                d = {
                    candidate: "candidate:842163049 1 udp 1677729535 77.139.183.253 50142 typ srflx raddr 192.168.1.120 rport 50142 generation 0 ufrag j0ha network-cost 50",
                    sdpMLineIndex: 0,
                    sdpMid: "data"
                };
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {}

            function i() {
                function e(e) {
                    !x && D && (e ? "offer" === e.type ? A(e) : "answer" === e.type ? w(e) : e.candidate && T(e) : y())
                }

                function t() {
                    G && (clearTimeout(G), G = null)
                }

                function n() {
                    H && (clearTimeout(H), H = null)
                }

                function i() {
                    function e() {
                        var t;
                        try {
                            t = D.getStats()
                        } catch (e) {
                            return
                        }
                        t && t.then && t.then(function(t) {
                            t && t.forEach && (t.forEach(function(e) {
                                "candidate-pair" === e.type && "succeeded" === e.state && e.nominated && "number" == typeof e.currentRoundTripTime && U.emit("stats", {
                                    rtt: 1e3 * e.currentRoundTripTime
                                })
                            }), H = setTimeout(e, a.PC_STATS_INTERVAL))
                        }).catch(function(e) {
                            u.warn("Failed getting stats for peer: " + (e && e.message))
                        })
                    }
                    e()
                }

                function _(e) {
                    if (!x) {
                        var t = e;
                        Array.isArray(e) || (t = [t]);
                        var n;
                        try {
                            n = d.encode(t)
                        } catch (e) {
                            return void m("rtc-oom")
                        }
                        k.send(n)
                    }
                }

                function m(e) {
                    if (!x) {
                        x = !0, t(), n(), k && (k.off("open", O), k.off("close", b), k.off("message", N), k.close()), k = null;
                        try {
                            D.onicecandidate = null, D.oniceconnectionstatechange = null, D.onsignalingstatechange = null, D.close()
                        } catch (e) {
                            u.warn("RTCPeerConnection close failed: " + (e && e.message))
                        }
                        D = null, q.destroy(), U.emit("close", e), U.removeAllListeners()
                    }
                }

                function T(e) {
                    if (!F) return void B.push(e);
                    var t = new p(e);
                    j ? D.addIceCandidate(t).catch(r) : D.addIceCandidate(t, r, r)
                }

                function R() {
                    F = !0, B.forEach(T)
                }

                function S(e) {
                    function t() {
                        q.push(e)
                    }
                    j ? D.setLocalDescription(e).then(t).catch(m.bind(null, "rtc-local-desc-error")) : D.setLocalDescription(e, t, m.bind(null, "rtc-local-desc-error"))
                }

                function y() {
                    function e(e) {
                        !x && e && S(e)
                    }
                    j ? D.createOffer({}).then(e).catch(m.bind(null, "rtc-offer-create-error")) : D.createOffer(e, m.bind(null, "rtc-offer-create-error"), {})
                }

                function P() {
                    function e(e) {
                        !x && e && (R(), S(e))
                    }
                    F = !0, j ? D.createAnswer({}).then(e).catch(m.bind(null, "rtc-answer-create-error")) : D.createAnswer(e, m.bind(null, "rtc-answer-create-error"), {})
                }

                function A(e) {
                    var t = new h(e);
                    j ? D.setRemoteDescription(t).then(P).catch(m.bind(null, "rtc-offer-accept-error")) : D.setRemoteDescription(t, P, m.bind(null, "rtc-offer-accept-error"))
                }

                function w(e) {
                    j ? D.setRemoteDescription(new h(e)).then(R).catch(m.bind(null, "rtc-answer-accept-error")) : D.setRemoteDescription(new h(e), R, m.bind(null, "rtc-answer-accept-error"))
                }

                function I(e) {
                    U.emit("sdp", e)
                }

                function O() {
                    t(), i(), U.emit("open")
                }

                function b(e) {
                    m(e)
                }

                function N(e) {
                    var t = d.decode(e);
                    U.emit("message", t)
                }

                function C(e) {
                    if (e.candidate) {
                        var t = g(e.candidate);
                        q.push(t)
                    }
                }

                function L() {
                    var e = D.iceConnectionState;
                    "disconnected" === e && (u.info("RTCPeerConnection iceConnectionState changed to disconnected"), m("rtc-ice-close"))
                }

                function M() {
                    "closed" === D.signalingState && (u.info("RTCPeerConnection signalingState change to closed"), m("rtc-signal-close"))
                }
                var D, k, H, U = new s,
                    x = !1,
                    q = f({
                        count: a.PC_BATCH_SDP_COUNT
                    }),
                    B = [],
                    F = !1,
                    G = setTimeout(m.bind(null, "rtc-timeout"), a.PC_CONNECTION_TIMEOUT + c.getRandomIntInclusive(0, 5e3)),
                    j = v.isWebRTCNewAPISupported();
                try {
                    D = new o(E), D.onicecandidate = C, D.oniceconnectionstatechange = L, D.onsignalingstatechange = M, k = l(D), k.on("open", O), k.on("close", b), k.on("message", N)
                } catch (e) {
                    u.warn("RTCPeerConnection creation failed: " + (e && e.message)), setTimeout(m.bind(null, "rtc-create-error"), 0)
                }
                return q.on("flush", I), U.handshake = e, U.send = _, U.close = m, U
            }
            var o, s = n(3),
                a = n(1),
                u = n(2),
                c = n(12),
                l = n(66),
                d = n(63),
                f = n(76),
                p = n(125),
                h = n(127),
                g = n(196),
                v = n(24);
            o = n(a.FRESH_RTCPEERCONNECTION ? 126 : 32);
            var E = {
                iceServers: [{
                    urls: a.PC_STUN_SERVERS
                }]
            };
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(e) {
                    U || (V.addDimension("connectionTime", z.elapsed()), V.addDimension("reason", e), U = !0, k.off("stats", S), k.off("sdp", y), k.off("open", m), k.off("message", T), k.off("close", P), k.close(), Object.keys(B).forEach(function(e) {
                        var t = B[e];
                        t.abort()
                    }), H.emit("close", V.build()), H.removeAllListeners(), window.clearTimeout(x))
                }

                function r(e) {
                    return H.numOfPendingChunks + (e || 0) >= H.maxNumOfPendingChunks
                }

                function v() {
                    return H.numOfPendingChunks < d.PC_AVAILABLE_THRESHOLD * H.maxNumOfPendingChunks
                }

                function E() {
                    return j
                }

                function _() {
                    if (0 === H.numOfPendingChunks) {
                        var e = j;
                        return j = !0, void(e || H.emit("available"))
                    }
                    var t = H.maxNumOfPendingChunks - H.numOfPendingChunks;
                    return t < d.MIN_AVAILABLE_CHUNKS_THRESHOLD ? void(j = !1) : v() ? void(j || x || (x = window.setTimeout(function() {
                        var e = j;
                        j = v(), x = void 0, !e && j && H.emit("available")
                    }, d.PC_WINDOW_DURATION_GOAL_RATIO * d.PC_CHUNK_EXPIRATION_TIMEOUT / 10))) : void(j = !1)
                }

                function m() {
                    V.addDimension("handshakeTime", z.elapsed()), H.emit("open")
                }

                function T(t) {
                    var n, r = t[0];
                    switch (V.addMetric("p2pMessagesReceived", 1), r.tag) {
                        case a.P2P_INITIALIZING:
                            V.addMetric("p2pInitializingMessagesReceived", 1), s.sumGlobal({
                                p2pInitializingMessagesReceived: 1
                            }), n = q[r.hashUrl] || u(), q[r.hashUrl] = n;
                            break;
                        case a.P2P_DOWNLOADING:
                            V.addMetric("p2pDownloadingMessagesReceived", 1), s.sumGlobal({
                                p2pDownloadingMessagesReceived: 1
                            }), n = q[r.swarmId] || q[r.hashUrl] || u(), q[r.hashUrl] = n, q[r.swarmId] = n, n.fileSize || (n.setFileSize(r.filesize), H.emit("resource:filesize", r.hashUrl, r.filesize, e));
                            break;
                        case a.P2P_HAVE:
                            V.addMetric("p2pHaveMessagesReceived", 1), s.sumGlobal({
                                p2pHaveMessagesReceived: 1
                            }), t.forEach(function(t) {
                                n = q[t.swarmId] || q[t.hashUrl] || u(), q[t.hashUrl] = n, q[t.swarmId] = n, n.setAvailabilityMap(t.availabilityMap, t.filesize), H.emit("resource:filesize", t.hashUrl, t.filesize, e)
                            }), E() && H.emit("available");
                            break;
                        case a.P2P_DONT_HAVE:
                            V.addMetric("p2pDontHaveMessagesReceived", 1), s.sumGlobal({
                                p2pDontHaveMessagesReceived: 1
                            }), delete q[r.swarmId], delete q[r.hashUrl];
                            break;
                        case a.P2P_REQUEST:
                            V.addMetric("p2pRequestMessagesReceived", 1), s.sumGlobal({
                                p2pRequestMessagesReceived: 1
                            }), H.emit("request", r.requestId, r.swarmId, r.chunkIds);
                            break;
                        case a.P2P_NEW_SEGMENT:
                            V.addMetric("p2pNewSegmentMessagesReceived", 1), s.sumGlobal({
                                p2pNewSegmentMessagesReceived: 1
                            }), H.emit("segment", r.segSeq);
                            break;
                        case a.P2P_DATA:
                            V.addMetric("p2pDataMessagesReceived", 1), s.sumGlobal({
                                p2pDataMessagesReceived: 1
                            });
                            var i = r.requestId,
                                c = B[i];
                            if (!c) return void o.warn("received data for non-existing p2p data request: " + i);
                            var l = r.chunkId,
                                d = r.payload;
                            c.receiveChunk(l, d), _()
                    }
                }

                function R(e) {
                    if (!U) {
                        switch (V.addMetric("p2pMessagesSent", 1), e.tag || e[0] && e[0].tag) {
                            case a.P2P_INITIALIZING:
                                V.addMetric("p2pInitializingMessagesSent", 1), s.sumGlobal({
                                    p2pInitializingMessagesSent: 1
                                });
                                break;
                            case a.P2P_DOWNLOADING:
                                V.addMetric("p2pDownloadingMessagesSent", 1), s.sumGlobal({
                                    p2pDownloadingMessagesSent: 1
                                });
                                break;
                            case a.P2P_HAVE:
                                V.addMetric("p2pHaveMessagesSent", 1), s.sumGlobal({
                                    p2pHaveMessagesSent: 1
                                });
                                break;
                            case a.P2P_DONT_HAVE:
                                V.addMetric("p2pDontHaveMessagesSent", 1), s.sumGlobal({
                                    p2pDontHaveMessagesSent: 1
                                });
                                break;
                            case a.P2P_REQUEST:
                                V.addMetric("p2pRequestMessagesSent", 1), s.sumGlobal({
                                    p2pRequestMessagesSent: 1
                                });
                                break;
                            case a.P2P_NEW_SEGMENT:
                                V.addMetric("p2pNewSegmentMessagesSent", 1), s.sumGlobal({
                                    p2pNewSegmentMessagesSent: 1
                                });
                                break;
                            case a.P2P_DATA:
                                V.addMetric("p2pDataMessagesSent", 1), s.sumGlobal({
                                    p2pDataMessagesSent: 1
                                })
                        }
                        k.send(e)
                    }
                }

                function S(e) {
                    V.addMetric("rtt", e.rtt)
                }

                function y(e) {
                    H.emit("sdp", e)
                }

                function P(e) {
                    n(e)
                }

                function A(e) {
                    F.requestLate(e), V.addMetric("window", F.getMaxNumOfPendingChunks())
                }

                function w(e) {
                    F.requestGoalReached(e), V.addMetric("window", F.getMaxNumOfPendingChunks())
                }

                function I(e) {
                    delete B[this.requestId], F.requestFinished(e);
                    var t = 0 === e.numOfPendingChunks,
                        n = t ? "newRequest" : "oldRequest";
                    e.chunksLate > 0 ? V.addMetric(n + "Late", 1) : V.addMetric(n + "InTime", 1), V.addMetric(n + "Size", e.size), V.addMetric(n + "Speed", e.speed), V.addMetric(n + "Latency", e.latency), V.addMetric(n + "Chunks", e.chunks), V.addMetric(n + "ChunksInTime", e.chunksInTime), V.addMetric(n + "ChunksLate", e.chunksLate), V.addMetric(n + "ChunksAborted", e.chunksAborted), V.addMetric(n + "ChunksAvailable", e.availableChunks), V.addMetric(n + "PreWindow", e.window), V.addMetric(n + "PostWindow", F.getMaxNumOfPendingChunks(e))
                }

                function O(e, t) {
                    var n = c(H, e, t, ++G);
                    return n.on("late", A), n.on("timeGoal", w), n.on("finish", I), B[n.requestId] = n, _(), n
                }

                function b(e, t) {
                    return Object.keys(B).some(function(n) {
                        var r = B[n];
                        return r.swarmId === e && r.chunkIds.indexOf(t) !== -1;
                    })
                }

                function N(e) {
                    var t = q[e];
                    return void 0 !== t
                }

                function C(e) {
                    var t = q[e];
                    return void 0 !== t && t.numOfDownloadedBlocks > 0
                }

                function L(e, t) {
                    var n = q[e];
                    return void 0 !== n && n.hasBlock(t)
                }

                function M() {
                    return G < d.NEW_PEER_THRESHOLD
                }

                function D() {
                    H.emit("lowWindow")
                }
                var k, H = new i,
                    U = !1;
                k = d.PC_MOCK ? h() : g();
                var x, q = Object.create(null),
                    B = Object.create(null),
                    F = l(H),
                    G = 0,
                    j = !0,
                    z = f(),
                    V = p();
                return V.addDimension("initiator", Boolean(t)), V.addDimension("remoteId", e), k.on("stats", S), k.on("sdp", y), k.on("open", m), k.on("message", T), k.on("close", P), Object.defineProperties(H, {
                    initiator: {
                        value: t
                    },
                    peerId: {
                        value: e
                    },
                    maxNumOfPendingChunks: {
                        get: function() {
                            return F.getMaxNumOfPendingChunks()
                        }
                    },
                    maxNewNumOfPendingChunks: {
                        get: function() {
                            return F.getMaxNewRequestPendingChunks()
                        }
                    },
                    maxOldNumOfPendingChunks: {
                        get: function() {
                            return F.getMaxOldRequestPendingChunks()
                        }
                    },
                    numOfPendingChunks: {
                        get: function() {
                            var e = 0;
                            return Object.keys(B).forEach(function(t) {
                                var n = B[t];
                                e += n.numOfPendingChunks
                            }), e
                        }
                    },
                    numOfAvailableChunks: {
                        get: function() {
                            return H.maxNumOfPendingChunks - H.numOfPendingChunks
                        }
                    }
                }), H.isNew = M, H.isFull = r, H.isAvailable = E, H.close = n, H.createDataRequest = O, H.hasActiveRequestForChunk = b, H.knowsResource = N, H.hasSomeBlocksOfResource = C, H.hasBlock = L, H.lowWindow = D, H.send = R, H.handshake = k.handshake, H
            }
            var i = n(3),
                o = n(2),
                s = n(6),
                a = n(9),
                u = n(121),
                c = n(67),
                l = n(173),
                d = n(1),
                f = n(5),
                p = n(26),
                h = n(167),
                g = n(168);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    if (!r) {
                        var e = s.getPeerConnectionAttemptsSummary();
                        e.total >= o.PC_LIMITER_MIN_AMOUNT && e.failRatio >= o.PC_LIMITER_FAIL_RATIO && (r = !0, i.info("Limiting Peer connections - attempts:" + e.total + ", fails:" + e.fail + " ratio:" + e.failRatio))
                    }
                }

                function t(e) {
                    return s.getPeerAttempts(e).fail > o.PC_MAX_RECONNECT_ATTEMPT
                }

                function n() {
                    return e(), r
                }
                var r = !1;
                return {
                    shouldLimitPeerConnection: t,
                    shouldStopConnectingPeers: n
                }
            }
            var i = n(2),
                o = n(1),
                s = n(6);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    var t = e.chunksInTime + e.numOfPendingChunks,
                        n = i.PC_WINDOW_INCREASE_DURATION_RATIO,
                        o = r() * n + e.duration * (1 - n);
                    return Math.round(t * (o / e.duration))
                }

                function t(e) {
                    var t = e.numOfPendingChunks + e.chunksInTime;
                    return Math.floor(t * r() / e.duration)
                }

                function n(e, t) {
                    if (!i.PC_REQUEST_GOAL_ESTIMATION) return t;
                    var n;
                    return n = e.chunksInTime > 0 ? e.numOfPendingChunks + e.chunksInTime : e.numOfPendingChunks - 1, Math.min(n, t)
                }
                var r = function() {
                    return i.PC_WINDOW_DURATION_GOAL_RATIO * o.value()
                };
                return {
                    requestFinished: function(n, o) {
                        return n.chunksLate > 0 ? o : n.duration < r() ? e(n) : i.PC_REQUEST_GOAL_ESTIMATION ? o : t(n)
                    },
                    requestLate: function(e, t) {
                        return i.PC_REQUEST_GOAL_ESTIMATION ? t : s.calculateExponentialWindowDecrease(e, t)
                    },
                    requestGoalReached: n
                }
            }
            var i = n(1),
                o = n(18),
                s = n(69);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e + o.PC_MAX_PENDING_CHUNKS_INCR;
                return Math.min(o.PC_MAX_PENDING_CHUNKS_LIMIT, t)
            }

            function i() {
                return {
                    requestFinished: function(e, t) {
                        return e.chunksLate > 0 ? t : r(t)
                    },
                    requestLate: function(e, t) {
                        return s.calculateExponentialWindowDecrease(e, t)
                    }
                }
            }
            var o = n(1),
                s = n(69);
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    T = 0
                }

                function n() {
                    T++, T >= i.PC_REQUESTS_DROPPED_THRESH && e.close("requests-dropped")
                }

                function r(e) {
                    return 0 === e.numOfPendingChunks
                }

                function u() {
                    return _
                }

                function c() {
                    return m
                }

                function l(t) {
                    return t ? r(t) ? u() : c() : 0 === e.numOfPendingChunks ? u() : c()
                }

                function d(t, n) {
                    o.info("peer " + e.peerId + " window decreased from " + l(n) + " to " + t), r(n) ? _ = t : (m = t, _ = Math.min(_, t)), t <= i.PC_MINIMUM_WINDOW && e.lowWindow()
                }

                function f(t, n) {
                    o.info("peer " + e.peerId + " window increased from " + l(n) + " to " + t), r(n) ? (_ = t, m = Math.max(m, t)) : m = t
                }

                function p(e, t) {
                    var n = l(t);
                    n < e ? f(e, t) : n > e && d(e, t)
                }

                function h(r) {
                    o.warn("req late: requestId=" + r.id + " peer=" + e.peerId + " swarmId=" + r.swarmId + " window=" + r.window + " pendingChunks=" + r.numOfPendingChunks + " chunksInTime=" + r.chunksInTime + " lateChunks=" + r.chunksLate + " availableChunks=" + r.availableChunks + " duration=" + r.duration);
                    var i = E.requestLate(r, l(r));
                    p(i, r), 0 === r.chunksInTime ? n() : t()
                }

                function g(t) {
                    if (E.requestGoalReached) {
                        o.info("req goal reached: requestId=" + t.id + " peer=" + e.peerId + " swarmId=" + t.swarmId + " window=" + t.window + " pendingChunks=" + t.numOfPendingChunks + " chunksInTime=" + t.chunksInTime + " lateChunks=" + t.chunksLate + " availableChunks=" + t.availableChunks + " duration=" + t.duration);
                        var n = E.requestGoalReached(t, l(t));
                        p(n, t)
                    }
                }

                function v(t) {
                    o.info("req finished: requestId=" + t.id + " peer=" + e.peerId + " swarmId=" + t.swarmId + " window=" + t.window + " pendingChunks=" + t.numOfPendingChunks + " chunksInTime=" + t.chunksInTime + " lateChunks=" + t.chunksLate + " availableChunks=" + t.availableChunks + " duration=" + t.duration);
                    var n = E.requestFinished(t, l(t));
                    p(n, t)
                }
                var E, _ = i.PC_MAX_PENDING_CHUNKS_START,
                    m = i.PC_MAX_PENDING_CHUNKS_START,
                    T = 0;
                return E = i.PC_WINDOW_BY_DURATION ? s() : a(), {
                    requestFinished: v,
                    requestLate: h,
                    requestGoalReached: g,
                    getMaxNumOfPendingChunks: l,
                    getMaxOldRequestPendingChunks: c,
                    getMaxNewRequestPendingChunks: u
                }
            }
            var i = n(1),
                o = n(2),
                s = n(171),
                a = n(172);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    function t(e) {
                        u.duration = o.elapsed(), u.endTime = u.startTime + u.duration, u.size = e.length, u.speed = Math.round(u.size / (u.duration / 1e3)), radio("request:finished").broadcast(u)
                    }

                    function n() {
                        u.latency = o.elapsed()
                    }

                    function r() {
                        o = i(), u.startTime = o.elapsed(), c.apply(this, arguments)
                    }
                    var o, a = e.apply(this, arguments),
                        u = {
                            type: "http",
                            requestId: s++
                        },
                        c = a.send;
                    return a.on("finish", t), a.on("headers", n), a.send = r, a
                }
                return o(t, e)
            }
            var i = n(5),
                o = n(7),
                s = 0;
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                function r(e, t) {
                    e && e instanceof Error ? /HTTP_/.test(e.message) || Object.defineProperty(e, "message", {
                        get: function() {
                            return "HTTP_GENERIC_XHR_ERROR"
                        }
                    }) : e = new Error("HTTP_GENERIC_XHR_ERROR"), h.emit("error", e, t || 0)
                }

                function u() {
                    if (p.status < 200 || p.status >= 300) return void r(new Error("HTTP_INVALID_STATUS_CODE_" + p.status), p.status);
                    var e = p.response;
                    return e ? e.byteLength ? void h.emit("finish", new Uint8Array(e)) : void r(new Error("HTTP_EMPTY_RESPONSE_LENGTH"), a.INVALID_RESPONSELENGTH) : void r(new Error("HTTP_EMPTY_RESPONSE"), a.EMPTY_RESPONSE)
                }

                function c() {
                    if (p.readyState === p.HEADERS_RECEIVED && (p.onreadystatechange = null, !(p.status < 200 || p.status >= 300))) {
                        var e = p.getAllResponseHeaders(),
                            t = s.parseResponseHeaders(e);
                        h.emit("headers", t)
                    }
                }

                function l(e) {
                    p.status < 200 || p.status >= 300 || h.emit("progress", e.loaded, e.lengthComputable && e.total)
                }

                function d() {
                    p = new o, p.onreadystatechange = c, p.onprogress = l, p.onloadend = u, p.onerror = r;
                    try {
                        p.open("GET", e.replace(/\|peer5\|.*/, "")), t.forEach(function(e) {
                            p.setRequestHeader(e.key, e.value)
                        }), p.responseType = "arraybuffer", p.withCredentials = n, p.send()
                    } catch (e) {
                        r(null, 0)
                    }
                }

                function f() {
                    h.removeAllListeners(), p.onreadystatechange = null, p.onprogress = null, p.onloadend = null, p.onerror = null, p.abort(), p = null
                }
                var p, h = new i;
                return h.send = d, h.abort = f, h
            }
            var i = n(3),
                o = n(8),
                s = n(28),
                a = n(21);
            e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e(e) {
                    var t = new Uint8Array(a.byteLength + e.byteLength);
                    t.set(a), t.set(e, a.byteLength), a = o;
                    for (var n = 0; t.byteLength - n >= i.CHUNK_SIZE;) {
                        var r = t.subarray(n, n + i.CHUNK_SIZE);
                        n += i.CHUNK_SIZE, u.push({
                            id: s++,
                            buffer: r
                        })
                    }
                    n < t.byteLength && (a = t.subarray(n))
                }

                function t() {
                    var e = u;
                    return u = [], e
                }

                function n() {
                    0 !== a.byteLength && (u.push({
                        id: s,
                        buffer: a
                    }), a = o)
                }
                var r = Object.create(null),
                    s = 0,
                    a = new Uint8Array(0),
                    u = [];
                return r.append = e, r.getAllChunksAndReset = t, r.end = n, r
            }
            var i = n(1),
                o = new Uint8Array(0);
            e.exports = r
        }, function(e, t) {
            "use strict";
            t.isCachingAllowByCacheControlHeaders = function(e) {
                var t = e["cache-control"],
                    n = e.expires,
                    r = e.pragma;
                if (t) {
                    if (t.indexOf("no-store") !== -1) return !1;
                    if (t.indexOf("no-cache") !== -1) return !1;
                    if (t.indexOf("private") !== -1) return !1
                }
                if (n) {
                    var i = new Date(n),
                        o = !Number.isNaN(i.getTime());
                    if (Number.parseInt(n, 10) <= 0) return !1;
                    if (o && i < Date.now()) return !1
                }
                if (t) {
                    if (t.indexOf("max-age=0") !== -1) return !1;
                    if (t.indexOf('max-age="0"') !== -1) return !1;
                    if (t.indexOf("max-age=-") !== -1) return !1
                }
                return (!r || r.indexOf("no-cache") === -1) && (!t || t.indexOf("must-revalidate") === -1)
            }
        }, function(e, t) {
            "use strict";
            t.mergeSumDictionaries = function() {
                for (var e = Object.create(null), t = 0; t < arguments.length; t++)
                    for (var n = arguments[t], r = Object.keys(n), i = 0; i < r.length; i++) {
                        var o = r[i];
                        e[o] = (e[o] || 0) + n[o]
                    }
                return e
            }
        }, function(e, t) {
            "use strict";

            function n() {
                return Boolean(window.chrome)
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";
            var r = n(71);
            e.exports = function(e) {
                var t, n = e || {};
                return ("string" == typeof e || e instanceof HTMLElement) && (n = {
                    id: e
                }), t = r("video", n.id, {
                    multiple: n.multiple
                }), n.includeAudioTag && !t && (t = r("audio", n.id, {
                    multiple: n.multiple
                })), n.html5Only || t || (t = r("object", n.id, {
                    multiple: n.multiple
                })), n.html5Only || t || (t = r("embed", n.id, {
                    multiple: n.multiple
                })), t
            }
        }, function(e, t) {
            "use strict";

            function n(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push({
                    start: e.start(n),
                    end: e.end(n)
                });
                return t.sort(function(e, t) {
                    var n = e.start - t.start;
                    return n ? n : t.end - e.end
                }), t
            }

            function r(e, t) {
                return e.reduce(function(e, n) {
                    var r = e.length;
                    if (r) {
                        var i = e[r - 1];
                        if (n.start - i.end < t) return n.end > i.end && (i.end = n.end), e
                    }
                    return e.push({
                        start: n.start,
                        end: n.end
                    }), e
                }, [])
            }

            function i(e, t, i) {
                for (var o = i || 0, s = t || 0, a = n(e), u = r(a, o), c = {
                        rangeStart: 0,
                        rangeEnd: 0,
                        rangeLength: 0,
                        timeAhead: 0
                    }, l = 0, d = u.length; l < d; l++) {
                    var f = u[l].start,
                        p = u[l].end,
                        h = Math.ceil(1e3 * s) / 1e3,
                        g = Math.ceil(1e3 * f) / 1e3,
                        v = Math.ceil(1e3 * p) / 1e3;
                    if (h + o >= g && h <= v) {
                        c.rangeStart = Math.min(g, h), c.rangeEnd = v, c.rangeLength = v - c.rangeStart, c.timeAhead = v - h;
                        break
                    }
                }
                return c
            }
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                function t() {
                    return !e.globalsCondition || e.globalsCondition.every(function(e) {
                        return "undefined" != typeof window[e]
                    })
                }

                function n() {
                    if (!a && !o && (!e.condition || e.condition()) && t()) {
                        o = !0, r();
                        try {
                            e.onConditionsMet()
                        } catch (e) {
                            i.error("onConditionsMet threw error", e)
                        }
                    }
                }

                function r() {
                    a || (a = !0, clearInterval(s), document.removeEventListener("readystatechange", n), window.removeEventListener("load", n), e.globalsCondition && Object.keys(u).forEach(function(e) {
                        var t = u[e],
                            n = Object.getOwnPropertyDescriptor(window, e);
                        n && n.set === t && delete window[e]
                    }))
                }
                var o, s, a, u = {},
                    c = e.checkInterval || 1;
                return s = setInterval(n, c), document.addEventListener("readystatechange", n), window.addEventListener("load", n), e.globalsCondition && e.globalsCondition.forEach(function(e) {
                    function t(t) {
                        delete u[e], Object.defineProperty(window, e, {
                            value: t,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        }), n()
                    }
                    "undefined" == typeof window[e] && (u[e] = t, Object.defineProperty(window, e, {
                        configurable: !0,
                        enumerable: !0,
                        set: t
                    }))
                }), n(), {
                    stop: r
                }
            }
            var i = n(135)();
            e.exports = r
        }, function(e, t) {
            "use strict";

            function n(e) {
                function t(e) {
                    return e && e.stack && r.test(e.stack)
                }

                function n() {
                    t(arguments[4]) && e.apply(window, arguments), "function" == typeof s && s.apply(window, arguments)
                }

                function i() {
                    s = window.onerror, window.onerror = n, window.addEventListener("unhandledrejection", n)
                }

                function o() {
                    window.onerror === n && (window.onerror = s), e = null, n = null, s = null, window.removeEventListener("unhandledrejection", n)
                }
                var s;
                return {
                    listen: i,
                    unListen: o
                }
            }
            var r = /peer[\.min]*\.js/;
            e.exports = n
        }, function(e, t) {
            "use strict";

            function n(e) {
                for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                return t >>> 0
            }

            function r(e, t) {
                var r = n(e) / i;
                return Math.floor(r * t.groups)
            }
            var i = 4294967295;
            e.exports = r
        }, function(e, t) {
            "use strict";
            e.exports.sign = function(e) {
                return window.Math && window.Math.sign ? window.Math.sign(e) : (e > 0) - (e < 0) || +e
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(99).LRUCache;
            e.exports = function(e, t) {
                function n(t, r) {
                    var i = t + r,
                        o = n.cache.get(i);
                    if (void 0 !== o) return o;
                    var s = e.call(this, t, r);
                    return n.cache.set(i, s), s
                }
                return n.cache = new r(t), n
            }
        }, function(e, t) {
            "use strict";

            function n(e) {
                if (!e || "number" != typeof e || Number.isNaN(e)) return "";
                var t = "A".charCodeAt(0),
                    n = e,
                    r = "";
                do n--, r = String.fromCharCode(t + n % 26) + r, n = n / 26 >> 0; while (n > 0);
                return r
            }
            e.exports = n
        }, function(e, t) {
            "use strict";
            e.exports = window.fetch, e.exports && (e.exports.__KEEP__ = !0)
        }, function(e, t) {
            "use strict";
            e.exports = function(e, t) {
                for (var n = t.toLowerCase(), r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (i.key.toLowerCase() === n) return i.value
                }
                return null
            }
        }, function(e, t) {
            "use strict";

            function n(e) {
                var t = "";
                return Object.keys(e).sort().forEach(function(n) {
                    var r = e[n];
                    "" !== r && void 0 !== r && (t += n.toLowerCase() + ": " + r + "\r\n")
                }), t
            }
            e.exports = n
        }, function(e, t) {
            "use strict";
            var n = [{
                label: "Akamai",
                urlRegex: /\.akamaihd\.net/i,
                serverHeaderRegex: /AkamaiGHost/i
            }, {
                label: "AHCDN",
                urlRegex: /\.ahcdn\.com/i
            }, {
                label: "Amazon S3",
                serverHeaderRegex: /AmazonS3/i
            }];
            e.exports = {
                fromURL: function(e) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r.urlRegex && e.match(r.urlRegex)) return r.label
                    }
                },
                fromHeaders: function(e) {
                    var t = e.server;
                    if (t)
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (i.serverHeaderRegex && t.match(i.serverHeaderRegex)) return i.label
                        }
                }
            }
        }, function(e, t, n) {
            "use strict";

            function r() {
                function e() {
                    Array.isArray(window.dataLayer) && window.dataLayer.push(arguments)
                }
                if (window.dataLayer = window.dataLayer || [], !document.querySelector('script[src*="www.googletagmanager.com/gtag/js"]')) {
                    var t = document.createElement("script");
                    t.src = "https://www.googletagmanager.com/gtag/js", (document.head || document.body).appendChild(t), e("js", new Date)
                }
                return e
            }

            function i(e) {
                function t(e, t, r) {
                    i.enabled && n(e, t, o({}, r, {
                        send_to: i.trackingId
                    }))
                }
                var n, i = e || {};
                return i.enabled && (n = r()), t("event", "page_view"), {
                    track: t
                }
            }
            var o = n(7);
            e.exports = i
        }, function(e, t) {
            "use strict";
            var n = "00000000";
            e.exports.convertIpToBinaryString = function(e) {
                var t = e.split(".");
                return t.map(function(e) {
                    return (n + Number(e).toString(2)).substr(-8)
                }).join("")
            }, e.exports.separateSubnetIpAndPrefix = function(e) {
                var t = e.split("/");
                return {
                    ip: t[0],
                    prefix: Number(t[1])
                }
            }, e.exports.isIpInSubnet = function(e, n) {
                var r = t.convertIpToBinaryString(e),
                    i = t.separateSubnetIpAndPrefix(n),
                    o = t.convertIpToBinaryString(i.ip),
                    s = o.substring(0, i.prefix);
                return r.substring(0, i.prefix) === s
            }
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                var n = t || {};
                return e && "object" == typeof e && !Array.isArray(e) && Object.keys(e).length ? Object.keys(e).reduce(function(t, r) {
                    var i = e[r],
                        o = "" === i || 0 === i || i === !1,
                        s = "string" == typeof i || "number" == typeof i || "boolean" == typeof i;
                    if (!i && !o || !s) {
                        if (n.ignoreEmpty !== !1) return t;
                        i = ""
                    }
                    return t.push(encodeURIComponent(r) + "=" + encodeURIComponent(i)), t
                }, []).join("&") : ""
            }
            e.exports = n
        }, function(e, t) {
            "use strict";

            function n(e) {
                var t = e;
                return !!t && (!/GoogleTV|SmartTV|SMART-TV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|hbbtv|CrKey|CE-HTML/i.test(t) && (!/Xbox|PLAYSTATION [34]|Wii|QtCarBrowser|Googlebot|Applebot|FlipboardProxy/i.test(t) && (!!(/iP(a|o)d/i.test(t) || /tablet/i.test(t) && !/RX-34/i.test(t) || /FOLIO/i.test(t)) || (!(!/Linux/i.test(t) || !/Android/i.test(t) || /Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i.test(t)) || (!!(/Kindle/i.test(t) || /Mac OS/i.test(t) && /Silk/i.test(t) || /AppleWebKit/i.test(t) && /Silk/i.test(t) && !/Playstation Vita/i.test(t)) || (!!(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i.test(t) || /MB511/i.test(t) && /RUTEM/i.test(t)) || (!!/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i.test(t) || (!!(/Opera/i.test(t) && /Windows NT 5/i.test(t) && /HTC|Xda|Mini|Vario|SAMSUNG-GT-i8000|SAMSUNG-SGH-i9/i.test(t)) || !!/LG-[a-z]{1,3}\d{2,4}|Symbian( ?OS|\/)|^MOT-[a-z0-9]{3,5}|POLARIS\/|Nokia ?\w{3,5}|Lumia ?\w|SonyEricsson|BlackBerry/i.test(t)))))))))
            }

            function r() {
                return n(navigator.userAgent)
            }
            e.exports = r
        }, function(e, t) {
            "use strict";

            function n(e) {
                return Object.keys(e).length ? Object.keys(e).reduce(function(t, n) {
                    return r.indexOf(n) !== -1 ? t : (t[n] = e[n], t)
                }, {}) : e
            }
            var r = ["getAttribute", "setAttribute", "toString", "valid", "value", "getLastException", "addEventListener", "removeEventListener", "attachEvent", "detachEvent"];
            e.exports = n
        }, function(e, t) {
            "use strict";

            function n(e) {
                function t(e) {
                    var t = e.replace(a, o + s);
                    return Object.keys(d).forEach(function(e) {
                        var n = d[e];
                        t = t.replace(n, e)
                    }), t
                }

                function n(e) {
                    var t = e;
                    return Object.keys(f).forEach(function(e) {
                        var n = l[e],
                            r = f[e];
                        t = t.replace(r, n)
                    }), t.replace(u, o)
                }
                var c = Object.create(null),
                    l = Object.create(null),
                    d = Object.create(null),
                    f = Object.create(null);
                if (e.length > i.length) throw new Error("Words count must be below " + i.length);
                return e.forEach(function(e, t) {
                    var n = o + i[t];
                    l[n] = e, d[n] = new RegExp(e.replace(r, "\\$&"), "g"), f[n] = new RegExp(n.replace(r, "\\$&"), "g")
                }), c.compress = t, c.decompress = n, c
            }
            var r = /[|\\{}()[\]^$+*?.]/g,
                i = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+",
                o = "~",
                s = "/",
                a = new RegExp(o, "g"),
                u = new RegExp(o + s, "g");
            e.exports = n
        }]);

        /***/
    })
    /******/
]);
