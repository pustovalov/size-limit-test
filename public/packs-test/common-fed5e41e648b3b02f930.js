(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[20],{"/u09":function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"Header",(function(){return K.a})),i.d(n,"HeaderUserMenu",(function(){return R.a})),i.d(n,"Footer",(function(){return V.a})),i.d(n,"AutocompleteField",(function(){return F}));i("pNMO"),i("4Brf"),i("tjZM"),i("3I1R"),i("7+kd"),i("0oug"),i("KhsS"),i("gOCb"),i("a57n"),i("GXvd"),i("I1Gw"),i("gXIK"),i("lEou"),i("gbiT"),i("ma9I"),i("qHT+"),i("piMb"),i("yyme"),i("TeQF"),i("fbCW"),i("x0AG"),i("BIHw"),i("XbcX"),i("QWBl"),i("pjDv"),i("yq1k"),i("yXV3"),i("J30X"),i("4mDm"),i("oVuX"),i("uqXc"),i("2B1R"),i("Xe3L"),i("E9XD"),i("9N29"),i("Junv"),i("+2oP"),i("Rfxz"),i("ToJy"),i("94Xl"),i("pDQq"),i("QGkA"),i("c9m3"),i("wZ/5"),i("gtqK"),i("rOQg"),i("tCCV"),i("brp2"),i("rMz7"),i("9LPj"),i("7+zs"),i("DQNa"),i("wLYn"),i("tW5y"),i("sMBO"),i("DEfu"),i("Tskq"),i("Uydy"),i("eajv"),i("n/mU"),i("PqOI"),i("QNnp"),i("/5zm"),i("CsgD"),i("9mRW"),i("QFcT"),i("vAFs"),i("a5NK"),i("yiG3"),i("kNcU"),i("KvGi"),i("AmFO"),i("eJiR"),i("I9xj"),i("tl/u"),i("qePV"),i("NbN+"),i("8AyJ"),i("i6QF"),i("kSko"),i("WDsR"),i("r/Vq"),i("5uH8"),i("w1rZ"),i("JevA"),i("toAj"),i("VC3L"),i("zKZe"),i("uL8W"),i("Eqjn"),i("HRxU"),i("eoL8"),i("5xtp"),i("T63A"),i("3KgV"),i("wfmh"),i("5DmW"),i("27RR"),i("cDke"),i("NBAS"),i("Kxld"),i("yQYn"),i("4h0Y"),i("5D5o"),i("tkto"),i("v5b1"),i("W/eh"),i("zuhW"),i("r5Og"),i("ExoC"),i("07d7"),i("B6y2"),i("rNhl"),i("4l63"),i("5s+n"),i("p532"),i("pv2x"),i("SuFq"),i("PzqY"),i("rBZX"),i("XUE8"),i("nkod"),i("f3jH"),i("x2An"),i("25bX"),i("G/JM"),i("1t3B"),i("ftMj"),i("i5pp"),i("TWNs"),i("rB9j"),i("U3f4"),i("JfAA"),i("YGK4"),i("9bJ7"),i("inlA"),i("9tb/"),i("JTJg"),i("PKPk"),i("Rm1S"),i("hDyC"),i("TZCg"),i("2A+d"),i("OM9Z"),i("UxlC"),i("hByQ"),i("EnZy"),i("LKBx"),i("SYor"),i("HiXI"),i("7ueG"),i("GKVU"),i("E5NM"),i("BNMt"),i("zHFu"),i("x83w"),i("l2dK"),i("GRPF"),i("xdBZ"),i("mRH6"),i("yWo2"),i("IxXR"),i("TFPT"),i("Zk8X"),i("z8NH"),i("SpvK"),i("/Yfv"),i("iwkZ"),i("FDzp"),i("XMab"),i("ilnZ"),i("hMMk"),i("+ywr"),i("moxL"),i("qXVe"),i("c162"),i("waxf"),i("0TkE"),i("Onu3"),i("1dYe"),i("IL/d"),i("gvgV"),i("6R/c"),i("YL0P"),i("X5Zq"),i("MoCz"),i("P8wP"),i("7JcK"),i("ypFw"),i("JaFt"),i("zSZm"),i("PF2M"),i("KVSy"),i("ZJ55"),i("IZzc"),i("Fwt+"),i("s5qe"),i("cvf0"),i("ENF9"),i("H+LF"),i("FZtP"),i("3bBZ"),i("Ew+T"),i("n5b4"),i("R5XZ"),i("Kz25"),i("vxnP"),i("mGGf"),i("ls82");var a=i("q1tI"),r=i.n(a),o=i("i8i4"),s=i.n(o),l=i("EVdn"),u=i.n(l),c=i("17x9"),d=i.n(c),p=i("TSYQ"),h=i.n(p),v=i("LvDl"),m=i.n(v),w=i("fhzG"),f=i.n(w),g=i("Nc6g"),b=i.n(g),x=i("GaHK"),y=i("SdWe"),I=i.n(y),C=i("cr+I"),P=i.n(C),N=i("GemG"),z=i.n(N),G=i("ZhIB"),k=i.n(G),A=i("Om6g"),q=i("ZVfT"),L=i("sxGJ"),T=i.n(L),D=i("8C8s"),K=i("amyL"),R=i("QGvf"),V=i("RoWf");i("M85t"),i("F9bE");function E(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var F=f()({displayName:"AutocompleteField",getInitialState:function(){return{text:this.props.text}},getDefaultProps:function(){return{class:"",placeholder:"",text:"",liquidInterpolations:{}}},componentWillMount:function(){var t=this;return this.props.liquidInterpolations&&_.map(this.props.liquidInterpolations,(function(e,i){return t.variables["".concat(i)]=null!=e?e.value:void 0})),this.field=r.a.createRef(),this.preview=r.a.createRef()},componentWillReceiveProps:function(t){var e=this;if(this.props.text!==t.text&&this.state!==t.text&&this.setState({text:t.text},(function(){return this.convertToPreview()})),!_.isEqual(this.props.liquidInterpolationKeys,t.liquidInterpolationKeys))return _.map(t.liquidInterpolations,(function(t,i){return e.variables["".concat(i)]=null!=t?t.value:void 0})),this.interpolationsChanging(t)},componentDidMount:function(){var t,e=this;if(this.interpolationsChanging(this.props),t=this.field.current,autosize(t),$(t).on("focus",(function(){return setTimeout(e.resetGrammarlyStyles,0),$(t).parent().addClass("is-hover")})),$(t).on("hover",(function(){return e.resetGrammarlyStyles(),autosize.update(t)})),$(t).on("blur",(function(){return e.resetGrammarlyStyles(),$(t).parent().removeClass("is-hover")})),$("[data-gr-c-s-loaded]").length)return this.startWatchingGrammarly()},shouldComponentUpdate:function(t,e){return this.props.text!==t.text||this.state.text!==e.text||this.props.class!==t.class},componentWillUnmount:function(){return this.stopWatchingGrammarly()},interpolationsChanging:function(t){var e,i,n=this;return this.convertToPreview(),i=this.field.current,e=[],_.map(t.liquidInterpolationKeys,(function(t){if(!_.isUndefined(n.getVariablePreview(n.variables,t)))return e.push({key:t,preview:n.getVariablePreview(n.variables,t)})})),this.interpolationsAtConfig={at:"{{",data:e,insertTpl:"{{${key}}}",displayTpl:"<li>${key}</li>",delay:400,maxLen:999,searchKey:"key",highlightFirst:!0,limit:10},autosize(i),$(i).atwho(this.interpolationsAtConfig),$(i).on("inserted.atwho",(function(t,e,i){return n.handleInput(t)}))},variables:{},getVariablePreview:function(t,e){var i,n;return"string"!==typeof e||"undefined"===typeof t?null:(i=e.indexOf("."))>-1&&(n=t[e.substring(0,i)])?this.getVariablePreview(n,e.substr(i+1)):t[e]},convertToPreview:function(){var t,e,i,n=this;return t=$(this.preview.current),e=this.state.text?this.state.text.replace(/\n$/g,"\n\n"):this.state.text,(i=$("<div></div>")).text(e),t.html(this.sanitizeHtml(i.html())),$("#localization_".concat(this.props.dataId," mark")).each((function(t,i){var a;return a=$(i).text().replace("{{","").replace("}}","").trim(),e=$(i).text(),(_.isString(n.getVariablePreview(n.variables,a))||_.isNumber(n.getVariablePreview(n.variables,a)))&&(e=n.getVariablePreview(n.variables,a)),$(i).text(e),$(i).attr("data-variable",a)}))},sanitizeHtml:function(t){return t.replace(/{{.*?}}/g,"<mark title='$&'>$&</mark>").replace(/&amp;/g,"&").replace(/&nbsp;/g," ")},handleInput:function(t){return t?this.setInputValue(t.target.value):this.state.text!==this.field.current.value?this.setInputValue(this.field.current.value):void 0},setInputValue:function(t){var e;return e=_.isNumber(this.props.variantIndex)?{index:this.props.variantIndex,value:t}:E({},"".concat(this.props.dataId),{id:this.props.dataId,values:[t]}),this.setState({text:t},(function(){var t,i;return"function"===typeof(t=this.props).onLocalizationItemChange&&t.onLocalizationItemChange(e),"function"===typeof(i=this.props).onLocalizationItemABChange&&i.onLocalizationItemABChange(e),this.convertToPreview()}))},startWatchingGrammarly:function(){var t=this;return this.timer=window.setInterval((function(){return t.handleInput()}),1e3)},stopWatchingGrammarly:function(){return window.clearInterval(this.timer)},resetGrammarlyStyles:function(){return $(this.field.current).css("background-color","")},render:function(){var t,e,i;return t=this.props.disabled?{disabled:"disabled"}:void 0,i=_.isNull(this.state.text)?"":this.state.text,e=classNames("form-textarea base-textarea",E({},"".concat(this.props.class),this.props.class)),r.a.createElement("div",{id:"localization_".concat(this.props.dataId)},r.a.createElement("div",{className:"code-area"},r.a.createElement("textarea",Object.assign({className:e,"data-placeholder":this.props.placeholder,ref:this.field,rows:"1",value:i,onChange:this.handleInput},t)),r.a.createElement("div",Object.assign({className:e,"data-placeholder":this.props.placeholder,"data-validate":_.isNumber(this.props.variantIndex)?void 0:this.props.dataId,ref:this.preview},t))))}});window.React=r.a,window.ReactDOM=s.a,window.jQuery=window.$=u.a,window.PT=d.a,window.classNames=h.a,window._=m.a,window.CreateReactClass=f.a,window.moment=b.a,window.UIkit=x,window.filesize=I.a,window.queryString=P.a,window.autosize=z.a,window.numeral=k.a,window.entryDate=q.h,window.integrationPath=q.k,window.checkRole=q.b,window.documentationURL=q.g,window.Clipboard=T.a,window.convertValidationErrorToHtml=q.c,window.UINotifications=D.a,window.Components=n,window.Widget={},D.a.mount(),Object(A.default)()}},[["/u09",0,1]]]);