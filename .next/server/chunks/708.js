"use strict";
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 9272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ extractFromJSON),
/* harmony export */   "w": () => (/* binding */ transformToFormData)
/* harmony export */ });
const jsonata = __webpack_require__(9593);
const _ = __webpack_require__(6517);
const extractFromJSON = (data = {}, exp = "")=>{
    const expression = jsonata(exp);
    const result = expression.evaluate(data);
    //   debugger;
    return result;
};
function transformToFormData(data, formData = new FormData(), parentKey = null) {
    _.forEach(data, (value, key)=>{
        if (value === null) return; // else "null" will be added
        let formattedKey = _.isEmpty(parentKey) ? key : `${parentKey}[${key}]`;
        if (value instanceof File) {
            formData.set(formattedKey, value);
        } else if (value instanceof Array) {
            _.forEach(value, (ele)=>{
                formData.append(`${formattedKey}`, ele);
            });
        } else if (value instanceof Object) {
            transformToFormData(value, formData, formattedKey);
        } else {
            formData.set(formattedKey, value);
        }
    });
    return formData;
}


/***/ }),

/***/ 8328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9272);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);


const validationSchemaGenerator = (form)=>{
    let schema = (0,Utils__WEBPACK_IMPORTED_MODULE_0__/* .extractFromJSON */ .I)(form, `**.fields.{
        "key":attr.name,
        "validation":validation
    }`);
    let obj = schema.reduce((agg, each)=>{
        agg[each.key] = {
            validation: each?.validation
        };
        return agg;
    }, {});
    return recurse(deepen(obj));
};
function deepen(obj) {
    const result = {};
    // For each object path (property key) in the object
    for(const objectPath in obj){
        // Split path into component parts
        const parts = objectPath.split(".");
        // Create sub-objects along path as needed
        let target = result;
        while(parts.length > 1){
            const part = parts.shift();
            target = target[part] = target[part] || {};
        }
        // Set value at end of path
        target[parts[0]] = obj[objectPath];
    }
    console.log("Deep", result);
    return result;
}
function createYupSchema(config) {
    const { id , validationType , validations =[]  } = config;
    let validator = yup__WEBPACK_IMPORTED_MODULE_1__[validationType]();
    validations.forEach((validation)=>{
        const { params , type  } = validation;
        if (!validator[type]) {
            return;
        }
        console.log(type, params);
        validator = validator[type](...params);
    });
    return validator;
}
function recurse(objc, level = 0) {
    let shape = {};
    for(const key in objc){
        if ("validation" in objc[key]) {
            // Yup.object().shape()
            console.log("Has validation", objc[key].validation);
            if (objc[key].validation) {
                shape[key] = createYupSchema(objc[key].validation);
            }
        } else {
            shape[key] = recurse(objc[key], level + 1);
        // console.log('inside', rec);
        }
    }
    return yup__WEBPACK_IMPORTED_MODULE_1__.object().shape(shape);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationSchemaGenerator);


/***/ }),

/***/ 4057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AppButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function AppButton({ label , variant ="contained" , ...restProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: variant,
        sx: {
            fontSize: "1.2rem",
            padding: "4px 24px",
            borderRadius: 2,
            textTransform: "none"
        },
        ...restProps,
        children: label
    });
}


/***/ }),

/***/ 9576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const AppDivider = ({ direction ="horizontal" , borderColor ="#EFEFEF" , rest  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
        sx: {
            borderColor
        },
        ...rest,
        orientation: direction,
        flexItem: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppDivider);


/***/ }),

