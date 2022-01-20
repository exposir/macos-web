exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 524:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Desktop_container__vYWJf"
};


/***/ }),

/***/ 813:
/***/ ((module) => {

// Exports
module.exports = {
	"mask": "Mask_mask__VkAV9",
	"slideout": "Mask_slideout__ZRJtu"
};


/***/ }),

/***/ 491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Desktop_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(524);
/* harmony import */ var _Desktop_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Dock_Dock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(166);
/* harmony import */ var _MenuBar_MenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(322);
/* harmony import */ var _Mask_Mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(125);





function Desktop() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Desktop_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuBar_MenuBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dock_Dock__WEBPACK_IMPORTED_MODULE_1__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Mask_Mask__WEBPACK_IMPORTED_MODULE_3__["default"], {
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);


/***/ }),

/***/ 125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Mask_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(813);
/* harmony import */ var _Mask_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Mask_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppleIcon_AppleIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(746);




function Mask() {
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            setShow(false);
        }, 1000);
    }, []);
    return show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Mask_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mask),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppleIcon_AppleIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
            size: "120px",
            color: "white"
        })
    }) : null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mask);


/***/ })

};
;