function VortexSimple(e, b) {
    var c = this;
    c.appID = e;
    c.eventName = b;
    c.extendedEnvData = false;
    c.etaHubUrl = "https://etahub.com/events";
    var a = [];
    c.set = function(f, g) {
        a[f] = g
    };
    c.del = function(f) {
        delete(a[f])
    };
    c.send = function(f, h) {
        if (typeof XMLHttpRequest != "undefined") {
            var g = new XMLHttpRequest();
            g.onreadystatechange = function() {
                if (g.readyState == 4) {
                    var i;
                    if (!g.responseType || g.responseType === "text") {
                        i = g.responseText
                    } else {
                        if (g.responseType === "document") {
                            i = g.responseXML
                        } else {
                            i = g.response
                        }
                    }
                    c.response = JSON.parse(i);
                    if (typeof h !== "undefined") {
                        h(i)
                    }
                }
            };
            g.open("GET", f, true);
            g.send(null)
        }
    };
    c.sendData = function(f) {
        c.send(c.generateUrl(), f)
    };
    c.generateUrl = function() {
        var i = [];
        var g = c.detectEnv();
        for (var f in g) {
            if (g.hasOwnProperty(f)) {
                var j = encodeURIComponent("_" + c.determineTypePrefix(g[f]) + f);
                i[j] = encodeURIComponent(g[f])
            }
        }
        for (var f in a) {
            if (a.hasOwnProperty(f)) {
                var j = encodeURIComponent(c.determineTypePrefix(a[f]) + f);
                i[j] = encodeURIComponent(a[f])
            }
        }
        var h = "?app_id=" + encodeURIComponent(c.appID) + "&eventName=" + encodeURIComponent(c.eventName) + "&";
        for (var f in i) {
            if (i.hasOwnProperty(f)) {
                h += f + "=" + i[f] + "&"
            }
        }
        return c.etaHubUrl + h
    };

    function d() {}
    c.determineTypePrefix = function(f) {
        var g = typeof(f);
        var h = "";
        switch (g) {
            case "string":
                h = "s";
                break;
            case "number":
                h = "n";
                break;
            case "boolean":
                h = "b";
                break;
            default:
                throw new d();
                break
        }
        return h
    };
    c.detectEnv = function() {
        var s = "",
            y, k, h, o, g, q, A;
        try {
            var z = "-";
            if (screen.width) {
                width = (screen.width) ? screen.width : "";
                height = (screen.height) ? screen.height : "";
                s += "" + width + " x " + height
            }
            var w = navigator.appVersion;
            var x = navigator.userAgent;
            y = navigator.appName;
            k = "" + parseFloat(navigator.appVersion);
            var p = parseInt(navigator.appVersion, 10);
            var t, f, i;
            if ((f = x.indexOf("Opera")) != -1) {
                y = "Opera";
                k = x.substring(f + 6);
                if ((f = x.indexOf("Version")) != -1) {
                    k = x.substring(f + 8)
                }
            } else {
                if ((f = x.indexOf("OPR")) != -1) {
                    y = "Opera";
                    k = x.substring(f + 4);
                    if ((f = x.indexOf("Version")) != -1) {
                        k = x.substring(f + 8)
                    }
                } else {
                    if ((f = x.indexOf("MSIE")) != -1) {
                        y = "Microsoft Internet Explorer";
                        k = x.substring(f + 5)
                    } else {
                        if ((f = x.indexOf("Chrome")) != -1) {
                            y = "Chrome";
                            k = x.substring(f + 7)
                        } else {
                            if ((f = x.indexOf("Safari")) != -1) {
                                y = "Safari";
                                k = x.substring(f + 7);
                                if ((f = x.indexOf("Version")) != -1) {
                                    k = x.substring(f + 8)
                                }
                            } else {
                                if ((f = x.indexOf("Firefox")) != -1) {
                                    y = "Firefox";
                                    k = x.substring(f + 8)
                                } else {
                                    if (x.indexOf("Trident/") != -1) {
                                        y = "Microsoft Internet Explorer";
                                        k = x.substring(x.indexOf("rv:") + 3)
                                    } else {
                                        if ((t = x.lastIndexOf(" ") + 1) < (f = x.lastIndexOf("/"))) {
                                            y = x.substring(t, f);
                                            k = x.substring(f + 1);
                                            if (y.toLowerCase() == y.toUpperCase()) {
                                                y = navigator.appName
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if ((i = k.indexOf(";")) != -1) {
                k = k.substring(0, i)
            }
            if ((i = k.indexOf(" ")) != -1) {
                k = k.substring(0, i)
            }
            if ((i = k.indexOf(")")) != -1) {
                k = k.substring(0, i)
            }
            p = parseInt("" + k, 10);
            if (isNaN(p)) {
                k = "" + parseFloat(navigator.appVersion);
                p = parseInt(navigator.appVersion, 10)
            }
            h = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(w);
            q = (navigator.cookieEnabled) ? true : false;
            if (typeof navigator.cookieEnabled == "undefined" && !q) {
                document.cookie = "testcookie";
                q = (document.cookie.indexOf("testcookie") != -1) ? true : false
            }
            o = z;
            var u = [{
                s: "Windows 3.11",
                r: /Win16/
            }, {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {
                s: "Windows CE",
                r: /Windows CE/
            }, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            }, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: "Windows Phone",
                r: /(Windows Phone)/
            }, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: "Windows ME",
                r: /Windows ME/
            }, {
                s: "Android",
                r: /Android/
            }, {
                s: "Open BSD",
                r: /OpenBSD/
            }, {
                s: "Sun OS",
                r: /SunOS/
            }, {
                s: "Linux",
                r: /(Linux|X11)/
            }, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {
                s: "Mac OS X",
                r: /Mac OS X/
            }, {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: "QNX",
                r: /QNX/
            }, {
                s: "UNIX",
                r: /UNIX/
            }, {
                s: "BeOS",
                r: /BeOS/
            }, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
            for (var r in u) {
                var m = u[r];
                if (m.r.test(x)) {
                    o = m.s;
                    break
                }
            }
            g = z;
            if (/Windows Phone/.test(o)) {
                g = /Windows Phone (.*?);/.exec(x)[1]
            } else {
                if (/Windows/.test(o)) {
                    g = /Windows (.*)/.exec(o)[1]
                }
            }
            switch (o) {
                case "Mac OS X":
                    g = /Mac OS X (10[\.\_\d]+)/.exec(x)[1];
                    break;
                case "Android":
                    var l = /Android ([\.\_\d]+)/.exec(x);
                    if (l) {
                        g = l[1]
                    } else {
                        var n = /Firefox\//.exec(x);
                        if (n) {
                            g = z + "(Firefox does not report)"
                        }
                    }
                    break;
                case "iOS":
                    g = /OS (\d+)_(\d+)_?(\d+)?/.exec(w);
                    g = g[1] + "." + g[2] + "." + (g[3] | 0);
                    break
            }
            A = "no check";
            if (typeof swfobject != "undefined") {
                var j = swfobject.getFlashPlayerVersion();
                if (j.major > 0) {
                    A = j.major + "." + j.minor + " r" + j.release
                } else {
                    A = z
                }
            }
        } catch (v) {
            console.log("Error running agent detection: " + v.toString())
        }
        if (c.extendedEnvData) {
            return {
                host: window.location.hostname,
                screen: s,
                browser: y,
                browserVersion: k,
                mobile: h,
                os: o,
                osVersion: g,
                cookies: q,
                flashVersion: A,
                languages: navigator.languages ? navigator.languages.join(",") : (navigator.language || navigator.userLanguage)
            }
        } else {
            return {
                host: window.location.hostname,
                mobile: h
            }
        }
    }
};