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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DOMNodeCollection {\n  constructor(nodes) {\n    // this.nodes in an arr of html elements \n    this.nodes = nodes; \n  }\n\n  html(str) {\n    if (typeof str === \"string\") {\n      this.nodes.forEach(el => {\n        el.innerHTML = str;\n      });\n    } else {\n      return this.nodes[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.nodes.forEach(el => {\n      el.innerHTML = \"\"; \n    });\n  }\n\n  append(arg) {\n    if (typeof arg === \"string\") {\n      this.nodes.forEach(el => {\n        el.innerHTML += arg;\n      })\n    }else if (typeof arg === DOMNodeCollection) {\n      this.nodes.forEach(el => {\n        let clone = el.cloneNode();\n        clone.appendChild(clone.outerHTML);\n      })\n    } \n  }\n\n  attr(){\n    this.nodes[0].nodeName\n  }\n\n  addClass(cName){\n    this.nodes[0].className += ` ${cName}`;\n  }\n  \n  removeClass(cName){\n    let classString = this.nodes[0].className.split(' ') ;\n    for (let i = 0; i < classString.length; i++) {\n      if (classString[i] === cName) {\n        classString.splice(i, 1); \n      }\n    }\n    this.nodes[0].className = classString.join(' '); \n  }\n\n  children(){\n    let allChildren = [];\n    this.nodes.forEach(node => {\n      allChildren = allChildren.concat(Array.from(node.children));\n    })\n    return new DOMNodeCollection(allChildren); \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMNodeCollection);\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\n\nwindow.$l = function(n) {\n  const HTMLarray = [];\n  if(n instanceof HTMLElement){\n    HTMLarray.push(n);\n    return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](HTMLarray);\n  }\n\n  const matches = document.querySelectorAll(n); \n  return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Array.from(matches)); \n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });