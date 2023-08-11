var premiumModal, gatewayModal, welcomeCookie = "undefined" != typeof welcomeModalCookie ? welcomeModalCookie : "",
    premiumModalContent = document.getElementById("premium-modal"),
    gatewayModalContent = (premiumModalContent && (premiumModal = new MG_Modal({
        content: premiumModalContent,
        className: "premiumContainer",
        closeButton: !1
    })), document.getElementById("gateway-modal"));

function triggerUpselllGatewayModal(e, t) {
    var n = "Player2160pUpsell" === e;
    MG_Utils.ajaxCall({
        type: "GET",
        url: "/premium/ajax_build_upgrade_url",
        data: {
            entry_code: e,
            segment: t
        },
        dataType: "json",
        success: function(e) {
            if ("PASS" == e.success) {
                var t = document.querySelector('[id*="gateway-text"]'),
                    o = t ? t.querySelectorAll("span") : null;
                if (o)
                    for (var a = 0; a < o.length; a++) o[a].style.display = "none";
                "undefined" != typeof skipGatewayModal || "no_gateway" == e.gateway_modal ? window.location.href = e.url : "undefined" == typeof skipGatewayModal && "no_gateway" == e.gateway_modal || (n && (e.url = 0 <= e.url.indexOf("?") ? e.url + "&type=Player2160pUpsell" : e.url + "?type=Player2160pUpsell"), document.querySelector('[id*="gateway-text"]').querySelector("span." + e.gateway_modal).style.display = "block", document.querySelector('[id*="gateway-button"]').setAttribute("href", e.url), void 0 !== gatewayModal && gatewayModal.openModal(), document.querySelector(".closeMTubes.buttonMTubes") && (document.querySelector(".closeMTubes.buttonMTubes").textContent = MODAL_PREMIUM_MESSAGE.backMessage))
            }
        }
    })
}

function triggerGatewayModal(e, t, o) {
    MG_Utils.preventDefault(e);
    var a = {
            entry_code: MG_Utils.getData(e.currentTarget, "entrycode"),
            segment: MG_Utils.getData(e.currentTarget, "segment")
        },
        n = e.currentTarget.target || e.currentTarget.dataset.target;
    void 0 !== o && (a.viewkey = o), MG_Utils.ajaxCall({
        type: "GET",
        url: "/premium/ajax_build_upgrade_url",
        data: a,
        dataType: "json",
        success: function(e) {
            "PASS" == e.success && (void 0 !== t || "no_gateway" == e.gateway_modal || "gateway_noAds" == e.gateway_modal || "undefined" != typeof WIDGET_MODAL_PREMIUM && WIDGET_MODAL_PREMIUM.showExpiredGift ? "_blank" === n ? window.open(e.url) : window.location.href = e.url : void 0 !== trialEndedModal ? trialEndedModal.closeModal(function() {
                gatewayPremiumModals(e)
            }) : gatewayPremiumModals(e))
        }
    })
}

function updateUSThanksgivingPromotion2017(e) {
    0 == e ? (void 0 === WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.addedValueText && ((e = document.createElement("p")).className = "addedValue-text", e.innerHTML = document.querySelector(".hasPromotion2017 .addedValue-text").innerHTML, WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.addedValueText = e), void 0 === WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.ctaButtonText && (WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.ctaButtonText = document.querySelector('[id*="gateway-button"]').innerText), null != document.querySelector(".hasPromotion2017 .addedValue-text") && document.querySelector(".hasPromotion2017 .addedValue-text").remove(), document.querySelector('[id*="gateway-button"]').innerText = WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.newButtonText) : (document.querySelector('[id*="gateway-modal"] .hasPromotion2017').insertBefore(WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.addedValueText, document.querySelector('[id*="gateway-button"]')), document.querySelector('[id*="gateway-button"]').innerText = WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.ctaButtonText)
}

