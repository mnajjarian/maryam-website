module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Article.tsx":
/*!********************************!*\
  !*** ./components/Article.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Article.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Article = () => __jsx("section", {
  className: "jsx-3663570788" + " " + "articles",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-3663570788",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "recent articles"), __jsx("span", {
  className: "jsx-3663570788",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3663570788",
  __self: undefined
}, ".articles.jsx-3663570788{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh;background:#8e9eab;background:-webkit-linear-gradient(to right,#eef2f3,#8e9eab);background:linear-gradient(to right,#eef2f3,#8e9eab);}h2.jsx-3663570788{font-size:1.5rem;text-transform:uppercase;padding:16px 8px;margin-bottom:0;color:rgba(39,34,62,1);}.articles.jsx-3663570788>span.jsx-3663570788{display:block;width:116px;height:5px;border-top:2px solid rgba(39,34,62,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0FydGljbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlnQixBQUdzQixBQVNJLEFBT0gsY0FDRixHQVBhLFNBUWQsV0FDOEIsS0FSeEIsaUJBQ0QsZUFYTSxDQVlJLEFBTzVCLHVCQU5BLHNEQVpxQiw2RkFDRixpQkFDRSxtQkFDNEMsNkRBQ1IscURBQ3pEIiwiZmlsZSI6Ii9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0FydGljbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXJ0aWNsZSA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aWNsZXNcIj5cbiAgICA8aDI+cmVjZW50IGFydGljbGVzPC9oMj5cbiAgICA8c3Bhbj48L3NwYW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmFydGljbGVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4ZTllYWI7XG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVmMmYzLCAjOGU5ZWFiKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVmMmYzLCAjOGU5ZWFiKTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBjb2xvcjogcmdiYSgzOSwgMzQsIDYyLCAxKTtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlcyA+IHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDExNnB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMzksIDM0LCA2MiwgMSk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl19 */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Article.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/Biography.tsx":
/*!**********************************!*\
  !*** ./components/Biography.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Biography.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Biography = () => __jsx("section", {
  className: "jsx-2566404653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2566404653" + " " + "biography",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("img", {
  src: "../static/images/bio-image.jpg",
  className: "jsx-2566404653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2566404653" + " " + "biography__content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2566404653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "maryam tavakkoli"), __jsx("span", {
  className: "jsx-2566404653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2566404653" + " " + "biography__text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-2566404653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "I am a second-year master student in \"Cloud computing and services\" with minors in \"Entrepreneurship and business\". I am doing my studies in \u201CEIT Digital Master School\u201D, where I will obtain a double-degree from two universities which I have studied in: Aalto University in Finland, and TU Delft in the Netherlands. Currently, I am working at Nokia Bell Labs, in Finland, as a thesis writer. In this position, I am conducting a research study on containerizing of a current telco IoT publish/subscribe application, and suitability of Kubernetes to be used for its deployment. Docker, Kubernetes, Nokia\u2019s cloud environment (NESC), Apache Kafka and GIT are technologies and tools which I am using during my work in Nokia.")), __jsx("div", {
  className: "jsx-2566404653" + " " + "biography__button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: "/about",
  className: "jsx-2566404653",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "read more")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2566404653",
  __self: undefined
}, "section.jsx-2566404653{background:url(\"../static/images/Light-blue.jpg\") no-repeat center center fixed;background-size:cover;}.biography.jsx-2566404653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;min-height:100vh;color:#292b5c;}.biography.jsx-2566404653>img.jsx-2566404653{height:400px;width:350px;border-radius:50%;padding:40px;}.biography__content.jsx-2566404653{width:40%;}.biography__content.jsx-2566404653>h2.jsx-2566404653{font-size:1.8rem;font-weight:300;text-transform:capitalize;}.biography__text.jsx-2566404653>p.jsx-2566404653{word-wrap:break-word;overflow-wrap:break-word;font-size:1rem;color:#27223e;line-height:1.5rem;}.biography__content.jsx-2566404653>span.jsx-2566404653{display:block;width:116px;height:5px;border-top:2px solid rgba(39,34,62,1);}.biography__button.jsx-2566404653{height:40px;min-height:19px;width:142px;border:2px solid #27223e;color:#27223e;padding:4px 12px;font-size:0.7rem;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.biography__button.jsx-2566404653>a.jsx-2566404653{-webkit-text-decoration:none;text-decoration:none;text-transform:capitalize;font-size:1rem;white-space:nowrap;color:initial;}.biography__button.jsx-2566404653:hover{border-color:#d1cc73;}.biography__button.jsx-2566404653:hover a.jsx-2566404653{color:#d1cc73;}@media (max-width:768px){.biography.jsx-2566404653{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.biography__content.jsx-2566404653{width:100%;margin:0 auto;padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0Jpb2dyYXBoeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQixBQUl1QixBQUlELEFBUUEsQUFNSCxBQUdPLEFBS0ksQUFPUCxBQU1GLEFBYVMsQUFPQSxBQUdQLEFBSVUsQUFHWCxVQWxEZixDQW1Ea0IsQ0E5QkEsQ0EzQkosQ0FxQkEsQUE2QmQsR0F6Q2tCLElBS1MsQUFpQzNCLElBOUNvQixBQXlESCxDQXBDSixFQU1DLEtBbEJjLElBYWUsQ0FvQ3pDLEVBOUJ5QixHQTNCWixHQWFFLElBeUJXLE1BckM1QixHQVFBLEVBS2dCLElBY0EsU0F0Q1MsQ0F5QkosQUFPckIsQ0FpQmlCLEVBYWYsQ0F2QmlCLENBM0NLLFdBc0RILEdBeEJyQixFQWNtQixNQTNDbkIsUUFzRGdCLEdBVkMsV0FXakIsSUFWZSw2Q0F6Q00sNkJBMENJLGdFQXpDWixXQUNNLGlCQUNILE9Bd0NLLE9BdkNyQixzRkF3Q0EiLCJmaWxlIjoiL1VzZXJzL01laGRpL21hcnlhbS13ZWJzaXRlLWZyb250L2NvbXBvbmVudHMvQmlvZ3JhcGh5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJpb2dyYXBoeSA9ICgpID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiaW9ncmFwaHlcIj5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9iaW8taW1hZ2UuanBnXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvZ3JhcGh5X19jb250ZW50XCI+XG4gICAgICAgIDxoMj5tYXJ5YW0gdGF2YWtrb2xpPC9oMj5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb2dyYXBoeV9fdGV4dFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSSBhbSBhIHNlY29uZC15ZWFyIG1hc3RlciBzdHVkZW50IGluIFwiQ2xvdWQgY29tcHV0aW5nIGFuZCBzZXJ2aWNlc1wiXG4gICAgICAgICAgICB3aXRoIG1pbm9ycyBpbiBcIkVudHJlcHJlbmV1cnNoaXAgYW5kIGJ1c2luZXNzXCIuIEkgYW0gZG9pbmcgbXlcbiAgICAgICAgICAgIHN0dWRpZXMgaW4g4oCcRUlUIERpZ2l0YWwgTWFzdGVyIFNjaG9vbOKAnSwgd2hlcmUgSSB3aWxsIG9idGFpbiBhXG4gICAgICAgICAgICBkb3VibGUtZGVncmVlIGZyb20gdHdvIHVuaXZlcnNpdGllcyB3aGljaCBJIGhhdmUgc3R1ZGllZCBpbjogQWFsdG9cbiAgICAgICAgICAgIFVuaXZlcnNpdHkgaW4gRmlubGFuZCwgYW5kIFRVIERlbGZ0IGluIHRoZSBOZXRoZXJsYW5kcy4gQ3VycmVudGx5LCBJXG4gICAgICAgICAgICBhbSB3b3JraW5nIGF0IE5va2lhIEJlbGwgTGFicywgaW4gRmlubGFuZCwgYXMgYSB0aGVzaXMgd3JpdGVyLiBJblxuICAgICAgICAgICAgdGhpcyBwb3NpdGlvbiwgSSBhbSBjb25kdWN0aW5nIGEgcmVzZWFyY2ggc3R1ZHkgb24gY29udGFpbmVyaXppbmcgb2ZcbiAgICAgICAgICAgIGEgY3VycmVudCB0ZWxjbyBJb1QgcHVibGlzaC9zdWJzY3JpYmUgYXBwbGljYXRpb24sIGFuZCBzdWl0YWJpbGl0eVxuICAgICAgICAgICAgb2YgS3ViZXJuZXRlcyB0byBiZSB1c2VkIGZvciBpdHMgZGVwbG95bWVudC4gRG9ja2VyLCBLdWJlcm5ldGVzLFxuICAgICAgICAgICAgTm9raWHigJlzIGNsb3VkIGVudmlyb25tZW50IChORVNDKSwgQXBhY2hlIEthZmthIGFuZCBHSVQgYXJlXG4gICAgICAgICAgICB0ZWNobm9sb2dpZXMgYW5kIHRvb2xzIHdoaWNoIEkgYW0gdXNpbmcgZHVyaW5nIG15IHdvcmsgaW4gTm9raWEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaW9ncmFwaHlfX2J1dHRvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5yZWFkIG1vcmU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL3N0YXRpYy9pbWFnZXMvTGlnaHQtYmx1ZS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlclxuICAgICAgICAgIGNlbnRlciBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICAgIC5iaW9ncmFwaHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBjb2xvcjogIzI5MmI1YztcbiAgICAgIH1cbiAgICAgIC5iaW9ncmFwaHkgPiBpbWcge1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgIH1cbiAgICAgIC5iaW9ncmFwaHlfX2NvbnRlbnQge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgfVxuICAgICAgLmJpb2dyYXBoeV9fY29udGVudCA+IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgICAgLmJpb2dyYXBoeV9fdGV4dCA+IHAge1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6ICMyNzIyM2U7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X19jb250ZW50ID4gc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTE2cHg7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgzOSwgMzQsIDYyLCAxKTtcbiAgICAgIH1cbiAgICAgIC5iaW9ncmFwaHlfX2J1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTlweDtcbiAgICAgICAgd2lkdGg6IDE0MnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjcyMjNlO1xuICAgICAgICBjb2xvcjogIzI3MjIzZTtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmJpb2dyYXBoeV9fYnV0dG9uID4gYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X19idXR0b246aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNkMWNjNzM7XG4gICAgICB9XG4gICAgICAuYmlvZ3JhcGh5X19idXR0b246aG92ZXIgYSB7XG4gICAgICAgIGNvbG9yOiAjZDFjYzczO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5iaW9ncmFwaHkge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLmJpb2dyYXBoeV9fY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmlvZ3JhcGh5O1xuIl19 */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Biography.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Biography);

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Footer.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => __jsx("section", {
  className: "jsx-1438855849" + " " + "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-1438855849",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1438855849",
  __self: undefined
}, ".footer.jsx-1438855849{min-height:20vh;background:#000046;background:-webkit-linear-gradient(to right,#1cb5e0,#000046);background:linear-gradient(to right,#1cb5e0,#000046);}ul.jsx-1438855849{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0Zvb3Rlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2dCLEFBR3lCLEFBTVAsU0FDWCxPQU5xQixtQkFDNEMsNkRBQ1IscURBQ3pEIiwiZmlsZSI6Ii9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDx1bD48L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mb290ZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAyMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDQ2O1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFjYjVlMCwgIzAwMDA0Nik7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFjYjVlMCwgIzAwMDA0Nik7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Footer.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.tsx");
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Header.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => {
  return __jsx("div", {
    className: "jsx-3195484572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3195484572" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("header", {
    className: "jsx-3195484572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3195484572" + " " + "header__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3195484572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    className: "jsx-3195484572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "maryam tavakkoli")), __jsx("span", {
    className: "jsx-3195484572",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "cloud engineer"))), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3195484572",
    __self: undefined
  }, "header.jsx-3195484572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:440px;background:#4b6cb7;background-image:url(\"../static/images/header2.jpeg\");background-position:center;background-repeat:no-repeat;background-size:cover;}.header__content.jsx-3195484572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#292b5c;}.header__content.jsx-3195484572>h1.jsx-3195484572{margin:0;}h1.jsx-3195484572>a.jsx-3195484572{-webkit-text-decoration:none;text-decoration:none;padding:0;font:italic normal normal 45px/1.4em \"times new roman\",times,serif;font-weight:600;text-transform:capitalize;color:#292b5c;}.header__content.jsx-3195484572>span.jsx-3195484572{padding:0;font-size:13px;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;cursor:pointer;}@media (max-width:768px){header.jsx-3195484572{height:300px;}h1.jsx-3195484572>a.jsx-3195484572{font-size:1.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUd3QixBQVlBLEFBT0osQUFHWSxBQVFYLEFBUUssQUFHSSxTQXJCckIsQ0FXaUIsR0FRZixJQUdBLFFBVnlCLHlCQVRmLEFBVVcsVUFUZ0QsY0F2QmxELEFBWUcscURBWU4sZ0JBQ1UsUUFRWCxDQXBCUSxjQXFCekIsQ0FqQ3lCLEVBeUJULGNBQ2hCLG9FQWJxQixlQVpSLFdBQ0UsYUFDTSxtQkFDbUMsbUNBVXhDLGNBQ2hCLEtBVjZCLDJCQUNDLDRCQUNOLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvTWVoZGkvbWFyeWFtLXdlYnNpdGUtZnJvbnQvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+bWFyeWFtIHRhdmFra29saTwvYT5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c3Bhbj5jbG91ZCBlbmdpbmVlcjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM0YjZjYjc7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vc3RhdGljL2ltYWdlcy9oZWFkZXIyLmpwZWdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyX19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzI5MmI1YztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyX19jb250ZW50ID4gaDEge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoMSA+IGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQ6IGl0YWxpYyBub3JtYWwgbm9ybWFsIDQ1cHgvMS40ZW0gXCJ0aW1lcyBuZXcgcm9tYW5cIiwgdGltZXMsIHNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgY29sb3I6ICMyOTJiNWM7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlcl9fY29udGVudCA+IHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEgPiBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Header.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Meta.tsx":
/*!*****************************!*\
  !*** ./components/Meta.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Meta.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "jsx-3402436449",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-3402436449",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Maryam Tavakkoli"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  className: "jsx-3402436449",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-3402436449",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap",
  rel: "stylesheet",
  className: "jsx-3402436449",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3402436449",
  __self: undefined
}, "*,*:before,*:after{box-sizing:border-box;}body{margin:0;padding:0;color:#fff;height:100vh;font-size:10px;font-family:\"Open Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL01ldGEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF1QixBQUsrQixBQUdiLFNBQ0MsVUFFQyxHQUxiLFFBTWUsYUFDRSxlQUNxQixtQ0FDdEMiLCJmaWxlIjoiL1VzZXJzL01laGRpL21hcnlhbS13ZWJzaXRlLWZyb250L2NvbXBvbmVudHMvTWV0YS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5NYXJ5YW0gVGF2YWtrb2xpPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgID48L2xpbms+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAqLFxuICAgICAgKjpiZWZvcmUsXG4gICAgICAqOmFmdGVyIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC8vYmFja2dyb3VuZDogIzAwMDA0NjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Meta.tsx */")));

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Mehdi/maryam-website-front/components/Navbar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




const Nav = ({
  toggle
}) => __jsx("div", {
  className: "nav__wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("nav", {
  id: "myHeader",
  className: "jsx-703098531" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    nav__wrapper: true,
    show: !toggle
  }) || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-703098531",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-703098531",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-703098531",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "about me")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-703098531",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "poblications")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-703098531",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "contact me")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-703098531",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Blog"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "703098531",
  __self: undefined
}, ".sticky.jsx-703098531{position:fixed;top:0;}nav.jsx-703098531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:50px;background:#4b6cb7;background:-webkit-linear-gradient(to right,#182848,#4b6cb7);background:linear-gradient(to right,#182848,#4b6cb7);}nav.jsx-703098531>ul.jsx-703098531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-703098531{-webkit-text-decoration:none;text-decoration:none;text-transform:capitalize;color:white;padding:8px 16px;font-size:1rem;}a.jsx-703098531:hover{color:#d1cc73;}@media (max-width:768px){.show.jsx-703098531{display:none;}.sticky.jsx-703098531{display:none;}nav.jsx-703098531{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:30%;height:300px;}nav.jsx-703098531>ul.jsx-703098531{padding:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL05hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJrQixBQUcwQixBQUlGLEFBU0EsQUFJUSxBQU9QLEFBSUMsQUFHQSxBQUdVLEFBU2IsVUFDWSxHQWZ4QixBQUdBLENBUEYsQ0F4QlEsTUFDUiw2QkFnQjRCLHdCQWJQLEFBU0EsRUFLUCxZQUNLLEFBeUJRLFdBVkwsTUFkTCxZQWVQLEdBZFYsR0FlVyxPQUNHLFVBQ0csYUFDZixjQWxDVyxBQVNiLFdBUmMsWUFDTyxPQXNDbkIsWUFyQytELDZEQUNSLHFEQUN6RCIsImZpbGUiOiIvVXNlcnMvTWVoZGkvbWFyeWFtLXdlYnNpdGUtZnJvbnQvY29tcG9uZW50cy9OYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBOYXYgPSAoeyB0b2dnbGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fd3JhcHBlclwiPlxuICAgIDxuYXZcbiAgICAgIGlkPVwibXlIZWFkZXJcIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgbmF2X193cmFwcGVyOiB0cnVlLFxuICAgICAgICBzaG93OiAhdG9nZ2xlXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8dWw+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+aG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+YWJvdXQgbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPGE+cG9ibGljYXRpb25zPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhPmNvbnRhY3QgbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPGE+QmxvZzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN0aWNreSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzRiNmNiNztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE4Mjg0OCwgIzRiNmNiNyk7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTgyODQ4LCAjNGI2Y2I3KTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgPiB1bCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZDFjYzczO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGlja3kge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5hdiA+IHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIDwvZGl2PlxuKTtcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SGVhZGVyXCIpO1xuICAgIGNvbnN0IHN0aWNreSA9IGhlYWRlci5vZmZzZXRUb3A7XG4gICAgY29uc3Qgc2Nyb2xsQ2FsbEJhY2sgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gc3RpY2t5KSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG4gICAgICB9XG4gICAgfSkgYXMgYW55O1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDYWxsQmFjaykgYXMgYW55O1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdiB0b2dnbGU9e3RvZ2dsZX0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICBtZW51X19idXR0b246IHRydWUsXG4gICAgICAgICAgY2hhbmdlOiB0b2dnbGVcbiAgICAgICAgfSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudV9fYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdl9fd3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnVfX2J1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWVudV9fYnV0dG9uID4gZGl2IHtcbiAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZSA+IDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZSA+IDpudGgtY2hpbGQoMikge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZSA+IDpudGgtY2hpbGQoMykge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLm1lbnVfX2J1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Navbar.tsx */")));

