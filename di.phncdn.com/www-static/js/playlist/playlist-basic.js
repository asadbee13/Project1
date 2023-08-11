var currentTitle, currentDuration, currentRating, currentThumb, vKeyAddVideo, menuPosition, createPlaylistModal, menu = null,
    playlistMenu = document.querySelector(".playlist-option-menu"),
    playlist_menu_fading = !1,
    thumbScroll = 0,
    showOverlay = function(e) {
        var e = e.target || e.srcElement,
            t = e.querySelector(".linkWrapper"),
            a = e.querySelector(".add-to-playlist-icon"),
            s = e.querySelector(".not-interested-button"),
            n = t && t.querySelector(".playAllLink"),
            i = t && t.querySelector(".viewPlaylistLink");
        t && (MG_Utils.addClass(t.querySelector(".borderLink"), "hoverPL"), n && (n.style.display = "block"), i) && (i.style.display = "block"), a && !MG_Utils.closest(e, ".innerHeaderSubMenu") && "false" == disablePlaylistPlusButon && MG_Utils.removeClass(a, "display-none"), (menuPosition = menu ? MG_Utils.offset(menu).left : null) && 0 < menuPosition && (MG_Utils.hasClass(menu, "display-none") || MG_Utils.addClass(menu, "display-none"), activePlaylists()), s && (MG_Utils.removeClass(s.parentNode, "display-none"), MG_Utils.addClass(s, "active"))
    },
    hideOverlay = function(e, t) {
        function a() {
            !l || MG_Utils.closest(i, ".innerHeaderSubMenu") || MG_Utils.hasClass(l.parentNode, "display-none") || (MG_Utils.addClass(l.parentNode, "display-none"), MG_Utils.removeClass(l, "active")), r && !MG_Utils.hasClass(r.parentNode, "display-none") && (MG_Utils.addClass(r.parentNode, "display-none"), MG_Utils.removeClass(r, "active")), o && (MG_Utils.removeClass(o.querySelector(".borderLink"), "hoverPL"), c && (c.style.display = "none"), u) && (u.style.display = "none")
        }

        function s() {
            menu && (MG_Utils.hasClass(menu, "display-none") || MG_Utils.addClass(menu, "display-none"), activePlaylists()), MG_Utils.hasClass(i.parentNode, "active") && MG_Utils.removeClass(i.parentNode, "active")
        }
        var n, i = e.target || e.srcElement,
            l = i.querySelector(".open-playlist-link"),
            o = i.querySelector(".linkWrapper"),
            r = i.querySelector(".not-interested-button"),
            d = menu ? MG_Utils.offset(menu).left : null,
            c = o && o.querySelector(".playAllLink"),
            u = o && o.querySelector(".viewPlaylistLink");
        void 0 === t && (t = e.clientX, e = e.clientY, n = document.elementFromPoint(t, e));
        menu && !MG_Utils.closest(i, ".innerHeaderSubMenu") && 0 < d ? n && (MG_Utils.hasClass(n.parentNode, "add-to-playlist-menu") || MG_Utils.closest(n, ".add-to-playlist-menu")) ? menu.addEventListener("mouseleave", function(e) {
            a(), s()
        }) : n && !MG_Utils.hasClass(n.parentNode, "add-to-playlist-menu") && (a(), s()) : a()
    },
    addToSubmenu = function(t) {
        var e, a = t.target || t.srcElement;
        playlist_menu_fading = clearTimeout(playlist_menu_fading) && !1, MG_Utils.hasClass(a, "open-playlist-link") && (vKeyAddVideo = a.getAttribute("data-video-id"), currentTitle = MG_Utils.nextElementSibling(a.parentNode).querySelector("a").innerHTML, currentDuration = a.parentNode.parentNode.querySelector(".marker-overlays").querySelector(".duration").innerHTML, currentRating = MG_Utils.nextElementSibling(a.parentNode).querySelector(".value") ? parseInt(MG_Utils.nextElementSibling(a.parentNode).querySelector(".value").innerHTML) / 20 : "", currentThumb = MG_Utils.previousElementSibling(a.parentNode).querySelector("img") && MG_Utils.previousElementSibling(a.parentNode).querySelector("img").getAttribute("data-smallthumb") ? MG_Utils.previousElementSibling(a.parentNode).querySelector("img").getAttribute("data-smallthumb") : "", menu || (addToPlayListComponent.create(), addToPlayListComponent.initialize(), menu = document.querySelector(".add-to-playlist-menu")), menu.querySelector(".custom-playlist") && menu.querySelector(".custom-playlist").querySelectorAll("li").length && (menu.querySelector("#scrollParent").style.borderBottom = "1px solid #313131"), hideShowMenu(a, menu), MG_Utils.hasClass(menu, "fadeOut") && MG_Utils.removeClass(menu, "fadeOut"), thumbScroll || (MG_Scroll.init({
            selector: document.querySelectorAll("#scrollThumbs"),
            height: "auto",
            color: "#7d7c7c",
            size: "7px",
            alwaysVisible: !0,
            railVisible: !0,
            railOpacity: 1,
            railColor: "#222",
            distance: 0,
            opacity: 1,
            railClass: "track4",
            barClass: "handle4",
            wrapperClass: "wrapper4"
        }), thumbScroll = 1)), MG_Utils.hasClass(a, "not-interested-button") && (e = a.getAttribute("data-url"), a = {
            id: a.getAttribute("data-video-id"),
            value: 0,
            token: a.getAttribute("data-token"),
            type: a.getAttribute("data-type")
        }, $j.ajax({
            type: "POST",
            url: e,
            data: a,
            success: function(e) {
                successCallback(e, t)
            },
            error: errorCallback
        }))
    },
    addToPlayListComponent = {
        create: function() {
            var e = document.createElement("custom-add-to-playlist-menu");
            document.body.insertAdjacentElement("afterbegin", e)
        },
        initialize: function() {
            Vue.customElement("custom-add-to-playlist-menu", {
                computed: {
                    translatedText: function() {
                        return TRANSLATED_MESSAGE
                    },
                    isLoggedIn: function() {
                        return WIDGET_PLAYLIST_HEADER.isLoggedIn
                    },
                    isLovers: function() {
                        return WIDGET_PLAYLIST_HEADER.isLovers
                    },
                    hasVerifiedEmail: function() {
                        return WIDGET_PLAYLIST_HEADER.hasVerifiedEmail
                    },
                    confirmEmailUrl: function() {
                        return WIDGET_PLAYLIST_HEADER.confirmEmailUrl
                    }
                },
                methods: {
                    signIn: function() {
                        event.preventDefault(), signinbox.show()
                    },
                    watchLater: function() {
                        "function" == typeof addToWatchLater && addToWatchLater(event)
                    },
                    addToLovers: function() {
                        "function" == typeof addToLoversPlaylist && addToLoversPlaylist(event)
                    },
                    addToPlaylistClick: function() {
                        "function" == typeof addToCustomPL && addToCustomPL(event)
                    },
                    createNewPlaylist: function() {
                        event.preventDefault(), void 0 !== createPlaylistModalComponent && createPlaylistModalComponent.open(function() {
                            dropdown.init("#playlist-form .privacySelector"), MG_Utils.limit(document.querySelectorAll("#new-playlist-description"), {
                                limit: 1e3
                            })
                        })
                    }
                },
                mounted: function() {
                    "function" == typeof playlistAppend && playlistAppend()
                },
                template: `<div class="add-to-playlist-menu display-none" :class="{'not-verified': !hasVerifiedEmail}">
                    <div v-if="isLoggedIn" class="signin">
                        <a href="" @click="signIn">{{translatedText.signIn}}</a>{{translatedText.signInToAdd}}
                    </div>
                    <div v-if="!isLoggedIn && hasVerifiedEmail" class="playlist-menu-addTo">
                        <span>{{translatedText.addToPlaylist}}</span>
                    </div>
                    <div v-if="!isLoggedIn && hasVerifiedEmail" class="playlist-list">
                        <div class="quicklick">
                            <a href="" class="watchlater-add" data-type="watchlater" data-video-id="" @click="watchLater">{{translatedText.watchLater}}</a>
                        </div>
                        <div v-if="isLovers" class="quicklick">
                            <a href="" class="lover-playlist-add" data-type="lovers" data-video-id="" @click="addToLovers">{{translatedText.loversPlaylist}}</a>
                        </div>
                        <div id="scrollParent">
                            <div id="scrollThumbs" class="blockPageScroll">
                                <ul id="addToPlaylist" class="custom-playlist" @click="addToPlaylistClick">
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isLoggedIn && hasVerifiedEmail" class="playlist-menu-createNew">
                        <a href="" class="createPlaylistModalTrigger" @click="createNewPlaylist">{{translatedText.createPlaylist}}</a>
                    </div>
                    <div v-if="!isLoggedIn && !hasVerifiedEmail" class="signin">
                        <a :href="confirmEmailUrl">{{translatedText.verifyYourEmail}}</a>{{translatedText.toCreatePlaylists}}
                    </div>
                </div>`
            })
        }
    },
    createPlaylistModalComponent = {
        open: function(e) {
            var t;
            void 0 === createPlaylistModal && WIDGET_PLAYLIST_HEADER.showCreatePlaylistModal && (t = document.createElement("v-create-playlist-modal"), document.body.insertAdjacentElement("afterbegin", t), Vue.customElement("v-create-playlist-modal", {
                computed: {
                    translatedText: function() {
                        return TRANSLATED_MESSAGE
                    }
                },
                mounted: function() {
                    var e = document.getElementById("create-playlist-modal");
                    e && (createPlaylistModal = new MG_Modal({
                        content: e,
                        className: "createPlaylistContainer"
                    }))
                },
                template: '<div id="create-playlist-modal" class="modalWrapper"><div class="playlist-modal"><div class="modal-title">{{translatedText.newPlaylist}}</div><div id="MHP1138-playlist-form"><form autocomplete="off"><div class="error displayNone">{{translatedText.reqInfoError}}</div><label for="MHP1138-new-playlist-title">{{translatedText.title}}</label><input type="text" name="title" id="MHP1138-new-playlist-title" maxlength="35"><div id="tagListBlockModal"><label for="addTagInputModal">{{translatedText.addTagsPlaceHolder}}</label><div class="inputHolder"><input class="js-addTagInputModal" id="addTagInputModal" type="text" /><input type="hidden" id="js-tagsListModal"/><button class="js-addTagModal buttonBase orangeButton" id="addTagModal">{{translatedText.addTag}}</button></div><div id="tagErrorDisplayModal"></div><ul id="tagListModal" class="tagsHolder"></ul></div><label class="new-playlist-description" for="MHP1138-new-playlist-description">{{translatedText.description}}</label><br><textarea name="description" rows="20" cols="20" id="MHP1138-new-playlist-description"></textarea><label for="MHP1138-new-playlist-privacy">{{translatedText.privacy}}</label><div class="filters privacySelector" id="MHP1138-new-playlist-privacy"><div class="dropdownTrigger"><div><span class="textFilter">{{translatedText.publicTxt}}</span><span class="arrowFilters"></span></div><ul class="filterListItem dropdownWrapper"><li data-value="public" class="active"><span>{{translatedText.publicTxt}}</span></li><li data-value="private"><span>{{translatedText.privateTxt}}</span></li></ul></div><input type="hidden"></div><div class="modal-footer clearfix"><input type="submit" name="submit" :value="translatedText.save" id="MHP1138-add-playlist" class="submit-button buttonBase orangeButton"><a class="buttonBase greyButton cancelButton clearModalPlaylist" data-modal="createPlaylist">{{translatedText.cancel}}</a></div></form></div></div></div>'
            }), document.addEventListener("click", function(e) {
                e.target && MG_Utils.hasClass(e.target, "clearModalPlaylist") && "function" == typeof clearModalPlaylist && clearModalPlaylist()
            })), void 0 !== createPlaylistModal && ("function" == typeof e ? createPlaylistModal.openModal(e) : createPlaylistModal.openModal())
        }
    };