/***/ 1153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1908);
/* harmony import */ var _AppButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4057);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7339);
/* harmony import */ var Utils_validationSchemaGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function AppForm({ form , submitData , edit , validationSchema , cancelDrawer =()=>{}  }) {
    const { register , control , handleSubmit , setValue , getFieldState , reset , watch , formState: { errors  } , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__.yupResolver)((0,Utils_validationSchemaGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(form))
    });
    const renderFields = (d, error)=>{
        const { attr  } = d;
        const Field = d.element;
        const [domain, field] = attr.name.split(".");
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Field, {
                ...attr,
                control: control,
                register: register,
                error: getFieldState(attr.name).error,
                setValue: setValue,
                isRequired: validationSchema?.fields[domain]?.fields[field]?.exclusiveTests?.required,
                watch: watch,
                getValues: getValues
            })
        });
    };
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect((_)=>{
        if (edit) {
            reset(edit);
        }
        console.log("Data for Edit", edit);
    }, [
        edit
    ]);
    console.log("AppForm Error", errors);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit(submitData),
        style: {
            height: "100%"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
            justifyContent: "space-between",
            sx: {
                height: "100%"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    sx: {
                        padding: 3,
                        flex: 1,
                        overflow: "auto"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        spacing: 3,
                        children: form?.map((setting, ind)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                children: [
                                    setting?.header && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            ind > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    orientation: "horizontal",
                                                    flexItem: true,
                                                    sx: {
                                                        borderColor: "#EFEFEF",
                                                        marginTop: 2,
                                                        width: "100%"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 12,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                    variant: "h3_bold_secondary",
                                                    sx: {
                                                        marginTop: 4
                                                    },
                                                    children: setting?.header
                                                })
                                            })
                                        ]
                                    }),
                                    setting?.fields?.map((field, j)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                            item: true,
                                            xs: field.size,
                                            children: renderFields(field, errors)
                                        }, j))
                                ]
                            }, ind);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {
                    sx: {
                        padding: 1.25
                    },
                    square: true,
                    elevation: 2,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        direction: "row",
                        justifyContent: "flex-end",
                        spacing: 1,
                        children: [
                            cancelDrawer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                variant: "outlined",
                                label: "Cancel",
                                onClick: cancelDrawer
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AppButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                type: "submit",
                                label: !edit ? "Save" : "Update",
                                variant: "contained"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8855);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function SearchInput({ ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
        elevation: 0,
        sx: {
            alignItems: "center",
            backgroundColor: "background.main",
            border: "1px solid #EFEFEF",
            borderRadius: 2,
            display: "flex",
            marginTop: 0,
            flex: "auto"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    fontSize: "1.4rem",
                    margin: "15px 12px 15px 20px",
                    color: "text.muted"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    ml: 1,
                    flex: 1,
                    fontSize: "1.4rem",
                    color: "text.secondary"
                },
                placeholder: "Search Department",
                inputProps: {
                    "aria-label": "search department"
                }
            })
        ]
    });
}


/***/ }),

/***/ 7339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8855);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function TextInput(props) {
    const { label , register , name , error , isRequired , isMultiline  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "body_medium_muted",
                component: "p",
                mb: 1,
                children: [
                    label,
                    isRequired && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "body_bold",
                        sx: {
                            marginLeft: "4px",
                            color: "#F53E40"
                        },
                        children: "*"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
                elevation: 0,
                sx: {
                    alignItems: "center",
                    backgroundColor: "background.main",
                    border: "1px solid #EFEFEF",
                    borderRadius: 2,
                    display: "flex",
                    marginTop: 0,
                    p: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_2___default()), {
                    sx: {
                        ml: 1,
                        flex: 1,
                        fontSize: "1.4rem",
                        fontWeight: 500,
                        color: "text.secondary"
                    },
                    error: !!error?.message,
                    placeholder: label,
                    inputProps: {
                        "aria-label": label
                    },
                    ...register(name),
                    multiline: isMultiline,
                    rows: 4
                })
            }),
            error?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
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


/***/ }),

/***/ 2019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EditableList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9237);
/* harmony import */ var _mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__);






