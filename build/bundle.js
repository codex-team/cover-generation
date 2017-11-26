var codex=codex||{};codex.cover=function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){o(this,t)}return r(t,null,[{key:"make",value:function(t,e,i){var o=document.createElement(t);if(Array.isArray(e)){var r;(r=o.classList).add.apply(r,n(e))}else e&&o.classList.add(e);for(var a in i)o[a]=i[a];return o}},{key:"svg",value:function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)i.setAttributeNS(null,n,e[n]);return i}}]),t}();e.default=a},function(t,e,i){"use strict";t.exports=function(){i(2);var t=i(3),e=i(4).default,n=i(5).default;return{init:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.assert(i.containerId,"Container id is missed");var o=document.getElementById(i.containerId);if(!o)return void console.warn("Container was not found by id %o",i.containerId);var r=new e,a=new n;t.create(o,r,a)},destroy:function(){}}}()},function(t,e){},function(t,e,i){"use strict";t.exports=function(){function t(t){t.target.classList.contains(u.canvasWrapper)||"rect"==t.target.tagName?(h.toolbar.hide(),d.canvasWrapper.classList.add(u.canvasActive)):d.canvasWrapper.classList.remove(u.canvasActive)}function e(){h.canvas.export()}function n(t){var e=t.target,i=e.dataset.size;["resizeSqure","resizeVertical","resizeHorisontal"].forEach(function(t){d.controls[t].classList.remove(u.resizeButtonActive)}),t.target.classList.add(u.resizeButtonActive),h.canvas.setCanvasFormat(i)}function o(t){var e=t.target;e.dataset.object;r(e,u.mainTextControl,u.mainTextControlActive),r(e,u.headlineControl,u.headlineControlActive),r(e,u.imageControl,u.imageControlActive)}function r(t,e,i){t.classList.contains(e)&&!t.classList.contains(i)&&(d.foreignObjectElement=h.canvas.createElement(t.dataset.object),d.foreignObjectElement.addEventListener("click",a),t.classList.add(i),a())}function a(t){t&&("DIV"==t.target.tagName?d.foreignObjectElement=t.target.parentNode:d.foreignObjectElement=t.target),h.toolbar.openNear({target:d.foreignObjectElement})}function s(){document.body.addEventListener("click",t),d.controls.saveButton.addEventListener("click",e),d.controls.resizeSqure.addEventListener("click",n),d.controls.resizeVertical.addEventListener("click",n),d.controls.resizeHorisontal.addEventListener("click",n),d.controls.pictureButton.addEventListener("click",o),d.controls.mainTextButton.addEventListener("click",o),d.controls.headlineButton.addEventListener("click",o)}function l(t,e,i){var n=c.make("div",u.editor),o=c.make("div",u.controls);h.canvas=e,h.toolbar=i,d.canvasWrapper=c.make("div",u.canvasWrapper),d.canvas=h.canvas.create(d.canvasWrapper),d.controls.resizeSqure=c.make("span",[u.resizeButton,u.resizeButtonSquare]),d.controls.resizeVertical=c.make("span",[u.resizeButton,u.resizeButtonVertical]),d.controls.resizeHorisontal=c.make("span",[u.resizeButton,u.resizeButtonHorisontal]),d.controls.saveButton=c.make("span",[u.controlButton,u.controlButtonSave]),d.controls.pictureButton=c.make("span",[u.controlButton,u.imageControl],{textContent:"Image"}),d.controls.mainTextButton=c.make("span",[u.controlButton,u.mainTextControl],{textContent:"Main Text"}),d.controls.headlineButton=c.make("span",[u.controlButton,u.headlineControl],{textContent:"Headline"}),d.controls.resizeSqure.dataset.size="square",d.controls.resizeVertical.dataset.size="vertical",d.controls.resizeHorisontal.dataset.size="horisontal",d.controls.resizeHorisontal.classList.add(u.resizeButtonActive),d.controls.mainTextButton.dataset.object="mainText",d.controls.headlineButton.dataset.object="headline",d.controls.pictureButton.dataset.object="picture";for(var r in d.controls)o.appendChild(d.controls[r]);return n.appendChild(o),d.canvasWrapper.appendChild(d.canvas),n.appendChild(d.canvasWrapper),t.appendChild(n),h.toolbar.create(n,d.canvas,h.canvas),s(),d}var c=i(0).default,u={editor:"cover-editor",controls:"cover-editor__controls",resizeButton:"cover-editor__resize-canvas",resizeButtonActive:"cover-editor__resize-canvas--active",resizeButtonSquare:"cover-editor__resize-canvas--square",resizeButtonVertical:"cover-editor__resize-canvas--vertical",resizeButtonHorisontal:"cover-editor__resize-canvas--horisontal",controlButton:"cover-editor__control-button",headlineControl:"cover-editor__control-button--headline",headlineControlActive:"cover-editor__control-button--headline--active",mainTextControl:"cover-editor__control-button--main-text",mainTextControlActive:"cover-editor__control-button--main-text--active",imageControl:"cover-editor__control-button--image",imageControlActive:"cover-editor__control-button--image--active",controlButtonSave:"cover-editor__control-button--save",canvasWrapper:"cover-editor__canvas-wrapper",canvas:"cover-editor__canvas",canvasActive:"cover-editor__canvas-wrapper--active"},h={canvas:null,toolbar:null},d={foreignObjectElement:null,currentText:null,canvasWrapper:null,canvas:null,mainRectangle:null,controls:{resizeSqure:null,resizeVertical:null,resizeHorisontal:null,saveButton:null,pictureButton:null,mainTextButton:null,headlineButton:null},currentCanvasEditing:null};return{create:l}}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0).default,a=function(){function t(){n(this,t),this.tree={svg:null},this.CSS={text:"cover-editor__canvas--text"},this.newText="New Text",this.formats={vertical:"vertical",horisontal:"horisontal",square:"square"},this.sizes={vertical:{width:510,height:560},horisontal:{width:650,height:370},square:{width:510,height:510}},this.alignment={x:{left:"left",right:"right",center:"center"},y:{top:115,center:132,bottom:271}},this.elements={mainText:"mainText",image:"image",headline:"headline"},this.paddingOfElement=10,this.paddingOfCanvas=30,this.imageSize=87,this.colors={mainSVGcolor:"#FFFFFF"}}return o(t,[{key:"isText",value:function(t){return!(-1==[this.elements.headline,this.elements.mainText].indexOf(t.dataset.type)||!t.children.length)}},{key:"create",value:function(){return this.tree.rectangle=r.svg("rect",{fill:this.colors.mainSVGcolor}),this.setSize(this.tree.rectangle,this.sizes.horisontal),this.tree.svg=r.svg("svg"),this.setCanvasFormat(this.formats.horisontal),this.tree.svg.appendChild(this.tree.rectangle),this.tree.svg}},{key:"setCanvasFormat",value:function(t){this.setSize(this.tree.svg,this.sizes[t]),this.setSize(this.tree.rectangle,this.sizes[t])}},{key:"setSize",value:function(t,e){if("auto"===e&&this.isText(t)){var i=t.querySelector('div[contenteditable="true"]');t.setAttribute("width",this.tree.svg.clientWidth),t.setAttribute("height",this.tree.svg.clientHeight),e={width:i.offsetWidth+this.paddingOfElement,height:i.offsetHeight+this.paddingOfElement}}e.height&&t.setAttribute("height",e.height),e.width&&t.setAttribute("width",e.width)}},{key:"setColor",value:function(t,e){this.isText(t)&&(t.querySelector('div[contenteditable="true"]').style.color=e)}},{key:"setFontSize",value:function(t,e){this.isText(t)&&(t.querySelector('div[contenteditable="true"]').style.fontSize=e,this.setSize(t,"auto"),this.setAlignment(t,t.dataset.alignment))}},{key:"setAlignment",value:function(t,e,i){var n={width:this.tree.svg.clientWidth,height:this.tree.svg.clientWidth},o={width:t.clientWidth,height:t.clientWidth};this.isText(t);switch(e){case this.alignment.x.left:this.setPosition(t,this.paddingOfElement);break;case this.alignment.x.center:this.setPosition(t,(n.width-o.width)/2);break;case this.alignment.x.right:this.setPosition(t,n.width-o.width-this.paddingOfElement)}this.alignment.y[i]&&this.setPosition(t,void 0,this.alignment.y[i])}},{key:"setPosition",value:function(t,e,i){"number"==typeof i&&t.setAttribute("y",i),"number"==typeof e&&t.setAttribute("x",e)}},{key:"autoSizing",value:function(t){var e=t.target;this.setSize(e.parentNode,"auto"),this.setAlignment(e.parentNode,e.parentNode.dataset.alignment)}},{key:"createText",value:function(t){var e=r.make("div",this.CSS.text),i=r.svg("foreignObject"),n=0;switch(e.innerHTML=this.newText,e.setAttribute("contenteditable",!0),e.addEventListener("keyup",this.autoSizing.bind(this)),i.dataset.type=t,i.appendChild(e),this.tree.svg.appendChild(i),t){case this.elements.headline:n="top";break;case this.elements.mainText:n="bottom"}return this.setSize(i,"auto"),this.setAlignment(i,this.alignment.x.left,n),i}},{key:"createImage",value:function(){var t=r.svg("image");return this.setAlignment(t,this.alignment.x.left,this.alignment.y.center),this.setSize(t,{width:this.imageSize,height:this.imageSize}),this.tree.svg.appendChild(t),t}},{key:"createElement",value:function(t){return t===this.elements.headline||t===this.elements.mainText?this.createText(t):t===this.elements.image?this.createImage(t):void 0}},{key:"export",value:function(){var t=new window.XMLSerializer,e=t.serializeToString(this.tree.svg);e.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(e=e.replace(/^<svg/,'<svg xmlns="http://www.w3.org/2000/svg"')),e.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(e=e.replace(/^<svg/,'<svg xmlns:xlink="http://www.w3.org/1999/xlink"')),e='<?xml version="1.0" standalone="no"?>\r\n'+e;var i=r.make("a",null,{style:"display:none;",href:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e),download:"cover.svg"});document.body.appendChild(i),i.click(),document.body.removeChild(i)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0).default,a=function(){function t(e){n(this,t),this.instances={canvas:null},this.target=null,this.properties={fontSize:{small:e&&e.small?e.small:"25px",medium:e&&e.medium?e.medium:"28px",big:e&&e.big?e.big:"31px"}},this.tree={toolbar:void 0,buttons:{fontSize:void 0,left:void 0,center:void 0,right:void 0,color:void 0},colorForm:void 0},this.CSS={hidden:"cover-editor--hidden",toolbar:{colorMode:"cover-editor__toolbar--color-mode",normal:"cover-editor__toolbar"},target:{active:"cover-editor__text--active",fontSize:["cover-editor__text--small","cover-editor__text--medium","cover-editor__text--big"]},button:"cover-editor__button",buttons:{active:"cover-editor__button--active",left:"cover-editor__button--left",center:"cover-editor__button--center",right:"cover-editor__button--right",fontSize:"cover-editor__button--font-size",fontSizes:{small:"cover-editor__button--small",medium:"cover-editor__button--medium",big:"cover-editor__button--big"},color:"cover-editor__button--color"},colorForm:"cover-editor__color-form"},this.colors={defaultText:"#000000"}}return o(t,[{key:"create",value:function(t,e,i){this.editor=t,this.canvas=e,this.instances.canvas=i,this.make()}},{key:"make",value:function(){var t=this;this.tree.toolbar=r.make("div",[this.CSS.toolbar.normal,this.CSS.hidden]);for(var e in this.tree.buttons){var i=r.make("span",[this.CSS.button,this.CSS.buttons[e]]);this.tree.toolbar.appendChild(i),this.tree.buttons[e]=i,i.dataset.action=e,i.addEventListener("click",function(e){t.buttonClicked(e)})}this.tree.colorForm=r.make("input",[this.CSS.colorForm]),this.tree.toolbar.insertBefore(this.tree.colorForm,this.tree.buttons.color),this.editor.appendChild(this.tree.toolbar)}},{key:"buttonClicked",value:function(t){var e=t.target,i=e.dataset.action;switch(i){case"fontSize":this.changeFontSize();break;case"left":case"center":case"right":this.changeAlignment(i);break;case"color":this.changeColorMode()}}},{key:"changeFontSize",value:function(t){var e=this.target.dataset.fontSize,i=["small","medium","big"],n=void 0;n=i[(i.indexOf(e)+1)%i.length],this.target.dataset.fontSize=n,this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[e]),this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[n]),this.instances.canvas.setFontSize(this.target,this.properties.fontSize[n]),this.moveToTarget()}},{key:"changeAlignment",value:function(t){this.target.dataset.alignment=t;for(var e in this.tree.buttons)"fontSize"!==e&&"color"!==e&&this.tree.buttons[e].classList.remove(this.CSS.buttons.active);this.instances.canvas.setAlignment(this.target,t,void 0),this.moveToTarget()}},{key:"changeColor",value:function(t){this.instances.canvas.setColor(this.target,t),this.target.dataset.color=t,this.tree.buttons.color.style.background=t}},{key:"changeColorMode",value:function(){this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)?(this.changeColor(this.tree.colorForm.value),this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode)):this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode),this.moveToTarget()}},{key:"moveToTarget",value:function(){var t=this.tree.toolbar,e={left:this.canvas.parentNode.offsetLeft,top:this.canvas.parentNode.offsetTop},i={left:window.parseInt(this.target.getAttribute("x")),top:window.parseInt(this.target.getAttribute("y")),width:this.target.clientWidth};switch(this.target.dataset.alignment){case"left":t.style.left=e.left+i.left+"px";break;case"center":t.style.left=e.left+i.left+(i.width-t.clientWidth)/2+"px";break;case"right":t.style.left=e.left+i.left+i.width-t.clientWidth+"px"}t.style.top=e.top+i.top-t.clientHeight+"px"}},{key:"getTargetParams",value:function(){void 0==this.target.dataset.fontSize?(this.target.dataset.fontSize="big",this.changeFontSize(this.target.dataset.fontSize)):this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[this.target.dataset.fontSize]),void 0==this.target.dataset.alignment&&(this.target.dataset.alignment="left",this.changeAlignment(this.target.dataset.alignment)),void 0==this.target.dataset.color&&(this.target.dataset.color=this.colors.defaultText,this.changeColor(this.target.dataset.color))}},{key:"openNear",value:function(t){var e=t.target;this.target=e,this.tree.toolbar.classList.remove(this.CSS.hidden),this.moveToTarget(),this.getTargetParams()}},{key:"removeTargetParams",value:function(){this.tree.buttons.left.classList.remove(this.CSS.buttons.active),this.tree.buttons.center.classList.remove(this.CSS.buttons.active),this.tree.buttons.right.classList.remove(this.CSS.buttons.active)}},{key:"hide",value:function(){this.removeTargetParams(),this.target=null,this.tree.toolbar.classList.add(this.CSS.hidden)}}]),t}();e.default=a}]);