const MoreActionMenuComponent = {
        init: function() {
            Vue.customElement("v-more-action-menu", {
                props: {
                    id: {
                        type: Number,
                        required: !0
                    },
                    canAddToPlaylist: {
                        type: String,
                        required: !0
                    },
                    addedToPlaylist: {
                        type: String,
                        required: !0
                    },
                    isPrivateMember: {
                        type: String,
                        required: !0
                    },
                    isBlocked: {
                        type: String,
                        required: !0
                    },
                    isPornhub: {
                        type: String,
                        required: !0
                    },
                    isChannel: {
                        type: String,
                        required: !0
                    },
                    isContentPartner: {
                        type: String,
                        required: !0
                    },
                    isSubscribed: {
                        type: String,
                        required: !0
                    },
                    subscribeId: {
                        type: String,
                        required: !0
                    },
                    title: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    addToPlayListLabel: function() {
                        return "1" === this.addedToPlaylist ? actionMenuTranslations.removeWatchLater : actionMenuTranslations.addToWatchLater
                    },
                    subscribeToLabel: function() {
                        return "1" === this.isSubscribed ? actionMenuTranslations.unSubscribeToMsg + " " + this.title : actionMenuTranslations.subscribeToMsg + " " + this.title
                    },
                    notInterestedLabel: function() {
                        return actionMenuTranslations.notInterested
                    }
                },
                template: `<div class="moreActionMenu displayNone">
                    <a v-if="canAddToPlaylist === '1'" class="moreActionLink addToWatchLaterLink" data-name="Add to Watch Later" :data-video-added="addedToPlaylist" :data-video-id="id">
                        <span :class="['icon', {'ph-icon-playlist-add-check' : addedToPlaylist === '1', 'ph-icon-playlist-add' : addedToPlaylist !== '1'}]"></span>
                        <span class="label">{{addToPlayListLabel}}</span>
                    </a>
                    <a :class="['moreActionLink', 'subscribeToLink', {privateMember: isPrivateMember === '1'}]" :disabled="isBlocked === '1'" data-name="Subscribe to Uploader" :data-is-pornhub="isPornhub"
                       :data-content-partner="isContentPartner" :data-channel="isChannel" :data-subscribed="isSubscribed" :data-id="subscribeId" :data-title="title" >
                        <span class="ph-icon-rss-feed"></span>
                        <span class="label">{{subscribeToLabel}}</span>
                    </a>
                    <a class="moreActionLink notInterestedLink" data-name="Not Interested" :data-video-id="id" data-type="video">
                        <span class="ph-icon-cancel"></span>
                        <span class="label">{{notInterestedLabel}}</span>
                    </a>
                </div>`
            })
        }
    },
    ToastMessage = {
        init: function() {
            Vue.customElement("v-toast-message", {
                props: {
                    undoText: {
                        type: String,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        type: "addTo",
                        message: "",
                        videoId: null
                    }
                },
                watch: {
                    message: function(e, t) {
                        return e != t
                    }
                },
                methods: {
                    undoClick: function() {
                        var e, t = this.videoId;
                        t && (e = (e = document.querySelector('li[data-video-id="' + t + '"]')) ? e.querySelector(".addToWatchLaterLink") : null, "addTo" === this.type) && watchLaterLinkClick(e, t)
                    },
                    closeClick: function() {
                        var e = document.getElementById("toastMessage");
                        e && MG_Utils.removeClass(e, "showToast")
                    }
                },
                template: `<div id="toastMessage">
                    <span v-if="type=='addTo'" class="ph-icon-playlist-add-check"></span>
                    <span v-if="type=='subscribe'" class="ph-icon-done"></span>
                    <span v-if="type=='error'" class="ph-icon-error"></span>
                    <span class="confirmationMsg">{{message}}</span>
                    <button v-if="type=='addTo'" @click="undoClick">{{undoText}}</button>
                    <span v-if="type=='subscribe' || type=='error'" class="ph-icon-clear" @click="closeClick"></span>
                </div>`
            })
        }
    };