const options = [
    "Edit",
    "Delete"
];
const ITEM_HEIGHT = 48;
function EditableList({ label ="" , cb ={}  }) {
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const handleMenu = (option)=>{
        let callback = cb[option];
        if (callback) {
            callback();
            handleClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        sx: {
            border: "1px solid #E4E7EB",
            borderRadius: 1,
            padding: 2
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h3_medium_secondary",
                component: "h3",
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        "aria-label": "more",
                        id: "long-button",
                        "aria-controls": open ? "long-menu" : undefined,
                        "aria-expanded": open ? "true" : undefined,
                        "aria-haspopup": "true",
                        onClick: handleClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3___default()), {
                            fontSize: "large",
                            sx: {
                                color: "text.secondary"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                        id: "long-menu",
                        MenuListProps: {
                            "aria-labelledby": "long-button"
                        },
                        anchorEl: anchorEl,
                        open: open,
                        onClose: handleClose,
                        PaperProps: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: "auto"
                            }
                        },
                        children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                selected: option === "Pyxis",
                                onClick: ()=>handleMenu(option),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        mr: 1,
                                        variant: "body_medium_tertiary",
                                        component: "p",
                                        children: option === "Delete" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            sx: {
                                                color: "#F53E40"
                                            }
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        sx: {
                                            color: option === "Delete" && "#F53E40"
                                        },
                                        variant: "body_medium_tertiary",
                                        component: "p",
                                        children: option
                                    })
                                ]
                            }, option))
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2530:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_AppButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4057);
/* harmony import */ var components_AppDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9576);
/* harmony import */ var components_fields_AppForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1153);
/* harmony import */ var components_fields_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9716);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7246);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(681);
/* harmony import */ var store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7060);
/* harmony import */ var Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9272);
/* harmony import */ var _EditableList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2019);
/* harmony import */ var _SettingDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_fields_AppForm__WEBPACK_IMPORTED_MODULE_4__, requests__WEBPACK_IMPORTED_MODULE_9__, store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_10__]);
([components_fields_AppForm__WEBPACK_IMPORTED_MODULE_4__, requests__WEBPACK_IMPORTED_MODULE_9__, store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ListWithSidebarLayout = ({ config  })=>{
    const { endpoint , texts , getAllFn , postFn , key , deleteFn , validation , putFn , transform =(data)=>data  } = config;
    const setProgress = (0,store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)((state)=>state.setProgress);
    const alert = (0,react_alert__WEBPACK_IMPORTED_MODULE_7__.useAlert)();
    const qc = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQueryClient)();
    const [openSideMenu, setOpenSideMenu] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
    const [editId, setEditId] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    // getSetting
    const { isLoading , data: response , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)("get" + key, ()=>getAllFn(endpoint, {
            page: 1
        }));
    // create
    const onCreate = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)((data)=>{
        return !editId ? postFn(endpoint, transform(data), setProgress) : putFn(endpoint, editId, transform(data), setProgress);
    }, {
        onSuccess: ()=>{
            setOpenSideMenu(false);
            qc.invalidateQueries("get" + key);
            alert.success(!editId ? "created" : "Updated");
        },
        onError: (data)=>{
            alert.error("Failed");
        }
    });
    // Delete
    const onDelete = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)((data)=>deleteFn(endpoint, data), {
        onSuccess: ()=>{
            qc.invalidateQueries("get" + key);
            alert("Deleted");
            setOpenSideMenu(false);
        },
        onError: (data)=>{
            alert("Failed");
        }
    });
    const editClickCB = (id)=>{
        setOpenSideMenu(true);
        // TODO: Very Crucial
        setEditId(id);
    };
    const onDeleteClick = (id)=>{
        if (window.confirm("Do you want to delete this ? ")) {
            onDelete.mutate({
                id: id
            });
        }
    // setOpenSideMenu(true)
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)((_)=>{
        if (!openSideMenu) {
            setEditId(null);
        }
    }, [
        openSideMenu
    ]);
    // return "hi"
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        spacing: 2,
        m: 2,
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_AppDivider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                spacing: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fields_SearchInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        sx: {
                            flex: 1
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_AppButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: texts?.drawerTitle,
                        variant: "contained",
                        onClick: ()=>setOpenSideMenu(true)
                    }),
                    openSideMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SettingDrawer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        open: openSideMenu,
                        callback: setOpenSideMenu,
                        title: editId ? texts?.drawerTitle?.replace("Add", "Update") : texts?.drawerTitle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fields_AppForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            form: config.form,
                            edit: editId ? {
                                ...response.data.find((e)=>e.id == editId)
                            } : null,
                            submitData: (data)=>onCreate.mutate({
                                    ...data
                                }),
                            validationSchema: validation,
                            cancelDrawer: ()=>setOpenSideMenu(false)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                sx: {
                    rowGap: 1
                },
                children: isLoading ? "Loading" : response?.data?.map((e, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditableList__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        label: (0,Utils__WEBPACK_IMPORTED_MODULE_11__/* .extractFromJSON */ .I)(e, `**.${texts.key}`),
                        cb: {
                            Edit: ()=>editClickCB(e.id),
                            Delete: ()=>onDeleteClick(e.id)
                        }
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListWithSidebarLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);





function SettingDrawer({ open =false , callback , title , children  }) {
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(open);
    const toggleDrawer = (open)=>(event)=>{
            if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            callback(open);
            setIsOpen(open);
        };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
            anchor: "right",
            open: isOpen,
            sx: {
                "& .MuiDrawer-paper": {
                    width: "50%"
                }
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                role: "presentation",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    sx: {
                        height: "100vh"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                            square: true,
                            elevation: 2,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                direction: "row",
                                justifyContent: "space-between",
                                sx: {
                                    margin: 1.25,
                                    flexBasis: "auto"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            variant: "h1_bold_secondary",
                                            component: "h1",
                                            children: title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                            onClick: toggleDrawer(false),
                                            sx: {
                                                padding: 0
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    fontSize: "2.2rem",
                                                    margin: "15px",
                                                    color: "#000"
                                                }
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        children
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingDrawer);


/***/ }),

/***/ 4742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_AppDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9576);






function SettingPageLayout({ children , texts  }) {
    const matches = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(max-width:900px)");
    const breadcrumbs = [
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
            href: "/app/settings",
            sx: {
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "primary.main",
                cursor: "pointer"
            },
            underline: "hover",
            color: "inherit",
            children: "SETTINGS"
        }, "1"),
        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
            variant: "h3_bold_secondary",
            children: texts?.breadcrumbText
        }, "2")
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                sx: {
                    padding: 2,
                    background: "#FAFBFC",
                    borderBottom: "1px solid #EBEBEB"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, {
                    separator: ">",
                    sx: {
                        "& .MuiBreadcrumbs-separator": {
                            fontSize: "2rem",
                            fontWeight: 500
                        }
                    },
                    "aria-label": "breadcrumb",
                    children: breadcrumbs
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                sx: {
                    margin: 2,
                    background: "#F5F6FA"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {
                    sx: {
                        border: "1px solid #EFEFEF",
                        borderRadius: 2.5,
                        overflow: "hidden"
                    },
                    variant: "outlined",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        direction: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                md: 8,
                                xs: 12,
                                sx: !matches && {
                                    borderRight: "1px solid #EFEFEF"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            px: 2.5,
                                            pt: 2.5
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                variant: "h2_bold_secondary",
                                                component: "h2",
                                                children: texts?.mainTitle
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                variant: "body_medium_muted",
                                                component: "p",
                                                children: texts?.mainDescription
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        sx: {
                                            height: "80vh",
                                            paddingRight: 1,
                                            paddingTop: 3
                                        },
                                        children: children
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                md: 4,
                                sx: matches ? {
                                    display: "none"
                                } : {
                                    display: "block"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    sx: {
                                        margin: 2.5
                                    },
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h2_bold_secondary",
                                            children: texts?.sideTitle
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            variant: "h3_medium_muted",
                                            children: texts?.sideDescription
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(SettingPageLayout));


/***/ }),

/***/ 681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export jsonToFormData */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://ec2-54-161-143-145.compute-1.amazonaws.com:3000/api/v1/"
});
var qs = __webpack_require__(7104);
function jsonToFormData(data) {
    let formData = new FormData();
    for(let dataKey in data){
        if (dataKey === "preview") {
            // append nested object
            for(let previewKey in data[dataKey]){
                formData.append(`preview[${previewKey}]`, data[dataKey][previewKey]);
            }
        } else {
            formData.append(dataKey, data[dataKey]);
        }
    }
    return formData;
}
const apiClient = async ({ path ="/" , method ="get" , data =null , secure =true , uploadProgessCB =()=>{}  })=>{
    console.log("api calls", data);
    if (method == "get" && data) {
        console.log("", data);
        const query = qs.stringify(data, {
            addQueryPrefix: true
        });
        path = path + query;
    }
    // return ""
    try {
        let { data: res , status  } = await axiosInstance({
            url: path,
            method: method,
            data: data,
            headers: {
                "X-TENANT-ID": "2c9bc840-74c1-11ed-a1eb-0242ac120011"
            },
            onUploadProgress: (progressEvent)=>{
                let percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                console.log("percent", percent);
                uploadProgessCB(percent);
            }
        });
        return {
            success: true,
            data: res.data,
            status,
            message: "success"
        };
    } catch (error) {
        console.log(error);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw {
                success: false,
                data: error.response.data,
                status: error.response.status,
                message: "Response Error"
            };
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            throw {
                success: false,
                data: null,
                status: null,
                message: "Request Error"
            };
        } else {
            // Something happened in setting up the request that triggered an Error
            throw {
                success: false,
                data: null,
                status: null,
                message: "Request Set up Error"
            };
        }
        throw {
            success: false,
            data: null,
            status: null,
            message: "Unknown Error"
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiClient);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* binding */ getSetting),
/* harmony export */   "WN": () => (/* binding */ deleteSetting),
/* harmony export */   "fj": () => (/* binding */ createSetting),
/* harmony export */   "m7": () => (/* binding */ updateSetting)
/* harmony export */ });
/* harmony import */ var requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(681);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([requests__WEBPACK_IMPORTED_MODULE_0__]);
requests__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// common api calls for all the pages as of now, we can create another if we find differernt pattern or logic
const getSetting = (endpoint, data)=>(0,requests__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        path: endpoint,
        method: "get",
        data
    });
