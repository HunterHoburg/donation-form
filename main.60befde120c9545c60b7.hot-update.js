webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./src/App.css":
/*!***********************************************!*\
  !*** ./node_modules/css-loader!./src/App.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap);\", \"\"]);\n\n// module\nexports.push([module.i, \".donation-form {\\n  margin: 120px;\\n  max-width: 332px;\\n}\\n\\n.donation-form__header-text {\\n  font-family: 'Poppins';\\n  font-weight: 700;\\n}\\n\\n.donation-form__body-text {\\n  font-family: 'IBM Plex Sans', sans-serif;\\n  margin: 32px 0;\\n}\\n\\n.donation-form__progress-bar {\\n  width: 99.8%;\\n  margin: 0 auto -5px auto;\\n  background-color: #b6f2e4;\\n}\\n\\n.donation-form__button {\\n  /* All of these important uses could be circumvented by doing a proper theming */\\n  background-color: #1bddb1 !important;\\n  color: white !important;\\n  border: none !important;\\n  font-family: 'Poppins';\\n  font-weight: 500;\\n}\\n\\n.progress-ac-info {\\n  background-color: purple;\\n  color: white;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/App.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/components/ProgressBar/ProgressBar.jsx":
/*!****************************************************!*\
  !*** ./src/components/ProgressBar/ProgressBar.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ \"./node_modules/react-bootstrap/esm/ProgressBar.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {\n  var progressLevel = _ref.progressLevel;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"donation-form__progress-bar\",\n    now: progressLevel,\n    max: 5000,\n    min: 0,\n    variant: \"ac-info\",\n    ref: ref\n  });\n}));\n\n//# sourceURL=webpack:///./src/components/ProgressBar/ProgressBar.jsx?");

/***/ })

})