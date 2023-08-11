/*! head.load - v1.0.3 */
(function(H, t) {
    var l = H.document,
        F = [],
        a = {},
        b = {},
        d = "async" in l.createElement("script") || "MozAppearance" in l.documentElement.style || H.opera,
        E, f = H.head_conf && H.head_conf.head || "head",
        j = H[f] = (H[f] || function() {
            j.ready.apply(null, arguments)
        }),
        x = 1,
        J = 2,
        z = 3,
        r = 4;

    function L() {}

    function I(e, P) {
        if (!e) {
            return
        }
        if (typeof e === "object") {
            e = [].slice.call(e)
        }
        for (var O = 0, N = e.length; O < N; O++) {
            P.call(e, e[O], O)
        }
    }

    function D(e, N) {
        var O = Object.prototype.toString.call(N).slice(8, -1);
        return N !== t && N !== null && O === e
    }

    function u(e) {
        return D("Function", e)
    }

    function C(e) {
        return D("Array", e)
    }

    function m(O) {
        var e = O.split("/"),
            N = e[e.length - 1],
            P = N.indexOf("?");
        return P !== -1 ? N.substring(0, P) : N
    }

    function q(e) {
        e = e || L;
        if (e._done) {
            return
        }
        e();
        e._done = 1
    }

    function y(R, O, e, Q) {
        var N = (typeof R === "object") ? R : {
            test: R,
            success: !!O ? C(O) ? O : [O] : false,
            failure: !!e ? C(e) ? e : [e] : false,
            callback: Q || L
        };
        var P = !!N.test;
        if (P && !!N.success) {
            N.success.push(N.callback);
            j.load.apply(null, N.success)
        } else {
            if (!P && !!N.failure) {
                N.failure.push(N.callback);
                j.load.apply(null, N.failure)
            } else {
                Q()
            }
        }
        return j
    }

    function g(P) {
        var N = {};
        if (typeof P === "object") {
            for (var e in P) {
                if (!!P[e]) {
                    N = {
                        name: e,
                        url: P[e]
                    }
                }
            }
        } else {
            N = {
                name: m(P),
                url: P
            }
        }
        var O = b[N.name];
        if (O && O.url === N.url) {
            return O
        }
        b[N.name] = N;
        return N
    }

    function i(e) {
        e = e || b;
        for (var N in e) {
            if (e.hasOwnProperty(N) && e[N].state !== r) {
                return false
            }
        }
        return true
    }

    function c(e) {
        e.state = J;
        I(e.onpreload, function(N) {
            N.call()
        })
    }

    function h(e, N) {
        if (e.state === t) {
            e.state = x;
            e.onpreload = [];
            B({
                url: e.url,
                type: "cache"
            }, function() {
                c(e)
            })
        }
    }

    function o() {
        var e = arguments,
            P = e[e.length - 1],
            O = [].slice.call(e, 1),
            N = O[0];
        if (!u(P)) {
            P = null
        }
        if (C(e[0])) {
            e[0].push(P);
            j.load.apply(null, e[0]);
            return j
        }
        if (!!N) {
            I(O, function(Q) {
                if (!u(Q) && !!Q) {
                    h(g(Q))
                }
            });
            G(g(e[0]), u(N) ? N : function() {
                j.load.apply(null, O)
            })
        } else {
            G(g(e[0]))
        }
        return j
    }

    function w() {
        var N = arguments,
            O = N[N.length - 1],
            e = {};
        if (!u(O)) {
            O = null
        }
        if (C(N[0])) {
            N[0].push(O);
            j.load.apply(null, N[0]);
            return j
        }
        I(N, function(Q, P) {
            if (Q !== O) {
                Q = g(Q);
                e[Q.name] = Q
            }
        });
        I(N, function(Q, P) {
            if (Q !== O) {
                Q = g(Q);
                G(Q, function() {
                    if (i(e)) {
                        q(O)
                    }
                })
            }
        });
        return j
    }

    function G(e, N) {
        N = N || L;
        if (e.state === r) {
            N();
            return
        }
        if (e.state === z) {
            j.ready(e.name, N);
            return
        }
        if (e.state === x) {
            e.onpreload.push(function() {
                G(e, N)
            });
            return
        }
        e.state = z;
        B(e, function() {
            e.state = r;
            N();
            I(a[e.name], function(O) {
                q(O)
            });
            if (E && i()) {
                I(a.ALL, function(O) {
                    q(O)
                })
            }
        })
    }

    function A(N) {
        N = N || "";
        var e = N.split("?")[0].split(".");
        return e[e.length - 1].toLowerCase()
    }

    function B(P, T) {
        T = T || L;

        function e(U) {
            U = U || H.event;
            Q.onload = Q.onreadystatechange = Q.onerror = null;
            T()
        }

        function R(U) {
            U = U || H.event;
            if (U.type === "load" || (/loaded|complete/.test(Q.readyState) && (!l.documentMode || l.documentMode < 9))) {
                H.clearTimeout(P.errorTimeout);
                H.clearTimeout(P.cssTimeout);
                Q.onload = Q.onreadystatechange = Q.onerror = null;
                T()
            }
        }

        function S() {
            if (P.state !== r && P.cssRetries <= 20) {
                for (var V = 0, U = l.styleSheets.length; V < U; V++) {
                    if (l.styleSheets[V].href === Q.href) {
                        R({
                            type: "load"
                        });
                        return
                    }
                }
                P.cssRetries++;
                P.cssTimeout = H.setTimeout(S, 250)
            }
        }
        var Q;
        var O = A(P.url);
        if (O === "css") {
            Q = l.createElement("link");
            Q.type = "text/" + (P.type || "css");
            Q.rel = "stylesheet";
            Q.href = P.url;
            P.cssRetries = 0;
            P.cssTimeout = H.setTimeout(S, 500)
        } else {
            Q = l.createElement("script");
            Q.type = "text/" + (P.type || "javascript");
            Q.src = P.url
        }
        Q.onload = Q.onreadystatechange = R;
        Q.onerror = e;
        Q.async = false;
        Q.defer = false;
        P.errorTimeout = H.setTimeout(function() {
            e({
                type: "timeout"
            })
        }, 7000);
        var N = l.head || l.getElementsByTagName("head")[0];
        N.insertBefore(Q, N.lastChild)
    }

    function K() {
        var N = l.getElementsByTagName("script");
        for (var O = 0, e = N.length; O < e; O++) {
            var P = N[O].getAttribute("data-headjs-load");
            if (!!P) {
                j.load(P);
                return
            }
        }
    }

    function k(O, Q) {
        if (O === l) {
            if (E) {
                q(Q)
            } else {
                F.push(Q)
            }
            return j
        }
        if (u(O)) {
            Q = O;
            O = "ALL"
        }
        if (C(O)) {
            var N = {};
            I(O, function(R) {
                N[R] = b[R];
                j.ready(R, function() {
                    if (i(N)) {
                        q(Q)
                    }
                })
            });
            return j
        }
        if (typeof O !== "string" || !u(Q)) {
            return j
        }
        var P = b[O];
        if (P && P.state === r || O === "ALL" && i() && E) {
            q(Q);
            return j
        }
        var e = a[O];
        if (!e) {
            e = a[O] = [Q]
        } else {
            e.push(Q)
        }
        return j
    }

    function s() {
        if (!l.body) {
            H.clearTimeout(j.readyTimeout);
            j.readyTimeout = H.setTimeout(s, 50);
            return
        }
        if (!E) {
            E = true;
            K();
            I(F, function(e) {
                q(e)
            })
        }
    }

    function v() {
        if (l.addEventListener) {
            l.removeEventListener("DOMContentLoaded", v, false);
            s()
        } else {
            if (l.readyState === "complete") {
                l.detachEvent("onreadystatechange", v);
                s()
            }
        }
    }
    if (l.readyState === "complete") {
        s()
    } else {
        if (l.addEventListener) {
            l.addEventListener("DOMContentLoaded", v, false);
            H.addEventListener("load", s, false)
        } else {
            l.attachEvent("onreadystatechange", v);
            H.attachEvent("onload", s);
            var n = false;
            try {
                n = !H.frameElement && l.documentElement
            } catch (M) {}
            if (n && n.doScroll) {
                (function p() {
                    if (!E) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            H.clearTimeout(j.readyTimeout);
                            j.readyTimeout = H.setTimeout(p, 50);
                            return
                        }
                        s()
                    }
                }())
            }
        }
    }
    j.load = j.js = d ? w : o;
    j.test = y;
    j.ready = k;
    j.ready(l, function() {
        if (i()) {
            I(a.ALL, function(e) {
                q(e)
            })
        }
        if (j.feature) {
            j.feature("domloaded", true)
        }
    })
}(window));