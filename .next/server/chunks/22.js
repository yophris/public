"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 22:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addressFields": () => (/* binding */ addressFields),
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7339);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var requests_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(558);
/* harmony import */ var components_settings_SettingPageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4742);
/* harmony import */ var components_settings_ListWithSidebarLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2530);
/* harmony import */ var components_fields_SelectDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6282);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([requests_settings__WEBPACK_IMPORTED_MODULE_4__, components_settings_ListWithSidebarLayout__WEBPACK_IMPORTED_MODULE_6__]);
([requests_settings__WEBPACK_IMPORTED_MODULE_4__, components_settings_ListWithSidebarLayout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const station = [
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "Station Name",
            name: "station.stationName"
        },
        size: 6
    },
    {
        element: components_fields_SelectDropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
        attr: {
            label: "Is main station?",
            name: "station.isMainStation",
            options: [
                {
                    text: "Yes",
                    value: true
                },
                {
                    text: "No",
                    value: false
                }
            ]
        },
        size: 6
    },
    {
        element: components_fields_SelectDropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
        attr: {
            label: "Station Head",
            name: "station.stationHead",
            options: [
                {
                    text: "Employee 1",
                    value: "e1"
                },
                {
                    text: "Employee 2",
                    value: "e2"
                }
            ]
        },
        size: 12
    }
];
const addressFields = [
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "Address Line 1",
            name: "address.addressLn1"
        },
        size: 12
    },
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "Address Line 2",
            name: "address.addressLn2"
        },
        size: 12
    },
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "City",
            name: "address.city"
        },
        size: 6
    },
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "State",
            name: "address.state"
        },
        size: 6
    },
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "Postal Code",
            name: "address.postalCode"
        },
        size: 6
    },
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "Country",
            name: "address.country"
        },
        size: 6
    },
    {
        element: components_fields_TextInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        attr: {
            label: "Phone",
            name: "address.phone1"
        },
        size: 6
    }
];
// const validation_station = Yup.object().shape({
//   station: Yup.object().shape({
//     stationName: Yup.string().required('stationName'),
//     isMainStation: Yup.string().required('select main station'),
//   }),
// });
// export const validation_address = Yup.object()
//   .shape({
//     address: Yup.object().shape({
//       addressLn1: Yup.string().required(' Line 1 required.'),
//       addressLn2: Yup.string(),
//       city: Yup.string().required(),
//       state: Yup.string().required(),
//       postalCode: Yup.string().required(),
//       country: Yup.string().required(),
//       phone1: Yup.string().required(),
//     }),
//   })
//   .required();
const stationForm = {
    key: "stationName",
    form: [
        {
            header: "",
            fields: station
        },
        {
            header: "Station Address",
            fields: addressFields
        }
    ],
    endpoint: "settings/station",
    texts: {
        key: "stationName",
        breadcrumbText: "Station",
        drawerTitle: "Add Station",
        mainTitle: "List of Stations",
        mainDescription: "this is short description for division",
        sideTitle: "Station",
        sideDescription: "this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id."
    },
    // validation: validation_station.concat(validation_address),
    getAllFn: requests_settings__WEBPACK_IMPORTED_MODULE_4__/* .getSetting */ .$8,
    postFn: requests_settings__WEBPACK_IMPORTED_MODULE_4__/* .createSetting */ .fj,
    putFn: requests_settings__WEBPACK_IMPORTED_MODULE_4__/* .updateSetting */ .m7,
    deleteFn: requests_settings__WEBPACK_IMPORTED_MODULE_4__/* .deleteSetting */ .WN
};
function Page() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_settings_SettingPageLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        texts: stationForm.texts,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_settings_ListWithSidebarLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            config: stationForm
        })
    });
// return <ListWithSidebarLayout config={divisionForm}/>
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;