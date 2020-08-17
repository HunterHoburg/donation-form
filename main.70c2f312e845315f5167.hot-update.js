webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./src/App.css":
/*!***********************************************!*\
  !*** ./node_modules/css-loader!./src/App.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap);\", \"\"]);\n\n// module\nexports.push([module.i, \".donation-form {\\n  margin: 120px;\\n  max-width: 332px;\\n}\\n\\n.donation-form__header-text {\\n  font-family: 'Poppins';\\n  font-weight: 700;\\n}\\n\\n.donation-form__body-text {\\n  font-family: 'IBM Plex Sans', sans-serif;\\n  margin: 32px 0;\\n}\\n\\n.donation-form__progress-bar {\\n  width: 99.8%;\\n  margin: 0 auto -5px auto;\\n  background-color: #b6f2e4;\\n}\\n\\n.donation-form__button {\\n  /* All of these important uses could be circumvented by doing a proper theming */\\n  background-color: #1bddb1 !important;\\n  color: white !important;\\n  border: none !important;\\n  font-family: 'Poppins';\\n  font-weight: 500;\\n}\\n\\n.donation-form__input-adornment {\\n  background-color: white !important;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/App.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/components/DonateInput/DonateInput.jsx":
/*!****************************************************!*\
  !*** ./src/components/DonateInput/DonateInput.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/InputGroup */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"./node_modules/react-bootstrap/esm/FormControl.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var changeValue = _ref.changeValue,\n      valueToDonate = _ref.valueToDonate,\n      donate = _ref.donate;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Prepend, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Text, {\n    className: \"donation-form__input-adornment\"\n  }, \"$\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"aria-describedby\": \"basic-addon1\",\n    value: valueToDonate,\n    onChange: changeValue\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Append, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"donation-form__button\",\n    variant: \"outline-secondary\",\n    onClick: donate\n  }, \"Give Now\")));\n});\n\n//# sourceURL=webpack:///./src/components/DonateInput/DonateInput.jsx?");

/***/ })

})