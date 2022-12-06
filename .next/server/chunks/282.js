"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SelectDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8855);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4845);
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4__);






function SelectDropdown({ label , options =[
    {
        text: "",
        value: ""
    }
] , register , name , setValue , error , isRequired , getValues , watch  }) {
    const [val, setVal] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((_)=>{
        const val = watch(name);
        if (val) {
            setValue(name, val);
            setVal(val);
        }
    }, [
        watch(name)
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body_medium_muted",
                component: "p",
                mb: 1,
                children: [
                    label,
                    isRequired && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "body_bold",
                        sx: {
                            marginLeft: "4px",
                            color: "#F53E40"
                        },
                        children: "*"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {
                ...register(name),
                input: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BootstrapInput, {}),
                IconComponent: (_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_4___default()),
                sx: {
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "text.secondary"
                },
                value: val,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        sx: {
                            fontSize: "1.4rem",
                            color: "text.secondary",
                            fontStyle: "italic"
                        },
                        value: "",
                        children: "None"
                    }),
                    options.map((option, ind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                            sx: {
                                fontSize: "1.4rem",
                                fontWeight: 500,
                                color: "text.secondary"
                            },
                            value: option.value,
                            children: option.text
                        }, ind))
                ]
            }),
            error?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h6",
                sx: {
                    marginLeft: "4px",
                    color: "red"
                },
                children: error.message
            })
        ]
    });
}
const BootstrapInput = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_3___default()))(({ theme  })=>({
        alignItems: "center",
        backgroundColor: theme.palette.background.main,
        border: "1px solid #EFEFEF",
        borderRadius: theme.spacing(1),
        display: "flex",
        fontSize: "1.4rem",
        transition: theme.transitions.create([
            "border-color",
            "box-shadow"
        ]),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        },
        "label + &": {
            marginTop: theme.spacing(3)
        },
        "& .MuiInputBase-input": {
            color: theme.palette.text.secondary,
            padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`
        },
        "& .MuiSvgIcon-root": {
            fontSize: "2rem",
            marginRight: 2,
            color: theme.palette.text.tertiary
        }
    }));


/***/ })

};
;