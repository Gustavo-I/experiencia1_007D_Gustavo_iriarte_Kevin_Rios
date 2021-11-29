(self["webpackChunkhola_proyecto"] = self["webpackChunkhola_proyecto"] || []).push([["src_app_pages_datos_datos_module_ts"],{

/***/ 7169:
/*!*****************************************************!*\
  !*** ./src/app/pages/datos/datos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageRoutingModule": () => (/* binding */ DatosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos.page */ 5864);




const routes = [
    {
        path: '',
        component: _datos_page__WEBPACK_IMPORTED_MODULE_0__.DatosPage
    }
];
let DatosPageRoutingModule = class DatosPageRoutingModule {
};
DatosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DatosPageRoutingModule);



/***/ }),

/***/ 1048:
/*!*********************************************!*\
  !*** ./src/app/pages/datos/datos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPageModule": () => (/* binding */ DatosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datos-routing.module */ 7169);
/* harmony import */ var _datos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page */ 5864);







let DatosPageModule = class DatosPageModule {
};
DatosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _datos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatosPageRoutingModule
        ],
        declarations: [_datos_page__WEBPACK_IMPORTED_MODULE_1__.DatosPage]
    })
], DatosPageModule);



/***/ }),

/***/ 5864:
/*!*******************************************!*\
  !*** ./src/app/pages/datos/datos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPage": () => (/* binding */ DatosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_datos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./datos.page.html */ 6062);
/* harmony import */ var _datos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datos.page.scss */ 887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DatosPage = class DatosPage {
    constructor() { }
    ngOnInit() {
    }
};
DatosPage.ctorParameters = () => [];
DatosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-datos',
        template: _raw_loader_datos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_datos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DatosPage);



/***/ }),

/***/ 887:
/*!*********************************************!*\
  !*** ./src/app/pages/datos/datos.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".texto {\n  text-align: center;\n}\n\n.img {\n  width: 120px;\n  height: 120px;\n  border-radius: 125px;\n}\n\n.form {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.registroinicio {\n  margin: 0px auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBRUE7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiZGF0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uaW1ne1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEyNXB4O1xufVxuLmZvcm0ge1xuXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4ucmVnaXN0cm9pbmljaW97XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ 6062:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos/datos.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"Dark\">\n    <ion-title class=\"texto\">Bienvenido a CardSaver</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"texto ion-padding\">\n  <ion-card>\n    <ion-card-header class=\"texto\">\n      <ion-card-title>¿ Que Deseas Hacer ?</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n    <ion-card-header>\n      <div class=\"texto form ion-padding\">\n        <img  src=\"/assets/img/candado.png\" /> \n      </div>\n    </ion-card-header>\n\n\n    <ion-card-content>\n      <ion-item color=\"primary \">\n        <ion-buttons class=\"registroinicio\" routerLink=\"/login\">Iniciar Sesion</ion-buttons>\n      </ion-item>\n      <br>\n      <ion-item color=\"primary\">\n        <ion-buttons class=\"registroinicio\" routerLink=\"/registro\">Registro</ion-buttons>\n      </ion-item>\n  </ion-card-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_datos_datos_module_ts.js.map