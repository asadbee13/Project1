function LaunchBanner() {
    var e = document.querySelectorAll(".launchBannerWrapper");
    e.length && (MG_Utils.addEventHandler(document.querySelector(".launchClose"), "click", function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, setCookie("launchBanner", "1", {
            expires: 9999
        });
        e = MG_Utils.closest(this, ".launchBannerWrapper");
        MG_Utils.removeClass(e, "block")
    }), null == getCookie("launchBanner")) && MG_Utils.addClass(e[0], "block")
}
MG_Utils.domReady(LaunchBanner);

function closeModal() {
    var i = isNotifiedObj.modalId,
        o = isNotifiedObj.notificationId,
        t = isNotifiedObj.token;
    $j.ajax({
        url: isNotifiedObj.ajaxUrl,
        data: {
            token: t,
            notificationId: o
        },
        type: "post",
        success: function() {
            setCookie("notified_sponsor_" + isNotifiedObj.liuId, 1, 365), setTimeout(function() {
                $j("#" + i).hide(200)
            }, 5e3)
        }
    })
}
MG_Utils.domReady(function() {
    var o, e = document.getElementById("js-voteModal");
    e && (MG_Utils.getCookie("vote2020") || ((o = new MG_Modal({
        content: e,
        closeButton: !1,
        className: "voteModalWrapper"
    })).openModal(), MG_Utils.setCookie("vote2020", 1)), e = document.querySelector("body"), MG_Utils.addEventHandler(e, "click", function(e) {
        o.closeModal()
    }))
});
var vueFlagModal = {
    layout: function() {
        Vue.customElement("v-flag-modal", {
            props: {
                platform: {
                    type: String,
                    default: "pc"
                },
                flagFor: {
                    type: String,
                    default: "photo"
                },
                loggedin: {
                    type: Number,
                    default: 0
                },
                translation: {
                    type: String,
                    required: !0
                },
                flagTypes: {
                    type: String,
                    required: !0
                },
                submitUrl: {
                    type: String,
                    required: !0
                },
                itemId: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    timestamp: 0,
                    show: !1,
                    picked: "",
                    reason: "",
                    readMore: !1,
                    errorShow: !1,
                    reasonShow: !1,
                    reasonTextCount: 0,
                    showConfirm: !1,
                    redirectToCRR: !1,
                    submitSuccess: !1,
                    submitting: !1,
                    flags: {
                        inappropriate: "1",
                        underage: "2",
                        copyright: "3",
                        other: "4",
                        spam: "5",
                        inflamatory: "6",
                        rights: "7"
                    },
                    userFlags: ["profile", "comments", "spammer", "terms violation", "underage", "content"],
                    id: "",
                    inFocus: !0,
                    mobileTouch: !1
                }
            },
            methods: {
                close: function(e) {
                    !this.$refs.modal.contains(e.target) && this.show && this.closeModal()
                },
                open: function() {
                    document.body.classList.add("isOpenMTubes");
                    var e = document.querySelector(".container");
                    e && MG_Utils.addClass(e, "zind"), this.show = !0, this.timestamp = this.setTimestamp() ? this.setTimestamp() : 0
                },
                closeModal: function() {
                    this.show = !1, this.picked = "", this.readMore = !1, this.reason = "", this.errorShow = !1, this.reasonShow = !1, this.reasonTextCount = 0, this.showConfirm = !1, this.redirectToCRR = !1, this.submitSuccess = !1, this.submitting = !1, document.body.classList.remove("isOpenMTubes");
                    var e = document.querySelector(".container");
                    e && MG_Utils.removeClass(e, "zind"), sessionStorage.removeItem("notLoggedIn")
                },
                onConfirmChange: function(e) {
                    this.reasonShow = "1" !== e.currentTarget.value, this.redirectToCRR = "1" === e.currentTarget.value, this.submitting = !1, "1" !== e.currentTarget.value && (this.submitting = !0, 0 < this.reasonTextCount) && (this.submitting = !1)
                },
                onChangeType: function(e) {
                    var t, o = this.picked === this.flags.rights || this.picked === this.flags.copyright || this.picked === this.flags.underage;
                    this.errorShow = !1, "channel" === this.flagFor || this.picked == this.flags.other || this.picked == this.flags.inappropriate || this.picked == this.flags.spam || this.picked == this.flags.inflamatory || -1 !== this.userFlags.indexOf(this.picked) ? (this.reasonShow = !0, t = this, setTimeout(function() {
                        t.$refs.formGroups.scrollTop = t.$refs.reason.scrollHeight, t.$refs.reason.focus()
                    }, 100)) : this.reasonShow = !1, (o || (this.submitting = !0, 0 < this.reasonTextCount)) && (this.submitting = !1)
                },
                onInput: function(e) {
                    e.target.value.length < 2 && (e.target.value = e.target.value.replace(/\s/g, "")), 0 < e.target.value.length ? this.submitting = !1 : this.submitting = !0, this.picked == this.flags.other && (this.errorShow = !this.reason), this.reasonTextCount = e.target.value.length
                },
                onSubmit: function() {
                    if (this.picked) {
                        var e, t = this;
                        if (this.picked == this.flags.rights || this.picked == this.flags.copyright || this.redirectToCRR) e = this.types.filter(function(e) {
                            return e.key == t.picked
                        })[0], this.reportVidKey && MG_Utils.setCookie("reportVideoKey", this.reportVidKey), window.open(e.next, "_blank");
                        else if (this.picked != this.flags.underage || this.showConfirm)
                            if (this.reasonShow && !this.reason) this.errorShow = !0, this.$refs.reason.focus();
                            else {
                                this.submitting = !0;
                                let e;
                                e = "user" === this.flagFor ? {
                                    type: this.picked,
                                    reason: this.reason
                                } : "channel" === this.flagFor ? {
                                    id: parseInt(this.id),
                                    type: this.picked,
                                    reason: this.reason
                                } : "video" === this.flagFor ? {
                                    timestamp: this.timestamp,
                                    id: parseInt(this.itemId),
                                    value: parseInt(this.picked),
                                    reason: this.reason
                                } : "shorties" === this.flagFor ? {
                                    timestamp: this.timestamp,
                                    vkey: VIDEO_SHOW.itemId,
                                    value: parseInt(this.picked),
                                    reason: this.reason
                                } : {
                                    id: parseInt(this.id),
                                    value: parseInt(this.picked),
                                    reason: this.reason
                                }, MG_Utils.ajaxCall({
                                    url: this.submitUrl,
                                    type: "POST",
                                    dataType: "json",
                                    requestType: "application/json",
                                    data: e,
                                    success: function(e) {
                                        t.submitSuccess = !0, t.submitting = !1, "video" === t.flagFor && t.$emit("flagged"), "shorties" === t.flagFor && t.$emit("flagged")
                                    },
                                    error: function(e) {
                                        console.error(e)
                                    }
                                })
                            }
                        else this.showConfirm = !0, this.submitting = !0
                    }
                },
                encodeReason: function(e) {
                    return encodeURIComponent(e).replace(/[.!~*'()]/g, function(e) {
                        return "%" + e.charCodeAt(0).toString(16)
                    })
                },
                redirectToLogin: function() {
                    "undefined" != typeof setCookieAdvanced && "shorties" != this.flagFor && setCookieAdvanced("flagPhotoModal", 1), "undefined" != typeof signinbox ? (this.closeModal(), "shorties" == this.flagFor && "undefined" != typeof phSwipeComponent ? signinbox.show({
                        step: "signIn",
                        callbackCustomRedirect: phSwipeComponent.callbackAfterLoginSuccess
                    }) : signinbox.show(), "undefined" != typeof sessionStorage && sessionStorage.setItem("notLoggedIn", 1)) : window.location.href = this.i18n.loginUrl
                },
                setTimestamp: function() {
                    if ("undefined" != typeof VIDEO_SHOW) {
                        var e = "pc" == this.platform ? VIDEO_SHOW.videoId : VIDEO_SHOW.playerId;
                        if (MGP.players[e]) return MGP.players[e].getCurrentTime()
                    }
                },
                setFocus: function() {
                    this.inFocus = !0
                },
                removeFocus: function() {
                    this.inFocus = !1
                },
                setScroll: function() {
                    "pc" !== this.platform && (this.mobileTouch = !0)
                },
                removeScroll: function() {
                    "pc" !== this.platform && (this.mobileTouch = !1)
                }
            },
            computed: {
                i18n: function() {
                    return this.translation ? JSON.parse(this.translation) : {}
                },
                types: function() {
                    return this.flagTypes ? JSON.parse(this.flagTypes) : []
                },
                scrollBarOnDesktop: function() {
                    return "pc" === this.platform && (this.picked || this.readMore)
                },
                isAndroid: function() {
                    return "pc" !== this.platform && -1 !== navigator.userAgent.indexOf("Android")
                }
            },
            watch: {
                id: function(e, t) {
                    return e != t
                }
            },
            mounted: function() {
                document.addEventListener("click", this.close), this.id = this.itemId
            },
            beforeDestroy: function() {
                document.removeEventListener("click", this.close)
            },
            template: `<div class="fadeInMTubes containerMTubes flagItemContainer isVisibleMTubes" :class="{'elOpenMTubes': show}">
                <div class="modalMTubes flagItemContainer elOpenMTubes" ref="modal">
                    <div class="contentMTubes submitSuccess" v-if="submitSuccess"> 
                        <div class="modal-body"> 
                            <div class="modal-title">{{i18n.successTitle}}</div>
                            <div class="modal-subtitle confirmation" v-html="i18n.successText"></div>
                            <div class="modalActions confirmationBtn">
                                <button class="buttonBase orangeButton" @click="closeModal">{{i18n.successButton}}</button>
                            </div>
                        </div>
                    </div>
                    <div class="contentMTubes" v-else>
                        <div class="modal-title">{{i18n.title}}</div>
                        <div class="loggedinModal" v-if="loggedin">
                            <div class="modal-subtitle" v-if="flagFor !== 'user'">{{i18n.subtitle}}</div>
                            <form class="form-groups" :class="{'scrollbar':scrollBarOnDesktop, 'reducedHeight':(picked==flags.underage && showConfirm && !reasonShow), 'focused':inFocus, 'interacted':mobileTouch, 'android':isAndroid }" ref="formGroups" v-on="scrollBarOnDesktop ? {mouseover:setFocus, mouseout:removeFocus} : {}" @touchmove="setScroll" @touchend="removeScroll">
                                <div v-if="showConfirm" class="underageFlagged">
                                    <div class="confirmMessage" v-html="i18n.confirmMessage"></div>
                                    <div class="form-group">
                                        <label for="flagTypeYes">
                                            <input id="flagTypeYes" class="flagCheckBox" type="radio" name="confirm_flag_type" value="1" @change="onConfirmChange" />
                                            <span class="radio"></span>
                                            <span class="flagname">{{i18n.yes}}</span>
                                        </label>
                                    </div>
                                    <div class="form-group">
                                        <label for="flagTypeNo">
                                            <input id="flagTypeNo" class="flagCheckBox" type="radio" name="confirm_flag_type" value="0" @change="onConfirmChange" />
                                            <span class="radio"></span>
                                            <span class="flagname">{{i18n.no}}</span>
                                        </label>
                                    </div>
                                </div>
                                <div v-if="!showConfirm" class="form-group" v-for="type in types" :key="type.key">
                                    <label :for="'flagType' + type.key">
                                        <input :id="'flagType' + type.key" class="flagCheckBox" type="radio" name="flag_type" :value="type.key" v-model="picked" @change="onChangeType" />
                                        <span class="radio"></span>
                                        <span class="flagname">{{type.value}}
                                            <v-tooltip v-if="flagFor !== 'user' && flagFor !== 'channel'" position="bottom" :desc="type.tooltip"></v-tooltip>
                                        </span>
                                    </label>
                                    
                                    <div class="popup" v-if="type.popup&&picked==type.key" v-html="type.popup"></div>
                                </div>
                                <div class="flagReason" v-if="reasonShow" :class="{'hasError': errorShow}">
                                    <p v-if="flagFor !== 'channel'">{{i18n.reasonBox}}</p>
                                    <p v-if="flagFor === 'channel'">{{i18n.reasonChannel}}</p>
                                    <textarea ref="reason" v-model.trim="reason" class="js-taggableReason" @input="onInput($event)" maxlength="500"></textarea>
                                    <div class="textCount">
                                        <span v-html="reasonTextCount"></span>/500
                                    </div>
                                    <div class="errorMsg" v-if="errorShow">{{i18n.error}}</div>
                                </div>
                                <div v-if="!showConfirm && flagFor !== 'user'" class="description">
                                    <input type="checkbox" id="readMoreState" v-model="readMore" />
                                    <p v-html="i18n.desc"></p>
                                </div>
                            </form>
                            <div class="modalActions">
                                <button class="buttonBase flagCancel" type="button" @click="closeModal">
                                    <span>{{i18n.btnCancel}}</span>
                                </button>
                                <button class="buttonBase orangeButton" type="button" @click="onSubmit" :disabled="!picked||submitting">
                                    <span v-if="picked==flags.rights||picked==flags.copyright||(picked==flags.underage && !showConfirm)||redirectToCRR">{{i18n.btnNext}}</span>
                                    <span v-else>{{i18n.btnSubmit}}</span>
                                </button>
                            </div>
                            <div class="fShorties" v-if="i18n.footer" v-html="i18n.footer"></div>
                        </div>
                        <div class="loggedOutInfoModal" v-else>
                            <div class="modalSubtitle">{{i18n.loginto}}</div>
                            <div class="readMoreLink"><a href="https://help.pornhub.com/hc/en-us/sections/360006831174-Reporting-Abuse-And-Violations" target="_blank" rel="noopener noreferrer">{{i18n.readAbout}}</a></div>
                            <div class="modalActions">
                                <a class="orangeButton buttonBase loginRedirect" @click="redirectToLogin">{{i18n.login}}</a>
                            </div>
                        </div>
                    </div>
                    <button class="ph-icon-clear buttonMTubes" @click="closeModal"></button>
                </div>
			</div>`
        })
    },
    tooltipComponent: function() {
        Vue.customElement("v-tooltip", {
            props: {
                desc: {
                    type: String,
                    required: !0
                },
                position: {
                    type: String,
                    default: "top"
                }
            },
            data: function() {
                return {
                    show: !1
                }
            },
            methods: {
                onClick: function(e) {
                    e.target.getAttribute("href") || e.preventDefault(), e.stopPropagation()
                }
            },
            template: '<div :class="[\'tooltipWrapper\', position]" @mouseenter="show = true" @mouseleave="show = false"><span class="ttIcon"><i @click="onClick" class="bg-sprite-liu"></i></span><div class="tooltipContent" v-html="desc" v-if="show" @click="onClick"></div></div>'
        })
    },
    openFlagCommentModal: function(e) {
        var t;
        "undefined" == typeof flagCommentModal && "undefined" != typeof FLAG_COMMENT_DATA && (t = document.createElement("v-flag-comment-modal"), document.body.insertAdjacentElement("afterbegin", t), Vue.customElement("v-flag-comment-modal", {
            computed: {
                flagCommentData: function() {
                    return FLAG_COMMENT_DATA
                },
                getSubmitBtnClass: function() {
                    return "pc" === FLAG_COMMENT_DATA.platform ? "orangeButton buttonBase" : "orangeBtn buttonClass"
                },
                getTitleClass: function() {
                    return "pc" === FLAG_COMMENT_DATA.platform ? "modal-title" : "modalTitle"
                }
            },
            methods: {
                getFlagTypeId: function(e) {
                    return "flagCommentType" + e
                },
                redirectToLogin: function() {
                    if ("undefined" != typeof signinbox) return this.closeModal(), signinbox.show(), !1;
                    window.location.href = this.flagCommentData.loginUrl
                }
            },
            mounted: function() {
                var e = document.getElementById("flagCommentModal");
                e && (flagCommentModal = new MG_Modal({
                    content: e,
                    className: "flagItemContainer flagComment"
                }))
            },
            template: '<div id="flagCommentModal" :class="[{modalWrapper: (flagCommentData.platform==\'pc\')}, {displayNone: (flagCommentData.platform!=\'pc\')}]" class="modalWrapper"><div id="reasons"><div :class="getTitleClass">{{flagCommentData.title}}</div><div v-if="flagCommentData.loggedIn"><form autocomplete="off" class="form-groups" id="flagCommentItem" type="get"><div v-for="(value, key) in flagCommentData.flagCommentTypes" :data-key="key" class="form-group"><label :for="getFlagTypeId(key)"><input :id="getFlagTypeId(key)" class="flagCheckBox" type="radio" name="flag_type" :value="key"/><span class="radio"></span><span class="flagname">{{value}}</span></label></div></form><div class="flagDetails modalActions"><button id="flagCommentCancel" type="button" class="buttonBase flagCancel"><span>{{flagCommentData.cancel}}</span></button><button id="flagCommentSubmit" :class="getSubmitBtnClass" type="button" disabled="disabled"><span>{{flagCommentData.submit}}</span></button></div></div><div class="loggedOutInfoModal" v-else><div class="modalSubtitle">{{flagCommentData.logInText}}</div><div class="readMoreLink"><a :href="flagCommentData.reportingAbuseUrl" target="_blank" rel="noopener noreferrer">{{flagCommentData.readMoreText}}</a></div><div class="modalActions"><a class="orangeButton buttonBase loginRedirect" :href="flagCommentData.loginUrl" id="loginBtn" @click="redirectToLogin">{{flagCommentData.login}}</a></div></div></div><div id="confirmation" class="displayNone"><div :class="getTitleClass">{{flagCommentData.thankYouInputMessage}}</div><div class="modal-subtitle confirmation" v-html="flagCommentData.commentFlaggedMessage"></div><div class="modalActions confirmationBtn"><button :class="getSubmitBtnClass" id="closeBtn">{{flagCommentData.successButton}}</button></div></div></div>'
        })), "undefined" != typeof flagCommentModal && (flagCommentModal.openModal(function(e) {
            const t = e.querySelector("#flagCommentSubmit"),
                o = e.querySelectorAll(".flagCheckBox"),
                i = e.querySelector("#loginBtn");
            o && o.forEach(function(e) {
                e.addEventListener("change", function() {
                    t && t.removeAttribute("disabled")
                })
            }), i && i.addEventListener("click", function() {
                if ("undefined" != typeof signinbox) return flagCommentModal.closeModal(), signinbox.show(), !1;
                window.location.href = this.href
            })
        }), flagCommentModal.id = e)
    }
};
vueFlagModal.tooltipComponent(), vueFlagModal.layout();