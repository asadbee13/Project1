var playlistsUtils = function() {
    function l(e) {
        var t = document.querySelector(".errorMessage");
        t && MG_Utils.hasClass(t, "displayNone") && void 0 !== e && (t.innerText = e, MG_Utils.removeClass(t, "displayNone"), setTimeout(function() {
            MG_Utils.addClass(t, "displayNone")
        }, 5e3))
    }

    function n(e, t) {
        var a, s, l, d = document.createElement("div"),
            i = document.getElementById("playlist-form"),
            o = document.querySelector("#modalWrapMTubes .playlist-modal");
        i && MG_Utils.addClass(i, "displayNone"), d.className = "succesMsg", o && void 0 !== e.message && (i = o.querySelector(".modal-title"), a = o.querySelector(".succesMsg"), s = "", l = e.code == WIDGET_PLAYLIST_HEADER.videoNotActiveCode ? WIDGET_PLAYLIST_HEADER.videoNotAdded : e.message, i && (i.innerHTML = l), e.success ? (i && (i.innerHTML = WIDGET_PLAYLIST_HEADER.successNewPlaylist + "!", MG_Utils.addClass(i, "successGreen")), s = WIDGET_PLAYLIST_HEADER.successVideoAdded + ": " + t) : (i && MG_Utils.addClass(i, "failureRed"), e.code != WIDGET_PLAYLIST_HEADER.videoNotActiveCode && (s = t + " " + e.message)), a ? MG_Utils.setText(a, s) : (MG_Utils.setText(d, s), o.appendChild(d)), setTimeout(function() {
            location.reload()
        }, 3e3))
    }
    return {
        playlistCreate: function(l, e, t, a, d, i, o) {
            playlistCreateUrl && MG_Utils.ajaxCall({
                type: "POST",
                url: playlistCreateUrl,
                dataType: "json",
                data: {
                    title: l,
                    tags: e,
                    description: t,
                    status: a,
                    token: d
                },
                success: function(e) {
                    var t, a, s;
                    e.success && i ? (a = {}, e.id && (a.pid = e.id), o && (a.vid = o), d && (a.token = d), t = i, s = l, (a = a) && MG_Utils.ajaxCall({
                        type: "POST",
                        url: t,
                        data: a,
                        dataType: "json",
                        success: function(e) {
                            n(e, s)
                        }
                    })) : e && n(e, l)
                }
            })
        },
        addVideoToPlaylist: function(e, t, a, d, i, o) {
            var s = "watchlater" === i ? playlistWatchlaterAddUrl : "lovers" === i ? playlistLoversAddUrl : playlistCustomAddUrl,
                l = {};
            e && (l.pid = e), t && (l.vid = t), a && (l.token = a), s && MG_Utils.ajaxCall({
                url: s,
                type: "POST",
                dataType: "json",
                data: l,
                success: function(e) {
                    var t, a, s = d && d.parentNode,
                        l = d && d.querySelector("span");
                    e.success ? o ? "function" == typeof o && o(e) : d && (s && MG_Utils.addClass(s, "added"), "watchlater" === i ? (t = document.createElement("span"), s && s.appendChild(t), t && (t.textContent = TRANSLATED_MESSAGE.added)) : l && (l.textContent = TRANSLATED_MESSAGE.added)) : "Already added!" === e.message ? (s && MG_Utils.addClass(s, "alreadyAdded"), "watchlater" === i ? s.querySelector("span") || (t = document.createElement("span"), s && s.appendChild(t), t && (t.textContent = TRANSLATED_MESSAGE.alreadyAdded + "!")) : "lovers" === i ? ((a = (a = document.querySelector("a.lover-playlist-add")) && a.parentNode) && MG_Utils.addClass(a, "alreadyAdded"), t = document.createElement("span"), a && a.appendChild(t), t && (t.textContent = TRANSLATED_MESSAGE.alreadyAdded + "!")) : l && (l.textContent = TRANSLATED_MESSAGE.alreadyAdded + "!")) : e.message && (a = s && s.querySelector(".alreadyInPlaylistMessage")) && (a.innerText = e.message, MG_Utils.addClass(a, "requestErrorMessage"))
                }
            })
        },
        addToFavourites: function(e, t, a) {
            playlistFavouriteAddUrl && MG_Utils.ajaxCall({
                type: "POST",
                url: playlistFavouriteAddUrl,
                dataType: "json",
                data: {
                    pid: e,
                    token: t
                },
                success: function(e) {
                    e.success ? a && (MG_Utils.addClass(a, "favorited"), a.setAttribute("data-title", WIDGET_PLAYLIST_HEADER.alreadyInFavorite)) : l(e.message)
                }
            })
        },
        removeFromFavourites: function(e, t, a, s) {
            playlistFavouriteRemoveUrl && MG_Utils.ajaxCall({
                type: "POST",
                url: playlistFavouriteRemoveUrl,
                data: {
                    pid: e,
                    token: t
                },
                dataType: "json",
                success: function(e) {
                    var t;
                    e.success ? (a && (MG_Utils.removeClass(a, "favorited"), a.setAttribute("data-title", WIDGET_PLAYLIST_HEADER.favoritePL)), s && (t = document.getElementById(s)) && t.parentNode.removeChild(t)) : l(e.message)
                }
            })
        },
        updatePlaylist: function(e, t) {
            var a = !(!e || !e.id) && e.id,
                a = a && "watchlater" == a && playlistUpdateUrlWatchlater ? playlistUpdateUrlWatchlater : playlistUpdateUrl;
            a && MG_Utils.ajaxCall({
                type: "POST",
                url: a,
                dataType: "json",
                data: e,
                success: function(e) {
                    t && t(e)
                }
            })
        },
        deletePlaylist: function(e, t, a, s) {
            removeAllVideosFromPlaylist && MG_Utils.ajaxCall({
                type: "POST",
                url: a || removeAllVideosFromPlaylist,
                dataType: "json",
                data: {
                    pid: e,
                    token: t
                },
                success: function(e) {
                    s()
                }
            })
        },
        removeVideoFromPlaylist: function(e, t, a, s) {
            MG_Utils.ajaxCall({
                type: "POST",
                url: s || removeVideoFromCustomPlaylist,
                dataType: "json",
                data: {
                    pid: e || null,
                    vid: t,
                    token: a
                }
            })
        },
        playlistRate: function(e, t, a, s) {
            e && MG_Utils.ajaxCall({
                type: "POST",
                url: e,
                data: t,
                success: function(e) {
                    e && void 0 !== s && s && void 0 !== a && LocalStorageManager.getInstance().push(a.toLowerCase() + "Rated", e)
                }
            })
        },
        loadVideos: function(e, t, a, s, l) {
            e && MG_Utils.ajaxGetData({
                url: e + "&offset=" + (s + t * a) + "&itemsPerPage=" + a,
                method: "get",
                success: function(e) {
                    l && l(e)
                }
            })
        },
        lazyLoadVideos: function(e, t, a) {
            e && MG_Utils.ajaxGetData({
                url: e + "&page=" + t,
                method: "GET",
                success: function(e) {
                    a && a(e), (new LazyLoadImage).init(page_params.lazyLoad)
                }
            })
        },
        savePlaylist: function(e, t, a) {
            e && MG_Utils.ajaxCall({
                url: e,
                data: t,
                type: "POST",
                success: function(e) {
                    a && a(e)
                }
            })
        }
    }
}();