var codex=codex||{};codex.cover=function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){o(this,t)}return r(t,null,[{key:"make",value:function(t,e,i){var o=document.createElement(t);if(Array.isArray(e)){var r;(r=o.classList).add.apply(r,n(e))}else e&&o.classList.add(e);for(var a in i)o[a]=i[a];return o}},{key:"svg",value:function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)i.setAttributeNS(null,n,e[n]);return i}}]),t}();e.default=a},function(t,e,i){"use strict";t.exports=function(){i(2);var t=i(3),e=i(4).default,n=i(5).default;return{init:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.assert(i.containerId,"Container id is missed");var o=document.getElementById(i.containerId);if(!o)return void console.warn("Container was not found by id %o",i.containerId);var r=new e,a=new n;t.create(o,r,a)},destroy:function(){}}}()},function(t,e){},function(t,e,i){"use strict";t.exports=function(){function t(t){t.target.classList.contains(l.canvasWrapper)||"rect"==t.target.tagName?(d.toolbar.hide(),u.canvasWrapper.classList.add(l.canvasActive)):u.canvasWrapper.classList.remove(l.canvasActive)}function e(){d.canvas.export()}function n(t){var e=t.target,i=e.dataset.size;["resizeSqure","resizeVertical","resizeHorisontal"].forEach(function(t){u.controls[t].classList.remove(l.resizeButtonActive)}),t.target.classList.add(l.resizeButtonActive),d.canvas.setCanvasFormat(i)}function o(t){var e=t.target,i=e.dataset.object,n=d.canvas.createElement(i);n.addEventListener("click",r),n.dispatchEvent(new window.Event("click"))}function r(t){var e=t.target;if("DIV"==e.tagName)return void d.toolbar.openNear({target:e.parentNode});d.toolbar.openNear({target:e})}function a(){document.body.addEventListener("click",t),u.controls.saveButton.addEventListener("click",e),u.controls.resizeSqure.addEventListener("click",n),u.controls.resizeVertical.addEventListener("click",n),u.controls.resizeHorisontal.addEventListener("click",n),u.controls.pictureButton.addEventListener("click",o),u.controls.mainTextButton.addEventListener("click",o),u.controls.headlineButton.addEventListener("click",o)}function s(t,e,i){var n=c.make("div",l.editor),o=c.make("div",l.controls);d.canvas=e,d.toolbar=i,u.canvasWrapper=c.make("div",l.canvasWrapper),u.canvas=d.canvas.create(u.canvasWrapper),u.controls.resizeSqure=c.make("span",[l.resizeButton,l.resizeButtonSquare]),u.controls.resizeVertical=c.make("span",[l.resizeButton,l.resizeButtonVertical]),u.controls.resizeHorisontal=c.make("span",[l.resizeButton,l.resizeButtonHorisontal]),u.controls.saveButton=c.make("span",[l.controlButton,l.controlButtonSave]),u.controls.pictureButton=c.make("span",[l.controlButton,l.imageControl],{textContent:"Image"}),u.controls.mainTextButton=c.make("span",[l.controlButton,l.mainTextControl],{textContent:"Main Text"}),u.controls.headlineButton=c.make("span",[l.controlButton,l.headlineControl],{textContent:"Headline"}),u.controls.resizeSqure.dataset.size="square",u.controls.resizeVertical.dataset.size="vertical",u.controls.resizeHorisontal.dataset.size="horisontal",u.controls.resizeHorisontal.classList.add(l.resizeButtonActive),u.controls.mainTextButton.dataset.object="mainText",u.controls.headlineButton.dataset.object="headline",u.controls.pictureButton.dataset.object="picture";for(var r in u.controls)o.appendChild(u.controls[r]);return n.appendChild(o),u.canvasWrapper.appendChild(u.canvas),n.appendChild(u.canvasWrapper),t.appendChild(n),d.toolbar.create(n,u.canvas,d.canvas),a(),u}var c=i(0).default,l={editor:"cover-editor",controls:"cover-editor__controls",resizeButton:"cover-editor__resize-canvas",resizeButtonActive:"cover-editor__resize-canvas--active",resizeButtonSquare:"cover-editor__resize-canvas--square",resizeButtonVertical:"cover-editor__resize-canvas--vertical",resizeButtonHorisontal:"cover-editor__resize-canvas--horisontal",controlButton:"cover-editor__control-button",headlineControl:"cover-editor__control-button--headline",mainTextControl:"cover-editor__control-button--main-text",imageControl:"cover-editor__control-button--image",controlButtonSave:"cover-editor__control-button--save",canvasWrapper:"cover-editor__canvas-wrapper",canvas:"cover-editor__canvas",canvasActive:"cover-editor__canvas-wrapper--active"},d={canvas:null,toolbar:null},u={currentText:null,canvasWrapper:null,canvas:null,mainRectangle:null,controls:{resizeSqure:null,resizeVertical:null,resizeHorisontal:null,saveButton:null,pictureButton:null,mainTextButton:null,headlineButton:null},currentCanvasEditing:null};return{create:s}}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0).default,a=function(){function t(){n(this,t),this.tree={svg:null},this.newText="New Text",this.formats={vertical:"vertical",horisontal:"horisontal",square:"square"},this.sizes={vertical:{width:510,height:560},horisontal:{width:650,height:370},square:{width:510,height:510}},this.positions={mainText:{x:void 0,y:271},image:{x:void 0,y:132},headline:{x:void 0,y:115}},this.elements={mainText:"mainText",image:"image",headline:"headline"},this.paddingOfElement=30,this.paddingOfCanvas=10,this.paddingForPosition=5,this.imageSize=87}return o(t,[{key:"isText",value:function(t){return!(-1==[this.elements.headline,this.elements.mainText].indexOf(t.dataset.type)||!t.children.length)}},{key:"create",value:function(){return this.tree.rectangle=r.svg("rect",{fill:"#FFFFFF"}),this.setSize(this.tree.rectangle,this.sizes.horisontal),this.tree.svg=r.svg("svg"),this.setCanvasFormat(this.formats.horisontal),this.tree.svg.appendChild(this.tree.rectangle),this.tree.svg}},{key:"setCanvasFormat",value:function(t){this.setSize(this.tree.svg,this.sizes[t]),this.setSize(this.tree.rectangle,this.sizes[t])}},{key:"setSize",value:function(t,e){if("auto"===e&&this.isText(t)){var i=t.children[0];t.setAttribute("width",this.tree.svg.clientWidth),t.setAttribute("height",this.tree.svg.clientHeight),e={width:i.offsetWidth+this.paddingOfCanvas,height:i.offsetHeight+this.paddingOfCanvas}}e.height&&t.setAttribute("height",e.height),e.width&&t.setAttribute("width",e.width)}},{key:"setColor",value:function(t,e){this.isText(t)&&(t.children[0].style.color=e)}},{key:"setFontSize",value:function(t,e){this.isText(t)&&(t.children[0].style.fontSize=e,this.setSize(t,"auto"),this.setPosition(t,{x:t.dataset.alignment,y:void 0}))}},{key:"setPosition",value:function(t,e){if(e){"string"==typeof e&&(e=this.positions[e]);var i={width:this.tree.svg.clientWidth,height:this.tree.svg.clientWidth},n={width:t.clientWidth+this.paddingForPosition,height:t.clientWidth+this.paddingForPosition};switch(this.isText(t)&&["left","center","rigth"].indexOf(e.x)&&(t.children[0].style.textAlign=e.x),e.x){case"left":e.x=this.paddingOfElement;break;case"center":e.x=(i.width-n.width)/2;break;case"right":e.x=i.width-n.width-this.paddingOfElement}e.y&&t.setAttribute("y",e.y),e.x&&t.setAttribute("x",e.x)}}},{key:"createText",value:function(t){var e=this,i=r.make("div"),n=r.svg("foreignObject"),o=this.positions[t];return i.innerHTML=this.newText,i.style.display="inline-flex",i.setAttribute("contenteditable",!0),i.addEventListener("keyup",function(t){e.setSize(t.target.parentNode,"auto"),e.setPosition(t.target.parentNode,{x:t.target.parentNode.dataset.alignment,y:void 0})}),-1!=[this.elements.headline,this.elements.mainText].indexOf(t)&&(n.dataset.type=t),n.appendChild(i),this.tree.svg.appendChild(n),o.x="left",this.setSize(n,"auto"),this.setPosition(n,t),n}},{key:"createImage",value:function(t){var e=r.svg("image");return this.setPosition(e,t),this.setSize(e,{width:this.imageSize,height:this.imageSize}),this.tree.svg.appendChild(e),e}},{key:"createElement",value:function(t){return t===this.elements.headline||t===this.elements.mainText?this.createText(t):t===this.elements.image?this.createImage(t):void 0}},{key:"export",value:function(){var t=new window.XMLSerializer,e=t.serializeToString(this.tree.svg);e.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(e=e.replace(/^<svg/,'<svg xmlns="http://www.w3.org/2000/svg"')),e.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(e=e.replace(/^<svg/,'<svg xmlns:xlink="http://www.w3.org/1999/xlink"')),e='<?xml version="1.0" standalone="no"?>\r\n'+e;var i=r.make("a",null,{style:"display:none;",href:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e),download:"cover.svg"});document.body.appendChild(i),i.click(),document.body.removeChild(i)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0).default,a=function(){function t(e){n(this,t),this.instances={canvas:null},this.target=null,this.properties={fontSize:{small:e&&e.small?e.small:"25px",medium:e&&e.medium?e.medium:"28px",big:e&&e.big?e.big:"31px"}},this.tree={toolbar:void 0,buttons:{fontSize:void 0,left:void 0,center:void 0,right:void 0,color:void 0},colorForm:void 0},this.CSS={hidden:"cover-editor--hidden",toolbar:{colorMode:"cover-editor__toolbar--color-mode",normal:"cover-editor__toolbar"},target:{active:"cover-editor__text--active",fontSize:["cover-editor__text--small","cover-editor__text--medium","cover-editor__text--big"]},button:"cover-editor__button",buttons:{active:"cover-editor__button--active",left:"cover-editor__button--left",center:"cover-editor__button--center",right:"cover-editor__button--right",fontSize:"cover-editor__button--font-size",fontSizes:{small:"cover-editor__button--small",medium:"cover-editor__button--medium",big:"cover-editor__button--big"},color:"cover-editor__button--color"},colorForm:"cover-editor__color-form"},this.colors={black:"#000000"}}return o(t,[{key:"create",value:function(t,e,i){this.editor=t,this.canvas=e,this.instances.canvas=i,this.make()}},{key:"make",value:function(){var t=this;this.tree.toolbar=r.make("div",[this.CSS.toolbar.normal,this.CSS.hidden]),["fontSize","left","center","right","color"].forEach(function(e){var i=r.make("span",[t.CSS.button,t.CSS.buttons[e]]);t.tree.toolbar.appendChild(i),t.tree.buttons[e]=i,i.dataset.action=e,i.addEventListener("click",function(e){t.buttonClicked(e)})}),this.tree.colorForm=r.make("input",[this.CSS.colorForm]),this.tree.toolbar.insertBefore(this.tree.colorForm,this.tree.buttons.color),this.editor.appendChild(this.tree.toolbar)}},{key:"buttonClicked",value:function(t){var e=(t.target,t.target.dataset.action);switch(e){case"fontSize":this.changeFontSize();break;case"left":case"center":case"right":this.changeAlignment(e);break;case"color":this.changeColorMode()}}},{key:"changeFontSize",value:function(t){var e=this.target.dataset.fontSize,i=void 0;switch(e){case"small":i="medium";break;case"medium":i="big";break;case"big":i="small";break;default:return}this.target.dataset.fontSize=i,this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[e]),this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[i]),this.instances.canvas.setFontSize(this.target,this.properties.fontSize[i]),this.moveToTarget()}},{key:"changeAlignment",value:function(t){var e=this;this.target.dataset.alignment=t,["left","center","right"].forEach(function(t){e.tree.buttons[t].classList.remove(e.CSS.buttons.active)}),this.instances.canvas.setPosition(this.target,{x:t,y:void 0}),this.moveToTarget()}},{key:"changeColor",value:function(t){this.instances.canvas.setColor(this.target,t),this.target.dataset.color=t,this.tree.buttons.color.style.background=t}},{key:"changeColorMode",value:function(){this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)?(this.changeColor(this.tree.colorForm.value),this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode)):this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode),this.moveToTarget()}},{key:"moveToTarget",value:function(){var t=this.tree.toolbar,e={left:this.canvas.parentNode.offsetLeft,top:this.canvas.parentNode.offsetTop},i={left:window.parseInt(this.target.getAttribute("x")),top:window.parseInt(this.target.getAttribute("y")),width:this.target.clientWidth};switch(this.target.dataset.alignment){case"left":t.style.left=e.left+i.left+"px";break;case"center":t.style.left=e.left+i.left+(i.width-t.clientWidth)/2+"px";break;case"right":t.style.left=e.left+i.left+i.width-t.clientWidth+"px"}t.style.top=e.top+i.top-t.clientHeight+"px"}},{key:"getTargetParams",value:function(){void 0==this.target.dataset.fontSize?(this.target.dataset.fontSize="big",this.changeFontSize(this.target.dataset.fontSize)):this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[this.target.dataset.fontSize]),void 0==this.target.dataset.alignment&&(this.target.dataset.alignment="left",this.changeAlignment(this.target.dataset.alignment)),void 0==this.target.dataset.color&&(this.target.dataset.color=this.colors.black,this.changeColor(this.target.dataset.color))}},{key:"openNear",value:function(t){var e=t.target;this.target=e,this.tree.toolbar.classList.remove(this.CSS.hidden),this.moveToTarget(),this.getTargetParams()}},{key:"removeTargetParams",value:function(){this.tree.buttons.left.classList.remove(this.CSS.buttons.active),this.tree.buttons.center.classList.remove(this.CSS.buttons.active),this.tree.buttons.right.classList.remove(this.CSS.buttons.active)}},{key:"hide",value:function(){this.removeTargetParams(),this.target=null,this.tree.toolbar.classList.add(this.CSS.hidden)}}]),t}();e.default=a}]);