(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(145),a=n.n(o),s=n(142),l=n.n(s),d=function(e){var t=e.children;return r.a.createElement("div",{className:l.a.container},t)},u=n(146),c=n.n(u),f=n(147),h=n.n(f);t.default=function(){return r.a.createElement(d,null,r.a.createElement(a.a,{sliderLineColor:"#999",sliderPositionPercentage:"0.7",sliderLineWidth:"1",handleSize:"40",leftImage:c.a,rightImage:h.a}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://saadiqm.com/2019/04/13/calgary-historic-streetcar-map.html"},"Designing Calgary's Historic Streetcar Map")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://saadiqm.com"},"www.saadiqm.com")))}},145:function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=9)}([function(e,t,n){"use strict";var i,r;"undefined"!=typeof window&&window,void 0===(r="function"==typeof(i=function(){if("undefined"==typeof window)return null;var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)};function t(e,t){var n=Object.prototype.toString.call(e),i="[object Array]"===n||"[object NodeList]"===n||"[object HTMLCollection]"===n||"[object Object]"===n||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,r=0,o=e.length;if(i)for(;r<o;r++)t(e[r]);else t(e)}function n(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}var i=function(r,o){t(r,function(t){!function(t,i){if(t)if(t.resizedAttached)t.resizedAttached.add(i);else{t.resizedAttached=new function(){var e,t,n=[];this.add=function(e){n.push(e)},this.call=function(){for(e=0,t=n.length;e<t;e++)n[e].call()},this.remove=function(i){var r=[];for(e=0,t=n.length;e<t;e++)n[e]!==i&&r.push(n[e]);n=r},this.length=function(){return n.length}},t.resizedAttached.add(i),t.resizeSensor=document.createElement("div"),t.resizeSensor.dir="ltr",t.resizeSensor.className="resize-sensor";var r="position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",o="position: absolute; left: 0; top: 0; transition: 0s;";t.resizeSensor.style.cssText=r,t.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+r+'"><div style="'+o+'"></div></div><div class="resize-sensor-shrink" style="'+r+'"><div style="'+o+' width: 200%; height: 200%"></div></div>',t.appendChild(t.resizeSensor);var a=window.getComputedStyle(t).getPropertyValue("position");"absolute"!==a&&"relative"!==a&&"fixed"!==a&&(t.style.position="relative");var s,l,d=t.resizeSensor.childNodes[0],u=d.childNodes[0],c=t.resizeSensor.childNodes[1],f=n(t),h=f.width,p=f.height,m=function(){var e=0===t.offsetWidth&&0===t.offsetHeight;if(e){var n=t.style.display;t.style.display="block"}u.style.width="100000px",u.style.height="100000px",d.scrollLeft=1e5,d.scrollTop=1e5,c.scrollLeft=1e5,c.scrollTop=1e5,e&&(t.style.display=n)};t.resizeSensor.resetSensor=m;var g=function(){l=0,s&&(h=void 0,p=void 0,t.resizedAttached&&t.resizedAttached.call())},v=function(){var i=n(t),r=i.width,o=i.height;(s=r!=h||o!=p)&&!l&&(l=e(g)),m()},y=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)};y(d,"scroll",v),y(c,"scroll",v),e(m)}}(t,o)}),this.detach=function(e){i.detach(r,e)},this.reset=function(){r.resizeSensor.resetSensor()}};return i.reset=function(e,n){t(e,function(e){e.resizeSensor.resetSensor()})},i.detach=function(e,n){t(e,function(e){e&&(e.resizedAttached&&"function"==typeof n&&(e.resizedAttached.remove(n),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached))})},i})?i.call(t,n,t,e):i)||(e.exports=r)},function(e,t,n){"use strict";var i,r,o;"undefined"!=typeof window&&window,r=[n(0)],void 0===(o="function"==typeof(i=function(e){var t=function(){var t,n={},i=[];function r(e){e||(e=document.documentElement);var t=window.getComputedStyle(e,null).fontSize;return parseFloat(t)||16}function o(e,t){var n=t.split(/\d/),i=n[n.length-1];switch(t=parseFloat(t),i){case"px":return t;case"em":return t*r(e);case"rem":return t*r();case"vw":return t*document.documentElement.clientWidth/100;case"vh":return t*document.documentElement.clientHeight/100;case"vmin":case"vmax":var o=document.documentElement.clientWidth/100,a=document.documentElement.clientHeight/100;return t*(0,Math["vmin"===i?"min":"max"])(o,a);default:return t}}function a(e,t){var i,r,a,s,l,d,u,c;this.element=e;var f=["min-width","min-height","max-width","max-height"];this.call=function(){for(i in a=function(e){if(!e.getBoundingClientRect)return{width:e.offsetWidth,height:e.offsetHeight};var t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}(this.element),d={},n[t])n[t].hasOwnProperty(i)&&(r=n[t][i],s=o(this.element,r.value),l="width"===r.property?a.width:a.height,c=r.mode+"-"+r.property,u="","min"===r.mode&&l>=s&&(u+=r.value),"max"===r.mode&&l<=s&&(u+=r.value),d[c]||(d[c]=""),u&&-1===(" "+d[c]+" ").indexOf(" "+u+" ")&&(d[c]+=" "+u));for(var e in f)f.hasOwnProperty(e)&&(d[f[e]]?this.element.setAttribute(f[e],d[f[e]].substr(1)):this.element.removeAttribute(f[e]))}}function s(t,n){t.elementQueriesSetupInformation||(t.elementQueriesSetupInformation=new a(t,n)),t.elementQueriesSensor||(t.elementQueriesSensor=new e(t,function(){t.elementQueriesSetupInformation.call()})),t.elementQueriesSetupInformation.call()}function l(e,r,o,a){if(void 0===n[e]){n[e]=[];var s=i.length;t.innerHTML+="\n"+e+" {animation: 0.1s element-queries;}",t.innerHTML+="\n"+e+" > .resize-sensor {min-width: "+s+"px;}",i.push(e)}n[e].push({mode:r,property:o,value:a})}function d(e){var t;if(document.querySelectorAll&&(t=e?e.querySelectorAll.bind(e):document.querySelectorAll.bind(document)),t||"undefined"==typeof $$||(t=$$),t||"undefined"==typeof jQuery||(t=jQuery),!t)throw"No document.querySelectorAll, jQuery or Mootools's $$ found.";return t}function u(t){var n=[],i=[],r=[],o=0,a=-1,s=[];for(var l in t.children)if(t.children.hasOwnProperty(l)&&t.children[l].tagName&&"img"===t.children[l].tagName.toLowerCase()){n.push(t.children[l]);var d=t.children[l].getAttribute("min-width")||t.children[l].getAttribute("data-min-width"),u=t.children[l].getAttribute("data-src")||t.children[l].getAttribute("url");r.push(u);var c={minWidth:d};i.push(c),d?t.children[l].style.display="none":(o=n.length-1,t.children[l].style.display="block")}function f(){var e,l=!1;for(e in n)n.hasOwnProperty(e)&&i[e].minWidth&&t.offsetWidth>i[e].minWidth&&(l=e);if(l||(l=o),a!==l)if(s[l])n[a].style.display="none",n[l].style.display="block",a=l;else{var d=new Image;d.onload=function(){n[l].src=r[l],n[a].style.display="none",n[l].style.display="block",s[l]=!0,a=l},d.src=r[l]}else n[l].src=r[l]}a=o,t.resizeSensor=new e(t,f),f()}var c=/,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/gim,f=/\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/gim;function h(e){var t,n,i,r;for(e=e.replace(/'/g,'"');null!==(t=c.exec(e));)for(n=t[1]+t[3],i=t[2];null!==(r=f.exec(i));)l(n,r[1],r[2],r[3])}function p(e){var t="";if(e)if("string"==typeof e)-1===(e=e.toLowerCase()).indexOf("min-width")&&-1===e.indexOf("max-width")||h(e);else for(var n=0,i=e.length;n<i;n++)1===e[n].type?-1!==(t=e[n].selectorText||e[n].cssText).indexOf("min-height")||-1!==t.indexOf("max-height")?h(t):-1===t.indexOf("min-width")&&-1===t.indexOf("max-width")||h(t):4===e[n].type?p(e[n].cssRules||e[n].rules):3===e[n].type&&e[n].styleSheet.hasOwnProperty("cssRules")&&p(e[n].styleSheet.cssRules)}var m=!1;this.init=function(){var n="animationstart";void 0!==document.documentElement.style.webkitAnimationName?n="webkitAnimationStart":void 0!==document.documentElement.style.MozAnimationName?n="mozanimationstart":void 0!==document.documentElement.style.OAnimationName&&(n="oanimationstart"),document.body.addEventListener(n,function(t){var n=t.target;if(-1!==window.getComputedStyle(n,null).getPropertyValue("animation-name").indexOf("element-queries")){n.elementQueriesSensor=new e(n,function(){n.elementQueriesSetupInformation&&n.elementQueriesSetupInformation.call()});var r=window.getComputedStyle(n.resizeSensor,null).getPropertyValue("min-width");r=parseInt(r.replace("px","")),s(t.target,i[r])}}),m||((t=document.createElement("style")).type="text/css",t.innerHTML="[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}",t.innerHTML+="\n@keyframes element-queries { 0% { visibility: inherit; } }",document.getElementsByTagName("head")[0].appendChild(t),m=!0);for(var r=0,o=document.styleSheets.length;r<o;r++)try{document.styleSheets[r].href&&0===document.styleSheets[r].href.indexOf("file://")&&console.log("CssElementQueries: unable to parse local css files, "+document.styleSheets[r].href),p(document.styleSheets[r].cssRules||document.styleSheets[r].rules||document.styleSheets[r].cssText)}catch(e){}!function(){for(var e=d()("[data-responsive-image],[responsive-image]"),t=0,n=e.length;t<n;t++)u(e[t])}()},this.findElementQueriesElements=function(e){!function(e){var t=d(e);for(var i in n)if(n.hasOwnProperty(i))for(var r=t(i,e),o=0,a=r.length;o<a;o++)s(r[o],i)}(e)},this.update=function(){this.init()}};return t.update=function(){t.instance.update()},t.detach=function(e){e.elementQueriesSetupInformation?(e.elementQueriesSensor.detach(),delete e.elementQueriesSetupInformation,delete e.elementQueriesSensor):e.resizeSensor&&(e.resizeSensor.detach(),delete e.resizeSensor)},t.init=function(){t.instance||(t.instance=new t),t.instance.init()},t.findElementQueriesElements=function(e){t.instance.findElementQueriesElements(e)},t.listen=function(){!function(e){if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,!1);else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent))var t=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(e(),clearInterval(t))},10);else window.onload=e}(t.init)},t})?i.apply(t,r):i)||(e.exports=o)},function(e,t,n){e.exports={ResizeSensor:n(0),ElementQueries:n(1)}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,i,r,o,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,i,r,o,a,s],u=0;(l=new Error(t.replace(/%s/g,function(){return d[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";function i(e){return function(){return e}}var r=function(){};r.thatReturns=i,r.thatReturnsFalse=i(!1),r.thatReturnsTrue=i(!0),r.thatReturnsNull=i(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";var i=n(5),r=n(4),o=n(3);e.exports=function(){function e(e,t,n,i,a,s){s!==o&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=i,n.PropTypes=n,n}},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=s(n(8)),o=s(n(7)),a=n(2);function s(e){return e&&e.__esModule?e:{default:e}}var l={leftImage:o.default.string.isRequired,rightImage:o.default.string.isRequired,sliderLineWidth:o.default.number,handleSize:o.default.number,hover:o.default.bool,skeleton:o.default.element,autoReloadSpan:o.default.number,autoReloadLimit:o.default.number,sliderPositionPercentage:o.default.number,onSliderPositionChange:o.default.func,sliderLineColor:o.default.string,leftImageCss:o.default.object,rightImageCss:o.default.object},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){var e=n.containerRef.current;new a.ResizeSensor(e,function(){n.setImagesSize()}),e.addEventListener("touchstart",n.startSliding),window.addEventListener("touchend",n.finishSliding),n.props.hover?(e.addEventListener("mouseenter",n.startSliding),e.addEventListener("mouseleave",n.finishSliding)):(e.addEventListener("mousedown",n.startSliding),window.addEventListener("mouseup",n.finishSliding))},n.componentDidUpdate=function(e,t){!1===t.allImagesLoaded&&!0===n.state.allImagesLoaded&&n.setImagesSize(),n.props.leftImage!==e.leftImage&&(n.leftImgLoaded=!1,n.setState({allImagesLoaded:!1})),n.props.rightImage!==e.rightImage&&(n.rightImgLoaded=!1,n.setState({allImagesLoaded:!1}))},n.componentWillUnmount=function(){n.finishSliding(),window.removeEventListener("mouseup",n.finishSliding),window.removeEventListener("touchend",n.finishSliding),n.autoReloadTasks.forEach(function(e){return clearTimeout(e)})},n.setImagesSize=function(){n.setState({imageWidth:n.rightImageRef.current.getBoundingClientRect().width})},n.startSliding=function(e){"touches"in e||e.preventDefault(),n.handleSliding(e),window.addEventListener("mousemove",n.handleSliding),window.addEventListener("touchmove",n.handleSliding)},n.finishSliding=function(){window.removeEventListener("mousemove",n.handleSliding),window.removeEventListener("touchmove",n.handleSliding)},n.handleSliding=function(e){var t=e||window.event,i=(t.touches?t.touches[0].pageX:t.pageX)-window.pageXOffset-n.rightImageRef.current.getBoundingClientRect().left,r=0+n.props.sliderLineWidth/2,o=n.state.imageWidth-n.props.sliderLineWidth/2;i<r&&(i=r),i>o&&(i=o),n.setState({sliderPositionPercentage:i/n.state.imageWidth}),n.props.onSliderPositionChange&&n.props.onSliderPositionChange(i/n.state.imageWidth)},n.onRightImageLoaded=function(){n.rightImgLoaded=!0,n.rightImgLoaded&&n.leftImgLoaded&&n.setState({allImagesLoaded:!0})},n.onLeftImageLoaded=function(){n.leftImgLoaded=!0,n.rightImgLoaded&&n.leftImgLoaded&&n.setState({allImagesLoaded:!0})},n.onError=function(e,t){var i=n.props,r=i.autoReloadSpan,o=i.autoReloadLimit;if(r&&!(n.retryCount>=o)){var a=setTimeout(function(){e.current.src=null,e.current.src=t},r);n.autoReloadTasks.push(a),n.retryCount+=1}},n.render=function(){var e={container:{boxSizing:"border-box",position:"relative",width:"100%",overflow:"hidden"},rightImage:i({display:"block",height:"auto",width:"100%"},n.props.rightImageCss),leftImage:i({clip:"rect(auto, "+n.state.imageWidth*n.state.sliderPositionPercentage+"px, auto, auto)",display:"block",height:"100%",objectFit:"cover",position:"absolute",top:0,width:"100%"},n.props.leftImageCss),slider:{alignItems:"center",cursor:!n.props.hover&&"ew-resize",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",left:n.state.imageWidth*n.state.sliderPositionPercentage-n.props.handleSize/2+"px",position:"absolute",top:0,width:n.props.handleSize+"px"},line:{background:n.props.sliderLineColor,boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",flex:"0 1 auto",height:"100%",width:n.props.sliderLineWidth+"px"},handle:{alignItems:"center",border:n.props.sliderLineWidth+"px solid "+n.props.sliderLineColor,borderRadius:"100%",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",boxSizing:"border-box",display:"flex",flex:"1 0 auto",height:n.props.handleSize+"px",justifyContent:"center",width:n.props.handleSize+"px"},leftArrow:{border:"inset "+.15*n.props.handleSize+"px rgba(0,0,0,0)",borderRight:.15*n.props.handleSize+"px solid "+n.props.sliderLineColor,height:"0px",marginLeft:"-"+.25*n.props.handleSize+"px",marginRight:.25*n.props.handleSize+"px",width:"0px"},rightArrow:{border:"inset "+.15*n.props.handleSize+"px rgba(0,0,0,0)",borderLeft:.15*n.props.handleSize+"px solid "+n.props.sliderLineColor,height:"0px",marginRight:"-"+.25*n.props.handleSize+"px",width:"0px"}};return r.default.createElement(r.default.Fragment,null,n.props.skeleton&&!n.state.allImagesLoaded&&r.default.createElement("div",{style:i({},e.container)},n.props.skeleton),r.default.createElement("div",{style:i({},e.container,{display:n.state.allImagesLoaded?"block":"none"}),ref:n.containerRef,dataenzyme:"container"},r.default.createElement("img",{onLoad:n.onRightImageLoaded,onError:function(){return n.onError(n.rightImageRef,n.props.rightImage)},alt:"right",ref:n.rightImageRef,src:n.props.rightImage,style:e.rightImage}),r.default.createElement("img",{onLoad:n.onLeftImageLoaded,onError:function(){return n.onError(n.leftImageRef,n.props.leftImage)},alt:"left",ref:n.leftImageRef,src:n.props.leftImage,style:e.leftImage}),r.default.createElement("div",{style:e.slider},r.default.createElement("div",{style:e.line}),r.default.createElement("div",{style:e.handle},r.default.createElement("div",{style:e.leftArrow}),r.default.createElement("div",{style:e.rightArrow})),r.default.createElement("div",{style:e.line}))))},n.state={sliderPositionPercentage:n.props.sliderPositionPercentage,imageWidth:0,allImagesLoaded:!1},n.containerRef=r.default.createRef(),n.rightImageRef=r.default.createRef(),n.leftImageRef=r.default.createRef(),n.rightImgLoaded=!1,n.leftImgLoaded=!1,n.autoReloadTasks=[],n.retryCount=0,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),t}();d.propTypes=l,d.defaultProps={sliderLineWidth:2,handleSize:40,hover:!1,skeleton:null,autoReloadSpan:null,autoReloadLimit:10,sliderPositionPercentage:.5,sliderLineColor:"#ffffff",leftImageCss:{},rightImageCss:{}},t.default=d}])},146:function(e,t,n){e.exports=n.p+"static/calgary_streetcar-fe0468d331a956616400dda1aed71f8c.jpg"},147:function(e,t,n){e.exports=n.p+"static/calgary_ctrain-ab6c62e937584adeae5ab0ca1aebdff7.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-fb53f52759026356371c.js.map