var livePopModal, livePopModalContent = document.querySelector("#liveModal");
livePopModalContent && (livePopModal = new MG_Modal({
    content: livePopModalContent,
    className: "livePopContainer",
    closeButton: !1,
    closeDocument: !1
})), head.ready(document, function() {
    getCookie("skip_popup_alert") || void 0 === livePopModal || livePopModal.openModal(), null != document.querySelector("#js_ignore") && MG_Utils.addEventHandler(document.querySelector("#js_ignore"), "click", function(o) {
        setCookie("skip_popup_alert", 1), livePopModal.closeModal()
    }), null != document.querySelector("#js_watchSuperBowl") && MG_Utils.addEventHandler(document.querySelector("#js_watchSuperBowl"), "click", function(o) {
        setCookie("skip_popup_alert", 1), livePopModal.closeModal(), location.href = "/shows/brazzers"
    })
});