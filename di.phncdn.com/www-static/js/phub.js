var certifyVideoModal, mainHubWelcomeModal, confirmPopUpModal = null,
    phubGenericFuncModule = function() {
        function a(e, t) {
            for (var a = 0; a < e.length; a++) e[a].setAttribute("href", t)
        }
        return {
            setCategoryLink: function() {
                var e = document.querySelectorAll("#menuItem3 > a, .categoryDefault"),
                    t = e.length ? e[0].getAttribute("href") : "";
                switch (MG_Utils.getCookie("currentCategory")) {
                    case "al":
                        a(e, t += "?o=al");
                        break;
                    case "mv":
                        a(e, t += "?o=mv");
                        break;
                    case "mp":
                        a(e, t)
                }
            },
            setCookie: function(e) {
                var t;
                "undefined" != typeof CookieHelper && !CookieHelper.canAdd(e.split("=")[0]) || ((t = new Date).setTime(t.getTime() + 3e4), document.cookie = e + ";expires=" + t.toUTCString() + ";path=/")
            },
            friendReqSubmit: function() {
                var o = document.querySelector("#preventClick"),
                    s = o ? o.getAttribute("data-user-id") : "",
                    e = document.querySelector("#friendRequestForm"),
                    l = document.querySelector(".friend_" + s + " button"),
                    i = l.children;
                MG_Utils.ajaxCall({
                    url: e.getAttribute("action"),
                    data: function(e) {
                        for (var t = document.querySelectorAll(e), a = {}, n = 0; n < t.length; n++) a[t[n].name] = 1e3 < t[n].value.length ? t[n].value.substring(0, 1e3) : t[n].value;
                        return a
                    }('#friendRequestForm input:not([type="button"]), #friendRequestForm textarea'),
                    type: "POST",
                    dataType: "JSON",
                    beforeSend: function() {
                        for (var e = 0; e < i.length; e++) MG_Utils.addClass(i[e], "visuallyHidden");
                        l.insertAdjacentHTML("beforeend", '<span class="spinner" />')
                    },
                    success: function(e) {
                        var t = document.querySelector(".friend_" + s),
                            a = l.querySelector(".spinner"),
                            n = document.querySelector(".subscribe_" + s);
                        "undefined" != typeof friendRequestModal && "SENT" === e.success && friendRequestModal.closeModal();
                        for (var r = 0; r < i.length; r++) MG_Utils.removeClass(i[r], "visuallyHidden");
                        a && l.removeChild(a), "SENT" == e.success ? (l.setAttribute("data-friends", 1), t && MG_Utils.removeClass(t, "removeFriend"), t && MG_Utils.removeClass(t, "add"), t && MG_Utils.addClass(t, "sent"), n && e.subscribed && (n.querySelector("button").setAttribute("data-subscribed", 1), MG_Utils.removeClass(n, "subscribe"), MG_Utils.addClass(n, "unsubscribe"), n.querySelector(".buttonLabel").textContent = "Subscribed"), o && 1 == o.getAttribute("data-refresh") && location.reload(), t && t.querySelector(".buttonLabel") && (t.querySelector(".buttonLabel").textContent = e.text_initial)) : alert(e.message)
                    }
                })
            },
            sendSearchGAEvent: function(e) {
                var e = e && e.target && e.target.dataset ? e.target.dataset.ga : null,
                    t = Math.random() <= .1;
                e && "function" == typeof ga && t && ga("send", "event", "related search", "click", e)
            },
            sendGAEvent: function(e, t, a) {
                var n = (n = getCookieAdvanced("gaProbabilityPercent")) ? parseInt(n) / 100 : a || 1,
                    a = Math.random() <= n;
                e && t && "function" == typeof ga && a && ga("send", "event", e, "click", t)
            }
        }
    }(),
    eventsModule = function() {
        function a(e) {
            var t;
            e.target && MG_Utils.hasClass(e.target, "pornstarsList") && (t = e.target.value) && (e.target.value = t.replace(/[\<\>|\[\]|\{\}|\(\)]/gi, ""))
        }

        function b(a) {
            var e;
            void 0 !== (confirmPopUpModal = void 0 !== confirmPopUpModal && !confirmPopUpModal && (Vue.customElement("confirm-modal", {
                computed: {
                    getButtonText: function() {
                        return modalTranslationText.okButton
                    }
                },
                template: '<div id="confirmModal" class="modalWrapper"><div class="modal-body"><div class="text"></div><button class="orangeButton js-okBtn" data-modal="info">{{getButtonText}}</button></div></div>'
            }), e = document.getElementById("confirmModal")) ? new MG_Modal({
                content: e,
                className: "infoModalContainer"
            }) : confirmPopUpModal) && confirmPopUpModal && confirmPopUpModal.openModal(function(e, t) {
                t = t.querySelectorAll(".text");
                t && (t[0].innerHTML = a)
            })
        }

        function y(e, t) {
            var a = document.querySelector("form input.intendedAction"),
                n = document.querySelector("form input.userId");
            a && n && (a.value = e, n.value = t.getAttribute("data-id"))
        }

        function C(e, t, a) {
            e.preventDefault();
            var o = void 0 !== t ? t : "BUTTON" === e.target.tagName ? e.target : e.target.parentElement,
                s = o.children,
                t = o.parentElement.getAttribute("data-button-id"),
                l = document.querySelectorAll("." + t),
                i = document.querySelectorAll("." + t + " button"),
                d = document.querySelectorAll("." + t + " .buttonLabel"),
                t = 0 == o.getAttribute("data-subscribed") ? o.getAttribute("data-subscribe-url") : o.getAttribute("data-unsubscribe-url"),
                n = o.getAttribute("data-login"),
                u = o.getAttribute("data-refresh"),
                r = 0 == o.getAttribute("data-subscribed") ? "By subscribing to this content partner you are also subscribing to all of their channels, would you like to continue?" : "By unsubscribing from this content partner you are also unsubscribing from all of their channels, would you like to continue?",
                c = o.getAttribute("data-content-partner"),
                m = o.getAttribute("data-is-pornhub"),
                g = o.getAttribute("data-hidden");
            1 == n ? (y("subscribe", o), signinbox.show({
                subscribe: 1
            })) : 0 == m && 1 == c && !0 !== a ? yesNoModal.show(r, function() {
                C(e, o, !0)
            }) : 1 == g ? b(modalTranslationText.cannotSubscribe) : MG_Utils.ajaxCall({
                type: "POST",
                url: t,
                dataType: "JSON",
                beforeSend: function() {
                    for (var e = 0; e < s.length; e++) MG_Utils.addClass(s[e], "visuallyHidden");
                    o.insertAdjacentHTML("beforeend", '<span class="spinner" />')
                },
                success: function(e) {
                    for (var t = o.querySelector(".spinner"), a = 0; a < s.length; a++) MG_Utils.removeClass(s[a], "visuallyHidden");
                    if (t && o.removeChild(t), "PASS" == e.success) {
                        if (0 == o.getAttribute("data-subscribed")) {
                            for (a = 0; a < i.length; a++) i[a].setAttribute("data-subscribed", 1);
                            for (a = 0; a < l.length; a++) {
                                MG_Utils.removeClass(l[a], "subscribe"), MG_Utils.addClass(l[a], "unsubscribe");
                                var n = l[a].querySelector("i");
                                n && (MG_Utils.removeClass(n, "ph-icon-rss-feed"), MG_Utils.addClass(n, "ph-icon-already-subscribed"))
                            }
                        } else {
                            for (a = 0; a < i.length; a++) i[a].setAttribute("data-subscribed", 0);
                            for (a = 0; a < l.length; a++) {
                                MG_Utils.removeClass(l[a], "unsubscribe"), MG_Utils.addClass(l[a], "subscribe");
                                var r = l[a].querySelector("i");
                                r && (MG_Utils.removeClass(r, "ph-icon-already-subscribed"), MG_Utils.addClass(r, "ph-icon-rss-feed"))
                            }
                        }
                        1 == u && location.reload()
                    } else o.setAttribute("disabled", 1);
                    if (e.text_initial)
                        for (a = 0; a < d.length; a++) d[a].textContent = e.text_initial
                },
                error: function() {
                    location.reload()
                }
            })
        }
        return {
            onTextAreaFocus: function(e) {
                (e = e.target) && "TEXTAREA" === e.tagName && e.hasAttribute("data-val") && e.dataset.val == e.value && (e.value = "")
            },
            onBlur: function(e) {
                var t;
                (t = (t = e).target) && "TEXTAREA" === t.tagName && t.hasAttribute("data-val") && "" == t.value && (t.value = t.dataset.val), a(e)
            },
            onKeyUp: function(e) {
                a(e)
            },
            onButtonMouseEnter: function(e) {
                var t, a;
                e.target && MG_Utils.hasClass(e.target, "addFriendButton") ? (a = e.target.querySelector(".buttonLabel"), t = e.target.querySelector("i"), a && "Friends" === a.textContent ? a.textContent = "Unfriend" : a && "Request Sent" === a.textContent && (a.textContent = "Cancel Request"), t && a && a.textContent.indexOf("Add") < 0 && (MG_Utils.removeClass(t, "ph-icon-friend-added"), MG_Utils.addClass(t, "ph-icon-remove-friend"))) : e.target && MG_Utils.hasClass(e.target, "subscribeButton") && (a = e.target.querySelector(".buttonLabel")) && "Subscribed" === a.textContent && (a.textContent = "Unsubscribe")
            },
            onButtonMouseLeave: function(e) {
                var t, a;
                e.target && MG_Utils.hasClass(e.target, "addFriendButton") ? (a = e.target.querySelector(".buttonLabel"), t = e.target.querySelector("i"), a && "Unfriend" === a.textContent ? a.textContent = "Friends" : a && "Cancel Request" === a.textContent && (a.textContent = "Request Sent"), t && a && a.textContent.indexOf("Add") < 0 && (MG_Utils.removeClass(t, "ph-icon-remove-friend"), MG_Utils.addClass(t, "ph-icon-friend-added"))) : e.target && MG_Utils.hasClass(e.target, "subscribeButton") && (a = e.target.querySelector(".buttonLabel")) && "Unsubscribe" === a.textContent && (a.textContent = "Subscribed")
            },
            onSpanMouseOver: function(e) {
                var t;
                e.target && MG_Utils.hasClass(e.target, "js-moreAction") && (t = e.target.querySelector(".tooltiptext"), e = e.target.querySelector(".triangle"), t && MG_Utils.removeClass(t, "hidden"), e) && MG_Utils.removeClass(e, "hidden")
            },
            onSpanMouseOut: function(e) {
                var t;
                e.target && MG_Utils.hasClass(e.target, "js-moreAction") && (t = e.target.querySelector(".tooltiptext"), e = e.target.querySelector(".triangle"), t && MG_Utils.addClass(t, "hidden"), e) && MG_Utils.addClass(e, "hidden")
            },
            documentClick: function(e) {
                var t, a, n, r, o, s, l, i, d, u, c, m;
                if ((g = e).target && "preventClick" === g.target.id && (g = g.target, t = document.querySelector("#messageRequest"), g.setAttribute("disabled", "disabled"), t && "Add a personal message (optional)..." == t.value && (t.value = " "), isLogged) && phubGenericFuncModule.friendReqSubmit(), (g = e).target && ("LI" === g.target.tagName && MG_Utils.hasClass(g.target, "item") || "A" === g.target.tagName && g.target.parentElement && MG_Utils.hasClass(g.target.parentElement, "item") || "SPAN" === g.target.tagName && g.target.parentElement && g.target.parentElement.parentElement && MG_Utils.hasClass(g.target.parentElement.parentElement, "item")) && (t = (g = MG_Utils.hasClass(g.target, "item") ? g.target : (MG_Utils.hasClass(g.target.parentElement, "item") ? g.target : g.target.parentElement).parentElement).querySelectorAll(".soughtValue"), a = MG_Utils.hasClass(g, "pornstar"), n = MG_Utils.hasClass(g, "channel"), m = document.querySelector("#searchInput"), t = t.length ? t[0].textContent : m ? m.value : "", m = {}, g = {
                        to: encodeURI(g.textContent),
                        from: encodeURI(t)
                    }, a ? m.psu = g : n ? m.csu = g : m.qsu = g, phubGenericFuncModule.setCookie("autocomplete_search=" + JSON.stringify(m))), (a = e).target && MG_Utils.hasClass(a.target, "js-okBtn") && (a.preventDefault(), confirmPopUpModal.closeModal()), (n = e).target && ("BUTTON" === n.target.tagName && n.target.parentElement && MG_Utils.hasClass(n.target.parentElement, "addFriendButton") || "SPAN" === n.target.tagName && n.target.parentElement && "BUTTON" === n.target.parentElement.tagName && n.target.parentElement.parentElement && MG_Utils.hasClass(n.target.parentElement.parentElement, "addFriendButton") || "I" === n.target.tagName && n.target.parentElement && "BUTTON" === n.target.parentElement.tagName && n.target.parentElement.parentElement && MG_Utils.hasClass(n.target.parentElement.parentElement, "addFriendButton")) && (n.preventDefault(), r = "BUTTON" === n.target.tagName ? n.target : n.target.parentElement, o = r.children, n = (s = r.parentElement).getAttribute("data-button-id"), l = document.querySelectorAll("." + n), i = document.querySelectorAll("." + n + " .buttonLabel"), d = r.getAttribute("data-friends"), u = r.getAttribute("data-refresh"), c = 2 == d ? r.getAttribute("data-unfriend-url") : r.getAttribute("data-friend-url"), n = r.getAttribute("data-login"), g = r.getAttribute("data-show-confirm-email-modal"), m = r.getAttribute("data-hidden"), 1 == n ? (y("add-friend", r), signinbox.show()) : 1 == g ? b(modalTranslationText.confirmEmail) : 1 == m ? b(modalTranslationText.cannotAdd) : 1 == d ? MG_Utils.ajaxCall({
                        type: "POST",
                        url: r.getAttribute("data-unfriend-url"),
                        dataType: "JSON",
                        success: function(e) {
                            if ("PASS" == e.success) {
                                r.setAttribute("data-friends", 0), s && MG_Utils.hasClass(s, "updatedStyledBtn") && (MG_Utils.removeClass(r, "friendRequested"), e = r.querySelector("i")) && (MG_Utils.removeClass(e, "ph-icon-remove-friend"), MG_Utils.addClass(e, "ph-icon-add-friend"));
                                for (var t = 0; t < i.length; t++) i[t].textContent = "Add Friend";
                                for (t = 0; t < l.length; t++) MG_Utils.removeClass(l[t], "sent"), MG_Utils.removeClass(l[t], "removeFriend"), MG_Utils.addClass(l[t], "add")
                            }
                        }
                    }) : MG_Utils.ajaxCall({
                        type: "POST",
                        url: c,
                        dataType: "JSON",
                        beforeSend: function() {
                            for (var e = 0; e < o.length; e++) MG_Utils.addClass(o[e], "visuallyHidden");
                            r.insertAdjacentHTML("beforeend", '<span class="spinner" />')
                        },
                        success: function(e) {
                            for (var t = r.querySelector(".spinner"), a = 0; a < o.length; a++) MG_Utils.removeClass(o[a], "visuallyHidden");
                            if (t && r.removeChild(t), "PASS" == e.success) {
                                if (0 == d) {
                                    1 == u && e.auto_accepted && (r.setAttribute("data-friends", 2), location.reload()), r.setAttribute("data-friends", 1);
                                    for (a = 0; a < l.length; a++) MG_Utils.removeClass(l[a], "add"), MG_Utils.addClass(l[a], "removeFriend")
                                } else if (2 == d) {
                                    r.setAttribute("data-friends", 0);
                                    for (a = 0; a < l.length; a++) MG_Utils.removeClass(l[a], "removeFriend"), MG_Utils.addClass(l[a], "add");
                                    1 == u && location.reload()
                                }
                            } else "ATTEMPT" == e.success ? builtModal(e.user.id, e.user.avatar, e.user.username, e.user.profile, c, u) : r.setAttribute("disabled", 1);
                            if (e.text_initial && 0 < i.length)
                                for (a = 0; a < i.length; a++) i[a].textContent = e.text_initial
                        },
                        error: function() {
                            location.reload()
                        }
                    })), ((g = e).target && ("BUTTON" === g.target.tagName && g.target.parentElement && MG_Utils.hasClass(g.target.parentElement, "subscribeButton") || "SPAN" === g.target.tagName && g.target.parentElement && "BUTTON" === g.target.parentElement.tagName && g.target.parentElement.parentElement && MG_Utils.hasClass(g.target.parentElement.parentElement, "subscribeButton") || "I" === g.target.tagName && g.target.parentElement && "BUTTON" === g.target.parentElement.tagName && g.target.parentElement.parentElement && MG_Utils.hasClass(g.target.parentElement.parentElement, "subscribeButton")) || MG_Utils.hasClass(g.target, "js_videoSubscribeButton")) && (MG_Utils.hasClass(g.target, "js_videoSubscribeButton") ? C(g, target = document.querySelector(".js_videoSubscribeButton button")) : C(g)), isLogged && (g = e).target && (MG_Utils.hasClass(g.target, "notificationIcon") || "I" === g.target.tagName && g.target.parentElement && MG_Utils.hasClass(g.target.parentElement, "notificationIcon"))) {
                    var g = MG_Utils.hasClass(g.target, "notificationIcon") ? g.target : g.target.parentElement,
                        e = g.dataset ? g.dataset.title : "",
                        M = g.dataset ? g.dataset.type : "",
                        g = document.querySelector("#notificationBox"),
                        f = document.querySelector("#notificationBox .titleContainer"),
                        v = document.querySelector("#notificationBox #loadingDiv"),
                        p = document.querySelectorAll("ul#modelNotificationList > li, .handle3, .track3");
                    f && (f.textContent = e), g && (g.dataset.type = M), g && g.setAttribute("type", M);
                    for (var h = 0; h < p.length; h++) p[h].style.display = "none";
                    v && (v.style.display = "block"), setTimeout(function() {
                        insertNotificationContent(), setActiveStyle(M)
                    }, 100)
                }
            },
            backToPHClick: function() {
                var e = document.querySelector("#js-backToPH"),
                    t = e ? e.dataset : "";
                t && MG_Utils.ajaxCall({
                    url: t.logout,
                    type: "POST"
                }).done(function() {
                    $j.ajax({
                        url: premiumRedirectCookieURL + "&do=delete",
                        cache: !1,
                        xhrFields: {
                            withCredentials: !0
                        },
                        crossDomain: !0
                    }).done(function() {
                        window.location.href = t.redirect
                    })
                })
            }
        }
    }(),
    avatarLoad = function() {
        var i = MG_Utils.hasClass(document.body, "logged-out"),
            d = {
                timer: null,
                el: null
            },
            u = {};

        function e(e) {
            if (e.target && (MG_Utils.hasClass(e.target, "avatarWrap") || MG_Utils.hasClass(e.target, "userLink") || MG_Utils.hasClass(e.target, "usernameWrap"))) {
                var s, l = e.target,
                    t = l.dataset,
                    a = document.querySelectorAll(".avatarPosition");
                if (0 == t.disablePopover) {
                    for (var n = 0; n < a.length; n++) a[n].innerHTML = "";
                    (MG_Utils.hasClass(l, "avatarTrigger") && a.length || MG_Utils.hasClass(l, "usernameWrap") && a.length && (r = (e = e).target, o = (e = e.currentTarget).querySelector(".avatarPosition"), !((!e.contains(r) || o.contains(r)) && e != r)) || MG_Utils.hasClass(l, "userLink")) && (d.timer && clearTimeout(d.timer), s = t.type, d.el = l, d.timer = setTimeout(function() {
                        var e;
                        u[t[s + "id"]] ? i && (e = d.el.querySelector(".avatarPosition")) && (e.innerHTML = u[t[s + "id"]]) : MG_Utils.ajaxCall({
                            type: "POST",
                            url: "/" + s + "/hover?id=" + t[s + "id"],
                            dataType: "text",
                            context: this,
                            cache: !1,
                            success: function(e) {
                                l.querySelector(".avatarPosition").innerHTML = e;
                                for (var t = document.querySelectorAll(".avatarPopOver"), a = 0; a < t.length; a++) t[a].style.display = "none";
                                l.querySelector(".avatarPopOver") && (l.querySelector(".avatarPopOver").style.display = "block");
                                var e = document.querySelector(".avatarPopOver"),
                                    n = e ? e.getBoundingClientRect() : null,
                                    n = n ? n.left : 0,
                                    r = e ? e.offsetWidth : 0,
                                    o = document.querySelector(".wrapper") ? document.querySelector(".wrapper").offsetWidth : 0;
                                e && (o < n + r ? MG_Utils.addClass(e, "popOverEdge") : MG_Utils.removeClass(e, "popOverEdge")), i && (u[d.el.dataset[s + "id"]] = d.el.querySelector(".avatarPosition") ? d.el.querySelector(".avatarPosition").innerHTML : "")
                            }
                        })
                    }, 500))
                }
            }
            var r, o
        }

        function t(e) {
            var t, a, n, r;
            e.target && (MG_Utils.hasClass(e.target, "avatarWrap") || MG_Utils.hasClass(e.target, "userLink") || MG_Utils.hasClass(e.target, "usernameWrap")) && (a = (t = e.target).dataset, n = "", r = document.querySelector(".avatarPopOver"), 0 == a.disablePopover) && (n = t.dataset ? t.dataset.type : "", i && (u[e.target.dataset[n + "id"]] = e.target.querySelector(".avatarPosition") ? e.target.querySelector(".avatarPosition").innerHTML : ""), r && (r.style.display = "none"), r && document.body.insertAdjacentElement("beforeend", r), clearTimeout(d.timer))
        }
        return {
            init: function() {
                document.body.addEventListener && (document.body.addEventListener("mouseenter", e, !0), document.body.addEventListener("mouseleave", t, !0), document.querySelectorAll(".js-accessiblePopUp").length) && (document.body.addEventListener("focus", e, !0), document.body.addEventListener("blur", t, !0))
            }
        }
    }(),
    CertifyVideosModalComponent = {
        open: function() {
            void 0 === certifyVideoModal && Vue.customElement("v-certify-videos-modal", {
                mounted: function() {
                    var e = document.getElementById("certifyVideosModal");
                    e && (certifyVideoModal = new MG_Modal({
                        content: e,
                        className: "certifyVideoModalContainer",
                        closeButton: !1,
                        closeDocument: !1
                    }))
                },
                template: CERTIFY_VIDEOS_MODAL_TEMPLATE
            }), void 0 !== certifyVideoModal && certifyVideoModal.openModal()
        }
    };

