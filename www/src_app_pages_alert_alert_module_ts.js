(self["webpackChunktrabajogus"] = self["webpackChunktrabajogus"] || []).push([["src_app_pages_alert_alert_module_ts"],{

/***/ 3159:
/*!*****************************************************!*\
  !*** ./src/app/pages/alert/alert-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertPageRoutingModule": () => (/* binding */ AlertPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.page */ 7965);




const routes = [
    {
        path: '',
        component: _alert_page__WEBPACK_IMPORTED_MODULE_0__.AlertPage
    }
];
let AlertPageRoutingModule = class AlertPageRoutingModule {
};
AlertPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlertPageRoutingModule);



/***/ }),

/***/ 1182:
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertPageModule": () => (/* binding */ AlertPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _alert_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-routing.module */ 3159);
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.page */ 7965);







let AlertPageModule = class AlertPageModule {
};
AlertPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alert_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlertPageRoutingModule
        ],
        declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_1__.AlertPage]
    })
], AlertPageModule);



/***/ }),

/***/ 7965:
/*!*******************************************!*\
  !*** ./src/app/pages/alert/alert.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertPage": () => (/* binding */ AlertPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_alert_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alert.page.html */ 4905);
/* harmony import */ var _alert_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.page.scss */ 6938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let AlertPage = class AlertPage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Ingresando Datos',
                inputs: [
                    {
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Placeholder 1'
                    },
                    {
                        name: 'name2',
                        type: 'text',
                        id: 'name2-id',
                        value: 'hello',
                        placeholder: 'Placeholder 2'
                    },
                    // multiline input.
                    {
                        name: 'paragraph',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'Placeholder 3'
                    },
                    {
                        name: 'name3',
                        value: 'http://ionicframework.com',
                        type: 'url',
                        placeholder: 'Favorite site ever'
                    },
                    // input date without min nor max
                    {
                        name: 'name5',
                        type: 'date'
                    },
                    {
                        name: 'name6',
                        type: 'number',
                        min: -5,
                        max: 10
                    },
                    {
                        name: 'name7',
                        type: 'number'
                    },
                    {
                        name: 'name8',
                        type: 'password',
                        placeholder: 'Advanced Attributes',
                        cssClass: 'specialClass',
                        attributes: {
                            maxlength: 8,
                            inputmode: 'decimal'
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
}; //llave que cierra la clase
AlertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
AlertPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-alert',
        template: _raw_loader_alert_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alert_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertPage);



/***/ }),

/***/ 6938:
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4905:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"\n          text=\"Back\"\n          color=\"primary\"\n          mode=\"ios\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Alert</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Default -->\n    <ion-button>Default</ion-button> <br>\n\n    <!-- Anchor -->\n    <ion-button href=\"http://www.google.cl\" target=\"_blank\">Google</ion-button>\n    <br>\n\n    <!-- Colors -->\n    <ion-button color=\"primary\">Primary</ion-button>\n    <ion-button color=\"secondary\">Secondary</ion-button>\n    <ion-button color=\"tertiary\">Tertiary</ion-button>\n    <ion-button color=\"success\">Success</ion-button>\n    <ion-button color=\"warning\">Warning</ion-button>\n    <ion-button color=\"danger\">Danger</ion-button>\n    <ion-button color=\"light\">Light</ion-button>\n    <ion-button color=\"medium\">Medium</ion-button>\n    <ion-button color=\"dark\">Dark</ion-button>\n\n    <br>\n\n    <!-- Expand -->\n    <ion-button expand=\"full\" color=\"success\">Full Button</ion-button>\n    <ion-button expand=\"block\" color=\"medium\">Block Button</ion-button>\n\n    <br>\n\n    <ion-button shape=\"round\" color=\"success\" expand=\"full\">Round Button</ion-button>\n    \n    <!-- Fill -->\n    <ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\n    <ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\n    <ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button>\n    \n    <br>\n\n    <!-- Icons -->\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n        Left Icon\n      </ion-button>\n\n      <ion-button>\n        Right Icon\n        <ion-icon slot=\"end\" name=\"star\"></ion-icon>\n      </ion-button>\n\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n\n      <br>\n      <!-- Sizes -->\n      <ion-button size=\"large\">Large</ion-button>\n      <ion-button>Default</ion-button>\n      <ion-button size=\"small\">Small</ion-button>\n\n      <br>\n      <ion-button (click)=\"presentAlertPrompt()\" expand=\"block\" color=\"success\" shape=\"round\">\n        Ingresando Datos\n      </ion-button>\n\n\n      <!--insertar un segundo botón que llame a un método del alert -->\n      \n        \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_alert_alert_module_ts.js.map