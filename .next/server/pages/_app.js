(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const AlertTemplate = ({ style , options , message , close  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            ...style
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {
            variant: "filled",
            severity: options.type,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h4",
                children: message
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertTemplate);


/***/ }),

/***/ 1604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9026);
/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8307);
/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7060);
/* harmony import */ var _FileUploadStatus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_21__, _FileUploadStatus__WEBPACK_IMPORTED_MODULE_22__]);
([store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_21__, _FileUploadStatus__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























const drawerWidth = 240;
const openedMixin = (theme)=>({
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        overflowX: "hidden"
    });
const closedMixin = (theme)=>({
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        backgroundColor: "#232B3F",
        overflowX: "hidden",
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up("sm")]: {
            width: `calc(${theme.spacing(8)} + 1px)`
        }
    });
const DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__.styled)("div")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        minHeight: "48px",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    }));
const AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7___default()), {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        //   left: open ? 0 : 65,
        backgroundColor: "transparent",
        color: "#333333",
        zIndex: 1,
        transition: theme.transitions.create([
            "width",
            "margin"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create([
                "width",
                "margin"
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    }));
const Drawer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__.styled)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_11___default()), {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        backgroundColor: "#232B3F",
        ...open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme)
        },
        ...!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme)
        }
    }));
// function LinkTab(props) {
//   return (
//     <Tab
//       component={Link}
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }
function AppLayout({ children  }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__.useTheme)();
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_20__.useState(false);
    const [tabVal, setTabValue] = react__WEBPACK_IMPORTED_MODULE_20__.useState(0);
    const handleChange = (event, newValue)=>{
        setTabValue(newValue);
    };
    const handleDrawerOpen = ()=>{
        setOpen(true);
    };
    const handleDrawerClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
        sx: {
            display: "flex",
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppBar, {
                position: "fixed",
                open: open,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_19___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerOpen,
                            edge: "start",
                            sx: {
                                marginRight: 5,
                                ...open && {
                                    display: "none"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default()), {
                                sx: {
                                    color: "#fff",
                                    fontSize: "2rem"
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                            variant: "h1_bold_secondary",
                            component: "h1",
                            noWrap: true,
                            children: [
                                "Helpool Services Pvt Ltd.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileUploadStatus__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Drawer, {
                variant: "permanent",
                open: open,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerHeader, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                            onClick: handleDrawerClose,
                            children: open && (theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    fontSize: "2rem"
                                }
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_1___default()), {
                                sx: {
                                    fontSize: "2rem"
                                }
                            }))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_13___default()), {
                        children: [
                            "Dashboard",
                            "Settings",
                            "Leave",
                            "Profile"
                        ].map((text, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_14___default()), {
                                disablePadding: true,
                                sx: {
                                    display: "block"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    sx: {
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            sx: {
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center"
                                            },
                                            children: index % 2 === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                sx: {
                                                    color: !open && "#fff",
                                                    fontSize: "2rem"
                                                }
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                sx: {
                                                    color: !open && "#fff",
                                                    fontSize: "2rem"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_17___default()), {
                                            primary: text,
                                            sx: {
                                                opacity: open ? 1 : 0
                                            }
                                        })
                                    ]
                                })
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                component: "main",
                mt: 8,
                sx: {
                    flexGrow: 1,
                    backgroundColor: "#F5F5F5"
                },
                children: children
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FileUploadStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7060);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_2__]);
store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function FileUploadStatus() {
    const progress = (state)=>state?.progress;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: progress
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1604);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1662);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8890);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3196);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1152);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7246);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_AlertTemplate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4151);
/* harmony import */ var store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7060);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_AppLayout__WEBPACK_IMPORTED_MODULE_2__, react_dnd__WEBPACK_IMPORTED_MODULE_8__, react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_9__, store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_13__]);
([components_AppLayout__WEBPACK_IMPORTED_MODULE_2__, react_dnd__WEBPACK_IMPORTED_MODULE_8__, react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_9__, store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const options = {
    // you can also just use 'bottom center'
    position: react_alert__WEBPACK_IMPORTED_MODULE_11__.positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: react_alert__WEBPACK_IMPORTED_MODULE_11__.transitions.SCALE
};
function ClientScreen({ children  }) {
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((_)=>setLoaded(true), []);
    if (!loaded) return null;
    return children;
}
const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
function MyApp({ Component , pageProps  }) {
    const progress = (0,store_useFileUploadStore__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((state)=>state.progress);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_7___default()), {
                color: "#29D",
                startPosition: 0.3,
                stopDelayMs: 200,
                height: 6,
                showOnShallow: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_alert__WEBPACK_IMPORTED_MODULE_11__.Provider, {
                template: components_AlertTemplate__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                ...options,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
                    client: queryClient,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_dnd__WEBPACK_IMPORTED_MODULE_8__.DndProvider, {
                        backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_9__.HTML5Backend,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_AppLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClientScreen, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 1662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const LinkBehaviour = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function LinkBehaviour(props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        ref: ref,
        ...props
    });
});
//all the MUI default styles can be customized here
//Typography Regular: 400, medium: 500, semi-bold: 600
const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour
            }
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour
            }
        }
    },
    palette: {
        primary: {
            main: "#377DFF"
        },
        secondary: {
            main: "#5B2F51"
        },
        tertiary: {
            main: "#70BC7C"
        },
        background: {
            main: "#F8FAFC"
        },
        text: {
            primary: "#0061EC",
            secondary: "#333333",
            tertiary: "#444444",
            muted: "#6F767E",
            light: "#FFFFFF"
        }
    },
    typography: {
        fontFamily: [
            "Poppins",
            "sans-serif"
        ].join(","),
        fontSize: 10,
        color: "#333",
        h0: {
            fontSize: "2.5rem",
            fontWeight: 500
        },
        h1_stats: {
            fontSize: "2.2rem",
            fontWeight: 600
        },
        h1_bold: {
            fontSize: "2rem",
            fontWeight: 600
        },
        h1_bold_light: {
            fontSize: "2rem",
            fontWeight: 600,
            color: "#fff"
        },
        h1_bold_primary: {
            fontSize: "2rem",
            fontWeight: 600,
            color: "#0061EC"
        },
        h1_bold_secondary: {
            fontSize: "2rem",
            fontWeight: 600,
            color: "#333333"
        },
        h1_medium: {
            fontSize: "2rem",
            fontWeight: 500
        },
        h1_medium_secondary: {
            fontSize: "2rem",
            fontWeight: 500,
            color: "#333333"
        },
        h1_regular: {
            fontSize: "2rem",
            fontWeight: 400
        },
        h2_bold: {
            fontSize: "1.8rem",
            fontWeight: 600
        },
        h2_bold_secondary: {
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#333333"
        },
        h2_medium: {
            fontSize: "1.8rem",
            fontWeight: 500
        },
        h2_medium_secondary: {
            fontSize: "1.8rem",
            fontWeight: 500,
            color: "#333333"
        },
        h2_regular: {
            fontSize: "1.8rem",
            fontWeight: 400
        },
        h3_bold: {
            fontSize: "1.6rem",
            fontWeight: 600
        },
        h3_bold_primary: {
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "#0061EC"
        },
        h3_bold_secondary: {
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "#333"
        },
        h3_bold_muted: {
            fontSize: "1.6rem",
            fontWeight: 500,
            color: "#6F767E"
        },
        h3_bold_light: {
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "#fff"
        },
        h3_medium: {
            fontSize: "1.6rem",
            fontWeight: 500
        },
        h3_medium_primary: {
            fontSize: "1.6rem",
            fontWeight: 500,
            color: "#0061EC"
        },
        h3_medium_secondary: {
            fontSize: "1.6rem",
            fontWeight: 500,
            color: "#333"
        },
        h3_medium_muted: {
            fontSize: "1.6rem",
            fontWeight: 500,
            color: "#6F767E"
        },
        h3_regular: {
            fontSize: "1.6rem",
            fontWeight: 400
        },
        body_bold: {
            fontSize: "1.4rem",
            fontWeight: 600
        },
        body_bold_primary: {
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "#0061EC"
        },
        body_bold_secondary: {
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "#333333"
        },
        body_medium: {
            fontSize: "1.4rem",
            fontWeight: 500
        },
        body_medium_primary: {
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "#0061EC"
        },
        body_medium_secondary: {
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "#333333"
        },
        body_medium_tertiary: {
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "#444444"
        },
        body_medium_muted: {
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "#6F767E"
        },
        body_medium_light: {
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "#FFFFFF"
        },
        body_regular: {
            fontSize: "1.4rem",
            fontWeight: 400
        },
        body_regular_primary: {
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "#0061EC"
        },
        body_regular_secondary: {
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "#333333"
        },
        body_regular_tertiary: {
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "#444444"
        },
        body_regular_muted: {
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "#6F767E"
        },
        body_regular_light: {
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "#FFFFFF"
        },
        subbody_medium: {
            fontSize: "1.3rem",
            fontWeight: 500
        },
        subbody_medium_muted: {
            fontSize: "1.3rem",
            fontWeight: 500,
            color: "#6F767E"
        },
        subbody_regular_muted: {
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "#6F767E"
        },
        smallcopy_bold_light: {
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#fff"
        },
        smallcopy_medium_secondary: {
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "#333"
        },
        smallcopy_medium_muted: {
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "#6F767E"
        },
        smallcopy_regular_tertiary: {
            fontSize: "1.2rem",
            fontWeight: 400,
            color: "#444"
        },
        smallcopy_regular_muted: {
            fontSize: "1.2rem",
            fontWeight: 400,
            color: "#6F767E"
        }
    }
});
// theme.typography.h3_bold_secondary = {
//   '@media (min-width:600px)': {
//     fontSize: '2.2rem',
//   },
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 2818:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 9026:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 8307:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/MoveToInbox");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 8890:
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7246:
/***/ ((module) => {

"use strict";
module.exports = require("react-alert");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3196:
/***/ ((module) => {

"use strict";
module.exports = import("react-dnd");;

/***/ }),

/***/ 1152:
/***/ ((module) => {

"use strict";
module.exports = import("react-dnd-html5-backend");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,676,664], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();