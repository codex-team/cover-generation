var codex=codex||{};codex.cover=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(){r(this,t)}return i(t,null,[{key:"make",value:function(t,e,n){var r=document.createElement(t);if(Array.isArray(e)){var i;(i=r.classList).add.apply(i,o(e))}else e&&r.classList.add(e);for(var a in n)r[a]=n[a];return r}},{key:"svg",value:function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg",t);for(var o in e)n.setAttributeNS(null,o,e[o]);return n}}]),t}();e.default=a},function(t,e,n){"use strict";t.exports=function(){n(2);var t=n(3),e=n(4).default,o=n(5).default,r=n(6).default;return{init:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.assert(n.containerId,"Container id is missed");var i=document.getElementById(n.containerId);if(!i)return void console.warn("Container was not found by id %o",n.containerId);var a=new e,s=new o,l=new r;t.create(i,a,s,l)},destroy:function(){}}}()},function(t,e){},function(t,e,n){"use strict";t.exports=function(){function t(t){t.target.classList.contains(d.canvasWrapper)||"rect"==t.target.tagName?(h.toolbar.hide(),v.canvasWrapper.classList.add(d.canvasActive)):v.canvasWrapper.classList.remove(d.canvasActive)}function e(){h.redrawer.shot(v.canvas),h.redrawer.download()}function o(t){var e=t.target,n=e.dataset.size;["resizeSqure","resizeVertical","resizeHorisontal"].forEach(function(t){v.controls[t].classList.remove(d.resizeButtonActive)}),t.target.classList.add(d.resizeButtonActive),h.toolbar.hide(),h.canvas.setCanvasFormat(n)}function r(t){i(t.target.dataset.object)}function i(t){v[t]||(v[t]=h.canvas.createElement(t),v[t].addEventListener("click",s),a(v[t]))}function a(t){h.toolbar.openNear(t)}function s(){a(this)}function l(){document.body.addEventListener("click",t),v.controls.saveButton.addEventListener("click",e),v.controls.resizeSqure.addEventListener("click",o),v.controls.resizeVertical.addEventListener("click",o),v.controls.resizeHorisontal.addEventListener("click",o),v.controls.pictureButton.addEventListener("click",r),v.controls.mainTextButton.addEventListener("click",r),v.controls.headlineButton.addEventListener("click",r)}function c(t,e,n,o){var r=u.make("div",d.editor),i=u.make("div",d.controls);h.redrawer=e,h.canvas=n,h.toolbar=o,v.canvasWrapper=u.make("div",d.canvasWrapper),v.canvas=h.canvas.create(v.canvasWrapper),v.controls.resizeSqure=u.make("span",[d.resizeButton,d.resizeButtonSquare]),v.controls.resizeVertical=u.make("span",[d.resizeButton,d.resizeButtonVertical]),v.controls.resizeHorisontal=u.make("span",[d.resizeButton,d.resizeButtonHorisontal]),v.controls.saveButton=u.make("span",[d.controlButton,d.controlButtonSave]),v.controls.pictureButton=u.make("span",[d.controlButton,d.imageControl],{textContent:"Image"}),v.controls.mainTextButton=u.make("span",[d.controlButton,d.mainTextControl],{textContent:"Main Text"}),v.controls.headlineButton=u.make("span",[d.controlButton,d.headlineControl],{textContent:"Headline"}),v.controls.resizeSqure.dataset.size="square",v.controls.resizeVertical.dataset.size="vertical",v.controls.resizeHorisontal.dataset.size="horisontal",v.controls.resizeHorisontal.classList.add(d.resizeButtonActive),v.controls.mainTextButton.dataset.object="mainText",v.controls.headlineButton.dataset.object="headline",v.controls.pictureButton.dataset.object="picture";for(var a in v.controls)i.appendChild(v.controls[a]);return r.appendChild(i),v.canvasWrapper.appendChild(v.canvas),r.appendChild(v.canvasWrapper),t.appendChild(r),h.toolbar.create(r,v.canvas,h.canvas),l(),v}var u=n(0).default,d={editor:"cover-editor",controls:"cover-editor__controls",resizeButton:"cover-editor__resize-canvas",resizeButtonActive:"cover-editor__resize-canvas--active",resizeButtonSquare:"cover-editor__resize-canvas--square",resizeButtonVertical:"cover-editor__resize-canvas--vertical",resizeButtonHorisontal:"cover-editor__resize-canvas--horisontal",controlButton:"cover-editor__control-button",headlineControl:"cover-editor__control-button--headline",mainTextControl:"cover-editor__control-button--main-text",imageControl:"cover-editor__control-button--image",controlButtonSave:"cover-editor__control-button--save",canvasWrapper:"cover-editor__canvas-wrapper",canvas:"cover-editor__canvas",canvasActive:"cover-editor__canvas-wrapper--active"},h={redrawer:null,canvas:null,toolbar:null},v={mainTextElement:null,headlineElement:null,pictureElement:null,currentText:null,canvasWrapper:null,canvas:null,mainRectangle:null,controls:{resizeSqure:null,resizeVertical:null,resizeHorisontal:null,saveButton:null,pictureButton:null,mainTextButton:null,headlineButton:null},currentCanvasEditing:null};return{create:c}}()},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(0).default,a=function(){function t(){o(this,t),this.canvasElement=document.createElement("canvas"),this.canvas=this.canvasElement.getContext("2d"),this.shootingElement=null,this.shootingCoords={top:0,left:0}}return r(t,[{key:"getCoords",value:function(t){for(var e=(t.offsetParent,{top:0,left:0});t&&void 0!==t.offsetTop&&void 0!==t.offsetLeft;)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;return e.top-=this.shootingCoords.top,e.left-=this.shootingCoords.left,e}},{key:"formatText",value:function(t){var e=/\s+/g;return t=t.replace(e," "),t.trim()}},{key:"setTextStyle",value:function(t){var e=window.getComputedStyle(t);this.canvas.fillStyle=e.color,this.canvas.font=e.fontStyle+" "+e.fontSize+" "+e.fontFamily}},{key:"drawHTMLTextOnCanvas",value:function(t){var e=(t.cloneNode(!0),document.createElement("span")),n=void 0;t.parentNode.insertBefore(e,t),n=this.getCoords(e),e.textContent=t,this.setTextStyle(t.parentNode),this.canvas.fillText(this.formatText(t.textContent),n.left,e.offsetHeight+n.top),t.parentNode.removeChild(e)}},{key:"drawHTMLImageOnCanvas",value:function(t){var e=new window.Image,n=this.getCoords(t);e.src=t.getAttribute("scr"),e.onload=function(){this.canvas.drawImage(e,n.left,n.top)}.bind(this)}},{key:"drawHTMLBlockOnCanvas",value:function(t){var e=window.getComputedStyle(t),n=this.getCoords(t);this.canvas.fillStyle=e.backgroundColor,this.canvas.fillRect(n.left,n.top,t.offsetWidth,t.offsetHeight)}},{key:"redraw",value:function(t){switch(t.tagName){case void 0:this.drawHTMLTextOnCanvas(t);break;case"IMG":this.drawHTMLImageOnCanvas(t);break;default:this.drawHTMLBlockOnCanvas(t);for(var e=0;e<t.childNodes.length;e++){var n=t.childNodes[e];this.redraw(n)}}}},{key:"shot",value:function(t){this.shootingElement=t,this.shootingCoords=this.getCoords(this.shootingElement),this.canvasElement.setAttribute("WIDTH",t.clientWidth),this.canvasElement.setAttribute("HEIGHT",t.clientHeight),this.redraw(this.shootingElement,0,0)}},{key:"download",value:function(t){var e=i.make("a",null,{style:"display:none;",href:this.canvasElement.toDataURL("image/png"),download:"cover.png"});document.body.appendChild(e),e.click(),document.body.removeChild(e)}}]),t}();e.default=a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(0).default,a=function(){function t(){o(this,t),this.tree={editor:null},this.CSS={canvas:"cover-editor__editor",element:"cover-editor__element",elements:{headline:"cover-editor__headline",image:"cover-editor__image",mainText:"cover-editor__mainText"},alignment:{left:"cover-editor__element--left",center:"cover-editor__element--center",right:"cover-editor__element--right"}},this.newText="New Text",this.formats={vertical:"vertical",horisontal:"horisontal",square:"square"},this.sizes={vertical:{width:510,height:560},horisontal:{width:650,height:370},square:{width:510,height:510}},this.alignment={horisontal:{left:"left",right:"right",center:"center"},vertical:{top:"top",center:"center",bottom:"bottom"}},this.elements={mainText:"mainText",image:"picture",headline:"headline"},this.colors={mainSVGcolor:"#FFFFFF"}}return r(t,[{key:"isText",value:function(t){return!(-1==[this.elements.headline,this.elements.mainText].indexOf(t.dataset.type)||!t.children.length)}},{key:"create",value:function(){return this.tree.editor=i.make("div",this.CSS.canvas),this.setCanvasFormat(this.formats.horisontal),this.tree.editor}},{key:"setCanvasFormat",value:function(t){this.setSize(this.tree.editor,this.sizes[t])}},{key:"setSize",value:function(t,e){e.height&&(t.style.height=e.height+"px"),e.width&&(t.style.width=e.width+"px")}},{key:"setTextColor",value:function(t,e){t.style.color=e}},{key:"setTextFontSize",value:function(t,e){t.style.fontSize=e}},{key:"setElementAlignment",value:function(t,e){var n={horisontal:this.alignment.horisontal};for(var o in this.CSS.alignment)t.classList.remove(this.CSS.alignment[o]);switch(e){case n.horisontal.left:t.classList.add(this.CSS.alignment.left);break;case n.horisontal.center:t.classList.add(this.CSS.alignment.center);break;case n.horisontal.right:t.classList.add(this.CSS.alignment.right)}}},{key:"createText",value:function(t){var e=i.make("div",[this.CSS.element,this.CSS.elements[t]]);return e.innerHTML=this.newText,e.dataset.type=t,e.setAttribute("contenteditable",!0),e.addEventListener("paste",this.pasteFromClipboard.bind(this)),this.tree.editor.appendChild(e),this.setElementAlignment(e,this.alignment.horisontal.left),e}},{key:"pasteFromClipboard",value:function(t){t.stopPropagation(),t.preventDefault();var e=(t.clipboardData||window.clipboardData).getData("Text");e&&this.insertAtCaret(e)}},{key:"insertAtCaret",value:function(t){document.execCommand("insertText",!1,t)}},{key:"createImage",value:function(t){var e=i.make("img",[this.CSS.element,this.CSS.elements.image],{src:"src/assets/icon-picture.svg"});return this.setElementAlignment(e,this.alignment.horisontal.left),this.tree.editor.appendChild(e),e}},{key:"createElement",value:function(t){return t===this.elements.headline||t===this.elements.mainText?this.createText(t):t===this.elements.image?this.createImage(t):void 0}},{key:"export",value:function(){var t=new window.XMLSerializer,e=t.serializeToString(this.tree.editor);e.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(e=e.replace(/^<svg/,'<svg xmlns="http://www.w3.org/2000/svg"')),e.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(e=e.replace(/^<svg/,'<svg xmlns:xlink="http://www.w3.org/1999/xlink"')),e='<?xml version="1.0" standalone="no"?>\r\n'+e;var n=i.make("a",null,{style:"display:none;",href:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e),download:"cover.svg"});document.body.appendChild(n),n.click(),document.body.removeChild(n)}}]),t}();e.default=a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(0).default,a=function(){function t(e){o(this,t),this.instances={canvas:null},this.target=null,this.properties={fontSize:{small:e&&e.small?e.small:"25px",medium:e&&e.medium?e.medium:"28px",big:e&&e.big?e.big:"31px"}},this.tree={toolbar:void 0,buttons:{fontSize:void 0,left:void 0,center:void 0,right:void 0,color:void 0},colorForm:void 0},this.CSS={hidden:"cover-editor--hidden",toolbar:{colorMode:"cover-editor__toolbar--color-mode",normal:"cover-editor__toolbar"},target:{active:"cover-editor__text--active",fontSize:["cover-editor__text--small","cover-editor__text--medium","cover-editor__text--big"]},button:"cover-editor__button",buttons:{active:"cover-editor__button--active",left:"cover-editor__button--left",center:"cover-editor__button--center",right:"cover-editor__button--right",fontSize:"cover-editor__button--font-size",fontSizes:{small:"cover-editor__button--small",medium:"cover-editor__button--medium",big:"cover-editor__button--big"},color:"cover-editor__button--color"},colorForm:"cover-editor__color-form"},this.colors={defaultText:"#000000"},this.margin=10}return r(t,[{key:"create",value:function(t,e,n){this.editor=t,this.canvas=e,this.instances.canvas=n,this.make()}},{key:"make",value:function(){var t=this;this.tree.toolbar=i.make("div",[this.CSS.toolbar.normal,this.CSS.hidden]);for(var e in this.tree.buttons){var n=i.make("span",[this.CSS.button,this.CSS.buttons[e]]);this.tree.toolbar.appendChild(n),this.tree.buttons[e]=n,n.dataset.action=e,n.addEventListener("click",function(e){t.buttonClicked(e)})}this.tree.colorForm=i.make("input",[this.CSS.colorForm]),this.tree.colorForm.addEventListener("keyup",function(e){t.changeColorModeByKey(e)}),this.tree.toolbar.insertBefore(this.tree.colorForm,this.tree.buttons.color),this.editor.appendChild(this.tree.toolbar)}},{key:"buttonClicked",value:function(t){var e=t.target,n=e.dataset.action;switch(n){case"fontSize":this.changeFontSize();break;case"left":case"center":case"right":this.changeAlignment(n);break;case"color":this.changeColorMode()}}},{key:"changeFontSize",value:function(){var t=this.target.dataset.fontSize,e=["small","medium","big"],n=void 0;n=e[(e.indexOf(t)+1)%e.length],this.target.dataset.fontSize=n,this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[t]),this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[n]),this.instances.canvas.setTextFontSize(this.target,this.properties.fontSize[n]),this.moveToTarget()}},{key:"changeAlignment",value:function(t){this.target.dataset.alignment=t;for(var e in this.tree.buttons)"fontSize"!==e&&"color"!==e&&this.tree.buttons[e].classList.remove(this.CSS.buttons.active);this.tree.buttons[t].classList.add(this.CSS.buttons.active),this.instances.canvas.setElementAlignment(this.target,t,void 0),this.moveToTarget()}},{key:"changeColor",value:function(t){t&&(this.instances.canvas.setTextColor(this.target,t),this.target.dataset.color=t,this.tree.buttons.color.style.background=t)}},{key:"changeColorModeByKey",value:function(t){13==t.keyCode&&this.changeColorMode()}},{key:"changeColorMode",value:function(){this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)?(this.changeColor(this.tree.colorForm.value),this.tree.colorForm.value="",this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode)):(this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode),this.tree.colorForm.focus()),this.moveToTarget()}},{key:"moveToTarget",value:function(){var t=this.tree.toolbar,e=this.target.getBoundingClientRect(),n=this.canvas.parentNode.getBoundingClientRect();switch(this.target.dataset.alignment){case"left":t.style.left=e.left-n.left+"px";break;case"center":t.style.left=e.left-n.left-(t.clientWidth-this.target.clientWidth)/2+"px";break;case"right":t.style.left=e.left-n.left+this.target.clientWidth-t.clientWidth+"px"}t.style.top=e.top-this.margin-t.clientHeight+"px"}},{key:"getTargetParams",value:function(){void 0==this.target.dataset.fontSize?(this.target.dataset.fontSize="big",this.changeFontSize()):this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[this.target.dataset.fontSize]),void 0==this.target.dataset.alignment&&(this.target.dataset.alignment="left"),this.changeAlignment(this.target.dataset.alignment),void 0==this.target.dataset.color&&(this.target.dataset.color=this.colors.defaultText),this.changeColor(this.target.dataset.color)}},{key:"openNear",value:function(t){this.removeTargetParams(),this.target=t,this.tree.toolbar.classList.remove(this.CSS.hidden),this.moveToTarget(),this.getTargetParams()}},{key:"removeTargetParams",value:function(){this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode),this.tree.buttons.left.classList.remove(this.CSS.buttons.active),this.tree.buttons.center.classList.remove(this.CSS.buttons.active),this.tree.buttons.right.classList.remove(this.CSS.buttons.active);for(var t in this.CSS.buttons.fontSizes)this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[t])}},{key:"hide",value:function(){this.target=null,this.tree.toolbar.classList.add(this.CSS.hidden)}}]),t}();e.default=a}]);