function undoNotInterestedClick(e) {
    let t = e && e.dataset ? e.dataset : null,
        a = t ? t.videoId : null;
    "undefined" != typeof interestedUrl && "undefined" != typeof actionMenuToken && a && MG_Utils.ajaxCall({
        type: "POST",
        url: interestedUrl,
        data: {
            id: a,
            token: actionMenuToken
        },
        dataType: "json",
        success: function(e) {
            var t;
            e && e.success && e.message && "OK" == e.message ? (t = (t = document.querySelector('li[data-video-id="' + a + '"]')) ? t.querySelector(".not-interested-overlay") : null) && MG_Utils.addClass(t, "display-none") : e && !e.success && e.message ? showToastMessage("error", e.message, a) : showToastMessage("error", actionMenuTranslations.tryLater, a)
        }
    })
}

function subscribeActionClick(l, o, r) {
    if ("undefined" != typeof subscribeActionObj) {
        let e, t = l ? l.dataset : null,
            a = t && 0 == t.subscribed ? subscribeActionObj.confirmSubscribeTxt : subscribeActionObj.confirmUnsubscribeTxt,
            s = t ? t.channel : 0,
            n = t ? t.contentPartner : null,
            i = t ? t.isPornhub : null;
        MG_Utils.hasClass(l, "privateMember") ? showToastMessage("", subscribeActionObj.cannotSubscribe, o) : t && (e = 1 == s ? 0 == t.subscribed ? subscribeActionObj.subscribeToChannelUrl : subscribeActionObj.unSubscribeFromChannelUrl : 0 == t.subscribed ? subscribeActionObj.subscribeToUserUrl : subscribeActionObj.unSubscribeFromUserUrl, e += "&id=" + t.id, 0 != i || 1 != n || r ? MG_Utils.ajaxCall({
            type: "GET",
            url: e,
            success: function(e) {
                e && "PASS" == e.success && (e = l ? l.querySelector(".label") : null, 0 == t.subscribed ? (l.setAttribute("data-subscribed", 1), showToastMessage("subscribe", actionMenuTranslations.subscribedMsg + ' "' + t.title + '"', o), e && (e.innerHTML = actionMenuTranslations.unSubscribeToMsg + ' "' + t.title + '"')) : (l.setAttribute("data-subscribed", 0), showToastMessage("subscribe", actionMenuTranslations.unSubscribedMsg + ' "' + t.title + '"', o), e && (e.innerHTML = actionMenuTranslations.subscribeToMsg + ' "' + t.title + '"')))
            }
        }) : confirm(a) && subscribeActionClick(l, o, !0))
    }
}

