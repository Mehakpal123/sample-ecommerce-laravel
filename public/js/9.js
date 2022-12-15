(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/Pages/Auth/Forgot.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Forgot.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _Shared_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/Auth */ \"./resources/js/Shared/Auth.js\");\n/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/LoadingButton */ \"./resources/js/Shared/LoadingButton.js\");\n/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/TextInput */ \"./resources/js/Shared/TextInput.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"usePage\"])(),\n      props = _usePage.props;\n\n  var errors = props.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      sending = _useState2[0],\n      setSending = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('forgot'),\n      _useState4 = _slicedToArray(_useState3, 2),\n      otpField = _useState4[0],\n      setOtpField = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    phone_number: '',\n    otp: '',\n    password: '',\n    password_confirmation: ''\n  }),\n      _useState6 = _slicedToArray(_useState5, 2),\n      values = _useState6[0],\n      setValues = _useState6[1];\n\n  function handleChange(e) {\n    var key = e.target.name;\n    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;\n    setValues(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));\n    });\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    setSending(true);\n    values['type'] = otpField;\n\n    if (otpField == 'password') {\n      values['page'] = 'login';\n      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__[\"Inertia\"].post(route('password.inertia'), values).then(function (res) {\n        //...\n        setSending(false);\n      });\n    } else {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(route('password'), values).then(function (res) {\n        Object(react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"toast\"])(res.data.message);\n        setSending(false);\n\n        if (res.data.type == 'success') {\n          if (otpField == 'forgot') {\n            setOtpField('otp');\n          }\n\n          if (otpField == 'otp') {\n            setOtpField('password');\n          }\n        }\n      });\n    }\n  } //...\n\n\n  function resendOtp() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(route('resend.otp'), values).then(function (res) {\n      Object(react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"toast\"])(res.data.message);\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Auth__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Forgot Password\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: \"main-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"authentication-page-wrapper max-562\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    id: \"login-form\"\n  }, otpField == 'forgot' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph form-heading text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Forgot Password\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph input-design\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    placeholder: \"Phone Number\",\n    name: \"phone_number\",\n    type: \"number\",\n    value: values.phone_number,\n    errors: errors.phone_number,\n    onChange: handleChange\n  }))), otpField == 'otp' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph form-heading text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Verification Code\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph input-design\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    placeholder: \"Code\",\n    name: \"otp\",\n    type: \"number\",\n    value: values.otp,\n    errors: errors.otp,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"javascript:void(0)\",\n    className: \"resendOtp\",\n    onClick: function onClick() {\n      return resendOtp();\n    }\n  }, \"Resend Code\")), otpField == 'password' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph form-heading text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Enter New Password\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph input-design\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    placeholder: \"Password\",\n    name: \"password\",\n    type: \"password\",\n    value: values.password,\n    errors: errors.password,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph input-design\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    placeholder: \"Confirm Password\",\n    name: \"password_confirmation\",\n    type: \"password\",\n    value: values.password_confirmation,\n    errors: errors.password_confirmation,\n    onChange: handleChange\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph submit-design text-center margin-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    type: \"submit\",\n    loading: sending,\n    className: \"pink-btn-design\"\n  }, otpField == 'forgot' && 'Forgot Password', otpField == 'otp' && 'Confirm Otp', otpField == 'password' && 'Change Password')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph signup-text text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"If Remember?\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"InertiaLink\"], {\n    href: route('signin')\n  }, \" Login\")))))))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvQXV0aC9Gb3Jnb3QuanM/YTUwMCJdLCJuYW1lcyI6WyJ1c2VQYWdlIiwicHJvcHMiLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwib3RwRmllbGQiLCJzZXRPdHBGaWVsZCIsInBob25lX251bWJlciIsIm90cCIsInBhc3N3b3JkIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImtleSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInR5cGUiLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJJbmVydGlhIiwicG9zdCIsInJvdXRlIiwidGhlbiIsInJlcyIsImF4aW9zIiwidG9hc3QiLCJkYXRhIiwibWVzc2FnZSIsInJlc2VuZE90cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFZSwyRUFBTTtBQUFBLGlCQUNGQSx3RUFBTyxFQURMO0FBQUEsTUFDWkMsS0FEWSxZQUNaQSxLQURZOztBQUFBLE1BRVpDLE1BRlksR0FFREQsS0FGQyxDQUVaQyxNQUZZOztBQUFBLGtCQUdVQyxzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQTtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxVQUhJOztBQUFBLG1CQUlZRixzREFBUSxDQUFDLFFBQUQsQ0FKcEI7QUFBQTtBQUFBLE1BSWJHLFFBSmE7QUFBQSxNQUlIQyxXQUpHOztBQUFBLG1CQU1RSixzREFBUSxDQUFDO0FBQ3BDSyxnQkFBWSxFQUFFLEVBRHNCO0FBRXBDQyxPQUFHLEVBQUUsRUFGK0I7QUFHcENDLFlBQVEsRUFBRSxFQUgwQjtBQUlwQ0MseUJBQXFCLEVBQUU7QUFKYSxHQUFELENBTmhCO0FBQUE7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QUVWLE9BRlY7QUFHQyxhQUFTLEVBQUM7QUFIWCxLQUtFRSxRQUFRLElBQUUsUUFBVixJQUFzQixpQkFMeEIsRUFNRUEsUUFBUSxJQUFFLEtBQVYsSUFBbUIsYUFOckIsRUFPRUEsUUFBUSxJQUFFLFVBQVYsSUFBd0IsaUJBUDFCLENBREQsQ0FwRUQsZUErRUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxtR0FDQywyREFBQyxvRUFBRDtBQUFhLFFBQUksRUFBRW9CLEtBQUssQ0FBQyxRQUFEO0FBQXhCLGNBREQsQ0FERCxDQS9FRCxDQURELENBREQsQ0FERCxDQUhELENBREEsQ0FERTtBQW1HSCxDQTlKRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9BdXRoL0ZvcmdvdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJztcbmltcG9ydCB7IEluZXJ0aWFMaW5rLCB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IEF1dGggZnJvbSAnQC9TaGFyZWQvQXV0aCc7XG5pbXBvcnQgTG9hZGluZ0J1dHRvbiBmcm9tICdAL1NoYXJlZC9Mb2FkaW5nQnV0dG9uJztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnQC9TaGFyZWQvVGV4dElucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCB7IHByb3BzIH0gPSB1c2VQYWdlKCk7XG5cdGNvbnN0IHsgZXJyb3JzIH0gPSBwcm9wcztcblx0Y29uc3QgW3NlbmRpbmcsIHNldFNlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbb3RwRmllbGQsIHNldE90cEZpZWxkXSA9IHVzZVN0YXRlKCdmb3Jnb3QnKTtcblx0XG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG5cdFx0cGhvbmVfbnVtYmVyOiAnJyxcblx0XHRvdHA6ICcnLFxuXHRcdHBhc3N3b3JkOiAnJyxcblx0XHRwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxuXHR9KTtcblx0XG5cdGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG5cdFx0Y29uc3Qga2V5ID0gZS50YXJnZXQubmFtZTtcblx0XHRjb25zdCB2YWx1ZSA9XG5cdFx0ZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZTtcblxuXHRcdHNldFZhbHVlcyh2YWx1ZXMgPT4gKHtcblx0XHRcdC4uLnZhbHVlcyxcblx0XHRcdFtrZXldOiB2YWx1ZVxuXHRcdH0pKTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2V0U2VuZGluZyh0cnVlKTtcblx0XHR2YWx1ZXNbJ3R5cGUnXSA9IG90cEZpZWxkO1xuXHRcdFxuXHRcdGlmKG90cEZpZWxkPT0ncGFzc3dvcmQnKXtcblx0XHRcdHZhbHVlc1sncGFnZSddID0gJ2xvZ2luJztcblx0XHRcdEluZXJ0aWEucG9zdChyb3V0ZSgncGFzc3dvcmQuaW5lcnRpYScpLCB2YWx1ZXMpLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHQvLy4uLlxuXHRcdFx0XHRzZXRTZW5kaW5nKGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIHtcdFx0XG5cdFx0XHRheGlvcy5wb3N0KHJvdXRlKCdwYXNzd29yZCcpLCB2YWx1ZXMpLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHR0b2FzdChyZXMuZGF0YS5tZXNzYWdlKTtcblx0XHRcdFx0c2V0U2VuZGluZyhmYWxzZSk7XG5cdFx0XHRcdGlmKHJlcy5kYXRhLnR5cGU9PSdzdWNjZXNzJyl7XG5cdFx0XHRcdFx0aWYob3RwRmllbGQ9PSdmb3Jnb3QnKXtcblx0XHRcdFx0XHRcdHNldE90cEZpZWxkKCdvdHAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYob3RwRmllbGQ9PSdvdHAnKXtcblx0XHRcdFx0XHRcdHNldE90cEZpZWxkKCdwYXNzd29yZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVx0XHRcblx0fVxuXHRcblx0Ly8uLi5cblx0ZnVuY3Rpb24gcmVzZW5kT3RwKCkge1xuXHRcdGF4aW9zLnBvc3Qocm91dGUoJ3Jlc2VuZC5vdHAnKSwgdmFsdWVzKS50aGVuKChyZXMpID0+IHtcblx0XHRcdHRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuXHRcdH0pO1xuXHR9XG4gIFxuICAgIHJldHVybiAoXG5cdFx0PEF1dGg+XG5cdFx0PGRpdj5cblx0XHRcdDxIZWxtZXQgdGl0bGU9XCJGb3Jnb3QgUGFzc3dvcmRcIiAvPlxuXHRcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF1dGhlbnRpY2F0aW9uLXBhZ2Utd3JhcHBlciBtYXgtNTYyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGlkPVwibG9naW4tZm9ybVwiPlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdHtvdHBGaWVsZD09J2ZvcmdvdCcgJiZcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBmb3JtLWhlYWRpbmcgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDI+Rm9yZ290IFBhc3N3b3JkPC9oMj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGggaW5wdXQtZGVzaWduXCI+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBob25lX251bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMucGhvbmVfbnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JzPXtlcnJvcnMucGhvbmVfbnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0e290cEZpZWxkPT0nb3RwJyAmJlxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBoIGZvcm0taGVhZGluZyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMj5WZXJpZmljYXRpb24gQ29kZTwvaDI+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBoIGlucHV0LWRlc2lnblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0SW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ29kZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwib3RwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlcy5vdHB9XG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnM9e2Vycm9ycy5vdHB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBvbkNsaWNrPXsoKSA9PiByZXNlbmRPdHAoKX0+UmVzZW5kIENvZGU8L2E+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR7b3RwRmllbGQ9PSdwYXNzd29yZCcgJiZcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBmb3JtLWhlYWRpbmcgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDI+RW50ZXIgTmV3IFBhc3N3b3JkPC9oMj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGggaW5wdXQtZGVzaWduXCI+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnM9e2Vycm9ycy5wYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBpbnB1dC1kZXNpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dElucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlcy5wYXNzd29yZF9jb25maXJtYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcnM9e2Vycm9ycy5wYXNzd29yZF9jb25maXJtYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBoIHN1Ym1pdC1kZXNpZ24gdGV4dC1jZW50ZXIgbWFyZ2luLWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8TG9hZGluZ0J1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtzZW5kaW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGluay1idG4tZGVzaWduXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtvdHBGaWVsZD09J2ZvcmdvdCcgJiYgJ0ZvcmdvdCBQYXNzd29yZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHR7b3RwRmllbGQ9PSdvdHAnICYmICdDb25maXJtIE90cCd9XG5cdFx0XHRcdFx0XHRcdFx0XHR7b3RwRmllbGQ9PSdwYXNzd29yZCcgJiYgJ0NoYW5nZSBQYXNzd29yZCd9XG5cdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBzaWdudXAtdGV4dCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPklmIFJlbWVtYmVyPyBcblx0XHRcdFx0XHRcdFx0XHRcdDxJbmVydGlhTGluayBocmVmPXtyb3V0ZSgnc2lnbmluJyl9PiBMb2dpbjwvSW5lcnRpYUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdDwvQXV0aD5cbiAgICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Auth/Forgot.js\n");

