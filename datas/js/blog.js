! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = ie.type(e);
        return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n });
        if (t.nodeType) return ie.grep(e, function(e) {
            return e === t !== n });
        if ("string" == typeof t) {
            if (fe.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e) }
        return ie.grep(e, function(e) {
            return ie.inArray(e, t) >= 0 !== n }) }

    function i(e, t) { do e = e[t]; while (e && 1 !== e.nodeType);
        return e }

    function o(e) {
        var t = xe[e] = {};
        return ie.each(e.match(be) || [], function(e, n) { t[n] = !0 }), t }

    function a() { he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready()) }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? ie.parseJSON(n) : n } catch (i) {}
                ie.data(e, t, n) } else n = void 0 }
        return n }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0 }

    function c(e, t, n, r) {
        if (ie.acceptData(e)) {
            var i, o, a = ie.expando,
                s = e.nodeType,
                l = s ? ie.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = J.pop() || ie.guid++ : a), l[u] || (l[u] = s ? {} : { toJSON: ie.noop }), "object" != typeof t && "function" != typeof t || (r ? l[u] = ie.extend(l[u], t) : l[u].data = ie.extend(l[u].data, t)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i } }

    function d(e, t, n) {
        if (ie.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ie.cache : e,
                s = o ? e[ie.expando] : ie.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) { ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !ie.isEmptyObject(r)) return }(n || (delete a[s].data, u(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } }

    function f() {
        return !0 }

    function p() {
        return !1 }

    function h() {
        try {
            return he.activeElement } catch (e) {} }

    function m(e) {
        var t = Fe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o }

    function v(e) { je.test(e.type) && (e.defaultChecked = e.checked) }

    function y(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function b(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e }

    function x(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval")) }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, i, o = ie._data(e),
                a = ie._data(t, o),
                s = o.events;
            if (s) { delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r]) }
            a.data && (a.data = ie.extend({}, a.data)) } }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) { i = ie._data(t);
                for (r in i.events) ie.removeEvent(t, r, i.handle);
                t.removeAttribute(ie.expando) } "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } }

    function N(t, n) {
        var r, i = ie(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
        return i.detach(), o }

    function E(e) {
        var t = he,
            n = Ze[e];
        return n || (n = N(e, t), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Ke.detach()), Ze[e] = n), n }

    function k(e, t) {
        return { get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length; i--;)
            if (t = ft[i] + n, t in e) return t;
        return r }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : (i = Ae(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e }

    function D(e, t, n) {
        var r = lt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i)));
        return a }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
            r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0 }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px" }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i) }

    function q() {
        return setTimeout(function() { pt = void 0 }), pt = ie.now() }

    function _(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r }

    function M(e, t, n) {
        for (var r, i = (bt[t] || []).concat(bt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r }

    function F(e, t, n) {
        var r, i, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ae(e),
            m = ie._data(e, "fxshow");
        n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() { s.unqueued || l() }), s.unqueued++, d.always(function() { d.always(function() { s.unqueued--, ie.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ie.css(e, "display"), c = "none" === u ? ie._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
        for (r in t)
            if (i = t[r], mt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0 }
                f[r] = m && m[r] || ie.style(e, r) } else u = void 0;
        if (ie.isEmptyObject(f)) "inline" === ("none" === u ? E(e.nodeName) : u) && (p.display = u);
        else { m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ie(e).show() : d.done(function() { ie(e).hide() }), d.done(function() {
                var t;
                ie._removeData(e, "fxshow");
                for (t in f) ie.style(e, t, f[t]) });
            for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } }

    function O(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i }

    function B(e, t, n) {
        var r, i, o = 0,
            a = yt.length,
            s = ie.Deferred().always(function() { delete l.elem }),
            l = function() {
                if (i) return !1;
                for (var t = pt || q(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1) },
            u = s.promise({ elem: e, props: ie.extend({}, t), opts: ie.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: pt || q(), duration: n.duration, tweens: [], createTween: function(t, n) {
                    var r = ie.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r }, stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this } }),
            c = u.props;
        for (O(c, u.opts.specialEasing); a > o; o++)
            if (r = yt[o].call(u, e, c, u.opts)) return r;
        return ie.map(c, M, u), ie.isFunction(u.opts.start) && u.opts.start.call(e, u), ie.fx.timer(ie.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

    function P(e) {
        return function(t, n) { "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(be) || [];
            if (ie.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } }

    function R(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, ie.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1) }), l }
        var o = {},
            a = e === zt;
        return i(t.dataTypes[0]) || !o["*"] && i("*") }

    function W(e, t) {
        var n, r, i = ie.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ie.extend(!0, e, n), e }

    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) { l.unshift(a);
                    break }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) { o = a;
                    break }
                r || (r = a) }
            o = o || r }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0 }

    function z(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (d) {
                    return { state: "parsererror", error: a ? d : "No conversion from " + l + " to " + o } } }
        return { state: "success", data: t } }

    function I(e, t, n, r) {
        var i;
        if (ie.isArray(t)) ie.each(t, function(t, i) { n || Vt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r) }

    function X() {
        try {
            return new e.XMLHttpRequest } catch (t) {} }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function V(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
    var J = [],
        Y = J.slice,
        G = J.concat,
        Q = J.push,
        K = J.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        re = "1.11.3",
        ie = function(e, t) {
            return new ie.fn.init(e, t) },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase() };
    ie.fn = ie.prototype = { jquery: re, constructor: ie, selector: "", length: 0, toArray: function() {
            return Y.call(this) }, get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this) }, pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t }, each: function(e, t) {
            return ie.each(this, e, t) }, map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t) })) }, slice: function() {
            return this.pushStack(Y.apply(this, arguments)) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, end: function() {
            return this.prevObject || this.constructor(null) }, push: Q, sort: J.sort, splice: J.splice }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (u && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a }, ie.extend({ expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
            throw new Error(e) }, noop: function() {}, isFunction: function(e) {
            return "function" === ie.type(e) }, isArray: Array.isArray || function(e) {
            return "array" === ie.type(e) }, isWindow: function(e) {
            return null != e && e == e.window }, isNumeric: function(e) {
            return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0 }, isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0 }, isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) {
                return !1 }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t) }, type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e }, globalEval: function(t) { t && ie.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) }, camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le) }, nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e }, trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "") }, makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r }, inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n }
            return -1 }, merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e }, grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i }, map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && l.push(i);
            return G.apply([], l) }, guid: 1, proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(Y.call(arguments))) }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0 }, now: function() {
            return +new Date }, support: ne }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { Z["[object " + t + "]"] = t.toLowerCase() });
    var ue = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, d, p, h, m;
            if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && _) {
                if (11 !== s && (i = ye.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n } else {
                        if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n }
                if (w.qsa && (!M || !M.test(e))) {
                    if (p = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = E(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                        h = be.test(e) && c(t.parentNode) || t, m = u.join(",") }
                    if (m) try {
                        return K.apply(n, h.querySelectorAll(m)), n } catch (g) {} finally { d || t.removeAttribute("id") } } }
            return S(e.replace(le, "$1"), t, n, r) }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r }
            var t = [];
            return e }

        function r(e) {
            return e[P] = !0, e }

        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t) } catch (n) {
                return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e } }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e } }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o) } : function(t, n, a) {
                var s, l, u = [W, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0 } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[P] || (t[P] = {}), (s = l[r]) && s[0] === W && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0 } } }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0 } : e[0] }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a }

        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, l),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (u = g(b, p), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l) }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d)) } } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b) }) }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t }, a, !0), u = p(function(e) {
                    return ee(t, e) > -1 }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, i }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(le, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) }
                    c.push(n) }
            return h(c) }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        b = r || o && T.find.TAG("*", u),
                        x = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) { l.push(c);
                                    break }
                            u && (W = x) }
                        i && ((c = !f && c) && p--, r && m.push(c)) }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = G.call(l));
                            v = g(v) }
                        K.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l) }
                    return u && (W = x, A = y), m };
            return i ? r(a) : a }
        var x, w, T, C, N, E, k, S, A, D, j, L, H, q, _, M, F, O, B, P = "sizzle" + 1 * new Date,
            R = e.document,
            W = 0,
            $ = 0,
            z = n(),
            I = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (j = !0), 0 },
            V = 1 << 31,
            J = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            Q = Y.push,
            K = Y.push,
            Z = Y.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1 },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            he = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            Ce = function() { L() };
        try { K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType } catch (Ne) { K = { apply: Y.length ? function(e, t) { Q.apply(e, Z.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1 } } }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1 }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _ = !N(r), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className") }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
                return q.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [] } }, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t } }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t } }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r }
                return o }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return _ ? t.getElementsByClassName(e) : void 0 }, F = [], M = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) { q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]") }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:") })), (w.matchesSelector = ve.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) { w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", ae) }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(q.compareDocumentPosition), B = t || ve.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, U = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && B(R, e) ? -1 : t === r || t.ownerDocument === R && B(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[i] === u[i];) i++;
                return i ? a(l[i], u[i]) : l[i] === R ? -1 : u[i] === R ? 1 : 0 }, r) : H }, t.matches = function(e, n) {
            return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), w.matchesSelector && _ && (!F || !F.test(n)) && (!M || !M.test(n))) try {
                var r = O.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (i) {}
            return t(n, H, null, [e]).length > 0 }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e), B(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1) }
            return D = null, e }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                for (; t = e[r++];) n += C(t);
            return n }, T = t.selectors = { cacheLength: 50, createPseudo: r, match: he, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0 } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0 } }, CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode } : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling" }
                                return !0 }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[P] || (g[P] = {}), u = c[e] || [], p = u[0] === W && u[1], f = u[0] === W && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) { c[e] = [W, p, f];
                                        break } } else if (y && (u = (t[P] || (t[P] = {}))[e]) && u[0] === W) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [W, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0 } } }, PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a]) }) : function(e) {
                        return o(e, 0, i) }) : o } }, pseudos: { not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(le, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() } }), has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0 } }), contains: r(function(e) {
                    return e = e.replace(we, Te),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1 } }), lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1 } }), target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id }, root: function(e) {
                    return e === q }, focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) {
                    return e.disabled === !1 }, disabled: function(e) {
                    return e.disabled === !0 }, checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) {
                    return !T.pseudos.empty(e) }, header: function(e) {
                    return ge.test(e.nodeName) }, input: function(e) {
                    return me.test(e.nodeName) }, button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: u(function() {
                    return [0] }), last: u(function(e, t) {
                    return [t - 1] }), eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n] }), even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e }), odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e }), lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e }), gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e }) } }, T.pseudos.nth = T.pseudos.eq;
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[x] = s(x);
        for (x in { submit: !0, reset: !0 }) T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, i, o, a, s, l, u, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(le, " ") }), s = s.slice(r.length));
                for (a in T.filter) !(i = he[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                    o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e }
            return o }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e,
                d = !r && E(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (r = l(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n;
                        break } }
            return (u || k(e, d))(r, t, !_, n, be.test(e) && c(t.parentNode) || t), n }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div")) }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), i(function(e) {
            return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t
    }(e);
    ie.find = ue, ie.expr = ue.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = ue.uniqueSort, ie.text = ue.getText, ie.isXMLDoc = ue.isXML, ie.contains = ue.contains;
    var ce = ie.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType })) }, ie.fn.extend({ find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ie.contains(r[t], this)) return !0 }));
            for (t = 0; i > t; t++) ie.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) {
            return this.pushStack(r(this, e || [], !1)) }, not: function(e) {
            return this.pushStack(r(this, e || [], !0)) }, is: function(e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length } });
    var pe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = ie.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t))
                        for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this }
                if (r = he.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = r }
                return this.context = he, this.selector = e, this }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this)) };
    ge.prototype = ie.fn, pe = ie(he);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = { children: !0, contents: !0, next: !0, prev: !0 };
    ie.extend({ dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r }, sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n } }), ie.fn.extend({ has: function(e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ie.contains(this, n[t])) return !0 }) }, closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) { o.push(n);
                        break }
            return this.pushStack(o.length > 1 ? ie.unique(o) : o) }, index: function(e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t)))) }, addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), ie.each({ parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
            return ie.dir(e, "parentNode") }, parentsUntil: function(e, t, n) {
            return ie.dir(e, "parentNode", n) }, next: function(e) {
            return i(e, "nextSibling") }, prev: function(e) {
            return i(e, "previousSibling") }, nextAll: function(e) {
            return ie.dir(e, "nextSibling") }, prevAll: function(e) {
            return ie.dir(e, "previousSibling") }, nextUntil: function(e, t, n) {
            return ie.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
            return ie.dir(e, "previousSibling", n) }, siblings: function(e) {
            return ie.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) {
            return ie.sibling(e.firstChild) }, contents: function(e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes) } }, function(e, t) { ie.fn[e] = function(n, r) {
            var i = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || (i = ie.unique(i)), ve.test(e) && (i = i.reverse())), this.pushStack(i) } });
    var be = /\S+/g,
        xe = {};
    ie.Callbacks = function(e) { e = "string" == typeof e ? xe[e] || o(e) : ie.extend({}, e);
        var t, n, r, i, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) { n = !1;
                        break }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable()) },
            d = { add: function() {
                    if (l) {
                        var r = l.length;! function o(t) { ie.each(t, function(t, n) {
                                var r = ie.type(n); "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && o(n) }) }(arguments), t ? i = l.length : n && (s = r, c(n)) }
                    return this }, remove: function() {
                    return l && ie.each(arguments, function(e, n) {
                        for (var r;
                            (r = ie.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, a >= r && a--) }), this }, has: function(e) {
                    return e ? ie.inArray(e, l) > -1 : !(!l || !l.length) }, empty: function() {
                    return l = [], i = 0, this }, disable: function() {
                    return l = u = n = void 0, this }, disabled: function() {
                    return !l }, lock: function() {
                    return u = void 0, n || d.disable(), this }, locked: function() {
                    return !u }, fireWith: function(e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this }, fire: function() {
                    return d.fireWith(this, arguments), this }, fired: function() {
                    return !!r } };
        return d }, ie.extend({ Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = { state: function() {
                        return n }, always: function() {
                        return i.done(arguments).fail(arguments), this }, then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) { ie.each(t, function(t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) {
                        return null != e ? ie.extend(e, r) : r } },
                i = {};
            return r.pipe = r.then, ie.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function(e) {
            var t, n, r, i = 0,
                o = Y.call(arguments),
                a = o.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ie.Deferred(),
                u = function(e, n, r) {
                    return function(i) { n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r) } };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise() } });
    var we;
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this }, ie.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? ie.readyWait++ : ie.ready(!0) }, ready: function(e) {
            if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                if (!he.body) return setTimeout(ie.ready);
                ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready"))) } } }), ie.ready.promise = function(t) {
        if (!we)
            if (we = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else { he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try { n = null == e.frameElement && he.documentElement } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ie.isReady) {
                    try { n.doScroll("left") } catch (e) {
                        return setTimeout(i, 50) }
                    a(), ie.ready() } }() }
        return we.promise(t) };
    var Te, Ce = "undefined";
    for (Te in ie(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, ie(function() {
            var e, t, n, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r)) }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) { ne.deleteExpando = !0;
                try { delete e.test } catch (t) { ne.deleteExpando = !1 } }
            e = null }(), ie.acceptData = function(e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t };
    var Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    ie.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) {
            return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !u(e) }, data: function(e, t, n) {
            return c(e, t, n) }, removeData: function(e, t) {
            return d(e, t) }, _data: function(e, t, n) {
            return c(e, t, n, !0) }, _removeData: function(e, t) {
            return d(e, t, !0) } }), ie.fn.extend({ data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), l(o, r, i[r])));
                    ie._data(o, "parsedAttrs", !0) }
                return i }
            return "object" == typeof e ? this.each(function() { ie.data(this, e) }) : arguments.length > 1 ? this.each(function() { ie.data(this, e, t) }) : o ? l(o, e, ie.data(o, e)) : void 0 }, removeData: function(e) {
            return this.each(function() { ie.removeData(this, e) }) } }), ie.extend({ queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0 }, dequeue: function(e, t) { t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ie._queueHooks(e, t),
                a = function() { ie.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, { empty: ie.Callbacks("once memory").add(function() { ie._removeData(e, t + "queue"), ie._removeData(e, n) }) }) } }), ie.fn.extend({ queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e) }) }, dequeue: function(e) {
            return this.each(function() { ie.dequeue(this, e) }) }, clearQueue: function(e) {
            return this.queue(e || "fx", []) }, promise: function(e, t) {
            var n, r = 1,
                i = ie.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t) } });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ae = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e) },
        De = ie.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === ie.type(n)) { i = !0;
                for (s in n) ie.access(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(ie(e), n) })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o },
        je = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { ne.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == ne.deleteExpando) { ne.deleteExpando = !0;
            try { delete t.test } catch (r) { ne.deleteExpando = !1 } } }(),
    function() {
        var t, n, r = he.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null }();
    var Le = /^(?:input|select|textarea)$/i,
        He = /^key/,
        qe = /^(?:mouse|pointer|contextmenu)|click/,
        _e = /^(?:focusinfocus|focusoutblur)$/,
        Me = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = { global: {}, add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = ie._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ie.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof ie === Ce || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments) }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = ie.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = ie.event.special[p] || {}, d = ie.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ie.expr.match.needsContext.test(i), namespace: h.join(".") }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
                e = null } }, remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = ie.hasData(e) && ie._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], u = t.length; u--;)
                    if (s = Me.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ie.removeEvent(e, p, g.handle), delete c[p]) } else
                        for (p in c) ie.event.remove(e, p + t[u], n, r, !0);
                ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events")) } }, trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, d, f = [r || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), u = ie.event.special[p] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !ie.isWindow(r)) {
                    for (l = u.delegateType || p, _e.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e) }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) { c = r[a], c && (r[a] = null), ie.event.triggered = p;
                    try { r[p]() } catch (m) {}
                    ie.event.triggered = void 0, c && (r[a] = c) }
                return t.result } }, dispatch: function(e) { e = ie.event.fix(e);
            var t, n, r, i, o, a = [],
                s = Y.call(arguments),
                l = (ie._data(this, "events") || {})[e.type] || [],
                u = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = ie.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result } }, handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(l) >= 0 : ie.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({ elem: l, handlers: i }) }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a }, fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
                    return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) {
                    return ie.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }, simulate: function(e, t, n, r) {
            var i = ie.extend(new ie.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, ie.removeEvent = he.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n)) }, ie.Event = function(e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t) }, ie.Event.prototype = { isDefaultPrevented: p, isPropagationStopped: p, isImmediatePropagationStopped: p, preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, ie.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { ie.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || ie.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), ne.submitBubbles || (ie.event.special.submit = { setup: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), ie._data(n, "submitBubbles", !0)) }) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit") } }), ne.changeBubbles || (ie.event.special.change = { setup: function() {
            return Le.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ie.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), ie.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0) })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Le.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0) }), ie._data(t, "changeBubbles", !0)) }) }, handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
            return ie.event.remove(this, "._change"), !Le.test(this.nodeName) } }), ne.focusinBubbles || ie.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { ie.event.simulate(t, e.target, ie.event.fix(e), !0) };
        ie.event.special[t] = { setup: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t);
                i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1) }, teardown: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t) - 1;
                i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t)) } } }), ie.fn.extend({ on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return ie().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() { ie.event.add(this, e, r, n, t) }) }, one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1) }, off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = p), this.each(function() { ie.event.remove(this, e, n, t) }) }, trigger: function(e, t) {
            return this.each(function() { ie.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0 } });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        Be = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        Pe = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        $e = /<tbody/i,
        ze = /<|&#?\w+;/,
        Ie = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ye = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        Ge = m(he),
        Qe = Ge.appendChild(he.createElement("div"));
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({ clone: function(e, t, n) {
            var r, i, o, a, s, l = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !l && g(e, "script")), r = s = i = null, o }, buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
                    else if (ze.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (We.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[l] || Ye._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Pe.test(o) && p.push(t.createTextNode(Pe.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || $e.test(o) ? "<table>" !== c[1] || $e.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ue.test(o.type || "") && n.push(o);
            return s = null, f }, cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ie.expando, l = ie.cache, u = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, J.push(i)) } } }), ie.fn.extend({ text: function(e) {
            return De(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e)) }, null, e, arguments.length) }, append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e) } }) }, prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() {
            return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
            return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function(e, t) {
            for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(g(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this }, empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0) }
            return this }, clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t) }) }, html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                if ("string" == typeof e && !Ie.test(e) && (ne.htmlSerialize || !Be.test(e)) && (ne.leadingWhitespace || !Pe.test(e)) && !Ye[(We.exec(e) || ["", ""])[1].toLowerCase()]) { e = e.replace(Re, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0 } catch (i) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) { e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove() }, detach: function(e) {
            return this.remove(e, !0) }, domManip: function(e, t) { e = G.apply([], e);
            var n, r, i, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = ie.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t) });
            if (u && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ie.map(g(s, "script"), b), i = o.length; u > l; l++) r = s, l !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ie.map(o, x), l = 0; i > l; l++) r = o[l], Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                s = n = null }
            return this } }), ie.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { ie.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), Q.apply(i, n.get());
            return this.pushStack(i) } });
    var Ke, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0 } }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null) }, tt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth,
                o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : he.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle }, tt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto" }),
        function() {
            function t() {
                var t, n, r, i;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || { width: "4px" }).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r)) }
            var n, r, i, o, a, s, l;
            n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, { reliableHiddenOffsets: function() {
                    return null == s && t(), s }, boxSizingReliable: function() {
                    return null == a && t(), a }, pixelPosition: function() {
                    return null == o && t(), o }, reliableMarginRight: function() {
                    return null == l && t(), l } })) }(), ie.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + ke + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + ke + ")", "i"),
        ct = { position: "absolute", visibility: "hidden", display: "block" },
        dt = { letterSpacing: "0", fontWeight: "400" },
        ft = ["Webkit", "O", "Moz", "ms"];
    ie.extend({ cssHooks: { opacity: { get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": ne.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ie.camelCase(t),
                    l = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = S(l, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n, "string" === o && (i = ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try { l[t] = n } catch (u) {} } }, css: function(e, t, n, r) {
            var i, o, a, s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o } }), ie.each(["height", "width"], function(e, t) { ie.cssHooks[t] = { get: function(e, n, r) {
                return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
                    return L(e, t, r) }) : L(e, t, r) : void 0 }, set: function(e, n, r) {
                var i = r && et(e);
                return D(e, n, r ? j(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0) } } }), ne.opacity || (ie.cssHooks.opacity = { get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i) } }), ie.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
        return t ? ie.swap(e, { display: "inline-block" }, tt, [e, "marginRight"]) : void 0 }), ie.each({ margin: "", padding: "", border: "Width" }, function(e, t) { ie.cssHooks[e + t] = { expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                return i } }, nt.test(e) || (ie.cssHooks[e + t].set = D) }), ie.fn.extend({ css: function(e, t) {
            return De(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = et(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                    return o }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t) }, e, t, arguments.length > 1) }, show: function() {
            return A(this, !0) }, hide: function() {
            return A(this) }, toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Ae(this) ? ie(this).show() : ie(this).hide() }) } }), ie.Tween = H, H.prototype = { constructor: H, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px") }, cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this) }, run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ie.easing = { linear: function(e) {
            return e }, swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2 } }, ie.fx = H.prototype.init, ie.fx.step = {};
    var pt, ht, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [F],
        bt = { "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = gt.exec(t),
                    o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== o && +r) && gt.exec(ie.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) { o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l) }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n }] };
    ie.Animation = ie.extend(B, { tweener: function(e, t) { ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t) }, prefilter: function(e, t) { t ? yt.unshift(e) : yt.push(e) } }), ie.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : { complete: n || !n && t || ie.isFunction(e) && e, duration: e, easing: n && t || t && !ie.isFunction(t) && t };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() { ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue) }, r }, ie.fn.extend({ fadeTo: function(e, t, n, r) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) {
                var i = ie.isEmptyObject(e),
                    o = ie.speed(t, n, r),
                    a = function() {
                        var t = B(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0) };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n) };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ie.timers,
                        a = ie._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));!t && n || ie.dequeue(this, e) }) }, finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish }) } }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i) } }), ie.each({ slideDown: _("show"), slideUp: _("hide"), slideToggle: _("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { ie.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r) } }), ie.timers = [], ie.fx.tick = function() {
            var e, t = ie.timers,
                n = 0;
            for (pt = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), pt = void 0 }, ie.fx.timer = function(e) { ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop() }, ie.fx.interval = 13, ie.fx.start = function() { ht || (ht = setInterval(ie.fx.tick, ie.fx.interval)) }, ie.fx.stop = function() { clearInterval(ht), ht = null }, ie.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ie.fn.delay = function(e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) } }) },
        function() {
            var e, t, n, r, i;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value }();
    var xt = /\r/g;
    ie.fn.extend({ val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(e) {
                        return null == e ? "" : e + "" })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) });
                if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n) } } }), ie.extend({ valHooks: { option: { get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e)) } }, select: { get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], (n.selected || l === i) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o) return t;
                            a.push(t) }
                    return a }, set: function(e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try { r.selected = n = !0 } catch (s) { r.scrollHeight } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i } } } }), ie.each(["radio", "checkbox"], function() { ie.valHooks[this] = { set: function(e, t) {
                return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0 } }, ne.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value }) });
    var wt, Tt, Ct = ie.expr.attrHandle,
        Nt = /^(?:checked|selected)$/i,
        Et = ne.getSetAttribute,
        kt = ne.input;
    ie.fn.extend({ attr: function(e, t) {
            return De(this, ie.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
            return this.each(function() { ie.removeAttr(this, e) }) } }), ie.extend({ attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t)) }, removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? kt && Et || !Nt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Et ? n : r) }, attrHooks: { type: { set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t } } } } }), Tt = { set: function(e, t, n) {
            return t === !1 ? ie.removeAttr(e, n) : kt && Et || !Nt.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n } }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ct[t] || ie.find.attr;
        Ct[t] = kt && Et || !Nt.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i } : function(e, t, n) {
            return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null } }), kt && Et || (ie.attrHooks.value = { set: function(e, t, n) {
            return ie.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n) } }), Et || (wt = { set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null }, ie.valHooks.button = { get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0 }, set: wt.set }, ie.attrHooks.contenteditable = { set: function(e, t, n) { wt.set(e, "" === t ? !1 : t, n) } }, ie.each(["width", "height"], function(e, t) { ie.attrHooks[t] = { set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), ne.style || (ie.attrHooks.style = { get: function(e) {
            return e.style.cssText || void 0 }, set: function(e, t) {
            return e.style.cssText = t + "" } });
    var St = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    ie.fn.extend({ prop: function(e, t) {
            return De(this, ie.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
            return e = ie.propFix[e] || e, this.each(function() {
                try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), ie.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1 } } } }), ne.hrefNormalized || ie.each(["href", "src"], function(e, t) { ie.propHooks[t] = { get: function(e) {
                return e.getAttribute(t, 4) } } }), ne.optSelected || (ie.propHooks.selected = { get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ie.propFix[this.toLowerCase()] = this }), ne.enctype || (ie.propFix.enctype = "encoding");
    var Dt = /[\t\r\n\f]/g;
    ie.fn.extend({ addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) { ie(this).addClass(e.call(this, t, this.className)) });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a) }
            return this }, removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) { ie(this).removeClass(e.call(this, t, this.className)) });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a) }
            return this }, toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) { ie(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = ie(this), o = e.match(be) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else n !== Ce && "boolean" !== n || (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "") }) }, hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
            return !1 } }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { ie.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), ie.fn.extend({ hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) {
            return this.on(e, null, t, n) }, unbind: function(e, t) {
            return this.off(e, null, t) }, delegate: function(e, t, n, r) {
            return this.on(t, e, n, r) }, undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
    var jt = ie.now(),
        Lt = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ie.trim(t + "");
        return i && !ie.trim(i.replace(Ht, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "") })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t) }, ie.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try { e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (i) { n = void 0 }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n };
    var qt, _t, Mt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $t = {},
        zt = {},
        It = "*/".concat("*");
    try { _t = location.href } catch (Xt) { _t = he.createElement("a"), _t.href = "", _t = _t.href }
    qt = Wt.exec(_t.toLowerCase()) || [], ie.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: _t, type: "GET", isLocal: Bt.test(qt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
            return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e) }, ajaxPrefilter: P($t), ajaxTransport: P(zt), ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, !e && T || (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop"))) } "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, l, u, c, d = ie.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
                h = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = { readyState: 0, getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Ot.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()] }
                        return null == t ? null : t }, getAllResponseHeaders: function() {
                        return 2 === b ? a : null }, setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this }, overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this }, statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this }, abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this } };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _t) + "").replace(Mt, "").replace(Rt, qt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qt[1] && r[2] === qt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), R($t, d, t, w), 2 === b) return w;
            l = ie.event && d.global, l && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) : o + (Lt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in { success: 1, error: 1, complete: 1 }) w[i](d[i]);
            if (u = R(zt, d, t, w)) { w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() { w.abort("timeout") }, d.timeout));
                try { b = 1, u.send(v, n) } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T) } } else n(-1, "No Transport");
            return w }, getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json") }, getScript: function(e, t) {
            return ie.get(e, void 0, t, "script") } }), ie.each(["get", "post"], function(e, t) { ie[t] = function(e, n, r, i) {
            return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({ url: e, type: t, dataType: i, data: n, success: r }) } }), ie._evalUrl = function(e) {
        return ie.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, ie.fn.extend({ wrapAll: function(e) {
            if (ie.isFunction(e)) return this.each(function(t) { ie(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e }).append(this) }
            return this }, wrapInner: function(e) {
            return ie.isFunction(e) ? this.each(function(t) { ie(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
            var t = ie.isFunction(e);
            return this.each(function(n) { ie(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() {
            return this.parent().each(function() { ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes) }).end() } }), ie.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display")) }, ie.expr.filters.visible = function(e) {
        return !ie.expr.filters.hidden(e) };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Jt = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            i = function(e, t) { t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(Ut, "+") }, ie.fn.extend({ serialize: function() {
            return ie.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Gt.test(this.nodeName) && !Yt.test(e) && (this.checked || !je.test(e)) }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return { name: t.name, value: e.replace(Jt, "\r\n") } }) : { name: t.name, value: n.replace(Jt, "\r\n") } }).get() } }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U() } : X;
    var Qt = 0,
        Kt = {},
        Zt = ie.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Kt) Kt[e](void 0, !0) }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return { send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Qt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, l, u;
                        if (t && (i || 4 === o.readyState))
                            if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                            else { u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try { l = o.statusText } catch (c) { l = "" }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404 }
                        u && r(s, l, u, o.getAllResponseHeaders()) }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t() }, abort: function() { t && t(void 0, !0) } } } }), ie.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) {
                return ie.globalEval(e), e } } }), ie.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || ie("head")[0] || he.documentElement;
            return { send: function(r, i) { t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(void 0, !0) } } } });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var e = en.pop() || ie.expando + "_" + jt++;
            return this[e] = !0, e } }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || ie.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0 }), "script") : void 0 }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes)) };
    var nn = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e) }).complete(n && function(e, t) { a.each(n, i || [e.responseText, t, e]) }), this }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { ie.fn[t] = function(e) {
            return this.on(t, e) } }), ie.expr.filters.animated = function(e) {
        return ie.grep(ie.timers, function(t) {
            return e === t.elem }).length };
    var rn = e.document.documentElement;
    ie.offset = { setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u, c = ie.css(e, "position"),
                d = ie(e),
                f = {}; "static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), l = ie.css(e, "left"), u = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, l]) > -1, u ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f) } }, ie.fn.extend({ offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) { ie.offset.setOffset(this, e, t) });
            var t, n, r = { top: 0, left: 0 },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = V(o), { top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r }, position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - ie.css(r, "marginTop", !0), left: t.left - n.left - ie.css(r, "marginLeft", !0) } } }, offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || rn }) } }), ie.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function(r) {
            return De(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i) }, e, r, arguments.length, null) } }), ie.each(["top", "left"], function(e, t) { ie.cssHooks[t] = k(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0 }) }), ie.each({ Height: "height", Width: "width" }, function(e, t) {
        ie.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            ie.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return De(this, function(t, n, r) {
                    var i;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ie.fn.size = function() {
        return this.length }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie });
    var on = e.jQuery,
        an = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie }, typeof t === Ce && (e.jQuery = e.$ = ie), ie
});
! function(t) {
    var e = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 2e3, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function() {
            return !0 }, onSlideBefore: function() {
            return !0 }, onSlideAfter: function() {
            return !0 }, onSlideNext: function() {
            return !0 }, onSlidePrev: function() {
            return !0 }, onSliderResize: function() {
            return !0 } };
    t.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() { t(this).bxSlider(n) }), this;
        var s = {},
            o = this,
            r = t(window).width(),
            a = t(window).height();
        if (!t(o).data("bxSlider")) {
            var l = function() { t(o).data("bxSlider") || (s.settings = t.extend({}, e, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = { index: s.settings.startSlide }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" === s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" !== s.settings.mode && function() {
                        for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++)
                            if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                        return !1 }(), "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(s.settings.slideSelector).each(function() { t(this).data("origStyle", t(this).attr("style")) }), d()) },
                d = function() {
                    var e = s.children.eq(s.settings.startSlide);
                    o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({ width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto", position: "relative" }), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), s.viewport.parent().css({ maxWidth: u() }), s.settings.pager || s.settings.controls || s.viewport.parent().css({ margin: "0 auto 0px" }), s.children.css({ "float": "horizontal" === s.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), s.children.css("width", h()), "horizontal" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" === s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" === s.settings.mode && (s.children.css({ position: "absolute", zIndex: 0, display: "none" }), s.children.eq(s.settings.startSlide).css({ zIndex: s.settings.slideZIndex, display: "block" })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && P(), s.active.last = s.settings.startSlide === f() - 1, s.settings.video && o.fitVids(), ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.controls && C(), s.settings.auto && s.settings.autoControls && T(), s.settings.pager && b(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), c(e, g) },
                c = function(e, i) {
                    var n = e.find('img:not([src=""]), iframe').length,
                        s = 0;
                    return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function() { t(this).one("load error", function() {++s === n && i() }).each(function() { this.complete && t(this).load() }) }) },
                g = function() {
                    if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) {
                        var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                            i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
                            n = s.children.slice(-e).clone(!0).addClass("bx-clone");
                        s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n) }
                    s.loader.remove(), x(), "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), o.redrawSlider(), s.settings.onSliderLoad.call(o, s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", Z), s.settings.auto && s.settings.autoStart && (f() > 1 || s.settings.autoSlideForOnePage) && H(), s.settings.ticker && W(), s.settings.pager && I(s.settings.startSlide), s.settings.controls && D(), s.settings.touchEnabled && !s.settings.ticker && N(), s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(F) },
                p = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
                        if (s.carousel) {
                            var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * m();
                            for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i)) } else n = s.children.eq(s.active.index);
                    else n = s.children;
                    return "vertical" === s.settings.mode ? (n.each(function(i) { e += t(this).outerHeight() }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1) }).get()), "border-box" === s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" === s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e },
                u = function() {
                    var t = "100%";
                    return s.settings.slideWidth > 0 && (t = "horizontal" === s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t },
                h = function() {
                    var t = s.settings.slideWidth,
                        e = s.viewport.width();
                    if (0 === s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" === s.settings.mode) t = e;
                    else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) {
                        if (e > s.maxThreshold) return t;
                        e < s.minThreshold ? t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides : s.settings.shrinkItems && (t = Math.floor((e + s.settings.slideMargin) / Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) - s.settings.slideMargin)) }
                    return t },
                v = function() {
                    var t = 1,
                        e = null;
                    return "horizontal" === s.settings.mode && s.settings.slideWidth > 0 ? s.viewport.width() < s.minThreshold ? t = s.settings.minSlides : s.viewport.width() > s.maxThreshold ? t = s.settings.maxSlides : (e = s.children.first().width() + s.settings.slideMargin, t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)) : "vertical" === s.settings.mode && (t = s.settings.minSlides), t },
                f = function() {
                    var t = 0,
                        e = 0,
                        i = 0;
                    if (s.settings.moveSlides > 0)
                        if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / m());
                        else
                            for (; e < s.children.length;) ++t, e = i + v(), i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
                    else t = Math.ceil(s.children.length / v());
                    return t },
                m = function() {
                    return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v() },
                x = function() {
                    var t, e, i;
                    s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop ? "horizontal" === s.settings.mode ? (e = s.children.last(), t = e.position(), S(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === s.settings.mode && (i = s.children.length - s.settings.minSlides, t = s.children.eq(i).position(), S(-t.top, "reset", 0)) : (t = s.children.eq(s.active.index * m()).position(), s.active.index === f() - 1 && (s.active.last = !0), void 0 !== t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0))) },
                S = function(e, i, n, r) {
                    var a, l;
                    s.usingCSS ? (l = "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) { t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), q()) }) : q()) : "reset" === i ? o.css(s.animProp, l) : "ticker" === i && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, l), 0 !== n ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) { t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), S(r.resetValue, "reset", 0), L()) }) : (S(r.resetValue, "reset", 0), L()))) : (a = {}, a[s.animProp] = e, "slide" === i ? o.animate(a, n, s.settings.easing, function() { q() }) : "reset" === i ? o.css(s.animProp, e) : "ticker" === i && o.animate(a, n, "linear", function() { S(r.resetValue, "reset", 0), L() })) },
                w = function() {
                    for (var e = "", i = "", n = f(), o = 0; n > o; o++) i = "", s.settings.buildPager && t.isFunction(s.settings.buildPager) || s.settings.pagerCustom ? (i = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (i = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + i + "</a></div>";
                    s.pagerEl.html(e) },
                b = function() { s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), w()), s.pagerEl.on("click touchend", "a", z) },
                C = function() { s.controls.next = t('<a class="ozluy-icon-arrow-right" href=""></a>'), s.controls.prev = t('<a class="ozluy-icon-arrow-left" href=""></a>'), s.controls.next.bind("click touchend", E), s.controls.prev.bind("click touchend", k), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl)) },
                T = function() { s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", M), s.controls.autoEl.on("click", ".bx-stop", y), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), A(s.settings.autoStart ? "stop" : "start") },
                P = function() { s.children.each(function(e) {
                        var i = t(this).find("img:first").attr("title");
                        void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>") }) },
                E = function(t) { t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide()) },
                k = function(t) { t.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide()) },
                M = function(t) { o.startAuto(), t.preventDefault() },
                y = function(t) { o.stopAuto(), t.preventDefault() },
                z = function(e) {
                    var i, n;
                    e.preventDefault(), s.controls.el.hasClass("disabled") || (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== s.active.index && o.goToSlide(n))) },
                I = function(e) {
                    var i = s.children.length;
                    return "short" === s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, n) { t(n).find("a").eq(e).addClass("active") })) },
                q = function() {
                    if (s.settings.infiniteLoop) {
                        var t = "";
                        0 === s.active.index ? t = s.children.eq(0).position() : s.active.index === f() - 1 && s.carousel ? t = s.children.eq((f() - 1) * m()).position() : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" === s.settings.mode ? S(-t.left, "reset", 0) : "vertical" === s.settings.mode && S(-t.top, "reset", 0)) }
                    s.working = !1, s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) },
                A = function(t) { s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active")) },
                D = function() { 1 === f() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 === s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index === f() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled"))) },
                H = function() { s.settings.autoDelay > 0 ? setTimeout(o.startAuto, s.settings.autoDelay) : (o.startAuto(), t(window).focus(function() { o.startAuto() }).blur(function() { o.stopAuto() })), s.settings.autoHover && o.hover(function() { s.interval && (o.stopAuto(!0), s.autoPaused = !0) }, function() { s.autoPaused && (o.startAuto(!0), s.autoPaused = null) }) },
                W = function() {
                    var e, i, n, r, a, l, d, c, g = 0; "next" === s.settings.autoDirection ? o.append(s.children.clone().addClass("bx-clone")) : (o.prepend(s.children.clone().addClass("bx-clone")), e = s.children.first().position(), g = "horizontal" === s.settings.mode ? -e.left : -e.top), S(g, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && (s.usingCSS ? (r = "horizontal" === s.settings.mode ? 4 : 5, s.viewport.hover(function() { i = o.css("-" + s.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), S(n, "reset", 0) }, function() { c = 0, s.children.each(function(e) { c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0) }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(n))), L(d) })) : s.viewport.hover(function() { o.stop() }, function() { c = 0, s.children.each(function(e) { c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0) }), a = s.settings.speed / c, l = "horizontal" === s.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(o.css(l)))), L(d) })), L() },
                L = function(t) {
                    var e, i, n, r = t ? t : s.settings.speed,
                        a = { left: 0, top: 0 },
                        l = { left: 0, top: 0 }; "next" === s.settings.autoDirection ? a = o.find(".bx-clone").first().position() : l = s.children.first().position(), e = "horizontal" === s.settings.mode ? -a.left : -a.top, i = "horizontal" === s.settings.mode ? -l.left : -l.top, n = { resetValue: i }, S(e, "ticker", r, n) },
                O = function(e) {
                    var i = t(window),
                        n = { top: i.scrollTop(), left: i.scrollLeft() },
                        s = e.offset();
                    return n.right = n.left + i.width(), n.bottom = n.top + i.height(), s.right = s.left + e.outerWidth(), s.bottom = s.top + e.outerHeight(), !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom) },
                F = function(t) {
                    var e = document.activeElement.tagName.toLowerCase(),
                        i = "input|textarea",
                        n = new RegExp(e, ["i"]),
                        s = n.exec(i);
                    if (null == s && O(o)) {
                        if (39 === t.keyCode) return E(t), !1;
                        if (37 === t.keyCode) return k(t), !1 } },
                N = function() { s.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, s.viewport.bind("touchstart MSPointerDown pointerdown", X), s.viewport.on("click", ".bxslider a", function(t) { s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled")) }) },
                X = function(t) {
                    if (s.controls.el.addClass("disabled"), s.working) t.preventDefault(), s.controls.el.removeClass("disabled");
                    else { s.touch.originalPos = o.position();
                        var e = t.originalEvent,
                            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
                        s.touch.start.x = i[0].pageX, s.touch.start.y = i[0].pageY, s.viewport.get(0).setPointerCapture && (s.pointerId = e.pointerId, s.viewport.get(0).setPointerCapture(s.pointerId)), s.viewport.bind("touchmove MSPointerMove pointermove", V), s.viewport.bind("touchend MSPointerUp pointerup", R), s.viewport.bind("MSPointerCancel pointercancel", Y) } },
                Y = function(t) { S(s.touch.originalPos.left, "reset", 0), s.controls.el.removeClass("disabled"), s.viewport.unbind("MSPointerCancel pointercancel", Y), s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId) },
                V = function(t) {
                    var e = t.originalEvent,
                        i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                        n = Math.abs(i[0].pageX - s.touch.start.x),
                        o = Math.abs(i[0].pageY - s.touch.start.y),
                        r = 0,
                        a = 0;
                    3 * n > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== s.settings.mode && s.settings.oneToOneTouch && ("horizontal" === s.settings.mode ? (a = i[0].pageX - s.touch.start.x, r = s.touch.originalPos.left + a) : (a = i[0].pageY - s.touch.start.y, r = s.touch.originalPos.top + a), S(r, "reset", 0)) },
                R = function(t) { s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.controls.el.removeClass("disabled");
                    var e = t.originalEvent,
                        i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
                        n = 0,
                        r = 0;
                    s.touch.end.x = i[0].pageX, s.touch.end.y = i[0].pageY, "fade" === s.settings.mode ? (r = Math.abs(s.touch.start.x - s.touch.end.x), r >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === s.settings.mode ? (r = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (r = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 === s.active.index && r > 0 || s.active.last && 0 > r) ? S(n, "reset", 200) : Math.abs(r) >= s.settings.swipeThreshold ? (0 > r ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : S(n, "reset", 200)), s.viewport.unbind("touchend MSPointerUp pointerup", R), s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId) },
                Z = function(e) {
                    if (s.initialized)
                        if (s.working) window.setTimeout(Z, 10);
                        else {
                            var i = t(window).width(),
                                n = t(window).height();
                            (r !== i || a !== n) && (r = i, a = n, o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index)) } },
                B = function(t) {
                    var e = v();
                    s.settings.ariaHidden && !s.settings.ticker && (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false")) },
                U = function(t) {
                    return 0 > t ? s.settings.infiniteLoop ? f() - 1 : s.active.index : t >= f() ? s.settings.infiniteLoop ? 0 : s.active.index : t };
            return o.goToSlide = function(e, i) {
                var n, r, a, l, d = !0,
                    c = 0,
                    g = { left: 0, top: 0 },
                    u = null;
                if (s.oldIndex = s.active.index, s.active.index = U(e), !s.working && s.active.index !== s.oldIndex) {
                    if (s.working = !0, d = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index), "undefined" != typeof d && !d) return s.active.index = s.oldIndex, void(s.working = !1); "next" === i ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1) : "prev" === i && (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)), s.active.last = s.active.index >= f() - 1, (s.settings.pager || s.settings.pagerCustom) && I(s.active.index), s.settings.controls && D(), "fade" === s.settings.mode ? (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({ zIndex: 0 }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() { t(this).css("zIndex", s.settings.slideZIndex), q() })) : (s.settings.adaptiveHeight && s.viewport.height() !== p() && s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed), !s.settings.infiniteLoop && s.carousel && s.active.last ? "horizontal" === s.settings.mode ? (u = s.children.eq(s.children.length - 1), g = u.position(), c = s.viewport.width() - u.outerWidth()) : (n = s.children.length - s.settings.minSlides, g = s.children.eq(n).position()) : s.carousel && s.active.last && "prev" === i ? (r = 1 === s.settings.moveSlides ? s.settings.maxSlides - m() : (f() - 1) * m() - (s.children.length - s.settings.maxSlides), u = o.children(".bx-clone").eq(r), g = u.position()) : "next" === i && 0 === s.active.index ? (g = o.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1) : e >= 0 && (l = e * parseInt(m()), g = s.children.eq(l).position()), "undefined" != typeof g ? (a = "horizontal" === s.settings.mode ? -(g.left - c) : -g.top, S(a, "slide", s.settings.speed)) : s.working = !1), s.settings.ariaHidden && B(s.active.index * m()) } }, o.goToNextSlide = function() {
                if (s.settings.infiniteLoop || !s.active.last) {
                    var t = parseInt(s.active.index) + 1;
                    o.goToSlide(t, "next") } }, o.goToPrevSlide = function() {
                if (s.settings.infiniteLoop || 0 !== s.active.index) {
                    var t = parseInt(s.active.index) - 1;
                    o.goToSlide(t, "prev") } }, o.startAuto = function(t) { s.interval || (s.interval = setInterval(function() { "next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide() }, s.settings.pause), s.settings.autoControls && t !== !0 && A("stop")) }, o.stopAuto = function(t) { s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && t !== !0 && A("start")) }, o.getCurrentSlide = function() {
                return s.active.index }, o.getCurrentSlideElement = function() {
                return s.children.eq(s.active.index) }, o.getSlideElement = function(t) {
                return s.children.eq(t) }, o.getSlideCount = function() {
                return s.children.length }, o.isWorking = function() {
                return s.working }, o.redrawSlider = function() { s.children.add(o.find(".bx-clone")).outerWidth(h()), s.viewport.css("height", p()), s.settings.ticker || x(), s.active.last && (s.active.index = f() - 1), s.active.index >= f() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (w(), I(s.active.index)), s.settings.ariaHidden && B(s.active.index * m()) }, o.destroySlider = function() { s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function() { void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style") }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", Z), s.settings.keyboardEnabled && t(document).unbind("keydown", F), t(this).removeData("bxSlider")) }, o.reloadSlider = function(e) { void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this) }, l(), t(o).data("bxSlider", this), this } } }(jQuery);