function watchLaterLinkClick(s, n) {
    var e = s.dataset.videoAdded;
    0 == e ? "undefined" != typeof playlistsUtils && "undefined" != typeof actionMenuToken && playlistsUtils.addVideoToPlaylist(null, n, actionMenuToken, s, "watchlater", function(e) {
        var t, a;
        e && e.success ? (t = s ? s.querySelector(".label") : null, a = s ? s.querySelector(".icon") : null, t && (t.innerHTML = actionMenuTranslations.removeWatchLater), a && (MG_Utils.removeClass(a, "ph-icon-playlist-add"), MG_Utils.addClass(a, "ph-icon-playlist-add-check")), s && (s.dataset.videoAdded = "1"), showToastMessage("addTo", actionMenuTranslations.addedToWatchLater, n)) : e && !e.success && e.message && showToastMessage("error", e.message, n)
    }) : 1 == e && "undefined" != typeof removeWatchLaterUrl && "undefined" != typeof actionMenuToken && MG_Utils.ajaxCall({
        type: "POST",
        url: removeWatchLaterUrl,
        data: {
            token: actionMenuToken,
            vid: n
        },
        dataType: "json",
        success: function(e) {
            var t, a;
            e && e.success ? (t = s ? s.querySelector(".label") : null, a = s ? s.querySelector(".icon") : null, t && (t.innerHTML = actionMenuTranslations.addToWatchLater), a && (MG_Utils.addClass(a, "ph-icon-playlist-add"), MG_Utils.removeClass(a, "ph-icon-playlist-add-check")), s && (s.dataset.videoAdded = "0"), showToastMessage("addTo", actionMenuTranslations.removedFromWatchLater, n)) : e && !e.success && e.message ? showToastMessage("error", e.message, n) : showToastMessage("error", actionMenuTranslations.tryLater, n)
        }
    })
}

