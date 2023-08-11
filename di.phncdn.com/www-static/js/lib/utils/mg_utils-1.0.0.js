var MG_Utils = {
    browser: {
        hasTouchSupport: "createTouch" in document,
        version: (navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        androidversion: function() {
            var e = navigator.userAgent.match(/\s*Android\s*([0-9]+)\.?([0-9]+)?\.?([0-9]+)?\s*/);
            return e && e[1] && e[2] ? parseFloat(e[1] + "." + e[2]) : !(!e || !e[1]) && parseFloat(e[1])
        },
        isWebkit: -1 < navigator.userAgent.indexOf("AppleWebKit/"),
        isMobileSafari: /(ipad|iphone|ipod|android).*apple.*mobile.*safari/.test(navigator.userAgent.toLowerCase()),
        isAppleChrome: /crios/.test(navigator.userAgent.toLowerCase()),
        isAppleMobileDevice: /(ipad|iphone|ipod)/.test(navigator.userAgent.toLowerCase()),
        isAndroidMobileDevice: /android/.test(navigator.userAgent.toLowerCase()),
        isTansoDl: navigator.userAgent.toLowerCase().match(/TansoDL/i),
        isWindowsPhone: function() {
            return !!(navigator.userAgent.toLowerCase().match(/Windows CE|IEMobile|Windows Phone OS/i) || "XDomainRequest" in window)
        },
        highPixelDensityDisplay: 2 <= window.devicePixelRatio,
        iPhone4: 2 <= window.devicePixelRatio && this.isMobileSafari,
        currentOrientation: null,
        isBlackBerry: function() {
            return !!navigator.userAgent.match(/BlackBerry/i)
        },
        isBB10: function() {
            return !!navigator.userAgent.match(/BB10/i)
        },
        iOSversion: function() {
            var e = window.navigator.userAgent,
                t = e.indexOf("OS ");
            return (-1 < e.indexOf("iPhone") || -1 < e.indexOf("iPad")) && -1 < t ? window.Number(e.substr(t + 3, 3).replace("_", ".")) : 0
        }
    },
    setCookie: function(e, t, n, a) {
        if ("undefined" != typeof CookieHelper && !CookieHelper.canAdd(e)) return !1;
        var o = new Date,
            r = window.location.hostname;
        o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3), a = e + "=" + t + "; " + ("expires=" + o.toUTCString()), void 0 !== n && (a += "; path=" + n), 0 === r.indexOf("www.") ? r = r.replace("www.", ".") : 0 !== r.indexOf(".") && (r = "." + r), a += ";domain=" + r, "https:" === location.protocol && (a += ";secure"), document.cookie = a
    },
    getCookie: function(e, t) {
        e = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
        return e ? t ? e[2] : decodeURI(e[2]) : null
    },
    addClass: function(e, t) {
        var n = e && "object" == typeof e.className ? e.className.baseVal : e.className;
        this.hasClass(e, t) || ("object" == typeof e.className ? e.className.baseVal = n += n ? " " + t : t : e.className = n += n ? " " + t : t)
    },
    addClassMultiple: function(e, t) {
        for (var n = 0, a = e.length; n < a; n++) this.hasClass(e[n], t) || (e[n].className ? e[n].className += " " + t : e[n].className += t)
    },
    addEventHandler: function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
    },
    extendSimple: function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    },
    extendDefaults: function(e, t, n) {
        var a, o = Object.prototype.hasOwnProperty;
        for (a in t) !o.call(t, a) || "constructor" === a && e === window || (void 0 === t[a] ? delete e[a] : n && void 0 !== e[a] || (e[a] = t[a]));
        return e
    },
    hasClass: function(e, t) {
        e = e && "object" == typeof e.className ? e.className.baseVal : e.className;
        return e && new RegExp("(\\s|^)" + t + "(\\s|$)").test(e)
    },
    removeClass: function(e, t) {
        var n = " " + (e && "object" == typeof e.className ? e.className.baseVal : e.className).replace(/[\t\r\n]/g, " ") + " ";
        if (this.hasClass(e, t)) {
            for (; 0 <= n.indexOf(" " + t + " ");) n = n.replace(" " + t + " ", " ");
            "object" == typeof e.className ? e.className.baseVal = n.replace(/^\s+|\s+$/g, "") : e.className = n.replace(/^\s+|\s+$/g, "")
        }
    },
    removeClassMultiple: function(e, t) {
        for (var n = 0, a = e.length; n < a; n++) {
            var o = " " + e[n].className.replace(/[\t\r\n]/g, " ") + " ";
            if (this.hasClass(e[n], t)) {
                for (; 0 <= o.indexOf(" " + t + " ");) o = o.replace(" " + t + " ", " ");
                e[n].className = o.replace(/^\s+|\s+$/g, "")
            }
        }
    },
    removeEventHandler: function(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
    },
    children: function(e) {
        for (var t = e.childNodes, n = [], a = t.length; a--;) 1 == t[a].nodeType && n.unshift(t[a]);
        return n
    },
    triggerEvent: function(e, t) {
        var n;
        document.createEvent ? ((n = document.createEvent("HTMLEvents")).initEvent(t, !0, !1), e.dispatchEvent(n)) : e.fireEvent("on" + t)
    },
    ajaxGet: function(e) {
        var t, n = "";
        for (t in e.data) "" != n && (n += "&"), n += t + "=" + encodeURIComponent(e.data[t]);
        var a = new XMLHttpRequest;
        a.open("GET", e.url + "?" + n, !0), a.onreadystatechange = function() {
            4 === this.readyState && (200 <= this.status && this.status < 400 ? e.success && "function" == typeof e.success && e.success(JSON.parse(this.responseText)) : console.error("Ajax error occured."))
        }, a.send()
    },
    ajaxGetData: function(e) {
        var t = "";
        if (void 0 !== e.data)
            for (var n in e.data) "" != t && (t += "&"), t += n + "=" + encodeURIComponent(e.data[n]);
        var a = e.url,
            o = new XMLHttpRequest;
        o.open("GET", a, !0), o.onreadystatechange = function() {
            4 === this.readyState && (200 <= this.status && this.status < 400 ? e.success && "function" == typeof e.success && e.success(this.responseText) : console.error("Ajax error occured."))
        }, o.send()
    },
    appendString: function(e, t) {
        var n = document.createElement("div");
        for (n.innerHTML = t; n.firstChild;) e.appendChild(n.firstChild)
    },
    nextElementSibling: function(e) {
        for (;
            (e = e.nextSibling) && 1 !== e.nodeType;);
        return e
    },
    previousElementSibling: function(e) {
        for (;
            (e = e.previousSibling) && 1 !== e.nodeType;);
        return e
    },
    closest: function(e, t) {
        var n;
        for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;);
                return -1 < n
            }); null !== e;) {
            if (null !== (n = e.parentElement) && n instanceof Element && n.matches(t)) return n;
            e = n
        }
        return null
    },
    setText: function(e, t) {
        e.textContent ? e.textContent = t : e.innerText = t
    },
    setData: function(e, t, n) {
        e.dataset ? (t = t.replace(/[-_]([a-z])/g, function(e) {
            return e[1].toUpperCase()
        }), e.dataset[t] = n) : e.setAttribute("data-" + t, n)
    },
    getData: function(e, t) {
        return e.dataset ? (t = t.replace(/[-_]([a-z])/g, function(e) {
            return e[1].toUpperCase()
        }), e.dataset[t]) : e.getAttribute("data-" + t)
    },
    domReady: function(e) {
        function n() {
            document.addEventListener ? (document.removeEventListener("DOMContentLoaded", t), window.removeEventListener("load", t)) : (document.detachEvent("onreadystatechange", t), window.detachEvent("onload", t))
        }
        var a = !1,
            t = function() {
                a || !document.addEventListener && "load" !== event.type && "complete" !== document.readyState || (a = !0, n(), e())
            };
        if ("complete" === document.readyState) e();
        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", t), window.addEventListener("load", t);
        else {
            document.attachEvent("onreadystatechange", t), window.attachEvent("onload", t);
            var o = !1;
            try {
                o = null == window.frameElement && document.documentElement
            } catch (e) {}
            o && o.doScroll && ! function t() {
                if (!a) {
                    try {
                        o.doScroll("left")
                    } catch (e) {
                        return setTimeout(t, 50)
                    }
                    a = !0, n(), e()
                }
            }()
        }
    },
    lastChild: function(e) {
        if (!e.children.length) return null;
        if (e.lastElementChild) return e.lastElementChild;
        for (var t = e.children.length - 1; 0 <= t; --t) {
            var n = e.children[t];
            if (1 === n.nodeType) return n
        }
    },
    offset: function(e) {
        var e = e.getBoundingClientRect(),
            t = document.body,
            n = document.documentElement,
            a = window.pageYOffset || n.scrollTop || t.scrollTop,
            o = window.pageXOffset || n.scrollLeft || t.scrollLeft,
            r = n.clientTop || t.clientTop || 0,
            n = n.clientLeft || t.clientLeft || 0,
            t = e.top + a - r,
            a = e.left + o - n;
        return {
            left: Math.round(a),
            top: Math.round(t)
        }
    },
    empty: function(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    },
    preventDefault: function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    },
    toggleClass: function(e, t) {
        if (e.classList) e.classList.toggle(t);
        else {
            for (var n = e.className.split(" "), a = -1, o = n.length; o--;) n[o] === t && (a = o);
            0 <= a ? n.splice(a, 1) : n.push(t), e.className = n.join(" ")
        }
    },
    debounce: function(e, t, n) {
        function a() {
            o = null
        }
        var o = null;
        return function() {
            n && n.apply(this, arguments), o || (e.apply(this, arguments), o = setTimeout(a, t))
        }
    },
    areCookiesEnabled: function() {
        return !0
    },
    isLocalStorageEnabled: function() {
        if ("undefined" == typeof localStorage) return !1;
        try {
            localStorage.removeItem("LsAccessSuccess"), localStorage.setItem("LsAccessSuccess", "localStorageEnabledOk"), localStorage.removeItem("LsAccessSuccess")
        } catch (e) {
            return !1
        }
        var e;
        return !!MG_Utils.areCookiesEnabled() && (-1 == document.cookie.indexOf("local_storage") && ((e = new Date).setTime(e.getTime() + 31536e6), e = " expires = " + e.toGMTString() + ";", document.cookie = "local_storage = 1;" + e + " path=/;"), !0)
    },
    storage: {
        hasLocalStorage: function() {
            try {
                localStorage.enableStorage = 1, localStorage.removeItem("enableStorage")
            } catch (e) {
                return !1
            }
            return !0
        }(),
        defaultExpiry: 1,
        saveWithExpiry: function(e, t, n) {
            this.hasLocalStorage && ((n = t.expires && !n ? t.expires : n) || (n = new Date).setDate(n.getDate() + this.defaultExpiry), n = n instanceof Date ? n.getTime() : parseInt(n), this.saveItem(e, {
                val: t,
                expires: n
            }))
        },
        getItem: function(t) {
            if (this.hasLocalStorage) {
                var e;
                try {
                    e = JSON.parse(localStorage[t])
                } catch (e) {
                    return localStorage[t]
                }
                return parseInt(e.expires) < (new Date).getTime() ? (this.deleteItem(t), null) : e.val || e
            }
        },
        saveItem: function(e, t) {
            this.hasLocalStorage && (t = JSON.stringify("object" == typeof t ? t : {
                val: t
            }), localStorage.setItem(e, t))
        },
        deleteItem: function(e) {
            this.hasLocalStorage && localStorage.removeItem(e)
        },
        saveExpiry: function(e, t, n) {
            return "undefined" != typeof Storage && (n = {
                value: JSON.stringify(t),
                timestamp: (new Date).getTime() + n
            }, localStorage.setItem(e, JSON.stringify(n)), t)
        },
        getExpiry: function(e) {
            return "undefined" != typeof Storage && !!(e = JSON.parse(localStorage.getItem(e))) && (new Date).getTime() < e.timestamp && JSON.parse(e.value)
        }
    },
    ajaxCall: function(n) {
        if (null == n || "" == n.url || "" == n.data || "" == n.type) return console.log("ajaxPost: Parameters can't be empty"), !1;
        a = new(1 == n.crossDomain && "undefined" != typeof XDomainRequest ? XDomainRequest : XMLHttpRequest);
        var a, e, o = new CustomEvent("ajaxSuccess"),
            r = new CustomEvent("ajaxFail"),
            t = n.type ? n.type.toUpperCase() : "GET",
            s = "",
            c = n.contentType || "application/x-www-form-urlencoded; charset=UTF-8";
        for (e in n.data) "" != s && (s += "&"), s += e + "=" + encodeURIComponent(n.data[e]);
        if ("GET" === t && (0 == n.cache ? n.url += "&timestamp=" + Date.now() : n.url += s ? (-1 !== n.url.indexOf("?") ? "&" : "?") + s : ""), a.open(t, n.url, !0), "" != n.dataType && "string" == typeof n.dataType ? a.responseType = n.dataType : a.responseType = "json", a instanceof XMLHttpRequest && void 0 === n.requestType && (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Content-Type", c)), "" != n.requestType && "string" == typeof n.requestType && (s = JSON.stringify(n.data), a.setRequestHeader("Content-Type", n.requestType)), n.headers && (Object.keys || (Object.keys = function(e) {
                var t, n = [];
                for (t in e) e.hasOwnProperty(t) && n.push(t);
                return n
            }), Object.keys(n.headers).forEach(function(e) {
                a.setRequestHeader(e, n.headers[e])
            })), "false" == n.cache && "POST" == t && a.setRequestHeader("cache-control", "no-cache"), n.xhrFields)
            for (i in n.xhrFields) a[i] = n.xhrFields[i];
        return "function" == typeof n.beforeSend && !1 === n.beforeSend() ? a.abort() : (a.onreadystatechange = function() {
            var t = {};
            if (4 == a.readyState)
                if (200 <= a.status && a.status < 400) {
                    try {
                        t = JSON.parse(a.responseText)
                    } catch (e) {
                        t = a.response
                    }
                    "function" == typeof n.success && (a instanceof XMLHttpRequest ? n.success(t) : a.onload(function() {
                        n.success(t)
                    })), a.dispatchEvent(o)
                } else a.dispatchEvent(r), t = {
                    error: "Error getting data from AJAX call"
                };
            if (null != t && void 0 !== t.error) return console.log("ajaxPost: " + t.error), !1
        }, a.send(s), a.done = function(e) {
            "function" == typeof e && (a instanceof XMLHttpRequest ? MG_Utils.addEventHandler(a, "ajaxSuccess", e) : a.onload = e())
        }, a.fail = function(e) {
            "function" == typeof e && (a instanceof XMLHttpRequest ? MG_Utils.addEventHandler(a, "ajaxFail", e) : a.onerror = e())
        }, a.always = function(e) {
            "function" == typeof e && (a instanceof XMLHttpRequest ? (MG_Utils.addEventHandler(a, "ajaxSuccess", e), MG_Utils.addEventHandler(a, "ajaxFail", e)) : (a.onload = e(), a.onerror = e()))
        }, a)
    },
    getEventTarget: function(e) {
        return (e = e || window.event).target || e.srcElement
    }
};
! function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
}();