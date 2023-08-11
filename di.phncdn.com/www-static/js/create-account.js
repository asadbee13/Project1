var VueComponents = function() {
    "use strict";
    return {
        registerFormComponent: function() {
            Vue.customElement("v-create-account-form", {
                props: {
                    orientation: {
                        type: String,
                        default: ""
                    },
                    token: {
                        type: String,
                        required: !0
                    },
                    emailDefault: {
                        type: String,
                        default: ""
                    },
                    usernameDefault: {
                        type: String,
                        default: ""
                    },
                    passwordDefault: {
                        type: String,
                        default: ""
                    },
                    showCaptcha: {
                        type: Number,
                        default: 0
                    },
                    recaptchaKey: {
                        type: String
                    },
                    emailError: {
                        type: String
                    },
                    usernameError: {
                        type: String
                    },
                    passwordError: {
                        type: String
                    },
                    gcaptchaError: {
                        type: String
                    },
                    compareError: {
                        type: String
                    },
                    translation: {
                        type: String
                    },
                    postMessages: {
                        type: String
                    },
                    modal: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        validations: {
                            email: {
                                invalid: !0,
                                error: "",
                                beInvalid: !1,
                                beError: "",
                                beValidated: !1,
                                timer: null,
                                touched: !1,
                                dirty: !1,
                                inteval: 1e3,
                                validators: [{
                                    errMsg: this.emailError,
                                    pattern: "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\]|(\\[ipv6:)((?:[A-F0-9]{1,4}:){4,}[A-F0-9]{1,4})])"
                                }]
                            },
                            username: {
                                invalid: !0,
                                error: "",
                                beInvalid: !1,
                                beError: "",
                                beValidated: !1,
                                timer: null,
                                touched: !1,
                                dirty: !1,
                                inteval: 500,
                                validators: [{
                                    errMsg: this.usernameError,
                                    minlength: 3
                                }, {
                                    errMsg: this.compareError,
                                    compare: "password"
                                }]
                            },
                            password: {
                                invalid: !0,
                                error: "",
                                beInvalid: !1,
                                beError: "",
                                beValidated: !1,
                                timer: null,
                                touched: !1,
                                dirty: !1,
                                inteval: 500,
                                validators: [{
                                    errMsg: this.passwordError,
                                    minlength: 6
                                }, {
                                    errMsg: this.compareError,
                                    compare: "username"
                                }]
                            }
                        },
                        validationsgcaptcha: {
                            gcaptcha: {
                                invalid: this.showCaptchaVersion,
                                error: "",
                                validators: [{
                                    errMsg: this.gcaptchaError,
                                    required: this.showCaptchaVersion
                                }]
                            }
                        },
                        email: this.emailDefault,
                        username: this.usernameDefault,
                        password: this.passwordDefault,
                        gcaptcha: "",
                        submitting: !1,
                        errorMsg: "",
                        isFormInvalid: !0,
                        showCaptchaVersion: this.showCaptcha,
                        postErrorsArr: this.postMessages,
                        checkboxType: checkboxTypeCaptcha,
                        scoreType: scoreTypeCaptcha
                    }
                },
                computed: {
                    parseData: function() {
                        return this.translation ? JSON.parse(this.translation) : {}
                    },
                    postErrors: function() {
                        if (this.postErrorsArr) try {
                            var t = JSON.parse(this.postErrorsArr);
                            return t.error || []
                        } catch (t) {
                            console.log(t)
                        }
                        return []
                    }
                },
                mounted: function() {
                    this.modal && "undefined" != typeof phCustomEvent && (e = this, phCustomEvent.subscribe("initSignUp", function(t, a) {
                        !0 === a && e.reset()
                    }));
                    for (var e, t = document.getElementById("js-tasteProfileData"), a = (this.storageAvailable("localStorage") && localStorage.tasteCategories && t && (t.value = localStorage.tasteCategories), ["email", "username", "password"]), r = 0; r < a.length; r++) {
                        let i = a[r];
                        this[i].trim() && this.validate(i) && (this.validateAccount(i), setTimeout(function() {
                            var t = new Event("focus"),
                                a = new Event("input"),
                                e = document.querySelector('.js-signUp input[name="' + i + '"]');
                            e && (e.dispatchEvent(t), e.dispatchEvent(a))
                        }, 100))
                    }
                },
                methods: {
                    storageAvailable: function(t) {
                        try {
                            var a = window[t],
                                e = "__storage_test__";
                            return a.setItem(e, e), a.removeItem(e), !0
                        } catch (t) {
                            return t instanceof DOMException && (22 === t.code || 1014 === t.code || "QuotaExceededError" === t.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.name) && 0 !== a.length
                        }
                    },
                    validateForm: function() {
                        for (var t in this.validations) {
                            if (this.validations[t].invalid) return !1;
                            if ("undefinded" != typeof this.validations[t].beInvalid && this.validations[t].beInvalid) return !1
                        }
                        return void 0 !== this.validations.gcaptcha || !this.showCaptchaVersion || ("undefined" != typeof CaptachaComponents && CaptachaComponents.registerVueComponent(), this.validations.gcaptcha = this.validationsgcaptcha.gcaptcha, !1)
                    },
                    validate: function(t) {
                        if (!t) return !1;
                        for (var a = this[t], e = 0; e < this.validations[t].validators.length; e++) {
                            var i = this.validations[t].validators[e];
                            if (void 0 !== i.minlength && a.length < i.minlength || void 0 !== i.compare && this[i.compare] == a || void 0 !== i.required && i.required && !a || void 0 !== i.pattern && !new RegExp(i.pattern, "gim").test(a)) return this.validations[t].invalid = !0, this.validations[t].error = i.errMsg, !(this.isFormInvalid = !0)
                        }
                        return this.validations[t].invalid = !1, !(this.validations[t].error = "")
                    },
                    checkError: function(t) {
                        this.validations[t].invalid ? this.errorMsg = this.validations[t].error : this.validations[t].beInvalid && (this.errorMsg = this.validations[t].beError)
                    },
                    onInput: function(t) {
                        var a = t && t.target ? t.target.getAttribute("name") : "",
                            e = (this.validations[a].timer && clearTimeout(this.validations[a].timer), this);
                        this.validations[a].timer = setTimeout(function() {
                            var t;
                            e.validations[a].dirty = !0, e.validate(a) ? (void 0 !== (t = e.validations[a].validators[1]) && t.compare && e[t.compare] && e.validations[t.compare].invalid && e.validate(t.compare) && e.validateAccount(t.compare), e.validateAccount(a)) : e.errorMsg = e.validations[a].error
                        }, this.validations[a].inteval)
                    },
                    onFocus: function(t) {
                        t = t && t.target ? t.target.getAttribute("name") : "";
                        t && (this.validations[t].touched = !0, this.checkError(t))
                    },
                    formatRequestData: function(t) {
                        var a, e = "";
                        for (a in t) "" != t && (e += "&"), e += a + "=" + encodeURIComponent(t[a]);
                        return e
                    },
                    validateAccount: function(a) {
                        var t = {
                                check_what: a
                            },
                            e = (t[a] = this[a].trim(), this),
                            i = new XMLHttpRequest;
                        i.onload = function() {
                            var t;
                            200 <= i.status && i.status < 300 && (t = JSON.parse(i.responseText)) && ("" != t.error_message ? (e.validations[a].beInvalid = !0, e.validations[a].beError = t.error_message, e.validations[a].beValidated = !1, e.errorMsg = t.error_message, e.isFormInvalid = !0) : (e.validations[a].beInvalid = !1, e.validations[a].beError = "", e.validations[a].beValidated = !0, e.errorMsg = "", e.isFormInvalid = !e.validateForm()))
                        }, i.open("POST", this.parseData.checkAccountUrl), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), i.send(this.formatRequestData(t))
                    },
                    submitForm: function(t) {
                        if (!this.isFormInvalid) {
                            this.submitting = !0;
                            const a = this.$refs.signupForm,
                                e = this;
                            e.modal && !e.showCaptchaVersion ? initializeV3Captcha().then(function() {
                                e.modalSubmitForm()
                            }) : a.submit()
                        }
                    },
                    modalSubmitForm: function() {
                        let a = this,
                            t = this.$refs.signupForm,
                            e = Object.fromEntries(new FormData(t));
                        MG_Utils.ajaxCall({
                            type: "POST",
                            url: a.parseData.createAccountUrl,
                            dataType: "json",
                            data: e,
                            success: function(t) {
                                t.success ? t.redirectUrl && (window.location.href = t.redirectUrl) : (a.showCaptchaVersion = t.showCaptchaV2 ? 1 : 0, t.userNotices && (a.postErrorsArr = JSON.stringify(t.userNotices)), a.isFormInvalid = !a.validateForm())
                            },
                            error: function(t) {
                                t.userNotices && (a.postErrorsArr = JSON.stringify(t.userNotices))
                            }
                        })
                    },
                    onCaptchaVerified: function(t) {
                        this.gcaptcha = t && t.detail ? t.detail[0] : "", this.validate("gcaptcha") ? (this.errorMsg = "", this.isFormInvalid = !this.validateForm(), this.modal && (this.submitting = !1)) : this.errorMsg = this.validations.gcaptcha.error
                    },
                    onCaptchaExpired: function() {
                        this.gcaptcha = "", this.validations.gcaptcha.invalid = !0, this.errorMsg = this.parseData.gcaptchaExpired, this.isFormInvalid = !0
                    },
                    validationCheckmark: function(t) {
                        return (this.validations[t].dirty && this.validations[t].invalid || this.validations[t].beInvalid) && this.modal ? "ph-icon-error" : this.validations[t].beValidated ? this.modal ? "ph-icon-done" : "beValidated" : void 0
                    },
                    reset: function() {
                        Object.assign(this.$data, this.$options.data.apply(this))
                    }
                },
                template: '<form autocomplete="off" method="post" :action="parseData.createAccountUrl" ref="signupForm" class="js-signUp"><input type="hidden" name="token" :value="token" /><input type="hidden" name="orientation" value="gay" v-if="orientation==\'gay\'" /><input type="hidden" name="redirect" :value="parseData.redirectUrl" /><input type="hidden" name="taste_profile" id="js-tasteProfileData" /><input v-if="modal" type="hidden" class="js_captcha_token" name="g-recaptcha-response" id="captcha_token" value=""><input v-else type="hidden" name="g-recaptcha-response" id="captcha_token" value=""><input type="hidden" id="captcha_type" name="captcha_type" :value="showCaptchaVersion ? checkboxType : scoreType"><input v-if="modal" type="hidden" name="signup_modal" value="true"><section class="formStepOne"><div id="errors" :class="{\'shown\': errorMsg||(!errorMsg&&postErrors.length&&isFormInvalid)}">{{errorMsg}}<div class="error" v-if="!errorMsg&&postErrors.length&&isFormInvalid" v-for="err in postErrors">{{err}}</div></div><div id="postErrors"></div><input type="text" name="email" v-model.trim="email" :class="{\'wrong\': (validations[\'email\'].dirty&&validations[\'email\'].invalid)||validations[\'email\'].beInvalid}" @input="onInput" @focus="onFocus" :placeholder="parseData.emailHolder" maxlength="254" autofocus><span :class="validationCheckmark(\'email\')"></span><input type="text" name="username" v-model.trim="username" @input="onInput" @focus="onFocus" :class="{\'wrong\': (validations[\'username\'].dirty&&validations[\'username\'].invalid)||validations[\'username\'].beInvalid}" :placeholder="parseData.usernameHolder" maxlength="18"><span :class="validationCheckmark(\'username\')"></span><input autocomplete="off" type="password" name="password" v-model.trim="password" @input="onInput" @focus="onFocus" :class="{\'wrong\': (validations[\'password\'].dirty&&validations[\'password\'].invalid)||validations[\'password\'].beInvalid}" :placeholder="parseData.passwordHolder" maxlength="40"><span :class="validationCheckmark(\'password\')"></span><section class="optional" v-if="showCaptchaVersion"><p class="security"></p><v-recaptcha :loadscript="true" name="gcaptcha" :type="checkboxType" :showCaptcha="showCaptchaVersion" @verify="onCaptchaVerified" @expired="onCaptchaExpired" :sitekey="recaptchaKey"></v-recaptcha></section><input type="submit" id="js-signUpBtn" class="buttonBase orangeButton big" :value="parseData.submitLabel" :disabled="isFormInvalid || submitting" @click="submitForm"><div v-if="modal" class="haveAccount">{{parseData.loginText1}} <a href="javascript:signinbox.show();">{{parseData.loginText2}}</a> {{parseData.loginText3}}</div><span v-else class="loginLink">{{parseData.or}} <a href="javascript:signinbox.show();">{{parseData.signin}}</a></span><p class="options" v-html="parseData.terms"></p><p class="options"><a :href="parseData.resendConfirmationUrl">{{parseData.resend}}</a></p></section></form>'
            })
        }
    }
}();
VueComponents.registerFormComponent();