function gatewayPremiumModals(e) {
    if (-1 != e.gateway_modal.indexOf("gateway")) {
        if ("no_gateway" != e.gateway_modal) {
            for (var t = document.querySelector('[id*="gateway-text"]').children, o = 0; o < t.length; o++) t[o].style.display = "none";
            e.gateway_modal && (document.querySelector('[id*="gateway-text"]').querySelector("span." + e.gateway_modal).style.display = "inline", "undefined" != typeof WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017) && ("gateway_finally" == e.gateway_modal ? (updateUSThanksgivingPromotion2017(!1), WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.updated = !0) : 1 == WIDGET_MODAL_PREMIUM_US_THANKSGIVING_2017.updated && updateUSThanksgivingPromotion2017(!0)), document.querySelector('[id*="gateway-button"]').setAttribute("href", e.url), void 0 !== gatewayModal && gatewayModal.openModal()
        }
    } else {
        for (var a, n, l = document.querySelector('[id*="premium-text"]').querySelectorAll("section"), o = 0; o < l.length; o++) l[o].style.display = "none";
        e.gateway_modal && (a = e.gateway_modal.substring(e.gateway_modal.length - 2), (n = document.querySelector('[id*="premium-text"]').querySelector("section." + e.gateway_modal.replace(a, "premium"))).style.display = "block", n.querySelector('[id*="premium-button"]').setAttribute("href", e.url), document.querySelector('[class*="premiumWrapper"]').querySelector('[class*="cancelButton"]').setAttribute("data-modal", e.gateway_modal.replace(e.gateway_modal.substring(6), "premium")), document.querySelector('[id*="premium-text"]').className = e.gateway_modal.replace(a, "Content"), "premiumWrapper" != document.querySelector('[class*="premiumWrapper"]').getAttribute("class").split(" ").pop() && MG_Utils.removeClass(document.querySelector('[class*="premiumWrapper"]'), document.querySelector('[class*="premiumWrapper"]').getAttribute("class").split(" ").pop()), "A1" == a ? MG_Utils.addClass(document.querySelector('[class*="premiumWrapper"]'), "bg-premium-modals-a1") : MG_Utils.addClass(document.querySelector('[class*="premiumWrapper"]'), "bg-premium-modals-a2")), void 0 !== premiumModal && premiumModal.openModal()
    }
    document.querySelector(".closeMTubes.buttonMTubes") && (document.querySelector(".closeMTubes.buttonMTubes").textContent = MODAL_PREMIUM_MESSAGE.backMessage)
}
gatewayModalContent && (gatewayModal = new MG_Modal({
    content: gatewayModalContent,
    className: "gatewayContainer"
}));
var welcomeModal, welcomeModalContent = document.getElementById("premium-welcome-modal");

function welcomeModel(e) {
    document.getElementById("dontAsk").checked && MG_Utils.ajaxCall({
        type: "POST",
        url: MG_Utils.getData(document.querySelector('[id*="dontAsk"]'), "cookie")
    }), e && MG_Utils.ajaxCall({
        type: "POST",
        url: MG_Utils.getData(document.getElementById("go-to-pornhub"), "logout")
    }).always(function() {
        MG_Utils.ajaxCall({
            url: premiumRedirectCookieURL + "&do=delete",
            cache: !1,
            xhrFields: {
                withCredentials: !0
            },
            crossDomain: !0
        }).done(function() {
            window.location.href = MG_Utils.getData(document.querySelector('[id*="go-to-pornhub"]'), "pornhub-redirect")
        })
    }), welcomeModal.closeModal(function() {
        MG_Utils.ajaxCall({
            type: "GET",
            url: "/front/cookie_kill_ajax",
            data: {
                cookie_name: "showPremiumWelcomeFromPornhub"
            }
        })
    })
}
welcomeModalContent && (welcomeModal = new MG_Modal({
    content: welcomeModalContent,
    className: "welcomeModalContainer",
    closeDocument: !1,
    closeButton: !1
}));
var expiredModal, expiredModalContent = document.getElementById("premium-expired-modal");

function setModalCookieHidden() {
    setCookie("expiredModalShown", 1)
}

function triggerExpiredModal() {
    null == getCookie("expiredModalShown") && (void 0 !== expiredModal && expiredModal.openModal(setModalCookieHidden), document.querySelector(".closeMTubes.buttonMTubes")) && (document.querySelector(".closeMTubes.buttonMTubes").textContent = MODAL_PREMIUM_MESSAGE.backMessage)
}
expiredModalContent && (expiredModal = new MG_Modal({
    content: expiredModalContent,
    className: "expiredModalContainer"
}));
var trialEndedModal, giftingEndedModal, trialModal, reactivationModal, trialEndedModalContent = document.getElementById("trial-ended-modal"),
    giftingEndedModalContent = (trialEndedModalContent && (trialEndedModal = new MG_Modal({
        content: trialEndedModalContent,
        className: "trialEndedModalContainer"
    })), document.getElementById("giftingExpired")),
    trialModalContent = (giftingEndedModalContent && (giftingEndedModal = new MG_Modal({
        content: giftingEndedModalContent,
        className: "giftingEndedModalContainer"
    })), document.getElementById("trial-step1-modal")),
    reactivationModalContent = (trialModalContent && (trialModal = new MG_Modal({
        content: trialModalContent,
        className: "trialModalContainer"
    })), document.getElementById("reactivationModal"));

