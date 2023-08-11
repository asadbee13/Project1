var $j = jQuery.noConflict();

function ajaxPost(e, t) {
    var o;
    return XMLHttpRequest && ((o = new XMLHttpRequest).open("POST", e, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), o.onreadystatechange = function() {
        4 === o.readyState && 200 <= o.status && o.status < 400 && t && (document.querySelectorAll(t)[0].innerHTML = o.responseText)
    }, o.send()), !1
}
var infoModalHolder, yesNoModal = {
        show: function(e, i, s, c, d, u) {
            var t = document.getElementById("yesNoModal"),
                y = (MG_Utils.setText(t.querySelector(".text"), e), new MG_Modal({
                    content: t,
                    className: "yesNoModalContainer"
                }));
            null !== typeof y && y.openModal(function(e, t) {
                var o = t.querySelector(".mobileFriedly.yesBtn"),
                    n = t.querySelector(".mobileFriedly.noBtn"),
                    l = t.querySelector(".mobileFriedly.modal-close"),
                    r = (MG_Utils.removeEventHandler(o, "click"), n && MG_Utils.removeEventHandler(n, "click"), l && MG_Utils.removeEventHandler(l, "click"), o && o.addEventListener("click", function(e) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1, null !== typeof y && y.closeModal(), "function" == typeof i && i()
                    }), []),
                    r = (n && r.push(n), l && r.push(l), r.push(t.querySelector(".closeMTubes.buttonMTubes")), r.forEach(function(n, e) {
                        var l = "premiumTemplate_";
                        n && n.addEventListener("click", function(e) {
                            var t, o;
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1, null !== typeof y && (e = $j(n)[0].dataset.video, t = $j("#" + (l + e)), o = $j("label[for='" + l + e + "']"), e && (t.show(), $j("html, body").animate({
                                scrollTop: t.offset().top
                            }, 500), t.hide(), o.addClass("evidentLabel"), o.effect("highlight", {}, 2e3), t.prop("checked", !0).change(), $j("#premiumCheck_" + e).val(1), $j(".privacyDropdown").toggle()), y.closeModal()), "/upload/videodata" == window.location.pathname ? MG_Utils.hasClass(n, "modal-close") && s() : "function" == typeof s && s()
                        })
                    }), c && (l = (n = t.querySelector(".yesNoModalConfirmation")).querySelector("input[type='checkbox']"), n.style.display = "block", o.disabled = !0, MG_Utils.addEventHandler(l, "click", function() {
                        o.disabled = !o.disabled
                    })), document.querySelector(".modalMTubes.yesNoModalContainer")),
                    t = document.querySelector(".yesNoModalContainer .modal-title"),
                    n = document.querySelector(".yesNoModalContainer .yesBtn"),
                    l = document.querySelector(".yesNoModalContainer .noBtn"),
                    a = document.querySelector(".yesNoModalContainer .closeMTubes");
                d && (r && MG_Utils.addClass(r, "redesign"), n.innerHTML = YES_NO_MODAL_TEXT.accept, l.innerHTML = YES_NO_MODAL_TEXT.cancel, a.innerHTML = '<svg role="img" class="closeIcon"><use xlink:href="#closeIcon"></svg>', t.innerHTML = YES_NO_MODAL_TEXT.deleteGif), u && (r && MG_Utils.addClass(r, u), n.innerHTML = YES_NO_MODAL_TEXT.confirm)
            })
        }
    },
    infoModalContent = function(e, t, o, n) {
        var l = [{
                selector: ".modal-title",
                value: e
            }, {
                selector: ".text",
                value: t
            }, {
                selector: ".success-text",
                value: o
            }, {
                selector: ".error-text",
                value: n
            }],
            r = document.getElementById("infoModal");
        for (i = 0; i < l.length; i++) {
            var a = r.querySelector(l[i].selector);
            l[i].value ? (a.innerHTML = l[i].value, a.style.display = "") : a.style.display = "none"
        }
        return r
    };

function rankingNumberFormatter(e) {
    return "string" == typeof e && (e = e.replace(/[.,\s]/g, "")), 999999 < e ? parseInt((e / 1e6).toFixed(0)) + "M" : 999 < e ? parseInt((e / 1e3).toFixed(0)) + "K" : e + ""
}

function displayNumbers() {
    var e = document.querySelectorAll(".formattedCounter");
    if (0 < e.length)
        for (var t = 0; t < e.length; t++) e[t].innerText = rankingNumberFormatter(e[t].innerText), e[t].classList.remove("hidden"), MG_Utils.hasClass(e[t].parentElement, "hidden") && e[t].parentElement.classList.remove("hidden")
}
$j(".notificationIcon .formattedCounter").each(function(e) {
    var t = $j(this),
        o = t.text();
    t.text(rankingNumberFormatter(o)), displayNumbers()
});