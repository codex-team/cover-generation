<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Cover module entry poit
 */
module.exports = function () {

  'use strict';

  /**
   * Requre CSS
   */

  __webpack_require__(1);

  var ui = __webpack_require__(2);

  /**
   * Initialization method
   * @param  {object} initParams
   * @param  {string} initParams.containterId - in that Node we will render Editor
   */
  var init = function init(initParams) {

    // initialization

  };

  /**
   * Destories UI
   */
  var destroy = function destroy() {};

  return {
    init: init,
    destroy: destroy
  };
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toolbar = __webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
=======
var codex=codex||{};codex.cover=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";e.exports=function(){n(1);var e=n(2),t=n(5).default;return{init:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.assert(n.containerId,"Container id is missed");var r=document.getElementById(n.containerId);if(!r)return void console.warn("Container was not found by id %o",n.containerId);var o=e.create(r);new t({canvas:o.canvas})},destroy:function(){}}}()},function(e,t){},function(e,t,n){"use strict";e.exports=function(){function e(){return l.canvasWrapper=c.make("div",s.canvasWrapper),l.canvas=c.svg("svg",{width:"100%",height:"100%"}),l.mainRectangle=c.svg("rect",{width:"100%",height:"100%",fill:"#FFFFFF"}),l.canvas.classList.add(s.canvas),l.canvas.appendChild(l.mainRectangle),l.canvasWrapper.appendChild(l.canvas),l.canvasWrapper}function t(){console.log("saveButtonClicked")}function r(e){var t=e.target,n=t.dataset.size;console.log("resize to: %o",n)}function o(e){var t=e.target,n=t.dataset.object;console.log("toggle: %o",n)}function a(){l.controls.saveButton.addEventListener("click",t),l.controls.resizeSqure.addEventListener("click",r),l.controls.resizeVertical.addEventListener("click",r),l.controls.resizeHorisontal.addEventListener("click",r),l.controls.pictureButton.addEventListener("click",o),l.controls.mainTextButton.addEventListener("click",o),l.controls.headlineButton.addEventListener("click",o)}function i(t){var n=c.make("div",s.editor),r=c.make("div",s.controls),o=e();l.controls.resizeSqure=c.make("span",[s.resizeButton,s.resizeButtonSquare]),l.controls.resizeVertical=c.make("span",[s.resizeButton,s.resizeButtonVertical]),l.controls.resizeHorisontal=c.make("span",[s.resizeButton,s.resizeButtonHorisontal]),l.controls.saveButton=c.make("span",[s.controlButton,s.controlButtonSave]),l.controls.pictureButton=c.make("span",s.controlButton,{textContent:"Image"}),l.controls.mainTextButton=c.make("span",s.controlButton,{textContent:"Main Text"}),l.controls.headlineButton=c.make("span",s.controlButton,{textContent:"Headline"}),l.controls.resizeSqure.dataset.size="square",l.controls.resizeVertical.dataset.size="vertical",l.controls.resizeHorisontal.dataset.size="horisontal",l.controls.mainTextButton.dataset.object="mainText",l.controls.headlineButton.dataset.object="headline",l.controls.pictureButton.dataset.object="picture";for(var i in l.controls)r.appendChild(l.controls[i]);return n.appendChild(r),n.appendChild(o),t.appendChild(n),a(),l}var c=n(3).default,s={editor:"cover-editor",controls:"cover-editor__controls",resizeButton:"cover-editor__resize-canvas",resizeButtonActive:"cover-editor__resize-canvas--active",resizeButtonSquare:"cover-editor__resize-canvas--square",resizeButtonVertical:"cover-editor__resize-canvas--vertical",resizeButtonHorisontal:"cover-editor__resize-canvas--horisontal",controlButton:"cover-editor__control-button",controlButtonSave:"cover-editor__control-button--save",canvasWrapper:"cover-editor__canvas-wrapper",canvas:"cover-editor__canvas"},l={canvasWrapper:null,canvas:null,mainRectangle:null,controls:{resizeSqure:null,resizeVertical:null,resizeHorisontal:null,saveButton:null,pictureButton:null,mainTextButton:null,headlineButton:null}};return{create:i}}()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){o(this,e)}return a(e,null,[{key:"make",value:function(e,t,n){var o=document.createElement(e);if(Array.isArray(t)){var a;(a=o.classList).add.apply(a,r(t))}else t&&o.classList.add(t);for(var i in n)o[i]=n[i];return o}},{key:"svg",value:function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg",e);for(var r in t)n.setAttributeNS(null,r,t[r]);return n}}]),e}();t.default=i},,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(t){r(this,e),console.log("Canvas module created with params: %o",t.canvas)};t.default=o}]);
>>>>>>> master
