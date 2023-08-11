var CookieDate, cbCookieName = "cookieConsent",
    cbCookieBannerStateName = "cookieBannerState",
    cbExpiration = 0,
    nonEssentialLocalStorageKeys = (isLoggedInUser, isLoggedInUser && ((CookieDate = new Date).setFullYear(CookieDate.getFullYear() + 1), cbExpiration = CookieDate.toUTCString()), ["tasteCategories", "_mpcehash", "covidPageViewCount", "playlistRated", "gifRated", "photoRated", "search", "searches", "ISP_INFO_SEND", "newTermSearched", "recentSearch", "currentTimeStamp"]),
    essentialLocalStorageKeys = ["puTargetURL", "loggedInFromJoinUviuCTA", "LsAccessSuccess", "watchedVideoIds", "enableStorage", "phLivePlayerQuality", "commentsReported", "dataProductID", "guestWatchToken", "trialBottomNotificationHidden", "notLoggedIn", "savedData", "videoOffset", "promoBannerPersistant", "favoritesRedirect", "mgp_player", "hornhub_overlay", "storage_test", "__storage_test__"],
    cbCookie = document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + cbCookieName + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"),
    cbCookieBannerState = document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + cbCookieBannerStateName + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"),
    linkToPrivacyPolicy = "https://www.pornhub.com/information/privacy#cookies",
    cbTexts = {
        primaryCTA: "Accept all cookies",
        secondaryCTA: "Accept only essential cookies",
        shortBannerText: "Some features may not be available with your selection. For a better browsing experience, you may select"
    },
    CookieHelper = {
        listCookiesArrayFromString: e => e.split("; ").map(e => e.split("=")[0]),
        deleteCookie: e => {
            document.cookie = e + "=0;expires=Thu, 01 Jan 1970 00:00:01 GMT"
        },
        deleteNonEssentialCookies: e => {
            e.filter(e => !(essentialCookiesList.includes(e) || e.startsWith("fg_") || e.startsWith("emailConfirmCookie_") || e.startsWith("title_translation_") || e.startsWith("notified_sponsor_") || e.startsWith("playlistShuffle_"))).forEach(e => {
                "undefined" != typeof cookieStore && void 0 !== cookieStore.delete && cookieStore.delete(e), document.cookie = e + "=0;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
            })
        },
        deleteNonEssentialsLocalStorageKeys: () => {
            "undefined" != typeof localStorage && nonEssentialLocalStorageKeys.forEach(e => {
                localStorage.removeItem(e)
            }), "undefined" != typeof sessionStorage && nonEssentialLocalStorageKeys.forEach(e => {
                sessionStorage.removeItem(e)
            })
        },
        isEssentialLSKey: e => {
            var o = e.includes("playlist_shuffle_"),
                t = e.includes("premiumPromoBanner");
            return essentialLocalStorageKeys.includes(e) || o || t
        },
        isNonEssentialLSKey: e => nonEssentialLocalStorageKeys.includes(e),
        isInEssentialList: e => essentialCookiesList.includes(e),
        canAdd: e => {
            return "3" == document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + cbCookieName + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || essentialCookiesList.includes(e) || e.startsWith("fg_") || e.startsWith("emailConfirmCookie_") || e.startsWith("title_translation_") || e.startsWith("notified_sponsor_") || e.startsWith("playlistShuffle_")
        },
        getCurrentConsent: () => document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + cbCookieName + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")
    };