function Segment(t, e, n) { this.path = t, this.length = t.getTotalLength(), this.path.style.strokeDashoffset = 2 * this.length, this.begin = e ? this.valueOf(e) : 0, this.end = n ? this.valueOf(n) : this.length, this.timer = null, this.draw(this.begin, this.end) }
Segment.prototype = { draw: function(t, e, n, i) {
        if (n) {
            var s = i.hasOwnProperty("delay") ? 1e3 * parseFloat(i.delay) : 0,
                a = i.hasOwnProperty("easing") ? i.easing : null,
                h = i.hasOwnProperty("callback") ? i.callback : null,
                r = this;
            if (this.stop(), s) return delete i.delay, this.timer = setTimeout(function() { r.draw(t, e, n, i) }, s), this.timer;
            var l = new Date,
                o = 1e3 / 60,
                g = this.begin,
                u = this.end,
                f = this.valueOf(t),
                d = this.valueOf(e);! function p() {
                var t = new Date,
                    e = (t - l) / 1e3,
                    i = e / parseFloat(n),
                    s = i;
                return "function" == typeof a && (s = a(s)), i > 1 ? (r.stop(), s = 1) : r.timer = setTimeout(p, o), r.begin = g + (f - g) * s, r.end = u + (d - u) * s, r.begin < 0 && (r.begin = 0), r.end > r.length && (r.end = r.length), r.begin < r.end ? r.draw(r.begin, r.end) : r.draw(r.begin + (r.end - r.begin), r.end - (r.end - r.begin)), i > 1 && "function" == typeof h ? h.call(r.context) : void 0 }() } else this.path.style.strokeDasharray = this.strokeDasharray(t, e) }, strokeDasharray: function(t, e) {
        return this.begin = this.valueOf(t), this.end = this.valueOf(e), [this.length, this.length + this.begin, this.end - this.begin].join(" ") }, valueOf: function(t) {
        var e, n = parseFloat(t);
        return ("string" == typeof t || t instanceof String) && ~t.indexOf("%") && (~t.indexOf("+") ? (e = t.split("+"), n = this.percent(e[0]) + parseFloat(e[1])) : ~t.indexOf("-") ? (e = t.split("-"), n = this.percent(e[0]) - parseFloat(e[1])) : n = this.percent(t)), n }, stop: function() { clearTimeout(this.timer), this.timer = null }, percent: function(t) {
        return parseFloat(t) / 100 * this.length } };