function notInterestedLinkClick(e, n) {
    "undefined" != typeof notInterestedUrl && "undefined" != typeof actionMenuToken && MG_Utils.ajaxCall({
        type: "POST",
        url: notInterestedUrl,
        data: {
            id: n,
            token: actionMenuToken
        },
        dataType: "json",
        success: function(e) {
            if (e && e.success && e.message && "OK" === e.message) {
                let e = document.querySelector('li[data-video-id="' + n + '"]'),
                    t = document.createElement("div"),
                    a = document.createElement("span"),
                    s = document.createElement("button");
                "undefined" != typeof actionMenuTranslations && (a.innerHTML = actionMenuTranslations.notInterestedMessage, s.textContent = actionMenuTranslations.undo, t.appendChild(a), t.appendChild(s), s.setAttribute("data-video-id", n), MG_Utils.addClass(s, "undoNotInterested"), MG_Utils.addClass(t, "not-interested-overlay")), setTimeout(function() {
                    e && e.insertAdjacentElement("beforeend", t)
                }, 10)
            } else e && !e.success && e.message ? showToastMessage("error", e.message, n) : showToastMessage("error", actionMenuTranslations.tryLater, n)
        }
    })
}

function logThumbnailAction(e) {
    "undefined" != typeof phubGenericFuncModule && phubGenericFuncModule.sendGAEvent("Homepage", e, 1)
}