function showFullCookieBanner() {
    var o, e, t, n, i = document.getElementById("cookieBanner");
    i && !i.classList.contains("cbShort") || (i && i.classList.contains("cbShort") && i.remove(), (o = document.createElement("div")).id = "cookieBanner", o.classList.add("withOverlay"), (i = document.createElement("div")).id = "cookieBannerWrapper", (e = document.createElement("div")).id = "cookieBannerContent", "undefined" != typeof biggerCookieBannerTemplate && (e.innerHTML = biggerCookieBannerTemplate), (t = document.createElement("button")).classList.add("cbPrimaryCTA", "cbButton"), t.textContent = ("undefined" != typeof Banner_Text && Banner_Text.primaryCTA ? Banner_Text : cbTexts).primaryCTA, t.addEventListener("click", function() {
        document.cookie = cbCookieName + "=3; expires=" + cbExpiration + ";secure;path=/", cookieConsentUserChoice("granted"), o.remove()
    }), (n = document.createElement("button")).classList.add("cbSecondaryCTA", "cbButton"), n.textContent = ("undefined" != typeof Banner_Text && Banner_Text.secondaryCTA ? Banner_Text : cbTexts).secondaryCTA, n.addEventListener("click", function() {
        document.cookie = cbCookieName + "=2; expires=" + cbExpiration + ";secure;path=/", cookieConsentUserChoice("denied"), o.remove(), showShortCookieBanner()
    }), i.appendChild(e), i.appendChild(t), i.appendChild(n), o.appendChild(i), document.body ? (addStyling(), document.body.appendChild(o)) : window.addEventListener("DOMContentLoaded", e => {
        addStyling(), document.body.appendChild(o)
    }), document.addEventListener("click", function(e) {
        e = e ? e.target : null;
        if (e && MG_Utils.hasClass(e, "showPrivacyPolicy")) showPrivacyPolicy();
        else if (e && "cookieBanner" === e.id) {
            let e = document.querySelector(".cbPrimaryCTA"),
                o = document.querySelector(".cbSecondaryCTA");
            e && MG_Utils.addClass(e, "focus"), o && MG_Utils.addClass(o, "focus"), setTimeout(function() {
                e && MG_Utils.removeClass(e, "focus"), o && MG_Utils.removeClass(o, "focus")
            }, 100)
        }
    }), document.cookie = cbCookieName + "=1; expires=" + cbExpiration + ";secure;path=/", document.cookie = cbCookieBannerStateName + "=0;expires=Thu, 01 Jan 1970 00:00:01 GMT", clearNonEssentialCookies(), CookieHelper.deleteNonEssentialsLocalStorageKeys())
}

function showPrivacyPolicy() {
    var e = document.querySelector(".scrollableBannerContent"),
        o = document.getElementById("privacyPolicyContent");
    e && (e.style.height = e.clientHeight + "px", MG_Utils.addClass(e, "scrollEnabled")), o && (MG_Utils.removeClass(o, "displayNone"), o.scrollIntoView({
        behavior: "smooth"
    }))
}

function showShortCookieBanner() {
    var o, e, t, n;
    document.getElementById("cookieBanner") || ((o = document.createElement("div")).id = "cookieBanner", o.classList.add("cbShort"), (e = document.createElement("p")).innerHTML = ("undefined" != typeof Banner_Text && Banner_Text.shortBannerText ? Banner_Text : cbTexts).shortBannerText, t = document.createElement("span"), n = ("undefined" != typeof Banner_Text && Banner_Text.primaryCTA ? Banner_Text : cbTexts).primaryCTA, t.classList.add("cbPrimaryCTA", "cbSpan"), t.textContent = " '" + n + "' ", t.addEventListener("click", function() {
        document.cookie = cbCookieName + "=3; expires=" + cbExpiration + ";secure;path=/", document.cookie = cbCookieBannerStateName + "=0;expires=Thu, 01 Jan 1970 00:00:01 GMT", cookieConsentUserChoice("granted"), o.remove()
    }), (n = document.createElement("button")).classList.add("cbCloseButton", "ph-icon-clear"), n.setAttribute("title", "close"), n.addEventListener("click", function() {
        document.cookie = cbCookieBannerStateName + "=1; expires=" + cbExpiration + ";secure;path=/", cookieConsentUserChoice("denied"), o.remove()
    }), e.appendChild(t), o.appendChild(e), o.appendChild(n), document.body ? (addStyling(), document.body.appendChild(o)) : window.addEventListener("DOMContentLoaded", e => {
        addStyling(), document.body.appendChild(o)
    }), clearNonEssentialCookies(), CookieHelper.deleteNonEssentialsLocalStorageKeys())
}

function cookieConsentUserChoice(e = "denied") {
    return "undefined" != typeof gtag && gtag("consent", "update", {
        ad_storage: e,
        analytics_storage: e
    }), e
}