$.extend($.fn, { validate: function(t) {
        if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
        var e = $.data(this[0], "validator");
        return e ? e : (this.attr("novalidate", "novalidate"), e = new $.validator(t, this[0]), $.data(this[0], "validator", e), e.settings.onsubmit && (this.on("click.validate", ":submit", function(t) { e.settings.submitHandler && (e.submitButton = t.target), $(this).hasClass("cancel") && (e.cancelSubmit = !0), void 0 !== $(this).attr("formnovalidate") && (e.cancelSubmit = !0) }), this.on("submit.validate", function(t) {
            function i() {
                var i, s;
                return e.settings.submitHandler ? (e.submitButton && (i = $("<input type='hidden'/>").attr("name", e.submitButton.name).val($(e.submitButton).val()).appendTo(e.currentForm)), s = e.settings.submitHandler.call(e, e.currentForm, t), e.submitButton && i.remove(), void 0 !== s ? s : !1) : !0 }
            return e.settings.debug && t.preventDefault(), e.cancelSubmit ? (e.cancelSubmit = !1, i()) : e.form() ? e.pendingRequest ? (e.formSubmitted = !0, !1) : i() : (e.focusInvalid(), !1) })), e) }, valid: function() {
        var t, e, i;
        return $(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = $(this[0].form).validate(), this.each(function() { t = e.element(this) && t, i = i.concat(e.errorList) }), e.errorList = i), t }, rules: function(t, e) {
        var i, s, r, n, a, o, l = this[0];
        if (t) switch (i = $.data(l.form, "validator").settings, s = i.rules, r = $.validator.staticRules(l), t) {
            case "add":
                $.extend(r, $.validator.normalizeRule(e)), delete r.messages, s[l.name] = r, e.messages && (i.messages[l.name] = $.extend(i.messages[l.name], e.messages));
                break;
            case "remove":
                return e ? (o = {}, $.each(e.split(/\s/), function(t, e) { o[e] = r[e], delete r[e], "required" === e && $(l).removeAttr("aria-required") }), o) : (delete s[l.name], r) }
        return n = $.validator.normalizeRules($.extend({}, $.validator.classRules(l), $.validator.attributeRules(l), $.validator.dataRules(l), $.validator.staticRules(l)), l), n.required && (a = n.required, delete n.required, n = $.extend({ required: a }, n), $(l).attr("aria-required", "true")), n.remote && (a = n.remote, delete n.remote, n = $.extend(n, { remote: a })), n } }), $.extend($.expr[":"], { blank: function(t) {
        return !$.trim("" + $(t).val()) }, filled: function(t) {
        return !!$.trim("" + $(t).val()) }, unchecked: function(t) {
        return !$(t).prop("checked") } }), $.validator = function(t, e) { this.settings = $.extend(!0, {}, $.validator.defaults, t), this.currentForm = e, this.init() }, $.validator.format = function(t, e) {
    return 1 === arguments.length ? function() {
        var e = $.makeArray(arguments);
        return e.unshift(t), $.validator.format.apply(this, e) } : (arguments.length > 2 && e.constructor !== Array && (e = $.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), $.each(e, function(e, i) { t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
            return i }) }), t) }, $.extend($.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: $([]), errorLabelContainer: $([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function(t) { this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t))) }, onfocusout: function(t) {!this.checkable(t) && (t.name in this.submitted || !this.optional(t)) && this.element(t) }, onkeyup: function(t, e) {
            (9 !== e.which || "" !== this.elementValue(t)) && -1 === $.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) && (t.name in this.submitted || t === this.lastElement) && this.element(t) }, onclick: function(t) { t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode) }, highlight: function(t, e, i) { "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : $(t).addClass(e).removeClass(i) }, unhighlight: function(t, e, i) { "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : $(t).removeClass(e).addClass(i) } }, setDefaults: function(t) { $.extend($.validator.defaults, t) }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: $.validator.format("Please enter no more than {0} characters."), minlength: $.validator.format("Please enter at least {0} characters."), rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."), range: $.validator.format("Please enter a value between {0} and {1}."), max: $.validator.format("Please enter a value less than or equal to {0}."), min: $.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: !1, prototype: { init: function() {
            function t(t) {
                var e = $.data(this.form, "validator"),
                    i = "on" + t.type.replace(/^validate/, ""),
                    s = e.settings;
                s[i] && !$(this).is(s.ignore) && s[i].call(e, this, t) }
            this.labelContainer = $(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm), this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
            var e, i = this.groups = {};
            $.each(this.settings.groups, function(t, e) { "string" == typeof e && (e = e.split(/\s/)), $.each(e, function(e, s) { i[s] = t }) }), e = this.settings.rules, $.each(e, function(t, i) { e[t] = $.validator.normalizeRule(i) }), $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true") }, form: function() {
            return this.checkForm(), $.extend(this.submitted, this.errorMap), this.invalid = $.extend({}, this.errorMap), this.valid() || $(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function() { this.prepareForm();
            for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
            return this.valid() }, element: function(t) {
            var e = this.clean(t),
                i = this.validationTargetFor(e),
                s = !0;
            return this.lastElement = i, void 0 === i ? delete this.invalid[e.name] : (this.prepareElement(i), this.currentElements = $(i), s = this.check(i) !== !1, s ? delete this.invalid[i.name] : this.invalid[i.name] = !0), $(t).attr("aria-invalid", !s), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), s }, showErrors: function(t) {
            if (t) { $.extend(this.errorMap, t), this.errorList = [];
                for (var e in t) this.errorList.push({ message: t[e], element: this.findByName(e)[0] });
                this.successList = $.grep(this.successList, function(e) {
                    return !(e.name in t) }) }
            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function() { $.fn.resetForm && $(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
            var t, e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
            if (this.settings.unhighlight)
                for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, "");
            else e.removeClass(this.settings.errorClass) }, numberOfInvalids: function() {
            return this.objectLength(this.invalid) }, objectLength: function(t) {
            var e = 0;
            for (var i in t) e++;
            return e }, hideErrors: function() { this.hideThese(this.toHide) }, hideThese: function(t) { t.not(this.containers).text(""), this.addWrapper(t).hide() }, valid: function() {
            return 0 === this.size() }, size: function() {
            return this.errorList.length }, focusInvalid: function() {
            if (this.settings.focusInvalid) try { $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (t) {} }, findLastActive: function() {
            var t = this.lastActive;
            return t && 1 === $.grep(this.errorList, function(e) {
                return e.element.name === t.name }).length && t }, elements: function() {
            var t = this,
                e = {};
            return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in e || !t.objectLength($(this).rules()) ? !1 : (e[this.name] = !0, !0) }) }, clean: function(t) {
            return $(t)[0] }, errors: function() {
            var t = this.settings.errorClass.split(" ").join(".");
            return $(this.settings.errorElement + "." + t, this.errorContext) }, reset: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = $([]), this.toHide = $([]), this.currentElements = $([]) }, prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function(t) { this.reset(), this.toHide = this.errorsFor(t) }, elementValue: function(t) {
            var e, i = $(t),
                s = t.type;
            return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && "undefined" != typeof t.validity ? t.validity.badInput ? !1 : i.val() : (e = i.val(), "string" == typeof e ? e.replace(/\r/g, "") : e) }, check: function(t) { t = this.validationTargetFor(this.clean(t));
            var e, i, s, r = $(t).rules(),
                n = $.map(r, function(t, e) {
                    return e }).length,
                a = !1,
                o = this.elementValue(t);
            for (i in r) { s = { method: i, parameters: r[i] };
                try {
                    if (e = $.validator.methods[i].call(this, o, t, s.parameters), "dependency-mismatch" === e && 1 === n) { a = !0;
                        continue }
                    if (a = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                    if (!e) return this.formatAndAdd(t, s), !1 } catch (l) {
                    throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", l), l instanceof TypeError && (l.message += ".  Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method."), l } }
            return a ? void 0 : (this.objectLength(r) && this.successList.push(t), !0) }, customDataMessage: function(t, e) {
            return $(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || $(t).data("msg") }, customMessage: function(t, e) {
            var i = this.settings.messages[t];
            return i && (i.constructor === String ? i : i[e]) }, findDefined: function() {
            for (var t = 0; t < arguments.length; t++)
                if (void 0 !== arguments[t]) return arguments[t] }, defaultMessage: function(t, e) {
            return this.findDefined(this.customMessage(t.name, e), this.customDataMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, $.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>") }, formatAndAdd: function(t, e) {
            var i = this.defaultMessage(t, e.method),
                s = /\$?\{(\d+)\}/g; "function" == typeof i ? i = i.call(this, e.parameters, t) : s.test(i) && (i = $.validator.format(i.replace(s, "{$1}"), e.parameters)), this.errorList.push({ message: i, element: t, method: e.method }), this.errorMap[t.name] = i, this.submitted[t.name] = i }, addWrapper: function(t) {
            return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t }, defaultShowErrors: function() {
            for (var t, e, i = 0; this.errorList[i]; i++) e = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);
            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
            if (this.settings.unhighlight)
                for (i = 0, t = this.validElements(); t[i]; i++) this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);
            this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function() {
            return this.currentElements.not(this.invalidElements()) }, invalidElements: function() {
            return $(this.errorList).map(function() {
                return this.element }) }, showLabel: function(t, e) {
            var i, s, r, n = this.errorsFor(t),
                a = this.idOrName(t),
                o = $(t).attr("aria-describedby");
            n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(e)) : (n = $("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""), i = n, this.settings.wrapper && (i = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, $(t)) : i.insertAfter(t), n.is("label") ? n.attr("for", a) : 0 === n.parents("label[for='" + a + "']").length && (r = n.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), o ? o.match(new RegExp("\\b" + r + "\\b")) || (o += " " + r) : o = r, $(t).attr("aria-describedby", o), s = this.groups[t.name], s && $.each(this.groups, function(t, e) { e === s && $("[name='" + t + "']", this.currentForm).attr("aria-describedby", n.attr("id")) }))), !e && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, t)), this.toShow = this.toShow.add(n) }, errorsFor: function(t) {
            var e = this.idOrName(t),
                i = $(t).attr("aria-describedby"),
                s = "label[for='" + e + "'], label[for='" + e + "'] *";
            return i && (s = s + ", #" + i.replace(/\s+/g, ", #")), this.errors().filter(s) }, idOrName: function(t) {
            return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name) }, validationTargetFor: function(t) {
            return this.checkable(t) && (t = this.findByName(t.name)), $(t).not(this.settings.ignore)[0] }, checkable: function(t) {
            return /radio|checkbox/i.test(t.type) }, findByName: function(t) {
            return $(this.currentForm).find("[name='" + t + "']") }, getLength: function(t, e) {
            switch (e.nodeName.toLowerCase()) {
                case "select":
                    return $("option:selected", e).length;
                case "input":
                    if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length }
            return t.length }, depend: function(t, e) {
            return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0 }, dependTypes: { "boolean": function(t) {
                return t }, string: function(t, e) {
                return !!$(t, e.form).length }, "function": function(t, e) {
                return t(e) } }, optional: function(t) {
            var e = this.elementValue(t);
            return !$.validator.methods.required.call(this, e, t) && "dependency-mismatch" }, startRequest: function(t) { this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0) }, stopRequest: function(t, e) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? ($(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && ($(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function(t) {
            return $.data(t, "previousValue") || $.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, "remote") }) }, destroy: function() { this.resetForm(), $(this.currentForm).off(".validate").removeData("validator") } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function(t, e) { t.constructor === String ? this.classRuleSettings[t] = e : $.extend(this.classRuleSettings, t) }, classRules: function(t) {
        var e = {},
            i = $(t).attr("class");
        return i && $.each(i.split(" "), function() { this in $.validator.classRuleSettings && $.extend(e, $.validator.classRuleSettings[this]) }), e }, normalizeAttributeRule: function(t, e, i, s) { /min|max/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t[i] = !0) }, attributeRules: function(t) {
        var e, i, s = {},
            r = $(t),
            n = t.getAttribute("type");
        for (e in $.validator.methods) "required" === e ? (i = t.getAttribute(e), "" === i && (i = !0), i = !!i) : i = r.attr(e), this.normalizeAttributeRule(s, n, e, i);
        return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s }, dataRules: function(t) {
        var e, i, s = {},
            r = $(t),
            n = t.getAttribute("type");
        for (e in $.validator.methods) i = r.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(s, n, e, i);
        return s }, staticRules: function(t) {
        var e = {},
            i = $.data(t.form, "validator");
        return i.settings.rules && (e = $.validator.normalizeRule(i.settings.rules[t.name]) || {}), e }, normalizeRules: function(t, e) {
        return $.each(t, function(i, s) {
            if (s === !1) return void delete t[i];
            if (s.param || s.depends) {
                var r = !0;
                switch (typeof s.depends) {
                    case "string":
                        r = !!$(s.depends, e.form).length;
                        break;
                    case "function":
                        r = s.depends.call(e, e) }
                r ? t[i] = void 0 !== s.param ? s.param : !0 : delete t[i] } }), $.each(t, function(i, s) { t[i] = $.isFunction(s) ? s(e) : s }), $.each(["minlength", "maxlength"], function() { t[this] && (t[this] = Number(t[this])) }), $.each(["rangelength", "range"], function() {
            var e;
            t[this] && ($.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (e = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(e[0]), Number(e[1])])) }), $.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t }, normalizeRule: function(t) {
        if ("string" == typeof t) {
            var e = {};
            $.each(t.split(/\s/), function() { e[this] = !0 }), t = e }
        return t }, addMethod: function(t, e, i) { $.validator.methods[t] = e, $.validator.messages[t] = void 0 !== i ? i : $.validator.messages[t], e.length < 3 && $.validator.addClassRules(t, $.validator.normalizeRule(t)) }, methods: { required: function(t, e, i) {
            if (!this.depend(i, e)) return "dependency-mismatch";
            if ("select" === e.nodeName.toLowerCase()) {
                var s = $(e).val();
                return s && s.length > 0 }
            return this.checkable(e) ? this.getLength(t, e) > 0 : t.length > 0 }, email: function(t, e) {
            return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) }, url: function(t, e) {
            return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t) }, date: function(t, e) {
            return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString()) }, dateISO: function(t, e) {
            return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t) }, number: function(t, e) {
            return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t) }, digits: function(t, e) {
            return this.optional(e) || /^\d+$/.test(t) }, creditcard: function(t, e) {
            if (this.optional(e)) return "dependency-mismatch";
            if (/[^0-9 \-]+/.test(t)) return !1;
            var i, s, r = 0,
                n = 0,
                a = !1;
            if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
            for (i = t.length - 1; i >= 0; i--) s = t.charAt(i), n = parseInt(s, 10), a && (n *= 2) > 9 && (n -= 9), r += n, a = !a;
            return r % 10 == 0 }, minlength: function(t, e, i) {
            var s = $.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || s >= i }, maxlength: function(t, e, i) {
            var s = $.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || i >= s }, rangelength: function(t, e, i) {
            var s = $.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || s >= i[0] && s <= i[1] }, min: function(t, e, i) {
            return this.optional(e) || t >= i }, max: function(t, e, i) {
            return this.optional(e) || i >= t }, range: function(t, e, i) {
            return this.optional(e) || t >= i[0] && t <= i[1] }, equalTo: function(t, e, i) {
            var s = $(i);
            return this.settings.onfocusout && s.off(".validate-equalTo").on("blur.validate-equalTo", function() { $(e).valid() }), t === s.val() }, remote: function(t, e, i) {
            if (this.optional(e)) return "dependency-mismatch";
            var s, r, n = this.previousValue(e);
            return this.settings.messages[e.name] || (this.settings.messages[e.name] = {}), n.originalMessage = this.settings.messages[e.name].remote, this.settings.messages[e.name].remote = n.message, i = "string" == typeof i && { url: i } || i, n.old === t ? n.valid : (n.old = t, s = this, this.startRequest(e), r = {}, r[e.name] = t, $.ajax($.extend(!0, { mode: "abort", port: "validate" + e.name, dataType: "json", data: r, context: s.currentForm, success: function(i) {
                    var r, a, o, l = i === !0 || "true" === i;
                    s.settings.messages[e.name].remote = n.originalMessage, l ? (o = s.formSubmitted, s.prepareElement(e), s.formSubmitted = o, s.successList.push(e), delete s.invalid[e.name], s.showErrors()) : (r = {}, a = i || s.defaultMessage(e, "remote"), r[e.name] = n.message = $.isFunction(a) ? a(t) : a, s.invalid[e.name] = !0, s.showErrors(r)), n.valid = l, s.stopRequest(e, l) } }, i)), "pending") } } });
