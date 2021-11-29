(self["webpackChunkhola_proyecto"] = self["webpackChunkhola_proyecto"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 6138:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1044);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 6138);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1044);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 1044:
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.page.html */ 4720);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 1694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);






let RegistroPage = class RegistroPage {
    constructor(storageService, plt, toastController) {
        this.storageService = storageService;
        this.plt = plt;
        this.toastController = toastController;
        this.registros = [];
        this.newRegistro = {};
        this.plt.ready().then(() => {
            this.loadDatos();
        });
    }
    ngOnInit() {
    }
    //get
    loadDatos() {
        this.storageService.getDatos().then(datos => {
            this.registros = datos;
        });
    }
    //create
    addDatos() {
        this.newRegistro.modified = Date.now();
        this.newRegistro.id = Date.now();
        this.storageService.addDatos(this.newRegistro).then(dato => {
            this.newRegistro = {};
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
            this.miList.closeSlidingItems();
            this.loadDatos();
        });
    }
    //delete
    deleteDatos(dato) {
        this.storageService.deleteDatos(dato.id).then(item => {
            this.showToast('Elemento eliminado');
            this.miList.closeSlidingItems();
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
RegistroPage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
RegistroPage.propDecorators = {
    miList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['miList',] }]
};
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroPage);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 1628);



const ITEMS_KEY = 'bd';
let DataService = class DataService {
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
DataService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 1694:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".text {\n  text-align: center;\n  width: 130px;\n  margin: 0px auto;\n}\n\n.cuenta {\n  text-align: center;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5jdWVudGF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 4720:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"Dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>CardSaver</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label position=\"floating\">Rut</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newRegistro.rut\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Nombre Completo</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newRegistro.nom\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Numero Celular</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newRegistro.numerocel\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Correo</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"newRegistro.email\" required></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Contraseña</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"newRegistro.contrasena\" required></ion-input>\n  </ion-item>\n  <br>\n  <ion-button class=\"text\" (click)=\"addDatos()\" expand=\"block\" color=\"primary\" routerLink=\"/login\">\n    Registrarse\n  </ion-button>\n      <ion-card-subtitle class=\"cuenta\">\n        <ion-button color=\"primary\" routerLink=\"/login\">\n        ¿Ya tienes cuenta?\n        </ion-button>\n        <ion-tab-button color=\"withe\" routerLink=\"/datos\">\n          Ir a \"¿Que deseas hacer?\"\n        </ion-tab-button>\n    </ion-card-subtitle>\n   \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map