var searchTypes, BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
    },
    searchString: function(e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t].string;
            if (this.versionSearchString = e[t].subString, -1 != r.indexOf(e[t].subString)) return e[t].identity
        }
    },
    searchVersion: function(e) {
        var t = e.indexOf(this.versionSearchString);
        if (-1 != t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Edge",
        identity: "Edge"
    }, {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.userAgent,
        subString: "Safari",
        identity: "Safari"
    }, {
        string: navigator.userAgent,
        subString: "Opera",
        identity: "Opera"
    }]
};

function toggle(e, t) {
    e = document.getElementById(e);
    "none" == e.style.display ? (e.style.display = t, e.focus()) : e.style.display = "none"
}
if (BrowserDetect.init(), "undefined" != typeof AUTOCOMPLETE_SEARCH_TYPES && ((searchTypes = []).push({
        name: AUTOCOMPLETE_SEARCH_TYPES.video,
        className: "video bg-sprite-icons",
        autocompleteUrl: "/video/search_autocomplete",
        submitUrl: searchUrlVideo,
        testTypePattern: "video"
    }), void 0 !== AUTOCOMPLETE_SEARCH_TYPES.photos && searchTypes.push({
        name: AUTOCOMPLETE_SEARCH_TYPES.photos,
        className: "photos bg-sprite-icons",
        autocompleteUrl: "/video/search_autocomplete",
        submitUrl: searchUrlPhoto,
        testTypePattern: "albums"
    }), searchTypes.push({
        name: AUTOCOMPLETE_SEARCH_TYPES.members,
        className: "members bg-sprite-icons",
        autocompleteUrl: null,
        submitUrl: searchUrlMember,
        testTypePattern: "user"
    }), searchTypes.push({
        name: AUTOCOMPLETE_SEARCH_TYPES.pornstars,
        className: "pornstars bg-sprite-icons",
        autocompleteUrl: "/pornstars/search_autocomplete",
        submitUrl: searchUrlPornstar,
        submitUrlVideo: searchUrlVideo,
        testTypePattern: "pornstars"
    }), void 0 !== AUTOCOMPLETE_SEARCH_TYPES.gifs && searchTypes.push({
        name: AUTOCOMPLETE_SEARCH_TYPES.gifs,
        className: "gifs bg-sprite-icons",
        autocompleteUrl: "/video/search_autocomplete",
        submitUrl: searchUrlGifs,
        testTypePattern: "gifs"
    }), 1 == showStreamate) && searchTypes.push({
        name: AUTOCOMPLETE_SEARCH_TYPES.camModels,
        className: "cam models bg-sprite-icons",
        autocompleteUrl: "/live/search_autocomplete",
        submitUrl: searchUrlCam,
        testTypePattern: "live"
    }), "Firefox" === BrowserDetect.browser) {
    var i, arrowIcons = document.querySelectorAll(".arrow.arrowMenu");
    if (arrowIcons)
        for (i = 0; i < arrowIcons.length; i++) MG_Utils.addClass(arrowIcons[i], "fFox")
}
document.querySelector(".fakeClick") && document.querySelector(".fakeClick").addEventListener("click", function() {
    var e = document.querySelector("#searchTypeSelected"),
        t = document.querySelector("#searchTypeSelected i");
    MG_Utils.hasClass(e, "active") ? (MG_Utils.removeClass(e, "active"), MG_Utils.removeClass(t, "active")) : (MG_Utils.addClass(e, "active"), MG_Utils.addClass(t, "active"))
}), document.addEventListener("click", function(e) {
    var t = document.querySelector("#searchTypeSelected.active"),
        r = document.querySelector("#searchTypeSelected i");
    t && "fakeClick" !== e.target.className && (MG_Utils.removeClass(t, "active"), MG_Utils.removeClass(r, "active"))
});
show = function(e) {
    var t, r, e = e.target,
        s = (null == e.querySelector("video") ? (t = e.querySelector("img.thumb"), i = e.querySelector("div"), t && t.setAttribute("src", t.getAttribute("data-gif-url")), MG_Utils.addClass(e.querySelector("img.loader"), "fade"), i && MG_Utils.addClass(i, "slide")) : (t = e.querySelector("video")) && (i = t.querySelector(".js-webm"), r = t.querySelector(".js-mp4"), i && i.setAttribute("src", t.getAttribute("data-webm")), r && r.setAttribute("src", t.getAttribute("data-mp4")), e.querySelectorAll("video")[0].load(), t.setAttribute("autoplay", !0)), "undefined" != typeof gifLoadTimeout && clearTimeout(gifLoadTimeout), e),
        i = s.querySelectorAll("img.thumb");
    "undefined" != typeof gifLoadTimeout && (gifLoadTimeout = setTimeout(function() {
        var e = s.querySelector("img.loader");
        e && MG_Utils.removeClass(e, "fade")
    }, 1e4)), [].forEach.call(i, function(e) {
        e.addEventListener("load", function() {
            MG_Utils.removeClass(e.parentNode.querySelector("img.loader"), "fade")
        })
    })
};
var gifMenuItem = {
    hideGifs: hide = function(e) {
        var t, r, s, e = e.target;
        null == e.querySelector("video") ? (t = e.querySelector("img.thumb"), r = e.querySelector("div"), t && t.setAttribute("src", t.getAttribute("data-static-url")), MG_Utils.removeClass(e.querySelector("img.loader"), "fade"), r && MG_Utils.removeClass(r, "slide")) : (t = e.querySelector("video")) && (r = e.querySelectorAll("video")[0], e = t.querySelector(".js-webm"), s = t.querySelector(".js-mp4"), e && e.removeAttribute("src"), s && s.removeAttribute("src"), r.pause(), t.setAttribute("autoplay", !1), r.load())
    },
    showGifs: show
};
! function() {
    "use strict";
    var i = {
            options: {
                debug: !1,
                parent: "#headerMainMenu",
                menuItem: ".menu",
                submenu: ".js-dropdown",
                submenuContent: ".js-submenu",
                topMenu: ".js-topMenuLink",
                discover: ".discover",
                timeout: 250
            },
            asyncMenuItems: ["menu_livesex"],
            cache: {},
            cacheTime: (new Date).getTime() + 18e5,
            init: function(e) {
                document.querySelector(this.options.parent) && (e = e || {}, this.options = MG_Utils.extendSimple(this.options, e), this.options.debug && console.log("Menu debug mode"), this.createMenuInStorage(), this.eventHandlers())
            },
            isHovered: function(e) {
                return 1 == e.getAttribute("data-hover")
            },
            createMenuInStorage: function() {
                this.asyncMenuItems.forEach(function(t) {
                    var e;
                    switch (t) {
                        case "menu_livesex":
                            e = MENU_MAIN_HEADER.liveSexUrl;
                            break;
                        case "menu_photos":
                            e = MENU_MAIN_HEADER.photosUrl;
                            break;
                        default:
                            return ""
                    }
                    i.cache[t] || MG_Utils.ajaxCall({
                        dataType: "text",
                        type: "GET",
                        url: e,
                        success: function(e) {
                            i.cache[t] = {
                                data: e
                            }
                        }
                    })
                })
            },
            asyncItems: function(e, t) {
                var n, o;
                MG_Utils.hasClass(e, "asyncLoad") && (n = this, MG_Utils.hasClass(e, "livesex") ? o = MENU_MAIN_HEADER.liveSexUrl : MG_Utils.hasClass(e, "photos") && (o = MENU_MAIN_HEADER.photosUrl), MG_Utils.ajaxCall({
                    type: "GET",
                    url: o,
                    dataType: "text",
                    beforeSend: function() {
                        t.innerHTML = '<div class="menuAsync"><img class="menuAsyncPreload" src="' + MENU_MAIN_HEADER.preloadImage + '"></div>'
                    },
                    success: function(e) {
                        e && e.length && (n.createMenuInStorage(), t.innerHTML = e)
                    }
                }))
            },
            cacheExpire: function(e) {
                return this.cacheTime - e <= 0
            },
            loadContent: function(e, t) {
                var n = (new Date).getTime();
                return MG_Utils.hasClass(e, "livesex") && i.cache.menu_livesex && !this.cacheExpire(n) ? t.innerHTML = i.cache.menu_livesex.data : MG_Utils.hasClass(e, "photos") && i.cache.menu_photos && !this.cacheExpire(n) ? t.innerHTML = i.cache.menu_photos.data : (this.cacheExpire(n) && (this.cacheTime = (new Date).getTime() + 18e5, this.cache = {}), void this.asyncItems(e, t))
            },
            showSubmenu: function(e) {
                var o = e.target || e.srcElement,
                    s = o.querySelector(i.options.submenu);
                s && (o.setAttribute("data-hover", 1), (e = document.querySelector(".activeMenuTab")) && MG_Utils.removeClass(e, "activeMenuTab"), MG_Utils.addClass(o, "activeMenuTab"), setTimeout(function() {
                    if (i.isHovered(o)) {
                        var e = s.querySelector(i.options.discover);
                        if (e) {
                            e.style.display = "inline-block";
                            var t = s.querySelectorAll(".js-menuSwap"),
                                n = 0;
                            if (t && t.length)
                                for (; n < t.length; n++) t[n].setAttribute("src", t[n].getAttribute("data-image"))
                        } else s.querySelector(i.options.submenuContent).style.display = checkForGridSupport() ? "grid" : "block", MG_Utils.hasClass(o, "asyncLoad") && i.loadContent(o, s.querySelector(i.options.submenuContent));
                        MG_Utils.addClass(o.querySelector(i.options.topMenu), "hovered"), s.style.display = "block"
                    }
                    i.removeTargetFromLink()
                }, i.options.timeout), e = document.querySelectorAll("#headerMainMenu li.menu").length) && MG_Utils.hasClass(o, "item-" + e) && document.activeElement === o && (e = o && o.getElementsByTagName("a")[o.getElementsByTagName("a").length - 1]) && e.addEventListener("blur", function() {
                    o.setAttribute("data-hover", 0);
                    var e = o.querySelector(".js-dropdown"),
                        t = o.querySelector(".js-topMenuLink");
                    e && (e.style.display = "none"), t && MG_Utils.removeClass(t, "hovered")
                })
            },
            hideSubmenu: function(e) {
                var t = e.target || e.srcElement,
                    n = t.querySelector(i.options.submenu);
                n && (t.setAttribute("data-hover", 0), setTimeout(function() {
                    var e;
                    i.isHovered(t) || (n.style.display = "none", (e = n.querySelector(i.options.discover)) ? (e.style.display = "none", MG_Utils.hasClass(t, "asyncLoad") && (n.querySelector(i.options.submenuContent).innerHTML = "")) : n.querySelector(i.options.submenuContent).style.display = "none", MG_Utils.removeClass(t.querySelector(i.options.topMenu), "hovered"))
                }, i.options.timeout + 200))
            },
            eventHandlers: function() {
                for (var e = document.querySelector(this.options.parent).querySelectorAll(this.options.menuItem), n = this, t = 0; t < e.length; t++) {
                    var o = e[t];
                    MG_Utils.addEventHandler(o, "mouseenter", this.showSubmenu), MG_Utils.addEventHandler(o, "mouseleave", this.hideSubmenu), MG_Utils.addEventHandler(o, "focus", function(e) {
                        var t = e.target;
                        t && document.activeElement === t && (t = (t = n.options && document.querySelector(n.options.parent)) && t.querySelectorAll(".menu:not(.activeMenuTab)")) && t.forEach(function(e) {
                            e.setAttribute("data-hover", 0);
                            var t = e.querySelector(".js-dropdown"),
                                e = e.querySelector(".js-topMenuLink");
                            t && (t.style.display = "none"), e && MG_Utils.removeClass(e, "hovered")
                        }), n.showSubmenu(e)
                    })
                }
            },
            removeTargetFromLink: function() {
                void 0 === page_params.holiday_promo_prem && document.querySelectorAll("div.livesex div.innerDropdown a").forEach(function(e) {
                    e.getAttribute("target") && e.removeAttribute("target")
                })
            }
        },
        r = {
            options: {
                debug: !1,
                parent: "#headerMainMenu",
                menuItem: ".menu",
                submenu: ".js-dropdown",
                submenuContent: ".js-submenu",
                topMenu: ".js-topMenuLink",
                discover: ".discover",
                timeout: 250
            },
            asyncMenuItems: ["livesex"],
            cache: {},
            cacheTime: (new Date).getTime() + 18e5,
            init: function(e) {
                document.querySelector(this.options.parent) && (e = e || {}, this.options = MG_Utils.extendSimple(this.options, e), this.options.debug && console.log("Menu debug mode"), this.createMenuInStorage(), this.eventHandlers())
            },
            isHovered: function(e) {
                return 1 == e.getAttribute("data-hover")
            },
            createMenuInStorage: function() {
                ~this.asyncMenuItems.indexOf(this.cache) || MG_Utils.ajaxCall({
                    type: "GET",
                    url: MENU_MAIN_HEADER.menuUrl,
                    success: function(t) {
                        r.asyncMenuItems.forEach(function(e) {
                            r.cache[e] = {
                                data: t[e]
                            }
                        })
                    }
                })
            },
            asyncItems: function(n, o) {
                var e;
                MG_Utils.hasClass(n, "asyncLoad") && (e = this, MG_Utils.ajaxCall({
                    type: "GET",
                    url: MENU_MAIN_HEADER.menuUrl,
                    beforeSend: function() {
                        o.innerHTML = '<div class="menuAsync"><img class="menuAsyncPreload" src="' + MENU_MAIN_HEADER.preloadImage + '"></div>'
                    },
                    success: function(t) {
                        t && (e.createMenuInStorage(), r.asyncMenuItems.forEach(function(e) {
                            MG_Utils.hasClass(n, e) && (o.innerHTML = t[e])
                        }))
                    }
                }))
            },
            cacheExpire: function(e) {
                return this.cacheTime - e <= 0
            },
            displayContent: function(t, n) {
                var o = (new Date).getTime(),
                    s = !1;
                r.asyncMenuItems.forEach(function(e) {
                    if (MG_Utils.hasClass(t, e) && r.cache[e] && !r.cacheExpire(o)) return n.innerHTML = r.cache[e].data, s = !0
                }), s || (this.cacheExpire(o) && (this.cacheTime = (new Date).getTime() + 18e5, this.cache = {}), this.asyncItems(t, n))
            },
            showSubmenu: function(e) {
                var o = e.target || e.srcElement,
                    s = o.querySelector(r.options.submenu);
                "undefined" != typeof isVideoPage && s && "photos" === s.getAttribute("data-submenu-type") ? o.setAttribute("data-hover", 1) : s && (o.setAttribute("data-hover", 1), setTimeout(function() {
                    if (r.isHovered(o)) {
                        var e = s.querySelector(r.options.discover);
                        if (e) {
                            e.style.display = "inline-block";
                            var t = s.querySelectorAll(".js-menuSwap"),
                                n = 0;
                            if (t && t.length)
                                for (; n < t.length; n++) t[n].setAttribute("src", t[n].getAttribute("data-image"))
                        } else s.querySelector(r.options.submenuContent).style.display = checkForGridSupport() ? "grid" : "block", MG_Utils.hasClass(o, "asyncLoad") && r.displayContent(o, s.querySelector(r.options.submenuContent));
                        MG_Utils.addClass(o.querySelector(r.options.topMenu), "hovered"), s.style.display = "block"
                    }
                    r.removeTargetFromLink()
                }, r.options.timeout))
            },
            hideSubmenu: function(e) {
                var t = e.target || e.srcElement,
                    n = t.querySelector(r.options.submenu);
                n && (t.setAttribute("data-hover", 0), setTimeout(function() {
                    var e;
                    r.isHovered(t) || (n.style.display = "none", (e = n.querySelector(r.options.discover)) ? (e.style.display = "none", MG_Utils.hasClass(t, "asyncLoad") && (n.querySelector(r.options.submenuContent).innerHTML = "")) : n.querySelector(r.options.submenuContent).style.display = "none", MG_Utils.removeClass(t.querySelector(r.options.topMenu), "hovered"))
                }, r.options.timeout + 200))
            },
            eventHandlers: function() {
                for (var e = document.querySelector(this.options.parent).querySelectorAll(this.options.menuItem), t = 0; t < e.length; t++) {
                    var n = e[t];
                    MG_Utils.addEventHandler(n, "mouseenter", this.showSubmenu), MG_Utils.addEventHandler(n, "mouseleave", this.hideSubmenu)
                }
            },
            removeTargetFromLink: function() {
                void 0 === page_params.holiday_promo_prem && document.querySelectorAll("div.livesex div.innerDropdown a").forEach(function(e) {
                    e.getAttribute("target") && e.removeAttribute("target")
                })
            }
        };
    MG_Utils.domReady(function() {
        (page_params.getMenuType ? r : i).init()
    })
}(),
function() {
    var n, e = document.querySelectorAll("ul.gifsMenuItems li"),
        e = (e && [].forEach.call(e, function(e) {
            e.addEventListener("mouseenter", gifMenuItem.showGifs), e.addEventListener("mouseleave", gifMenuItem.hideGifs)
        }), document.querySelector(".realsex"));
    void 0 === page_params.holiday_promo_prem && e && (n = e.querySelector(".js-topMenuLink")) && (n.href = "/", e.addEventListener("click", function(e) {
        var t = n.dataset.href;
        e.preventDefault(), e.stopPropagation(), window.open(t, "_blank")
    }))
}();
var MG_Flipbook = function() {
    "use strict";
    var Self = this,
        timer, o = {},
        data = {},
        flipTimer, oldThumbUrlAC;
    Self.init = function(e) {
        Self.params = e, Self.addEvents()
    }, Self.addEvent = function(e, t, i) {
        var a;
        e.addEventListener ? e.addEventListener(t, i, !1) : (i.$$guid || (i.$$guid = Self.addEvent.guid++), e.events || (e.events = {}), (a = e.events[t]) || (a = e.events[t] = {}, e["on" + t] && (a[0] = e["on" + t])), a[i.$$guid] = i, e["on" + t] = Self.handleEvent)
    }, Self.addEvent.guid = 1, Self.removeEvent = function(e, t, i) {
        e.removeEventListener ? e.removeEventListener(t, i, !1) : e.events && e.events[t] && delete e.events[t][i.$$guid]
    }, Self.handleEvent = function(e) {
        var t, i = !0,
            a = (e = e || Self.fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event), this.events[e.type]);
        for (t in a) this.$$handleEvent = a[t], !1 === this.$$handleEvent(e) && (i = !1);
        return i
    }, Self.fixEvent = function(e) {
        return e.preventDefault = Self.fixEvent.preventDefault, e.stopPropagation = Self.fixEvent.stopPropagation, e
    }, Self.fixEvent.preventDefault = function() {
        this.returnValue = !1
    }, Self.fixEvent.stopPropagation = function() {
        this.cancelBubble = !0
    }, Self.addEvents = function() {
        Self.addEvent(document.body, "mousemove", Self.initFlip), Self.addEvent(document.body, "mouseout", Self.terminateFlip), Self.addEvent(window, "scroll", Self.endFlip)
    }, Self.hasClass = function(e, t) {
        return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
    }, Self.closestElm = function(e, t, i) {
        for (var i = i || document.body, a = t.charAt(0); e && e !== i;) {
            if ("." === a && Self.hasClass(e, t.substr(1))) return e;
            if ("#" === a && e.id === t.substr(1)) return e;
            if ("[" === a && e.getAttribute(t.substr(1, t.indexOf("]") - 1))) return e;
            e = e.parentNode
        }
        return !1
    }, Self.dataSet = function(string) {
        var data;
        try {
            data = eval("(" + string + ")")
        } catch (e) {
            data = !1
        }
        return data
    }, Self.data = function(e, t, i) {
        switch (e.data = e.data || {}, arguments.length) {
            case 3:
                e.data[t] = i;
                break;
            case 2:
                return e.data[t];
            default:
                return e.data
        }
    }, Self.callbackData = function() {
        return data = {
            index: o.index,
            setLength: o.setLength,
            currentImage: o.currentImage,
            imgWrapper: o.imgWrapper,
            currentUrl: o.currentUrl,
            active: o.active,
            status: o.status
        }
    }, Self.initFlip = function(e) {
        var t, e = (e = e || window.event).target || e.srcElement;
        window.clearTimeout(flipTimer), MG_Utils.hasClass(e, "img") && MG_Utils.hasClass(e.querySelector(".thumb"), "js-videoThumbFlip") && !e.querySelector(".js-videoThumbFlip").getAttribute("data-flipbook_active") && (t = e.querySelector(".js-videoThumbFlip")), (t = MG_Utils.hasClass(e, "js-videoThumbFlip") && !e.getAttribute("data-flipbook_active") ? e : t) && !Self.closestElm(t, ".img").querySelector(".privateOverlay") && (flipTimer = window.setTimeout(function() {
            Self.startFlip(t)
        }, 100))
    }, Self.terminateFlip = function(e) {
        var t = (e = e || window.event).target,
            e = e.relatedTarget;
        window.clearTimeout(flipTimer), MG_Utils.hasClass(t, "img") && MG_Utils.hasClass(t.querySelector(".thumb"), "js-videoThumbFlip") && t.querySelector(".thumb").getAttribute("data-flipbook_active") && e && !MG_Utils.hasClass(e, "thumb") && Self.endFlip(), MG_Utils.hasClass(t, "js-videoThumbFlip") && t.getAttribute("data-flipbook_active") && Self.endFlip()
    }, Self.startFlip = function(e) {
        var t, i, a, l, n, s, r, f, u, d, c, m, S = 0,
            b = Self.params.thumbnailsSets.length;
        for (o.active && !Self.closestElm(e, "[data-flipbook_active]") && Self.endFlip(), oldThumbUrlAC = e.src; S < b; S++)
            if (Self.closestElm(e, Self.params.thumbnailsSets[S].thumbnailsContainer) && (!Self.params.thumbnailsSets[S].extendHoverClassName && Self.hasClass(e, Self.params.thumbnailsSets[S].thumbnailsClassName) || Self.params.thumbnailsSets[S].extendHoverClassName && Self.closestElm(e, "." + Self.params.thumbnailsSets[S].extendHoverClassName))) {
                if (u = f = e, !Self.params.thumbnailsSets[S].excludeContainer || !Self.closestElm(f, Self.params.thumbnailsSets[S].excludeContainer)) {
                    if (Self.params.thumbnailsSets[S].extendHoverClassName && (u = (f = Self.closestElm(f, "." + Self.params.thumbnailsSets[S].extendHoverClassName)).querySelector("." + Self.params.thumbnailsSets[S].thumbnailsClassName)), o.active) {
                        if (f.getAttribute("data-flipbook_active")) return !1;
                        Self.endFlip()
                    }
                    n = Self.params.thumbnailsSets[S].cover ? (l = (r = Self.dataSet(u.getAttribute("data-flipbook"))).setLength, a = r.firstThumbnail, s = parseInt(r.firstThumbnail, 10) - r.incrementer, t = r.digitsPreffix, i = r.digitsSuffix, r = r.incrementer, -1) : (Self.params.thumbnailsSets[S].adultCentro ? (d = 9, u.src = u.src.replace("primary", "baseline/" + S)) : d = 1, m = /\(([^)]+)\)/, c = u.src.indexOf(")."), t = !(m = m.exec(u.src)) || -1 !== c ? u.src.substring(0, u.src.lastIndexOf(Self.params.thumbnailsSets[S].digitsPreffix) + d) : u.src.substring(0, u.src.lastIndexOf(")") + 1), s = u.src.replace(t, ""), i = Self.params.thumbnailsSets[S].digitsSuffix, s = parseInt(s.replace(i, ""), 10), a = Self.params.thumbnailsSets[S].firstThumbnail, l = Self.params.thumbnailsSets[S].setLength, (s - a) / (r = Self.params.thumbnailsSets[S].incrementer)), o = {
                        index: n,
                        setLength: l,
                        currentUrl: u.src,
                        firstThumbnail: a,
                        digits: s,
                        digitsPreffix: t,
                        digitsSuffix: i,
                        matches: m,
                        testString: c,
                        incrementer: r,
                        currentImage: u,
                        imgWrapper: !1,
                        interval: Self.params.thumbnailsSets[S].interval,
                        active: !0,
                        callback: Self.params.thumbnailsSets[S].callback,
                        init: Self.params.thumbnailsSets[S].init,
                        status: "started"
                    }, f.setAttribute("data-flipbook_active", "1"), Self.params.thumbnailsSets[S].extendHoverClassName && (o.imgWrapper = f), o.init && !f.init && (Self.callbackData(), o.init(data)), f.init || (Self.params.thumbnailsSets[S].adultCentro ? Self.data(f, "oldThumbUrl", oldThumbUrlAC) : (Self.data(f, "oldThumbUrl", u.src), Self.data(f, "oldIndex", n)), f.init = !0), o.callback && (Self.callbackData(), o.callback(data)), Self.params.thumbnailsSets[S].resetIndex && (o.digits = (l - 1) * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = l - 1, Self.callbackData()), window.clearTimeout(timer), timer = window.setTimeout(Self.preload, 0)
                }
                return !1
            }
    }, Self.endFlip = function() {
        var e;
        window.clearTimeout(timer), o.active && ((e = document.querySelector("[data-flipbook_active]")) && (e.removeAttribute("data-flipbook_active"), "IMG" === e.nodeName ? e.src = Self.data(e, "oldThumbUrl") : e.querySelector("img").src = Self.data(e, "oldThumbUrl")), o.active = !1, o.status = "ended", o.index = Self.data(e, "oldIndex"), o.callback) && (Self.callbackData(), o.callback(data))
    }, Self.preload = function() {
        var e = new Image;
        o.digits < (o.setLength - 1) * o.incrementer + parseInt(o.firstThumbnail, 10) ? (o.digits = o.digits + o.incrementer, o.index++) : (o.digits = parseInt(o.firstThumbnail, 10), o.index = 0), o.firstThumbnail.length > String(o.digits).length ? o.currentUrl = o.digitsPreffix + o.firstThumbnail.substring(0, o.firstThumbnail.length - String(o.digits).length) + o.digits + o.digitsSuffix : -1 !== o.testString ? o.currentUrl = o.digitsPreffix + o.digits + "(" + o.matches[1] + ")" + o.digitsSuffix : o.currentUrl = o.digitsPreffix + o.digits + o.digitsSuffix, e.onerror = function() {
            Self.endFlip()
        }, e.onload = function() {
            o.active && (timer = "running" !== o.status ? window.setTimeout(Self.flipImage, 0) : window.setTimeout(Self.flipImage, o.interval))
        }, e.src = o.currentUrl
    }, Self.flipImage = function(e) {
        window.clearTimeout(timer), o.currentImage.src = o.currentUrl, o.status = "running", o.callback && (Self.callbackData(), o.callback(data)), void 0 !== e && (o.digits = e * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = e, Self.callbackData()), Self.preload()
    }, Self.jumpTo = function(e) {
        o.digits = e * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = e, o.firstThumbnail.length > String(o.digits).length ? o.currentUrl = o.digitsPreffix + o.firstThumbnail.substring(0, o.firstThumbnail.length - String(o.digits).length) + o.digits + o.digitsSuffix : o.currentUrl = o.digitsPreffix + o.digits + o.digitsSuffix, o.currentImage.src = o.currentUrl, o.callback && (Self.callbackData(), o.callback(data))
    }, Self.changeIndex = function(e) {
        o.digits = e * o.incrementer + parseInt(o.firstThumbnail, 10), o.index = e, Self.callbackData()
    }, Self.pauseFlip = function() {
        window.clearTimeout(timer), o.status = "paused"
    }
};
var MG_Scroll = {
    init: function(e) {
        MG_Scroll._isPlainObject(e) && MG_Scroll._setupElements(MG_Scroll._extend({}, {
            width: "auto",
            height: "250px",
            size: "7px",
            color: "#000",
            position: "right",
            distance: "1px",
            start: "top",
            opacity: 0,
            alwaysVisible: !0,
            disableFadeOut: !0,
            railVisible: !0,
            railColor: "#333",
            railOpacity: .2,
            railDraggable: !0,
            railClass: "scrollRail",
            barClass: "scrollBar",
            wrapperClass: "scrollDiv",
            allowPageScroll: !1,
            wheelStep: 20,
            touchScrollStep: 200,
            borderRadius: "7px",
            railBorderRadius: "7px",
            selector: null,
            horizontal: !1,
            wrapperStylePosition: "relative",
            wheelScrollAllowClass: null,
            enLargeOnHover: !0
        }, e))
    },
    _extend: function(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
            if (arguments[t])
                for (var l in arguments[t]) arguments[t].hasOwnProperty(l) && (e[l] = arguments[t][l]);
        return e
    },
    _fadeIn: function(e) {
        var t, l = 10 * +MG_Scroll._getStyle(e, "opacity");
        clearInterval(t), t = setInterval(function() {
            l < 4 ? (l++, e.style.opacity = (l / 10).toFixed(1)) : (clearInterval(t), t = 0)
        }, 50)
    },
    _fadeOut: function(e) {
        var t, l = 10 * +MG_Scroll._getStyle(e, "opacity");
        clearInterval(t), t = setInterval(function() {
            0 < l ? (l--, e.style.opacity = (l / 10).toFixed(1)) : (clearInterval(t), t = 0)
        }, 100)
    },
    _closestClassElement: function(e, t) {
        for (; e.className != t;)
            if (!(e = e.parentNode)) return null;
        return e
    },
    _getStyle: function(e, t) {
        return window.getComputedStyle ? getComputedStyle(e, "")[t] : e.currentStyle ? e.currentStyle[t] : void 0
    },
    _isPlainObject: function(e) {
        if (!e || e.nodeType || "undefined" != typeof jQuery && jQuery.isWindow(e)) return !1;
        try {
            if (e.constructor && !core_hasOwn.call(e, "constructor") && !core_hasOwn.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
            return !0
        }
        if ("undefined" != typeof jQuery && jQuery.support.ownLast)
            for (var t in e) return core_hasOwn.call(e, t);
        for (t in e);
        return void 0 === t || core_hasOwn.call(e, t)
    },
    isWindow: function(e) {
        return e && (e === function() {
            return this
        }() || e.eval && e.eval.call && e.eval("this === (function(){ return this })()")) || !1
    },
    _makeUnselectable: function(e) {
        (e = "string" == typeof e ? document.getelentById(e) : e) && (e.onselectstart = function() {
            return !1
        }, e.style.MozUserSelect = "none", e.style.KhtmlUserSelect = "none", e.unselectable = "on")
    },
    _getOffset: function(e, t) {
        var l = e.ownerDocument && e.ownerDocument.defaultView && e.ownerDocument.defaultView.getComputedStyle && e.ownerDocument.defaultView.getComputedStyle(e, null),
            o = l && l.getPropertyValue(t ? "height" : "width") || "";
        return o = o && -1 < o.indexOf(".") ? parseFloat(o) + parseInt(l.getPropertyValue(t ? "padding-top" : "padding-left")) + parseInt(l.getPropertyValue(t ? "padding-bottom" : "padding-right")) + parseInt(l.getPropertyValue(t ? "border-top-width" : "border-left-width")) + parseInt(l.getPropertyValue(t ? "border-bottom-width" : "border-right-width")) : t ? e.offsetHeight : e.offsetWidth
    },
    _outerHeight: function(e) {
        var t = MG_Scroll._getOffset(e, !0),
            l = MG_Scroll._getStyle(e, "marginTop"),
            e = MG_Scroll._getStyle(e, "marginBottom");
        return t += parseInt(l) + parseInt(e)
    },
    _outerWidth: function(e) {
        var t = MG_Scroll._getOffset(e),
            l = MG_Scroll._getStyle(e, "marginLeft"),
            e = MG_Scroll._getStyle(e, "marginRight");
        return t += parseInt(l) + parseInt(e)
    },
    _wrap: function(e, t) {
        return t = t || document.createElement("div"), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e)
    },
    _setupElements: function(e) {
        el = e.selector;
        for (var t = 0; t < el.length; t++) MG_Scroll._processElement(el[t], e)
    },
    _processElement: function(e, a) {
        var o, t, r, l, n, s, i, c, d, h, u = 30,
            p = !1,
            f = e;
        if (MG_Utils.hasClass(f.parentNode, a.wrapperClass)) {
            var y, e = a.horizontal ? f.scrollLeft : f.scrollTop,
                g = (MG_Utils.children(f.parentNode), document.querySelectorAll("." + a.barClass)[0]),
                _ = document.querySelectorAll("." + a.railClass)[0];
            if (w(), MG_Scroll._isPlainObject(a)) {
                if (!a.horizontal && "height" in a && "auto" == a.height ? (f.parentNode.style.height = "auto", f.style.height = "auto", y = f.parentNode.parentNode.style.height, f.parentNode.style.height = y, f.style.height = y) : "height" in a && (y = a.height, f.parentNode.style.height = y, f.style.height = y), "scrollTo" in a) e = parseInt(a.scrollTo);
                else if ("scrollBy" in a) e += parseInt(a.scrollBy);
                else if ("bottom" === a.start) e = 5e3;
                else if ("destroy" in a) return;
                v(e, !1, !0)
            }
        } else MG_Scroll._isPlainObject(a) && "destroy" in a || (a.horizontal ? a.width = "auto" == a.width ? f.parentNode.clientWidth : a.width : a.height = "auto" == a.height ? f.parentNode.clientHeight + "px" : a.height, (y = document.createElement("div")).className += a.wrapperClass, y.style.position = a.wrapperStylePosition, y.style.overflow = "hidden", y.style.width = a.width, y.style.height = a.height, f.style.overflow = "hidden", f.style.width = a.width, f.style.height = a.height, (_ = document.createElement("div")).className += a.railClass, _.style.position = "absolute", _.style.display = a.alwaysVisible && a.railVisible ? "block" : "none", _.style.borderRadius = a.railBorderRadius, _.style.background = a.railColor, _.style.opacity = a.railOpacity, _.style.zIndex = 90, a.horizontal ? (_.style.width = "100%", _.style.height = a.size, _.style.bottom = 0) : (_.style.width = a.size, _.style.height = "100%", _.style.top = 0), (g = document.createElement("div")).className += a.barClass, g.style.background = a.color, g.style.position = "absolute", g.style.opacity = a.opacity, g.style.display = a.alwaysVisible ? "block" : "none", g.style.borderRadius = a.borderRadius, g.style.BorderRadius = a.borderRadius, g.style.MozBorderRadius = a.borderRadius, g.style.WebKitBorderRadius = a.borderRadius, g.style.zIndex = 99, a.horizontal ? (g.style.height = a.size, g.style.left = 0, g.style.bottom = 0) : (g.style.top = 0, g.style.width = a.size, "right" == a.position ? (_.style.right = 0, g.style.right = 0) : (_.style.left = 0, g.style.left = 0)), MG_Scroll._wrap(f, y), f.parentNode.appendChild(g), f.parentNode.appendChild(_), a.railDraggable && (d = c = "", h = f.clientHeight, f.addEventListener("touchstart", function(e) {
            c = a.horizontal ? e.touches[0].clientX : e.touches[0].clientY, d = a.horizontal ? parseInt(g.style.left) : parseInt(g.style.top)
        }, {
            passive: !0
        }), f.addEventListener("touchmove", function(e) {
            var t = a.horizontal ? e.touches[0].clientX : e.touches[0].clientY,
                t = c + d - t;
            0 <= t && t <= h && e.cancelable && e.stopPropagation(), v(t, !0, !0)
        }, {
            passive: !0
        }), MG_Utils.addEventHandler(g, "mousedown", function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, r = !0;
            var t = a.horizontal ? e.clientX : e.clientY,
                l = a.horizontal ? parseInt(g.style.left) : parseInt(g.style.top);

            function o(e) {
                e = a.horizontal ? e.clientX : e.clientY;
                v(l + e - t, !0, !0)
            }
            return MG_Utils.addEventHandler(document, "mousemove", o), MG_Utils.addEventHandler(document, "mouseup", function(e) {
                r = !1, M(), MG_Utils.removeEventHandler(document, "mousemove", o)
            }), !1
        })), MG_Utils.addEventHandler(_, "mouseenter", function() {
            S()
        }), MG_Utils.addEventHandler(_, "mouseleave", function() {
            M()
        }), MG_Utils.addEventHandler(g, "mouseenter", function() {
            t = !0, a.enLargeOnHover && (a.horizontal ? g.style.height = "10px" : g.style.width = "10px")
        }), MG_Utils.addEventHandler(g, "mouseleave", function() {
            t = !1, a.horizontal ? g.style.height = a.size : g.style.width = a.size
        }), MG_Utils.addEventHandler(f, "mouseenter", function() {
            o = !0, S()
        }), MG_Utils.addEventHandler(f, "mouseleave", function() {
            o = !1, M()
        }), w(), "bottom" === a.start ? v(a.horizontal ? f.offsetWidth - g.offsetWidth : f.offsetHeight - g.offsetHeight, !0, !0) : "top" !== a.start && (v(a.start, null, !0), a.alwaysVisible || (g.style.display = "none")), (e = f) && (e.addEventListener("DOMMouseScroll", m, {
            passive: !1
        }), e.addEventListener("mousewheel", m, {
            passive: !1
        })), this.showDefault = function() {
            S()
        });

        function m(e) {
            var t, l = e.target || e.srcElement;
            MG_Utils.hasClass(l, a.wheelScrollAllowClass) || o && (l = 0, (e = e || window.event).wheelDelta && (l = -e.wheelDelta / 120), e.detail && (l = e.detail / 3), t = e.target || e.srcTarget || e.srcElement, MG_Scroll._closestClassElement(t, a.wrapperClass) == f.parentNode && v(l, !0, !1), e.preventDefault && !p && e.preventDefault(), p || (e.returnValue = !1))
        }

        function v(e, t, l) {
            p = !1;
            var o = e,
                r = a.horizontal ? MG_Scroll._getOffset(f) : MG_Scroll._getOffset(f, !0),
                n = a.horizontal ? MG_Scroll._getOffset(g) : MG_Scroll._getOffset(g, !0),
                r = r - n;

            function i(e) {
                a.horizontal ? g.style.left = e + "px" : g.style.top = e + "px"
            }
            t && (o = a.horizontal ? parseInt(g.style.left) + e * parseInt(a.wheelStep) / 100 * n : parseInt(g.style.top) + e * parseInt(a.wheelStep) / 100 * n, o = Math.min(Math.max(o, 0), r), i(o = 0 < e ? Math.ceil(o) : Math.floor(o))), l && (i(e), (t = Math.min(Math.max(e, 0), r)) <= e && i(t), e <= 0) && i(0), a.horizontal ? (n = MG_Scroll._outerWidth(f), o = (s = parseInt(g.style.left) / (n - MG_Scroll._outerWidth(g))) * (f.scrollWidth - n), f.scrollLeft = o) : (l = MG_Scroll._outerHeight(f), o = (s = parseInt(g.style.top) / (l - MG_Scroll._outerHeight(g))) * (f.scrollHeight - l), f.scrollTop = o), S(), M()
        }

        function w() {
            var e;
            e = a.horizontal ? (i = Math.max(f.offsetWidth / f.scrollWidth * f.offsetWidth, u), g.style.width = i + "px", i == f.offsetWidth ? "none" : "block") : (n = Math.max(f.offsetHeight / f.scrollHeight * f.offsetHeight, u), g.style.height = n + "px", n == f.offsetHeight ? "none" : "block"), g.style.display = e
        }

        function S() {
            if (w(), clearTimeout(l), p = s == ~~s && a.allowPageScroll, a.horizontal) {
                if (i >= f.offsetWidth) return void(p = !0)
            } else if (n >= f.offsetHeight) return void(p = !0);
            MG_Scroll._fadeIn(g), a.railVisible && MG_Scroll._fadeIn(_)
        }

        function M() {
            a.alwaysVisible || (l = setTimeout(function() {
                a.disableFadeOut && o || t || r || (MG_Scroll._fadeOut(g), MG_Scroll._fadeOut(_))
            }, 1500))
        }
    }
};
var dropdown = function() {
    "use strict";
    var instance = null,
        dropdowns = [],
        id = 0,
        dontProcess = !1;

    function Dropdown(options) {
        var defaults = {
            dropdownTrigger: "dropdownTrigger",
            dropdownWrapper: "dropdownWrapper",
            timeout: 4e3,
            hideDelay: !0
        };
        this.options = MG_Utils.extendDefaults(defaults, options), this.wrapper = this.options.wrapper, this.selector = this.options.selector, this.additionalElements = document.querySelectorAll(eval(this.options.additionalElements)), this.triggers = this.wrapper.querySelectorAll("." + this.options.dropdownTrigger), this.dropdown = this.wrapper.querySelector("." + this.options.dropdownWrapper), this.hiddenValue = this.wrapper.querySelector('input[type="hidden"]'), this.activateCloseDelay = hideDelayed.call(this), this.closeCallback = "function" == typeof this.options.closeCallback ? this.options.closeCallback : "", _init.call(this)
    }

    function _init() {
        return !(!this.triggers || !this.dropdown || MG_Utils.hasClass(this.wrapper, "js_dropdownBound")) && (MG_Utils.addClass(this.wrapper, "js_dropdownBound"), _initEvents.call(this), _checkHiddenValue.call(this), void this.wrapper.setAttribute("data-dropdown-id", id++))
    }

    function _initEvents() {
        var t = this;
        [].forEach.call(this.triggers, function(e) {
            MG_Utils.addEventHandler(e, "click", function(e) {
                _triggersHandler.call(t, e)
            }), MG_Utils.hasClass(e, "js-accessibleDropdown") && MG_Utils.addEventHandler(e, "keypress", function(e) {
                _triggersHandler.call(t, e)
            })
        }), ("string" == typeof this.selector && ".channelsAZ" != this.selector || "object" == typeof this.selector && !MG_Utils.hasClass(this.wrapper, "channelsAZ")) && ("string" == typeof this.selector && ".alphabetFilter" != this.selector || "object" == typeof this.selector && !MG_Utils.hasClass(this.wrapper, "alphabetFilter")) && this.options.hideDelay && this.activateCloseDelay(), MG_Utils.addEventHandler(this.dropdown, "click", function(e) {
            _dropdownHandler.call(t, e)
        })
    }

    function _nextDivSibling(e) {
        for (;
            (e = e.nextSibling) && 1 !== e.nodeType && e.tagName && "div" === e.tagName.toLowerCase(););
        return e
    }

    function _triggersHandler(e) {
        var t = null;
        if (dontProcess) dontProcess = !1;
        else {
            var o = (e = e || window.event).target || e.srcElement;
            if (!MG_Utils.hasClass(o, this.options.dropdownTrigger))
                for (;
                    (o = o.parentElement) && !MG_Utils.hasClass(o, this.options.dropdownTrigger););
            var i = !1,
                n = "withScroll" == this.dropdown.id ? 1 : 0;
            1 == this.triggers.length ? i = !(!this.dropdown.style.display || "none" === this.dropdown.style.display) : 1 < this.triggers.length && (i = !(!this.dropdown.style.display || "none" === this.dropdown.style.display) && this.dropdown.getAttribute("data-type") == o.getAttribute("data-type")), i ? (this.dropdown.style.display = "none", (i = MG_Utils.closest(this.dropdown, ".dropdownTrigger")) && MG_Utils.toggleClass(i, "active"), n && (t = _nextDivSibling(this.dropdown)) && void 0 !== t.style && (t.style.display = "none")) : (dropdowns.forEach(function(e) {
                e.dropdown.style.display = "none";
                e = MG_Utils.closest(e.dropdown, ".dropdownTrigger");
                e && MG_Utils.hasClass(e, "active") && MG_Utils.removeClass(e, "active")
            }), o.getAttribute("data-type") && (this.dropdown.getAttribute("data-type"), o.getAttribute("data-type")), this.dropdown.style.display = "block", (i = MG_Utils.closest(this.dropdown, ".dropdownTrigger")) && MG_Utils.toggleClass(i, "active"), _notificationPosition.call(this, e))
        }
    }

    function _notificationPosition(e) {
        var t, o, i, e = e.target || e.srcElement;
        "notificationIcons" != e.parentNode.getAttribute("id") && "notificationIcons" != e.parentNode.parentNode.getAttribute("id") || (e = e.querySelector("i") || e.parentNode.querySelector("i"), o = (t = document.querySelector("#notificationBox")).clientWidth / 1.25, i = MG_Utils.offset(e).left, e = e.clientWidth / 2, t.style.left = Math.round(i - o + e) + "px")
    }

    function _dropdownHandler(e) {
        var t = (e = e || window.event).target || e.srcElement;
        if ("li" !== t.tagName.toLowerCase())
            for (;
                (t = t.parentElement) && "li" !== t.tagName.toLowerCase(););
        this.setItem(t)
    }

    function _checkHiddenValue() {
        this.hiddenValue && this.hiddenValue.length && "" != this.hiddenValue.value && (_selectActiveItem.call(this) || setTimeout(function() {
            _selectActiveItem.apply(context)
        }, 1e3))
    }

    function _selectActiveItem() {
        var e = this.dropdown.querySelector('li[data-value="' + this.hiddenValue_.value + '"]');
        if (!e.length) return !1;
        MG_Utils.triggerEvent(e, "click"), dontProcess = !0
    }
    Dropdown.prototype = {
        constructor: Dropdown,
        setItem: function(e) {
            var t, o = this.wrapper.querySelector(".dropdownTrigger .textFilter");
            if (isNaN(e) || (0 | (t = parseFloat(e))) !== t || (e = this.dropdown.querySelectorAll("li")[e]), !("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)) return !1;
            MG_Utils.removeClassMultiple(this.dropdown.querySelectorAll("li"), "active"), MG_Utils.addClass(e, "active"), o && MG_Utils.setText(o, e.textContent || e.innerText), this.hiddenValue && (this.hiddenValue.value = e.getAttribute("data-value"))
        }
    };
    var hideDelayed = function() {
        var i = this;
        const o = document.getElementById("languageMenu"),
            n = document.getElementById("locationMenu");

        function s() {
            i.dropdown.getAttribute("data-hideDelayedTimeoutId") && (clearTimeout(parseInt(MG_Utils.getData(i.dropdown, "hideDelayedTimeoutId"))), MG_Utils.setData(i.dropdown, "hideDelayedTimeoutId", ""))
        }
        return function() {
            for (var e = [], t = 0; t <= i.triggers.length - 1; t++) e.push(i.triggers[t]);
            e.push(i.dropdown), e.forEach(function(e) {
                MG_Utils.addEventHandler(e, "mouseenter", function(e) {
                    MG_Utils.setData(i.dropdown, "hideDelayedOver", "1"), s(i.dropdown)
                }), MG_Utils.addEventHandler(e, "mouseleave", function(e) {
                    if (o && MG_Utils.hasClass(o, "active")) return !1;
                    if (n && MG_Utils.hasClass(n, "active")) return !1;
                    MG_Utils.setData(i.dropdown, "hideDelayedOver", "0"), s(i.dropdown);
                    var t = setTimeout(function() {
                        if ("0" == MG_Utils.getData(i.dropdown, "hideDelayedOver")) {
                            for (var e, t = [], o = 0; o <= i.additionalElements.length - 1; o++) t.push(i.additionalElements[o]);
                            t.push(i.dropdown), t.forEach(function(e) {
                                e.style.display = "none";
                                e = document.querySelector(".dropdownTrigger.active");
                                e && MG_Utils.removeClass(e, "active")
                            }), document.getElementById("withScroll") && (e = _nextDivSibling()) && void 0 !== e.style && (e.style.display = "none"), "function" == typeof i.closeCallback && i.closeCallback(), clearTimeout(parseInt(MG_Utils.getData(i.dropdown, "hideDelayedTimeoutId"))), MG_Utils.setData(i.dropdown, "hideDelayedTimeoutId", "")
                        }
                    }, i.options.timeout);
                    MG_Utils.setData(i.dropdown, "hideDelayedTimeoutId", t)
                })
            })
        }
    };
    return MG_Utils.addEventHandler(document, "click", function(e) {
        var t = (e = e || window.event).target || e.srcElement;
        if (MG_Utils.hasClass(t, "js_showSubMenu")) return !1;
        if (MG_Utils.closest(t, ".dropdownTrigger") || (e = document.querySelector(".dropdownTrigger.active")) && MG_Utils.removeClass(e, "active"), !MG_Utils.hasClass(t, "dropdownTrigger"))
            for (;
                (t = t.parentElement) && !MG_Utils.hasClass(t, "dropdownTrigger"););
        dropdowns.forEach(function(e) {
            if (t && t.parentNode.querySelector(".dropdownWrapper") === e.dropdown) return !1;
            e.dropdown.style.display = "none"
        })
    }), {
        init: function(t, o) {
            var o = o || {},
                e = "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName,
                e = t instanceof Array || e ? t : document.querySelectorAll(t);
            [].forEach.call(e, function(e) {
                o.wrapper = e, o.selector = t, (instance = new Dropdown(o)).triggers && instance.dropdown && dropdowns.push(instance)
            })
        },
        get: function(e) {
            return dropdowns[e]
        }
    }
}();

function filterableDropDown(e, t) {
    var n = document.querySelector(".js-languages"),
        s = "displayNone";
    e = e.target, e = MG_Utils.closest(e, ".dropDownColumn") && MG_Utils.closest(e, ".dropDownColumn");
    if (e && MG_Utils.hasClass(e, "js-filterable")) switch (t) {
        case "mouseleave":
        case "click":
            n && (n.value = "", MG_Utils.addClass(n, s));
            break;
        case "mouseenter":
            var o = 0 < document.querySelectorAll(".dropDownColumn.js-filterable .dropDown li").length && document.querySelectorAll(".dropDownColumn.js-filterable .dropDown li");
            if (n && (MG_Utils.removeClass(n, s), n.addEventListener("keyup", function() {
                    var e = n.value.toUpperCase(),
                        t = document.querySelector(".dropDownColumn.js-filterable .dropDown") && document.querySelector(".dropDownColumn.js-filterable .dropDown"),
                        o = t && 0 < t.querySelectorAll("li").length && t.querySelectorAll("li");
                    if (o)
                        for (i = 0; i < o.length; i++) - 1 < (txtValue = o[i].innerText).toUpperCase().indexOf(e) ? MG_Utils.removeClass(o[i], s) : MG_Utils.addClass(o[i], s)
                })), o)
                for (i = 0; i < o.length; i++) MG_Utils.removeClass(o[i], s)
    }
}
let Autocomplete_var = {
    timer: null,
    value: null,
    name: null,
    matches: 0,
    type: null,
    originalVal: null
};
var autocompleteSearch = function() {
        "use strict";
        var e;

        function s(e) {
            let t = this.input.value.replace(/^[ \t]+|[ \t]+$/gi, ""),
                s = this.input.getAttribute("placeholder");
            var i;
            return "" != (t = t.replace(/[\.,'/:=\(\)&!\?@\[\]"\*\$#%\^;\|`\\~><¿\{\}]/gi, " ").replace(/[éèëê]/gi, "e").replace(/[äàâ]/gi, "a").replace(/[îï]/gi, "i").replace(/ô/gi, "o").replace(/[üùû]/gi, "u").replace(/ç/gi, "c").replace(/【/gi, "").replace(/】/gi, "").replace(/〈/gi, "").replace(/〉/gi, "").replace(/〖/gi, "").replace(/〗/gi, "").replace(/（/gi, "").replace(/）/gi, "").replace(/　/gi, "").replace(/〔/gi, "").replace(/〕/gi, "").replace(/『/gi, "").replace(/』/gi, "").replace(/］/gi, "").replace(/［/gi, "")) && t != s && (RecentSearches.add(t), i = L.call(this, t, Autocomplete_var.type), window.location = i), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        }

        function r(e) {
            var t, s = RegExp(/[\<\>]/gi),
                i = this.input.value.match(s),
                s = this.input.value.replace(s, ""),
                e = e.keyCode || e.charCode,
                r = this,
                n = this.input.value.trim(),
                a = Autocomplete_var.type,
                l = !1;
            if ("38" == e || "40" == e || "13" == e) return !1;
            if (this.term && this.term == n) return r.searchesWrapper.style.display = "none", !(r.suggestionsList.style.display = "block");
            for (t in i && (this.input.value = s), "13" != e || "undefined" != typeof arrowKeysSelected || MG_Utils.hasClass(this.form, "onHold") || "hd" == this.input.value.toLowerCase() && "video" == Autocomplete_var.type && (window.location = "/hd"), 0 < this.input.value.length ? (this.clearInput && MG_Utils.removeClass(this.clearInput, "hidden"), this.inputLabel && MG_Utils.addClass(this.inputLabel, "extraPadding")) : (this.clearInput && MG_Utils.addClass(this.clearInput, "hidden"), this.inputLabel && MG_Utils.removeClass(this.inputLabel, "extraPadding")), this.term = n, Autocomplete_var.originalVal = n, this.cache = this.input.getAttribute("data-autocomplete-cache") || {}, "object" != typeof this.cache && (this.cache = JSON.parse(this.cache)), void 0 === this.cache[a] && (this.cache[a] = {}), this.cache[a]) this.term == t && (response(this.cache[a][t]), l = !0);
            if (l) return !1;
            "Video" !== a && MG_Utils.addClass(r.trendingListWrapper, "hidden"), this.input.value.length < this.options.minLength ? (Autocomplete_var.value = "", clearTimeout(Autocomplete_var.timer), Autocomplete_var.matches = 0, this.suggestionsList.style.display = "none", c.call(this), o.call(this)) : this.input.value === Autocomplete_var.value && Autocomplete_var.type === Autocomplete_var.name || (Autocomplete_var.value = this.input.value, clearTimeout(Autocomplete_var.timer), Autocomplete_var.timer = setTimeout(function() {
                MG_Utils.ajaxGet({
                    url: "/video/search_autocomplete",
                    data: {
                        pornstars: r.options.showPornstars,
                        token: r.input.getAttribute("data-token"),
                        orientation: r.input.getAttribute("data-orientation"),
                        q: r.input.value,
                        alt: 0
                    },
                    success: function(e) {
                        ! function(e) {
                            var t = function(e) {
                                let t = !1,
                                    s = this,
                                    i = [],
                                    r = [],
                                    n = [],
                                    a = [],
                                    l = [],
                                    o = [];
                                if (e.queries instanceof Array && e.queries.length) {
                                    Autocomplete_var.matches = e.queries.length;
                                    for (var c in e.queries) {
                                        var h = L.call(s, e.queries[c], "video"),
                                            p = L.call(s, e.queries[c], "gifs");
                                        h = {
                                            id: c,
                                            href: h,
                                            value: e.queries[c]
                                        }, p = {
                                            id: c,
                                            href: p,
                                            value: e.queries[c]
                                        }, i.push(h), n.push(p)
                                    }
                                    s.suggestionElement.videoList = JSON.stringify(i), s.suggestionElement.gifList = JSON.stringify(n), t = !0
                                }
                                if (e.albums instanceof Array && e.albums.length) {
                                    for (var u in e.albums) {
                                        var d = L.call(s, e.albums[u], "photo");
                                        d = {
                                            id: u,
                                            href: d,
                                            value: e.albums[u]
                                        }, r.push(d), s.suggestionElement.photoList = JSON.stringify(r)
                                    }
                                    t = !0
                                }
                                if (e.pornstars instanceof Array && e.pornstars.length) {
                                    var g, f;
                                    for (f in e.pornstars) g = {
                                        id: f,
                                        href: "/pornstar/" + e.pornstars[f].slug,
                                        value: e.pornstars[f].name
                                    }, a.push(g), s.suggestionElement.pornstarList = JSON.stringify(a);
                                    t = !0
                                }
                                if (e.models instanceof Array && e.models.length) {
                                    var m, y;
                                    for (y in e.models) m = {
                                        id: y,
                                        href: "/model/" + e.models[y].slug,
                                        value: e.models[y].name
                                    }, l.push(m), s.suggestionElement.modelList = JSON.stringify(l);
                                    t = !0
                                }
                                if (e.channels instanceof Array && e.channels.length) {
                                    var v, S;
                                    for (S in e.channels) v = {
                                        id: S,
                                        href: "/channels/" + e.channels[S].slug,
                                        value: e.channels[S].name
                                    }, o.push(v), s.suggestionElement.channelList = JSON.stringify(o);
                                    t = !0
                                }
                                s.suggestionElement && s.suggestionElement.getVueInstance() && s.suggestionElement.getVueInstance().updateScroll();
                                return t
                            }.call(this, e);
                            t || (Autocomplete_var.matches = 0, this.suggestionElement.videoList = "", this.suggestionElement.gifList = "", this.suggestionElement.photoList = "", this.suggestionElement.pornstarList = "", this.suggestionElement.modelList = "", this.suggestionElement.channelList = "");
                            e && "true" === e.isDdBannedWord ? (this.suggestionElement.getVueInstance().isDDBannedWord = !0, this.suggestionsList.style.display = "none") : (this.suggestionElement.getVueInstance().isDDBannedWord = !1, this.suggestionsList.style.display = "block")
                        }.call(r, e), r.searchesWrapper.style.display = "none"
                    }
                })
            }, this.options.showDelay), this.suggestionsList.addEventListener("mouseenter", function() {
                var e = r.suggestionsListWrapper.scrollTop + 2;
                !MG_Utils.hasClass(document.querySelector(".noMatches"), "hidden") || "none" == document.querySelector(".js_searchSuggestionScroll").style.display || e + r.suggestionsListWrapper.clientHeight >= r.suggestionsListWrapper.scrollHeight ? MG_Utils.addClass(r.suggestionsFadeOutOverly, "hidden") : MG_Utils.removeClass(r.suggestionsFadeOutOverly, "hidden")
            }), r.suggestionsFadeOutOverly.addEventListener("click", function() {
                const e = document.querySelector(".js_searchSuggestionScroll"),
                    t = r.suggestionsListWrapper.clientHeight - e.offsetHeight;
                r.suggestionsListWrapper.scrollTo({
                    top: r.suggestionsListWrapper.scrollHeight,
                    behavior: "smooth"
                }), setTimeout(() => {
                    e.style.top = t + "px", MG_Utils.addClass(r.suggestionsFadeOutOverly, "hidden")
                }, 500)
            }), r.suggestionsListWrapper.addEventListener("scroll", function() {
                r.suggestionsListWrapper.scrollTop + 3 + r.suggestionsListWrapper.clientHeight >= r.suggestionsListWrapper.scrollHeight ? MG_Utils.addClass(r.suggestionsFadeOutOverly, "hidden") : MG_Utils.removeClass(r.suggestionsFadeOutOverly, "hidden")
            }))
        }

        function L(e, t) {
            var s = {};
            switch (t = "block" === this.suggestionsList.style.display && null !== t && "" !== t ? t : "video") {
                case "video":
                case "models":
                    s.string = "1" === isGay ? "gay/video/search" : "gay" == e.toLowerCase() ? "gayporn" : "video/search", s.query = "search", s.connective = "?";
                    break;
                case "photo":
                    s.string = "gay" == e.toLowerCase() || "1" === isGay ? "albums/gay" : "albums/female-straight-uncategorized", s.query = "search", s.connective = "?";
                    break;
                case "pornstars":
                    s.string = "gay" == e.toLowerCase() || -1 < e.toLowerCase().indexOf("gay") ? "gay/pornstars" : "1" === isGay ? "gay/pornstars/search" : "pornstars/search", s.query = "search", s.connective = "?";
                    break;
                case "channels":
                    s.string = "gay" == e.toLowerCase() || -1 < e.toLowerCase().indexOf("gay") ? "gay/channels" : "1" === isGay ? "gay/channels/search" : "channels/search", s.query = "channelSearch", s.connective = "?";
                    break;
                case "gifs":
                    s.string = "gay" == e.toLowerCase() || -1 < e.toLowerCase().indexOf("gay") ? "gay/gifs" : "1" === isGay ? "gay/gifs/search" : "gifs/search", s.query = "search", s.connective = "?"
            }
            return "gay" === e.toLowerCase() ? "/" + s.string : (e = (e = e.toLowerCase()).replace(/[—]/g, " ").replace(/\-/g, " "), e = (e = (e = encodeURIComponent(e)).replace(/%20/g, "+")).replace(/\++/g, "+"), "/" + s.string + s.connective + s.query + "=" + e)
        }

        function o() {
            this.searchesWrapper.style.display = "block", MG_Utils.removeClass(this.trendingListWrapper, "hidden")
        }

        function c() {
            let r = this;
            Autocomplete_var.timer = setTimeout(function() {
                var e, t = RecentSearches.get(),
                    s = (r.searchesWrapper.style.display = "block", t && t.reverse(), t.length && MG_Utils.removeClass(r.recentListWrapper, "hidden"), []);
                for (e in t) {
                    var i = L.call(r, t[e], "video"),
                        i = {
                            id: e,
                            href: i,
                            value: t[e]
                        };
                    s.push(i)
                }
                r.recentSearchesElement.searchList = JSON.stringify(s)
            }, this.options.showDelay)
        }
        return function() {
            return this.options = {
                minLength: 2,
                showDelay: 200,
                showPornstars: !0,
                formId: "search_form",
                inputId: "searchInput",
                submitBtnId: "btnSearch",
                suggestionsListId: "searchSuggestions",
                searchesWrapper: "searchesWrapper",
                recentListWrapper: "recentSearchesListWrapper",
                trendingListWrapper: "trendingSearchesListWrapper",
                trendingPMsWrapper: "pornstarSearchesListWrapper",
                clearInput: "clearInput",
                inputLabel: "#searchBarContainer label",
                fadeOutOverlySuggestions: "fadeOutOverlySuggestions",
                scrollableSearchSuggestion: "scrollableSearchSuggestion"
            }, this.form = document.getElementById(this.options.formId), this.input = document.getElementById(this.options.inputId), this.submitBtn = document.getElementById(this.options.submitBtnId), this.suggestionsList = document.getElementById(this.options.suggestionsListId), this.searchesWrapper = document.getElementById(this.options.searchesWrapper), this.suggestionElement = document.querySelector("suggestion-element") ? document.querySelector("suggestion-element") : null, this.recentSearchesElement = document.querySelector('search-list[type="recent"]'), this.recentListWrapper = document.querySelector("." + this.options.recentListWrapper), this.trendingListWrapper = document.querySelector("." + this.options.trendingListWrapper), this.trendingPMsWrapper = document.querySelector("." + this.options.trendingPMsWrapper), this.clearInput = document.getElementById(this.options.clearInput), this.inputLabel = document.querySelector(this.options.inputLabel), this.focusInput = focusSearchInput, this.currentType = null, this.cache = null, this.term = null, this.suggestionsFadeOutOverly = document.querySelector("." + this.options.fadeOutOverlySuggestions), this.suggestionsListWrapper = document.querySelector("." + this.options.scrollableSearchSuggestion), e || function() {
                this.input && (this.focusInput ? this.input.focus() : this.input.blur(), function() {
                    var t = this;
                    (function() {
                        var i = this;
                        MG_Utils.addEventHandler(this.input, "keyup", function(e) {
                            r.call(i, e)
                        }), MG_Utils.addEventHandler(this.input, "keypress", function(e) {
                            e = e.keyCode || e.charCode;
                            if (60 == e || 62 == e) return !1
                        }), MG_Utils.addEventHandler(document.body, "click", function(e) {
                            var t = e.target || e.srcElement,
                                s = i.searchesWrapper;
                            (s ? s.contains(t) : null) || !e.target || "searchInput" === e.target.id || "clearInput" === e.target.id || MG_Utils.hasClass(e.target, "searches") || MG_Utils.hasClass(e.target, "clearIcon") || MG_Utils.hasClass(e.target, "keepOpen") || MG_Utils.hasClass(e.target, "fadeOutOverlySuggestions") || MG_Utils.hasClass(e.target, "js_suggestionsScrollIcon") || (i.suggestionsList.style.display = "none", s.style.display = "none")
                        }), this.input.addEventListener("click", function(e) {
                            (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1, 0 === this.value.length ? (i.suggestionsList && (i.suggestionsList.style.display = "none"), c.call(i), o.call(i)) : r.call(i, e)
                        })
                    }).call(this), this.submitBtn && MG_Utils.addEventHandler(this.submitBtn, "click", function(e) {
                        s.call(t, e)
                    }), this.form && MG_Utils.addEventHandler(this.form, "submit", function(e) {
                        s.call(t, e)
                    }), this.clearInput && this.clearInput.addEventListener("click", function() {
                        t.suggestionsList.style.display = "none", t.recentListWrapper.style.display = "block", t.trendingListWrapper.style.display = "block", t.trendingPMsWrapper && (t.trendingPMsWrapper.style.display = "block"), t.input.value = "", t.input.focus(), t.input.click(), MG_Utils.addClass(this, "hidden"), t.inputLabel && MG_Utils.removeClass(t.inputLabel, "extraPadding"), "none" === window.getComputedStyle(t.searchesWrapper).display && (t.searchesWrapper.style.display = "block")
                    })
                }.call(this), e = this)
            }.call(this), e
        }
    }(),
    RecentSearches = (() => {
        let i = "recentSearch",
            r = LocalStorageManager.getInstance();

        function n() {
            var e = r.get(i);
            return !!e && JSON.parse(e)
        }

        function a(e) {
            var t, s = n();
            s ? (-1 !== (t = s.indexOf(e)) ? s.splice(t, 1) : r.set("newTermSearched", 1), 5 <= s.length && s.shift(), s.push(e), r.set(i, s)) : (r.set(i, [e]), r.set("newTermSearched", 1))
        }

        function s(e) {
            var t = n();
            t && (-1 !== (e = t.indexOf(e)) && t.splice(e, 1), r.set(i, t), t) && !t.length && ((e = document.querySelector(".recentSearchesListWrapper")) && (e.style.display = "none"), l())
        }

        function l() {
            const e = document.querySelector('search-list[type="trending"]'),
                t = e ? e.searchList : [];
            e && t && (e.searchList = "", setTimeout(function() {
                e.searchList = t
            }, 100))
        }
        return {
            add: a,
            get: n,
            remove: s,
            checkBannedWords: function() {
                const t = n();
                t && (function() {
                    var e = r.get("currentTimeStamp"),
                        t = (new Date).getTime();
                    if (!e || t > parseInt(e) + 72e5) return r.set("currentTimeStamp", t), 1;
                    return
                }() || r.get("newTermSearched")) && "function" == typeof validateBannedWords && validateBannedWords(t, !0, function(e) {
                    e && ("boolean" == typeof e ? t.pop() : -1 !== (e = t.indexOf(e)) && t.splice(e, 1), r.set(i, t))
                }), r.get("newTermSearched") && r.remove("newTermSearched")
            },
            initializeElement: function() {
                Vue.customElement("search-list", {
                    props: {
                        type: {
                            type: String,
                            required: !0
                        },
                        label: {
                            type: String,
                            required: !0
                        },
                        clearBtnText: {
                            type: String
                        },
                        seeMoreText: {
                            type: String
                        },
                        viewAllUrl: {
                            type: String
                        },
                        searchList: [String]
                    },
                    computed: {
                        parseData: function() {
                            var e = !!this.searchList && JSON.parse(this.searchList),
                                t = n();
                            return "trending" === this.type && e && 0 < t.length ? e.slice(0, 5) : e
                        },
                        mainClass: function() {
                            return this.type + "SearchesListWrapper"
                        },
                        topMostClass: function() {
                            var e = n();
                            if ((!e || e.length <= 0) && "trending" === this.type) return "trendingFirst"
                        },
                        emptyImgSrc: function() {
                            return "undefined" != typeof TOP_BODY ? TOP_BODY.emptyImgSrc : ""
                        }
                    },
                    methods: {
                        removeSearch: function(e, t) {
                            t.preventDefault(), s(e), t.target && t.target.parentElement && t.target.parentElement.parentElement && t.target.parentElement.parentElement.removeChild(t.target.parentElement)
                        },
                        recentSearchClick: function(e, t) {
                            let s = "",
                                i = Math.random() <= 1;
                            s = "recent" === this.type ? "Recent Searches" : "trending" === this.type ? "Trending Searches" : "Trending Pornstars and Models #" + (t + 1), "function" == typeof ga && i && ga("send", "event", "Search Bar", "click", s), a(e)
                        },
                        removeAllRecentSearch: function() {
                            var e = document.querySelector('search-list[type="recent"]'),
                                t = document.getElementById("recentSearchesList");
                            e && (e.searchList = ""), t && (t.style.display = "none"), r.remove(i), l()
                        }
                    },
                    watch: {
                        searchList: function(e, t) {
                            return e != t && setTimeout(function() {
                                var e, t;
                                e = document.querySelector('search-list[type="trending"] > div'), (t = n()) && t.length || e && MG_Utils.addClass(e, "firstSection")
                            }, 100), e != t
                        }
                    },
                    mounted: function() {
                        var e, t;
                        "trending" === this.type && (e = n(), t = document.querySelector(".trendingSearchesListWrapper"), !e || e.length <= 0) && t && MG_Utils.addClass(t, "firstSection")
                    },
                    template: `<div :class="[mainClass, {hidden: !parseData || !parseData.length}]">
                    <div class="label first recentFirst" v-if="type === 'recent' && parseData && parseData.length">
                        <span class="title">{{label}}</span>
                        <span class="clearAllBtn" @click="removeAllRecentSearch">{{clearBtnText}}</span>
                    </div>
                    <p :class="['label', 'first', topMostClass]" v-if="(type === 'trending' || type === 'pornstar') && parseData && parseData.length">{{label}}<a class="viewAll" v-if="type === 'pornstar' && parseData && parseData.length" :href="viewAllUrl">{{seeMoreText}}</a></p>
                    <ul>
                        <li v-for="(item, index) in parseData" :data-value="item.value">
                            <a v-if="!item.viewAllPMs" :class="['searches', {first: index == 0}]" :href="item.href" @click="type=='pornstar' ? recentSearchClick(item.value, index) : recentSearchClick(item.value)">
                                <img v-if="item.avatar" loading="lazy" :src="item.avatar">
                                {{item.value}}
                            </a>
                            <i v-if="type=='recent'" class="clearIcon ph-icon-clear" @click="removeSearch(item.value, $event)"></i>
                        </li>
                    </ul>
                </div>`
                })
            }
        }
    })();

function initSuggestionListComponent() {
    Vue.customElement("suggestion-list", {
        props: {
            dataTitle: {
                type: String,
                required: !0
            },
            type: {
                type: String,
                required: !0
            },
            selected: {
                type: Boolean,
                default: !1
            },
            noMatch: {
                type: String,
                required: !0
            },
            currentType: {
                type: String,
                required: !0
            },
            dataList: [String]
        },
        data: function() {
            return {
                inputField: document.getElementById("searchInput"),
                minLength: 4,
                maxLength: 10
            }
        },
        computed: {
            parseDataList: function() {
                return this.dataList ? JSON.parse(this.dataList) : {}
            },
            mainClass: function() {
                return this.type + "Suggestion"
            }
        },
        methods: {
            suggestionClick: function(e) {
                void 0 !== RecentSearches && RecentSearches.add(e)
            },
            highLightMatch: function(e) {
                let t = void 0 !== Autocomplete_var ? Autocomplete_var.value : "",
                    s = e.search(RegExp("" + t, "i"));
                if (0 <= s) {
                    t = t.toLowerCase();
                    var i = e.split(/\s|_/);
                    for (let e = 0; e < i.length; e++) i[e] = i[e].substr(0, 1).toUpperCase() + (1 < i[e].length ? i[e].substr(1, i[e].length).toLowerCase() : "");
                    e = (e = i.join(" ")).slice(0, s) + '<span class="soughtValue">' + t + "</span>" + e.slice(s + t.length)
                }
                return e
            },
            showLink: function(e) {
                return this.selected && e < this.maxLength || !this.selected && e < this.minLength ? "" : "displayNone"
            }
        },
        watch: {
            dataList: function(e, t) {
                return e != t
            }
        },
        template: `<div :class="['keepOpen', 'heading', mainClass, {hidden: !parseDataList || !parseDataList.length}, {'first': type==='video'}]" v-if="parseDataList && parseDataList.length">
                <p :class="['keepOpen', 'label', {'first': type==='video'}]" v-if="!selected">{{dataTitle}}</p>
                <a v-for="(item, index) in parseDataList" :href="item.href" class="keepOpen" @click="suggestionClick(item.value)" v-html="highLightMatch(item.value)" :data-value="item.value" :class="showLink(index)"></a>
            </div>
            <div v-else-if="(!parseDataList || (parseDataList && !parseDataList.length)) && currentType!=='all'">
                <p class="noMatches keepOpen">{{noMatch}}</p>
            </div>`
    })
}

function initSuggestionElementComponent() {
    Vue.customElement("suggestion-element", {
        props: {
            translation: {
                type: String,
                required: !0
            },
            videoList: [String],
            photoList: [String],
            pornstarList: [String],
            modelList: [String],
            channelList: [String],
            gifList: [String]
        },
        data: function() {
            return {
                inputField: document.getElementById("searchInput"),
                searchesWrapper: document.getElementById("searchesWrapper"),
                i18n: this.translation ? JSON.parse(this.translation) : {},
                types: this.translation ? JSON.parse(this.translation).types : [],
                defaultType: "all",
                currentType: "all",
                isDDBannedWord: !1,
                scrollableWrapper: null,
                scrollContainer: null,
                leftArrow: null,
                rightArrow: null,
                scrollBy: 300,
                scrollOffset: 0,
                setContainerWidthDiff: null
            }
        },
        computed: {
            noMatches: function() {
                var e = this.videoList ? JSON.parse(this.videoList) : {},
                    t = this.photoList ? JSON.parse(this.photoList) : {},
                    s = this.pornstarList ? JSON.parse(this.pornstarList) : {},
                    i = this.modelList ? JSON.parse(this.modelList) : {},
                    r = this.channelList ? JSON.parse(this.channelList) : {},
                    n = this.gifList ? JSON.parse(this.gifList) : {};
                return !(e && e.length || t && t.length || s && s.length || r && r.length || n && n.length || i && i.length)
            },
            isPremium: function() {
                return "undefined" != typeof premiumFlag && "1" == premiumFlag
            }
        },
        watch: {
            videoList: function(e, t) {
                return e != t
            },
            photoList: function(e, t) {
                return e != t
            },
            pornstarList: function(e, t) {
                return e != t
            },
            modelList: function(e, t) {
                return e != t
            },
            channelList: function(e, t) {
                return e != t
            },
            gifList: function(e, t) {
                return e != t
            },
            isDDBannedWord: function(e, t) {
                return e != t
            }
        },
        methods: {
            selectTab: function(e) {
                this.currentType = e, Autocomplete_var.type = "all" === e ? "video" : e;
                e = document.querySelectorAll("#searchesWrapper li, #searchSuggestions a");
                MG_Utils.removeClassMultiple(e, "selected"), this.inputField.value = Autocomplete_var.originalVal
            },
            setType: function() {
                var e, t = window.location.pathname,
                    s = t.split("/")[1];
                this.currentType = this.defaultType, s && ("gay" === s || "transgender" === s ? "gifs" === (e = t.split("/")[2]) ? this.currentType = "gifs" : "pornstars" === e && (this.currentType = "pornstars") : -1 !== (e = this.types.indexOf(s)) && "edit" !== t.split("/")[2] && (this.currentType = this.types[e]))
            },
            keyboardMoveHandler: function(e) {
                let t = e.keyCode || e.charCode,
                    s = document.getElementById("searchSuggestions"),
                    i = "all" === this.currentType ? '[class*="Suggestion"] ' : "." + this.currentType + "Suggestion ",
                    r = s.querySelectorAll(i + "a:not(.displayNone)"),
                    n = this.searchesWrapper.querySelectorAll("li"),
                    a = s.querySelector(".selected"),
                    l;
                40 != t && 38 != t || (r.length || n.length) && ("block" === this.searchesWrapper.style.display && (r = n, a = this.searchesWrapper.querySelector(".selected")), MG_Utils.removeClassMultiple(r, "selected"), a ? 40 == t ? l = a.length || a !== r[r.length - 1] ? (e = Array.prototype.indexOf.call(r, a), r[e + 1]) : r[0] : 38 == t && (l = a.length || a !== r[0] ? (e = Array.prototype.indexOf.call(r, a), r[e - 1]) : r[r.length - 1]) : (40 == t ? a = r[0] : 38 == t && (a = r[r.length - 1]), l = a), MG_Utils.addClass(l, "selected"), l.getAttribute("data-value") ? (this.inputField.value = l.getAttribute("data-value"), this.term = this.inputField.value) : this.inputField.value = Autocomplete_var.originalVal)
            },
            adjustTrendingWrapperWidth: function() {
                this.setContainerWidthDiff = this.scrollableWrapper && this.scrollContainer ? this.scrollContainer.clientWidth - this.scrollableWrapper.clientWidth : 0, this.setContainerWidthDiff = Math.sign(this.setContainerWidthDiff) ? this.setContainerWidthDiff : 0
            },
            calcOffset: function(e) {
                return this.adjustTrendingWrapperWidth(), Math.min(Math.max(e, 0), this.setContainerWidthDiff)
            },
            updateArrows: function() {
                this.scrollContainer && this.scrollableWrapper && (this.scrollContainer.clientWidth <= this.scrollableWrapper.clientWidth ? (this.scrollOffset = 0, this.scrollContainer.style.webkitTransform = "translateX(-" + this.scrollOffset + "px)", this.scrollContainer.style.transform = "translateX(-" + this.scrollOffset + "px)", this.leftArrow && MG_Utils.addClass(this.leftArrow, "noScroll"), this.rightArrow && MG_Utils.addClass(this.rightArrow, "noScroll")) : (this.leftArrow && MG_Utils.removeClass(this.leftArrow, "noScroll"), this.rightArrow && MG_Utils.removeClass(this.rightArrow, "noScroll")))
            },
            updateScroll: function() {
                this.scrollContainer && (0 === this.scrollOffset ? this.leftArrow && MG_Utils.addClass(this.leftArrow, "hide") : this.leftArrow && MG_Utils.removeClass(this.leftArrow, "hide"), this.scrollOffset === this.setContainerWidthDiff && 0 !== this.setContainerWidthDiff ? this.rightArrow && MG_Utils.addClass(this.rightArrow, "hide") : this.rightArrow && MG_Utils.removeClass(this.rightArrow, "hide")), this.updateArrows()
            },
            wheelEvent: function(e) {
                e.preventDefault(), this.scrollOffset += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY, this.scrollOffset = this.calcOffset(this.scrollOffset), this.scrollContainer.style.webkitTransform = "translateX(-" + this.scrollOffset + "px)", this.scrollContainer.style.transform = "translateX(-" + this.scrollOffset + "px)", this.updateScroll()
            },
            leftArrowClick: function() {
                this.scrollContainer && (this.scrollOffset -= this.scrollBy, this.scrollOffset = this.calcOffset(this.scrollOffset), this.scrollContainer.style.webkitTransform = "translateX(-" + this.scrollOffset + "px)", this.scrollContainer.style.transform = "translateX(-" + this.scrollOffset + "px)", this.updateScroll())
            },
            rightArrowClick: function() {
                this.scrollContainer && (this.scrollOffset += this.scrollBy, this.scrollOffset = this.calcOffset(this.scrollOffset), this.scrollContainer.style.webkitTransform = "translateX(-" + this.scrollOffset + "px)", this.scrollContainer.style.transform = "translateX(-" + this.scrollOffset + "px)", this.updateScroll())
            }
        },
        mounted: function() {
            this.setType(), this.inputField && this.inputField.addEventListener("keydown", this.keyboardMoveHandler);
            var e = document.querySelectorAll(".scrollableSearchSuggestion");
            "undefined" != typeof MG_Scroll && e && (e[0].style.maxHeight = window.innerHeight - 260 + "px", MG_Scroll.init({
                width: "auto",
                selector: e,
                height: "100%",
                color: "#2F2F2F",
                size: "4px",
                alwaysVisible: !0,
                railVisible: !0,
                railOpacity: 1,
                railColor: "transparent",
                distance: "5px",
                opacity: 1,
                railClass: "track3",
                barClass: "handle3 js_searchSuggestionScroll",
                wrapperClass: "wrapper3",
                wheelStep: 5,
                enLargeOnHover: !1
            }));
            let t = document.querySelector(".scrollableTabsContainer"),
                s = this;
            t && (this.scrollableWrapper = t.querySelector(".searchScrollableWrapper"), this.scrollContainer = t.querySelector(".searchScrollableWrapper ul"), this.leftArrow = t.querySelector(".searchLeftArrowWrapper"), this.rightArrow = t.querySelector(".searchRightArrowWrapper"), setTimeout(function() {
                s.adjustTrendingWrapperWidth(), s.scrollContainer && s.scrollContainer.addEventListener("wheel", s.wheelEvent), s.leftArrow && s.leftArrow.addEventListener("click", s.leftArrowClick), s.rightArrow && s.rightArrow.addEventListener("click", s.rightArrowClick), window.addEventListener("resize", s.adjustTrendingWrapperWidth), window.addEventListener("resize", s.updateScroll), s.updateArrows()
            }, 0))
        },
        template: `<div id="searchSuggestions" :class="['suggestions', 'keepOpen', {'noMatches' : noMatches}]">
                <div :class="['scrollableTabsContainer', 'keepOpen', {'hidden' : noMatches}]">
                    <div class="searchLeftArrowWrapper keepOpen hide">
                        <span class="arrow keepOpen"><i class="ph-icon-chevron-left"></i></span>
                    </div>
                    <div class="searchScrollableWrapper">
                        <ul class="keepOpen">
                            <li v-for="value in types" :class="['keepOpen', value, {'active' : value == currentType}]" @click="selectTab(value)">{{i18n[value]}}</li>
                        </ul>
                    </div>
                    <div class="searchRightArrowWrapper keepOpen">
                        <span class="arrow keepOpen"><i class="ph-icon-chevron-right"></i></span>
                    </div>
                </div>
                <p :class="['noMatches', 'keepOpen', {hidden: !noMatches || isDDBannedWord}]">{{i18n.noMatch}}</p>
                <div class="scrollableSearchSuggestion">
                    <suggestion-list :data-title="i18n.video" type="video" :selected="currentType === 'video'" :data-list="videoList" v-if="(currentType === 'all' || currentType === 'video') && !noMatches" :no-match="i18n.noMatch" :current-type="currentType"></suggestion-list>
                    <suggestion-list :data-title="i18n.channels" type="channels" :selected="currentType === 'channels'" :data-list="channelList" v-if="(currentType === 'all' || currentType === 'channels') && !noMatches" :no-match="i18n.noMatch" :current-type="currentType"></suggestion-list>
                    <suggestion-list :data-title="i18n.models" type="models" :selected="currentType === 'models'" :data-list="modelList" v-if="(currentType === 'all' || currentType === 'models') && !noMatches" :no-match="i18n.noMatch" :current-type="currentType"></suggestion-list>
                    <suggestion-list :data-title="i18n.pornstars" type="pornstars" :selected="currentType === 'pornstars'" :data-list="pornstarList" v-if="(currentType === 'all' || currentType === 'pornstars') && !noMatches" :no-match="i18n.noMatch" :current-type="currentType"></suggestion-list>
                    <suggestion-list :data-title="i18n.gifs" type="gifs" :selected="currentType === 'gifs'" :data-list="gifList" v-if="!isPremium && (currentType === 'all' || currentType === 'gifs') && !noMatches" :no-match="i18n.noMatch" :current-type="currentType"></suggestion-list>
                    <suggestion-list :data-title="i18n.photo" type="photo" :selected="currentType === 'photo'" :data-list="photoList" v-if="!isPremium && (currentType === 'all' || currentType === 'photo') && !noMatches" :no-match="i18n.noMatch" :current-type="currentType"></suggestion-list>
                </div>
                <div class="fadeOutOverlySuggestions hidden"><i class="ph-icon-chevron-right js_suggestionsScrollIcon"></i></div>
            </div>`
    })
}
void 0 !== RecentSearches && (RecentSearches.initializeElement(), RecentSearches.checkBannedWords()), initSuggestionListComponent(), initSuggestionElementComponent(), MG_Utils.domReady(function() {
    const t = document.querySelector(".fadeOutOverly"),
        s = document.getElementById("searchesWrapperScroll");
    var e = document.querySelectorAll("#searchesWrapperScroll");
    "undefined" != typeof MG_Scroll && e.length && (e[0].style.maxHeight = window.innerHeight - 210 + "px", MG_Scroll.init({
        width: "auto",
        selector: e,
        height: "100%",
        color: "#2F2F2F",
        size: "4px",
        alwaysVisible: !0,
        railVisible: !0,
        railOpacity: 1,
        railColor: "transparent",
        distance: "5px",
        opacity: 1,
        railClass: "track3",
        barClass: "handle3 serachesScroll",
        wrapperClass: "wrapper3",
        wheelStep: 5,
        enLargeOnHover: !1
    }));
    const i = document.querySelector(".serachesScroll");

    function r() {
        "none" == i.style.display || 0 == i.offsetHeight ? MG_Utils.addClass(t, "hidden") : MG_Utils.removeClass(t, "hidden")
    }
    r(), window.addEventListener("resize", function() {
        var e = s,
            t = document.querySelector(".scrollableSearchSuggestion");
        e && (e.style.maxHeight = window.innerHeight - 210 + "px"), t && (t.style.maxHeight = window.innerHeight - 260 + "px"), r()
    }), s.addEventListener("scroll", function() {
        s.scrollTop + 2 + s.clientHeight >= s.scrollHeight ? MG_Utils.addClass(t, "hidden") : MG_Utils.removeClass(t, "hidden")
    }), s.addEventListener("mouseenter", function() {
        s.scrollTop + 2 + s.clientHeight >= s.scrollHeight || r()
    }), t.addEventListener("click", function() {
        var e = s.clientHeight - i.offsetHeight;
        MG_Utils.hasClass(document.querySelectorAll("html")[0], "safari") ? s.scroll(0, 1e3) : s.scrollTo({
            top: s.scrollHeight,
            behavior: "smooth"
        }), i.style.top = e + "px", MG_Utils.addClass(t, "hidden")
    })
});
"object" != typeof console && (console = {
    log: function() {},
    warn: function() {},
    error: function() {},
    info: function() {}
});
var friendRequestModal, tooltipPromoContent, tooltipPromoRemove, disablePlaylistPlusButon = "false",
    friendRequestModalContent = document.getElementById("friendRequestModal");

function appendedTasteProfile(e) {
    e = document.getElementById(e);
    if (e && storageAvailable("localStorage") && localStorage.tasteCategories) return e.value = localStorage.getItem("tasteCategories")
}

function scrollToElement(e, t) {
    for (var l = document.body.scrollTop, e = document.querySelector(e), o = MG_Utils.offset(e).top, i = l; i < o; i += t) document.body.scrollTop = i
}

function getCookie(e) {
    for (var t, l, o = document.cookie.split(";"), i = 0; i < o.length; i++)
        if (t = o[i].substr(0, o[i].indexOf("=")), l = o[i].substr(o[i].indexOf("=") + 1), (t = t.replace(/^\s+|\s+$/g, "")) == e) return unescape(l)
}

function setCookie(e, t, l) {
    var o;
    "undefined" != typeof CookieHelper && !CookieHelper.canAdd(e) || ((o = new Date).setDate(o.getDate() + l), t = escape(t) + (null == l ? "" : "; expires=" + o.toUTCString()), document.cookie = e + "=" + t)
}

function builtModal(e, t, l, o, i, a) {
    void 0 !== friendRequestModal && friendRequestModal.openModal();
    var n = document.getElementById("messageRequest"),
        s = document.getElementById("preventClick"),
        r = document.getElementById("friendRequestForm"),
        c = document.getElementById("fromPic"),
        a = (userId = document.getElementById("friendRequestUserId"), elements = document.querySelectorAll(".request-modal .last"), s.setAttribute("data-refresh", a), s.setAttribute("data-user-id", e), r.setAttribute("action", i), c.setAttribute("src", t), "<a href='" + o + "'></a>"),
        d = document.createElement("div");
    for (d.innerHTML = a; d.firstChild;) {
        var u = d.firstChild;
        c.parentNode.insertBefore(u, c), u.appendChild(c)
    }
    n.value = n.getAttribute("data-val"), MG_Utils.setText(userId, e);
    for (var m = 0; m < elements.length; m++) elements[m].innerHTML = 'You are about to add <a href="' + o + '"> ' + l + ' </a> as a friend. We will then notify <a href="' + o + '"> ' + l + " </a> who will then confirm that you are friends."
}

function recal() {
    var e = document.getElementById("messageRequest"),
        t = document.getElementById("chars_left"),
        e = 1e3 - e.value.length;
    t.innerHTML = Math.max(e, 0) + " characters left.", e < 0 && MG_Utils.appendString(t, ' <span style = "color: #F00">You have over 1000 characters.<br />Anything past 1000 will get chopped off.</span>')
}

function getUrlVars() {
    var o = {};
    return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, t, l) {
        o[t] = l
    }), o
}

function nl2br(e) {
    return e.replace(/\n/g, "<br />")
}

function strpos(e, t, l) {
    e = (e + "").indexOf(t, l || 0);
    return -1 !== e && e
}

function updateQueryStringParameter(e, t, l) {
    var o = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
        i = -1 !== e.indexOf("?") ? "&" : "?";
    return e.match(o) ? e.replace(o, "$1" + t + "=" + l + "$2") : e + i + t + "=" + l
}

function initTooltip() {
    var l = document.getElementById("tooltip");

    function o(e, t) {
        l.style.left = t.left - l.clientWidth / 2 + Math.floor(e.clientWidth / 2) - 1 + "px", l.style.left = parseFloat(l.style.left) < 0 ? "0" : l.style.left, l.classList.remove("tooltipSmall"), l.style.width = "auto"
    }
    l && (document.body.addEventListener("mouseenter", function(e) {
        var t, e = e.target;
        e && MG_Utils.hasClass(e, "tooltipTrig") && (t = e.getAttribute("data-title"), l.innerHTML = "<div class='tooltip-sub'>" + t + " </div></div><div class='arrow-down'></div>", l.style.display = "block", MG_Utils.addClass(l, e.getAttribute("type")), t = e, e = MG_Utils.offset(t), l.style.left = e.left - l.clientWidth / 2 + Math.floor(t.clientWidth / 2) - 1 + "px", window.onresize = function() {
            l.style.left = 0
        }, t.classList.contains("pornstarPrev") && parseFloat(l.style.left) < -3 ? (l.classList.add("tooltipSmall"), l.style.width = l.clientWidth + parseFloat(l.style.left) - 14 + "px", l.style.left = "0") : o(t, e), l.style.top = e.top - l.clientHeight - l.querySelector(".arrow-down").clientTop + "px")
    }, !0), document.body.addEventListener("mouseleave", function(e) {
        e = e.target;
        e && MG_Utils.hasClass(e, "tooltipTrig") && (l.style.display = "none")
    }, !0))
}

function renderCommentLinks() {
    for (var e, t = document.querySelectorAll(".commentUsernameLink"), l = 0; l < t.length; l++) e = t[l], MG_Utils.hasClass(e, "processed") || (MG_Utils.addClass(e, "processed"), e.getAttribute("data-href") ? e.innerHTML = '<a href="' + e.getAttribute("data-href") + '">@' + e.getAttribute("data-username") + "</a>" : e.innerHTML = "<span>@" + e.getAttribute("data-username") + "</span>");
    var o = document.querySelectorAll(".js_taggable");
    if (0 < o.length) {
        for (l = 0; l < o.length; l++) MG_Utils.empty(o[l]);
        friendList = []
    }
}
friendRequestModalContent && (friendRequestModal = new MG_Modal({
    content: friendRequestModalContent,
    className: "friendRequestContainer"
})), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
    var l, o;
    if (null == this) throw new TypeError(" this is null or not defined");
    var i, a = Object(this),
        n = a.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    for (1 < arguments.length && (l = t), o = 0; o < n;) o in a && (i = a[o], e.call(l, i, o, a)), o++
}), document.querySelector(".tooltipPromo") && document.querySelector("#headerUpgradePremiumBtn") && (tooltipPromoRemove = (tooltipPromoContent = document.querySelector(".tooltipPromo")).querySelector("span"), MG_Utils.addEventHandler(tooltipPromoRemove, "click", function(e) {
    e.stopPropagation(), setCookie("promoTooltip", "1"), tooltipPromoContent.remove()
}));
var blurTimeout = "";

function focusReply() {
    if (document.querySelectorAll("form.streamCommentFrom"))
        for (var e = document.querySelectorAll("form.streamCommentFrom"), t = 0; t < e.length; t++) MG_Utils.addEventHandler(e[t], "blur", function(e) {
            blurTimeout = setTimeout(function() {
                var e = MG_Utils.closest(this, "form"),
                    t = e.querySelectorAll(".streamSubmitInput"),
                    e = e.querySelectorAll(".streamSections");
                t && MG_Utils.addClass(t, "focusReply"), t && MG_Utils.addClass(t, "hidden"), e && MG_Utils.addClass(e, "hidden")
            }, 200)
        });
    if (document.querySelectorAll(".streamTextArea")) {
        var l = document.querySelectorAll(".streamTextArea");
        MG_Utils.setText(l, "");
        for (t = 0; t < l.length; t++) MG_Utils.addEventHandler(l[t], "focus", function(e) {
            var t = this.value,
                l = MG_Utils.closest(this, ".streamSubmitInput"),
                o = MG_Utils.closest(this, ".streamSections");
            "Click to leave a comment" === t && (this.value = ""), l && MG_Utils.addClass(l, "showme"), o && MG_Utils.addClass(o, "showme"), MG_Utils.triggerEvent(this, "resize")
        })
    }
}

function openReply() {
    if (document.querySelectorAll(".reply a"))
        for (var t, l, o, i, e = document.querySelectorAll(".reply a"), a = 0; a < e.length; a++) MG_Utils.addEventHandler(e[a], "click", function(e) {
            e = e || window.event, o = MG_Utils.closest(this, ".feedItemSection"), t = o.querySelector(".postingForm"), l = o.querySelector(".formAvatar"), o = o.querySelector(".formText"), i = o.querySelector("textarea"), o.querySelector(".js_taggable"), MG_Utils.addClass(this, "hideme"), MG_Utils.addClass(t, "showme"), MG_Utils.addClass(l, "showme"), MG_Utils.addClass(o, "showme"), MG_Utils.setText(i, ""), MG_Utils.triggerEvent(i, "click")
        })
}

function addShareExternal(e, t, l) {
    WIDGET_SHARE.shareButtonsLoaded ? "function" == typeof e && e() : (WIDGET_SHARE.shareButtonsLoaded = !0, void 0 === t && (t = WIDGET_SHARE.urlShare), void 0 === l && (l = WIDGET_SHARE.shareTitle), 0 < document.querySelectorAll("a.sharesTwitter").length && (t = (e = document.querySelectorAll("a.sharesTwitter")[0]).getAttribute("href"), e.setAttribute("href", updateQueryStringParameter(t, "text", encodeURIComponent(l)))), 0 < document.querySelectorAll("a.sharesReddit").length && (t = (e = document.querySelectorAll("a.sharesReddit")[0]).getAttribute("href"), e.setAttribute("href", updateQueryStringParameter(t, "title", encodeURIComponent(l)))), 0 < document.querySelectorAll("a.sharesTumblr").length && (t = (e = document.querySelectorAll("a.sharesTumblr")[0]).getAttribute("href"), e.setAttribute("href", updateQueryStringParameter(t, "t", encodeURIComponent(l)))), 0 < document.querySelectorAll("a.sharesStubleUpon").length && (t = (e = document.querySelectorAll("a.sharesStubleUpon")[0]).getAttribute("href"), e.setAttribute("href", updateQueryStringParameter(t, "title", encodeURIComponent(l)))), 0 < document.querySelectorAll("a.sharesBlogger").length && (t = (e = document.querySelectorAll("a.sharesBlogger")[0]).getAttribute("href"), e.setAttribute("href", updateQueryStringParameter(t, "n", encodeURIComponent(l)))))
}
var modelNotificationList, VideoPreview = function() {
    "use strict";
    var h, M = 300;

    function g(e, t, l) {
        e.style.opacity = t, e.style.width = l
    }

    function o(e) {
        var o, i, t, l, a, n, s, r, c, d, u, m, f, v, p, y;
        MG_Utils.hasClass(e.target, "js-videoPreview") && !MG_Utils.hasClass(e.target, "activeVideo") && (o = e.target), MG_Utils.hasClass(e.target, "premiumHolder") && (o = MG_Utils.closest(e.target, ".img").querySelector(".js-videoPreview")), (o = MG_Utils.hasClass(e.target, "premiumLockedVideo") || MG_Utils.hasClass(e.target, "fade") ? e.target.querySelector(".js-videoPreview") : o) && (i = o.parentNode, e = MG_Utils.closest(o, ".phimage"), t = e ? e.querySelector(".preloadLine") : void 0, l = function() {
            var e, t = document.createElement("div"),
                l = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (e in l)
                if (void 0 !== t.style[e]) return l[e]
        }(), a = MG_Utils.hasClass(o, "js-menuSwap") ? o.getAttribute("data-image") : o.getAttribute("data-mediumthumb"), n = e ? e.querySelector(".privateOverlay") : void 0, s = i.querySelector(".watchedVideoText, .hideOnHover"), e = e ? e.querySelector(".modelThumbnail") : void 0, r = "undefined" != typeof BrowserDetect && "Safari" == BrowserDetect.browser, c = "undefined" != typeof New_Homepage_Design && New_Homepage_Design ? i.parentElement.querySelectorAll(".hideOnPreview") : null, t && g(t, 1, "100%"), (y = e) && -1 === y.className.indexOf("loaded") && (d = y.querySelector(".js-viewDetails"), u = y.querySelector(".modelThumbnailOverlay"), e = u.dataset.videoId, m = y.querySelector(".js-video-thumb-sold .amount"), f = y.querySelector(".js-video-thumb-earnings span"), v = y.querySelector(".spinner"), p = void 0 !== p ? p : "", MG_Utils.ajaxCall({
            url: MODEL_OVERLAY_THUMBNAIL.ajaxUrl,
            type: "POST",
            data: {
                video_id: e,
                token: p
            },
            dataType: "json",
            success: function(e) {
                null != e && (y.className += " loaded", m.innerHTML = e.sold, f.innerHTML = e.earned, d.href = e.url, MG_Utils.removeClass(u, "hidden"), v.className += " hidden")
            }
        })), MG_Utils.hasClass(o, "activeVideo") || i.querySelector(".videoPreviewEl") || n || (h = setTimeout(function() {
            s && MG_Utils.addClass(s, "hide"), c && MG_Utils.addClassMultiple(c, "hide");
            l = o.getAttribute("data-mediabook"), e = a, (t = document.createElement("video")).autoplay = !0, t.className = "videoPreviewEl", t.loop = "loop", t.muted = "muted", t.src = l, t.poster = e;
            var e, t, l = t;
            l && l.addEventListener("loadeddata", function() {
                MG_Utils.addClass(o, "activeVideo")
            }), i.appendChild(l), l && r && l.load()
        }, M)), t) && l && t.addEventListener(l, function() {
            t.style.opacity = 0
        })
    }

    function i(e) {
        if (MG_Utils.hasClass(e.target, "js-videoPreview") && MG_Utils.hasClass(e.target, "activeVideo") && (l = e.target), MG_Utils.hasClass(e.target, "premiumHolder") && (l = closestElement(e.target, ".img").querySelector(".js-videoPreview")), (MG_Utils.hasClass(e.target, "premiumLockedVideo") || MG_Utils.hasClass(e.target, "fade") && e.target.querySelector(".js-videoPreview") && !MG_Utils.hasClass(e.target.querySelector(".js-videoPreview"), "activeVideo")) && (l = e.target.querySelector(".js-videoPreview")), l = MG_Utils.hasClass(e.target, "fade") && e.target.querySelector(".js-videoPreview") && MG_Utils.hasClass(e.target.querySelector(".js-videoPreview"), "activeVideo") && e.relatedTarget && "IMG" !== e.relatedTarget.nodeName ? e.target.querySelector(".js-videoPreview") : l) {
            var e = l.parentNode,
                t = e.querySelectorAll(".videoPreviewEl"),
                l = MG_Utils.closest(l, ".phimage"),
                l = l ? l.querySelector(".preloadLine") : void 0,
                o = e.querySelector(".watchedVideoText, .hideOnHover"),
                i = document.querySelectorAll(".activeVideo"),
                e = "undefined" != typeof New_Homepage_Design && New_Homepage_Design ? e.parentElement.querySelectorAll(".hideOnPreview") : null;
            if (window.clearTimeout(h), l && g(l, 0, 0), o && MG_Utils.removeClass(o, "hide"), e && MG_Utils.removeClassMultiple(e, "hide"), t.length && [].forEach.call(t, function(e) {
                    e.parentNode.removeChild(e)
                }), i.length)
                for (var a = 0; a < i.length; a++) MG_Utils.removeClass(i[a], "activeVideo")
        }
    }
    return {
        getTarget: function() {
            var e, t, l = "undefined" != typeof BrowserDetect && "Safari" == BrowserDetect.browser;
            if (document.createElement("video").play && (l || function() {
                    var e = document.createElement("video"),
                        t = !1;
                    try {
                        (t = !!e.canPlayType) && ((t = new Boolean(t)).webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t = "maybe" == t.webm || "probably" == t.webm)
                    } catch (e) {
                        console.log(e)
                    }
                    return t
                }())) return l = arguments[0], l = document.querySelectorAll("." + l), e = l.length, t = document.querySelector("body"), MG_Utils.addEventHandler(t, "mouseover", o), MG_Utils.addEventHandler(t, "mouseout", i), void(0 < e && MG_Utils.removeClassMultiple(l, "js-videoThumbFlip"));
            document.querySelector("body").addEventListener("mouseover", o)
        }
    }
}();

function removeProfileItem(e, t) {
    MG_Utils.ajaxCall({
        url: e,
        type: "POST"
    });
    var l, e = document.querySelectorAll("#" + t),
        o = MG_Utils.closest(e[0], ".videoSection"),
        i = 0,
        e = (e[0].parentNode.removeChild(e[0]), 0 == document.querySelectorAll("#" + t).length && (i += 1), o.querySelectorAll(".showingInfo .totalSpan")),
        t = o.querySelectorAll(".showingInfo .videoSpan");
    (e || t) && (2 <= o.querySelectorAll(".showingInfo span").length && (l = parseInt(t[0].textContent, 10)), o = parseInt(e[0].textContent, 10), vVideos = l, vVideos -= 1, o -= i, e.length && (e[0].innerHTML = o), t.length) && (t[0].innerHTML = vVideos)
}

function removeItem(e, t, l, o) {
    MG_Utils.ajaxCall({
        url: e,
        data: {
            id: t
        },
        type: "POST"
    });
    e = document.querySelectorAll("#" + l);
    e[0].parentNode.removeChild(e[0])
}

function removeItemSimple(e, t) {
    MG_Utils.ajaxCall({
        url: e,
        type: "POST"
    });
    e = document.querySelectorAll("#" + t);
    e[0].parentNode.removeChild(e[0])
}
0 != document.querySelectorAll("#modelNotificationList").length && (modelNotificationList = (modelNotificationList = document.querySelectorAll("#modelNotificationList"))[0].innerHTML);
var myInt, cacheAjaxNotif = [],
    offset = [5, 5, 5],
    limit = 5,
    scrollLimit = [0, 0, 0];

function htmlspecialchars_decode(e) {
    return e = "string" == typeof e ? (e = (e = (e = (e = e.replace(/&amp;/g, "&")).replace(/&quot;/g, '"')).replace(/&#039;/g, "'")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">") : e
}

function createMailAlert(e) {
    var t, l;
    !e.lastMessageIdReceived && !e.lastMessageSent || "0000-00-00 00:00:00" == e.lastAction || e.profileSpammer || (t = "", e.lastMessageIdReceived && e.lastMessageIdSent > e.lastMessageIdReceived ? (e.lastMessageSent = e.lastMessageSent, t = e.lastMessageSent) : e.lastMessageIdReceived ? (e.lastMessageReceived = e.lastMessageReceived, t = e.lastMessageReceived) : e.lastMessageIdSent && (e.lastMessageSent = e.lastMessageSent, t = e.lastMessageSent), t = (t = escapeHtml(unEscapeHtml(t))).replace(/{{phTransactionIcon}}/g, '<i class="transactionIcon"></i>'), l = (l = document.querySelectorAll("ul#modelNotificationList > li.messageTemplate"))[0].cloneNode(!0), document.querySelectorAll("ul#modelNotificationList")[0].appendChild(l), MG_Utils.removeClass(l, "messageTemplate"), MG_Utils.addClass(l, e.status), MG_Utils.addClass(l, "newElement"), document.querySelectorAll(".newElement")[0].setAttribute("data-link", e.link), document.querySelectorAll(".newElement .js-messageLink")[0].setAttribute("data-link", e.link), document.querySelectorAll(".newElement img")[0].setAttribute("src", e.profileImage), document.querySelectorAll(".newElement .from")[0].innerHTML = e.profileUsername, document.querySelectorAll(".newElement .userProfileLink")[0].setAttribute("href", e.profileLink), document.querySelectorAll(".newElement .userProfileLink.from")[0].setAttribute("href", e.profileLink), document.querySelectorAll(".newElement .message")[0].innerHTML = t, document.querySelectorAll(".newElement .date")[0].innerHTML = e.lastActionNice, e.isFanClubChat && (document.querySelectorAll(".newElement .js-iconPlaceHolder")[0].className += " fanOnlyIcon"), e.hasTransaction && (document.querySelectorAll(".newElement .js-transactionIconPlaceHolder")[0].className += " ph-icon-badge-group"), e.profileVerified && (document.querySelectorAll(".newElement .js-verifiedIcon")[0].className += " verified-icon"), l && l.addEventListener("click", function() {
        window.location.href = this.getAttribute("data-link")
    }), document.querySelectorAll(".newElement")[0].style.display = "block", MG_Utils.removeClass(l, "newElement"))
}

function createfriendRequestAlert(e, t, l, o, i, a, n, s) {
    var r = "manageRequest(" + n + ", 1, '" + l + "', '" + o + "'); ga('send', 'event', 'Friend Requests', 'click', 'Accept Friend');",
        c = "manageRequest(" + n + ", 0, '" + l + "', '" + o + "'); ga('send', 'event', 'Friend Requests', 'click', 'Decline Friend');",
        d = (d = document.querySelectorAll("ul#modelNotificationList > li.friendRequestTemplate"))[0].cloneNode(!0);
    document.querySelectorAll("ul#modelNotificationList")[0].appendChild(d), MG_Utils.removeClass(d, "friendRequestTemplate"), MG_Utils.addClass(d, "newElement"), d.setAttribute("id", "request_" + n), document.querySelectorAll(".newElement img")[0].setAttribute("src", e), document.querySelectorAll(".newElement .userProfileLink")[0].setAttribute("href", o), document.querySelectorAll(".newElement .userProfileLink.from")[0].setAttribute("href", o), document.querySelectorAll(".newElement .userProfileLink.from")[0].innerHTML = l, "1" == t ? initTooltip() : document.querySelectorAll(".newElement .js-verifiedIcon")[0].style.display = "none", document.querySelectorAll(".newElement .message")[0].innerHTML = i, document.querySelectorAll(".newElement .date")[0].innerHTML = a, document.querySelectorAll(".newElement button.confirm")[0].setAttribute("onclick", r), document.querySelectorAll(".newElement button.reject")[0].setAttribute("onclick", c), document.querySelectorAll(".newElement div.btnFlag")[0].setAttribute("data-userid", n), document.querySelectorAll(".newElement")[0].style.display = "block", MG_Utils.removeClass(d, "newElement")
}

function noAlert(e) {
    document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", 0), document.querySelectorAll("ul#modelNotificationList > li")[0].style.display = "none", document.querySelectorAll("ul#modelNotificationList > li.noNewItem")[0].style.display = "block", document.querySelectorAll("ul#modelNotificationList > li.noNewItem > span")[0].innerHTML = e
}

function insertNotificationContent() {
    document.querySelectorAll("#notificationBox #loadingDiv")[0].style.display = "block", document.getElementById("scrollNotif").style.height = "50%";
    var e = document.querySelectorAll("#notificationBox")[0].getAttribute("type");
    for (var t = document.querySelectorAll("ul#modelNotificationList > li,.handle3, .track3"), l = t.length - 1; 0 <= l; l--) t[l].style.display = "none";
    if (initScroll(), "messageContent" == e)
        if (ga("send", "event", "Inbox", "click", "Inbox"), document.querySelectorAll("#notificationBox .headerBox a.headerLink")[0].setAttribute("href", messageViewAll), document.querySelectorAll("#notificationBox .footerBox a")[0].setAttribute("href", messageViewAll), MG_Utils.addEventHandler(document.querySelectorAll("#notificationBox .footerBox a")[0], "click", function(e) {
                ga("send", "event", "Inbox", "click", "See All")
            }), cacheAjaxNotif[0]) {
            document.querySelectorAll("#modelNotificationList")[0].innerHTML = cacheAjaxNotif[0], document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", cacheAjaxNotif[3]), document.querySelectorAll("#notificationBox #loadingDiv")[0].style.display = "none";
            for (var o = document.querySelectorAll(".js-messageLink"), i = o.length - 1; 0 <= i; i--) MG_Utils.addEventHandler(o[i], "click", function(e) {
                window.location.href = this.getAttribute("data-link")
            });
            initScroll()
        } else MG_Utils.ajaxCall({
            type: "GET",
            data: {
                limit: 5,
                token: token
            },
            url: "/chat/threads?limit=5&reset=1",
            dataType: "json",
            success: function(t) {
                if ('"EXPIRED"' == t) document.location.reload();
                else {
                    if (0 == t.jsonNonBlockedThreadsCount) noAlert("messages");
                    else {
                        let e = 0;
                        for (var l in t.jsonThreads) e < 5 && createMailAlert(t.jsonThreads[l]), e++;
                        console.log(e), document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", t.count), document.querySelectorAll("ul#modelNotificationList > li.noNewItem")[0].style.display = "none", initScroll()
                    }
                    cacheAjaxNotif[0] = document.querySelectorAll("#modelNotificationList")[0].innerHTML, cacheAjaxNotif[3] = document.querySelectorAll("#notificationBox")[0].getAttribute("data-count"), document.querySelectorAll("#notificationBox #loadingDiv")[0].style.display = "none"
                }
            }
        });
    else "requestContent" == e ? (ga("send", "event", "Friend Requests", "click", "Friend Requests"), document.querySelectorAll("#notificationBox .footerBox a")[0].setAttribute("href", requestViewAll), document.querySelectorAll("#notificationBox .headerBox a.headerLink")[0].setAttribute("href", requestViewAll), MG_Utils.addEventHandler(document.querySelectorAll("#notificationBox .footerBox a")[0], "click", function(e) {
        ga("send", "event", "Friend Requests", "click", "See All")
    }), cacheAjaxNotif[1] ? (document.querySelectorAll("#modelNotificationList")[0].innerHTML = cacheAjaxNotif[1], document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", cacheAjaxNotif[4]), document.querySelectorAll("#notificationBox #loadingDiv")[0].style.display = "none", initScroll()) : MG_Utils.ajaxCall({
        url: "/user/ajaxGetFriendRequests",
        type: "GET",
        data: {
            limit: 5,
            token: token
        },
        dataType: "json",
        success: function(e) {
            if ('"EXPIRED"' == e) document.location.reload();
            else {
                if (0 == e.count) noAlert(WiDGET_NOTIFICATION_ICONS.noNewFriendRequests);
                else {
                    for (var t = 0; t < 5; t++) createfriendRequestAlert(e.datas[t].avatar_url, e.datas[t].verified, e.datas[t].username, e.datas[t].user_link, e.datas[t].message, e.datas[t].request_date, e.datas[t].user_id, e.autoSubscribeFriendRequestsReceived);
                    document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", e.count), document.querySelectorAll("ul#modelNotificationList > li.noNewItem")[0].style.display = "none", initScroll()
                }
                cacheAjaxNotif[1] = document.querySelectorAll("#modelNotificationList")[0].innerHTML, cacheAjaxNotif[4] = document.querySelectorAll("#notificationBox")[0].getAttribute("data-count"), document.querySelectorAll("#notificationBox #loadingDiv")[0].style.display = "none"
            }
        }
    })) : "notifContent" == e && (ga("send", "event", "Notifications", "click", "Notifications"), document.querySelectorAll("#notificationBox .headerBox a#notifViewAll")[0].setAttribute("href", notifViewAll), document.querySelectorAll("#notificationBox .headerBox a.headerLink")[0].setAttribute("href", notifViewAll), MG_Utils.addEventHandler(document.querySelectorAll("#notificationBox .headerBox a#notifViewAll")[0], "click", function(e) {
        ga("send", "event", "Notifications", "click", "See All")
    }), cacheAjaxNotif[2] ? (document.querySelectorAll("#modelNotificationList")[0].innerHTML = cacheAjaxNotif[2], document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", cacheAjaxNotif[5]), document.querySelectorAll("#notificationBox #loadingDiv")[0].style.display = "none", initScroll()) : MG_Utils.ajaxCall({
        url: "/stream/notifications_mini",
        type: "GET",
        data: {
            limit: 5,
            token: token
        },
        dataType: "json",
        success: function(e) {
            var t = e.html;
            "REFRESH" == e ? document.location.reload() : e ? (t = JSON.parse(JSON.stringify(t).replace("#*", "").replace("*#", "")), document.querySelectorAll("#modelNotificationList")[0].innerHTML += t, document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", e.count), leaveModal(), initScroll()) : noAlert("notifications"), countAll = e.count, cacheAjaxNotif[2] = document.querySelectorAll("#modelNotificationList")[0].innerHTML, cacheAjaxNotif[5] = document.querySelectorAll("#notificationBox")[0].getAttribute("data-count"), document.querySelectorAll("#notificationBox #loadingDiv")[0].style.display = "none"
        }
    }), leaveModal());
    initTooltip()
}

function initScroll() {
    var e = document.querySelectorAll("#scrollNotif"),
        t = window.innerHeight;
    let l = "100%";
    var o = e[0].offsetHeight;
    let i = !1,
        a = 0;
    t < 609 && 81.5 * t / 100 < o && (l = 60 * t / 100 + "px", i = !0, a = 1), MG_Scroll.init({
        selector: e,
        height: l,
        color: "#212121",
        size: "4px",
        alwaysVisible: i,
        railVisible: i,
        railOpacity: a,
        railColor: "transparent",
        distance: "5px",
        opacity: a,
        railClass: "track3",
        barClass: "handle3",
        wrapperClass: "wrapper3",
        enLargeOnHover: !1
    })
}

function setActiveStyle(t) {
    var e = document.getElementById("notificationIcons");
    e && [].forEach.call(e.querySelectorAll(".notificationIcon"), function(e) {
        e && MG_Utils.hasClass(e, "active") && MG_Utils.removeClass(e, "active"), e && e.getAttribute("data-type") == t && MG_Utils.addClass(e, "active")
    })
}

function leaveModal() {
    document.getElementById("fileupload") && MG_Utils.hasClass(document.getElementById("fileupload"), "fileUploadPass") && (LeavePageConfirmationModal.formChangedHandler(), LeavePageConfirmationPrompt.formChangedHandler())
}

function manageRequest(i, a, n, s) {
    var r = document.querySelectorAll("#request_" + i)[0],
        c = document.querySelectorAll("#notificationBox")[0].getAttribute("data-count");
    url = (url = a ? "/user/ajax_accept_friend_request" : "/user/ajax_reject_friend_request") + "?token=" + token, (1 == a && $j("#autoSubscribeHeader").is(":checked") || 1 == a && $j("#autoSubscribe_" + i).is(":checked")) && (url += "&subscribe=1"), MG_Utils.ajaxCall({
        url: url,
        type: "POST",
        data: {
            id: i
        },
        success: function(e) {
            if ("OK" == e) {
                if (document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", c - 1), a) MG_Utils.addClass(r, "accepted"), document.querySelectorAll("#request_" + i + " .action button")[0].setAttribute("disabled", "disabled"), document.querySelectorAll("#request_" + i + " .action")[0].parentNode.removeChild(document.querySelectorAll("#request_" + i + " .action")[0]), document.querySelectorAll("#request_" + i + " .contentContainer")[0].innerHTML = 'You and <a href="' + s + '" style="font-weight:bold;">' + n + "</a> are now friends.";
                else {
                    document.querySelectorAll("#request_" + i)[0].parentNode.removeChild(document.querySelectorAll("#request_" + i)[0]);
                    for (var t = document.querySelectorAll("#modelNotificationList li"), l = 0, o = t.length - 1; 0 <= o; o--) "block" == t[o].style.display && l++;
                    0 == l && 0 == document.querySelectorAll("#notificationBox")[0].getAttribute("data-count") ? noAlert(WiDGET_NOTIFICATION_ICONS.noNewFriendRequests) : 0 == l && fetchData()
                }
                setTimeout(function() {
                    cacheAjaxNotif[1] = document.querySelectorAll("#modelNotificationList")[0].innerHTML, cacheAjaxNotif[4] = document.querySelectorAll("#notificationBox")[0].getAttribute("data-count")
                }, 600)
            }
        }
    })
}

function reportSpam(e) {
    var i = document.querySelectorAll("#request_" + e)[0],
        a = document.querySelectorAll("#notificationBox")[0].getAttribute("data-count");
    MG_Utils.ajaxCall({
        url: "/user/ajax_friend_request_report?token=" + token,
        type: "POST",
        data: {
            id: e,
            accept: -1
        },
        success: function(e) {
            if ("OK" == e) {
                document.querySelectorAll("#tooltip")[0].style.display = "none", document.querySelectorAll("#notificationBox")[0].setAttribute("data-count", a - 1), i.parentNode.removeChild(i);
                for (var t = document.querySelectorAll("#modelNotificationList li"), l = 0, o = t.length - 1; 0 <= o; o--) "block" == t[o].style.display && l++;
                0 == l && 0 == document.querySelectorAll("#notificationBox")[0].getAttribute("data-count") ? noAlert(WiDGET_NOTIFICATION_ICONS.noNewFriendRequests) : 0 == l && fetchData(), setTimeout(function() {
                    cacheAjaxNotif[1] = document.getElementById("modelNotificationList").innerHTML, cacheAjaxNotif[4] = document.getElementById("notificationBox").getAttribute("data-count")
                }, 600)
            }
        }
    })
}

function fetchData() {
    var l = document.querySelectorAll("#notificationBox")[0].getAttribute("type");
    "requestContent" == l && (urlToFetch = "/user/ajaxGetFriendRequests", cachetoUse = 1), scrollLimit[cachetoUse] || offset[cachetoUse] >= document.querySelectorAll("#notificationBox")[0].getAttribute("data-count") || MG_Utils.ajaxCall({
        type: "GET",
        data: {
            offset: offset[cachetoUse],
            limit: 5,
            token: token
        },
        url: urlToFetch,
        dataType: "json",
        success: function(e) {
            for (var t = 0; t < e.datas.length; t++) "requestContent" == l && createfriendRequestAlert(e.datas[t].avatar_url, e.datas[t].verified, e.datas[t].username, e.datas[t].user_link, e.datas[t].message, e.datas[t].request_date, e.datas[t].user_id, e.autoSubscribeFriendRequestsReceived);
            offset[cachetoUse] = offset[cachetoUse] + 5, (offset[cachetoUse] >= document.querySelectorAll("#notificationBox")[0].getAttribute("data-count") || 100 <= offset[cachetoUse]) && (scrollLimit[cachetoUse] = 1), setTimeout(function() {
                cacheAjaxNotif[cachetoUse] = document.querySelectorAll("#modelNotificationList")[0].innerHTML, initTooltip()
            }, 600)
        }
    })
}

function fetchDataMessages() {
    scrollLimit[0] || MG_Utils.ajaxCall({
        url: "/chat/threads",
        type: "GET",
        data: {
            limit: 5,
            offset: offset[0],
            token: token
        },
        dataType: "json",
        success: function(e) {
            if ('"EXPIRED"' == e) document.location.reload();
            else {
                if (0 != e.jsonThreadsCount) {
                    for (var t in offset[0] = offset[0] + 5, e.jsonThreads) createMailAlert(e.jsonThreads[t]);
                    document.querySelectorAll("ul#modelNotificationList > li.noNewItem")[0].style.display = "none"
                }
                e.jsonNonBlockedThreadsCount < 5 && (scrollLimit[0] = 1), setTimeout(function() {
                    cacheAjaxNotif[0] = document.querySelectorAll("#modelNotificationList")[0].innerHTML
                }, 600)
            }
        }
    })
}

function fetchDataNotification() {
    scrollLimit[2] || offset[2] >= document.querySelectorAll("#notificationBox")[0].getAttribute("data-count") || MG_Utils.ajaxCall({
        url: "/stream/notifications_mini",
        type: "GET",
        data: {
            offset: offset[2],
            limit: 15,
            token: token
        },
        dataType: "json",
        success: function(e) {
            document.querySelectorAll("#modelNotificationList")[0].innerHTML += e.html, offset[2] = offset[2] + 5, (offset[2] >= document.querySelectorAll("#notificationBox")[0].getAttribute("data-count") || 100 <= offset[2]) && (scrollLimit[2] = 1), setTimeout(function() {
                cacheAjaxNotif[2] = document.querySelectorAll("#modelNotificationList")[0].innerHTML, initTooltip()
            }, 600)
        }
    })
}

function formSubmit() {
    var e = document.querySelectorAll("#friendRequestForm")[0],
        a = document.querySelectorAll("#preventClick")[0],
        n = a.getAttribute("data-user-id"),
        e = e.getAttribute("action"),
        t = document.querySelectorAll("#cancelRequest")[0].getAttribute("value"),
        l = document.querySelectorAll("#messageRequest")[0].value,
        o = document.querySelectorAll("#auto_subscribe")[0].checked ? 1 : 0;
    MG_Utils.ajaxCall({
        url: e,
        data: {
            cancelRequest: t,
            messageRequest: l,
            subscribe: o
        },
        type: "POST",
        beforeSend: function() {
            for (var e = document.querySelectorAll(".friend_" + n + " button")[0], t = e.children, l = t.length - 1; 0 <= l; l--) MG_Utils.addClass(t[l], "visuallyHidden");
            e.innerHTML += '<span class="spinner" />'
        },
        success: function(e) {
            void 0 !== friendRequestModal && "SENT" === e.success && friendRequestModal.closeModal();
            var t = document.querySelectorAll(".friend_" + n + " button")[0],
                l = document.querySelectorAll(".friend_" + n + " button .spinner"),
                o = t.children;
            l[0].parentNode.removeChild(l[0]);
            for (var i = o.length - 1; 0 <= i; i--) MG_Utils.removeClass(o[i], "visuallyHidden");
            "SENT" == e.success ? (t.setAttribute("data-friends", 1), l = document.querySelectorAll(".friend_" + n)[0], MG_Utils.removeClass(l, "removeFriend"), MG_Utils.removeClass(l, "add"), MG_Utils.addClass(l, "sent"), e.subscribed && (t = document.querySelectorAll(".subscribe_" + n + " button")[0], l = document.querySelectorAll(".subscribe_" + n), t.setAttribute("data-subscribed", 1), MG_Utils.removeClass(l[0], "subscribe"), MG_Utils.addClass(l[0], "unsubscribe"), document.querySelectorAll(".subscribe_" + n + " .buttonLabel")[0].innerHTML = "Subscribed"), a && 1 == a.getAttribute("data-refresh") && location.reload(), document.querySelectorAll(".friend_" + n + " .buttonLabel")[0].innerHTML = e.text_initial) : alert(e.message)
        }
    })
}

function avatarPopupHandler(o, e) {
    for (var t = document.querySelectorAll("." + o), i = MG_Utils.hasClass(document.querySelector("body"), "logged-out"), l = t.length - 1; 0 <= l; l--) MG_Utils.addEventHandler(t[l], "mouseenter", function(e) {
        var t = this,
            l = e.target || e.srcElement;
        for (mouseEnterAvatar(t, i, e); 0 == MG_Utils.hasClass(l, o);) l = l.parentNode;
        myInt = setInterval(function() {
            MG_Utils.hasClass(l, o) || (mouseLeaveAvatar(t, i, e), clearInterval(myInt))
        }, 3e3)
    }), MG_Utils.addEventHandler(t[l], "mouseleave", function(e) {
        mouseLeaveAvatar(this, i, e), myInt && clearInterval(myInt)
    })
}
var cache = {},
    timeout = {
        timer: null,
        el: null
    };

function avatarLoad() {
    document.querySelectorAll(".avatarWrap") && avatarPopupHandler("avatarWrap"), document.querySelectorAll(".usernameWrap") && avatarPopupHandler("usernameWrap"), document.querySelectorAll(".userLink") && avatarPopupHandler("userLink")
}

function mouseEnterAvatar(e, t, l) {
    var i, o, a;
    0 == MG_Utils.getData(e, "disable-popover") && (l = (i = l.target).querySelectorAll(".avatarPosition"), MG_Utils.hasClass(i, "avatarTrigger") && "" == l[0].innerHTML || MG_Utils.hasClass(i, "usernameWrap") && "" == l[0].innerHTML || MG_Utils.hasClass(i, "userLink")) && (o = MG_Utils.getData(e, "type"), a = MG_Utils.getData(i, o + "id"), MG_Utils.addClass(i, "elementHovered"), timeout.timer && clearTimeout(timeout.timer), timeout.el = e, timeout.timer = setTimeout(function(e) {
        cache[a] ? (i.querySelector(".avatarPosition").innerHTML = cache[a], MG_Utils.hasClass(i, "elementHovered") && (i.querySelector(".avatarPopOver").style.display = "block")) : MG_Utils.ajaxCall({
            type: "POST",
            url: "/" + o + "/hover?id=" + a,
            dataType: "text",
            context: this,
            success: function(e) {
                var t = document.querySelectorAll(".avatarPopOver"),
                    l = document.querySelector(".wrapper").offsetWidth;
                i.querySelector(".avatarPosition").innerHTML = e;
                for (var o = t.length - 1; 0 <= o; o--) t[o].style.display = "none";
                MG_Utils.hasClass(i, "elementHovered") && (i.querySelector(".avatarPopOver").style.display = "block", l < (e = document.querySelector(".avatarPopOver")).getBoundingClientRect().left + e.offsetWidth ? MG_Utils.addClass(e, "popOverEdge") : MG_Utils.removeClass(e, "popOverEdge")), MG_Utils.hasClass(i, "elementHovered") && (cache[a] = i.querySelector(".avatarPosition").innerHTML)
            }
        })
    }, 1e3))
}

function mouseLeaveAvatar(e, t, l) {
    var o;
    0 == MG_Utils.getData(e, "disable-popover") && (l = l.target, o = MG_Utils.getData(e, "type"), l = MG_Utils.getData(l, o + "id"), t && e.querySelector(".avatarPosition").length && (cache[l] = e.querySelector(".avatarPosition").innerHTML), e.querySelector(".avatarPopOver") && (e.querySelector(".avatarPopOver").style.display = "none"), timeout.timer && clearTimeout(timeout.timer), MG_Utils.removeClass(e, "elementHovered"))
}
var fadeClickthroughEvent = function() {
    var e = document.querySelectorAll("#moreData, ul.videos-list, ul.videos, ul.popularSectionListPremium");
    [].forEach.call(e, function(e) {
        e.addEventListener("mousedown", function(e) {
            var t, l = e.target;
            (MG_Utils.hasClass(l, "fadeImage") || MG_Utils.hasClass(l, "fade")) && (t = l.querySelector("a.img"), t = (l.querySelector("a.selectVideoThumb") || t || (l.querySelector("a") || l.parentElement)).getAttribute("href")) && (e.preventDefault(), 1 === e.which && (window.location.href = t), 2 === e.which) && window.open(t, "_blank")
        })
    })
};

function firstChild(e) {
    if (!e.children.length) return null;
    if (e.firstElementChild) return e.firstElementChild;
    for (var t = 0, l = e.children.length; t <= l; t++) {
        var o = e.children[t];
        if (1 === o.nodeType) return o
    }
}
MG_Utils.domReady(function() {
    var t, l;
    if (P = document.querySelector("#js-noticeWarningModal"), q = document.querySelector("#js-blackListModal"), P && q && (t = new MG_Modal({
            content: P,
            closeButton: !1,
            className: "noticeModal",
            closeDocument: !1
        }), l = new MG_Modal({
            content: q,
            closeButton: !1,
            className: "blackListModal",
            closeDocument: !1
        }), document.addEventListener("click", function(e) {
            e = e.target;
            (MG_Utils.hasClass(e, "js-closeBlackList") || MG_Utils.hasClass(e, "js-closeNotice")) && (MG_Utils.hasClass(e, "js-closeBlackList") && l.closeModal(), MG_Utils.hasClass(e, "js-closeNotice")) && t.closeModal()
        }), document.querySelector(".js-extrnalLink")) && document.addEventListener("click", function(e) {
            MG_Utils.hasClass(e.target, "js-extrnalLink") && t.closeModal()
        }), "undefined" != typeof BrowserDetect) {
        switch (BrowserDetect.browser) {
            case "Opera":
                MG_Utils.addClass(document.documentElement, "opera");
                break;
            case "Safari":
                MG_Utils.addClass(document.documentElement, "safari");
                break;
            case "Firefox":
                MG_Utils.addClass(document.documentElement, "firefox");
                break;
            case "Chrome":
                MG_Utils.addClass(document.documentElement, "chrome")
        }
        "Win32" == navigator.platform ? MG_Utils.addClass(document.documentElement, "windows") : "MacIntel" == navigator.platform && MG_Utils.addClass(document.documentElement, "osx"), BrowserDetect.init()
    }
    "undefined" != typeof autocompleteSearch && new autocompleteSearch, "undefined" != typeof dropdown && (dropdown.init(".mainFilter, .sortFilter"), dropdown.init("#languageWrapper"), dropdown.init(".languageWrapper"), dropdown.init("#notificationIcons", {
        closeCallback: function() {
            var e = document.querySelector('.notificationIcon[data-type="' + document.getElementById("notificationBox").getAttribute("type") + '"] > span');
            e && (e.style.display = "none")
        }
    }), "undefined" != typeof isLogged) && isLogged && dropdown.init("#profileMenuWrapper"), renderCommentLinks();
    for (var e = document.querySelectorAll("textarea[data-val]"), o = 0; o < e.length; o++) "" == (element = e[o]).value && (element.value = element.getAttribute("data-val"));
    for (var i = document.querySelectorAll("ul"), a = 0; a < i.length; ++a) {
        var n = firstChild(i[a]),
            s = MG_Utils.lastChild(i[a]);
        n && MG_Utils.addClass(n, "alpha"), s && (MG_Utils.hasClass(s, "sectionMoreBtn") ? MG_Utils.addClass(s.previousElementSibling || MG_Utils.previousElementSibling(s), "omega") : MG_Utils.addClass(s, "omega"))
    }
    for (var r = document.querySelectorAll(".container a.img, .container img"), c = 0; c < r.length; ++c) MG_Utils.hasClass(r[c], "catIcon") || (r[c].setAttribute("data-title", r[c].title), r[c].setAttribute("title", ""));
    initTooltip();
    for (var d, u, m, f = document.querySelectorAll(".wideDropdown"), v = 0; v < f.length; ++v)
        if (u = f[v], d = document.querySelector(".menu." + u.getAttribute("data-submenu-type")), m = document.querySelectorAll(".wideDropdown." + u.getAttribute("data-submenu-type")), d)
            for (var p = 0; p < m.length; p++) d.appendChild(m[p]);
    var y = document.getElementById("countryRedirectMessage");
    if (y && !PH_Storage.getItem("hideLangRedirect")) {
        y.style.display = "block";
        for (var h = y.querySelectorAll("i"), M = 0; M < h.length; M++) MG_Utils.addEventHandler(h[M], "click", function(e) {
            (e = e || window.event).stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, y.style.display = "none", PH_Storage.saveWithExpiry("hideLangRedirect", !0)
        })
    }
    for (var g = document.querySelectorAll(".shareIcons a"), S = 0; S < g.length; S++) MG_Utils.addEventHandler(g[S], "click", function(e) {
        var t, l = (e = e || window.event).target || e.srcElement;
        if (MG_Utils.preventDefault(e), "a" !== l.nodeName.toLowerCase())
            for (;
                (l = l.parentElement) && "a" !== l.nodeName.toLowerCase(););
        e = Math.floor(((screen.availWidth || 1024) - 640) / 2), t = Math.floor(((screen.availHeight || 700) - 320) / 2), window.open(l.href, "social", "width=640,height=320,left=" + e + ",top=" + t + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1")
    });
    VideoPreview.getTarget("js-videoPreview"), P = function() {
        "use strict";

        function t() {
            for (var e = document.querySelectorAll(i.link), t = 0; t < e.length; t++) MG_Utils.addEventHandler(e[t], "click", l)
        }
        var i = {
                debug: !1,
                link: ".js-mxp",
                parent: ".js-mxpParent",
                meta: 'head [name="mxp-page"]'
            },
            l = function(e) {
                var t = MG_Utils.closest(this, i.parent);
                if (!this.hasAttribute("data-mxptext") || !t || !t.hasAttribute("data-mxp")) return !1;
                var l = "None",
                    t = t.getAttribute("data-mxp"),
                    o = {};
                this.hasAttribute("data-mxptype") && (l = this.getAttribute("data-mxptype")), i.debug && MG_Utils.preventDefault(e), o[l + "Name"] = this.getAttribute("data-mxptext"), o.PageFrom = t, "undefined" != typeof mixpanel && mixpanel.track("View " + l, o)
            };
        return {
            init: function(e) {
                if (!premiumFlag) return !1;
                e = e || {}, (i = MG_Utils.extendSimple(i, e)).debug && console.log("MixPanel debug mode");
                e = document.querySelector(i.meta);
                e && "undefined" != typeof mixpanel && mixpanel.track("Viewed Page", {
                    "Page Name": e.getAttribute("content")
                });
                t()
            },
            trackClick: t
        }
    }(), "undefined" != typeof premiumFlag && "1" == premiumFlag && P.init(), MG_Utils.limit = function(e, t) {
        for (var t = MG_Utils.extendSimple({
                limit: 200
            }, t), l = e.length - 1; 0 <= l; l--) MG_Utils.addEventHandler(e[l], "keyup", function(e) {
            e = (e = e || event).target || e.srcElement;
            e.value.length > t.limit && (e.value = e.value.substring(0, t.limit))
        })
    };
    var _, U, A, q = function() {
        "use strict";
        var e;

        function t() {
            var l = {},
                t = "extended",
                s = "";

            function r(e) {
                e.preventDefault(), o(this.bioAbout, t), o(this.biographyBtns, t), o(this.bioText, t), o(this.profileDetails, t), o(this.showMoreLink, t), o(this.socials, t), this.parentElement && o(this.parentElement, t), this.showMoreLink.innerHTML = MG_Utils.hasClass(this.showMoreLink, t) ? l.showLess : l.showMore
            }

            function o(e, t) {
                e && MG_Utils.toggleClass(e, t)
            }
            this.init = function(e, t) {
                l = t,
                    function() {
                        var e = {
                            parentElement: this.querySelector(".bottomDescription "),
                            bioAbout: this.querySelector(".js-bioAbout"),
                            biographyBtns: this.querySelector(".biographyBtns"),
                            bioText: this.querySelector(".js-bioText"),
                            profileDetails: this.querySelector(".js-infoText"),
                            showMoreLink: this.querySelector(".js-showMoreLess"),
                            socials: this.querySelector(".js-socials")
                        };
                        ! function() {
                            if (this.showMoreLink)
                                if (document.querySelector(".claimed") || document.querySelector(".amateurModel")) {
                                    var e = document.querySelectorAll(".js-headerContent"),
                                        t = !1,
                                        l = function() {
                                            var t = 0;
                                            return [].forEach.call(document.querySelectorAll(".js-highestChild"), function(e) {
                                                null !== e.offsetParent && (t = Math.max(e.offsetHeight, t))
                                            }), t + 20
                                        }();
                                    if (void 0 !== e && 0 < e.length)
                                        for (var o = 0; o < e.length; o++)
                                            if (e[o].offsetHeight > l) {
                                                t = !0;
                                                break
                                            }
                                    t ? (MG_Utils.addClass(this.showMoreLink, "displayNone"), MG_Utils.addClass(document.querySelector(".fadeout"), "displayNone")) : this.showMoreLink.addEventListener("click", r.bind(this))
                                } else {
                                    var i, a, n;
                                    (this.bioText && 0 < this.bioText.scrollHeight || this.profileDetails && 0 < this.profileDetails.scrollHeight) && (i = this.bioText ? this.bioText.scrollHeight : 0, n = this.profileDetails ? this.profileDetails.scrollHeight : 0, a = this.bioAbout ? 205 : a, n = n <= a, i <= a && n ? MG_Utils.addClass(this.showMoreLink, "displayNone") : this.showMoreLink.addEventListener("click", r.bind(this)), clearInterval(s))
                                }
                        }.call(e)
                    }.call(e)
            }
        }
        return {
            getInstance: function() {
                return null == e && ((e = new t).constructor = null), e
            }
        }
    }();
    try {
        var C = document.querySelectorAll(".topProfileHeader") ? document.querySelectorAll(".topProfileHeader")[0] : null,
            G = "undefined" != typeof PROFILE_MORE_LESS_TEXT ? PROFILE_MORE_LESS_TEXT : null;
        C && G && q.getInstance().init(C, G)
    } catch (e) {
        console.log("ERROR === SHOW MORE LESS CLASS ==="), console.log(e)
    }
    if (document.querySelectorAll(".createPlaylistModalTrigger"))
        for (var b = document.querySelectorAll(".createPlaylistModalTrigger"), E = b.length - 1; 0 <= E; E--) MG_Utils.addEventHandler(b[E], "click", function(e) {
            (e = e || event).preventDefault(), "undefined" != typeof createPlaylistModalComponent && createPlaylistModalComponent.open(function() {
                dropdown.init("#playlist-form .privacySelector"), MG_Utils.limit(document.querySelectorAll("#new-playlist-description"), {
                    limit: 1e3
                })
            })
        });
    if (document.querySelectorAll(".blockPageScroll"))
        for (var L = document.querySelectorAll(".blockPageScroll"), T = L.length - 1; 0 <= T; T--) L[T].addEventListener("mousewheel", function(e) {
            (e = e || event).preventDefault()
        }, {
            passive: !1
        }), L[T].addEventListener("DOMMouseScroll", function(e) {
            (e = e || event).preventDefault()
        }, {
            passive: !1
        });
    if (document.querySelectorAll(".expandable-title")) {
        for (var j = document.querySelectorAll(".expandable-title"), w = j.length - 1; 0 <= w; w--) MG_Utils.addEventHandler(j[w], "click", function() {
            if (MG_Utils.hasClass(this.parentNode, "active")) {
                var e = this.parentNode;
                e.querySelector(".expandable-content").style.display = "none", MG_Utils.removeClass(e, "active")
            } else {
                for (var e = this.parentNode, t = document.querySelectorAll(".expandable-section.active"), l = t.length - 1; 0 <= l; l--) MG_Utils.removeClass(t[l], "active"), t[l].querySelector(".expandable-content").style.display = "none";
                e.querySelector(".expandable-content").style.display = globalObjUtils.isMac && globalObjUtils.isSafari ? "contents" : "block", MG_Utils.addClass(e, "active")
            }
        });
        for (var H = document.querySelectorAll(".expandable-title .expand-button"), w = H.length - 1; 0 <= w; w--) MG_Utils.addEventHandler(H[w], "click", function(e) {
            (e = e || event).preventDefault()
        })
    }

    function x(e) {
        e.length && [].forEach.call(e, function(e) {
            var t = document.querySelector(".add-to-playlist-menu");
            t && !MG_Utils.hasClass(t, "display-none") || MG_Utils.removeClass(e, "active")
        })
    }

    function k(e) {
        var t, l = document.querySelector(".add-to-playlist-menu");
        if (e ? t = e.querySelector(".playlist-trigger") : (e = document.querySelector(".zoom.active")) && (t = e.querySelector(".playlist-trigger")), t)
            for (;
                "block" === l.style.display;) t.click()
    }

    function N(e) {
        return !!e && !MG_Utils.hasClass(e, "playlist-trigger") && !(MG_Utils.hasClass(e, "playlist-menu-addTo") || MG_Utils.hasClass(e, "playlist-list") || MG_Utils.hasClass(e, "playlist-menu-createNew"))
    }(P = document.body).addEventListener("mouseover", function(e) {
        var t, l, o = e.target,
            i = null;
        window.clearTimeout(_), MG_Utils.hasClass(o, "fadeUp") && !MG_Utils.hasClass(o.parentNode, "js-noFade") && (e = o.querySelector(".thumb"), t = o.querySelector(".privateOverlay"), l = "undefined" != typeof New_Homepage_Design && New_Homepage_Design ? o.parentElement.querySelectorAll(".hideOnPreview") : null, i = (MG_Utils.hasClass(o, "fade") ? o : MG_Utils.closest(o, ".fade")).querySelector(".watchedVideoText, .hideOnHover"), !t) && e && (!MG_Utils.hasClass(e, "js-videoPreview") || MG_Utils.hasClass(e, "js-videoThumbFlip") || MG_Utils.hasClass(e, "activeVideo") || (_ = setTimeout(function() {
            MG_Utils.removeClass(o, "fadeUp")
        }, 300)), MG_Utils.hasClass(e, "js-videoThumbFlip")) && !e.getAttribute("data-flipbook_active") && (MG_Utils.hasClass(e, "js-videoPreview") || (_ = setTimeout(function() {
            MG_Utils.removeClass(o, "fadeUp"), i && !MG_Utils.hasClass(i, "hide") && MG_Utils.addClass(i, "hide"), l && MG_Utils.addClassMultiple(l, "hide")
        }, 100)), MG_Utils.hasClass(e, "js-videoPreview")) && (_ = setTimeout(function() {
            MG_Utils.removeClass(o, "fadeUp"), i && !MG_Utils.hasClass(i, "hide") && MG_Utils.addClass(i, "hide"), l && MG_Utils.addClassMultiple(l, "hide")
        }, 100))
    }), P.addEventListener("mouseout", function(e) {
        var t, l = e.target,
            e = e.relatedTarget,
            o = null,
            i = "undefined" != typeof New_Homepage_Design && New_Homepage_Design ? l.parentElement.querySelectorAll(".hideOnPreview") : null;
        window.clearTimeout(_), MG_Utils.closest(l, ".fade") && !MG_Utils.hasClass(MG_Utils.closest(l, ".fade"), "fadeUp") && (o = MG_Utils.closest(l, ".fade").querySelector(".watchedVideoText, .hideOnHover"), MG_Utils.hasClass(l, "js-videoThumbFlip") && MG_Utils.hasClass(l, "js-videoPreview") && (MG_Utils.addClass(MG_Utils.closest(l, ".fade"), "fadeUp"), o && MG_Utils.hasClass(o, "hide") && MG_Utils.removeClass(o, "hide"), i) && MG_Utils.removeClassMultiple(i, "hide"), MG_Utils.hasClass(l, "js-videoPreview") && !MG_Utils.hasClass(l, "js-videoThumbFlip")) && MG_Utils.addClass(MG_Utils.closest(l, ".fade"), "fadeUp"), MG_Utils.hasClass(l, "fade") && !MG_Utils.hasClass(l, "fadeUp") && (t = l.querySelector(".thumb"), MG_Utils.hasClass(l, "fade") && (o = l.querySelector(".watchedVideoText, .hideOnHover")), t && MG_Utils.hasClass(t, "js-videoThumbFlip") && MG_Utils.hasClass(t, "js-videoPreview") && e && !MG_Utils.hasClass(e, "thumb") && (MG_Utils.addClass(l, "fadeUp"), o && MG_Utils.hasClass(o, "hide") && MG_Utils.removeClass(o, "hide"), i) && MG_Utils.removeClassMultiple(i, "hide"), t && MG_Utils.hasClass(t, "js-videoThumbFlip") && !MG_Utils.hasClass(t, "js-videoPreview") && e && !MG_Utils.hasClass(e, "thumb") && (MG_Utils.addClass(l, "fadeUp"), o && MG_Utils.hasClass(o, "hide") && MG_Utils.removeClass(o, "hide"), i) && MG_Utils.removeClassMultiple(i, "hide"), t) && MG_Utils.hasClass(t, "js-videoPreview") && !MG_Utils.hasClass(t, "js-videoThumbFlip") && !MG_Utils.hasClass(t, "activeVideo") && MG_Utils.addClass(l, "fadeUp")
    }), (q = document.body).addEventListener("mouseover", function(e) {
        var t, l, o, e = e.target;
        window.clearTimeout(U), MG_Utils.closest(e, ".zoom") && !MG_Utils.hasClass(MG_Utils.closest(e, ".zoom"), "active") && ((MG_Utils.hasClass(e, "img") && MG_Utils.hasClass(e.querySelector(".thumb"), "js-videoThumbFlip") || MG_Utils.hasClass(e, "js-videoThumbFlip")) && (t = MG_Utils.closest(e, ".zoom"), l = document.querySelectorAll(".zoom.active"), (o = document.querySelector(".add-to-playlist-menu")) && "block" === o.style.display && k(), x(l), U = setTimeout(function() {
            MG_Utils.addClass(t, "active")
        }, 100)), MG_Utils.hasClass(e, "img") && e.querySelector(".js-videoPreview") && !MG_Utils.hasClass(e.querySelector(".js-videoPreview"), "activeVideo") && !e.querySelector(".js-videoThumbFlip") || MG_Utils.hasClass(e, "js-videoPreview") && !MG_Utils.hasClass(e, "activeVideo") && !MG_Utils.hasClass(e, "js-videoThumbFlip")) && (t = MG_Utils.closest(e, ".zoom"), l = document.querySelectorAll(".zoom.active"), (o = document.querySelector(".add-to-playlist-menu")) && "block" === o.style.display && k(), x(l), U = setTimeout(function() {
            MG_Utils.addClass(t, "active")
        }, 100))
    }), q.addEventListener("mouseout", function(e) {
        var t = e.target,
            e = e.relatedTarget,
            l = this.querySelector(".add-to-playlist-menu");
        if (MG_Utils.closest(t, ".zoom")) {
            var o, i = MG_Utils.closest(t, ".zoom");
            if (window.clearTimeout(U), (MG_Utils.hasClass(t, "img") || MG_Utils.hasClass(t, "thumb")) && (!l || MG_Utils.hasClass(l, "display-none")) && e && (MG_Utils.hasClass(e, "playlist-trigger") || MG_Utils.hasClass(e, "not-interested-trigger") || MG_Utils.closest(e, ".playlist-menu-addTo") || MG_Utils.closest(e, ".playlist-list") || MG_Utils.closest(e, ".playlist-menu-createNew") || MG_Utils.closest(e, ".marker-overlays"))) return;
            (MG_Utils.hasClass(i, "active") && MG_Utils.hasClass(t, "js-videoPreview") && MG_Utils.hasClass(t, "js-videoThumbFlip") || t.querySelector(".js-videoPreview") && t.querySelector(".js-videoThumbFlip") && !MG_Utils.hasClass(e, "thumb") && N(e)) && (o = document.querySelectorAll(".zoom.active"), l && "block" === l.style.display && k(i), x(o)), (MG_Utils.hasClass(i, "active") && MG_Utils.hasClass(t, "js-videoThumbFlip") || MG_Utils.hasClass(t, "img") && t.querySelector(".js-videoThumbFlip") && e && N(e) && !MG_Utils.hasClass(e, "thumb")) && (o = document.querySelectorAll(".zoom.active"), l && "block" === l.style.display && k(i), x(o)), (MG_Utils.hasClass(i, "active") && MG_Utils.hasClass(t, "js-videoPreview") && !MG_Utils.hasClass(t, "activeVideo") && !MG_Utils.hasClass(t, "js-videoThumbFlip") || MG_Utils.hasClass(t, "img") && t.querySelector(".js-videoPreview") && !t.querySelector(".js-videoThumbFlip") && !MG_Utils.hasClass(t.querySelector(".js-videoPreview"), "activeVideo") && N(e)) && (o = document.querySelectorAll(".zoom.active"), l && "block" === l.style.display && k(i), x(o))
        }(MG_Utils.closest(t, ".marker-overlays") || MG_Utils.closest(t, ".add-to-playlist-icon")) && MG_Utils.closest(t, ".zoom") && MG_Utils.hasClass(MG_Utils.closest(t, ".zoom"), "active") && e && !MG_Utils.closest(e, ".marker-overlays") && !MG_Utils.closest(e, ".phimage") && !MG_Utils.closest(e, ".add-to-playlist-menu") && (o = document.querySelectorAll(".zoom.active"), i = MG_Utils.closest(t, ".zoom"), window.clearTimeout(U), l && "block" === l.style.display && k(i), x(o)), t && e && (MG_Utils.closest(t, ".playlist-menu-addTo") || MG_Utils.closest(t, ".playlist-list") || MG_Utils.closest(t, ".playlist-menu-createNew")) && !MG_Utils.hasClass(e, "playlist-trigger") && !MG_Utils.hasClass(e, "img") && !MG_Utils.closest(e, ".add-to-playlist-menu") && (o = document.querySelectorAll(".zoom.active"), window.clearTimeout(U), l && "block" === l.style.display && k(), x(o))
    }), C = document.querySelector("#searchInput"), A = document.querySelector("#searchBarContainer"), null !== C && (MG_Utils.addEventHandler(C, "focus", function() {
        MG_Utils.addClass(A, "active")
    }), MG_Utils.addEventHandler(C, "blur", function() {
        MG_Utils.removeClass(A, "active")
    })), fadeClickthroughEvent();
    var G = document.querySelector(".js-headerUploadBtn"),
        I = document.querySelector(".js-uploadModalContent"),
        P = (G && G.addEventListener("click", function() {
            "undefined" != typeof isLogged && isLogged ? I && MG_Utils.toggleClass(I, "displayNone") : signinbox && signinbox.show()
        }), document.getElementById("avModalTemplate"));
    if (P && !MG_Utils.getCookie("av_modal")) {
        let e = P.dataset.location,
            t = new MG_Modal({
                content: P.innerHTML,
                className: "avModal loginModal",
                afterunload: () => {
                    MG_Utils.setCookie("av_modal", 1, "/", 1)
                }
            });
        t.openModal(() => {
            "undefined" != typeof ga && ga("send", "event", "AVModal" + e, "View", "ModalView", {
                nonInteraction: 1
            }), document.querySelector(".js-avmLaterBtn").addEventListener("click", e => {
                e.preventDefault(), t.closeModal()
            })
        })
    }
});
var LoverManageModal = function() {
    var r = this,
        c = {};

    function d(e, t) {
        e = e.querySelector(".loverEmail");
        e && t.payload && t.payload.loverEmail && (e.innerHTML = t.payload.loverEmail)
    }

    function l(e, t) {
        var l, o = t.querySelector(".submitBtn"),
            i = t.querySelector(".customInput"),
            t = t.querySelector("#loverSubmitForm");
        o && r.type === r.action.POPUPINFO ? o.addEventListener("click", function(e) {
            r.modal.closeModal()
        }) : (o && i && t && (o.addEventListener("click", function(e) {
            e.preventDefault();
            var e = this.querySelector('input[name="loverEmail"]'),
                t = e ? e.value : "",
                l = this.querySelector('input[name="senderNickname"]'),
                l = l ? l.value : "",
                o = this.querySelector('textarea[name="loverMessage"]'),
                o = o ? o.value : "";
            e && !new RegExp("(\\s|^)hideElement(\\s|$)").test(e.className) && function(e) {
                return !e || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
            }(t.trim()) ? a(e, "emailInvlidError") : r.type === r.action.CHANGELOVER && t === r.secondaryLoverEmail ? a(e, "emailRepeatError") : (o = o.replace(/(;|\(|\)|\[|\]|#)/g, ""), l = l.replace(/(;|\(|\)|\[|\]|#)/g, ""), MG_Utils.ajaxCall({
                url: r.settings.apiUrl,
                data: {
                    loverEmail: t.trim(),
                    senderNickname: l.trim(),
                    loverMessage: o.trim()
                },
                type: "POST",
                success: function(e) {
                    var t, l, o, i, a, n, s;
                    e && "success" == e.success ? c[r.type + "Success"] ? ("undefined" != typeof MANAGE_PREMIUM_SETTINGS ? (t = r.type, l = e, o = document.querySelector(".loversMembership .loversChangeWrapper"), i = document.querySelector(".loversMembership .addLoversWrapper"), a = document.querySelector(".loversMembership .loversWrapper"), n = document.querySelector(".loversMembership .loverEmail"), s = document.querySelector(".loversMembership .loverStatus"), i && o && n && s && a && (t === r.action.REMOVELOVER ? (MG_Utils.addClass(o, "hidden"), MG_Utils.removeClass(i, "hidden"), MG_Utils.addClass(a, "hidden")) : (MG_Utils.addClass(i, "hidden"), MG_Utils.removeClass(o, "hidden"), MG_Utils.removeClass(a, "hidden"), MG_Utils.removeClass(n, "hidden"), MG_Utils.removeClass(s, "approved"), MG_Utils.addClass(s, "pending"), s.innerText = MANAGE_PREMIUM_SETTINGS.pending, l && l.payload && l.payload.loverEmail && (r.secondaryLoverEmail = l.payload.loverEmail, n.innerText = l.payload.loverEmail)))) : (t = r.type, i = e, o = document.querySelector(".loverContent .loverChangeButtons"), a = document.querySelector(".loverContent .addLoverButtonWrap"), s = document.querySelector(".loverContent .loverEmail"), n = document.querySelector(".loverContent .loverStatus"), a && o && s && n && (t === r.action.REMOVELOVER ? (MG_Utils.addClass(o, "display-none"), MG_Utils.removeClass(a, "display-none"), MG_Utils.addClass(s, "display-none"), MG_Utils.removeClass(n, "pending")) : (MG_Utils.addClass(a, "display-none"), MG_Utils.removeClass(o, "display-none"), MG_Utils.removeClass(s, "display-none"), MG_Utils.addClass(n, "pending"), i && i.payload && i.payload.loverEmail && (r.secondaryLoverEmail = i.payload.loverEmail, s.innerText = i.payload.loverEmail)))), r._layoutModal("Success", d, e)) : r.type === r.action.CHANGETYPE && e.payload && e.payload.downgrade_url && (window.location.href = e.payload.downgrade_url) : u(e.messages)
                }
            }))
        }.bind(t)), i.addEventListener("focus", function() {
            {
                var e;
                MG_Utils.hasClass(this, "error") && (e = document.querySelector(".referLoveModal #hiddenEmail"), MG_Utils.removeClass(this, "error"), this.value = e ? e.value : "", u())
            }
        }.bind(i))), r.type === r.action.INVITELOVER && r.modal && r.modal.container && (l = function(e) {
            MG_Utils.hasClass(e.target, "closeMTubes") && (MG_Utils.ajaxCall({
                url: postSignupPageParams.dismissInvitationUrl,
                type: "GET",
                success: function(e) {}
            }), r.modal.container.removeEventListener("click", l))
        }, r.modal.container.addEventListener("click", l)))
    }

    function a(e, t) {
        var l = document.querySelector(".referLoveModal #hiddenEmail");
        l && !MG_Utils.hasClass(e, "error") && (l.value = e.value), MG_Utils.addClass(e, "error"), e.value = r._errors[t]
    }

    function u(e) {
        var t = document.querySelector(".referLoveModal .requestErrors");
        t && (e ? (t.innerHTML = e, MG_Utils.addClass(t, "error")) : (t.innerHTML = "", MG_Utils.removeClass(t, "error")))
    }

    function i() {
        var e = document.getElementById("js_recommendationList");
        e && e.addEventListener("change", function(e) {
            var t = this.checked ? 1 : 0;
            MG_Utils.ajaxCall({
                url: r._recommendationListUrl,
                data: {
                    share_recommendation: t
                },
                type: "POST",
                success: function(e) {}
            })
        })
    }
    r.type = null, r.modal = null, r.settings = {}, r.action = {
        INVITELOVER: "inviteLover",
        ADDLOVER: "addLover",
        CHANGELOVER: "changeLover",
        REMOVELOVER: "removeLover",
        CHANGETYPE: "changeType",
        POPUPINFO: "popupInfo",
        CHANGEMEMBERSHIP: "changeMembership"
    }, r.init = function(e, t) {
        r._modalWrapper = e, r._recommendationListUrl = t.recommendationListUrl, r.secondaryLoverEmail = t.secondaryLoverEmail, r._errors = {
            emailInvlidError: t.emailInvlidError,
            emailRepeatError: t.emailRepeatError
        }, c = {
            inviteLover: {
                apiUrl: t.addLoveRequestUrl,
                title: t.inviteLoverTitle,
                button: t.inviteLoverSubmit,
                content: t.inviteLoverContent,
                input: !0,
                textarea: !0
            },
            inviteLoverSuccess: {
                title: t.inviteSuccessTitle,
                content: t.inviteSuccessContent
            },
            addLover: {
                apiUrl: t.addLoveRequestUrl,
                title: t.addLoverTitle,
                button: t.addLoverSubmit,
                input: !0,
                textarea: !0
            },
            addLoverSuccess: {
                title: t.inviteSuccessTitle,
                content: t.inviteSuccessContent
            },
            changeLover: {
                apiUrl: t.changeLoveRequestUrl,
                title: t.changeLoverTitle,
                button: t.changeLoverSubmit,
                input: !0,
                textarea: !0
            },
            changeLoverSuccess: {
                title: t.inviteSuccessTitle,
                content: t.inviteSuccessContent
            },
            removeLover: {
                apiUrl: t.removeLoveRequestUrl,
                title: t.removeLoverTitle,
                button: t.removeLoverSubmit,
                process: l,
                input: !1
            },
            removeLoverSuccess: {
                title: t.removeSuccessTitle,
                content: t.removeSuccessContent,
                button: t.addLoverSubmit
            },
            changeType: {
                apiUrl: t.changeTypeRequestUrl,
                title: t.changeTypeTitle,
                button: t.changeTypeSubmit,
                content: t.changeTypeContent,
                input: !1,
                disclaimer: t.changeTypeDisclaimer
            },
            popupInfo: {
                button: "Close"
            },
            changeMembership: {
                title: t.changeTypeTitleSucess,
                content: t.changeMembershipContent
            }
        }, r._registerActions()
    }, r.setupModal = function(e) {
        return r.type = e, r.modal && r.modal.closeModal && r.modal.closeModal(), r.settings = c[e], r.modal = new MG_Modal({
            content: r._modalWrapper,
            className: "referLoveModal",
            closeDocument: !1
        }), r
    }, r.show = function(e) {
        r.modal.openModal(e || l), r._layoutModal()
    }, r._layoutModal = function(e, t, l) {
        var o, i = r.modal.modal;
        e && "Success" === e ? (r.type += e, r.settings = c[r.type], o = i.querySelector(".successContentWrapper"), MG_Utils.removeClass(o, "display-none"), MG_Utils.addClass(i.querySelector(".requestContentWrapper"), "display-none")) : (o = i.querySelector(".requestContentWrapper"), MG_Utils.removeClass(o, "display-none"), MG_Utils.addClass(i.querySelector(".successContentWrapper"), "display-none"), MG_Utils.addClass(i, r.type)), o.querySelector(".modalTitle").innerHTML = r.settings.title, void 0 !== r.settings.content && (e = o.querySelector(".modalContent"), MG_Utils.removeClass(e, "hideElement"), e.innerHTML = r.settings.content), void 0 !== r.settings.button && (e = o.querySelector("button"), MG_Utils.removeClass(e, "hideElement"), e.innerHTML = r.settings.button), void 0 !== r.settings.input && r.settings.input && (e = o.querySelectorAll("#loverSubmitForm input"), MG_Utils.removeClassMultiple(e, "hideElement")), void 0 !== r.settings.textarea && r.settings.textarea && (e = o.querySelector("#loverSubmitForm textarea")) && MG_Utils.removeClass(e, "hideElement"), t && l && t(i, l), r.type === r.action.CHANGETYPE && void 0 !== r.settings.disclaimer && (e = o.querySelector(".disclaimer")) && (e.innerHTML = r.settings.disclaimer)
    }, r._registerActions = function() {
        var e = document.getElementById("js_addLoverBtn"),
            t = document.getElementById("js_changeLoverBtn"),
            l = document.getElementById("js_removeLoverBtn"),
            o = document.getElementById("js_changeTypeBtn");
        e && e.addEventListener("click", function(e) {
            r.setupModal(r.action.ADDLOVER).show()
        }), t && t.addEventListener("click", function(e) {
            r.setupModal(r.action.CHANGELOVER).show()
        }), l && l.addEventListener("click", function(e) {
            r.setupModal(r.action.REMOVELOVER).show()
        }), o && o.addEventListener("click", function(e) {
            r.setupModal(r.action.CHANGETYPE).show()
        }), i()
    }, r.secondaryLoverSetup = function(e) {
        r._recommendationListUrl = e.recommendationListUrl, i()
    }
};
try {
    var loverManageModal, loverManage, loverModal = document.querySelector("#postSignupModals #referLoveModal"),
        postSignupPageParams = "undefined" != typeof PRIMARY_LOVER_DATA ? PRIMARY_LOVER_DATA : null;
    loverModal && postSignupPageParams ? ((loverManageModal = new LoverManageModal).init(loverModal, postSignupPageParams), postSignupPageParams.changeMembership ? loverManageModal.setupModal(loverManageModal.action.CHANGEMEMBERSHIP).show() : "" === postSignupPageParams.secondaryLoverEmail && postSignupPageParams.showLoverEmailRequestModal && loverManageModal.setupModal(loverManageModal.action.INVITELOVER).show()) : "undefined" != typeof SECONDARY_LOVER_DATA && (loverManage = new LoverManageModal).secondaryLoverSetup(SECONDARY_LOVER_DATA)
} catch (e) {
    console.log("ERROR === MODALS NOT LOADED CORRECTLY ==="), console.log(e)
}
document.addEventListener("DOMContentLoaded", function() {
    var e, t, l = document.getElementById("languageMenu"),
        o = document.getElementById("locationMenu");

    function i(e, t) {
        let l = !1,
            o = !1;

        function i() {
            !l && t && MG_Utils.removeClass(t, "active")
        }
        e && e.addEventListener("mouseleave", function() {
            i(), o = !1
        }), t && t.addEventListener("focus", function() {
            l = !0
        }), t && t.addEventListener("blur", function() {
            l = !1, o || i()
        }), t && MG_Utils.addEventHandler(t, "click", a)
    }

    function a(e) {
        e.stopPropagation();
        e = e.target || e.srcElement;
        MG_Utils.hasClass(e, "active") ? MG_Utils.removeClass(e, "active") : MG_Utils.addClass(e, "active")
    }

    function n(e) {
        e.stopPropagation();
        var t, l, o, e = e.target && e.target[this.selectedIndex];
        e && (t = MG_Utils.getData(e, "href"), l = MG_Utils.getData(e, "root"), o = e.value, e = MG_Utils.getData(e, "type"), t) && l && o && e && ("language" == e ? ("function" == typeof setCookieAdvanced && setCookieAdvanced("lang", o, 30, "/", "." + l, !0), window.location = t) : ("function" == typeof setCookieAdvanced && setCookieAdvanced("overwriteCCVal", t.split("=")[1], 1, "/", "." + l, !0), window.location.reload()))
    }
    MG_Utils.hasClass(document.documentElement, "firefox") ? (e = document.getElementById("languageMenuParent"), t = document.getElementById("locationMenuParent"), i(e, l), i(t, o)) : (l && MG_Utils.addEventHandler(l, "change", n), o && MG_Utils.addEventHandler(o, "change", n));
    const s = document.getElementById("profileMenuDropdown"),
        r = document.querySelector(".userMenuFadeOutOverly"),
        c = document.getElementById("profileMenuDropdownScroll"),
        d = document.querySelector(".js_userMenuScroll");
    s.addEventListener("click", function(e) {
        var t = e.target;
        ((c ? c.contains(t) : null) || e.target || MG_Utils.hasClass(e.target, d)) && (e.stopPropagation(), s.style.display = "block")
    }), c.addEventListener("mouseenter", function() {
        var e = c.scrollTop + 2;
        "block" != d.style.display || e + c.clientHeight >= c.scrollHeight ? MG_Utils.addClass(r, "hidden") : MG_Utils.removeClass(r, "hidden")
    }), c.addEventListener("scroll", function() {
        c.scrollTop + 2 + c.clientHeight >= c.scrollHeight ? MG_Utils.addClass(r, "hidden") : MG_Utils.removeClass(r, "hidden")
    }), r.addEventListener("click", function() {
        var e = c.clientHeight - d.offsetHeight;
        MG_Utils.hasClass(document.querySelectorAll("html")[0], "safari") ? c.scroll(0, 1e3) : c.scrollTo({
            top: c.scrollHeight,
            behavior: "smooth"
        }), d.style.top = e + "px", MG_Utils.addClass(r, "hidden")
    })
});