function setModalSessionHidden(e) {
    setCookie(e + "-shown", 1)
}

function triggerTrialModal(e) {
    if (null != getCookie("showModalPremiumTry") && "trial-step1-modal" == e) setCookieAdvanced("premiumTrialAccepted", "1", 1), void 0 !== trialModal && trialModal.openModal(setModalSessionHidden(e)), deleteCookieAdvanced("showModalPremiumTry");
    else if (null == getCookie(e + "-shown")) switch (e) {
        case "trial-step1-modal":
            void 0 !== trialModal && trialModal.openModal(setModalSessionHidden(e));
            break;
        case "trial-ended-modal":
            void 0 !== trialEndedModal && trialEndedModal.openModal(setModalSessionHidden(e));
            break;
        case "giftingExpired":
            void 0 !== giftingEndedModal && giftingEndedModal.openModal(setModalSessionHidden(e))
    }
    document.querySelector(".closeMTubes.buttonMTubes") && (document.querySelector(".closeMTubes.buttonMTubes").textContent = MODAL_PREMIUM_MESSAGE.backMessage)
}
reactivationModalContent && (reactivationModal = new MG_Modal({
    content: reactivationModalContent,
    className: "reactivationModalContainer"
}));
var yearlyModal, yearlyModalContent = document.getElementById("yearly-modal");

function triggerYearlyModal() {
    void 0 !== yearlyModal && yearlyModal.openModal(function() {
        document.querySelector(".closeMTubes.buttonMTubes") && (document.querySelector(".closeMTubes.buttonMTubes").textContent = MODAL_PREMIUM_MESSAGE.backMessage)
    })
}
yearlyModalContent && (yearlyModal = new MG_Modal({
    content: yearlyModalContent,
    className: "yearlyModalContainer"
}));
var freeCovidModalContent = document.getElementById("free-covid-modal"),
    freeCovidModal = null;