! function(n, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(n.ease = {}) }(this, function(n) { "use strict";

    function t(n, t) {
        return null == n || isNaN(n) ? t : +n }

    function u(n, u) { n = Math.max(1, t(n, 1)), u = t(u, .3) * A;
        var i = u * Math.asin(1 / n);
        return function(t) {
            return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / u) } }

    function i(n, u) { n = Math.max(1, t(n, 1)), u = t(u, .3) * A;
        var i = u * Math.asin(1 / n);
        return function(t) {
            return n * Math.pow(2, -10 * t) * Math.sin((t - i) / u) + 1 } }

    function o(n, u) { n = Math.max(1, t(n, 1)), u = 1.5 * t(u, .3) * A;
        var i = u * Math.asin(1 / n);
        return function(t) {
            return n * ((t = 2 * t - 1) < 0 ? Math.pow(2, 10 * t) * Math.sin((i - t) / u) : Math.pow(2, -10 * t) * Math.sin((t - i) / u) + 2) / 2 } }

    function r(n) {
        return n = t(n, 1.70158),
            function(t) {
                return t * t * ((n + 1) * t - n) } }

    function e(n) {
        return n = t(n, 1.70158),
            function(t) {
                return --t * t * ((n + 1) * t + n) + 1 } }

    function c(n) {
        return n = 1.525 * t(n, 1.70158),
            function(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2 } }

    function a(n) {
        return 1 - f(1 - n) }

    function f(n) {
        return B > n ? L * n * n : D > n ? L * (n -= C) * n + E : G > n ? L * (n -= F) * n + H : L * (n -= J) * n + K }

    function h(n) {
        return ((n *= 2) <= 1 ? 1 - f(1 - n) : f(n - 1) + 1) / 2 }

    function s(n) {
        return 1 - Math.sqrt(1 - n * n) }

    function M(n) {
        return Math.sqrt(1 - --n * n) }

    function p(n) {
        return ((n *= 2) <= 1 ? 1 - Math.sqrt(1 - n * n) : Math.sqrt(1 - (n -= 2) * n) + 1) / 2 }

    function l(n) {
        return Math.pow(2, 10 * n - 10) }

    function w(n) {
        return 1 - Math.pow(2, -10 * n) }

    function b(n) {
        return ((n *= 2) <= 1 ? Math.pow(2, 10 * n - 10) : 2 - Math.pow(2, 10 - 10 * n)) / 2 }

    function d(n) {
        return 1 - Math.cos(n * R) }

    function y(n) {
        return Math.sin(n * R) }

    function x(n) {
        return (1 - Math.cos(Q * n)) / 2 }

    function q(n) {
        return n * n * n }

    function k(n) {
        return --n * n * n + 1 }

    function m(n) {
        return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2 }

    function v(n) {
        return n * n }

    function P(n) {
        return n * (2 - n) }

    function O(n) {
        return ((n *= 2) <= 1 ? n * n : --n * (2 - n) + 1) / 2 }

    function I(n) {
        return +n }

    function N(n) {
        return n = t(n, 3),
            function(t) {
                return Math.pow(t, n) } }

    function g(n) {
        return n = t(n, 3),
            function(t) {
                return 1 - Math.pow(1 - t, n) } }

    function j(n) {
        return n = t(n, 3),
            function(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2 } }

    function z(n, t, u) {
        var i = (n += "").indexOf("-");
        return 0 > i && (n += "-in"), arguments.length > 1 && T.hasOwnProperty(n) ? T[n](t, u) : S.hasOwnProperty(n) ? S[n] : I }
    var A = 1 / (2 * Math.PI),
        B = 4 / 11,
        C = 6 / 11,
        D = 8 / 11,
        E = .75,
        F = 9 / 11,
        G = 10 / 11,
        H = .9375,
        J = 21 / 22,
        K = 63 / 64,
        L = 1 / B / B,
        Q = Math.PI,
        R = Q / 2,
        S = { "linear-in": I, "linear-out": I, "linear-in-out": I, "quad-in": v, "quad-out": P, "quad-in-out": O, "cubic-in": q, "cubic-out": k, "cubic-in-out": m, "poly-in": q, "poly-out": k, "poly-in-out": m, "sin-in": d, "sin-out": y, "sin-in-out": x, "exp-in": l, "exp-out": w, "exp-in-out": b, "circle-in": s, "circle-out": M, "circle-in-out": p, "bounce-in": a, "bounce-out": f, "bounce-in-out": h, "back-in": r(), "back-out": e(), "back-in-out": c(), "elastic-in": u(), "elastic-out": i(), "elastic-in-out": o() },
        T = { "poly-in": N, "poly-out": g, "poly-in-out": j, "back-in": r, "back-out": e, "back-in-out": c, "elastic-in": u, "elastic-out": i, "elastic-in-out": o };
    n.ease = z });