function showMainHubWelcomeModal() {
    var e = document.getElementById("mainHubWelcomeModal");
    e && (mainHubWelcomeModal = new MG_Modal({
        content: e,
        className: "mainHubWelcomeModalContainer",
        closeButton: !0,
        closeDocument: !1
    })).openModal(function(e, t) {
        function a() {
            "undefined" != typeof MAINHUB_WELCOME_MODAL && MG_Utils.ajaxCall({
                url: MAINHUB_WELCOME_MODAL.doNotShowAgainUrl,
                type: "POST",
                success: function(e) {
                    e.success && mainHubWelcomeModal.closeModal()
                }
            })
        }
        var n = t.querySelector(".okayButton"),
            t = t.querySelector(".closeMTubes");
        n && n.addEventListener("click", a), t && t.addEventListener("click", a)
    })
}

function loadJS(e, t) {
    MG_Utils.ajaxCall({
        url: e,
        dataType: "script"
    }).done(function() {
        "function" == typeof t && t()
    })
}
MG_Utils.domReady(function() {
        showMainHubWelcomeModal(), "undefined" != typeof CERTIFY_VIDEOS_MODAL_TEMPLATE && CertifyVideosModalComponent.open(), document.addEventListener("click", eventsModule.documentClick);
        for (var e = document.querySelectorAll("a.relatedItem"), t = document.querySelectorAll(".js-trendSearch"), a = document.querySelectorAll("ul#curentItemCategory li"), n = document.querySelector(".nf-categories-sidebar .sidebar_wrapper.js-mxpParent"), r = document.querySelectorAll(".js-moreAction"), o = document.querySelectorAll("#languages li a, .languages li a"), s = document.querySelector("#js-backToPH"), l = document.querySelector(".js_premiumLogOut"), i = 0; i < e.length; i++) e[i].addEventListener("click", function() {
            var e = document.querySelector("#searchInput"),
                e = {
                    from: encodeURI(e ? e.value.trim() : "")
                };
            phubGenericFuncModule.setCookie("related_search=" + JSON.stringify(e))
        });
        for (i = 0; i < t.length; i++) t[i].addEventListener("click", function() {
            phubGenericFuncModule.setCookie("trending_search= " + encodeURI(this.textContent))
        });
        for (i = 0; i < a.length; i++) a[i].addEventListener("click", function() {
            document.cookie = "currentCategory= " + this.dataset.category
        });
        phubGenericFuncModule.setCategoryLink(), avatarLoad.init(), document.body.addEventListener && (document.body.addEventListener("focus", eventsModule.onTextAreaFocus, !0), document.body.addEventListener("blur", eventsModule.onBlur, !0), document.body.addEventListener("keyup", eventsModule.onKeyUp, !0), document.body.addEventListener("mouseenter", eventsModule.onButtonMouseEnter, !0), document.body.addEventListener("mouseleave", eventsModule.onButtonMouseLeave, !0), document.body.addEventListener("mouseover", eventsModule.onSpanMouseOver, !0), document.body.addEventListener("mouseout", eventsModule.onSpanMouseOut, !0)), n && MG_Utils.addClass(n, "domReady"), isLarge && MG_Utils.addClass(document.querySelector("html"), "largeLayout");
        for (i = 0; i < r.length; i++) r[i].addEventListener("click", function(e) {
            e.target && e.target.parentElement && (e = e.target.parentElement.querySelector("#profileBlockReport .blockAndReportSubscribers")) && MG_Utils.toggleClass(e, "hidden")
        });
        for (i = 0; i < o.length; i++) o[i].addEventListener("click", function() {
            if (setCookieAdvanced("lang", this.dataset.lang, 30, "/", this.dataset.root), location.hash != this.hash) return location.href = (-1 == this.href.indexOf("#") ? this.href : this.href.substring(0, this.href.indexOf("#"))) + location.hash, !1
        });
        s && s.addEventListener("click", eventsModule.backToPHClick), l && l.addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.getAttribute("href");
            $j.ajax({
                url: premiumRedirectCookieURL + "&do=delete",
                cache: !1,
                crossDomain: !0,
                xhrFields: {
                    withCredentials: !0
                }
            }).done(function() {
                MG_Utils.storage.hasLocalStorage && localStorage.getItem("covidPageViewCount") && localStorage.removeItem("covidPageViewCount"), document.location.href = t
            })
        }), document.getElementById("js-networkBar") && setTimeout(function() {
            var e = document.getElementById("js-networkBar").querySelector(".languageDropdown");
            e && (e = e.querySelectorAll("li")) && [].forEach.call(e, function(t) {
                t.addEventListener("click", function() {
                    var e = MG_Utils.getData(t, "lang");
                    setCookieAdvanced("lang", e, 30, "/", removeSubdomain(window.location.host))
                })
            })
        }, 100), isLogged && ($j("#notificationBox").on("click", ".subscribeConfirm label", function(e) {
            var t = e.currentTarget.parentElement.querySelector("input"),
                e = e.currentTarget.querySelector(".fakeCheckBox");
            t.checked ? MG_Utils.removeClass(e, "checked") : MG_Utils.addClass(e, "checked")
        }), $j("#notificationBox").on("click", ".friendRequestItem .btnFlag", function() {
            var e = this;
            yesNoModal.show("Are you sure you want to report as spam and reject this request?", function() {
                reportSpam(e.dataset.userid)
            }, null, null, null, "redesign_menu")
        }), $j("#notificationBox").on("click", function(e) {
            e.stopPropagation()
        }));
        const d = document.getElementById("mainHubToastMessage"),
            u = (d && MG_Utils.addClass(d, "showToast"), document.getElementById("limitSpamToastMessage")),
            c = (u && MG_Utils.addClass(u, "showToast"), document.addEventListener("click", function(e) {
                if (e.target && MG_Utils.hasClass(e.target, "js-closeToast")) {
                    const t = e.target.dataset,
                        a = t ? e.target.dataset.url : null,
                        n = t ? e.target.dataset.flag : null;
                    a && n ? MG_Utils.ajaxCall({
                        url: a,
                        type: "POST",
                        data: {
                            dismissal_source: n
                        },
                        success: function(e) {
                            e && e.success && ("51" == n ? (d && MG_Utils.removeClass(d, "showToast"), d && d.remove()) : "52" == n && ((e = document.getElementById("socialMediaToastMessage")) && MG_Utils.removeClass(e, "showToast"), e && e.remove(), d) && MG_Utils.removeClass(d, "shiftToastUp"))
                        }
                    }) : (u && MG_Utils.removeClass(u, "showToast"), u && u.remove())
                }
            }), document.getElementById("leftMenu")),
            m = document.querySelector(".menuWrapper"),
            g = document.querySelector(".menuFadeOutOverly");
        document.addEventListener("click", function(e) {
            var e = e.target,
                t = e && e.id;
            !e || "desktopNavigation" === t || MG_Utils.hasClass(e, "menuWrapper") || MG_Utils.hasClass(e, "menuLink") || MG_Utils.hasClass(e, "subMenuTrigger") || MG_Utils.hasClass(e, "subMenuMainLink") || MG_Utils.hasClass(e, "js-menuAnalytics") || MG_Utils.hasClass(e, "menuFadeOutOverly") || MG_Utils.hasClass(e, "js_chevronRight") ? t && "desktopNavigation" === t && c && MG_Utils.toggleClass(c, "active") : c && MG_Utils.removeClass(c, "active"), m.scrollHeight > m.clientHeight ? MG_Utils.removeClass(g, "hidden") : MG_Utils.addClass(g, "hidden")
        }), MG_Utils.addEventHandler(m, "scroll", function() {
            m.scrollTop + m.clientHeight >= m.scrollHeight ? MG_Utils.addClass(g, "hidden") : MG_Utils.removeClass(g, "hidden")
        }), MG_Utils.addEventHandler(g, "click", function() {
            m.scrollTo({
                top: m.scrollHeight,
                behavior: "smooth"
            }), MG_Utils.addClass(g, "hidden")
        }), document.addEventListener("click", function(e) {
            var t, a = e.target,
                e = e.target && e.target.parentNode;
            let n, r, o;
            if (a && MG_Utils.hasClass(a, "subMenuTrigger") || e && MG_Utils.hasClass(e, "subMenuTrigger")) {
                const s = MG_Utils.closest(a, ".subMenuTriggerwithLink"),
                    l = s && s.nextElementSibling,
                    i = s && s.querySelector(".subMenuTrigger");
                l && s && (MG_Utils.hasClass(l, "active") ? (MG_Utils.removeClass(l, "active"), MG_Utils.removeClass(i, "ph-icon-arrow-drop-up"), MG_Utils.hasClass(s, "activeSub") && l.addEventListener("transitionend", function() {
                    MG_Utils.removeClass(s, "activeSub")
                }), MG_Utils.addClass(i, "ph-icon-arrow-drop-down")) : (MG_Utils.addClass(l, "active"), MG_Utils.removeClass(i, "ph-icon-arrow-drop-down"), MG_Utils.addClass(s, "activeSub"), l.addEventListener("transitionend", function() {
                    MG_Utils.hasClass(s, "activeSub") || MG_Utils.addClass(s, "activeSub")
                }), MG_Utils.addClass(i, "ph-icon-arrow-drop-up")))
            }(o = a && "locationMenu" !== a.id && (MG_Utils.closest(a, ".js-subMenu") && (t = (t = MG_Utils.closest(a, ".js-subMenu")) && t.previousElementSibling, r = t && t.innerText), MG_Utils.hasClass(a, "js-menuAnalytics") ? n = a.innerText : MG_Utils.hasClass(a, "svgSpriteIcon") || MG_Utils.closest(a, ".svgSpriteIcon") ? (t = MG_Utils.closest(a, ".svgSpriteIcon") ? MG_Utils.closest(a, ".svgSpriteIcon") : a, n = t.parentNode && t.parentNode.innerText) : e && MG_Utils.hasClass(e, "js-menuAnalytics") && (n = e.innerText), MG_Utils.closest(a, "#leftMenu")) ? "Hamburger Menu" : o) && n && "function" == typeof ga && ga("send", "event", o, "click", (r ? r + "-" : "") + n.trim())
        })
    }),
    function() {
        var o, s, l, e;
        s = document.querySelector(".js-elInViewPort"), l = MG_Utils.debounce(function() {
            var e, t, a = 0,
                n = document.querySelectorAll(".js-whenInView"),
                r = n.length;
            if (e = (e = s).getBoundingClientRect(), t = document.documentElement, 0 <= e.bottom && 0 <= e.right && e.top <= (window.innerHeight || t.clientHeight) && e.left <= (window.innerWidth || t.clientWidth))
                if (o) window.removeEventListener("scroll", l);
                else if (n && r) {
                for (; a < r; a++) n[a].setAttribute("src", n[a].getAttribute("data-image"));
                o = !0
            }
        }, 125), {
            init: function() {
                s && window.addEventListener("scroll", l)
            }
        }.init(), (e = document.querySelector(".relatedCategoriesWrapper")) && 0 == e.querySelector(".nf-categories").querySelectorAll(".show").length && MG_Utils.addClass(e, "hidden")
    }(),
    function() {
        if ("undefined" != typeof MPP_EXCLUSIVE_TERMS) try {
            var e = document.getElementById("modelMPPExclusive"),
                d = new MG_Modal({
                    content: e,
                    className: "modelMPPExclusiveModal",
                    closeButton: !1,
                    closeDocument: !1,
                    maxWidth: "500px",
                    minWidth: "500px"
                });
            d.openModal(function() {
                var e, t, a, n, r, o, s, l, i = document.getElementById("modalWrapMTubes");
                i && (e = i.querySelector(".modelMPPForm"), t = i.querySelector(".modelMPPSubmit"), a = i.querySelector(".js-modelMPPInputIntial"), n = i.querySelector(".js-modelMPPError"), r = i.querySelector(".js-modelMPPErrorMessage"), o = {
                    errors: [],
                    checked: !1
                }, s = function(e) {
                    if (o.errors.push(e), n && r) return MG_Utils.removeClass(n, "isHidden"), o.errors.forEach(function(e) {
                        r.innerHTML = e
                    })
                }, l = function() {
                    n && r && (MG_Utils.addClass(n, "isHidden"), r.innerHTML = "")
                }, document.addEventListener("change", function(e) {
                    MG_Utils.hasClass(e.target, "js-modelMPPInput") && (l(), o.checked = !0)
                }), document.addEventListener("click", function(e) {
                    if (MG_Utils.hasClass(e.target, "modelMPPSubmit")) return e.preventDefault(), o.checked ? "" === a.value ? s(MPP_EXCLUSIVE_TERMS.errorIntials) : 3 <= a.value.length ? s(MPP_EXCLUSIVE_TERMS.errorLimit) : void MG_Utils.ajaxCall({
                        url: MPP_EXCLUSIVE_TERMS.endPoint,
                        data: {
                            exclusive: i.querySelector(".js-modelMPPInput:checked").value,
                            initials: i.querySelector(".js-modelMPPInputIntial").value
                        },
                        type: "POST",
                        success: function(e) {
                            e.success ? d.closeModal() : 3 === (e = e.message).code ? s(MPP_EXCLUSIVE_TERMS.errorAlpha) : s(e.text)
                        }
                    }) : s(MPP_EXCLUSIVE_TERMS.errorChecked)
                }), document.addEventListener("focus", function(e) {
                    MG_Utils.hasClass(e.target, "js-modelMPPInputIntial") && l()
                }, !0), a.addEventListener("keyup", function() {
                    13 === event.keyCode && t.click()
                }), e.addEventListener("submit", function(e) {
                    e.preventDefault()
                }))
            })
        } catch (e) {
            console.log("MPP Eclusive: ", e)
        }
    }();