function moreActionLinkClick(e) {
    var t;
    e.target && (t = (e = e.target).dataset.videoId, MG_Utils.hasClass(e, "addToWatchLaterLink") ? watchLaterLinkClick(e, t) : MG_Utils.hasClass(e, "subscribeToLink") ? subscribeActionClick(e, t, !1) : MG_Utils.hasClass(e, "notInterestedLink") && notInterestedLinkClick(e, t))
}

function showToastMessage(e, t, a) {
    const s = document.querySelector("v-toast-message") ? document.querySelector("v-toast-message").getVueInstance() : null,
        n = document.getElementById("toastMessage");
    s && (s.type = e, s.message = t, s.videoId = a, "error" === e ? n && MG_Utils.addClass(n, "errorToast") : n && MG_Utils.removeClass(n, "errorToast"), n && MG_Utils.addClass(n, "showToast"), setTimeout(function() {
        n && MG_Utils.removeClass(n, "showToast")
    }, 3e3))
}

function initVideoActionMenu() {
    void 0 !== ToastMessage && ToastMessage.init(), document.addEventListener("click", function(e) {
        var t, a, s = document.querySelectorAll(".moreActionMenu"),
            n = document.querySelectorAll(".moreActionMenuButton");
        e && e.target && MG_Utils.hasClass(e.target, "moreActionMenuButton") ? (a = !((t = e.target.querySelector(".moreActionMenu")) && !MG_Utils.hasClass(t, "displayNone")), MG_Utils.addClassMultiple(s, "displayNone"), MG_Utils.removeClassMultiple(n, "active"), a && (MG_Utils.removeClass(t, "displayNone"), MG_Utils.addClass(e.target, "active")), logThumbnailAction("Action Menu")) : e && e.target && MG_Utils.hasClass(e.target, "moreActionLink") ? (e.preventDefault(), logThumbnailAction("Action Menu - " + e.target.dataset.name), "undefined" != typeof isLogged && (parseInt(isLogged) ? moreActionLinkClick(e) : "undefined" != typeof signinbox ? signinbox.show() : "undefined" != typeof loginRedirectUrl && (window.location = loginRedirectUrl)), MG_Utils.addClassMultiple(s, "displayNone"), MG_Utils.removeClassMultiple(n, "active")) : e && e.target && MG_Utils.hasClass(e.target, "undoNotInterested") ? undoNotInterestedClick(e.target) : (MG_Utils.addClassMultiple(s, "displayNone"), MG_Utils.removeClassMultiple(n, "active"))
    })
}
MG_Utils.domReady(function() {
    "undefined" != typeof videoMoreActionEnabled && videoMoreActionEnabled && ("undefined" != typeof actionMenuTranslations && void 0 !== MoreActionMenuComponent && MoreActionMenuComponent.init(), initVideoActionMenu()), document.body.addEventListener("mouseenter", function(e) {
        var t = e.target;
        t && MG_Utils.hasClass(t, "wrap") && showOverlay(e)
    }, !0), document.body.addEventListener("focus", function(e) {
        var t = e.target;
        t && MG_Utils.hasClass(t, "wrap") && showOverlay(e)
    }, !0), document.body.addEventListener("mouseleave", function(e) {
        var t = e.target;
        t && MG_Utils.hasClass(t, "wrap") && hideOverlay(e)
    }, !0), document.body.addEventListener("blur", function(e) {
        var t = e.target;
        t && MG_Utils.hasClass(t, "wrap") && hideOverlay(e, !0)
    }, !0), document.body.addEventListener("click", function(e) {
        var t = e.target;
        t && (MG_Utils.hasClass(t, "open-playlist-link") || MG_Utils.hasClass(t, "not-interested-button")) && addToSubmenu(e)
    }), document.body.addEventListener("keypress", function(e) {
        var t = e.target;
        t && (MG_Utils.hasClass(t, "open-playlist-link") || MG_Utils.hasClass(t, "not-interested-button")) && addToSubmenu(e)
    })
});
var hideShowMenu = function(e, t) {
        e && t && (MG_Utils.hasClass(e, "active") ? (MG_Utils.removeClass(e, "active"), MG_Utils.addClass(t, "display-none")) : MG_Utils.hasClass(e, "active") || (activePlaylists(), MG_Utils.addClass(e, "active"), MG_Utils.removeClass(t, "display-none"), positionMenu(e, t)))
    },
    positionMenu = function(e, t) {
        var a, s;
        e && t && (t.style.top = MG_Utils.offset(e).top + 27 + "px", t.style.left = MG_Utils.offset(e).left + "px", s = t.getBoundingClientRect(), a = window.innerWidth, s = t.offsetLeft + t.clientLeft + s.width) && a < s && (t.style.top = MG_Utils.offset(e).top + 27 + "px", t.style.left = MG_Utils.offset(e).left - 245 + "px")
    },
    playlist_menu_fadeout = function() {
        playlist_menu_fading = playlist_menu_fading && clearTimeout(playlist_menu_fading) && !1, playlist_menu_fading = setTimeout(function() {
            MG_Utils.addClass(menu, "fadeOut"), activePlaylists()
        }, 2e3)
    },
    successCallback = function(e, t) {
        var a;
        "OK" == e && t.target && (e = findAncestor(t.target, "videoBox"), t = findAncestor(t.target, "wrap"), e && (a = e.querySelector(".not-interested-overlay"), e.style.pointerEvents = "none"), t && (a = t.querySelector(".not-interested-overlay"), t.style.pointerEvents = "none"), a) && (a.style.display = "block")
    };

