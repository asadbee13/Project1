function promoBanner() {
    var e, n = document.querySelectorAll(".premiumPromoBannerWrapper"),
        r = SessionStorageManager.getInstance();
    !n.length || "" == smallImageFg && "" == smallImageBg || ((e = document.querySelector(".premiumPromoBannerClose")) && e.addEventListener("click", function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, "persistant" == persistantMode ? r.set("promoBannerPersistant", "1", 1) : r.set("premiumPromoBanner" + promobannerId, "1", 1), this.closest(".premiumPromoBannerWrapper").style.display = "none"
    }), "persistant" == persistantMode ? r.get("promoBannerPersistant") || (n[0].style.display = "block") : r.get("premiumPromoBanner" + promobannerId) || (n[0].style.display = "block"), MG_Utils.addEventHandler(document.querySelector(".promoBannerClassAnchor"), "click", function() {
        "undefined" != typeof mixpanel && "undefined" != typeof promoClick && mixpanel.track("Promo Banner", promoClick)
    }))
}
MG_Utils.domReady(promoBanner);