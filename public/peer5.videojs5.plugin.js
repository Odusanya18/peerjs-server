! function(t) {
	function e(r) {
		if (i[r]) return i[r].exports;
		var n = i[r] = {
			exports: {},
			id: r,
			loaded: !1
		};
		return t[r].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
	}
	var i = {};
	return e.m = t, e.c = i, e.p = "/", e(0)
}([function(t, e, i) {
	t.exports = i(146)
}, function(t, e) {
	"use strict";

	function i() {
		function t() {
			var t = r() - a;
			return t < 0 ? 0 : t
		}

		function e() {
			return "Stopwatch(" + t() + "ms)"
		}

		function i() {
			return a
		}
		var n = Object.create(null),
			a = r();
		return n.elapsed = t, n.toString = e, n.epoch = i, n
	}
	var r = function() {
		return Math.floor(performance.now())
	};
	t.exports = i, t.exports.now = r
}, function(t, e) {
	"use strict";

	function i() {
		function t(t, e) {
			var i = window.peer5 && window.peer5.logger && window.peer5.logger[t];
			i && i.apply(window.peer5.logger, e)
		}

		function e() {
			t("info", arguments)
		}

		function i() {
			t("warn", arguments)
		}

		function r() {
			t("error", arguments)
		}
		var n = Object.create(null);
		return n.info = e, n.warn = i, n.error = r, n
	}
	t.exports = i
}, function(t, e, i) {
	"use strict";

	function r() {}

	function n(t, e, i) {
		this.fn = t, this.context = e, this.once = i || !1
	}

	function a(t, e, i, r, a) {
		if ("function" != typeof i) throw new TypeError("The listener must be a function");
		var s = new n(i, r || t, a),
			o = d ? d + e : e;
		return t._events[o] ? t._events[o].fn ? t._events[o] = [t._events[o], s] : t._events[o].push(s) : (t._events[o] = s, t._eventsCount++), t
	}

	function s(t, e) {
		0 === --t._eventsCount ? t._events = new r : delete t._events[e]
	}

	function o() {
		this._events = new r, this._eventsCount = 0
	}
	var u = Object.prototype.hasOwnProperty,
		d = "~";
	Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (d = !1)), o.prototype.eventNames = function() {
		var t, e, i = [];
		if (0 === this._eventsCount) return i;
		for (e in t = this._events) u.call(t, e) && i.push(d ? e.slice(1) : e);
		return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
	}, o.prototype.listeners = function(t) {
		var e = d ? d + t : t,
			i = this._events[e];
		if (!i) return [];
		if (i.fn) return [i.fn];
		for (var r = 0, n = i.length, a = new Array(n); r < n; r++) a[r] = i[r].fn;
		return a
	}, o.prototype.listenerCount = function(t) {
		var e = d ? d + t : t,
			i = this._events[e];
		return i ? i.fn ? 1 : i.length : 0
	}, o.prototype.emit = function(t, e, i, r, n, a) {
		var s = d ? d + t : t;
		if (!this._events[s]) return !1;
		var o, u, l = this._events[s],
			c = arguments.length;
		if (l.fn) {
			switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
				case 1:
					return l.fn.call(l.context), !0;
				case 2:
					return l.fn.call(l.context, e), !0;
				case 3:
					return l.fn.call(l.context, e, i), !0;
				case 4:
					return l.fn.call(l.context, e, i, r), !0;
				case 5:
					return l.fn.call(l.context, e, i, r, n), !0;
				case 6:
					return l.fn.call(l.context, e, i, r, n, a), !0
			}
			for (u = 1, o = new Array(c - 1); u < c; u++) o[u - 1] = arguments[u];
			l.fn.apply(l.context, o)
		} else {
			var f, h = l.length;
			for (u = 0; u < h; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c) {
				case 1:
					l[u].fn.call(l[u].context);
					break;
				case 2:
					l[u].fn.call(l[u].context, e);
					break;
				case 3:
					l[u].fn.call(l[u].context, e, i);
					break;
				case 4:
					l[u].fn.call(l[u].context, e, i, r);
					break;
				default:
					if (!o)
						for (f = 1, o = new Array(c - 1); f < c; f++) o[f - 1] = arguments[f];
					l[u].fn.apply(l[u].context, o)
			}
		}
		return !0
	}, o.prototype.on = function(t, e, i) {
		return a(this, t, e, i, !1)
	}, o.prototype.once = function(t, e, i) {
		return a(this, t, e, i, !0)
	}, o.prototype.removeListener = function(t, e, i, r) {
		var n = d ? d + t : t;
		if (!this._events[n]) return this;
		if (!e) return s(this, n), this;
		var a = this._events[n];
		if (a.fn) a.fn !== e || r && !a.once || i && a.context !== i || s(this, n);
		else {
			for (var o = 0, u = [], l = a.length; o < l; o++)(a[o].fn !== e || r && !a[o].once || i && a[o].context !== i) && u.push(a[o]);
			u.length ? this._events[n] = 1 === u.length ? u[0] : u : s(this, n)
		}
		return this
	}, o.prototype.removeAllListeners = function(t) {
		var e;
		return t ? (e = d ? d + t : t, this._events[e] && s(this, e)) : (this._events = new r, this._eventsCount = 0), this
	}, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = d, o.EventEmitter = o, t.exports = o
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = window.peer5,
			i = e ? e.getConfig("MEDIA_MAX_BUFFER_HOLE") : .5,
			r = n(t.buffered, t.currentTime, i);
		return r.timeAhead
	}
	var n = i(17);
	t.exports = r
}, function(t, e) {
	"use strict";
	t.exports = function(t, e, i) {
		function r(t, e) {
			return n.multiple ? [].slice.call(t.querySelectorAll(e)) : t.querySelector(e)
		}
		var n = i || {},
			a = e;
		return a = "string" == typeof a ? document.getElementById(a) : a, a = a ? a.tagName.toLowerCase() !== t ? r(a, t) : a : r(document, t), n.multiple && (a = Array.isArray(a) ? a : a && [a] || [], a = a.length ? a : null), a
	}
}, function(t, e) {
	"use strict";
	t.exports = function(t, e) {
		var i = t;
		return e && e.ignoreQuery === !1 || (i = (t || "").split("?")[0]), /\.m3u8(\?|#|$)/.test(i) ? "hls" : /\.mpd(\?|#|$)/.test(i) ? "dash" : /^(blob|mediasource):/i.test(i) ? "mse" : /\.(mp4|webm|ogg|ogv)(\?|#|$)/i.test(i) ? "progressive" : ""
	}
}, function(t, e, i) {
	"use strict";

	function r(t) {
		function e() {
			return !t.globalsCondition || t.globalsCondition.every(function(t) {
				return "undefined" != typeof window[t]
			})
		}

		function i() {
			if (!o && !a && (!t.condition || t.condition()) && e()) {
				a = !0, r();
				try {
					t.onConditionsMet()
				} catch (t) {
					n.error("onConditionsMet threw error", t)
				}
			}
		}

		function r() {
			o || (o = !0, clearInterval(s), document.removeEventListener("readystatechange", i), window.removeEventListener("load", i), t.globalsCondition && Object.keys(u).forEach(function(t) {
				var e = u[t],
					i = Object.getOwnPropertyDescriptor(window, t);
				i && i.set === e && delete window[t]
			}))
		}
		var a, s, o, u = {},
			d = t.checkInterval || 1;
		return s = setInterval(i, d), document.addEventListener("readystatechange", i), window.addEventListener("load", i), t.globalsCondition && t.globalsCondition.forEach(function(t) {
			function e(e) {
				delete u[t], Object.defineProperty(window, t, {
					value: e,
					writable: !0,
					configurable: !0,
					enumerable: !0
				}), i()
			}
			"undefined" == typeof window[t] && (u[t] = e, Object.defineProperty(window, t, {
				configurable: !0,
				enumerable: !0,
				set: e
			}))
		}), i(), {
			stop: r
		}
	}
	var n = i(2)();
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t) {
		function e(t, e) {
			h.emit(t, m(t, e))
		}

		function i(t) {
			var e = t && t.tagName && t.tagName.toLowerCase();
			e && /^(video|audio|object|embed)$/.test(e) && (g = e, p = t)
		}

		function r() {
			if ("function" == typeof f.getBufferLength) return f.getBufferLength();
			switch (g) {
				case "video":
				case "audio":
					return s(p);
				case "object":
				case "embed":
					return o(p);
				default:
					return 0
			}
		}

		function n(t) {
			f = d({}, f, t), f.element && i(f.element)
		}

		function c() {
			h.emit("remove"), h.removeAllListeners()
		}
		var f, h = new a;
		h.instanceId = l++;
		var p, g, m = u(h.instanceId);
		return n(t), h.onEvent = e, h.getBufferLength = r, h.useElement = i, h.mergeOptions = n, h.destroy = c, h
	}

	function n(t, e) {
		var i = c[t];
		return i ? e && i.mergeOptions(e) : i = c[t] = r(e), i
	}
	var a = i(3),
		s = i(4),
		o = i(14),
		u = i(15),
		d = i(11),
		l = 1,
		c = {};
	t.exports = n
}, function(t, e, i) {
	"use strict";
	var r = i(5);
	t.exports = function(t) {
		var e, i = t || {};
		return ("string" == typeof t || t instanceof HTMLElement) && (i = {
			id: t
		}), e = r("video", i.id, {
			multiple: i.multiple
		}), i.includeAudioTag && !e && (e = r("audio", i.id, {
			multiple: i.multiple
		})), i.html5Only || e || (e = r("object", i.id, {
			multiple: i.multiple
		})), i.html5Only || e || (e = r("embed", i.id, {
			multiple: i.multiple
		})), e
	}
}, function(t, e, i) {
	"use strict";

	function r(t, e, i) {
		function r(t) {
			p = t, S && S.destroy(), S = d(e, g), y && y.destroy(), y = u(p, function(t) {
				S.stateChanged(t)
			}, g), m && m.destroy(), m = a(p, function(t) {
				S.stateChanged(t)
			}, g), T && T.destroy(), T = l(p, function(t) {
				switch (t) {
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
			}), v && v.destroy(), v = s(p, function(t, i) {
				S.adPlaying || e(t, i)
			}, g), b = o(p, function(t, i) {
				S.adPlaying || e(t, i)
			}), E && (E = !1, S.stateChanged({
				play: !0
			}))
		}

		function c() {
			S ? (E = !1, S.stateChanged({
				play: !0
			})) : E = !0
		}

		function f() {
			S && S.destroy(), y && y.destroy(), m && m.destroy(), v && v.destroy(), b && b.destroy(), T && T.destroy(), clearTimeout(_)
		}

		function h(t, i) {
			i && e("ready");
			var a = n("video", t) || n("audio", t);
			a && r(a)
		}
		var p, g = i || {};
		g.droppedFramesSampleRate = g.droppedFramesSampleRate || 5e3, g.droppedFramesThreshold = g.droppedFramesThreshold || .2, g.bitsDecodedSampleRate = g.bitsDecodedSampleRate || 5e3, g.loadStartMaxDelay = g.loadStartMaxDelay || 4e3;
		var m, y, v, b, _, T, S, E = !1;
		return _ = setTimeout(function() {
			p || h(t, !0)
		}, 0), {
			forceLoadStart: c,
			useElement: h,
			destroy: f
		}
	}
	var n = i(5),
		a = i(26),
		s = i(25),
		o = i(23),
		u = i(22),
		d = i(27),
		l = i(24);
	t.exports = r
}, function(t, e) {
	"use strict";

	function i(t) {
		if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(t)
	}

	function r() {
		try {
			if (!Object.assign) return !1;
			var t = new String("abc");
			if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
			for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
			var r = Object.getOwnPropertyNames(e).map(function(t) {
				return e[t]
			});
			if ("0123456789" !== r.join("")) return !1;
			var n = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(t) {
				n[t] = t
			}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
		} catch (t) {
			return !1
		}
	}
	var n = Object.getOwnPropertySymbols,
		a = Object.prototype.hasOwnProperty,
		s = Object.prototype.propertyIsEnumerable;
	t.exports = r() ? Object.assign : function(t, e) {
		for (var r, o, u = i(t), d = 1; d < arguments.length; d++) {
			r = Object(arguments[d]);
			for (var l in r) a.call(r, l) && (u[l] = r[l]);
			if (n) {
				o = n(r);
				for (var c = 0; c < o.length; c++) s.call(r, o[c]) && (u[o[c]] = r[o[c]])
			}
		}
		return u
	}
}, function(t, e) {
	"use strict";
	t.exports = window.XMLHttpRequest, t.exports.__KEEP__ = !0
}, function(t, e, i) {
	"use strict";

	function r(t) {
		function e() {
			if (d && (d.destroy(), d = null), o && (o.destroy(), o = null), r) {
				var t = r;
				r = null, t.destroy()
			}
		}

		function i(t) {
			u !== t && (u = t, r ? (o.useElement(t), r.useElement(t), r.emit("newMediaElement", {
				tagName: t.tagName.toLowerCase()
			})) : (r = n("videoTag", {
				element: t
			}), window.peer5.attachPlayer(r), r.emit("media.info", {
				vendor: l.vendor || "videoTag",
				tracking: "videoTag",
				provider: l.provider,
				mediaElement: t.tagName.toLowerCase(),
				mediaSrc: t.src || t.currentSrc
			}), r.on("remove", function() {
				r && e()
			}), o = a(t, r.onEvent, {
				allowProgressiveVideos: l.allowProgressiveVideos,
				ignoreQuery: l.ignoreQuery
			})))
		}
		var r, o, u, d, l = t || {};
		return d = s({
			interval: window.peer5.getConfig("VIDEOTAG_SEARCH_INTERVAL"),
			allowProgressiveVideos: l.allowProgressiveVideos,
			ignoreQuery: l.ignoreQuery
		}), d.on("elementDiscovered", i), {
			destroy: e
		}
	}
	var n = i(8),
		a = i(10),
		s = i(19);
	t.exports = r
}, function(t, e) {
	"use strict";
	t.exports = function(t) {
		if (t.getbufferLength) try {
			return t.getbufferLength()
		} catch (t) {}
		if (t.vjs_getProperty) try {
			return (t.vjs_getProperty("buffered") || NaN) - (t.vjs_getProperty("currentTime") || NaN) || 0
		} catch (t) {}
		return 0
	}
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = null,
			i = null,
			r = null,
			a = null,
			s = null,
			o = null,
			u = 0,
			d = 0;
		return function(l, c) {
			var f = {
				action: l,
				id: t
			};
			switch (o = o || n(), l) {
				case "rebuffer.start":
					s = s || n(), u++, e = n(), f.timeSinceLoaded = s.elapsed(), f.occurrence = u;
					break;
				case "rebuffer.end":
					s = s || n(), e && (f.duration = e.elapsed()), f.timeSinceLoaded = s.elapsed(), f.occurrence = u, e = null;
					break;
				case "seek.start":
					s = s || n(), d++, i = n(), f.timeSinceLoaded = s.elapsed(), f.occurrence = d;
					break;
				case "seek.end":
					s = s || n(), i && (f.duration = i.elapsed()), f.timeSinceLoaded = s.elapsed(), f.occurrence = d, i = null;
					break;
				case "load.start":
					var h = c && c.delayed || 0;
					r = r || n(), a = h, f.timeSinceReady = o.elapsed() - h, s && (f.timeSinceLoaded = s.elapsed());
					break;
				case "load.end":
					if (!(s || c && c.ignoreDuration === !0)) {
						var p = r && r.elapsed() + (a || 0);
						a = null, p && (f.duration = p)
					}
					s && (f.timeSinceLoaded = s.elapsed()), s = s || n();
					break;
				case "fps.drop":
				case "fps.drop.raw":
				case "bitsDecoded":
					c && c.count && (f.value = c.count);
					break;
				case "ready":
				case "pause.start":
				case "pause.end":
					break;
				case "error":
					c instanceof Error ? f = c : (f.source = c.source, f.code = c.code, f.message = c.message);
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
	var n = i(1);
	t.exports = r
}, function(t, e) {
	"use strict";

	function i(t) {
		if ("number" == typeof t.webkitDroppedFrameCount) return {
			total: t.webkitDecodedFrameCount,
			dropped: t.webkitDroppedFrameCount
		};
		if ("function" == typeof t.getVideoPlaybackQuality) {
			var e = t.getVideoPlaybackQuality();
			if ("number" == typeof e.droppedVideoFrames) return {
				total: e.totalVideoFrames,
				dropped: e.droppedVideoFrames
			}
		}
		return "number" == typeof t.mozDecodedFrames && "number" == typeof t.mozPresentedFrames ? {
			total: t.mozDecodedFrames,
			dropped: t.mozDecodedFrames - t.mozPresentedFrames
		} : {
			total: 0,
			dropped: 0
		}
	}
	t.exports = i
}, function(t, e) {
	"use strict";

	function i(t) {
		for (var e = [], i = 0; i < t.length; i++) e.push({
			start: t.start(i),
			end: t.end(i)
		});
		return e.sort(function(t, e) {
			var i = t.start - e.start;
			return i ? i : e.end - t.end
		}), e
	}

	function r(t, e) {
		return t.reduce(function(t, i) {
			var r = t.length;
			if (r) {
				var n = t[r - 1];
				if (i.start - n.end < e) return i.end > n.end && (n.end = i.end), t
			}
			return t.push({
				start: i.start,
				end: i.end
			}), t
		}, [])
	}

	function n(t, e, n) {
		for (var a = n || 0, s = e || 0, o = i(t), u = r(o, a), d = {
				rangeStart: 0,
				rangeEnd: 0,
				rangeLength: 0,
				timeAhead: 0
			}, l = 0, c = u.length; l < c; l++) {
			var f = u[l].start,
				h = u[l].end,
				p = Math.ceil(1e3 * s) / 1e3,
				g = Math.ceil(1e3 * f) / 1e3,
				m = Math.ceil(1e3 * h) / 1e3;
			if (p + a >= g && p <= m) {
				d.rangeStart = Math.min(g, p), d.rangeEnd = m, d.rangeLength = m - d.rangeStart, d.timeAhead = m - p;
				break
			}
		}
		return d
	}
	t.exports = n
}, function(t, e) {
	"use strict";

	function i() {
		return window.location.href
	}

	function r() {
		return window.navigator && window.navigator.connection && window.navigator.connection.type
	}

	function n() {
		var t = document.currentScript && document.currentScript.src,
			e = window.performance && window.performance.getEntries && window.performance.getEntries().filter(function(e) {
				return e.name && e.name === t
			})[0];
		return e && e.duration
	}

	function a() {
		return d
	}

	function s() {
		var t;
		return ["hidden", "webkitHidden", "mozHidden", "oHidden", "msHidden"].some(function(e) {
			return e in document && (t = e, !0)
		}), t
	}

	function o() {
		var t;
		return ["visibilityState", "webkitVisibilityState", "mozVisibilityState", "oVisibilityState", "msVisibilityState"].some(function(e) {
			return e in document && (t = e, !0)
		}), t
	}

	function u() {
		var t = s(),
			e = o();
		return {
			hidden: t && document[t],
			visibilityState: e && document[e]
		}
	}
	var d = n();
	e.getLocationHref = i, e.getConnectionType = r, e.getDocumentVisibility = u, e.getLoadTime = a
}, function(t, e, i) {
	"use strict";

	function r(t) {
		function e(t) {
			var e = s(t.currentSrc || t.src, {
				ignoreQuery: d.ignoreQuery
			});
			return "mse" === e || "hls" === e || "dash" === e || !(!d.allowProgressiveVideos || "progressive" !== e)
		}

		function i(t) {
			return (!t.className || t.className.indexOf("hola_video_preview") === -1) && ((!t.previousElementSibling || t.previousElementSibling.className.indexOf("hola_preview_") === -1) && (!t.parentNode || t.parentNode.className.indexOf("hola_preview_") === -1))
		}

		function r(t, e) {
			return !t.paused && e.paused ? -1 : !e.paused && t.paused ? 1 : t.currentTime > e.currentTime ? -1 : e.currentTime > t.currentTime ? 1 : 0
		}

		function o() {
			var t = n({
				html5Only: !0,
				includeAudio: !0,
				multiple: !0
			});
			t && (t = t.filter(e), t = t.filter(i), t.length > 1 && (t = t.sort(r)), t.length && c !== t[0] && (c = t[0], f.emit("elementDiscovered", t[0])))
		}

		function u() {
			clearInterval(l), f.removeAllListeners(), c = null
		}
		var d = t || {};
		d.interval = d.interval || 1e3, d.allowProgressiveVideos = Boolean(d.allowProgressiveVideos);
		var l, c, f = new a;
		return l = setInterval(o, d.interval), f.destroy = u, f
	}
	var n = i(9),
		a = i(3),
		s = i(6);
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r() {
		return !!a() && (!n.isFocused() && !n.isVisible() && !n.isAudioPlaying())
	}
	var n = i(28),
		a = i(29);
	t.exports = r
}, function(t, e) {
	"use strict";

	function i(t) {
		var e = 8 * t.webkitVideoDecodedByteCount || 0,
			i = 8 * t.webkitAudioDecodedByteCount || 0;
		return e || i ? {
			video: e,
			audio: i,
			total: e + i
		} : {
			video: 0,
			audio: 0,
			total: 0
		}
	}
	t.exports = i
}, function(t, e, i) {
	"use strict";

	function r(t, e, i) {
		function r(t) {
			return "progressive" === t && (p || g || m)
		}

		function a() {
			var i = t.currentSrc || t.src;
			if (i) {
				var a = n(i, {
						ignoreQuery: l.ignoreQuery
					}),
					s = f && "hls" === a,
					o = h && "dash" === a,
					u = l.allowProgressiveVideos && r(a),
					c = "mse" === a,
					p = /^(blob|mediasource):(https?(%3A|:)\/\/)[^\/]*youtube\.com\//i.test(i);
				s || o || c && !p || u ? d && (d = !1, e({
					adPlaying: !1
				})) : d || (d = !0, e({
					adPlaying: !0
				}))
			}
		}

		function s() {
			c.forEach(function(e) {
				t.addEventListener(e, a)
			})
		}

		function o() {
			c.forEach(function(e) {
				t.removeEventListener(e, a)
			})
		}

		function u() {
			o()
		}
		var d, l = i || {},
			c = ["abort", "canplay", "canplaythrough", "durationChange", "emptied", "encrypted", "ended", "error", "interruptbegin", "interruptend", "loadeddata", "loadedmetadata", "seeked", "seeking", "volumechange", "waiting", "loadstart", "pause", "play", "playing", "suspend"],
			f = t.canPlayType && (t.canPlayType("application/x-mpegURL") || t.canPlayType("vnd.apple.mpegURL") || t.canPlayType("audio/mpegurl"));
		f = Boolean(f);
		var h = Boolean(t.canPlayType && t.canPlayType("application/dash+xml")),
			p = Boolean(t.canPlayType && t.canPlayType("video/mp4")),
			g = Boolean(t.canPlayType && t.canPlayType("video/webm")),
			m = Boolean(t.canPlayType && t.canPlayType("video/ogg"));
		return s(), a(), {
			destroy: u
		}
	}
	var n = i(6);
	t.exports = r
}, function(t, e) {
	"use strict";

	function i(t, e) {
		function i() {
			var i, n = t.error;
			Object.keys(r).some(function(t) {
				return !(!n || r[t] !== n.code) && (i = t, !0)
			}), e("error", {
				source: "videoTag",
				code: i || "UNKNOWN_ERROR_" + (n && n.code || "UNDEFINED"),
				message: n && n.message || ""
			})
		}

		function n() {
			t.removeEventListener("error", i)
		}
		return t.addEventListener("error", i), {
			destroy: n
		}
	}
	var r = {
		MEDIA_ERR_ABORTED: 1,
		MEDIA_ERR_NETWORK: 2,
		MEDIA_ERR_DECODE: 3,
		MEDIA_ERR_SRC_NOT_SUPPORTED: 4
	};
	t.exports = i
}, function(t, e) {
	"use strict";

	function i(t, e) {
		function i() {
			Object.keys(r).forEach(function(e) {
				t.removeEventListener(e, r[e])
			})
		}
		var r = {
			playing: function() {
				e("playing")
			},
			canplaythrough: function() {
				!t.paused && t.currentTime && e("playing")
			},
			progress: function() {
				!t.paused && t.currentTime && e("playing")
			},
			pause: function() {
				e("pause")
			},
			play: function() {
				e("play")
			}
		};
		return Object.keys(r).forEach(function(e) {
			t.addEventListener(e, r[e])
		}), !t.paused && t.currentTime ? r.playing() : !t.paused && t.autoplay && r.play(), {
			destroy: i
		}
	}
	t.exports = i
}, function(t, e, i) {
	"use strict";

	function r(t, e, i) {
		function r() {
			clearInterval(s), clearInterval(o)
		}
		var s, o, u = {},
			d = {};
		return s = setInterval(function() {
			var r = n(t),
				a = r.total - u.total,
				s = r.dropped - u.dropped;
			s > 0 && e("fps.drop.raw", {
				count: s
			}), a && s > 0 && s / a > i.droppedFramesThreshold && e("fps.drop", {
				count: s
			}), u = r
		}, i.droppedFramesSampleRate), o = setInterval(function() {
			var i = a(t),
				r = i.total - d.total;
			r > 0 && e("bitsDecoded", {
				count: r
			}), d = i
		}, i.bitsDecodedSampleRate), {
			destroy: r
		}
	}
	var n = i(16),
		a = i(21);
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t, e, i) {
		function r() {
			var e = n(t),
				i = !U && F !== e;
			return U = !1, F = e, i
		}

		function o() {
			return !(!t.paused || !G && !q) && r()
		}

		function u() {
			var t = a();
			t && !N ? (N = !0, e({
				background: !0
			})) : !t && N && (N = !1, e({
				background: !1
			}))
		}

		function d() {
			return O && A === O && !R && !k
		}

		function l() {
			return H || (H = A), A - H >= P
		}

		function c() {
			return k
		}

		function f() {
			return B
		}

		function h() {
			return !d() && (j = null, !!G && (c() || f() || l()))
		}

		function p() {
			return !!d() && (H = null, !G && (j || (j = s()), j.elapsed() >= C))
		}

		function g() {
			p() ? (G = !0, j = null, e({
				rebuffering: !0
			})) : h() && (G = !1, H = null, e({
				rebuffering: !1
			}))
		}

		function m() {
			return L && !R
		}

		function y() {
			return W || (W = A), A - W > M
		}

		function v() {
			return B
		}

		function b() {
			return !m() && (V = null, !!q && (v() || y()))
		}

		function _() {
			if (m()) return W = null, !q && (V || (V = s()), V.elapsed() > x)
		}

		function T() {
			_() ? (q = !0, V = null, e({
				seeking: !0
			})) : b() && (q = !1, W = null, e({
				seeking: !1
			}))
		}

		function S() {
			clearInterval(w), w = setInterval(function() {
				t.paused || (U = !0), (!t.paused || G || q) && (A = 1e3 * t.currentTime, R = t.paused, L = t.seeking, k = L || q, B = o(), u(), g(), T(), O = A)
			}, I)
		}

		function E() {
			clearInterval(w)
		}
		var w, A, R, L, k, O, D = i || {},
			I = D.sampleRate || 50,
			C = D.bufferEnterThreshold || 250,
			P = D.bufferExitThreshold || 250,
			x = D.seekEnterThreshold || 250,
			M = D.seekExitThreshold || 100,
			U = !0,
			N = !1,
			F = null,
			B = !1,
			G = !1,
			j = null,
			H = null,
			q = !1,
			V = null,
			W = null;
		return S(), {
			destroy: E
		}
	}
	var n = i(4),
		a = i(20),
		s = i(1);
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		function i(e) {
			if (!d.loaded) {
				var i = e || {},
					r = i.ignoreDuration || !1;
				if (d.loading || !i.cancelIfPossible) {
					if (d.loading || (r = !0), !l && i.cancelIfPossible) return d.loading = !1, u = null, void clearTimeout(o);
					l || (l = !0, clearTimeout(o), t("load.start", {
						delayed: u && u.elapsed() || 0
					})), d.loaded = !0, t("load.end", {
						ignoreDuration: r
					})
				}
			}
		}

		function r() {
			i({
				ignoreDuration: !0,
				cancelIfPossible: !0
			}), d.rebuffering && (d.rebuffering = !1, t("rebuffer.end")), d.seeking && (d.seeking = !1, t("seek.end")), !d.loading && !d.loaded || d.paused || (d.paused = !0, t("pause.start"))
		}

		function a() {
			clearTimeout(o), s({
				adPlaying: !1,
				paused: !0
			})
		}

		function s(t) {
			Object.keys(t).forEach(function(e) {
				f[e](t[e])
			})
		}
		var o, u, d = {
				paused: !1,
				loading: !1,
				loaded: !1,
				rebuffering: !1,
				seeking: !1,
				adPlaying: !1,
				background: !1
			},
			l = !1,
			c = !1,
			f = {
				paused: function(e) {
					d.paused !== Boolean(e) && (d.adPlaying || (e ? r({
						ignoreDuration: !0
					}) : (d.paused = !1, t("pause.end"))))
				},
				play: function(i) {
					d.adPlaying || i && (d.loaded || d.loading !== Boolean(i) && (u = n(), d.loading = !0, o = setTimeout(function() {
						l = !0, t("load.start", {
							delayed: u && u.elapsed() || 0
						})
					}, e.loadStartMaxDelay)))
				},
				playing: function() {
					d.adPlaying || (i(), f.paused(!1))
				},
				adPlaying: function(e) {
					d.adPlaying !== Boolean(e) && (e ? (d.loading && !d.loaded, r(), d.adPlaying = !0, t("ad.start")) : (d.adPlaying = !1, t("ad.end")))
				},
				background: function(e) {
					d.background !== Boolean(e) && (e ? (d.rebuffering && (c = !0, d.rebuffering = !1, t("rebuffer.end")), d.background = !0) : (!d.rebuffering && c && (d.rebuffering = !0, t("rebuffer.start")), d.background = !1))
				},
				rebuffering: function(e) {
					d.rebuffering !== Boolean(e) && (d.adPlaying || (e ? d.background ? c = !0 : (d.rebuffering = !0, t("rebuffer.start")) : d.background ? c = !1 : (d.rebuffering = !1, t("rebuffer.end"))))
				},
				seeking: function(e) {
					d.seeking !== Boolean(e) && (d.adPlaying || (e ? (i({
						ignoreDuration: !0
					}), d.seeking = !0, t("seek.start")) : (d.seeking = !1, t("seek.end"))))
				}
			},
			h = {};
		return Object.keys(d).forEach(function(t) {
			Object.defineProperty(h, t, {
				get: function() {
					return d[t]
				}
			})
		}), h.stateChanged = s, h.destroy = a, h
	}
	var n = i(1);
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r() {
		function t() {
			return "function" == typeof document.hasFocus ? document.hasFocus() : void 0
		}

		function e() {
			var t = n.getDocumentVisibility();
			return "boolean" == typeof t.hidden ? !t.hidden : void 0 !== t.visibilityState ? "visible" === t.visibilityState : void 0
		}

		function i() {
			var t = [].concat([].slice.call(document.querySelectorAll("video")), [].slice.call(document.querySelectorAll("audio")));
			return t.some(function(t) {
				return !t.paused && !t.muted && Boolean(t.played && t.played.length)
			})
		}
		return {
			isFocused: t,
			isVisible: e,
			isAudioPlaying: i
		}
	}
	var n = i(18);
	t.exports = r(), t.exports.factory = r
}, function(t, e) {
	"use strict";

	function i() {
		return Boolean(window.chrome)
	}
	t.exports = i
}, function(t, e, i) {
	"use strict";

	function r(t) {
		o.info("Initializing XHR plugin");
		var e = window.peer5;
		return e.getConfig("DISABLE_PLUGINS") || e.getConfig("DISABLE_UNSUPPORTED") && !e.isSupported() ? void o.warn("Aborting XHR plugin initialization because Peer5 is not supported or disabled") : (window.XMLHttpRequest = e.CatchAllVideoRequest, e.configure({
			abr: "transparent"
		}), e.on && (e.on("destroy", function() {
			window.XMLHttpRequest = s
		}), e.on("init", function() {
			window.XMLHttpRequest = e.CatchAllVideoRequest
		})), a({
			vendor: t && t.vendor
		}), void o.info("Finished XHR plugin initialization"))
	}
	var n = i(7),
		a = i(13),
		s = i(12),
		o = i(2)();
	t.exports = function(t) {
		n({
			onConditionsMet: function() {
				r(t)
			},
			globalsCondition: ["peer5"]
		})
	}
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e;
		this.destroy = function() {
			e && e.destroy()
		}, this.abort = function() {
			e && e.abort()
		}, this.load = function() {
			e = 3 === arguments.length ? new a(t) : new n(t), e.load.apply(e, arguments), this.context = e.context, this.stats = e.stats, this.frag = e.frag
		}
	}
	var n = i(32),
		a = i(33);
	t.exports = r
}, function(t, e) {
	"use strict";

	function i(t, e, i, r) {
		var n = Math.max(i, r() - window.peer5.getConfig("MINIMUM_HTTP_CONSTRAINT"));
		[e, t].forEach(function(e) {
			Object.defineProperty(e, "trequest", {
				configurable: !0,
				set: function() {},
				get: function() {
					return t._delay ? performance.now() - t._delay : n
				}
			})
		})
	}

	function r(t, e) {
		if (t.currentTarget.getSpeed) {
			var i = e,
				r = t.currentTarget.getSpeed();
			r && (i._delay = 1e3 * (t.loaded / r), i.tfirst = i.trequest)
		}
	}

	function n(t, e) {
		var i = "arraybuffer" !== e.responseType,
			r = i && window.peer5.getConfig("MEDIA_MANIFEST_TIMEOUT"),
			n = e._constraint && e._constraint(),
			a = Math.max(n, t),
			s = Math.min(a, window.peer5.getConfig("DYNAMIC_FRAGMENT_TIMEOUT"));
		return r || s || t
	}

	function a(t) {
		t && t.xhrSetup && (this.xhrSetup = t.xhrSetup), this.destroy = function() {
			this.abort(), this.loader = null
		}, this.abort = function() {
			var t = this.loader;
			t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
		}, this.load = function(t, e, i, r, n, a, s, o, u, d) {
			this.url = t, !d || Number.isNaN(d.byteRangeStartOffset) || Number.isNaN(d.byteRangeEndOffset) || (this.byteRange = d.byteRangeStartOffset + "-" + (d.byteRangeEndOffset - 1)), this.responseType = e, this.onSuccess = i, this.onProgress = u, this.onTimeout = n, this.onError = r, this._trequest = performance.now(), this.stats = {
				trequest: this._trequest,
				retry: 0
			}, this.timeout = a, this.maxRetry = s, this.retryDelay = o, this.frag = d, this.loadInternal()
		}, this.loadInternal = function() {
			var t;
			t = "arraybuffer" === this.responseType ? this.loader = new window.peer5.FragmentRequest : this.loader = new window.peer5.PlaylistRequest, t.onprogress = this.loadprogress.bind(this), t.onloadend = this.loadend.bind(this), t.open("GET", this.url, !0), this.byteRange && t.setRequestHeader("Range", "bytes=" + this.byteRange), t.responseType = this.responseType;
			var e = this.stats;
			e.tfirst = 0, e.loaded = 0, this.xhrSetup && this.xhrSetup(t, this.url), t.send();
			var r = n(this.timeout, t);
			t._timeout = r, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), r), t._constraint && window.peer5.getConfig("MEDIA_HLSJS_OVERRIDE") && i(e, this.frag, this._trequest, t._constraint)
		}, this.loadend = function(t) {
			var e = t.currentTarget,
				i = e.status,
				n = this.stats;
			n.aborted || (window.clearTimeout(this.requestTimeout), i >= 200 && i < 300 ? (window.peer5.getConfig("MEDIA_HLSJS_OVERRIDE") && r(t, n), n.tload = Math.max(n.tfirst, performance.now()), this.onSuccess(t, n)) : n.retry >= this.maxRetry || i >= 400 && i < 499 ? this.onError(t) : (this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, 64e3), n.retry++))
		}, this.loadtimeout = function(t) {
			this.onTimeout(t, this.stats)
		}, this.loadprogress = function(t) {
			var e = this.stats;
			t.loadedHTTP > 0 && window.peer5.getConfig("MEDIA_HLSJS_OVERRIDE") && r(t, e), 0 === e.tfirst && (e.tfirst = Math.max(performance.now(), e.trequest)), e.loaded = t.loaded, this.onProgress && this.onProgress(t, e)
		}
	}
	t.exports = a
}, function(t, e) {
	"use strict";

	function i(t, e, i) {
		var r = Math.max(e, i() - window.peer5.getConfig("MINIMUM_HTTP_CONSTRAINT"));
		Object.defineProperty(t, "trequest", {
			configurable: !0,
			set: function() {},
			get: function() {
				return t._delay ? performance.now() - t._delay : r
			}
		})
	}

	function r(t, e) {
		if (t.currentTarget.getSpeed) {
			var i = t.currentTarget.getSpeed();
			i && (e._delay = 1e3 * (t.loaded / i), e.tfirst = e.trequest)
		}
	}

	function n(t, e) {
		var i = "arraybuffer" !== e.responseType,
			r = i && window.peer5.getConfig("MEDIA_MANIFEST_TIMEOUT"),
			n = e._constraint && e._constraint(),
			a = Math.max(n, t),
			s = Math.min(a, window.peer5.getConfig("DYNAMIC_FRAGMENT_TIMEOUT"));
		return r || s || t
	}

	function a(t) {
		t && t.xhrSetup && (this.xhrSetup = t.xhrSetup), this.destroy = function() {
			this.abort(), this.loader = null
		}, this.abort = function() {
			var t = this.loader;
			t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
		}, this.load = function(t, e, i) {
			this.context = t, this.config = e, this.callbacks = i, this.trequest = performance.now(), this.stats = {
				trequest: this.trequest,
				retry: 0
			}, this.retryDelay = e.retryDelay, this.loadInternal()
		}, this.loadInternal = function() {
			var t, e = this.context;
			t = "arraybuffer" === e.responseType ? this.loader = new window.peer5.FragmentRequest : this.loader = new window.peer5.PlaylistRequest;
			var r = this.stats;
			r.tfirst = 0, r.loaded = 0, t.getSpeed && window.peer5.getConfig("ALWAYS_OVERRIDE_BW") && (r.bw = t.getSpeed());
			var a = this.xhrSetup;
			try {
				if (a) try {
					a(t, e.url)
				} catch (i) {
					t.open("GET", e.url, !0), a(t, e.url)
				}
				t.readyState || t.open("GET", e.url, !0)
			} catch (i) {
				return void this.callbacks.onError({
					code: t.status,
					text: i.message
				}, e)
			}
			e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, t.send();
			var s = n(this.config.timeout, t);
			t._timeout = s, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), s), t._constraint && window.peer5.getConfig("MEDIA_HLSJS_OVERRIDE") && i(r, this.trequest, t._constraint)
		}, this.readystatechange = function(t) {
			var e = t.currentTarget,
				i = e.readyState,
				a = this.stats,
				s = this.context,
				o = this.config;
			if (!a.aborted && i >= 2)
				if (window.clearTimeout(this.requestTimeout), 0 === a.tfirst && (a.tfirst = Math.max(performance.now(), a.trequest)), 4 === i) {
					var u = e.status;
					if (u >= 200 && u < 300) {
						window.peer5.getConfig("MEDIA_HLSJS_OVERRIDE") && r(t, a), a.tload = Math.max(a.tfirst, performance.now());
						var d, l;
						"arraybuffer" === s.responseType ? (d = e.response, l = d.byteLength) : (d = e.responseText, l = d.length), e.getSpeed && (a.bw = e.getSpeed()), a.loaded = a.total = l;
						var c = {
							url: e.responseURL || s.url,
							data: d
						};
						this.callbacks.onSuccess(c, a, s, e)
					} else a.retry >= o.maxRetry || u >= 400 && u < 499 ? this.callbacks.onError({
						code: u,
						text: e.statusText
					}, s, e) : (this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, o.maxRetryDelay), a.retry++)
				} else {
					var f = n(this.config.timeout, e);
					e._timeout = f, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), f || o.timeout)
				}
		}, this.loadtimeout = function() {
			this.callbacks.onTimeout(this.stats, this.context, null)
		}, this.loadprogress = function(t) {
			var e = t.currentTarget,
				i = this.stats;
			t.loadedHTTP > 0 && window.peer5.getConfig("MEDIA_HLSJS_OVERRIDE") && r(t, i), i.loaded = t.loaded, e.getSpeed && (i.bw = e.getSpeed()), t.lengthComputable && (i.total = t.total);
			var n = this.callbacks.onProgress;
			n && n(i, this.context, null, e)
		}
	}
	t.exports = a
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = window.peer5,
			i = t.DefaultConfig;
		i.fLoader = n, i.pLoader = n, i.maxBufferLength = i.maxMaxBufferLength = e.getConfig("MEDIA_MAXBUFFER"), i.maxBufferHole = e.getConfig("MEDIA_MAX_BUFFER_HOLE"), i.maxSeekHole = e.getConfig("MEDIA_MAX_SEEK_HOLE"), i.manifestLoadingTimeOut = e.getConfig("MEDIA_MANIFEST_TIMEOUT"), i.manifestLoadingMaxRetry = e.getConfig("MEDIA_MANIFEST_RETRIES"), i.manifestLoadingRetryDelay = e.getConfig("MEDIA_MANIFEST_RETRY_DELAY"), i.levelLoadingTimeOut = e.getConfig("MEDIA_LEVEL_TIMEOUT"), i.levelLoadingMaxRetry = e.getConfig("MEDIA_LEVEL_RETRIES"), i.levelLoadingRetryDelay = e.getConfig("MEDIA_LEVEL_RETRY_DELAY"), i.fragLoadingTimeOut = e.getConfig("MEDIA_FRAGMENT_TIMEOUT"), i.fragLoadingMaxRetry = e.getConfig("MEDIA_FRAGMENT_RETRIES"), i.fragLoadingRetryDelay = e.getConfig("MEDIA_FRAGMENT_RETRY_DELAY"), i.debug = e.getConfig("MEDIA_HLSJS_DEBUG"), t.DefaultConfig = i
	}
	var n = i(31);
	t.exports = r
}, function(t, e) {
	"use strict";

	function i(t, e, i) {
		e.on(t.Events.ERROR, function(e, r) {
			var n;
			Object.keys(t.ErrorTypes).some(function(e) {
				return t.ErrorTypes[e] === r.type && (n = e, !0)
			});
			var a;
			if (Object.keys(t.ErrorDetails).some(function(e) {
					return t.ErrorDetails[e] === r.details && (a = e, !0)
				}), n || a) {
				var s = n ? n.replace("_ERROR", "") + "_" : "",
					o = a || "ERROR",
					u = r.fatal ? "_FATAL" : "",
					d = s + o + u;
				i("error", {
					source: "hlsjs",
					code: d
				})
			}
		});
		var r = !1;
		e.on(t.Events.FRAG_LOAD_EMERGENCY_ABORTED, function() {
			r = !0, i("error", {
				source: "hlsjs",
				code: "EMERGENCY_SWITCH"
			})
		});
		var n = !0;
		e.on(t.Events.LEVEL_SWITCHED, function() {
			return n ? void(n = !1) : r ? void(r = !1) : void(e.autoLevelEnabled && i("error", {
				source: "hlsjs",
				code: "ABR_SWITCH"
			}))
		})
	}
	t.exports = i
}, function(t, e) {
	! function(i, r) {
		"object" == typeof e && "object" == typeof t ? t.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof e ? e.Hls = r() : i.Hls = r()
	}(this, function() {
		return function(t) {
			function e(r) {
				if (i[r]) return i[r].exports;
				var n = i[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
			}
			var i = {};
			return e.m = t, e.c = i, e.d = function(t, i, r) {
				e.o(t, i) || Object.defineProperty(t, i, {
					configurable: !1,
					enumerable: !0,
					get: r
				})
			}, e.n = function(t) {
				var i = t && t.__esModule ? function() {
					return t.default
				} : function() {
					return t
				};
				return e.d(i, "a", i), i
			}, e.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}, e.p = "/dist/", e(e.s = 8)
		}([function(t, e, i) {
			"use strict";

			function r() {}

			function n(t, e) {
				return e = "[" + t + "] > " + e
			}

			function a(t) {
				var e = self.console[t];
				return e ? function() {
					for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
					r[0] && (r[0] = n(t, r[0])), e.apply(self.console, r)
				} : r
			}

			function s(t) {
				for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
				i.forEach(function(e) {
					d[e] = t[e] ? t[e].bind(t) : a(e)
				})
			}
			i.d(e, "a", function() {
				return l
			}), i.d(e, "b", function() {
				return c
			});
			var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				u = {
					trace: r,
					debug: r,
					log: r,
					warn: r,
					info: r,
					error: r
				},
				d = u,
				l = function(t) {
					if (t === !0 || "object" === ("undefined" == typeof t ? "undefined" : o(t))) {
						s(t, "debug", "log", "info", "warn", "error");
						try {
							d.log()
						} catch (t) {
							d = u
						}
					} else d = u
				},
				c = d
		}, function(t, e, i) {
			"use strict";
			e.a = {
				MEDIA_ATTACHING: "hlsMediaAttaching",
				MEDIA_ATTACHED: "hlsMediaAttached",
				MEDIA_DETACHING: "hlsMediaDetaching",
				MEDIA_DETACHED: "hlsMediaDetached",
				BUFFER_RESET: "hlsBufferReset",
				BUFFER_CODECS: "hlsBufferCodecs",
				BUFFER_CREATED: "hlsBufferCreated",
				BUFFER_APPENDING: "hlsBufferAppending",
				BUFFER_APPENDED: "hlsBufferAppended",
				BUFFER_EOS: "hlsBufferEos",
				BUFFER_FLUSHING: "hlsBufferFlushing",
				BUFFER_FLUSHED: "hlsBufferFlushed",
				MANIFEST_LOADING: "hlsManifestLoading",
				MANIFEST_LOADED: "hlsManifestLoaded",
				MANIFEST_PARSED: "hlsManifestParsed",
				LEVEL_SWITCH: "hlsLevelSwitch",
				LEVEL_SWITCHING: "hlsLevelSwitching",
				LEVEL_SWITCHED: "hlsLevelSwitched",
				LEVEL_LOADING: "hlsLevelLoading",
				LEVEL_LOADED: "hlsLevelLoaded",
				LEVEL_UPDATED: "hlsLevelUpdated",
				LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
				AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
				AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
				AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
				AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
				AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
				AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
				SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
				SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
				SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
				SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
				SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
				INIT_PTS_FOUND: "hlsInitPtsFound",
				FRAG_LOADING: "hlsFragLoading",
				FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
				FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
				FRAG_LOADED: "hlsFragLoaded",
				FRAG_DECRYPTED: "hlsFragDecrypted",
				FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
				FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
				FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
				FRAG_PARSING_DATA: "hlsFragParsingData",
				FRAG_PARSED: "hlsFragParsed",
				FRAG_BUFFERED: "hlsFragBuffered",
				FRAG_CHANGED: "hlsFragChanged",
				FPS_DROP: "hlsFpsDrop",
				FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
				ERROR: "hlsError",
				DESTROYING: "hlsDestroying",
				KEY_LOADING: "hlsKeyLoading",
				KEY_LOADED: "hlsKeyLoaded",
				STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
			}
		}, function(t, e, i) {
			"use strict";
			i.d(e, "b", function() {
				return r
			}), i.d(e, "a", function() {
				return n
			});
			var r = {
					NETWORK_ERROR: "networkError",
					MEDIA_ERROR: "mediaError",
					MUX_ERROR: "muxError",
					OTHER_ERROR: "otherError"
				},
				n = {
					MANIFEST_LOAD_ERROR: "manifestLoadError",
					MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
					MANIFEST_PARSING_ERROR: "manifestParsingError",
					MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
					LEVEL_LOAD_ERROR: "levelLoadError",
					LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
					LEVEL_SWITCH_ERROR: "levelSwitchError",
					AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
					AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
					FRAG_LOAD_ERROR: "fragLoadError",
					FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
					FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
					FRAG_DECRYPT_ERROR: "fragDecryptError",
					FRAG_PARSING_ERROR: "fragParsingError",
					REMUX_ALLOC_ERROR: "remuxAllocError",
					KEY_LOAD_ERROR: "keyLoadError",
					KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
					BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
					BUFFER_APPEND_ERROR: "bufferAppendError",
					BUFFER_APPENDING_ERROR: "bufferAppendingError",
					BUFFER_STALLED_ERROR: "bufferStalledError",
					BUFFER_FULL_ERROR: "bufferFullError",
					BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
					BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
					INTERNAL_EXCEPTION: "internalException"
				}
		}, function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			i.d(e, "b", function() {
				return a
			});
			var n = function() {
					function t() {
						r(this, t)
					}
					return t.isHeader = function(t, e) {
						return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
					}, t.isFooter = function(t, e) {
						return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
					}, t.getID3Data = function(e, i) {
						for (var r = i, n = 0; t.isHeader(e, i);) {
							n += 10;
							var a = t._readSize(e, i + 6);
							n += a, t.isFooter(e, i + 10) && (n += 10), i += n
						}
						if (n > 0) return e.subarray(r, r + n)
					}, t._readSize = function(t, e) {
						var i = 0;
						return i = (127 & t[e]) << 21, i |= (127 & t[e + 1]) << 14, i |= (127 & t[e + 2]) << 7, i |= 127 & t[e + 3]
					}, t.getTimeStamp = function(e) {
						for (var i = t.getID3Frames(e), r = 0; r < i.length; r++) {
							var n = i[r];
							if (t.isTimeStampFrame(n)) return t._readTimeStamp(n)
						}
					}, t.isTimeStampFrame = function(t) {
						return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
					}, t._getFrameData = function(e) {
						var i = String.fromCharCode(e[0], e[1], e[2], e[3]),
							r = t._readSize(e, 4),
							n = 10;
						return {
							type: i,
							size: r,
							data: e.subarray(n, n + r)
						}
					}, t.getID3Frames = function(e) {
						for (var i = 0, r = []; t.isHeader(e, i);) {
							var n = t._readSize(e, i + 6);
							i += 10;
							for (var a = i + n; i + 8 < a;) {
								var s = t._getFrameData(e.subarray(i)),
									o = t._decodeFrame(s);
								o && r.push(o), i += s.size + 10
							}
							t.isFooter(e, i) && (i += 10)
						}
						return r
					}, t._decodeFrame = function(e) {
						return "PRIV" === e.type ? t._decodePrivFrame(e) : "T" === e.type[0] ? t._decodeTextFrame(e) : "W" === e.type[0] ? t._decodeURLFrame(e) : void 0
					}, t._readTimeStamp = function(t) {
						if (8 === t.data.byteLength) {
							var e = new Uint8Array(t.data),
								i = 1 & e[3],
								r = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
							return r /= 45, i && (r += 47721858.84), Math.round(r)
						}
					}, t._decodePrivFrame = function(e) {
						if (!(e.size < 2)) {
							var i = t._utf8ArrayToStr(e.data, !0),
								r = new Uint8Array(e.data.subarray(i.length + 1));
							return {
								key: e.type,
								info: i,
								data: r.buffer
							}
						}
					}, t._decodeTextFrame = function(e) {
						if (!(e.size < 2)) {
							if ("TXXX" === e.type) {
								var i = 1,
									r = t._utf8ArrayToStr(e.data.subarray(i));
								i += r.length + 1;
								var n = t._utf8ArrayToStr(e.data.subarray(i));
								return {
									key: e.type,
									info: r,
									data: n
								}
							}
							var a = t._utf8ArrayToStr(e.data.subarray(1));
							return {
								key: e.type,
								data: a
							}
						}
					}, t._decodeURLFrame = function(e) {
						if ("WXXX" === e.type) {
							if (e.size < 2) return;
							var i = 1,
								r = t._utf8ArrayToStr(e.data.subarray(i));
							i += r.length + 1;
							var n = t._utf8ArrayToStr(e.data.subarray(i));
							return {
								key: e.type,
								info: r,
								data: n
							}
						}
						var a = t._utf8ArrayToStr(e.data);
						return {
							key: e.type,
							data: a
						}
					}, t._utf8ArrayToStr = function(t) {
						for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = t.length, r = void 0, n = void 0, a = void 0, s = "", o = 0; o < i;) {
							if (r = t[o++], 0 === r && e) return s;
							if (0 !== r && 3 !== r) switch (r >> 4) {
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
								case 6:
								case 7:
									s += String.fromCharCode(r);
									break;
								case 12:
								case 13:
									n = t[o++], s += String.fromCharCode((31 & r) << 6 | 63 & n);
									break;
								case 14:
									n = t[o++], a = t[o++], s += String.fromCharCode((15 & r) << 12 | (63 & n) << 6 | (63 & a) << 0)
							}
						}
						return s
					}, t
				}(),
				a = n._utf8ArrayToStr;
			e.a = n
		}, function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function a(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function s(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var o = function() {
					function t(e, i) {
						r(this, t), this.subtle = e, this.aesIV = i
					}
					return t.prototype.decrypt = function(t, e) {
						return this.subtle.decrypt({
							name: "AES-CBC",
							iv: this.aesIV
						}, e, t)
					}, t
				}(),
				u = o,
				d = function() {
					function t(e, i) {
						n(this, t), this.subtle = e, this.key = i
					}
					return t.prototype.expandKey = function() {
						return this.subtle.importKey("raw", this.key, {
							name: "AES-CBC"
						}, !1, ["encrypt", "decrypt"])
					}, t
				}(),
				l = d,
				c = function() {
					function t() {
						a(this, t), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
					}
					return t.prototype.uint8ArrayToUint32Array_ = function(t) {
						for (var e = new DataView(t), i = new Uint32Array(4), r = 0; r < 4; r++) i[r] = e.getUint32(4 * r);
						return i
					}, t.prototype.initTable = function() {
						var t = this.sBox,
							e = this.invSBox,
							i = this.subMix,
							r = i[0],
							n = i[1],
							a = i[2],
							s = i[3],
							o = this.invSubMix,
							u = o[0],
							d = o[1],
							l = o[2],
							c = o[3],
							f = new Uint32Array(256),
							h = 0,
							p = 0,
							g = 0;
						for (g = 0; g < 256; g++) g < 128 ? f[g] = g << 1 : f[g] = g << 1 ^ 283;
						for (g = 0; g < 256; g++) {
							var m = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
							m = m >>> 8 ^ 255 & m ^ 99, t[h] = m, e[m] = h;
							var y = f[h],
								v = f[y],
								b = f[v],
								_ = 257 * f[m] ^ 16843008 * m;
							r[h] = _ << 24 | _ >>> 8, n[h] = _ << 16 | _ >>> 16, a[h] = _ << 8 | _ >>> 24, s[h] = _, _ = 16843009 * b ^ 65537 * v ^ 257 * y ^ 16843008 * h, u[m] = _ << 24 | _ >>> 8, d[m] = _ << 16 | _ >>> 16, l[m] = _ << 8 | _ >>> 24, c[m] = _, h ? (h = y ^ f[f[f[b ^ y]]], p ^= f[f[p]]) : h = p = 1
						}
					}, t.prototype.expandKey = function(t) {
						for (var e = this.uint8ArrayToUint32Array_(t), i = !0, r = 0; r < e.length && i;) i = e[r] === this.key[r], r++;
						if (!i) {
							this.key = e;
							var n = this.keySize = e.length;
							if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
							var a = this.ksRows = 4 * (n + 6 + 1),
								s = void 0,
								o = void 0,
								u = this.keySchedule = new Uint32Array(a),
								d = this.invKeySchedule = new Uint32Array(a),
								l = this.sBox,
								c = this.rcon,
								f = this.invSubMix,
								h = f[0],
								p = f[1],
								g = f[2],
								m = f[3],
								y = void 0,
								v = void 0;
							for (s = 0; s < a; s++) s < n ? y = u[s] = e[s] : (v = y, s % n === 0 ? (v = v << 8 | v >>> 24, v = l[v >>> 24] << 24 | l[v >>> 16 & 255] << 16 | l[v >>> 8 & 255] << 8 | l[255 & v], v ^= c[s / n | 0] << 24) : n > 6 && s % n === 4 && (v = l[v >>> 24] << 24 | l[v >>> 16 & 255] << 16 | l[v >>> 8 & 255] << 8 | l[255 & v]), u[s] = y = (u[s - n] ^ v) >>> 0);
							for (o = 0; o < a; o++) s = a - o, v = 3 & o ? u[s] : u[s - 4], o < 4 || s <= 4 ? d[o] = v : d[o] = h[l[v >>> 24]] ^ p[l[v >>> 16 & 255]] ^ g[l[v >>> 8 & 255]] ^ m[l[255 & v]], d[o] = d[o] >>> 0
						}
					}, t.prototype.networkToHostOrderSwap = function(t) {
						return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
					}, t.prototype.decrypt = function(t, e, i) {
						for (var r, n, a = this.keySize + 6, s = this.invKeySchedule, o = this.invSBox, u = this.invSubMix, d = u[0], l = u[1], c = u[2], f = u[3], h = this.uint8ArrayToUint32Array_(i), p = h[0], g = h[1], m = h[2], y = h[3], v = new Int32Array(t), b = new Int32Array(v.length), _ = void 0, T = void 0, S = void 0, E = void 0, w = void 0, A = void 0, R = void 0, L = void 0, k = void 0, O = void 0, D = void 0, I = void 0, C = this.networkToHostOrderSwap; e < v.length;) {
							for (k = C(v[e]), O = C(v[e + 1]), D = C(v[e + 2]), I = C(v[e + 3]), w = k ^ s[0], A = I ^ s[1], R = D ^ s[2], L = O ^ s[3], r = 4, n = 1; n < a; n++) _ = d[w >>> 24] ^ l[A >> 16 & 255] ^ c[R >> 8 & 255] ^ f[255 & L] ^ s[r], T = d[A >>> 24] ^ l[R >> 16 & 255] ^ c[L >> 8 & 255] ^ f[255 & w] ^ s[r + 1], S = d[R >>> 24] ^ l[L >> 16 & 255] ^ c[w >> 8 & 255] ^ f[255 & A] ^ s[r + 2], E = d[L >>> 24] ^ l[w >> 16 & 255] ^ c[A >> 8 & 255] ^ f[255 & R] ^ s[r + 3], w = _, A = T, R = S, L = E, r += 4;
							_ = o[w >>> 24] << 24 ^ o[A >> 16 & 255] << 16 ^ o[R >> 8 & 255] << 8 ^ o[255 & L] ^ s[r], T = o[A >>> 24] << 24 ^ o[R >> 16 & 255] << 16 ^ o[L >> 8 & 255] << 8 ^ o[255 & w] ^ s[r + 1], S = o[R >>> 24] << 24 ^ o[L >> 16 & 255] << 16 ^ o[w >> 8 & 255] << 8 ^ o[255 & A] ^ s[r + 2], E = o[L >>> 24] << 24 ^ o[w >> 16 & 255] << 16 ^ o[A >> 8 & 255] << 8 ^ o[255 & R] ^ s[r + 3], r += 3, b[e] = C(_ ^ p), b[e + 1] = C(E ^ g), b[e + 2] = C(S ^ m), b[e + 3] = C(T ^ y), p = k, g = O, m = D, y = I, e += 4
						}
						return b.buffer
					}, t.prototype.destroy = function() {
						this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
					}, t
				}(),
				f = c,
				h = i(2),
				p = i(0),
				g = function() {
					function t(e, i) {
						s(this, t), this.observer = e, this.config = i, this.logEnabled = !0;
						try {
							var r = crypto ? crypto : self.crypto;
							this.subtle = r.subtle || r.webkitSubtle
						} catch (t) {}
						this.disableWebCrypto = !this.subtle
					}
					return t.prototype.isSync = function() {
						return this.disableWebCrypto && this.config.enableSoftwareAES
					}, t.prototype.decrypt = function(t, e, i, r) {
						var n = this;
						if (this.disableWebCrypto && this.config.enableSoftwareAES) {
							this.logEnabled && (p.b.log("JS AES decrypt"), this.logEnabled = !1);
							var a = this.decryptor;
							a || (this.decryptor = a = new f), a.expandKey(e), r(a.decrypt(t, 0, i))
						} else {
							this.logEnabled && (p.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
							var s = this.subtle;
							this.key !== e && (this.key = e, this.fastAesKey = new l(s, e)), this.fastAesKey.expandKey().then(function(a) {
								var o = new u(s, i);
								o.decrypt(t, a).catch(function(a) {
									n.onWebCryptoError(a, t, e, i, r)
								}).then(function(t) {
									r(t)
								})
							}).catch(function(a) {
								n.onWebCryptoError(a, t, e, i, r)
							})
						}
					}, t.prototype.onWebCryptoError = function(t, e, i, r, n) {
						this.config.enableSoftwareAES ? (p.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(e, i, r, n)) : (p.b.error("decrypting error : " + t.message), this.observer.trigger(Event.ERROR, {
							type: h.b.MEDIA_ERROR,
							details: h.a.FRAG_DECRYPT_ERROR,
							fatal: !0,
							reason: t.message
						}))
					}, t.prototype.destroy = function() {
						var t = this.decryptor;
						t && (t.destroy(), this.decryptor = void 0)
					}, t
				}();
			e.a = g
		}, function(t, e) {
			function i() {
				this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
			}

			function r(t) {
				return "function" == typeof t
			}

			function n(t) {
				return "number" == typeof t
			}

			function a(t) {
				return "object" == typeof t && null !== t
			}

			function s(t) {
				return void 0 === t
			}
			t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(t) {
				if (!n(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
				return this._maxListeners = t, this
			}, i.prototype.emit = function(t) {
				var e, i, n, o, u, d;
				if (this._events || (this._events = {}), "error" === t && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
					if (e = arguments[1], e instanceof Error) throw e;
					var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");
					throw l.context = e, l
				}
				if (i = this._events[t], s(i)) return !1;
				if (r(i)) switch (arguments.length) {
					case 1:
						i.call(this);
						break;
					case 2:
						i.call(this, arguments[1]);
						break;
					case 3:
						i.call(this, arguments[1], arguments[2]);
						break;
					default:
						o = Array.prototype.slice.call(arguments, 1), i.apply(this, o)
				} else if (a(i))
					for (o = Array.prototype.slice.call(arguments, 1), d = i.slice(), n = d.length, u = 0; u < n; u++) d[u].apply(this, o);
				return !0
			}, i.prototype.addListener = function(t, e) {
				var n;
				if (!r(e)) throw TypeError("listener must be a function");
				return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? a(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, a(this._events[t]) && !this._events[t].warned && (n = s(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[t].length > n && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace())), this
			}, i.prototype.on = i.prototype.addListener, i.prototype.once = function(t, e) {
				function i() {
					this.removeListener(t, i), n || (n = !0, e.apply(this, arguments))
				}
				if (!r(e)) throw TypeError("listener must be a function");
				var n = !1;
				return i.listener = e, this.on(t, i), this
			}, i.prototype.removeListener = function(t, e) {
				var i, n, s, o;
				if (!r(e)) throw TypeError("listener must be a function");
				if (!this._events || !this._events[t]) return this;
				if (i = this._events[t], s = i.length, n = -1, i === e || r(i.listener) && i.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
				else if (a(i)) {
					for (o = s; o-- > 0;)
						if (i[o] === e || i[o].listener && i[o].listener === e) {
							n = o;
							break
						}
					if (n < 0) return this;
					1 === i.length ? (i.length = 0, delete this._events[t]) : i.splice(n, 1), this._events.removeListener && this.emit("removeListener", t, e)
				}
				return this
			}, i.prototype.removeAllListeners = function(t) {
				var e, i;
				if (!this._events) return this;
				if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
				if (0 === arguments.length) {
					for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
					return this.removeAllListeners("removeListener"), this._events = {}, this
				}
				if (i = this._events[t], r(i)) this.removeListener(t, i);
				else if (i)
					for (; i.length;) this.removeListener(t, i[i.length - 1]);
				return delete this._events[t], this
			}, i.prototype.listeners = function(t) {
				var e;
				return e = this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
			}, i.prototype.listenerCount = function(t) {
				if (this._events) {
					var e = this._events[t];
					if (r(e)) return 1;
					if (e) return e.length
				}
				return 0
			}, i.listenerCount = function(t, e) {
				return t.listenerCount(e)
			}
		}, function(t, e, i) {
			! function(e) {
				var i = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
					r = /^([^\/;?#]*)(.*)$/,
					n = /(?:\/|^)\.(?=\/)/g,
					a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
					s = {
						buildAbsoluteURL: function(t, e, i) {
							if (i = i || {}, t = t.trim(), e = e.trim(), !e) {
								if (!i.alwaysNormalize) return t;
								var n = this.parseURL(t);
								if (!o) throw new Error("Error trying to parse base URL.");
								return n.path = s.normalizePath(n.path), s.buildURLFromParts(n)
							}
							var a = this.parseURL(e);
							if (!a) throw new Error("Error trying to parse relative URL.");
							if (a.scheme) return i.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : e;
							var o = this.parseURL(t);
							if (!o) throw new Error("Error trying to parse base URL.");
							if (!o.netLoc && o.path && "/" !== o.path[0]) {
								var u = r.exec(o.path);
								o.netLoc = u[1], o.path = u[2]
							}
							o.netLoc && !o.path && (o.path = "/");
							var d = {
								scheme: o.scheme,
								netLoc: a.netLoc,
								path: null,
								params: a.params,
								query: a.query,
								fragment: a.fragment
							};
							if (!a.netLoc && (d.netLoc = o.netLoc, "/" !== a.path[0]))
								if (a.path) {
									var l = o.path,
										c = l.substring(0, l.lastIndexOf("/") + 1) + a.path;
									d.path = s.normalizePath(c)
								} else d.path = o.path, a.params || (d.params = o.params, a.query || (d.query = o.query));
							return null === d.path && (d.path = i.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(d)
						},
						parseURL: function(t) {
							var e = i.exec(t);
							return e ? {
								scheme: e[1] || "",
								netLoc: e[2] || "",
								path: e[3] || "",
								params: e[4] || "",
								query: e[5] || "",
								fragment: e[6] || ""
							} : null
						},
						normalizePath: function(t) {
							for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(a, "")).length;);
							return t.split("").reverse().join("")
						},
						buildURLFromParts: function(t) {
							return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
						}
					};
				t.exports = s
			}(this)
		}, function(t, e, i) {
			"use strict";

			function r(t, e, i, r) {
				var n, a, s, o, u, d = navigator.userAgent.toLowerCase(),
					l = r,
					c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
				return n = ((192 & e[i + 2]) >>> 6) + 1, a = (60 & e[i + 2]) >>> 2, a > c.length - 1 ? void t.trigger(Event.ERROR, {
					type: A.b.MEDIA_ERROR,
					details: A.a.FRAG_PARSING_ERROR,
					fatal: !0,
					reason: "invalid ADTS sampling index:" + a
				}) : (o = (1 & e[i + 2]) << 2, o |= (192 & e[i + 3]) >>> 6, L.b.log("manifest codec:" + r + ",ADTS data:type:" + n + ",sampleingIndex:" + a + "[" + c[a] + "Hz],channelConfig:" + o), /firefox/i.test(d) ? a >= 6 ? (n = 5, u = new Array(4), s = a - 3) : (n = 2, u = new Array(2), s = a) : d.indexOf("android") !== -1 ? (n = 2, u = new Array(2), s = a) : (n = 5, u = new Array(4), r && (r.indexOf("mp4a.40.29") !== -1 || r.indexOf("mp4a.40.5") !== -1) || !r && a >= 6 ? s = a - 3 : ((r && r.indexOf("mp4a.40.2") !== -1 && (a >= 6 && 1 === o || /vivaldi/i.test(d)) || !r && 1 === o) && (n = 2, u = new Array(2)), s = a)), u[0] = n << 3, u[0] |= (14 & a) >> 1, u[1] |= (1 & a) << 7, u[1] |= o << 3, 5 === n && (u[1] |= (14 & s) >> 1, u[2] = (1 & s) << 7, u[2] |= 8, u[3] = 0), {
					config: u,
					samplerate: c[a],
					channelCount: o,
					codec: "mp4a.40." + n,
					manifestCodec: l
				})
			}

			function n(t, e) {
				return 255 === t[e] && 240 === (246 & t[e + 1])
			}

			function a(t, e) {
				return 1 & t[e + 1] ? 7 : 9
			}

			function s(t, e) {
				return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
			}

			function o(t, e) {
				return !!(e + 1 < t.length && n(t, e))
			}

			function u(t, e) {
				if (e + 1 < t.length && n(t, e)) {
					var i = a(t, e),
						r = i;
					e + 5 < t.length && (r = s(t, e));
					var o = e + r;
					if (o === t.length || o + 1 < t.length && n(t, o)) return !0
				}
				return !1
			}

			function d(t, e, i, n, a) {
				if (!t.samplerate) {
					var s = r(e, i, n, a);
					t.config = s.config, t.samplerate = s.samplerate, t.channelCount = s.channelCount, t.codec = s.codec, t.manifestCodec = s.manifestCodec, L.b.log("parsed codec:" + t.codec + ",rate:" + s.samplerate + ",nb channel:" + s.channelCount)
				}
			}

			function l(t) {
				return 9216e4 / t
			}

			function c(t, e, i, r, n) {
				var o, u, d, l = t.length;
				if (o = a(t, e), u = s(t, e), u -= o, u > 0 && e + o + u <= l) return d = i + r * n, {
					headerLength: o,
					frameLength: u,
					stamp: d
				}
			}

			function f(t, e, i, r, n) {
				var a = l(t.samplerate),
					s = c(e, i, r, n, a);
				if (s) {
					var o = s.stamp,
						u = s.headerLength,
						d = s.frameLength,
						f = {
							unit: e.subarray(i + u, i + u + d),
							pts: o,
							dts: o
						};
					return t.samples.push(f), t.len += d, {
						sample: f,
						length: d + u
					}
				}
			}

			function h(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function p(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function g(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function m(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function y(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function v(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function b(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function _(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function T(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function S(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function E(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var w = i(1),
				A = i(2),
				R = i(4),
				L = i(0),
				k = i(3),
				O = function() {
					function t(e, i, r) {
						h(this, t), this.observer = e, this.config = r, this.remuxer = i
					}
					return t.prototype.resetInitSegment = function(t, e, i, r) {
						this._audioTrack = {
							container: "audio/adts",
							type: "audio",
							id: 0,
							sequenceNumber: 0,
							isAAC: !0,
							samples: [],
							len: 0,
							manifestCodec: e,
							duration: r,
							inputTimeScale: 9e4
						}
					}, t.prototype.resetTimeStamp = function() {}, t.probe = function(t) {
						if (!t) return !1;
						for (var e = k.a.getID3Data(t, 0) || [], i = e.length, r = t.length; i < r; i++)
							if (u(t, i)) return L.b.log("ADTS sync word found !"), !0;
						return !1
					}, t.prototype.append = function(t, e, i, r) {
						for (var n = this._audioTrack, a = k.a.getID3Data(t, 0) || [], s = k.a.getTimeStamp(a), u = s ? 90 * s : 9e4 * e, l = 0, c = u, h = t.length, p = a.length, g = [{
								pts: c,
								dts: c,
								data: a
							}]; p < h - 1;)
							if (o(t, p) && p + 5 < h) {
								d(n, this.observer, t, p, n.manifestCodec);
								var m = f(n, t, p, u, l);
								if (!m) {
									L.b.log("Unable to parse AAC frame");
									break
								}
								p += m.length, c = m.sample.pts, l++
							} else k.a.isHeader(t, p) ? (a = k.a.getID3Data(t, p), g.push({
								pts: c,
								dts: c,
								data: a
							}), p += a.length) : p++;
						this.remuxer.remux(n, {
							samples: []
						}, {
							samples: g,
							inputTimeScale: 9e4
						}, {
							samples: []
						}, e, i, r)
					}, t.prototype.destroy = function() {}, t
				}(),
				D = O,
				I = Math.pow(2, 32) - 1,
				C = function() {
					function t(e, i) {
						p(this, t), this.observer = e, this.remuxer = i
					}
					return t.prototype.resetTimeStamp = function(t) {
						this.initPTS = t
					}, t.prototype.resetInitSegment = function(e, i, r, n) {
						if (e && e.byteLength) {
							var a = this.initData = t.parseInitSegment(e);
							null == i && (i = "mp4a.40.5"), null == r && (r = "avc1.42e01e");
							var s = {};
							a.audio && a.video ? s.audiovideo = {
								container: "video/mp4",
								codec: i + "," + r,
								initSegment: n ? e : null
							} : (a.audio && (s.audio = {
								container: "audio/mp4",
								codec: i,
								initSegment: n ? e : null
							}), a.video && (s.video = {
								container: "video/mp4",
								codec: r,
								initSegment: n ? e : null
							})), this.observer.trigger(w.a.FRAG_PARSING_INIT_SEGMENT, {
								tracks: s
							})
						} else i && (this.audioCodec = i), r && (this.videoCodec = r)
					}, t.probe = function(e) {
						return t.findBox({
							data: e,
							start: 0,
							end: Math.min(e.length, 16384)
						}, ["moof"]).length > 0
					}, t.bin2str = function(t) {
						return String.fromCharCode.apply(null, t)
					}, t.readUint32 = function(t, e) {
						t.data && (e += t.start, t = t.data);
						var i = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
						return i < 0 ? 4294967296 + i : i
					}, t.writeUint32 = function(t, e, i) {
						t.data && (e += t.start, t = t.data), t[e] = i >> 24, t[e + 1] = i >> 16 & 255, t[e + 2] = i >> 8 & 255, t[e + 3] = 255 & i
					}, t.findBox = function(e, i) {
						var r, n, a, s, o, u, d, l = [];
						if (e.data ? (u = e.start, s = e.end, e = e.data) : (u = 0, s = e.byteLength), !i.length) return null;
						for (r = u; r < s;) n = t.readUint32(e, r), a = t.bin2str(e.subarray(r + 4, r + 8)), d = n > 1 ? r + n : s, a === i[0] && (1 === i.length ? l.push({
							data: e,
							start: r + 8,
							end: d
						}) : (o = t.findBox({
							data: e,
							start: r + 8,
							end: d
						}, i.slice(1)), o.length && (l = l.concat(o)))), r = d;
						return l
					}, t.parseInitSegment = function(e) {
						var i = [],
							r = t.findBox(e, ["moov", "trak"]);
						return r.forEach(function(e) {
							var r = t.findBox(e, ["tkhd"])[0];
							if (r) {
								var n = r.data[r.start],
									a = 0 === n ? 12 : 20,
									s = t.readUint32(r, a),
									o = t.findBox(e, ["mdia", "mdhd"])[0];
								if (o) {
									n = o.data[o.start], a = 0 === n ? 12 : 20;
									var u = t.readUint32(o, a),
										d = t.findBox(e, ["mdia", "hdlr"])[0];
									if (d) {
										var l = t.bin2str(d.data.subarray(d.start + 8, d.start + 12)),
											c = {
												soun: "audio",
												vide: "video"
											}[l];
										if (c) {
											var f = t.findBox(e, ["mdia", "minf", "stbl", "stsd"]);
											if (f.length) {
												f = f[0];
												var h = t.bin2str(f.data.subarray(f.start + 12, f.start + 16));
												L.b.log("MP4Demuxer:" + c + ":" + h + " found")
											}
											i[s] = {
												timescale: u,
												type: c
											}, i[c] = {
												timescale: u,
												id: s
											}
										}
									}
								}
							}
						}), i
					}, t.getStartDTS = function(e, i) {
						var r, n, a;
						return r = t.findBox(i, ["moof", "traf"]), n = [].concat.apply([], r.map(function(i) {
							return t.findBox(i, ["tfhd"]).map(function(r) {
								var n, a, s;
								return n = t.readUint32(r, 4), a = e[n].timescale || 9e4, s = t.findBox(i, ["tfdt"]).map(function(e) {
									var i, r;
									return i = e.data[e.start], r = t.readUint32(e, 4), 1 === i && (r *= Math.pow(2, 32), r += t.readUint32(e, 8)), r
								})[0], s / a
							})
						})), a = Math.min.apply(null, n), isFinite(a) ? a : 0
					}, t.offsetStartDTS = function(e, i, r) {
						t.findBox(i, ["moof", "traf"]).map(function(i) {
							return t.findBox(i, ["tfhd"]).map(function(n) {
								var a = t.readUint32(n, 4),
									s = e[a].timescale || 9e4;
								t.findBox(i, ["tfdt"]).map(function(e) {
									var i = e.data[e.start],
										n = t.readUint32(e, 4);
									if (0 === i) t.writeUint32(e, 4, n - r * s);
									else {
										n *= Math.pow(2, 32), n += t.readUint32(e, 8), n -= r * s, n = Math.max(n, 0);
										var a = Math.floor(n / (I + 1)),
											o = Math.floor(n % (I + 1));
										t.writeUint32(e, 4, a), t.writeUint32(e, 8, o)
									}
								})
							})
						})
					}, t.prototype.append = function(e, i, r, n) {
						var a = this.initData;
						a || (this.resetInitSegment(e, this.audioCodec, this.videoCodec), a = this.initData);
						var s = void 0,
							o = this.initPTS;
						if (void 0 === o) {
							var u = t.getStartDTS(a, e);
							this.initPTS = o = u - i, this.observer.trigger(w.a.INIT_PTS_FOUND, {
								initPTS: o
							})
						}
						t.offsetStartDTS(a, e, o), s = t.getStartDTS(a, e), this.remuxer.remux(a.audio, a.video, null, null, s, r, n, e)
					}, t.prototype.destroy = function() {}, t
				}(),
				P = C,
				x = {
					BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
					SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
					SamplesCoefficients: [
						[0, 72, 144, 12],
						[0, 0, 0, 0],
						[0, 72, 144, 12],
						[0, 144, 144, 12]
					],
					BytesInSlot: [0, 1, 1, 4],
					appendFrame: function(t, e, i, r, n) {
						if (!(i + 24 > e.length)) {
							var a = this.parseHeader(e, i);
							if (a && i + a.frameLength <= e.length) {
								var s = 9e4 * a.samplesPerFrame / a.sampleRate,
									o = r + n * s,
									u = {
										unit: e.subarray(i, i + a.frameLength),
										pts: o,
										dts: o
									};
								return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(u), t.len += a.frameLength, {
									sample: u,
									length: a.frameLength
								}
							}
						}
					},
					parseHeader: function(t, e) {
						var i = t[e + 1] >> 3 & 3,
							r = t[e + 1] >> 1 & 3,
							n = t[e + 2] >> 4 & 15,
							a = t[e + 2] >> 2 & 3,
							s = t[e + 2] >> 1 & 1;
						if (1 !== i && 0 !== n && 15 !== n && 3 !== a) {
							var o = 3 === i ? 3 - r : 3 === r ? 3 : 4,
								u = 1e3 * x.BitratesMap[14 * o + n - 1],
								d = 3 === i ? 0 : 2 === i ? 1 : 2,
								l = x.SamplingRateMap[3 * d + a],
								c = t[e + 3] >> 6 === 3 ? 1 : 2,
								f = x.SamplesCoefficients[i][r],
								h = x.BytesInSlot[r],
								p = 8 * f * h,
								g = parseInt(f * u / l + s, 10) * h;
							return {
								sampleRate: l,
								channelCount: c,
								frameLength: g,
								samplesPerFrame: p
							}
						}
					},
					isHeaderPattern: function(t, e) {
						return 255 === t[e] && 224 === (224 & t[e + 1]) && 0 !== (6 & t[e + 1])
					},
					isHeader: function(t, e) {
						return !!(e + 1 < t.length && this.isHeaderPattern(t, e))
					},
					probe: function(t, e) {
						if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
							var i = 4,
								r = this.parseHeader(t, e),
								n = i;
							r && r.frameLength && (n = r.frameLength);
							var a = e + n;
							if (a === t.length || a + 1 < t.length && this.isHeaderPattern(t, a)) return !0
						}
						return !1
					}
				},
				M = x,
				U = function() {
					function t(e) {
						g(this, t), this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
					}
					return t.prototype.loadWord = function() {
						var t = this.data,
							e = this.bytesAvailable,
							i = t.byteLength - e,
							r = new Uint8Array(4),
							n = Math.min(4, e);
						if (0 === n) throw new Error("no bytes available");
						r.set(t.subarray(i, i + n)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
					}, t.prototype.skipBits = function(t) {
						var e;
						this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, e = t >> 3, t -= e >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
					}, t.prototype.readBits = function(t) {
						var e = Math.min(this.bitsAvailable, t),
							i = this.word >>> 32 - e;
						return t > 32 && L.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), e = t - e, e > 0 && this.bitsAvailable ? i << e | this.readBits(e) : i
					}, t.prototype.skipLZ = function() {
						var t;
						for (t = 0; t < this.bitsAvailable; ++t)
							if (0 !== (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
						return this.loadWord(), t + this.skipLZ()
					}, t.prototype.skipUEG = function() {
						this.skipBits(1 + this.skipLZ())
					}, t.prototype.skipEG = function() {
						this.skipBits(1 + this.skipLZ())
					}, t.prototype.readUEG = function() {
						var t = this.skipLZ();
						return this.readBits(t + 1) - 1
					}, t.prototype.readEG = function() {
						var t = this.readUEG();
						return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
					}, t.prototype.readBoolean = function() {
						return 1 === this.readBits(1)
					}, t.prototype.readUByte = function() {
						return this.readBits(8)
					}, t.prototype.readUShort = function() {
						return this.readBits(16)
					}, t.prototype.readUInt = function() {
						return this.readBits(32)
					}, t.prototype.skipScalingList = function(t) {
						var e, i, r = 8,
							n = 8;
						for (e = 0; e < t; e++) 0 !== n && (i = this.readEG(), n = (r + i + 256) % 256), r = 0 === n ? r : n
					}, t.prototype.readSPS = function() {
						var t, e, i, r, n, a, s, o, u, d = 0,
							l = 0,
							c = 0,
							f = 0,
							h = this.readUByte.bind(this),
							p = this.readBits.bind(this),
							g = this.readUEG.bind(this),
							m = this.readBoolean.bind(this),
							y = this.skipBits.bind(this),
							v = this.skipEG.bind(this),
							b = this.skipUEG.bind(this),
							_ = this.skipScalingList.bind(this);
						if (h(), t = h(), e = p(5), y(3), i = h(), b(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
							var T = g();
							if (3 === T && y(1), b(), b(), y(1), m())
								for (o = 3 !== T ? 8 : 12, u = 0; u < o; u++) m() && _(u < 6 ? 16 : 64)
						}
						b();
						var S = g();
						if (0 === S) g();
						else if (1 === S)
							for (y(1), v(), v(), r = g(), u = 0; u < r; u++) v();
						b(), y(1), n = g(), a = g(), s = p(1), 0 === s && y(1), y(1), m() && (d = g(), l = g(), c = g(), f = g());
						var E = [1, 1];
						if (m() && m()) {
							var w = h();
							switch (w) {
								case 1:
									E = [1, 1];
									break;
								case 2:
									E = [12, 11];
									break;
								case 3:
									E = [10, 11];
									break;
								case 4:
									E = [16, 11];
									break;
								case 5:
									E = [40, 33];
									break;
								case 6:
									E = [24, 11];
									break;
								case 7:
									E = [20, 11];
									break;
								case 8:
									E = [32, 11];
									break;
								case 9:
									E = [80, 33];
									break;
								case 10:
									E = [18, 11];
									break;
								case 11:
									E = [15, 11];
									break;
								case 12:
									E = [64, 33];
									break;
								case 13:
									E = [160, 99];
									break;
								case 14:
									E = [4, 3];
									break;
								case 15:
									E = [3, 2];
									break;
								case 16:
									E = [2, 1];
									break;
								case 255:
									E = [h() << 8 | h(), h() << 8 | h()]
							}
						}
						return {
							width: Math.ceil(16 * (n + 1) - 2 * d - 2 * l),
							height: (2 - s) * (a + 1) * 16 - (s ? 2 : 4) * (c + f),
							pixelRatio: E
						}
					}, t.prototype.readSliceType = function() {
						return this.readUByte(), this.readUEG(), this.readUEG()
					}, t
				}(),
				N = U,
				F = function() {
					function t(e, i, r, n) {
						m(this, t), this.decryptdata = r, this.discardEPB = n, this.decrypter = new R.a(e, i)
					}
					return t.prototype.decryptBuffer = function(t, e) {
						this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e)
					}, t.prototype.decryptAacSample = function(t, e, i, r) {
						var n = t[e].unit,
							a = n.subarray(16, n.length - n.length % 16),
							s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
							o = this;
						this.decryptBuffer(s, function(a) {
							a = new Uint8Array(a), n.set(a, 16), r || o.decryptAacSamples(t, e + 1, i)
						})
					}, t.prototype.decryptAacSamples = function(t, e, i) {
						for (;; e++) {
							if (e >= t.length) return void i();
							if (!(t[e].unit.length < 32)) {
								var r = this.decrypter.isSync();
								if (this.decryptAacSample(t, e, i, r), !r) return
							}
						}
					}, t.prototype.getAvcEncryptedData = function(t) {
						for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, i = new Int8Array(e), r = 0, n = 32; n <= t.length - 16; n += 160, r += 16) i.set(t.subarray(n, n + 16), r);
						return i
					}, t.prototype.getAvcDecryptedUnit = function(t, e) {
						e = new Uint8Array(e);
						for (var i = 0, r = 32; r <= t.length - 16; r += 160, i += 16) t.set(e.subarray(i, i + 16), r);
						return t
					}, t.prototype.decryptAvcSample = function(t, e, i, r, n, a) {
						var s = this.discardEPB(n.data),
							o = this.getAvcEncryptedData(s),
							u = this;
						this.decryptBuffer(o.buffer, function(o) {
							n.data = u.getAvcDecryptedUnit(s, o), a || u.decryptAvcSamples(t, e, i + 1, r)
						})
					}, t.prototype.decryptAvcSamples = function(t, e, i, r) {
						for (;; e++, i = 0) {
							if (e >= t.length) return void r();
							for (var n = t[e].units; !(i >= n.length); i++) {
								var a = n[i];
								if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
									var s = this.decrypter.isSync();
									if (this.decryptAvcSample(t, e, i, r, a, s), !s) return
								}
							}
						}
					}, t
				}(),
				B = F,
				G = {
					video: 0,
					audio: 1,
					id3: 2,
					text: 3
				},
				j = function() {
					function t(e, i, r, n) {
						y(this, t), this.observer = e, this.config = r, this.typeSupported = n, this.remuxer = i, this.sampleAes = null
					}
					return t.prototype.setDecryptData = function(t) {
						null != t && null != t.key && "SAMPLE-AES" === t.method ? this.sampleAes = new B(this.observer, this.config, t, this.discardEPB) : this.sampleAes = null
					}, t.probe = function(e) {
						var i = t._syncOffset(e);
						return !(i < 0) && (i && L.b.warn("MPEG2-TS detected but first sync word found @ offset " + i + ", junk ahead ?"), !0)
					}, t._syncOffset = function(t) {
						for (var e = Math.min(1e3, t.length - 564), i = 0; i < e;) {
							if (71 === t[i] && 71 === t[i + 188] && 71 === t[i + 376]) return i;
							i++
						}
						return -1
					}, t.createTrack = function(t, e) {
						return {
							container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
							type: t,
							id: G[t],
							pid: -1,
							inputTimeScale: 9e4,
							sequenceNumber: 0,
							samples: [],
							len: 0,
							dropped: "video" === t ? 0 : void 0,
							isAAC: "audio" === t || void 0,
							duration: "audio" === t ? e : void 0
						}
					}, t.prototype.resetInitSegment = function(e, i, r, n) {
						this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video", n), this._audioTrack = t.createTrack("audio", n), this._id3Track = t.createTrack("id3", n), this._txtTrack = t.createTrack("text", n), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = i, this.videoCodec = r, this._duration = n
					}, t.prototype.resetTimeStamp = function() {}, t.prototype.append = function(e, i, r, n) {
						var a, s, o, u, d, l, c = e.length,
							f = !1;
						this.contiguous = r;
						var h = this.pmtParsed,
							p = this._avcTrack,
							g = this._audioTrack,
							m = this._id3Track,
							y = p.pid,
							v = g.pid,
							b = m.pid,
							_ = this._pmtId,
							T = p.pesData,
							S = g.pesData,
							E = m.pesData,
							R = this._parsePAT,
							k = this._parsePMT,
							O = this._parsePES,
							D = this._parseAVCPES.bind(this),
							I = this._parseAACPES.bind(this),
							C = this._parseMPEGPES.bind(this),
							P = this._parseID3PES.bind(this),
							x = t._syncOffset(e);
						for (c -= (c + x) % 188, a = x; a < c; a += 188)
							if (71 === e[a]) {
								if (s = !!(64 & e[a + 1]), o = ((31 & e[a + 1]) << 8) + e[a + 2], u = (48 & e[a + 3]) >> 4, u > 1) {
									if (d = a + 5 + e[a + 4], d === a + 188) continue
								} else d = a + 4;
								switch (o) {
									case y:
										s && (T && (l = O(T)) && D(l, !1), T = {
											data: [],
											size: 0
										}), T && (T.data.push(e.subarray(d, a + 188)), T.size += a + 188 - d);
										break;
									case v:
										s && (S && (l = O(S)) && (g.isAAC ? I(l) : C(l)), S = {
											data: [],
											size: 0
										}), S && (S.data.push(e.subarray(d, a + 188)), S.size += a + 188 - d);
										break;
									case b:
										s && (E && (l = O(E)) && P(l), E = {
											data: [],
											size: 0
										}), E && (E.data.push(e.subarray(d, a + 188)), E.size += a + 188 - d);
										break;
									case 0:
										s && (d += e[d] + 1), _ = this._pmtId = R(e, d);
										break;
									case _:
										s && (d += e[d] + 1);
										var M = k(e, d, this.typeSupported.mpeg === !0 || this.typeSupported.mp3 === !0, null != this.sampleAes);
										y = M.avc, y > 0 && (p.pid = y), v = M.audio, v > 0 && (g.pid = v, g.isAAC = M.isAAC), b = M.id3, b > 0 && (m.pid = b), f && !h && (L.b.log("reparse from beginning"), f = !1, a = x - 188), h = this.pmtParsed = !0;
										break;
									case 17:
									case 8191:
										break;
									default:
										f = !0
								}
							} else this.observer.trigger(w.a.ERROR, {
								type: A.b.MEDIA_ERROR,
								details: A.a.FRAG_PARSING_ERROR,
								fatal: !1,
								reason: "TS packet did not start with 0x47"
							});
						T && (l = O(T)) ? (D(l, !0), p.pesData = null) : p.pesData = T, S && (l = O(S)) ? (g.isAAC ? I(l) : C(l), g.pesData = null) : (S && S.size && L.b.log("last AAC PES packet truncated,might overlap between fragments"), g.pesData = S), E && (l = O(E)) ? (P(l), m.pesData = null) : m.pesData = E, null == this.sampleAes ? this.remuxer.remux(g, p, m, this._txtTrack, i, r, n) : this.decryptAndRemux(g, p, m, this._txtTrack, i, r, n)
					}, t.prototype.decryptAndRemux = function(t, e, i, r, n, a, s) {
						if (t.samples && t.isAAC) {
							var o = this;
							this.sampleAes.decryptAacSamples(t.samples, 0, function() {
								o.decryptAndRemuxAvc(t, e, i, r, n, a, s)
							})
						} else this.decryptAndRemuxAvc(t, e, i, r, n, a, s)
					}, t.prototype.decryptAndRemuxAvc = function(t, e, i, r, n, a, s) {
						if (e.samples) {
							var o = this;
							this.sampleAes.decryptAvcSamples(e.samples, 0, 0, function() {
								o.remuxer.remux(t, e, i, r, n, a, s)
							})
						} else this.remuxer.remux(t, e, i, r, n, a, s)
					}, t.prototype.destroy = function() {
						this._initPTS = this._initDTS = void 0, this._duration = 0
					}, t.prototype._parsePAT = function(t, e) {
						return (31 & t[e + 10]) << 8 | t[e + 11]
					}, t.prototype._parsePMT = function(t, e, i, r) {
						var n, a, s, o, u = {
							audio: -1,
							avc: -1,
							id3: -1,
							isAAC: !0
						};
						for (n = (15 & t[e + 1]) << 8 | t[e + 2], a = e + 3 + n - 4, s = (15 & t[e + 10]) << 8 | t[e + 11], e += 12 + s; e < a;) {
							switch (o = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
								case 207:
									if (!r) {
										L.b.log("unkown stream type:" + t[e]);
										break
									}
								case 15:
									u.audio === -1 && (u.audio = o);
									break;
								case 21:
									u.id3 === -1 && (u.id3 = o);
									break;
								case 219:
									if (!r) {
										L.b.log("unkown stream type:" + t[e]);
										break
									}
								case 27:
									u.avc === -1 && (u.avc = o);
									break;
								case 3:
								case 4:
									i ? u.audio === -1 && (u.audio = o, u.isAAC = !1) : L.b.log("MPEG audio found, not supported in this browser for now");
									break;
								case 36:
									L.b.warn("HEVC stream type found, not supported for now");
									break;
								default:
									L.b.log("unkown stream type:" + t[e])
							}
							e += ((15 & t[e + 3]) << 8 | t[e + 4]) + 5
						}
						return u
					}, t.prototype._parsePES = function(t) {
						var e, i, r, n, a, s, o, u, d, l = 0,
							c = t.data;
						if (!t || 0 === t.size) return null;
						for (; c[0].length < 19 && c.length > 1;) {
							var f = new Uint8Array(c[0].length + c[1].length);
							f.set(c[0]), f.set(c[1], c[0].length), c[0] = f, c.splice(1, 1)
						}
						if (e = c[0], r = (e[0] << 16) + (e[1] << 8) + e[2], 1 === r) {
							if (n = (e[4] << 8) + e[5], n && n > t.size - 6) return null;
							i = e[7], 192 & i && (o = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, o > 4294967295 && (o -= 8589934592), 64 & i ? (u = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2, u > 4294967295 && (u -= 8589934592), o - u > 54e5 && (L.b.warn(Math.round((o - u) / 9e4) + "s delta between PTS and DTS, align them"), o = u)) : u = o), a = e[8], d = a + 9, t.size -= d, s = new Uint8Array(t.size);
							for (var h = 0, p = c.length; h < p; h++) {
								e = c[h];
								var g = e.byteLength;
								if (d) {
									if (d > g) {
										d -= g;
										continue
									}
									e = e.subarray(d), g -= d, d = 0
								}
								s.set(e, l), l += g
							}
							return n && (n -= a + 3), {
								data: s,
								pts: o,
								dts: u,
								len: n
							}
						}
						return null
					}, t.prototype.pushAccesUnit = function(t, e) {
						if (t.units.length && t.frame) {
							var i = e.samples,
								r = i.length;
							!this.config.forceKeyFrameOnDiscontinuity || t.key === !0 || e.sps && (r || this.contiguous) ? (t.id = r, i.push(t)) : e.dropped++
						}
						t.debug.length && L.b.log(t.pts + "/" + t.dts + ":" + t.debug)
					}, t.prototype._parseAVCPES = function(t, e) {
						var i, r, n, a = this,
							s = this._avcTrack,
							o = this._parseAVCNALu(t.data),
							u = !1,
							d = this.avcSample,
							l = !1,
							c = this.pushAccesUnit.bind(this),
							f = function(t, e, i, r) {
								return {
									key: t,
									pts: e,
									dts: i,
									units: [],
									debug: r
								}
							};
						t.data = null, d && o.length && !s.audFound && (c(d, s), d = this.avcSample = f(!1, t.pts, t.dts, "")), o.forEach(function(e) {
							switch (e.type) {
								case 1:
									r = !0, d || (d = a.avcSample = f(!0, t.pts, t.dts, "")), u && (d.debug += "NDR "), d.frame = !0;
									var o = e.data;
									if (l && o.length > 4) {
										var h = new N(o).readSliceType();
										2 !== h && 4 !== h && 7 !== h && 9 !== h || (d.key = !0)
									}
									break;
								case 5:
									r = !0, d || (d = a.avcSample = f(!0, t.pts, t.dts, "")), u && (d.debug += "IDR "), d.key = !0, d.frame = !0;
									break;
								case 6:
									r = !0, u && d && (d.debug += "SEI "), i = new N(a.discardEPB(e.data)), i.readUByte();
									for (var p = 0, g = 0, m = !1, y = 0; !m && i.bytesAvailable > 1;) {
										p = 0;
										do y = i.readUByte(), p += y; while (255 === y);
										g = 0;
										do y = i.readUByte(), g += y; while (255 === y);
										if (4 === p && 0 !== i.bytesAvailable) {
											m = !0;
											var v = i.readUByte();
											if (181 === v) {
												var b = i.readUShort();
												if (49 === b) {
													var _ = i.readUInt();
													if (1195456820 === _) {
														var T = i.readUByte();
														if (3 === T) {
															var S = i.readUByte(),
																E = i.readUByte(),
																w = 31 & S,
																A = [S, E];
															for (n = 0; n < w; n++) A.push(i.readUByte()), A.push(i.readUByte()), A.push(i.readUByte());
															a._insertSampleInOrder(a._txtTrack.samples, {
																type: 3,
																pts: t.pts,
																bytes: A
															})
														}
													}
												}
											}
										} else if (g < i.bytesAvailable)
											for (n = 0; n < g; n++) i.readUByte()
									}
									break;
								case 7:
									if (r = !0, l = !0, u && d && (d.debug += "SPS "), !s.sps) {
										i = new N(e.data);
										var R = i.readSPS();
										s.width = R.width, s.height = R.height, s.pixelRatio = R.pixelRatio, s.sps = [e.data], s.duration = a._duration;
										var L = e.data.subarray(1, 4),
											k = "avc1.";
										for (n = 0; n < 3; n++) {
											var O = L[n].toString(16);
											O.length < 2 && (O = "0" + O), k += O
										}
										s.codec = k
									}
									break;
								case 8:
									r = !0, u && d && (d.debug += "PPS "), s.pps || (s.pps = [e.data]);
									break;
								case 9:
									r = !1, s.audFound = !0, d && c(d, s), d = a.avcSample = f(!1, t.pts, t.dts, u ? "AUD " : "");
									break;
								case 12:
									r = !1;
									break;
								default:
									r = !1, d && (d.debug += "unknown NAL " + e.type + " ")
							}
							if (d && r) {
								var D = d.units;
								D.push(e)
							}
						}), e && d && (c(d, s), this.avcSample = null)
					}, t.prototype._insertSampleInOrder = function(t, e) {
						var i = t.length;
						if (i > 0) {
							if (e.pts >= t[i - 1].pts) t.push(e);
							else
								for (var r = i - 1; r >= 0; r--)
									if (e.pts < t[r].pts) {
										t.splice(r, 0, e);
										break
									}
						} else t.push(e)
					}, t.prototype._getLastNalUnit = function() {
						var t = this.avcSample,
							e = void 0;
						if (!t || 0 === t.units.length) {
							var i = this._avcTrack,
								r = i.samples;
							t = r[r.length - 1]
						}
						if (t) {
							var n = t.units;
							e = n[n.length - 1]
						}
						return e
					}, t.prototype._parseAVCNALu = function(t) {
						var e, i, r, n, a, s = 0,
							o = t.byteLength,
							u = this._avcTrack,
							d = u.naluState || 0,
							l = d,
							c = [],
							f = -1;
						for (d === -1 && (f = 0, a = 31 & t[0], d = 0, s = 1); s < o;)
							if (e = t[s++], d)
								if (1 !== d)
									if (e)
										if (1 === e) {
											if (f >= 0) r = {
												data: t.subarray(f, s - d - 1),
												type: a
											}, c.push(r);
											else {
												var h = this._getLastNalUnit();
												if (h && (l && s <= 4 - l && h.state && (h.data = h.data.subarray(0, h.data.byteLength - l)), i = s - d - 1, i > 0)) {
													var p = new Uint8Array(h.data.byteLength + i);
													p.set(h.data, 0), p.set(t.subarray(0, i), h.data.byteLength), h.data = p
												}
											}
											s < o ? (n = 31 & t[s], f = s, a = n, d = 0) : d = -1
										} else d = 0;
						else d = 3;
						else d = e ? 0 : 2;
						else d = e ? 0 : 1;
						if (f >= 0 && d >= 0 && (r = {
								data: t.subarray(f, o),
								type: a,
								state: d
							}, c.push(r)), 0 === c.length) {
							var g = this._getLastNalUnit();
							if (g) {
								var m = new Uint8Array(g.data.byteLength + t.byteLength);
								m.set(g.data, 0), m.set(t, g.data.byteLength), g.data = m
							}
						}
						return u.naluState = d, c
					}, t.prototype.discardEPB = function(t) {
						for (var e, i, r = t.byteLength, n = [], a = 1; a < r - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (n.push(a + 2), a += 2) : a++;
						if (0 === n.length) return t;
						e = r - n.length, i = new Uint8Array(e);
						var s = 0;
						for (a = 0; a < e; s++, a++) s === n[0] && (s++, n.shift()), i[a] = t[s];
						return i
					}, t.prototype._parseAACPES = function(t) {
						var e, i, r, n, a, s = this._audioTrack,
							u = t.data,
							c = t.pts,
							h = 0,
							p = this.aacOverFlow,
							g = this.aacLastPTS;
						if (p) {
							var m = new Uint8Array(p.byteLength + u.byteLength);
							m.set(p, 0), m.set(u, p.byteLength), u = m
						}
						for (r = h, a = u.length; r < a - 1 && !o(u, r); r++);
						if (r) {
							var y, v;
							if (r < a - 1 ? (y = "AAC PES did not start with ADTS header,offset:" + r, v = !1) : (y = "no ADTS header found in AAC PES", v = !0), L.b.warn("parsing error:" + y), this.observer.trigger(w.a.ERROR, {
									type: A.b.MEDIA_ERROR,
									details: A.a.FRAG_PARSING_ERROR,
									fatal: v,
									reason: y
								}), v) return
						}
						if (d(s, this.observer, u, r, this.audioCodec), i = 0, e = l(s.samplerate), p && g) {
							var b = g + e;
							Math.abs(b - c) > 1 && (L.b.log("AAC: align PTS for overlapping frames by " + Math.round((b - c) / 90)), c = b)
						}
						for (; r < a;)
							if (o(u, r) && r + 5 < a) {
								var _ = f(s, u, r, c, i);
								if (!_) break;
								r += _.length, n = _.sample.pts, i++
							} else r++;
						p = r < a ? u.subarray(r, a) : null, this.aacOverFlow = p, this.aacLastPTS = n
					}, t.prototype._parseMPEGPES = function(t) {
						for (var e = t.data, i = e.length, r = 0, n = 0, a = t.pts; n < i;)
							if (M.isHeader(e, n)) {
								var s = M.appendFrame(this._audioTrack, e, n, a, r);
								if (!s) break;
								n += s.length, r++
							} else n++
					}, t.prototype._parseID3PES = function(t) {
						this._id3Track.samples.push(t)
					}, t
				}(),
				H = j,
				q = function() {
					function t(e, i, r) {
						v(this, t), this.observer = e, this.config = r, this.remuxer = i
					}
					return t.prototype.resetInitSegment = function(t, e, i, r) {
						this._audioTrack = {
							container: "audio/mpeg",
							type: "audio",
							id: -1,
							sequenceNumber: 0,
							isAAC: !1,
							samples: [],
							len: 0,
							manifestCodec: e,
							duration: r,
							inputTimeScale: 9e4
						}
					}, t.prototype.resetTimeStamp = function() {}, t.probe = function(t) {
						var e, i, r = k.a.getID3Data(t, 0);
						if (r && void 0 !== k.a.getTimeStamp(r))
							for (e = r.length, i = Math.min(t.length - 1, e + 100); e < i; e++)
								if (M.probe(t, e)) return L.b.log("MPEG Audio sync word found !"), !0;
						return !1
					}, t.prototype.append = function(t, e, i, r) {
						for (var n = k.a.getID3Data(t, 0), a = k.a.getTimeStamp(n), s = a ? 90 * a : 9e4 * e, o = n.length, u = t.length, d = 0, l = 0, c = this._audioTrack, f = [{
								pts: s,
								dts: s,
								data: n
							}]; o < u;)
							if (M.isHeader(t, o)) {
								var h = M.appendFrame(c, t, o, s, d);
								if (!h) break;
								o += h.length, l = h.sample.pts, d++
							} else k.a.isHeader(t, o) ? (n = k.a.getID3Data(t, o), f.push({
								pts: l,
								dts: l,
								data: n
							}), o += n.length) : o++;
						this.remuxer.remux(c, {
							samples: []
						}, {
							samples: f,
							inputTimeScale: 9e4
						}, {
							samples: []
						}, e, i, r)
					}, t.prototype.destroy = function() {}, t
				}(),
				V = q,
				W = function() {
					function t() {
						b(this, t)
					}
					return t.getSilentFrame = function(t, e) {
						switch (t) {
							case "mp4a.40.2":
								if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
								if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
								if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
								if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
								if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
								if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
								break;
							default:
								if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
								if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
								if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
						}
						return null
					}, t
				}(),
				K = W,
				z = Math.pow(2, 32) - 1,
				Y = function() {
					function t() {
						_(this, t)
					}
					return t.init = function() {
						t.types = {
							avc1: [],
							avcC: [],
							btrt: [],
							dinf: [],
							dref: [],
							esds: [],
							ftyp: [],
							hdlr: [],
							mdat: [],
							mdhd: [],
							mdia: [],
							mfhd: [],
							minf: [],
							moof: [],
							moov: [],
							mp4a: [],
							".mp3": [],
							mvex: [],
							mvhd: [],
							pasp: [],
							sdtp: [],
							stbl: [],
							stco: [],
							stsc: [],
							stsd: [],
							stsz: [],
							stts: [],
							tfdt: [],
							tfhd: [],
							traf: [],
							trak: [],
							trun: [],
							trex: [],
							tkhd: [],
							vmhd: [],
							smhd: []
						};
						var e;
						for (e in t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
						var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
							r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
						t.HDLR_TYPES = {
							video: i,
							audio: r
						};
						var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
							a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
						t.STTS = t.STSC = t.STCO = a, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
						var s = new Uint8Array([105, 115, 111, 109]),
							o = new Uint8Array([97, 118, 99, 49]),
							u = new Uint8Array([0, 0, 0, 1]);
						t.FTYP = t.box(t.types.ftyp, s, u, s, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
					}, t.box = function(t) {
						for (var e, i = Array.prototype.slice.call(arguments, 1), r = 8, n = i.length, a = n; n--;) r += i[n].byteLength;
						for (e = new Uint8Array(r), e[0] = r >> 24 & 255, e[1] = r >> 16 & 255, e[2] = r >> 8 & 255, e[3] = 255 & r, e.set(t, 4), n = 0, r = 8; n < a; n++) e.set(i[n], r), r += i[n].byteLength;
						return e
					}, t.hdlr = function(e) {
						return t.box(t.types.hdlr, t.HDLR_TYPES[e])
					}, t.mdat = function(e) {
						return t.box(t.types.mdat, e)
					}, t.mdhd = function(e, i) {
						i *= e;
						var r = Math.floor(i / (z + 1)),
							n = Math.floor(i % (z + 1));
						return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
					}, t.mdia = function(e) {
						return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
					}, t.mfhd = function(e) {
						return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
					}, t.minf = function(e) {
						return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
					}, t.moof = function(e, i, r) {
						return t.box(t.types.moof, t.mfhd(e), t.traf(r, i))
					}, t.moov = function(e) {
						for (var i = e.length, r = []; i--;) r[i] = t.trak(e[i]);
						return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(r).concat(t.mvex(e)))
					}, t.mvex = function(e) {
						for (var i = e.length, r = []; i--;) r[i] = t.trex(e[i]);
						return t.box.apply(null, [t.types.mvex].concat(r))
					}, t.mvhd = function(e, i) {
						i *= e;
						var r = Math.floor(i / (z + 1)),
							n = Math.floor(i % (z + 1)),
							a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
						return t.box(t.types.mvhd, a)
					}, t.sdtp = function(e) {
						var i, r, n = e.samples || [],
							a = new Uint8Array(4 + n.length);
						for (r = 0; r < n.length; r++) i = n[r].flags, a[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
						return t.box(t.types.sdtp, a)
					}, t.stbl = function(e) {
						return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
					}, t.avc1 = function(e) {
						var i, r, n, a = [],
							s = [];
						for (i = 0; i < e.sps.length; i++) r = e.sps[i], n = r.byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(r));
						for (i = 0; i < e.pps.length; i++) r = e.pps[i], n = r.byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(r));
						var o = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(s))),
							u = e.width,
							d = e.height,
							l = e.pixelRatio[0],
							c = e.pixelRatio[1];
						return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, u >> 8 & 255, 255 & u, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
					}, t.esds = function(t) {
						var e = t.config.length;
						return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
					}, t.mp4a = function(e) {
						var i = e.samplerate;
						return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]), t.box(t.types.esds, t.esds(e)))
					}, t.mp3 = function(e) {
						var i = e.samplerate;
						return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
					}, t.stsd = function(e) {
						return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
					}, t.tkhd = function(e) {
						var i = e.id,
							r = e.duration * e.timescale,
							n = e.width,
							a = e.height,
							s = Math.floor(r / (z + 1)),
							o = Math.floor(r % (z + 1));
						return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
					}, t.traf = function(e, i) {
						var r = t.sdtp(e),
							n = e.id,
							a = Math.floor(i / (z + 1)),
							s = Math.floor(i % (z + 1));
						return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), t.trun(e, r.length + 16 + 20 + 8 + 16 + 8 + 8), r)
					}, t.trak = function(e) {
						return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
					}, t.trex = function(e) {
						var i = e.id;
						return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
					}, t.trun = function(e, i) {
						var r, n, a, s, o, u, d = e.samples || [],
							l = d.length,
							c = 12 + 16 * l,
							f = new Uint8Array(c);
						for (i += 8 + c, f.set([0, 0, 15, 1, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0), r = 0; r < l; r++) n = d[r], a = n.duration, s = n.size, o = n.flags, u = n.cts, f.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u], 12 + 16 * r);
						return t.box(t.types.trun, f)
					}, t.initSegment = function(e) {
						t.types || t.init();
						var i, r = t.moov(e);
						return i = new Uint8Array(t.FTYP.byteLength + r.byteLength), i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
					}, t
				}(),
				X = Y,
				Q = 1e4,
				$ = function() {
					function t(e, i, r, n) {
						T(this, t), this.observer = e, this.config = i, this.typeSupported = r;
						var a = navigator.userAgent;
						this.isSafari = n && n.indexOf("Apple") > -1 && a && !a.match("CriOS"), this.ISGenerated = !1
					}
					return t.prototype.destroy = function() {}, t.prototype.resetTimeStamp = function(t) {
						this._initPTS = this._initDTS = t
					}, t.prototype.resetInitSegment = function() {
						this.ISGenerated = !1
					}, t.prototype.remux = function(t, e, i, r, n, a, s) {
						if (this.ISGenerated || this.generateIS(t, e, n), this.ISGenerated) {
							var o = t.samples.length,
								u = e.samples.length,
								d = n,
								l = n;
							if (o && u) {
								var c = (t.samples[0].dts - e.samples[0].dts) / e.inputTimeScale;
								d += Math.max(0, c), l += Math.max(0, -c)
							}
							if (o) {
								t.timescale || (L.b.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, n));
								var f = this.remuxAudio(t, d, a, s);
								if (u) {
									var h = void 0;
									f && (h = f.endPTS - f.startPTS), e.timescale || (L.b.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, n)), this.remuxVideo(e, l, a, h, s)
								}
							} else {
								var p = void 0;
								u && (p = this.remuxVideo(e, l, a, s)), p && t.codec && this.remuxEmptyAudio(t, d, a, p)
							}
						}
						i.samples.length && this.remuxID3(i, n), r.samples.length && this.remuxText(r, n), this.observer.trigger(w.a.FRAG_PARSED)
					}, t.prototype.generateIS = function(t, e, i) {
						var r, n, a = this.observer,
							s = t.samples,
							o = e.samples,
							u = this.typeSupported,
							d = "audio/mp4",
							l = {},
							c = {
								tracks: l
							},
							f = void 0 === this._initPTS;
						if (f && (r = n = 1 / 0), t.config && s.length && (t.timescale = t.samplerate, L.b.log("audio sampling rate : " + t.samplerate), t.isAAC || (u.mpeg ? (d = "audio/mpeg", t.codec = "") : u.mp3 && (t.codec = "mp3")), l.audio = {
								container: d,
								codec: t.codec,
								initSegment: !t.isAAC && u.mpeg ? new Uint8Array : X.initSegment([t]),
								metadata: {
									channelCount: t.channelCount
								}
							}, f && (r = n = s[0].pts - t.inputTimeScale * i)), e.sps && e.pps && o.length) {
							var h = e.inputTimeScale;
							e.timescale = h, l.video = {
								container: "video/mp4",
								codec: e.codec,
								initSegment: X.initSegment([e]),
								metadata: {
									width: e.width,
									height: e.height
								}
							}, f && (r = Math.min(r, o[0].pts - h * i), n = Math.min(n, o[0].dts - h * i), this.observer.trigger(w.a.INIT_PTS_FOUND, {
								initPTS: r
							}))
						}
						Object.keys(l).length ? (a.trigger(w.a.FRAG_PARSING_INIT_SEGMENT, c), this.ISGenerated = !0, f && (this._initPTS = r, this._initDTS = n)) : a.trigger(w.a.ERROR, {
							type: A.b.MEDIA_ERROR,
							details: A.a.FRAG_PARSING_ERROR,
							fatal: !1,
							reason: "no audio/video samples found"
						})
					}, t.prototype.remuxVideo = function(t, e, i, r, n) {
						var a, s, o, u, d, l, c, f, h = 8,
							p = t.timescale,
							g = t.samples,
							m = [],
							y = g.length,
							v = this._PTSNormalize,
							b = this._initDTS,
							_ = this.nextAvcDts,
							T = this.isSafari;
						T && (i |= g.length && _ && (n && Math.abs(e - _ / p) < .1 || Math.abs(g[0].pts - _ - b) < p / 5)), i || (_ = e * p), g.forEach(function(t) {
							t.pts = v(t.pts - b, _), t.dts = v(t.dts - b, _)
						}), g.sort(function(t, e) {
							var i = t.dts - e.dts,
								r = t.pts - e.pts;
							return i ? i : r ? r : t.id - e.id
						});
						var S = g.reduce(function(t, e) {
							return Math.max(Math.min(t, e.pts - e.dts), -18e3)
						}, 0);
						if (S < 0) {
							L.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(S / 90) + " ms to overcome this issue");
							for (var E = 0; E < g.length; E++) g[E].dts += S
						}
						var R = g[0];
						d = Math.max(R.dts, 0), u = Math.max(R.pts, 0);
						var k = Math.round((d - _) / 90);
						i && k && (k > 1 ? L.b.log("AVC:" + k + " ms hole between fragments detected,filling it") : k < -1 && L.b.log("AVC:" + -k + " ms overlapping between fragments detected"), d = _, g[0].dts = d, u = Math.max(u - k, _), g[0].pts = u, L.b.log("Video/PTS/DTS adjusted: " + Math.round(u / 90) + "/" + Math.round(d / 90) + ",delta:" + k + " ms")), l = d, R = g[g.length - 1], f = Math.max(R.dts, 0), c = Math.max(R.pts, 0, f), T && (a = Math.round((f - d) / (g.length - 1)));
						for (var O = 0, D = 0, I = 0; I < y; I++) {
							for (var C = g[I], P = C.units, x = P.length, M = 0, U = 0; U < x; U++) M += P[U].data.length;
							D += M, O += x, C.length = M, T ? C.dts = d + I * a : C.dts = Math.max(C.dts, d), C.pts = Math.max(C.pts, C.dts)
						}
						var N = D + 4 * O + 8;
						try {
							s = new Uint8Array(N)
						} catch (t) {
							return void this.observer.trigger(w.a.ERROR, {
								type: A.b.MUX_ERROR,
								details: A.a.REMUX_ALLOC_ERROR,
								fatal: !1,
								bytes: N,
								reason: "fail allocating video mdat " + N
							})
						}
						var F = new DataView(s.buffer);
						F.setUint32(0, N), s.set(X.types.mdat, 4);
						for (var B = 0; B < y; B++) {
							for (var G = g[B], j = G.units, H = 0, q = void 0, V = 0, W = j.length; V < W; V++) {
								var K = j[V],
									z = K.data,
									Y = K.data.byteLength;
								F.setUint32(h, Y), h += 4, s.set(z, h), h += Y, H += 4 + Y
							}
							if (T) q = Math.max(0, a * Math.round((G.pts - G.dts) / a));
							else {
								if (B < y - 1) a = g[B + 1].dts - G.dts;
								else {
									var Q = this.config,
										$ = G.dts - g[B > 0 ? B - 1 : B].dts;
									if (Q.stretchShortVideoTrack) {
										var J = Q.maxBufferHole,
											Z = Q.maxSeekHole,
											tt = Math.floor(Math.min(J, Z) * p),
											et = (r ? u + r * p : this.nextAudioPts) - G.pts;
										et > tt ? (a = et - $, a < 0 && (a = $), L.b.log("It is approximately " + et / 90 + " ms to the next segment; using duration " + a / 90 + " ms for the last video frame.")) : a = $
									} else a = $
								}
								q = Math.round(G.pts - G.dts)
							}
							m.push({
								size: H,
								duration: a,
								cts: q,
								flags: {
									isLeading: 0,
									isDependedOn: 0,
									hasRedundancy: 0,
									degradPrio: 0,
									dependsOn: G.key ? 2 : 1,
									isNonSync: G.key ? 0 : 1
								}
							})
						}
						this.nextAvcDts = f + a;
						var it = t.dropped;
						if (t.len = 0, t.nbNalu = 0, t.dropped = 0, m.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
							var rt = m[0].flags;
							rt.dependsOn = 2, rt.isNonSync = 0
						}
						t.samples = m, o = X.moof(t.sequenceNumber++, d, t), t.samples = [];
						var nt = {
							data1: o,
							data2: s,
							startPTS: u / p,
							endPTS: (c + a) / p,
							startDTS: d / p,
							endDTS: this.nextAvcDts / p,
							type: "video",
							nb: m.length,
							dropped: it
						};
						return this.observer.trigger(w.a.FRAG_PARSING_DATA, nt), nt
					}, t.prototype.remuxAudio = function(t, e, i, r) {
						var n, a, s, o, u, d, l, c = t.inputTimeScale,
							f = t.timescale,
							h = c / f,
							p = t.isAAC ? 1024 : 1152,
							g = p * h,
							m = this._PTSNormalize,
							y = this._initDTS,
							v = !t.isAAC && this.typeSupported.mpeg,
							b = t.samples,
							_ = [],
							T = this.nextAudioPts;
						if (i |= b.length && T && (r && Math.abs(e - T / c) < .1 || Math.abs(b[0].pts - T - y) < 20 * g), b.forEach(function(t) {
								t.pts = t.dts = m(t.pts - y, e * c)
							}), b = b.filter(function(t) {
								return t.pts >= 0
							}), 0 !== b.length) {
							if (i || (T = r ? e * c : b[0].pts), t.isAAC)
								for (var S = this.config.maxAudioFramesDrift, E = 0, R = T; E < b.length;) {
									var k, O = b[E],
										D = O.pts;
									k = D - R;
									var I = Math.abs(1e3 * k / c);
									if (k <= -S * g) L.b.warn("Dropping 1 audio frame @ " + (R / c).toFixed(3) + "s due to " + Math.round(I) + " ms overlap."), b.splice(E, 1), t.len -= O.unit.length;
									else if (k >= S * g && I < Q && R) {
										var C = Math.round(k / g);
										L.b.warn("Injecting " + C + " audio frame @ " + (R / c).toFixed(3) + "s due to " + Math.round(1e3 * k / c) + " ms gap.");
										for (var P = 0; P < C; P++) {
											var x = Math.max(R, 0);
											s = K.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), s || (L.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), s = O.unit.subarray()), b.splice(E, 0, {
												unit: s,
												pts: x,
												dts: x
											}), t.len += s.length, R += g, E++
										}
										O.pts = O.dts = R, R += g, E++
									} else Math.abs(k) > .1 * g, O.pts = O.dts = R, R += g, E++
								}
							for (var M = 0, U = b.length; M < U; M++) {
								var N = b[M],
									F = N.unit,
									B = N.pts;
								if (void 0 !== l) a.duration = Math.round((B - l) / h);
								else {
									var G = Math.round(1e3 * (B - T) / c),
										j = 0;
									if (i && t.isAAC && G) {
										if (G > 0 && G < Q) j = Math.round((B - T) / g), L.b.log(G + " ms hole between AAC samples detected,filling it"), j > 0 && (s = K.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), s || (s = F.subarray()), t.len += j * s.length);
										else if (G < -12) {
											L.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (T / c).toFixed(3) + "s/" + (B / c).toFixed(3) + "s/" + -G + "ms"), t.len -= F.byteLength;
											continue
										}
										B = T
									}
									if (d = B, !(t.len > 0)) return;
									var H = v ? t.len : t.len + 8;
									n = v ? 0 : 8;
									try {
										o = new Uint8Array(H)
									} catch (t) {
										return void this.observer.trigger(w.a.ERROR, {
											type: A.b.MUX_ERROR,
											details: A.a.REMUX_ALLOC_ERROR,
											fatal: !1,
											bytes: H,
											reason: "fail allocating audio mdat " + H
										})
									}
									if (!v) {
										var q = new DataView(o.buffer);
										q.setUint32(0, H), o.set(X.types.mdat, 4)
									}
									for (var V = 0; V < j; V++) s = K.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), s || (L.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), s = F.subarray()), o.set(s, n), n += s.byteLength, a = {
										size: s.byteLength,
										cts: 0,
										duration: 1024,
										flags: {
											isLeading: 0,
											isDependedOn: 0,
											hasRedundancy: 0,
											degradPrio: 0,
											dependsOn: 1
										}
									}, _.push(a)
								}
								o.set(F, n);
								var W = F.byteLength;
								n += W, a = {
									size: W,
									cts: 0,
									duration: 0,
									flags: {
										isLeading: 0,
										isDependedOn: 0,
										hasRedundancy: 0,
										degradPrio: 0,
										dependsOn: 1
									}
								}, _.push(a), l = B
							}
							var z = 0,
								Y = _.length;
							if (Y >= 2 && (z = _[Y - 2].duration, a.duration = z), Y) {
								this.nextAudioPts = T = l + h * z, t.len = 0, t.samples = _, u = v ? new Uint8Array : X.moof(t.sequenceNumber++, d / h, t), t.samples = [];
								var $ = d / c,
									J = T / c,
									Z = {
										data1: u,
										data2: o,
										startPTS: $,
										endPTS: J,
										startDTS: $,
										endDTS: J,
										type: "audio",
										nb: Y
									};
								return this.observer.trigger(w.a.FRAG_PARSING_DATA, Z), Z
							}
							return null
						}
					}, t.prototype.remuxEmptyAudio = function(t, e, i, r) {
						var n = t.inputTimeScale,
							a = t.samplerate ? t.samplerate : n,
							s = n / a,
							o = this.nextAudioPts,
							u = (void 0 !== o ? o : r.startDTS * n) + this._initDTS,
							d = r.endDTS * n + this._initDTS,
							l = 1024,
							c = s * l,
							f = Math.ceil((d - u) / c),
							h = K.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
						if (L.b.warn("remux empty Audio"), !h) return void L.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
						for (var p = [], g = 0; g < f; g++) {
							var m = u + g * c;
							p.push({
								unit: h,
								pts: m,
								dts: m
							}), t.len += h.length
						}
						t.samples = p, this.remuxAudio(t, e, i)
					}, t.prototype.remuxID3 = function(t, e) {
						var i, r = t.samples.length,
							n = t.inputTimeScale,
							a = this._initPTS,
							s = this._initDTS;
						if (r) {
							for (var o = 0; o < r; o++) i = t.samples[o], i.pts = (i.pts - a) / n, i.dts = (i.dts - s) / n;
							this.observer.trigger(w.a.FRAG_PARSING_METADATA, {
								samples: t.samples
							})
						}
						t.samples = [], e = e
					}, t.prototype.remuxText = function(t, e) {
						t.samples.sort(function(t, e) {
							return t.pts - e.pts
						});
						var i, r = t.samples.length,
							n = t.inputTimeScale,
							a = this._initPTS;
						if (r) {
							for (var s = 0; s < r; s++) i = t.samples[s], i.pts = (i.pts - a) / n;
							this.observer.trigger(w.a.FRAG_PARSING_USERDATA, {
								samples: t.samples
							})
						}
						t.samples = [], e = e
					}, t.prototype._PTSNormalize = function(t, e) {
						var i;
						if (void 0 === e) return t;
						for (i = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += i;
						return t
					}, t
				}(),
				J = $,
				Z = function() {
					function t(e) {
						S(this, t), this.observer = e
					}
					return t.prototype.destroy = function() {}, t.prototype.resetTimeStamp = function() {}, t.prototype.resetInitSegment = function() {}, t.prototype.remux = function(t, e, i, r, n, a, s, o) {
						var u = this.observer,
							d = "";
						t && (d += "audio"), e && (d += "video"), u.trigger(w.a.FRAG_PARSING_DATA, {
							data1: o,
							startPTS: n,
							startDTS: n,
							type: d,
							nb: 1,
							dropped: 0
						}), u.trigger(w.a.FRAG_PARSED)
					}, t
				}(),
				tt = Z,
				et = function() {
					function t(e, i, r, n) {
						E(this, t), this.observer = e, this.typeSupported = i, this.config = r, this.vendor = n
					}
					return t.prototype.destroy = function() {
						var t = this.demuxer;
						t && t.destroy()
					}, t.prototype.push = function(t, e, i, r, n, a, s, o, u, d, l, c) {
						if (t.byteLength > 0 && null != e && null != e.key && "AES-128" === e.method) {
							var f = this.decrypter;
							null == f && (f = this.decrypter = new R.a(this.observer, this.config));
							var h, p = this;
							try {
								h = performance.now()
							} catch (t) {
								h = Date.now()
							}
							f.decrypt(t, e.key.buffer, e.iv.buffer, function(t) {
								var f;
								try {
									f = performance.now()
								} catch (t) {
									f = Date.now()
								}
								p.observer.trigger(w.a.FRAG_DECRYPTED, {
									stats: {
										tstart: h,
										tdecrypt: f
									}
								}), p.pushDecrypted(new Uint8Array(t), e, new Uint8Array(i), r, n, a, s, o, u, d, l, c)
							})
						} else this.pushDecrypted(new Uint8Array(t), e, new Uint8Array(i), r, n, a, s, o, u, d, l, c)
					}, t.prototype.pushDecrypted = function(t, e, i, r, n, a, s, o, u, d, l, c) {
						var f = this.demuxer;
						if (!f || s && !this.probe(t)) {
							for (var h = this.observer, p = this.typeSupported, g = this.config, m = [{
									demux: H,
									remux: J
								}, {
									demux: P,
									remux: tt
								}, {
									demux: D,
									remux: J
								}, {
									demux: V,
									remux: J
								}], y = 0, v = m.length; y < v; y++) {
								var b = m[y],
									_ = b.demux.probe;
								if (_(t)) {
									var T = this.remuxer = new b.remux(h, g, p, this.vendor);
									f = new b.demux(h, T, g, p), this.probe = _;
									break
								}
							}
							if (!f) return void h.trigger(w.a.ERROR, {
								type: A.b.MEDIA_ERROR,
								details: A.a.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "no demux matching with content found"
							});
							this.demuxer = f
						}
						var S = this.remuxer;
						(s || o) && (f.resetInitSegment(i, r, n, d), S.resetInitSegment()), s && (f.resetTimeStamp(c), S.resetTimeStamp(c)), "function" == typeof f.setDecryptData && f.setDecryptData(e), f.append(t, a, u, l)
					}, t
				}();
			e.a = et
		}, function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function a(t, e) {
				var i = jt[e];
				return !!i && i[t.slice(0, 4)] === !0
			}

			function s(t, e) {
				return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
			}

			function o(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function u(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function d(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function l(t, e) {
				if (!t) return null;
				for (var i = null, r = 0; r < t.length; r++) {
					var n = t[r];
					n.id === e && (i = n)
				}
				return i
			}

			function c(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function f(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function h(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function p(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function g(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function m(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function y() {
				if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
			}

			function v(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function b(t, e, i) {
				var r = t[e],
					n = t[i],
					a = n.startPTS;
				isNaN(a) ? i > e ? n.start = r.start + r.duration : n.start = Math.max(r.start - n.duration, 0) : i > e ? (r.duration = a - r.start, r.duration < 0 && Pt.b.warn("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!")) : (n.duration = r.start - a, n.duration < 0 && Pt.b.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!"))
			}

			function _(t, e, i, r, n, a) {
				var s = i;
				if (!isNaN(e.startPTS)) {
					var o = Math.abs(e.startPTS - i);
					isNaN(e.deltaPTS) ? e.deltaPTS = o : e.deltaPTS = Math.max(o, e.deltaPTS), s = Math.max(i, e.startPTS), i = Math.min(i, e.startPTS), r = Math.max(r, e.endPTS), n = Math.min(n, e.startDTS), a = Math.max(a, e.endDTS)
				}
				var u = i - e.start;
				e.start = e.startPTS = i, e.maxStartPTS = s, e.endPTS = r, e.startDTS = n, e.endDTS = a, e.duration = r - i;
				var d = e.sn;
				if (!t || d < t.startSN || d > t.endSN) return 0;
				var l, c, f;
				for (l = d - t.startSN, c = t.fragments, c[l] = e, f = l; f > 0; f--) b(c, f, f - 1);
				for (f = l; f < c.length - 1; f++) b(c, f, f + 1);
				return t.PTSKnown = !0, u
			}

			function T(t, e) {
				var i, r = Math.max(t.startSN, e.startSN) - e.startSN,
					n = Math.min(t.endSN, e.endSN) - e.startSN,
					a = e.startSN - t.startSN,
					s = t.fragments,
					o = e.fragments,
					u = 0;
				if (n < r) return void(e.PTSKnown = !1);
				for (var d = r; d <= n; d++) {
					var l = s[a + d],
						c = o[d];
					c && l && (u = l.cc - c.cc, isNaN(l.startPTS) || (c.start = c.startPTS = l.startPTS, c.endPTS = l.endPTS, c.duration = l.duration, c.backtracked = l.backtracked, c.dropped = l.dropped, i = c))
				}
				if (u)
					for (Pt.b.log("discontinuity sliding from playlist, take drift into account"), d = 0; d < o.length; d++) o[d].cc += u;
				if (i) _(e, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS);
				else if (a >= 0 && a < s.length) {
					var f = s[a].start;
					for (d = 0; d < o.length; d++) o[d].start += f
				}
				e.PTSKnown = t.PTSKnown
			}

			function S(t, e) {
				for (var i = null, r = 0; r < t.length; r += 1) {
					var n = t[r];
					if (n && n.cc === e) {
						i = n;
						break
					}
				}
				return i
			}

			function E(t, e) {
				return ie.search(t, function(t) {
					return t.cc < e ? 1 : t.cc > e ? -1 : 0
				})
			}

			function w(t, e, i) {
				var r = !1;
				return e && e.details && i && (i.endCC > i.startCC || t && t.cc < i.startCC) && (r = !0), r
			}

			function A(t, e) {
				var i = t.fragments,
					r = e.fragments;
				if (!r.length || !i.length) return void Pt.b.log("No fragments to align");
				var n = S(i, r[0].cc);
				return !n || n && !n.startPTS ? void Pt.b.log("No frag in previous level to align on") : n
			}

			function R(t, e) {
				e.fragments.forEach(function(e) {
					if (e) {
						var i = e.start + t;
						e.start = e.startPTS = i, e.endPTS = i + e.duration
					}
				}), e.PTSKnown = !0
			}

			function L(t, e, i) {
				if (w(t, e, i)) {
					var r = A(e.details, i);
					r && (Pt.b.log("Adjusting PTS using last level due to CC increase within current level"), R(r.start, i))
				}
				if (i.PTSKnown === !1 && e && e.details) {
					var n = e.details.programDateTime,
						a = i.programDateTime,
						s = (a - n) / 1e3 + e.details.fragments[0].start;
					isNaN(s) || (Pt.b.log("adjusting PTS using programDateTime delta, sliding:" + s.toFixed(3)), R(s, i))
				}
			}

			function k(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function O(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function D(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function I(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function C(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function P(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function x(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function M(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function U(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function N() {
				var t = y(),
					e = window.SourceBuffer || window.WebKitSourceBuffer,
					i = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					r = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
				return !!i && !!r
			}

			function F(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function B(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function G(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function j(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function H(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function q(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function V(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function W(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function K(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function z(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function Y(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function X(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function Q(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function $(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function J(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function Z(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function tt(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function et(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function it(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function rt(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function nt(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function at() {
				this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new Qe, this.regionList = []
			}

			function st(t) {
				function e(t, e, i, r) {
					return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | r) / 1e3
				}
				var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
				return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
			}

			function ot() {
				this.values = Object.create(null)
			}

			function ut(t, e, i, r) {
				var n = r ? t.split(r) : [t];
				for (var a in n)
					if ("string" == typeof n[a]) {
						var s = n[a].split(i);
						if (2 === s.length) {
							var o = s[0],
								u = s[1];
							e(o, u)
						}
					}
			}

			function dt(t, e, i) {
				function r() {
					var e = st(t);
					if (null === e) throw new Error("Malformed timestamp: " + s);
					return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
				}

				function n(t, e) {
					var r = new ot;
					ut(t, function(t, e) {
						switch (t) {
							case "region":
								for (var n = i.length - 1; n >= 0; n--)
									if (i[n].id === e) {
										r.set(t, i[n].region);
										break
									}
								break;
							case "vertical":
								r.alt(t, e, ["rl", "lr"]);
								break;
							case "line":
								var a = e.split(","),
									s = a[0];
								r.integer(t, s), r.percent(t, s) && r.set("snapToLines", !1), r.alt(t, s, ["auto"]), 2 === a.length && r.alt("lineAlign", a[1], ["start", Je, "end"]);
								break;
							case "position":
								a = e.split(","), r.percent(t, a[0]), 2 === a.length && r.alt("positionAlign", a[1], ["start", Je, "end", "line-left", "line-right", "auto"]);
								break;
							case "size":
								r.percent(t, e);
								break;
							case "align":
								r.alt(t, e, ["start", Je, "end", "left", "right"])
						}
					}, /:/, /\s/), e.region = r.get("region", null), e.vertical = r.get("vertical", "");
					var n = r.get("line", "auto");
					"auto" === n && $e.line === -1 && (n = -1), e.line = n, e.lineAlign = r.get("lineAlign", "start"), e.snapToLines = r.get("snapToLines", !0), e.size = r.get("size", 100), e.align = r.get("align", Je);
					var a = r.get("position", "auto");
					"auto" === a && 50 === $e.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = a
				}

				function a() {
					t = t.replace(/^\s+/, "")
				}
				var s = t;
				if (a(), e.startTime = r(), a(), "-->" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
				t = t.substr(3), a(), e.endTime = r(), a(), n(t, e)
			}

			function lt(t) {
				return t.replace(/<br(?: \/)?>/gi, "\n")
			}

			function ct(t, e, i, r) {
				for (var n, a, s, o, u, d = window.VTTCue || window.TextTrackCue, l = 0; l < r.rows.length; l++)
					if (n = r.rows[l], s = !0, o = 0, u = "", !n.isEmpty()) {
						for (var c = 0; c < n.chars.length; c++) n.chars[c].uchar.match(/\s/) && s ? o++ : (u += n.chars[c].uchar, s = !1);
						n.cueStartTime = e, e === i && (i += 1e-4), a = new d(e, i, lt(u.trim())), o >= 16 ? o-- : o++, navigator.userAgent.match(/Firefox\//) ? a.line = l + 1 : a.line = l > 7 ? l - 2 : l + 1, a.align = "left", a.position = Math.max(0, Math.min(100, 100 * (o / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), t.addCue(a)
					}
			}

			function ft(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function ht(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function pt(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function gt(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function mt(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function yt(t) {
				if (t && t.cues)
					for (; t.cues.length > 0;) t.removeCue(t.cues[0])
			}

			function vt(t, e) {
				return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
			}

			function bt(t, e, i, r) {
				return Math.min(e, r) - Math.max(t, i)
			}

			function _t(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function Tt(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function St(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function Et(t) {
				for (var e = [], i = 0; i < t.length; i++) "subtitles" === t[i].kind && e.push(t[i]);
				return e
			}

			function wt(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function At(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function Rt(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}

			function Lt(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var kt = {};
			i.d(kt, "newCue", function() {
				return ct
			});
			var Ot = i(6),
				Dt = i.n(Ot),
				It = i(1),
				Ct = i(2),
				Pt = i(0),
				xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				Mt = function() {
					function t(e) {
						r(this, t), this.hls = e, this.onEvent = this.onEvent.bind(this);
						for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
						this.handledEvents = n, this.useGenericHandler = !0, this.registerListeners()
					}
					return t.prototype.destroy = function() {
						this.unregisterListeners()
					}, t.prototype.isEventHandler = function() {
						return "object" === xt(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
					}, t.prototype.registerListeners = function() {
						this.isEventHandler() && this.handledEvents.forEach(function(t) {
							if ("hlsEventGeneric" === t) throw new Error("Forbidden event name: " + t);
							this.hls.on(t, this.onEvent)
						}, this)
					}, t.prototype.unregisterListeners = function() {
						this.isEventHandler() && this.handledEvents.forEach(function(t) {
							this.hls.off(t, this.onEvent)
						}, this)
					}, t.prototype.onEvent = function(t, e) {
						this.onEventGeneric(t, e)
					}, t.prototype.onEventGeneric = function(t, e) {
						var i = function(t, e) {
							var i = "on" + t.replace("hls", "");
							if ("function" != typeof this[i]) throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + i + ")");
							return this[i].bind(this, e)
						};
						try {
							i.call(this, t, e).call()
						} catch (e) {
							Pt.b.error("internal error happened while processing " + t + ":" + e.message), this.hls.trigger(It.a.ERROR, {
								type: Ct.b.OTHER_ERROR,
								details: Ct.a.INTERNAL_EXCEPTION,
								fatal: !1,
								event: t,
								err: e
							})
						}
					}, t
				}(),
				Ut = Mt,
				Nt = /^(\d+)x(\d+)$/,
				Ft = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
				Bt = function() {
					function t(e) {
						n(this, t), "string" == typeof e && (e = t.parseAttrList(e));
						for (var i in e) e.hasOwnProperty(i) && (this[i] = e[i])
					}
					return t.prototype.decimalInteger = function(t) {
						var e = parseInt(this[t], 10);
						return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
					}, t.prototype.hexadecimalInteger = function(t) {
						if (this[t]) {
							var e = (this[t] || "0x").slice(2);
							e = (1 & e.length ? "0" : "") + e;
							for (var i = new Uint8Array(e.length / 2), r = 0; r < e.length / 2; r++) i[r] = parseInt(e.slice(2 * r, 2 * r + 2), 16);
							return i
						}
						return null
					}, t.prototype.hexadecimalIntegerAsNumber = function(t) {
						var e = parseInt(this[t], 16);
						return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
					}, t.prototype.decimalFloatingPoint = function(t) {
						return parseFloat(this[t])
					}, t.prototype.enumeratedString = function(t) {
						return this[t]
					}, t.prototype.decimalResolution = function(t) {
						var e = Nt.exec(this[t]);
						if (null !== e) return {
							width: parseInt(e[1], 10),
							height: parseInt(e[2], 10)
						}
					}, t.parseAttrList = function(t) {
						var e, i = {};
						for (Ft.lastIndex = 0; null !== (e = Ft.exec(t));) {
							var r = e[2],
								n = '"';
							0 === r.indexOf(n) && r.lastIndexOf(n) === r.length - 1 && (r = r.slice(1, -1)), i[e[1]] = r
						}
						return i
					}, t
				}(),
				Gt = Bt,
				jt = {
					audio: {
						a3ds: !0,
						"ac-3": !0,
						"ac-4": !0,
						alac: !0,
						alaw: !0,
						dra1: !0,
						"dts+": !0,
						"dts-": !0,
						dtsc: !0,
						dtse: !0,
						dtsh: !0,
						"ec-3": !0,
						enca: !0,
						g719: !0,
						g726: !0,
						m4ae: !0,
						mha1: !0,
						mha2: !0,
						mhm1: !0,
						mhm2: !0,
						mlpa: !0,
						mp4a: !0,
						"raw ": !0,
						Opus: !0,
						samr: !0,
						sawb: !0,
						sawp: !0,
						sevc: !0,
						sqcp: !0,
						ssmv: !0,
						twos: !0,
						ulaw: !0
					},
					video: {
						avc1: !0,
						avc2: !0,
						avc3: !0,
						avc4: !0,
						avcp: !0,
						drac: !0,
						dvav: !0,
						dvhe: !0,
						encv: !0,
						hev1: !0,
						hvc1: !0,
						mjp2: !0,
						mp4v: !0,
						mvc1: !0,
						mvc2: !0,
						mvc3: !0,
						mvc4: !0,
						resv: !0,
						rv60: !0,
						s263: !0,
						svc1: !0,
						svc2: !0,
						"vc-1": !0,
						vp08: !0,
						vp09: !0
					}
				},
				Ht = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				qt = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
				Vt = /#EXT-X-MEDIA:(.*)/g,
				Wt = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
				Kt = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
				zt = function() {
					function t() {
						d(this, t), this.method = null, this.key = null, this.iv = null, this._uri = null
					}
					return Ht(t, [{
						key: "uri",
						get: function() {
							return !this._uri && this.reluri && (this._uri = Dt.a.buildAbsoluteURL(this.baseuri, this.reluri, {
								alwaysNormalize: !0
							})), this._uri
						}
					}]), t
				}(),
				Yt = function() {
					function t() {
						d(this, t), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = []
					}
					return t.prototype.createInitializationVector = function(t) {
						for (var e = new Uint8Array(16), i = 12; i < 16; i++) e[i] = t >> 8 * (15 - i) & 255;
						return e
					}, t.prototype.fragmentDecryptdataFromLevelkey = function(t, e) {
						var i = t;
						return t && t.method && t.uri && !t.iv && (i = new zt, i.method = t.method, i.baseuri = t.baseuri, i.reluri = t.reluri, i.iv = this.createInitializationVector(e)), i
					}, t.prototype.cloneObj = function(t) {
						return JSON.parse(JSON.stringify(t))
					}, Ht(t, [{
						key: "url",
						get: function() {
							return !this._url && this.relurl && (this._url = Dt.a.buildAbsoluteURL(this.baseurl, this.relurl, {
								alwaysNormalize: !0
							})), this._url
						},
						set: function(t) {
							this._url = t
						}
					}, {
						key: "programDateTime",
						get: function() {
							return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime
						}
					}, {
						key: "byteRange",
						get: function() {
							if (!this._byteRange) {
								var t = this._byteRange = [];
								if (this.rawByteRange) {
									var e = this.rawByteRange.split("@", 2);
									if (1 === e.length) {
										var i = this.lastByteRangeEndOffset;
										t[0] = i ? i : 0
									} else t[0] = parseInt(e[1]);
									t[1] = parseInt(e[0]) + t[0]
								}
							}
							return this._byteRange
						}
					}, {
						key: "byteRangeStartOffset",
						get: function() {
							return this.byteRange[0]
						}
					}, {
						key: "byteRangeEndOffset",
						get: function() {
							return this.byteRange[1]
						}
					}, {
						key: "decryptdata",
						get: function() {
							return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
						}
					}]), t
				}(),
				Xt = function(t) {
					function e(i) {
						d(this, e);
						var r = o(this, t.call(this, i, It.a.MANIFEST_LOADING, It.a.LEVEL_LOADING, It.a.AUDIO_TRACK_LOADING, It.a.SUBTITLE_TRACK_LOADING));
						return r.loaders = {}, r
					}
					return u(e, t), e.prototype.destroy = function() {
						for (var t in this.loaders) {
							var e = this.loaders[t];
							e && e.destroy()
						}
						this.loaders = {}, Ut.prototype.destroy.call(this)
					}, e.prototype.onManifestLoading = function(t) {
						this.load(t.url, {
							type: "manifest"
						})
					}, e.prototype.onLevelLoading = function(t) {
						this.load(t.url, {
							type: "level",
							level: t.level,
							id: t.id
						})
					}, e.prototype.onAudioTrackLoading = function(t) {
						this.load(t.url, {
							type: "audioTrack",
							id: t.id
						})
					}, e.prototype.onSubtitleTrackLoading = function(t) {
						this.load(t.url, {
							type: "subtitleTrack",
							id: t.id
						})
					}, e.prototype.load = function(t, e) {
						var i = this.loaders[e.type];
						if (void 0 !== i) {
							var r = i.context;
							if (r && r.url === t) return void Pt.b.trace("playlist request ongoing");
							Pt.b.warn("abort previous loader for type:" + e.type), i.abort()
						}
						var n = this.hls.config,
							a = void 0,
							s = void 0,
							o = void 0,
							u = void 0;
						"manifest" === e.type ? (a = n.manifestLoadingMaxRetry, s = n.manifestLoadingTimeOut, o = n.manifestLoadingRetryDelay, u = n.manifestLoadingMaxRetryTimeout) : "level" === e.type ? (a = 0, s = n.levelLoadingTimeOut) : (a = n.levelLoadingMaxRetry, s = n.levelLoadingTimeOut, o = n.levelLoadingRetryDelay, u = n.levelLoadingMaxRetryTimeout, Pt.b.log("loading playlist for " + e.type + " " + (e.level || e.id))), i = this.loaders[e.type] = e.loader = "undefined" != typeof n.pLoader ? new n.pLoader(n) : new n.loader(n), e.url = t, e.responseType = "";
						var d = void 0,
							l = void 0;
						d = {
							timeout: s,
							maxRetry: a,
							retryDelay: o,
							maxRetryDelay: u
						}, l = {
							onSuccess: this.loadsuccess.bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this)
						}, i.load(e, d, l)
					}, e.prototype.resolve = function(t, e) {
						return Dt.a.buildAbsoluteURL(e, t, {
							alwaysNormalize: !0
						})
					}, e.prototype.parseMasterPlaylist = function(t, e) {
						function i(t, e) {
							["video", "audio"].forEach(function(i) {
								var r = t.filter(function(t) {
									return a(t, i)
								});
								if (r.length) {
									var n = r.filter(function(t) {
										return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
									});
									e[i + "Codec"] = n.length > 0 ? n[0] : r[0], t = t.filter(function(t) {
										return r.indexOf(t) === -1
									})
								}
							}), e.unknownCodecs = t
						}
						var r = [],
							n = void 0;
						for (qt.lastIndex = 0; null != (n = qt.exec(t));) {
							var s = {},
								o = s.attrs = new Gt(n[1]);
							s.url = this.resolve(n[2], e);
							var u = o.decimalResolution("RESOLUTION");
							u && (s.width = u.width, s.height = u.height), s.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"), s.name = o.NAME, i([].concat((o.CODECS || "").split(/[ ,]+/)), s), s.videoCodec && s.videoCodec.indexOf("avc1") !== -1 && (s.videoCodec = this.avc1toavcoti(s.videoCodec)), r.push(s)
						}
						return r
					}, e.prototype.parseMasterPlaylistMedia = function(t, e, i) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
							n = void 0,
							a = [],
							s = 0;
						for (Vt.lastIndex = 0; null !== (n = Vt.exec(t));) {
							var o = {},
								u = new Gt(n[1]);
							if (u.TYPE === i) {
								if (o.groupId = u["GROUP-ID"], o.name = u.NAME, o.type = i, o.default = "YES" === u.DEFAULT, o.autoselect = "YES" === u.AUTOSELECT, o.forced = "YES" === u.FORCED, u.URI && (o.url = this.resolve(u.URI, e)), o.lang = u.LANGUAGE, o.name || (o.name = o.lang), r.length) {
									var d = l(r, o.groupId);
									o.audioCodec = d ? d.codec : r[0].codec
								}
								o.id = s++, a.push(o)
							}
						}
						return a
					}, e.prototype.avc1toavcoti = function(t) {
						var e, i = t.split(".");
						return i.length > 2 ? (e = i.shift() + ".", e += parseInt(i.shift()).toString(16), e += ("000" + parseInt(i.shift()).toString(16)).substr(-4)) : e = t, e
					}, e.prototype.parseLevelPlaylist = function(t, e, i, r) {
						var n, a, s = 0,
							o = 0,
							u = {
								type: null,
								version: null,
								url: e,
								fragments: [],
								live: !0,
								startSN: 0
							},
							d = new zt,
							l = 0,
							c = null,
							f = new Yt;
						for (Wt.lastIndex = 0; null !== (n = Wt.exec(t));) {
							var h = n[1];
							if (h) {
								f.duration = parseFloat(h);
								var p = (" " + n[2]).slice(1);
								f.title = p ? p : null, f.tagList.push(p ? ["INF", h, p] : ["INF", h])
							} else if (n[3]) {
								if (!isNaN(f.duration)) {
									var g = s++;
									f.type = r, f.start = o, f.levelkey = d, f.sn = g, f.level = i, f.cc = l, f.baseurl = e, f.relurl = (" " + n[3]).slice(1), u.fragments.push(f), c = f, o += f.duration, f = new Yt
								}
							} else if (n[4]) {
								if (f.rawByteRange = (" " + n[4]).slice(1), c) {
									var m = c.byteRangeEndOffset;
									m && (f.lastByteRangeEndOffset = m)
								}
							} else if (n[5]) f.rawProgramDateTime = (" " + n[5]).slice(1), f.tagList.push(["PROGRAM-DATE-TIME", f.rawProgramDateTime]), void 0 === u.programDateTime && (u.programDateTime = new Date(new Date(Date.parse(n[5])) - 1e3 * o));
							else {
								for (n = n[0].match(Kt), a = 1; a < n.length && void 0 === n[a]; a++);
								var y = (" " + n[a + 1]).slice(1),
									v = (" " + n[a + 2]).slice(1);
								switch (n[a]) {
									case "#":
										f.tagList.push(v ? [y, v] : [y]);
										break;
									case "PLAYLIST-TYPE":
										u.type = y.toUpperCase();
										break;
									case "MEDIA-SEQUENCE":
										s = u.startSN = parseInt(y);
										break;
									case "TARGETDURATION":
										u.targetduration = parseFloat(y);
										break;
									case "VERSION":
										u.version = parseInt(y);
										break;
									case "EXTM3U":
										break;
									case "ENDLIST":
										u.live = !1;
										break;
									case "DIS":
										l++, f.tagList.push(["DIS"]);
										break;
									case "DISCONTINUITY-SEQ":
										l = parseInt(y);
										break;
									case "KEY":
										var b = y,
											_ = new Gt(b),
											T = _.enumeratedString("METHOD"),
											S = _.URI,
											E = _.hexadecimalInteger("IV");
										T && (d = new zt, S && ["AES-128", "SAMPLE-AES"].indexOf(T) >= 0 && (d.method = T, d.baseuri = e, d.reluri = S, d.key = null, d.iv = E));
										break;
									case "START":
										var w = y,
											A = new Gt(w),
											R = A.decimalFloatingPoint("TIME-OFFSET");
										isNaN(R) || (u.startTimeOffset = R);
										break;
									case "MAP":
										var L = new Gt(y);
										f.relurl = L.URI, f.rawByteRange = L.BYTERANGE, f.baseurl = e, f.level = i, f.type = r, f.sn = "initSegment", u.initSegment = f, f = new Yt;
										break;
									default:
										Pt.b.warn("line parsed but not handled: " + n)
								}
							}
						}
						return f = c, f && !f.relurl && (u.fragments.pop(), o -= f.duration), u.totalduration = o, u.averagetargetduration = o / u.fragments.length, u.endSN = s - 1, u.startCC = u.fragments[0] ? u.fragments[0].cc : 0, u.endCC = l, u
					}, e.prototype.loadsuccess = function(t, e, i) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
							n = t.data,
							a = t.url,
							s = i.type,
							o = i.id,
							u = i.level,
							d = this.hls;
						if (this.loaders[s] = void 0, void 0 !== a && 0 !== a.indexOf("data:") || (a = i.url), e.tload = performance.now(), 0 === n.indexOf("#EXTM3U"))
							if (n.indexOf("#EXTINF:") > 0) {
								var l = "audioTrack" !== s && "subtitleTrack" !== s,
									c = isNaN(u) ? isNaN(o) ? 0 : o : u,
									f = this.parseLevelPlaylist(n, a, c, "audioTrack" === s ? "audio" : "subtitleTrack" === s ? "subtitle" : "main");
								f.tload = e.tload, "manifest" === s && d.trigger(It.a.MANIFEST_LOADED, {
									levels: [{
										url: a,
										details: f
									}],
									audioTracks: [],
									url: a,
									stats: e,
									networkDetails: r
								}), e.tparsed = performance.now(), f.targetduration ? l ? d.trigger(It.a.LEVEL_LOADED, {
									details: f,
									level: u || 0,
									id: o || 0,
									stats: e,
									networkDetails: r
								}) : "audioTrack" === s ? d.trigger(It.a.AUDIO_TRACK_LOADED, {
									details: f,
									id: o,
									stats: e,
									networkDetails: r
								}) : "subtitleTrack" === s && d.trigger(It.a.SUBTITLE_TRACK_LOADED, {
									details: f,
									id: o,
									stats: e,
									networkDetails: r
								}) : d.trigger(It.a.ERROR, {
									type: Ct.b.NETWORK_ERROR,
									details: Ct.a.MANIFEST_PARSING_ERROR,
									fatal: !0,
									url: a,
									reason: "invalid targetduration",
									networkDetails: r
								})
							} else {
								var h = this.parseMasterPlaylist(n, a);
								if (h.length) {
									var p = h.map(function(t) {
											return {
												id: t.attrs.AUDIO,
												codec: t.audioCodec
											}
										}),
										g = this.parseMasterPlaylistMedia(n, a, "AUDIO", p),
										m = this.parseMasterPlaylistMedia(n, a, "SUBTITLES");
									if (g.length) {
										var y = !1;
										g.forEach(function(t) {
											t.url || (y = !0)
										}), y === !1 && h[0].audioCodec && !h[0].attrs.AUDIO && (Pt.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
											type: "main",
											name: "main"
										}))
									}
									d.trigger(It.a.MANIFEST_LOADED, {
										levels: h,
										audioTracks: g,
										subtitles: m,
										url: a,
										stats: e,
										networkDetails: r
									})
								} else d.trigger(It.a.ERROR, {
									type: Ct.b.NETWORK_ERROR,
									details: Ct.a.MANIFEST_PARSING_ERROR,
									fatal: !0,
									url: a,
									reason: "no level found in manifest",
									networkDetails: r
								})
							}
						else d.trigger(It.a.ERROR, {
							type: Ct.b.NETWORK_ERROR,
							details: Ct.a.MANIFEST_PARSING_ERROR,
							fatal: !0,
							url: a,
							reason: "no EXTM3U delimiter",
							networkDetails: r
						})
					}, e.prototype.loaderror = function(t, e) {
						var i, r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							a = e.loader;
						switch (e.type) {
							case "manifest":
								i = Ct.a.MANIFEST_LOAD_ERROR, r = !0;
								break;
							case "level":
								i = Ct.a.LEVEL_LOAD_ERROR, r = !1;
								break;
							case "audioTrack":
								i = Ct.a.AUDIO_TRACK_LOAD_ERROR, r = !1
						}
						a && (a.abort(), this.loaders[e.type] = void 0), this.hls.trigger(It.a.ERROR, {
							type: Ct.b.NETWORK_ERROR,
							details: i,
							fatal: r,
							url: a.url,
							loader: a,
							response: t,
							context: e,
							networkDetails: n
						})
					}, e.prototype.loadtimeout = function(t, e) {
						var i, r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							a = e.loader;
						switch (e.type) {
							case "manifest":
								i = Ct.a.MANIFEST_LOAD_TIMEOUT, r = !0;
								break;
							case "level":
								i = Ct.a.LEVEL_LOAD_TIMEOUT, r = !1;
								break;
							case "audioTrack":
								i = Ct.a.AUDIO_TRACK_LOAD_TIMEOUT, r = !1
						}
						a && (a.abort(), this.loaders[e.type] = void 0), this.hls.trigger(It.a.ERROR, {
							type: Ct.b.NETWORK_ERROR,
							details: i,
							fatal: r,
							url: a.url,
							loader: a,
							context: e,
							networkDetails: n
						})
					}, e
				}(Ut),
				Qt = Xt,
				$t = function(t) {
					function e(i) {
						c(this, e);
						var r = f(this, t.call(this, i, It.a.FRAG_LOADING));
						return r.loaders = {}, r
					}
					return h(e, t), e.prototype.destroy = function() {
						var t = this.loaders;
						for (var e in t) {
							var i = t[e];
							i && i.destroy()
						}
						this.loaders = {}, Ut.prototype.destroy.call(this)
					}, e.prototype.onFragLoading = function(t) {
						var e = t.frag,
							i = e.type,
							r = this.loaders[i],
							n = this.hls.config;
						e.loaded = 0, r && (Pt.b.warn("abort previous fragment loader for type:" + i), r.abort()), r = this.loaders[i] = e.loader = "undefined" != typeof n.fLoader ? new n.fLoader(n) : new n.loader(n);
						var a = void 0,
							s = void 0,
							o = void 0;
						a = {
							url: e.url,
							frag: e,
							responseType: "arraybuffer",
							progressData: !1
						};
						var u = e.byteRangeStartOffset,
							d = e.byteRangeEndOffset;
						isNaN(u) || isNaN(d) || (a.rangeStart = u, a.rangeEnd = d), s = {
							timeout: n.fragLoadingTimeOut,
							maxRetry: 0,
							retryDelay: 0,
							maxRetryDelay: n.fragLoadingMaxRetryTimeout
						}, o = {
							onSuccess: this.loadsuccess.bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this),
							onProgress: this.loadprogress.bind(this)
						}, r.load(a, s, o)
					}, e.prototype.loadsuccess = function(t, e, i) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
							n = t.data,
							a = i.frag;
						a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(It.a.FRAG_LOADED, {
							payload: n,
							frag: a,
							stats: e,
							networkDetails: r
						})
					}, e.prototype.loaderror = function(t, e) {
						var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							r = e.loader;
						r && r.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
							type: Ct.b.NETWORK_ERROR,
							details: Ct.a.FRAG_LOAD_ERROR,
							fatal: !1,
							frag: e.frag,
							response: t,
							networkDetails: i
						})
					}, e.prototype.loadtimeout = function(t, e) {
						var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							r = e.loader;
						r && r.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
							type: Ct.b.NETWORK_ERROR,
							details: Ct.a.FRAG_LOAD_TIMEOUT,
							fatal: !1,
							frag: e.frag,
							networkDetails: i
						})
					}, e.prototype.loadprogress = function(t, e, i) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
							n = e.frag;
						n.loaded = t.loaded, this.hls.trigger(It.a.FRAG_LOAD_PROGRESS, {
							frag: n,
							stats: t,
							networkDetails: r
						})
					}, e
				}(Ut),
				Jt = $t,
				Zt = function(t) {
					function e(i) {
						p(this, e);
						var r = g(this, t.call(this, i, It.a.KEY_LOADING));
						return r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r
					}
					return m(e, t), e.prototype.destroy = function() {
						for (var t in this.loaders) {
							var e = this.loaders[t];
							e && e.destroy()
						}
						this.loaders = {}, Ut.prototype.destroy.call(this)
					}, e.prototype.onKeyLoading = function(t) {
						var e = t.frag,
							i = e.type,
							r = this.loaders[i],
							n = e.decryptdata,
							a = n.uri;
						if (a !== this.decrypturl || null === this.decryptkey) {
							var s = this.hls.config;
							r && (Pt.b.warn("abort previous key loader for type:" + i), r.abort()), e.loader = this.loaders[i] = new s.loader(s), this.decrypturl = a, this.decryptkey = null;
							var o = void 0,
								u = void 0,
								d = void 0;
							o = {
								url: a,
								frag: e,
								responseType: "arraybuffer"
							}, u = {
								timeout: s.fragLoadingTimeOut,
								maxRetry: s.fragLoadingMaxRetry,
								retryDelay: s.fragLoadingRetryDelay,
								maxRetryDelay: s.fragLoadingMaxRetryTimeout
							}, d = {
								onSuccess: this.loadsuccess.bind(this),
								onError: this.loaderror.bind(this),
								onTimeout: this.loadtimeout.bind(this)
							}, e.loader.load(o, u, d)
						} else this.decryptkey && (n.key = this.decryptkey, this.hls.trigger(It.a.KEY_LOADED, {
							frag: e
						}))
					}, e.prototype.loadsuccess = function(t, e, i) {
						var r = i.frag;
						this.decryptkey = r.decryptdata.key = new Uint8Array(t.data), r.loader = void 0, this.loaders[r.type] = void 0, this.hls.trigger(It.a.KEY_LOADED, {
							frag: r
						})
					}, e.prototype.loaderror = function(t, e) {
						var i = e.frag,
							r = i.loader;
						r && r.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
							type: Ct.b.NETWORK_ERROR,
							details: Ct.a.KEY_LOAD_ERROR,
							fatal: !1,
							frag: i,
							response: t
						})
					}, e.prototype.loadtimeout = function(t, e) {
						var i = e.frag,
							r = i.loader;
						r && r.abort(), this.loaders[e.type] = void 0, this.hls.trigger(It.a.ERROR, {
							type: Ct.b.NETWORK_ERROR,
							details: Ct.a.KEY_LOAD_TIMEOUT,
							fatal: !1,
							frag: i
						})
					}, e
				}(Ut),
				te = Zt,
				ee = {
					search: function(t, e) {
						for (var i = 0, r = t.length - 1, n = null, a = null; i <= r;) {
							n = (i + r) / 2 | 0, a = t[n];
							var s = e(a);
							if (s > 0) i = n + 1;
							else {
								if (!(s < 0)) return a;
								r = n - 1
							}
						}
						return null
					}
				},
				ie = ee,
				re = {
					isBuffered: function(t, e) {
						try {
							if (t)
								for (var i = t.buffered, r = 0; r < i.length; r++)
									if (e >= i.start(r) && e <= i.end(r)) return !0
						} catch (t) {}
						return !1
					},
					bufferInfo: function(t, e, i) {
						try {
							if (t) {
								var r, n = t.buffered,
									a = [];
								for (r = 0; r < n.length; r++) a.push({
									start: n.start(r),
									end: n.end(r)
								});
								return this.bufferedInfo(a, e, i)
							}
						} catch (t) {}
						return {
							len: 0,
							start: e,
							end: e,
							nextStart: void 0
						}
					},
					bufferedInfo: function(t, e, i) {
						var r, n, a, s, o, u = [];
						for (t.sort(function(t, e) {
								var i = t.start - e.start;
								return i ? i : e.end - t.end
							}), o = 0; o < t.length; o++) {
							var d = u.length;
							if (d) {
								var l = u[d - 1].end;
								t[o].start - l < i ? t[o].end > l && (u[d - 1].end = t[o].end) : u.push(t[o])
							} else u.push(t[o])
						}
						for (o = 0, r = 0, n = a = e; o < u.length; o++) {
							var c = u[o].start,
								f = u[o].end;
							if (e + i >= c && e < f) n = c, a = f, r = a - e;
							else if (e + i < c) {
								s = c;
								break
							}
						}
						return {
							len: r,
							start: n,
							end: a,
							nextStart: s
						}
					}
				},
				ne = re,
				ae = i(7),
				se = i(5),
				oe = i.n(se),
				ue = i(9),
				de = i.n(ue),
				le = y(),
				ce = function() {
					function t(e, i) {
						v(this, t), this.hls = e, this.id = i;
						var r = this.observer = new oe.a,
							n = e.config;
						r.trigger = function(t) {
							for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
							r.emit.apply(r, [t, t].concat(i))
						}, r.off = function(t) {
							for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
							r.removeListener.apply(r, [t].concat(i))
						};
						var a = function(t, i) {
							i = i || {}, i.frag = this.frag, i.id = this.id, e.trigger(t, i)
						}.bind(this);
						r.on(It.a.FRAG_DECRYPTED, a), r.on(It.a.FRAG_PARSING_INIT_SEGMENT, a), r.on(It.a.FRAG_PARSING_DATA, a), r.on(It.a.FRAG_PARSED, a), r.on(It.a.ERROR, a), r.on(It.a.FRAG_PARSING_METADATA, a), r.on(It.a.FRAG_PARSING_USERDATA, a), r.on(It.a.INIT_PTS_FOUND, a);
						var s = {
								mp4: le.isTypeSupported("video/mp4"),
								mpeg: le.isTypeSupported("audio/mpeg"),
								mp3: le.isTypeSupported('audio/mp4; codecs="mp3"')
							},
							o = navigator.vendor;
						if (n.enableWorker && "undefined" != typeof Worker) {
							Pt.b.log("demuxing in webworker");
							var u = void 0;
							try {
								u = this.w = de()(10), this.onwmsg = this.onWorkerMessage.bind(this), u.addEventListener("message", this.onwmsg), u.onerror = function(t) {
									e.trigger(It.a.ERROR, {
										type: Ct.b.OTHER_ERROR,
										details: Ct.a.INTERNAL_EXCEPTION,
										fatal: !0,
										event: "demuxerWorker",
										err: {
											message: t.message + " (" + t.filename + ":" + t.lineno + ")"
										}
									})
								}, u.postMessage({
									cmd: "init",
									typeSupported: s,
									vendor: o,
									id: i,
									config: JSON.stringify(n)
								})
							} catch (t) {
								Pt.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), u && URL.revokeObjectURL(u.objectURL), this.demuxer = new ae.a(r, s, n, o), this.w = void 0
							}
						} else this.demuxer = new ae.a(r, s, n, o)
					}
					return t.prototype.destroy = function() {
						var t = this.w;
						if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.w = null;
						else {
							var e = this.demuxer;
							e && (e.destroy(), this.demuxer = null)
						}
						var i = this.observer;
						i && (i.removeAllListeners(), this.observer = null)
					}, t.prototype.push = function(t, e, i, r, n, a, s, o) {
						var u = this.w,
							d = isNaN(n.startDTS) ? n.start : n.startDTS,
							l = n.decryptdata,
							c = this.frag,
							f = !(c && n.cc === c.cc),
							h = !(c && n.level === c.level),
							p = c && n.sn === c.sn + 1,
							g = !h && p;
						if (f && Pt.b.log(this.id + ":discontinuity detected"), h && Pt.b.log(this.id + ":switch detected"), this.frag = n, u) u.postMessage({
							cmd: "demux",
							data: t,
							decryptdata: l,
							initSegment: e,
							audioCodec: i,
							videoCodec: r,
							timeOffset: d,
							discontinuity: f,
							trackSwitch: h,
							contiguous: g,
							duration: a,
							accurateTimeOffset: s,
							defaultInitPTS: o
						}, t instanceof ArrayBuffer ? [t] : []);
						else {
							var m = this.demuxer;
							m && m.push(t, l, e, i, r, d, f, h, g, a, s, o)
						}
					}, t.prototype.onWorkerMessage = function(t) {
						var e = t.data,
							i = this.hls;
						switch (e.event) {
							case "init":
								URL.revokeObjectURL(this.w.objectURL);
								break;
							case It.a.FRAG_PARSING_DATA:
								e.data.data1 = new Uint8Array(e.data1), e.data2 && (e.data.data2 = new Uint8Array(e.data2));
							default:
								e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, i.trigger(e.event, e.data)
						}
					}, t
				}(),
				fe = ce,
				he = {
					toString: function(t) {
						for (var e = "", i = t.length, r = 0; r < i; r++) e += "[" + t.start(r).toFixed(3) + "," + t.end(r).toFixed(3) + "]";
						return e
					}
				},
				pe = he,
				ge = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				me = {
					STOPPED: "STOPPED",
					IDLE: "IDLE",
					KEY_LOADING: "KEY_LOADING",
					FRAG_LOADING: "FRAG_LOADING",
					FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
					WAITING_LEVEL: "WAITING_LEVEL",
					PARSING: "PARSING",
					PARSED: "PARSED",
					BUFFER_FLUSHING: "BUFFER_FLUSHING",
					ENDED: "ENDED",
					ERROR: "ERROR"
				},
				ye = function(t) {
					function e(i) {
						k(this, e);
						var r = O(this, t.call(this, i, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.MANIFEST_LOADING, It.a.MANIFEST_PARSED, It.a.LEVEL_LOADED, It.a.KEY_LOADED, It.a.FRAG_LOADED, It.a.FRAG_LOAD_EMERGENCY_ABORTED, It.a.FRAG_PARSING_INIT_SEGMENT, It.a.FRAG_PARSING_DATA, It.a.FRAG_PARSED, It.a.ERROR, It.a.AUDIO_TRACK_SWITCHING, It.a.AUDIO_TRACK_SWITCHED, It.a.BUFFER_CREATED, It.a.BUFFER_APPENDED, It.a.BUFFER_FLUSHED));
						return r.config = i.config, r.audioCodecSwap = !1, r.ticks = 0, r._state = me.STOPPED, r.ontick = r.tick.bind(r), r
					}
					return D(e, t), e.prototype.destroy = function() {
						this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), Ut.prototype.destroy.call(this), this.state = me.STOPPED
					}, e.prototype.startLoad = function(t) {
						if (this.levels) {
							var e = this.lastCurrentTime,
								i = this.hls;
							if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
								var r = i.startLevel;
								r === -1 && (r = 0, this.bitrateTest = !0), this.level = i.nextLoadLevel = r, this.loadedmetadata = !1
							}
							e > 0 && t === -1 && (Pt.b.log("override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = me.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
						} else this.forceStartLoad = !0, this.state = me.STOPPED
					}, e.prototype.stopLoad = function() {
						var t = this.fragCurrent;
						t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = me.STOPPED, this.forceStartLoad = !1
					}, e.prototype.tick = function() {
						this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
					}, e.prototype.doTick = function() {
						switch (this.state) {
							case me.ERROR:
								break;
							case me.BUFFER_FLUSHING:
								this.fragLoadError = 0;
								break;
							case me.IDLE:
								this._doTickIdle();
								break;
							case me.WAITING_LEVEL:
								var t = this.levels[this.level];
								t && t.details && (this.state = me.IDLE);
								break;
							case me.FRAG_LOADING_WAITING_RETRY:
								var e = performance.now(),
									i = this.retryDate;
								(!i || e >= i || this.media && this.media.seeking) && (Pt.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = me.IDLE);
								break;
							case me.ERROR:
							case me.STOPPED:
							case me.FRAG_LOADING:
							case me.PARSING:
							case me.PARSED:
							case me.ENDED:
						}
						this._checkBuffer(), this._checkFragmentChanged()
					}, e.prototype._doTickIdle = function() {
						var t = this.hls,
							e = t.config,
							i = this.media;
						if (void 0 !== this.levelLastLoaded && (i || !this.startFragRequested && e.startFragPrefetch)) {
							var r = void 0;
							r = this.loadedmetadata ? i.currentTime : this.nextLoadPosition;
							var n = t.nextLoadLevel,
								a = this.levels[n];
							if (a) {
								var s = a.bitrate,
									o = void 0;
								o = s ? Math.max(8 * e.maxBufferSize / s, e.maxBufferLength) : e.maxBufferLength, o = Math.min(o, e.maxMaxBufferLength);
								var u = ne.bufferInfo(this.mediaBuffer ? this.mediaBuffer : i, r, e.maxBufferHole),
									d = u.len;
								if (!(d >= o)) {
									Pt.b.trace("buffer length of " + d.toFixed(3) + " is below max of " + o.toFixed(3) + ". checking for more payload ..."), this.level = t.nextLoadLevel = n;
									var l = a.details;
									if (void 0 === l || l.live === !0 && this.levelLastLoaded !== n) return void(this.state = me.WAITING_LEVEL);
									var c = this.fragPrevious;
									if (!l.live && c && !c.backtracked && c.sn === l.endSN && !u.nextStart) {
										var f = Math.min(i.duration, c.start + c.duration);
										if (f - Math.max(u.end, c.start) <= Math.max(.2, c.duration)) {
											var h = {};
											return this.altAudio && (h.type = "video"), this.hls.trigger(It.a.BUFFER_EOS, h), void(this.state = me.ENDED)
										}
									}
									this._fetchPayloadOrEos(r, u, l)
								}
							}
						}
					}, e.prototype._fetchPayloadOrEos = function(t, e, i) {
						var r = this.fragPrevious,
							n = this.level,
							a = i.fragments,
							s = a.length;
						if (0 !== s) {
							var o = a[0].start,
								u = a[s - 1].start + a[s - 1].duration,
								d = e.end,
								l = void 0;
							if (i.initSegment && !i.initSegment.data) l = i.initSegment;
							else if (i.live) {
								var c = this.config.initialLiveManifestSize;
								if (s < c) return void Pt.b.warn("Can not start playback of a level, reason: not enough fragments " + s + " < " + c);
								if (l = this._ensureFragmentAtLivePoint(i, d, o, u, r, a, s), null === l) return
							} else d < o && (l = a[0]);
							l || (l = this._findFragment(o, r, s, a, d, u, i)), l && this._loadFragmentOrKey(l, n, i, t, d)
						}
					}, e.prototype._ensureFragmentAtLivePoint = function(t, e, i, r, n, a, s) {
						var o = this.hls.config,
							u = this.media,
							d = void 0,
							l = void 0 !== o.liveMaxLatencyDuration ? o.liveMaxLatencyDuration : o.liveMaxLatencyDurationCount * t.targetduration;
						if (e < Math.max(i - o.maxFragLookUpTolerance, r - l)) {
							var c = this.liveSyncPosition = this.computeLivePosition(i, t);
							Pt.b.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + c.toFixed(3)), e = c, u && u.readyState && u.duration > c && (u.currentTime = c), this.nextLoadPosition = c
						}
						if (t.PTSKnown && e > r && u && u.readyState) return null;
						if (this.startFragRequested && !t.PTSKnown) {
							if (n) {
								var f = n.sn + 1;
								if (f >= t.startSN && f <= t.endSN) {
									var h = a[f - t.startSN];
									n.cc === h.cc && (d = h, Pt.b.log("live playlist, switching playlist, load frag with next SN: " + d.sn))
								}
								d || (d = ie.search(a, function(t) {
									return n.cc - t.cc
								}), d && Pt.b.log("live playlist, switching playlist, load frag with same CC: " + d.sn))
							}
							d || (d = a[Math.min(s - 1, Math.round(s / 2))], Pt.b.log("live playlist, switching playlist, unknown, load middle frag : " + d.sn))
						}
						return d
					}, e.prototype._findFragment = function(t, e, i, r, n, a, s) {
						var o = this.hls.config,
							u = void 0,
							d = void 0,
							l = o.maxFragLookUpTolerance,
							c = e ? r[e.sn - r[0].sn + 1] : void 0,
							f = function(t) {
								var e = Math.min(l, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
								return t.start + t.duration - e <= n ? 1 : t.start - e > n && t.start ? -1 : 0
							};
						if (n < a ? (n > a - l && (l = 0), d = c && !f(c) ? c : ie.search(r, f)) : d = r[i - 1], d) {
							u = d;
							var h = u.sn - s.startSN,
								p = e && u.level === e.level,
								g = r[h - 1],
								m = r[h + 1];
							if (e && u.sn === e.sn)
								if (p && !u.backtracked)
									if (u.sn < s.endSN) {
										var y = e.deltaPTS;
										y && y > o.maxBufferHole && e.dropped && h ? (u = g, Pt.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), e.loadCounter--) : (u = m, Pt.b.log("SN just loaded, load next one: " + u.sn))
									} else u = null;
							else u.backtracked && (m && m.backtracked ? (Pt.b.warn("Already backtracked from fragment " + m.sn + ", will not backtrack to fragment " + u.sn + ". Loading fragment " + m.sn), u = m) : (Pt.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), u.dropped = 0, g ? (g.loadCounter && g.loadCounter--, u = g, u.backtracked = !0) : h && (u = null)))
						}
						return u
					}, e.prototype._loadFragmentOrKey = function(t, e, i, r, n) {
						var a = this.hls,
							s = a.config;
						if (!t.decryptdata || null == t.decryptdata.uri || null != t.decryptdata.key) {
							if (Pt.b.log("Loading " + t.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + e + ", currentTime:" + r.toFixed(3) + ",bufferEnd:" + n.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, t.loadCounter) {
								t.loadCounter++;
								var o = s.fragLoadingLoopThreshold;
								if (t.loadCounter > o && Math.abs(this.fragLoadIdx - t.loadIdx) < o) return void a.trigger(It.a.ERROR, {
									type: Ct.b.MEDIA_ERROR,
									details: Ct.a.FRAG_LOOP_LOADING_ERROR,
									fatal: !1,
									frag: t
								})
							} else t.loadCounter = 1;
							return t.loadIdx = this.fragLoadIdx, t.autoLevel = a.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.fragCurrent = t, this.startFragRequested = !0, isNaN(t.sn) || t.bitrateTest || (this.nextLoadPosition = t.start + t.duration), a.trigger(It.a.FRAG_LOADING, {
								frag: t
							}), this.demuxer || (this.demuxer = new fe(a, "main")), void(this.state = me.FRAG_LOADING)
						}
						Pt.b.log("Loading key for " + t.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + e), this.state = me.KEY_LOADING, a.trigger(It.a.KEY_LOADING, {
							frag: t
						})
					}, e.prototype.getBufferedFrag = function(t) {
						return ie.search(this._bufferedFrags, function(e) {
							return t < e.startPTS ? -1 : t > e.endPTS ? 1 : 0
						})
					}, e.prototype.followingBufferedFrag = function(t) {
						return t ? this.getBufferedFrag(t.endPTS + .5) : null
					}, e.prototype._checkFragmentChanged = function() {
						var t, e, i = this.media;
						if (i && i.readyState && i.seeking === !1 && (e = i.currentTime, e > i.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = e), ne.isBuffered(i, e) ? t = this.getBufferedFrag(e) : ne.isBuffered(i, e + .1) && (t = this.getBufferedFrag(e + .1)), t)) {
							var r = t;
							if (r !== this.fragPlaying) {
								this.hls.trigger(It.a.FRAG_CHANGED, {
									frag: r
								});
								var n = r.level;
								this.fragPlaying && this.fragPlaying.level === n || this.hls.trigger(It.a.LEVEL_SWITCHED, {
									level: n
								}), this.fragPlaying = r
							}
						}
					}, e.prototype.immediateLevelSwitch = function() {
						if (Pt.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
							this.immediateSwitch = !0;
							var t = this.media,
								e = void 0;
							t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
						}
						var i = this.fragCurrent;
						i && i.loader && i.loader.abort(), this.fragCurrent = null, void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
					}, e.prototype.immediateLevelSwitchEnd = function() {
						var t = this.media;
						t && t.buffered.length && (this.immediateSwitch = !1, ne.isBuffered(t, t.currentTime) && (t.currentTime -= 1e-4), this.previouslyPaused || t.play())
					}, e.prototype.nextLevelSwitch = function() {
						var t = this.media;
						if (t && t.readyState) {
							var e = void 0,
								i = void 0,
								r = void 0;
							if (void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), i = this.getBufferedFrag(t.currentTime), i && i.startPTS > 1 && this.flushMainBuffer(0, i.startPTS - 1), t.paused) e = 0;
							else {
								var n = this.hls.nextLoadLevel,
									a = this.levels[n],
									s = this.fragLastKbps;
								e = s && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * s) + 1 : 0
							}
							if (r = this.getBufferedFrag(t.currentTime + e), r && (r = this.followingBufferedFrag(r))) {
								var o = this.fragCurrent;
								o && o.loader && o.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(r.maxStartPTS, Number.POSITIVE_INFINITY)
							}
						}
					}, e.prototype.flushMainBuffer = function(t, e) {
						this.state = me.BUFFER_FLUSHING;
						var i = {
							startOffset: t,
							endOffset: e
						};
						this.altAudio && (i.type = "video"), this.hls.trigger(It.a.BUFFER_FLUSHING, i)
					}, e.prototype.onMediaAttached = function(t) {
						var e = this.media = this.mediaBuffer = t.media;
						this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("seeked", this.onvseeked), e.addEventListener("ended", this.onvended);
						var i = this.config;
						this.levels && i.autoStartLoad && this.hls.startLoad(i.startPosition)
					}, e.prototype.onMediaDetaching = function() {
						var t = this.media;
						t && t.ended && (Pt.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
						var e = this.levels;
						e && e.forEach(function(t) {
							t.details && t.details.fragments.forEach(function(t) {
								t.loadCounter = void 0, t.backtracked = void 0
							})
						}), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("seeked", this.onvseeked), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
					}, e.prototype.onMediaSeeking = function() {
						var t = this.media,
							e = t ? t.currentTime : void 0,
							i = this.config;
						isNaN(e) || Pt.b.log("media seeking to " + e.toFixed(3));
						var r = this.mediaBuffer ? this.mediaBuffer : t,
							n = ne.bufferInfo(r, e, this.config.maxBufferHole);
						if (this.state === me.FRAG_LOADING) {
							var a = this.fragCurrent;
							if (0 === n.len && a) {
								var s = i.maxFragLookUpTolerance,
									o = a.start - s,
									u = a.start + a.duration + s;
								e < o || e > u ? (a.loader && (Pt.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), a.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = me.IDLE) : Pt.b.log("seeking outside of buffer but within currently loaded fragment range")
							}
						} else this.state === me.ENDED && (0 === n.len && (this.fragPrevious = 0), this.state = me.IDLE);
						t && (this.lastCurrentTime = e), this.state !== me.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * i.fragLoadingLoopThreshold), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = e), this.tick()
					}, e.prototype.onMediaSeeked = function() {
						var t = this.media,
							e = t ? t.currentTime : void 0;
						isNaN(e) || Pt.b.log("media seeked to " + e.toFixed(3)), this.tick()
					}, e.prototype.onMediaEnded = function() {
						Pt.b.log("media ended"), this.startPosition = this.lastCurrentTime = 0
					}, e.prototype.onManifestLoading = function() {
						Pt.b.log("trigger BUFFER_RESET"), this.hls.trigger(It.a.BUFFER_RESET), this._bufferedFrags = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
					}, e.prototype.onManifestParsed = function(t) {
						var e, i = !1,
							r = !1;
						t.levels.forEach(function(t) {
							e = t.audioCodec, e && (e.indexOf("mp4a.40.2") !== -1 && (i = !0), e.indexOf("mp4a.40.5") !== -1 && (r = !0))
						}), this.audioCodecSwitch = i && r, this.audioCodecSwitch && Pt.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
						var n = this.config;
						(n.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(n.startPosition)
					}, e.prototype.onLevelLoaded = function(t) {
						var e = t.details,
							i = t.level,
							r = this.levels[this.levelLastLoaded],
							n = this.levels[i],
							a = e.totalduration,
							s = 0;
						if (Pt.b.log("level " + i + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + a), e.live) {
							var o = n.details;
							o && e.fragments.length > 0 ? (T(o, e), s = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(s, o), e.PTSKnown && !isNaN(s) ? Pt.b.log("live playlist sliding:" + s.toFixed(3)) : (Pt.b.log("live playlist - outdated PTS, unknown sliding"), L(this.fragPrevious, r, e))) : (Pt.b.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, L(this.fragPrevious, r, e))
						} else e.PTSKnown = !1;
						if (n.details = e, this.levelLastLoaded = i, this.hls.trigger(It.a.LEVEL_UPDATED, {
								details: e,
								level: i
							}), this.startFragRequested === !1) {
							if (this.startPosition === -1 || this.lastCurrentTime === -1) {
								var u = e.startTimeOffset;
								isNaN(u) ? e.live ? (this.startPosition = this.computeLivePosition(s, e), Pt.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (u < 0 && (Pt.b.log("negative start time offset " + u + ", count from end of last fragment"), u = s + a + u), Pt.b.log("start time offset found in playlist, adjust startPosition to " + u), this.startPosition = u), this.lastCurrentTime = this.startPosition
							}
							this.nextLoadPosition = this.startPosition
						}
						this.state === me.WAITING_LEVEL && (this.state = me.IDLE), this.tick()
					}, e.prototype.onKeyLoaded = function() {
						this.state === me.KEY_LOADING && (this.state = me.IDLE, this.tick())
					}, e.prototype.onFragLoaded = function(t) {
						var e = this.fragCurrent,
							i = t.frag;
						if (this.state === me.FRAG_LOADING && e && "main" === i.type && i.level === e.level && i.sn === e.sn) {
							var r = t.stats,
								n = this.levels[e.level],
								a = n.details;
							if (Pt.b.log("Loaded  " + e.sn + " of [" + a.startSN + " ," + a.endSN + "],level " + e.level), this.bitrateTest = !1, this.stats = r, i.bitrateTest === !0 && this.hls.nextLoadLevel) this.state = me.IDLE, this.startFragRequested = !1, r.tparsed = r.tbuffered = performance.now(), this.hls.trigger(It.a.FRAG_BUFFERED, {
								stats: r,
								frag: e,
								id: "main"
							}), this.tick();
							else if ("initSegment" === i.sn) this.state = me.IDLE, r.tparsed = r.tbuffered = performance.now(), a.initSegment.data = t.payload, this.hls.trigger(It.a.FRAG_BUFFERED, {
								stats: r,
								frag: e,
								id: "main"
							}), this.tick();
							else {
								this.state = me.PARSING;
								var s = a.totalduration,
									o = e.level,
									u = e.sn,
									d = this.config.defaultAudioCodec || n.audioCodec;
								this.audioCodecSwap && (Pt.b.log("swapping playlist audio codec"), void 0 === d && (d = this.lastAudioCodec), d && (d = d.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, Pt.b.log("Parsing " + u + " of [" + a.startSN + " ," + a.endSN + "],level " + o + ", cc " + e.cc);
								var l = this.demuxer;
								l || (l = this.demuxer = new fe(this.hls, "main"));
								var c = this.media,
									f = c && c.seeking,
									h = !f && (a.PTSKnown || !a.live),
									p = a.initSegment ? a.initSegment.data : [];
								l.push(t.payload, p, d, n.videoCodec, e, s, h, void 0)
							}
						}
						this.fragLoadError = 0
					}, e.prototype.onFragParsingInitSegment = function(t) {
						var e = this.fragCurrent,
							i = t.frag;
						if (e && "main" === t.id && i.sn === e.sn && i.level === e.level && this.state === me.PARSING) {
							var r, n, a = t.tracks;
							if (a.audio && this.altAudio && delete a.audio, n = a.audio) {
								var s = this.levels[this.level].audioCodec,
									o = navigator.userAgent.toLowerCase();
								s && this.audioCodecSwap && (Pt.b.log("swapping playlist audio codec"), s = s.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== n.metadata.channelCount && o.indexOf("firefox") === -1 && (s = "mp4a.40.5"), o.indexOf("android") !== -1 && "audio/mpeg" !== n.container && (s = "mp4a.40.2", Pt.b.log("Android: force audio codec to " + s)), n.levelCodec = s, n.id = t.id
							}
							n = a.video, n && (n.levelCodec = this.levels[this.level].videoCodec, n.id = t.id), this.hls.trigger(It.a.BUFFER_CODECS, a);
							for (r in a) {
								n = a[r], Pt.b.log("main track:" + r + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
								var u = n.initSegment;
								u && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(It.a.BUFFER_APPENDING, {
									type: r,
									data: u,
									parent: "main",
									content: "initSegment"
								}))
							}
							this.tick()
						}
					}, e.prototype.onFragParsingData = function(t) {
						var e = this,
							i = this.fragCurrent,
							r = t.frag;
						if (i && "main" === t.id && r.sn === i.sn && r.level === i.level && ("audio" !== t.type || !this.altAudio) && this.state === me.PARSING) {
							var n = this.levels[this.level],
								a = i;
							if (isNaN(t.endPTS) && (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration), Pt.b.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type)
								if (a.dropped = t.dropped, a.dropped)
									if (a.backtracked) Pt.b.warn("Already backtracked on this fragment, appending with the gap");
									else {
										var s = n.details;
										if (!s || a.sn !== s.startSN) return Pt.b.warn("missing video frame(s), backtracking fragment"), a.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = me.IDLE, this.fragPrevious = a, void this.tick();
										Pt.b.warn("missing video frame(s) on first frag, appending with gap")
									}
							else a.backtracked = !1;
							var o = _(n.details, a, t.startPTS, t.endPTS, t.startDTS, t.endDTS),
								u = this.hls;
							u.trigger(It.a.LEVEL_PTS_UPDATED, {
								details: n.details,
								level: this.level,
								drift: o,
								type: t.type,
								start: t.startPTS,
								end: t.endPTS
							}), [t.data1, t.data2].forEach(function(i) {
								i && i.length && e.state === me.PARSING && (e.appended = !0, e.pendingBuffering = !0, u.trigger(It.a.BUFFER_APPENDING, {
									type: t.type,
									data: i,
									parent: "main",
									content: "data"
								}))
							}), this.tick()
						}
					}, e.prototype.onFragParsed = function(t) {
						var e = this.fragCurrent,
							i = t.frag;
						e && "main" === t.id && i.sn === e.sn && i.level === e.level && this.state === me.PARSING && (this.stats.tparsed = performance.now(), this.state = me.PARSED, this._checkAppendedParsed())
					}, e.prototype.onAudioTrackSwitching = function(t) {
						var e = !!t.url,
							i = t.id;
						if (!e) {
							if (this.mediaBuffer !== this.media) {
								Pt.b.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
								var r = this.fragCurrent;
								r.loader && (Pt.b.log("switching to main audio track, cancel main fragment load"), r.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = me.IDLE
							}
							var n = this.hls;
							n.trigger(It.a.BUFFER_FLUSHING, {
								startOffset: 0,
								endOffset: Number.POSITIVE_INFINITY,
								type: "audio"
							}), n.trigger(It.a.AUDIO_TRACK_SWITCHED, {
								id: i
							}), this.altAudio = !1
						}
					}, e.prototype.onAudioTrackSwitched = function(t) {
						var e = t.id,
							i = !!this.hls.audioTracks[e].url;
						if (i) {
							var r = this.videoBuffer;
							r && this.mediaBuffer !== r && (Pt.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = r)
						}
						this.altAudio = i, this.tick()
					}, e.prototype.onBufferCreated = function(t) {
						var e = t.tracks,
							i = void 0,
							r = void 0,
							n = !1;
						for (var a in e) {
							var s = e[a];
							"main" === s.id ? (r = a, i = s, "video" === a && (this.videoBuffer = e[a].buffer)) : n = !0
						}
						n && i ? (Pt.b.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
					}, e.prototype.onBufferAppended = function(t) {
						if ("main" === t.parent) {
							var e = this.state;
							e !== me.PARSING && e !== me.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
						}
					}, e.prototype._checkAppendedParsed = function() {
						if (!(this.state !== me.PARSED || this.appended && this.pendingBuffering)) {
							var t = this.fragCurrent;
							if (t) {
								var e = this.mediaBuffer ? this.mediaBuffer : this.media;
								Pt.b.log("main buffered : " + pe.toString(e.buffered));
								var i = this._bufferedFrags.filter(function(t) {
									return ne.isBuffered(e, (t.startPTS + t.endPTS) / 2)
								});
								i.push(t), this._bufferedFrags = i.sort(function(t, e) {
									return t.startPTS - e.startPTS
								}), this.fragPrevious = t;
								var r = this.stats;
								r.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(It.a.FRAG_BUFFERED, {
									stats: r,
									frag: t,
									id: "main"
								}), this.state = me.IDLE
							}
							this.tick()
						}
					}, e.prototype.onError = function(t) {
						var e = t.frag || this.fragCurrent;
						if (!e || "main" === e.type) {
							var i = !!this.media && ne.isBuffered(this.media, this.media.currentTime) && ne.isBuffered(this.media, this.media.currentTime + .5);
							switch (t.details) {
								case Ct.a.FRAG_LOAD_ERROR:
								case Ct.a.FRAG_LOAD_TIMEOUT:
								case Ct.a.KEY_LOAD_ERROR:
								case Ct.a.KEY_LOAD_TIMEOUT:
									if (!t.fatal)
										if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
											var r = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
											e.loadCounter = 0, Pt.b.warn("mediaController: frag loading failed, retry in " + r + " ms"), this.retryDate = performance.now() + r, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = me.FRAG_LOADING_WAITING_RETRY
										} else Pt.b.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = me.ERROR;
									break;
								case Ct.a.FRAG_LOOP_LOADING_ERROR:
									t.fatal || (i ? (this._reduceMaxBufferLength(e.duration), this.state = me.IDLE) : e.autoLevel && 0 !== e.level || (t.fatal = !0, this.state = me.ERROR));
									break;
								case Ct.a.LEVEL_LOAD_ERROR:
								case Ct.a.LEVEL_LOAD_TIMEOUT:
									this.state !== me.ERROR && (t.fatal ? (this.state = me.ERROR, Pt.b.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== me.WAITING_LEVEL || (this.state = me.IDLE));
									break;
								case Ct.a.BUFFER_FULL_ERROR:
									"main" !== t.parent || this.state !== me.PARSING && this.state !== me.PARSED || (i ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = me.IDLE) : (Pt.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
							}
						}
					}, e.prototype._reduceMaxBufferLength = function(t) {
						var e = this.config;
						e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, Pt.b.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * e.fragLoadingLoopThreshold))
					}, e.prototype._checkBuffer = function() {
						var t = this.media,
							e = this.config;
						if (t && t.readyState) {
							var i = t.currentTime,
								r = this.mediaBuffer ? this.mediaBuffer : t,
								n = r.buffered;
							if (!this.loadedmetadata && n.length) {
								this.loadedmetadata = !0;
								var a = t.seeking ? i : this.startPosition,
									s = ne.isBuffered(r, a),
									o = n.start(0),
									u = !s && Math.abs(a - o) < e.maxSeekHole;
								(i !== a || u) && (Pt.b.log("target start position:" + a), u && (a = o, Pt.b.log("target start position not buffered, seek to buffered.start(0) " + a)), Pt.b.log("adjust currentTime from " + i + " to " + a), t.currentTime = a)
							} else if (this.immediateSwitch) this.immediateLevelSwitchEnd();
							else {
								var d = ne.bufferInfo(t, i, 0),
									l = !(t.paused || t.ended || 0 === t.buffered.length),
									c = .5,
									f = i !== this.lastCurrentTime;
								if (f) this.stallReported && (Pt.b.warn("playback not stuck anymore @" + i + ", after " + Math.round(performance.now() - this.stalled) + "ms"), this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0;
								else if (l) {
									var h = performance.now(),
										p = this.hls;
									if (this.stalled) {
										var g = h - this.stalled,
											m = d.len,
											y = this.nudgeRetry || 0;
										if (m <= c && g > 1e3 * e.lowBufferWatchdogPeriod) {
											this.stallReported || (this.stallReported = !0, Pt.b.warn("playback stalling in low buffer @" + i), p.trigger(It.a.ERROR, {
												type: Ct.b.MEDIA_ERROR,
												details: Ct.a.BUFFER_STALLED_ERROR,
												fatal: !1,
												buffer: m
											}));
											var v = d.nextStart,
												b = v - i;
											if (v && b < e.maxSeekHole && b > 0) {
												this.nudgeRetry = ++y;
												var _ = y * e.nudgeOffset;
												Pt.b.log("adjust currentTime from " + t.currentTime + " to next buffered @ " + v + " + nudge " + _), t.currentTime = v + _, this.stalled = void 0, p.trigger(It.a.ERROR, {
													type: Ct.b.MEDIA_ERROR,
													details: Ct.a.BUFFER_SEEK_OVER_HOLE,
													fatal: !1,
													hole: v + _ - i
												})
											}
										} else if (m > c && g > 1e3 * e.highBufferWatchdogPeriod)
											if (this.stallReported || (this.stallReported = !0, Pt.b.warn("playback stalling in high buffer @" + i), p.trigger(It.a.ERROR, {
													type: Ct.b.MEDIA_ERROR,
													details: Ct.a.BUFFER_STALLED_ERROR,
													fatal: !1,
													buffer: m
												})), this.stalled = void 0, this.nudgeRetry = ++y, y < e.nudgeMaxRetry) {
												var T = t.currentTime,
													S = T + y * e.nudgeOffset;
												Pt.b.log("adjust currentTime from " + T + " to " + S), t.currentTime = S, p.trigger(It.a.ERROR, {
													type: Ct.b.MEDIA_ERROR,
													details: Ct.a.BUFFER_NUDGE_ON_STALL,
													fatal: !1
												})
											} else Pt.b.error("still stuck in high buffer @" + i + " after " + e.nudgeMaxRetry + ", raise fatal error"), p.trigger(It.a.ERROR, {
												type: Ct.b.MEDIA_ERROR,
												details: Ct.a.BUFFER_STALLED_ERROR,
												fatal: !0
											})
									} else this.stalled = h, this.stallReported = !1
								}
							}
						}
					}, e.prototype.onFragLoadEmergencyAborted = function() {
						this.state = me.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
					}, e.prototype.onBufferFlushed = function() {
						var t = this.mediaBuffer ? this.mediaBuffer : this.media;
						this._bufferedFrags = this._bufferedFrags.filter(function(e) {
							return ne.isBuffered(t, (e.startPTS + e.endPTS) / 2)
						}), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.state = me.IDLE, this.fragPrevious = null
					}, e.prototype.swapAudioCodec = function() {
						this.audioCodecSwap = !this.audioCodecSwap
					}, e.prototype.computeLivePosition = function(t, e) {
						var i = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
						return t + Math.max(0, e.totalduration - i)
					}, ge(e, [{
						key: "state",
						set: function(t) {
							if (this.state !== t) {
								var e = this.state;
								this._state = t, Pt.b.log("main stream:" + e + "->" + t), this.hls.trigger(It.a.STREAM_STATE_TRANSITION, {
									previousState: e,
									nextState: t
								})
							}
						},
						get: function() {
							return this._state
						}
					}, {
						key: "currentLevel",
						get: function() {
							var t = this.media;
							if (t) {
								var e = this.getBufferedFrag(t.currentTime);
								if (e) return e.level
							}
							return -1
						}
					}, {
						key: "nextBufferedFrag",
						get: function() {
							var t = this.media;
							return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null
						}
					}, {
						key: "nextLevel",
						get: function() {
							var t = this.nextBufferedFrag;
							return t ? t.level : -1
						}
					}, {
						key: "liveSyncPosition",
						get: function() {
							return this._liveSyncPosition
						},
						set: function(t) {
							this._liveSyncPosition = t
						}
					}]), e
				}(Ut),
				ve = ye,
				be = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				_e = function(t) {
					function e(i) {
						I(this, e);
						var r = C(this, t.call(this, i, It.a.MANIFEST_LOADED, It.a.LEVEL_LOADED, It.a.FRAG_LOADED, It.a.ERROR));
						return r.canload = !1, r.currentLevelIndex = null, r.manualLevelIndex = -1, r.timer = null, r
					}
					return P(e, t), e.prototype.destroy = function() {
						this.cleanTimer(), this.manualLevelIndex = -1
					}, e.prototype.cleanTimer = function() {
						null !== this.timer && (clearTimeout(this.timer), this.timer = null)
					}, e.prototype.startLoad = function() {
						var t = this._levels;
						this.canload = !0, this.levelRetryCount = 0, t && t.forEach(function(t) {
							t.loadError = 0;
							var e = t.details;
							e && e.live && (t.details = void 0)
						}), null !== this.timer && this.loadLevel()
					}, e.prototype.stopLoad = function() {
						this.canload = !1
					}, e.prototype.onManifestLoaded = function(t) {
						var e = [],
							i = void 0,
							r = {},
							n = null,
							a = !1,
							o = !1,
							u = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
							d = [];
						if (t.levels.forEach(function(t) {
								t.loadError = 0, t.fragmentError = !1, a = a || !!t.videoCodec, o = o || !!t.audioCodec || !(!t.attrs || !t.attrs.AUDIO), u === !0 && t.audioCodec && t.audioCodec.indexOf("mp4a.40.34") !== -1 && (t.audioCodec = void 0), n = r[t.bitrate], void 0 === n ? (t.url = [t.url], t.urlId = 0, r[t.bitrate] = t, e.push(t)) : n.url.push(t.url)
							}), a === !0 && o === !0 && (e = e.filter(function(t) {
								var e = t.videoCodec;
								return !!e
							})), e = e.filter(function(t) {
								var e = t.audioCodec,
									i = t.videoCodec;
								return (!e || s(e)) && (!i || s(i))
							}), t.audioTracks && (d = t.audioTracks.filter(function(t) {
								return !t.audioCodec || s(t.audioCodec, "audio")
							})), e.length > 0) {
							i = e[0].bitrate, e.sort(function(t, e) {
								return t.bitrate - e.bitrate
							}), this._levels = e;
							for (var l = 0; l < e.length; l++)
								if (e[l].bitrate === i) {
									this._firstLevel = l, Pt.b.log("manifest loaded," + e.length + " level(s) found, first bitrate:" + i);
									break
								}
							this.hls.trigger(It.a.MANIFEST_PARSED, {
								levels: e,
								audioTracks: d,
								firstLevel: this._firstLevel,
								stats: t.stats,
								audio: o,
								video: a,
								altAudio: d.length > 0
							})
						} else this.hls.trigger(It.a.ERROR, {
							type: Ct.b.MEDIA_ERROR,
							details: Ct.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
							fatal: !0,
							url: this.hls.url,
							reason: "no level with compatible codecs found in manifest"
						})
					}, e.prototype.setLevelInternal = function(t) {
						var e = this._levels,
							i = this.hls;
						if (t >= 0 && t < e.length) {
							if (this.cleanTimer(), this.currentLevelIndex !== t) {
								Pt.b.log("switching to level " + t), this.currentLevelIndex = t;
								var r = e[t];
								r.level = t, i.trigger(It.a.LEVEL_SWITCH, r), i.trigger(It.a.LEVEL_SWITCHING, r)
							}
							var n = e[t],
								a = n.details;
							if (!a || a.live === !0) {
								var s = n.urlId;
								i.trigger(It.a.LEVEL_LOADING, {
									url: n.url[s],
									level: t,
									id: s
								})
							}
						} else i.trigger(It.a.ERROR, {
							type: Ct.b.OTHER_ERROR,
							details: Ct.a.LEVEL_SWITCH_ERROR,
							level: t,
							fatal: !1,
							reason: "invalid level idx"
						})
					}, e.prototype.onError = function(t) {
						if (t.fatal === !0) return void(t.type === Ct.b.NETWORK_ERROR && this.cleanTimer());
						var e = !1,
							i = !1,
							r = void 0;
						switch (t.details) {
							case Ct.a.FRAG_LOAD_ERROR:
							case Ct.a.FRAG_LOAD_TIMEOUT:
							case Ct.a.FRAG_LOOP_LOADING_ERROR:
							case Ct.a.KEY_LOAD_ERROR:
							case Ct.a.KEY_LOAD_TIMEOUT:
								r = t.frag.level, i = !0;
								break;
							case Ct.a.LEVEL_LOAD_ERROR:
							case Ct.a.LEVEL_LOAD_TIMEOUT:
								r = t.context.level, e = !0;
								break;
							case Ct.a.REMUX_ALLOC_ERROR:
								r = t.level, e = !0
						}
						void 0 !== r && this.recoverLevel(t, r, e, i)
					}, e.prototype.recoverLevel = function(t, e, i, r) {
						var n = this,
							a = this.hls.config,
							s = t.details,
							o = this._levels[e],
							u = void 0,
							d = void 0,
							l = void 0;
						if (o.loadError++, o.fragmentError = r, i === !0) {
							if (!(this.levelRetryCount + 1 <= a.levelLoadingMaxRetry)) return Pt.b.error("level controller, cannot recover from " + s + " error"), this.currentLevelIndex = null, this.cleanTimer(), void(t.fatal = !0);
							d = Math.min(Math.pow(2, this.levelRetryCount) * a.levelLoadingRetryDelay, a.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function() {
								return n.loadLevel()
							}, d), t.levelRetry = !0, this.levelRetryCount++, Pt.b.warn("level controller, " + s + ", retry in " + d + " ms, current retry count is " + this.levelRetryCount)
						}
						i !== !0 && r !== !0 || (u = o.url.length, u > 1 && o.loadError < u ? (Pt.b.warn("level controller, " + s + " for level " + e + ": switching to redundant stream id " + o.urlId), o.urlId = (o.urlId + 1) % u, o.details = void 0) : this.manualLevelIndex === -1 ? (l = 0 === e ? this._levels.length - 1 : e - 1, Pt.b.warn("level controller, " + s + ": switch to " + l), this.hls.nextAutoLevel = this.currentLevelIndex = l) : r === !0 && (Pt.b.warn("level controller, " + s + ": reload a fragment"), this.currentLevelIndex = null))
					}, e.prototype.onFragLoaded = function(t) {
						var e = t.frag;
						if (void 0 !== e && "main" === e.type) {
							var i = this._levels[e.level];
							void 0 !== i && (i.fragmentError = !1, i.loadError = 0, this.levelRetryCount = 0)
						}
					}, e.prototype.onLevelLoaded = function(t) {
						var e = this,
							i = t.level;
						if (i === this.currentLevelIndex) {
							var r = this._levels[i];
							r.fragmentError === !1 && (r.loadError = 0, this.levelRetryCount = 0);
							var n = t.details;
							if (n.live) {
								var a = 1e3 * (n.averagetargetduration ? n.averagetargetduration : n.targetduration),
									s = r.details;
								s && n.endSN === s.endSN && (a /= 2, Pt.b.log("same live playlist, reload twice faster")), a -= performance.now() - t.stats.trequest, a = Math.max(1e3, Math.round(a)), Pt.b.log("live playlist, reload in " + a + " ms"), this.timer = setTimeout(function() {
									return e.loadLevel()
								}, a)
							} else this.cleanTimer()
						}
					}, e.prototype.loadLevel = function() {
						var t = void 0,
							e = void 0;
						null !== this.currentLevelIndex && this.canload === !0 && (t = this._levels[this.currentLevelIndex], void 0 !== t && t.url.length > 0 && (e = t.urlId, this.hls.trigger(It.a.LEVEL_LOADING, {
							url: t.url[e],
							level: this.currentLevelIndex,
							id: e
						})))
					}, be(e, [{
						key: "levels",
						get: function() {
							return this._levels
						}
					}, {
						key: "level",
						get: function() {
							return this.currentLevelIndex
						},
						set: function(t) {
							var e = this._levels;
							e && (t = Math.min(t, e.length - 1), this.currentLevelIndex === t && void 0 !== e[t].details || this.setLevelInternal(t))
						}
					}, {
						key: "manualLevel",
						get: function() {
							return this.manualLevelIndex
						},
						set: function(t) {
							this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), t !== -1 && (this.level = t)
						}
					}, {
						key: "firstLevel",
						get: function() {
							return this._firstLevel
						},
						set: function(t) {
							this._firstLevel = t
						}
					}, {
						key: "startLevel",
						get: function() {
							if (void 0 === this._startLevel) {
								var t = this.hls.config.startLevel;
								return void 0 !== t ? t : this._firstLevel
							}
							return this._startLevel
						},
						set: function(t) {
							this._startLevel = t
						}
					}, {
						key: "nextLoadLevel",
						get: function() {
							return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel
						},
						set: function(t) {
							this.level = t, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = t)
						}
					}]), e
				}(Ut),
				Te = _e,
				Se = i(3),
				Ee = function(t) {
					function e(i) {
						x(this, e);
						var r = M(this, t.call(this, i, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.FRAG_PARSING_METADATA));
						return r.id3Track = void 0, r.media = void 0, r
					}
					return U(e, t), e.prototype.destroy = function() {
						Ut.prototype.destroy.call(this)
					}, e.prototype.onMediaAttached = function(t) {
						this.media = t.media, !this.media
					}, e.prototype.onMediaDetaching = function() {
						this.media = void 0
					}, e.prototype.onFragParsingMetadata = function(t) {
						var e = t.frag,
							i = t.samples;
						this.id3Track || (this.id3Track = this.media.addTextTrack("metadata", "id3"), this.id3Track.mode = "hidden");
						for (var r = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, n = 0; n < i.length; n++) {
							var a = Se.a.getID3Frames(i[n].data);
							if (a) {
								var s = i[n].pts,
									o = n < i.length - 1 ? i[n + 1].pts : e.endPTS;
								s === o && (o += 1e-4);
								for (var u = 0; u < a.length; u++) {
									var d = a[u];
									if (!Se.a.isTimeStampFrame(d)) {
										var l = new r(s, o, "");
										l.value = d, this.id3Track.addCue(l)
									}
								}
							}
						}
					}, e
				}(Ut),
				we = Ee,
				Ae = function() {
					function t(e) {
						F(this, t), this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
					}
					return t.prototype.sample = function(t, e) {
						var i = Math.pow(this.alpha_, t);
						this.estimate_ = e * (1 - i) + i * this.estimate_, this.totalWeight_ += t
					}, t.prototype.getTotalWeight = function() {
						return this.totalWeight_
					}, t.prototype.getEstimate = function() {
						if (this.alpha_) {
							var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
							return this.estimate_ / t
						}
						return this.estimate_
					}, t
				}(),
				Re = Ae,
				Le = function() {
					function t(e, i, r, n) {
						B(this, t), this.hls = e, this.defaultEstimate_ = n, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Re(i), this.fast_ = new Re(r)
					}
					return t.prototype.sample = function(t, e) {
						t = Math.max(t, this.minDelayMs_);
						var i = 8e3 * e / t,
							r = t / 1e3;
						this.fast_.sample(r, i), this.slow_.sample(r, i)
					}, t.prototype.canEstimate = function() {
						var t = this.fast_;
						return t && t.getTotalWeight() >= this.minWeight_
					}, t.prototype.getEstimate = function() {
						return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
					}, t.prototype.destroy = function() {}, t
				}(),
				ke = Le,
				Oe = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				De = function(t) {
					function e(i) {
						G(this, e);
						var r = j(this, t.call(this, i, It.a.FRAG_LOADING, It.a.FRAG_LOADED, It.a.FRAG_BUFFERED, It.a.ERROR));
						return r.lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = i, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(r), r
					}
					return H(e, t), e.prototype.destroy = function() {
						this.clearTimer(), Ut.prototype.destroy.call(this)
					}, e.prototype.onFragLoading = function(t) {
						var e = t.frag;
						if ("main" === e.type) {
							if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {
								var i = this.hls,
									r = t.frag.level,
									n = i.levels[r].details.live,
									a = i.config,
									s = void 0,
									o = void 0;
								n ? (s = a.abrEwmaFastLive, o = a.abrEwmaSlowLive) : (s = a.abrEwmaFastVoD, o = a.abrEwmaSlowVoD), this._bwEstimator = new ke(i, o, s, a.abrEwmaDefaultEstimate)
							}
							this.fragCurrent = e
						}
					}, e.prototype._abandonRulesCheck = function() {
						var t = this.hls,
							e = t.media,
							i = this.fragCurrent,
							r = i.loader,
							n = t.minAutoLevel;
						if (!r || r.stats && r.stats.aborted) return Pt.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
						var a = r.stats;
						if (e && a && (!e.paused && 0 !== e.playbackRate || !e.readyState) && i.autoLevel && i.level) {
							var s = performance.now() - a.trequest,
								o = Math.abs(e.playbackRate);
							if (s > 500 * i.duration / o) {
								var u = t.levels,
									d = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / s),
									l = u[i.level],
									c = l.realBitrate ? Math.max(l.realBitrate, l.bitrate) : l.bitrate,
									f = a.total ? a.total : Math.max(a.loaded, Math.round(i.duration * c / 8)),
									h = e.currentTime,
									p = (f - a.loaded) / d,
									g = (ne.bufferInfo(e, h, t.config.maxBufferHole).end - h) / o;
								if (g < 2 * i.duration / o && p > g) {
									var m = void 0,
										y = void 0;
									for (y = i.level - 1; y > n; y--) {
										var v = u[y].realBitrate ? Math.max(u[y].realBitrate, u[y].bitrate) : u[y].bitrate;
										if (m = i.duration * v / (6.4 * d), m < g) break
									}
									m < p && (Pt.b.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (i.level - 1) + "];bufferStarvationDelay:" + m.toFixed(1) + "<" + p.toFixed(1) + ":" + g.toFixed(1)), t.nextLoadLevel = y, this._bwEstimator.sample(s, a.loaded), r.abort(), this.clearTimer(), t.trigger(It.a.FRAG_LOAD_EMERGENCY_ABORTED, {
										frag: i,
										stats: a
									}))
								}
							}
						}
					}, e.prototype.onFragLoaded = function(t) {
						var e = t.frag;
						if ("main" === e.type && !isNaN(e.sn)) {
							if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
								var i = this.hls.levels[e.level],
									r = (i.loaded ? i.loaded.bytes : 0) + t.stats.loaded,
									n = (i.loaded ? i.loaded.duration : 0) + t.frag.duration;
								i.loaded = {
									bytes: r,
									duration: n
								}, i.realBitrate = Math.round(8 * r / n)
							}
							if (t.frag.bitrateTest) {
								var a = t.stats;
								a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(t)
							}
						}
					}, e.prototype.onFragBuffered = function(t) {
						var e = t.stats,
							i = t.frag;
						if (!(e.aborted === !0 || 1 !== i.loadCounter || "main" !== i.type || isNaN(i.sn) || i.bitrateTest && e.tload !== e.tbuffered)) {
							var r = e.tparsed - e.trequest;
							Pt.b.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest))), this._bwEstimator.sample(r, e.loaded), e.bwEstimate = this._bwEstimator.getEstimate(), i.bitrateTest ? this.bitrateTestDelay = r / 1e3 : this.bitrateTestDelay = 0
						}
					}, e.prototype.onError = function(t) {
						switch (t.details) {
							case Ct.a.FRAG_LOAD_ERROR:
							case Ct.a.FRAG_LOAD_TIMEOUT:
								this.clearTimer()
						}
					}, e.prototype.clearTimer = function() {
						clearInterval(this.timer), this.timer = null
					}, e.prototype._findBestLevel = function(t, e, i, r, n, a, s, o, u) {
						for (var d = n; d >= r; d--) {
							var l = u[d],
								c = l.details,
								f = c ? c.totalduration / c.fragments.length : e,
								h = !!c && c.live,
								p = void 0;
							p = d <= t ? s * i : o * i;
							var g = u[d].realBitrate ? Math.max(u[d].realBitrate, u[d].bitrate) : u[d].bitrate,
								m = g * f / p;
							if (Pt.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + d + "/" + Math.round(p) + "/" + g + "/" + f + "/" + a + "/" + m), p > g && (!m || h && !this.bitrateTestDelay || m < a)) return d
						}
						return -1
					}, Oe(e, [{
						key: "nextAutoLevel",
						get: function() {
							var t = this._nextAutoLevel,
								e = this._bwEstimator;
							if (!(t === -1 || e && e.canEstimate())) return t;
							var i = this._nextABRAutoLevel;
							return t !== -1 && (i = Math.min(t, i)), i
						},
						set: function(t) {
							this._nextAutoLevel = t
						}
					}, {
						key: "_nextABRAutoLevel",
						get: function() {
							var t = this.hls,
								e = t.maxAutoLevel,
								i = t.levels,
								r = t.config,
								n = t.minAutoLevel,
								a = t.media,
								s = this.lastLoadedFragLevel,
								o = this.fragCurrent ? this.fragCurrent.duration : 0,
								u = a ? a.currentTime : 0,
								d = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
								l = this._bwEstimator ? this._bwEstimator.getEstimate() : r.abrEwmaDefaultEstimate,
								c = (ne.bufferInfo(a, u, r.maxBufferHole).end - u) / d,
								f = this._findBestLevel(s, o, l, n, e, c, r.abrBandWidthFactor, r.abrBandWidthUpFactor, i);
							if (f >= 0) return f;
							Pt.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
							var h = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay,
								p = r.abrBandWidthFactor,
								g = r.abrBandWidthUpFactor;
							if (0 === c) {
								var m = this.bitrateTestDelay;
								if (m) {
									var y = o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay;
									h = y - m, Pt.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * h) + " ms"), p = g = 1
								}
							}
							return f = this._findBestLevel(s, o, l, n, e, c + h, p, g, i), Math.max(f, 0)
						}
					}]), e
				}(Ut),
				Ie = De,
				Ce = y(),
				Pe = function(t) {
					function e(i) {
						q(this, e);
						var r = V(this, t.call(this, i, It.a.MEDIA_ATTACHING, It.a.MEDIA_DETACHING, It.a.MANIFEST_PARSED, It.a.BUFFER_RESET, It.a.BUFFER_APPENDING, It.a.BUFFER_CODECS, It.a.BUFFER_EOS, It.a.BUFFER_FLUSHING, It.a.LEVEL_PTS_UPDATED, It.a.LEVEL_UPDATED));
						return r._msDuration = null, r._levelDuration = null, r._live = null, r._objectUrl = null, r.onsbue = r.onSBUpdateEnd.bind(r), r.onsbe = r.onSBUpdateError.bind(r), r.pendingTracks = {}, r.tracks = {}, r
					}
					return W(e, t), e.prototype.destroy = function() {
						Ut.prototype.destroy.call(this)
					}, e.prototype.onLevelPtsUpdated = function(t) {
						var e = t.type,
							i = this.tracks.audio;
						if ("audio" === e && i && "audio/mpeg" === i.container) {
							var r = this.sourceBuffer.audio,
								n = Math.abs(r.timestampOffset - t.start);
							if (n > .1) {
								var a = r.updating;
								try {
									r.abort()
								} catch (t) {
									a = !0, Pt.b.warn("can not abort audio buffer: " + t)
								}
								a ? this.audioTimestampOffset = t.start : (Pt.b.warn("change mpeg audio timestamp offset from " + r.timestampOffset + " to " + t.start), r.timestampOffset = t.start)
							}
						}
					}, e.prototype.onManifestParsed = function(t) {
						var e = t.audio,
							i = t.video || t.levels.length && t.audio,
							r = 0;
						t.altAudio && (e || i) && (r = (e ? 1 : 0) + (i ? 1 : 0), Pt.b.log(r + " sourceBuffer(s) expected")), this.sourceBufferNb = r
					}, e.prototype.onMediaAttaching = function(t) {
						var e = this.media = t.media;
						if (e) {
							var i = this.mediaSource = new Ce;
							this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), i.addEventListener("sourceopen", this.onmso), i.addEventListener("sourceended", this.onmse), i.addEventListener("sourceclose", this.onmsc), e.src = URL.createObjectURL(i), this._objectUrl = e.src
						}
					}, e.prototype.onMediaDetaching = function() {
						Pt.b.log("media source detaching");
						var t = this.mediaSource;
						if (t) {
							if ("open" === t.readyState) try {
								t.endOfStream()
							} catch (t) {
								Pt.b.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
							}
							t.removeEventListener("sourceopen", this.onmso), t.removeEventListener("sourceended", this.onmse), t.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : Pt.b.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
						}
						this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(It.a.MEDIA_DETACHED)
					}, e.prototype.onMediaSourceOpen = function() {
						Pt.b.log("media source opened"), this.hls.trigger(It.a.MEDIA_ATTACHED, {
							media: this.media
						});
						var t = this.mediaSource;
						t && t.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
					}, e.prototype.checkPendingTracks = function() {
						var t = this.pendingTracks,
							e = Object.keys(t).length;
						e && (this.sourceBufferNb <= e || 0 === this.sourceBufferNb) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
					}, e.prototype.onMediaSourceClose = function() {
						Pt.b.log("media source closed")
					}, e.prototype.onMediaSourceEnded = function() {
						Pt.b.log("media source ended")
					}, e.prototype.onSBUpdateEnd = function() {
						if (this.audioTimestampOffset) {
							var t = this.sourceBuffer.audio;
							Pt.b.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + this.audioTimestampOffset), t.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
						}
						this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
						var e = this.parent,
							i = this.segments.reduce(function(t, i) {
								return i.parent === e ? t + 1 : t
							}, 0);
						this.hls.trigger(It.a.BUFFER_APPENDED, {
							parent: e,
							pending: i
						}), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
					}, e.prototype.onSBUpdateError = function(t) {
						Pt.b.error("sourceBuffer error:", t), this.hls.trigger(It.a.ERROR, {
							type: Ct.b.MEDIA_ERROR,
							details: Ct.a.BUFFER_APPENDING_ERROR,
							fatal: !1
						})
					}, e.prototype.onBufferReset = function() {
						var t = this.sourceBuffer;
						for (var e in t) {
							var i = t[e];
							try {
								this.mediaSource.removeSourceBuffer(i), i.removeEventListener("updateend", this.onsbue), i.removeEventListener("error", this.onsbe)
							} catch (t) {}
						}
						this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
					}, e.prototype.onBufferCodecs = function(t) {
						if (0 === Object.keys(this.sourceBuffer).length) {
							for (var e in t) this.pendingTracks[e] = t[e];
							var i = this.mediaSource;
							i && "open" === i.readyState && this.checkPendingTracks()
						}
					}, e.prototype.createSourceBuffers = function(t) {
						var e = this.sourceBuffer,
							i = this.mediaSource;
						for (var r in t)
							if (!e[r]) {
								var n = t[r],
									a = n.levelCodec || n.codec,
									s = n.container + ";codecs=" + a;
								Pt.b.log("creating sourceBuffer(" + s + ")");
								try {
									var o = e[r] = i.addSourceBuffer(s);
									o.addEventListener("updateend", this.onsbue), o.addEventListener("error", this.onsbe), this.tracks[r] = {
										codec: a,
										container: n.container
									}, n.buffer = o
								} catch (t) {
									Pt.b.error("error while trying to add sourceBuffer:" + t.message), this.hls.trigger(It.a.ERROR, {
										type: Ct.b.MEDIA_ERROR,
										details: Ct.a.BUFFER_ADD_CODEC_ERROR,
										fatal: !1,
										err: t,
										mimeType: s
									})
								}
							}
						this.hls.trigger(It.a.BUFFER_CREATED, {
							tracks: t
						})
					}, e.prototype.onBufferAppending = function(t) {
						this._needsFlush || (this.segments ? this.segments.push(t) : this.segments = [t], this.doAppending())
					}, e.prototype.onBufferAppendFail = function(t) {
						Pt.b.error("sourceBuffer error:", t.event), this.hls.trigger(It.a.ERROR, {
							type: Ct.b.MEDIA_ERROR,
							details: Ct.a.BUFFER_APPENDING_ERROR,
							fatal: !1
						})
					}, e.prototype.onBufferEos = function(t) {
						var e = this.sourceBuffer,
							i = t.type;
						for (var r in e) i && r !== i || e[r].ended || (e[r].ended = !0, Pt.b.log(r + " sourceBuffer now EOS"));
						this.checkEos()
					}, e.prototype.checkEos = function() {
						var t = this.sourceBuffer,
							e = this.mediaSource;
						if (!e || "open" !== e.readyState) return void(this._needsEos = !1);
						for (var i in t) {
							var r = t[i];
							if (!r.ended) return;
							if (r.updating) return void(this._needsEos = !0)
						}
						Pt.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
						try {
							e.endOfStream()
						} catch (t) {
							Pt.b.warn("exception while calling mediaSource.endOfStream()")
						}
						this._needsEos = !1
					}, e.prototype.onBufferFlushing = function(t) {
						this.flushRange.push({
							start: t.startOffset,
							end: t.endOffset,
							type: t.type
						}), this.flushBufferCounter = 0, this.doFlush()
					}, e.prototype.onLevelUpdated = function(t) {
						var e = t.details;
						e.fragments.length > 0 && (this._levelDuration = e.totalduration + e.fragments[0].start, this._live = e.live, this.updateMediaElementDuration())
					}, e.prototype.updateMediaElementDuration = function() {
						var t = this.hls.config,
							e = void 0;
						if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
							for (var i in this.sourceBuffer)
								if (this.sourceBuffer[i].updating === !0) return;
							e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), this._live === !0 && t.liveDurationInfinity === !0 ? (Pt.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || e === 1 / 0 || isNaN(e)) && (Pt.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
						}
					}, e.prototype.doFlush = function() {
						for (; this.flushRange.length;) {
							var t = this.flushRange[0];
							if (!this.flushBuffer(t.start, t.end, t.type)) return void(this._needsFlush = !0);
							this.flushRange.shift(), this.flushBufferCounter = 0
						}
						if (0 === this.flushRange.length) {
							this._needsFlush = !1;
							var e = 0,
								i = this.sourceBuffer;
							try {
								for (var r in i) e += i[r].buffered.length
							} catch (t) {
								Pt.b.error("error while accessing sourceBuffer.buffered")
							}
							this.appended = e, this.hls.trigger(It.a.BUFFER_FLUSHED)
						}
					}, e.prototype.doAppending = function() {
						var t = this.hls,
							e = this.sourceBuffer,
							i = this.segments;
						if (Object.keys(e).length) {
							if (this.media.error) return this.segments = [], void Pt.b.error("trying to append although a media error occured, flush segment and abort");
							if (this.appending) return;
							if (i && i.length) {
								var r = i.shift();
								try {
									var n = r.type,
										a = e[n];
									a ? a.updating ? i.unshift(r) : (a.ended = !1, this.parent = r.parent, a.appendBuffer(r.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
								} catch (e) {
									Pt.b.error("error while trying to append buffer:" + e.message), i.unshift(r);
									var s = {
										type: Ct.b.MEDIA_ERROR,
										parent: r.parent
									};
									if (22 === e.code) return this.segments = [], s.details = Ct.a.BUFFER_FULL_ERROR, s.fatal = !1, void t.trigger(It.a.ERROR, s);
									if (this.appendError ? this.appendError++ : this.appendError = 1, s.details = Ct.a.BUFFER_APPEND_ERROR, this.appendError > t.config.appendErrorMaxRetry) return Pt.b.log("fail " + t.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), i = [], s.fatal = !0, void t.trigger(It.a.ERROR, s);
									s.fatal = !1, t.trigger(It.a.ERROR, s)
								}
							}
						}
					}, e.prototype.flushBuffer = function(t, e, i) {
						var r, n, a, s, o, u, d = this.sourceBuffer;
						if (Object.keys(d).length) {
							if (Pt.b.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + e), this.flushBufferCounter < this.appended) {
								for (var l in d)
									if (!i || l === i) {
										if (r = d[l], r.ended = !1, r.updating) return Pt.b.warn("cannot flush, sb updating in progress"), !1;
										try {
											for (n = 0; n < r.buffered.length; n++)
												if (a = r.buffered.start(n), s = r.buffered.end(n), navigator.userAgent.toLowerCase().indexOf("firefox") !== -1 && e === Number.POSITIVE_INFINITY ? (o = t, u = e) : (o = Math.max(a, t), u = Math.min(s, e)), Math.min(u, s) - o > .5) return this.flushBufferCounter++, Pt.b.log("flush " + l + " [" + o + "," + u + "], of [" + a + "," + s + "], pos:" + this.media.currentTime), r.remove(o, u), !1
										} catch (t) {
											Pt.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
										}
									}
							} else Pt.b.warn("abort flushing too many retries");
							Pt.b.log("buffer flushed")
						}
						return !0
					}, e
				}(Ut),
				xe = Pe,
				Me = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				Ue = function(t) {
					function e(i) {
						return K(this, e), z(this, t.call(this, i, It.a.FPS_DROP_LEVEL_CAPPING, It.a.MEDIA_ATTACHING, It.a.MANIFEST_PARSED))
					}
					return Y(e, t), e.prototype.destroy = function() {
						this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
					}, e.prototype.onFpsDropLevelCapping = function(t) {
						e.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
					}, e.prototype.onMediaAttaching = function(t) {
						this.media = t.media instanceof HTMLVideoElement ? t.media : null
					}, e.prototype.onManifestParsed = function(t) {
						var e = this.hls;
						this.restrictedLevels = [], e.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = t.levels, e.firstLevel = this.getMaxLevel(t.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
					}, e.prototype.detectPlayerSize = function() {
						if (this.media) {
							var t = this.levels ? this.levels.length : 0;
							if (t) {
								var e = this.hls;
								e.autoLevelCapping = this.getMaxLevel(t - 1), e.autoLevelCapping > this.autoLevelCapping && e.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
							}
						}
					}, e.prototype.getMaxLevel = function(t) {
						var i = this;
						if (!this.levels) return -1;
						var r = this.levels.filter(function(r, n) {
							return e.isLevelAllowed(n, i.restrictedLevels) && n <= t
						});
						return e.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
					}, e.isLevelAllowed = function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
						return e.indexOf(t) === -1
					}, e.getMaxLevelByMediaSize = function(t, e, i) {
						if (!t || t && !t.length) return -1;
						for (var r = function(t, e) {
								return !e || (t.width !== e.width || t.height !== e.height)
							}, n = t.length - 1, a = 0; a < t.length; a += 1) {
							var s = t[a];
							if ((s.width >= e || s.height >= i) && r(s, t[a + 1])) {
								n = a;
								break
							}
						}
						return n
					}, Me(e, [{
						key: "mediaWidth",
						get: function() {
							var t = void 0,
								i = this.media;
							return i && (t = i.width || i.clientWidth || i.offsetWidth, t *= e.contentScaleFactor), t
						}
					}, {
						key: "mediaHeight",
						get: function() {
							var t = void 0,
								i = this.media;
							return i && (t = i.height || i.clientHeight || i.offsetHeight, t *= e.contentScaleFactor), t
						}
					}], [{
						key: "contentScaleFactor",
						get: function() {
							var t = 1;
							try {
								t = window.devicePixelRatio
							} catch (t) {}
							return t
						}
					}]), e
				}(Ut),
				Ne = Ue,
				Fe = function(t) {
					function e(i) {
						return X(this, e), Q(this, t.call(this, i, It.a.MEDIA_ATTACHING))
					}
					return $(e, t), e.prototype.destroy = function() {
						this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
					}, e.prototype.onMediaAttaching = function(t) {
						var e = this.hls.config;
						if (e.capLevelOnFPSDrop) {
							var i = this.video = t.media instanceof HTMLVideoElement ? t.media : null;
							"function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod)
						}
					}, e.prototype.checkFPS = function(t, e, i) {
						var r = performance.now();
						if (e) {
							if (this.lastTime) {
								var n = r - this.lastTime,
									a = i - this.lastDroppedFrames,
									s = e - this.lastDecodedFrames,
									o = 1e3 * a / n,
									u = this.hls;
								if (u.trigger(It.a.FPS_DROP, {
										currentDropped: a,
										currentDecoded: s,
										totalDroppedFrames: i
									}), o > 0 && a > u.config.fpsDroppedMonitoringThreshold * s) {
									var d = u.currentLevel;
									Pt.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (u.autoLevelCapping === -1 || u.autoLevelCapping >= d) && (d -= 1, u.trigger(It.a.FPS_DROP_LEVEL_CAPPING, {
										level: d,
										droppedLevel: u.currentLevel
									}), u.autoLevelCapping = d, u.streamController.nextLevelSwitch())
								}
							}
							this.lastTime = r, this.lastDroppedFrames = i, this.lastDecodedFrames = e
						}
					}, e.prototype.checkFPSInterval = function() {
						var t = this.video;
						if (t)
							if (this.isVideoPlaybackQualityAvailable) {
								var e = t.getVideoPlaybackQuality();
								this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
							} else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
					}, e
				}(Ut),
				Be = Fe,
				Ge = function() {
					function t(e) {
						J(this, t), e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
					}
					return t.prototype.destroy = function() {
						this.abort(), this.loader = null
					}, t.prototype.abort = function() {
						var t = this.loader;
						t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
					}, t.prototype.load = function(t, e, i) {
						this.context = t, this.config = e, this.callbacks = i, this.stats = {
							trequest: performance.now(),
							retry: 0
						}, this.retryDelay = e.retryDelay, this.loadInternal()
					}, t.prototype.loadInternal = function() {
						var t, e = this.context;
						t = this.loader = new XMLHttpRequest;
						var i = this.stats;
						i.tfirst = 0, i.loaded = 0;
						var r = this.xhrSetup;
						try {
							if (r) try {
								r(t, e.url)
							} catch (i) {
								t.open("GET", e.url, !0), r(t, e.url)
							}
							t.readyState || t.open("GET", e.url, !0)
						} catch (i) {
							return void this.callbacks.onError({
								code: t.status,
								text: i.message
							}, e, t)
						}
						e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), t.send()
					}, t.prototype.readystatechange = function(t) {
						var e = t.currentTarget,
							i = e.readyState,
							r = this.stats,
							n = this.context,
							a = this.config;
						if (!r.aborted && i >= 2)
							if (window.clearTimeout(this.requestTimeout), 0 === r.tfirst && (r.tfirst = Math.max(performance.now(), r.trequest)), 4 === i) {
								var s = e.status;
								if (s >= 200 && s < 300) {
									r.tload = Math.max(r.tfirst, performance.now());
									var o = void 0,
										u = void 0;
									"arraybuffer" === n.responseType ? (o = e.response, u = o.byteLength) : (o = e.responseText, u = o.length), r.loaded = r.total = u;
									var d = {
										url: e.responseURL,
										data: o
									};
									this.callbacks.onSuccess(d, r, n, e)
								} else r.retry >= a.maxRetry || s >= 400 && s < 499 ? (Pt.b.error(s + " while loading " + n.url), this.callbacks.onError({
									code: s,
									text: e.statusText
								}, n, e)) : (Pt.b.warn(s + " while loading " + n.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), r.retry++)
							} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
					}, t.prototype.loadtimeout = function() {
						Pt.b.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
					}, t.prototype.loadprogress = function(t) {
						var e = t.currentTarget,
							i = this.stats;
						i.loaded = t.loaded, t.lengthComputable && (i.total = t.total);
						var r = this.callbacks.onProgress;
						r && r(i, this.context, null, e)
					}, t
				}(),
				je = Ge,
				He = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				qe = function(t) {
					function e(i) {
						Z(this, e);
						var r = tt(this, t.call(this, i, It.a.MANIFEST_LOADING, It.a.MANIFEST_PARSED, It.a.AUDIO_TRACK_LOADED, It.a.ERROR));
						return r.ticks = 0, r.ontick = r.tick.bind(r), r
					}
					return et(e, t), e.prototype.destroy = function() {
						this.cleanTimer(), Ut.prototype.destroy.call(this)
					}, e.prototype.cleanTimer = function() {
						this.timer && (clearTimeout(this.timer), this.timer = null)
					}, e.prototype.tick = function() {
						this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
					}, e.prototype.doTick = function() {
						this.updateTrack(this.trackId)
					}, e.prototype.onError = function(t) {
						t.fatal && t.type === Ct.b.NETWORK_ERROR && this.cleanTimer()
					}, e.prototype.onManifestLoading = function() {
						this.tracks = [], this.trackId = -1
					}, e.prototype.onManifestParsed = function(t) {
						var e = this,
							i = t.audioTracks || [],
							r = !1;
						this.tracks = i, this.hls.trigger(It.a.AUDIO_TRACKS_UPDATED, {
							audioTracks: i
						});
						var n = 0;
						i.forEach(function(t) {
							return t.default && !r ? (e.audioTrack = n, void(r = !0)) : void n++
						}), r === !1 && i.length && (Pt.b.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
					}, e.prototype.onAudioTrackLoaded = function(t) {
						t.id < this.tracks.length && (Pt.b.log("audioTrack " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * t.details.targetduration)), !t.details.live && this.timer && this.cleanTimer())
					}, e.prototype.setAudioTrackInternal = function(t) {
						if (t >= 0 && t < this.tracks.length) {
							this.cleanTimer(), this.trackId = t, Pt.b.log("switching to audioTrack " + t);
							var e = this.tracks[t],
								i = this.hls,
								r = e.type,
								n = e.url,
								a = {
									id: t,
									type: r,
									url: n
								};
							i.trigger(It.a.AUDIO_TRACK_SWITCH, a), i.trigger(It.a.AUDIO_TRACK_SWITCHING, a);
							var s = e.details;
							!n || void 0 !== s && s.live !== !0 || (Pt.b.log("(re)loading playlist for audioTrack " + t), i.trigger(It.a.AUDIO_TRACK_LOADING, {
								url: n,
								id: t
							}))
						}
					}, e.prototype.updateTrack = function(t) {
						if (t >= 0 && t < this.tracks.length) {
							this.cleanTimer(), this.trackId = t, Pt.b.log("updating audioTrack " + t);
							var e = this.tracks[t],
								i = e.url,
								r = e.details;
							!i || void 0 !== r && r.live !== !0 || (Pt.b.log("(re)loading playlist for audioTrack " + t), this.hls.trigger(It.a.AUDIO_TRACK_LOADING, {
								url: i,
								id: t
							}))
						}
					}, He(e, [{
						key: "audioTracks",
						get: function() {
							return this.tracks
						}
					}, {
						key: "audioTrack",
						get: function() {
							return this.trackId
						},
						set: function(t) {
							this.trackId === t && void 0 !== this.tracks[t].details || this.setAudioTrackInternal(t)
						}
					}]), e
				}(Ut),
				Ve = qe,
				We = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				Ke = {
					STOPPED: "STOPPED",
					STARTING: "STARTING",
					IDLE: "IDLE",
					PAUSED: "PAUSED",
					KEY_LOADING: "KEY_LOADING",
					FRAG_LOADING: "FRAG_LOADING",
					FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
					WAITING_TRACK: "WAITING_TRACK",
					PARSING: "PARSING",
					PARSED: "PARSED",
					BUFFER_FLUSHING: "BUFFER_FLUSHING",
					ENDED: "ENDED",
					ERROR: "ERROR",
					WAITING_INIT_PTS: "WAITING_INIT_PTS"
				},
				ze = function(t) {
					function e(i) {
						it(this, e);
						var r = rt(this, t.call(this, i, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.AUDIO_TRACKS_UPDATED, It.a.AUDIO_TRACK_SWITCHING, It.a.AUDIO_TRACK_LOADED, It.a.KEY_LOADED, It.a.FRAG_LOADED, It.a.FRAG_PARSING_INIT_SEGMENT, It.a.FRAG_PARSING_DATA, It.a.FRAG_PARSED, It.a.ERROR, It.a.BUFFER_RESET, It.a.BUFFER_CREATED, It.a.BUFFER_APPENDED, It.a.BUFFER_FLUSHED, It.a.INIT_PTS_FOUND));
						return r.config = i.config, r.audioCodecSwap = !1, r.ticks = 0, r._state = Ke.STOPPED, r.ontick = r.tick.bind(r), r.initPTS = [], r.waitingFragment = null, r.videoTrackCC = null, r
					}
					return nt(e, t), e.prototype.destroy = function() {
						this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), Ut.prototype.destroy.call(this), this.state = Ke.STOPPED
					}, e.prototype.onInitPtsFound = function(t) {
						var e = t.id,
							i = t.frag.cc,
							r = t.initPTS;
						"main" === e && (this.initPTS[i] = r, this.videoTrackCC = i, Pt.b.log("InitPTS for cc:" + i + " found from video track:" + r), this.state === Ke.WAITING_INIT_PTS && this.tick())
					}, e.prototype.startLoad = function(t) {
						if (this.tracks) {
							var e = this.lastCurrentTime;
							this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, e > 0 && t === -1 ? (Pt.b.log("audio:override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = Ke.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.state = Ke.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
						} else this.startPosition = t, this.state = Ke.STOPPED
					}, e.prototype.stopLoad = function() {
						var t = this.fragCurrent;
						t && (t.loader && t.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = Ke.STOPPED
					}, e.prototype.tick = function() {
						this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
					}, e.prototype.doTick = function() {
						var t, e, i, r = this.hls,
							n = r.config;
						switch (this.state) {
							case Ke.ERROR:
							case Ke.PAUSED:
							case Ke.BUFFER_FLUSHING:
								break;
							case Ke.STARTING:
								this.state = Ke.WAITING_TRACK, this.loadedmetadata = !1;
								break;
							case Ke.IDLE:
								var a = this.tracks;
								if (!a) break;
								if (!this.media && (this.startFragRequested || !n.startFragPrefetch)) break;
								if (this.loadedmetadata) t = this.media.currentTime;
								else if (t = this.nextLoadPosition, void 0 === t) break;
								var s = this.mediaBuffer ? this.mediaBuffer : this.media,
									o = this.videoBuffer ? this.videoBuffer : this.media,
									u = ne.bufferInfo(s, t, n.maxBufferHole),
									d = ne.bufferInfo(o, t, n.maxBufferHole),
									l = u.len,
									c = u.end,
									f = this.fragPrevious,
									h = Math.max(n.maxBufferLength, d.len),
									p = this.audioSwitch,
									g = this.trackId;
								if ((l < h || p) && g < a.length) {
									if (i = a[g].details, "undefined" == typeof i) {
										this.state = Ke.WAITING_TRACK;
										break
									}
									if (!p && !i.live && f && f.sn === i.endSN && !u.nextStart && (!this.media.seeking || this.media.duration - c < f.duration / 2)) {
										this.hls.trigger(It.a.BUFFER_EOS, {
											type: "audio"
										}), this.state = Ke.ENDED;
										break
									}
									var m = i.fragments,
										y = m.length,
										v = m[0].start,
										b = m[y - 1].start + m[y - 1].duration,
										_ = void 0;
									if (p)
										if (i.live && !i.PTSKnown) Pt.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"), c = 0;
										else if (c = t, i.PTSKnown && t < v) {
										if (!(u.end > v || u.nextStart)) return;
										Pt.b.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = v + .05
									}
									if (i.initSegment && !i.initSegment.data) _ = i.initSegment;
									else if (c <= v) {
										if (_ = m[0], null !== this.videoTrackCC && _.cc !== this.videoTrackCC && (_ = E(m, this.videoTrackCC)), i.live && _.loadIdx && _.loadIdx === this.fragLoadIdx) {
											var T = u.nextStart ? u.nextStart : v;
											return Pt.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (T + .05)), void(this.media.currentTime = T + .05)
										}
									} else {
										var S = void 0,
											w = n.maxFragLookUpTolerance,
											A = f ? m[f.sn - m[0].sn + 1] : void 0,
											R = function(t) {
												var e = Math.min(w, t.duration);
												return t.start + t.duration - e <= c ? 1 : t.start - e > c && t.start ? -1 : 0
											};
										c < b ? (c > b - w && (w = 0), S = A && !R(A) ? A : ie.search(m, R)) : S = m[y - 1], S && (_ = S, v = S.start, f && _.level === f.level && _.sn === f.sn && (_.sn < i.endSN ? (_ = m[_.sn + 1 - i.startSN], Pt.b.log("SN just loaded, load next one: " + _.sn)) : _ = null))
									}
									if (_)
										if (_.decryptdata && null != _.decryptdata.uri && null == _.decryptdata.key) Pt.b.log("Loading key for " + _.sn + " of [" + i.startSN + " ," + i.endSN + "],track " + g), this.state = Ke.KEY_LOADING, r.trigger(It.a.KEY_LOADING, {
											frag: _
										});
										else {
											if (Pt.b.log("Loading " + _.sn + ", cc: " + _.cc + " of [" + i.startSN + " ," + i.endSN + "],track " + g + ", currentTime:" + t + ",bufferEnd:" + c.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, _.loadCounter) {
												_.loadCounter++;
												var L = n.fragLoadingLoopThreshold;
												if (_.loadCounter > L && Math.abs(this.fragLoadIdx - _.loadIdx) < L) return void r.trigger(It.a.ERROR, {
													type: Ct.b.MEDIA_ERROR,
													details: Ct.a.FRAG_LOOP_LOADING_ERROR,
													fatal: !1,
													frag: _
												})
											} else _.loadCounter = 1;
											_.loadIdx = this.fragLoadIdx, this.fragCurrent = _, this.startFragRequested = !0, isNaN(_.sn) || (this.nextLoadPosition = _.start + _.duration), r.trigger(It.a.FRAG_LOADING, {
												frag: _
											}), this.state = Ke.FRAG_LOADING
										}
								}
								break;
							case Ke.WAITING_TRACK:
								e = this.tracks[this.trackId], e && e.details && (this.state = Ke.IDLE);
								break;
							case Ke.FRAG_LOADING_WAITING_RETRY:
								var k = performance.now(),
									O = this.retryDate;
								s = this.media;
								var D = s && s.seeking;
								(!O || k >= O || D) && (Pt.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = Ke.IDLE);
								break;
							case Ke.WAITING_INIT_PTS:
								var I = this.videoTrackCC;
								if (void 0 === this.initPTS[I]) break;
								var C = this.waitingFragment;
								if (C) {
									var P = C.frag.cc;
									I !== P ? (e = this.tracks[this.trackId], e.details && e.details.live && (Pt.b.warn("Waiting fragment CC (" + P + ") does not match video track CC (" + I + ")"), this.waitingFragment = null, this.state = Ke.IDLE)) : (this.state = Ke.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
								} else this.state = Ke.IDLE;
								break;
							case Ke.STOPPED:
							case Ke.FRAG_LOADING:
							case Ke.PARSING:
							case Ke.PARSED:
							case Ke.ENDED:
						}
					}, e.prototype.onMediaAttached = function(t) {
						var e = this.media = this.mediaBuffer = t.media;
						this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("ended", this.onvended);
						var i = this.config;
						this.tracks && i.autoStartLoad && this.startLoad(i.startPosition)
					}, e.prototype.onMediaDetaching = function() {
						var t = this.media;
						t && t.ended && (Pt.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
						var e = this.tracks;
						e && e.forEach(function(t) {
							t.details && t.details.fragments.forEach(function(t) {
								t.loadCounter = void 0
							})
						}), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
					}, e.prototype.onMediaSeeking = function() {
						this.state === Ke.ENDED && (this.state = Ke.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick()
					}, e.prototype.onMediaEnded = function() {
						this.startPosition = this.lastCurrentTime = 0
					}, e.prototype.onAudioTracksUpdated = function(t) {
						Pt.b.log("audio tracks updated"), this.tracks = t.audioTracks
					}, e.prototype.onAudioTrackSwitching = function(t) {
						var e = !!t.url;
						this.trackId = t.id, this.fragCurrent = null, this.state = Ke.PAUSED, this.waitingFragment = null, e ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), e && (this.audioSwitch = !0, this.state = Ke.IDLE, void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold)), this.tick()
					}, e.prototype.onAudioTrackLoaded = function(t) {
						var e = t.details,
							i = t.id,
							r = this.tracks[i],
							n = e.totalduration,
							a = 0;
						if (Pt.b.log("track " + i + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + n), e.live) {
							var s = r.details;
							s && e.fragments.length > 0 ? (T(s, e), a = e.fragments[0].start, e.PTSKnown ? Pt.b.log("live audio playlist sliding:" + a.toFixed(3)) : Pt.b.log("live audio playlist - outdated PTS, unknown sliding")) : (e.PTSKnown = !1, Pt.b.log("live audio playlist - first load, unknown sliding"))
						} else e.PTSKnown = !1;
						if (r.details = e, !this.startFragRequested) {
							if (this.startPosition === -1) {
								var o = e.startTimeOffset;
								isNaN(o) ? this.startPosition = 0 : (Pt.b.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o)
							}
							this.nextLoadPosition = this.startPosition
						}
						this.state === Ke.WAITING_TRACK && (this.state = Ke.IDLE), this.tick()
					}, e.prototype.onKeyLoaded = function() {
						this.state === Ke.KEY_LOADING && (this.state = Ke.IDLE, this.tick())
					}, e.prototype.onFragLoaded = function(t) {
						var e = this.fragCurrent,
							i = t.frag;
						if (this.state === Ke.FRAG_LOADING && e && "audio" === i.type && i.level === e.level && i.sn === e.sn) {
							var r = this.tracks[this.trackId],
								n = r.details,
								a = n.totalduration,
								s = e.level,
								o = e.sn,
								u = e.cc,
								d = this.config.defaultAudioCodec || r.audioCodec || "mp4a.40.2",
								l = this.stats = t.stats;
							if ("initSegment" === o) this.state = Ke.IDLE, l.tparsed = l.tbuffered = performance.now(), n.initSegment.data = t.payload, this.hls.trigger(It.a.FRAG_BUFFERED, {
								stats: l,
								frag: e,
								id: "audio"
							}), this.tick();
							else {
								this.state = Ke.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new fe(this.hls, "audio"));
								var c = this.initPTS[u],
									f = n.initSegment ? n.initSegment.data : [];
								if (n.initSegment || void 0 !== c) {
									this.pendingBuffering = !0, Pt.b.log("Demuxing " + o + " of [" + n.startSN + " ," + n.endSN + "],track " + s);
									var h = !1;
									this.demuxer.push(t.payload, f, d, null, e, a, h, c)
								} else Pt.b.log("unknown video PTS for continuity counter " + u + ", waiting for video PTS before demuxing audio frag " + o + " of [" + n.startSN + " ," + n.endSN + "],track " + s), this.waitingFragment = t, this.state = Ke.WAITING_INIT_PTS
							}
						}
						this.fragLoadError = 0
					}, e.prototype.onFragParsingInitSegment = function(t) {
						var e = this.fragCurrent,
							i = t.frag;
						if (e && "audio" === t.id && i.sn === e.sn && i.level === e.level && this.state === Ke.PARSING) {
							var r = t.tracks,
								n = void 0;
							if (r.video && delete r.video, n = r.audio) {
								n.levelCodec = n.codec, n.id = t.id, this.hls.trigger(It.a.BUFFER_CODECS, r), Pt.b.log("audio track:audio,container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
								var a = n.initSegment;
								if (a) {
									var s = {
										type: "audio",
										data: a,
										parent: "audio",
										content: "initSegment"
									};
									this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(It.a.BUFFER_APPENDING, s))
								}
								this.tick()
							}
						}
					}, e.prototype.onFragParsingData = function(t) {
						var e = this,
							i = this.fragCurrent,
							r = t.frag;
						if (i && "audio" === t.id && "audio" === t.type && r.sn === i.sn && r.level === i.level && this.state === Ke.PARSING) {
							var n = this.trackId,
								a = this.tracks[n],
								s = this.hls;
							isNaN(t.endPTS) && (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration), Pt.b.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), _(a.details, i, t.startPTS, t.endPTS);
							var o = this.audioSwitch,
								u = this.media,
								d = !1;
							if (o && u)
								if (u.readyState) {
									var l = u.currentTime;
									Pt.b.log("switching audio track : currentTime:" + l), l >= t.startPTS && (Pt.b.log("switching audio track : flushing all audio"), this.state = Ke.BUFFER_FLUSHING, s.trigger(It.a.BUFFER_FLUSHING, {
										startOffset: 0,
										endOffset: Number.POSITIVE_INFINITY,
										type: "audio"
									}), d = !0, this.audioSwitch = !1, s.trigger(It.a.AUDIO_TRACK_SWITCHED, {
										id: n
									}))
								} else this.audioSwitch = !1, s.trigger(It.a.AUDIO_TRACK_SWITCHED, {
									id: n
								});
							var c = this.pendingData;
							this.audioSwitch || ([t.data1, t.data2].forEach(function(e) {
								e && e.length && c.push({
									type: t.type,
									data: e,
									parent: "audio",
									content: "data"
								})
							}), !d && c.length && (c.forEach(function(t) {
								e.state === Ke.PARSING && (e.pendingBuffering = !0, e.hls.trigger(It.a.BUFFER_APPENDING, t))
							}), this.pendingData = [], this.appended = !0)), this.tick()
						}
					}, e.prototype.onFragParsed = function(t) {
						var e = this.fragCurrent,
							i = t.frag;
						e && "audio" === t.id && i.sn === e.sn && i.level === e.level && this.state === Ke.PARSING && (this.stats.tparsed = performance.now(), this.state = Ke.PARSED, this._checkAppendedParsed())
					}, e.prototype.onBufferReset = function() {
						this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
					}, e.prototype.onBufferCreated = function(t) {
						var e = t.tracks.audio;
						e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
					}, e.prototype.onBufferAppended = function(t) {
						if ("audio" === t.parent) {
							var e = this.state;
							e !== Ke.PARSING && e !== Ke.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
						}
					}, e.prototype._checkAppendedParsed = function() {
						if (!(this.state !== Ke.PARSED || this.appended && this.pendingBuffering)) {
							var t = this.fragCurrent,
								e = this.stats,
								i = this.hls;
							if (t) {
								this.fragPrevious = t, e.tbuffered = performance.now(), i.trigger(It.a.FRAG_BUFFERED, {
									stats: e,
									frag: t,
									id: "audio"
								});
								var r = this.mediaBuffer ? this.mediaBuffer : this.media;
								Pt.b.log("audio buffered : " + pe.toString(r.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, i.trigger(It.a.AUDIO_TRACK_SWITCHED, {
									id: this.trackId
								})), this.state = Ke.IDLE
							}
							this.tick()
						}
					}, e.prototype.onError = function(t) {
						var e = t.frag;
						if (!e || "audio" === e.type) switch (t.details) {
							case Ct.a.FRAG_LOAD_ERROR:
							case Ct.a.FRAG_LOAD_TIMEOUT:
								if (!t.fatal) {
									var i = this.fragLoadError;
									i ? i++ : i = 1;
									var r = this.config;
									if (i <= r.fragLoadingMaxRetry) {
										this.fragLoadError = i, e.loadCounter = 0;
										var n = Math.min(Math.pow(2, i - 1) * r.fragLoadingRetryDelay, r.fragLoadingMaxRetryTimeout);
										Pt.b.warn("audioStreamController: frag loading failed, retry in " + n + " ms"), this.retryDate = performance.now() + n, this.state = Ke.FRAG_LOADING_WAITING_RETRY
									} else Pt.b.error("audioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = Ke.ERROR
								}
								break;
							case Ct.a.FRAG_LOOP_LOADING_ERROR:
							case Ct.a.AUDIO_TRACK_LOAD_ERROR:
							case Ct.a.AUDIO_TRACK_LOAD_TIMEOUT:
							case Ct.a.KEY_LOAD_ERROR:
							case Ct.a.KEY_LOAD_TIMEOUT:
								this.state !== Ke.ERROR && (this.state = t.fatal ? Ke.ERROR : Ke.IDLE, Pt.b.warn("audioStreamController: " + t.details + " while loading frag,switch to " + this.state + " state ..."));
								break;
							case Ct.a.BUFFER_FULL_ERROR:
								if ("audio" === t.parent && (this.state === Ke.PARSING || this.state === Ke.PARSED)) {
									var a = this.mediaBuffer,
										s = this.media.currentTime,
										o = a && ne.isBuffered(a, s) && ne.isBuffered(a, s + .5);
									if (o) {
										var u = this.config;
										u.maxMaxBufferLength >= u.maxBufferLength && (u.maxMaxBufferLength /= 2, Pt.b.warn("audio:reduce max buffer length to " + u.maxMaxBufferLength + "s"), this.fragLoadIdx += 2 * u.fragLoadingLoopThreshold), this.state = Ke.IDLE
									} else Pt.b.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = Ke.BUFFER_FLUSHING, this.hls.trigger(It.a.BUFFER_FLUSHING, {
										startOffset: 0,
										endOffset: Number.POSITIVE_INFINITY,
										type: "audio"
									})
								}
						}
					}, e.prototype.onBufferFlushed = function() {
						var t = this,
							e = this.pendingData;
						e && e.length ? (Pt.b.log("appending pending audio data on Buffer Flushed"), e.forEach(function(e) {
							t.hls.trigger(It.a.BUFFER_APPENDING, e)
						}), this.appended = !0, this.pendingData = [], this.state = Ke.PARSED) : (this.state = Ke.IDLE, this.fragPrevious = null, this.tick())
					}, We(e, [{
						key: "state",
						set: function(t) {
							if (this.state !== t) {
								var e = this.state;
								this._state = t, Pt.b.log("audio stream:" + e + "->" + t)
							}
						},
						get: function() {
							return this._state
						}
					}]), e
				}(Ut),
				Ye = ze,
				Xe = function() {
					function t(t) {
						if ("string" != typeof t) return !1;
						var e = a[t.toLowerCase()];
						return !!e && t.toLowerCase()
					}

					function e(t) {
						if ("string" != typeof t) return !1;
						var e = s[t.toLowerCase()];
						return !!e && t.toLowerCase()
					}

					function i(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) t[r] = i[r]
						}
						return t
					}

					function r(r, a, s) {
						var o = this,
							u = function() {
								if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
							}(),
							d = {};
						u ? o = document.createElement("custom") : d.enumerable = !0, o.hasBeenReset = !1;
						var l = "",
							c = !1,
							f = r,
							h = a,
							p = s,
							g = null,
							m = "",
							y = !0,
							v = "auto",
							b = "start",
							_ = 50,
							T = "middle",
							S = 50,
							E = "middle";
						if (Object.defineProperty(o, "id", i({}, d, {
								get: function() {
									return l
								},
								set: function(t) {
									l = "" + t
								}
							})), Object.defineProperty(o, "pauseOnExit", i({}, d, {
								get: function() {
									return c
								},
								set: function(t) {
									c = !!t
								}
							})), Object.defineProperty(o, "startTime", i({}, d, {
								get: function() {
									return f
								},
								set: function(t) {
									if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
									f = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "endTime", i({}, d, {
								get: function() {
									return h
								},
								set: function(t) {
									if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
									h = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "text", i({}, d, {
								get: function() {
									return p
								},
								set: function(t) {
									p = "" + t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "region", i({}, d, {
								get: function() {
									return g
								},
								set: function(t) {
									g = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "vertical", i({}, d, {
								get: function() {
									return m
								},
								set: function(e) {
									var i = t(e);
									if (i === !1) throw new SyntaxError("An invalid or illegal string was specified.");
									m = i, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "snapToLines", i({}, d, {
								get: function() {
									return y
								},
								set: function(t) {
									y = !!t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "line", i({}, d, {
								get: function() {
									return v
								},
								set: function(t) {
									if ("number" != typeof t && t !== n) throw new SyntaxError("An invalid number or illegal string was specified.");
									v = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "lineAlign", i({}, d, {
								get: function() {
									return b
								},
								set: function(t) {
									var i = e(t);
									if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
									b = i, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "position", i({}, d, {
								get: function() {
									return _
								},
								set: function(t) {
									if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
									_ = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "positionAlign", i({}, d, {
								get: function() {
									return T
								},
								set: function(t) {
									var i = e(t);
									if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
									T = i, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "size", i({}, d, {
								get: function() {
									return S
								},
								set: function(t) {
									if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
									S = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "align", i({}, d, {
								get: function() {
									return E
								},
								set: function(t) {
									var i = e(t);
									if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
									E = i, this.hasBeenReset = !0
								}
							})), o.displayState = void 0, u) return o
					}
					if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
					var n = "auto",
						a = {
							"": !0,
							lr: !0,
							rl: !0
						},
						s = {
							start: !0,
							middle: !0,
							end: !0,
							left: !0,
							right: !0
						};
					return r.prototype.getCueAsHTML = function() {
						var t = window.WebVTT;
						return t.convertCueToDOMTree(window, this.text)
					}, r
				}(),
				Qe = function() {
					return {
						decode: function(t) {
							if (!t) return "";
							if ("string" != typeof t) throw new Error("Error - expected string data.");
							return decodeURIComponent(encodeURIComponent(t))
						}
					}
				};
			ot.prototype = {
				set: function(t, e) {
					this.get(t) || "" === e || (this.values[t] = e)
				},
				get: function(t, e, i) {
					return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
				},
				has: function(t) {
					return t in this.values
				},
				alt: function(t, e, i) {
					for (var r = 0; r < i.length; ++r)
						if (e === i[r]) {
							this.set(t, e);
							break
						}
				},
				integer: function(t, e) {
					/^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
				},
				percent: function(t, e) {
					var i;
					return !!((i = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && e <= 100)) && (this.set(t, e), !0)
				}
			};
			var $e = new Xe(0, 0, 0),
				Je = "middle" === $e.align ? "middle" : "center";
			at.prototype = {
				parse: function(t) {
					function e() {
						var t = r.buffer,
							e = 0;
						for (t = lt(t); e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
						var i = t.substr(0, e);
						return "\r" === t[e] && ++e, "\n" === t[e] && ++e, r.buffer = t.substr(e), i
					}

					function i(t) {
						ut(t, function(t, e) {
							switch (t) {
								case "Region":
									console.log("parse region", e)
							}
						}, /:/)
					}
					var r = this;
					t && (r.buffer += r.decoder.decode(t, {
						stream: !0
					}));
					try {
						var n;
						if ("INITIAL" === r.state) {
							if (!/\r\n|\n/.test(r.buffer)) return this;
							n = e();
							var a = n.match(/^(Ã¯Â»Â¿)?WEBVTT([ \t].*)?$/);
							if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
							r.state = "HEADER"
						}
						for (var s = !1; r.buffer;) {
							if (!/\r\n|\n/.test(r.buffer)) return this;
							switch (s ? s = !1 : n = e(), r.state) {
								case "HEADER":
									/:/.test(n) ? i(n) : n || (r.state = "ID");
									continue;
								case "NOTE":
									n || (r.state = "ID");
									continue;
								case "ID":
									if (/^NOTE($|[ \t])/.test(n)) {
										r.state = "NOTE";
										break
									}
									if (!n) continue;
									if (r.cue = new Xe(0, 0, ""), r.state = "CUE", n.indexOf("-->") === -1) {
										r.cue.id = n;
										continue
									}
								case "CUE":
									try {
										dt(n, r.cue, r.regionList)
									} catch (t) {
										r.cue = null, r.state = "BADCUE";
										continue
									}
									r.state = "CUETEXT";
									continue;
								case "CUETEXT":
									var o = n.indexOf("-->") !== -1;
									if (!n || o && (s = !0)) {
										r.oncue && r.oncue(r.cue), r.cue = null, r.state = "ID";
										continue
									}
									r.cue.text && (r.cue.text += "\n"), r.cue.text += n;
									continue;
								case "BADCUE":
									n || (r.state = "ID");
									continue
							}
						}
					} catch (t) {
						"CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue), r.cue = null, r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE"
					}
					return this
				},
				flush: function() {
					var t = this;
					try {
						if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new Error("Malformed WebVTT signature.")
					} catch (t) {
						throw t
					}
					return t.onflush && t.onflush(), this
				}
			};
			var Ze = at,
				ti = {
					42: 225,
					92: 233,
					94: 237,
					95: 243,
					96: 250,
					123: 231,
					124: 247,
					125: 209,
					126: 241,
					127: 9608,
					128: 174,
					129: 176,
					130: 189,
					131: 191,
					132: 8482,
					133: 162,
					134: 163,
					135: 9834,
					136: 224,
					137: 32,
					138: 232,
					139: 226,
					140: 234,
					141: 238,
					142: 244,
					143: 251,
					144: 193,
					145: 201,
					146: 211,
					147: 218,
					148: 220,
					149: 252,
					150: 8216,
					151: 161,
					152: 42,
					153: 8217,
					154: 9473,
					155: 169,
					156: 8480,
					157: 8226,
					158: 8220,
					159: 8221,
					160: 192,
					161: 194,
					162: 199,
					163: 200,
					164: 202,
					165: 203,
					166: 235,
					167: 206,
					168: 207,
					169: 239,
					170: 212,
					171: 217,
					172: 249,
					173: 219,
					174: 171,
					175: 187,
					176: 195,
					177: 227,
					178: 205,
					179: 204,
					180: 236,
					181: 210,
					182: 242,
					183: 213,
					184: 245,
					185: 123,
					186: 125,
					187: 92,
					188: 94,
					189: 95,
					190: 124,
					191: 8764,
					192: 196,
					193: 228,
					194: 214,
					195: 246,
					196: 223,
					197: 165,
					198: 164,
					199: 9475,
					200: 197,
					201: 229,
					202: 216,
					203: 248,
					204: 9487,
					205: 9491,
					206: 9495,
					207: 9499
				},
				ei = function(t) {
					var e = t;
					return ti.hasOwnProperty(t) && (e = ti[t]), String.fromCharCode(e)
				},
				ii = 15,
				ri = 100,
				ni = {
					17: 1,
					18: 3,
					21: 5,
					22: 7,
					23: 9,
					16: 11,
					19: 12,
					20: 14
				},
				ai = {
					17: 2,
					18: 4,
					21: 6,
					22: 8,
					23: 10,
					19: 13,
					20: 15
				},
				si = {
					25: 1,
					26: 3,
					29: 5,
					30: 7,
					31: 9,
					24: 11,
					27: 12,
					28: 14
				},
				oi = {
					25: 2,
					26: 4,
					29: 6,
					30: 8,
					31: 10,
					27: 13,
					28: 15
				},
				ui = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
				di = {
					verboseFilter: {
						DATA: 3,
						DEBUG: 3,
						INFO: 2,
						WARNING: 2,
						TEXT: 1,
						ERROR: 0
					},
					time: null,
					verboseLevel: 0,
					setTime: function(t) {
						this.time = t
					},
					log: function(t, e) {
						var i = this.verboseFilter[t];
						this.verboseLevel >= i && console.log(this.time + " [" + t + "] " + e)
					}
				},
				li = function(t) {
					for (var e = [], i = 0; i < t.length; i++) e.push(t[i].toString(16));
					return e
				},
				ci = function() {
					function t(e, i, r, n, a) {
						ft(this, t), this.foreground = e || "white", this.underline = i || !1, this.italics = r || !1, this.background = n || "black", this.flash = a || !1
					}
					return t.prototype.reset = function() {
						this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
					}, t.prototype.setStyles = function(t) {
						for (var e = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < e.length; i++) {
							var r = e[i];
							t.hasOwnProperty(r) && (this[r] = t[r])
						}
					}, t.prototype.isDefault = function() {
						return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
					}, t.prototype.equals = function(t) {
						return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
					}, t.prototype.copy = function(t) {
						this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
					}, t.prototype.toString = function() {
						return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
					}, t
				}(),
				fi = function() {
					function t(e, i, r, n, a, s) {
						ft(this, t), this.uchar = e || " ", this.penState = new ci(i, r, n, a, s)
					}
					return t.prototype.reset = function() {
						this.uchar = " ", this.penState.reset()
					}, t.prototype.setChar = function(t, e) {
						this.uchar = t, this.penState.copy(e)
					}, t.prototype.setPenState = function(t) {
						this.penState.copy(t)
					}, t.prototype.equals = function(t) {
						return this.uchar === t.uchar && this.penState.equals(t.penState)
					}, t.prototype.copy = function(t) {
						this.uchar = t.uchar, this.penState.copy(t.penState)
					}, t.prototype.isEmpty = function() {
						return " " === this.uchar && this.penState.isDefault()
					}, t
				}(),
				hi = function() {
					function t() {
						ft(this, t), this.chars = [];
						for (var e = 0; e < ri; e++) this.chars.push(new fi);
						this.pos = 0, this.currPenState = new ci
					}
					return t.prototype.equals = function(t) {
						for (var e = !0, i = 0; i < ri; i++)
							if (!this.chars[i].equals(t.chars[i])) {
								e = !1;
								break
							}
						return e
					}, t.prototype.copy = function(t) {
						for (var e = 0; e < ri; e++) this.chars[e].copy(t.chars[e])
					}, t.prototype.isEmpty = function() {
						for (var t = !0, e = 0; e < ri; e++)
							if (!this.chars[e].isEmpty()) {
								t = !1;
								break
							}
						return t
					}, t.prototype.setCursor = function(t) {
						this.pos !== t && (this.pos = t), this.pos < 0 ? (di.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > ri && (di.log("ERROR", "Too large cursor position " + this.pos), this.pos = ri)
					}, t.prototype.moveCursor = function(t) {
						var e = this.pos + t;
						if (t > 1)
							for (var i = this.pos + 1; i < e + 1; i++) this.chars[i].setPenState(this.currPenState);
						this.setCursor(e)
					}, t.prototype.backSpace = function() {
						this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
					}, t.prototype.insertChar = function(t) {
						t >= 144 && this.backSpace();
						var e = ei(t);
						return this.pos >= ri ? void di.log("ERROR", "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), void this.moveCursor(1))
					}, t.prototype.clearFromPos = function(t) {
						var e;
						for (e = t; e < ri; e++) this.chars[e].reset()
					}, t.prototype.clear = function() {
						this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
					}, t.prototype.clearToEndOfRow = function() {
						this.clearFromPos(this.pos)
					}, t.prototype.getTextString = function() {
						for (var t = [], e = !0, i = 0; i < ri; i++) {
							var r = this.chars[i].uchar;
							" " !== r && (e = !1), t.push(r)
						}
						return e ? "" : t.join("")
					}, t.prototype.setPenStyles = function(t) {
						this.currPenState.setStyles(t);
						var e = this.chars[this.pos];
						e.setPenState(this.currPenState)
					}, t
				}(),
				pi = function() {
					function t() {
						ft(this, t), this.rows = [];
						for (var e = 0; e < ii; e++) this.rows.push(new hi);
						this.currRow = ii - 1, this.nrRollUpRows = null, this.reset()
					}
					return t.prototype.reset = function() {
						for (var t = 0; t < ii; t++) this.rows[t].clear();
						this.currRow = ii - 1
					}, t.prototype.equals = function(t) {
						for (var e = !0, i = 0; i < ii; i++)
							if (!this.rows[i].equals(t.rows[i])) {
								e = !1;
								break
							}
						return e
					}, t.prototype.copy = function(t) {
						for (var e = 0; e < ii; e++) this.rows[e].copy(t.rows[e])
					}, t.prototype.isEmpty = function() {
						for (var t = !0, e = 0; e < ii; e++)
							if (!this.rows[e].isEmpty()) {
								t = !1;
								break
							}
						return t
					}, t.prototype.backSpace = function() {
						var t = this.rows[this.currRow];
						t.backSpace()
					}, t.prototype.clearToEndOfRow = function() {
						var t = this.rows[this.currRow];
						t.clearToEndOfRow()
					}, t.prototype.insertChar = function(t) {
						var e = this.rows[this.currRow];
						e.insertChar(t)
					}, t.prototype.setPen = function(t) {
						var e = this.rows[this.currRow];
						e.setPenStyles(t)
					}, t.prototype.moveCursor = function(t) {
						var e = this.rows[this.currRow];
						e.moveCursor(t)
					}, t.prototype.setCursor = function(t) {
						di.log("INFO", "setCursor: " + t);
						var e = this.rows[this.currRow];
						e.setCursor(t)
					}, t.prototype.setPAC = function(t) {
						di.log("INFO", "pacData = " + JSON.stringify(t));
						var e = t.row - 1;
						if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
							for (var i = 0; i < ii; i++) this.rows[i].clear();
							var r = this.currRow + 1 - this.nrRollUpRows,
								n = this.lastOutputScreen;
							if (n) {
								var a = n.rows[r].cueStartTime;
								if (a && a < di.time)
									for (var s = 0; s < this.nrRollUpRows; s++) this.rows[e - this.nrRollUpRows + s + 1].copy(n.rows[r + s])
							}
						}
						this.currRow = e;
						var o = this.rows[this.currRow];
						if (null !== t.indent) {
							var u = t.indent,
								d = Math.max(u - 1, 0);
							o.setCursor(t.indent), t.color = o.chars[d].penState.foreground
						}
						var l = {
							foreground: t.color,
							underline: t.underline,
							italics: t.italics,
							background: "black",
							flash: !1
						};
						this.setPen(l)
					}, t.prototype.setBkgData = function(t) {
						di.log("INFO", "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
					}, t.prototype.setRollUpRows = function(t) {
						this.nrRollUpRows = t
					}, t.prototype.rollUp = function() {
						if (null === this.nrRollUpRows) return void di.log("DEBUG", "roll_up but nrRollUpRows not set yet");
						di.log("TEXT", this.getDisplayText());
						var t = this.currRow + 1 - this.nrRollUpRows,
							e = this.rows.splice(t, 1)[0];
						e.clear(), this.rows.splice(this.currRow, 0, e), di.log("INFO", "Rolling up")
					}, t.prototype.getDisplayText = function(t) {
						t = t || !1;
						for (var e = [], i = "", r = -1, n = 0; n < ii; n++) {
							var a = this.rows[n].getTextString();
							a && (r = n + 1, t ? e.push("Row " + r + ": '" + a + "'") : e.push(a.trim()))
						}
						return e.length > 0 && (i = t ? "[" + e.join(" | ") + "]" : e.join("\n")), i
					}, t.prototype.getTextAndFormat = function() {
						return this.rows
					}, t
				}(),
				gi = function() {
					function t(e, i) {
						ft(this, t), this.chNr = e, this.outputFilter = i, this.mode = null, this.verbose = 0, this.displayedMemory = new pi, this.nonDisplayedMemory = new pi, this.lastOutputScreen = new pi, this.currRollUpRow = this.displayedMemory.rows[ii - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
					}
					return t.prototype.reset = function() {
						this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[ii - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
					}, t.prototype.getHandler = function() {
						return this.outputFilter
					}, t.prototype.setHandler = function(t) {
						this.outputFilter = t
					}, t.prototype.setPAC = function(t) {
						this.writeScreen.setPAC(t)
					}, t.prototype.setBkgData = function(t) {
						this.writeScreen.setBkgData(t)
					}, t.prototype.setMode = function(t) {
						t !== this.mode && (this.mode = t, di.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
					}, t.prototype.insertChars = function(t) {
						for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
						var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
						di.log("INFO", i + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (di.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
					}, t.prototype.ccRCL = function() {
						di.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
					}, t.prototype.ccBS = function() {
						di.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
					}, t.prototype.ccAOF = function() {}, t.prototype.ccAON = function() {}, t.prototype.ccDER = function() {
						di.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
					}, t.prototype.ccRU = function(t) {
						di.log("INFO", "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
					}, t.prototype.ccFON = function() {
						di.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
							flash: !0
						})
					}, t.prototype.ccRDC = function() {
						di.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
					}, t.prototype.ccTR = function() {
						di.log("INFO", "TR"), this.setMode("MODE_TEXT")
					}, t.prototype.ccRTD = function() {
						di.log("INFO", "RTD"), this.setMode("MODE_TEXT")
					}, t.prototype.ccEDM = function() {
						di.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
					}, t.prototype.ccCR = function() {
						di.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
					}, t.prototype.ccENM = function() {
						di.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
					}, t.prototype.ccEOC = function() {
						if (di.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
							var t = this.displayedMemory;
							this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, di.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
						}
						this.outputDataUpdate(!0)
					}, t.prototype.ccTO = function(t) {
						di.log("INFO", "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
					}, t.prototype.ccMIDROW = function(t) {
						var e = {
							flash: !1
						};
						if (e.underline = t % 2 === 1, e.italics = t >= 46, e.italics) e.foreground = "white";
						else {
							var i = Math.floor(t / 2) - 16,
								r = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
							e.foreground = r[i]
						}
						di.log("INFO", "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
					}, t.prototype.outputDataUpdate = function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							e = di.time;
						null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t === !0 && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
					}, t.prototype.cueSplitAtTime = function(t) {
						this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
					}, t
				}(),
				mi = function() {
					function t(e, i, r) {
						ft(this, t), this.field = e || 1, this.outputs = [i, r], this.channels = [new gi(1, i), new gi(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
							padding: 0,
							char: 0,
							cmd: 0,
							other: 0
						}
					}
					return t.prototype.getHandler = function(t) {
						return this.channels[t].getHandler()
					}, t.prototype.setHandler = function(t, e) {
						this.channels[t].setHandler(e)
					}, t.prototype.addData = function(t, e) {
						var i, r, n, a = !1;
						this.lastTime = t, di.setTime(t);
						for (var s = 0; s < e.length; s += 2)
							if (r = 127 & e[s], n = 127 & e[s + 1], 0 !== r || 0 !== n) {
								if (di.log("DATA", "[" + li([e[s], e[s + 1]]) + "] -> (" + li([r, n]) + ")"), i = this.parseCmd(r, n), i || (i = this.parseMidrow(r, n)), i || (i = this.parsePAC(r, n)), i || (i = this.parseBackgroundAttributes(r, n)), !i && (a = this.parseChars(r, n)))
									if (this.currChNr && this.currChNr >= 0) {
										var o = this.channels[this.currChNr - 1];
										o.insertChars(a)
									} else di.log("WARNING", "No channel found yet. TEXT-MODE?");
								i ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, di.log("WARNING", "Couldn't parse cleaned data " + li([r, n]) + " orig: " + li([e[s], e[s + 1]])))
							} else this.dataCounters.padding += 2
					}, t.prototype.parseCmd = function(t, e) {
						var i = null,
							r = (20 === t || 28 === t) && 32 <= e && e <= 47,
							n = (23 === t || 31 === t) && 33 <= e && e <= 35;
						if (!r && !n) return !1;
						if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, di.log("DEBUG", "Repeated command (" + li([t, e]) + ") is dropped"), !0;
						i = 20 === t || 23 === t ? 1 : 2;
						var a = this.channels[i - 1];
						return 20 === t || 28 === t ? 32 === e ? a.ccRCL() : 33 === e ? a.ccBS() : 34 === e ? a.ccAOF() : 35 === e ? a.ccAON() : 36 === e ? a.ccDER() : 37 === e ? a.ccRU(2) : 38 === e ? a.ccRU(3) : 39 === e ? a.ccRU(4) : 40 === e ? a.ccFON() : 41 === e ? a.ccRDC() : 42 === e ? a.ccTR() : 43 === e ? a.ccRTD() : 44 === e ? a.ccEDM() : 45 === e ? a.ccCR() : 46 === e ? a.ccENM() : 47 === e && a.ccEOC() : a.ccTO(e - 32), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = i, !0
					}, t.prototype.parseMidrow = function(t, e) {
						var i = null;
						if ((17 === t || 25 === t) && 32 <= e && e <= 47) {
							if (i = 17 === t ? 1 : 2, i !== this.currChNr) return di.log("ERROR", "Mismatch channel in midrow parsing"), !1;
							var r = this.channels[i - 1];
							return r.ccMIDROW(e), di.log("DEBUG", "MIDROW (" + li([t, e]) + ")"), !0
						}
						return !1
					}, t.prototype.parsePAC = function(t, e) {
						var i = null,
							r = null,
							n = (17 <= t && t <= 23 || 25 <= t && t <= 31) && 64 <= e && e <= 127,
							a = (16 === t || 24 === t) && 64 <= e && e <= 95;
						if (!n && !a) return !1;
						if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
						i = t <= 23 ? 1 : 2, r = 64 <= e && e <= 95 ? 1 === i ? ni[t] : si[t] : 1 === i ? ai[t] : oi[t];
						var s = this.interpretPAC(r, e),
							o = this.channels[i - 1];
						return o.setPAC(s), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = i, !0
					}, t.prototype.interpretPAC = function(t, e) {
						var i = e,
							r = {
								color: null,
								italics: !1,
								indent: null,
								underline: !1,
								row: t
							};
						return i = e > 95 ? e - 96 : e - 64, r.underline = 1 === (1 & i), i <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (r.italics = !0, r.color = "white") : r.indent = 4 * Math.floor((i - 16) / 2), r
					}, t.prototype.parseChars = function(t, e) {
						var i = null,
							r = null,
							n = null;
						if (t >= 25 ? (i = 2, n = t - 8) : (i = 1, n = t), 17 <= n && n <= 19) {
							var a = e;
							a = 17 === n ? e + 80 : 18 === n ? e + 112 : e + 144, di.log("INFO", "Special char '" + ei(a) + "' in channel " + i), r = [a]
						} else 32 <= t && t <= 127 && (r = 0 === e ? [t] : [t, e]);
						if (r) {
							var s = li(r);
							di.log("DEBUG", "Char codes =  " + s.join(",")), this.lastCmdA = null, this.lastCmdB = null
						}
						return r
					}, t.prototype.parseBackgroundAttributes = function(t, e) {
						var i, r, n, a, s = (16 === t || 24 === t) && 32 <= e && e <= 47,
							o = (23 === t || 31 === t) && 45 <= e && e <= 47;
						return !(!s && !o) && (i = {}, 16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), i.background = ui[r], e % 2 === 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0)), n = t < 24 ? 1 : 2, a = this.channels[n - 1], a.setBkgData(i), this.lastCmdA = null, this.lastCmdB = null, !0)
					}, t.prototype.reset = function() {
						for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].reset();
						this.lastCmdA = null, this.lastCmdB = null
					}, t.prototype.cueSplitAtTime = function(t) {
						for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].cueSplitAtTime(t)
					}, t;
				}(),
				yi = mi,
				vi = function() {
					function t(e, i) {
						ht(this, t), this.timelineController = e, this.track = i, this.startTime = null, this.endTime = null, this.screen = null
					}
					return t.prototype.dispatchCue = function() {
						null !== this.startTime && (this.timelineController.addCues("textTrack" + this.track, this.startTime, this.endTime, this.screen), this.startTime = null)
					}, t.prototype.newCue = function(t, e, i) {
						(null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = i, this.timelineController.createCaptionsTrack(this.track)
					}, t
				}(),
				bi = vi,
				_i = function(t, e, i) {
					return t.substr(i || 0, e.length) === e
				},
				Ti = function(t) {
					var e = parseInt(t.substr(-3)),
						i = parseInt(t.substr(-6, 2)),
						r = parseInt(t.substr(-9, 2)),
						n = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
					return isNaN(e) || isNaN(i) || isNaN(r) || isNaN(n) ? -1 : (e += 1e3 * i, e += 6e4 * r, e += 36e5 * n)
				},
				Si = function t(e) {
					for (var t = 5381, i = e.length; i;) t = 33 * t ^ e.charCodeAt(--i);
					return (t >>> 0).toString()
				},
				Ei = function(t, e, i) {
					var r = t[e],
						n = t[r.prevCC];
					if (!n || !n.new && r.new) return t.ccOffset = t.presentationOffset = r.start, void(r.new = !1);
					for (; n && n.new;) t.ccOffset += r.start - n.start, r.new = !1, r = n, n = t[r.prevCC];
					t.presentationOffset = i
				},
				wi = {
					parse: function(t, e, i, r, n, a) {
						var s = /\r\n|\n\r|\n|\r/g,
							o = Object(Se.b)(new Uint8Array(t)).trim().replace(s, "\n").split("\n"),
							u = "00:00.000",
							d = 0,
							l = 0,
							c = 0,
							f = [],
							h = void 0,
							p = !0,
							g = new Ze;
						g.oncue = function(t) {
							var e = i[r],
								n = i.ccOffset;
							e && e.new && (void 0 !== l ? n = i.ccOffset = e.start : Ei(i, r, c)), c && (n = c + i.ccOffset - i.presentationOffset), t.startTime += n - l, t.endTime += n - l, t.id = Si(t.startTime.toString()) + Si(t.endTime.toString()) + Si(t.text), t.text = decodeURIComponent(encodeURIComponent(t.text)), t.endTime > 0 && f.push(t)
						}, g.onparsingerror = function(t) {
							h = t
						}, g.onflush = function() {
							return h && a ? void a(h) : void n(f)
						}, o.forEach(function(t) {
							if (p) {
								if (_i(t, "X-TIMESTAMP-MAP=")) {
									p = !1, t.substr(16).split(",").forEach(function(t) {
										_i(t, "LOCAL:") ? u = t.substr(6) : _i(t, "MPEGTS:") && (d = parseInt(t.substr(7)))
									});
									try {
										e = e < 0 ? e + 8589934592 : e, d -= e, l = Ti(u) / 1e3, c = d / 9e4, l === -1 && (h = new Error("Malformed X-TIMESTAMP-MAP: " + t))
									} catch (e) {
										h = new Error("Malformed X-TIMESTAMP-MAP: " + t)
									}
									return
								}
								"" === t && (p = !1)
							}
							g.parse(t + "\n")
						}), g.flush()
					}
				},
				Ai = wi,
				Ri = function(t) {
					function e(i) {
						pt(this, e);
						var r = gt(this, t.call(this, i, It.a.MEDIA_ATTACHING, It.a.MEDIA_DETACHING, It.a.FRAG_PARSING_USERDATA, It.a.FRAG_DECRYPTED, It.a.MANIFEST_LOADING, It.a.MANIFEST_LOADED, It.a.FRAG_LOADED, It.a.LEVEL_SWITCHING, It.a.INIT_PTS_FOUND));
						if (r.hls = i, r.config = i.config, r.enabled = !0, r.Cues = i.config.cueHandler, r.textTracks = [], r.tracks = [], r.unparsedVttFrags = [], r.initPTS = void 0, r.cueRanges = [], r.config.enableCEA708Captions) {
							var n = new bi(r, 1),
								a = new bi(r, 2);
							r.cea608Parser = new yi(0, n, a)
						}
						return r
					}
					return mt(e, t), e.prototype.addCues = function(t, e, i, r) {
						for (var n = this.cueRanges, a = !1, s = n.length; s--;) {
							var o = n[s],
								u = bt(o[0], o[1], e, i);
							if (u >= 0 && (o[0] = Math.min(o[0], e), o[1] = Math.max(o[1], i), a = !0, u / (i - e) > .5)) return
						}
						a || n.push([e, i]), this.Cues.newCue(this[t], e, i, r)
					}, e.prototype.onInitPtsFound = function(t) {
						var e = this;
						"undefined" == typeof this.initPTS && (this.initPTS = t.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(t) {
							e.onFragLoaded(t)
						}), this.unparsedVttFrags = [])
					}, e.prototype.getExistingTrack = function(t) {
						var e = this.media;
						if (e)
							for (var i = 0; i < e.textTracks.length; i++) {
								var r = e.textTracks[i],
									n = "textTrack" + t;
								if (r[n] === !0) return r
							}
						return null
					}, e.prototype.sendAddTrackEvent = function(t, e) {
						var i = null;
						try {
							i = new window.Event("addtrack")
						} catch (t) {
							i = document.createEvent("Event"), i.initEvent("addtrack", !1, !1)
						}
						i.track = t, e.dispatchEvent(i)
					}, e.prototype.createCaptionsTrack = function(t) {
						var e = "textTrack" + t;
						if (!this[e]) {
							var i = this.getExistingTrack(t);
							if (i) this[e] = i, yt(this[e]), this.sendAddTrackEvent(this[e], this.media);
							else {
								var r = this.createTextTrack("captions", this.config["captionsTextTrack" + t + "Label"], this.config.captionsTextTrack1LanguageCode);
								r && (r[e] = !0, this[e] = r)
							}
						}
					}, e.prototype.createTextTrack = function(t, e, i) {
						var r = this.media;
						if (r) return r.addTextTrack(t, e, i)
					}, e.prototype.destroy = function() {
						Ut.prototype.destroy.call(this)
					}, e.prototype.onMediaAttaching = function(t) {
						this.media = t.media, this._cleanTracks()
					}, e.prototype.onMediaDetaching = function() {
						yt(this.textTrack1), yt(this.textTrack2)
					}, e.prototype.onManifestLoading = function() {
						this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
							ccOffset: 0,
							presentationOffset: 0
						}, this._cleanTracks()
					}, e.prototype._cleanTracks = function() {
						var t = this.media;
						if (t) {
							var e = t.textTracks;
							if (e)
								for (var i = 0; i < e.length; i++) yt(e[i])
						}
					}, e.prototype.onManifestLoaded = function(t) {
						var e = this;
						if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {
							this.tracks = t.subtitles || [];
							var i = this.media ? this.media.textTracks : [];
							this.tracks.forEach(function(t, r) {
								var n = void 0;
								if (r < i.length) {
									var a = i[r];
									vt(a, t) && (n = a)
								}
								n || (n = e.createTextTrack("subtitles", t.name, t.lang)), n.mode = t.default ? "showing" : "hidden", e.textTracks.push(n)
							})
						}
					}, e.prototype.onLevelSwitching = function() {
						this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
					}, e.prototype.onFragLoaded = function(t) {
						var e = t.frag,
							i = t.payload;
						if ("main" === e.type) {
							var r = e.sn;
							if (r !== this.lastSn + 1) {
								var n = this.cea608Parser;
								n && n.reset()
							}
							this.lastSn = r
						} else if ("subtitle" === e.type)
							if (i.byteLength) {
								if ("undefined" == typeof this.initPTS) return void this.unparsedVttFrags.push(t);
								var a = e.decryptdata;
								null != a && null != a.key && "AES-128" === a.method || this._parseVTTs(e, i)
							} else this.hls.trigger(It.a.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: e
							})
					}, e.prototype._parseVTTs = function(t, e) {
						var i = this.vttCCs;
						i[t.cc] || (i[t.cc] = {
							start: t.start,
							prevCC: this.prevCC,
							new: !0
						}, this.prevCC = t.cc);
						var r = this.textTracks,
							n = this.hls;
						Ai.parse(e, this.initPTS, i, t.cc, function(e) {
							var i = r[t.trackId];
							e.forEach(function(t) {
								if (!i.cues.getCueById(t.id)) try {
									i.addCue(t)
								} catch (r) {
									var e = new window.TextTrackCue(t.startTime, t.endTime, t.text);
									e.id = t.id, i.addCue(e)
								}
							}), n.trigger(It.a.SUBTITLE_FRAG_PROCESSED, {
								success: !0,
								frag: t
							})
						}, function(e) {
							Pt.b.log("Failed to parse VTT cue: " + e), n.trigger(It.a.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: t
							})
						})
					}, e.prototype.onFragDecrypted = function(t) {
						var e = t.payload,
							i = t.frag;
						if ("subtitle" === i.type) {
							if ("undefined" == typeof this.initPTS) return void this.unparsedVttFrags.push(t);
							this._parseVTTs(i, e)
						}
					}, e.prototype.onFragParsingUserdata = function(t) {
						if (this.enabled && this.config.enableCEA708Captions)
							for (var e = 0; e < t.samples.length; e++) {
								var i = this.extractCea608Data(t.samples[e].bytes);
								this.cea608Parser.addData(t.samples[e].pts, i)
							}
					}, e.prototype.extractCea608Data = function(t) {
						for (var e, i, r, n, a, s = 31 & t[0], o = 2, u = [], d = 0; d < s; d++) e = t[o++], i = 127 & t[o++], r = 127 & t[o++], n = 0 !== (4 & e), a = 3 & e, 0 === i && 0 === r || n && 0 === a && (u.push(i), u.push(r));
						return u
					}, e
				}(Ut),
				Li = Ri,
				ki = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				Oi = function(t) {
					function e(i) {
						_t(this, e);
						var r = Tt(this, t.call(this, i, It.a.MEDIA_ATTACHED, It.a.MEDIA_DETACHING, It.a.MANIFEST_LOADING, It.a.MANIFEST_LOADED, It.a.SUBTITLE_TRACK_LOADED));
						return r.tracks = [], r.trackId = -1, r.media = void 0, r.subtitleDisplay = !1, r
					}
					return St(e, t), e.prototype._onTextTracksChanged = function() {
						if (this.media) {
							for (var t = -1, e = Et(this.media.textTracks), i = 0; i < e.length; i++) "showing" === e[i].mode && (t = i);
							this.subtitleTrack = t
						}
					}, e.prototype.destroy = function() {
						Ut.prototype.destroy.call(this)
					}, e.prototype.onMediaAttached = function(t) {
						var e = this;
						this.media = t.media, this.media && (void 0 !== this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
							e.trackChangeListener()
						}, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
					}, e.prototype.onMediaDetaching = function() {
						this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = void 0)
					}, e.prototype.onManifestLoading = function() {
						this.tracks = [], this.trackId = -1
					}, e.prototype.onManifestLoaded = function(t) {
						var e = this,
							i = t.subtitles || [];
						this.tracks = i, this.trackId = -1, this.hls.trigger(It.a.SUBTITLE_TRACKS_UPDATED, {
							subtitleTracks: i
						}), i.forEach(function(t) {
							t.default && (e.media ? e.subtitleTrack = t.id : e.queuedDefaultTrack = t.id)
						})
					}, e.prototype.onTick = function() {
						var t = this.trackId,
							e = this.tracks[t];
						if (e) {
							var i = e.details;
							void 0 !== i && i.live !== !0 || (Pt.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(It.a.SUBTITLE_TRACK_LOADING, {
								url: e.url,
								id: t
							}))
						}
					}, e.prototype.onSubtitleTrackLoaded = function(t) {
						var e = this;
						t.id < this.tracks.length && (Pt.b.log("subtitle track " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(function() {
							e.onTick()
						}, 1e3 * t.details.targetduration, this)), !t.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
					}, e.prototype.setSubtitleTrackInternal = function(t) {
						if (!(t < -1 || t >= this.tracks.length)) {
							this.timer && (clearInterval(this.timer), this.timer = null);
							var e = Et(this.media.textTracks);
							if (this.trackId !== -1 && this.subtitleDisplay && (e[this.trackId].mode = "hidden"), this.trackId = t, Pt.b.log("switching to subtitle track " + t), this.hls.trigger(It.a.SUBTITLE_TRACK_SWITCH, {
									id: t
								}), t !== -1) {
								var i = this.tracks[t];
								this.subtitleDisplay && (e[t].mode = "showing");
								var r = i.details;
								void 0 !== r && r.live !== !0 || (Pt.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(It.a.SUBTITLE_TRACK_LOADING, {
									url: i.url,
									id: t
								}))
							}
						}
					}, ki(e, [{
						key: "subtitleTracks",
						get: function() {
							return this.tracks
						}
					}, {
						key: "subtitleTrack",
						get: function() {
							return this.trackId
						},
						set: function(t) {
							this.trackId !== t && this.setSubtitleTrackInternal(t)
						}
					}]), e
				}(Ut),
				Di = Oi,
				Ii = i(4),
				Ci = {
					STOPPED: "STOPPED",
					IDLE: "IDLE",
					KEY_LOADING: "KEY_LOADING",
					FRAG_LOADING: "FRAG_LOADING"
				},
				Pi = function(t) {
					function e(i) {
						wt(this, e);
						var r = At(this, t.call(this, i, It.a.MEDIA_ATTACHED, It.a.ERROR, It.a.KEY_LOADED, It.a.FRAG_LOADED, It.a.SUBTITLE_TRACKS_UPDATED, It.a.SUBTITLE_TRACK_SWITCH, It.a.SUBTITLE_TRACK_LOADED, It.a.SUBTITLE_FRAG_PROCESSED));
						return r.config = i.config, r.vttFragSNsProcessed = {}, r.vttFragQueues = void 0, r.currentlyProcessing = null, r.state = Ci.STOPPED, r.currentTrackId = -1, r.ticks = 0, r.decrypter = new Ii.a(i.observer, i.config), r
					}
					return Rt(e, t), e.prototype.destroy = function() {
						Ut.prototype.destroy.call(this), this.state = Ci.STOPPED
					}, e.prototype.clearVttFragQueues = function() {
						var t = this;
						this.vttFragQueues = {}, this.tracks.forEach(function(e) {
							t.vttFragQueues[e.id] = []
						})
					}, e.prototype.nextFrag = function() {
						if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
							var t = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
							this.fragCurrent = t, this.hls.trigger(It.a.FRAG_LOADING, {
								frag: t
							}), this.state = Ci.FRAG_LOADING
						}
					}, e.prototype.onSubtitleFragProcessed = function(t) {
						t.success && this.vttFragSNsProcessed[t.frag.trackId].push(t.frag.sn), this.currentlyProcessing = null, this.state = Ci.IDLE, this.nextFrag()
					}, e.prototype.onMediaAttached = function() {
						this.state = Ci.IDLE
					}, e.prototype.onError = function(t) {
						var e = t.frag;
						e && "subtitle" !== e.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
					}, e.prototype.tick = function() {
						var t = this;
						this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(function() {
							t.tick()
						}, 1), this.ticks = 0)
					}, e.prototype.doTick = function() {
						var t = this;
						switch (this.state) {
							case Ci.IDLE:
								var e = this.tracks,
									i = this.currentTrackId,
									r = this.vttFragSNsProcessed[i],
									n = this.vttFragQueues[i],
									a = this.currentlyProcessing ? this.currentlyProcessing.sn : -1,
									s = function(t) {
										return r.indexOf(t.sn) > -1
									},
									o = function(t) {
										return n.some(function(e) {
											return e.sn === t.sn
										})
									};
								if (!e) break;
								var u;
								if (i < e.length && (u = e[i].details), "undefined" == typeof u) break;
								u.fragments.forEach(function(e) {
									s(e) || e.sn === a || o(e) || (e.decryptdata && null != e.decryptdata.uri && null == e.decryptdata.key ? (Pt.b.log("Loading key for " + e.sn), t.state = Ci.KEY_LOADING, t.hls.trigger(It.a.KEY_LOADING, {
										frag: e
									})) : (e.trackId = i, n.push(e), t.nextFrag()))
								})
						}
					}, e.prototype.onSubtitleTracksUpdated = function(t) {
						var e = this;
						Pt.b.log("subtitle tracks updated"), this.tracks = t.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function(t) {
							e.vttFragSNsProcessed[t.id] = []
						})
					}, e.prototype.onSubtitleTrackSwitch = function(t) {
						this.currentTrackId = t.id, this.clearVttFragQueues()
					}, e.prototype.onSubtitleTrackLoaded = function() {
						this.tick()
					}, e.prototype.onKeyLoaded = function() {
						this.state === Ci.KEY_LOADING && (this.state = Ci.IDLE, this.tick())
					}, e.prototype.onFragLoaded = function(t) {
						var e = this.fragCurrent,
							i = t.frag.decryptdata,
							r = t.frag,
							n = this.hls;
						if (this.state === Ci.FRAG_LOADING && e && "subtitle" === t.frag.type && e.sn === t.frag.sn && t.payload.byteLength > 0 && null != i && null != i.key && "AES-128" === i.method) {
							var a;
							try {
								a = performance.now()
							} catch (t) {
								a = Date.now()
							}
							this.decrypter.decrypt(t.payload, i.key.buffer, i.iv.buffer, function(t) {
								var e;
								try {
									e = performance.now()
								} catch (t) {
									e = Date.now()
								}
								n.trigger(It.a.FRAG_DECRYPTED, {
									frag: r,
									payload: t,
									stats: {
										tstart: a,
										tdecrypt: e
									}
								})
							})
						}
					}, e
				}(Ut),
				xi = Pi,
				Mi = {
					autoStartLoad: !0,
					startPosition: -1,
					defaultAudioCodec: void 0,
					debug: !1,
					capLevelOnFPSDrop: !1,
					capLevelToPlayerSize: !1,
					initialLiveManifestSize: 1,
					maxBufferLength: 30,
					maxBufferSize: 6e7,
					maxBufferHole: .5,
					maxSeekHole: 2,
					lowBufferWatchdogPeriod: .5,
					highBufferWatchdogPeriod: 3,
					nudgeOffset: .1,
					nudgeMaxRetry: 3,
					maxFragLookUpTolerance: .25,
					liveSyncDurationCount: 3,
					liveMaxLatencyDurationCount: 1 / 0,
					liveSyncDuration: void 0,
					liveMaxLatencyDuration: void 0,
					liveDurationInfinity: !1,
					maxMaxBufferLength: 600,
					enableWorker: !0,
					enableSoftwareAES: !0,
					manifestLoadingTimeOut: 1e4,
					manifestLoadingMaxRetry: 1,
					manifestLoadingRetryDelay: 1e3,
					manifestLoadingMaxRetryTimeout: 64e3,
					startLevel: void 0,
					levelLoadingTimeOut: 1e4,
					levelLoadingMaxRetry: 4,
					levelLoadingRetryDelay: 1e3,
					levelLoadingMaxRetryTimeout: 64e3,
					fragLoadingTimeOut: 2e4,
					fragLoadingMaxRetry: 6,
					fragLoadingRetryDelay: 1e3,
					fragLoadingMaxRetryTimeout: 64e3,
					fragLoadingLoopThreshold: 3,
					startFragPrefetch: !1,
					fpsDroppedMonitoringPeriod: 5e3,
					fpsDroppedMonitoringThreshold: .2,
					appendErrorMaxRetry: 3,
					loader: je,
					fLoader: void 0,
					pLoader: void 0,
					xhrSetup: void 0,
					fetchSetup: void 0,
					abrController: Ie,
					bufferController: xe,
					capLevelController: Ne,
					fpsController: Be,
					stretchShortVideoTrack: !1,
					maxAudioFramesDrift: 1,
					forceKeyFrameOnDiscontinuity: !0,
					abrEwmaFastLive: 3,
					abrEwmaSlowLive: 9,
					abrEwmaFastVoD: 3,
					abrEwmaSlowVoD: 9,
					abrEwmaDefaultEstimate: 5e5,
					abrBandWidthFactor: .95,
					abrBandWidthUpFactor: .7,
					abrMaxWithRealBitrate: !1,
					maxStarvationDelay: 4,
					maxLoadingDelay: 4,
					minAutoBitrate: 0
				};
			Mi.subtitleStreamController = xi, Mi.subtitleTrackController = Di, Mi.timelineController = Li, Mi.cueHandler = kt, Mi.enableCEA708Captions = !0, Mi.enableWebVTT = !0, Mi.captionsTextTrack1Label = "English", Mi.captionsTextTrack1LanguageCode = "en", Mi.captionsTextTrack2Label = "Spanish", Mi.captionsTextTrack2LanguageCode = "es", Mi.audioStreamController = Ye, Mi.audioTrackController = Ve;
			var Ui = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				Ni = function() {
					function t() {
						var e = this,
							i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						Lt(this, t);
						var r = t.DefaultConfig;
						if ((i.liveSyncDurationCount || i.liveMaxLatencyDurationCount) && (i.liveSyncDuration || i.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
						for (var n in r) n in i || (i[n] = r[n]);
						if (void 0 !== i.liveMaxLatencyDurationCount && i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
						if (void 0 !== i.liveMaxLatencyDuration && (i.liveMaxLatencyDuration <= i.liveSyncDuration || void 0 === i.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
						Object(Pt.a)(i.debug), this.config = i, this._autoLevelCapping = -1;
						var a = this.observer = new oe.a;
						a.trigger = function(t) {
							for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
							a.emit.apply(a, [t, t].concat(i))
						}, a.off = function(t) {
							for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
							a.removeListener.apply(a, [t].concat(i))
						}, this.on = a.on.bind(a), this.off = a.off.bind(a), this.trigger = a.trigger.bind(a);
						var s = this.abrController = new i.abrController(this),
							o = new i.bufferController(this),
							u = new i.capLevelController(this),
							d = new i.fpsController(this),
							l = new Qt(this),
							c = new Jt(this),
							f = new te(this),
							h = new we(this),
							p = this.levelController = new Te(this),
							g = this.streamController = new ve(this),
							m = [p, g],
							y = i.audioStreamController;
						y && m.push(new y(this)), this.networkControllers = m;
						var v = [l, c, f, s, o, u, d, h];
						if (y = i.audioTrackController) {
							var b = new y(this);
							this.audioTrackController = b, v.push(b)
						}
						if (y = i.subtitleTrackController) {
							var _ = new y(this);
							this.subtitleTrackController = _, v.push(_)
						}[i.subtitleStreamController, i.timelineController].forEach(function(t) {
							t && v.push(new t(e))
						}), this.coreComponents = v
					}
					return t.isSupported = function() {
						return N()
					}, Ui(t, null, [{
						key: "version",
						get: function() {
							return "0.8.9"
						}
					}, {
						key: "Events",
						get: function() {
							return It.a
						}
					}, {
						key: "ErrorTypes",
						get: function() {
							return Ct.b
						}
					}, {
						key: "ErrorDetails",
						get: function() {
							return Ct.a
						}
					}, {
						key: "DefaultConfig",
						get: function() {
							return t.defaultConfig ? t.defaultConfig : Mi
						},
						set: function(e) {
							t.defaultConfig = e
						}
					}]), t.prototype.destroy = function() {
						Pt.b.log("destroy"), this.trigger(It.a.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function(t) {
							t.destroy()
						}), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1
					}, t.prototype.attachMedia = function(t) {
						Pt.b.log("attachMedia"), this.media = t, this.trigger(It.a.MEDIA_ATTACHING, {
							media: t
						})
					}, t.prototype.detachMedia = function() {
						Pt.b.log("detachMedia"), this.trigger(It.a.MEDIA_DETACHING), this.media = null
					}, t.prototype.loadSource = function(t) {
						t = Dt.a.buildAbsoluteURL(window.location.href, t, {
							alwaysNormalize: !0
						}), Pt.b.log("loadSource:" + t), this.url = t, this.trigger(It.a.MANIFEST_LOADING, {
							url: t
						})
					}, t.prototype.startLoad = function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
						Pt.b.log("startLoad(" + t + ")"), this.networkControllers.forEach(function(e) {
							e.startLoad(t)
						})
					}, t.prototype.stopLoad = function() {
						Pt.b.log("stopLoad"), this.networkControllers.forEach(function(t) {
							t.stopLoad()
						})
					}, t.prototype.swapAudioCodec = function() {
						Pt.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
					}, t.prototype.recoverMediaError = function() {
						Pt.b.log("recoverMediaError");
						var t = this.media;
						this.detachMedia(), this.attachMedia(t)
					}, Ui(t, [{
						key: "levels",
						get: function() {
							return this.levelController.levels
						}
					}, {
						key: "currentLevel",
						get: function() {
							return this.streamController.currentLevel
						},
						set: function(t) {
							Pt.b.log("set currentLevel:" + t), this.loadLevel = t, this.streamController.immediateLevelSwitch()
						}
					}, {
						key: "nextLevel",
						get: function() {
							return this.streamController.nextLevel
						},
						set: function(t) {
							Pt.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
						}
					}, {
						key: "loadLevel",
						get: function() {
							return this.levelController.level
						},
						set: function(t) {
							Pt.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
						}
					}, {
						key: "nextLoadLevel",
						get: function() {
							return this.levelController.nextLoadLevel
						},
						set: function(t) {
							this.levelController.nextLoadLevel = t
						}
					}, {
						key: "firstLevel",
						get: function() {
							return Math.max(this.levelController.firstLevel, this.minAutoLevel)
						},
						set: function(t) {
							Pt.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
						}
					}, {
						key: "startLevel",
						get: function() {
							return this.levelController.startLevel
						},
						set: function(t) {
							Pt.b.log("set startLevel:" + t);
							var e = this;
							t !== -1 && (t = Math.max(t, e.minAutoLevel)), e.levelController.startLevel = t
						}
					}, {
						key: "autoLevelCapping",
						get: function() {
							return this._autoLevelCapping
						},
						set: function(t) {
							Pt.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t
						}
					}, {
						key: "autoLevelEnabled",
						get: function() {
							return this.levelController.manualLevel === -1
						}
					}, {
						key: "manualLevel",
						get: function() {
							return this.levelController.manualLevel
						}
					}, {
						key: "minAutoLevel",
						get: function() {
							for (var t = this, e = t.levels, i = t.config.minAutoBitrate, r = e ? e.length : 0, n = 0; n < r; n++) {
								var a = e[n].realBitrate ? Math.max(e[n].realBitrate, e[n].bitrate) : e[n].bitrate;
								if (a > i) return n
							}
							return 0
						}
					}, {
						key: "maxAutoLevel",
						get: function() {
							var t = this,
								e = t.levels,
								i = t.autoLevelCapping,
								r = void 0;
							return r = i === -1 && e && e.length ? e.length - 1 : i
						}
					}, {
						key: "nextAutoLevel",
						get: function() {
							var t = this;
							return Math.min(Math.max(t.abrController.nextAutoLevel, t.minAutoLevel), t.maxAutoLevel)
						},
						set: function(t) {
							var e = this;
							e.abrController.nextAutoLevel = Math.max(e.minAutoLevel, t)
						}
					}, {
						key: "audioTracks",
						get: function() {
							var t = this.audioTrackController;
							return t ? t.audioTracks : []
						}
					}, {
						key: "audioTrack",
						get: function() {
							var t = this.audioTrackController;
							return t ? t.audioTrack : -1
						},
						set: function(t) {
							var e = this.audioTrackController;
							e && (e.audioTrack = t)
						}
					}, {
						key: "liveSyncPosition",
						get: function() {
							return this.streamController.liveSyncPosition
						}
					}, {
						key: "subtitleTracks",
						get: function() {
							var t = this.subtitleTrackController;
							return t ? t.subtitleTracks : []
						}
					}, {
						key: "subtitleTrack",
						get: function() {
							var t = this.subtitleTrackController;
							return t ? t.subtitleTrack : -1
						},
						set: function(t) {
							var e = this.subtitleTrackController;
							e && (e.subtitleTrack = t)
						}
					}, {
						key: "subtitleDisplay",
						get: function() {
							var t = this.subtitleTrackController;
							return !!t && t.subtitleDisplay
						},
						set: function(t) {
							var e = this.subtitleTrackController;
							e && (e.subtitleDisplay = t)
						}
					}]), t
				}();
			e.default = Ni
		}, function(t, e, i) {
			function r(t) {
				function e(r) {
					if (i[r]) return i[r].exports;
					var n = i[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
				}
				var i = {};
				e.m = t, e.c = i, e.i = function(t) {
					return t
				}, e.d = function(t, i, r) {
					e.o(t, i) || Object.defineProperty(t, i, {
						configurable: !1,
						enumerable: !0,
						get: r
					})
				}, e.n = function(t) {
					var i = t && t.__esModule ? function() {
						return t.default
					} : function() {
						return t
					};
					return e.d(i, "a", i), i
				}, e.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				}, e.p = "/", e.oe = function(t) {
					throw console.error(t), t
				};
				var r = e(e.s = ENTRY_MODULE);
				return r.default || r
			}

			function n(t) {
				return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}

			function a(t) {
				var e = [],
					i = t.toString(),
					r = i.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
				if (!r) return e;
				for (var a, s = r[1], o = new RegExp("(\\\\n|\\W)" + n(s) + "\\((/\\*.*?\\*/)?s?.*?([\\.|\\-|\\w|/|@]+).*?\\)", "g"); a = o.exec(i);) e.push(a[3]);
				return e
			}

			function s(t, e) {
				for (var i = [e], r = [], n = {}; i.length;) {
					var s = i.pop();
					if (!n[s] && t[s]) {
						n[s] = !0, r.push(s);
						var o = a(t[s]);
						i = i.concat(o)
					}
				}
				return r
			}
			t.exports = function(t, e) {
				e = e || {};
				var n = i.m,
					a = e.all ? Object.keys(n) : s(n, t),
					o = "(" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a.map(function(t) {
						return "" + JSON.stringify(t) + ": " + n[t].toString()
					}).join(",") + "})(self);",
					u = new window.Blob([o], {
						type: "text/javascript"
					});
				if (e.bare) return u;
				var d = window.URL || window.webkitURL || window.mozURL || window.msURL,
					l = d.createObjectURL(u),
					c = new window.Worker(l);
				return c.objectURL = l, c
			}
		}, function(t, e, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = i(7),
				n = i(1),
				a = i(0),
				s = i(5),
				o = i.n(s),
				u = function(t) {
					var e = new o.a;
					e.trigger = function(t) {
						for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
						e.emit.apply(e, [t, t].concat(r))
					}, e.off = function(t) {
						for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
						e.removeListener.apply(e, [t].concat(r))
					};
					var i = function(e, i) {
						t.postMessage({
							event: e,
							data: i
						})
					};
					t.addEventListener("message", function(n) {
						var s = n.data;
						switch (s.cmd) {
							case "init":
								var o = JSON.parse(s.config);
								t.demuxer = new r.a(e, s.typeSupported, o, s.vendor);
								try {
									Object(a.a)(o.debug === !0)
								} catch (t) {
									console.warn("demuxerWorker: unable to enable logs")
								}
								i("init", null);
								break;
							case "demux":
								t.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS)
						}
					}), e.on(n.a.FRAG_DECRYPTED, i), e.on(n.a.FRAG_PARSING_INIT_SEGMENT, i), e.on(n.a.FRAG_PARSED, i), e.on(n.a.ERROR, i), e.on(n.a.FRAG_PARSING_METADATA, i), e.on(n.a.FRAG_PARSING_USERDATA, i), e.on(n.a.INIT_PTS_FOUND, i), e.on(n.a.FRAG_PARSING_DATA, function(e, i) {
						var r = [],
							n = {
								event: e,
								data: i
							};
						i.data1 && (n.data1 = i.data1.buffer, r.push(i.data1.buffer), delete i.data1), i.data2 && (n.data2 = i.data2.buffer, r.push(i.data2.buffer), delete i.data2), t.postMessage(n, r)
					})
				};
			e.default = u
		}]).default
	})
}, , function(t, e) {
	"use strict";

	function i() {
		var t = document.createElement("span");
		return t.style.cssText = n, t.innerHTML = r, t
	}
	var r = "P2P demo account",
		n = "background-color:#000;color:#fff;font-size:64px;left:0;position:absolute;top:0;z-index:2147483645;width:100%;height:100%;opacity:0.9",
		a = document.location.hostname;
	t.exports = function(t) {
		if (window.peer5.getConfig("MEDIA_WATERMARK") === !0 && "peer5.com" !== a.substr(-9)) {
			var e = t.parentElement;
			if (e) {
				var r = getComputedStyle(e);
				["relative", "absolute", "fixed"].indexOf(r.position) === -1 && (e.style.position = "relative");
				var n = i();
				e.insertBefore(n, t)
			}
		}
	}
}, function(t, e, i) {
	"use strict";

	function r() {
		a(s)
	}
	var n = i(7),
		a = i(34),
		s = i(36);
	n({
		onConditionsMet: r,
		globalsCondition: ["peer5"]
	}), window.Hls || (window.Hls = s), t.exports = s
}, function(t, e) {
	"use strict";

	function i(t, e) {
		if (t in r) {
			var i, n = r[t];
			for (i in e) {
				if (!(i in n)) return !1;
				if (typeof e[i] !== n[i].type) return !1
			}
			for (var a in n)
				if (n[a].required && typeof e[a] !== n[a].type) return !1;
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
	t.exports = function(t, e) {
		i(t, e) && radio("external." + t).broadcast(e)
	}
}, function(t, e, i) {
	"use strict";

	function r() {
		function t(t, e) {
			void 0 === r[t] && (r[t] = n(t, e))
		}

		function e(t, e) {
			var n = r[t],
				a = n.getEvents(e);
			i("player", a)
		}

		function i(t, e) {
			e.forEach(function(e) {
				a(t, e)
			})
		}
		var r = Object.create(null);
		return {
			updateAction: e,
			initPlayer: t
		}
	}
	var n = i(42),
		a = i(40);
	t.exports = r()
}, function(t, e) {
	"use strict";

	function i(t, e) {
		function i() {
			if (p) return [];
			if (g) return [];
			_++, p = Date.now();
			var t = Date.now() - y,
				e = {
					action: "rebuffer.start",
					label: "playback",
					timeSinceLoaded: t,
					id: f,
					vendor: h,
					occurrence: _
				};
			return [e]
		}

		function r() {
			T++, g = Date.now();
			var t = Date.now() - y,
				e = {
					action: "seek.start",
					label: "seek",
					timeSinceLoaded: t,
					id: f,
					vendor: h,
					occurrence: T
				};
			return [e]
		}

		function n() {
			var t = Date.now();
			if (!m) {
				m = t;
				var e = {
					action: "load.start",
					label: "load",
					id: f,
					vendor: h
				};
				return b && (b = !1, v && (e.timeSinceReady = t - v)), [e]
			}
			return []
		}

		function a() {
			var t = Date.now();
			if (m) {
				var e = t - m;
				m = null;
				var i = {
					action: "load.end",
					label: "load",
					duration: e,
					id: f,
					vendor: h
				};
				return y = t, [i]
			}
			return []
		}

		function s() {
			var t = Date.now();
			if (p) {
				var e = t - p;
				p = null;
				var i = t - y,
					r = {
						action: "rebuffer.end",
						label: "playback",
						timeSinceLoaded: i,
						duration: e,
						id: f,
						vendor: h,
						occurrence: _
					};
				return [r]
			}
			if (g) {
				var e = t - g;
				g = null;
				var i = t - y,
					n = {
						action: "seek.end",
						label: "seek",
						timeSinceLoaded: i,
						duration: e,
						id: f,
						vendor: h,
						occurrence: T
					};
				return [n]
			}
			return []
		}

		function o() {
			v = Date.now(), b = !0;
			var t = {
				action: "ready",
				label: "ready",
				id: f,
				vendor: h
			};
			return [t]
		}

		function u() {
			S = !0;
			var t = {
				action: "pause.start",
				label: "pause",
				id: f,
				vendor: h
			};
			return [t]
		}

		function d() {
			var t = {
				action: "stop",
				label: "stop",
				id: f,
				vendor: h
			};
			return [t]
		}

		function l() {
			S = !1;
			var t = {
				action: "pause.end",
				label: "pause",
				id: f,
				vendor: h
			};
			return [t]
		}

		function c(t) {
			var e = [];
			switch (t) {
				case "ready":
					e = o();
					break;
				case "buffer":
					e = i();
					break;
				case "seek":
					e = r();
					break;
				case "loadStart":
					e = n();
					break;
				case "loadEnd":
					e = a();
					break;
				case "pause":
					e = u();
					break;
				case "stop":
					e = d();
					break;
				case "play":
					e = l();
					break;
				case "resume":
					e = s();
					break;
				default:
					console.error("unrecognized action:" + t)
			}
			return e
		}
		var f = t,
			h = e,
			p = null,
			g = null,
			m = null,
			y = null,
			v = null,
			b = !0,
			_ = 0,
			T = 0,
			S = !0;
		return {
			getEvents: c
		}
	}
	t.exports = i
}, , , , function(t, e) {
	! function t(e, i, r) {
		function n(s, o) {
			if (!i[s]) {
				if (!e[s]) {
					var u = "function" == typeof require && require;
					if (!o && u) return u(s, !0);
					if (a) return a(s, !0);
					var d = new Error("Cannot find module '" + s + "'");
					throw d.code = "MODULE_NOT_FOUND", d
				}
				var l = i[s] = {
					exports: {}
				};
				e[s][0].call(l.exports, function(t) {
					var i = e[s][1][t];
					return n(i || t)
				}, l, l.exports, t, e, i, r)
			}
			return i[s].exports
		}
		for (var a = "function" == typeof require && require, s = 0; s < r.length; s++) n(r[s]);
		return n
	}({
		1: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = function() {
					function t(t, e) {
						var i = [],
							r = !0,
							n = !1,
							a = void 0;
						try {
							for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); r = !0);
						} catch (t) {
							n = !0, a = t
						} finally {
							try {
								!r && o.return && o.return()
							} finally {
								if (n) throw a
							}
						}
						return i
					}
					return function(e, i) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return t(e, i);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}(),
				n = t(32),
				a = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(n),
				s = function(t, e) {
					for (var i = t.cues, r = 0; r < i.length; r++) {
						var n = i[r];
						if (e >= n.adStartTime && e <= n.adEndTime) return n
					}
					return null
				},
				o = function(t, e) {
					var i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
					if (t.segments)
						for (var n = i, o = void 0, u = 0; u < t.segments.length; u++) {
							var d = t.segments[u];
							if (o || (o = s(e, n + d.duration / 2)), o) {
								if ("cueIn" in d) {
									o.endTime = n, o.adEndTime = n, n += d.duration, o = null;
									continue
								}
								if (n < o.endTime) {
									n += d.duration;
									continue
								}
								o.endTime += d.duration
							} else if ("cueOut" in d && (o = new a.default.VTTCue(n, n + d.duration, d.cueOut), o.adStartTime = n, o.adEndTime = n + parseFloat(d.cueOut), e.addCue(o)), "cueOutCont" in d) {
								var l = void 0,
									c = void 0,
									f = d.cueOutCont.split("/").map(parseFloat),
									h = r(f, 2);
								l = h[0], c = h[1], o = new a.default.VTTCue(n, n + d.duration, ""), o.adStartTime = n - l, o.adEndTime = o.adStartTime + c, e.addCue(o)
							}
							n += d.duration
						}
				};
			i.default = {
				updateAdCues: o,
				findAdCue: s
			}, e.exports = i.default
		}, {}],
		2: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = function(t, e) {
					return t.start(e) + "-" + t.end(e)
				},
				n = function(t, e) {
					var i = t.toString(16);
					return "00".substring(0, 2 - i.length) + i + (e % 2 ? " " : "")
				},
				a = function(t) {
					return t >= 32 && t < 126 ? String.fromCharCode(t) : "."
				},
				s = function(t) {
					var e = {};
					return Object.keys(t).forEach(function(i) {
						var r = t[i];
						ArrayBuffer.isView(r) ? e[i] = {
							bytes: r.buffer,
							byteOffset: r.byteOffset,
							byteLength: r.byteLength
						} : e[i] = r
					}), e
				},
				o = function(t) {
					var e = t.byterange || {
						length: 1 / 0,
						offset: 0
					};
					return [e.length, e.offset, t.resolvedUri].join(",")
				},
				u = {
					hexDump: function(t) {
						for (var e = Array.prototype.slice.call(t), i = "", r = void 0, s = void 0, o = 0; o < e.length / 16; o++) r = e.slice(16 * o, 16 * o + 16).map(n).join(""), s = e.slice(16 * o, 16 * o + 16).map(a).join(""), i += r + " " + s + "\n";
						return i
					},
					tagDump: function(t) {
						return u.hexDump(t.bytes)
					},
					textRanges: function(t) {
						var e = "",
							i = void 0;
						for (i = 0; i < t.length; i++) e += r(t, i) + " ";
						return e
					},
					createTransferableMessage: s,
					initSegmentId: o
				};
			i.default = u, e.exports = i.default
		}, {}],
		3: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			}), i.default = {
				GOAL_BUFFER_LENGTH: 30,
				MAX_GOAL_BUFFER_LENGTH: 60,
				GOAL_BUFFER_LENGTH_RATE: 1,
				BANDWIDTH_VARIANCE: 1.2,
				BUFFER_LOW_WATER_LINE: 0,
				MAX_BUFFER_LOW_WATER_LINE: 30,
				BUFFER_LOW_WATER_LINE_RATE: 1
			}, e.exports = i.default
		}, {}],
		4: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = t(32),
				n = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(r),
				a = t(25),
				s = t(2),
				o = function(t) {
					t.onmessage = function(t) {
						var e = t.data,
							i = new Uint8Array(e.encrypted.bytes, e.encrypted.byteOffset, e.encrypted.byteLength),
							r = new Uint32Array(e.key.bytes, e.key.byteOffset, e.key.byteLength / 4),
							o = new Uint32Array(e.iv.bytes, e.iv.byteOffset, e.iv.byteLength / 4);
						new a.Decrypter(i, r, o, function(t, i) {
							n.default.postMessage((0, s.createTransferableMessage)({
								source: e.source,
								decrypted: i
							}), [i.buffer])
						})
					}
				};
			i.default = function(t) {
				return new o(t)
			}, e.exports = i.default
		}, {}],
		5: [function(t, e, i) {
			(function(e) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function n(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function a(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}),
						e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var s = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					o = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					u = t(9),
					d = r(u),
					l = t(11),
					c = t(16),
					f = r(c),
					h = t(20),
					p = r(h),
					g = t(12),
					m = r(g),
					y = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					v = r(y),
					b = t(1),
					_ = r(b),
					T = t(18),
					S = r(T),
					E = t(65),
					w = t(76),
					A = r(w),
					R = t(4),
					L = r(R),
					k = t(3),
					O = r(k),
					D = t(19),
					I = t(6),
					C = void 0,
					P = {
						videoCodec: "avc1",
						videoObjectTypeIndicator: ".4d400d",
						audioProfile: "2"
					},
					x = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
					M = function(t) {
						return this.audioSegmentLoader_[t] + this.mainSegmentLoader_[t]
					},
					U = function() {
						var e = void 0;
						try {
							e = t.resolve("./decrypter-worker")
						} catch (t) {}
						return e
					},
					N = function(t) {
						return t.replace(/avc1\.(\d+)\.(\d+)/i, function(t) {
							return (0, E.translateLegacyCodecs)([t])[0]
						})
					};
				i.mapLegacyAvcCodecs_ = N;
				var F = function(t, e, i) {
						return t + "/" + e + '; codecs="' + i.filter(function(t) {
							return !!t
						}).join(", ") + '"'
					},
					B = function(t) {
						return t.segments && t.segments.length && t.segments[0].map ? "mp4" : "mp2t"
					},
					G = function(t) {
						var e = t.attributes || {};
						return e.CODECS ? (0, D.parseCodecs)(e.CODECS) : P
					},
					j = function(t, e) {
						var i = B(e),
							r = G(e),
							n = e.attributes || {},
							a = !0,
							s = !1;
						if (!e) return [];
						if (t.mediaGroups.AUDIO && n.AUDIO) {
							var o = t.mediaGroups.AUDIO[n.AUDIO];
							if (o) {
								s = !0, a = !1;
								for (var u in o)
									if (!o[u].uri) {
										a = !0;
										break
									}
							}
						}
						s && !r.audioProfile && (v.default.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), r.audioProfile = P.audioProfile);
						var d = {};
						r.videoCodec && (d.video = "" + r.videoCodec + r.videoObjectTypeIndicator), r.audioProfile && (d.audio = "mp4a.40." + r.audioProfile);
						var l = F("audio", i, [d.audio]),
							c = F("video", i, [d.video]),
							f = F("video", i, [d.video, d.audio]);
						return s ? !a && d.video ? [c, l] : [f, l] : d.video ? [f] : [l]
					};
				i.mimeTypesForPlaylist_ = j;
				var H = function(t) {
					function e(t) {
						var i = this;
						n(this, e), o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
						var r = t.url,
							a = t.withCredentials,
							s = t.mode,
							u = t.tech,
							l = t.bandwidth,
							c = t.externHls,
							h = t.useCueTags,
							g = t.blacklistDuration,
							m = t.enableLowInitialPlaylist;
						if (!r) throw new Error("A non-empty playlist URL is required");
						C = c, this.withCredentials = a, this.tech_ = u, this.hls_ = u.hls, this.mode_ = s, this.useCueTags_ = h, this.blacklistDuration = g, this.enableLowInitialPlaylist = m, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), this.requestOptions_ = {
							withCredentials: this.withCredentials,
							timeout: null
						}, this.mediaTypes_ = (0, I.createMediaTypes)(), this.mediaSource = new v.default.MediaSource({
							mode: s
						}), this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_.bind(this)), this.seekable_ = v.default.createTimeRanges(), this.hasPlayed_ = function() {
							return !1
						}, this.syncController_ = new S.default(t), this.segmentMetadataTrack_ = u.addRemoteTextTrack({
							kind: "metadata",
							label: "segment-metadata"
						}, !1).track, this.decrypter_ = (0, A.default)(L.default, U());
						var y = {
							hls: this.hls_,
							mediaSource: this.mediaSource,
							currentTime: this.tech_.currentTime.bind(this.tech_),
							seekable: function() {
								return i.seekable()
							},
							seeking: function() {
								return i.tech_.seeking()
							},
							duration: function() {
								return i.mediaSource.duration
							},
							hasPlayed: function() {
								return i.hasPlayed_()
							},
							goalBufferLength: function() {
								return i.goalBufferLength()
							},
							bandwidth: l,
							syncController: this.syncController_,
							decrypter: this.decrypter_
						};
						this.masterPlaylistLoader_ = new d.default(r, this.hls_, this.withCredentials), this.setupMasterPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new f.default(v.default.mergeOptions(y, {
							segmentMetadataTrack: this.segmentMetadataTrack_,
							loaderType: "main"
						}), t), this.audioSegmentLoader_ = new f.default(v.default.mergeOptions(y, {
							loaderType: "audio"
						}), t), this.subtitleSegmentLoader_ = new p.default(v.default.mergeOptions(y, {
							loaderType: "vtt"
						}), t), this.setupSegmentLoaderListeners_(), x.forEach(function(t) {
							i[t + "_"] = M.bind(i, t)
						}), this.masterPlaylistLoader_.load()
					}
					return a(e, t), s(e, [{
						key: "setupMasterPlaylistLoaderListeners_",
						value: function() {
							var t = this;
							this.masterPlaylistLoader_.on("loadedmetadata", function() {
								var e = t.masterPlaylistLoader_.media(),
									i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
								(0, l.isLowestEnabledRendition)(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0: t.requestOptions_.timeout = i, e.endList && "none" !== t.tech_.preload() && (t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.mainSegmentLoader_.load()), (0, I.setupMediaGroups)({
									segmentLoaders: {
										AUDIO: t.audioSegmentLoader_,
										SUBTITLES: t.subtitleSegmentLoader_,
										main: t.mainSegmentLoader_
									},
									tech: t.tech_,
									requestOptions: t.requestOptions_,
									masterPlaylistLoader: t.masterPlaylistLoader_,
									mode: t.mode_,
									hls: t.hls_,
									master: t.master(),
									mediaTypes: t.mediaTypes_,
									blacklistCurrentPlaylist: t.blacklistCurrentPlaylist.bind(t)
								}), t.triggerPresenceUsage_(t.master(), e);
								try {
									t.setupSourceBuffers_()
								} catch (e) {
									return v.default.log.warn("Failed to create SourceBuffers", e), t.mediaSource.endOfStream("decode")
								}
								t.setupFirstPlay(), t.trigger("selectedinitialmedia")
							}), this.masterPlaylistLoader_.on("loadedplaylist", function() {
								var e = t.masterPlaylistLoader_.media();
								if (!e) {
									var i = void 0;
									return t.enableLowInitialPlaylist && (i = t.selectInitialPlaylist()), i || (i = t.selectPlaylist()), t.initialMedia_ = i, void t.masterPlaylistLoader_.media(t.initialMedia_)
								}
								t.useCueTags_ && t.updateAdCues_(e), t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.updateDuration(), t.tech_.paused() || t.mainSegmentLoader_.load(), e.endList || function() {
									var e = function() {
										var e = t.seekable();
										0 !== e.length && t.mediaSource.addSeekableRange_(e.start(0), e.end(0))
									};
									t.duration() !== 1 / 0 ? function() {
										var i = function i() {
											t.duration() === 1 / 0 ? e() : t.tech_.one("durationchange", i)
										};
										t.tech_.one("durationchange", i)
									}() : e()
								}()
							}), this.masterPlaylistLoader_.on("error", function() {
								t.blacklistCurrentPlaylist(t.masterPlaylistLoader_.error)
							}), this.masterPlaylistLoader_.on("mediachanging", function() {
								t.mainSegmentLoader_.abort(), t.mainSegmentLoader_.pause()
							}), this.masterPlaylistLoader_.on("mediachange", function() {
								var e = t.masterPlaylistLoader_.media(),
									i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
								(0, l.isLowestEnabledRendition)(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0: t.requestOptions_.timeout = i, t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.mainSegmentLoader_.load(), t.tech_.trigger({
									type: "mediachange",
									bubbles: !0
								})
							}), this.masterPlaylistLoader_.on("playlistunchanged", function() {
								var e = t.masterPlaylistLoader_.media();
								t.stuckAtPlaylistEnd_(e) && (t.blacklistCurrentPlaylist({
									message: "Playlist no longer updating."
								}), t.tech_.trigger("playliststuck"))
							}), this.masterPlaylistLoader_.on("renditiondisabled", function() {
								t.tech_.trigger({
									type: "usage",
									name: "hls-rendition-disabled"
								})
							}), this.masterPlaylistLoader_.on("renditionenabled", function() {
								t.tech_.trigger({
									type: "usage",
									name: "hls-rendition-enabled"
								})
							})
						}
					}, {
						key: "triggerPresenceUsage_",
						value: function(t, e) {
							var i = t.mediaGroups || {},
								r = !0,
								n = Object.keys(i.AUDIO);
							for (var a in i.AUDIO)
								for (var s in i.AUDIO[a]) {
									var o = i.AUDIO[a][s];
									o.uri || (r = !1)
								}
							r && this.tech_.trigger({
								type: "usage",
								name: "hls-demuxed"
							}), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
								type: "usage",
								name: "hls-webvtt"
							}), C.Playlist.isAes(e) && this.tech_.trigger({
								type: "usage",
								name: "hls-aes"
							}), C.Playlist.isFmp4(e) && this.tech_.trigger({
								type: "usage",
								name: "hls-fmp4"
							}), n.length && Object.keys(i.AUDIO[n[0]]).length > 1 && this.tech_.trigger({
								type: "usage",
								name: "hls-alternate-audio"
							}), this.useCueTags_ && this.tech_.trigger({
								type: "usage",
								name: "hls-playlist-cue-tags"
							})
						}
					}, {
						key: "setupSegmentLoaderListeners_",
						value: function() {
							var t = this;
							this.mainSegmentLoader_.on("bandwidthupdate", function() {
								var e = t.selectPlaylist(),
									i = t.masterPlaylistLoader_.media(),
									r = t.tech_.buffered(),
									n = r.length ? r.end(r.length - 1) - t.tech_.currentTime() : 0,
									a = t.bufferLowWaterLine();
								(!i.endList || t.duration() < O.default.MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < i.attributes.BANDWIDTH || n >= a) && t.masterPlaylistLoader_.media(e), t.tech_.trigger("bandwidthupdate")
							}), this.mainSegmentLoader_.on("progress", function() {
								t.trigger("progress")
							}), this.mainSegmentLoader_.on("error", function() {
								t.blacklistCurrentPlaylist(t.mainSegmentLoader_.error())
							}), this.mainSegmentLoader_.on("syncinfoupdate", function() {
								t.onSyncInfoUpdate_()
							}), this.mainSegmentLoader_.on("timestampoffset", function() {
								t.tech_.trigger({
									type: "usage",
									name: "hls-timestamp-offset"
								})
							}), this.audioSegmentLoader_.on("syncinfoupdate", function() {
								t.onSyncInfoUpdate_()
							}), this.mainSegmentLoader_.on("ended", function() {
								t.onEndOfStream()
							}), this.mainSegmentLoader_.on("earlyabort", function() {
								t.blacklistCurrentPlaylist({
									message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
								}, 120)
							}), this.mainSegmentLoader_.on("reseteverything", function() {
								t.tech_.trigger("hls-reset")
							}), this.mainSegmentLoader_.on("segmenttimemapping", function(e) {
								t.tech_.trigger({
									type: "hls-segment-time-mapping",
									mapping: e.mapping
								})
							}), this.audioSegmentLoader_.on("ended", function() {
								t.onEndOfStream()
							})
						}
					}, {
						key: "mediaSecondsLoaded_",
						value: function() {
							return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
						}
					}, {
						key: "load",
						value: function() {
							this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
						}
					}, {
						key: "fastQualityChange_",
						value: function() {
							var t = this.selectPlaylist();
							t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t), this.mainSegmentLoader_.resetLoader())
						}
					}, {
						key: "play",
						value: function() {
							if (!this.setupFirstPlay()) {
								this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_() && this.load();
								var t = this.tech_.seekable();
								return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < t.start(0) ? this.tech_.setCurrentTime(t.end(t.length - 1)) : void 0
							}
						}
					}, {
						key: "setupFirstPlay",
						value: function() {
							var t = this,
								e = this.masterPlaylistLoader_.media();
							if (!e || this.tech_.paused() || this.hasPlayed_()) return !1;
							if (!e.endList) {
								var i = function() {
									var e = t.seekable();
									return e.length ? v.default.browser.IE_VERSION && "html5" === t.mode_ && 0 === t.tech_.readyState() ? (t.tech_.one("loadedmetadata", function() {
										t.trigger("firstplay"), t.tech_.setCurrentTime(e.end(0)), t.hasPlayed_ = function() {
											return !0
										}
									}), {
										v: !1
									}) : (t.trigger("firstplay"), void t.tech_.setCurrentTime(e.end(0))) : {
										v: !1
									}
								}();
								if ("object" == typeof i) return i.v
							}
							return this.hasPlayed_ = function() {
								return !0
							}, this.load(), !0
						}
					}, {
						key: "handleSourceOpen_",
						value: function() {
							try {
								this.setupSourceBuffers_()
							} catch (t) {
								return v.default.log.warn("Failed to create Source Buffers", t), this.mediaSource.endOfStream("decode")
							}
							if (this.tech_.autoplay()) {
								var t = this.tech_.play();
								void 0 !== t && "function" == typeof t.then && t.then(null, function(t) {})
							}
							this.trigger("sourceopen")
						}
					}, {
						key: "onEndOfStream",
						value: function() {
							var t = this.mainSegmentLoader_.ended_;
							this.mediaTypes_.AUDIO.activePlaylistLoader && (t = t && this.audioSegmentLoader_.ended_), t && this.mediaSource.endOfStream()
						}
					}, {
						key: "stuckAtPlaylistEnd_",
						value: function(t) {
							if (!this.seekable().length) return !1;
							var e = this.syncController_.getExpiredTime(t, this.mediaSource.duration);
							if (null === e) return !1;
							var i = C.Playlist.playlistEnd(t, e),
								r = this.tech_.currentTime(),
								n = this.tech_.buffered();
							if (!n.length) return i - r <= m.default.SAFE_TIME_DELTA;
							var a = n.end(n.length - 1);
							return a - r <= m.default.SAFE_TIME_DELTA && i - a <= m.default.SAFE_TIME_DELTA
						}
					}, {
						key: "blacklistCurrentPlaylist",
						value: function(t, e) {
							void 0 === t && (t = {});
							var i = void 0,
								r = void 0;
							if (i = t.playlist || this.masterPlaylistLoader_.media(), e = e || t.blacklistDuration || this.blacklistDuration, !i) {
								this.error = t;
								try {
									return this.mediaSource.endOfStream("network")
								} catch (t) {
									return this.trigger("error")
								}
							}
							var n = 1 === this.masterPlaylistLoader_.master.playlists.filter(l.isEnabled).length;
							return n ? (v.default.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(n)) : (i.excludeUntil = Date.now() + 1e3 * e, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
								type: "usage",
								name: "hls-rendition-blacklisted"
							}), r = this.selectPlaylist(), v.default.log.warn("Problem encountered with the current HLS playlist." + (t.message ? " " + t.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(r))
						}
					}, {
						key: "pauseLoading",
						value: function() {
							this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
						}
					}, {
						key: "setCurrentTime",
						value: function(t) {
							var e = m.default.findRange(this.tech_.buffered(), t);
							return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? e && e.length && "flash" !== this.mode_ ? t : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
						}
					}, {
						key: "duration",
						value: function() {
							return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : C.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
						}
					}, {
						key: "seekable",
						value: function() {
							return this.seekable_
						}
					}, {
						key: "onSyncInfoUpdate_",
						value: function() {
							var t = void 0,
								e = void 0;
							if (this.masterPlaylistLoader_) {
								var i = this.masterPlaylistLoader_.media();
								if (i) {
									var r = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
									if (null !== r && (t = C.Playlist.seekable(i, r), 0 !== t.length)) {
										if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
											if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (r = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return;
											if (e = C.Playlist.seekable(i, r), 0 === e.length) return
										}
										e ? e.start(0) > t.end(0) || t.start(0) > e.end(0) ? this.seekable_ = t : this.seekable_ = v.default.createTimeRanges([
											[e.start(0) > t.start(0) ? e.start(0) : t.start(0), e.end(0) < t.end(0) ? e.end(0) : t.end(0)]
										]) : this.seekable_ = t, this.tech_.trigger("seekablechanged")
									}
								}
							}
						}
					}, {
						key: "updateDuration",
						value: function() {
							var t = this,
								e = this.mediaSource.duration,
								i = C.Playlist.duration(this.masterPlaylistLoader_.media()),
								r = this.tech_.buffered(),
								n = function e() {
									t.mediaSource.duration = i, t.tech_.trigger("durationchange"), t.mediaSource.removeEventListener("sourceopen", e)
								};
							r.length > 0 && (i = Math.max(i, r.end(r.length - 1))), e !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", n) : n())
						}
					}, {
						key: "dispose",
						value: function() {
							var t = this;
							this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach(function(e) {
								var i = t.mediaTypes_[e].groups;
								for (var r in i) i[r].forEach(function(t) {
									t.playlistLoader && t.playlistLoader.dispose()
								})
							}), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
						}
					}, {
						key: "master",
						value: function() {
							return this.masterPlaylistLoader_.master
						}
					}, {
						key: "media",
						value: function() {
							return this.masterPlaylistLoader_.media() || this.initialMedia_
						}
					}, {
						key: "setupSourceBuffers_",
						value: function() {
							var t = this.masterPlaylistLoader_.media(),
								e = void 0;
							if (t && "open" === this.mediaSource.readyState) {
								if (e = j(this.masterPlaylistLoader_.master, t), e.length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri, this.mediaSource.endOfStream("decode");
								this.mainSegmentLoader_.mimeType(e[0]), e[1] && this.audioSegmentLoader_.mimeType(e[1]), this.excludeIncompatibleVariants_(t)
							}
						}
					}, {
						key: "excludeIncompatibleVariants_",
						value: function(t) {
							var e = this.masterPlaylistLoader_.master,
								i = 2,
								r = null,
								n = void 0;
							t.attributes.CODECS && (n = (0, D.parseCodecs)(t.attributes.CODECS), r = n.videoCodec, i = n.codecCount), e.playlists.forEach(function(t) {
								var e = {
									codecCount: 2,
									videoCodec: null
								};
								if (t.attributes.CODECS) {
									var n = t.attributes.CODECS;
									e = (0, D.parseCodecs)(n), window.MediaSource && window.MediaSource.isTypeSupported && !window.MediaSource.isTypeSupported('video/mp4; codecs="' + N(n) + '"') && (t.excludeUntil = 1 / 0)
								}
								e.codecCount !== i && (t.excludeUntil = 1 / 0), e.videoCodec !== r && (t.excludeUntil = 1 / 0)
							})
						}
					}, {
						key: "updateAdCues_",
						value: function(t) {
							var e = 0,
								i = this.seekable();
							i.length && (e = i.start(0)), _.default.updateAdCues(t, this.cueTagsTrack_, e)
						}
					}, {
						key: "goalBufferLength",
						value: function() {
							var t = this.tech_.currentTime(),
								e = O.default.GOAL_BUFFER_LENGTH,
								i = O.default.GOAL_BUFFER_LENGTH_RATE,
								r = Math.max(e, O.default.MAX_GOAL_BUFFER_LENGTH);
							return Math.min(e + t * i, r)
						}
					}, {
						key: "bufferLowWaterLine",
						value: function() {
							var t = this.tech_.currentTime(),
								e = O.default.BUFFER_LOW_WATER_LINE,
								i = O.default.BUFFER_LOW_WATER_LINE_RATE,
								r = Math.max(e, O.default.MAX_BUFFER_LOW_WATER_LINE);
							return Math.min(e + t * i, r)
						}
					}]), e
				}(v.default.EventTarget);
				i.MasterPlaylistController = H
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		6: [function(t, e, i) {
			(function(e) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var n = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					a = r(n),
					s = t(9),
					o = r(s),
					u = function() {},
					d = function(t) {
						var e = t.default ? "main" : "alternative";
						return t.characteristics && t.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (e = "main-desc"), e
					},
					l = function(t, e) {
						t.abort(), t.pause(), e && e.activePlaylistLoader && (e.activePlaylistLoader.pause(), e.activePlaylistLoader = null)
					};
				i.stopLoaders = l;
				var c = function(t, e) {
					e.activePlaylistLoader = t, t.load()
				};
				i.startLoaders = c;
				var f = function(t, e) {
					return function() {
						var i = e.segmentLoaders,
							r = i[t],
							n = i.main,
							a = e.mediaTypes[t],
							s = a.activeTrack(),
							o = a.activeGroup(s),
							u = a.activePlaylistLoader;
						if (l(r, a), o) {
							if (!o.playlistLoader) return void(u && n.resetEverything());
							r.resyncLoader(), c(o.playlistLoader, a)
						}
					}
				};
				i.onGroupChanged = f;
				var h = function(t, e) {
					return function() {
						var i = e.segmentLoaders,
							r = i[t],
							n = i.main,
							a = e.mediaTypes[t],
							s = a.activeTrack(),
							o = a.activeGroup(s),
							u = a.activePlaylistLoader;
						if (l(r, a), o) {
							if (!o.playlistLoader) return void n.resetEverything();
							if (u === o.playlistLoader) return void c(o.playlistLoader, a);
							r.track && r.track(s), r.resetEverything(), c(o.playlistLoader, a)
						}
					}
				};
				i.onTrackChanged = h;
				var p = {
					AUDIO: function(t, e) {
						return function() {
							var i = e.segmentLoaders[t],
								r = e.mediaTypes[t],
								n = e.blacklistCurrentPlaylist;
							l(i, r);
							var s = r.activeTrack(),
								o = r.activeGroup(),
								u = (o.filter(function(t) {
									return t.default
								})[0] || o[0]).id,
								d = r.tracks[u];
							if (s === d) return void n({
								message: "Problem encountered loading the default audio track."
							});
							a.default.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
							for (var c in r.tracks) r.tracks[c].enabled = r.tracks[c] === d;
							r.onTrackChanged()
						}
					},
					SUBTITLES: function(t, e) {
						return function() {
							var i = e.segmentLoaders[t],
								r = e.mediaTypes[t];
							a.default.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), l(i, r);
							var n = r.activeTrack();
							n && (n.mode = "disabled"), r.onTrackChanged()
						}
					}
				};
				i.onError = p;
				var g = {
					AUDIO: function(t, e, i) {
						if (e) {
							var r = i.tech,
								n = i.requestOptions,
								a = i.segmentLoaders[t];
							e.on("loadedmetadata", function() {
								var t = e.media();
								a.playlist(t, n), (!r.paused() || t.endList && "none" !== r.preload()) && a.load()
							}), e.on("loadedplaylist", function() {
								a.playlist(e.media(), n), r.paused() || a.load()
							}), e.on("error", p[t](t, i))
						}
					},
					SUBTITLES: function(t, e, i) {
						var r = i.tech,
							n = i.requestOptions,
							a = i.segmentLoaders[t],
							s = i.mediaTypes[t];
						e.on("loadedmetadata", function() {
							var t = e.media();
							a.playlist(t, n), a.track(s.activeTrack()), (!r.paused() || t.endList && "none" !== r.preload()) && a.load()
						}), e.on("loadedplaylist", function() {
							a.playlist(e.media(), n), r.paused() || a.load()
						}), e.on("error", p[t](t, i))
					}
				};
				i.setupListeners = g;
				var m = {
					AUDIO: function(t, e) {
						var i = e.mode,
							r = e.hls,
							n = e.segmentLoaders[t],
							s = e.requestOptions.withCredentials,
							u = e.master.mediaGroups,
							l = e.mediaTypes[t],
							c = l.groups,
							f = l.tracks;
						u[t] && 0 !== Object.keys(u[t]).length && "html5" === i || (u[t] = {
							main: {
								default: {
									default: !0
								}
							}
						});
						for (var h in u[t]) {
							c[h] || (c[h] = []);
							for (var m in u[t][h]) {
								var y = u[t][h][m],
									v = void 0;
								if (v = y.resolvedUri ? new o.default(y.resolvedUri, r, s) : null, y = a.default.mergeOptions({
										id: m,
										playlistLoader: v
									}, y), g[t](t, y.playlistLoader, e), c[h].push(y), "undefined" == typeof f[m]) {
									var b = new a.default.AudioTrack({
										id: m,
										kind: d(y),
										enabled: !1,
										language: y.language,
										default: y.default,
										label: m
									});
									f[m] = b
								}
							}
						}
						n.on("error", p[t](t, e))
					},
					SUBTITLES: function(t, e) {
						var i = e.tech,
							r = e.hls,
							n = e.segmentLoaders[t],
							s = e.requestOptions.withCredentials,
							u = e.master.mediaGroups,
							d = e.mediaTypes[t],
							l = d.groups,
							c = d.tracks;
						for (var f in u[t]) {
							l[f] || (l[f] = []);
							for (var h in u[t][f])
								if (!u[t][f][h].forced) {
									var m = u[t][f][h];
									if (m = a.default.mergeOptions({
											id: h,
											playlistLoader: new o.default(m.resolvedUri, r, s)
										}, m), g[t](t, m.playlistLoader, e), l[f].push(m), "undefined" == typeof c[h]) {
										var y = i.addRemoteTextTrack({
											id: h,
											kind: "subtitles",
											enabled: !1,
											language: m.language,
											label: h
										}, !1).track;
										c[h] = y
									}
								}
						}
						n.on("error", p[t](t, e))
					},
					"CLOSED-CAPTIONS": function(t, e) {
						var i = e.tech,
							r = e.master.mediaGroups,
							n = e.mediaTypes[t],
							s = n.groups,
							o = n.tracks;
						for (var u in r[t]) {
							s[u] || (s[u] = []);
							for (var d in r[t][u]) {
								var l = r[t][u][d];
								if (l.instreamId.match(/CC\d/) && (s[u].push(a.default.mergeOptions({
										id: d
									}, l)), "undefined" == typeof o[d])) {
									var c = i.addRemoteTextTrack({
										id: l.instreamId,
										kind: "captions",
										enabled: !1,
										language: l.language,
										label: d
									}, !1).track;
									o[d] = c
								}
							}
						}
					}
				};
				i.initialize = m;
				var y = function(t, e) {
					return function(i) {
						var r = e.masterPlaylistLoader,
							n = e.mediaTypes[t].groups,
							a = r.media();
						if (!a) return null;
						var s = null;
						return a.attributes[t] && (s = n[a.attributes[t]]), s = s || n.main, void 0 === i ? s : null === i ? null : s.filter(function(t) {
							return t.id === i.id
						})[0] || null
					}
				};
				i.activeGroup = y;
				var v = {
					AUDIO: function(t, e) {
						return function() {
							var i = e.mediaTypes[t].tracks;
							for (var r in i)
								if (i[r].enabled) return i[r];
							return null
						}
					},
					SUBTITLES: function(t, e) {
						return function() {
							var i = e.mediaTypes[t].tracks;
							for (var r in i)
								if ("showing" === i[r].mode) return i[r];
							return null
						}
					}
				};
				i.activeTrack = v;
				var b = function(t) {
					["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
						m[e](e, t)
					});
					var e = t.mediaTypes,
						i = t.masterPlaylistLoader,
						r = t.tech,
						n = t.hls;
					["AUDIO", "SUBTITLES"].forEach(function(i) {
						e[i].activeGroup = y(i, t), e[i].activeTrack = v[i](i, t), e[i].onGroupChanged = f(i, t), e[i].onTrackChanged = h(i, t)
					});
					var a = e.AUDIO.activeGroup(),
						s = (a.filter(function(t) {
							return t.default
						})[0] || a[0]).id;
					e.AUDIO.tracks[s].enabled = !0, e.AUDIO.onTrackChanged(), i.on("mediachange", function() {
						["AUDIO", "SUBTITLES"].forEach(function(t) {
							return e[t].onGroupChanged()
						})
					});
					var o = function() {
						e.AUDIO.onTrackChanged(), r.trigger({
							type: "usage",
							name: "hls-audio-change"
						})
					};
					r.audioTracks().addEventListener("change", o), r.remoteTextTracks().addEventListener("change", e.SUBTITLES.onTrackChanged), n.on("dispose", function() {
						r.audioTracks().removeEventListener("change", o), r.remoteTextTracks().removeEventListener("change", e.SUBTITLES.onTrackChanged)
					}), r.clearTracks("audio");
					for (var u in e.AUDIO.tracks) r.audioTracks().addTrack(e.AUDIO.tracks[u])
				};
				i.setupMediaGroups = b;
				var _ = function() {
					var t = {};
					return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(e) {
						t[e] = {
							groups: {},
							tracks: {},
							activePlaylistLoader: null,
							activeGroup: u,
							activeTrack: u,
							onGroupChanged: u,
							onTrackChanged: u
						}
					}), t
				};
				i.createMediaTypes = _
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		7: [function(t, e, i) {
			(function(e) {
				"use strict";
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var r = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					n = function(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}(r),
					a = t(2),
					s = {
						FAILURE: 2,
						TIMEOUT: -101,
						ABORTED: -102
					};
				i.REQUEST_ERRORS = s;
				var o = function(t) {
						var e = void 0;
						return e = t.offset + t.length - 1, "bytes=" + t.offset + "-" + e
					},
					u = function(t) {
						var e = {};
						return t.byterange && (e.Range = o(t.byterange)), e
					},
					d = function(t) {
						t.forEach(function(t) {
							t.abort()
						})
					},
					l = function(t) {
						return {
							bandwidth: t.bandwidth,
							bytesReceived: t.bytesReceived || 0,
							roundTripTime: t.roundTripTime || 0
						}
					},
					c = function(t) {
						var e = t.target,
							i = Date.now() - e.requestTime,
							r = {
								bandwidth: 1 / 0,
								bytesReceived: 0,
								roundTripTime: i || 0
							};
						return r.bytesReceived = t.loaded, r.bandwidth = Math.floor(r.bytesReceived / r.roundTripTime * 8 * 1e3), r
					},
					f = function(t, e) {
						return e.timedout ? {
							status: e.status,
							message: "HLS request timed-out at URL: " + e.uri,
							code: s.TIMEOUT,
							xhr: e
						} : e.aborted ? {
							status: e.status,
							message: "HLS request aborted at URL: " + e.uri,
							code: s.ABORTED,
							xhr: e
						} : t ? {
							status: e.status,
							message: "HLS request errored at URL: " + e.uri,
							code: s.FAILURE,
							xhr: e
						} : null
					},
					h = function(t, e) {
						return function(i, r) {
							var n = r.response,
								a = f(i, r);
							if (a) return e(a, t);
							if (16 !== n.byteLength) return e({
								status: r.status,
								message: "Invalid HLS key at URL: " + r.uri,
								code: s.FAILURE,
								xhr: r
							}, t);
							var o = new DataView(n);
							return t.key.bytes = new Uint32Array([o.getUint32(0), o.getUint32(4), o.getUint32(8), o.getUint32(12)]), e(null, t)
						}
					},
					p = function(t, e) {
						return function(i, r) {
							var n = r.response,
								a = f(i, r);
							return a ? e(a, t) : 0 === n.byteLength ? e({
								status: r.status,
								message: "Empty HLS segment content at URL: " + r.uri,
								code: s.FAILURE,
								xhr: r
							}, t) : (t.map.bytes = new Uint8Array(r.response), e(null, t))
						}
					},
					g = function(t, e) {
						return function(i, r) {
							var n = r.response,
								a = f(i, r);
							return a ? e(a, t) : 0 === n.byteLength ? e({
								status: r.status,
								message: "Empty HLS segment content at URL: " + r.uri,
								code: s.FAILURE,
								xhr: r
							}, t) : (t.stats = l(r), t.key ? t.encryptedBytes = new Uint8Array(r.response) : t.bytes = new Uint8Array(r.response), e(null, t))
						}
					},
					m = function(t, e, i) {
						var r = function r(n) {
							if (n.data.source === e.requestId) {
								t.removeEventListener("message", r);
								var a = n.data.decrypted;
								return e.bytes = new Uint8Array(a.bytes, a.byteOffset, a.byteLength), i(null, e)
							}
						};
						t.addEventListener("message", r), t.postMessage((0, a.createTransferableMessage)({
							source: e.requestId,
							encrypted: e.encryptedBytes,
							key: e.key.bytes,
							iv: e.key.iv
						}), [e.encryptedBytes.buffer, e.key.bytes.buffer])
					},
					y = function(t) {
						return t.reduce(function(t, e) {
							return e.code > t.code ? e : t
						})
					},
					v = function(t, e, i) {
						var r = [],
							n = 0;
						return function(a, s) {
							if (a && (d(t), r.push(a)), (n += 1) === t.length) {
								if (s.endOfAllRequests = Date.now(), r.length > 0) {
									var o = y(r);
									return i(o, s)
								}
								return s.encryptedBytes ? m(e, s, i) : i(null, s)
							}
						}
					},
					b = function(t, e) {
						return function(i) {
							return t.stats = n.default.mergeOptions(t.stats, c(i)), !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()), e(i, t)
						}
					},
					_ = function(t, e, i, r, a, s) {
						var o = [],
							l = v(o, i, s);
						if (r.key) {
							var c = n.default.mergeOptions(e, {
									uri: r.key.resolvedUri,
									responseType: "arraybuffer"
								}),
								f = h(r, l),
								m = t(c, f);
							o.push(m)
						}
						if (r.map && !r.map.bytes) {
							var y = n.default.mergeOptions(e, {
									uri: r.map.resolvedUri,
									responseType: "arraybuffer",
									headers: u(r.map)
								}),
								_ = p(r, l),
								T = t(y, _);
							o.push(T)
						}
						var S = n.default.mergeOptions(e, {
								uri: r.resolvedUri,
								responseType: "arraybuffer",
								headers: u(r)
							}),
							E = g(r, l),
							w = t(S, E);
						return w.addEventListener("progress", b(r, a)), o.push(w),
							function() {
								return d(o)
							}
					};
				i.mediaSegmentRequest = _
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		8: [function(t, e, i) {
			(function(r) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function a(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var s = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					o = t(32),
					u = n(o),
					d = t(12),
					l = n(d),
					c = "undefined" != typeof window ? window.videojs : void 0 !== r ? r.videojs : null,
					f = n(c),
					h = ["seeking", "seeked", "pause", "playing", "error"],
					p = function() {
						function t(e) {
							var i = this;
							a(this, t), this.tech_ = e.tech, this.seekable = e.seekable, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, e.debug && (this.logger_ = f.default.log.bind(f.default, "playback-watcher ->")), this.logger_("initialize");
							var r = function() {
									return i.monitorCurrentTime_()
								},
								n = function() {
									return i.techWaiting_()
								},
								s = function() {
									return i.cancelTimer_()
								},
								o = function() {
									return i.fixesBadSeeks_()
								};
							this.tech_.on("seekablechanged", o), this.tech_.on("waiting", n), this.tech_.on(h, s), this.tech_.on("canplay", r), this.dispose = function() {
								i.logger_("dispose"), i.tech_.off("seekablechanged", o), i.tech_.off("waiting", n), i.tech_.off(h, s), i.tech_.off("canplay", r), i.checkCurrentTimeTimeout_ && u.default.clearTimeout(i.checkCurrentTimeTimeout_), i.cancelTimer_()
							}
						}
						return s(t, [{
							key: "monitorCurrentTime_",
							value: function() {
								this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && u.default.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = u.default.setTimeout(this.monitorCurrentTime_.bind(this), 250)
							}
						}, {
							key: "checkCurrentTime_",
							value: function() {
								if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void(this.lastRecordedTime = this.tech_.currentTime());
								if (!this.tech_.paused() && !this.tech_.seeking()) {
									var t = this.tech_.currentTime(),
										e = this.tech_.buffered();
									if (this.lastRecordedTime === t && (!e.length || t + l.default.SAFE_TIME_DELTA >= e.end(e.length - 1))) return this.techWaiting_();
									this.consecutiveUpdates >= 5 && t === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : t === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = t)
								}
							}
						}, {
							key: "cancelTimer_",
							value: function() {
								this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
							}
						}, {
							key: "fixesBadSeeks_",
							value: function() {
								var t = this.tech_.seeking(),
									e = this.seekable(),
									i = this.tech_.currentTime(),
									r = void 0;
								return t && this.afterSeekableWindow_(e, i) && (r = e.end(e.length - 1)), t && this.beforeSeekableWindow_(e, i) && (r = e.start(0) + l.default.SAFE_TIME_DELTA), void 0 !== r && (this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + l.default.printableRange(e) + ". Seeking to " + r + "."), this.tech_.setCurrentTime(r), !0)
							}
						}, {
							key: "waiting_",
							value: function() {
								if (!this.techWaiting_()) {
									var t = this.tech_.currentTime(),
										e = this.tech_.buffered(),
										i = l.default.findRange(e, t);
									return i.length && t + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(t), this.logger_("Stopped at " + t + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
										type: "usage",
										name: "hls-unknown-waiting"
									})) : void 0
								}
							}
						}, {
							key: "techWaiting_",
							value: function() {
								var t = this.seekable(),
									e = this.tech_.currentTime();
								if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
								if (this.tech_.seeking() || null !== this.timer_) return !0;
								if (this.beforeSeekableWindow_(t, e)) {
									var i = t.end(t.length - 1);
									return this.logger_("Fell out of live window at time " + e + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
										type: "usage",
										name: "hls-live-resync"
									}), !0
								}
								var r = this.tech_.buffered(),
									n = l.default.findNextRange(r, e);
								if (this.videoUnderflow_(n, r, e)) return this.cancelTimer_(), this.tech_.setCurrentTime(e), this.tech_.trigger({
									type: "usage",
									name: "hls-video-underflow"
								}), !0;
								if (n.length > 0) {
									var a = n.start(0) - e;
									return this.logger_("Stopped at " + e + ", setting timer for " + a + ", seeking to " + n.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, e), !0
								}
								return !1
							}
						}, {
							key: "afterSeekableWindow_",
							value: function(t, e) {
								return !!t.length && e > t.end(t.length - 1) + l.default.SAFE_TIME_DELTA
							}
						}, {
							key: "beforeSeekableWindow_",
							value: function(t, e) {
								return !!(t.length && t.start(0) > 0 && e < t.start(0) - l.default.SAFE_TIME_DELTA)
							}
						}, {
							key: "videoUnderflow_",
							value: function(t, e, i) {
								if (0 === t.length) {
									var r = this.gapFromVideoUnderflow_(e, i);
									if (r) return this.logger_("Encountered a gap in video from " + r.start + " to " + r.end + ". Seeking to current time " + i), !0
								}
								return !1
							}
						}, {
							key: "skipTheGap_",
							value: function(t) {
								var e = this.tech_.buffered(),
									i = this.tech_.currentTime(),
									r = l.default.findNextRange(e, i);
								this.cancelTimer_(), 0 !== r.length && i === t && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", t, "nextRange start:", r.start(0)), this.tech_.setCurrentTime(r.start(0) + l.default.TIME_FUDGE_FACTOR), this.tech_.trigger({
									type: "usage",
									name: "hls-gap-skip"
								}))
							}
						}, {
							key: "gapFromVideoUnderflow_",
							value: function(t, e) {
								for (var i = l.default.findGaps(t), r = 0; r < i.length; r++) {
									var n = i.start(r),
										a = i.end(r);
									if (e - n < 4 && e - n > 2) return {
										start: n,
										end: a
									}
								}
								return null
							}
						}, {
							key: "logger_",
							value: function() {}
						}]), t
					}();
				i.default = p, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		9: [function(t, e, i) {
			(function(e) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function n(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function a(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var s = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					o = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					u = t(15),
					d = r(u),
					l = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					c = t(33),
					f = r(c),
					h = t(32),
					p = r(h),
					g = function(t, e, i) {
						var r = e.slice();
						i = i || 0;
						for (var n = Math.min(t.length, e.length + i), a = i; a < n; a++) r[a - i] = (0, l.mergeOptions)(t[a], r[a - i]);
						return r
					};
				i.updateSegments = g;
				var m = function(t, e) {
					t.resolvedUri || (t.resolvedUri = (0, d.default)(e, t.uri)), t.key && !t.key.resolvedUri && (t.key.resolvedUri = (0, d.default)(e, t.key.uri)), t.map && !t.map.resolvedUri && (t.map.resolvedUri = (0, d.default)(e, t.map.uri))
				};
				i.resolveSegmentUris = m;
				var y = function(t, e) {
					var i = (0, l.mergeOptions)(t, {}),
						r = i.playlists.filter(function(t) {
							return t.uri === e.uri
						})[0];
					if (!r) return null;
					if (r.segments && e.segments && r.segments.length === e.segments.length && r.mediaSequence === e.mediaSequence) return null;
					var n = (0, l.mergeOptions)(r, e);
					r.segments && (n.segments = g(r.segments, e.segments, e.mediaSequence - r.mediaSequence)), n.segments.forEach(function(t) {
						m(t, n.resolvedUri)
					});
					for (var a = 0; a < i.playlists.length; a++) i.playlists[a].uri === e.uri && (i.playlists[a] = n);
					return i.playlists[e.uri] = n, i
				};
				i.updateMaster = y;
				var v = function(t) {
					for (var e = t.playlists.length; e--;) {
						var i = t.playlists[e];
						t.playlists[i.uri] = i, i.resolvedUri = (0, d.default)(t.uri, i.uri), i.attributes || (i.attributes = {}, l.log.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
					}
				};
				i.setupMediaPlaylists = v;
				var b = function(t) {
					["AUDIO", "SUBTITLES"].forEach(function(e) {
						for (var i in t.mediaGroups[e])
							for (var r in t.mediaGroups[e][i]) {
								var n = t.mediaGroups[e][i][r];
								n.uri && (n.resolvedUri = (0, d.default)(t.uri, n.uri))
							}
					})
				};
				i.resolveMediaGroupUris = b;
				var _ = function(t, e) {
					var i = t.segments[t.segments.length - 1];
					return e && i && i.duration ? 1e3 * i.duration : 500 * (t.targetDuration || 10)
				};
				i.refreshDelay = _;
				var T = function(t) {
					function e(t, i, r) {
						var a = this;
						if (n(this, e), o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.srcUrl = t, this.hls_ = i, this.withCredentials = r, !this.srcUrl) throw new Error("A non-empty playlist URL is required");
						this.state = "HAVE_NOTHING", this.on("mediaupdatetimeout", function() {
							"HAVE_METADATA" === a.state && (a.state = "HAVE_CURRENT_METADATA", a.request = a.hls_.xhr({
								uri: (0, d.default)(a.master.uri, a.media().uri),
								withCredentials: a.withCredentials
							}, function(t, e) {
								if (a.request) return t ? a.playlistRequestError(a.request, a.media().uri, "HAVE_METADATA") : void a.haveMetadata(a.request, a.media().uri)
							}))
						})
					}
					return a(e, t), s(e, [{
						key: "playlistRequestError",
						value: function(t, e, i) {
							this.request = null, i && (this.state = i), this.error = {
								playlist: this.master.playlists[e],
								status: t.status,
								message: "HLS playlist request error at URL: " + e,
								responseText: t.responseText,
								code: t.status >= 500 ? 4 : 2
							}, this.trigger("error")
						}
					}, {
						key: "haveMetadata",
						value: function(t, e) {
							var i = this;
							this.request = null, this.state = "HAVE_METADATA";
							var r = new f.default.Parser;
							r.push(t.responseText), r.end(), r.manifest.uri = e, r.manifest.attributes = r.manifest.attributes || {};
							var n = y(this.master, r.manifest);
							this.targetDuration = r.manifest.targetDuration, n ? (this.master = n, this.media_ = this.master.playlists[r.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (p.default.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = p.default.setTimeout(function() {
								i.trigger("mediaupdatetimeout")
							}, _(this.media(), !!n))), this.trigger("loadedplaylist")
						}
					}, {
						key: "dispose",
						value: function() {
							this.stopRequest(), p.default.clearTimeout(this.mediaUpdateTimeout)
						}
					}, {
						key: "stopRequest",
						value: function() {
							if (this.request) {
								var t = this.request;
								this.request = null, t.onreadystatechange = null, t.abort()
							}
						}
					}, {
						key: "media",
						value: function(t) {
							var e = this;
							if (!t) return this.media_;
							if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
							var i = this.state;
							if ("string" == typeof t) {
								if (!this.master.playlists[t]) throw new Error("Unknown playlist URI: " + t);
								t = this.master.playlists[t]
							}
							var r = !this.media_ || t.uri !== this.media_.uri;
							if (this.master.playlists[t.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = t, void(r && (this.trigger("mediachanging"), this.trigger("mediachange")));
							if (r) {
								if (this.state = "SWITCHING_MEDIA", this.request) {
									if ((0, d.default)(this.master.uri, t.uri) === this.request.url) return;
									this.request.onreadystatechange = null, this.request.abort(), this.request = null
								}
								this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({
									uri: (0, d.default)(this.master.uri, t.uri),
									withCredentials: this.withCredentials
								}, function(r, n) {
									if (e.request) {
										if (r) return e.playlistRequestError(e.request, t.uri, i);
										e.haveMetadata(n, t.uri), "HAVE_MASTER" === i ? e.trigger("loadedmetadata") : e.trigger("mediachange")
									}
								})
							}
						}
					}, {
						key: "pause",
						value: function() {
							this.stopRequest(), p.default.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
						}
					}, {
						key: "load",
						value: function(t) {
							var e = this;
							p.default.clearTimeout(this.mediaUpdateTimeout);
							var i = this.media();
							if (t) {
								var r = i ? i.targetDuration / 2 * 1e3 : 5e3;
								return void(this.mediaUpdateTimeout = p.default.setTimeout(function() {
									return e.load()
								}, r))
							}
							return this.started ? void(i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist")) : void this.start()
						}
					}, {
						key: "start",
						value: function() {
							var t = this;
							this.started = !0, this.request = this.hls_.xhr({
								uri: this.srcUrl,
								withCredentials: this.withCredentials
							}, function(e, i) {
								if (t.request) {
									if (t.request = null, e) return t.error = {
										status: i.status,
										message: "HLS playlist request error at URL: " + t.srcUrl,
										responseText: i.responseText,
										code: 2
									}, "HAVE_NOTHING" === t.state && (t.started = !1), t.trigger("error");
									var r = new f.default.Parser;
									return r.push(i.responseText), r.end(), t.state = "HAVE_MASTER", r.manifest.uri = t.srcUrl, r.manifest.playlists ? (t.master = r.manifest, v(t.master), b(t.master), t.trigger("loadedplaylist"), void(t.request || t.media(r.manifest.playlists[0]))) : (t.master = {
										mediaGroups: {
											AUDIO: {},
											VIDEO: {},
											"CLOSED-CAPTIONS": {},
											SUBTITLES: {}
										},
										uri: p.default.location.href,
										playlists: [{
											uri: t.srcUrl
										}]
									}, t.master.playlists[t.srcUrl] = t.master.playlists[0], t.master.playlists[0].resolvedUri = t.srcUrl, t.master.playlists[0].attributes = t.master.playlists[0].attributes || {}, t.haveMetadata(i, t.srcUrl), t.trigger("loadedmetadata"))
								}
							})
						}
					}]), e
				}(l.EventTarget);
				i.default = T
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		10: [function(t, e, i) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var n = t(3),
				a = r(n),
				s = t(11),
				o = r(s),
				u = t(19),
				d = function(t, e) {
					var i = void 0;
					return t ? (i = window.getComputedStyle(t), i ? i[e] : "") : ""
				},
				l = function(t, e) {
					var i = t.slice();
					t.sort(function(t, r) {
						var n = e(t, r);
						return 0 === n ? i.indexOf(t) - i.indexOf(r) : n
					})
				},
				c = function(t, e) {
					var i = void 0,
						r = void 0;
					return t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH), i = i || window.Number.MAX_VALUE, e.attributes.BANDWIDTH && (r = e.attributes.BANDWIDTH), r = r || window.Number.MAX_VALUE, i - r
				};
			i.comparePlaylistBandwidth = c;
			var f = function(t, e) {
				var i = void 0,
					r = void 0;
				return t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (i = t.attributes.RESOLUTION.width), i = i || window.Number.MAX_VALUE, e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (r = e.attributes.RESOLUTION.width), r = r || window.Number.MAX_VALUE, i === r && t.attributes.BANDWIDTH && e.attributes.BANDWIDTH ? t.attributes.BANDWIDTH - e.attributes.BANDWIDTH : i - r
			};
			i.comparePlaylistResolution = f;
			var h = function(t, e, i, r) {
				var n = t.playlists.map(function(t) {
					var e = void 0,
						i = void 0,
						r = void 0;
					return e = t.attributes.RESOLUTION && t.attributes.RESOLUTION.width, i = t.attributes.RESOLUTION && t.attributes.RESOLUTION.height, r = t.attributes.BANDWIDTH, r = r || window.Number.MAX_VALUE, {
						bandwidth: r,
						width: e,
						height: i,
						playlist: t
					}
				});
				l(n, function(t, e) {
					return t.bandwidth - e.bandwidth
				}), n = n.filter(function(t) {
					return !o.default.isIncompatible(t.playlist)
				});
				var s = n.filter(function(t) {
					return o.default.isEnabled(t.playlist)
				});
				s.length || (s = n.filter(function(t) {
					return !o.default.isDisabled(t.playlist)
				}));
				var u = s.filter(function(t) {
						return t.bandwidth * a.default.BANDWIDTH_VARIANCE < e
					}),
					d = u[u.length - 1],
					c = u.filter(function(t) {
						return t.bandwidth === d.bandwidth
					})[0],
					f = u.filter(function(t) {
						return t.width && t.height
					});
				l(f, function(t, e) {
					return t.width - e.width
				});
				var h = f.filter(function(t) {
					return t.width === i && t.height === r
				});
				d = h[h.length - 1];
				var p = h.filter(function(t) {
						return t.bandwidth === d.bandwidth
					})[0],
					g = void 0,
					m = void 0,
					y = void 0;
				p || (g = f.filter(function(t) {
					return t.width > i || t.height > r
				}), m = g.filter(function(t) {
					return t.width === g[0].width && t.height === g[0].height
				}), d = m[m.length - 1], y = m.filter(function(t) {
					return t.bandwidth === d.bandwidth
				})[0]);
				var v = y || p || c || s[0] || n[0];
				return v ? v.playlist : null
			};
			i.simpleSelector = h;
			var p = function() {
				return h(this.playlists.master, this.systemBandwidth, parseInt(d(this.tech_.el(), "width"), 10), parseInt(d(this.tech_.el(), "height"), 10))
			};
			i.lastBandwidthSelector = p;
			var g = function(t) {
				var e = -1;
				if (t < 0 || t > 1) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
				return function() {
					return e < 0 && (e = this.systemBandwidth), e = t * this.systemBandwidth + (1 - t) * e, h(this.playlists.master, e, parseInt(d(this.tech_.el(), "width"), 10), parseInt(d(this.tech_.el(), "height"), 10))
				}
			};
			i.movingAverageBandwidthSelector = g;
			var m = function(t) {
				var e = t.master,
					i = t.currentTime,
					r = t.bandwidth,
					n = t.duration,
					a = t.segmentDuration,
					s = t.timeUntilRebuffer,
					u = t.currentTimeline,
					d = t.syncController,
					f = e.playlists.filter(function(t) {
						return !o.default.isIncompatible(t)
					}),
					h = f.filter(o.default.isEnabled);
				h.length || (h = f.filter(function(t) {
					return !o.default.isDisabled(t)
				}));
				var p = h.filter(o.default.hasAttribute.bind(null, "BANDWIDTH")),
					g = p.map(function(t) {
						var e = d.getSyncPoint(t, n, u, i),
							l = e ? 1 : 2;
						return {
							playlist: t,
							rebufferingImpact: o.default.estimateSegmentRequestTime(a, r, t) * l - s
						}
					}),
					m = g.filter(function(t) {
						return t.rebufferingImpact <= 0
					});
				return l(m, function(t, e) {
					return c(e.playlist, t.playlist)
				}), m.length ? m[0] : (l(g, function(t, e) {
					return t.rebufferingImpact - e.rebufferingImpact
				}), g[0] || null)
			};
			i.minRebufferMaxBandwidthSelector = m;
			var y = function() {
				var t = this.playlists.master.playlists.filter(o.default.isEnabled);
				return l(t, function(t, e) {
					return c(t, e)
				}), t.filter(function(t) {
					return (0, u.parseCodecs)(t.attributes.CODECS).videoCodec
				})[0] || null
			};
			i.lowestBitrateCompatibleVariantSelector = y
		}, {}],
		11: [function(t, e, i) {
			(function(e) {
				"use strict";
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var r = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					n = t(32),
					a = function(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}(n),
					s = function(t, e) {
						var i = 0,
							r = e - t.mediaSequence,
							n = t.segments[r];
						if (n) {
							if ("undefined" != typeof n.start) return {
								result: n.start,
								precise: !0
							};
							if ("undefined" != typeof n.end) return {
								result: n.end - n.duration,
								precise: !0
							}
						}
						for (; r--;) {
							if (n = t.segments[r], "undefined" != typeof n.end) return {
								result: i + n.end,
								precise: !0
							};
							if (i += n.duration, "undefined" != typeof n.start) return {
								result: i + n.start,
								precise: !0
							}
						}
						return {
							result: i,
							precise: !1
						}
					},
					o = function(t, e) {
						for (var i = 0, r = void 0, n = e - t.mediaSequence; n < t.segments.length; n++) {
							if (r = t.segments[n], "undefined" != typeof r.start) return {
								result: r.start - i,
								precise: !0
							};
							if (i += r.duration, "undefined" != typeof r.end) return {
								result: r.end - i,
								precise: !0
							}
						}
						return {
							result: -1,
							precise: !1
						}
					},
					u = function(t, e, i) {
						var r = void 0,
							n = void 0;
						return void 0 === e && (e = t.mediaSequence + t.segments.length), e < t.mediaSequence ? 0 : (r = s(t, e), r.precise ? r.result : (n = o(t, e), n.precise ? n.result : r.result + i))
					},
					d = function(t, e, i) {
						if (!t) return 0;
						if ("number" != typeof i && (i = 0), void 0 === e) {
							if (t.totalDuration) return t.totalDuration;
							if (!t.endList) return a.default.Infinity
						}
						return u(t, e, i)
					};
				i.duration = d;
				var l = function(t, e, i) {
					var r = 0;
					if (e > i) {
						var n = [i, e];
						e = n[0], i = n[1]
					}
					if (e < 0) {
						for (var a = e; a < Math.min(0, i); a++) r += t.targetDuration;
						e = 0
					}
					for (var a = e; a < i; a++) r += t.segments[a].duration;
					return r
				};
				i.sumDurations = l;
				var c = function(t) {
					if (!t.segments.length) return 0;
					for (var e = t.segments.length - 1, i = t.segments[e].duration || t.targetDuration, r = i + 2 * t.targetDuration; e-- && !((i += t.segments[e].duration) >= r););
					return Math.max(0, e)
				};
				i.safeLiveIndex = c;
				var f = function(t, e, i) {
					if (!t || !t.segments) return null;
					if (t.endList) return d(t);
					if (null === e) return null;
					e = e || 0;
					var r = i ? c(t) : t.segments.length;
					return u(t, t.mediaSequence + r, e)
				};
				i.playlistEnd = f;
				var h = function(t, e) {
					var i = e || 0,
						n = f(t, e, !0);
					return null === n ? (0, r.createTimeRange)() : (0, r.createTimeRange)(i, n)
				};
				i.seekable = h;
				var p = function(t) {
						return t - Math.floor(t) == 0
					},
					g = function(t, e) {
						if (p(e)) return e + .1 * t;
						for (var i = e.toString().split(".")[1].length, r = 1; r <= i; r++) {
							var n = Math.pow(10, r),
								a = e * n;
							if (p(a) || r === i) return (a + t) / n
						}
					},
					m = g.bind(null, 1),
					y = g.bind(null, -1),
					v = function(t, e, i, r) {
						var n = void 0,
							a = void 0,
							s = t.segments.length,
							o = e - r;
						if (o < 0) {
							if (i > 0)
								for (n = i - 1; n >= 0; n--)
									if (a = t.segments[n], (o += y(a.duration)) > 0) return {
										mediaIndex: n,
										startTime: r - l(t, i, n)
									};
							return {
								mediaIndex: 0,
								startTime: e
							}
						}
						if (i < 0) {
							for (n = i; n < 0; n++)
								if ((o -= t.targetDuration) < 0) return {
									mediaIndex: 0,
									startTime: e
								};
							i = 0
						}
						for (n = i; n < s; n++)
							if (a = t.segments[n], (o -= m(a.duration)) < 0) return {
								mediaIndex: n,
								startTime: r + l(t, i, n)
							};
						return {
							mediaIndex: s - 1,
							startTime: e
						}
					};
				i.getMediaInfoForTime = v;
				var b = function(t) {
					return t.excludeUntil && t.excludeUntil > Date.now()
				};
				i.isBlacklisted = b;
				var _ = function(t) {
					return t.excludeUntil && t.excludeUntil === 1 / 0
				};
				i.isIncompatible = _;
				var T = function(t) {
					var e = b(t);
					return !t.disabled && !e
				};
				i.isEnabled = T;
				var S = function(t) {
					return t.disabled
				};
				i.isDisabled = S;
				var E = function(t) {
					for (var e = 0; e < t.segments.length; e++)
						if (t.segments[e].key) return !0;
					return !1
				};
				i.isAes = E;
				var w = function(t) {
					for (var e = 0; e < t.segments.length; e++)
						if (t.segments[e].map) return !0;
					return !1
				};
				i.isFmp4 = w;
				var A = function(t, e) {
					return e.attributes && e.attributes[t]
				};
				i.hasAttribute = A;
				var R = function(t, e, i) {
					var r = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
					return A("BANDWIDTH", i) ? (t * i.attributes.BANDWIDTH - 8 * r) / e : NaN
				};
				i.estimateSegmentRequestTime = R;
				var L = function(t, e) {
					if (1 === t.playlists.length) return !0;
					var i = e.attributes.BANDWIDTH || Number.MAX_VALUE;
					return 0 === t.playlists.filter(function(t) {
						return !!T(t) && (t.attributes.BANDWIDTH || 0) < i
					}).length
				};
				i.isLowestEnabledRendition = L, i.default = {
					duration: d,
					seekable: h,
					safeLiveIndex: c,
					getMediaInfoForTime: v,
					isEnabled: T,
					isDisabled: S,
					isBlacklisted: b,
					isIncompatible: _,
					playlistEnd: f,
					isAes: E,
					isFmp4: w,
					hasAttribute: A,
					estimateSegmentRequestTime: R,
					isLowestEnabledRendition: L
				}
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		12: [function(t, e, i) {
			(function(t) {
				"use strict";
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var r = function() {
						function t(t, e) {
							var i = [],
								r = !0,
								n = !1,
								a = void 0;
							try {
								for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); r = !0);
							} catch (t) {
								n = !0, a = t
							} finally {
								try {
									!r && o.return && o.return()
								} finally {
									if (n) throw a
								}
							}
							return i
						}
						return function(e, i) {
							if (Array.isArray(e)) return e;
							if (Symbol.iterator in Object(e)) return t(e, i);
							throw new TypeError("Invalid attempt to destructure non-iterable instance")
						}
					}(),
					n = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null,
					a = function(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}(n),
					s = function(t, e) {
						var i = r(e, 2),
							n = i[0],
							a = i[1];
						return Math.min(Math.max(n, t), a)
					},
					o = function(t, e) {
						var i = [],
							r = void 0;
						if (t && t.length)
							for (r = 0; r < t.length; r++) e(t.start(r), t.end(r)) && i.push([t.start(r), t.end(r)]);
						return a.default.createTimeRanges(i)
					},
					u = function(t, e) {
						return o(t, function(t, i) {
							return t - 1 / 30 <= e && i + 1 / 30 >= e
						})
					},
					d = function(t, e) {
						return o(t, function(t) {
							return t - 1 / 30 >= e
						})
					},
					l = function(t) {
						if (t.length < 2) return a.default.createTimeRanges();
						for (var e = [], i = 1; i < t.length; i++) {
							var r = t.end(i - 1),
								n = t.start(i);
							e.push([r, n])
						}
						return a.default.createTimeRanges(e)
					},
					c = function(t, e) {
						var i = void 0,
							r = void 0,
							n = void 0,
							a = [],
							s = [],
							o = function(t) {
								return t[0] <= n && t[1] >= n
							};
						if (t)
							for (i = 0; i < t.length; i++) r = t.start(i), n = t.end(i), s.push([r, n]);
						if (e)
							for (i = 0; i < e.length; i++) r = e.start(i), n = e.end(i), s.some(o) || a.push(n);
						return 1 !== a.length ? null : a[0]
					},
					f = function(t, e) {
						var i = null,
							r = null,
							n = 0,
							s = [],
							o = [];
						if (!(t && t.length && e && e.length)) return a.default.createTimeRange();
						for (var u = t.length; u--;) s.push({
							time: t.start(u),
							type: "start"
						}), s.push({
							time: t.end(u),
							type: "end"
						});
						for (u = e.length; u--;) s.push({
							time: e.start(u),
							type: "start"
						}), s.push({
							time: e.end(u),
							type: "end"
						});
						for (s.sort(function(t, e) {
								return t.time - e.time
							}), u = 0; u < s.length; u++) "start" === s[u].type ? 2 === ++n && (i = s[u].time) : "end" === s[u].type && 1 === --n && (r = s[u].time), null !== i && null !== r && (o.push([i, r]), i = null, r = null);
						return a.default.createTimeRanges(o)
					},
					h = function(t, e, i, r) {
						for (var n = e.end(0) - e.start(0), a = t.end(0) - t.start(0), s = n - a, o = f(t, r), u = f(e, r), d = 0, l = 0, c = o.length; c--;) d += o.end(c) - o.start(c), o.start(c) === i && (d += s);
						for (c = u.length; c--;) l += u.end(c) - u.start(c);
						return Math.max(d, l) / n * 100
					},
					p = function(t, e, i, r) {
						var n = t + e,
							o = a.default.createTimeRanges([
								[t, n]
							]),
							u = a.default.createTimeRanges([
								[s(t, [i, n]), n]
							]);
						if (u.start(0) === u.end(0)) return 0;
						var d = h(u, o, i, r);
						return isNaN(d) || d === 1 / 0 || d === -(1 / 0) ? 0 : d
					},
					g = function(t) {
						var e = [];
						if (!t || !t.length) return "";
						for (var i = 0; i < t.length; i++) e.push(t.start(i) + " => " + t.end(i));
						return e.join(", ")
					},
					m = function(t, e) {
						var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
						return ((t.length ? t.end(t.length - 1) : 0) - e) / i
					};
				i.default = {
					findRange: u,
					findNextRange: d,
					findGaps: l,
					findSoleUncommonTimeRangesEnd: c,
					getSegmentBufferedPercent: p,
					TIME_FUDGE_FACTOR: 1 / 30,
					SAFE_TIME_DELTA: .1,
					printableRange: g,
					timeUntilRebuffer: m
				}, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		13: [function(t, e, i) {
			(function(t) {
				"use strict";
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var r = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null,
					n = function(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}(r),
					a = {
						errorInterval: 30,
						getSource: function(t) {
							return t(this.tech({
								IWillNotUseThisInPlugins: !0
							}).currentSource_)
						}
					},
					s = function t(e, i) {
						var r = 0,
							s = 0,
							o = n.default.mergeOptions(a, i);
						e.ready(function() {
							e.trigger({
								type: "usage",
								name: "hls-error-reload-initialized"
							})
						});
						var u = function() {
								s && e.currentTime(s)
							},
							d = function(t) {
								null !== t && void 0 !== t && (s = e.duration() !== 1 / 0 && e.currentTime() || 0, e.one("loadedmetadata", u), e.src(t), e.trigger({
									type: "usage",
									name: "hls-error-reload"
								}), e.play())
							},
							l = function() {
								return Date.now() - r < 1e3 * o.errorInterval ? void e.trigger({
									type: "usage",
									name: "hls-error-reload-canceled"
								}) : o.getSource && "function" == typeof o.getSource ? (r = Date.now(), o.getSource.call(e, d)) : void n.default.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
							},
							c = function t() {
								e.off("loadedmetadata", u), e.off("error", l), e.off("dispose", t)
							},
							f = function(i) {
								c(), t(e, i)
							};
						e.on("error", l), e.on("dispose", c), e.reloadSourceOnError = f
					},
					o = function(t) {
						s(this, t)
					};
				i.default = o, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		14: [function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var n = t(11),
				a = function(t, e, i) {
					return function(r) {
						var a = t.master.playlists[e],
							s = (0, n.isIncompatible)(a),
							o = (0, n.isEnabled)(a);
						return void 0 === r ? o : (r ? delete a.disabled : a.disabled = !0, r === o || s || (i(), r ? t.trigger("renditionenabled") : t.trigger("renditiondisabled")), r)
					}
				},
				s = function t(e, i, n) {
					r(this, t);
					var s = e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);
					if (i.attributes.RESOLUTION) {
						var o = i.attributes.RESOLUTION;
						this.width = o.width, this.height = o.height
					}
					this.bandwidth = i.attributes.BANDWIDTH, this.id = n, this.enabled = a(e.playlists, i.uri, s)
				},
				o = function(t) {
					var e = t.playlists;
					t.representations = function() {
						return e.master.playlists.filter(function(t) {
							return !(0, n.isIncompatible)(t)
						}).map(function(e, i) {
							return new s(t, e, e.uri)
						})
					}
				};
			i.default = o, e.exports = i.default
		}, {}],
		15: [function(t, e, i) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var n = t(63),
				a = r(n),
				s = t(32),
				o = r(s),
				u = function(t, e) {
					return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = a.default.buildAbsoluteURL(o.default.location.href, t)), a.default.buildAbsoluteURL(t, e))
				};
			i.default = u, e.exports = i.default
		}, {}],
		16: [function(t, e, i) {
			(function(e) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function n(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function a(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var s = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					o = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					u = t(11),
					d = r(u),
					l = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					c = r(l),
					f = t(17),
					h = r(f),
					p = t(3),
					g = r(p),
					m = t(32),
					y = r(m),
					v = t(72),
					b = r(v),
					_ = t(2),
					T = t(7),
					S = t(12),
					E = t(10),
					w = function(t, e, i) {
						if (!t || !e) return !1;
						var r = t.segments,
							n = i === r.length;
						return t.endList && "open" === e.readyState && n
					},
					A = function(t) {
						return "number" == typeof t && isFinite(t)
					},
					R = function(t, e, i) {
						return "main" === t && e && i ? i.containsAudio || i.containsVideo ? e.containsVideo && !i.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !e.containsVideo && i.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null
					};
				i.illegalMediaSwitch = R;
				var L = function(t, e, i) {
					var r = void 0;
					return r = t.length && t.start(0) > 0 && t.start(0) < e ? t.start(0) : e - 30, Math.min(r, e - i)
				};
				i.safeBackBufferTrimTime = L;
				var k = function(t) {
					function e(t) {
						var i = this,
							r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
						if (n(this, e), o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), !t) throw new TypeError("Initialization settings are required");
						if ("function" != typeof t.currentTime) throw new TypeError("No currentTime getter specified");
						if (!t.mediaSource) throw new TypeError("No MediaSource specified");
						this.state = "INIT", this.bandwidth = t.bandwidth, this.throughput = {
							rate: 0,
							count: 0
						}, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.hasPlayed_ = t.hasPlayed, this.currentTime_ = t.currentTime, this.seekable_ = t.seekable, this.seeking_ = t.seeking, this.duration_ = t.duration, this.mediaSource_ = t.mediaSource, this.hls_ = t.hls, this.loaderType_ = t.loaderType, this.startingMedia_ = void 0, this.segmentMetadataTrack_ = t.segmentMetadataTrack, this.goalBufferLength_ = t.goalBufferLength, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.pendingSegment_ = null, this.mimeType_ = null, this.sourceUpdater_ = null, this.xhrOptions_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.decrypter_ = t.decrypter, this.syncController_ = t.syncController, this.syncPoint_ = {
							segmentIndex: 0,
							time: 0
						}, this.syncController_.on("syncinfoupdate", function() {
							return i.trigger("syncinfoupdate")
						}), this.mediaSource_.addEventListener("sourceopen", function() {
							return i.ended_ = !1
						}), this.fetchAtBuffer_ = !1, r.debug && (this.logger_ = c.default.log.bind(c.default, "segment-loader", this.loaderType_, "->"))
					}
					return a(e, t), s(e, [{
						key: "resetStats_",
						value: function() {
							this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
						}
					}, {
						key: "dispose",
						value: function() {
							this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_()
						}
					}, {
						key: "abort",
						value: function() {
							return "WAITING" !== this.state ? void(this.pendingSegment_ && (this.pendingSegment_ = null)) : (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_(), void 0)
						}
					}, {
						key: "abort_",
						value: function() {
							this.pendingSegment_ && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
						}
					}, {
						key: "error",
						value: function(t) {
							return void 0 !== t && (this.error_ = t), this.pendingSegment_ = null, this.error_
						}
					}, {
						key: "endOfStream",
						value: function() {
							this.ended_ = !0, this.pause(), this.trigger("ended")
						}
					}, {
						key: "buffered_",
						value: function() {
							return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : c.default.createTimeRanges()
						}
					}, {
						key: "initSegment",
						value: function(t) {
							var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
							if (!t) return null;
							var i = (0, _.initSegmentId)(t),
								r = this.initSegments_[i];
							return e && !r && t.bytes && (this.initSegments_[i] = r = {
								resolvedUri: t.resolvedUri,
								byterange: t.byterange,
								bytes: t.bytes
							}), r || t
						}
					}, {
						key: "couldBeginLoading_",
						value: function() {
							return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
						}
					}, {
						key: "load",
						value: function() {
							if (this.monitorBuffer_(), this.playlist_) {
								if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
								!this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
							}
						}
					}, {
						key: "init_",
						value: function() {
							return this.state = "READY", this.sourceUpdater_ = new h.default(this.mediaSource_, this.mimeType_), this.resetEverything(), this.monitorBuffer_()
						}
					}, {
						key: "playlist",
						value: function(t) {
							var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
							if (t) {
								var i = this.playlist_,
									r = this.pendingSegment_;
								if (this.playlist_ = t, this.xhrOptions_ = e, this.hasPlayed_() || (t.syncInfo = {
										mediaSequence: t.mediaSequence,
										time: 0
									}), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
								if (!i || i.uri !== t.uri) return void(null !== this.mediaIndex && this.resyncLoader());
								var n = t.mediaSequence - i.mediaSequence;
								this.logger_("mediaSequenceDiff", n), null !== this.mediaIndex && (this.mediaIndex -= n), r && (r.mediaIndex -= n, r.mediaIndex >= 0 && (r.segment = t.segments[r.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, t)
							}
						}
					}, {
						key: "pause",
						value: function() {
							this.checkBufferTimeout_ && (y.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
						}
					}, {
						key: "paused",
						value: function() {
							return null === this.checkBufferTimeout_
						}
					}, {
						key: "mimeType",
						value: function(t) {
							this.mimeType_ || (this.mimeType_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
						}
					}, {
						key: "resetEverything",
						value: function() {
							this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_()), this.trigger("reseteverything")
						}
					}, {
						key: "resetLoader",
						value: function() {
							this.fetchAtBuffer_ = !1, this.resyncLoader()
						}
					}, {
						key: "resyncLoader",
						value: function() {
							this.mediaIndex = null, this.syncPoint_ = null, this.abort()
						}
					}, {
						key: "remove",
						value: function(t, e) {
							this.sourceUpdater_ && this.sourceUpdater_.remove(t, e), (0, b.default)(t, e, this.segmentMetadataTrack_)
						}
					}, {
						key: "monitorBuffer_",
						value: function() {
							this.checkBufferTimeout_ && y.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = y.default.setTimeout(this.monitorBufferTick_.bind(this), 1)
						}
					}, {
						key: "monitorBufferTick_",
						value: function() {
							"READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && y.default.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = y.default.setTimeout(this.monitorBufferTick_.bind(this), 500)
						}
					}, {
						key: "fillBuffer_",
						value: function() {
							if (!this.sourceUpdater_.updating()) {
								this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
								var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
								if (t) {
									if (w(this.playlist_, this.mediaSource_, t.mediaIndex)) return void this.endOfStream();
									(t.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((t.timeline !== this.currentTimeline_ || null !== t.startOfSegment && t.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), t.timestampOffset = t.startOfSegment), this.loadSegment_(t))
								}
							}
						}
					}, {
						key: "checkBuffer_",
						value: function(t, e, i, r, n, a) {
							var s = 0,
								o = void 0;
							t.length && (s = t.end(t.length - 1));
							var u = Math.max(0, s - n);
							if (!e.segments.length) return null;
							if (u >= this.goalBufferLength_()) return null;
							if (!r && u >= 1) return null;
							if (this.logger_("checkBuffer_", "mediaIndex:", i, "hasPlayed:", r, "currentTime:", n, "syncPoint:", a, "fetchAtBuffer:", this.fetchAtBuffer_, "bufferedTime:", u), null === a) return i = this.getSyncSegmentCandidate_(e), this.logger_("getSync", "mediaIndex:", i), this.generateSegmentInfo_(e, i, null, !0);
							if (null !== i) {
								this.logger_("walkForward", "mediaIndex:", i + 1);
								var l = e.segments[i];
								return o = l && l.end ? l.end : s, this.generateSegmentInfo_(e, i + 1, o, !1)
							}
							if (this.fetchAtBuffer_) {
								var c = d.default.getMediaInfoForTime(e, s, a.segmentIndex, a.time);
								i = c.mediaIndex, o = c.startTime
							} else {
								var c = d.default.getMediaInfoForTime(e, n, a.segmentIndex, a.time);
								i = c.mediaIndex, o = c.startTime
							}
							return this.logger_("getMediaIndexForTime", "mediaIndex:", i, "startOfSegment:", o), this.generateSegmentInfo_(e, i, o, !1)
						}
					}, {
						key: "getSyncSegmentCandidate_",
						value: function(t) {
							var e = this;
							if (-1 === this.currentTimeline_) return 0;
							var i = t.segments.map(function(t, e) {
								return {
									timeline: t.timeline,
									segmentIndex: e
								}
							}).filter(function(t) {
								return t.timeline === e.currentTimeline_
							});
							return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(t.segments.length - 1, 0)
						}
					}, {
						key: "generateSegmentInfo_",
						value: function(t, e, i, r) {
							if (e < 0 || e >= t.segments.length) return null;
							var n = t.segments[e];
							return {
								requestId: "segment-loader-" + Math.random(),
								uri: n.resolvedUri,
								mediaIndex: e,
								isSyncRequest: r,
								startOfSegment: i,
								playlist: t,
								bytes: null,
								encryptedBytes: null,
								timestampOffset: null,
								timeline: n.timeline,
								duration: n.duration,
								segment: n
							}
						}
					}, {
						key: "abortRequestEarly_",
						value: function(t) {
							if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
							if (Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
							var e = this.currentTime_(),
								i = t.bandwidth,
								r = this.pendingSegment_.duration,
								n = d.default.estimateSegmentRequestTime(r, i, this.playlist_, t.bytesReceived),
								a = (0, S.timeUntilRebuffer)(this.buffered_(), e, this.hls_.tech_.playbackRate()) - 1;
							if (n <= a) return !1;
							var s = (0, E.minRebufferMaxBandwidthSelector)({
								master: this.hls_.playlists.master,
								currentTime: e,
								bandwidth: i,
								duration: this.duration_(),
								segmentDuration: r,
								timeUntilRebuffer: a,
								currentTimeline: this.currentTimeline_,
								syncController: this.syncController_
							});
							if (s) {
								var o = n - a,
									u = o - s.rebufferingImpact,
									l = .5;
								return a <= S.TIME_FUDGE_FACTOR && (l = 1), !(!s.playlist || s.playlist.uri === this.playlist_.uri || u < l) && (this.bandwidth = s.playlist.attributes.BANDWIDTH * g.default.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
							}
						}
					}, {
						key: "handleProgress_",
						value: function(t, e) {
							this.pendingSegment_ && e.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(e.stats) && this.trigger("progress")
						}
					}, {
						key: "loadSegment_",
						value: function(t) {
							this.state = "WAITING", this.pendingSegment_ = t, this.trimBackBuffer_(t), t.abortRequests = (0, T.mediaSegmentRequest)(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.createSimplifiedSegmentObj_(t), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
						}
					}, {
						key: "trimBackBuffer_",
						value: function(t) {
							var e = L(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
							e > 0 && this.remove(0, e)
						}
					}, {
						key: "createSimplifiedSegmentObj_",
						value: function(t) {
							var e = t.segment,
								i = {
									resolvedUri: e.resolvedUri,
									byterange: e.byterange,
									requestId: t.requestId
								};
							if (e.key) {
								var r = e.key.iv || new Uint32Array([0, 0, 0, t.mediaIndex + t.playlist.mediaSequence]);
								i.key = {
									resolvedUri: e.key.resolvedUri,
									iv: r
								}
							}
							return e.map && (i.map = this.initSegment(e.map)), i
						}
					}, {
						key: "segmentRequestFinished_",
						value: function(t, e) {
							if (this.mediaRequests += 1, e.stats && (this.mediaBytesTransferred += e.stats.bytesReceived, this.mediaTransferDuration += e.stats.roundTripTime), !this.pendingSegment_) return void(this.mediaRequestsAborted += 1);
							if (e.requestId === this.pendingSegment_.requestId) {
								if (t) return this.pendingSegment_ = null, this.state = "READY", t.code === T.REQUEST_ERRORS.ABORTED ? void(this.mediaRequestsAborted += 1) : (this.pause(), t.code === T.REQUEST_ERRORS.TIMEOUT ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(t), void this.trigger("error")));
								this.bandwidth = e.stats.bandwidth, this.roundTrip = e.stats.roundTripTime, e.map && (e.map = this.initSegment(e.map, !0)), this.processSegmentResponse_(e)
							}
						}
					}, {
						key: "processSegmentResponse_",
						value: function(t) {
							var e = this.pendingSegment_;
							e.bytes = t.bytes, t.map && (e.segment.map.bytes = t.map.bytes), e.endOfAllRequests = t.endOfAllRequests, this.handleSegment_()
						}
					}, {
						key: "handleSegment_",
						value: function() {
							var t = this;
							if (!this.pendingSegment_) return void(this.state = "READY");
							var e = this.pendingSegment_,
								i = e.segment,
								r = this.syncController_.probeSegmentInfo(e);
							"undefined" == typeof this.startingMedia_ && r && (r.containsAudio || r.containsVideo) && (this.startingMedia_ = {
								containsAudio: r.containsAudio,
								containsVideo: r.containsVideo
							});
							var n = R(this.loaderType_, this.startingMedia_, r);
							if (n) return this.error({
								message: n,
								blacklistDuration: 1 / 0
							}), void this.trigger("error");
							if (e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
							null !== e.timestampOffset && e.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(e.timestampOffset), this.trigger("timestampoffset"));
							var a = this.syncController_.mappingForTimeline(e.timeline);
							null !== a && this.trigger({
								type: "segmenttimemapping",
								mapping: a
							}), this.state = "APPENDING", i.map && function() {
								var e = (0, _.initSegmentId)(i.map);
								if (!t.activeInitSegmentId_ || t.activeInitSegmentId_ !== e) {
									var r = t.initSegment(i.map);
									t.sourceUpdater_.appendBuffer(r.bytes, function() {
										t.activeInitSegmentId_ = e
									})
								}
							}(), e.byteLength = e.bytes.byteLength, "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration, this.sourceUpdater_.appendBuffer(e.bytes, this.handleUpdateEnd_.bind(this))
						}
					}, {
						key: "handleUpdateEnd_",
						value: function() {
							if (this.logger_("handleUpdateEnd_", "segmentInfo:", this.pendingSegment_), !this.pendingSegment_) return this.state = "READY", void(this.paused() || this.monitorBuffer_());
							var t = this.pendingSegment_,
								e = t.segment,
								i = null !== this.mediaIndex;
							return this.pendingSegment_ = null, this.recordThroughput_(t), this.addSegmentMetadataCue_(t), this.state = "READY", this.mediaIndex = t.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = t.timeline, this.trigger("syncinfoupdate"), e.end && this.currentTime_() - e.end > 3 * t.playlist.targetDuration ? void this.resetEverything() : (i && this.trigger("bandwidthupdate"), this.trigger("progress"), w(t.playlist, this.mediaSource_, t.mediaIndex + 1) && this.endOfStream(), this.paused() || this.monitorBuffer_(), void 0)
						}
					}, {
						key: "recordThroughput_",
						value: function(t) {
							var e = this.throughput.rate,
								i = Date.now() - t.endOfAllRequests + 1,
								r = Math.floor(t.byteLength / i * 8 * 1e3);
							this.throughput.rate += (r - e) / ++this.throughput.count
						}
					}, {
						key: "logger_",
						value: function() {}
					}, {
						key: "addSegmentMetadataCue_",
						value: function(t) {
							if (this.segmentMetadataTrack_) {
								var e = t.segment,
									i = e.start,
									r = e.end;
								if (A(i) && A(r)) {
									(0, b.default)(i, r, this.segmentMetadataTrack_);
									var n = y.default.WebKitDataCue || y.default.VTTCue,
										a = {
											bandwidth: t.playlist.attributes.BANDWIDTH,
											resolution: t.playlist.attributes.RESOLUTION,
											codecs: t.playlist.attributes.CODECS,
											byteLength: t.byteLength,
											uri: t.uri,
											timeline: t.timeline,
											playlist: t.playlist.uri,
											start: i,
											end: r
										},
										s = JSON.stringify(a),
										o = new n(i, r, s);
									o.value = a, this.segmentMetadataTrack_.addCue(o)
								}
							}
						}
					}]), e
				}(c.default.EventTarget);
				i.default = k
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		17: [function(t, e, i) {
			(function(t) {
				"use strict";

				function r(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var n = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					a = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null,
					s = function(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}(a),
					o = function() {},
					u = function() {
						function t(e, i) {
							var n = this;
							r(this, t);
							var a = function() {
								n.sourceBuffer_ = e.addSourceBuffer(i), n.onUpdateendCallback_ = function() {
									var t = n.pendingCallback_;
									n.pendingCallback_ = null, t && t(), n.runCallback_()
								}, n.sourceBuffer_.addEventListener("updateend", n.onUpdateendCallback_), n.runCallback_()
							};
							this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = e, this.processedAppend_ = !1, "closed" === e.readyState ? e.addEventListener("sourceopen", a) : a()
						}
						return n(t, [{
							key: "abort",
							value: function(t) {
								var e = this;
								this.processedAppend_ && this.queueCallback_(function() {
									e.sourceBuffer_.abort()
								}, t)
							}
						}, {
							key: "appendBuffer",
							value: function(t, e) {
								var i = this;
								this.processedAppend_ = !0, this.queueCallback_(function() {
									i.sourceBuffer_.appendBuffer(t)
								}, e)
							}
						}, {
							key: "buffered",
							value: function() {
								return this.sourceBuffer_ ? this.sourceBuffer_.buffered : s.default.createTimeRanges()
							}
						}, {
							key: "remove",
							value: function(t, e) {
								var i = this;
								this.processedAppend_ && this.queueCallback_(function() {
									i.sourceBuffer_.remove(t, e)
								}, o)
							}
						}, {
							key: "updating",
							value: function() {
								return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
							}
						}, {
							key: "timestampOffset",
							value: function(t) {
								var e = this;
								return void 0 !== t && (this.queueCallback_(function() {
									e.sourceBuffer_.timestampOffset = t
								}), this.timestampOffset_ = t), this.timestampOffset_
							}
						}, {
							key: "queueCallback_",
							value: function(t, e) {
								this.callbacks_.push([t.bind(this), e]), this.runCallback_()
							}
						}, {
							key: "runCallback_",
							value: function() {
								var t = void 0;
								!this.updating() && this.callbacks_.length && (t = this.callbacks_.shift(), this.pendingCallback_ = t[1], t[0]())
							}
						}, {
							key: "dispose",
							value: function() {
								this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
							}
						}]), t
					}();
				i.default = u, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		18: [function(t, e, i) {
			(function(e) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function n(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function a(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var s = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					o = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					u = t(57),
					d = r(u),
					l = t(59),
					c = t(11),
					f = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					h = r(f),
					p = [{
						name: "VOD",
						run: function(t, e, i, r, n) {
							return i !== 1 / 0 ? {
								time: 0,
								segmentIndex: 0
							} : null
						}
					}, {
						name: "ProgramDateTime",
						run: function(t, e, i, r, n) {
							return t.datetimeToDisplayTime && e.dateTimeObject ? {
								time: e.dateTimeObject.getTime() / 1e3 + t.datetimeToDisplayTime,
								segmentIndex: 0
							} : null
						}
					}, {
						name: "Segment",
						run: function(t, e, i, r, n) {
							var a = e.segments || [],
								s = null,
								o = null;
							n = n || 0;
							for (var u = 0; u < a.length; u++) {
								var d = a[u];
								if (d.timeline === r && "undefined" != typeof d.start) {
									var l = Math.abs(n - d.start);
									if (null !== o && o < l) break;
									(!s || null === o || o >= l) && (o = l, s = {
										time: d.start,
										segmentIndex: u
									})
								}
							}
							return s
						}
					}, {
						name: "Discontinuity",
						run: function(t, e, i, r, n) {
							var a = null;
							if (n = n || 0, e.discontinuityStarts && e.discontinuityStarts.length)
								for (var s = null, o = 0; o < e.discontinuityStarts.length; o++) {
									var u = e.discontinuityStarts[o],
										d = e.discontinuitySequence + o + 1,
										l = t.discontinuities[d];
									if (l) {
										var c = Math.abs(n - l.time);
										if (null !== s && s < c) break;
										(!a || null === s || s >= c) && (s = c, a = {
											time: l.time,
											segmentIndex: u
										})
									}
								}
							return a
						}
					}, {
						name: "Playlist",
						run: function(t, e, i, r, n) {
							return e.syncInfo ? {
								time: e.syncInfo.time,
								segmentIndex: e.syncInfo.mediaSequence - e.mediaSequence
							} : null
						}
					}];
				i.syncPointStrategies = p;
				var g = function(t) {
					function e() {
						var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
						n(this, e), o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.inspectCache_ = void 0, this.timelines = [], this.discontinuities = [], this.datetimeToDisplayTime = null, t.debug && (this.logger_ = h.default.log.bind(h.default, "sync-controller ->"))
					}
					return a(e, t), s(e, [{
						key: "getSyncPoint",
						value: function(t, e, i, r) {
							var n = this.runStrategies_(t, e, i, r);
							return n.length ? this.selectSyncPoint_(n, {
								key: "time",
								value: r
							}) : null
						}
					}, {
						key: "getExpiredTime",
						value: function(t, e) {
							if (!t || !t.segments) return null;
							var i = this.runStrategies_(t, e, t.discontinuitySequence, 0);
							if (!i.length) return null;
							var r = this.selectSyncPoint_(i, {
								key: "segmentIndex",
								value: 0
							});
							return r.segmentIndex > 0 && (r.time *= -1), Math.abs(r.time + (0, c.sumDurations)(t, r.segmentIndex, 0))
						}
					}, {
						key: "runStrategies_",
						value: function(t, e, i, r) {
							for (var n = [], a = 0; a < p.length; a++) {
								var s = p[a],
									o = s.run(this, t, e, i, r);
								o && (o.strategy = s.name, n.push({
									strategy: s.name,
									syncPoint: o
								}), this.logger_("syncPoint found via <" + s.name + ">:", o))
							}
							return n
						}
					}, {
						key: "selectSyncPoint_",
						value: function(t, e) {
							for (var i = t[0].syncPoint, r = Math.abs(t[0].syncPoint[e.key] - e.value), n = t[0].strategy, a = 1; a < t.length; a++) {
								var s = Math.abs(t[a].syncPoint[e.key] - e.value);
								s < r && (r = s, i = t[a].syncPoint, n = t[a].strategy)
							}
							return this.logger_("syncPoint with strategy <" + n + "> chosen: ", i), i
						}
					}, {
						key: "saveExpiredSegmentInfo",
						value: function(t, e) {
							for (var i = e.mediaSequence - t.mediaSequence, r = i - 1; r >= 0; r--) {
								var n = t.segments[r];
								if (n && "undefined" != typeof n.start) {
									e.syncInfo = {
										mediaSequence: t.mediaSequence + r,
										time: n.start
									}, this.logger_("playlist sync:", e.syncInfo), this.trigger("syncinfoupdate");
									break
								}
							}
						}
					}, {
						key: "setDateTimeMapping",
						value: function(t) {
							if (!this.datetimeToDisplayTime && t.dateTimeObject) {
								var e = t.dateTimeObject.getTime() / 1e3;
								this.datetimeToDisplayTime = -e
							}
						}
					}, {
						key: "reset",
						value: function() {
							this.inspectCache_ = void 0
						}
					}, {
						key: "probeSegmentInfo",
						value: function(t) {
							var e = t.segment,
								i = t.playlist,
								r = void 0;
							return r = e.map ? this.probeMp4Segment_(t) : this.probeTsSegment_(t), r && this.calculateSegmentTimeMapping_(t, r) && (this.saveDiscontinuitySyncInfo_(t), i.syncInfo || (i.syncInfo = {
								mediaSequence: i.mediaSequence + t.mediaIndex,
								time: e.start
							})), r
						}
					}, {
						key: "probeMp4Segment_",
						value: function(t) {
							var e = t.segment,
								i = d.default.timescale(e.map.bytes),
								r = d.default.startTime(i, t.bytes);
							return null !== t.timestampOffset && (t.timestampOffset -= r), {
								start: r,
								end: r + e.duration
							}
						}
					}, {
						key: "probeTsSegment_",
						value: function(t) {
							var e = (0, l.inspect)(t.bytes, this.inspectCache_),
								i = void 0,
								r = void 0;
							return e ? (e.video && 2 === e.video.length ? (this.inspectCache_ = e.video[1].dts, i = e.video[0].dtsTime, r = e.video[1].dtsTime) : e.audio && 2 === e.audio.length && (this.inspectCache_ = e.audio[1].dts, i = e.audio[0].dtsTime, r = e.audio[1].dtsTime), {
								start: i,
								end: r,
								containsVideo: e.video && 2 === e.video.length,
								containsAudio: e.audio && 2 === e.audio.length
							}) : null
						}
					}, {
						key: "timestampOffsetForTimeline",
						value: function(t) {
							return "undefined" == typeof this.timelines[t] ? null : this.timelines[t].time
						}
					}, {
						key: "mappingForTimeline",
						value: function(t) {
							return "undefined" == typeof this.timelines[t] ? null : this.timelines[t].mapping
						}
					}, {
						key: "calculateSegmentTimeMapping_",
						value: function(t, e) {
							var i = t.segment,
								r = this.timelines[t.timeline];
							if (null !== t.timestampOffset) this.logger_("tsO:", t.timestampOffset), r = {
								time: t.startOfSegment,
								mapping: t.startOfSegment - e.start
							}, this.timelines[t.timeline] = r, this.trigger("timestampoffset"), i.start = t.startOfSegment, i.end = e.end + r.mapping;
							else {
								if (!r) return !1;
								i.start = e.start + r.mapping, i.end = e.end + r.mapping
							}
							return !0
						}
					}, {
						key: "saveDiscontinuitySyncInfo_",
						value: function(t) {
							var e = t.playlist,
								i = t.segment;
							if (i.discontinuity) this.discontinuities[i.timeline] = {
								time: i.start,
								accuracy: 0
							};
							else if (e.discontinuityStarts.length)
								for (var r = 0; r < e.discontinuityStarts.length; r++) {
									var n = e.discontinuityStarts[r],
										a = e.discontinuitySequence + r + 1,
										s = n - t.mediaIndex,
										o = Math.abs(s);
									if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
										var u = void 0;
										u = s < 0 ? i.start - (0, c.sumDurations)(e, t.mediaIndex, n) : i.end + (0, c.sumDurations)(e, t.mediaIndex + 1, n), this.discontinuities[a] = {
											time: u,
											accuracy: o
										}
									}
								}
						}
					}, {
						key: "logger_",
						value: function() {}
					}]), e
				}(h.default.EventTarget);
				i.default = g
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		19: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = function() {
				var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
					e = {
						codecCount: 0
					},
					i = void 0;
				return e.codecCount = t.split(",").length, e.codecCount = e.codecCount || 2, i = /(^|\s|,)+(avc1)([^ ,]*)/i.exec(t), i && (e.videoCodec = i[2], e.videoObjectTypeIndicator = i[3]), e.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t), e.audioProfile = e.audioProfile && e.audioProfile[2], e
			};
			i.parseCodecs = r
		}, {}],
		20: [function(t, e, i) {
			(function(r) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function a(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function s(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var o = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					u = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					d = t(16),
					l = n(d),
					c = "undefined" != typeof window ? window.videojs : void 0 !== r ? r.videojs : null,
					f = n(c),
					h = t(32),
					p = n(h),
					g = t(72),
					m = n(g),
					y = t(2),
					v = new Uint8Array("\n\n".split("").map(function(t) {
						return t.charCodeAt(0)
					})),
					b = function(t) {
						return String.fromCharCode.apply(null, t)
					},
					_ = function(t) {
						function e(t) {
							var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
							a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, i), this.mediaSource_ = null, this.subtitlesTrack_ = null
						}
						return s(e, t), o(e, [{
							key: "buffered_",
							value: function() {
								if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return f.default.createTimeRanges();
								var t = this.subtitlesTrack_.cues,
									e = t[0].startTime,
									i = t[t.length - 1].startTime;
								return f.default.createTimeRanges([
									[e, i]
								])
							}
						}, {
							key: "initSegment",
							value: function(t) {
								var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
								if (!t) return null;
								var i = (0, y.initSegmentId)(t),
									r = this.initSegments_[i];
								if (e && !r && t.bytes) {
									var n = v.byteLength + t.bytes.byteLength,
										a = new Uint8Array(n);
									a.set(t.bytes), a.set(v, t.bytes.byteLength), this.initSegments_[i] = r = {
										resolvedUri: t.resolvedUri,
										byterange: t.byterange,
										bytes: a
									}
								}
								return r || t
							}
						}, {
							key: "couldBeginLoading_",
							value: function() {
								return this.playlist_ && this.subtitlesTrack_ && !this.paused()
							}
						}, {
							key: "init_",
							value: function() {
								return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
							}
						}, {
							key: "track",
							value: function(t) {
								return void 0 === t ? this.subtitlesTrack_ : (this.subtitlesTrack_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_)
							}
						}, {
							key: "remove",
							value: function(t, e) {
								(0, m.default)(t, e, this.subtitlesTrack_)
							}
						}, {
							key: "fillBuffer_",
							value: function() {
								var t = this;
								this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
								var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
								if (e = this.skipEmptySegments_(e)) {
									if (null === this.syncController_.timestampOffsetForTimeline(e.timeline)) {
										var i = function() {
											t.state = "READY", t.paused() || t.monitorBuffer_()
										};
										return this.syncController_.one("timestampoffset", i), void(this.state = "WAITING_ON_TIMELINE")
									}
									this.loadSegment_(e)
								}
							}
						}, {
							key: "skipEmptySegments_",
							value: function(t) {
								for (; t && t.segment.empty;) t = this.generateSegmentInfo_(t.playlist, t.mediaIndex + 1, t.startOfSegment + t.duration, t.isSyncRequest);
								return t
							}
						}, {
							key: "handleSegment_",
							value: function() {
								var t = this;
								if (!this.pendingSegment_ || !this.subtitlesTrack_) return void(this.state = "READY");
								this.state = "APPENDING";
								var e = this.pendingSegment_,
									i = e.segment;
								if ("function" != typeof p.default.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
									var r = function() {
										var e = function() {
											t.handleSegment_()
										};
										return t.state = "WAITING_ON_VTTJS", t.subtitlesTrack_.tech_.one("vttjsloaded", e), t.subtitlesTrack_.tech_.one("vttjserror", function() {
											t.subtitlesTrack_.tech_.off("vttjsloaded", e), t.error({
												message: "Error loading vtt.js"
											}), t.state = "READY", t.pause(), t.trigger("error")
										}), {
											v: void 0
										}
									}();
									if ("object" == typeof r) return r.v
								}
								i.requested = !0;
								try {
									this.parseVTTCues_(e)
								} catch (t) {
									return this.error({
										message: t.message
									}), this.state = "READY", this.pause(), this.trigger("error")
								}
								return this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_), e.isSyncRequest ? (this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY")) : (e.byteLength = e.bytes.byteLength, this.mediaSecondsLoaded += i.duration, e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime), e.cues.forEach(function(e) {
									t.subtitlesTrack_.addCue(e)
								}), this.handleUpdateEnd_(), void 0)
							}
						}, {
							key: "parseVTTCues_",
							value: function(t) {
								var e = void 0,
									i = !1;
								"function" == typeof p.default.TextDecoder ? e = new p.default.TextDecoder("utf8") : (e = p.default.WebVTT.StringDecoder(), i = !0);
								var r = new p.default.WebVTT.Parser(p.default, p.default.vttjs, e);
								if (t.cues = [], t.timestampmap = {
										MPEGTS: 0,
										LOCAL: 0
									}, r.oncue = t.cues.push.bind(t.cues), r.ontimestampmap = function(e) {
										return t.timestampmap = e
									}, r.onparsingerror = function(t) {
										f.default.log.warn("Error encountered when parsing cues: " + t.message)
									}, t.segment.map) {
									var n = t.segment.map.bytes;
									i && (n = b(n)), r.parse(n)
								}
								var a = t.bytes;
								i && (a = b(a)), r.parse(a), r.flush()
							}
						}, {
							key: "updateTimeMapping_",
							value: function(t, e, i) {
								var r = t.segment;
								if (e) {
									if (!t.cues.length) return void(r.empty = !0);
									var n = t.timestampmap,
										a = n.MPEGTS / 9e4 - n.LOCAL + e.mapping;
									if (t.cues.forEach(function(t) {
											t.startTime += a, t.endTime += a
										}), !i.syncInfo) {
										var s = t.cues[0].startTime,
											o = t.cues[t.cues.length - 1].startTime;
										i.syncInfo = {
											mediaSequence: i.mediaSequence + t.mediaIndex,
											time: Math.min(s, o - r.duration)
										}
									}
								}
							}
						}]), e
					}(l.default);
				i.default = _, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		21: [function(t, e, i) {
			(function(t) {
				"use strict";
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var r = "undefined" != typeof window ? window.videojs : void 0 !== t ? t.videojs : null,
					n = function(t) {
						return t && t.__esModule ? t : {
							default: t
						}
					}(r),
					a = function() {
						return function t(e, i) {
							e = (0, r.mergeOptions)({
								timeout: 45e3
							}, e);
							var a = t.beforeRequest || n.default.Hls.xhr.beforeRequest;
							if (a && "function" == typeof a) {
								var s = a(e);
								s && (e = s)
							}
							var o = (0, r.xhr)(e, function(t, e) {
									var r = o.response;
									!t && r && (o.responseTime = Date.now(), o.roundTripTime = o.responseTime - o.requestTime, o.bytesReceived = r.byteLength || r.length, o.bandwidth || (o.bandwidth = Math.floor(o.bytesReceived / o.roundTripTime * 8 * 1e3))), t && "ETIMEDOUT" === t.code && (o.timedout = !0), t || o.aborted || 200 === e.statusCode || 206 === e.statusCode || 0 === e.statusCode || (t = new Error("XHR Failed with a response of: " + (o && (r || o.responseText)))), i(t, o)
								}),
								u = o.abort;
							return o.abort = function() {
								return o.aborted = !0, u.apply(o, arguments)
							}, o.uri = e.uri, o.requestTime = Date.now(), o
						}
					};
				i.default = a, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		22: [function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var n = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				a = function() {
					var t = [
							[
								[],
								[],
								[],
								[],
								[]
							],
							[
								[],
								[],
								[],
								[],
								[]
							]
						],
						e = t[0],
						i = t[1],
						r = e[4],
						n = i[4],
						a = void 0,
						s = void 0,
						o = void 0,
						u = [],
						d = [],
						l = void 0,
						c = void 0,
						f = void 0,
						h = void 0,
						p = void 0,
						g = void 0;
					for (a = 0; a < 256; a++) d[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
					for (s = o = 0; !r[s]; s ^= l || 1, o = d[o] || 1)
						for (h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4, h = h >> 8 ^ 255 & h ^ 99, r[s] = h, n[h] = s, f = u[c = u[l = u[s]]], g = 16843009 * f ^ 65537 * c ^ 257 * l ^ 16843008 * s, p = 257 * u[h] ^ 16843008 * h, a = 0; a < 4; a++) e[a][s] = p = p << 24 ^ p >>> 8, i[a][h] = g = g << 24 ^ g >>> 8;
					for (a = 0; a < 5; a++) e[a] = e[a].slice(0), i[a] = i[a].slice(0);
					return t
				},
				s = null,
				o = function() {
					function t(e) {
						r(this, t), s || (s = a()), this._tables = [
							[s[0][0].slice(), s[0][1].slice(), s[0][2].slice(), s[0][3].slice(), s[0][4].slice()],
							[s[1][0].slice(), s[1][1].slice(), s[1][2].slice(), s[1][3].slice(), s[1][4].slice()]
						];
						var i = void 0,
							n = void 0,
							o = void 0,
							u = void 0,
							d = void 0,
							l = this._tables[0][4],
							c = this._tables[1],
							f = e.length,
							h = 1;
						if (4 !== f && 6 !== f && 8 !== f) throw new Error("Invalid aes key size");
						for (u = e.slice(0), d = [], this._key = [u, d], i = f; i < 4 * f + 28; i++) o = u[i - 1], (i % f == 0 || 8 === f && i % f == 4) && (o = l[o >>> 24] << 24 ^ l[o >> 16 & 255] << 16 ^ l[o >> 8 & 255] << 8 ^ l[255 & o], i % f == 0 && (o = o << 8 ^ o >>> 24 ^ h << 24, h = h << 1 ^ 283 * (h >> 7))), u[i] = u[i - f] ^ o;
						for (n = 0; i; n++, i--) o = u[3 & n ? i : i - 4], d[n] = i <= 4 || n < 4 ? o : c[0][l[o >>> 24]] ^ c[1][l[o >> 16 & 255]] ^ c[2][l[o >> 8 & 255]] ^ c[3][l[255 & o]]
					}
					return n(t, [{
						key: "decrypt",
						value: function(t, e, i, r, n, a) {
							var s = this._key[1],
								o = t ^ s[0],
								u = r ^ s[1],
								d = i ^ s[2],
								l = e ^ s[3],
								c = void 0,
								f = void 0,
								h = void 0,
								p = s.length / 4 - 2,
								g = void 0,
								m = 4,
								y = this._tables[1],
								v = y[0],
								b = y[1],
								_ = y[2],
								T = y[3],
								S = y[4];
							for (g = 0; g < p; g++) c = v[o >>> 24] ^ b[u >> 16 & 255] ^ _[d >> 8 & 255] ^ T[255 & l] ^ s[m], f = v[u >>> 24] ^ b[d >> 16 & 255] ^ _[l >> 8 & 255] ^ T[255 & o] ^ s[m + 1], h = v[d >>> 24] ^ b[l >> 16 & 255] ^ _[o >> 8 & 255] ^ T[255 & u] ^ s[m + 2], l = v[l >>> 24] ^ b[o >> 16 & 255] ^ _[u >> 8 & 255] ^ T[255 & d] ^ s[m + 3], m += 4, o = c, u = f, d = h;
							for (g = 0; g < 4; g++) n[(3 & -g) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[d >> 8 & 255] << 8 ^ S[255 & l] ^ s[m++], c = o, o = u, u = d, d = l, l = c
						}
					}]), t
				}();
			i.default = o, e.exports = i.default
		}, {}],
		23: [function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function n(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				s = function(t, e, i) {
					for (var r = !0; r;) {
						var n = t,
							a = e,
							s = i;
						r = !1, null === n && (n = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(n, a);
						if (void 0 !== o) {
							if ("value" in o) return o.value;
							var u = o.get;
							return void 0 === u ? void 0 : u.call(s)
						}
						var d = Object.getPrototypeOf(n);
						if (null === d) return;
						t = d, e = a, i = s, r = !0, o = d = void 0
					}
				},
				o = t(26),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(o),
				d = function(t) {
					function e() {
						r(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, u.default), this.jobs = [], this.delay = 1, this.timeout_ = null
					}
					return n(e, t), a(e, [{
						key: "processJob_",
						value: function() {
							this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
						}
					}, {
						key: "push",
						value: function(t) {
							this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
						}
					}]), e
				}(u.default);
			i.default = d, e.exports = i.default
		}, {}],
		24: [function(t, e, i) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				s = t(22),
				o = r(s),
				u = t(23),
				d = r(u),
				l = t(28),
				c = function(t) {
					return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
				},
				f = function(t, e, i) {
					var r = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2),
						n = new o.default(Array.prototype.slice.call(e)),
						a = new Uint8Array(t.byteLength),
						s = new Int32Array(a.buffer),
						u = void 0,
						d = void 0,
						l = void 0,
						f = void 0,
						h = void 0,
						p = void 0,
						g = void 0,
						m = void 0,
						y = void 0;
					for (u = i[0], d = i[1], l = i[2], f = i[3], y = 0; y < r.length; y += 4) h = c(r[y]), p = c(r[y + 1]), g = c(r[y + 2]), m = c(r[y + 3]), n.decrypt(h, p, g, m, s, y), s[y] = c(s[y] ^ u), s[y + 1] = c(s[y + 1] ^ d), s[y + 2] = c(s[y + 2] ^ l), s[y + 3] = c(s[y + 3] ^ f), u = h, d = p, l = g, f = m;
					return a
				};
			i.decrypt = f;
			var h = function() {
				function t(e, i, r, a) {
					n(this, t);
					var s = t.STEP,
						o = new Int32Array(e.buffer),
						u = new Uint8Array(e.byteLength),
						f = 0;
					for (this.asyncStream_ = new d.default, this.asyncStream_.push(this.decryptChunk_(o.subarray(f, f + s), i, r, u)), f = s; f < o.length; f += s) r = new Uint32Array([c(o[f - 4]), c(o[f - 3]), c(o[f - 2]), c(o[f - 1])]), this.asyncStream_.push(this.decryptChunk_(o.subarray(f, f + s), i, r, u));
					this.asyncStream_.push(function() {
						a(null, (0, l.unpad)(u))
					})
				}
				return a(t, [{
					key: "decryptChunk_",
					value: function(t, e, i, r) {
						return function() {
							var n = f(t, e, i);
							r.set(n, t.byteOffset)
						}
					}
				}], [{
					key: "STEP",
					get: function() {
						return 32e3
					}
				}]), t
			}();
			i.Decrypter = h, i.default = {
				Decrypter: h,
				decrypt: f
			}
		}, {}],
		25: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = t(24),
				n = t(23),
				a = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(n);
			i.default = {
				decrypt: r.decrypt,
				Decrypter: r.Decrypter,
				AsyncStream: a.default
			}, e.exports = i.default
		}, {}],
		26: [function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var n = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				a = function() {
					function t() {
						r(this, t), this.listeners = {}
					}
					return n(t, [{
						key: "on",
						value: function(t, e) {
							this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
						}
					}, {
						key: "off",
						value: function(t, e) {
							var i = void 0;
							return !!this.listeners[t] && (i = this.listeners[t].indexOf(e), this.listeners[t].splice(i, 1), i > -1)
						}
					}, {
						key: "trigger",
						value: function(t) {
							var e = void 0,
								i = void 0,
								r = void 0,
								n = void 0;
							if (e = this.listeners[t])
								if (2 === arguments.length)
									for (r = e.length, i = 0; i < r; ++i) e[i].call(this, arguments[1]);
								else
									for (n = Array.prototype.slice.call(arguments, 1), r = e.length, i = 0; i < r; ++i) e[i].apply(this, n)
						}
					}, {
						key: "dispose",
						value: function() {
							this.listeners = {}
						}
					}, {
						key: "pipe",
						value: function(t) {
							this.on("data", function(e) {
								t.push(e)
							})
						}
					}]), t
				}();
			i.default = a, e.exports = i.default
		}, {}],
		27: [function(t, e, i) {
			"use strict";
			var r;
			e.exports = function(t) {
				var e = r[t.byteLength % 16 || 0],
					i = new Uint8Array(t.byteLength + e.length);
				return i.set(t), i.set(e, t.byteLength), i
			}, r = [
				[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
				[15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
				[14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
				[13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
				[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
				[11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
				[10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
				[9, 9, 9, 9, 9, 9, 9, 9, 9],
				[8, 8, 8, 8, 8, 8, 8, 8],
				[7, 7, 7, 7, 7, 7, 7],
				[6, 6, 6, 6, 6, 6],
				[5, 5, 5, 5, 5],
				[4, 4, 4, 4],
				[3, 3, 3],
				[2, 2],
				[1]
			]
		}, {}],
		28: [function(t, e, i) {
			"use strict";
			i.pad = t(27), i.unpad = t(29)
		}, {}],
		29: [function(t, e, i) {
			"use strict";
			e.exports = function(t) {
				return t.subarray(0, t.byteLength - t[t.byteLength - 1])
			}
		}, {}],
		30: [function(t, e, i) {}, {}],
		31: [function(t, e, i) {
			(function(i) {
				var r, n = void 0 !== i ? i : "undefined" != typeof window ? window : {},
					a = t(30);
				"undefined" != typeof document ? r = document : (r = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = n["__GLOBAL_DOCUMENT_CACHE@4"] = a), e.exports = r
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		32: [function(t, e, i) {
			(function(t) {
				var i;
				i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = i
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		33: [function(t, e, i) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			var n = t(34),
				a = r(n),
				s = t(35),
				o = r(s),
				u = t(36),
				d = r(u);
			e.exports = {
				LineStream: a.default,
				ParseStream: o.default,
				Parser: d.default
			}
		}, {}],
		34: [function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function n(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function a(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var s = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				o = t(37),
				u = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(o),
				d = function(t) {
					function e() {
						r(this, e);
						var t = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
						return t.buffer = "", t
					}
					return a(e, t), s(e, [{
						key: "push",
						value: function(t) {
							var e = void 0;
							for (this.buffer += t, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)),
								this.buffer = this.buffer.substring(e + 1)
						}
					}]), e
				}(u.default);
			i.default = d
		}, {}],
		35: [function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function n(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function a(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var s = function() {
					function t(t, e) {
						var i = [],
							r = !0,
							n = !1,
							a = void 0;
						try {
							for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); r = !0);
						} catch (t) {
							n = !0, a = t
						} finally {
							try {
								!r && o.return && o.return()
							} finally {
								if (n) throw a
							}
						}
						return i
					}
					return function(e, i) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return t(e, i);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}(),
				o = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				u = t(37),
				d = function(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(u),
				l = function() {
					return new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')
				},
				c = function(t) {
					for (var e = t.split(l()), i = {}, r = e.length, n = void 0; r--;) "" !== e[r] && (n = /([^=]*)=(.*)/.exec(e[r]).slice(1), n[0] = n[0].replace(/^\s+|\s+$/g, ""), n[1] = n[1].replace(/^\s+|\s+$/g, ""), n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1"), i[n[0]] = n[1]);
					return i
				},
				f = function(t) {
					function e() {
						return r(this, e), n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
					}
					return a(e, t), o(e, [{
						key: "push",
						value: function(t) {
							var e = void 0,
								i = void 0;
							if (t = t.replace(/^[\u0000\s]+|[\u0000\s]+$/g, ""), 0 !== t.length) {
								if ("#" !== t[0]) return void this.trigger("data", {
									type: "uri",
									uri: t
								});
								if (0 !== t.indexOf("#EXT")) return void this.trigger("data", {
									type: "comment",
									text: t.slice(1)
								});
								if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) return void this.trigger("data", {
									type: "tag",
									tagType: "m3u"
								});
								if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) return i = {
									type: "tag",
									tagType: "inf"
								}, e[1] && (i.duration = parseFloat(e[1])), e[2] && (i.title = e[2]), void this.trigger("data", i);
								if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) return i = {
									type: "tag",
									tagType: "targetduration"
								}, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
								if (e = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t)) return i = {
									type: "tag",
									tagType: "totalduration"
								}, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
								if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) return i = {
									type: "tag",
									tagType: "version"
								}, e[1] && (i.version = parseInt(e[1], 10)), void this.trigger("data", i);
								if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
									type: "tag",
									tagType: "media-sequence"
								}, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
								if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
									type: "tag",
									tagType: "discontinuity-sequence"
								}, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
								if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) return i = {
									type: "tag",
									tagType: "playlist-type"
								}, e[1] && (i.playlistType = e[1]), void this.trigger("data", i);
								if (e = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t)) return i = {
									type: "tag",
									tagType: "byterange"
								}, e[1] && (i.length = parseInt(e[1], 10)), e[2] && (i.offset = parseInt(e[2], 10)), void this.trigger("data", i);
								if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) return i = {
									type: "tag",
									tagType: "allow-cache"
								}, e[1] && (i.allowed = !/NO/.test(e[1])), void this.trigger("data", i);
								if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
									if (i = {
											type: "tag",
											tagType: "map"
										}, e[1]) {
										var r = c(e[1]);
										if (r.URI && (i.uri = r.URI), r.BYTERANGE) {
											var n = r.BYTERANGE.split("@"),
												a = s(n, 2),
												o = a[0],
												u = a[1];
											i.byterange = {}, o && (i.byterange.length = parseInt(o, 10)), u && (i.byterange.offset = parseInt(u, 10))
										}
									}
									return void this.trigger("data", i)
								}
								if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
									if (i = {
											type: "tag",
											tagType: "stream-inf"
										}, e[1]) {
										if (i.attributes = c(e[1]), i.attributes.RESOLUTION) {
											var d = i.attributes.RESOLUTION.split("x"),
												l = {};
											d[0] && (l.width = parseInt(d[0], 10)), d[1] && (l.height = parseInt(d[1], 10)), i.attributes.RESOLUTION = l
										}
										i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
									}
									return void this.trigger("data", i)
								}
								if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t)) return i = {
									type: "tag",
									tagType: "media"
								}, e[1] && (i.attributes = c(e[1])), void this.trigger("data", i);
								if (e = /^#EXT-X-ENDLIST/.exec(t)) return void this.trigger("data", {
									type: "tag",
									tagType: "endlist"
								});
								if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) return void this.trigger("data", {
									type: "tag",
									tagType: "discontinuity"
								});
								if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t)) return i = {
									type: "tag",
									tagType: "program-date-time"
								}, e[1] && (i.dateTimeString = e[1], i.dateTimeObject = new Date(e[1])), void this.trigger("data", i);
								if (e = /^#EXT-X-KEY:?(.*)$/.exec(t)) return i = {
									type: "tag",
									tagType: "key"
								}, e[1] && (i.attributes = c(e[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), void this.trigger("data", i);
								if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t)) return i = {
									type: "tag",
									tagType: "cue-out-cont"
								}, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
								if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t)) return i = {
									type: "tag",
									tagType: "cue-out"
								}, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
								if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t)) return i = {
									type: "tag",
									tagType: "cue-in"
								}, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
								this.trigger("data", {
									type: "tag",
									data: t.slice(4)
								})
							}
						}
					}]), e
				}(d.default);
			i.default = f
		}, {}],
		36: [function(t, e, i) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function a(t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			}

			function s(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var o = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
					}
					return t
				},
				u = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				d = t(37),
				l = r(d),
				c = t(34),
				f = r(c),
				h = t(35),
				p = r(h),
				g = function(t) {
					function e() {
						n(this, e);
						var t = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
						t.lineStream = new f.default, t.parseStream = new p.default, t.lineStream.pipe(t.parseStream);
						var i = t,
							r = [],
							s = {},
							u = void 0,
							d = void 0,
							l = function() {},
							c = {
								AUDIO: {},
								VIDEO: {},
								"CLOSED-CAPTIONS": {},
								SUBTITLES: {}
							},
							h = 0;
						return t.manifest = {
							allowCache: !0,
							discontinuityStarts: [],
							segments: []
						}, t.parseStream.on("data", function(t) {
							var e = void 0,
								n = void 0;
							({
								tag: function() {
									(({
										"allow-cache": function() {
											this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", {
												message: "defaulting allowCache to YES"
											}), this.manifest.allowCache = !0)
										},
										byterange: function() {
											var e = {};
											"length" in t && (s.byterange = e, e.length = t.length, "offset" in t || (this.trigger("info", {
												message: "defaulting offset to zero"
											}), t.offset = 0)), "offset" in t && (s.byterange = e, e.offset = t.offset)
										},
										endlist: function() {
											this.manifest.endList = !0
										},
										inf: function() {
											"mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
												message: "defaulting media sequence to zero"
											})), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
												message: "defaulting discontinuity sequence to zero"
											})), t.duration > 0 && (s.duration = t.duration), 0 === t.duration && (s.duration = .01, this.trigger("info", {
												message: "updating zero segment duration to a small value"
											})), this.manifest.segments = r
										},
										key: function() {
											return t.attributes ? "NONE" === t.attributes.METHOD ? void(d = null) : t.attributes.URI ? (t.attributes.METHOD || this.trigger("warn", {
												message: "defaulting key method to AES-128"
											}), d = {
												method: t.attributes.METHOD || "AES-128",
												uri: t.attributes.URI
											}, void("undefined" != typeof t.attributes.IV && (d.iv = t.attributes.IV))) : void this.trigger("warn", {
												message: "ignoring key declaration without URI"
											}) : void this.trigger("warn", {
												message: "ignoring key declaration without attribute list"
											})
										},
										"media-sequence": function() {
											return isFinite(t.number) ? void(this.manifest.mediaSequence = t.number) : void this.trigger("warn", {
												message: "ignoring invalid media sequence: " + t.number
											})
										},
										"discontinuity-sequence": function() {
											return isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, void(h = t.number)) : void this.trigger("warn", {
												message: "ignoring invalid discontinuity sequence: " + t.number
											})
										},
										"playlist-type": function() {
											return /VOD|EVENT/.test(t.playlistType) ? void(this.manifest.playlistType = t.playlistType) : void this.trigger("warn", {
												message: "ignoring unknown playlist type: " + t.playlist
											})
										},
										map: function() {
											u = {}, t.uri && (u.uri = t.uri), t.byterange && (u.byterange = t.byterange)
										},
										"stream-inf": function() {
											return this.manifest.playlists = r, this.manifest.mediaGroups = this.manifest.mediaGroups || c, t.attributes ? (s.attributes || (s.attributes = {}), void o(s.attributes, t.attributes)) : void this.trigger("warn", {
												message: "ignoring empty stream-inf attributes"
											})
										},
										media: function() {
											if (this.manifest.mediaGroups = this.manifest.mediaGroups || c, !(t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME)) return void this.trigger("warn", {
												message: "ignoring incomplete or missing media group"
											});
											var i = this.manifest.mediaGroups[t.attributes.TYPE];
											i[t.attributes["GROUP-ID"]] = i[t.attributes["GROUP-ID"]] || {}, e = i[t.attributes["GROUP-ID"]], n = {
												default: /yes/i.test(t.attributes.DEFAULT)
											}, n.default ? n.autoselect = !0 : n.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (n.language = t.attributes.LANGUAGE), t.attributes.URI && (n.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (n.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (n.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (n.forced = /yes/i.test(t.attributes.FORCED)), e[t.attributes.NAME] = n
										},
										discontinuity: function() {
											h += 1, s.discontinuity = !0, this.manifest.discontinuityStarts.push(r.length)
										},
										"program-date-time": function() {
											this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject
										},
										targetduration: function() {
											return !isFinite(t.duration) || t.duration < 0 ? void this.trigger("warn", {
												message: "ignoring invalid target duration: " + t.duration
											}) : void(this.manifest.targetDuration = t.duration)
										},
										totalduration: function() {
											return !isFinite(t.duration) || t.duration < 0 ? void this.trigger("warn", {
												message: "ignoring invalid total duration: " + t.duration
											}) : void(this.manifest.totalDuration = t.duration)
										},
										"cue-out": function() {
											s.cueOut = t.data
										},
										"cue-out-cont": function() {
											s.cueOutCont = t.data
										},
										"cue-in": function() {
											s.cueIn = t.data
										}
									})[t.tagType] || l).call(i)
								},
								uri: function() {
									s.uri = t.uri, r.push(s), !this.manifest.targetDuration || "duration" in s || (this.trigger("warn", {
										message: "defaulting segment duration to the target duration"
									}), s.duration = this.manifest.targetDuration), d && (s.key = d), s.timeline = h, u && (s.map = u), s = {}
								},
								comment: function() {}
							})[t.type].call(i)
						}), t
					}
					return s(e, t), u(e, [{
						key: "push",
						value: function(t) {
							this.lineStream.push(t)
						}
					}, {
						key: "end",
						value: function() {
							this.lineStream.push("\n")
						}
					}]), e
				}(l.default);
			i.default = g
		}, {}],
		37: [function(t, e, i) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var n = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				a = function() {
					function t() {
						r(this, t), this.listeners = {}
					}
					return n(t, [{
						key: "on",
						value: function(t, e) {
							this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
						}
					}, {
						key: "off",
						value: function(t, e) {
							if (!this.listeners[t]) return !1;
							var i = this.listeners[t].indexOf(e);
							return this.listeners[t].splice(i, 1), i > -1
						}
					}, {
						key: "trigger",
						value: function(t) {
							var e = this.listeners[t],
								i = void 0,
								r = void 0,
								n = void 0;
							if (e)
								if (2 === arguments.length)
									for (r = e.length, i = 0; i < r; ++i) e[i].call(this, arguments[1]);
								else
									for (n = Array.prototype.slice.call(arguments, 1), r = e.length, i = 0; i < r; ++i) e[i].apply(this, n)
						}
					}, {
						key: "dispose",
						value: function() {
							this.listeners = {}
						}
					}, {
						key: "pipe",
						value: function(t) {
							this.on("data", function(e) {
								t.push(e)
							})
						}
					}]), t
				}();
			i.default = a
		}, {}],
		38: [function(t, e, i) {
			"use strict";
			var r, n = t(62);
			r = function() {
				var t = new Uint8Array,
					e = 0;
				r.prototype.init.call(this), this.setTimestamp = function(t) {
					e = t
				}, this.parseId3TagSize = function(t, e) {
					var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
					return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
				}, this.parseAdtsSize = function(t, e) {
					var i = (224 & t[e + 5]) >> 5,
						r = t[e + 4] << 3;
					return 6144 & t[e + 3] | r | i
				}, this.push = function(i) {
					var r, n, a, s, o = 0,
						u = 0;
					for (t.length ? (s = t.length, t = new Uint8Array(i.byteLength + s), t.set(t.subarray(0, s)), t.set(i, s)) : t = i; t.length - u >= 3;)
						if (t[u] !== "I".charCodeAt(0) || t[u + 1] !== "D".charCodeAt(0) || t[u + 2] !== "3".charCodeAt(0))
							if (!0 & t[u] && 240 == (240 & t[u + 1])) {
								if (t.length - u < 7) break;
								if ((o = this.parseAdtsSize(t, u)) > t.length) break;
								a = {
									type: "audio",
									data: t.subarray(u, u + o),
									pts: e,
									dts: e
								}, this.trigger("data", a), u += o
							} else u++;
					else {
						if (t.length - u < 10) break;
						if ((o = this.parseId3TagSize(t, u)) > t.length) break;
						n = {
							type: "timed-metadata",
							data: t.subarray(u, u + o)
						}, this.trigger("data", n), u += o
					}
					r = t.length - u, t = r > 0 ? t.subarray(u) : new Uint8Array
				}
			}, r.prototype = new n, e.exports = r
		}, {}],
		39: [function(t, e, i) {
			"use strict";
			var r = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
				n = function(t) {
					return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
				},
				a = function(t, e, i) {
					var r, n = "";
					for (r = e; r < i; r++) n += "%" + ("00" + t[r].toString(16)).slice(-2);
					return n
				},
				s = function(t, e, i) {
					return unescape(a(t, e, i))
				},
				o = function(t, e) {
					var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
					return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
				},
				u = function(t, e) {
					var i = (224 & t[e + 5]) >> 5,
						r = t[e + 4] << 3;
					return 6144 & t[e + 3] | r | i
				},
				d = function(t, e) {
					return t[e] === "I".charCodeAt(0) && t[e + 1] === "D".charCodeAt(0) && t[e + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & t[e] && 240 == (240 & t[e + 1]) ? "audio" : null
				},
				l = function(t) {
					for (var e = 0; e + 5 < t.length;) {
						if (255 === t[e] && 240 == (246 & t[e + 1])) return r[(60 & t[e + 2]) >>> 2];
						e++
					}
					return null
				},
				c = function(t) {
					var e, i, r;
					e = 10, 64 & t[5] && (e += 4, e += n(t.subarray(10, 14)));
					do {
						if ((i = n(t.subarray(e + 4, e + 8))) < 1) return null;
						if ("PRIV" === String.fromCharCode(t[e], t[e + 1], t[e + 2], t[e + 3])) {
							r = t.subarray(e + 10, e + i + 10);
							for (var a = 0; a < r.byteLength; a++)
								if (0 === r[a]) {
									var o = s(r, 0, a);
									if ("com.apple.streaming.transportStreamTimestamp" === o) {
										var u = r.subarray(a + 1),
											d = (1 & u[3]) << 30 | u[4] << 22 | u[5] << 14 | u[6] << 6 | u[7] >>> 2;
										return d *= 4, d += 3 & u[7]
									}
									break
								}
						}
						e += 10, e += i
					} while (e < t.byteLength);
					return null
				};
			e.exports = {
				parseId3TagSize: o,
				parseAdtsSize: u,
				parseType: d,
				parseSampleRate: l,
				parseAacTimestamp: c
			}
		}, {}],
		40: [function(t, e, i) {
			"use strict";
			var r, n = t(62),
				a = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
			r = function() {
				var t;
				r.prototype.init.call(this), this.push = function(e) {
					var i, r, n, s, o, u, d = 0,
						l = 0;
					if ("audio" === e.type)
						for (t ? (s = t, t = new Uint8Array(s.byteLength + e.data.byteLength), t.set(s), t.set(e.data, s.byteLength)) : t = e.data; d + 5 < t.length;)
							if (255 === t[d] && 240 == (246 & t[d + 1])) {
								if (r = 2 * (1 & ~t[d + 1]), i = (3 & t[d + 3]) << 11 | t[d + 4] << 3 | (224 & t[d + 5]) >> 5, o = 1024 * (1 + (3 & t[d + 6])), u = 9e4 * o / a[(60 & t[d + 2]) >>> 2], n = d + i, t.byteLength < n) return;
								if (this.trigger("data", {
										pts: e.pts + l * u,
										dts: e.dts + l * u,
										sampleCount: o,
										audioobjecttype: 1 + (t[d + 2] >>> 6 & 3),
										channelcount: (1 & t[d + 2]) << 2 | (192 & t[d + 3]) >>> 6,
										samplerate: a[(60 & t[d + 2]) >>> 2],
										samplingfrequencyindex: (60 & t[d + 2]) >>> 2,
										samplesize: 16,
										data: t.subarray(d + 7 + r, n)
									}), t.byteLength === n) return void(t = void 0);
								l++, t = t.subarray(n)
							} else d++
				}, this.flush = function() {
					this.trigger("done")
				}
			}, r.prototype = new n, e.exports = r
		}, {}],
		41: [function(t, e, i) {
			"use strict";
			var r, n, a, s = t(62),
				o = t(61);
			n = function() {
				var t, e, i = 0;
				n.prototype.init.call(this), this.push = function(r) {
					var n;
					for (e ? (n = new Uint8Array(e.byteLength + r.data.byteLength), n.set(e), n.set(r.data, e.byteLength), e = n) : e = r.data; i < e.byteLength - 3; i++)
						if (1 === e[i + 2]) {
							t = i + 5;
							break
						}
					for (; t < e.byteLength;) switch (e[t]) {
						case 0:
							if (0 !== e[t - 1]) {
								t += 2;
								break
							}
							if (0 !== e[t - 2]) {
								t++;
								break
							}
							i + 3 !== t - 2 && this.trigger("data", e.subarray(i + 3, t - 2));
							do t++; while (1 !== e[t] && t < e.length);
							i = t - 2, t += 3;
							break;
						case 1:
							if (0 !== e[t - 1] || 0 !== e[t - 2]) {
								t += 3;
								break
							}
							this.trigger("data", e.subarray(i + 3, t - 2)), i = t - 2, t += 3;
							break;
						default:
							t += 3
					}
					e = e.subarray(i), t -= i, i = 0
				}, this.flush = function() {
					e && e.byteLength > 3 && this.trigger("data", e.subarray(i + 3)), e = null, i = 0, this.trigger("done")
				}
			}, n.prototype = new s, a = {
				100: !0,
				110: !0,
				122: !0,
				244: !0,
				44: !0,
				83: !0,
				86: !0,
				118: !0,
				128: !0,
				138: !0,
				139: !0,
				134: !0
			}, r = function() {
				var t, e, i, s, u, d, l, c = new n;
				r.prototype.init.call(this), t = this, this.push = function(t) {
					"video" === t.type && (e = t.trackId, i = t.pts, s = t.dts, c.push(t))
				}, c.on("data", function(r) {
					var n = {
						trackId: e,
						pts: i,
						dts: s,
						data: r
					};
					switch (31 & r[0]) {
						case 5:
							n.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
							break;
						case 6:
							n.nalUnitType = "sei_rbsp", n.escapedRBSP = u(r.subarray(1));
							break;
						case 7:
							n.nalUnitType = "seq_parameter_set_rbsp", n.escapedRBSP = u(r.subarray(1)), n.config = d(n.escapedRBSP);
							break;
						case 8:
							n.nalUnitType = "pic_parameter_set_rbsp";
							break;
						case 9:
							n.nalUnitType = "access_unit_delimiter_rbsp"
					}
					t.trigger("data", n)
				}), c.on("done", function() {
					t.trigger("done")
				}), this.flush = function() {
					c.flush()
				}, l = function(t, e) {
					var i, r, n = 8,
						a = 8;
					for (i = 0; i < t; i++) 0 !== a && (r = e.readExpGolomb(), a = (n + r + 256) % 256), n = 0 === a ? n : a
				}, u = function(t) {
					for (var e, i, r = t.byteLength, n = [], a = 1; a < r - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (n.push(a + 2), a += 2) : a++;
					if (0 === n.length) return t;
					e = r - n.length, i = new Uint8Array(e);
					var s = 0;
					for (a = 0; a < e; s++, a++) s === n[0] && (s++, n.shift()), i[a] = t[s];
					return i
				}, d = function(t) {
					var e, i, r, n, s, u, d, c, f, h, p, g, m, y = 0,
						v = 0,
						b = 0,
						_ = 0,
						T = 1;
					if (e = new o(t), i = e.readUnsignedByte(), n = e.readUnsignedByte(), r = e.readUnsignedByte(), e.skipUnsignedExpGolomb(), a[i] && (s = e.readUnsignedExpGolomb(), 3 === s && e.skipBits(1), e.skipUnsignedExpGolomb(), e.skipUnsignedExpGolomb(), e.skipBits(1), e.readBoolean()))
						for (p = 3 !== s ? 8 : 12, m = 0; m < p; m++) e.readBoolean() && (m < 6 ? l(16, e) : l(64, e));
					if (e.skipUnsignedExpGolomb(), 0 === (u = e.readUnsignedExpGolomb())) e.readUnsignedExpGolomb();
					else if (1 === u)
						for (e.skipBits(1), e.skipExpGolomb(), e.skipExpGolomb(), d = e.readUnsignedExpGolomb(), m = 0; m < d; m++) e.skipExpGolomb();
					if (e.skipUnsignedExpGolomb(), e.skipBits(1), c = e.readUnsignedExpGolomb(), f = e.readUnsignedExpGolomb(), h = e.readBits(1), 0 === h && e.skipBits(1), e.skipBits(1), e.readBoolean() && (y = e.readUnsignedExpGolomb(), v = e.readUnsignedExpGolomb(), b = e.readUnsignedExpGolomb(), _ = e.readUnsignedExpGolomb()), e.readBoolean() && e.readBoolean()) {
						switch (e.readUnsignedByte()) {
							case 1:
								g = [1, 1];
								break;
							case 2:
								g = [12, 11];
								break;
							case 3:
								g = [10, 11];
								break;
							case 4:
								g = [16, 11];
								break;
							case 5:
								g = [40, 33];
								break;
							case 6:
								g = [24, 11];
								break;
							case 7:
								g = [20, 11];
								break;
							case 8:
								g = [32, 11];
								break;
							case 9:
								g = [80, 33];
								break;
							case 10:
								g = [18, 11];
								break;
							case 11:
								g = [15, 11];
								break;
							case 12:
								g = [64, 33];
								break;
							case 13:
								g = [160, 99];
								break;
							case 14:
								g = [4, 3];
								break;
							case 15:
								g = [3, 2];
								break;
							case 16:
								g = [2, 1];
								break;
							case 255:
								g = [e.readUnsignedByte() << 8 | e.readUnsignedByte(), e.readUnsignedByte() << 8 | e.readUnsignedByte()]
						}
						g && (T = g[0] / g[1])
					}
					return {
						profileIdc: i,
						levelIdc: r,
						profileCompatibility: n,
						width: Math.ceil((16 * (c + 1) - 2 * y - 2 * v) * T),
						height: (2 - h) * (f + 1) * 16 - 2 * b - 2 * _
					}
				}
			}, r.prototype = new s, e.exports = {
				H264Stream: r,
				NalByteStream: n
			}
		}, {}],
		42: [function(t, e, i) {
			var r = [33, 16, 5, 32, 164, 27],
				n = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
				a = function(t) {
					for (var e = []; t--;) e.push(0);
					return e
				},
				s = {
					96e3: [r, [227, 64], a(154), [56]],
					88200: [r, [231], a(170), [56]],
					64e3: [r, [248, 192], a(240), [56]],
					48e3: [r, [255, 192], a(268), [55, 148, 128], a(54), [112]],
					44100: [r, [255, 192], a(268), [55, 163, 128], a(84), [112]],
					32e3: [r, [255, 192], a(268), [55, 234], a(226), [112]],
					24e3: [r, [255, 192], a(268), [55, 255, 128], a(268), [111, 112], a(126), [224]],
					16e3: [r, [255, 192], a(268), [55, 255, 128], a(268), [111, 255], a(269), [223, 108], a(195), [1, 192]],
					12e3: [n, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 253, 128], a(259), [56]],
					11025: [n, a(268), [3, 127, 248], a(268), [6, 255, 240], a(268), [13, 255, 224], a(268), [27, 255, 192], a(268), [55, 175, 128], a(108), [112]],
					8e3: [n, a(268), [3, 121, 16], a(47), [7]]
				};
			e.exports = function(t) {
				return Object.keys(t).reduce(function(e, i) {
					return e[i] = new Uint8Array(t[i].reduce(function(t, e) {
						return t.concat(e)
					}, [])), e
				}, {})
			}(s)
		}, {}],
		43: [function(t, e, i) {
			"use strict";
			var r = t(62),
				n = function(t) {
					this.numberOfTracks = 0, this.metadataStream = t.metadataStream, this.videoTags = [], this.audioTags = [], this.videoTrack = null, this.audioTrack = null, this.pendingCaptions = [], this.pendingMetadata = [], this.pendingTracks = 0, this.processedTracks = 0, n.prototype.init.call(this), this.push = function(t) {
						return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : ("video" === t.track.type && (this.videoTrack = t.track, this.videoTags = t.tags, this.pendingTracks++), void("audio" === t.track.type && (this.audioTrack = t.track, this.audioTags = t.tags, this.pendingTracks++)))
					}
				};
			n.prototype = new r, n.prototype.flush = function(t) {
				var e, i, r, n, a = {
					tags: {},
					captions: [],
					captionStreams: {},
					metadata: []
				};
				if (this.pendingTracks < this.numberOfTracks) {
					if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
					if (0 === this.pendingTracks && ++this.processedTracks < this.numberOfTracks) return
				}
				if (this.processedTracks += this.pendingTracks, this.pendingTracks = 0, !(this.processedTracks < this.numberOfTracks)) {
					for (this.videoTrack ? n = this.videoTrack.timelineStartInfo.pts : this.audioTrack && (n = this.audioTrack.timelineStartInfo.pts), a.tags.videoTags = this.videoTags, a.tags.audioTags = this.audioTags, r = 0; r < this.pendingCaptions.length; r++) i = this.pendingCaptions[r], i.startTime = i.startPts - n, i.startTime /= 9e4, i.endTime = i.endPts - n, i.endTime /= 9e4, a.captionStreams[i.stream] = !0, a.captions.push(i);
					for (r = 0; r < this.pendingMetadata.length; r++) e = this.pendingMetadata[r], e.cueTime = e.pts - n, e.cueTime /= 9e4, a.metadata.push(e);
					a.metadata.dispatchType = this.metadataStream.dispatchType, this.videoTrack = null, this.audioTrack = null, this.videoTags = [], this.audioTags = [], this.pendingCaptions.length = 0, this.pendingMetadata.length = 0, this.pendingTracks = 0, this.processedTracks = 0, this.trigger("data", a), this.trigger("done")
				}
			}, e.exports = n
		}, {}],
		44: [function(t, e, i) {
			"use strict";
			var r = t(45),
				n = function(t, e, i) {
					var n, a, s, o = new Uint8Array(9),
						u = new DataView(o.buffer);
					return t = t || 0, e = void 0 === e || e, i = void 0 === i || i, u.setUint8(0, 70), u.setUint8(1, 76), u.setUint8(2, 86), u.setUint8(3, 1), u.setUint8(4, (e ? 4 : 0) | (i ? 1 : 0)), u.setUint32(5, o.byteLength), t <= 0 ? (a = new Uint8Array(o.byteLength + 4), a.set(o), a.set([0, 0, 0, 0], o.byteLength), a) : (n = new r(r.METADATA_TAG), n.pts = n.dts = 0, n.writeMetaDataDouble("duration", t), s = n.finalize().length, a = new Uint8Array(o.byteLength + s), a.set(o), a.set(u.byteLength, s), a)
				};
			e.exports = n
		}, {}],
		45: [function(t, e, i) {
			"use strict";
			var r;
			r = function(t, e) {
				var i, n = 0,
					a = 16384,
					s = function(t, e) {
						var i, r = t.position + e;
						r < t.bytes.byteLength || (i = new Uint8Array(2 * r), i.set(t.bytes.subarray(0, t.position), 0), t.bytes = i, t.view = new DataView(t.bytes.buffer))
					},
					o = r.widthBytes || new Uint8Array("width".length),
					u = r.heightBytes || new Uint8Array("height".length),
					d = r.videocodecidBytes || new Uint8Array("videocodecid".length);
				if (!r.widthBytes) {
					for (i = 0; i < "width".length; i++) o[i] = "width".charCodeAt(i);
					for (i = 0; i < "height".length; i++) u[i] = "height".charCodeAt(i);
					for (i = 0; i < "videocodecid".length; i++) d[i] = "videocodecid".charCodeAt(i);
					r.widthBytes = o, r.heightBytes = u, r.videocodecidBytes = d
				}
				switch (this.keyFrame = !1, t) {
					case r.VIDEO_TAG:
						this.length = 16, a *= 6;
						break;
					case r.AUDIO_TAG:
						this.length = 13, this.keyFrame = !0;
						break;
					case r.METADATA_TAG:
						this.length = 29, this.keyFrame = !0;
						break;
					default:
						throw new Error("Unknown FLV tag type")
				}
				this.bytes = new Uint8Array(a), this.view = new DataView(this.bytes.buffer), this.bytes[0] = t, this.position = this.length, this.keyFrame = e, this.pts = 0, this.dts = 0, this.writeBytes = function(t, e, i) {
					var r, n = e || 0;
					i = i || t.byteLength, r = n + i, s(this, i), this.bytes.set(t.subarray(n, r), this.position), this.position += i, this.length = Math.max(this.length, this.position)
				}, this.writeByte = function(t) {
					s(this, 1), this.bytes[this.position] = t, this.position++, this.length = Math.max(this.length, this.position)
				}, this.writeShort = function(t) {
					s(this, 2), this.view.setUint16(this.position, t), this.position += 2, this.length = Math.max(this.length, this.position)
				}, this.negIndex = function(t) {
					return this.bytes[this.length - t]
				}, this.nalUnitSize = function() {
					return 0 === n ? 0 : this.length - (n + 4)
				}, this.startNalUnit = function() {
					if (n > 0) throw new Error("Attempted to create new NAL wihout closing the old one");
					n = this.length, this.length += 4, this.position = this.length
				}, this.endNalUnit = function(t) {
					var e, i;
					this.length === n + 4 ? this.length -= 4 : n > 0 && (e = n + 4, i = this.length - e, this.position = n, this.view.setUint32(this.position, i), this.position = this.length, t && t.push(this.bytes.subarray(e, e + i))), n = 0
				}, this.writeMetaDataDouble = function(t, e) {
					var i;
					if (s(this, 2 + t.length + 9), this.view.setUint16(this.position, t.length), this.position += 2, "width" === t) this.bytes.set(o, this.position), this.position += 5;
					else if ("height" === t) this.bytes.set(u, this.position), this.position += 6;
					else if ("videocodecid" === t) this.bytes.set(d, this.position), this.position += 12;
					else
						for (i = 0; i < t.length; i++) this.bytes[this.position] = t.charCodeAt(i), this.position++;
					this.position++, this.view.setFloat64(this.position, e), this.position += 8, this.length = Math.max(this.length, this.position), ++n
				}, this.writeMetaDataBoolean = function(t, e) {
					var i;
					for (s(this, 2), this.view.setUint16(this.position, t.length), this.position += 2, i = 0; i < t.length; i++) s(this, 1), this.bytes[this.position] = t.charCodeAt(i), this.position++;
					s(this, 2), this.view.setUint8(this.position, 1), this.position++, this.view.setUint8(this.position, e ? 1 : 0), this.position++, this.length = Math.max(this.length, this.position), ++n
				}, this.finalize = function() {
					var t, i;
					switch (this.bytes[0]) {
						case r.VIDEO_TAG:
							this.bytes[11] = 7 | (this.keyFrame || e ? 16 : 32), this.bytes[12] = e ? 0 : 1, t = this.pts - this.dts, this.bytes[13] = (16711680 & t) >>> 16, this.bytes[14] = (65280 & t) >>> 8, this.bytes[15] = (255 & t) >>> 0;
							break;
						case r.AUDIO_TAG:
							this.bytes[11] = 175, this.bytes[12] = e ? 0 : 1;
							break;
						case r.METADATA_TAG:
							this.position = 11, this.view.setUint8(this.position, 2), this.position++, this.view.setUint16(this.position, 10), this.position += 2, this.bytes.set([111, 110, 77, 101, 116, 97, 68, 97, 116, 97], this.position), this.position += 10, this.bytes[this.position] = 8, this.position++, this.view.setUint32(this.position, n), this.position = this.length, this.bytes.set([0, 0, 9], this.position), this.position += 3, this.length = this.position
					}
					return i = this.length - 11, this.bytes[1] = (16711680 & i) >>> 16, this.bytes[2] = (65280 & i) >>> 8, this.bytes[3] = (255 & i) >>> 0, this.bytes[4] = (16711680 & this.dts) >>> 16, this.bytes[5] = (65280 & this.dts) >>> 8, this.bytes[6] = (255 & this.dts) >>> 0, this.bytes[7] = (4278190080 & this.dts) >>> 24, this.bytes[8] = 0, this.bytes[9] = 0, this.bytes[10] = 0, s(this, 4), this.view.setUint32(this.length, this.length), this.length += 4, this.position += 4, this.bytes = this.bytes.subarray(0, this.length), this.frameTime = r.frameTime(this.bytes), this
				}
			}, r.AUDIO_TAG = 8, r.VIDEO_TAG = 9, r.METADATA_TAG = 18, r.isAudioFrame = function(t) {
				return r.AUDIO_TAG === t[0]
			}, r.isVideoFrame = function(t) {
				return r.VIDEO_TAG === t[0]
			}, r.isMetaData = function(t) {
				return r.METADATA_TAG === t[0]
			}, r.isKeyFrame = function(t) {
				return r.isVideoFrame(t) ? 23 === t[11] : !!r.isAudioFrame(t) || !!r.isMetaData(t)
			}, r.frameTime = function(t) {
				var e = t[4] << 16;
				return e |= t[5] << 8, e |= t[6] << 0, e |= t[7] << 24
			}, e.exports = r
		}, {}],
		46: [function(t, e, i) {
			e.exports = {
				tag: t(45),
				Transmuxer: t(48),
				getFlvHeader: t(44)
			}
		}, {}],
		47: [function(t, e, i) {
			"use strict";
			var r = function() {
				var t = this;
				this.list = [], this.push = function(t) {
					this.list.push({
						bytes: t.bytes,
						dts: t.dts,
						pts: t.pts,
						keyFrame: t.keyFrame,
						metaDataTag: t.metaDataTag
					})
				}, Object.defineProperty(this, "length", {
					get: function() {
						return t.list.length
					}
				})
			};
			e.exports = r
		}, {}],
		48: [function(t, e, i) {
			"use strict";
			var r, n, a, s, o, u, d = t(62),
				l = t(45),
				c = t(50),
				f = t(40),
				h = t(41).H264Stream,
				p = t(43),
				g = t(47);
			s = function(t, e) {
				"number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts ? t.timelineStartInfo.pts = e.pts : t.timelineStartInfo.pts = Math.min(t.timelineStartInfo.pts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts ? t.timelineStartInfo.dts = e.dts : t.timelineStartInfo.dts = Math.min(t.timelineStartInfo.dts, e.dts))
			}, o = function(t, e) {
				var i = new l(l.METADATA_TAG);
				return i.dts = e, i.pts = e, i.writeMetaDataDouble("videocodecid", 7), i.writeMetaDataDouble("width", t.width), i.writeMetaDataDouble("height", t.height), i
			}, u = function(t, e) {
				var i, r = new l(l.VIDEO_TAG, !0);
				for (r.dts = e, r.pts = e, r.writeByte(1), r.writeByte(t.profileIdc), r.writeByte(t.profileCompatibility), r.writeByte(t.levelIdc), r.writeByte(255), r.writeByte(225), r.writeShort(t.sps[0].length), r.writeBytes(t.sps[0]), r.writeByte(t.pps.length), i = 0; i < t.pps.length; ++i) r.writeShort(t.pps[i].length), r.writeBytes(t.pps[i]);
				return r
			}, a = function(t) {
				var e, i = [],
					r = [];
				a.prototype.init.call(this), this.push = function(e) {
					s(t, e), t && (t.audioobjecttype = e.audioobjecttype, t.channelcount = e.channelcount, t.samplerate = e.samplerate, t.samplingfrequencyindex = e.samplingfrequencyindex, t.samplesize = e.samplesize, t.extraData = t.audioobjecttype << 11 | t.samplingfrequencyindex << 7 | t.channelcount << 3), e.pts = Math.round(e.pts / 90), e.dts = Math.round(e.dts / 90), i.push(e)
				}, this.flush = function() {
					var n, a, s, o = new g;
					if (0 === i.length) return void this.trigger("done", "AudioSegmentStream");
					for (s = -(1 / 0); i.length;) n = i.shift(), r.length && n.pts >= r[0] && (s = r.shift(), this.writeMetaDataTags(o, s)), (t.extraData !== e || n.pts - s >= 1e3) && (this.writeMetaDataTags(o, n.pts), e = t.extraData, s = n.pts), a = new l(l.AUDIO_TAG), a.pts = n.pts, a.dts = n.dts, a.writeBytes(n.data), o.push(a.finalize());
					r.length = 0, e = null, this.trigger("data", {
						track: t,
						tags: o.list
					}), this.trigger("done", "AudioSegmentStream")
				}, this.writeMetaDataTags = function(e, i) {
					var r;
					r = new l(l.METADATA_TAG), r.pts = i, r.dts = i, r.writeMetaDataDouble("audiocodecid", 10), r.writeMetaDataBoolean("stereo", 2 === t.channelcount), r.writeMetaDataDouble("audiosamplerate", t.samplerate), r.writeMetaDataDouble("audiosamplesize", 16), e.push(r.finalize()), r = new l(l.AUDIO_TAG, !0), r.pts = i, r.dts = i, r.view.setUint16(r.position, t.extraData), r.position += 2, r.length = Math.max(r.length, r.position), e.push(r.finalize())
				}, this.onVideoKeyFrame = function(t) {
					r.push(t)
				}
			}, a.prototype = new d, n = function(t) {
				var e, i, r = [];
				n.prototype.init.call(this), this.finishFrame = function(r, n) {
					if (n) {
						if (e && t && t.newMetadata && (n.keyFrame || 0 === r.length)) {
							var a = o(e, n.dts).finalize(),
								s = u(t, n.dts).finalize();
							a.metaDataTag = s.metaDataTag = !0, r.push(a), r.push(s), t.newMetadata = !1, this.trigger("keyframe", n.dts)
						}
						n.endNalUnit(), r.push(n.finalize()), i = null
					}
				}, this.push = function(e) {
					s(t, e), e.pts = Math.round(e.pts / 90), e.dts = Math.round(e.dts / 90), r.push(e)
				}, this.flush = function() {
					for (var n, a = new g; r.length && "access_unit_delimiter_rbsp" !== r[0].nalUnitType;) r.shift();
					if (0 === r.length) return void this.trigger("done", "VideoSegmentStream");
					for (; r.length;) n = r.shift(), "seq_parameter_set_rbsp" === n.nalUnitType ? (t.newMetadata = !0, e = n.config, t.width = e.width, t.height = e.height, t.sps = [n.data], t.profileIdc = e.profileIdc, t.levelIdc = e.levelIdc, t.profileCompatibility = e.profileCompatibility, i.endNalUnit()) : "pic_parameter_set_rbsp" === n.nalUnitType ? (t.newMetadata = !0, t.pps = [n.data], i.endNalUnit()) : "access_unit_delimiter_rbsp" === n.nalUnitType ? (i && this.finishFrame(a, i), i = new l(l.VIDEO_TAG), i.pts = n.pts, i.dts = n.dts) : ("slice_layer_without_partitioning_rbsp_idr" === n.nalUnitType && (i.keyFrame = !0), i.endNalUnit()), i.startNalUnit(), i.writeBytes(n.data);
					i && this.finishFrame(a, i), this.trigger("data", {
						track: t,
						tags: a.list
					}), this.trigger("done", "VideoSegmentStream");
				}
			}, n.prototype = new d, r = function(t) {
				var e, i, s, o, u, d, l, g, m, y, v, b, _ = this;
				r.prototype.init.call(this), t = t || {}, this.metadataStream = new c.MetadataStream, t.metadataStream = this.metadataStream, e = new c.TransportPacketStream, i = new c.TransportParseStream, s = new c.ElementaryStream, o = new c.TimestampRolloverStream("video"), u = new c.TimestampRolloverStream("audio"), d = new c.TimestampRolloverStream("timed-metadata"), l = new f, g = new h, b = new p(t), e.pipe(i).pipe(s), s.pipe(o).pipe(g), s.pipe(u).pipe(l), s.pipe(d).pipe(this.metadataStream).pipe(b), v = new c.CaptionStream, g.pipe(v).pipe(b), s.on("data", function(t) {
					var e, i, r;
					if ("metadata" === t.type) {
						for (e = t.tracks.length; e--;) "video" === t.tracks[e].type ? i = t.tracks[e] : "audio" === t.tracks[e].type && (r = t.tracks[e]);
						i && !m && (b.numberOfTracks++, m = new n(i), g.pipe(m).pipe(b)), r && !y && (b.numberOfTracks++, y = new a(r), l.pipe(y).pipe(b), m && m.on("keyframe", y.onVideoKeyFrame))
					}
				}), this.push = function(t) {
					e.push(t)
				}, this.flush = function() {
					e.flush()
				}, this.resetCaptions = function() {
					v.reset()
				}, b.on("data", function(t) {
					_.trigger("data", t)
				}), b.on("done", function() {
					_.trigger("done")
				})
			}, r.prototype = new d, e.exports = r
		}, {}],
		49: [function(t, e, i) {
			"use strict";
			var r = t(62),
				n = function(t) {
					for (var e = 0, i = {
							payloadType: -1,
							payloadSize: 0
						}, r = 0, n = 0; e < t.byteLength && 128 !== t[e];) {
						for (; 255 === t[e];) r += 255, e++;
						for (r += t[e++]; 255 === t[e];) n += 255, e++;
						if (n += t[e++], !i.payload && 4 === r) {
							i.payloadType = r, i.payloadSize = n, i.payload = t.subarray(e, e + n);
							break
						}
						e += n, r = 0, n = 0
					}
					return i
				},
				a = function(t) {
					return 181 !== t.payload[0] ? null : 49 != (t.payload[1] << 8 | t.payload[2]) ? null : "GA94" !== String.fromCharCode(t.payload[3], t.payload[4], t.payload[5], t.payload[6]) ? null : 3 !== t.payload[7] ? null : t.payload.subarray(8, t.payload.length - 1)
				},
				s = function(t, e) {
					var i, r, n, a, s = [];
					if (!(64 & e[0])) return s;
					for (r = 31 & e[0], i = 0; i < r; i++) n = 3 * i, a = {
						type: 3 & e[n + 2],
						pts: t
					}, 4 & e[n + 2] && (a.ccData = e[n + 3] << 8 | e[n + 4], s.push(a));
					return s
				},
				o = function() {
					o.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new f(0, 0), new f(0, 1), new f(1, 0), new f(1, 1)], this.reset(), this.ccStreams_.forEach(function(t) {
						t.on("data", this.trigger.bind(this, "data")), t.on("done", this.trigger.bind(this, "done"))
					}, this)
				};
			o.prototype = new r, o.prototype.push = function(t) {
				var e, i;
				if ("sei_rbsp" === t.nalUnitType && (e = n(t.escapedRBSP), 4 === e.payloadType && (i = a(e)))) {
					if (t.dts < this.latestDts_) return void(this.ignoreNextEqualDts_ = !0);
					if (t.dts === this.latestDts_ && this.ignoreNextEqualDts_) return void(this.ignoreNextEqualDts_ = !1);
					this.captionPackets_ = this.captionPackets_.concat(s(t.pts, i)), this.latestDts_ = t.dts
				}
			}, o.prototype.flush = function() {
				return this.captionPackets_.length ? (this.captionPackets_.forEach(function(t, e) {
					t.presortIndex = e
				}), this.captionPackets_.sort(function(t, e) {
					return t.pts === e.pts ? t.presortIndex - e.presortIndex : t.pts - e.pts
				}), this.captionPackets_.forEach(function(t) {
					t.type < 2 && this.dispatchCea608Packet(t)
				}, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function(t) {
					t.flush()
				}, this), void 0) : void this.ccStreams_.forEach(function(t) {
					t.flush()
				}, this)
			}, o.prototype.reset = function() {
				this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(t) {
					t.reset()
				})
			}, o.prototype.dispatchCea608Packet = function(t) {
				this.setsChannel1Active(t) ? this.activeCea608Channel_[t.type] = 0 : this.setsChannel2Active(t) && (this.activeCea608Channel_[t.type] = 1), null !== this.activeCea608Channel_[t.type] && this.ccStreams_[(t.type << 1) + this.activeCea608Channel_[t.type]].push(t)
			}, o.prototype.setsChannel1Active = function(t) {
				return 4096 == (30720 & t.ccData)
			}, o.prototype.setsChannel2Active = function(t) {
				return 6144 == (30720 & t.ccData)
			};
			var u = {
					42: 225,
					92: 233,
					94: 237,
					95: 243,
					96: 250,
					123: 231,
					124: 247,
					125: 209,
					126: 241,
					127: 9608,
					304: 174,
					305: 176,
					306: 189,
					307: 191,
					308: 8482,
					309: 162,
					310: 163,
					311: 9834,
					312: 224,
					313: 160,
					314: 232,
					315: 226,
					316: 234,
					317: 238,
					318: 244,
					319: 251,
					544: 193,
					545: 201,
					546: 211,
					547: 218,
					548: 220,
					549: 252,
					550: 8216,
					551: 161,
					552: 42,
					553: 39,
					554: 8212,
					555: 169,
					556: 8480,
					557: 8226,
					558: 8220,
					559: 8221,
					560: 192,
					561: 194,
					562: 199,
					563: 200,
					564: 202,
					565: 203,
					566: 235,
					567: 206,
					568: 207,
					569: 239,
					570: 212,
					571: 217,
					572: 249,
					573: 219,
					574: 171,
					575: 187,
					800: 195,
					801: 227,
					802: 205,
					803: 204,
					804: 236,
					805: 210,
					806: 242,
					807: 213,
					808: 245,
					809: 123,
					810: 125,
					811: 92,
					812: 94,
					813: 95,
					814: 124,
					815: 126,
					816: 196,
					817: 228,
					818: 214,
					819: 246,
					820: 223,
					821: 165,
					822: 164,
					823: 9474,
					824: 197,
					825: 229,
					826: 216,
					827: 248,
					828: 9484,
					829: 9488,
					830: 9492,
					831: 9496
				},
				d = function(t) {
					return null === t ? "" : (t = u[t] || t, String.fromCharCode(t))
				},
				l = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
				c = function() {
					for (var t = [], e = 15; e--;) t.push("");
					return t
				},
				f = function(t, e) {
					f.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = e || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(t) {
						var e, i, r, n, a;
						if ((e = 32639 & t.ccData) === this.lastControlCode_) return void(this.lastControlCode_ = null);
						if (4096 == (61440 & e) ? this.lastControlCode_ = e : e !== this.PADDING_ && (this.lastControlCode_ = null), r = e >>> 8, n = 255 & e, e !== this.PADDING_)
							if (e === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
							else if (e === this.END_OF_CAPTION_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = t.pts;
						else if (e === this.ROLL_UP_2_ROWS_) this.topRow_ = 13, this.mode_ = "rollUp";
						else if (e === this.ROLL_UP_3_ROWS_) this.topRow_ = 12, this.mode_ = "rollUp";
						else if (e === this.ROLL_UP_4_ROWS_) this.topRow_ = 11, this.mode_ = "rollUp";
						else if (e === this.CARRIAGE_RETURN_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), this.shiftRowsUp_(), this.startPts_ = t.pts;
						else if (e === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[14] = this.nonDisplayed_[14].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1);
						else if (e === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(t.pts), this.displayed_ = c();
						else if (e === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = c();
						else if (e === this.RESUME_DIRECT_CAPTIONING_) this.mode_ = "paintOn";
						else if (this.isSpecialCharacter(r, n)) r = (3 & r) << 8, a = d(r | n), this[this.mode_](t.pts, a), this.column_++;
						else if (this.isExtCharacter(r, n)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1), r = (3 & r) << 8, a = d(r | n), this[this.mode_](t.pts, a), this.column_++;
						else if (this.isMidRowCode(r, n)) this.clearFormatting(t.pts), this[this.mode_](t.pts, " "), this.column_++, 14 == (14 & n) && this.addFormatting(t.pts, ["i"]), 1 == (1 & n) && this.addFormatting(t.pts, ["u"]);
						else if (this.isOffsetControlCode(r, n)) this.column_ += 3 & n;
						else if (this.isPAC(r, n)) {
							var s = l.indexOf(7968 & e);
							s !== this.row_ && (this.clearFormatting(t.pts), this.row_ = s), 1 & n && -1 === this.formatting_.indexOf("u") && this.addFormatting(t.pts, ["u"]), 16 == (16 & e) && (this.column_ = 4 * ((14 & e) >> 1)), this.isColorPAC(n) && 14 == (14 & n) && this.addFormatting(t.pts, ["i"])
						} else this.isNormalChar(r) && (0 === n && (n = null), a = d(r), a += d(n), this[this.mode_](t.pts, a), this.column_ += a.length)
					}
				};
			f.prototype = new r, f.prototype.flushDisplayed = function(t) {
				var e = this.displayed_.map(function(t) {
					return t.trim()
				}).join("\n").replace(/^\n+|\n+$/g, "");
				e.length && this.trigger("data", {
					startPts: this.startPts_,
					endPts: t,
					text: e,
					stream: this.name_
				})
			}, f.prototype.reset = function() {
				this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = c(), this.nonDisplayed_ = c(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.formatting_ = []
			}, f.prototype.setConstants = function() {
				0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
			}, f.prototype.isSpecialCharacter = function(t, e) {
				return t === this.EXT_ && e >= 48 && e <= 63
			}, f.prototype.isExtCharacter = function(t, e) {
				return (t === this.EXT_ + 1 || t === this.EXT_ + 2) && e >= 32 && e <= 63
			}, f.prototype.isMidRowCode = function(t, e) {
				return t === this.EXT_ && e >= 32 && e <= 47
			}, f.prototype.isOffsetControlCode = function(t, e) {
				return t === this.OFFSET_ && e >= 33 && e <= 35
			}, f.prototype.isPAC = function(t, e) {
				return t >= this.BASE_ && t < this.BASE_ + 8 && e >= 64 && e <= 127
			}, f.prototype.isColorPAC = function(t) {
				return t >= 64 && t <= 79 || t >= 96 && t <= 127
			}, f.prototype.isNormalChar = function(t) {
				return t >= 32 && t <= 127
			}, f.prototype.addFormatting = function(t, e) {
				this.formatting_ = this.formatting_.concat(e);
				var i = e.reduce(function(t, e) {
					return t + "<" + e + ">"
				}, "");
				this[this.mode_](t, i)
			}, f.prototype.clearFormatting = function(t) {
				if (this.formatting_.length) {
					var e = this.formatting_.reverse().reduce(function(t, e) {
						return t + "</" + e + ">"
					}, "");
					this.formatting_ = [], this[this.mode_](t, e)
				}
			}, f.prototype.popOn = function(t, e) {
				var i = this.nonDisplayed_[this.row_];
				i += e, this.nonDisplayed_[this.row_] = i
			}, f.prototype.rollUp = function(t, e) {
				var i = this.displayed_[14];
				i += e, this.displayed_[14] = i
			}, f.prototype.shiftRowsUp_ = function() {
				var t;
				for (t = 0; t < this.topRow_; t++) this.displayed_[t] = "";
				for (t = this.topRow_; t < 14; t++) this.displayed_[t] = this.displayed_[t + 1];
				this.displayed_[14] = ""
			}, f.prototype.paintOn = function() {}, e.exports = {
				CaptionStream: o,
				Cea608Stream: f
			}
		}, {}],
		50: [function(t, e, i) {
			"use strict";
			var r, n, a, s = t(62),
				o = t(49),
				u = t(53),
				d = t(54).TimestampRolloverStream,
				l = t(53);
			r = function() {
				var t = new Uint8Array(188),
					e = 0;
				r.prototype.init.call(this), this.push = function(i) {
					var r, n = 0,
						a = 188;
					for (e ? (r = new Uint8Array(i.byteLength + e), r.set(t.subarray(0, e)), r.set(i, e), e = 0) : r = i; a < r.byteLength;) 71 !== r[n] || 71 !== r[a] ? (n++, a++) : (this.trigger("data", r.subarray(n, a)), n += 188, a += 188);
					n < r.byteLength && (t.set(r.subarray(n), 0), e = r.byteLength - n)
				}, this.flush = function() {
					188 === e && 71 === t[0] && (this.trigger("data", t), e = 0), this.trigger("done")
				}
			}, r.prototype = new s, n = function() {
				var t, e, i, r;
				n.prototype.init.call(this), r = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, t = function(t, r) {
					var n = 0;
					r.payloadUnitStartIndicator && (n += t[n] + 1), "pat" === r.type ? e(t.subarray(n), r) : i(t.subarray(n), r)
				}, e = function(t, e) {
					e.section_number = t[7], e.last_section_number = t[8], r.pmtPid = (31 & t[10]) << 8 | t[11], e.pmtPid = r.pmtPid
				}, i = function(t, e) {
					var i, n, a, s;
					if (1 & t[5]) {
						for (r.programMapTable = {
								video: null,
								audio: null,
								"timed-metadata": {}
							}, i = (15 & t[1]) << 8 | t[2], n = 3 + i - 4, a = (15 & t[10]) << 8 | t[11], s = 12 + a; s < n;) {
							var o = t[s],
								d = (31 & t[s + 1]) << 8 | t[s + 2];
							o === u.H264_STREAM_TYPE && null === r.programMapTable.video ? r.programMapTable.video = d : o === u.ADTS_STREAM_TYPE && null === r.programMapTable.audio ? r.programMapTable.audio = d : o === u.METADATA_STREAM_TYPE && (r.programMapTable["timed-metadata"][d] = o), s += 5 + ((15 & t[s + 3]) << 8 | t[s + 4])
						}
						e.programMapTable = r.programMapTable
					}
				}, this.push = function(e) {
					var i = {},
						r = 4;
					if (i.payloadUnitStartIndicator = !!(64 & e[1]), i.pid = 31 & e[1], i.pid <<= 8, i.pid |= e[2], (48 & e[3]) >>> 4 > 1 && (r += e[r] + 1), 0 === i.pid) i.type = "pat", t(e.subarray(r), i), this.trigger("data", i);
					else if (i.pid === this.pmtPid)
						for (i.type = "pmt", t(e.subarray(r), i), this.trigger("data", i); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
					else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, r, i]) : this.processPes_(e, r, i)
				}, this.processPes_ = function(t, e, i) {
					i.pid === this.programMapTable.video ? i.streamType = u.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = u.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = t.subarray(e), this.trigger("data", i)
				}
			}, n.prototype = new s, n.STREAM_TYPES = {
				h264: 27,
				adts: 15
			}, a = function() {
				var t = this,
					e = {
						data: [],
						size: 0
					},
					i = {
						data: [],
						size: 0
					},
					r = {
						data: [],
						size: 0
					},
					n = function(t, e) {
						var i;
						e.packetLength = 6 + (t[4] << 8 | t[5]), e.dataAlignmentIndicator = 0 != (4 & t[6]), i = t[7], 192 & i && (e.pts = (14 & t[9]) << 27 | (255 & t[10]) << 20 | (254 & t[11]) << 12 | (255 & t[12]) << 5 | (254 & t[13]) >>> 3, e.pts *= 4, e.pts += (6 & t[13]) >>> 1, e.dts = e.pts, 64 & i && (e.dts = (14 & t[14]) << 27 | (255 & t[15]) << 20 | (254 & t[16]) << 12 | (255 & t[17]) << 5 | (254 & t[18]) >>> 3, e.dts *= 4, e.dts += (6 & t[18]) >>> 1)), e.data = t.subarray(9 + t[8])
					},
					s = function(e, i, r) {
						var a, s = new Uint8Array(e.size),
							o = {
								type: i
							},
							u = 0,
							d = 0,
							l = !1;
						if (e.data.length && !(e.size < 9)) {
							for (o.trackId = e.data[0].pid, u = 0; u < e.data.length; u++) a = e.data[u], s.set(a.data, d), d += a.data.byteLength;
							n(s, o), l = "video" === i || o.packetLength <= e.size, (r || l) && (e.size = 0, e.data.length = 0), l && t.trigger("data", o)
						}
					};
				a.prototype.init.call(this), this.push = function(n) {
					({
						pat: function() {},
						pes: function() {
							var t, a;
							switch (n.streamType) {
								case u.H264_STREAM_TYPE:
								case l.H264_STREAM_TYPE:
									t = e, a = "video";
									break;
								case u.ADTS_STREAM_TYPE:
									t = i, a = "audio";
									break;
								case u.METADATA_STREAM_TYPE:
									t = r, a = "timed-metadata";
									break;
								default:
									return
							}
							n.payloadUnitStartIndicator && s(t, a, !0), t.data.push(n), t.size += n.data.byteLength
						},
						pmt: function() {
							var e = {
									type: "metadata",
									tracks: []
								},
								i = n.programMapTable;
							null !== i.video && e.tracks.push({
								timelineStartInfo: {
									baseMediaDecodeTime: 0
								},
								id: +i.video,
								codec: "avc",
								type: "video"
							}), null !== i.audio && e.tracks.push({
								timelineStartInfo: {
									baseMediaDecodeTime: 0
								},
								id: +i.audio,
								codec: "adts",
								type: "audio"
							}), t.trigger("data", e)
						}
					})[n.type]()
				}, this.flush = function() {
					s(e, "video"), s(i, "audio"), s(r, "timed-metadata"), this.trigger("done")
				}
			}, a.prototype = new s;
			var c = {
				PAT_PID: 0,
				MP2T_PACKET_LENGTH: 188,
				TransportPacketStream: r,
				TransportParseStream: n,
				ElementaryStream: a,
				TimestampRolloverStream: d,
				CaptionStream: o.CaptionStream,
				Cea608Stream: o.Cea608Stream,
				MetadataStream: t(51)
			};
			for (var f in u) u.hasOwnProperty(f) && (c[f] = u[f]);
			e.exports = c
		}, {}],
		51: [function(t, e, i) {
			"use strict";
			var r, n = t(62),
				a = t(53),
				s = function(t, e, i) {
					var r, n = "";
					for (r = e; r < i; r++) n += "%" + ("00" + t[r].toString(16)).slice(-2);
					return n
				},
				o = function(t, e, i) {
					return decodeURIComponent(s(t, e, i))
				},
				u = function(t, e, i) {
					return unescape(s(t, e, i))
				},
				d = function(t) {
					return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
				},
				l = {
					TXXX: function(t) {
						var e;
						if (3 === t.data[0]) {
							for (e = 1; e < t.data.length; e++)
								if (0 === t.data[e]) {
									t.description = o(t.data, 1, e), t.value = o(t.data, e + 1, t.data.length).replace(/\0*$/, "");
									break
								}
							t.data = t.value
						}
					},
					WXXX: function(t) {
						var e;
						if (3 === t.data[0])
							for (e = 1; e < t.data.length; e++)
								if (0 === t.data[e]) {
									t.description = o(t.data, 1, e), t.url = o(t.data, e + 1, t.data.length);
									break
								}
					},
					PRIV: function(t) {
						var e;
						for (e = 0; e < t.data.length; e++)
							if (0 === t.data[e]) {
								t.owner = u(t.data, 0, e);
								break
							}
						t.privateData = t.data.subarray(e + 1), t.data = t.privateData
					}
				};
			r = function(t) {
				var e, i = {
						debug: !(!t || !t.debug),
						descriptor: t && t.descriptor
					},
					n = 0,
					s = [],
					o = 0;
				if (r.prototype.init.call(this), this.dispatchType = a.METADATA_STREAM_TYPE.toString(16), i.descriptor)
					for (e = 0; e < i.descriptor.length; e++) this.dispatchType += ("00" + i.descriptor[e].toString(16)).slice(-2);
				this.push = function(t) {
					var e, r, a, u, c, f;
					if ("timed-metadata" === t.type) {
						if (t.dataAlignmentIndicator && (o = 0, s.length = 0), 0 === s.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0))) return void(i.debug && console.log("Skipping unrecognized metadata packet"));
						if (s.push(t), o += t.data.byteLength, 1 === s.length && (n = d(t.data.subarray(6, 10)), n += 10), !(o < n)) {
							for (e = {
									data: new Uint8Array(n),
									frames: [],
									pts: s[0].pts,
									dts: s[0].dts
								}, c = 0; c < n;) e.data.set(s[0].data.subarray(0, n - c), c), c += s[0].data.byteLength, o -= s[0].data.byteLength, s.shift();
							r = 10, 64 & e.data[5] && (r += 4, r += d(e.data.subarray(10, 14)), n -= d(e.data.subarray(16, 20)));
							do {
								if ((a = d(e.data.subarray(r + 4, r + 8))) < 1) return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
								if (f = String.fromCharCode(e.data[r], e.data[r + 1], e.data[r + 2], e.data[r + 3]), u = {
										id: f,
										data: e.data.subarray(r + 10, r + a + 10)
									}, u.key = u.id, l[u.id] && (l[u.id](u), "com.apple.streaming.transportStreamTimestamp" === u.owner)) {
									var h = u.data,
										p = (1 & h[3]) << 30 | h[4] << 22 | h[5] << 14 | h[6] << 6 | h[7] >>> 2;
									p *= 4, p += 3 & h[7], u.timeStamp = p, void 0 === e.pts && void 0 === e.dts && (e.pts = u.timeStamp, e.dts = u.timeStamp), this.trigger("timestamp", u)
								}
								e.frames.push(u), r += 10, r += a
							} while (r < n);
							this.trigger("data", e)
						}
					}
				}
			}, r.prototype = new n, e.exports = r
		}, {}],
		52: [function(t, e, i) {
			"use strict";
			var r = t(53),
				n = function(t) {
					var e = 31 & t[1];
					return e <<= 8, e |= t[2]
				},
				a = function(t) {
					return !!(64 & t[1])
				},
				s = function(t) {
					var e = 0;
					return (48 & t[3]) >>> 4 > 1 && (e += t[4] + 1), e
				},
				o = function(t, e) {
					var i = n(t);
					return 0 === i ? "pat" : i === e ? "pmt" : e ? "pes" : null
				},
				u = function(t) {
					var e = a(t),
						i = 4 + s(t);
					return e && (i += t[i] + 1), (31 & t[i + 10]) << 8 | t[i + 11]
				},
				d = function(t) {
					var e = {},
						i = a(t),
						r = 4 + s(t);
					if (i && (r += t[r] + 1), 1 & t[r + 5]) {
						var n, o, u;
						n = (15 & t[r + 1]) << 8 | t[r + 2], o = 3 + n - 4, u = (15 & t[r + 10]) << 8 | t[r + 11];
						for (var d = 12 + u; d < o;) {
							var l = r + d;
							e[(31 & t[l + 1]) << 8 | t[l + 2]] = t[l], d += 5 + ((15 & t[l + 3]) << 8 | t[l + 4])
						}
						return e
					}
				},
				l = function(t, e) {
					switch (e[n(t)]) {
						case r.H264_STREAM_TYPE:
							return "video";
						case r.ADTS_STREAM_TYPE:
							return "audio";
						case r.METADATA_STREAM_TYPE:
							return "timed-metadata";
						default:
							return null
					}
				},
				c = function(t) {
					if (!a(t)) return null;
					var e = 4 + s(t);
					if (e >= t.byteLength) return null;
					var i, r = null;
					return i = t[e + 7], 192 & i && (r = {}, r.pts = (14 & t[e + 9]) << 27 | (255 & t[e + 10]) << 20 | (254 & t[e + 11]) << 12 | (255 & t[e + 12]) << 5 | (254 & t[e + 13]) >>> 3, r.pts *= 4, r.pts += (6 & t[e + 13]) >>> 1, r.dts = r.pts, 64 & i && (r.dts = (14 & t[e + 14]) << 27 | (255 & t[e + 15]) << 20 | (254 & t[e + 16]) << 12 | (255 & t[e + 17]) << 5 | (254 & t[e + 18]) >>> 3, r.dts *= 4, r.dts += (6 & t[e + 18]) >>> 1)), r
				},
				f = function(t) {
					switch (t) {
						case 5:
							return "slice_layer_without_partitioning_rbsp_idr";
						case 6:
							return "sei_rbsp";
						case 7:
							return "seq_parameter_set_rbsp";
						case 8:
							return "pic_parameter_set_rbsp";
						case 9:
							return "access_unit_delimiter_rbsp";
						default:
							return null
					}
				},
				h = function(t) {
					for (var e, i = 4 + s(t), r = t.subarray(i), n = 0, a = 0, o = !1; a < r.byteLength - 3; a++)
						if (1 === r[a + 2]) {
							n = a + 5;
							break
						}
					for (; n < r.byteLength;) switch (r[n]) {
						case 0:
							if (0 !== r[n - 1]) {
								n += 2;
								break
							}
							if (0 !== r[n - 2]) {
								n++;
								break
							}
							a + 3 !== n - 2 && "slice_layer_without_partitioning_rbsp_idr" === (e = f(31 & r[a + 3])) && (o = !0);
							do n++; while (1 !== r[n] && n < r.length);
							a = n - 2, n += 3;
							break;
						case 1:
							if (0 !== r[n - 1] || 0 !== r[n - 2]) {
								n += 3;
								break
							}
							e = f(31 & r[a + 3]), "slice_layer_without_partitioning_rbsp_idr" === e && (o = !0), a = n - 2, n += 3;
							break;
						default:
							n += 3
					}
					return r = r.subarray(a), n -= a, a = 0, r && r.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === (e = f(31 & r[a + 3])) && (o = !0), o
				};
			e.exports = {
				parseType: o,
				parsePat: u,
				parsePmt: d,
				parsePayloadUnitStartIndicator: a,
				parsePesType: l,
				parsePesTime: c,
				videoPacketContainsKeyFrame: h
			}
		}, {}],
		53: [function(t, e, i) {
			"use strict";
			e.exports = {
				H264_STREAM_TYPE: 27,
				ADTS_STREAM_TYPE: 15,
				METADATA_STREAM_TYPE: 21
			}
		}, {}],
		54: [function(t, e, i) {
			"use strict";
			var r = t(62),
				n = function(t, e) {
					var i = 1;
					for (t > e && (i = -1); Math.abs(e - t) > 4294967296;) t += 8589934592 * i;
					return t
				},
				a = function(t) {
					var e, i;
					a.prototype.init.call(this), this.type_ = t, this.push = function(t) {
						t.type === this.type_ && (void 0 === i && (i = t.dts), t.dts = n(t.dts, i), t.pts = n(t.pts, i), e = t.dts, this.trigger("data", t))
					}, this.flush = function() {
						i = e, this.trigger("done")
					}, this.discontinuity = function() {
						i = void 0, e = void 0
					}
				};
			a.prototype = new r, e.exports = {
				TimestampRolloverStream: a,
				handleRollover: n
			}
		}, {}],
		55: [function(t, e, i) {
			e.exports = {
				generator: t(56),
				Transmuxer: t(58).Transmuxer,
				AudioSegmentStream: t(58).AudioSegmentStream,
				VideoSegmentStream: t(58).VideoSegmentStream
			}
		}, {}],
		56: [function(t, e, i) {
			"use strict";
			var r, n, a, s, o, u, d, l, c, f, h, p, g, m, y, v, b, _, T, S, E, w, A, R, L, k, O, D, I, C, P, x, M, U, N, F, B = Math.pow(2, 32) - 1;
			! function() {
				var t;
				if (A = {
						avc1: [],
						avcC: [],
						btrt: [],
						dinf: [],
						dref: [],
						esds: [],
						ftyp: [],
						hdlr: [],
						mdat: [],
						mdhd: [],
						mdia: [],
						mfhd: [],
						minf: [],
						moof: [],
						moov: [],
						mp4a: [],
						mvex: [],
						mvhd: [],
						sdtp: [],
						smhd: [],
						stbl: [],
						stco: [],
						stsc: [],
						stsd: [],
						stsz: [],
						stts: [],
						styp: [],
						tfdt: [],
						tfhd: [],
						traf: [],
						trak: [],
						trun: [],
						trex: [],
						tkhd: [],
						vmhd: []
					}, "undefined" != typeof Uint8Array) {
					for (t in A) A.hasOwnProperty(t) && (A[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
					R = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), k = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), L = new Uint8Array([0, 0, 0, 1]), O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), I = {
						video: O,
						audio: D
					}, x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), U = M, N = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), F = M, C = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
				}
			}(), r = function(t) {
					var e, i, r, n = [],
						a = 0;
					for (e = 1; e < arguments.length; e++) n.push(arguments[e]);
					for (e = n.length; e--;) a += n[e].byteLength;
					for (i = new Uint8Array(a + 8), r = new DataView(i.buffer, i.byteOffset, i.byteLength), r.setUint32(0, i.byteLength), i.set(t, 4), e = 0, a = 8; e < n.length; e++) i.set(n[e], a), a += n[e].byteLength;
					return i
				}, n = function() {
					return r(A.dinf, r(A.dref, x))
				}, a = function(t) {
					return r(A.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
				}, s = function() {
					return r(A.ftyp, R, L, R, k)
				}, v = function(t) {
					return r(A.hdlr, I[t])
				}, o = function(t) {
					return r(A.mdat, t)
				}, y = function(t) {
					var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
					return t.samplerate && (e[12] = t.samplerate >>> 24 & 255, e[13] = t.samplerate >>> 16 & 255, e[14] = t.samplerate >>> 8 & 255, e[15] = 255 & t.samplerate), r(A.mdhd, e)
				}, m = function(t) {
					return r(A.mdia, y(t), v(t.type), d(t))
				}, u = function(t) {
					return r(A.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
				}, d = function(t) {
					return r(A.minf, "video" === t.type ? r(A.vmhd, C) : r(A.smhd, P), n(), _(t))
				}, l = function(t, e) {
					for (var i = [], n = e.length; n--;) i[n] = S(e[n]);
					return r.apply(null, [A.moof, u(t)].concat(i))
				}, c = function(t) {
					for (var e = t.length, i = []; e--;) i[e] = p(t[e]);
					return r.apply(null, [A.moov, h(4294967295)].concat(i).concat(f(t)))
				}, f = function(t) {
					for (var e = t.length, i = []; e--;) i[e] = E(t[e]);
					return r.apply(null, [A.mvex].concat(i))
				}, h = function(t) {
					var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
					return r(A.mvhd, e)
				}, b = function(t) {
					var e, i, n = t.samples || [],
						a = new Uint8Array(4 + n.length);
					for (i = 0; i < n.length; i++) e = n[i].flags, a[i + 4] = e.dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
					return r(A.sdtp, a)
				}, _ = function(t) {
					return r(A.stbl, T(t), r(A.stts, F), r(A.stsc, U), r(A.stsz, N), r(A.stco, M))
				},
				function() {
					var t, e;
					T = function(i) {
						return r(A.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === i.type ? t(i) : e(i))
					}, t = function(t) {
						var e, i = t.sps || [],
							n = t.pps || [],
							a = [],
							s = [];
						for (e = 0; e < i.length; e++) a.push((65280 & i[e].byteLength) >>> 8), a.push(255 & i[e].byteLength), a = a.concat(Array.prototype.slice.call(i[e]));
						for (e = 0; e < n.length; e++) s.push((65280 & n[e].byteLength) >>> 8), s.push(255 & n[e].byteLength), s = s.concat(Array.prototype.slice.call(n[e]));
						return r(A.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), r(A.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([i.length]).concat(a).concat([n.length]).concat(s))), r(A.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
					}, e = function(t) {
						return r(A.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), a(t))
					}
				}(), g = function(t) {
					var e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
					return r(A.tkhd, e)
				}, S = function(t) {
					var e, i, n, a, s, o, u;
					return e = r(A.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), o = Math.floor(t.baseMediaDecodeTime / (B + 1)), u = Math.floor(t.baseMediaDecodeTime % (B + 1)), i = r(A.tfdt, new Uint8Array([1, 0, 0, 0, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u])), s = 92, "audio" === t.type ? (n = w(t, s), r(A.traf, e, i, n)) : (a = b(t), n = w(t, a.length + s), r(A.traf, e, i, n, a))
				}, p = function(t) {
					return t.duration = t.duration || 4294967295, r(A.trak, g(t), m(t))
				}, E = function(t) {
					var e = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
					return "video" !== t.type && (e[e.length - 1] = 0), r(A.trex, e)
				},
				function() {
					var t, e, i;
					i = function(t, e) {
						var i = 0,
							r = 0,
							n = 0,
							a = 0;
						return t.length && (void 0 !== t[0].duration && (i = 1), void 0 !== t[0].size && (r = 2), void 0 !== t[0].flags && (n = 4), void 0 !== t[0].compositionTimeOffset && (a = 8)), [0, 0, i | r | n | a, 1, (4278190080 & t.length) >>> 24, (16711680 & t.length) >>> 16, (65280 & t.length) >>> 8, 255 & t.length, (4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e]
					}, e = function(t, e) {
						var n, a, s, o;
						for (a = t.samples || [], e += 20 + 16 * a.length, n = i(a, e), o = 0; o < a.length; o++) s = a[o], n = n.concat([(4278190080 & s.duration) >>> 24, (16711680 & s.duration) >>> 16, (65280 & s.duration) >>> 8, 255 & s.duration, (4278190080 & s.size) >>> 24, (16711680 & s.size) >>> 16, (65280 & s.size) >>> 8, 255 & s.size, s.flags.isLeading << 2 | s.flags.dependsOn, s.flags.isDependedOn << 6 | s.flags.hasRedundancy << 4 | s.flags.paddingValue << 1 | s.flags.isNonSyncSample, 61440 & s.flags.degradationPriority, 15 & s.flags.degradationPriority, (4278190080 & s.compositionTimeOffset) >>> 24, (16711680 & s.compositionTimeOffset) >>> 16, (65280 & s.compositionTimeOffset) >>> 8, 255 & s.compositionTimeOffset]);
						return r(A.trun, new Uint8Array(n))
					}, t = function(t, e) {
						var n, a, s, o;
						for (a = t.samples || [], e += 20 + 8 * a.length, n = i(a, e), o = 0; o < a.length; o++) s = a[o], n = n.concat([(4278190080 & s.duration) >>> 24, (16711680 & s.duration) >>> 16, (65280 & s.duration) >>> 8, 255 & s.duration, (4278190080 & s.size) >>> 24, (16711680 & s.size) >>> 16, (65280 & s.size) >>> 8, 255 & s.size]);
						return r(A.trun, new Uint8Array(n))
					}, w = function(i, r) {
						return "audio" === i.type ? t(i, r) : e(i, r)
					}
				}(), e.exports = {
					ftyp: s,
					mdat: o,
					moof: l,
					moov: c,
					initSegment: function(t) {
						var e, i = s(),
							r = c(t);
						return e = new Uint8Array(i.byteLength + r.byteLength), e.set(i), e.set(r, i.byteLength), e
					}
				}
		}, {}],
		57: [function(t, e, i) {
			"use strict";
			var r, n, a, s;
			r = function(t, e) {
				var i, a, s, o, u, d = [];
				if (!e.length) return null;
				for (i = 0; i < t.byteLength;) a = t[i] << 24, a |= t[i + 1] << 16, a |= t[i + 2] << 8, a |= t[i + 3], s = n(t.subarray(i + 4, i + 8)), o = a > 1 ? i + a : t.byteLength, s === e[0] && (1 === e.length ? d.push(t.subarray(i + 8, o)) : (u = r(t.subarray(i + 8, o), e.slice(1)), u.length && (d = d.concat(u)))), i = o;
				return d
			}, n = function(t) {
				var e = "";
				return e += String.fromCharCode(t[0]), e += String.fromCharCode(t[1]), e += String.fromCharCode(t[2]), e += String.fromCharCode(t[3])
			}, a = function(t) {
				var e = {};
				return r(t, ["moov", "trak"]).reduce(function(t, e) {
					var i, n, a, s, o;
					return (i = r(e, ["tkhd"])[0]) ? (n = i[0], a = 0 === n ? 12 : 20, s = i[a] << 24 | i[a + 1] << 16 | i[a + 2] << 8 | i[a + 3], (o = r(e, ["mdia", "mdhd"])[0]) ? (n = o[0], a = 0 === n ? 12 : 20, t[s] = o[a] << 24 | o[a + 1] << 16 | o[a + 2] << 8 | o[a + 3], t) : null) : null
				}, e)
			}, s = function(t, e) {
				var i, n, a;
				return i = r(e, ["moof", "traf"]), n = [].concat.apply([], i.map(function(e) {
					return r(e, ["tfhd"]).map(function(i) {
						var n, a, s;
						return n = i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7], a = t[n] || 9e4, s = r(e, ["tfdt"]).map(function(t) {
							var e, i;
							return e = t[0], i = t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], 1 === e && (i *= Math.pow(2, 32), i += t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11]), i
						})[0], (s = s || 1 / 0) / a
					})
				})), a = Math.min.apply(null, n), isFinite(a) ? a : 0
			}, e.exports = {
				parseType: n,
				timescale: a,
				startTime: s
			}
		}, {}],
		58: [function(t, e, i) {
			"use strict";
			var r, n, a, s, o, u, d, l, c, f, h, p = t(62),
				g = t(56),
				m = t(50),
				y = t(40),
				v = t(41).H264Stream,
				b = t(38),
				_ = t(42),
				T = t(60),
				S = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
				E = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
			o = function() {
				return {
					size: 0,
					flags: {
						isLeading: 0,
						dependsOn: 1,
						isDependedOn: 0,
						hasRedundancy: 0,
						degradationPriority: 0
					}
				}
			}, u = function(t) {
				return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
			}, f = function(t, e) {
				var i;
				if (t.length !== e.length) return !1;
				for (i = 0; i < t.length; i++)
					if (t[i] !== e[i]) return !1;
				return !0
			}, h = function(t) {
				var e, i, r = 0;
				for (e = 0; e < t.length; e++) i = t[e], r += i.data.byteLength;
				return r
			}, n = function(t) {
				var e = [],
					i = 0,
					r = 0,
					a = 0,
					s = 1 / 0;
				n.prototype.init.call(this), this.push = function(i) {
					d(t, i), t && S.forEach(function(e) {
						t[e] = i[e]
					}), e.push(i)
				}, this.setEarliestDts = function(e) {
					r = e - t.timelineStartInfo.baseMediaDecodeTime
				}, this.setVideoBaseMediaDecodeTime = function(t) {
					s = t
				}, this.setAudioAppendStart = function(t) {
					a = t
				}, this.flush = function() {
					var r, n, a, s;
					return 0 === e.length ? void this.trigger("done", "AudioSegmentStream") : (r = this.trimAdtsFramesByEarliestDts_(e), t.baseMediaDecodeTime = c(t), this.prefixWithSilence_(t, r), t.samples = this.generateSampleTable_(r), a = g.mdat(this.concatenateFrameData_(r)), e = [], n = g.moof(i, [t]), s = new Uint8Array(n.byteLength + a.byteLength), i++, s.set(n), s.set(a, n.byteLength), l(t), this.trigger("data", {
						track: t,
						boxes: s
					}), this.trigger("done", "AudioSegmentStream"), void 0)
				}, this.prefixWithSilence_ = function(t, e) {
					var i, r, n, o = 0,
						u = 0,
						d = 0,
						l = 0;
					if (e.length && (i = T.audioTsToVideoTs(t.baseMediaDecodeTime, t.samplerate), o = Math.ceil(9e4 / (t.samplerate / 1024)), a && s && (u = i - Math.max(a, s), d = Math.floor(u / o), l = d * o), !(d < 1 || l > 45e3))) {
						for (r = _[t.samplerate], r || (r = e[0].data), n = 0; n < d; n++) e.splice(n, 0, {
							data: r
						});
						t.baseMediaDecodeTime -= Math.floor(T.videoTsToAudioTs(l, t.samplerate))
					}
				}, this.trimAdtsFramesByEarliestDts_ = function(e) {
					return t.minSegmentDts >= r ? e : (t.minSegmentDts = 1 / 0, e.filter(function(e) {
						return e.dts >= r && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
					}))
				}, this.generateSampleTable_ = function(t) {
					var e, i, r = [];
					for (e = 0; e < t.length; e++) i = t[e], r.push({
						size: i.data.byteLength,
						duration: 1024
					});
					return r
				}, this.concatenateFrameData_ = function(t) {
					var e, i, r = 0,
						n = new Uint8Array(h(t));
					for (e = 0; e < t.length; e++) i = t[e], n.set(i.data, r), r += i.data.byteLength;
					return n
				}
			}, n.prototype = new p, r = function(t, e) {
				var i, n, a = 0,
					s = [],
					u = [];
				e = e || {}, r.prototype.init.call(this), delete t.minPTS, this.gopCache_ = [], this.push = function(e) {
					d(t, e), "seq_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.config, t.sps = [e.data], E.forEach(function(e) {
						t[e] = i[e]
					}, this)), "pic_parameter_set_rbsp" !== e.nalUnitType || n || (n = e.data, t.pps = [e.data]), s.push(e)
				}, this.flush = function() {
					for (var i, r, n, o, f, h; s.length && "access_unit_delimiter_rbsp" !== s[0].nalUnitType;) s.shift();
					if (0 === s.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
					if (i = this.groupNalsIntoFrames_(s), n = this.groupFramesIntoGops_(i), n[0][0].keyFrame || (r = this.getGopForFusion_(s[0], t), r ? (n.unshift(r), n.byteLength += r.byteLength, n.nalCount += r.nalCount, n.pts = r.pts, n.dts = r.dts, n.duration += r.duration) : n = this.extendFirstKeyFrame_(n)), u.length) {
						var p;
						if (!(p = e.alignGopsAtEnd ? this.alignGopsAtEnd_(n) : this.alignGopsAtStart_(n))) return this.gopCache_.unshift({
							gop: n.pop(),
							pps: t.pps,
							sps: t.sps
						}), this.gopCache_.length = Math.min(6, this.gopCache_.length), s = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
						l(t), n = p
					}
					d(t, n), t.samples = this.generateSampleTable_(n), f = g.mdat(this.concatenateNalData_(n)), t.baseMediaDecodeTime = c(t), this.trigger("processedGopsInfo", n.map(function(t) {
						return {
							pts: t.pts,
							dts: t.dts,
							byteLength: t.byteLength
						}
					})), this.gopCache_.unshift({
						gop: n.pop(),
						pps: t.pps,
						sps: t.sps
					}), this.gopCache_.length = Math.min(6, this.gopCache_.length), s = [], this.trigger("baseMediaDecodeTime", t.baseMediaDecodeTime), this.trigger("timelineStartInfo", t.timelineStartInfo), o = g.moof(a, [t]), h = new Uint8Array(o.byteLength + f.byteLength), a++, h.set(o), h.set(f, o.byteLength), this.trigger("data", {
						track: t,
						boxes: h
					}), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
				}, this.resetStream_ = function() {
					l(t), i = void 0, n = void 0
				}, this.getGopForFusion_ = function(e) {
					var i, r, n, a, s, o = 1 / 0;
					for (s = 0; s < this.gopCache_.length; s++) a = this.gopCache_[s], n = a.gop, t.pps && f(t.pps[0], a.pps[0]) && t.sps && f(t.sps[0], a.sps[0]) && (n.dts < t.timelineStartInfo.dts || (i = e.dts - n.dts - n.duration) >= -1e4 && i <= 45e3 && (!r || o > i) && (r = a, o = i));
					return r ? r.gop : null
				}, this.extendFirstKeyFrame_ = function(t) {
					var e;
					return !t[0][0].keyFrame && t.length > 1 && (e = t.shift(), t.byteLength -= e.byteLength, t.nalCount -= e.nalCount, t[0][0].dts = e.dts, t[0][0].pts = e.pts, t[0][0].duration += e.duration), t
				}, this.groupNalsIntoFrames_ = function(t) {
					var e, i, r = [],
						n = [];
					for (r.byteLength = 0, e = 0; e < t.length; e++) i = t[e], "access_unit_delimiter_rbsp" === i.nalUnitType ? (r.length && (r.duration = i.dts - r.dts, n.push(r)), r = [i], r.byteLength = i.data.byteLength, r.pts = i.pts, r.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (r.keyFrame = !0), r.duration = i.dts - r.dts, r.byteLength += i.data.byteLength, r.push(i));
					return n.length && (!r.duration || r.duration <= 0) && (r.duration = n[n.length - 1].duration), n.push(r), n
				}, this.groupFramesIntoGops_ = function(t) {
					var e, i, r = [],
						n = [];
					for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = t[0].pts, r.dts = t[0].dts, n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = t[0].pts, n.dts = t[0].dts, e = 0; e < t.length; e++) i = t[e], i.keyFrame ? (r.length && (n.push(r), n.byteLength += r.byteLength, n.nalCount += r.nalCount, n.duration += r.duration), r = [i], r.nalCount = i.length, r.byteLength = i.byteLength, r.pts = i.pts, r.dts = i.dts, r.duration = i.duration) : (r.duration += i.duration, r.nalCount += i.length, r.byteLength += i.byteLength, r.push(i));
					return n.length && r.duration <= 0 && (r.duration = n[n.length - 1].duration), n.byteLength += r.byteLength, n.nalCount += r.nalCount, n.duration += r.duration, n.push(r), n
				}, this.generateSampleTable_ = function(t, e) {
					var i, r, n, a, s, u = e || 0,
						d = [];
					for (i = 0; i < t.length; i++)
						for (a = t[i], r = 0; r < a.length; r++) s = a[r], n = o(), n.dataOffset = u, n.compositionTimeOffset = s.pts - s.dts, n.duration = s.duration, n.size = 4 * s.length, n.size += s.byteLength, s.keyFrame && (n.flags.dependsOn = 2), u += n.size, d.push(n);
					return d
				}, this.concatenateNalData_ = function(t) {
					var e, i, r, n, a, s, o = 0,
						u = t.byteLength,
						d = t.nalCount,
						l = u + 4 * d,
						c = new Uint8Array(l),
						f = new DataView(c.buffer);
					for (e = 0; e < t.length; e++)
						for (n = t[e], i = 0; i < n.length; i++)
							for (a = n[i], r = 0; r < a.length; r++) s = a[r], f.setUint32(o, s.data.byteLength), o += 4, c.set(s.data, o), o += s.data.byteLength;
					return c
				}, this.alignGopsAtStart_ = function(t) {
					var e, i, r, n, a, s, o, d;
					for (a = t.byteLength, s = t.nalCount, o = t.duration, e = i = 0; e < u.length && i < t.length && (r = u[e], n = t[i], r.pts !== n.pts);) n.pts > r.pts ? e++ : (i++, a -= n.byteLength, s -= n.nalCount, o -= n.duration);
					return 0 === i ? t : i === t.length ? null : (d = t.slice(i), d.byteLength = a, d.duration = o, d.nalCount = s, d.pts = d[0].pts, d.dts = d[0].dts, d)
				}, this.alignGopsAtEnd_ = function(t) {
					var e, i, r, n, a, s;
					for (e = u.length - 1, i = t.length - 1, a = null, s = !1; e >= 0 && i >= 0;) {
						if (r = u[e], n = t[i], r.pts === n.pts) {
							s = !0;
							break
						}
						r.pts > n.pts ? e-- : (e === u.length - 1 && (a = i), i--)
					}
					if (!s && null === a) return null;
					var o;
					if (0 === (o = s ? i : a)) return t;
					var d = t.slice(o),
						l = d.reduce(function(t, e) {
							return t.byteLength += e.byteLength, t.duration += e.duration, t.nalCount += e.nalCount, t
						}, {
							byteLength: 0,
							duration: 0,
							nalCount: 0
						});
					return d.byteLength = l.byteLength, d.duration = l.duration, d.nalCount = l.nalCount, d.pts = d[0].pts, d.dts = d[0].dts, d
				}, this.alignGopsWith = function(t) {
					u = t
				}
			}, r.prototype = new p, d = function(t, e) {
				"number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts && (t.timelineStartInfo.pts = e.pts), void 0 === t.minSegmentPts ? t.minSegmentPts = e.pts : t.minSegmentPts = Math.min(t.minSegmentPts, e.pts), void 0 === t.maxSegmentPts ? t.maxSegmentPts = e.pts : t.maxSegmentPts = Math.max(t.maxSegmentPts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts), void 0 === t.minSegmentDts ? t.minSegmentDts = e.dts : t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), void 0 === t.maxSegmentDts ? t.maxSegmentDts = e.dts : t.maxSegmentDts = Math.max(t.maxSegmentDts, e.dts))
			}, l = function(t) {
				delete t.minSegmentDts, delete t.maxSegmentDts, delete t.minSegmentPts, delete t.maxSegmentPts
			}, c = function(t) {
				var e, i, r = t.minSegmentDts - t.timelineStartInfo.dts;
				return e = t.timelineStartInfo.baseMediaDecodeTime, e += r, e = Math.max(0, e), "audio" === t.type && (i = t.samplerate / 9e4, e *= i, e = Math.floor(e)), e
			}, s = function(t, e) {
				this.numberOfTracks = 0, this.metadataStream = e, "undefined" != typeof t.remux ? this.remuxTracks = !!t.remux : this.remuxTracks = !0, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, s.prototype.init.call(this), this.push = function(t) {
					return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : (this.pendingTracks.push(t.track), this.pendingBoxes.push(t.boxes), this.pendingBytes += t.boxes.byteLength, "video" === t.track.type && (this.videoTrack = t.track), void("audio" === t.track.type && (this.audioTrack = t.track)))
				}
			}, s.prototype = new p, s.prototype.flush = function(t) {
				var e, i, r, n, a = 0,
					s = {
						captions: [],
						captionStreams: {},
						metadata: [],
						info: {}
					},
					o = 0;
				if (this.pendingTracks.length < this.numberOfTracks) {
					if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
					if (this.remuxTracks) return;
					if (0 === this.pendingTracks.length) return void(++this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
				}
				for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, E.forEach(function(t) {
						s.info[t] = this.videoTrack[t]
					}, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, S.forEach(function(t) {
						s.info[t] = this.audioTrack[t]
					}, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, r = g.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(r.byteLength), s.initSegment.set(r), s.data = new Uint8Array(this.pendingBytes), n = 0; n < this.pendingBoxes.length; n++) s.data.set(this.pendingBoxes[n], a), a += this.pendingBoxes[n].byteLength;
				for (n = 0; n < this.pendingCaptions.length; n++) e = this.pendingCaptions[n], e.startTime = e.startPts - o, e.startTime /= 9e4, e.endTime = e.endPts - o, e.endTime /= 9e4, s.captionStreams[e.stream] = !0, s.captions.push(e);
				for (n = 0; n < this.pendingMetadata.length; n++) i = this.pendingMetadata[n], i.cueTime = i.pts - o, i.cueTime /= 9e4, s.metadata.push(i);
				s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
			}, a = function(t) {
				var e, i, o = this,
					d = !0;
				a.prototype.init.call(this), t = t || {}, this.baseMediaDecodeTime = t.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
					var e = {};
					this.transmuxPipeline_ = e, e.type = "aac", e.metadataStream = new m.MetadataStream, e.aacStream = new b, e.audioTimestampRolloverStream = new m.TimestampRolloverStream("audio"), e.timedMetadataTimestampRolloverStream = new m.TimestampRolloverStream("timed-metadata"), e.adtsStream = new y, e.coalesceStream = new s(t, e.metadataStream), e.headOfPipeline = e.aacStream, e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream), e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream), e.metadataStream.on("timestamp", function(t) {
						e.aacStream.setTimestamp(t.timeStamp)
					}), e.aacStream.on("data", function(t) {
						"timed-metadata" !== t.type || e.audioSegmentStream || (i = i || {
							timelineStartInfo: {
								baseMediaDecodeTime: o.baseMediaDecodeTime
							},
							codec: "adts",
							type: "audio"
						}, e.coalesceStream.numberOfTracks++, e.audioSegmentStream = new n(i), e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))
					}), e.coalesceStream.on("data", this.trigger.bind(this, "data")), e.coalesceStream.on("done", this.trigger.bind(this, "done"))
				}, this.setupTsPipeline = function() {
					var a = {};
					this.transmuxPipeline_ = a, a.type = "ts", a.metadataStream = new m.MetadataStream, a.packetStream = new m.TransportPacketStream, a.parseStream = new m.TransportParseStream, a.elementaryStream = new m.ElementaryStream, a.videoTimestampRolloverStream = new m.TimestampRolloverStream("video"), a.audioTimestampRolloverStream = new m.TimestampRolloverStream("audio"), a.timedMetadataTimestampRolloverStream = new m.TimestampRolloverStream("timed-metadata"), a.adtsStream = new y, a.h264Stream = new v, a.captionStream = new m.CaptionStream, a.coalesceStream = new s(t, a.metadataStream), a.headOfPipeline = a.packetStream, a.packetStream.pipe(a.parseStream).pipe(a.elementaryStream), a.elementaryStream.pipe(a.videoTimestampRolloverStream).pipe(a.h264Stream), a.elementaryStream.pipe(a.audioTimestampRolloverStream).pipe(a.adtsStream), a.elementaryStream.pipe(a.timedMetadataTimestampRolloverStream).pipe(a.metadataStream).pipe(a.coalesceStream), a.h264Stream.pipe(a.captionStream).pipe(a.coalesceStream), a.elementaryStream.on("data", function(s) {
						var u;
						if ("metadata" === s.type) {
							for (u = s.tracks.length; u--;) e || "video" !== s.tracks[u].type ? i || "audio" !== s.tracks[u].type || (i = s.tracks[u], i.timelineStartInfo.baseMediaDecodeTime = o.baseMediaDecodeTime) : (e = s.tracks[u], e.timelineStartInfo.baseMediaDecodeTime = o.baseMediaDecodeTime);
							e && !a.videoSegmentStream && (a.coalesceStream.numberOfTracks++, a.videoSegmentStream = new r(e, t), a.videoSegmentStream.on("timelineStartInfo", function(t) {
								i && (i.timelineStartInfo = t, a.audioSegmentStream.setEarliestDts(t.dts))
							}), a.videoSegmentStream.on("processedGopsInfo", o.trigger.bind(o, "gopInfo")), a.videoSegmentStream.on("baseMediaDecodeTime", function(t) {
								i && a.audioSegmentStream.setVideoBaseMediaDecodeTime(t)
							}), a.h264Stream.pipe(a.videoSegmentStream).pipe(a.coalesceStream)), i && !a.audioSegmentStream && (a.coalesceStream.numberOfTracks++, a.audioSegmentStream = new n(i), a.adtsStream.pipe(a.audioSegmentStream).pipe(a.coalesceStream))
						}
					}), a.coalesceStream.on("data", this.trigger.bind(this, "data")), a.coalesceStream.on("done", this.trigger.bind(this, "done"))
				}, this.setBaseMediaDecodeTime = function(t) {
					var r = this.transmuxPipeline_;
					this.baseMediaDecodeTime = t, i && (i.timelineStartInfo.dts = void 0, i.timelineStartInfo.pts = void 0, l(i), i.timelineStartInfo.baseMediaDecodeTime = t, r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()), e && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = [], r.videoTimestampRolloverStream.discontinuity()), e.timelineStartInfo.dts = void 0, e.timelineStartInfo.pts = void 0, l(e), r.captionStream.reset(), e.timelineStartInfo.baseMediaDecodeTime = t), r.timedMetadataTimestampRolloverStream && r.timedMetadataTimestampRolloverStream.discontinuity()
				}, this.setAudioAppendStart = function(t) {
					i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)
				}, this.alignGopsWith = function(t) {
					e && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)
				}, this.push = function(t) {
					if (d) {
						var e = u(t);
						e && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : e || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), d = !1
					}
					this.transmuxPipeline_.headOfPipeline.push(t)
				}, this.flush = function() {
					d = !0, this.transmuxPipeline_.headOfPipeline.flush()
				}, this.resetCaptions = function() {
					this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
				}
			}, a.prototype = new p, e.exports = {
				Transmuxer: a,
				VideoSegmentStream: r,
				AudioSegmentStream: n,
				AUDIO_PROPERTIES: S,
				VIDEO_PROPERTIES: E
			}
		}, {}],
		59: [function(t, e, i) {
			"use strict";
			var r = t(53),
				n = t(54).handleRollover,
				a = {};
			a.ts = t(52), a.aac = t(39);
			var s = function(t) {
					return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
				},
				o = function(t, e) {
					for (var i, r = 0, n = 188; n < t.byteLength;)
						if (71 !== t[r] || 71 !== t[n]) r++, n++;
						else {
							switch (i = t.subarray(r, n), a.ts.parseType(i, e.pid)) {
								case "pat":
									e.pid || (e.pid = a.ts.parsePat(i));
									break;
								case "pmt":
									e.table || (e.table = a.ts.parsePmt(i))
							}
							if (e.pid && e.table) return;
							r += 188, n += 188
						}
				},
				u = function(t, e, i) {
					for (var r, n, s, o, u = 0, d = 188, l = !1; d < t.byteLength;)
						if (71 !== t[u] || 71 !== t[d]) u++, d++;
						else {
							switch (r = t.subarray(u, d), a.ts.parseType(r, e.pid)) {
								case "pes":
									n = a.ts.parsePesType(r, e.table), s = a.ts.parsePayloadUnitStartIndicator(r), "audio" === n && s && (o = a.ts.parsePesTime(r)) && (o.type = "audio", i.audio.push(o), l = !0)
							}
							if (l) break;
							u += 188, d += 188
						}
					for (d = t.byteLength, u = d - 188, l = !1; u >= 0;)
						if (71 !== t[u] || 71 !== t[d]) u--, d--;
						else {
							switch (r = t.subarray(u, d), a.ts.parseType(r, e.pid)) {
								case "pes":
									n = a.ts.parsePesType(r, e.table), s = a.ts.parsePayloadUnitStartIndicator(r), "audio" === n && s && (o = a.ts.parsePesTime(r)) && (o.type = "audio", i.audio.push(o), l = !0)
							}
							if (l) break;
							u -= 188, d -= 188
						}
				},
				d = function(t, e, i) {
					for (var r, n, s, o, u, d, l, c = 0, f = 188, h = !1, p = {
							data: [],
							size: 0
						}; f < t.byteLength;)
						if (71 !== t[c] || 71 !== t[f]) c++, f++;
						else {
							switch (r = t.subarray(c, f), a.ts.parseType(r, e.pid)) {
								case "pes":
									if (n = a.ts.parsePesType(r, e.table), s = a.ts.parsePayloadUnitStartIndicator(r), "video" === n && (s && !h && (o = a.ts.parsePesTime(r)) && (o.type = "video", i.video.push(o), h = !0), !i.firstKeyFrame)) {
										if (s && 0 !== p.size) {
											for (u = new Uint8Array(p.size), d = 0; p.data.length;) l = p.data.shift(), u.set(l, d), d += l.byteLength;
											a.ts.videoPacketContainsKeyFrame(u) && (i.firstKeyFrame = a.ts.parsePesTime(u), i.firstKeyFrame.type = "video"), p.size = 0
										}
										p.data.push(r), p.size += r.byteLength
									}
							}
							if (h && i.firstKeyFrame) break;
							c += 188, f += 188
						}
					for (f = t.byteLength, c = f - 188, h = !1; c >= 0;)
						if (71 !== t[c] || 71 !== t[f]) c--, f--;
						else {
							switch (r = t.subarray(c, f), a.ts.parseType(r, e.pid)) {
								case "pes":
									n = a.ts.parsePesType(r, e.table), s = a.ts.parsePayloadUnitStartIndicator(r), "video" === n && s && (o = a.ts.parsePesTime(r)) && (o.type = "video", i.video.push(o), h = !0)
							}
							if (h) break;
							c -= 188, f -= 188
						}
				},
				l = function(t, e) {
					if (t.audio && t.audio.length) {
						var i = e;
						void 0 === i && (i = t.audio[0].dts), t.audio.forEach(function(t) {
							t.dts = n(t.dts, i), t.pts = n(t.pts, i), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
						})
					}
					if (t.video && t.video.length) {
						var r = e;
						if (void 0 === r && (r = t.video[0].dts), t.video.forEach(function(t) {
								t.dts = n(t.dts, r), t.pts = n(t.pts, r), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
							}), t.firstKeyFrame) {
							var a = t.firstKeyFrame;
							a.dts = n(a.dts, r), a.pts = n(a.pts, r), a.dtsTime = a.dts / 9e4, a.ptsTime = a.dts / 9e4
						}
					}
				},
				c = function(t) {
					for (var e, i = !1, r = 0, n = null, s = null, o = 0, u = 0; t.length - u >= 3;) {
						switch (a.aac.parseType(t, u)) {
							case "timed-metadata":
								if (t.length - u < 10) {
									i = !0;
									break
								}
								if ((o = a.aac.parseId3TagSize(t, u)) > t.length) {
									i = !0;
									break
								}
								null === s && (e = t.subarray(u, u + o), s = a.aac.parseAacTimestamp(e)), u += o;
								break;
							case "audio":
								if (t.length - u < 7) {
									i = !0;
									break
								}
								if ((o = a.aac.parseAdtsSize(t, u)) > t.length) {
									i = !0;
									break
								}
								null === n && (e = t.subarray(u, u + o), n = a.aac.parseSampleRate(e)), r++, u += o;
								break;
							default:
								u++
						}
						if (i) return null
					}
					if (null === n || null === s) return null;
					var d = 9e4 / n;
					return {
						audio: [{
							type: "audio",
							dts: s,
							pts: s
						}, {
							type: "audio",
							dts: s + 1024 * r * d,
							pts: s + 1024 * r * d
						}]
					}
				},
				f = function(t) {
					var e = {
							pid: null,
							table: null
						},
						i = {};
					o(t, e);
					for (var n in e.table)
						if (e.table.hasOwnProperty(n)) {
							var a = e.table[n];
							switch (a) {
								case r.H264_STREAM_TYPE:
									i.video = [], d(t, e, i), 0 === i.video.length && delete i.video;
									break;
								case r.ADTS_STREAM_TYPE:
									i.audio = [], u(t, e, i), 0 === i.audio.length && delete i.audio
							}
						}
					return i
				},
				h = function(t, e) {
					var i, r = s(t);
					return (i = r ? c(t) : f(t)) && (i.audio || i.video) ? (l(i, e), i) : null
				};
			e.exports = {
				inspect: h
			}
		}, {}],
		60: [function(t, e, i) {
			var r, n, a, s, o, u;
			r = function(t) {
				return 9e4 * t
			}, n = function(t, e) {
				return t * e
			}, a = function(t) {
				return t / 9e4
			}, s = function(t, e) {
				return t / e
			}, o = function(t, e) {
				return r(s(t, e))
			}, u = function(t, e) {
				return n(a(t), e)
			}, e.exports = {
				secondsToVideoTs: r,
				secondsToAudioTs: n,
				videoTsToSeconds: a,
				audioTsToSeconds: s,
				audioTsToVideoTs: o,
				videoTsToAudioTs: u
			}
		}, {}],
		61: [function(t, e, i) {
			"use strict";
			var r;
			r = function(t) {
				var e = t.byteLength,
					i = 0,
					r = 0;
				this.length = function() {
					return 8 * e
				}, this.bitsAvailable = function() {
					return 8 * e + r
				}, this.loadWord = function() {
					var n = t.byteLength - e,
						a = new Uint8Array(4),
						s = Math.min(4, e);
					if (0 === s) throw new Error("no bytes available");
					a.set(t.subarray(n, n + s)), i = new DataView(a.buffer).getUint32(0), r = 8 * s, e -= s
				}, this.skipBits = function(t) {
					var n;
					r > t ? (i <<= t, r -= t) : (t -= r, n = Math.floor(t / 8), t -= 8 * n, e -= n, this.loadWord(), i <<= t, r -= t)
				}, this.readBits = function(t) {
					var n = Math.min(r, t),
						a = i >>> 32 - n;
					return r -= n, r > 0 ? i <<= n : e > 0 && this.loadWord(), n = t - n, n > 0 ? a << n | this.readBits(n) : a
				}, this.skipLeadingZeros = function() {
					var t;
					for (t = 0; t < r; ++t)
						if (0 != (i & 2147483648 >>> t)) return i <<= t, r -= t, t;
					return this.loadWord(), t + this.skipLeadingZeros()
				}, this.skipUnsignedExpGolomb = function() {
					this.skipBits(1 + this.skipLeadingZeros())
				}, this.skipExpGolomb = function() {
					this.skipBits(1 + this.skipLeadingZeros())
				}, this.readUnsignedExpGolomb = function() {
					var t = this.skipLeadingZeros();
					return this.readBits(t + 1) - 1
				}, this.readExpGolomb = function() {
					var t = this.readUnsignedExpGolomb();
					return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
				}, this.readBoolean = function() {
					return 1 === this.readBits(1)
				}, this.readUnsignedByte = function() {
					return this.readBits(8)
				}, this.loadWord()
			}, e.exports = r
		}, {}],
		62: [function(t, e, i) {
			"use strict";
			var r = function() {
				this.init = function() {
					var t = {};
					this.on = function(e, i) {
						t[e] || (t[e] = []), t[e] = t[e].concat(i)
					}, this.off = function(e, i) {
						var r;
						return !!t[e] && (r = t[e].indexOf(i), t[e] = t[e].slice(), t[e].splice(r, 1), r > -1)
					}, this.trigger = function(e) {
						var i, r, n, a;
						if (i = t[e])
							if (2 === arguments.length)
								for (n = i.length, r = 0; r < n; ++r) i[r].call(this, arguments[1]);
							else {
								for (a = [], r = arguments.length, r = 1; r < arguments.length; ++r) a.push(arguments[r]);
								for (n = i.length, r = 0; r < n; ++r) i[r].apply(this, a)
							}
					}, this.dispose = function() {
						t = {}
					}
				}
			};
			r.prototype.pipe = function(t) {
				return this.on("data", function(e) {
					t.push(e)
				}), this.on("done", function(e) {
					t.flush(e)
				}), t
			}, r.prototype.push = function(t) {
				this.trigger("data", t)
			}, r.prototype.flush = function(t) {
				this.trigger("done", t)
			}, e.exports = r
		}, {}],
		63: [function(t, e, i) {
			! function(t) {
				var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
					n = /^([^\/;?#]*)(.*)$/,
					a = /(?:\/|^)\.(?=\/)/g,
					s = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
					o = {
						buildAbsoluteURL: function(t, e, i) {
							if (i = i || {}, t = t.trim(), !(e = e.trim())) {
								if (!i.alwaysNormalize) return t;
								var r = this.parseURL(t);
								if (!r) throw new Error("Error trying to parse base URL.");
								return r.path = o.normalizePath(r.path), o.buildURLFromParts(r)
							}
							var a = this.parseURL(e);
							if (!a) throw new Error("Error trying to parse relative URL.");
							if (a.scheme) return i.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : e;
							var s = this.parseURL(t);
							if (!s) throw new Error("Error trying to parse base URL.");
							if (!s.netLoc && s.path && "/" !== s.path[0]) {
								var u = n.exec(s.path);
								s.netLoc = u[1], s.path = u[2]
							}
							s.netLoc && !s.path && (s.path = "/");
							var d = {
								scheme: s.scheme,
								netLoc: a.netLoc,
								path: null,
								params: a.params,
								query: a.query,
								fragment: a.fragment
							};
							if (!a.netLoc && (d.netLoc = s.netLoc, "/" !== a.path[0]))
								if (a.path) {
									var l = s.path,
										c = l.substring(0, l.lastIndexOf("/") + 1) + a.path;
									d.path = o.normalizePath(c)
								} else d.path = s.path, a.params || (d.params = s.params, a.query || (d.query = s.query));
							return null === d.path && (d.path = i.alwaysNormalize ? o.normalizePath(a.path) : a.path), o.buildURLFromParts(d)
						},
						parseURL: function(t) {
							var e = r.exec(t);
							return e ? {
								scheme: e[1] || "",
								netLoc: e[2] || "",
								path: e[3] || "",
								params: e[4] || "",
								query: e[5] || "",
								fragment: e[6] || ""
							} : null
						},
						normalizePath: function(t) {
							for (t = t.split("").reverse().join("").replace(a, ""); t.length !== (t = t.replace(s, "")).length;);
							return t.split("").reverse().join("")
						},
						buildURLFromParts: function(t) {
							return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
						}
					};
				"object" == typeof i && "object" == typeof e ? e.exports = o : "function" == typeof define && define.amd ? define([], function() {
					return o
				}) : "object" == typeof i ? i.URLToolkit = o : t.URLToolkit = o
			}(this)
		}, {}],
		64: [function(t, e, i) {
			(function(r) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var a = t(32),
					s = n(a),
					o = "undefined" != typeof window ? window.videojs : void 0 !== r ? r.videojs : null,
					u = n(o),
					d = function(t) {
						Object.defineProperties(t.frame, {
							id: {
								get: function() {
									return u.default.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), t.value.key
								}
							},
							value: {
								get: function() {
									return u.default.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), t.value.data
								}
							},
							privateData: {
								get: function() {
									return u.default.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), t.value.data
								}
							}
						})
					},
					l = function(t) {
						return isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
					},
					c = function(t, e, i) {
						var r = s.default.WebKitDataCue || s.default.VTTCue;
						e && e.forEach(function(t) {
							var e = t.stream;
							this.inbandTextTracks_[e].addCue(new r(t.startTime + this.timestampOffset, t.endTime + this.timestampOffset, t.text))
						}, t), i && function() {
							var e = l(t.mediaSource_.duration);
							i.forEach(function(t) {
								var e = t.cueTime + this.timestampOffset;
								t.frames.forEach(function(t) {
									var i = new r(e, e, t.value || t.url || t.data || "");
									i.frame = t, i.value = t, d(i), this.metadataTrack_.addCue(i)
								}, this)
							}, t), t.metadataTrack_ && t.metadataTrack_.cues && t.metadataTrack_.cues.length && function() {
								for (var i = t.metadataTrack_.cues, r = [], n = 0; n < i.length; n++) i[n] && r.push(i[n]);
								var a = r.reduce(function(t, e) {
										var i = t[e.startTime] || [];
										return i.push(e), t[e.startTime] = i, t
									}, {}),
									s = Object.keys(a).sort(function(t, e) {
										return Number(t) - Number(e)
									});
								s.forEach(function(t, i) {
									var r = a[t],
										n = Number(s[i + 1]) || e;
									r.forEach(function(t) {
										t.endTime = n
									})
								})
							}()
						}()
					};
				i.default = {
					addTextTrackData: c,
					durationOfVideo: l
				}, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		65: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = function(t) {
					return /mp4a\.\d+.\d+/i.test(t)
				},
				n = function(t) {
					return /avc1\.[\da-f]+/i.test(t)
				},
				a = function(t) {
					var e = {
							type: "",
							parameters: {}
						},
						i = t.trim().split(";");
					return e.type = i.shift().trim(), i.forEach(function(t) {
						var i = t.trim().split("=");
						if (i.length > 1) {
							var r = i[0].replace(/"/g, "").trim(),
								n = i[1].replace(/"/g, "").trim();
							e.parameters[r] = n
						}
					}), e
				},
				s = function(t) {
					return t.map(function(t) {
						return t.replace(/avc1\.(\d+)\.(\d+)/i, function(t, e, i) {
							return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
						})
					})
				};
			i.default = {
				isAudioCodec: r,
				parseContentType: a,
				isVideoCodec: n,
				translateLegacyCodecs: s
			}, e.exports = i.default
		}, {}],
		66: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = function(t, e, i) {
				var r = e.player_;
				if (i.captions && i.captions.length) {
					t.inbandTextTracks_ || (t.inbandTextTracks_ = {});
					for (var n in i.captionStreams)
						if (!t.inbandTextTracks_[n]) {
							r.tech_.trigger({
								type: "usage",
								name: "hls-608"
							});
							var a = r.textTracks().getTrackById(n);
							t.inbandTextTracks_[n] = a || r.addRemoteTextTrack({
								kind: "captions",
								id: n,
								label: n
							}, !1).track
						}
				}
				i.metadata && i.metadata.length && !t.metadataTrack_ && (t.metadataTrack_ = r.addRemoteTextTrack({
					kind: "metadata",
					label: "Timed Metadata"
				}, !1).track, t.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
			};
			i.default = r, e.exports = i.default
		}, {}],
		67: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = {
				TIME_BETWEEN_CHUNKS: 1,
				BYTES_PER_CHUNK: 32768
			};
			i.default = r, e.exports = i.default
		}, {}],
		68: [function(t, e, i) {
			(function(r) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function a(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function s(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var o = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					u = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					d = t(31),
					l = n(d),
					c = "undefined" != typeof window ? window.videojs : void 0 !== r ? r.videojs : null,
					f = n(c),
					h = t(69),
					p = n(h),
					g = t(67),
					m = n(g),
					y = t(65),
					v = function(t) {
						function e() {
							var t = this;
							a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.sourceBuffers = [], this.readyState = "closed", this.on(["sourceopen", "webkitsourceopen"], function(e) {
								t.swfObj = l.default.getElementById(e.swfId), t.player_ = (0, f.default)(t.swfObj.parentNode), t.tech_ = t.swfObj.tech, t.readyState = "open", t.tech_.on("seeking", function() {
									for (var e = t.sourceBuffers.length; e--;) t.sourceBuffers[e].abort()
								}), t.swfObj && t.swfObj.vjs_load()
							})
						}
						return s(e, t), o(e, [{
							key: "addSeekableRange_",
							value: function() {}
						}, {
							key: "addSourceBuffer",
							value: function(t) {
								var e = (0, y.parseContentType)(t),
									i = void 0;
								if ("video/mp2t" !== e.type && "audio/mp2t" !== e.type) throw new Error("NotSupportedError (Video.js)");
								return i = new p.default(this), this.sourceBuffers.push(i), i
							}
						}, {
							key: "endOfStream",
							value: function(t) {
								"network" === t ? this.tech_.error(2) : "decode" === t && this.tech_.error(3), "ended" !== this.readyState && (this.readyState = "ended", this.swfObj.vjs_endOfStream())
							}
						}]), e
					}(f.default.EventTarget);
				i.default = v;
				try {
					Object.defineProperty(v.prototype, "duration", {
						get: function() {
							return this.swfObj ? this.swfObj.vjs_getProperty("duration") : NaN
						},
						set: function(t) {
							var e = void 0,
								i = this.swfObj.vjs_getProperty("duration");
							if (this.swfObj.vjs_setProperty("duration", t), t < i)
								for (e = 0; e < this.sourceBuffers.length; e++) this.sourceBuffers[e].remove(t, i);
							return t
						}
					})
				} catch (t) {
					v.prototype.duration = NaN
				}
				for (var b in m.default) v[b] = m.default[b];
				e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		69: [function(t, e, i) {
			(function(r) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function a(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function s(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var o = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					u = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					d = t(32),
					l = n(d),
					c = "undefined" != typeof window ? window.videojs : void 0 !== r ? r.videojs : null,
					f = n(c),
					h = t(46),
					p = n(h),
					g = t(72),
					m = n(g),
					y = t(66),
					v = n(y),
					b = t(64),
					_ = t(70),
					T = n(_),
					S = t(76),
					E = n(S),
					w = t(67),
					A = n(w),
					R = function() {
						var e = void 0;
						try {
							e = t.resolve("./flash-transmuxer-worker")
						} catch (t) {}
						return e
					},
					L = function(t) {
						l.default.setTimeout(t, A.default.TIME_BETWEEN_CHUNKS)
					},
					k = function() {
						return Math.random().toString(36).slice(2, 8)
					},
					O = function(t, e) {
						("number" != typeof e || e < 0) && (e = 0);
						var i = Math.pow(10, e);
						return Math.round(t * i) / i
					},
					D = function(t) {
						function e(t) {
							var i = this;
							a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
							var r = void 0;
							this.chunkSize_ = A.default.BYTES_PER_CHUNK, this.buffer_ = [], this.bufferSize_ = 0, this.basePtsOffset_ = NaN, this.mediaSource_ = t, this.audioBufferEnd_ = NaN, this.videoBufferEnd_ = NaN, this.updating = !1, this.timestampOffset_ = 0, r = l.default.btoa(String.fromCharCode.apply(null, Array.prototype.slice.call(p.default.getFlvHeader())));
							var n = this.mediaSource_.player_.id().replace(/[^a-zA-Z0-9]/g, "_");
							this.flashEncodedHeaderName_ = "vjs_flashEncodedHeader_" + n + k(), this.flashEncodedDataName_ = "vjs_flashEncodedData_" + n + k(), l.default[this.flashEncodedHeaderName_] = function() {
								return delete l.default[i.flashEncodedHeaderName_], r
							}, this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedHeaderName_), this.transmuxer_ = (0, E.default)(T.default, R()), this.transmuxer_.postMessage({
								action: "init",
								options: {}
							}), this.transmuxer_.onmessage = function(t) {
								"data" === t.data.action && i.receiveBuffer_(t.data.segment)
							}, this.one("updateend", function() {
								i.mediaSource_.tech_.trigger("loadedmetadata")
							}), Object.defineProperty(this, "timestampOffset", {
								get: function() {
									return this.timestampOffset_
								},
								set: function(t) {
									"number" == typeof t && t >= 0 && (this.timestampOffset_ = t, this.mediaSource_.swfObj.vjs_discontinuity(), this.basePtsOffset_ = NaN, this.audioBufferEnd_ = NaN, this.videoBufferEnd_ = NaN, this.transmuxer_.postMessage({
										action: "reset"
									}))
								}
							}), Object.defineProperty(this, "buffered", {
								get: function() {
									if (!(this.mediaSource_ && this.mediaSource_.swfObj && "vjs_getProperty" in this.mediaSource_.swfObj)) return f.default.createTimeRange();
									var t = this.mediaSource_.swfObj.vjs_getProperty("buffered");
									return t && t.length && (t[0][0] = O(t[0][0], 3), t[0][1] = O(t[0][1], 3)), f.default.createTimeRanges(t)
								}
							}), this.mediaSource_.player_.on("seeked", function() {
								if ((0, m.default)(0, 1 / 0, i.metadataTrack_), i.inbandTextTracks_)
									for (var t in i.inbandTextTracks_)(0, m.default)(0, 1 / 0, i.inbandTextTracks_[t])
							});
							var s = this.onHlsReset_.bind(this);
							this.mediaSource_.player_.tech_.on("hls-reset", s), this.mediaSource_.player_.tech_.hls.on("dispose", function() {
								i.transmuxer_.terminate(), i.mediaSource_.player_.tech_.off("hls-reset", s)
							})
						}
						return s(e, t), o(e, [{
							key: "appendBuffer",
							value: function(t) {
								var e = void 0;
								if (this.updating) throw e = new Error("SourceBuffer.append() cannot be called while an update is in progress"), e.name = "InvalidStateError", e.code = 11, e;
								this.updating = !0, this.mediaSource_.readyState = "open", this.trigger({
									type: "update"
								}), this.transmuxer_.postMessage({
									action: "push",
									data: t.buffer,
									byteOffset: t.byteOffset,
									byteLength: t.byteLength
								}, [t.buffer]), this.transmuxer_.postMessage({
									action: "flush"
								})
							}
						}, {
							key: "abort",
							value: function() {
								this.buffer_ = [], this.bufferSize_ = 0, this.mediaSource_.swfObj.vjs_abort(), this.updating && (this.updating = !1, this.trigger({
									type: "updateend"
								}))
							}
						}, {
							key: "remove",
							value: function(t, e) {
								if ((0, m.default)(t, e, this.metadataTrack_), this.inbandTextTracks_)
									for (var i in this.inbandTextTracks_)(0, m.default)(t, e, this.inbandTextTracks_[i]);
								this.trigger({
									type: "update"
								}), this.trigger({
									type: "updateend"
								})
							}
						}, {
							key: "receiveBuffer_",
							value: function(t) {
								var e = this;
								(0, v.default)(this, this.mediaSource_, t), (0, b.addTextTrackData)(this, t.captions, t.metadata), L(function() {
									var i = e.convertTagsToData_(t);
									0 === e.buffer_.length && L(e.processBuffer_.bind(e)), i && (e.buffer_.push(i), e.bufferSize_ += i.byteLength)
								})
							}
						}, {
							key: "processBuffer_",
							value: function() {
								var t = this,
									e = A.default.BYTES_PER_CHUNK;
								if (!this.buffer_.length) return void(!1 !== this.updating && (this.updating = !1, this.trigger({
									type: "updateend"
								})));
								var i = this.buffer_[0].subarray(0, e);
								i.byteLength < e || this.buffer_[0].byteLength === e ? this.buffer_.shift() : this.buffer_[0] = this.buffer_[0].subarray(e), this.bufferSize_ -= i.byteLength;
								for (var r = [], n = i.byteLength, a = 0; a < n; a++) r.push(String.fromCharCode(i[a]));
								var s = l.default.btoa(r.join(""));
								l.default[this.flashEncodedDataName_] = function() {
									return L(t.processBuffer_.bind(t)), delete l.default[t.flashEncodedDataName_], s
								}, this.mediaSource_.swfObj.vjs_appendChunkReady(this.flashEncodedDataName_)
							}
						}, {
							key: "convertTagsToData_",
							value: function(t) {
								var e = 0,
									i = this.mediaSource_.tech_,
									r = 0,
									n = void 0,
									a = t.tags.videoTags,
									s = t.tags.audioTags;
								if (isNaN(this.basePtsOffset_) && (a.length || s.length)) {
									var o = a[0] || {
											pts: 1 / 0
										},
										u = s[0] || {
											pts: 1 / 0
										};
									this.basePtsOffset_ = Math.min(u.pts, o.pts)
								}
								i.seeking() && (this.videoBufferEnd_ = NaN, this.audioBufferEnd_ = NaN), isNaN(this.videoBufferEnd_) ? (i.buffered().length && (r = i.buffered().end(0) - this.timestampOffset), i.seeking() && (r = Math.max(r, i.currentTime() - this.timestampOffset)), r *= 1e3, r += this.basePtsOffset_) : r = this.videoBufferEnd_ + .1;
								var d = a.length;
								if (d && a[d - 1].pts >= r) {
									for (; --d;) {
										var l = a[d];
										if (!(l.pts > r) && (l.keyFrame || l.metaDataTag)) break
									}
									for (; d && a[d - 1].metaDataTag;) d--
								}
								var c = a.slice(d),
									f = void 0;
								for (f = isNaN(this.audioBufferEnd_) ? r : this.audioBufferEnd_ + .1, c.length && (f = Math.min(f, c[0].pts)), d = 0; d < s.length && !(s[d].pts >= f);) d++;
								var h = s.slice(d);
								h.length && (this.audioBufferEnd_ = h[h.length - 1].pts), c.length && (this.videoBufferEnd_ = c[c.length - 1].pts);
								var p = this.getOrderedTags_(c, h);
								if (0 !== p.length) {
									if (p[0].pts < r && i.seeking()) {
										var g = i.currentTime(),
											m = (r - p[0].pts) / 1e3,
											y = g - m;
										y < 1 / 30 && (y = 0);
										try {
											this.mediaSource_.swfObj.vjs_adjustCurrentTime(y)
										} catch (t) {}
									}
									for (var v = 0; v < p.length; v++) e += p[v].bytes.byteLength;
									n = new Uint8Array(e);
									for (var v = 0, b = 0; v < p.length; v++) n.set(p[v].bytes, b), b += p[v].bytes.byteLength;
									return n
								}
							}
						}, {
							key: "getOrderedTags_",
							value: function(t, e) {
								for (var i = void 0, r = []; t.length || e.length;) i = t.length ? e.length && e[0].dts < t[0].dts ? e.shift() : t.shift() : e.shift(), r.push(i);
								return r
							}
						}, {
							key: "onHlsReset_",
							value: function() {
								this.transmuxer_.postMessage({
									action: "resetCaptions"
								})
							}
						}]), e
					}(f.default.EventTarget);
				i.default = D, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		70: [function(t, e, i) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				s = t(32),
				o = r(s),
				u = t(46),
				d = r(u),
				l = function(t) {
					t.on("data", function(t) {
						o.default.postMessage({
							action: "data",
							segment: t
						})
					}), t.on("done", function(t) {
						o.default.postMessage({
							action: "done"
						})
					})
				},
				c = function() {
					function t(e) {
						n(this, t), this.options = e || {}, this.init()
					}
					return a(t, [{
						key: "init",
						value: function() {
							this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new d.default.Transmuxer(this.options), l(this.transmuxer)
						}
					}, {
						key: "push",
						value: function(t) {
							var e = new Uint8Array(t.data, t.byteOffset, t.byteLength);
							this.transmuxer.push(e)
						}
					}, {
						key: "reset",
						value: function() {
							this.init()
						}
					}, {
						key: "flush",
						value: function() {
							this.transmuxer.flush()
						}
					}, {
						key: "resetCaptions",
						value: function() {
							this.transmuxer.resetCaptions()
						}
					}]), t
				}(),
				f = function(t) {
					t.onmessage = function(t) {
						return "init" === t.data.action && t.data.options ? void(this.messageHandlers = new c(t.data.options)) : (this.messageHandlers || (this.messageHandlers = new c), void(t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data)))
					}
				};
			i.default = function(t) {
				return new f(t)
			}, e.exports = i.default
		}, {}],
		71: [function(t, e, i) {
			(function(r) {
				"use strict";

				function n(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function a(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function s(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var o = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					u = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					d = t(32),
					l = n(d),
					c = t(31),
					f = n(c),
					h = "undefined" != typeof window ? window.videojs : void 0 !== r ? r.videojs : null,
					p = n(h),
					g = t(75),
					m = n(g),
					y = t(64),
					v = t(65),
					b = function(t) {
						function e() {
							var t = this;
							a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this);
							var i = void 0;
							this.nativeMediaSource_ = new l.default.MediaSource;
							for (i in this.nativeMediaSource_) i in e.prototype || "function" != typeof this.nativeMediaSource_[i] || (this[i] = this.nativeMediaSource_[i].bind(this.nativeMediaSource_));
							this.duration_ = NaN, Object.defineProperty(this, "duration", {
								get: function() {
									return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
								},
								set: function(t) {
									if (this.duration_ = t, t !== 1 / 0) return void(this.nativeMediaSource_.duration = t)
								}
							}), Object.defineProperty(this, "seekable", {
								get: function() {
									return this.duration_ === 1 / 0 ? p.default.createTimeRanges([
										[0, this.nativeMediaSource_.duration]
									]) : this.nativeMediaSource_.seekable
								}
							}), Object.defineProperty(this, "readyState", {
								get: function() {
									return this.nativeMediaSource_.readyState
								}
							}), Object.defineProperty(this, "activeSourceBuffers", {
								get: function() {
									return this.activeSourceBuffers_
								}
							}), this.sourceBuffers = [], this.activeSourceBuffers_ = [], this.updateActiveSourceBuffers_ = function() {
								if (t.activeSourceBuffers_.length = 0, 1 === t.sourceBuffers.length) {
									var e = t.sourceBuffers[0];
									return e.appendAudioInitSegment_ = !0, e.audioDisabled_ = !e.audioCodec_, void t.activeSourceBuffers_.push(e)
								}
								for (var i = !1, r = !0, n = 0; n < t.player_.audioTracks().length; n++) {
									var a = t.player_.audioTracks()[n];
									if (a.enabled && "main" !== a.kind) {
										i = !0, r = !1;
										break
									}
								}
								t.sourceBuffers.forEach(function(e) {
									if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = i;
									else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0, r = !1;
									else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = r, r)) return;
									t.activeSourceBuffers_.push(e)
								})
							}, this.onPlayerMediachange_ = function() {
								t.sourceBuffers.forEach(function(t) {
									t.appendAudioInitSegment_ = !0
								})
							}, this.onHlsReset_ = function() {
								t.sourceBuffers.forEach(function(t) {
									t.transmuxer_ && t.transmuxer_.postMessage({
										action: "resetCaptions"
									})
								})
							}, this.onHlsSegmentTimeMapping_ = function(e) {
								t.sourceBuffers.forEach(function(t) {
									return t.timeMapping_ = e.mapping
								})
							}, ["sourceopen", "sourceclose", "sourceended"].forEach(function(t) {
								this.nativeMediaSource_.addEventListener(t, this.trigger.bind(this))
							}, this), this.on("sourceopen", function(e) {
								var i = f.default.querySelector('[src="' + t.url_ + '"]');
								i && (t.player_ = (0, p.default)(i.parentNode), t.player_.tech_.on("hls-reset", t.onHlsReset_), t.player_.tech_.on("hls-segment-time-mapping", t.onHlsSegmentTimeMapping_), t.player_.audioTracks && t.player_.audioTracks() && (t.player_.audioTracks().on("change", t.updateActiveSourceBuffers_), t.player_.audioTracks().on("addtrack", t.updateActiveSourceBuffers_), t.player_.audioTracks().on("removetrack", t.updateActiveSourceBuffers_)), t.player_.on("mediachange", t.onPlayerMediachange_))
							}), this.on("sourceended", function(e) {
								for (var i = (0, y.durationOfVideo)(t.duration), r = 0; r < t.sourceBuffers.length; r++) {
									var n = t.sourceBuffers[r],
										a = n.metadataTrack_ && n.metadataTrack_.cues;
									a && a.length && (a[a.length - 1].endTime = i)
								}
							}), this.on("sourceclose", function(t) {
								this.sourceBuffers.forEach(function(t) {
									t.transmuxer_ && t.transmuxer_.terminate()
								}), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && (this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
							})
						}
						return s(e, t), o(e, [{
							key: "addSeekableRange_",
							value: function(t, e) {
								var i = void 0;
								if (this.duration !== 1 / 0) throw i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity"), i.name = "InvalidStateError", i.code = 11, i;
								(e > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = e)
							}
						}, {
							key: "addSourceBuffer",
							value: function(t) {
								var e = void 0,
									i = (0, v.parseContentType)(t);
								if (/^(video|audio)\/mp2t$/i.test(i.type)) {
									var r = [];
									i.parameters && i.parameters.codecs && (r = i.parameters.codecs.split(","), r = (0, v.translateLegacyCodecs)(r), r = r.filter(function(t) {
										return (0, v.isAudioCodec)(t) || (0, v.isVideoCodec)(t)
									})), 0 === r.length && (r = ["avc1.4d400d", "mp4a.40.2"]), e = new m.default(this, r), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), e.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
								} else e = this.nativeMediaSource_.addSourceBuffer(t);
								return this.sourceBuffers.push(e), e
							}
						}]), e
					}(p.default.EventTarget);
				i.default = b, e.exports = i.default
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		72: [function(t, e, i) {
			"use strict";
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var r = function(t, e, i) {
				var r = void 0,
					n = void 0;
				if (i && i.cues)
					for (r = i.cues.length; r--;) n = i.cues[r], n.startTime <= e && n.endTime >= t && i.removeCue(n)
			};
			i.default = r, e.exports = i.default
		}, {}],
		73: [function(t, e, i) {
			"use strict";

			function r(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function n(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(i, "__esModule", {
				value: !0
			});
			var a = function() {
					function t(t, e) {
						for (var i = 0; i < e.length; i++) {
							var r = e[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, i, r) {
						return i && t(e.prototype, i), r && t(e, r), e
					}
				}(),
				s = t(32),
				o = r(s),
				u = t(55),
				d = r(u),
				l = function(t) {
					t.on("data", function(t) {
						var e = t.initSegment;
						t.initSegment = {
							data: e.buffer,
							byteOffset: e.byteOffset,
							byteLength: e.byteLength
						};
						var i = t.data;
						t.data = i.buffer, o.default.postMessage({
							action: "data",
							segment: t,
							byteOffset: i.byteOffset,
							byteLength: i.byteLength
						}, [t.data])
					}), t.captionStream && t.captionStream.on("data", function(t) {
						o.default.postMessage({
							action: "caption",
							data: t
						})
					}), t.on("done", function(t) {
						o.default.postMessage({
							action: "done"
						})
					}), t.on("gopInfo", function(t) {
						o.default.postMessage({
							action: "gopInfo",
							gopInfo: t
						})
					})
				},
				c = function() {
					function t(e) {
						n(this, t), this.options = e || {}, this.init()
					}
					return a(t, [{
						key: "init",
						value: function() {
							this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new d.default.Transmuxer(this.options), l(this.transmuxer)
						}
					}, {
						key: "push",
						value: function(t) {
							var e = new Uint8Array(t.data, t.byteOffset, t.byteLength);
							this.transmuxer.push(e)
						}
					}, {
						key: "reset",
						value: function() {
							this.init()
						}
					}, {
						key: "setTimestampOffset",
						value: function(t) {
							var e = t.timestampOffset || 0;
							this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * e))
						}
					}, {
						key: "setAudioAppendStart",
						value: function(t) {
							this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * t.appendStart))
						}
					}, {
						key: "flush",
						value: function(t) {
							this.transmuxer.flush()
						}
					}, {
						key: "resetCaptions",
						value: function() {
							this.transmuxer.resetCaptions()
						}
					}, {
						key: "alignGopsWith",
						value: function(t) {
							this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())
						}
					}]), t
				}(),
				f = function(t) {
					t.onmessage = function(t) {
						return "init" === t.data.action && t.data.options ? void(this.messageHandlers = new c(t.data.options)) : (this.messageHandlers || (this.messageHandlers = new c), void(t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data)))
					}
				};
			i.default = function(t) {
				return new f(t)
			}, e.exports = i.default
		}, {}],
		74: [function(t, e, i) {
			(function(e) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var n = t(32),
					a = r(n),
					s = t(68),
					o = r(s),
					u = t(71),
					d = r(u),
					l = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					c = r(l),
					f = 0,
					h = {
						mode: "auto"
					};
				c.default.mediaSources = {};
				var p = function(t, e) {
						var i = c.default.mediaSources[t];
						if (!i) throw new Error("Media Source not found (Video.js)");
						i.trigger({
							type: "sourceopen",
							swfId: e
						})
					},
					g = function() {
						return !!a.default.MediaSource && !!a.default.MediaSource.isTypeSupported && a.default.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
					},
					m = function(t) {
						var e = c.default.mergeOptions(h, t);
						if (this.MediaSource = {
								open: p,
								supportsNativeMediaSources: g
							}, "html5" === e.mode || "auto" === e.mode && g()) return new d.default;
						if (c.default.getTech("Flash")) return new o.default;
						throw new Error("Cannot use Flash or Html5 to create a MediaSource for this video")
					};
				i.MediaSource = m, m.open = p, m.supportsNativeMediaSources = g;
				var y = {
					createObjectURL: function(t) {
						var e = void 0;
						return t instanceof d.default ? (e = a.default.URL.createObjectURL(t.nativeMediaSource_), t.url_ = e, e) : t instanceof o.default ? (e = "blob:vjs-media-source/" + f, f++, c.default.mediaSources[e] = t, e) : (e = a.default.URL.createObjectURL(t), t.url_ = e, e)
					}
				};
				i.URL = y, c.default.MediaSource = m, c.default.URL = y
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		75: [function(t, e, i) {
			(function(e) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function n(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function a(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				Object.defineProperty(i, "__esModule", {
					value: !0
				});
				var s = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					o = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					u = "undefined" != typeof window ? window.videojs : void 0 !== e ? e.videojs : null,
					d = r(u),
					l = t(66),
					c = r(l),
					f = t(72),
					h = r(f),
					p = t(64),
					g = t(76),
					m = r(g),
					y = t(73),
					v = r(y),
					b = t(65),
					_ = function() {
						var e = void 0;
						try {
							e = t.resolve("./transmuxer-worker")
						} catch (t) {}
						return e
					},
					T = function(t, e) {
						var i = t.addSourceBuffer(e),
							r = Object.create(null);
						r.updating = !1, r.realBuffer_ = i;
						for (var n in i) ! function(t) {
							"function" == typeof i[t] ? r[t] = function() {
								return i[t].apply(i, arguments)
							} : "undefined" == typeof r[t] && Object.defineProperty(r, t, {
								get: function() {
									return i[t]
								},
								set: function(e) {
									return i[t] = e
								}
							})
						}(n);
						return r
					},
					S = function(t, e, i) {
						if (!e || !t.length) return [];
						var r = Math.ceil(9e4 * (e.currentTime() - i + 3)),
							n = void 0;
						for (n = 0; n < t.length && !(t[n].pts > r); n++);
						return t.slice(n)
					};
				i.gopsSafeToAlignWith = S;
				var E = function(t, e, i) {
					if (!e.length) return t;
					if (i) return e.slice();
					var r = e[0].pts,
						n = 0;
					for (n; n < t.length && !(t[n].pts >= r); n++);
					return t.slice(0, n).concat(e)
				};
				i.updateGopBuffer = E;
				var w = function(t, e, i, r) {
					for (var n = Math.ceil(9e4 * (e - r)), a = Math.ceil(9e4 * (i - r)), s = t.slice(), o = t.length; o-- && !(t[o].pts <= a););
					if (-1 === o) return s;
					for (var u = o + 1; u-- && !(t[u].pts <= n););
					return u = Math.max(u, 0), s.splice(u, o - u + 1), s
				};
				i.removeGopBuffer = w;
				var A = function(t) {
					function e(t, i) {
						var r = this;
						n(this, e), o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, d.default.EventTarget), this.timestampOffset_ = 0, this.pendingBuffers_ = [], this.bufferUpdating_ = !1, this.mediaSource_ = t, this.codecs_ = i, this.audioCodec_ = null, this.videoCodec_ = null, this.audioDisabled_ = !1, this.appendAudioInitSegment_ = !0, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = d.default.browser.IE_VERSION >= 11;
						var a = {
							remux: !1,
							alignGopsAtEnd: this.safeAppend_
						};
						this.codecs_.forEach(function(t) {
							(0, b.isAudioCodec)(t) ? r.audioCodec_ = t: (0, b.isVideoCodec)(t) && (r.videoCodec_ = t)
						}), this.transmuxer_ = (0, m.default)(v.default, _()), this.transmuxer_.postMessage({
							action: "init",
							options: a
						}), this.transmuxer_.onmessage = function(t) {
							return "data" === t.data.action ? r.data_(t) : "done" === t.data.action ? r.done_(t) : "gopInfo" === t.data.action ? r.appendGopInfo_(t) : void 0
						}, Object.defineProperty(this, "timestampOffset", {
							get: function() {
								return this.timestampOffset_
							},
							set: function(t) {
								"number" == typeof t && t >= 0 && (this.timestampOffset_ = t, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
									action: "setTimestampOffset",
									timestampOffset: t
								}))
							}
						}), Object.defineProperty(this, "appendWindowStart", {
							get: function() {
								return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
							},
							set: function(t) {
								this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = t), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = t)
							}
						}), Object.defineProperty(this, "updating", {
							get: function() {
								return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
							}
						}), Object.defineProperty(this, "buffered", {
							get: function() {
								var t = null,
									e = null,
									i = 0,
									r = [],
									n = [];
								if (!this.videoBuffer_ && !this.audioBuffer_) return d.default.createTimeRange();
								if (!this.videoBuffer_) return this.audioBuffer_.buffered;
								if (!this.audioBuffer_) return this.videoBuffer_.buffered;
								if (this.audioDisabled_) return this.videoBuffer_.buffered;
								if (0 === this.videoBuffer_.buffered.length && 0 === this.audioBuffer_.buffered.length) return d.default.createTimeRange();
								for (var a = this.videoBuffer_.buffered, s = this.audioBuffer_.buffered, o = a.length; o--;) r.push({
									time: a.start(o),
									type: "start"
								}), r.push({
									time: a.end(o),
									type: "end"
								});
								for (o = s.length; o--;) r.push({
									time: s.start(o),
									type: "start"
								}), r.push({
									time: s.end(o),
									type: "end"
								});
								for (r.sort(function(t, e) {
										return t.time - e.time
									}), o = 0; o < r.length; o++) "start" === r[o].type ? 2 === ++i && (t = r[o].time) : "end" === r[o].type && 1 === --i && (e = r[o].time), null !== t && null !== e && (n.push([t, e]), t = null, e = null);
								return d.default.createTimeRanges(n)
							}
						})
					}
					return a(e, t), s(e, [{
						key: "data_",
						value: function(t) {
							var e = t.data.segment;
							e.data = new Uint8Array(e.data, t.data.byteOffset, t.data.byteLength), e.initSegment = new Uint8Array(e.initSegment.data, e.initSegment.byteOffset, e.initSegment.byteLength), (0, c.default)(this, this.mediaSource_, e), this.pendingBuffers_.push(e)
						}
					}, {
						key: "done_",
						value: function(t) {
							return "closed" === this.mediaSource_.readyState ? void(this.pendingBuffers_.length = 0) : void this.processPendingSegments_()
						}
					}, {
						key: "createRealSourceBuffers_",
						value: function() {
							var t = this,
								e = ["audio", "video"];
							e.forEach(function(i) {
								if (t[i + "Codec_"] && !t[i + "Buffer_"]) {
									var r = null;
									if (t.mediaSource_[i + "Buffer_"]) r = t.mediaSource_[i + "Buffer_"], r.updating = !1;
									else {
										var n = i + "Codec_",
											a = i + '/mp4;codecs="' + t[n] + '"';
										r = T(t.mediaSource_.nativeMediaSource_, a), t.mediaSource_[i + "Buffer_"] = r
									}
									t[i + "Buffer_"] = r, ["update", "updatestart", "updateend"].forEach(function(n) {
										r.addEventListener(n, function() {
											if ("audio" !== i || !t.audioDisabled_) return "updateend" === n && (t[i + "Buffer_"].updating = !1), e.every(function(e) {
												return !("audio" !== e || !t.audioDisabled_) || i === e || !t[e + "Buffer_"] || !t[e + "Buffer_"].updating
											}) ? t.trigger(n) : void 0
										})
									})
								}
							})
						}
					}, {
						key: "appendBuffer",
						value: function(t) {
							if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
								var e = this.audioBuffer_.buffered;
								this.transmuxer_.postMessage({
									action: "setAudioAppendStart",
									appendStart: e.end(e.length - 1)
								})
							}
							this.videoBuffer_ && this.transmuxer_.postMessage({
								action: "alignGopsWith",
								gopsToAlignWith: S(this.gopBuffer_, this.mediaSource_.player_, this.timeMapping_)
							}), this.transmuxer_.postMessage({
								action: "push",
								data: t.buffer,
								byteOffset: t.byteOffset,
								byteLength: t.byteLength
							}, [t.buffer]), this.transmuxer_.postMessage({
								action: "flush"
							})
						}
					}, {
						key: "appendGopInfo_",
						value: function(t) {
							this.gopBuffer_ = E(this.gopBuffer_, t.data.gopInfo, this.safeAppend_)
						}
					}, {
						key: "remove",
						value: function(t, e) {
							if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(t, e), this.gopBuffer_ = w(this.gopBuffer_, t, e, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(t, e)), (0, h.default)(t, e, this.metadataTrack_), this.inbandTextTracks_)
								for (var i in this.inbandTextTracks_)(0, h.default)(t, e, this.inbandTextTracks_[i])
						}
					}, {
						key: "processPendingSegments_",
						value: function() {
							var t = {
								video: {
									segments: [],
									bytes: 0
								},
								audio: {
									segments: [],
									bytes: 0
								},
								captions: [],
								metadata: []
							};
							t = this.pendingBuffers_.reduce(function(t, e) {
								var i = e.type,
									r = e.data,
									n = e.initSegment;
								return t[i].segments.push(r), t[i].bytes += r.byteLength, t[i].initSegment = n, e.captions && (t.captions = t.captions.concat(e.captions)), e.info && (t[i].info = e.info), e.metadata && (t.metadata = t.metadata.concat(e.metadata)), t
							}, t), this.videoBuffer_ || this.audioBuffer_ || (0 === t.video.bytes && (this.videoCodec_ = null), 0 === t.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), t.audio.info && this.mediaSource_.trigger({
								type: "audioinfo",
								info: t.audio.info
							}), t.video.info && this.mediaSource_.trigger({
								type: "videoinfo",
								info: t.video.info
							}), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (t.audio.segments.unshift(t.audio.initSegment), t.audio.bytes += t.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
							var e = !1;
							this.videoBuffer_ && t.video.bytes ? (t.video.segments.unshift(t.video.initSegment), t.video.bytes += t.video.initSegment.byteLength, this.concatAndAppendSegments_(t.video, this.videoBuffer_), (0, p.addTextTrackData)(this, t.captions, t.metadata)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (e = !0), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(t.audio, this.audioBuffer_), this.pendingBuffers_.length = 0, e && this.trigger("updateend"), this.bufferUpdating_ = !1
						}
					}, {
						key: "concatAndAppendSegments_",
						value: function(t, e) {
							var i = 0,
								r = void 0;
							if (t.bytes) {
								r = new Uint8Array(t.bytes), t.segments.forEach(function(t) {
									r.set(t, i), i += t.byteLength
								});
								try {
									e.updating = !0, e.appendBuffer(r)
								} catch (t) {
									this.mediaSource_.player_ && this.mediaSource_.player_.error({
										code: -3,
										type: "APPEND_BUFFER_ERR",
										message: t.message,
										originalError: t
									})
								}
							}
						}
					}, {
						key: "abort",
						value: function() {
							this.videoBuffer_ && this.videoBuffer_.abort(), !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
								action: "reset"
							}), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
						}
					}]), e
				}(d.default.EventTarget);
				i.default = A
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		76: [function(t, e, i) {
			var r = arguments[3],
				n = arguments[4],
				a = arguments[5],
				s = JSON.stringify,
				o = !1,
				u = function(t) {
					function e(r) {
						if (i[r]) return i[r].exports;
						var n = i[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
					}
					var i = {};
					return e.m = t, e.c = i, e.d = function(t, i, r) {
						e.o(t, i) || Object.defineProperty(t, i, {
							configurable: !1,
							enumerable: !0,
							get: r
						})
					}, e.n = function(t) {
						var i = t && t.__esModule ? function() {
							return t.default
						} : function() {
							return t
						};
						return e.d(i, "a", i), i
					}, e.o = function(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, e.p = "", e(e.s = entryModule)
				};
			void 0 === r && (o = !0, r = u, n = __webpack_modules__);
			var d = function(t) {
					for (var e, i = Object.keys(a), o = 0; o < i.length; o++) {
						var u = i[o],
							d = a[u].exports;
						if (d === t || d && d.default === t) {
							e = u;
							break
						}
					}
					if (!e) {
						e = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
						for (var l = {}, o = 0; o < i.length; o++) {
							var u = i[o];
							l[u] = u
						}
						n[e] = ["function(require,module,exports){" + t + "(self); }", l]
					}
					var c = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
						f = {};
					return f[e] = e, n[c] = ["function(require,module,exports){var f = require(" + s(e) + ");(f.default ? f.default : f)(self);}", f], "(" + r + ")({" + Object.keys(n).map(function(t) {
						return s(t) + ":[" + n[t][0] + "," + s(n[t][1]) + "]"
					}).join(",") + "},{},[" + s(c) + "])"
				},
				l = function(t, e) {
					var i, a = "string" == typeof e;
					i = a ? {} : [], Object.keys(n).forEach(function(t) {
						n[t] && (i[t] = n[t].toString())
					});
					var o = __webpack_require__(e);
					if (!o || o !== t && o.default !== t) {
						var u = i[e];
						i[e] = u.substring(0, u.length - 1) + "\n" + t.name + "();\n}"
					}
					var d;
					return a ? (e = s(e), d = "{" + Object.keys(i).map(function(t) {
						return s(t) + ":" + i[t]
					}).join(",") + "}") : d = "[" + i.join(",") + "]", "var fn = (" + r.toString().replace("entryModule", e) + ")(" + d + ');\n(typeof fn === "function") && fn(self);'
				};
			e.exports = function(t, e) {
				var i;
				i = o ? l(t, e) : d(t);
				var r = new Blob([i], {
						type: "text/javascript"
					}),
					n = window.URL || window.webkitURL || window.mozURL || window.msURL,
					a = n.createObjectURL(r),
					s = new Worker(a);
				return s.objectURL = a, s
			}
		}, {}],
		77: [function(t, e, i) {
			(function(i) {
				"use strict";

				function r(t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}

				function n(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}

				function a(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}
				var s = function() {
						function t(t, e) {
							for (var i = 0; i < e.length; i++) {
								var r = e[i];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
							}
						}
						return function(e, i, r) {
							return i && t(e.prototype, i), r && t(e, r), e
						}
					}(),
					o = function(t, e, i) {
						for (var r = !0; r;) {
							var n = t,
								a = e,
								s = i;
							r = !1, null === n && (n = Function.prototype);
							var o = Object.getOwnPropertyDescriptor(n, a);
							if (void 0 !== o) {
								if ("value" in o) return o.value;
								var u = o.get;
								return void 0 === u ? void 0 : u.call(s)
							}
							var d = Object.getPrototypeOf(n);
							if (null === d) return;
							t = d, e = a, i = s, r = !0, o = d = void 0
						}
					},
					u = t(31),
					d = r(u),
					l = t(9),
					c = r(l),
					f = t(11),
					h = r(f),
					p = t(21),
					g = r(p),
					m = t(25),
					y = t(2),
					v = r(y),
					b = t(74),
					_ = t(33),
					T = r(_),
					S = "undefined" != typeof window ? window.videojs : void 0 !== i ? i.videojs : null,
					E = r(S),
					w = t(5),
					A = t(3),
					R = r(A),
					L = t(14),
					k = r(L),
					O = t(32),
					D = r(O),
					I = t(8),
					C = r(I),
					P = t(13),
					x = r(P),
					M = t(10),
					U = {
						PlaylistLoader: c.default,
						Playlist: h.default,
						Decrypter: m.Decrypter,
						AsyncStream: m.AsyncStream,
						decrypt: m.decrypt,
						utils: v.default,
						STANDARD_PLAYLIST_SELECTOR: M.lastBandwidthSelector,
						INITIAL_PLAYLIST_SELECTOR: M.lowestBitrateCompatibleVariantSelector,
						comparePlaylistBandwidth: M.comparePlaylistBandwidth,
						comparePlaylistResolution: M.comparePlaylistResolution,
						xhr: (0, g.default)()
					};
				["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function(t) {
					Object.defineProperty(U, t, {
						get: function() {
							return E.default.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), R.default[t]
						},
						set: function(e) {
							return E.default.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), "number" != typeof e || e < 0 ? void E.default.log.warn("value of Hls." + t + " must be greater than or equal to 0") : void(R.default[t] = e)
						}
					})
				});
				var N = function(t, e) {
						for (var i = e.media(), r = -1, n = 0; n < t.length; n++)
							if (t[n].id === i.uri) {
								r = n;
								break
							}
						t.selectedIndex_ = r, t.trigger({
							selectedIndex: r,
							type: "change"
						})
					},
					F = function(t, e) {
						e.representations().forEach(function(e) {
							t.addQualityLevel(e)
						}), N(t, e.playlists)
					};
				U.canPlaySource = function() {
					return E.default.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
				}, U.supportsNativeHls = function() {
					var t = d.default.createElement("video");
					return !!E.default.getTech("Html5").isSupported() && ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function(e) {
						return /maybe|probably/i.test(t.canPlayType(e))
					})
				}(), U.isSupported = function() {
					return E.default.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
				};
				var B = E.default.getComponent("Component"),
					G = function(t) {
						function e(t, i, r) {
							var a = this;
							if (n(this, e), o(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, i, r.hls), i.options_ && i.options_.playerId) {
								var s = (0, E.default)(i.options_.playerId);
								s.hasOwnProperty("hls") || Object.defineProperty(s, "hls", {
									get: function() {
										return E.default.log.warn("player.hls is deprecated. Use player.tech_.hls instead."), i.trigger({
											type: "usage",
											name: "hls-player-access"
										}), a
									}
								})
							}
							if (this.tech_ = i, this.source_ = t, this.stats = {}, this.ignoreNextSeekingEvent_ = !1, this.setOptions_(), this.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
							this.on(d.default, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(t) {
								var e = d.default.fullscreenElement || d.default.webkitFullscreenElement || d.default.mozFullScreenElement || d.default.msFullscreenElement;
								e && e.contains(a.tech_.el()) && a.masterPlaylistController_.fastQualityChange_()
							}), this.on(this.tech_, "seeking", function() {
								return this.ignoreNextSeekingEvent_ ? void(this.ignoreNextSeekingEvent_ = !1) : void this.setCurrentTime(this.tech_.currentTime())
							}), this.on(this.tech_, "error", function() {
								this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
							}), this.on(this.tech_, "play", this.play)
						}
						return a(e, t), s(e, [{
							key: "setOptions_",
							value: function() {
								var t = this;
								this.options_.withCredentials = this.options_.withCredentials || !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth, ["withCredentials", "bandwidth"].forEach(function(e) {
									"undefined" != typeof t.source_[e] && (t.options_[e] = t.source_[e])
								}), this.bandwidth = this.options_.bandwidth
							}
						}, {
							key: "src",
							value: function(t) {
								var e = this;
								t && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = U, this.masterPlaylistController_ = new w.MasterPlaylistController(this.options_), this.playbackWatcher_ = new C.default(E.default.mergeOptions(this.options_, {
									seekable: function() {
										return e.seekable()
									}
								})), this.masterPlaylistController_.on("error", function() {
									E.default.players[e.tech_.options_.playerId].error(e.masterPlaylistController_.error)
								}), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : U.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = U.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
									selectPlaylist: {
										get: function() {
											return this.masterPlaylistController_.selectPlaylist
										},
										set: function(t) {
											this.masterPlaylistController_.selectPlaylist = t.bind(this)
										}
									},
									throughput: {
										get: function() {
											return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
										},
										set: function(t) {
											this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = t, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
										}
									},
									bandwidth: {
										get: function() {
											return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
										},
										set: function(t) {
											this.masterPlaylistController_.mainSegmentLoader_.bandwidth = t, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
												rate: 0,
												count: 0
											}
										}
									},
									systemBandwidth: {
										get: function() {
											var t = 1 / (this.bandwidth || 1),
												e = void 0;
											return e = this.throughput > 0 ? 1 / this.throughput : 0, Math.floor(1 / (t + e))
										},
										set: function() {
											E.default.log.error('The "systemBandwidth" property is read-only')
										}
									}
								}), Object.defineProperties(this.stats, {
									bandwidth: {
										get: function() {
											return e.bandwidth || 0
										},
										enumerable: !0
									},
									mediaRequests: {
										get: function() {
											return e.masterPlaylistController_.mediaRequests_() || 0
										},
										enumerable: !0
									},
									mediaRequestsAborted: {
										get: function() {
											return e.masterPlaylistController_.mediaRequestsAborted_() || 0
										},
										enumerable: !0
									},
									mediaRequestsTimedout: {
										get: function() {
											return e.masterPlaylistController_.mediaRequestsTimedout_() || 0
										},
										enumerable: !0
									},
									mediaRequestsErrored: {
										get: function() {
											return e.masterPlaylistController_.mediaRequestsErrored_() || 0
										},
										enumerable: !0
									},
									mediaTransferDuration: {
										get: function() {
											return e.masterPlaylistController_.mediaTransferDuration_() || 0
										},
										enumerable: !0
									},
									mediaBytesTransferred: {
										get: function() {
											return e.masterPlaylistController_.mediaBytesTransferred_() || 0
										},
										enumerable: !0
									},
									mediaSecondsLoaded: {
										get: function() {
											return e.masterPlaylistController_.mediaSecondsLoaded_() || 0
										},
										enumerable: !0
									}
								}), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.masterPlaylistController_.on("selectedinitialmedia", function() {
									(0, k.default)(e)
								}), this.on(this.masterPlaylistController_, "progress", function() {
									this.tech_.trigger("progress")
								}), this.on(this.masterPlaylistController_, "firstplay", function() {
									this.ignoreNextSeekingEvent_ = !0
								}), this.tech_.ready(function() {
									return e.setupQualityLevels_()
								}), this.tech_.el() && this.tech_.src(E.default.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
							}
						}, {
							key: "setupQualityLevels_",
							value: function() {
								var t = this,
									e = E.default.players[this.tech_.options_.playerId];
								e && e.qualityLevels && (this.qualityLevels_ = e.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function() {
									F(t.qualityLevels_, t)
								}), this.playlists.on("mediachange", function() {
									N(t.qualityLevels_, t.playlists)
								}))
							}
						}, {
							key: "play",
							value: function() {
								this.masterPlaylistController_.play()
							}
						}, {
							key: "setCurrentTime",
							value: function(t) {
								this.masterPlaylistController_.setCurrentTime(t)
							}
						}, {
							key: "duration",
							value: function() {
								return this.masterPlaylistController_.duration()
							}
						}, {
							key: "seekable",
							value: function() {
								return this.masterPlaylistController_.seekable()
							}
						}, {
							key: "dispose",
							value: function() {
								this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), o(Object.getPrototypeOf(e.prototype), "dispose", this).call(this);
							}
						}]), e
					}(B),
					j = function t(e) {
						return {
							canHandleSource: function(i) {
								var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
									n = E.default.mergeOptions(E.default.options, r);
								return (!n.hls || !n.hls.mode || n.hls.mode === e) && t.canPlayType(i.type, n)
							},
							handleSource: function(t, i) {
								var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
									n = E.default.mergeOptions(E.default.options, r, {
										hls: {
											mode: e
										}
									});
								return "flash" === e && i.setTimeout(function() {
									i.trigger("loadstart")
								}, 1), i.hls = new G(t, i, n), i.hls.xhr = (0, g.default)(), i.hls.src(t.src), i.hls
							},
							canPlayType: function(e) {
								var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
									r = E.default.mergeOptions(E.default.options, i);
								return t.canPlayType(e, r) ? "maybe" : ""
							}
						}
					};
				j.canPlayType = function(t, e) {
					if (E.default.browser.IE_VERSION && E.default.browser.IE_VERSION <= 10) return !1;
					var i = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
					return !(!e.hls.overrideNative && U.supportsNativeHls) && i.test(t)
				}, "undefined" != typeof E.default.MediaSource && "undefined" != typeof E.default.URL || (E.default.MediaSource = b.MediaSource, E.default.URL = b.URL);
				var H = E.default.getTech("Flash");
				b.MediaSource.supportsNativeMediaSources() && E.default.getTech("Html5").registerSourceHandler(j("html5"), 0), D.default.Uint8Array && H && H.registerSourceHandler(j("flash")), E.default.HlsHandler = G, E.default.HlsSourceHandler = j, E.default.Hls = U, E.default.use || E.default.registerComponent("Hls", U), E.default.m3u8 = T.default, E.default.options.hls = E.default.options.hls || {}, E.default.registerPlugin ? E.default.registerPlugin("reloadSourceOnError", x.default) : E.default.plugin("reloadSourceOnError", x.default), e.exports = {
					Hls: U,
					HlsHandler: G,
					HlsSourceHandler: j
				}
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}]
	}, {}, [77])
}, , , , , , , , , , , , function(t, e, i) {
	"use strict";

	function r(t) {
		return t.name ? t.name : t.height ? t.height + "p" : t.width ? t.width + "px" : t.bitrate ? Math.round(t.bitrate / 1e3) + " kbps" : "N/A"
	}

	function n(t, e) {
		function i(t, i) {
			function n() {
				var t = null,
					e = null;
				return function() {
					!t || t.elapsed() > 2e3 ? (t = o(), p.recoverMediaError()) : !e || e.elapsed() > 2e3 ? (e = o(), p.swapAudioCodec(), p.recoverMediaError()) : console.error("Error loading media: File could not be played")
				}
			}

			function u() {
				p.loadSource(t.src), c.removeEventListener("waiting", u)
			}

			function d(t, e) {
				p.nextLevel = e
			}
			var l = i.options_,
				c = i.el(),
				f = null,
				h = 0,
				p = this.hls = new e(l.hlsjsConfig),
				g = a(l.playerId, {
					element: c
				});
			s(e, p, g.onEvent);
			var m = n(),
				y = n();
			c.addEventListener("error", function(t) {
				var e = t.currentTarget.error;
				e && e.code === e.MEDIA_ERR_DECODE ? y() : console.error("Error loading media: File could not be played")
			}), this.dispose = function() {
				p.destroy(), c.removeEventListener("waiting", u), i.off("levelSwitch", d)
			}, this.duration = function() {
				return f || c.duration || 0
			}, i.on("levelSwitch", d), p.on(e.Events.LEVEL_LOADED, function(t, e) {
				f = e.details.live ? 1 / 0 : e.details.totalduration
			}), p.on(e.Events.MANIFEST_PARSED, function(t, e) {
				var n = [];
				e.levels.length > 1 && n.push({
					id: -1,
					label: "auto",
					selectable: !0,
					selected: p.manualLevel === -1
				}), e.levels.forEach(function(t, e) {
					n.push({
						id: e,
						label: r(t),
						selectable: !0,
						selected: e === p.manualLevel
					})
				}), i.trigger("levels", {
					levels: n
				})
			}), p.on(e.Events.ERROR, function(t, i) {
				if (i.fatal) switch (i.type) {
					case e.ErrorTypes.NETWORK_ERROR:
						"manifestLoadError" === i.details && i.context && i.context.url && ++h < 2 ? p.loadSource(i.context.url) : p.startLoad();
						break;
					case e.ErrorTypes.MEDIA_ERROR:
						m();
						break;
					default:
						console.error("Error loading media: File could not be played")
				}
			}), Object.keys(e.Events).forEach(function(t) {
				var r = e.Events[t];
				p.on(r, function(t, e) {
					i.trigger(r, e)
				})
			}), i.featuresNativeTextTracks || (Object.defineProperty(c, "textTracks", {
				value: i.textTracks,
				writable: !1
			}), c.addTextTrack = function() {
				return i.addTextTrack.apply(i, arguments)
			}), p.attachMedia(c), "none" !== i.preload() ? u() : c.addEventListener("waiting", u)
		}
		var n = /^application\/(x-mpegURL|vnd\.apple\.mpegURL)$/i,
			u = /\.m3u8/i,
			d = {
				canHandleSource: function(t) {
					return n.test(t.type) ? "probably" : u.test(t.src) ? "maybe" : ""
				},
				handleSource: function(t, e) {
					return new i(t, e)
				},
				canPlayType: function(t) {
					return n.test(t) ? "probably" : ""
				}
			};
		if (e.isSupported()) {
			var l = t.getTech && t.getTech("Html5");
			l = l || t.getComponent && t.getComponent("Html5"), l ? l.registerSourceHandler(d, 0) : console.warn("Peer5 video.js plugin doesn't support this version of video.js")
		}
	}
	var a = i(8),
		s = i(35),
		o = i(1);
	t.exports = n
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = i(41),
			r = t.id_,
			n = t,
			a = null,
			s = !1,
			o = null;
		e.initPlayer(r, "videojs5"), n.on("ready", function() {
			e.updateAction(r, "ready")
		}), n.on("pause", function() {
			s || (s = !0, e.updateAction(r, "pause"))
		}), n.on("ended", function() {
			s || (s = !0, e.updateAction(r, "pause"))
		}), n.on("firstplay", function() {
			"seek" !== a && "buffer" !== a || e.updateAction(r, "resume"), e.updateAction(r, "loadStart"), a = "loading"
		}), n.on("waiting", function() {
			"loading" !== a && "seek" !== a && (e.updateAction(r, "buffer"), a = "buffer")
		}), n.on("seeking", function() {
			!o || Date.now() - o < 200 || "loading" !== a && "seek" !== a && (e.updateAction(r, "seek"), a = "seek")
		}), n.on("playing", function() {
			return s && (s = !1, e.updateAction(r, "play")), "loading" === a ? (e.updateAction(r, "loadEnd"), a = "playing", void(o = Date.now())) : void("seek" !== a && "buffer" !== a || (e.updateAction(r, "resume"), a = "playing"))
		})
	}
	t.exports = r
}, function(t, e, i) {
	"use strict";

	function r(t, e) {
		var i = t;
		i.getComponent && (i.getComponent = function(t) {
			var i = e.getComponent.apply(e, arguments);
			if (!i) return i;
			var r = i.registerSourceHandler;
			return "Html5" === t && (i.registerSourceHandler = function(t, e) {
				return 0 === e ? r.apply(i, [t, 1]) : r.apply(i, arguments)
			}), i
		}), i.getTech && (i.getTech = function(t) {
			var i = e.getTech.apply(e, arguments);
			if (!i) return i;
			var r = i.registerSourceHandler;
			return "Html5" === t && (i.registerSourceHandler = function(t, e) {
				return 0 === e ? r.apply(i, [t, 1]) : r.apply(i, arguments)
			}), i
		})
	}

	function n(t, e) {
		function n() {
			var t = s.apply(window, arguments);
			try {
				u(t)
			} catch (t) {
				l.error("Videojs5 constructor error", t)
			}
			return t
		}

		function a() {
			var t = s.getPlayers();
			Object.keys(t).forEach(function(e) {
				u(t[e])
			})
		}
		if (l.info("Initializing Videojs5 plugin"), i(46), d(t), e.getConfig("DISABLE_PLUGINS") || e.getConfig("DISABLE_UNSUPPORTED") && !e.isSupported()) return l.warn("Aborting Videojs5 plugin initialization because Peer5 is not supported or disabled"), t;
		if (e.getConfig("FORCE_XHR_PLUGIN")) return c({
			vendor: "forced-xhr"
		}), t;
		var s = t;
		s.Hls && (s.Hls.GOAL_BUFFER_LENGTH = e.getConfig("MEDIA_MAXBUFFER") || 30), s.xhr && (s.xhr.XMLHttpRequest = e.VideoRequest), n._shimmed_ = !0;
		for (var f in s) n[f] = s[f];
		n.prototype = s.prototype;
		var h = i(39);
		return o(s, h), r(n, s), a(), document.addEventListener("DOMContentLoaded", a), window.addEventListener("load", a), window.videojs = n, l.info("Finished Videojs5 plugin initialization"), n
	}

	function a(t, e) {
		if (e = e || window.peer5, t = t || window.videojs, t && e) try {
			return n(t, e)
		} catch (t) {
			return l.error("Videojs5 init error", t), null
		}
		var i = [];
		return t || window.videojs || i.push("videojs"), e || window.peer5 || i.push("peer5"), s({
			onConditionsMet: function() {
				n(t || window.videojs, e || window.peer5)
			},
			globalsCondition: i
		}), null
	}
	var s = i(7),
		o = i(58),
		u = i(62),
		d = i(61),
		l = i(2)(),
		c = i(30);
	t.exports = a
}, function(t, e) {
	"use strict";
	t.exports = function(t) {
		function e() {
			function t() {
				var t = e.tech_,
					i = null;
				t.on("levels", function(t, r) {
					var n = r.levels;
					if (1 !== n.length) {
						i && (i.dispose(), e.controlBar.removeChild(i));
						var s = e.controlBar.getChild("fullscreenToggle");
						e.controlBar.removeChild(s), i = new a(e, {
							levels: n
						}), e.controlBar.addChild(i), s && e.controlBar.addChild(s)
					}
				})
			}
			var e = this;
			e.tech_ ? t() : e.one("ready", t)
		}
		var i = t.getComponent("MenuItem"),
			r = t.extend(i, {
				constructor: function(e, r) {
					i.call(this, e, r), this.fn = t.bind(this, this.onLevelSwitch), this.player().tech_.on("levelSwitch", this.fn)
				},
				handleClick: function(t) {
					i.prototype.handleClick.call(this, t), this.player().tech_.trigger("levelSwitch", this.options_.id)
				},
				onLevelSwitch: function(t, e) {
					this.options_.id !== e && this.selected(!1)
				},
				dispose: function() {
					i.prototype.dispose.call(this), this.player().tech_.off("levelSwitch", this.fn)
				}
			}),
			n = t.getComponent("MenuButton"),
			a = t.extend(n, {
				createItems: function() {
					return this.options_.levels.map(function(t) {
						return new r(this.player(), t)
					}, this)
				},
				buildCSSClass: function() {
					return "vjs-icon-hd vjs-icon-placeholder " + n.prototype.buildCSSClass.call(this)
				}
			}),
			s = t.registerPlugin || t.plugin;
		s("qualitySwitcher", e)
	}
}, function(t, e, i) {
	"use strict";

	function r(t) {
		var e = window.peer5,
			i = t;
		if (!i._shimmed_) {
			i._shimmed_ = !0;
			var r = i.options_,
				d = n(i.id_);
			if (d) {
				var l = r.autoplay,
					c = r.sources && r.sources[0],
					f = c && c.src || r.src,
					h = c && c.type || r.type;
				l || !f || h && !/x-mpegurl|dash/i.test(h) || e.prefetch(f);
				var p = (i.techName_ || "").toLowerCase(),
					g = d && "video" === d.tagName.toLowerCase(),
					m = !g || /flash/.test(p) ? "player" : "videoTag",
					y = a(i.id_, {
						element: d
					});
				e.attachPlayer(y), y.emit("media.info", {
					vendor: "videojs5",
					provider: p,
					tracking: m
				});
				var v;
				"videoTag" === m ? (v = o(d, y.onEvent), r.autoplay && v.forceLoadStart()) : s(i), t.one("dispose", function() {
					v && v.destroy(), y.destroy()
				}), u(d)
			}
		}
	}
	var n = i(9),
		a = i(8),
		s = i(59),
		o = i(10),
		u = i(38);
	t.exports = r
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
	"use strict";
	i(60)()
}]);