function findAncestor(e, t) {
    for (;
        (e = e.parentElement) && !e.classList.contains(t););
    return e
}

function errorCallback(e, t, a) {
    console.log("something went wrong  " + e + " " + t + " " + a)
}
var htmlWrapper, hideSubmenu = function(e) {
        var e = e.target || e.srcElement,
            t = document.querySelector(".zoom.active");
        MG_Utils.hasClass(e, "open-playlist-link") || menu && !MG_Utils.hasClass(menu, "display-none") && (MG_Utils.closest(e, ".add-to-playlist-menu") ? activePlaylists() : t ? MG_Utils.removeClass(t, "active") : (activePlaylists(), MG_Utils.hasClass(menu, "display-none") || MG_Utils.addClass(menu, "display-none"))), playlistMenu && !MG_Utils.closest(e, ".playlist-option-menu") && e.parentNode != document.querySelector("#options") && e != document.querySelector("#options") && MG_Utils.addClass(playlistMenu, "display-none")
    },
    activePlaylists = (document.addEventListener("mouseup", hideSubmenu), function(e) {
        var t = document.querySelector(".open-playlist-link.active"),
            a = document.querySelector(".not-interested-button.active");
        if (void 0 === e) {
            if (menu.querySelector(".custom-playlist") && menu.querySelector(".custom-playlist").querySelectorAll("li").length) {
                var s = menu.querySelector(".custom-playlist").querySelectorAll("li.added, li.alreadyAdded");
                if (s)
                    for (var n = 0; n < s.length; n++) {
                        MG_Utils.removeClass(s[n], "added");
                        var i = s[n].querySelector("span");
                        i && (i.textContent = "")
                    }
            }
            var e = menu && menu.querySelector(".quicklick.alreadyAdded"),
                l = e && e.querySelector("span"),
                e = (e && MG_Utils.removeClass(e, "alreadyAdded"), l && e && (l.textContent = "", e.removeChild(l)), menu && menu.querySelector(".quicklick.added")),
                l = e && e.querySelector("span");
            e && MG_Utils.removeClass(e, "added"), l && (l.textContent = "", e.removeChild(l))
        }
        t && (MG_Utils.removeClass(t, "active"), MG_Utils.addClass(t.parentNode, "display-none")), a && (MG_Utils.removeClass(a, "active"), MG_Utils.addClass(a.parentNode, "display-none"))
    }),
    commentsBtn = document.getElementById("commentPlaylist"),
    isMacLike = (commentsBtn && commentsBtn.addEventListener("click", function(e) {
        var t = document.getElementById("videoPlaylist"),
            a = t && t.querySelectorAll("li"),
            a = a && a.length <= 8 ? 1e3 : 500,
            s = document.getElementById("cmtPlaylist"),
            s = (t && MG_Utils.addClass(t, "stopLazyload"), s && MG_Utils.offset(s).top);
        s && $j("html, body").animate({
            scrollTop: s
        }, a, function() {
            setTimeout(function() {
                t && MG_Utils.removeClass(t, "stopLazyload")
            }, 5e3)
        })
    }), navigator.platform.match(/Mac/i));
isMacLike && (htmlWrapper = document.querySelector("html")) && MG_Utils.addClass(htmlWrapper, "macintosh");