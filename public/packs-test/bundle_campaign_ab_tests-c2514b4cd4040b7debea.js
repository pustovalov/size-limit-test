(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[8],{"01rO":function(e,t,n){(function(e){var t,n;function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignTable=(n=t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),a(this,i(n).apply(this,arguments))}var o,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,t),o=n,(l=[{key:"render",value:function(){var t=this.props,o=t.data,r=t.paginationPosition,a=t.defaultItemsPerPage,i=t.sortingState,s=t.setSortingColumn,l=t.fetchImpressionCount,c=t.mode,u=t.togglePreviewMode,p=t.abTestDeleteModal,f=o,m=[];if(_.isBoolean(i.value)){var d=(_.isNumber(o[0][i.key])?!i.value:i.value)?"asc":"desc";f=_.orderBy(o,i.key,d),"desc"===d&&_.includes(n.CUSTOM_ORDER_KEYWORDS,i.key)&&(f=_.sortBy(f,(function(e,t){return e[i.key]?-1:1})))}for(var b=a*(r-1),h=a*r;b<h;b++)f[b]&&m.push(f[b]);return e.createElement("table",{className:"base-table"},e.createElement(Widget.AbTestsCampaignTableHead,{setSortingColumn:s,sortingState:i}),e.createElement("tbody",null,m.map((function(t){return e.createElement(Widget.AbTestsCampaignTableBodyRow,{item:t,fetchImpressionCount:l,togglePreviewMode:u,abTestDeleteModal:p,mode:c,key:t.id})}))))}}])&&r(o.prototype,l),c&&r(o,c),n}(e.Component),t.CUSTOM_ORDER_KEYWORDS=["first_impression_created_at","last_impression_created_at"],n)}).call(this,n("q1tI"))},"83bd":function(e,t,n){"use strict";(function(e){var t=n("GaHK");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignTableBodyRow=function(n){function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l(this,c(o).call(this,e))).togglePreviewMode=function(e){t.props.item.previewable&&t.props.togglePreviewMode(t.props.item,e)},t.localFetchImpressionCount=function(e){void 0===e.item.impressionCount&&e.fetchImpressionCount(e.item.id,e.mode)},t.abTestDelete=e.abTestDeleteModal.bind(null,e.item.id,e.mode),t}var p,f,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,n),p=o,(f=[{key:"componentDidMount",value:function(){this.localFetchImpressionCount(this.props)}},{key:"componentDidUpdate",value:function(e){_.isEqual(this.props.item,e.item)||void 0!==this.props.item||this.localFetchImpressionCount(this.props)}},{key:"shouldComponentUpdate",value:function(e){return!(null===e.item&&void 0===this.props.item)}},{key:"render",value:function(){var n=this.props,o=n.mode,s=n.item,l=classNames("base-table-text is-bold is-progress",{"is-green":s.progress>=100}),c=classNames("base-table-text",{"is-progress":0===s.impressionCount}),u=classNames("link is-icon",{"is-disabled is-pointable":!s.previewable}),p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},!s.previewable&&{"data-balloon":"Preview is not available"},{"data-balloon-pos":"right"});return e.createElement("tr",null,e.createElement("td",null,e.createElement(Widget.BaseTextLabelStatus,{status:s.status,kind:"short",className:"mtx"}),"inactive"===s.status&&e.createElement("em",{className:"base-text-label-helper"},s.last_impression_created_at?"for ".concat(Widget.Utilities.dateFromNow(s.last_impression_created_at,!0)):"")),e.createElement("td",null,e.createElement("div",{className:"base-table-item mtx pts"},e.createElement("a",{className:"link is-text prs",href:Routes.site_split_test_path(Site,s.id)},s.name&&s.name.noWrapLastWord()),!o&&"localization"===s.type&&!!s.campaigns.length&&e.createElement("div",r({className:u,onClick:this.togglePreviewMode,"data-close":!0},p),e.createElement(t.UIIcon,{name:"eye"}))),e.createElement("span",{className:"base-table-code base-table-item"},s.key),!_.isEmpty(s.campaigns)&&e.createElement(Widget.CampaignsTip,{id:s.id,campaigns:s.campaigns,className:"mbm"})),e.createElement("td",{className:_.isNumber(s.impressionCount)?"is-right":"is-center"},e.createElement("span",{className:c},s.impressionCount||0===s.impressionCount?s.impressionCount:e.createElement("div",{className:"loader-box-spinner"},e.createElement("div",{className:"loader-box-spinner-bounce"})))),s.first_impression_created_at&&e.createElement("td",null,e.createElement("span",{className:"base-table-text"},moment(s.first_impression_created_at).format("MM/DD/YYYY")),e.createElement("span",{className:"base-table-description"},"".concat(Widget.Utilities.dateFromNow(s.first_impression_created_at)," ago"))),!s.first_impression_created_at&&e.createElement("td",null,e.createElement("span",{className:"base-table-text"},"N/A")),s.last_impression_created_at&&e.createElement("td",null,e.createElement("span",{className:"base-table-text"},moment(s.last_impression_created_at).format("MM/DD/YYYY")),e.createElement("span",{className:"base-table-description"},"".concat(Widget.Utilities.dateFromNow(s.last_impression_created_at)," ago"))),!s.last_impression_created_at&&e.createElement("td",null,e.createElement("span",{className:"base-table-text"},"N/A")),e.createElement("td",null,e.createElement("span",{className:l},"".concat("finished"===s.status?"Winner ".concat(UI.ALPHABET.charAt(_.findIndex(s.variants,{id:s.winner_variant.id})).toUpperCase()):"".concat(s.progress,"%"))),"finished"===s.status&&e.createElement("span",{className:"base-table-description"},"selected on ",moment(s.winner_selected_at).format("MM/DD/YYYY"))),e.createElement("td",null,e.createElement("div",{className:"base-btn-group pan"},e.createElement("a",{className:"base-btn is-flex is-success is-nano",href:Routes.site_split_test_path(Site,s.id)},"View\xa0Report"),!o&&"incentive"!==s.type&&"read"!==current_user.role&&e.createElement("span",{className:"base-btn is-more dropdown-toggle mlm","data-toggle":"dropdown"},e.createElement("i",{className:"icon icon-dots"})),e.createElement("ul",{className:"dropdown-menu pull-right dropdown-menu-abtest"},"localization"===s.type&&e.createElement("li",null,e.createElement("a",{className:"dropdown-link",href:Routes.edit_site_localization_split_test_path(Site.cached_slug,s.id,{referrer:location.href})},"Edit A/B Test")),"localization"===s.type&&!!s.campaigns.length&&s.previewable&&e.createElement("li",null,e.createElement("a",{href:"#",className:"dropdown-link",onClick:this.togglePreviewMode,"data-close":!0},"Preview A/B Test")),"localization"===s.type&&e.createElement("li",{className:"divider"}),e.createElement("li",null,e.createElement("a",{className:"dropdown-link",onClick:this.abTestDelete},"Delete"))))))}}])&&s(p.prototype,f),m&&s(p,m),o}(e.Component)}).call(this,n("q1tI"))},A3KM:function(e,t,n){"use strict";(function(e){var t=n("GaHK");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignHeader=function(n){function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a(this,i(o).apply(this,arguments))}var l,c,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(o,n),l=o,(c=[{key:"render",value:function(){var n=this.props,o=n.mode,r=n.data,a=n.show,i=n.toggleShow,s=r&&r.filter((function(e){return"active"===e.status})),l=o?"Incentive A/B Tests":"Content A/B Tests",c=o?"incentive":"content";return e.createElement("div",{className:"Campaign-ab-tests-header is-two-section"},e.createElement("div",{className:"Campaign-ab-tests-header-left"},e.createElement("h1",null,e.createElement("strong",null,l),_.some(s)&&e.createElement("span",{className:"mlm"},"\u2014 ",s.length," active"))),e.createElement(window.InfoSidebarProvider,{needUseShowProp:!0,show:a,toggleShow:i,title:function(){return e.createElement(Widget.AbTestsHowToTitle,{mode:o})},content:function(){return e.createElement(Widget.AbTestsHowToContent,{id:c,mode:o})},render:function(n){return e.createElement("span",{className:"link Campaign-ab-tests-sidebar-trigger",onClick:n},e.createElement(t.UIIcon,{name:"infoCircled",width:"30",height:"30"}),"How to A/B test campaign ".concat(c,"?"))}}))}}])&&r(l.prototype,c),u&&r(l,u),o}(e.Component)}).call(this,n("q1tI"))},CUci:function(e,t,n){(function(e){function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n){return!n||"object"!==t(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignEmpty=function(t){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o(this,r(i).apply(this,arguments))}var s,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(i,t),s=i,(l=[{key:"render",value:function(){var t=this.props,n=t.mode,o=t.show,r=t.toggleShow,a=n?"incentive":"content",i=e.createElement(window.InfoSidebarProvider,{needUseShowProp:!0,show:o,toggleShow:r,title:function(){return e.createElement(Widget.AbTestsHowToTitle,{mode:n})},content:function(){return e.createElement(Widget.AbTestsHowToContent,{id:a,mode:n})},render:function(t){return e.createElement("span",{className:"link",onClick:t},"the instructions.")}});return e.createElement("div",{className:"Notice is-info is-with-margin"},"You don\u2019t have any active ",a," A/B tests right now. You can create a new"," ",a," A/B test by following ",i)}}])&&n(s.prototype,l),c&&n(s,c),i}(e.Component)}).call(this,n("q1tI"))},PIZX:function(e,t,n){(function(e){function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n){return!n||"object"!==t(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignTableHead=function(t){function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o(this,r(i).call(this,e))).setSortingColumnFirst=e.setSortingColumn.bind(null,"first_impression_created_at"),t.setSortingColumnLast=e.setSortingColumn.bind(null,"last_impression_created_at"),t.setSortingColumnProgress=e.setSortingColumn.bind(null,"progress"),t}var s,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(i,t),s=i,(l=[{key:"render",value:function(){var t=this.props.sortingState,n=classNames("is-sortable",{"is-active":"first_impression_created_at"===t.key,"is-higher-to-lower":"first_impression_created_at"===t.key&&t.value,"is-lower-to-higher":!("first_impression_created_at"===t.key&&t.value)}),o=classNames("is-sortable",{"is-active":"last_impression_created_at"===t.key,"is-higher-to-lower":"last_impression_created_at"===t.key&&t.value,"is-lower-to-higher":!("last_impression_created_at"===t.key&&t.value)}),r=classNames("is-sortable",{"is-active":"progress"===t.key,"is-higher-to-lower":"progress"===t.key&&t.value,"is-lower-to-higher":!("progress"===t.key&&t.value)});return e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{width:57},"Status"),e.createElement("th",null,"A/B Test Name"),e.createElement("th",{width:88},"Impressions"),e.createElement("th",{width:88,className:n,onClick:this.setSortingColumnFirst},"First",e.createElement("br",null),"Impression"),e.createElement("th",{width:88,className:o,onClick:this.setSortingColumnLast},"Last",e.createElement("br",null),"Impression"),e.createElement("th",{width:88,className:r,onClick:this.setSortingColumnProgress},"Ready",e.createElement("br",null),"to select",e.createElement("br",null),"a winner"),e.createElement("th",{width:95},"Actions")))}}])&&n(s.prototype,l),c&&n(s,c),i}(e.Component)}).call(this,n("q1tI"))},UmLG:function(e,t,n){"use strict";n.r(t);n("XmqM"),n("GKah"),n("sADA"),n("CUci"),n("A3KM"),n("oU87"),n("mhqx"),n("83bd"),n("PIZX"),n("01rO")},XmqM:function(e,t,n){(function(e){function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n){return!n||"object"!==t(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=".js-ab-test-variants";Widget.AbTestDetails=function(t){function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o(this,r(s).call(this,e))).togglePreviewMode=function(e){t.props.abTest.previewable&&_.get(e,"currentTarget.dataset.close")&&(e.preventDefault(),t.setState({modal:t.state.modal?null:"previewModal"}))},t.handleShowAbTestPreviewVariant=function(e){t.props.abTest.previewable&&(_.isNumber(e)?t.handleShowAbTestPreviewVariantFromIndex(e):_.isObject(e)&&t.handleShowAbTestPreviewVariantFromLiteral(e))},t.handleShowAbTestPreviewVariantFromLiteral=function(e){var n=_.get(e,"currentTarget.dataset.literal"),o=_.findIndex(_.toArray(UI.ALPHABET),(function(e){return e===_.lowerCase(n)}));t.setState({abTestVariantChosen:o,modal:"previewModal"})},t.handleShowAbTestPreviewVariantFromIndex=function(e){t.setState({abTestVariantChosen:e,modal:"previewModal"})},t.toggleAbTestRemovalConfirmation=function(){t.setState({modal:t.state.modal?null:"deleteAbTestModal"})},t.toggleAbTestVariantRemovalConfirmation=function(e){t.variantId=_.get(e,"currentTarget.dataset.id",null),t.setState({modal:t.state.modal?null:"deleteAbTestVariantModal"})},t.toggleAbTestWinnerConfirmation=function(e){t.variantId=_.get(e,"currentTarget.dataset.id",null),t.setState({modal:t.state.modal?null:"confirmChooseWinnerPopup"})},t.toggleAbTestUnmarkWinnerConfirmation=function(e){t.variantId=_.get(e,"currentTarget.dataset.id",null),t.setState({modal:t.state.modal?null:"confirmationTemplateUnmarkWinner"})},t.deleteAbTest=function(){$(".js-delete-abtest-submit").trigger("click")},t.unmarkVariantAsWinner=function(){$(".js-unset-winner-submit[data-id=".concat(t.variantId,"]")).trigger("click")},t.markVariantAsWinner=function(){$(".js-set-winner-submit[data-id=".concat(t.variantId,"]")).trigger("click")},t.deleteVariant=function(){$(".js-delete-variant-submit[data-id=".concat(t.variantId,"]")).trigger("click")},t.state={modal:null,abTestVariantChosen:0},t.tableNode=document.querySelector(i),t}var l,c,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(s,t),l=s,(c=[{key:"componentDidMount",value:function(){this.stickNavigation(),this.tableNode.querySelectorAll(".js-truncate").forEach(this.truncate),$(".js-abtest-preview").on("click",this.togglePreviewMode),$(".js-hypothesis-select").on("change",(function(){window.location.hash="results",$(".js-abtest-filters").submit()})),$(".js-delete-abtest").on("click",this.toggleAbTestRemovalConfirmation),$(".js-delete-variant").on("click",this.toggleAbTestVariantRemovalConfirmation),$(".js-set-winner").on("click",this.toggleAbTestWinnerConfirmation),$(".js-unset-winner").on("click",this.toggleAbTestUnmarkWinnerConfirmation),$(".js-split-test-variant-preview").on("click",this.handleShowAbTestPreviewVariant),setTimeout((function(){new Widget.StickyTable({selector:i})}),0)}},{key:"truncate",value:function(e){e.innerText=_.truncate(e.innerText,{length:300})}},{key:"stickNavigation",value:function(){var e=document.querySelector(".js-nav-holder"),t=document.querySelector(".js-nav");if(e&&t){navMargin=parseInt(getComputedStyle(t).marginBottom),e.style.height=t.offsetHeight+navMargin+"px";var n=function(){var n=e.getBoundingClientRect().top;t.classList[n>=0?"remove":"add"]("is-sticky")};n(),window.addEventListener("scroll",n)}}},{key:"render",value:function(){var t=this.props,n=t.abTest,o=t.abTestVariants,r=this.state,a=r.modal,i=r.abTestVariantChosen;return e.createElement("div",null,"previewModal"===a&&e.createElement(Widget.AbTestPreviewContainer,{abTestId:n.id,abTestName:n.human_name,abTestVariants:o,localizationKey:n.locale_key,viewSetupIds:n.view_setup_ids,onClose:this.togglePreviewMode,abTestVariantChosen:i,handleShowAbTestPreviewVariant:this.handleShowAbTestPreviewVariant}),"deleteAbTestModal"===a&&e.createElement(Widget.AbTestsModal,{template:"confirmDeletePopup",closeAbPopup:this.toggleAbTestRemovalConfirmation,footerButtonFunc:this.deleteAbTest,data:n}),"deleteAbTestVariantModal"===a&&e.createElement(Widget.AbTestsModal,{template:"confirmDeleteVariantPopup",closeAbPopup:this.toggleAbTestVariantRemovalConfirmation,footerButtonFunc:this.deleteVariant,data:n}),"confirmChooseWinnerPopup"===a&&e.createElement(Widget.AbTestsModal,{template:"confirmChooseWinnerPopup",closeAbPopup:this.toggleAbTestWinnerConfirmation,footerButtonFunc:this.markVariantAsWinner,data:n}),"confirmationTemplateUnmarkWinner"===a&&e.createElement(Widget.AbTestsModal,{template:"confirmationTemplateUnmarkWinner",closeAbPopup:this.toggleAbTestUnmarkWinnerConfirmation,footerButtonFunc:this.unmarkVariantAsWinner,data:n}))}}])&&n(l.prototype,c),u&&n(l,u),s}(e.Component)}).call(this,n("q1tI"))},mhqx:function(e,t,n){(function(e){function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n){return!n||"object"!==t(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignMain=function(t){function i(e){var t,n,a,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o(this,r(i).call(this,e))).setPaginationPosition=function(e,n){n&&n.preventDefault(),e!==t.state.paginationPosition&&t.setState({paginationPosition:e})},t.setSortingColumn=function(e){var n={sortingState:{key:e,value:e!==t.state.sortingState.key||!t.state.sortingState.value}};1!==t.state.paginationPosition&&(n.paginationPosition=1),t.setState(n)},t.onQuerySearch=function(e){return t.setState({query:e.target.value.toLowerCase(),paginationPosition:1})},t.applyAbTestFilter=function(e){e.preventDefault();var n=_.trim(e.target.innerText),o=t.state.statuses;o[n]=!t.state.statuses[n],t.setState({paginationPosition:1,statuses:o})},t.defaultItemsPerPage=5,t.maxPaginationItems=3,t.state={paginationPosition:1,query:"",statuses:(n={Finished:!0,Active:!0,Inactive:!0},a="Ready to run",s=!0,a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n),sortingState:{key:"last_impression_created_at",value:!1}},t}var s,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(i,t),s=i,(l=[{key:"render",value:function(){var t=this,n=this.props,o=n.data,r=n.mode,a=n.fetchImpressionCount,i=n.togglePreviewMode,s=n.abTestDeleteModal,l=o,c=0,u=0;for(var p in this.state.statuses)u++,this.state.statuses[p]&&c++;var f=c!==u&&c;return(f||this.state.query)&&(l=o.filter((function(e){var n,o=[];if(f&&(n=(n="ready"!==e.status?e.status:"ready to run").charAt(0).toUpperCase()+n.slice(1)),t.state.query){var r=["".concat(e.id),e.key,e.name,e.status];o=_.filter(r,(function(e){return _.includes(e.toLowerCase(),t.state.query)}))}if((!f||t.state.statuses[n])&&(!t.state.query||o.length))return e}))),e.createElement("div",null,o.length>this.defaultItemsPerPage&&e.createElement("div",null,e.createElement(Widget.CampaignFilterSearch,{placeholder:"Search by A/B test ID, key, name, or status",query:this.state.query,statuses:this.state.statuses,onQuerySearch:this.onQuerySearch,onStatusChange:this.applyAbTestFilter})),!!l.length&&e.createElement(Widget.AbTestsCampaignTable,{abTestsPerPage:this.defaultItemsPerPage,data:l,mode:r,paginationPosition:this.state.paginationPosition,defaultItemsPerPage:this.defaultItemsPerPage,setSortingColumn:this.setSortingColumn,sortingState:this.state.sortingState,fetchImpressionCount:a,togglePreviewMode:i,abTestDeleteModal:s}),!l.length&&e.createElement("span",{className:"abtestfilter-zerocase"},"No A/B tests found"),e.createElement(Widget.Pagination,{data:l,setPaginationPosition:this.setPaginationPosition,defaultItemsPerPage:this.defaultItemsPerPage,paginationPosition:this.state.paginationPosition,maxPaginationItems:this.maxPaginationItems}))}}])&&n(s.prototype,l),c&&n(s,c),i}(e.Component)}).call(this,n("q1tI"))},oU87:function(e,t,n){(function(e){function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n){return!n||"object"!==t(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignLayout=function(t){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o(this,r(i).apply(this,arguments))}var s,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(i,t),s=i,(l=[{key:"render",value:function(){var t=this.props,n=t.data,o=t.mode,r=t.fetchImpressionCount,a=t.togglePreviewMode,i=t.abTestDeleteModal,s=t.id,l=t.instructionsHeaderShow,c=t.instructionsEmptyShow,u=t.toggleInstructionsHeader,p=t.toggleInstructionsEmpty,f=_.some(n,["status","active"]);return e.createElement("div",{className:"Campaign-ab-tests",id:s},e.createElement("div",{className:"Campaign-ab-tests-two-sections"},e.createElement("div",{className:"Campaign-ab-tests-main-part"},e.createElement(Widget.AbTestsCampaignHeader,{data:n,mode:o,show:l,toggleShow:u}),o&&e.createElement("p",null,"By A/B testing incentives of campaigns, you can experiment with the Advocate and Friend rewards to define the one with the highest engagement rate."),!o&&e.createElement("p",null,"A/B tests of campaign\u2019s Content enables you to experiment with copy/creative to choose the variant that provides the highest results. Tests include copy, images, colors or layout."),n&&!f&&e.createElement(Widget.AbTestsCampaignEmpty,{mode:o,show:c,toggleShow:p}),n?_.some(n)&&e.createElement(Widget.AbTestsCampaignMain,{fetchImpressionCount:r,togglePreviewMode:a,abTestDeleteModal:i,data:n,mode:o}):e.createElement("div",{className:"Campaign-ab-tests-loader"},e.createElement(window.UIkit.UILoader,null)))))}}])&&n(s.prototype,l),c&&n(s,c),i}(e.Component)}).call(this,n("q1tI"))},sADA:function(e,t,n){(function(e){function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Widget.AbTestsCampaignEntries=function(l){function c(e){var r,s,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),s=this,l=a(c).call(this,e),(r=!l||"object"!==t(l)&&"function"!==typeof l?i(s):l).toggleInfoSidebarsShow=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r.state.infoSidebarsShow);_.mapKeys(t,(function(n,o){t[o]=o===e&&!t[o]})),r.setState({infoSidebarsShow:t})},r.fetchABTestData=function(e,t){$.get(Routes.internal_site_split_tests_path(Site,t),{no_spinner:!0}).success((function(t){var n=[],a=t.result.split_tests;_.isEmpty(a)||(n=a.map((function(e){return"finished"===e.status&&++e.progress,e}))),r.setState(o({},e,n))})).error((function(t){Widget.Utils.notifyDevelopers({name:"Unable to get ".concat(e),message:"Ajax failure",xhr:t})}))},r.fetchABTestIncentiveData=function(){var e={type:"incentive"};r.props.scope||(e.campaign_id=window.Campaign.id),r.fetchABTestData("ABTestIncentiveData",e)},r.fetchABTestContentData=function(){var e={type:"content"};r.props.scope||(e.campaign_id=window.Campaign.id),r.fetchABTestData("ABTestContentData",e)},r.impressionChangeState=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=[].concat(r.state[e]);a[_.findIndex(a,{id:t})].impressionCount=n,r.setState(o({},e,a))},r.fetchImpressionCount=function(e,t){var n=t?"ABTestIncentiveData":"ABTestContentData",o=_.find(r.state[n],{id:e});o&&void 0===o.impressionCount&&($.get(Routes.impressions_count_internal_site_split_test_path(Site,e),{no_spinner:!0}).success((function(t){r.impressionChangeState(n,e,t.result.impressions_count)})).error((function(e){Widget.Utils.notifyDevelopers({name:"Unable to get impressions count AB Tests",message:"Ajax failure",xhr:e})})),r.impressionChangeState(n,e))},r.fetchCampaigns=function(){$.get(Routes.internal_site_campaigns_path(Site),{no_spinner:!0}).success((function(e){r.setState({campaigns:_.get(e,"result.campaigns",[])})})).error((function(e){Widget.Utils.notifyDevelopers({name:"Unable to get campaigns AB Tests",message:"Ajax failure",xhr:e})}))},r.abTestDeleteModal=function(e,t,n){n&&n.preventDefault(),r.setState({modal:r.state.modal?null:{template:"confirmDeletePopup",data:_.find(r.state[t?"ABTestIncentiveData":"ABTestContentData"],{id:e}),closeAbPopup:r.abTestDeleteModal,footerButtonFunc:r.abTestDelete.bind(i(r),e,t)}})},r.abTestDelete=function(e,t){$.ajax({url:Routes.internal_site_split_test_path(Site,e),type:"DELETE",dataType:"json",data:{no_spinner:!0},success:function(){var n,a=t?"ABTestIncentiveData":"ABTestContentData",i=[].concat(r.state[a]);i.splice(_.findIndex(i,{id:e}),1),r.setState((o(n={},a,i),o(n,"modal",null),n))},error:function(e){Widget.Utils.notifyDevelopers({name:"Unable to delete AB Test",message:"Ajax failure",xhr:e})}})},r.togglePreviewMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=_.isBoolean(t)||_.get(t,"currentTarget.dataset.close");n&&(_.isObject(t)&&t.preventDefault(),r.setState({previewMode:e}))},r.formatAbTestVariants=function(){return r.state.previewMode.variants.map((function(e,t){return{value:e.value,character:UI.ALPHABET.charAt(t)}}))},r.scrollToId=function(e,t){t.preventDefault();var n=$(e);n.length&&setTimeout((function(){$("html, body").animate({scrollTop:n.offset().top},500)}),100)},r.handleShowAbTestPreviewVariant=function(e){r.setState({abTestVariantChosen:e})},r.handlePreviewContainerClose=function(){var e;(e=r).togglePreviewModeModal.apply(e,arguments),r.handleShowAbTestPreviewVariant(0)},r.state={ABTestContentData:null,ABTestIncentiveData:null,previewMode:!1,campaigns:[],modal:!1,abTestVariantChosen:0,infoSidebarsShow:{contentInstructionsHeader:!1,contentInstructionsEmpty:!1,incentiveInstructionsHeader:!1,incentiveInstructionsEmpty:!1}},r.togglePreviewModeModal=r.togglePreviewMode.bind(i(r),null),r.scrollToContentTable=r.scrollToId.bind(i(r),"#content-table"),r.scrollToIdIncentiveTable=r.scrollToId.bind(i(r),"#incentive-table"),r}var u,p,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,l),u=c,(p=[{key:"componentDidMount",value:function(){this.fetchABTestIncentiveData(),this.fetchABTestContentData(),this.fetchCampaigns()}},{key:"render",value:function(){var t=this.state,n=t.ABTestContentData,o=t.ABTestIncentiveData,r=t.previewMode,a=t.abTestVariantChosen,i=t.infoSidebarsShow;return e.createElement(e.Fragment,null,e.createElement("div",{className:"sub-subnav"},e.createElement("div",{className:"App-container-inner"},e.createElement("ul",null,e.createElement("li",null,e.createElement("a",{href:"#",onClick:this.scrollToContentTable},"Content A/B Tests")),e.createElement("li",null,e.createElement("a",{href:"#",onClick:this.scrollToIdIncentiveTable},"Incentive A/B Tests"))))),e.createElement(Widget.AbTestsCampaignLayout,{data:n,fetchImpressionCount:this.fetchImpressionCount,togglePreviewMode:this.togglePreviewMode,abTestDeleteModal:this.abTestDeleteModal,toggleTooltip:this.toggleTooltip,tooltip:this.state.tooltip,id:"content-table",instructionsHeaderShow:i.contentInstructionsHeader,instructionsEmptyShow:i.contentInstructionsEmpty,toggleInstructionsHeader:this.toggleInfoSidebarsShow.bind(null,"contentInstructionsHeader"),toggleInstructionsEmpty:this.toggleInfoSidebarsShow.bind(null,"contentInstructionsEmpty")}),e.createElement(Widget.AbTestsCampaignLayout,{data:o,fetchImpressionCount:this.fetchImpressionCount,togglePreviewMode:this.togglePreviewMode,abTestDeleteModal:this.abTestDeleteModal,toggleTooltip:this.toggleTooltip,tooltip:this.state.tooltip,id:"incentive-table",mode:!0,instructionsHeaderShow:i.incentiveInstructionsHeader,instructionsEmptyShow:i.incentiveInstructionsEmpty,toggleInstructionsHeader:this.toggleInfoSidebarsShow.bind(null,"incentiveInstructionsHeader"),toggleInstructionsEmpty:this.toggleInfoSidebarsShow.bind(null,"incentiveInstructionsEmpty")}),r&&e.createElement(Widget.AbTestPreviewContainer,{abTestVariantChosen:a,handleShowAbTestPreviewVariant:this.handleShowAbTestPreviewVariant,abTestName:r.name,abTestVariants:this.formatAbTestVariants(),localizationKey:r.locale_key,viewSetupIds:r.view_setup_ids,abTestId:r.id,onClose:this.handlePreviewContainerClose}),this.state.modal&&e.createElement(Widget.AbTestsModal,this.state.modal))}}])&&r(u.prototype,p),f&&r(u,f),c}(e.Component)}).call(this,n("q1tI"))}},[["UmLG",0,1]]]);