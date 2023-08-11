const Signinbox = {
        recaptchaCompleted: !1,
        showCaptcha: !1,
        container: null,
        config: null,
        init: function() {
            var e, t, i;
            this.container && this.config ? (e = this.container.querySelector(".js-signinUsername"), t = this.container.querySelector(".js-signinPassword"), i = this.container.querySelector(".js-loginSubmit"), e.focus(), i.addEventListener("click", this.loginClickFunction.bind(this)), e.addEventListener("keydown", this.keyDownFunction.bind(this)), t.addEventListener("keydown", this.keyDownFunction.bind(this)), MG_Utils.hasClass(i, "disabled") || (i.setAttribute("disabled", "disabled"), MG_Utils.addClass(i, "disabled")), e.addEventListener("input", this.inputFunction.bind(this)), t.addEventListener("input", this.inputFunction.bind(this)), e && 0 < e.value.length && e.dispatchEvent(new Event("input")), t && 0 < t.value.length && t.dispatchEvent(new Event("input"))) : console.error("container & config can't be null")
        },
        captchaAcknowledgement: function(e) {
            if (e) switch (e) {
                case "verified":
                    this.recaptchaCompleted = !0, this.toggleButtonDisable(!1);
                    break;
                case "expired":
                case "error":
                    this.toggleButtonDisable(!0);
                    break;
                default:
                    return
            }
        },
        toggleButtonDisable: function(e) {
            var t = this.container.querySelector(".js-loginSubmit");
            e ? MG_Utils.addClass(t, "disabled") : MG_Utils.removeClass(t, "disabled")
        },
        toggleElementDisable: function(e, t, i) {
            e = document.getElementById(e);
            i ? e && !MG_Utils.hasClass(e, "disabled") && MG_Utils.addClass(e, "disabled") : e && MG_Utils.hasClass(e, "disabled") && MG_Utils.removeClass(e, "disabled")
        },
        loginAjax: function() {
            var i = () => {
                this.toggleButtonDisable(!0), jQuery.ajax({
                    type: "POST",
                    url: this.config.loginUrl,
                    cache: !1,
                    dataType: "json",
                    data: jQuery(".js-loginForm").serialize(),
                    success: this.loginAjaxSuccess.bind(this),
                    error: this.loginFailed.bind(this)
                })
            };
            try {
                let e = this.container.querySelector(".g-recaptcha"),
                    t = !e || !e.firstChild;
                null != typeof CaptachaComponents && function() {
                    if (t) return !0; {
                        let e = !1;
                        return e = document.querySelectorAll(".g-recaptcha").length ? 0 < CaptachaComponents.getCaptchaResponse(this.getCaptchaInstanceIndex()).length : e
                    }
                }() && i()
            } catch (e) {
                i()
            }
        },
        setupTwoStepVerification: function(e) {
            let t = ".default2fa";
            switch (e.twoStepVerificationType) {
                case "google2fa":
                    t = ".google2fa";
                    break;
                case "email":
                    t = ".email2fa"
            }
            var i = document.querySelectorAll(t),
                o = document.querySelector(".js-userVerificationModal");
            if (o) {
                MG_Utils.hasClass(o.parentElement, "modal-body") && MG_Utils.addClass(o.parentElement, "userVerificationModal");
                for (let e = 0; e < i.length; e++) MG_Utils.hasClass(i[e], "displayNone") && MG_Utils.removeClass(i[e], "displayNone");
                MG_Utils.removeClass(o, "displayNone");
                const a = o.querySelector("#userPhoneNumber"),
                    n = o.querySelector("#userEmail"),
                    s = o.querySelector("#enterVerificationCode"),
                    r = o.querySelector("#btnVerifyCode"),
                    l = o.querySelector("#verificationEnabledUsername"),
                    d = o.querySelector("#verificationEnabledToken"),
                    c = o.querySelector("#resendVerificationCode"),
                    u = o.querySelector("#authyIdHashed"),
                    m = o.querySelector("#authyId");
                c && (o.dataset.type = e.twoStepVerificationType || "existingLegacy", a && (a.innerHTML = e.phoneNumber), n && (n.innerHTML = e.email), l && d && (l.value = e.username, d.value = e.autoLoginParameter), m && u && (m.value = e.authyId, u.value = e.authyIdHashed), s && r && (MG_Utils.addEventHandler(s, "keyup", function(e) {
                    "" !== s.value ? MG_Utils.hasClass(r, "disabled") && (MG_Utils.removeClass(r, "disabled"), MG_Utils.removeClass(c, "disabled")) : MG_Utils.hasClass(r, "disabled") || (MG_Utils.addClass(r, "disabled"), MG_Utils.addClass(c, "disabled"))
                }), r.addEventListener("click", e => {
                    e.preventDefault(), MG_Utils.hasClass(r, "disabled") || (MG_Utils.addClass(r, "disabled"), MG_Utils.addClass(c, "disabled"), this.loginTwoStepVerificationSend())
                }), s.addEventListener("keydown", e => {
                    var t = e.which || e.keyCode;
                    13 === t && (e.preventDefault(), MG_Utils.hasClass(r, "disabled") || (MG_Utils.addClass(r, "disabled"), MG_Utils.addClass(c, "disabled"), this.loginTwoStepVerificationSend())), 69 === t && e.preventDefault()
                })), c.addEventListener("click", this._twoStepVerificationResend.bind(this)))
            }
        },
        _twoStepVerificationResend: function(e) {
            e.preventDefault();
            const t = document.querySelector("#authyIdHashed"),
                i = document.querySelector("#authyId"),
                o = document.getElementById("enterVerificationCode"),
                a = document.querySelector(".twoStepVerificationMessage.verificationError"),
                n = i.value,
                s = t.value,
                r = document.querySelector("#modalWrapMTubes .resendCodeResponse");
            this.toggleElementDisable("resendVerificationCode", "disabled", !0), this.toggleElementDisable("btnVerifyCode", "disabled", !0), o && "" !== o.value && (o.value = ""), a && "" !== a.innerHTML && (a.innerHTML = ""), jQuery.ajax({
                type: "POST",
                url: this.config.urlResendCode,
                dataType: "json",
                data: {
                    authyId: n,
                    authyIdHashed: s,
                    token: this.config.token
                },
                success: e => {
                    r && (MG_Utils.removeClass(r, "displayNone"), this.toggleElementDisable("resendVerificationCode", "disabled", !1), "success" != e.status ? (MG_Utils.addClass(r, "verificationError"), jQuery(r).find(".resendCodeMessage").text(e.message)) : (MG_Utils.hasClass(r, "verificationError") && MG_Utils.removeClass(r, "verificationError"), MG_Utils.addClass(r, "verificationSuccess"), jQuery(r).find(".resendCodeMessage").text(e.message), setTimeout(function() {
                        MG_Utils.addClass(r, "displayNone")
                    }, 3e3)))
                },
                error: this.loginFailed.bind(this)
            })
        },
        loginTwoStepVerificationSend: function() {
            jQuery.ajax({
                type: "POST",
                url: this.config.loginUrl,
                data: jQuery("#modalWrapMTubes .js-userVerificationModal").serialize(),
                success: e => {
                    var t = document.querySelector("#modalWrapMTubes .twoStepVerificationMessage");
                    t && MG_Utils.removeClass(t, "displayNone"), this.toggleElementDisable("resendVerificationCode", "disabled", !1), "0" != e.success ? (t && MG_Utils.hasClass(t, "verificationError") && MG_Utils.removeClass(t, "verificationError"), MG_Utils.addClass(t, "verificationSuccess"), t.innerHTML = '<span class="greenLoader"></span>' + this.config.verificationSuccessfulMessage, this.callbackSuccess(e)) : "" != e.message && t ? (MG_Utils.addClass(t, "verificationError"), t.innerHTML = e.message) : "" == e.message && (alert(this.config.ajaxError), document.location.reload())
                },
                error: () => {
                    alert(this.config.ajaxError), document.location.reload()
                }
            })
        },
        getCaptchaInstanceIndex: function() {
            let i = this.container.querySelector(".g-recaptcha"),
                o = 0;
            return document.querySelectorAll(".g-recaptcha").length && [].forEach.call(document.querySelectorAll(".g-recaptcha"), function(e, t) {
                e === i && (o = t)
            }), o
        },
        setupCaptacha: function() {
            var e = this.container.querySelector(".g-recaptcha");
            e && null != typeof CaptachaComponents && (this.recaptchaCompleted ? CaptachaComponents.resetCaptcha(this.getCaptchaInstanceIndex()) : CaptachaComponents.registerComponent(e, this.captchaAcknowledgement.bind(this)))
        },
        premiumModalFromResponse: function(e) {
            expired_modal.startPremiumUrl = e.takeFreePremiumUrl, expired_modal.noThanksBtnUrl = e.redirectToPH, expired_modal.segment = e.segment, expired_modal.isExpiredPromoUser = e.showExpiredModal, this.signInUtilModal && this.signInUtilModal.closeModal(), e.showExpiredCovidModal ? expired_modal.showExpiredCovidModal() : expired_modal.showExpiredPromoModal(), this.toggleButtonDisable(!1)
        },
        callbackSuccess: function(e) {},
        loginAjaxSuccess: function(e) {},
        loginFailed: function() {
            this.toggleButtonDisable(!1), document.location.reload()
        },
        loginClickFunction: function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var e = this.container.querySelector(".js-loginSubmit"),
                t = this.container.querySelector(".js-signinUsername"),
                i = this.container.querySelector(".js-signinPassword");
            MG_Utils.hasClass(e, "disabled") || t && 0 < t.value.length && i && 0 < i.value.length && this.loginAjax()
        },
        inputFunction: function(e) {
            var t = this.container.querySelector(".js-loginSubmit"),
                i = this.container.querySelector(".js-signinUsername"),
                o = this.container.querySelector(".js-signinPassword");
            i && 0 < i.value.length && o && 0 < o.value.length ? (t && t.removeAttribute("disabled"), MG_Utils.removeClass(t, "disabled")) : (t && t.setAttribute("disabled", "disabled"), MG_Utils.addClass(t, "disabled"))
        },
        keyDownFunction: function(e) {
            13 == (e.which || e.keyCode) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e = this.container.querySelector(".js-loginSubmit"), MG_Utils.hasClass(e, "disabled") || this.loginAjax())
        }
    },
    expired_modal = {
        premiumPromoModal: null,
        expiredCovidModalContent: null,
        isExpiredPromoUser: !1,
        startPremiumUrl: "",
        noThanksBtnUrl: "",
        segment: "",
        init: function() {
            this.premiumPromoModal = document.getElementById("premium-promo-modal"), this.expiredCovidModalContent = document.getElementById("premium-covid-expired-modal"), this.premiumPromoModal && (this.promoModal = new MG_Modal({
                content: this.premiumPromoModal,
                className: "premiumPromoModalContainer",
                closeDocument: !1
            })), this.expiredCovidModalContent && (this.expiredCovidModal = new MG_Modal({
                content: this.expiredCovidModalContent,
                className: "expiredCovidModalContainer",
                closeDocument: !1
            }))
        },
        showExpiredPromoModal: function() {
            const e = this,
                t = "gay" === this.segment ? "promoModalWrapperGay" : "promoModalWrapperStraight",
                i = this.isExpiredPromoUser ? "promoModalWrapperExpired" : "";
            setTimeout(function() {
                e.promoModal.openModal(), jQuery(".premiumPromoModalContainer .promoModalWrapper").addClass(t), jQuery(".premiumPromoModalContainer .promoModalWrapper").addClass(i), e.attachHandlers()
            }, 0)
        },
        showExpiredCovidModal: function() {
            if (void 0 !== this.expiredCovidModal) {
                const e = this;
                setTimeout(function() {
                    e.expiredCovidModal.openModal(), jQuery(".expiredCovidModalContainer .freeWeek").on("click", function() {
                        document.location.assign(e.startPremiumUrl)
                    }), jQuery(".expiredCovidModalContainer .closeMTubes, .expiredCovidModalContainer #promoCancelFreeWeek").on("click", function() {
                        document.location.assign(e.noThanksBtnUrl)
                    })
                }, 0)
            }
        },
        attachHandlers: function() {
            const e = this;
            jQuery(".premiumPromoModalContainer #freePromoStartWeek").on("click", function() {
                document.location.assign(e.startPremiumUrl)
            }), jQuery(".premiumPromoModalContainer #promoCancelFreeWeek, .premiumPromoModalContainer .closeMTubes").on("click", function() {
                document.location.assign(e.noThanksBtnUrl)
            })
        }
    };