exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 338:
/***/ ((module) => {

// Exports
module.exports = {
	"Dock": "Dock_Dock__A1o_c"
};


/***/ }),

/***/ 251:
/***/ ((module) => {

// Exports
module.exports = {
	"DockItem": "DockItem_DockItem__eD6cl",
	"slideout": "DockItem_slideout__iYn7z"
};


/***/ }),

/***/ 166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dock_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(338);
/* harmony import */ var _Dock_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dock_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DockItem_DockItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function Dock() {
    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        addAnimation();
    }, []);
    function addAnimation() {
        const { children  } = refContainer.current || {
            children: []
        };
        const array = Array.from(children);
        array.forEach((item1, index)=>{
            const xlSize = 100;
            const XlMarginBottom = 30;
            const lSize = 80;
            const lMarginBottom = 20;
            const mSize = 70;
            const mMarginBottom = 10;
            const defaultSize = 60;
            const defaulteMarginBottom = 10;
            const LLeftItem = array[index - 1];
            const LRightItem = array[index + 1];
            const mLeftItem = array[index - 2];
            const mRightMItem = array[index + 2];
            const changeSize = (item, size, marginBottom)=>{
                item.style.width = `${size}px`;
                item.style.height = `${size}px`;
                item.style.marginBottom = `${marginBottom}px`;
            };
            item1.onmouseenter = ()=>{
                changeSize(item1, xlSize, XlMarginBottom);
                LLeftItem && changeSize(LLeftItem, lSize, lMarginBottom);
                LRightItem && changeSize(LRightItem, lSize, lMarginBottom);
                mLeftItem && changeSize(mLeftItem, mSize, mMarginBottom);
                mRightMItem && changeSize(mRightMItem, mSize, mMarginBottom);
            };
            item1.onmouseleave = ()=>{
                changeSize(item1, defaultSize, defaulteMarginBottom);
                LLeftItem && changeSize(LLeftItem, defaultSize, defaulteMarginBottom);
                LRightItem && changeSize(LRightItem, defaultSize, defaulteMarginBottom);
                mLeftItem && changeSize(mLeftItem, defaultSize, defaulteMarginBottom);
                mRightMItem && changeSize(mRightMItem, defaultSize, defaulteMarginBottom);
            };
        });
    }
    const canader = "https://cdn.jsdelivr.net/gh/exposir/beds@main/macos-web/canader.webp";
    const finder = "https://cdn.jsdelivr.net/gh/exposir/beds@main/macos-web/finder.webp";
    const safari = "https://cdn.jsdelivr.net/gh/exposir/beds@main/macos-web/safari.webp";
    const vscode = "https://cdn.jsdelivr.net/gh/exposir/beds@main/macos-web/vscode.webp";
    const store = "https://cdn.jsdelivr.net/gh/exposir/beds@main/macos-web/store.webp";
    const setting = "https://cdn.jsdelivr.net/gh/exposir/beds@main/macos-web/setting.webp";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: refContainer,
        className: (_Dock_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Dock),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DockItem_DockItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: finder
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DockItem_DockItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: canader
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DockItem_DockItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: safari
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DockItem_DockItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: vscode
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DockItem_DockItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: store
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DockItem_DockItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: setting
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dock);


/***/ }),

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DockItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(251);
/* harmony import */ var _DockItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DockItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function DockItem(props = {
    src: ""
}) {
    const { src  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: (_DockItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().DockItem),
        src: src
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DockItem);


/***/ })

};
;