var resetPasswordForm = document.getElementById("resetPasswordForm"),
    pwdInput = resetPasswordForm && resetPasswordForm.elements.password,
    pwdInputAgain = resetPasswordForm && resetPasswordForm.elements.passwordAgain,
    matchError = resetPasswordForm && resetPasswordForm.querySelector(".matchError"),
    phCustomEvent = (resetPasswordForm && resetPasswordForm.addEventListener("submit", function(e) {
        var t;
        e.preventDefault(), matchError && (matchError.innerHTML = ""), pwdInput && pwdInputAgain && matchError && "undefined" != typeof PASSWORD_RESET && (e = pwdInput.value, t = pwdInputAgain.value, e || t) && (e.length < 6 ? matchError.innerHTML = PASSWORD_RESET.passwordShort : /([a-zA-Z0-9_-])\1\1/.test(e) ? matchError.innerHTML = PASSWORD_RESET.passwordInvalid : PASSWORD_RESET.userName && e.toLowerCase() == PASSWORD_RESET.userName.toLowerCase() ? matchError.innerHTML = PASSWORD_RESET.passwordUsername : e !== t ? matchError.innerHTML = PASSWORD_RESET.passwordMatch : (matchError.innerHTML = "", this.submit()))
    }), function() {
        "use strict";
        var n = {};
        return {
            dispatch: function(t, a) {
                n.hasOwnProperty(t) && [].forEach.call(n[t], function(e) {
                    try {
                        e.callback(t, a)
                    } catch (e) {
                        console.log("Error dispatching event ", e)
                    }
                })
            },
            subscribe: function(e, t) {
                t = {
                    callback: t
                };
                n[e] ? n[e].push(t) : n[e] = [t]
            },
            unsubscribe: function(e, t) {
                for (var a = n[e].length; a--;) n[e].splice(a, 1), t && t(e)
            }
        }
    }());
! function() {
    var t, e = document.getElementById("loginModal2fa");

    function a() {
        let e = document.getElementById("loginModal2fa").dataset.cookiedomain;
        0 === e.indexOf("www.") ? e = e.replace("www.", ".") : 0 !== e.indexOf(".") && (e = "." + e), setCookieAdvanced("email2faModal", 1, -1, "/", e)
    }
    e && ((t = new MG_Modal({
        content: e,
        className: "loginModal2fa",
        closeButton: !1,
        closeDocument: !1
    })).openModal(), (e = document.querySelectorAll(".js-close2faModal"))[0] && MG_Utils.addEventHandler(e[0], "click", function(e) {
        e.preventDefault(), a(), t.closeModal()
    }), e = document.querySelectorAll(".loginModal2fa .buttonBase")) && e.forEach(e => {
        e.addEventListener("click", a)
    })
}();