(self["webpackChunkhola_proyecto"] = self["webpackChunkhola_proyecto"] || []).push([["src_app_pages_suscripcion_suscripcion_module_ts"],{

/***/ 4519:
/*!*****************************************************************!*\
  !*** ./src/app/pages/suscripcion/suscripcion-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuscripcionPageRoutingModule": () => (/* binding */ SuscripcionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _suscripcion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suscripcion.page */ 6943);




const routes = [
    {
        path: '',
        component: _suscripcion_page__WEBPACK_IMPORTED_MODULE_0__.SuscripcionPage
    }
];
let SuscripcionPageRoutingModule = class SuscripcionPageRoutingModule {
};
SuscripcionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuscripcionPageRoutingModule);



/***/ }),

/***/ 9086:
/*!*********************************************************!*\
  !*** ./src/app/pages/suscripcion/suscripcion.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuscripcionPageModule": () => (/* binding */ SuscripcionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _suscripcion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suscripcion-routing.module */ 4519);
/* harmony import */ var _suscripcion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suscripcion.page */ 6943);







let SuscripcionPageModule = class SuscripcionPageModule {
};
SuscripcionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _suscripcion_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuscripcionPageRoutingModule
        ],
        declarations: [_suscripcion_page__WEBPACK_IMPORTED_MODULE_1__.SuscripcionPage]
    })
], SuscripcionPageModule);



/***/ }),

/***/ 6943:
/*!*******************************************************!*\
  !*** ./src/app/pages/suscripcion/suscripcion.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuscripcionPage": () => (/* binding */ SuscripcionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_suscripcion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./suscripcion.page.html */ 3852);
/* harmony import */ var _suscripcion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suscripcion.page.scss */ 3538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_servicedatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/servicedatos.service */ 8321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);






let SuscripcionPage = class SuscripcionPage {
    constructor(storageService, plt, toastController) {
        this.storageService = storageService;
        this.plt = plt;
        this.toastController = toastController;
        this.suscritos = [];
        this.newDato = {};
        this.plt.ready().then(() => {
            this.loadDatos();
        });
    }
    ngOnInit() {
    }
    //get
    loadDatos() {
        this.storageService.getDatos().then(datos => {
            this.suscritos = datos;
        });
    }
    //create
    addDatos() {
        this.newDato.modified = Date.now();
        this.newDato.id = Date.now();
        this.storageService.addDatos(this.newDato).then(dato => {
            this.newDato = {};
            this.showToast('!Datos Agregados');
            this.loadDatos();
        });
    }
    //update
    updateDatos(dato) {
        dato.nom = `UPDATED: ${dato.nom}`;
        dato.modified = Date.now();
        this.storageService.updateDatos(dato).then(item => {
            this.showToast('Elemento actualizado!');
            this.myList.closeSlidingItems();
            this.loadDatos();
        });
    }
    //delete
    deleteDatos(dato) {
        this.storageService.deleteDatos(dato.id).then(item => {
            this.showToast('Elemento eliminado');
            this.myList.closeSlidingItems();
            this.loadDatos();
        });
    }
    showToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
SuscripcionPage.ctorParameters = () => [
    { type: src_app_services_servicedatos_service__WEBPACK_IMPORTED_MODULE_2__.ServicedatosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
SuscripcionPage.propDecorators = {
    myList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['myList',] }]
};
SuscripcionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-suscripcion',
        template: _raw_loader_suscripcion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_suscripcion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SuscripcionPage);



/***/ }),

/***/ 8321:
/*!**************************************************!*\
  !*** ./src/app/services/servicedatos.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicedatosService": () => (/* binding */ ServicedatosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 1628);



const ITEMS_KEY = 'my-datos';
let ServicedatosService = class ServicedatosService {
    constructor(storage) {
        this.storage = storage;
        this.init();
    }
    //definimos en un método la creación del almacenamiento
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const storage = yield this.storage.create();
            this._storage = storage;
        });
    }
    addDatos(dato) {
        return this.storage.get(ITEMS_KEY).then((datos) => {
            if (datos) {
                datos.push(dato);
                return this.storage.set(ITEMS_KEY, datos);
            }
            else {
                return this.storage.set(ITEMS_KEY, [dato]);
            }
        });
    }
    //Nos permmite obtener la información almacenada en el storage 
    //por medio de sus keys 
    getDatos() {
        return this.storage.get(ITEMS_KEY);
    }
    //actualizar información de un objeto 
    updateDatos(dato) {
        return this.storage.get(ITEMS_KEY).then((datos) => {
            if (!datos || datos.length == 0) {
                return null;
            }
            let newDato = [];
            for (let i of datos) {
                if (i.id === dato.id) {
                    newDato.push(dato);
                }
                else {
                    newDato.push(i);
                }
            }
            return this.storage.set(ITEMS_KEY, newDato);
        });
    }
    //Eliminar
    deleteDatos(id) {
        return this.storage.get(ITEMS_KEY).then((datos) => {
            if (!datos || datos.length === 0) {
                return null;
            }
            let toKeep = [];
            for (let i of datos) {
                if (i.id !== id) {
                    toKeep.push(i);
                }
            }
            return this.storage.set(ITEMS_KEY, toKeep);
        });
    }
};
ServicedatosService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
ServicedatosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ServicedatosService);



/***/ }),

/***/ 3538:
/*!*********************************************************!*\
  !*** ./src/app/pages/suscripcion/suscripcion.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXNjcmlwY2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3852:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suscripcion/suscripcion.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"Dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>CardSaver</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Nombre Banco</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newDato.nombanco\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Numero Tarjeta</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newDato.numtarjeta\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Fecha de Vencimiento</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newDato.fechvenc\" required></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">CVV</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newDato.cvv\" required></ion-input>\n  </ion-item>\n  <ion-button (click)=\"addDatos()\" expand=\"block\" color=\"primary\">\n    Agregar tarjeta\n  </ion-button>\n\n  <ion-list #myList>\n    <ion-list-header>\n      <ion-label position=\"center\">Mis Tarjetas</ion-label>\n    </ion-list-header>\n\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let dato of suscritos\">\n        <ion-item>\n          <ion-label text-wrap> \n            <ion-text color=\"primary\">\n            <h2>|Nombre Tarjeta|</h2><p>{{dato.nombanco}}</p>\n          </ion-text>\n            <ion-text color=\"primary\">\n              <h2>|Numero Tarjeta|</h2><p>{{dato.numtarjeta}}</p>\n              <h2>|Fecha Vencimiento|</h2><p>{{dato.fechvenc}}</p>\n              <h2>|CVV|</h2><p>{{dato.cvv}}</p>\n            </ion-text>\n            <p>{{dato.modified | date: 'short'}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"secondary\" (click)=\"updateDatos(dato)\">Actualizar</ion-item-option>\n         <ion-item-option color=\"danger\" (click)=\"deleteDatos(dato)\">Eliminar</ion-item-option> \n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-list>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_suscripcion_suscripcion_module_ts.js.map