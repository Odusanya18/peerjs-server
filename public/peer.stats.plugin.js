! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var r = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "/", e(0)
}({
    0: function(t, e, i) {
        t.exports = i(140)
    },
    1: function(t, e) {
        "use strict";

        function i() {
            function t() {
                var t = n() - o;
                return t < 0 ? 0 : t
            }

            function e() {
                return "Stopwatch(" + t() + "ms)"
            }

            function i() {
                return o
            }
            var r = Object.create(null),
                o = n();
            return r.elapsed = t, r.toString = e, r.epoch = i, r
        }
        var n = function() {
            return Math.floor(performance.now())
        };
        t.exports = i, t.exports.now = n
    },
    5: function(t, e) {
        "use strict";
        t.exports = function(t, e, i) {
            function n(t, e) {
                return r.multiple ? [].slice.call(t.querySelectorAll(e)) : t.querySelector(e)
            }
            var r = i || {},
                o = e;
            return o = "string" == typeof o ? document.getElementById(o) : o, o = o ? o.tagName.toLowerCase() !== t ? n(o, t) : o : n(document, t), r.multiple && (o = Array.isArray(o) ? o : o && [o] || [], o = o.length ? o : null), o
        }
    },
    9: function(t, e, i) {
        "use strict";
        var n = i(5);
        t.exports = function(t) {
            var e, i = t || {};
            return ("string" == typeof t || t instanceof HTMLElement) && (i = {
                id: t
            }), e = n("video", i.id, {
                multiple: i.multiple
            }), i.includeAudioTag && !e && (e = n("audio", i.id, {
                multiple: i.multiple
            })), i.html5Only || e || (e = n("object", i.id, {
                multiple: i.multiple
            })), i.html5Only || e || (e = n("embed", i.id, {
                multiple: i.multiple
            })), e
        }
    },
    11: function(t, e) {
        "use strict";

        function i(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }

        function n() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                var n = Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                });
                if ("0123456789" !== n.join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    r[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (t) {
                return !1
            }
        }
        var r = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            a = Object.prototype.propertyIsEnumerable;
        t.exports = n() ? Object.assign : function(t, e) {
            for (var n, s, l = i(t), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var h in n) o.call(n, h) && (l[h] = n[h]);
                if (r) {
                    s = r(n);
                    for (var c = 0; c < s.length; c++) a.call(n, s[c]) && (l[s[c]] = n[s[c]])
                }
            }
            return l
        }
    },
    16: function(t, e) {
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
    },
    66: function(t, e) {
        "use strict";
        var i = {
            bytes: [
                [1099511627776, "TB"],
                [1073741824, "GB"],
                [1048576, "MB"],
                [1024, "KB"],
                [1, " bytes"],
                [0, " byte"]
            ],
            bps: [
                [1099511627776, "Tbps"],
                [1073741824, "Gbps"],
                [1048576, "Mbps"],
                [1024, "Kbps"],
                [0, "bps"]
            ]
        };
        t.exports = function(t, e) {
            var n = e || {};
            n.scale = n.scale || "bytes", n.precision = "number" == typeof n.precision ? n.precision : 1, n.defaultValue = void 0 !== n.defaultValue ? n.defaultValue : "";
            var r, o, a = Math.pow(10, n.precision),
                s = i[n.scale];
            return s.some(function(e) {
                return t > e[0] && (r = t / (e[0] || 1), o = e[1], !0)
            }), r ? Math.round(r * a) / a + o : n.defaultValue
        }
    },
    68: function(t, e) {
        function i(t, e) {
            var i = t[1] || "",
                r = t[3];
            if (!r) return i;
            if (e && "function" == typeof btoa) {
                var o = n(r),
                    a = r.sources.map(function(t) {
                        return "/*# sourceURL=" + r.sourceRoot + t + " */"
                    });
                return [i].concat(a).concat([o]).join("\n")
            }
            return [i].join("\n")
        }

        function n(t) {
            var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                i = "sourceMappingURL=data:application/json;charset=utf-8;base64," + e;
            return "/*# " + i + " */"
        }
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var n = i(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function(t, i) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var n = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (n[o] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    "number" == typeof a[0] && n[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), e.push(a))
                }
            }, e
        }
    },
    69: function(t, e, i) {
        "use strict";

        function n(t) {
            if (null === t || void 0 === t) throw new TypeError("Sources cannot be null or undefined");
            return Object(t)
        }

        function r(t, e, i) {
            var n = e[i];
            if (void 0 !== n && null !== n) {
                if (s.call(t, i) && (void 0 === t[i] || null === t[i])) throw new TypeError("Cannot convert undefined or null to object (" + i + ")");
                s.call(t, i) && a(n) ? t[i] = o(Object(t[i]), e[i]) : t[i] = n
            }
        }

        function o(t, e) {
            if (t === e) return t;
            e = Object(e);
            for (var i in e) s.call(e, i) && r(t, e, i);
            if (Object.getOwnPropertySymbols)
                for (var n = Object.getOwnPropertySymbols(e), o = 0; o < n.length; o++) l.call(e, n[o]) && r(t, e, n[o]);
            return t
        }
        var a = i(92),
            s = Object.prototype.hasOwnProperty,
            l = Object.prototype.propertyIsEnumerable;
        t.exports = function(t) {
            t = n(t);
            for (var e = 1; e < arguments.length; e++) o(t, arguments[e]);
            return t
        }
    },
    72: function(t, e, i) {
        function n(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i],
                    r = f[n.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                    for (; o < n.parts.length; o++) r.parts.push(h(n.parts[o], e))
                } else {
                    for (var a = [], o = 0; o < n.parts.length; o++) a.push(h(n.parts[o], e));
                    f[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function r(t, e) {
            for (var i = [], n = {}, r = 0; r < t.length; r++) {
                var o = t[r],
                    a = e.base ? o[0] + e.base : o[0],
                    s = o[1],
                    l = o[2],
                    u = o[3],
                    h = {
                        css: s,
                        media: l,
                        sourceMap: u
                    };
                n[a] ? n[a].parts.push(h) : i.push(n[a] = {
                    id: a,
                    parts: [h]
                })
            }
            return i
        }

        function o(t, e) {
            var i = b(t.insertInto);
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = S[S.length - 1];
            if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), S.push(e);
            else if ("bottom" === t.insertAt) i.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var r = b(t.insertInto + " " + t.insertAt.before);
                i.insertBefore(e, r)
            }
        }

        function a(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = S.indexOf(t);
            e >= 0 && S.splice(e, 1)
        }

        function s(t) {
            var e = document.createElement("style");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), u(e, t.attrs), o(t, e), e
        }

        function l(t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", u(e, t.attrs), o(t, e), e
        }

        function u(t, e) {
            Object.keys(e).forEach(function(i) {
                t.setAttribute(i, e[i])
            })
        }

        function h(t, e) {
            var i, n, r, o;
            if (e.transform && t.css) {
                if (o = e.transform(t.css), !o) return function() {};
                t.css = o
            }
            if (e.singleton) {
                var u = x++;
                i = y || (y = s(e)), n = c.bind(null, i, u, !1), r = c.bind(null, i, u, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = l(e), n = p.bind(null, i, e), r = function() {
                a(i), i.href && URL.revokeObjectURL(i.href)
            }) : (i = s(e), n = d.bind(null, i), r = function() {
                a(i)
            });
            return n(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        n(t = e)
                    } else r()
                }
        }

        function c(t, e, i, n) {
            var r = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = P(e, r);
            else {
                var o = document.createTextNode(r),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
            }
        }

        function d(t, e) {
            var i = e.css,
                n = e.media;
            if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i))
            }
        }

        function p(t, e, i) {
            var n = i.css,
                r = i.sourceMap,
                o = void 0 === e.convertToAbsoluteUrls && r;
            (e.convertToAbsoluteUrls || o) && (n = w(n)), r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([n], {
                    type: "text/css"
                }),
                s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }
        var f = {},
            m = function(t) {
                var e;
                return function() {
                    return "undefined" == typeof e && (e = t.apply(this, arguments)), e
                }
            },
            v = m(function() {
                return window && document && document.all && !window.atob
            }),
            g = function(t) {
                return document.querySelector(t)
            },
            b = function(t) {
                var e = {};
                return function(t) {
                    if ("function" == typeof t) return t();
                    if ("undefined" == typeof e[t]) {
                        var i = g.call(this, t);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                        e[t] = i
                    }
                    return e[t]
                }
            }(),
            y = null,
            x = 0,
            S = [],
            w = i(106);
        t.exports = function(t, e) {
            e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = v()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var i = r(t, e);
            return n(i, e),
                function(t) {
                    for (var o = [], a = 0; a < i.length; a++) {
                        var s = i[a],
                            l = f[s.id];
                        l.refs--, o.push(l)
                    }
                    if (t) {
                        var u = r(t, e);
                        n(u, e)
                    }
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a];
                        if (0 === l.refs) {
                            for (var h = 0; h < l.parts.length; h++) l.parts[h]();
                            delete f[l.id]
                        }
                    }
                }
        };
        var P = function() {
            var t = [];
            return function(e, i) {
                return t[e] = i, t.filter(Boolean).join("\n")
            }
        }()
    },
    90: function(t, e, i) {
        e = t.exports = i(68)(!1), e.push([t.id, '.p5-chart-legend{position:absolute!important;top:5px!important;left:5px!important;color:#000!important;text-align:left!important;font-size:11px!important}.p5-chart-legend>*{margin-top:4px!important;text-shadow:1px 1px 1px #fff!important}.p5-chart-legend>:before{content:"";border-style:solid;border-width:0 10px;margin-right:5px}.p5-chart-xaxis{position:absolute;bottom:0;width:100%}.p5-chart-xaxis>*{display:inline-block!important;text-align:left!important;text-shadow:1px 1px 1px #fff!important;margin-bottom:2px!important}.p5-chart-xaxis:after{position:absolute;content:"0s";bottom:0;right:0;text-shadow:1px 1px 1px #fff;margin-bottom:2px}', ""])
    },
    91: function(t, e, i) {
        e = t.exports = i(68)(!1), e.push([t.id, ".p5-overlay{position:absolute!important;width:40%!important;cursor:default!important;z-index:100;top:0;left:0}.p5-overlay-chart{width:100%!important;position:relative!important}.p5-overlay-stats{position:relative!important;text-align:left!important;z-index:99999!important;background:rgba(0,0,0,.55)!important;color:hsla(0,0%,100%,.65)!important;padding:3px 10px 6px!important;border-radius:3px!important;min-height:100px!important;white-space:pre!important;font-size:11px!important;text-shadow:1px 1px 1px #000!important}.p5-overlay-close{position:absolute;top:0;right:3px;cursor:pointer}", ""])
    },
    92: function(t, e) {
        "use strict";
        t.exports = function(t) {
            var e = typeof t;
            return null !== t && ("object" === e || "function" === e)
        }
    },
    103: function(t, e, i) {
        ! function(t) {
            function e(t) {
                this.options = n.extend({}, e.defaultOptions, t), this.disabled = !1, this.clear()
            }

            function i(t) {
                this.options = n.extend({}, i.defaultChartOptions, t), this.seriesSet = [], this.currentValueRange = 1, this.currentVisMinValue = 0, this.lastRenderTimeMillis = 0, this.lastChartTimestamp = 0, this.mousemove = this.mousemove.bind(this), this.mouseout = this.mouseout.bind(this)
            }
            Date.now = Date.now || function() {
                return (new Date).getTime()
            };
            var n = {
                extend: function() {
                    arguments[0] = arguments[0] || {};
                    for (var t = 1; t < arguments.length; t++)
                        for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && ("object" == typeof arguments[t][e] ? arguments[t][e] instanceof Array ? arguments[0][e] = arguments[t][e] : arguments[0][e] = n.extend(arguments[0][e], arguments[t][e]) : arguments[0][e] = arguments[t][e]);
                    return arguments[0]
                },
                binarySearch: function(t, e) {
                    for (var i = 0, n = t.length; i < n;) {
                        var r = i + n >> 1;
                        e < t[r][0] ? n = r : i = r + 1
                    }
                    return i
                }
            };
            e.defaultOptions = {
                resetBoundsInterval: 3e3,
                resetBounds: !0
            }, e.prototype.clear = function() {
                this.data = [], this.maxValue = Number.NaN, this.minValue = Number.NaN
            }, e.prototype.resetBounds = function() {
                if (this.data.length) {
                    this.maxValue = this.data[0][1], this.minValue = this.data[0][1];
                    for (var t = 1; t < this.data.length; t++) {
                        var e = this.data[t][1];
                        e > this.maxValue && (this.maxValue = e), e < this.minValue && (this.minValue = e)
                    }
                } else this.maxValue = Number.NaN, this.minValue = Number.NaN
            }, e.prototype.append = function(t, e, i) {
                for (var n = this.data.length - 1; n >= 0 && this.data[n][0] > t;) n--;
                n === -1 ? this.data.splice(0, 0, [t, e]) : this.data.length > 0 && this.data[n][0] === t ? i ? (this.data[n][1] += e, e = this.data[n][1]) : this.data[n][1] = e : n < this.data.length - 1 ? this.data.splice(n + 1, 0, [t, e]) : this.data.push([t, e]), this.maxValue = isNaN(this.maxValue) ? e : Math.max(this.maxValue, e), this.minValue = isNaN(this.minValue) ? e : Math.min(this.minValue, e)
            }, e.prototype.dropOldData = function(t, e) {
                for (var i = 0; this.data.length - i >= e && this.data[i + 1][0] < t;) i++;
                0 !== i && this.data.splice(0, i)
            }, i.tooltipFormatter = function(t, e) {
                for (var n = this.options.timestampFormatter || i.timeFormatter, r = [n(new Date(t))], o = 0; o < e.length; ++o) r.push('<span style="color:' + e[o].series.options.strokeStyle + '">' + this.options.yMaxFormatter(e[o].value, this.options.labels.precision) + "</span>");
                return r.join("<br>")
            }, i.defaultChartOptions = {
                millisPerPixel: 20,
                enableDpiScaling: !0,
                yMinFormatter: function(t, e) {
                    return parseFloat(t).toFixed(e)
                },
                yMaxFormatter: function(t, e) {
                    return parseFloat(t).toFixed(e)
                },
                yIntermediateFormatter: function(t, e) {
                    return parseFloat(t).toFixed(e)
                },
                maxValueScale: 1,
                minValueScale: 1,
                interpolation: "bezier",
                scaleSmoothing: .125,
                maxDataSetLength: 2,
                scrollBackwards: !1,
                displayDataFromPercentile: 1,
                grid: {
                    fillStyle: "#000000",
                    strokeStyle: "#777777",
                    lineWidth: 1,
                    sharpLines: !1,
                    millisPerLine: 1e3,
                    verticalSections: 2,
                    borderVisible: !0
                },
                labels: {
                    fillStyle: "#ffffff",
                    disabled: !1,
                    fontSize: 10,
                    fontFamily: "monospace",
                    precision: 2,
                    showIntermediateLabels: !1,
                    intermediateLabelSameAxis: !0
                },
                horizontalLines: [],
                tooltip: !1,
                tooltipLine: {
                    lineWidth: 1,
                    strokeStyle: "#BBBBBB"
                },
                tooltipFormatter: i.tooltipFormatter,
                nonRealtimeData: !1,
                responsive: !1,
                limitFPS: 0
            }, i.AnimateCompatibility = function() {
                var t = function(t, e) {
                        var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                            return window.setTimeout(function() {
                                t(Date.now())
                            }, 16)
                        };
                        return i.call(window, t, e)
                    },
                    e = function(t) {
                        var e = window.cancelAnimationFrame || function(t) {
                            clearTimeout(t)
                        };
                        return e.call(window, t)
                    };
                return {
                    requestAnimationFrame: t,
                    cancelAnimationFrame: e
                }
            }(), i.defaultSeriesPresentationOptions = {
                lineWidth: 1,
                strokeStyle: "#ffffff"
            }, i.prototype.addTimeSeries = function(t, e) {
                this.seriesSet.push({
                    timeSeries: t,
                    options: n.extend({}, i.defaultSeriesPresentationOptions, e)
                }), t.options.resetBounds && t.options.resetBoundsInterval > 0 && (t.resetBoundsTimerId = setInterval(function() {
                    t.resetBounds()
                }, t.options.resetBoundsInterval))
            }, i.prototype.removeTimeSeries = function(t) {
                for (var e = this.seriesSet.length, i = 0; i < e; i++)
                    if (this.seriesSet[i].timeSeries === t) {
                        this.seriesSet.splice(i, 1);
                        break
                    }
                t.resetBoundsTimerId && clearInterval(t.resetBoundsTimerId)
            }, i.prototype.getTimeSeriesOptions = function(t) {
                for (var e = this.seriesSet.length, i = 0; i < e; i++)
                    if (this.seriesSet[i].timeSeries === t) return this.seriesSet[i].options
            }, i.prototype.bringToFront = function(t) {
                for (var e = this.seriesSet.length, i = 0; i < e; i++)
                    if (this.seriesSet[i].timeSeries === t) {
                        var n = this.seriesSet.splice(i, 1);
                        this.seriesSet.push(n[0]);
                        break
                    }
            }, i.prototype.streamTo = function(t, e) {
                this.canvas = t, this.delay = e, this.start()
            }, i.prototype.getTooltipEl = function() {
                return this.tooltipEl || (this.tooltipEl = document.createElement("div"), this.tooltipEl.className = "smoothie-chart-tooltip", this.tooltipEl.style.position = "absolute", this.tooltipEl.style.display = "none", document.body.appendChild(this.tooltipEl)), this.tooltipEl
            }, i.prototype.updateTooltip = function() {
                var t = this.getTooltipEl();
                if (!this.mouseover || !this.options.tooltip) return void(t.style.display = "none");
                for (var e = this.lastChartTimestamp, i = this.options.scrollBackwards ? e - this.mouseX * this.options.millisPerPixel : e - (this.canvas.offsetWidth - this.mouseX) * this.options.millisPerPixel, r = [], o = 0; o < this.seriesSet.length; o++) {
                    var a = this.seriesSet[o].timeSeries;
                    if (!a.disabled) {
                        var s = n.binarySearch(a.data, i);
                        s > 0 && s < a.data.length && r.push({
                            series: this.seriesSet[o],
                            index: s,
                            value: a.data[s][1]
                        })
                    }
                }
                r.length ? (t.innerHTML = this.options.tooltipFormatter.call(this, i, r), t.style.display = "block") : t.style.display = "none"
            }, i.prototype.mousemove = function(t) {
                this.mouseover = !0, this.mouseX = t.offsetX, this.mouseY = t.offsetY, this.mousePageX = t.pageX, this.mousePageY = t.pageY;
                var e = this.getTooltipEl();
                e.style.top = Math.round(this.mousePageY) + "px", e.style.left = Math.round(this.mousePageX) + "px", this.updateTooltip()
            }, i.prototype.mouseout = function() {
                this.mouseover = !1, this.mouseX = this.mouseY = -1, this.tooltipEl && (this.tooltipEl.style.display = "none")
            }, i.prototype.resize = function() {
                var t, e, i = this.options.enableDpiScaling && window ? window.devicePixelRatio : 1;
                this.options.responsive ? (t = this.canvas.offsetWidth, e = this.canvas.offsetHeight, t !== this.lastWidth && (this.lastWidth = t, this.canvas.setAttribute("width", Math.floor(t * i).toString()), this.canvas.getContext("2d").scale(i, i)), e !== this.lastHeight && (this.lastHeight = e, this.canvas.setAttribute("height", Math.floor(e * i).toString()), this.canvas.getContext("2d").scale(i, i))) : 1 !== i && (t = parseInt(this.canvas.getAttribute("width")), e = parseInt(this.canvas.getAttribute("height")), this.originalWidth && Math.floor(this.originalWidth * i) === t || (this.originalWidth = t, this.canvas.setAttribute("width", Math.floor(t * i).toString()), this.canvas.style.width = t + "px", this.canvas.getContext("2d").scale(i, i)), this.originalHeight && Math.floor(this.originalHeight * i) === e || (this.originalHeight = e, this.canvas.setAttribute("height", Math.floor(e * i).toString()), this.canvas.style.height = e + "px", this.canvas.getContext("2d").scale(i, i)))
            }, i.prototype.start = function() {
                if (!this.frame) {
                    this.canvas.addEventListener("mousemove", this.mousemove), this.canvas.addEventListener("mouseout", this.mouseout);
                    var t = function() {
                        this.frame = i.AnimateCompatibility.requestAnimationFrame(function() {
                            if (this.options.nonRealtimeData) {
                                var e = new Date(0),
                                    i = this.seriesSet.reduce(function(t, e) {
                                        var i = e.timeSeries.data,
                                            n = Math.round(this.options.displayDataFromPercentile * i.length) - 1;
                                        if (n = n >= 0 ? n : 0, n = n <= i.length - 1 ? n : i.length - 1, i && i.length > 0) {
                                            var r = i[n][0];
                                            t = t > r ? t : r
                                        }
                                        return t
                                    }.bind(this), e);
                                this.render(this.canvas, i > e ? i : null)
                            } else this.render();
                            t()
                        }.bind(this))
                    }.bind(this);
                    t()
                }
            }, i.prototype.stop = function() {
                this.frame && (i.AnimateCompatibility.cancelAnimationFrame(this.frame), delete this.frame, this.canvas.removeEventListener("mousemove", this.mousemove), this.canvas.removeEventListener("mouseout", this.mouseout))
            }, i.prototype.updateValueRange = function() {
                for (var t = this.options, e = Number.NaN, i = Number.NaN, n = 0; n < this.seriesSet.length; n++) {
                    var r = this.seriesSet[n].timeSeries;
                    r.disabled || (isNaN(r.maxValue) || (e = isNaN(e) ? r.maxValue : Math.max(e, r.maxValue)), isNaN(r.minValue) || (i = isNaN(i) ? r.minValue : Math.min(i, r.minValue)))
                }
                if (null != t.maxValue ? e = t.maxValue : e *= t.maxValueScale, null != t.minValue ? i = t.minValue : i -= Math.abs(i * t.minValueScale - i), this.options.yRangeFunction) {
                    var o = this.options.yRangeFunction({
                        min: i,
                        max: e
                    });
                    i = o.min, e = o.max
                }
                if (!isNaN(e) && !isNaN(i)) {
                    var a = e - i,
                        s = a - this.currentValueRange,
                        l = i - this.currentVisMinValue;
                    this.isAnimatingScale = Math.abs(s) > .1 || Math.abs(l) > .1, this.currentValueRange += t.scaleSmoothing * s, this.currentVisMinValue += t.scaleSmoothing * l
                }
                this.valueRange = {
                    min: i,
                    max: e
                }
            }, i.prototype.render = function(t, e) {
                var i = Date.now();
                if (!(this.options.limitFPS > 0 && i - this.lastRenderTimeMillis < 1e3 / this.options.limitFPS)) {
                    if (!this.isAnimatingScale) {
                        var n = Math.min(1e3 / 6, this.options.millisPerPixel);
                        if (i - this.lastRenderTimeMillis < n) return
                    }
                    this.resize(), this.updateTooltip(), this.lastRenderTimeMillis = i, t = t || this.canvas, e = e || i - (this.delay || 0), e -= e % this.options.millisPerPixel, this.lastChartTimestamp = e;
                    var r = t.getContext("2d"),
                        o = this.options,
                        a = {
                            top: 0,
                            left: 0,
                            width: t.clientWidth,
                            height: t.clientHeight
                        },
                        s = e - a.width * o.millisPerPixel,
                        l = function(t) {
                            var e = t - this.currentVisMinValue;
                            return 0 === this.currentValueRange ? a.height : a.height - Math.round(e / this.currentValueRange * a.height)
                        }.bind(this),
                        u = function(t) {
                            return o.scrollBackwards ? Math.round((e - t) / o.millisPerPixel) : Math.round(a.width - (e - t) / o.millisPerPixel)
                        };
                    if (this.updateValueRange(), r.font = o.labels.fontSize + "px " + o.labels.fontFamily, r.save(), r.translate(a.left, a.top), r.beginPath(), r.rect(0, 0, a.width, a.height), r.clip(), r.save(), r.fillStyle = o.grid.fillStyle, r.clearRect(0, 0, a.width, a.height), r.fillRect(0, 0, a.width, a.height), r.restore(), r.save(), r.lineWidth = o.grid.lineWidth, r.strokeStyle = o.grid.strokeStyle, o.grid.millisPerLine > 0) {
                        r.beginPath();
                        for (var h = e - e % o.grid.millisPerLine; h >= s; h -= o.grid.millisPerLine) {
                            var c = u(h);
                            o.grid.sharpLines && (c -= .5), r.moveTo(c, 0), r.lineTo(c, a.height)
                        }
                        r.stroke(), r.closePath()
                    }
                    for (var d = 1; d < o.grid.verticalSections; d++) {
                        var p = Math.round(d * a.height / o.grid.verticalSections);
                        o.grid.sharpLines && (p -= .5), r.beginPath(), r.moveTo(0, p), r.lineTo(a.width, p), r.stroke(), r.closePath()
                    }
                    if (o.grid.borderVisible && (r.beginPath(), r.strokeRect(0, 0, a.width, a.height), r.closePath()), r.restore(), o.horizontalLines && o.horizontalLines.length)
                        for (var f = 0; f < o.horizontalLines.length; f++) {
                            var m = o.horizontalLines[f],
                                v = Math.round(l(m.value)) - .5;
                            r.strokeStyle = m.color || "#ffffff", r.lineWidth = m.lineWidth || 1, r.beginPath(), r.moveTo(0, v), r.lineTo(a.width, v), r.stroke(), r.closePath()
                        }
                    for (var g = 0; g < this.seriesSet.length; g++) {
                        r.save();
                        var b = this.seriesSet[g].timeSeries;
                        if (!b.disabled) {
                            var y = b.data,
                                x = this.seriesSet[g].options;
                            b.dropOldData(s, o.maxDataSetLength), r.lineWidth = x.lineWidth, r.strokeStyle = x.strokeStyle, r.beginPath();
                            for (var S = 0, w = 0, P = 0, T = 0; T < y.length && 1 !== y.length; T++) {
                                var M = u(y[T][0]),
                                    k = l(y[T][1]);
                                if (0 === T) S = M, r.moveTo(M, k);
                                else switch (o.interpolation) {
                                    case "linear":
                                    case "line":
                                        r.lineTo(M, k);
                                        break;
                                    case "bezier":
                                    default:
                                        r.bezierCurveTo(Math.round((w + M) / 2), P, Math.round(w + M) / 2, k, M, k);
                                        break;
                                    case "step":
                                        r.lineTo(M, P), r.lineTo(M, k)
                                }
                                w = M, P = k
                            }
                            y.length > 1 && (x.fillStyle && (r.lineTo(a.width + x.lineWidth + 1, P), r.lineTo(a.width + x.lineWidth + 1, a.height + x.lineWidth + 1), r.lineTo(S, a.height + x.lineWidth), r.fillStyle = x.fillStyle, r.fill()), x.strokeStyle && "none" !== x.strokeStyle && r.stroke(), r.closePath()), r.restore()
                        }
                    }
                    if (o.tooltip && this.mouseX >= 0 && (r.lineWidth = o.tooltipLine.lineWidth, r.strokeStyle = o.tooltipLine.strokeStyle, r.beginPath(), r.moveTo(this.mouseX, 0), r.lineTo(this.mouseX, a.height), r.closePath(), r.stroke(), this.updateTooltip()), !o.labels.disabled && !isNaN(this.valueRange.min) && !isNaN(this.valueRange.max)) {
                        var F = o.yMaxFormatter(this.valueRange.max, o.labels.precision),
                            L = o.yMinFormatter(this.valueRange.min, o.labels.precision),
                            N = o.scrollBackwards ? 0 : a.width - r.measureText(F).width - 2,
                            V = o.scrollBackwards ? 0 : a.width - r.measureText(L).width - 2;
                        r.fillStyle = o.labels.fillStyle, r.fillText(F, N, o.labels.fontSize), r.fillText(L, V, a.height - 2)
                    }
                    if (o.labels.showIntermediateLabels && !isNaN(this.valueRange.min) && !isNaN(this.valueRange.max) && o.grid.verticalSections > 0)
                        for (var O = (this.valueRange.max - this.valueRange.min) / o.grid.verticalSections, C = a.height / o.grid.verticalSections, d = 1; d < o.grid.verticalSections; d++) {
                            var p = a.height - Math.round(d * C);
                            o.grid.sharpLines && (p -= .5);
                            var R = o.yIntermediateFormatter(this.valueRange.min + d * O, o.labels.precision);
                            intermediateLabelPos = o.labels.intermediateLabelSameAxis ? o.scrollBackwards ? 0 : a.width - r.measureText(R).width - 2 : o.scrollBackwards ? a.width - r.measureText(R).width - 2 : 0, r.fillText(R, intermediateLabelPos, p - o.grid.lineWidth)
                        }
                    if (o.timestampFormatter && o.grid.millisPerLine > 0)
                        for (var E = o.scrollBackwards ? r.measureText(L).width : a.width - r.measureText(L).width + 4, h = e - e % o.grid.millisPerLine; h >= s; h -= o.grid.millisPerLine) {
                            var c = u(h);
                            if (!o.scrollBackwards && c < E || o.scrollBackwards && c > E) {
                                var j = new Date(h),
                                    A = o.timestampFormatter(j),
                                    D = r.measureText(A).width;
                                E = o.scrollBackwards ? c + D + 2 : c - D - 2, r.fillStyle = o.labels.fillStyle, o.scrollBackwards ? r.fillText(A, c, a.height - 2) : r.fillText(A, c - D, a.height - 2)
                            }
                        }
                    r.restore()
                }
            }, i.timeFormatter = function(t) {
                function e(t) {
                    return (t < 10 ? "0" : "") + t
                }
                return e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds())
            }, t.TimeSeries = e, t.SmoothieChart = i
        }(e)
    },
    104: function(t, e, i) {
        var n = i(90);
        "string" == typeof n && (n = [
            [t.id, n, ""]
        ]);
        var r, o = {
            hmr: !0
        };
        o.transform = r, o.insertInto = void 0;
        i(72)(n, o);
        n.locals && (t.exports = n.locals)
    },
    105: function(t, e, i) {
        var n = i(91);
        "string" == typeof n && (n = [
            [t.id, n, ""]
        ]);
        var r, o = {
            hmr: !0
        };
        o.transform = r, o.insertInto = void 0;
        i(72)(n, o);
        n.locals && (t.exports = n.locals)
    },
    106: function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var i = e.protocol + "//" + e.host,
                n = i + e.pathname.replace(/\/[^\/]*$/, "/"),
                r = t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                    var r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                        return e
                    }).replace(/^'(.*)'$/, function(t, e) {
                        return e
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)) return t;
                    var o;
                    return o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? i + r : n + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")"
                });
            return r
        }
    },
    140: function(t, e, i) {
        "use strict";
        var n = i(181);
        window.peer5 && (window.peer5.showStats = n.show, window.peer5.hideStats = n.hide, n.show(window.p5_stats_config))
    },
    180: function(t, e, i) {
        "use strict";

        function n(t, e) {
            function i(t, e) {
                var i = document.createElement("div"),
                    n = document.createElement("span");
                return i.innerHTML = e, i.style.color = t, i.appendChild(n), V.appendChild(i), {
                    labelEl: i,
                    valueEl: n
                }
            }

            function n(t, e) {
                var n = x.recycleSeries && d[e] || new h;
                d[e] = n;
                var a = {
                    timeSeries: n,
                    options: o({}, r[k.length], t)
                };
                return k.push(a), t.label && (a.elements = i(a.options.fillStyle || "", t.label)), a
            }

            function s() {
                return ""
            }

            function p() {
                var t = y.offsetWidth,
                    e = y.offsetHeight;
                return (t !== T || P !== e) && (P = e, T = t, !0)
            }

            function f() {
                var t = y.offsetWidth,
                    e = y.offsetHeight;
                N.setAttribute("width", t), N.setAttribute("height", x.enforceHeightRatio ? t * x.enforceHeightRatio : e);
                var i, n;
                x.duration ? (n = Math.round(x.duration / t), i = Math.round(x.duration / 1e3)) : (n = x.millisPerPixel, i = Math.round(t * (x.millisPerPixel / 1e3)));
                var r = Math.min(Math.round(i / 20), 4),
                    o = 10 * Math.round(i / r / 10),
                    h = [],
                    c = r;
                do h.unshift(o * c); while (--c);
                O.innerHTML = h.reverse().map(function(t) {
                    return '<div style="width:' + 100 / r + '%">-' + t + "s</div>"
                }).join("");
                var d, p;
                switch (x.scaleMode) {
                    case "total":
                        d = function() {
                            return l(F, {
                                scale: "bps"
                            })
                        };
                        break;
                    case "none":
                        d = s;
                        break;
                    default:
                        "number" == typeof x.scaleMode && (p = x.scaleMode), d = function(t) {
                            return l(t, {
                                scale: "bps"
                            })
                        }
                }
                var f;
                x.minYMax && (f = function(t) {
                    var e = Math.ceil(t.max / x.yTicks) * x.yTicks;
                    return {
                        min: 0,
                        max: Math.max(e, x.minYMax)
                    }
                }), w && (w.stop(), k.forEach(function(t) {
                    w.removeTimeSeries(t.timeSeries)
                })), w = new u(a({
                    maxValue: p,
                    yRangeFunction: f,
                    maxValueScale: 1.1,
                    minValue: 0,
                    millisPerPixel: n,
                    scaleSmoothing: x.scaleSmoothing,
                    interpolation: "linear",
                    grid: {
                        fillStyle: "#ffffff",
                        strokeStyle: "#eeeeee",
                        millisPerLine: 2e3,
                        verticalSections: 3
                    },
                    labels: {
                        fontSize: 13,
                        fillStyle: "#000000"
                    },
                    yMinFormatter: s,
                    yMaxFormatter: d
                }, x.smoothieOptions)), k.forEach(function(t) {
                    w.addTimeSeries(t.timeSeries, t.options)
                }), w.streamTo(N, 1e3), w.render(), w.stop(), M = !1
            }

            function m(t) {
                M || (M = !0, w.start());
                for (var e = Date.now(), i = 0, n = t.length; n--;)
                    if (k[n].timeSeries.append(e, t[n] + i), i += t[n], k[n].elements) {
                        var r = {
                                scale: "bps",
                                precision: t[n] > c ? 1 : 0
                            },
                            o = t[n] && l(Math.max(t[n], 1024), r);
                        k[n].elements.valueEl.innerHTML = " - " + (o || "0kbps")
                    }
                F = i
            }

            function v() {
                p() && f()
            }

            function g() {
                clearTimeout(S), S = setTimeout(v, 500)
            }

            function b() {
                w.stop(), window.removeEventListener("resize", g), y.innerHTML = ""
            }
            var y = t,
                x = e || {};
            x.series = x.series || [], x.millisPerPixel = x.millisPerPixel || 100, x.legend = x.legend !== !1, x.labelsPrecision = x.labelsPrecision || 10, x.scaleMode = x.scaleMode || "max", x.yTicks = x.yTicks || 1, x.scaleSmoothing = x.scaleSmoothing || .4;
            var S, w, P, T, M = !1,
                k = [],
                F = 0;
            y instanceof HTMLElement || (y = document.querySelector(y));
            var L = getComputedStyle(y);
            ["relative", "absolute", "fixed"].indexOf(L.position) === -1 && (y.style.position = "relative");
            var N = document.createElement("canvas");
            y.appendChild(N);
            var V = document.createElement("div");
            V.setAttribute("class", "p5-chart-legend"), y.appendChild(V);
            var O = document.createElement("div");
            return O.setAttribute("class", "p5-chart-xaxis"), y.appendChild(O), window.addEventListener("resize", g), x.series.forEach(n), p(), f(), {
                updateData: m,
                destroy: b,
                resize: v
            }
        }
        i(104);
        var r, o = i(11),
            a = i(69),
            s = i(103),
            l = i(66),
            u = s.SmoothieChart,
            h = s.TimeSeries,
            c = 1048576,
            d = [];
        r = [{
            strokeStyle: "none",
            fillStyle: "rgb(228, 102, 39)",
            lineWidth: 1
        }, {
            strokeStyle: "none",
            fillStyle: "rgb(66, 90, 102)",
            lineWidth: 1
        }], t.exports = n
    },
    181: function(t, e, i) {
        "use strict";

        function n() {
            c && c.destroy(), u && u.destroy(), s && s.parentElement && s.parentElement.removeChild(s)
        }

        function r() {
            function t(t) {
                var i = [],
                    n = {
                        scale: "bps",
                        defaultValue: "0"
                    };
                if (Object.keys(t).sort().forEach(function(e) {
                        switch (e) {
                            case "P2P Speed":
                            case "HTTP Speed":
                                i.push(e + ": " + m(t[e], n));
                                break;
                            default:
                                i.push(e + ": " + t[e])
                        }
                    }), e.innerHTML = i.join("\n"), u.updateData([t["P2P Speed"], t["HTTP Speed"]]), g.showCloseButton) {
                    var r = document.createElement("div");
                    r.className = "p5-overlay-close", r.innerHTML = "Ã—", r.onclick = function() {
                        e.parentNode.removeChild(e)
                    }, e.appendChild(r)
                }
                g.onStats && g.onStats(t)
            }
            n(), s = document.createElement("div"), s.className = "p5-overlay" + (g.className ? " " + g.className : ""), s.style.opacity = g.opacity || .7, s.onclick = function(t) {
                t.stopPropagation()
            };
            var e;
            g.statsContainer ? e = g.statsContainer : (e = document.createElement("div"), e.className = "p5-overlay-stats", s.appendChild(e));
            var i;
            g.chartContainer ? i = g.chartContainer : (i = document.createElement("div"), i.className = "p5-overlay-chart", s.appendChild(i)), g.statsContainer && g.chartContainer || l.parentNode.appendChild(s), u = p(i, v({
                scaleMode: "max",
                enforceHeightRatio: .5,
                minYMax: 5242880,
                yTicks: 5242880,
                duration: 6e4,
                recycleSeries: !0,
                series: [{
                    label: "P2P Speed"
                }, {
                    label: "HTTP Speed"
                }]
            }, g.chartOptions)), c = f(t, {
                interval: g.interval || 1e3,
                smoothingFactor: .2,
                minimumDecrement: 10240,
                videoTag: l
            })
        }

        function o(t) {
            function e() {
                var t = d();
                t && t !== l && (l = t, r())
            }
            t && (g = t, l && r()), clearInterval(h), h = setInterval(e, 500), e()
        }

        function a() {
            n(), clearInterval(h), l = null
        }
        i(105);
        var s, l, u, h, c, d = i(9),
            p = i(180),
            f = i(182),
            m = i(66),
            v = i(69),
            g = {};
        t.exports = {
            show: o,
            hide: a
        }
    },
    182: function(t, e, i) {
        "use strict";
        var n = i(16),
            r = i(66),
            o = i(1);
        t.exports = function(t, e) {
            function i(t, e) {
                for (var i = t / l.dataSpreadTicks, n = 0; n < l.dataSpreadTicks; n++) e[n] = (e[n] || 0) + i
            }

            function a() {
                var e = m.getStats && m.getStats();
                e || (h = {}, c = {}, x = [], S = [], e = {});
                var a = e.totalHttpDownloaded,
                    s = e.totalP2PDownloaded,
                    u = d.elapsed() / 1e3;
                d = o();
                var w = {},
                    P = Math.round(s / (s + a) * 100);
                if (w["Total P2P (%)"] = P ? Math.min(P, 99) + "%" : "0%", w.Peers = e.numOfPeers || 0, w["Total HTTP Downloaded"] = r(a) || 0, w["Total P2P Downloaded"] = r(s) || 0, w["# of Rebuffer"] = e["rebuffer.end"] && e["rebuffer.end"].length || 0, l.videoTag) {
                    var T = n(l.videoTag);
                    w["Render Method"] = "HTML5", w["Frames (drop/total)"] = T.dropped + "/" + T.total;
                    var M = T.total - p,
                        k = T.dropped - f,
                        F = Math.round(M / u) || 0,
                        L = Math.round((M - k) / u) || 0;
                    w["FPS (actual/video)"] = L + "/" + F, p = T.total, f = T.dropped
                }
                var N = e.totalHttpDownloaded - h.totalHttpDownloaded;
                i(N, x);
                var V = x.shift(),
                    O = V / u * 8,
                    C = e.totalP2PDownloaded - h.totalP2PDownloaded;
                i(C, S);
                var R = S.shift(),
                    E = R / u * 8;
                c["HTTP Speed"] && !O ? v++ : (b = 0, v = 0), c["P2P Speed"] && !E ? g++ : (y = 0, g = 0);
                var j = l.smoothingFactor;
                v > 4 && (j = 0, b || (b = Math.max(c["HTTP Speed"] / 3, l.minimumDecrement)), c["HTTP Speed"] = Math.max(c["HTTP Speed"] - b, 0));
                var A = 1 - j,
                    D = l.smoothingFactor;
                g > 8 && (D = 0, y || (y = Math.max(c["P2P Speed"] / 3, l.minimumDecrement)), c["P2P Speed"] = Math.max(c["P2P Speed"] - y, 0));
                var B = 1 - D,
                    H = Math.floor((c["HTTP Speed"] || 0) * A + O * j) || 0,
                    I = Math.floor((c["P2P Speed"] || 0) * B + E * D) || 0;
                w["HTTP Speed"] = H, w["P2P Speed"] = I, c = w, h = {
                    totalHttpDownloaded: e.totalHttpDownloaded,
                    totalP2PDownloaded: e.totalP2PDownloaded
                }, t(w)
            }

            function s() {
                clearInterval(u)
            }
            var l = e || {};
            l.interval = l.interval || 1e3, l.smoothingFactor = l.smoothingFactor || 1, l.minimumDecrement = l.minimumDecrement || 51200, l.dataSpreadTicks = l.dataSpreadTicks || Math.round(1e4 / l.interval);
            var u, h = {},
                c = {},
                d = o(),
                p = 0,
                f = 0,
                m = window.peer5,
                v = 0,
                g = 0,
                b = 0,
                y = 0,
                x = [],
                S = [];
            return u = setInterval(a, l.interval), a(), {
                destroy: s
            }
        }
    }
});