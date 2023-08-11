var windowWidth, body = document.querySelector("body"),
    bodyHeight = parseInt(body.clientHeight),
    bodyWidth = parseInt(body.clientWidth),
    urlType = null,
    fadeElements = document.querySelectorAll(".fade"),
    flipbook = new MG_Flipbook,
    addListener = (! function() {
        var o = [],
            n = !1,
            e = document.querySelector(".logoFooterWrapper");

        function t() {
            var e = Object.keys(playerObjList)[0],
                t = MGP.players[e];
            void 0 !== e && document.getElementById(e) && void 0 !== t && t.isPlaying() && (e = t.getCurrentTime(), o.push(5 * Math.floor(e / 5)))
        }
        e && MG_Utils.addClass(e, "homePageFooter"), (videoTimeTrackingCondition || reportTimeWatchedUrl) && (t(), setInterval(function() {
            t()
        }, 5e3));
        window.addEventListener("beforeunload", function() {
            if (0 < o.length && reportTimeWatchedUrl && !n) {
                var e = {
                    slices: o.toString(),
                    preroll: page_params.prerollFired,
                    userId: VIDEO_SHOW.trackUserId,
                    videoId: VIDEO_SHOW.trackVideoId
                };
                if (navigator.sendBeacon) {
                    var t, i = new FormData;
                    for (t in e) i.append(t, e[t]);
                    n = navigator.sendBeacon(reportTimeWatchedUrl, i)
                } else $j.ajax({
                    async: !1,
                    url: reportTimeWatchedUrl,
                    type: "POST",
                    dataType: "json",
                    data: e,
                    success: function(e) {
                        n = !0
                    }
                })
            }
        }, !1)
    }(), playlistViewCountCondition && MG_Utils.ajaxGetData({
        url: playlistViewCountIncrement
    }), [].forEach.call(fadeElements, function(t, e) {
        t.querySelector(".thumb") && MG_Utils.hasClass(t.querySelector(".thumb"), "js-videoThumbFlip") && MG_Utils.addEventHandler(t, "mouseenter", function() {
            var e = t.querySelector(".js-videoThumbFlip");
            e && MG_Utils.hasClass(e, "getACSceneId") ? flipbook.init({
                thumbnailsSets: [{
                    thumbnailsContainer: ".videos",
                    thumbnailsClassName: "js-videoThumbFlip",
                    excludeContainer: !1,
                    interval: 500,
                    cover: !1,
                    firstThumbnail: "1",
                    digitsSuffix: "/w285hd",
                    digitsPreffix: "baseline/",
                    incrementer: 1,
                    setLength: 8,
                    adultCentro: !0
                }, {
                    thumbnailsContainer: ".videos",
                    thumbnailsClassName: "ourFriendsFlip",
                    excludeContainer: !1,
                    interval: 500,
                    cover: !0
                }]
            }) : flipbook.init({
                thumbnailsSets: [{
                    thumbnailsContainer: ".videos",
                    thumbnailsClassName: "js-videoThumbFlip",
                    excludeContainer: !1,
                    interval: 500,
                    cover: !1,
                    firstThumbnail: "1",
                    digitsSuffix: ".jpg",
                    digitsPreffix: "/",
                    incrementer: 1,
                    setLength: 16
                }, {
                    thumbnailsContainer: ".videos",
                    thumbnailsClassName: "ourFriendsFlip",
                    excludeContainer: !1,
                    interval: 500,
                    cover: !0
                }]
            })
        })
    }), window.onresize = function() {
        try {
            sendMessageToChildren()
        } catch (e) {}
    }, handleChildResponse = function(e) {
        "ad_loaded" === e.data && sendMessageToChildren()
    }, window.addEventListener || window.attachEvent);

function sendMessageToChildren() {
    var e = document.querySelector("body"),
        e = (newWidth = parseInt(e.clientWidth), document.querySelector("#main_top_right"));
    e && newWidth && e.contentWindow.postMessage({
        current_width: newWidth,
        cutoff_width: "1600"
    }, "*")
}
addListener("message", handleChildResponse, !1), top === self || top.location.href.match(/^(http|https):\/\/(www.)*pornmd.com/gi) || (top.location.href = self.location.href);
var sponsor, sponsorModal = document.getElementById("sponsor-notification");
sponsorModal && (sponsor = new MG_Modal({
    content: sponsorModal,
    className: "sponsorNotificationWrapper",
    closeButton: !1,
    maxWidth: "750px"
})).openModal(function(e, t) {
    t = t.querySelectorAll(".scrollableDiv");
    t && MG_Scroll.init({
        selector: t,
        width: "auto",
        height: "100%",
        color: "#6A6A6A",
        size: "4px",
        alwaysVisible: !0,
        railVisible: !0,
        railOpacity: 1,
        railColor: "#2F2F2F",
        distance: 0,
        opacity: 1,
        railClass: "track3",
        barClass: "handle3",
        wrapperClass: "wrapper3"
    })
}), document.body.addEventListener("click", function(e) {
    e = e.target;
    MG_Utils.hasClass(e, "js-setMobileView") ? window.location.href = FOOTER_LINKS.mobile.replace(/&amp;/g, "&") : MG_Utils.hasClass(e, "js-setVisuallyImpairedView") && (window.location.href = FOOTER_LINKS.visuallyImpaired.replace(/&amp;/g, "&"))
});