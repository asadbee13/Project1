var htUrl = "www.hubtraffic.com",
    htTrack = htTrack || function() {
        var t, e, n, r, c = !1,
            i = !1,
            o = function(t) {
                return t.replace("http://", "").replace("https://", "").split(/[\/?#]/)[0]
            },
            a = function(t) {
                var e = RegExp(t + "=.[^;]*");
                return matched = document.cookie.match(e), !!matched && matched[0].split("=")[1]
            },
            u = function() {
                if (document.getElementById("htScript").getAttribute("src").search("//hubxt.") > -1 || document.getElementById("htScript").getAttribute("src").search("//ht.") > -1) {
                    var n = a("ARSC2_" + e),
                        r = a("APEC2" + e);
                    (0 != n && "" != n || "" != r) && h()
                } else s(), window.onmessage = function(e) {
                    e && e.origin && !(e.origin.indexOf(t) >= 0) || c || (c = !0, h())
                }
            },
            d = function() {
                var n = document.createElement("iframe"),
                    r = ("https:" == document.location.protocol ? "https://" : "http://") + t + "/htcheck.html?site_id=" + e;
                n.setAttribute("id", "htcheck"), n.setAttribute("src", r), n.setAttribute("frameborder", "0"), n.width = 0, n.height = 0, document.body.appendChild(n)
            },
            s = function() {
                document.body ? d() : window.addEventListener("load", d)
            },
            h = function() {
                ! function() {
                    c = !0;
                    var n = document.createElement("script"),
                        r = null,
                        i = null;
                    switch (e) {
                        case 3:
                            i = "bs";
                            break;
                        case 2:
                            i = "ss";
                            break;
                        case 4:
                        case 5:
                            i = "sid"
                    }
                    var o = ("; " + document.cookie).split("; " + i + "=");
                    2 == o.length && (r = o.pop().split(";").shift()), n.type = "text/javascript", n.async = !0;
                    var a = (new Date).getTime();
                    n.src = ("https:" == document.location.protocol ? "https://" : "http://") + t + "/htjs.php?i=" + e + "&r=" + encodeURIComponent(document.referrer) + "&cache=" + a + "&tubecookie=" + r;
                    var u = document.getElementsByTagName("script")[0];
                    u.parentNode.insertBefore(n, u)
                }()
            },
            f = function() {
                return r = o(window.location.href), "" != (n = o(document.referrer)) && n != r && 0 == (e = (t = document.referrer).indexOf("://") + 3, t.indexOf("google.") == e || t.indexOf("www.google.") == e);
                var t, e
            };
        return {
            track: function() {
                ! function() {
                    var t = document.getElementById("htScript").getAttribute("src");
                    if (!t) return -1;
                    var n = t.substring(t.indexOf("?") + 1, t.length).split("&");
                    e = -1;
                    for (var r = 0; r < n.length; r++) {
                        var c = n[r].substring(0, n[r].indexOf("=")),
                            i = n[r].substring(n[r].indexOf("=") + 1, n[r].length);
                        if ("site_id" == c) {
                            e = parseInt(i);
                            break
                        }
                    }
                }(), e > 0 && function() {
                    var e, n;
                    n = (e = document.getElementById("htScript").getAttribute("src").match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)) && e[1], 0 == (t = n).search("hubxt.") && (t = t.replace("hubxt.", "ht.")), "undefined" != typeof defaultGA && defaultGA(), f() ? h() : u()
                }()
            },
            ptrack: function() {
                "undefined" != typeof ptv1 && 0 == i && (i = !0, ptv1())
            }
        }
    }();
setTimeout(function() {
    htTrack.track()
}, 1);