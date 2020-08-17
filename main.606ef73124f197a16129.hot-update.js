webpackHotUpdate("main",{

/***/ "./node_modules/react-bootstrap/esm/Popover.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Popover.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ \"./node_modules/prop-types-extra/lib/isRequiredForA11y.js\");\n/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var _PopoverTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PopoverTitle */ \"./node_modules/react-bootstrap/esm/PopoverTitle.js\");\n/* harmony import */ var _PopoverContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PopoverContent */ \"./node_modules/react-bootstrap/esm/PopoverContent.js\");\n\n\n\n\n\n\n\n\nvar defaultProps = {\n  placement: 'right'\n};\nvar Popover = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {\n  var bsPrefix = _ref.bsPrefix,\n      placement = _ref.placement,\n      className = _ref.className,\n      style = _ref.style,\n      children = _ref.children,\n      content = _ref.content,\n      arrowProps = _ref.arrowProps,\n      _ = _ref.popper,\n      _1 = _ref.show,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"bsPrefix\", \"placement\", \"className\", \"style\", \"children\", \"content\", \"arrowProps\", \"popper\", \"show\"]);\n\n  var decoratedBsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__[\"useBootstrapPrefix\"])(bsPrefix, 'popover');\n\n  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],\n      primaryPlacement = _ref2[0];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: ref,\n    role: \"tooltip\",\n    style: style,\n    \"x-placement\": primaryPlacement,\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, decoratedBsPrefix, primaryPlacement && \"bs-popover-\" + primaryPlacement)\n  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"arrow\"\n  }, arrowProps)), content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PopoverContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, children) : children);\n});\nPopover.defaultProps = defaultProps;\nPopover.Title = _PopoverTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nPopover.Content = _PopoverContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popover);\n\n//# sourceURL=webpack:///./node_modules/react-bootstrap/esm/Popover.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/PopoverContent.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/PopoverContent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n\n\n\n\n\nvar PopoverContent = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {\n  var _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'div' : _ref$as,\n      bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      children = _ref.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"as\", \"bsPrefix\", \"className\", \"children\"]);\n\n  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[\"useBootstrapPrefix\"])(bsPrefix, 'popover-body');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: ref\n  }, props, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)\n  }), children);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopoverContent);\n\n//# sourceURL=webpack:///./node_modules/react-bootstrap/esm/PopoverContent.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/PopoverTitle.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/PopoverTitle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n\n\n\n\n\nvar PopoverTitle = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {\n  var _ref$as = _ref.as,\n      Component = _ref$as === void 0 ? 'div' : _ref$as,\n      bsPrefix = _ref.bsPrefix,\n      className = _ref.className,\n      children = _ref.children,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"as\", \"bsPrefix\", \"className\", \"children\"]);\n\n  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[\"useBootstrapPrefix\"])(bsPrefix, 'popover-header');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: ref\n  }, props, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bsPrefix, className)\n  }), children);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopoverTitle);\n\n//# sourceURL=webpack:///./node_modules/react-bootstrap/esm/PopoverTitle.js?");

/***/ }),

/***/ "./src/components/DonationForm/DonationForm.jsx":
/*!******************************************************!*\
  !*** ./src/components/DonationForm/DonationForm.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar */ \"./src/components/ProgressBar/index.js\");\n/* harmony import */ var _DonateInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DonateInput */ \"./src/components/DonateInput/index.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Overlay */ \"./node_modules/react-bootstrap/esm/Overlay.js\");\n/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Tooltip */ \"./node_modules/react-bootstrap/esm/Tooltip.js\");\n/* harmony import */ var react_bootstrap_Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Popover */ \"./node_modules/react-bootstrap/esm/Popover.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var tooltipTarget = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // Normally, these values would be retrived from and set by an API\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(5),\n      _useState2 = _slicedToArray(_useState, 2),\n      valueToDonate = _useState2[0],\n      setValueToDonate = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      numberOfDonations = _useState4[0],\n      setNumberOfDonations = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState6 = _slicedToArray(_useState5, 2),\n      totalAmountDonated = _useState6[0],\n      setTotalAmountDonated = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      showTooltip = _useState8[0],\n      setShowTooltip = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // setTimeout(() => {\n    setShowTooltip(true);\n    console.log('tooltip', showTooltip); // }, 2000)\n  }, [totalAmountDonated]);\n\n  var donate = function donate() {\n    setShowTooltip(false);\n    setTotalAmountDonated(totalAmountDonated + valueToDonate);\n    console.log('numberr of donations', numberOfDonations);\n    setNumberOfDonations(numberOfDonations + 1);\n  };\n\n  var changeValue = function changeValue(e) {\n    setValueToDonate(parseInt(e.target.value));\n  };\n\n  var formatBody = function formatBody() {\n    return \"Join the \".concat(numberOfDonations, \" \").concat(numberOfDonations === 1 ? 'person' : 'people', \" that \").concat(numberOfDonations === 1 ? 'has' : 'have', \" already supported this project.\");\n  };\n\n  console.log('tooltip target', tooltipTarget);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"donation-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    target: tooltipTarget.current,\n    show: showTooltip,\n    placement: \"top\",\n    rootClose: true\n  }, function () {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      target: tooltipTarget.current,\n      show: showTooltip,\n      placement: \"top\"\n    }, \"We need $\".concat(5000 - totalAmountDonated, \" more!\"));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    progressLevel: totalAmountDonated\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    ref: tooltipTarget\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"text-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"header-text\"\n  }, \"Only four days left to fund this project\"), numberOfDonations > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, formatBody()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Be the first to donate!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonateInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    valueToDonate: valueToDonate,\n    changeValue: changeValue,\n    donate: donate\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/DonationForm/DonationForm.jsx?");

/***/ })

})