(self["webpackChunktrabajogus"] = self["webpackChunktrabajogus"] || []).push([["src_app_pages_input_input_module_ts"],{

/***/ 4430:
/*!*****************************************************!*\
  !*** ./src/app/pages/input/input-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputPageRoutingModule": () => (/* binding */ InputPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.page */ 2438);




const routes = [
    {
        path: '',
        component: _input_page__WEBPACK_IMPORTED_MODULE_0__.InputPage
    }
];
let InputPageRoutingModule = class InputPageRoutingModule {
};
InputPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InputPageRoutingModule);



/***/ }),

/***/ 7999:
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputPageModule": () => (/* binding */ InputPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _input_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-routing.module */ 4430);
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.page */ 2438);







let InputPageModule = class InputPageModule {
};
InputPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _input_routing_module__WEBPACK_IMPORTED_MODULE_0__.InputPageRoutingModule
        ],
        declarations: [_input_page__WEBPACK_IMPORTED_MODULE_1__.InputPage]
    })
], InputPageModule);



/***/ }),

/***/ 2438:
/*!*******************************************!*\
  !*** ./src/app/pages/input/input.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputPage": () => (/* binding */ InputPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_input_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./input.page.html */ 6412);
/* harmony import */ var _input_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.page.scss */ 9159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InputPage = class InputPage {
    constructor() {
        this.usuario = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log('submit');
        console.log(this.usuario);
    }
};
InputPage.ctorParameters = () => [];
InputPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-input',
        template: _raw_loader_input_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_input_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InputPage);



/***/ }),

/***/ 9159:
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6412:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"start\">\n       <ion-back-button \n          defaultHref=\"/\"\n          text=\"Back\"\n          color=\"primary\"\n          mode=\"ios\"></ion-back-button>\n     </ion-buttons>\n     <ion-title>Input</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item>\n      <ion-label>Digite una palabra: </ion-label>\n      <ion-input type=\"text\" placeholder=\"Enter Input\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Digite un nombre: </ion-label>\n      <ion-input type=\"text\" clearInput value=\"clear me\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ingrese un numero </ion-label>\n      <ion-input type=\"number\" value=\"333\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Ingrese una palabra: </ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Stacked Label</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Género</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Mujer</ion-select-option>\n        <ion-select-option value=\"m\">Hombre</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    \n  <form #formulario=\"ngForm\" (ngSubmit) =\"onSubmit()\">\n\n    <ion-list-header>\n      <ion-label>Formulario Válido: {{formulario.valid}} </ion-label>\n    </ion-list-header>\n  \n      <ion-item>\n        <ion-label>Email: </ion-label>\n        <ion-input type=\"email\" placeholder=\"Email\"\n                  name=\"email\" [(ngModel)]= \"usuario.email\"\n                  pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                  required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Password: </ion-label>\n        <ion-input type=\"password\" placeholder=\"Contraseña\"\n                   name=\"password\" [(ngModel)]= \"usuario.password\"\n                   required>\n        </ion-input>\n      </ion-item>\n      <ion-button [disabled] =\"formulario.invalid\"\n        type=\"submit\" expand=\"block\" routerLink=\"/inicio\">\n      Enviar Datos\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_input_input_module_ts.js.map