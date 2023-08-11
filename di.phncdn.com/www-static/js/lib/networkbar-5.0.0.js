var mobileNewDropdown = [],
    networkbar = function(options) {
        var defaults = {
                showGayBar: 0,
                sitename: "",
                theme: "",
                country: "en",
                extraCSS: "",
                fixedOnScroll: !1,
                onLoadFixed: !0,
                colors: {
                    mainBg: "#000000",
                    tabColor: "#C6C6C6",
                    tabHoverColor: "#ffffff",
                    tabHoverBg: "#333333",
                    dropdownBg: "#333333",
                    dropdownHoverBg: "#282828",
                    subDropdownBg: "#282828",
                    scrollBg: "#ffffff",
                    tabColorRedesign: "#969696",
                    tabHoverColorRedesign: "#C6C6C6",
                    dropdownBgRedesign: "#0E0E0E"
                },
                straightLangUrl: "",
                gayLangUrl: "",
                straightActions: {
                    edit: !1,
                    remove: !1,
                    add: !1
                },
                gayActions: {
                    edit: !1,
                    remove: !1,
                    add: !1
                },
                dataStraight: [{
                    id: 1,
                    name: "Spicevids",
                    link: {
                        type: "urlMap",
                        external: !0
                    }
                }, {
                    id: 2,
                    name: "UVIU",
                    link: {
                        url: "https://www.uviu.com?ata=phnavbar&atc=navbar&",
                        type: "withUTM",
                        external: !0
                    }
                }, {
                    id: 3,
                    name: "Sexual wellness",
                    link: {
                        url: "https://www.pornhub.com/sex/?",
                        type: "withUTM"
                    }
                }, {
                    id: 4,
                    name: "Insights",
                    link: {
                        url: "https://www.pornhub.com/insights/?",
                        type: "withUTM"
                    }
                }, {
                    id: 5,
                    name: "sites",
                    class: "wide sitesDropdown",
                    dropdown: [{
                        parentId: 5,
                        id: 82,
                        dropdownName: "YouPorn",
                        link: {
                            type: "countryUtmUrl",
                            sitename: "youporn",
                            external: !0
                        },
                        icon: "youPorn.svg"
                    }, {
                        parentId: 5,
                        id: 83,
                        dropdownName: "RedTube",
                        link: {
                            type: "countryUtmUrl",
                            sitename: "redtube",
                            external: !0
                        },
                        icon: "redTube.svg"
                    }, {
                        parentId: 5,
                        id: 84,
                        dropdownName: "Tube8",
                        link: {
                            type: "countryUtmUrl",
                            sitename: "tube8",
                            external: !0
                        },
                        icon: "tube8.svg"
                    }, {
                        parentId: 5,
                        id: 85,
                        dropdownName: "PornMD",
                        link: {
                            url: "https://www.pornmd.com/?",
                            type: "withUTM",
                            external: !0
                        },
                        icon: "pornMD.svg"
                    }, {
                        parentId: 5,
                        id: 86,
                        dropdownName: "Thumbzilla",
                        link: {
                            url: "https://www.thumbzilla.com/?",
                            type: "withUTM",
                            external: !0
                        },
                        icon: "thumbzilla.svg"
                    }]
                }, {
                    id: 6,
                    name: "Shop",
                    link: {
                        type: "storesUrlMap",
                        external: !0,
                        linkEquity: !0
                    }
                }, {
                    id: 7,
                    name: "Trust & Safety",
                    link: {
                        url: "https://help.pornhub.com/hc/en-us/categories/4419836212499",
                        type: "default",
                        external: !0,
                        linkEquity: !0
                    }
                }, {
                    id: 8,
                    name: "language",
                    class: "languageDropdown",
                    dropdown: [{
                        parentId: 8,
                        id: 89,
                        class: "languageLabel",
                        dropdownName: "Language"
                    }, {
                        parentId: 8,
                        id: 90,
                        dropdownName: "English",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "en"
                        }
                    }, {
                        parentId: 8,
                        id: 91,
                        dropdownName: "Deutsch",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "de"
                        }
                    }, {
                        parentId: 8,
                        id: 92,
                        dropdownName: "Français",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "fr"
                        }
                    }, {
                        parentId: 8,
                        id: 93,
                        dropdownName: "Español",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "es"
                        }
                    }, {
                        parentId: 8,
                        id: 94,
                        dropdownName: "Italiano",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "it"
                        }
                    }, {
                        parentId: 8,
                        id: 95,
                        dropdownName: "Português",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "pt"
                        }
                    }, {
                        parentId: 8,
                        id: 96,
                        dropdownName: "Polski",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "pl"
                        }
                    }, {
                        parentId: 8,
                        id: 97,
                        dropdownName: "Русский",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "ru"
                        }
                    }, {
                        parentId: 8,
                        id: 992,
                        dropdownName: "中文(简体)",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "cn"
                        }
                    }, {
                        parentId: 8,
                        id: 99,
                        dropdownName: "Dutch",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "nl"
                        }
                    }, {
                        parentId: 8,
                        id: 991,
                        dropdownName: "Czech",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "cz"
                        }
                    }, {
                        parentId: 8,
                        id: 98,
                        dropdownName: "日本語",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "jp"
                        }
                    }]
                }],
                dataGay: [{
                    id: 1,
                    name: "Gay Premium",
                    link: {
                        type: "urlMap"
                    }
                }, {
                    id: 2,
                    name: "Sexual wellness",
                    link: {
                        url: "https://www.pornhub.com/sex/?",
                        type: "withUTM"
                    }
                }, {
                    id: 3,
                    name: "Insights",
                    link: {
                        url: "https://www.pornhub.com/insights/?",
                        type: "withUTM"
                    }
                }, {
                    id: 4,
                    name: "sites",
                    class: "wide sitesDropdown",
                    dropdown: [{
                        parentId: 4,
                        id: 51,
                        dropdownName: "YouPorn gay",
                        link: {
                            type: "countryUtmUrl",
                            sitename: "youporn",
                            orientation: "gay",
                            external: !0
                        },
                        icon: "youPorn.svg"
                    }, {
                        parentId: 4,
                        id: 52,
                        dropdownName: "RedTube gay",
                        link: {
                            type: "countryUtmUrl",
                            sitename: "redtube",
                            orientation: "gay",
                            external: !0
                        },
                        icon: "redTube.svg"
                    }, {
                        parentId: 4,
                        id: 53,
                        dropdownName: "Tube8 gay",
                        link: {
                            type: "countryUtmUrl",
                            sitename: "tube8",
                            orientation: "gay",
                            external: !0
                        },
                        icon: "tube8.svg"
                    }, {
                        parentId: 4,
                        id: 54,
                        dropdownName: "PornMD gay",
                        link: {
                            url: "https://www.pornmd.com/gay/gay?",
                            type: "withUTM",
                            external: !0
                        },
                        icon: "pornMD.svg"
                    }, {
                        parentId: 4,
                        id: 55,
                        dropdownName: "Thumbzilla gay",
                        link: {
                            url: "https://www.thumbzilla.com/gay/?",
                            type: "withUTM",
                            external: !0
                        },
                        icon: "thumbzilla.svg"
                    }]
                }, {
                    id: 5,
                    name: "Shop",
                    link: {
                        type: "storesUrlMap",
                        external: !0,
                        linkEquity: !0
                    }
                }, {
                    id: 6,
                    name: "Trust & Safety",
                    link: {
                        url: "https://help.pornhub.com/hc/en-us/categories/4419836212499",
                        type: "default",
                        external: !0,
                        linkEquity: !0
                    }
                }, {
                    id: 7,
                    name: "language",
                    class: "languageDropdown",
                    dropdown: [{
                        parentId: 7,
                        id: 59,
                        class: "languageLabel",
                        dropdownName: "Language"
                    }, {
                        parentId: 7,
                        id: 60,
                        dropdownName: "English",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "en"
                        }
                    }, {
                        parentId: 7,
                        id: 61,
                        dropdownName: "Deutsch",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "de",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 62,
                        dropdownName: "Français",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "fr",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 63,
                        dropdownName: "Español",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "es",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 64,
                        dropdownName: "Italiano",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "it",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 65,
                        dropdownName: "Português",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "pt",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 66,
                        dropdownName: "Polski",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "pl",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 67,
                        dropdownName: "Русский",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "ru",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 692,
                        dropdownName: "中文(简体)",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "cn",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 69,
                        dropdownName: "Dutch",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "nl",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 691,
                        dropdownName: "Czech",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "cz",
                            orientation: "gay"
                        }
                    }, {
                        parentId: 7,
                        id: 68,
                        dropdownName: "日本語",
                        link: {
                            type: "countryUrlCurrentDomain",
                            country: "jp",
                            orientation: "gay"
                        }
                    }]
                }]
            },
            scope = this;
        if (options.colors)
            for (var i in defaults.colors) options.colors[i] || (options.colors[i] = defaults.colors[i]);

        function _init() {
            _addClass(scope.wrapper, "networkBar"), "tablet" == scope.platform && _addClass(scope.wrapper, "tabletNetworkBar"), scope.fixedOnScroll && _onScroll.call(scope), _template.call(scope), _generateCSS.call(scope), scope.theme && _addClass(scope.wrapper, scope.theme), _resize.call(scope), _initializeDropdownEvents.call(scope), _mobilePerPlatform.call(scope)
        }

        function _mobilePerPlatform() {
            var t = window.innerWidth < 599,
                o = "mobile" == scope.platform;
            "pc" == scope.platform ? _mobileDevices.call(scope, t) : _mobileDevices.call(scope, o)
        }

        function _mobileDevices(t) {
            (t ? _addClass : _removeClass)(scope.wrapper, "hideNetworkBar")
        }

        function _onScroll() {
            scope.onLoadFixed && _addClass(scope.wrapper, "networkSticky"), window.addEventListener("scroll", function() {
                (1 < (window.pageYOffset | document.body.scrollTop) ? (_hideAllDropdowns.call(scope), _addClass) : _removeClass)(scope.wrapper, "networkStickyBg")
            })
        }

        function _template() {
            var networkContent = document.createElement("ul"),
                segmentName = scope.segment.charAt(0).toUpperCase() + scope.segment.slice(1),
                data = eval("scope.data" + segmentName);
            _setData.call(scope, data, networkContent)
        }

        function _setData(t, o) {
            for (var r in _addClass(o, "networkListContent"), scope.add && _addElementToJson.call(scope, t) && (t = _addElementToJson.call(scope, t)), t = scope.remove && _deleteElementFromJson.call(scope, t) ? _deleteElementFromJson.call(scope, t) : t) {
                var e, n, r = t[r];
                "function" != typeof r && ((r = scope.edit && _editJson.call(scope, r) ? _editJson.call(scope, r) : r).dropdown ? (n = r.parentId ? o.querySelector("[data-id='" + r.parentId + "']").querySelector(".dropdown") : o, e = r.parentId ? " subDropdown" : "", "language" == r.name.toLowerCase() && (r.name = scope.country), n.innerHTML += _createTemplate.call(scope, r, !0, e, r.class), _setData.call(scope, r.dropdown, o)) : r.name ? o.innerHTML += _createTemplate.call(scope, r, !1, "", r.class) : (void 0 !== r.link && r.link.country == scope.country && (r.class = "current"), (n = o.querySelector("[data-id='" + r.parentId + "']").querySelector(".dropdown")).innerHTML += _createTemplate.call(scope, r, !1, "", r.class)))
            }
            scope.wrapper.appendChild(o)
        }

        function _editJson(t) {
            for (var o in scope.edit) {
                o = scope.edit[o];
                t && o.id == t.id && (o.name && (t.name = o.name), o.dropdownName && (t.dropdownName = o.dropdownName), o.link && (t.link = o.link), o.icon) && (t.icon = o.icon)
            }
            return t
        }

        function _deleteElementFromJson(t) {
            for (var o in scope.remove) {
                var r, e = scope.remove[o];
                for (r in t) t[r].id == e && t.splice(r, 1)
            }
            return t
        }

        function _addElementToJson(t) {
            var o, r = t.length;
            for (o in t) t[o].parentId || t[r] || scope.add && _appendNewData(scope.add, r, t);
            return t
        }

        function _appendNewData(t, o, r) {
            for (var e in t) {
                var n = t[e];
                n.id || n.parentId ? n.parentId && (n.id = parseInt(n.parentId.toString() + (parseInt(e) + 1).toString()), _newDropdownData(n.id, n), n.dropdown) && _appendNewData(n.dropdown, n.dropdown.length, r) : (n.id = o + 1, _newDropdownData(n.id, n), r.push(n), o++, n.dropdown && _appendNewData(n.dropdown, n.dropdown.length, r))
            }
        }

        function _newDropdownData(t, o) {
            if (o.dropdown)
                for (var r in o.dropdown) o.dropdown[r].id = parseInt(t.toString() + (parseInt(r) + 1).toString()), o.dropdown[r].parentId = t
        }

        function _createTemplate(t, o, r, e) {
            var n = t.id || "";
            return link = t.link || "", name = t.name || t.dropdownName || "", imageSrc = t.icon || "", ulList = "", tabTag = "", imgTag = "", langAttr = "", e = void 0 !== e ? e : "", triggerClass = o ? 'class="dropdownTrigger ' + e + '"' : e ? 'class="' + e + '"' : "", t.link && t.link.country && (langAttr = ' data-lang="' + t.link.country + '"'), o && (ulList = '<ul class="dropdown hide' + r + '"></ul>'), imageSrc && (imgTag = '<img loading="lazy" alt="' + name + '" src="' + NETWORKBAR_IMAGES.url + imageSrc + '" />', "tablet" === scope.platform) && (imgTag = '<img alt="' + name + '" src="' + NETWORKBAR_IMAGES.url + imageSrc + '" />'), tabTag = "current" != link && link ? '<a class="networkTab" ' + _buildLink.call(scope, link) + ">" + imgTag + name + "</a>" : '<span class="networkTab' + ("current" == link ? " current" : "") + '">' + imgTag + name + "</span>", template = "<li " + triggerClass + ' data-id="' + n + '"' + langAttr + ">" + tabTag + ulList + "</li>"
        }

        function _escapeHtml(t) {
            var o;
            return "string" != typeof t ? t : (o = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            }, t.replace(/[&<>"']/g, function(t) {
                return o[t]
            }))
        }

        function _buildLink(link) {
            var url = "",
                attributes = "";
            if (link) {
                var siteName = link.sitename || scope.sitename,
                    orientation = link.orientation || "straight",
                    country = link.country || scope.country,
                    urlMap = scope.gay ? scope.gayPremiumURLMap : scope.premiumURLMap,
                    path = location.pathname + location.search,
                    passLinkEquity = link.linkEquity ? "" : " nofollow";
                switch (link.type) {
                    case "withUTM":
                        url = link.url + _utmGenerator.call(scope);
                        break;
                    case "urlMap":
                        url = _dataURL(siteName, urlMap);
                        break;
                    case "storesUrlMap":
                        url = _dataURL(siteName, scope.storesURLMap);
                        break;
                    case "countryUtmUrl":
                        url = _countryURL.call(scope, siteName, orientation, country, path) + "?" + _utmGenerator.call(scope);
                        break;
                    case "countryUrl":
                        url = _countryURL.call(scope, siteName, orientation, country, path);
                        break;
                    case "countryUrlCurrentDomain":
                        var sanitizedUrl = "" !== eval("scope." + segment + "LangUrl") ? _countryUrlCurrentDomain.call(scope, country, path) : _countryURL.call(scope, siteName, orientation, country, path),
                            url = _escapeHtml(sanitizedUrl);
                        break;
                    case "default":
                        url = link.url
                }
                link.external && (attributes = ' target="_blank" rel="noopener noreferrer' + passLinkEquity + '"')
            }
            return link ? ' href="' + url + '"' + attributes : ""
        }

        function _generateCSS() {
            _appendStyle(".hideNetworkBar {display: none;}.networkBar {background:" + scope.colors.mainBg + ";height: 22px;line-height: normal;position: relative;text-align: center}.networkListContent {display: inline-block;text-align: left;margin: 0;}.networkSticky {position: fixed;top: 0;left: 0;width: 100%;z-index: 50;}.networkStickyBg,.networkStickyBg.light {background:" + scope.colors.scrollBg + ";}.networkListContent li {display: inline-block;position: relative;-webkit-tap-highlight-color: rgba(0,0,0,0);vertical-align: top;}.networkListContent .networkTab {color:" + scope.colors.tabColorRedesign + ";text-transform: uppercase;padding: 5px 24px;font-size: 11px;display: block;text-decoration: none;cursor: pointer;font-weight: normal;box-sizing: border-box;}.networkListContent >li >.networkTab {height: 22px;}.networkListContent .languageDropdown > .networkTab {min-width: 75px;box-sizing: border-box;}.networkListContent .networkTab img {width: 16px;margin-right: 8px;position: relative;top: -1px;display: inline-block;vertical-align: middle;}.networkListContent .networkTab.current {font-weight: bold;color:" + scope.colors.tabHoverColor + ';cursor: default;}.networkListContent .networkTab.current:hover {background: transparent;}.networkListContent .downArrow >.networkTab:after,.networkListContent .upArrow >.networkTab:after,.networkListContent .leftArrow >.networkTab:after,.networkListContent .rightArrow >.networkTab:after {content: " ";display: block;width: 0;height: 0;margin-left: 5px;float: right;position: relative;top: 4px;}.networkListContent .downArrow.active.rotateArrow >.networkTab:after,.networkListContent .upArrow.active.rotateArrow >.networkTab:after,.networkListContent .leftArrow.active.rotateArrow >.networkTab:after,.networkListContent .rightArrow.active.rotateArrow >.networkTab:after {-webkit-transform: rotate(180deg);-ms-transform: rotate(180deg);transform: rotate(180deg);}.networkListContent .downArrow >.networkTab:after {border-left: 3px solid transparent;border-right: 3px solid transparent;border-top: 4px solid ' + scope.colors.tabColor + ";}.networkListContent .upArrow >.networkTab:after {border-left: 3px solid transparent;border-right: 3px solid transparent;border-bottom: 4px solid " + scope.colors.tabColor + ";}.networkListContent .leftArrow >.networkTab:after {border-top: 3px solid transparent;border-bottom: 3px solid transparent;border-right: 4px solid " + scope.colors.tabColor + ";}.networkListContent .rightArrow >.networkTab:after {border-top: 3px solid transparent;border-bottom: 3px solid transparent;border-left: 4px solid " + scope.colors.tabColor + ";}.networkListContent .downArrow.active >.networkTab:after {border-top-color:" + scope.colors.tabHoverColor + ";}.networkListContent .leftArrow.active >.networkTab:after {border-right-color:" + scope.colors.tabHoverColor + ";}.networkListContent .rightArrow.active >.networkTab:after {border-left-color:" + scope.colors.tabHoverColor + ";}.networkListContent .upArrow.active >.networkTab:after {border-bottom-color:" + scope.colors.tabHoverColor + ";}.networkListContent .dropdown {position: absolute;text-align: left;z-index: 50;right: 0;width: 100px;background:" + scope.colors.dropdownBgRedesign + ";border: 2px solid #151515;border-radius: 6px;}.networkListContent .wide.sitesDropdown .dropdown {right: -95px;}.networkListContent .languageDropdown  .dropdown {right: -45px;}.networkListContent .wide .dropdown {width: 150px;}.networkListContent .dropdown.subDropdown {left: 150px;bottom: 0;background:" + scope.colors.subDropdownBg + ";}.networkListContent .dropdown.hide {display: none;}.networkListContent .dropdown li {display: block;-webkit-tap-highlight-color: rgba(0,0,0,0);}.networkListContent .dropdown li .networkTab {padding: 8px 10px;font-size: 15px;line-height: 20px;font-weight: 400;text-transform: capitalize;}.networkListContent .dropdown li.languageLabel .networkTab {font-size: 16px;line-height: 25px;font-weight: 700;color: " + scope.colors.tabHoverColor + ";}.networkListContent .dropdown li.current .networkTab,.networkListContent .dropdown li.languageLabel .networkTab {color: " + scope.colors.tabHoverColor + ";pointer-events: none;}.networkListContent >li >.networkTab:hover,.tabletNetworkBar .networkListContent >.dropdownTrigger.active >.networkTab,.networkListContent >.dropdownTrigger.active >.networkTab:hover {color:" + scope.colors.tabHoverColorRedesign + ";}.networkListContent >.dropdownTrigger.active >.networkTab {color: " + scope.colors.tabHoverColor + ";}.tabletNetworkBar .networkListContent >li:not(.active) >.networkTab:hover {color:" + scope.colors.tabColor + ";background: transparent;}.tabletNetworkBar .networkListContent >li >.networkTab.current:hover {color:" + scope.colors.tabHoverColor + ";}.networkListContent .dropdown .dropdownTrigger.active >.networkTab,.tabletNetworkBar .networkListContent .dropdown .dropdownTrigger.active >.networkTab {background:" + scope.colors.dropdownHoverBg + ";color:" + scope.colors.tabHoverColor + ";}.networkListContent .dropdown >li .networkTab {color:" + scope.colors.tabColor + ";}.networkListContent .dropdown >li .networkTab:hover {color:" + scope.colors.tabHoverColor + ";}.tabletNetworkBar .networkListContent .dropdown >li .networkTab:hover {color:" + scope.colors.tabColor + ';background: transparent;}@media (max-width: 1024px) {.networkListContent .networkTab {padding: 5px 18.3px;}.networkListContent .languageDropdown > .networkTab {min-width: 63px;}.networkListContent .dropdown {left: auto;right: 0;width: 100px;}.networkListContent .dropdown.subDropdown {left: 0;bottom: auto;top: 32px;}.networkListContent .downArrowTablet >.networkTab:after,.networkListContent .downArrow.downArrowTablet >.networkTab:after,.networkListContent .upArrow.downArrowTablet >.networkTab:after,.networkListContent .leftArrow.downArrowTablet >.networkTab:after,.networkListContent .rightArrow.downArrowTablet >.networkTab:after ,.networkListContent .upArrowTablet >.networkTab:after,.networkListContent .downArrow.upArrowTablet >.networkTab:after,.networkListContent .upArrow.upArrowTablet >.networkTab:after,.networkListContent .leftArrow.upArrowTablet >.networkTab:after,.networkListContent .rightArrow.upArrowTablet >.networkTab:after ,.networkListContent .leftArrowTablet >.networkTab:after,.networkListContent .downArrow.leftArrowTablet >.networkTab:after,.networkListContent .upArrow.leftArrowTablet >.networkTab:after,.networkListContent .leftArrow.leftArrowTablet >.networkTab:after,.networkListContent .rightArrow.leftArrowTablet >.networkTab:after ,.networkListContent .rightArrowTablet >.networkTab:after,.networkListContent .downArrow.rightArrowTablet >.networkTab:after,.networkListContent .upArrow.rightArrowTablet >.networkTab:after,.networkListContent .leftArrow.rightArrowTablet >.networkTab:after,.networkListContent .rightArrow.rightArrowTablet >.networkTab:after {content: " ";display: block;width: 0;height: 0;margin-left: 5px;float: right;position: relative;top: 4px;}.networkListContent .downArrowTablet >.networkTab:after,.networkListContent .downArrow.downArrowTablet >.networkTab:after,.networkListContent .upArrow.downArrowTablet >.networkTab:after,.networkListContent .leftArrow.downArrowTablet >.networkTab:after,.networkListContent .rightArrow.downArrowTablet >.networkTab:after {border-left: 3px solid transparent;border-right: 3px solid transparent;border-top: 4px solid ' + scope.colors.tabColor + ";border-bottom: none;}.networkListContent .upArrowTablet >.networkTab:after,.networkListContent .downArrow.upArrowTablet >.networkTab:after,.networkListContent .upArrow.upArrowTablet >.networkTab:after,.networkListContent .leftArrow.upArrowTablet >.networkTab:after,.networkListContent .rightArrow.upArrowTablet >.networkTab:after { border-left: 3px solid transparent;border-right: 3px solid transparent;border-bottom: 4px solid " + scope.colors.tabColor + ";border-top: none;}.networkListContent .leftArrowTablet >.networkTab:after,.networkListContent .downArrow.leftArrowTablet >.networkTab:after,.networkListContent .upArrow.leftArrowTablet >.networkTab:after,.networkListContent .leftArrow.leftArrowTablet >.networkTab:after,.networkListContent .rightArrow.leftArrowTablet >.networkTab:after {border-top: 3px solid transparent;border-bottom: 3px solid transparent;border-right: 4px solid " + scope.colors.tabColor + ";border-left: none;}.networkListContent .rightArrowTablet >.networkTab:after,.networkListContent .downArrow.rightArrowTablet >.networkTab:after,.networkListContent .upArrow.rightArrowTablet >.networkTab:after,.networkListContent .leftArrow.rightArrowTablet >.networkTab:after,.networkListContent .rightArrow.rightArrowTablet >.networkTab:after {border-top: 3px solid transparent;border-bottom: 3px solid transparent;border-left: 4px solid " + scope.colors.tabColor + ";border-right: none;}.networkListContent .downArrowTablet.active >.networkTab:after {border-top-color:" + scope.colors.tabHoverColor + ";}.networkListContent .leftArrowTablet.active >.networkTab:after {border-right-color:" + scope.colors.tabHoverColor + ";}.networkListContent .rightArrowTablet.active >.networkTab:after {border-left-color:" + scope.colors.tabHoverColor + ";}.networkListContent .upArrowTablet.active >.networkTab:after {border-bottom-color:" + scope.colors.tabHoverColor + ";}.networkListContent .downArrow.active.rotateArrowTablet >.networkTab:after,.networkListContent .upArrow.active.rotateArrowTablet >.networkTab:after,.networkListContent .leftArrow.active.rotateArrowTablet >.networkTab:after,.networkListContent .rightArrow.active.rotateArrowTablet >.networkTab:after,.networkListContent .downArrowTablet.active.rotateArrowTablet >.networkTab:after,.networkListContent .upArrowTablet.active.rotateArrowTablet >.networkTab:after,.networkListContent .leftArrowTablet.active.rotateArrowTablet >.networkTab:after,.networkListContent .rightArrowTablet.active.rotateArrowTablet >.networkTab:after {-webkit-transform: rotate(180deg);-ms-transform: rotate(180deg);transform: rotate(180deg);}.networkListContent .downArrow.active.rotateArrow.disableRotateArrowTablet >.networkTab:after,.networkListContent .upArrow.active.rotateArrow.disableRotateArrowTablet >.networkTab:after,.networkListContent .leftArrow.active.rotateArrow.disableRotateArrowTablet >.networkTab:after,.networkListContent .rightArrow.active.rotateArrow.disableRotateArrowTablet >.networkTab:after {-webkit-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg);}.networkListContent .noArrowTablet >.networkTab:after {border: none;}}@media (max-width: 768px) {.networkListContent .networkTab {padding: 5px 8.8px;}.networkListContent .languageDropdown > .networkTab {min-width: 44px;}}" + _themeCSS() + scope.extraCSS)
        }

        function _resize() {
            window.addEventListener("resize", function() {
                scope.platform = _platformCheck(), _mobilePerPlatform.call(scope), ("tablet" == scope.platform ? _addClass : _removeClass)(scope.wrapper, "tabletNetworkBar")
            })
        }

        function _themeCSS() {
            return lightCss = ".networkBar.light {background: #fff;}.networkBar.light .networkListContent .networkTab {color: #474747;}.networkBar.light .networkListContent .dropdown {background: #dbdbdb;}.networkBar.light .networkListContent .dropdown .dropdownTrigger.active >.networkTab,.networkBar.light.tabletNetworkBar .networkListContent .dropdown .dropdownTrigger.active >.networkTab,.networkBar.light .networkListContent .dropdown >li .networkTab:hover {background: #f6f6f6;color: #747474;}.networkBar.light .networkListContent .dropdown.subDropdown {background: #f6f6f6;color: #747474;}.networkBar.light .networkListContent .networkTab.current {color: #747474;}.networkBar.light .networkListContent .networkTab.current:hover {background: transparent;}.networkBar.light .networkListContent >li >.networkTab:hover,.networkBar.light.tabletNetworkBar .networkListContent >.dropdownTrigger.active >.networkTab,.networkBar.light .networkListContent >.dropdownTrigger.active >.networkTab {color: #747474;background: #dbdbdb;}.networkBar.light.tabletNetworkBar .networkListContent .dropdown >li.dropdownTrigger:not(.active) .networkTab:hover {color: #474747}.networkBar.light .networkListContent .downArrow >.networkTab:after {border-top-color: #474747;}.networkBar.light .networkListContent .upArrow >.networkTab:after {border-bottom-color: #474747;}.networkBar.light .networkListContent .leftArrow >.networkTab:after {border-right-color: #474747;}.networkBar.light .networkListContent .rightArrow >.networkTab:after {border-left-color: #474747;}.networkBar.light .networkListContent .downArrow.active >.networkTab:after {border-top-color: #747474;}.networkBar.light .networkListContent .leftArrow.active >.networkTab:after {border-right-color: #747474;}.networkBar.light .networkListContent .rightArrow.active >.networkTab:after {border-left-color: #747474;}.networkBar.light .networkListContent .upArrow.active >.networkTab:after {border-bottom-color: #747474;}@media (max-width: 1024px) {.networkBar.light .networkListContent .downArrowTablet >.networkTab:after,.networkBar.light .networkListContent .downArrow.downArrowTablet >.networkTab:after,.networkBar.light .networkListContent .upArrow.downArrowTablet >.networkTab:after,.networkBar.light .networkListContent .leftArrow.downArrowTablet >.networkTab:after,.networkBar.light .networkListContent .rightArrow.downArrowTablet >.networkTab:after {border-left-color: transparent;border-right-color: transparent;border-top-color: #474747;border-bottom: none;}.networkBar.light .networkListContent .upArrowTablet >.networkTab:after,.networkBar.light .networkListContent .downArrow.upArrowTablet >.networkTab:after,.networkBar.light .networkListContent .upArrow.upArrowTablet >.networkTab:after,.networkBar.light .networkListContent .leftArrow.upArrowTablet >.networkTab:after,.networkBar.light .networkListContent .rightArrow.upArrowTablet >.networkTab:after {border-left-color: transparent;border-right-color: transparent;border-bottom-color: #474747;border-top-color: none;}.networkBar.light .networkListContent .leftArrowTablet >.networkTab:after,.networkBar.light .networkListContent .downArrow.leftArrowTablet >.networkTab:after,.networkBar.light .networkListContent .upArrow.leftArrowTablet >.networkTab:after,.networkBar.light .networkListContent .leftArrow.leftArrowTablet >.networkTab:after,.networkBar.light .networkListContent .rightArrow.leftArrowTablet >.networkTab:after {border-top-color: transparent;border-bottom-color: transparent;border-right-color: #474747;border-left: none;}.networkBar.light .networkListContent .rightArrowTablet >.networkTab:after,.networkBar.light .networkListContent .downArrow.rightArrowTablet >.networkTab:after,.networkBar.light .networkListContent .upArrow.rightArrowTablet >.networkTab:after,.networkBar.light .networkListContent .leftArrow.rightArrowTablet >.networkTab:after,.networkBar.light .networkListContent .rightArrow.rightArrowTablet >.networkTab:after {border-top-color: transparent;border-bottom-color: transparent;border-left-color: #474747;border-right: none;}.networkBar.light .networkListContent .downArrowTablet.active >.networkTab:after {border-top-color: #747474;}.networkBar.light .networkListContent .leftArrowTablet.active >.networkTab:after {border-right-color: #747474;}.networkBar.light .networkListContent .rightArrowTablet.active >.networkTab:after {border-left-color: #747474;}.networkBar.light .networkListContent .upArrowTablet.active >.networkTab:after {border-bottom-color: #747474;}.networkBar.light.tabletNetworkBar .networkListContent .dropdown >li .networkTab:hover,.networkBar.light.tabletNetworkBar .networkListContent >li:not(.active) >.networkTab:hover {background: transparent;color: #474747;}.networkBar.light.tabletNetworkBar .networkListContent >li >.networkTab.current:hover {color: #747474;}}"
        }

        function _appendStyle(t) {
            var o = document.createElement("style"),
                r = document.getElementsByTagName("head")[0];
            o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), r.appendChild(o)
        }

        function _initializeDropdownEvents() {
            var t = scope.wrapper.querySelectorAll(".dropdownTrigger");
            t && [].forEach.call(t, function(t) {
                _initializePCDropdownEvents.call(scope, t), _initializeTabletDropdownEvents.call(scope, t)
            })
        }

        function _initializePCDropdownEvents(t) {
            t && (t.addEventListener("mouseover", function() {
                "pc" == scope.platform && _toggleDropdown.call(scope, t, !0)
            }), t.addEventListener("mouseleave", function() {
                "pc" == scope.platform && _toggleDropdown.call(scope, t, !1)
            }))
        }

        function _initializeTabletDropdownEvents(o) {
            o.addEventListener("touchstart", function(t) {
                "pc" != scope.platform && (t.stopPropagation(), t.target.getAttribute("href") || _toggleDropdown.call(scope, o, !_hasClass(o, "active")))
            }), document.addEventListener("touchstart", function() {
                "pc" != scope.platform && _hideAllDropdowns.call(scope)
            })
        }

        function _toggleDropdown(t, o) {
            var r = t.querySelector(".dropdown"),
                e = !_hasClass(t.parentNode, "dropdown"),
                n = t.getAttribute("data-id");
            e && "pc" != scope.platform && _hideAllDropdowns.call(scope, n), (o ? (_addClass(t, "active"), _removeClass) : (_removeClass(t, "active"), _addClass))(r, "hide")
        }

        function _hideAllDropdowns(o) {
            var t = scope.wrapper.querySelectorAll(".dropdownTrigger");
            t && [].forEach.call(t, function(t) {
                (o && o != t.getAttribute("data-id") || !o) && (_removeClass(t, "active"), t.querySelector(".dropdown")) && _addClass(t.querySelector(".dropdown"), "hide")
            })
        }

        function _addClass(t, o) {
            _hasClass(t, o) || (t.className ? t.className += " " + o : t.className += o)
        }

        function _removeClass(t, o) {
            var r = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
            if (_hasClass(t, o)) {
                for (; 0 <= r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                t.className = r.replace(/^\s+|\s+$/g, "")
            }
        }

        function _hasClass(t, o) {
            return t.className && new RegExp("(\\s|^)" + o + "(\\s|$)").test(t.className)
        }

        function extendDefaults(t, o, r) {
            var e, n = Object.prototype.hasOwnProperty;
            for (e in o) !n.call(o, e) || "constructor" === e && t === window || (void 0 === o[e] ? delete t[e] : r && void 0 !== t[e] || (t[e] = o[e]));
            return t
        }

        function _dataURL(t, o) {
            return o[t] || o.default
        }

        function _countryURL(t, o, r, e) {
            return sitesMap(t, "en" !== r ? r : "en", o, e)
        }

        function _countryUrlCurrentDomain(country, path) {
            return eval("scope." + segment + "LangUrl")[country] + path
        }

        function sitesMap(t, o, r, e) {
            var n = "";
            if ("gay" == r) {
                switch (e) {
                    case "/video":
                        n = "gay/video";
                        break;
                    case "/categories":
                        n = "gay/categories";
                        break;
                    case "/pornstars":
                        n = "gay/pornstars";
                        break;
                    case "/community":
                        n = "community?section=gay";
                        break;
                    case "/albums":
                        n = "albums/gay";
                        break;
                    default:
                        n = "gayporn"
                } - 1 != e.search("/live?") && (n = (e = -1 < e.indexOf("&") ? e.slice(0, e.indexOf("&")) : e) + "&s=gay")
            }
            if ("straight" == r) {
                switch (e) {
                    case "/gayporn":
                        n = "";
                        break;
                    case "/gay/categories":
                    case "/gay/pornstars":
                    case "/albums/gay":
                        n = e.replace("/gay", "");
                        break;
                    default:
                        n = ""
                } - 1 != e.search("/live?") && -1 < e.indexOf("s=gay") && (n = e.slice(0, e.indexOf("&"))), -1 != e.search("/community?") && -1 < e.indexOf("section=gay") && (n = e.slice(0, e.indexOf("?")))
            }
            r = {
                pornhub: {
                    cz: "https://cz.pornhub.com/" + (n = 0 == n.indexOf("/") ? n.substring(1) : n),
                    de: "https://de.pornhub.com/" + n,
                    fr: "https://fr.pornhub.com/" + n,
                    es: "https://es.pornhub.com/" + n,
                    it: "https://it.pornhub.com/" + n,
                    nl: "https://nl.pornhub.com/" + n,
                    pl: "https://pl.pornhub.com/" + n,
                    ru: "https://ru.pornhub.com/" + n,
                    jp: "https://jp.pornhub.com/" + n,
                    pt: "https://pt.pornhub.com/" + n,
                    en: "https://www.pornhub.com/" + n
                },
                youporn: {
                    de: "https://de.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    fr: "https://fr.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    es: "https://es.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    it: "https://it.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    pl: "https://pl.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    ru: "https://ru.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    jp: "https://jp.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    br: "https://br.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    en: "https://www.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    nl: "https://nl.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    pt: "https://pt.youporn" + ("gay" == r ? "gay" : "") + ".com/",
                    tr: "https://tr.youporn" + ("gay" == r ? "gay" : "") + ".com/"
                },
                redtube: {
                    br: "https://www.redtube.com.br/" + ("gay" == r ? "gay/" : ""),
                    en: "https://www.redtube.com/" + ("gay" == r ? "gay/" : ""),
                    de: "https://de.redtube.com/" + ("gay" == r ? "gay/" : ""),
                    es: "https://es.redtube.com/" + ("gay" == r ? "gay/" : ""),
                    fr: "https://fr.redtube.com/" + ("gay" == r ? "gay/" : ""),
                    pl: "https://pl.redtube.com/" + ("gay" == r ? "gay/" : ""),
                    it: "https://it.redtube.com/" + ("gay" == r ? "gay/" : ""),
                    ru: "https://ru.redtube.com/" + ("gay" == r ? "gay/" : ""),
                    jp: "https://jp.redtube.com/" + ("gay" == r ? "gay/" : "")
                },
                tube8: {
                    de: "https://de.tube8.com/" + ("gay" == r ? "gay/" : ""),
                    fr: "https://www.tube8.fr/" + ("gay" == r ? "gay/" : ""),
                    es: "https://www.tube8.es/" + ("gay" == r ? "gay/" : ""),
                    en: "https://www.tube8.com/" + ("gay" == r ? "gay/" : ""),
                    jp: "https://jp.tube8.com/" + ("gay" == r ? "gay/" : "")
                }
            };
            return void 0 !== r[t][o] ? r[t][o] : r[t].en
        }

        function _utmGenerator() {
            return ("utm_source={@1}&utm_medium=network-bar&utm_campaign={@1}-networkbar" + (scope.gay ? "-gay" : "")).replace(/{@1}/g, scope.sitename)
        }

        function _platformCheck() {
            return _isTouchDevice() ? _checkMobile() ? "mobile" : "tablet" : "pc"
        }

        function _checkMobile() {
            var t, o = !1;
            return t = navigator.userAgent || navigator.vendor || window.opera, o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) ? !0 : o
        }

        function _isTouchDevice() {
            var t = navigator.userAgent.toLowerCase();
            return navigator.msMaxTouchPoints || t.match(/(iphone|ipod|ipad)/) || t.match(/(android)/) || t.match(/(iemobile)/) || t.match(/iphone/i) || t.match(/ipad/i) || t.match(/ipod/i) || t.match(/blackberry/i) || t.match(/bada/i)
        }
        scope.options = extendDefaults(defaults, options), scope.wrapper = document.querySelector(scope.options.container), scope.extraCSS = scope.options.extraCSS, scope.theme = scope.options.theme, scope.colors = scope.options.colors, scope.sitename = scope.options.sitename ? scope.options.sitename.toLowerCase() : "unknown", scope.country = scope.options.country, scope.fixedOnScroll = scope.options.fixedOnScroll, scope.onLoadFixed = scope.options.onLoadFixed, scope.gay = scope.options.showGayBar, scope.segment = scope.gay ? "gay" : "straight", scope.straightLangUrl = "" != scope.options.straightLangUrl ? JSON.parse(scope.options.straightLangUrl) : scope.options.straightLangUrl, scope.gayLangUrl = "" != scope.options.gayLangUrl ? JSON.parse(scope.options.gayLangUrl) : scope.options.gayLangUrl, scope.straightActions = scope.options.straightActions, scope.gayActions = scope.options.gayActions, scope.edit = eval("scope." + segment + "Actions").edit, scope.remove = eval("scope." + segment + "Actions").remove, scope.add = eval("scope." + segment + "Actions").add, scope.dataStraight = scope.options.dataStraight, scope.dataGay = scope.options.dataGay, scope.platform = _platformCheck(), scope.storesURLMap = {
            pornhub: "https://www.pornhubapparel.com",
            modelhub: "https://www.pornhubapparel.com",
            youporn: "https://youpornshop.com",
            redtube: "https://redtubeshop.com",
            thumbzilla: "https://www.pornhubapparel.com/",
            pornmd: "https://shop.spreadshirt.com/pornhubstore/pornmd?q=T134725",
            default: "https://store.pornhub.com"
        }, scope.premiumURLMap = {
            pornhub: "https://landing.spicevids.com/?ats=eyJhIjo4NDcyMSwiYyI6NTk5NTYyODgsIm4iOjEyMCwicyI6NjgwLCJlIjoxMDQzMiwicCI6MzkzfQ==",
            modelhub: "https://www.pornhubpremium.com/premium_signup?type=NetworkBar_Mh&compliance=1",
            youporn: "https://www.youpornpremium.com/premium_signup?type=NetworkBar_Yp&compliance=1",
            redtube: "https://www.redtubepremium.com/premium_signup?type=NetworkBar_RT",
            tube8: "https://www.pornhubpremium.com/premium_signup?type=NetworkBar_T8&compliance=1",
            default: "https://www.pornhubpremium.com/premium_signup?type=NetworkBar_Other&compliance=1"
        }, scope.gayPremiumURLMap = {
            pornhub: -1 < window.location.host.indexOf("pornhubpremium") ? "https://www.pornhubpremium.com/gayporn" : "https://www.pornhubpremium.com/premium_signup?type=NetworkBar_Ph_Gay&compliance=1&site=phpg",
            youporn: "https://www.pornhubpremium.com/premium_signup?type=NetworkBar_Yp_Gay&compliance=1&site=phpg",
            redtube: "https://www.redtubepremium.com/premium_signup?type=NetworkBar_RT",
            tube8: "https://www.pornhubpremium.com/premium_signup?type=NetworkBar_T8_Gay&compliance=1&site=phpg",
            default: "https://www.pornhubpremium.com/premium_signup?type=NetworkBar_Other_Gay&compliance=1&site=phpg"
        }, _init.call(scope), window.Element && !Element.prototype.closest && (Element.prototype.closest = function(t) {
            var o, r = (this.document || this.ownerDocument).querySelectorAll(t),
                e = this;
            do {
                for (o = r.length; 0 <= --o && r.item(o) !== e;);
            } while (o < 0 && (e = e.parentElement));
            return e
        })
    }(page_params.networkBar);