function addStyling() {
    var o;
    document.getElementById("cookieBannerStyle") || ((o = document.createElement("style")).id = "cookieBannerStyle", o.innerHTML = `
        #cookieBanner.cbShort {
            background-color: rgba(15, 15, 15, 0.95);
            border-radius: 5px;
            padding: 1em;
            width: 90%;
            position: fixed;
            bottom: 0;
            margin: 5px auto;
            color: #c6c6c6;
            z-index: 100;
            text-align: center;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 14px;
        }
        #cookieBanner.withOverlay {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(21, 21, 21, 0.5);
            z-index: 100;
        }
        #cookieBannerWrapper {
            background-color: rgba(15, 15, 15, 0.95);
            border-radius: 10px 10px 0 0;
            padding: 1.5em;
            width: 100%;
            position: fixed;
            bottom: 0;
            margin: 5px auto 0;
            color: #c6c6c6;
            z-index: 100;
            text-align: center;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 14px;
            box-sizing: border-box;
        }
        
        #cookieBannerContent {
            width: 668px;
            margin: auto;
        }
        
        .scrollableBannerContent {
            margin-bottom: 20px;
        }
        
        .scrollEnabled {
            overflow-y: scroll;
        }
        
        .scrollEnabled::-webkit-scrollbar {
            width: 6px;
        }
         
        .scrollEnabled::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px #222; 
            border-radius: 10px;
        }
         
        .scrollEnabled::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #2F2F2F; 
        }
        
        .phLogo {
            width: 106px;
            margin: 0 auto 15px;
        }
        
        #cookieBanner h1 {
            font-size: 26px;
            line-height: 32px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
        }
        
        #cookieBanner h2 {
            color: #fff;
            margin-bottom: 15px;
        }
        
        #cookieBanner p, #cookieBanner ul {
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            text-align: left;
        }
        
        #cookieBanner .policyItalic {
            font-style: italic;
        }
        
        #cookieBanner .policyBold {
            font-weight: bold;
        }
        
        #cookieBanner ul li {
            list-style-position: inside;
            list-style-type: disc;
        }
        
        #cookieBanner a {
            color: #FF9000;
            cursor: pointer;
        }
        
        .showPrivacyPolicy {
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
            text-align: left;
            display: grid;
            grid-template-columns: 1fr auto;
            padding-right: 6px;
        }
        
        .showPrivacyPolicy:hover {
            text-decoration: none;
        }
        
        .ph-icon-expand-more {
            font-size: 7px;
            line-height: 22px;
            pointer-events: none;
        }
        
        #privacyPolicyContent {
            margin-top: 15px;
            text-align: left;
        }
        
        .cbButton {
            margin: 5px;
            min-width: 250px;
            cursor: pointer;
            background-color: black;
            color: white;
            border: 2px solid #FF9000;
            border-radius: 5px;
            padding: 0.79em 1em;
            box-sizing: border-box;
            text-transform: capitalize;
            font-size: 14px;
            font-weight: bold;
        }
        
        .cbButton:hover, .cbButton.focus {
            color: black;
            background-color: #FF9000;
        }

        #cookieBanner.cbShort p {
            font-size: 13px;
            margin: 0;
            text-align: center;
            color: #c6c6c6;
        }

        .cbShort .cbSpan {
            cursor: pointer;
            white-space: nowrap;
            text-transform: capitalize;
            margin-left: 4px;
        }

        .cbShort .cbSpan:hover {
            color: #FF9000;
        }
        
        .cbCloseButton {
            position: absolute;
            top: -10px;
            right: -9px;
            color: #969696;
            cursor: pointer;
            border: none;
            font-size: 12px;
            width: 26px;
            height: 26px;
            background: #333;
            border-radius: 13px;
        }

        @media screen and (min-width: 401px) and (max-width: 800px) {
            .cbShort cbButton {
                display: block;
                clear: both;
            }
        }
        
        @media screen and (max-width: 600px) {
            #cookieBannerContent {
                width: 100%;
            }
        }
        
    `, document.head ? document.head.appendChild(o) : window.addEventListener("DOMContentLoaded", e => {
        document.head.appendChild(o)
    }))
}
"3" !== cbCookie && "2" !== cbCookie ? showFullCookieBanner() : "2" == cbCookie && "1" !== cbCookieBannerState && showShortCookieBanner();
var pollingInterval = 1e3;

function listenCookieChange(t, e = pollingInterval) {
    if ("3" != cbCookie) {
        let o = document.cookie;
        setInterval(() => {
            var e = document.cookie;
            if (e !== o) try {
                t({
                    oldValue: o,
                    newValue: e
                })
            } finally {
                o = e
            }
        }, e)
    }
}

function clearNonEssentialCookies() {
    CookieHelper.deleteNonEssentialCookies(document.cookie.split("; ").map(e => e.split("=")[0]))
}
listenCookieChange(({
    oldValue: e,
    newValue: o
}) => {
    o = CookieHelper.listCookiesArrayFromString(o);
    let t = CookieHelper.listCookiesArrayFromString(e);
    o.filter(e => !t.includes(e));
    CookieHelper.deleteNonEssentialCookies(o)
}, pollingInterval);