const Navbar = () => {
  const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-1757859140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(Nav, {
    toggle: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("div", {
    onClick: () => setToggle(!toggle),
    className: "jsx-1757859140" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      menu__button: true,
      change: toggle
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1757859140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1757859140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1757859140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1757859140",
    __self: undefined
  }, ".menu__button.jsx-1757859140{display:none;}.nav__wrapper.jsx-1757859140{height:50px;}.menu__button.jsx-1757859140{position:absolute;top:10px;left:10px;cursor:pointer;}.menu__button.jsx-1757859140>div.jsx-1757859140{width:35px;height:5px;background-color:black;margin:6px 0;-webkit-transition:0.4s;transition:0.4s;}.change.jsx-1757859140>.jsx-1757859140:nth-child(1){-webkit-transform:rotate(-45deg) translate(-9px,6px);-ms-transform:rotate(-45deg) translate(-9px,6px);transform:rotate(-45deg) translate(-9px,6px);}.change.jsx-1757859140>.jsx-1757859140:nth-child(2){opacity:0;}.change.jsx-1757859140>.jsx-1757859140:nth-child(3){-webkit-transform:rotate(45deg) translate(-8px,-8px);-ms-transform:rotate(45deg) translate(-8px,-8px);transform:rotate(45deg) translate(-8px,-8px);}@media (max-width:768px){.menu__button.jsx-1757859140{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NZWhkaS9tYXJ5YW0td2Vic2l0ZS1mcm9udC9jb21wb25lbnRzL05hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hrQixBQUd3QixBQUlELEFBSU0sQUFNUCxBQU9tQyxBQUdwQyxBQUdvQyxBQUk5QixVQU5sQixDQVZhLENBVmIsQ0FKQSxDQStCRSxJQXZCUyxJQU9jLEtBTmIsVUFDSyxRQU1GLE9BTGYsTUFNa0Isd0NBQ2xCLGlEQUdBLEFBTUEiLCJmaWxlIjoiL1VzZXJzL01laGRpL21hcnlhbS13ZWJzaXRlLWZyb250L2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmF2ID0gKHsgdG9nZ2xlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3dyYXBwZXJcIj5cbiAgICA8bmF2XG4gICAgICBpZD1cIm15SGVhZGVyXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgIG5hdl9fd3JhcHBlcjogdHJ1ZSxcbiAgICAgICAgc2hvdzogIXRvZ2dsZVxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPHVsPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPmhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhPmFib3V0IG1lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhPnBvYmxpY2F0aW9uczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICA8YT5jb250YWN0IG1lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhPkJsb2c8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zdGlja3kge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM0YjZjYjc7XG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxODI4NDgsICM0YjZjYjcpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE4Mjg0OCwgIzRiNmNiNyk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2ID4gdWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2QxY2M3MztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuc2hvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RpY2t5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuYXYgPiB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICA8L2Rpdj5cbik7XG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUhlYWRlclwiKTtcbiAgICBjb25zdCBzdGlja3kgPSBoZWFkZXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbENhbGxCYWNrID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreSkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH0pIGFzIGFueTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2FsbEJhY2spIGFzIGFueTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXYgdG9nZ2xlPXt0b2dnbGV9IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgbWVudV9fYnV0dG9uOiB0cnVlLFxuICAgICAgICAgIGNoYW5nZTogdG9nZ2xlXG4gICAgICAgIH0pfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnVfX2J1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3dyYXBwZXIge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51X19idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVfX2J1dHRvbiA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFuZ2UgPiA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFuZ2UgPiA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFuZ2UgPiA6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5tZW51X19idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0= */\n/*@ sourceURL=/Users/Mehdi/maryam-website-front/components/Navbar.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Biography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Biography */ "./components/Biography.tsx");
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Article */ "./components/Article.tsx");
var _jsxFileName = "/Users/Mehdi/maryam-website-front/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const App = () => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_components_Biography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(_components_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Mehdi/maryam-website-front/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map