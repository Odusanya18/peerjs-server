! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/", t(0)
}({
    0: function(e, t, n) {
        e.exports = n(110)
    },
    110: function(e, t, n) {
        "use strict";
        var o = n(179);
        window.peer5 && window.peer5.configure({
            plugin: {
                name: "consent-prompt",
                lib: o
            }
        })
    },
    179: function(e, t) {
        "use strict";
        t.render = function e(n) {
            var o = n || {},
                r = o.privacyPolicyLink || "",
                i = o.termsOfServiceLink || "",
                d = o.onApproved || function() {};
            if (!document.body) return void document.addEventListener("DOMContentLoaded", function() {
                e(n)
            });
            t.destroy();
            var a = document.createElement("div");
            a.id = "__p2p_consent__", a.setAttribute("style", "position: fixed; !important;z-index: 999999;bottom: 0;right: 0;background: #dedede;padding: 10px 44px 12px 16px;border-radius: 5px 5px 0 0;max-width: 574px;width: 100%;");
            var c = document.createElement("div");
            c.setAttribute("style", "font-size: 14px;line-height: 1.1;color: #545454;font-family: sans-serif;");
            var p = "color: blue;color: #1d7caf;font-weight: bold;";
            c.innerHTML = 'We use P2P to offer an improved viewing experience and to ensure high video quality. By using this site you agree to the <a href="' + r + '" target="_blank" style="' + p + '">Privacy Policy</a> and <a href="' + i + '" target="_blank" style="' + p + '">Terms of Service</a>.', a.appendChild(c);
            var s = document.createElement("div");
            s.textContent = "X", s.setAttribute("style", "color: #dedede;background: #7b7b7b;border-radius: 50%;width: 26px;height: 26px;text-align: center;line-height: 26px;display: flex;align-items: center;justify-content: center;position: absolute;right: 11px;top: 0;bottom: 0;margin: auto;font-size: 10px;font-family: sans-serif;cursor: pointer;user-select: none;"), s.onclick = s.ontouch = function() {
                a && a.parentNode && (a.parentNode.removeChild(a), d())
            }, a.appendChild(s), document.body.appendChild(a)
        }, t.destroy = function() {
            var e = document.querySelector("#__p2p_consent__");
            e && e.parentNode.removeChild(e)
        }
    }
});