"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./src/skyrave-core/stores/permissions/permissions.ts":
/*!************************************************************!*\
  !*** ./src/skyrave-core/stores/permissions/permissions.ts ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n\nconst usePermissionsStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>{\n    return {\n        permissions: [\n            {\n                id: \"c134485-9444\",\n                type: \"page\",\n                title: \"Access to Settings page\",\n                targetId: \"a1\",\n                isGranted: false,\n                description: \"Grants access to the 'Settings' page\"\n            },\n            {\n                id: \"c134485-9445\",\n                type: \"page\",\n                title: \"Access to Management page\",\n                isGranted: false,\n                targetId: \"a2\",\n                description: \"Grants access to the 'Management' page\"\n            },\n            {\n                id: \"c134485-9446\",\n                type: \"page\",\n                title: \"Access to Boards page\",\n                isGranted: false,\n                targetId: \"a3\",\n                description: \"Grants access to the 'Boards' page\"\n            },\n            {\n                id: \"c134485-9448451561\",\n                type: \"functionality\",\n                title: \"Editing team permissions\",\n                isGranted: false,\n                targetId: \"b1\",\n                description: \"Grants the right to edit team permissions\"\n            },\n            {\n                id: \"c134485-9445545551\",\n                type: \"functionality\",\n                title: \"Modify Tech-Manager configurations\",\n                isGranted: false,\n                targetId: \"b2\",\n                description: \"Grants the right to modify Tech-Manager permissions\"\n            }\n        ],\n        setPermissions: (permissions)=>{\n            return set((state)=>{\n                return {\n                    ...state,\n                    permissions\n                };\n            });\n        }\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (usePermissionsStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2t5cmF2ZS1jb3JlL3N0b3Jlcy9wZXJtaXNzaW9ucy9wZXJtaXNzaW9ucy50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFpQztBQU9qQyxNQUFNQyxzQkFBc0JELCtDQUFNQSxDQUFtQixDQUFDRSxNQUFRO0lBQzVELE9BQU87UUFDTEMsYUFBYTtZQUNYO2dCQUNFQyxJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxVQUFVO2dCQUNWQyxXQUFXLEtBQUs7Z0JBQ2hCQyxhQUFhO1lBQ2Y7WUFDQTtnQkFDRUwsSUFBSTtnQkFDSkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEUsV0FBVyxLQUFLO2dCQUNoQkQsVUFBVTtnQkFDVkUsYUFBYTtZQUNmO1lBQ0E7Z0JBQ0VMLElBQUk7Z0JBQ0pDLE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BFLFdBQVcsS0FBSztnQkFDaEJELFVBQVU7Z0JBQ1ZFLGFBQWE7WUFDZjtZQUNBO2dCQUNFTCxJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQRSxXQUFXLEtBQUs7Z0JBQ2hCRCxVQUFVO2dCQUNWRSxhQUFhO1lBQ2Y7WUFDQTtnQkFDRUwsSUFBSTtnQkFDSkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEUsV0FBVyxLQUFLO2dCQUNoQkQsVUFBVTtnQkFDVkUsYUFBYTtZQUNmO1NBQ0Q7UUFDREMsZ0JBQWdCLENBQUNQLGNBQWdCO1lBQy9CLE9BQU9ELElBQUksQ0FBQ1MsUUFBVTtnQkFDcEIsT0FBTztvQkFBRSxHQUFHQSxLQUFLO29CQUFFUjtnQkFBWTtZQUNqQztRQUNGO0lBQ0Y7QUFDRjtBQUVBLCtEQUFlRixtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NreXJhdmUtY29yZS9zdG9yZXMvcGVybWlzc2lvbnMvcGVybWlzc2lvbnMudHM/YWMyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd6dXN0YW5kJztcclxuXHJcbnR5cGUgUGVybWlzc2lvbnNTdG9yZSA9IHtcclxuICBwZXJtaXNzaW9uczogQXJyYXk8YW55PlxyXG4gIHNldFBlcm1pc3Npb25zOiAocGVybWlzc2lvbnM6IGFueSkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCB1c2VQZXJtaXNzaW9uc1N0b3JlID0gY3JlYXRlPFBlcm1pc3Npb25zU3RvcmU+KChzZXQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGVybWlzc2lvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzEzNDQ4NS05NDQ0JyxcclxuICAgICAgICB0eXBlOiAncGFnZScsXHJcbiAgICAgICAgdGl0bGU6ICdBY2Nlc3MgdG8gU2V0dGluZ3MgcGFnZScsXHJcbiAgICAgICAgdGFyZ2V0SWQ6ICdhMScsXHJcbiAgICAgICAgaXNHcmFudGVkOiBmYWxzZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHcmFudHMgYWNjZXNzIHRvIHRoZSAnU2V0dGluZ3MnIHBhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzEzNDQ4NS05NDQ1JyxcclxuICAgICAgICB0eXBlOiAncGFnZScsXHJcbiAgICAgICAgdGl0bGU6ICdBY2Nlc3MgdG8gTWFuYWdlbWVudCBwYWdlJyxcclxuICAgICAgICBpc0dyYW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRhcmdldElkOiAnYTInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdyYW50cyBhY2Nlc3MgdG8gdGhlICdNYW5hZ2VtZW50JyBwYWdlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2MxMzQ0ODUtOTQ0NicsXHJcbiAgICAgICAgdHlwZTogJ3BhZ2UnLFxyXG4gICAgICAgIHRpdGxlOiAnQWNjZXNzIHRvIEJvYXJkcyBwYWdlJyxcclxuICAgICAgICBpc0dyYW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRhcmdldElkOiAnYTMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdyYW50cyBhY2Nlc3MgdG8gdGhlICdCb2FyZHMnIHBhZ2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnYzEzNDQ4NS05NDQ4NDUxNTYxJyxcclxuICAgICAgICB0eXBlOiAnZnVuY3Rpb25hbGl0eScsXHJcbiAgICAgICAgdGl0bGU6ICdFZGl0aW5nIHRlYW0gcGVybWlzc2lvbnMnLFxyXG4gICAgICAgIGlzR3JhbnRlZDogZmFsc2UsXHJcbiAgICAgICAgdGFyZ2V0SWQ6ICdiMScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdHcmFudHMgdGhlIHJpZ2h0IHRvIGVkaXQgdGVhbSBwZXJtaXNzaW9ucycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2MxMzQ0ODUtOTQ0NTU0NTU1MScsXHJcbiAgICAgICAgdHlwZTogJ2Z1bmN0aW9uYWxpdHknLFxyXG4gICAgICAgIHRpdGxlOiAnTW9kaWZ5IFRlY2gtTWFuYWdlciBjb25maWd1cmF0aW9ucycsXHJcbiAgICAgICAgaXNHcmFudGVkOiBmYWxzZSxcclxuICAgICAgICB0YXJnZXRJZDogJ2IyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dyYW50cyB0aGUgcmlnaHQgdG8gbW9kaWZ5IFRlY2gtTWFuYWdlciBwZXJtaXNzaW9ucycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgc2V0UGVybWlzc2lvbnM6IChwZXJtaXNzaW9ucykgPT4ge1xyXG4gICAgICByZXR1cm4gc2V0KChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwZXJtaXNzaW9ucyB9O1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQZXJtaXNzaW9uc1N0b3JlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlUGVybWlzc2lvbnNTdG9yZSIsInNldCIsInBlcm1pc3Npb25zIiwiaWQiLCJ0eXBlIiwidGl0bGUiLCJ0YXJnZXRJZCIsImlzR3JhbnRlZCIsImRlc2NyaXB0aW9uIiwic2V0UGVybWlzc2lvbnMiLCJzdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/skyrave-core/stores/permissions/permissions.ts\n"));

/***/ })

});