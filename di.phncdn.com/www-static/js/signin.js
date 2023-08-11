const extendedPropsForModal = {
        signInUtilModal: null,
        config: TOP_BODY,
        show: function(e) {
            e = void 0 !== e ? e : {}, "undefined" != typeof event && event.preventDefault(), this.options = e;
            var t, i, n = document.getElementById("signinModal");
            if (navigator.userAgent && navigator.userAgent.match(/PLAYSTATION/)) return document.location.assign("http://" + location.hostname + "/login"), !1;
            "block" !== n.style.display && (i = !!(t = document.getElementById("rightMenu")) && t.querySelector(".closeHamMenu"), t && MG_Utils.hasClass(t, "active") && i && i.click(), this._openModal(e, n), "function" == typeof appendedTasteProfile) && appendedTasteProfile("js-tasteProfileLoginModal"), 1 == this.config.shorties && this._openModal(e, n)
        },
        _openModal: function(n, e) {
            e && (this.signInUtilModal = new MG_Modal({
                content: e,
                className: "loginModal"
            }), this.signInUtilModal) && (this.newInstance = !1, this.signInUtilModal.openModal((e, t) => {
                var i;
                this.container = t, this._toggleModalContent(this.container, n), n.subscribe && (t = this.container.querySelector(".js-loginForm"), (i = document.createElement("input")).type = "hidden", i.name = "subscribe", i.value = 1, t.appendChild(i)), this.init(), this.showCaptcha && (this._initializeCaptcha(), this.toggleButtonDisable(!0)), this.newInstance = !0
            }), e = document.querySelectorAll(".js_closeModal"), MG_Utils.addEventHandler(e, "click", () => {
                this.signInUtilModal.closeModal(), this.recaptchaCompleted = !1, this.container = null
            }), this.newInstance || this._toggleModalContent(this.container, n))
        },
        _toggleModalContent: function(e, t) {
            var i = e.querySelector(".signInWrap"),
                e = e.querySelector(".signUpWrap");
            i && e && ("signIn" === t.step || void 0 === t.step ? (this._resetForms(i), MG_Utils.addClass(e, "displayNone"), MG_Utils.removeClass(i, "displayNone"), "undefined" != typeof phCustomEvent && phCustomEvent.dispatch("initSignUp", !1)) : "signUp" === t.step && (MG_Utils.removeClass(e, "displayNone"), MG_Utils.addClass(i, "displayNone"), "undefined" != typeof phCustomEvent) && phCustomEvent.dispatch("initSignUp", !0))
        },
        _resetForms: function(e) {
            var t, i, n = e.getAttribute("data-step");
            n && "signIn" === n && (n = e.querySelector("form"), t = e.querySelector("#signinSubmit"), i = e.querySelector(".signinError"), e = e.querySelectorAll("input"), n && n.reset(), t && t.setAttribute("disabled", "disabled"), t && MG_Utils.addClass(t, "disabled"), e && MG_Utils.removeClassMultiple(e, "signin_error"), i) && (i.innerText = "")
        },
        _initializeCaptcha: function() {
            try {
                var e = this.container.querySelector(".g-recaptcha");
                null != typeof CaptachaComponents && e && CaptachaComponents.registerComponent(e, this.captchaAcknowledgement)
            } catch (e) {}
        },
        redirectFromResponse: function(e) {
            var t = this.container.querySelector("#signinLoggingin"),
                i = this.container.querySelector(".js-signinUsername"),
                n = this.container.querySelector(".js-signinPassword"),
                s = document.getElementsByClassName("ph-icon-error"),
                o = this.container.querySelector(".signinError");
            e.redirect ? (t.style.display = "block", o.style.display = "none", MG_Utils.removeClass(i, "signin_error"), MG_Utils.removeClass(n, "signin_error"), MG_Utils.addClassMultiple(s, "displayNone"), void 0 !== e.subscribe && 1 == e.subscribe ? document.querySelector(".subscribeButton button.login").setAttribute("data-login", "0") : this.options.callbackCustomRedirect && "function" == typeof this.options.callbackCustomRedirect ? this.options.callbackCustomRedirect(e) : document.location.assign(e.redirect)) : (o.style.display = "block", o.innerHTML = e.message, MG_Utils.addClass(i, "signin_error"), MG_Utils.addClass(n, "signin_error"), MG_Utils.removeClassMultiple(s, "displayNone"), this.toggleButtonDisable(!1))
        },
        callbackSuccess: function(i) {
            if ("0" == i.premium_redirect_cookie) {
                if (i.showExpiredFreeTrial || i.showExpiredModal || i.showExpiredCovidModal) return this.premiumModalFromResponse(i);
                this.redirectFromResponse(i)
            } else {
                var e = new Date,
                    e = premiumRedirectCookieURL + (0 < premiumRedirectCookieURL.indexOf("?") ? "&" : "?") + "timestamp=" + e.getTime();
                const t = new XMLHttpRequest;
                t.withCredentials = !0, t.open("GET", e, !0), t.onreadystatechange = function() {
                    var e, t;
                    4 === this.readyState && 200 <= this.status && this.status < 400 && (e = this.container.querySelector("#signinLoggingin"), t = this.container.querySelector(".signinError"), i.redirect ? (e.style.display = "", t.style.display = "none", document.location.assign(i.redirect)) : (t.style.display = "", t.innerHTML = i.message, this.toggleButtonDisable(!1)))
                }, t.send(), t = null
            }
        },
        loginAjaxSuccess: function(e) {
            var t;
            e.twoStepVerification ? (t = this.container.querySelector(".js-loginForm")) && (MG_Utils.addClass(t, "displayNone"), this.setupTwoStepVerification(e)) : e.requireCaptcha ? (this.showCaptcha = !0, jQuery(".js-loginForm .signinError").show().html(e.message), this.setupCaptacha()) : this.callbackSuccess(e)
        }
    },
    signinbox = Object.assign({}, Signinbox, extendedPropsForModal);
MG_Utils.domReady(function() {
    document.location.search.match(/showSigninBox=true/i) && null != document.getElementById("headerLoginLink") && signinbox.show();
    let e = document.getElementById("headerLoginLink"),
        t = document.querySelector(".profileOptions");
    e && e.addEventListener("click", function() {
        t && (MG_Utils.hasClass(t, "show") ? MG_Utils.removeClass(t, "show") : MG_Utils.addClass(t, "show"))
    }), document.addEventListener("click", function(e) {
        e && e.target && "headerLoginLink" !== e.target.id && t && MG_Utils.removeClass(t, "show")
    }), expired_modal.init()
});