! function(t) {
    function e(i) {
        if (a[i]) return a[i].exports;
        var s = a[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
    }
    var a = {};
    return e.m = t, e.c = a, e.p = "/", e(0)
}({
    0: function(t, e, a) {
        t.exports = a(111)
    },
    37: function(t, e) {
        t.exports = {
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
    },
    78: function(t, e, a) {
        (function(e) {
            a(89), a(82);
            var i = e.core.util,
                s = function() {
                    function t(t, e) {
                        for (var a, i, s = 0; s < Math.min(t.length, e.length); s++)
                            if (t[s] !== e[s]) {
                                a = s;
                                break
                            }
                        for (var r = t.length - 1, n = e.length - 1; r >= 0 && n >= 0; r--, n--)
                            if (t[r] !== e[n]) {
                                i = n;
                                break
                            }
                        var o = e.substring(a, i + 1);
                        return Number(o)
                    }

                    function a(t) {
                        var e = t.split("/"),
                            a = e[0] + "//" + e[2] + "/";
                        return a
                    }

                    function s(t) {
                        if (t.mpdAvailabilityStartTime > t.manifestCreationTime) return -1;
                        var e = t.mpdSuggestedPresentationDelay || 0,
                            a = t.mpdTimeShiftBufferDepth || 0,
                            i = t.segmentTemplate,
                            s = i.segmentDuration / i.timescale,
                            r = t.manifestCreationTime - (t.mpdAvailabilityStartTime + t.periodStart);
                        if (r < 0) return -1;
                        var n = r - 2 * s - a;
                        n < 0 && (n = 0);
                        var o = Math.ceil(n / s) * s,
                            h = r;
                        if (h < 0) return -1;
                        var l = Math.floor(h / s) * s,
                            p = l - e;
                        p < 0 && (p = 0);
                        var u, d = Math.floor(p / s) * s;
                        u = d >= o ? d : o;
                        var m = u / s + 1;
                        return m += t.segmentTemplate.startNumber || 0
                    }

                    function r(t, e) {
                        for (var a = [], i = t.mediaPresentationDuration, s = 0; s < t.periods.length; s++) {
                            var r = t.periods[s];
                            if (i = r.duration || i, r.adaptationSets)
                                for (var n = 0; n < r.adaptationSets.length; n++) {
                                    var o = r.adaptationSets[n];
                                    if (o.representations)
                                        for (var h = 0; h < o.representations.length; h++) {
                                            var l = o.representations[h];
                                            l.mpdType = t.type, l.mpdAvailabilityStartTime = t.availabilityStartTime, l.mpdSuggestedPresentationDelay = t.suggestedPresentationDelay, l.mpdTimeShiftBufferDepth = t.timeShiftBufferDepth, l.periodStart = r.start, l.periodDuration = i, l.manifestCreationTime = e, a.push(l)
                                        }
                                }
                        }
                        return a
                    }

                    function n(t) {
                        if (t.baseUrl && t.baseUrl.path_) {
                            var e = t.baseUrl.path_.lastIndexOf("/");
                            return e !== -1 ? t.baseUrl.path_.substring(0, e + 1) : t.baseUrl.path_
                        }
                        return ""
                    }

                    function o(e) {
                        var a = i.UrlUtils.combine(e.urlPrefix, i.UrlUtils.combine(e.segmentBaseUrl, e.staticParsedUrlTemplate)),
                            r = Math.ceil(1800 / e.normalizedSegmentDuration),
                            n = s(e);
                        if (n < 0) return null;
                        for (var o = n + r, h = [], l = [], p = n; p < o; p++) {
                            var u = a.replace("$Number$", p);
                            h.push(u), l.push(p)
                        }
                        return h = {
                            segs: h,
                            seqs: l,
                            generateNextSegments: function(i) {
                                for (var s = t(a, i), n = s + 1, o = n + r, h = e.segmentTemplate.segmentDuration / (e.segmentTemplate.timescale || 1), l = [], p = [], u = n; u < o; u++) {
                                    var d = a.replace("$Number$", u);
                                    l.push(d), p.push(u)
                                }
                                return {
                                    segs: l,
                                    duration: h,
                                    seqs: p
                                }
                            }
                        }
                    }

                    function h(t) {
                        for (var e = Math.ceil(t.periodDuration / t.normalizedSegmentDuration), a = t.segmentTemplate.startNumber || 1, s = a + e, r = [], n = [], o = a; o < s; o++) {
                            var h = t.staticParsedUrlTemplate.replace("$Number$", o);
                            /https?:\/\//.test(h) || (h = i.UrlUtils.combine(t.urlPrefix, i.UrlUtils.combine(t.segmentBaseUrl, h))), r.push(h), n.push(o)
                        }
                        return {
                            segs: r,
                            seqs: n
                        }
                    }

                    function l(t) {
                        var e = [],
                            a = [],
                            s = [];
                        if (t.segmentTemplate && t.segmentTemplate.timeline && t.segmentTemplate.timeline.timePoints && t.segmentTemplate.timeline.timePoints.length > 0)
                            for (var r = null, n = 0; n < t.segmentTemplate.timeline.timePoints.length; n++) {
                                var o = t.segmentTemplate.timeline.timePoints[n],
                                    h = [],
                                    l = o.startTime || r || 0;
                                r = l + o.duration * (o.repeat || 1);
                                for (var p = l, u = 0; u < (o.repeat || 1); p += o.duration, u++) {
                                    var d = o.duration / (t.segmentTemplate.timescale || 1);
                                    a.push(d);
                                    var m = t.staticParsedUrlTemplate.replace("$Time$", p).replace("$Number$", n),
                                        g = i.UrlUtils.combine(t.urlPrefix, i.UrlUtils.combine(t.segmentBaseUrl, m));
                                    h.push(g), s.push(p)
                                }
                                e = e.concat(h)
                            }
                        return {
                            segs: e,
                            durations: a,
                            seqs: s
                        }
                    }

                    function p(t) {
                        var e;
                        e = t.periodDuration ? h(t) : o(t);
                        for (var a = t.segmentTemplate.segmentDuration / (t.segmentTemplate.timescale || 1), i = [], s = 0; s < e.segs.length; s++) i.push(a);
                        return e.durations = i, e
                    }

                    function u(t) {
                        var e = n(t);
                        if (t.segmentList && t.segmentList.segmentUrls && t.segmentList.segmentUrls.length > 0) {
                            for (var a = t.segmentList.segmentDuration / (t.segmentList.timescale || 1), s = [], r = 0; r < t.segmentList.segmentUrls.length; r++) s.push(a);
                            var o = t.segmentList.segmentUrls.map(function(e) {
                                var a = i.UrlUtils.combine(t.urlPrefix, i.UrlUtils.combine(t.segmentBaseUrl, e.mediaUrl.path_));
                                return a
                            });
                            return {
                                segs: o,
                                durations: s
                            }
                        }
                        if (t.segmentTemplate && t.segmentTemplate.mediaUrlTemplate) {
                            t.staticParsedUrlTemplate = t.segmentTemplate.mediaUrlTemplate.replace("$Bandwidth$", t.bandwidth).replace("$RepresentationID$", t.id), t.normalizedSegmentDuration = t.segmentTemplate.timescale ? t.segmentTemplate.segmentDuration / t.segmentTemplate.timescale : t.segmentTemplate.segmentDuration, t.segmentBaseUrl = e;
                            var h = t.segmentTemplate && t.segmentTemplate.timeline && t.segmentTemplate.timeline.timePoints && t.segmentTemplate.timeline.timePoints.length > 0;
                            if (h || t.staticParsedUrlTemplate.indexOf("$Time$") !== -1) return l(t);
                            if (t.staticParsedUrlTemplate.indexOf("$Number$") !== -1) {
                                var u = p(t);
                                if (u) return u
                            }
                            return {}
                        }
                        return {}
                    }

                    function d(t, e, a) {
                        for (var i = {}, s = 0; s < e.length; s++) {
                            var r = e[s];
                            r.urlPrefix = t;
                            var n = u(r),
                                o = "representation_" + s + "_" + r.id,
                                h = {
                                    segments: n.segs || [],
                                    durations: n.durations || [],
                                    seqs: n.seqs || [],
                                    mode: a,
                                    generateNextSegmentsFunc: n.generateNextSegments
                                };
                            i[o] = h
                        }
                        return i
                    }

                    function m(t, i) {
                        var s = e.shaka.dash.mpd.parseMpd(i, t);
                        if (!s) return null;
                        var n = (new Date).getTime() / 1e3,
                            o = r(s, n),
                            h = a(t),
                            l = "dynamic" === s.type ? "live" : "vod",
                            p = d(h, o, l),
                            u = {};
                        return Object.keys(p).forEach(function(t) {
                            var e = p[t],
                                a = e.segments.map(function(t, a) {
                                    return {
                                        url: t,
                                        duration: 1e3 * e.durations[a],
                                        sequence: e.seqs[a]
                                    }
                                });
                            u[t] = {
                                type: "segments",
                                protocol: "dash",
                                mode: e.mode,
                                segments: a,
                                url: t
                            }
                        }), u
                    }
                    return {
                        parse: m
                    }
                };
            t.exports = s()
        }).call(e, a(37))
    },
    79: function(t, e, a) {
        (function(t) {
            t.shaka.util.DataViewReader = function(e, a) {
                this.dataView_ = e, this.littleEndian_ = a == t.shaka.util.DataViewReader.Endianness.LITTLE_ENDIAN, this.position_ = 0
            }, t.shaka.util.DataViewReader.Endianness = {
                BIG_ENDIAN: 0,
                LITTLE_ENDIAN: 1
            }, t.shaka.util.DataViewReader.prototype.hasMoreData = function() {
                return this.position_ < this.dataView_.byteLength
            }, t.shaka.util.DataViewReader.prototype.getPosition = function() {
                return this.position_
            }, t.shaka.util.DataViewReader.prototype.getLength = function() {
                return this.dataView_.byteLength
            }, t.shaka.util.DataViewReader.prototype.readUint8 = function() {
                try {
                    var t = this.dataView_.getUint8(this.position_)
                } catch (t) {
                    this.throwOutOfBounds_()
                }
                return this.position_ += 1, t
            }, t.shaka.util.DataViewReader.prototype.readUint16 = function() {
                try {
                    var t = this.dataView_.getUint16(this.position_, this.littleEndian_)
                } catch (t) {
                    this.throwOutOfBounds_()
                }
                return this.position_ += 2, t
            }, t.shaka.util.DataViewReader.prototype.readUint32 = function() {
                try {
                    var t = this.dataView_.getUint32(this.position_, this.littleEndian_)
                } catch (t) {
                    this.throwOutOfBounds_()
                }
                return this.position_ += 4, t
            }, t.shaka.util.DataViewReader.prototype.readUint64 = function() {
                var t, e;
                try {
                    this.littleEndian_ ? (t = this.dataView_.getUint32(this.position_, !0), e = this.dataView_.getUint32(this.position_ + 4, !0)) : (e = this.dataView_.getUint32(this.position_, !1), t = this.dataView_.getUint32(this.position_ + 4, !1))
                } catch (t) {
                    this.throwOutOfBounds_()
                }
                if (e > 2097151) throw new shaka.util.Error(shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.JS_INTEGER_OVERFLOW);
                return this.position_ += 8, e * Math.pow(2, 32) + t
            }, t.shaka.util.DataViewReader.prototype.readBytes = function(t) {
                this.position_ + t > this.dataView_.byteLength && this.throwOutOfBounds_();
                var e = this.dataView_.buffer.slice(this.position_, this.position_ + t);
                return this.position_ += t, new Uint8Array(e)
            }, t.shaka.util.DataViewReader.prototype.skip = function(t) {
                this.position_ + t > this.dataView_.byteLength && this.throwOutOfBounds_(), this.position_ += t
            }, t.shaka.util.DataViewReader.prototype.readTerminatedString = function() {
                for (var e = this.position_; this.hasMoreData();) {
                    var a = this.dataView_.getUint8(this.position_);
                    if (0 == a) break;
                    this.position_ += 1
                }
                var i = this.dataView_.buffer.slice(e, this.position_);
                return this.position_ += 1, t.shaka.util.StringUtils.fromUTF8(i)
            }, t.shaka.util.DataViewReader.prototype.throwOutOfBounds_ = function() {
                throw new shaka.util.Error(shaka.util.Error.Category.MEDIA, shaka.util.Error.Code.BUFFER_READ_OUT_OF_BOUNDS)
            }
        }).call(e, a(37))
    },
    80: function(t, e, a) {
        (function(t) {
            t.shaka.util.LanguageUtils.match = function(e, a, i) {
                t.shaka.util.LanguageUtils;
                return i == a || (e >= t.shaka.util.LanguageUtils.MatchType.BASE_LANGUAGE_OKAY && i == a.split("-")[0] || e >= t.shaka.util.LanguageUtils.MatchType.OTHER_SUB_LANGUAGE_OKAY && i.split("-")[0] == a.split("-")[0])
            }, t.shaka.util.LanguageUtils.MatchType = {
                EXACT: 0,
                BASE_LANGUAGE_OKAY: 1,
                OTHER_SUB_LANGUAGE_OKAY: 2,
                MIN: 0,
                MAX: 2
            }, t.shaka.util.LanguageUtils.normalize = function(e) {
                var a = e.toLowerCase().split("-"),
                    i = a[0],
                    s = t.shaka.util.LanguageUtils.isoMap_[i];
                return s && (a[0] = s), a.join("-")
            }, t.shaka.util.LanguageUtils.isoMap_ = {
                aar: "aa",
                abk: "ab",
                afr: "af",
                aka: "ak",
                alb: "sq",
                amh: "am",
                ara: "ar",
                arg: "an",
                arm: "hy",
                asm: "as",
                ava: "av",
                ave: "ae",
                aym: "ay",
                aze: "az",
                bak: "ba",
                bam: "bm",
                baq: "eu",
                bel: "be",
                ben: "bn",
                bih: "bh",
                bis: "bi",
                bod: "bo",
                bos: "bs",
                bre: "br",
                bul: "bg",
                bur: "my",
                cat: "ca",
                ces: "cs",
                cha: "ch",
                che: "ce",
                chi: "zh",
                chu: "cu",
                chv: "cv",
                cor: "kw",
                cos: "co",
                cre: "cr",
                cym: "cy",
                cze: "cs",
                dan: "da",
                deu: "de",
                div: "dv",
                dut: "nl",
                dzo: "dz",
                ell: "el",
                eng: "en",
                epo: "eo",
                est: "et",
                eus: "eu",
                ewe: "ee",
                fao: "fo",
                fas: "fa",
                fij: "fj",
                fin: "fi",
                fra: "fr",
                fre: "fr",
                fry: "fy",
                ful: "ff",
                geo: "ka",
                ger: "de",
                gla: "gd",
                gle: "ga",
                glg: "gl",
                glv: "gv",
                gre: "el",
                grn: "gn",
                guj: "gu",
                hat: "ht",
                hau: "ha",
                heb: "he",
                her: "hz",
                hin: "hi",
                hmo: "ho",
                hrv: "hr",
                hun: "hu",
                hye: "hy",
                ibo: "ig",
                ice: "is",
                ido: "io",
                iii: "ii",
                iku: "iu",
                ile: "ie",
                ina: "ia",
                ind: "id",
                ipk: "ik",
                isl: "is",
                ita: "it",
                jav: "jv",
                jpn: "ja",
                kal: "kl",
                kan: "kn",
                kas: "ks",
                kat: "ka",
                kau: "kr",
                kaz: "kk",
                khm: "km",
                kik: "ki",
                kin: "rw",
                kir: "ky",
                kom: "kv",
                kon: "kg",
                kor: "ko",
                kua: "kj",
                kur: "ku",
                lao: "lo",
                lat: "la",
                lav: "lv",
                lim: "li",
                lin: "ln",
                lit: "lt",
                ltz: "lb",
                lub: "lu",
                lug: "lg",
                mac: "mk",
                mah: "mh",
                mal: "ml",
                mao: "mi",
                mar: "mr",
                may: "ms",
                mkd: "mk",
                mlg: "mg",
                mlt: "mt",
                mon: "mn",
                mri: "mi",
                msa: "ms",
                mya: "my",
                nau: "na",
                nav: "nv",
                nbl: "nr",
                nde: "nd",
                ndo: "ng",
                nep: "ne",
                nld: "nl",
                nno: "nn",
                nob: "nb",
                nor: "no",
                nya: "ny",
                oci: "oc",
                oji: "oj",
                ori: "or",
                orm: "om",
                oss: "os",
                pan: "pa",
                per: "fa",
                pli: "pi",
                pol: "pl",
                por: "pt",
                pus: "ps",
                que: "qu",
                roh: "rm",
                ron: "ro",
                rum: "ro",
                run: "rn",
                rus: "ru",
                sag: "sg",
                san: "sa",
                sin: "si",
                slk: "sk",
                slo: "sk",
                slv: "sl",
                sme: "se",
                smo: "sm",
                sna: "sn",
                snd: "sd",
                som: "so",
                sot: "st",
                spa: "es",
                sqi: "sq",
                srd: "sc",
                srp: "sr",
                ssw: "ss",
                sun: "su",
                swa: "sw",
                swe: "sv",
                tah: "ty",
                tam: "ta",
                tat: "tt",
                tel: "te",
                tgk: "tg",
                tgl: "tl",
                tha: "th",
                tib: "bo",
                tir: "ti",
                ton: "to",
                tsn: "tn",
                tso: "ts",
                tuk: "tk",
                tur: "tr",
                twi: "tw",
                uig: "ug",
                ukr: "uk",
                urd: "ur",
                uzb: "uz",
                ven: "ve",
                vie: "vi",
                vol: "vo",
                wel: "cy",
                wln: "wa",
                wol: "wo",
                xho: "xh",
                yid: "yi",
                yor: "yo",
                zha: "za",
                zho: "zh",
                zul: "zu"
            }
        }).call(e, a(37))
    },
    81: function(t, e, a) {
        (function(t) {
            t.shaka.util.Mp4Parser.findBox = function(e, a) {
                for (; a.hasMoreData();) {
                    var i = a.getPosition(),
                        s = a.readUint32(),
                        r = a.readUint32();
                    if (1 == s ? s = a.readUint64() : 0 == s && (s = a.getLength() - i), r == e) return s;
                    a.skip(s - (a.getPosition() - i))
                }
                return t.shaka.util.Mp4Parser.BOX_NOT_FOUND
            }, t.shaka.util.Mp4Parser.findSampleDescriptionBox = function(e, a) {
                for (var i = new t.shaka.util.DataViewReader(new DataView(e), t.shaka.util.DataViewReader.Endianness.BIG_ENDIAN), s = t.shaka.util.Mp4Parser, r = [
                        [s.BOX_TYPE_MOOV, 0],
                        [s.BOX_TYPE_TRAK, 0],
                        [s.BOX_TYPE_MDIA, 0],
                        [s.BOX_TYPE_MINF, 0],
                        [s.BOX_TYPE_STBL, 0],
                        [s.BOX_TYPE_STSD, 8],
                        [a, 0]
                    ], n = s.BOX_NOT_FOUND, o = 0; o < r.length; o++) {
                    var h = r[o][0],
                        l = r[o][1];
                    if (n = s.findBox(h, i), n == s.BOX_NOT_FOUND) return s.BOX_NOT_FOUND;
                    i.skip(l)
                }
                return n
            }, t.shaka.util.Mp4Parser.BOX_NOT_FOUND = -1, t.shaka.util.Mp4Parser.BOX_TYPE_MDAT = 1835295092, t.shaka.util.Mp4Parser.BOX_TYPE_MOOV = 1836019574, t.shaka.util.Mp4Parser.BOX_TYPE_TRAK = 1953653099, t.shaka.util.Mp4Parser.BOX_TYPE_MDIA = 1835297121, t.shaka.util.Mp4Parser.BOX_TYPE_MINF = 1835626086, t.shaka.util.Mp4Parser.BOX_TYPE_STBL = 1937007212, t.shaka.util.Mp4Parser.BOX_TYPE_STSD = 1937011556
        }).call(e, a(37))
    },
    82: function(t, e, a) {
        (function(t) {
            a(83), a(80), a(86), a(85), a(84), a(79), a(81), a(88), a(87), t.shaka.dash.mpd.parseMpd = function(e, a) {
                var i = new DOMParser,
                    s = i.parseFromString(e, "text/xml");
                if (!s) return null;
                var r = {
                    baseUrl: new t.goog.Uri(a)
                };
                return t.shaka.dash.mpd.parseChild_(r, s, t.shaka.dash.mpd.Mpd)
            }, t.shaka.dash.mpd.DEFAULT_MIN_BUFFER_TIME_ = 5, t.shaka.dash.mpd.DEFAULT_SUGGESTED_PRESENTATION_DELAY_ = 1, t.shaka.dash.mpd.Mpd = function() {
                this.url = null, this.id = null, this.type = "static", this.baseUrl = null, this.updateLocation = null, this.mediaPresentationDuration = null, this.minBufferTime = t.shaka.dash.mpd.DEFAULT_MIN_BUFFER_TIME_, this.minUpdatePeriod = null, this.availabilityStartTime = null, this.timeShiftBufferDepth = null, this.suggestedPresentationDelay = t.shaka.dash.mpd.DEFAULT_SUGGESTED_PRESENTATION_DELAY_, this.periods = []
            }, t.shaka.dash.mpd.Period = function() {
                this.id = null, this.start = null, this.duration = null, this.baseUrl = null, this.segmentBase = null, this.segmentList = null, this.segmentTemplate = null, this.adaptationSets = []
            }, t.shaka.dash.mpd.AdaptationSet = function() {
                this.id = null, this.lang = null, this.contentType = null, this.width = null, this.height = null, this.mimeType = null, this.codecs = null, this.main = !1, this.baseUrl = null, this.segmentBase = null, this.segmentList = null, this.segmentTemplate = null, this.contentProtections = [], this.representations = []
            }, t.shaka.dash.mpd.Role = function() {
                this.value = null
            }, t.shaka.dash.mpd.ContentComponent = function() {
                this.id = null, this.lang = null, this.contentType = null
            }, t.shaka.dash.mpd.Representation = function() {
                this.id = null, this.lang = null, this.bandwidth = null, this.width = null, this.height = null, this.mimeType = null, this.codecs = null, this.baseUrl = null, this.segmentBase = null, this.segmentList = null, this.segmentTemplate = null, this.contentProtections = []
            }, t.shaka.dash.mpd.ContentProtection = function() {
                this.schemeIdUri = null, this.value = null, this.children = [], this.pssh = null
            }, t.shaka.dash.mpd.CencPssh = function() {
                this.psshBox = null, this.parsedPssh = null
            }, t.shaka.dash.mpd.BaseUrl = function() {
                this.url = null
            }, t.shaka.dash.mpd.Location = function() {
                this.url = null
            }, t.shaka.dash.mpd.SegmentBase = function() {
                this.baseUrl = null, this.timescale = 1, this.presentationTimeOffset = null, this.indexRange = null, this.representationIndex = null, this.initialization = null
            }, t.shaka.dash.mpd.SegmentBase.prototype.clone = function() {
                var e = t.shaka.dash.mpd,
                    a = new t.shaka.dash.mpd.SegmentBase;
                return a.baseUrl = this.baseUrl ? new t.goog.Uri(this.baseUrl) : null, a.timescale = this.timescale, a.presentationTimeOffset = this.presentationTimeOffset, a.indexRange = e.clone_(this.indexRange), a.representationIndex = e.clone_(this.representationIndex), a.initialization = e.clone_(this.initialization), a
            }, t.shaka.dash.mpd.RepresentationIndex = function() {
                this.url = null, this.range = null
            }, t.shaka.dash.mpd.RepresentationIndex.prototype.clone = function() {
                var e = t.shaka.dash.mpd,
                    a = new t.shaka.dash.mpd.RepresentationIndex;
                return a.url = this.url ? new t.goog.Uri(this.url) : null, a.range = e.clone_(this.range), a
            }, t.shaka.dash.mpd.Initialization = function() {
                this.url = null, this.range = null
            }, t.shaka.dash.mpd.Initialization.prototype.clone = function() {
                var e = t.shaka.dash.mpd,
                    a = new t.shaka.dash.mpd.Initialization;
                return a.url = this.url ? new t.goog.Uri(this.url) : null, a.range = e.clone_(this.range), a
            }, t.shaka.dash.mpd.SegmentList = function() {
                this.baseUrl = null, this.timescale = 1, this.presentationTimeOffset = null, this.segmentDuration = null, this.startNumber = 1, this.initialization = null, this.segmentUrls = []
            }, t.shaka.dash.mpd.SegmentList.prototype.clone = function() {
                var e = t.shaka.dash.mpd,
                    a = new t.shaka.dash.mpd.SegmentList;
                return a.baseUrl = this.baseUrl ? new t.goog.Uri(this.baseUrl) : null, a.timescale = this.timescale, a.presentationTimeOffset = this.presentationTimeOffset, a.segmentDuration = this.segmentDuration, a.startNumber = this.startNumber, a.initialization = e.clone_(this.initialization), a.segmentUrls = this.segmentUrls.map(function(t) {
                    return t.clone()
                }), a
            }, t.shaka.dash.mpd.SegmentUrl = function() {
                this.mediaUrl = null, this.mediaRange = null
            }, t.shaka.dash.mpd.SegmentUrl.prototype.clone = function() {
                var e = t.shaka.dash.mpd,
                    a = new t.shaka.dash.mpd.SegmentUrl;
                return a.mediaUrl = this.mediaUrl ? new t.goog.Uri(this.mediaUrl) : null, a.mediaRange = e.clone_(this.mediaRange), a
            }, t.shaka.dash.mpd.SegmentTemplate = function() {
                this.timescale = 1, this.presentationTimeOffset = null, this.segmentDuration = null, this.startNumber = 1, this.mediaUrlTemplate = null, this.indexUrlTemplate = null, this.initializationUrlTemplate = null, this.timeline = null
            }, t.shaka.dash.mpd.SegmentTemplate.prototype.clone = function() {
                var e = t.shaka.dash.mpd,
                    a = new t.shaka.dash.mpd.SegmentTemplate;
                return a.timescale = this.timescale, a.presentationTimeOffset = this.presentationTimeOffset, a.segmentDuration = this.segmentDuration, a.startNumber = this.startNumber, a.mediaUrlTemplate = this.mediaUrlTemplate, a.indexUrlTemplate = this.indexUrlTemplate, a.initializationUrlTemplate = this.initializationUrlTemplate, a.timeline = e.clone_(this.timeline), a
            }, t.shaka.dash.mpd.SegmentTimeline = function() {
                this.timePoints = []
            }, t.shaka.dash.mpd.SegmentTimeline.prototype.clone = function() {
                var e = new t.shaka.dash.mpd.SegmentTimeline;
                return e.timePoints = this.timePoints.map(function(t) {
                    return t.clone()
                }), e
            }, t.shaka.dash.mpd.SegmentTimePoint = function() {
                this.startTime = null, this.duration = null, this.repeat = null
            }, t.shaka.dash.mpd.SegmentTimePoint.prototype.clone = function() {
                var e = new t.shaka.dash.mpd.SegmentTimePoint;
                return e.startTime = this.startTime, e.duration = this.duration, e.repeat = this.repeat, e
            }, t.shaka.dash.mpd.Range = function(t, e) {
                this.begin = t, this.end = e
            }, t.shaka.dash.mpd.Range.prototype.clone = function() {
                return new t.shaka.dash.mpd.Range(this.begin, this.end)
            }, t.shaka.dash.mpd.Mpd.TAG_NAME = "MPD", t.shaka.dash.mpd.Period.TAG_NAME = "Period", t.shaka.dash.mpd.AdaptationSet.TAG_NAME = "AdaptationSet", t.shaka.dash.mpd.Role.TAG_NAME = "Role", t.shaka.dash.mpd.ContentComponent.TAG_NAME = "ContentComponent", t.shaka.dash.mpd.Representation.TAG_NAME = "Representation", t.shaka.dash.mpd.ContentProtection.TAG_NAME = "ContentProtection", t.shaka.dash.mpd.CencPssh.TAG_NAME = "cenc:pssh", t.shaka.dash.mpd.BaseUrl.TAG_NAME = "BaseURL", t.shaka.dash.mpd.Location.TAG_NAME = "Location", t.shaka.dash.mpd.SegmentBase.TAG_NAME = "SegmentBase", t.shaka.dash.mpd.RepresentationIndex.TAG_NAME = "RepresentationIndex", t.shaka.dash.mpd.Initialization.TAG_NAME = "Initialization", t.shaka.dash.mpd.SegmentList.TAG_NAME = "SegmentList", t.shaka.dash.mpd.SegmentUrl.TAG_NAME = "SegmentURL", t.shaka.dash.mpd.SegmentTemplate.TAG_NAME = "SegmentTemplate", t.shaka.dash.mpd.SegmentTimeline.TAG_NAME = "SegmentTimeline", t.shaka.dash.mpd.SegmentTimePoint.TAG_NAME = "S", t.shaka.dash.mpd.Mpd.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.url = new t.goog.Uri(e.baseUrl), this.id = i.parseAttr_(a, "id", i.parseString_), this.type = i.parseAttr_(a, "type", i.parseString_) || "static", this.mediaPresentationDuration = i.parseAttr_(a, "mediaPresentationDuration", i.parseDuration_), this.minBufferTime = i.parseAttr_(a, "minBufferTime", i.parseDuration_, this.minBufferTime), this.minUpdatePeriod = i.parseAttr_(a, "minimumUpdatePeriod", i.parseDuration_, this.minUpdatePeriod), this.availabilityStartTime = i.parseAttr_(a, "availabilityStartTime", i.parseDate_, this.availabilityStartTime), this.timeShiftBufferDepth = i.parseAttr_(a, "timeShiftBufferDepth", i.parseDuration_, this.timeShiftBufferDepth), this.suggestedPresentationDelay = i.parseAttr_(a, "suggestedPresentationDelay", i.parseDuration_, this.suggestedPresentationDelay);
                var s = i.parseChild_(this, a, i.BaseUrl);
                this.baseUrl = i.resolveUrl_(e.baseUrl, s ? s.url : null);
                var r = i.parseChild_(this, a, i.Location);
                r && (this.updateLocation = i.resolveUrl_(e.baseUrl, r.url)), this.periods = i.parseChildren_(this, a, i.Period)
            }, t.shaka.dash.mpd.Period.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.id = i.parseAttr_(a, "id", i.parseString_), this.start = i.parseAttr_(a, "start", i.parseDuration_), this.duration = i.parseAttr_(a, "duration", i.parseDuration_);
                var s = i.parseChild_(this, a, i.BaseUrl);
                this.baseUrl = i.resolveUrl_(e.baseUrl, s ? s.url : null), this.segmentBase = i.parseChild_(this, a, i.SegmentBase), this.segmentList = i.parseChild_(this, a, i.SegmentList), this.segmentTemplate = i.parseChild_(this, a, i.SegmentTemplate), this.adaptationSets = i.parseChildren_(this, a, i.AdaptationSet)
            }, t.shaka.dash.mpd.AdaptationSet.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd,
                    s = i.parseChild_(this, a, i.ContentComponent) || {},
                    r = i.parseChild_(this, a, i.Role);
                this.id = i.parseAttr_(a, "id", i.parseString_), this.lang = i.parseAttr_(a, "lang", i.parseString_, s.lang), this.contentType = i.parseAttr_(a, "contentType", i.parseString_, s.contentType), this.width = i.parseAttr_(a, "width", i.parsePositiveInt_), this.height = i.parseAttr_(a, "height", i.parsePositiveInt_), this.mimeType = i.parseAttr_(a, "mimeType", i.parseString_), this.codecs = i.parseAttr_(a, "codecs", i.parseString_), this.main = r && "main" == r.value, this.lang && (this.lang = t.shaka.util.LanguageUtils.normalize(this.lang));
                var n = i.parseChild_(this, a, i.BaseUrl);
                this.baseUrl = i.resolveUrl_(e.baseUrl, n ? n.url : null), this.contentProtections = i.parseChildren_(this, a, i.ContentProtection), !this.contentType && this.mimeType && (this.contentType = this.mimeType.split("/")[0]), this.segmentBase = e.segmentBase ? i.mergeChild_(this, a, e.segmentBase) : i.parseChild_(this, a, i.SegmentBase), this.segmentList = e.segmentList ? i.mergeChild_(this, a, e.segmentList) : i.parseChild_(this, a, i.SegmentList), this.segmentTemplate = e.segmentTemplate ? i.mergeChild_(this, a, e.segmentTemplate) : i.parseChild_(this, a, i.SegmentTemplate), this.representations = i.parseChildren_(this, a, i.Representation), !this.mimeType && this.representations.length && (this.mimeType = this.representations[0].mimeType, !this.contentType && this.mimeType && (this.contentType = this.mimeType.split("/")[0]))
            }, t.shaka.dash.mpd.Role.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.value = i.parseAttr_(a, "value", i.parseString_)
            }, t.shaka.dash.mpd.ContentComponent.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.id = i.parseAttr_(a, "id", i.parseString_), this.lang = i.parseAttr_(a, "lang", i.parseString_), this.contentType = i.parseAttr_(a, "contentType", i.parseString_), this.lang && (this.lang = t.shaka.util.LanguageUtils.normalize(this.lang))
            }, t.shaka.dash.mpd.Representation.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.id = i.parseAttr_(a, "id", i.parseString_), this.bandwidth = i.parseAttr_(a, "bandwidth", i.parsePositiveInt_), this.width = i.parseAttr_(a, "width", i.parsePositiveInt_, e.width), this.height = i.parseAttr_(a, "height", i.parsePositiveInt_, e.height), this.mimeType = i.parseAttr_(a, "mimeType", i.parseString_, e.mimeType), this.codecs = i.parseAttr_(a, "codecs", i.parseString_, e.codecs), this.lang = e.lang;
                var s = i.parseChild_(this, a, i.BaseUrl);
                this.baseUrl = i.resolveUrl_(e.baseUrl, s ? s.url : null), this.contentProtections = i.parseChildren_(this, a, i.ContentProtection), this.segmentBase = e.segmentBase ? i.mergeChild_(this, a, e.segmentBase) : i.parseChild_(this, a, i.SegmentBase), this.segmentList = e.segmentList ? i.mergeChild_(this, a, e.segmentList) : i.parseChild_(this, a, i.SegmentList), this.segmentTemplate = e.segmentTemplate ? i.mergeChild_(this, a, e.segmentTemplate) : i.parseChild_(this, a, i.SegmentTemplate), 0 == this.contentProtections.length && (this.contentProtections = e.contentProtections)
            }, t.shaka.dash.mpd.ContentProtection.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.schemeIdUri = i.parseAttr_(a, "schemeIdUri", i.parseString_), this.value = i.parseAttr_(a, "value", i.parseString_), this.pssh = i.parseChild_(this, a, i.CencPssh), this.children = Array.prototype.slice.call(a.childNodes)
            }, t.shaka.dash.mpd.CencPssh.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd,
                    s = t.shaka.util.Uint8ArrayUtils,
                    r = i.getContents_(a);
                if (r) {
                    this.psshBox = s.fromBase64(r);
                    try {
                        this.parsedPssh = new t.shaka.util.Pssh(this.psshBox)
                    } catch (t) {
                        if (!(t instanceof RangeError)) throw t
                    }
                }
            }, t.shaka.dash.mpd.BaseUrl.prototype.parse = function(e, a) {
                this.url = t.shaka.dash.mpd.getContents_(a)
            }, t.shaka.dash.mpd.Location.prototype.parse = function(e, a) {
                this.url = t.shaka.dash.mpd.getContents_(a)
            }, t.shaka.dash.mpd.SegmentBase.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.baseUrl = e.baseUrl || this.baseUrl, this.timescale = i.parseAttr_(a, "timescale", i.parsePositiveInt_, this.timescale), this.presentationTimeOffset = i.parseAttr_(a, "presentationTimeOffset", i.parseNonNegativeInt_, this.presentationTimeOffset), this.indexRange = i.parseAttr_(a, "indexRange", i.parseRange_, this.indexRange), this.representationIndex = i.parseChild_(this, a, i.RepresentationIndex) || this.representationIndex, this.initialization = i.parseChild_(this, a, i.Initialization) || this.initialization
            }, t.shaka.dash.mpd.RepresentationIndex.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd,
                    s = i.parseAttr_(a, "sourceURL", i.parseString_);
                this.url = i.resolveUrl_(e.baseUrl, s), this.range = i.parseAttr_(a, "range", i.parseRange_, i.clone_(e.indexRange))
            }, t.shaka.dash.mpd.Initialization.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd,
                    s = i.parseAttr_(a, "sourceURL", i.parseString_);
                this.url = i.resolveUrl_(e.baseUrl, s), this.range = i.parseAttr_(a, "range", i.parseRange_)
            }, t.shaka.dash.mpd.SegmentList.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.baseUrl = e.baseUrl || this.baseUrl, this.timescale = i.parseAttr_(a, "timescale", i.parsePositiveInt_, this.timescale), this.presentationTimeOffset = i.parseAttr_(a, "presentationTimeOffset", i.parseNonNegativeInt_, this.presentationTimeOffset), this.segmentDuration = i.parseAttr_(a, "duration", i.parsePositiveInt_, this.segmentDuration), this.startNumber = i.parseAttr_(a, "startNumber", i.parseNonNegativeInt_, this.startNumber), this.initialization = i.parseChild_(this, a, i.Initialization) || this.initialization, this.segmentUrls = i.parseChildren_(this, a, i.SegmentUrl) || this.segmentUrls
            }, t.shaka.dash.mpd.SegmentUrl.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd,
                    s = i.parseAttr_(a, "media", i.parseString_);
                this.mediaUrl = i.resolveUrl_(e.baseUrl, s), this.mediaRange = i.parseAttr_(a, "mediaRange", i.parseRange_)
            }, t.shaka.dash.mpd.SegmentTemplate.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.timescale = i.parseAttr_(a, "timescale", i.parsePositiveInt_, this.timescale), this.presentationTimeOffset = i.parseAttr_(a, "presentationTimeOffset", i.parseNonNegativeInt_, this.presentationTimeOffset), this.segmentDuration = i.parseAttr_(a, "duration", i.parsePositiveInt_, this.segmentDuration), this.startNumber = i.parseAttr_(a, "startNumber", i.parseNonNegativeInt_, this.startNumber), this.mediaUrlTemplate = i.parseAttr_(a, "media", i.parseString_, this.mediaUrlTemplate), this.indexUrlTemplate = i.parseAttr_(a, "index", i.parseString_, this.indexUrlTemplate), this.initializationUrlTemplate = i.parseAttr_(a, "initialization", i.parseString_, this.initializationUrlTemplate), this.timeline = i.parseChild_(this, a, i.SegmentTimeline) || this.timeline
            }, t.shaka.dash.mpd.SegmentTimeline.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.timePoints = i.parseChildren_(this, a, i.SegmentTimePoint)
            }, t.shaka.dash.mpd.SegmentTimePoint.prototype.parse = function(e, a) {
                var i = t.shaka.dash.mpd;
                this.startTime = i.parseAttr_(a, "t", i.parseNonNegativeInt_), this.duration = i.parseAttr_(a, "d", i.parseNonNegativeInt_), this.repeat = i.parseAttr_(a, "r", i.parseNonNegativeInt_)
            }, t.shaka.dash.mpd.resolveUrl_ = function(e, a) {
                var i = a ? new t.goog.Uri(a) : null;
                return e ? i ? e.resolve(i) : e : i
            }, t.shaka.dash.mpd.mergeChild_ = function(e, a, i) {
                var s = t.shaka.dash.mpd,
                    r = s.clone_(i),
                    n = s.findChild_(a, i.constructor.TAG_NAME);
                return n && r.parse(e, n), r
            }, t.shaka.dash.mpd.parseChild_ = function(e, a, i) {
                var s = t.shaka.dash.mpd,
                    r = null,
                    n = s.findChild_(a, i.TAG_NAME);
                return n && (r = new i, r.parse(e, n)), r
            }, t.shaka.dash.mpd.findChild_ = function(t, e) {
                for (var a = null, i = 0; i < t.childNodes.length; i++)
                    if (t.childNodes[i].tagName == e) {
                        if (a) return null;
                        a = t.childNodes[i]
                    }
                return a
            }, t.shaka.dash.mpd.parseChildren_ = function(t, e, a) {
                for (var i = [], s = 0; s < e.childNodes.length; s++)
                    if (e.childNodes[s].tagName == a.TAG_NAME) {
                        var r = new a;
                        r.parse.call(r, t, e.childNodes[s]), i.push(r)
                    }
                return i
            }, t.shaka.dash.mpd.getContents_ = function(t) {
                var e = t.firstChild;
                return e.nodeType != Node.TEXT_NODE ? null : e.nodeValue
            }, t.shaka.dash.mpd.clone_ = function(t) {
                return t ? t.clone() : null
            }, t.shaka.dash.mpd.parseAttr_ = function(t, e, a, i) {
                var s = a(t.getAttribute(e));
                return null != s ? s : void 0 !== i ? i : null
            }, t.shaka.dash.mpd.parseDate_ = function(t) {
                if (!t) return null;
                var e = Date.parse(t);
                return isNaN(e) ? null : Math.floor(e / 1e3)
            }, t.shaka.dash.mpd.parseDuration_ = function(e) {
                if (!e) return null;
                var a = "^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$",
                    i = new RegExp(a).exec(e);
                if (!i) return null;
                var s = 0,
                    r = t.shaka.dash.mpd.parseNonNegativeInt_(i[1]);
                r && (s += 31536e3 * r);
                var n = t.shaka.dash.mpd.parseNonNegativeInt_(i[2]);
                n && (s += 2592e3 * n);
                var o = t.shaka.dash.mpd.parseNonNegativeInt_(i[3]);
                o && (s += 86400 * o);
                var h = t.shaka.dash.mpd.parseNonNegativeInt_(i[4]);
                h && (s += 3600 * h);
                var l = t.shaka.dash.mpd.parseNonNegativeInt_(i[5]);
                l && (s += 60 * l);
                var p = t.shaka.dash.mpd.parseFloat_(i[6]);
                return p && (s += p), s
            }, t.shaka.dash.mpd.parseRange_ = function(e) {
                var a = /([0-9]+)-([0-9]+)/.exec(e);
                if (!a) return null;
                var i = t.shaka.dash.mpd.parseNonNegativeInt_(a[1]);
                if (null == i) return null;
                var s = t.shaka.dash.mpd.parseNonNegativeInt_(a[2]);
                return null == s ? null : new t.shaka.dash.mpd.Range(i, s)
            }, t.shaka.dash.mpd.parsePositiveInt_ = function(t) {
                var e = window.parseInt(t, 10);
                return e > 0 ? e : null
            }, t.shaka.dash.mpd.parseNonNegativeInt_ = function(t) {
                var e = window.parseInt(t, 10);
                return e >= 0 ? e : null
            }, t.shaka.dash.mpd.parseFloat_ = function(t) {
                var e = window.parseFloat(t);
                return isNaN(e) ? null : e
            }, t.shaka.dash.mpd.parseString_ = function(t) {
                return t
            }
        }).call(e, a(37))
    },
    83: function(t, e, a) {
        (function(t) {
            t.goog = t.goog || {}, t.goog.uri = t.goog.uri || {}, t.goog.uri.utils = t.goog.uri.utils || {}, t.shaka = t.shaka || {}, t.shaka.media = t.shaka.media || {}, t.shaka.player = t.shaka.player || {}, t.shaka.util = t.shaka.util || {}, t.shaka.dash = t.shaka.dash || {}, t.shaka.util.Clock = t.shaka.util.Clock || {}, t.shaka.util.LanguageUtils = t.shaka.util.LanguageUtils || {}, t.shaka.util.Uint8ArrayUtils = t.shaka.util.Uint8ArrayUtils || {}, t.shaka.util.StringUtils = t.shaka.util.StringUtils || {}, t.shaka.util.Mp4Parser = t.shaka.util.Mp4Parser || {}, t.shaka.util.DataViewReader = t.shaka.util.DataViewReader || {}, t.shaka.util.Pssh = t.shaka.util.Pssh || {}, t.shaka.dash.mpd = t.shaka.dash.mpd || {}, t.shaka.dash.MpdUtils = t.shaka.dash.MpdUtils || {}
        }).call(e, a(37))
    },
    84: function(t, e, a) {
        (function(t) {
            t.shaka.util.Pssh = function(e) {
                this.systemIds = [], this.cencKeyIds = [], this.dataBoundaries = [];
                for (var a = new t.shaka.util.DataViewReader(new DataView(e.buffer), t.shaka.util.DataViewReader.Endianness.BIG_ENDIAN), i = !1; a.hasMoreData();) {
                    var s = t.shaka.util.Mp4Parser.findBox(t.shaka.util.Pssh.BOX_TYPE, a);
                    if (s == t.shaka.util.Mp4Parser.BOX_NOT_FOUND) break;
                    i = !0;
                    var r = a.getPosition() - 8,
                        n = a.readUint8();
                    if (n > 1) a.skip(s - (a.getPosition() - r));
                    else {
                        a.skip(3);
                        var o = t.shaka.util.Uint8ArrayUtils.toHex(a.readBytes(16)),
                            h = [];
                        if (n > 0)
                            for (var l = a.readUint32(), p = 0; p < l; ++p) {
                                var u = t.shaka.util.Uint8ArrayUtils.toHex(a.readBytes(16));
                                h.push(u)
                            }
                        var d = a.readUint32();
                        a.skip(d), this.cencKeyIds.push.apply(this.cencKeyIds, h), this.systemIds.push(o), this.dataBoundaries.push({
                            start: r,
                            end: a.getPosition() - 1
                        }), a.getPosition() != r + s && a.skip(s - (a.getPosition() - r))
                    }
                }
            }, t.shaka.util.Pssh.BOX_TYPE = 1886614376
        }).call(e, a(37))
    },
    85: function(t, e, a) {
        (function(t) {
            t.shaka.util.StringUtils.fromUTF8 = function(e) {
                if (!e) return "";
                var a = new Uint8Array(e);
                239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
                var i = t.shaka.util.StringUtils.fromCharCode_(a),
                    s = escape(i);
                try {
                    return decodeURIComponent(s)
                } catch (t) {
                    throw new shaka.util.Error(shaka.util.Error.Category.TEXT, shaka.util.Error.Code.BAD_ENCODING)
                }
            }, t.shaka.util.StringUtils.fromUTF16 = function(t, e) {
                if (!t) return "";
                if (t.byteLength % 2 != 0) throw new shaka.util.Error(shaka.util.Error.Category.TEXT, shaka.util.Error.Code.BAD_ENCODING);
                var a;
                if (t instanceof ArrayBuffer) a = t;
                else {
                    var i = new Uint8Array(t.byteLength);
                    i.set(new Uint8Array(t)), a = i.buffer
                }
                for (var s = t.byteLength / 2, r = new Uint16Array(s), n = new DataView(a), o = 0; o < s; o++) r[o] = n.getUint16(2 * o, e);
                return shaka.util.StringUtils.fromCharCode_(r)
            }, t.shaka.util.StringUtils.fromBytesAutoDetect = function(e) {
                var a = t.shaka.util.StringUtils,
                    i = new Uint8Array(e);
                if (239 == i[0] && 187 == i[1] && 191 == i[2]) return a.fromUTF8(i);
                if (254 == i[0] && 255 == i[1]) return a.fromUTF16(i.subarray(2), !1);
                if (255 == i[0] && 254 == i[1]) return a.fromUTF16(i.subarray(2), !0);
                var s = function(t, e) {
                    return t.byteLength <= e || t[e] >= 32 && t[e] <= 126
                }.bind(null, i);
                if (0 == i[0] && 0 == i[2]) return a.fromUTF16(e, !1);
                if (0 == i[1] && 0 == i[3]) return a.fromUTF16(e, !0);
                if (s(0) && s(1) && s(2) && s(3)) return a.fromUTF8(e);
                throw new shaka.util.Error(shaka.util.Error.Category.TEXT, shaka.util.Error.Code.UNABLE_TO_DETECT_ENCODING)
            }, t.shaka.util.StringUtils.toUTF8 = function(t) {
                for (var e = encodeURIComponent(t), a = unescape(e), i = new Uint8Array(a.length), s = 0; s < a.length; ++s) i[s] = a.charCodeAt(s);
                return i.buffer
            }, t.shaka.util.StringUtils.fromCharCode_ = function(t) {
                for (var e = 16e3, a = "", i = 0; i < t.length; i += e) {
                    var s = t.subarray(i, i + e);
                    a += String.fromCharCode.apply(null, s)
                }
                return a
            }
        }).call(e, a(37))
    },
    86: function(t, e, a) {
        (function(t) {
            t.shaka.util.Uint8ArrayUtils.toBase64 = function(t, e) {
                var a = String.fromCharCode.apply(null, t),
                    i = void 0 == e || e,
                    s = window.btoa(a).replace(/\+/g, "-").replace(/\//g, "_");
                return i ? s : s.replace(/=*$/, "")
            }, t.shaka.util.Uint8ArrayUtils.fromBase64 = function(t) {
                for (var e = window.atob(t.replace(/-/g, "+").replace(/_/g, "/")), a = new Uint8Array(e.length), i = 0; i < e.length; ++i) a[i] = e.charCodeAt(i);
                return a
            }, t.shaka.util.Uint8ArrayUtils.fromHex = function(t) {
                for (var e = new Uint8Array(t.length / 2), a = 0; a < t.length; a += 2) e[a / 2] = window.parseInt(t.substr(a, 2), 16);
                return e
            }, t.shaka.util.Uint8ArrayUtils.toHex = function(t) {
                for (var e = "", a = 0; a < t.length; ++a) {
                    var i = t[a].toString(16);
                    1 == i.length && (i = "0" + i), e += i
                }
                return e
            }, t.shaka.util.Uint8ArrayUtils.equal = function(t, e) {
                if (!t && !e) return !0;
                if (!t || !e) return !1;
                if (t.length != e.length) return !1;
                for (var a = 0; a < t.length; ++a)
                    if (t[a] != e[a]) return !1;
                return !0
            }
        }).call(e, a(37))
    },
    87: function(t, e, a) {
        (function(t) {
            t.goog.Uri = function(e) {
                var a;
                e instanceof t.goog.Uri ? (this.setScheme(e.getScheme()), this.setUserInfo(e.getUserInfo()), this.setDomain(e.getDomain()), this.setPort(e.getPort()), this.setPath(e.getPath()), this.setQueryData(e.getQueryData().clone()), this.setFragment(e.getFragment())) : e && (a = t.goog.uri.utils.split(String(e))) ? (this.setScheme(a[t.goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo(a[t.goog.uri.utils.ComponentIndex.USER_INFO] || "", !0), this.setDomain(a[t.goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort(a[t.goog.uri.utils.ComponentIndex.PORT]), this.setPath(a[t.goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData(a[t.goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment(a[t.goog.uri.utils.ComponentIndex.FRAGMENT] || "", !0)) : this.queryData_ = new t.goog.Uri.QueryData(null, null)
            }, t.goog.Uri.prototype.scheme_ = "", t.goog.Uri.prototype.userInfo_ = "", t.goog.Uri.prototype.domain_ = "", t.goog.Uri.prototype.port_ = null, t.goog.Uri.prototype.path_ = "", t.goog.Uri.prototype.queryData_, t.goog.Uri.prototype.fragment_ = "", t.goog.Uri.prototype.toString = function() {
                var e = [],
                    a = this.getScheme();
                a && e.push(t.goog.Uri.encodeSpecialChars_(a, t.goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
                var i = this.getDomain();
                if (i) {
                    e.push("//");
                    var s = this.getUserInfo();
                    s && e.push(t.goog.Uri.encodeSpecialChars_(s, t.goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@"), e.push(t.goog.Uri.removeDoubleEncoding_(encodeURIComponent(i)));
                    var r = this.getPort();
                    null != r && e.push(":", String(r))
                }
                var n = this.getPath();
                n && (this.hasDomain() && "/" != n.charAt(0) && e.push("/"), e.push(t.goog.Uri.encodeSpecialChars_(n, "/" == n.charAt(0) ? t.goog.Uri.reDisallowedInAbsolutePath_ : t.goog.Uri.reDisallowedInRelativePath_, !0)));
                var o = this.getEncodedQuery();
                o && e.push("?", o);
                var h = this.getFragment();
                return h && e.push("#", t.goog.Uri.encodeSpecialChars_(h, t.goog.Uri.reDisallowedInFragment_)), e.join("")
            }, t.goog.Uri.prototype.resolve = function(e) {
                var a = this.clone(),
                    i = e.hasScheme();
                i ? a.setScheme(e.getScheme()) : i = e.hasUserInfo(), i ? a.setUserInfo(e.getUserInfo()) : i = e.hasDomain(), i ? a.setDomain(e.getDomain()) : i = e.hasPort();
                var s = e.getPath();
                if (i) a.setPort(e.getPort());
                else if (i = e.hasPath()) {
                    if ("/" != s.charAt(0))
                        if (this.hasDomain() && !this.hasPath()) s = "/" + s;
                        else {
                            var r = a.getPath().lastIndexOf("/");
                            r != -1 && (s = a.getPath().substr(0, r + 1) + s)
                        }
                    s = t.goog.Uri.removeDotSegments(s)
                }
                return i ? a.setPath(s) : i = e.hasQuery(), i ? a.setQueryData(e.getQueryData().clone()) : i = e.hasFragment(), i && a.setFragment(e.getFragment()), a
            }, t.goog.Uri.prototype.clone = function() {
                return new t.goog.Uri(this)
            }, t.goog.Uri.prototype.getScheme = function() {
                return this.scheme_
            }, t.goog.Uri.prototype.setScheme = function(e, a) {
                return this.scheme_ = a ? t.goog.Uri.decodeOrEmpty_(e, !0) : e, this.scheme_ && (this.scheme_ = this.scheme_.replace(/:$/, "")), this
            }, t.goog.Uri.prototype.hasScheme = function() {
                return !!this.scheme_
            }, t.goog.Uri.prototype.getUserInfo = function() {
                return this.userInfo_
            }, t.goog.Uri.prototype.setUserInfo = function(e, a) {
                return this.userInfo_ = a ? t.goog.Uri.decodeOrEmpty_(e) : e, this
            }, t.goog.Uri.prototype.hasUserInfo = function() {
                return !!this.userInfo_
            }, t.goog.Uri.prototype.getDomain = function() {
                return this.domain_
            }, t.goog.Uri.prototype.setDomain = function(e, a) {
                return this.domain_ = a ? t.goog.Uri.decodeOrEmpty_(e, !0) : e, this
            }, t.goog.Uri.prototype.hasDomain = function() {
                return !!this.domain_
            }, t.goog.Uri.prototype.getPort = function() {
                return this.port_
            }, t.goog.Uri.prototype.setPort = function(t) {
                if (t) {
                    if (t = Number(t), isNaN(t) || t < 0) throw Error("Bad port number " + t);
                    this.port_ = t
                } else this.port_ = null;
                return this
            }, t.goog.Uri.prototype.hasPort = function() {
                return null != this.port_
            }, t.goog.Uri.prototype.getPath = function() {
                return this.path_
            }, t.goog.Uri.prototype.setPath = function(e, a) {
                return this.path_ = a ? t.goog.Uri.decodeOrEmpty_(e, !0) : e, this
            }, t.goog.Uri.prototype.hasPath = function() {
                return !!this.path_
            }, t.goog.Uri.prototype.hasQuery = function() {
                return "" !== this.queryData_.toString()
            }, t.goog.Uri.prototype.setQueryData = function(e, a) {
                return e instanceof t.goog.Uri.QueryData ? this.queryData_ = e : (a || (e = t.goog.Uri.encodeSpecialChars_(e, t.goog.Uri.reDisallowedInQuery_)), this.queryData_ = new t.goog.Uri.QueryData(e, null)), this
            }, t.goog.Uri.prototype.getEncodedQuery = function() {
                return this.queryData_.toString()
            }, t.goog.Uri.prototype.getDecodedQuery = function() {
                return this.queryData_.toDecodedString()
            }, t.goog.Uri.prototype.getQueryData = function() {
                return this.queryData_
            }, t.goog.Uri.prototype.getFragment = function() {
                return this.fragment_
            }, t.goog.Uri.prototype.setFragment = function(e, a) {
                return this.fragment_ = a ? t.goog.Uri.decodeOrEmpty_(e) : e, this
            }, t.goog.Uri.prototype.hasFragment = function() {
                return !!this.fragment_
            }, t.goog.Uri.removeDotSegments = function(t) {
                if (".." == t || "." == t) return "";
                if (t.indexOf("./") == -1 && t.indexOf("/.") == -1) return t;
                for (var e = 0 == t.lastIndexOf("/", 0), a = t.split("/"), i = [], s = 0; s < a.length;) {
                    var r = a[s++];
                    "." == r ? e && s == a.length && i.push("") : ".." == r ? ((i.length > 1 || 1 == i.length && "" != i[0]) && i.pop(), e && s == a.length && i.push("")) : (i.push(r), e = !0)
                }
                return i.join("/")
            }, t.goog.Uri.decodeOrEmpty_ = function(t, e) {
                return t ? e ? decodeURI(t) : decodeURIComponent(t) : ""
            }, t.goog.Uri.encodeSpecialChars_ = function(e, a, i) {
                if (t.goog.isString(e)) {
                    var s = encodeURI(e).replace(a, t.goog.Uri.encodeChar_);
                    return i && (s = t.goog.Uri.removeDoubleEncoding_(s)), s
                }
                return null
            }, t.goog.Uri.encodeChar_ = function(t) {
                var e = t.charCodeAt(0);
                return "%" + (e >> 4 & 15).toString(16) + (15 & e).toString(16)
            }, t.goog.Uri.removeDoubleEncoding_ = function(t) {
                return t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
            }, t.goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g, t.goog.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g, t.goog.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g, t.goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g, t.goog.Uri.reDisallowedInFragment_ = /#/g, t.goog.Uri.QueryData = function(t, e) {
                this.encodedQuery_ = t || null
            }, t.goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function() {
                if (!this.keyMap_ && (this.keyMap_ = {}, this.count_ = 0, this.encodedQuery_))
                    for (var t = this.encodedQuery_.split("&"), e = 0; e < t.length; e++) {
                        var a = t[e].indexOf("="),
                            i = null,
                            s = null;
                        a >= 0 ? (i = t[e].substring(0, a), s = t[e].substring(a + 1)) : i = t[e], i = decodeURIComponent(i.replace(/\+/g, " ")), s = s || "", this.add(i, decodeURIComponent(s.replace(/\+/g, " ")))
                    }
            }, t.goog.Uri.QueryData.prototype.keyMap_ = null, t.goog.Uri.QueryData.prototype.count_ = null, t.goog.Uri.QueryData.prototype.getCount = function() {
                return this.ensureKeyMapInitialized_(), this.count_
            }, t.goog.Uri.QueryData.prototype.add = function(t, e) {
                this.ensureKeyMapInitialized_(), this.encodedQuery_ = null;
                var a = this.keyMap_.hasOwnProperty(t) && this.keyMap_[t];
                return a || (this.keyMap_[t] = a = []), a.push(e), this.count_++, this
            }, t.goog.Uri.QueryData.prototype.toString = function() {
                if (this.encodedQuery_) return this.encodedQuery_;
                if (!this.keyMap_) return "";
                var t = [];
                for (var e in this.keyMap_)
                    for (var a = encodeURIComponent(e), i = this.keyMap_[e], s = 0; s < i.length; s++) {
                        var r = a;
                        "" !== i[s] && (r += "=" + encodeURIComponent(i[s])), t.push(r)
                    }
                return this.encodedQuery_ = t.join("&")
            }, t.goog.Uri.QueryData.prototype.toDecodedString = function() {
                return t.goog.Uri.decodeOrEmpty_(this.toString())
            }, t.goog.Uri.QueryData.prototype.clone = function() {
                var e = new t.goog.Uri.QueryData;
                if (e.encodedQuery_ = this.encodedQuery_, this.keyMap_) {
                    var a = {};
                    for (var i in this.keyMap_) a[i] = this.keyMap_[i].concat();
                    e.keyMap_ = a, e.count_ = this.count_
                }
                return e
            }
        }).call(e, a(37))
    },
    88: function(t, e, a) {
        (function(t) {
            t.goog.uri.utils.splitRe_ = new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), t.goog.uri.utils.ComponentIndex = {
                SCHEME: 1,
                USER_INFO: 2,
                DOMAIN: 3,
                PORT: 4,
                PATH: 5,
                QUERY_DATA: 6,
                FRAGMENT: 7
            }, t.goog.uri.utils.split = function(e) {
                return e.match(t.goog.uri.utils.splitRe_)
            }
        }).call(e, a(37))
    },
    89: function(t, e, a) {
        (function(t) {
            ! function(t) {
                var e = function() {
                        function t(t, e) {
                            if (!t) return e;
                            if (!e) return t;
                            var a = "/",
                                i = "";
                            if (t.indexOf("://") !== -1) {
                                var s = t.split("://");
                                a = s[0] + "://", i = s[1]
                            } else i = t;
                            for (var r = i.split("/").filter(function(t) {
                                    return t.length > 0
                                }), n = (e.match(/\.\.\//g) || []).length, o = 0; o < n; o++) r.pop();
                            var h = a + r.join("/");
                            e = e.replace(/\.\.\//g, ""), "/" === e[0] && (e = e.replace("/", ""));
                            var l = h.lastIndexOf("/") === h.length - 1 ? h + e : h + "/" + e;
                            return l
                        }
                        return {
                            combine: t
                        }
                    },
                    a = e();
                t.UrlUtils = a
            }(t.core.util)
        }).call(e, a(37))
    },
    111: function(t, e, a) {
        "use strict";
        var i = a(78);
        window.peer5 && window.peer5.configure({
            plugin: {
                name: "dash-parser",
                lib: i
            }
        })
    }
});