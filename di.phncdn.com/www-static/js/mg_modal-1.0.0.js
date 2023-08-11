var MG_Modal = function() {
    "use strict";
    var s, l;

    function t() {
        this.closeButton = null, this.container = null, this.modal = null, this.options = MG_Utils.extendDefaults({
            autoOpen: !1,
            className: "generalMTubes",
            closeButton: !0,
            closeDocument: !0,
            closeKey: !1,
            content: "",
            maxWidth: "",
            minWidth: "",
            overlay: !0,
            position: "",
            pageScrolling: !1,
            timeMs: null,
            lazyload: !1,
            afterunload: null,
            flagCommentCancelClass: "flagCommentCancel"
        }, arguments[0]), this.options.autoOpen && this.openModal()
    }

    function a() {
        var e = null;
        if (document.createElement) {
            var t = document.createElement("p"),
                o = /^rgba/;
            if (t && t.style && "function" == typeof o.test) try {
                t.style.color = "rgba(1, 1, 1, 0.5)", e = o.test(t.style.color)
            } catch (t) {
                e = !1
            }
        }
        return e
    }
    return t.prototype = {
        constructor: t,
        closeModal: function(t) {
            var e;
            s = !1, MG_Utils.removeClass(document.body, "isOpenMTubes"), this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container), this.options.timeMs && clearTimeout(l), this.options.pageScrolling && (e = document.body, MG_Utils.removeClass(e, "scrollMTubes"), e.style.height = ""), t && "function" == typeof t && t(this.container, this.modal), this.options.afterunload && "function" == typeof this.options.afterunload && this.options.afterunload(this.container, this.modal)
        },
        openModal: function(t) {
            if (!s) {
                ! function() {
                    var t, e = document.createElement("div"),
                        o = document.createDocumentFragment();
                    t = "string" == typeof this.options.content ? this.options.content : this.options.content.innerHTML.replace(/MHP1138-/gi, "");
                    (function() {
                        this.container = document.createElement("div"), this.container.id = "modalWrapMTubes", this.container.className = (a() ? "" : "noRbga bg-legacy-opacity ") + "fadeInMTubes containerMTubes " + this.options.className;
                        return this.container
                    }).call(this),
                        function() {
                            return this.modal = document.createElement("div"), this.modal.className = "modalMTubes " + this.options.className, this.modal.style.minWidth = this.options.minWidth, this.modal.style.maxWidth = this.options.maxWidth, this.modal
                        }.call(this), e.className = "contentMTubes", e.innerHTML = t, this.modal.appendChild(e), this.container.appendChild(this.modal),
                        function() {
                            this.options.closeButton && (this.closeButton = document.createElement("button"), this.closeButton.className = "ph-icon-clear closeMTubes buttonMTubes", this.modal.appendChild(this.closeButton));
                            this.options.overlay && MG_Utils.addClass(this.container, "isVisibleMTubes"); {
                                var t, e;
                                this.options.pageScrolling && (t = document.body, e = document.documentElement, e = Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight), MG_Utils.addClassMultiple([this.container, t], "scrollMTubes"), t.style.height = e + "px")
                            }
                            this.options.position && (this.modal.style.marginTop = this.options.position)
                        }.call(this), o.appendChild(this.container), document.body.appendChild(o)
                }.call(this), ! function() {
                    var o = this; {
                        var t, n;
                        this.closeButton && (t = o.container.querySelector("#" + this.options.flagCommentCancelClass), n = function() {
                            o.closeModal();
                            var t = document.querySelector("form input.intendedAction"),
                                e = document.querySelector("form input.userId");
                            t && e && (t.value = "", e.value = ""), MG_Utils.removeEventHandler(o.closeButton, "click", n)
                        }, MG_Utils.addEventHandler(o.closeButton, "click", n), t) && MG_Utils.addEventHandler(t, "click", n)
                    } {
                        var e;
                        this.container && this.options.closeDocument && (e = function(t) {
                            "modalWrapMTubes" !== (t.target && t.target.id || t.srcElement && t.srcElement.id) || getSelection().toString() || (o.closeModal(), MG_Utils.removeEventHandler(o.container, "click", e))
                        }, MG_Utils.addEventHandler(o.container, "click", e))
                    } {
                        var i;
                        this.container && this.options.closeKey && (i = function(t) {
                            t.keyCode || t.charCode;
                            27 == t.keyCode && (o.closeModal(), MG_Utils.removeEventHandler(document, "keyup", i))
                        }, MG_Utils.addEventHandler(document, "keyup", i))
                    }
                }.call(this), MG_Utils.addClass(document.body, "isOpenMTubes"), MG_Utils.addClassMultiple([this.modal, this.container], "elOpenMTubes"), this.options.timeMs && (e = this, l = setTimeout(function() {
                    e.closeModal()
                }, this.options.timeMs)), t && "function" == typeof t && t(this.container, this.modal);
                var e, t = this.options.content;
                if ("string" != typeof t)
                    for (var o = 0, n = t.querySelectorAll("*"), i = n.length; o < i; o++) n[o].id && !n[o].id.match(/MHP1138-/gi) && (n[o].id = "MHP1138-" + n[o].id);
                this.options.lazyload && (t = this.container) && [].forEach.call(t.querySelectorAll(".lazy"), function(t) {
                    var e = t.getAttribute("data-src");
                    e && t.setAttribute("src", e)
                })
            }
            s = !0
        }
    }, t
}();