const createSetting = (endpoint, payload, cb)=>(0,requests__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        path: endpoint,
        method: "post",
        data: payload,
        uploadProgessCB: cb
    });
const updateSetting = (endpoint, id, payload, cb)=>(0,requests__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        path: endpoint + "/" + id,
        method: "put",
        data: payload,
        uploadProgessCB: cb
    });
const deleteSetting = (endpoint, payload)=>(0,requests__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
        path: endpoint + "/" + payload?.id,
        method: "delete"
    }); // // Company / Organization
 // export const getCompany = () => apiClient('/settings/company', 'get');
 // export const createCompany = (payload) =>
 //   apiClient('/settings/company', 'post', payload);
 // export const updateCompany = (payload) =>
 //   apiClient('/settings/company', 'put', payload);
 // export const deleteCompany = (payload) =>
 //   apiClient('/settings/company/' + payload?.id, 'delete');
 // // Division
 // export const getDivision = () => apiClient('/settings/division', 'get');
 // export const createDivision = (payload) =>
 //   apiClient('/settings/division', 'post', payload);
 // export const updateDivision = (payload) =>
 //   apiClient('/settings/division', 'put', payload);
 // export const deleteDivision = (payload) =>
 //   apiClient('/settings/division/' + payload?.id, 'delete');
 // // Station
 // export const getStation = () => apiClient('/settings/station', 'get');
 // export const createStation = (payload) =>
 //   apiClient('/settings/station', 'post', payload);
 // export const updateStation = (payload) =>
 //   apiClient('/settings/station', 'put', payload);
 // export const deleteStation = (payload) =>
 //   apiClient('/settings/station/' + payload?.id, 'delete');
 // // Department
 // export const getDepartment = () => apiClient('/settings/department', 'get');
 // export const createDepartment = (payload) =>
 //   apiClient('/settings/department', 'post', payload);
 // export const updateDepartment = (payload) =>
 //   apiClient('/settings/department', 'put', payload);
 // export const deleteDepartment = (payload) =>
 //   apiClient('/settings/department/' + payload?.id, 'delete');
 // // Team
 // export const getTeam = () => apiClient('/settings/team', 'get');
 // export const createTeam = (payload) =>
 //   apiClient('/settings/team', 'post', payload);
 // export const updateTeam = (payload) =>
 //   apiClient('/settings/team', 'put', payload);
 // export const deleteTeam = (payload) =>
 //   apiClient('/settings/team/' + payload?.id, 'delete');

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useFileUploadStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set)=>({
        progress: 0,
        setProgress: ()=>set((state)=>{
                return {
                    progress: state.progress + 1
                };
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFileUploadStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;