! function() {
    function e(e) { e.draw("80% - 240", "80%", .3, { delay: .1, callback: function() { n(e) } }) }

    function n(e) { e.draw("100% - 545", "100% - 305", .6, { easing: ease.ease("elastic-out", 1, .3) }) }

    function t(e) { e.draw(f - 60, r + 60, .1, { callback: function() { a(e) } }) }

    function a(e) { e.draw(f + 120, r - 120, .3, { easing: ease.ease("bounce-out", 1, .3) }) }

    function c(e) { e.draw("90% - 240", "90%", .1, { easing: ease.ease("elastic-in", 1, .3), callback: function() { i(e) } }) }

    function i(e) { e.draw("20% - 240", "20%", .3, { callback: function() { u(e) } }) }

    function u(e) { e.draw(l, d, .7, { easing: ease.ease("elastic-out", 1, .3) }) }

    function o(e) { e.draw(f, r, .7, { delay: .1, easing: ease.ease("elastic-out", 2, .4) }) }

    function m(e) { e.className = "menu-icon-wrapper scaled" }

    function s(e) { e.className = "menu-icon-wrapper" }
    var l = 80,
        d = 320,
        f = 80,
        r = 320,
        g = document.getElementById("pathD"),
        w = document.getElementById("pathE"),
        y = document.getElementById("pathF"),
        p = new Segment(g, l, d),
        b = new Segment(w, f, r),
        E = new Segment(y, l, d),
        B = document.getElementById("menu-icon-wrapper2"),
        I = document.getElementById("menu-icon-trigger2"),
        k = !0,
        v = document.getElementById("dummy2");
    B.style.visibility = "visible", I.onclick = function() { m(B), k ? (e(p), t(b), e(E), v.className = "dummy dummy--active") : (c(p), o(b), c(E), v.className = "dummy"), k = !k, setTimeout(function() { s(B) }, 450) } }();
$(document).ready(function() { $(".bxslider").bxSlider({ mode: "fade", useCSS: !0, infiniteLoop: !0, auto: !0, controls: !1, touchEnabled: !1, pager: !1 }), $(".contact-form").validate({ rules: { fullname: "required", phone: "required", email: { required: !0, email: !0 }, subject: "required", message: "required" }, messages: { fullname: "Please enter full name!", phone: "Please enter phone!", email: { required: "Please enter email!", email: "Please enter a valid email address!" }, subject: "Please enter subject!", message: "Please enter message!" } }) }), $(window).scroll(function() { $(window).scrollTop() > 70 ? $(".bg-nav").addClass("nav-hovered") : $(".bg-nav").removeClass("nav-hovered") }), $("#menu-icon-wrapper2").click(function() { $(".navbar-links").hasClass("navbar-links-opened") ? $(".navbar-links").removeClass("navbar-links-opened") : $(".navbar-links").addClass("navbar-links-opened") });