function updateMainHubToastPosition(e) {
    var t = document.getElementById("mainHubToastMessage");
    e ? (e = document.getElementById("socialMediaToastMessage"), t && MG_Utils.removeClass(t, "extraHeight"), e && MG_Utils.removeClass(e, "extraHeight")) : t && MG_Utils.addClass(t, "extraHeight")
}
freeCovidModalContent && (freeCovidModal = new MG_Modal({
    content: freeCovidModalContent,
    className: "freeCovidModalContainer",
    closeButton: !1
})), MG_Utils.domReady(function() {
    if (freeCovidModal ? (MG_Utils.storage.hasLocalStorage && (a = localStorage.getItem("covidPageViewCount") ? (a = localStorage.getItem("covidPageViewCount"), parseInt(a) + 1) : 1, "undefined" != typeof CookieHelper) && "3" !== CookieHelper.getCurrentConsent() && localStorage.setItem("covidPageViewCount", a), a && (1 == a ? freeCovidModal.openModal() : 1 != a && a % 10 == 0 && freeCovidModal.openModal(function() {
            var e = document.querySelector("#modalWrapMTubes .js-upgradeText"),
                t = document.querySelector("#modalWrapMTubes #freePromoUpgrade");
            e && (e.textContent = FREE_COVID_MODAL.upgradeText), t && (t.innerText = FREE_COVID_MODAL.upgradeBtn, t.href = FREE_COVID_MODAL.upGradeLink)
        })), (a = document.querySelector("#js-CloseCovidModal")) && a.addEventListener("click", function() {
            freeCovidModal.closeModal()
        })) : localStorage.getItem("covidPageViewCount") && localStorage.removeItem("covidPageViewCount"), "undefined" != typeof WIDGET_MODAL_PREMIUM && "premium-free-trial-ended" === WIDGET_MODAL_PREMIUM.modalReturnName && (WIDGET_MODAL_PREMIUM.showExpiredGift ? triggerTrialModal("giftingExpired") : triggerTrialModal("trial-ended-modal")), document.addEventListener("click", function(e) {
            e = MG_Utils.getEventTarget(e);
            e && MG_Utils.hasClass(e, "js-notificationDone") && MG_Utils.ajaxCall({
                url: isNotifiedObj.ajaxUrl,
                data: {
                    token: isNotifiedObj.token,
                    notificationId: isNotifiedObj.notificationId
                },
                type: "post",
                success: function(e) {
                    setCookie("notified_sponsor_" + isNotifiedObj.liuId, 1, 365)
                }
            })
        }), document.addEventListener("click", function(e) {
            if ("js-startTrial" == MG_Utils.getEventTarget(e).id) {
                MG_Utils.preventDefault(e);
                for (var t = document.querySelectorAll(".offerContent, .offerButtons, .offerLasts"), o = 0; o < t.length; o++) t[o].style.display = "none";
                for (var a = document.querySelectorAll(".trialStartedWrapper, .startTrialButton, .premiumPrice"), o = 0; o < a.length; o++) a[o].style.display = "block"
            }
        }), null != document.getElementById("js-trialExpireReminder") && (null == sessionStorage.getItem("trialBottomNotificationHidden") && (updateMainHubToastPosition(0), MG_Utils.removeClass(document.getElementById("js-trialExpireReminder"), "hidden")), a = document.getElementById("js-closeTrialNotification")) && a.addEventListener("click", function(e) {
            MG_Utils.preventDefault(e), sessionStorage.setItem("trialBottomNotificationHidden", "1"), updateMainHubToastPosition(1), MG_Utils.addClass(document.getElementById("js-trialExpireReminder"), "hidden")
        }), welcomeCookie && (void 0 !== welcomeModal && welcomeModal.openModal(), document.querySelector(".closeMTubes.buttonMTubes")) && (document.querySelector(".closeMTubes.buttonMTubes").textContent = MODAL_PREMIUM_MESSAGE.backMessage), document.addEventListener("click", function(e) {
            var t = MG_Utils.getEventTarget(e);
            if (MG_Utils.hasClass(t, "cancelButton")) {
                MG_Utils.preventDefault(e);
                t = e.target;
                switch (MG_Utils.getData(t, "modal")) {
                    case "trial-ended":
                        void 0 !== trialEndedModal && trialEndedModal.closeModal();
                        break;
                    case "trial-step1":
                        void 0 !== trialModal && trialModal.closeModal();
                        break;
                    case "gift-ended":
                        void 0 !== giftingEndedModal && giftingEndedModal.closeModal();
                        break;
                    case "createPlaylist":
                        "undefined" != typeof createPlaylistModal && createPlaylistModal.closeModal();
                        break;
                    case "friendRequestModal":
                        "undefined" != typeof friendRequestModal && friendRequestModal.closeModal();
                        break;
                    case "info":
                        "undefined" != typeof infoModalHolder && infoModalHolder.closeModal();
                        break;
                    case "reactivation":
                        void 0 !== reactivationModal && reactivationModal.closeModal();
                        break;
                    case "Modal_premium":
                        void 0 !== premiumModal && premiumModal.closeModal()
                }
            }
        }), null != document.getElementById("js-reactivation") && (updateMainHubToastPosition(0), MG_Utils.removeClass(document.getElementById("js-reactivation"), "hidden"), document.addEventListener("click", function(e) {
            "js-closeReactivation" == MG_Utils.getEventTarget(e).id && (MG_Utils.preventDefault(e), MG_Utils.ajaxCall({
                url: "/user/dismiss_reactivate_subscription",
                beforeSend: function() {
                    updateMainHubToastPosition(1), MG_Utils.addClass(document.getElementById("js-reactivation"), "hidden")
                }
            }))
        }), document.addEventListener("click", function(e) {
            var a, t = MG_Utils.getEventTarget(e);
            ("js-reactivate" == t.id || t.parentElement && "js-reactivate" == t.parentElement.id) && (MG_Utils.preventDefault(e), a = document.getElementById("js-reactivate"), MG_Utils.ajaxCall({
                url: "/user/reactivate_subscription",
                beforeSend: function() {
                    a.setAttribute("disabled", !0);
                    for (var e = MG_Utils.children(a), t = 0; t < e.length; t++) MG_Utils.addClass(e[t], "visuallyHidden");
                    var o = document.createElement("span");
                    o.className = "spinner", a.appendChild(o)
                },
                success: function(e) {
                    if (e.success) updateMainHubToastPosition(1), MG_Utils.addClass(document.getElementById("js-reactivation"), "hidden"), void 0 !== reactivationModal && reactivationModal.openModal(), document.querySelector(".closeMTubes.buttonMTubes") && (document.querySelector(".closeMTubes.buttonMTubes").textContent = MODAL_PREMIUM_MESSAGE.backMessage);
                    else {
                        a.removeAttribute("disabled"), a.removeChild(a.querySelector(".spinner"));
                        for (var t = MG_Utils.children(a), o = 0; o < t.length; o++) MG_Utils.removeClass(t[o], "visuallyHidden")
                    }
                }
            }))
        })), triggerYearlyModal(), null != document.querySelector(".yearlyModalContainer")) {
        MG_Utils.addClass(document.querySelector(".yearlyModalContainer").querySelector("button"), "yearlyClose");
        var e = MG_Utils.children(document.querySelector(".yearlyModalContainer"));
        for (i = 0; i < e.length; i++) e[i] && e[i].addEventListener("click", function(e) {
            e.stopPropagation()
        });
        var t = document.querySelectorAll(".yearlyClose, #js-dismissSubscription");
        for (i = 0; i < t.length; i++) t[i] && t[i].addEventListener("click", function(e) {
            MG_Utils.preventDefault(e), MG_Utils.ajaxCall({
                url: "/user/dismiss_switch_yearly_subscription",
                success: function() {
                    yearlyModal.closeModal()
                }
            })
        })
    }
    var o, a = document.querySelector(".changeTypeBtnWrapper #js_changeTypeBtn"),
        n = document.getElementById("changTypeModal");
    n && a && (o = new MG_Modal({
        content: n,
        className: "change_type_modal",
        closeButton: !0
    }), a.addEventListener("click", function(e) {
        e.preventDefault(), o.openModal();
        e = document.getElementById("changeTypeConfirmBtn");
        e && e.addEventListener("click", function(e) {
            MG_Utils.ajaxCall({
                url: "/lovers/ajax_upgrade",
                data: {},
                type: "POST",
                success: function(e) {
                    var t;
                    e && "success" == e.success ? e.payload && e.payload.upgrade_url && (window.location.href = e.payload.upgrade_url) : e && e.messages && (t = n.querySelector(".requestErrors")) && (t.innerHTML = e.messages)
                }
            })
        })
    }))
});
var vueExpiredModal = function() {
    let t;
    return {
        open: function() {
            var e;
            void 0 === t ? (e = document.createElement("v-expired-modal")) && (document.body.insertAdjacentElement("afterbegin", e), Vue.customElement("v-expired-modal", {
                data: function() {
                    return {
                        show: !1
                    }
                },
                methods: {
                    open: function() {
                        this.show = !0
                    },
                    closeModal: function() {
                        this.show = !1
                    },
                    buttonClick: function() {
                        this.closeModal()
                    }
                },
                computed: {
                    i18n: function() {
                        return "undefined" != typeof EXPIRED_MODAL_DATA ? EXPIRED_MODAL_DATA.translation : {}
                    },
                    subscribeUrl: function() {
                        return "undefined" != typeof EXPIRED_MODAL_DATA ? EXPIRED_MODAL_DATA.spicevidsUserURL : ""
                    },
                    token: function() {
                        return "undefined" != typeof EXPIRED_MODAL_DATA ? EXPIRED_MODAL_DATA.spicevidsUserToken : ""
                    },
                    clientId: function() {
                        return "undefined" != typeof EXPIRED_MODAL_DATA ? EXPIRED_MODAL_DATA.spicevidsUserClientId : ""
                    }
                },
                template: `<div class="fadeInMTubes containerMTubes premiumExpiredModalContainer isVisibleMTubes" :class="{'elOpenMTubes': show}">
                <div class="modalMTubes premiumExpiredModalContainer elOpenMTubes">
                    <div class="contentMTubes"> 
                        <div class="modal-body"> 
                            <div class="modal-title">{{i18n.title}}</div>
                            <div class="modal-content">
                                <p v-html="i18n.para1"></p>
                                <p v-html="i18n.para2"></p>
                                <p v-html="i18n.para3"></p>
                            </div>
                            <div class="modalActions">
                                <form name="spiceVidSubmit" :action="subscribeUrl" method="POST" target="_blank" rel="nofollow">
                                    <input type="hidden" name="purchaseToken" :value="token"/>
                                    <input type="hidden" name="clientId" :value="clientId"/>
                                    <button class="buttonBase orangeButton" @click="buttonClick">{{i18n.btnText}}</button>
                                </form>                                
                                <span class="disclaimer">{{i18n.disclaimer}}</span>
                            </div>
                        </div>
                    </div>
                    <button class="ph-icon-clear buttonMTubes" @click="closeModal"></button>
                </div>
			</div>`
            }), t = e.getVueInstance()) && setTimeout(t.open, 100) : setTimeout(t.open, 0)
        }
    }
}();
"undefined" != typeof EXPIRED_MODAL_DATA && void 0 !== vueExpiredModal && EXPIRED_MODAL_DATA.showModal && EXPIRED_MODAL_DATA.spicevidsUserURL && vueExpiredModal.open();