/***/ }),

/***/ "./resources/js/Shared/Auth.js":
/*!*************************************!*\
  !*** ./resources/js/Shared/Auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Auth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/progress */ \"./node_modules/@inertiajs/progress/dist/index.js\");\n/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Shared_AuthHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/AuthHeader */ \"./resources/js/Shared/AuthHeader.js\");\n/* harmony import */ var _Shared_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/Footer */ \"./resources/js/Shared/Footer.js\");\n/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/FlashMessages */ \"./resources/js/Shared/FlashMessages.js\");\n\n\n\n\n\n\n\nfunction Auth(_ref) {\n  var children = _ref.children;\n\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__[\"usePage\"])(),\n      props = _usePage.props;\n\n  var app = props.app;\n  _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__[\"InertiaProgress\"].init({\n    color: '#ed60bd',\n    includeCSS: true,\n    showSpinner: true\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    titleTemplate: \"%s | \".concat(app.name)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_AuthHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL0F1dGguanM/YzMzMCJdLCJuYW1lcyI6WyJBdXRoIiwiY2hpbGRyZW4iLCJ1c2VQYWdlIiwicHJvcHMiLCJhcHAiLCJJbmVydGlhUHJvZ3Jlc3MiLCJpbml0IiwiY29sb3IiLCJpbmNsdWRlQ1NTIiwic2hvd1NwaW5uZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsaUJBQ3hCQyx3RUFBTyxFQURpQjtBQUFBLE1BQ2xDQyxLQURrQyxZQUNsQ0EsS0FEa0M7O0FBQUEsTUFFbENDLEdBRmtDLEdBRTFCRCxLQUYwQixDQUVsQ0MsR0FGa0M7QUFJMUNDLHFFQUFlLENBQUNDLElBQWhCLENBQXFCO0FBQ3BCQyxTQUFLLEVBQUUsU0FEYTtBQUVwQkMsY0FBVSxFQUFFLElBRlE7QUFHcEJDLGVBQVcsRUFBRTtBQUhPLEdBQXJCO0FBTUEsc0JBQ0MscUZBQ0MsMkRBQUMsb0RBQUQ7QUFBUSxpQkFBYSxpQkFBVUwsR0FBRyxDQUFDTSxJQUFkO0FBQXJCLElBREQsZUFHQywyREFBQywwREFBRCxPQUhELGVBSUMsMkRBQUMsNkRBQUQsT0FKRCxFQUtFVCxRQUxGLGVBTUMsMkRBQUMsc0RBQUQsT0FORCxDQUREO0FBVUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvU2hhcmVkL0F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBJbmVydGlhUHJvZ3Jlc3MgfSBmcm9tICdAaW5lcnRpYWpzL3Byb2dyZXNzJztcbmltcG9ydCB7IHVzZVBhZ2UgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnO1xuXG5pbXBvcnQgQXV0aEhlYWRlciBmcm9tICdAL1NoYXJlZC9BdXRoSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9TaGFyZWQvRm9vdGVyJztcbmltcG9ydCBGbGFzaE1lc3NhZ2VzIGZyb20gJ0AvU2hhcmVkL0ZsYXNoTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4gfSkge1xuXHRjb25zdCB7IHByb3BzIH0gPSB1c2VQYWdlKCk7XG5cdGNvbnN0IHsgYXBwIH0gPSBwcm9wcztcblx0XG5cdEluZXJ0aWFQcm9ncmVzcy5pbml0KHtcblx0XHRjb2xvcjogJyNlZDYwYmQnLFxuXHRcdGluY2x1ZGVDU1M6IHRydWUsXG5cdFx0c2hvd1NwaW5uZXI6IHRydWUsXG5cdH0pO1xuXHRcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhlbG1ldCB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke2FwcC5uYW1lfWB9IC8+XG5cdFx0XHRcblx0XHRcdDxBdXRoSGVhZGVyIC8+XG5cdFx0XHQ8Rmxhc2hNZXNzYWdlcyAvPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Shared/Auth.js\n");

