let RecentlyFeaturedObserver = function() {
    let t;

    function n(e) {
        t && t.unobserve(e)
    }
    return {
        init: function() {
            "IntersectionObserver" in window && (t = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    e.isIntersecting && "undefined" != typeof ga && (e = document.getElementById("mostRecentVideosSection"), ga("send", "event", "Homepage", "impression", "Viewed RF", {
                        nonInteraction: !0
                    }), e) && n(e)
                })
            }, {
                root: null,
                rootMargin: "0px",
                threshold: 0
            }))
        },
        isObserverSet: function() {
            return void 0 !== t
        },
        subscribe: function(e) {
            t && t.observe(e)
        },
        unsubscribe: n
    }
}();
MG_Utils.domReady(function() {
    var e = document.getElementById("js-popularPornstars"),
        t = document.getElementById("js-popularCategories"),
        n = ("undefined" != typeof New_Homepage_Design && New_Homepage_Design && (n = document.querySelector("li.sniperModeEngaged iframe"), p = document.querySelector("li.emptyBlockSpace"), !n) && p && (p.style.display = "block"), e && t && (Math.floor(100 * Math.random() + 1) <= 50 ? (MG_Utils.removeClass(e, "hidden"), t.parentNode.removeChild(t)) : (MG_Utils.removeClass(t, "hidden"), e.parentNode.removeChild(e))), document.querySelector(".logoFooterWrapper")),
        i = ("undefined" != typeof FRONT_INDEX && n && FRONT_INDEX.isPremium && MG_Utils.addClass(n, "premiumFooter"), "undefined" != typeof SEARCH_ENGINE_DATA && document.addEventListener("click", function(e) {
            var o = e.target,
                t = o && o.parentNode;
            if (o && (MG_Utils.hasClass(o, "js-linkVideoThumb") || MG_Utils.hasClass(o, "thumbnailTitle")) || t && MG_Utils.hasClass(t, "title")) {
                var t = MG_Utils.closest(o, ".videoblock"),
                    n = MG_Utils.closest(o, "ul.videos"),
                    t = t && MG_Utils.getData(t, "video-vkey"),
                    n = n && n.id,
                    i = "";
                if (t && "recommended-videos" == n && SEARCH_ENGINE_DATA.searchEngineData) e.preventDefault(), i = SEARCH_ENGINE_DATA.searchEngineData.replace("<Section>", 1);
                else if (t && SEARCH_ENGINE_DATA.newDimension51 && (e.preventDefault(), n)) switch (n) {
                    case "hotVideosSection":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 14);
                        break;
                    case "mostViewedPerCountry":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 15);
                        break;
                    case "mostViewedVerifiedAmateursSection":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 16);
                        break;
                    case "bestOf":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 17);
                        break;
                    case "mostRecentVideosSection":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 18);
                        break;
                    case "watchAgain":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 19);
                        break;
                    case "videoFeedsSection":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 20);
                        break;
                    case "topContentPartnersSection":
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 22);
                        break;
                    default:
                        i = SEARCH_ENGINE_DATA.newDimension51.replace("<Section>", 23)
                }
                if (i && Etahub.setCookie(t, i), "undefined" != typeof New_Homepage_Design && New_Homepage_Design && "A" === o.tagName && (MG_Utils.hasClass(o, "js-linkVideoThumb") || MG_Utils.hasClass(o, "thumbnailTitle"))) {
                    let t = 0,
                        n = void 0 !== o.dataset ? o.dataset.videoId : 0,
                        i = document.querySelectorAll("#singleFeedSection .pcVideoListItem"),
                        e = MG_Utils.closest(o, "li.videoblock"),
                        s = e && e.dataset ? e.dataset.eventLabel : null;
                    if (n) {
                        for (let e = 0; e < i.length; e++)
                            if (i[e].id === "v" + n) {
                                t = e + 1;
                                break
                            }
                        phubGenericFuncModule.sendGAEvent("Homepage", "homepage thumbnail - pos " + t, .01)
                    }
                    s && phubGenericFuncModule.sendGAEvent("Homepage", s, 1)
                }
                "_blank" === o.target ? window.open(o.href) : window.location.href = o.href
            }
        }), document.querySelectorAll("[data-hpBlockName]"));
    for (let e = 0; e < i.length; e++) i[e] && i[e].addEventListener("click", function(e) {
        var t = e.target,
            e = e.currentTarget,
            e = e ? e.dataset.hpblockname : "",
            n = t && t.parentNode;
        t && "A" === t.tagName && n && (MG_Utils.hasClass(t, "sectionTitleLink") || MG_Utils.hasClass(t, "js-linkVideoThumb") || MG_Utils.hasClass(n, "title") || MG_Utils.hasClass(n, "trendingNow")) && (MG_Utils.hasClass(n, "trendingNow") ? phubGenericFuncModule.sendGAEvent("Homepage", e, 1) : phubGenericFuncModule.sendGAEvent("Homepage", e))
    });
    const s = document.querySelector(".scrollableWrapper"),
        o = document.querySelector(".trendingNowWrapper"),
        a = document.querySelector(".leftArrowWrapper"),
        r = document.querySelector(".rightArrowWrapper");
    var l, d = 0;

    function c() {
        l = s && o ? o.clientWidth - s.clientWidth : 0
    }

    function u(e) {
        return Math.min(Math.max(e, 0), l)
    }

    function m() {
        o && (0 === d ? a && MG_Utils.addClass(a, "hide") : a && MG_Utils.removeClass(a, "hide"), d === l ? r && MG_Utils.addClass(r, "hide") : r && MG_Utils.removeClass(r, "hide"))
    }
    window.addEventListener("resize", c), c(), o && o.addEventListener("wheel", e => {
        e.preventDefault(), d = u(d += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY), o.style.webkitTransform = "translateX(-" + d + "px)", o.style.transform = "translateX(-" + d + "px)", m()
    }), a && a.addEventListener("click", function() {
        o && (d = u(d -= 200), o.style.webkitTransform = "translateX(-" + d + "px)", o.style.transform = "translateX(-" + d + "px)", m())
    }), r && r.addEventListener("click", function() {
        o && (d = u(d += 200), o.style.webkitTransform = "translateX(-" + d + "px)", o.style.transform = "translateX(-" + d + "px)", m())
    });
    var p = document.getElementById("mostRecentVideosSection");
    void 0 !== RecentlyFeaturedObserver && p && (RecentlyFeaturedObserver.init(), RecentlyFeaturedObserver.isObserverSet()) && RecentlyFeaturedObserver.subscribe(p)
});