/***/ }),

/***/ "./resources/js/Shared/AuthHeader.js":
/*!*******************************************!*\
  !*** ./resources/js/Shared/AuthHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__[\"usePage\"])(),\n      props = _usePage.props;\n\n  var app = props.app;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    id: \"main-header\",\n    className: \"relative-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-logo text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__[\"InertiaLink\"], {\n    href: route('home'),\n    className: \"pink\"\n  }, app.name)));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL0F1dGhIZWFkZXIuanM/N2I2YiJdLCJuYW1lcyI6WyJ1c2VQYWdlIiwicHJvcHMiLCJhcHAiLCJyb3V0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsMkVBQU07QUFBQSxpQkFDRkEsd0VBQU8sRUFETDtBQUFBLE1BQ1pDLEtBRFksWUFDWkEsS0FEWTs7QUFBQSxNQUVaQyxHQUZZLEdBRUpELEtBRkksQ0FFWkMsR0FGWTtBQUlwQixzQkFDQztBQUFRLE1BQUUsRUFBQyxhQUFYO0FBQXlCLGFBQVMsRUFBQztBQUFuQyxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLG9FQUFEO0FBQWEsUUFBSSxFQUFFQyxLQUFLLENBQUMsTUFBRCxDQUF4QjtBQUFrQyxhQUFTLEVBQUM7QUFBNUMsS0FDRUQsR0FBRyxDQUFDRSxJQUROLENBREQsQ0FERCxDQUREO0FBU0EsQ0FiRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9TaGFyZWQvQXV0aEhlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluZXJ0aWFMaW5rLCB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCB7IHByb3BzIH0gPSB1c2VQYWdlKCk7XG5cdGNvbnN0IHsgYXBwIH0gPSBwcm9wcztcblx0XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBpZD1cIm1haW4taGVhZGVyXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUtaGVhZGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdDxJbmVydGlhTGluayBocmVmPXtyb3V0ZSgnaG9tZScpfSBjbGFzc05hbWU9XCJwaW5rXCI+XG5cdFx0XHRcdFx0e2FwcC5uYW1lfVxuXHRcdFx0XHQ8L0luZXJ0aWFMaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Shared/AuthHeader.js\n");

/***/ })

}]);