(self["webpackChunktrabajogus"] = self["webpackChunktrabajogus"] || []).push([["src_app_pages_noticias_noticias_module_ts"],{

/***/ 5861:
/*!***********************************************************!*\
  !*** ./src/app/pages/noticias/noticias-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageRoutingModule": () => (/* binding */ NoticiasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.page */ 792);




const routes = [
    {
        path: '',
        component: _noticias_page__WEBPACK_IMPORTED_MODULE_0__.NoticiasPage
    }
];
let NoticiasPageRoutingModule = class NoticiasPageRoutingModule {
};
NoticiasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticiasPageRoutingModule);



/***/ }),

/***/ 9623:
/*!***************************************************!*\
  !*** ./src/app/pages/noticias/noticias.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageModule": () => (/* binding */ NoticiasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias-routing.module */ 5861);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page */ 792);







let NoticiasPageModule = class NoticiasPageModule {
};
NoticiasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticiasPageRoutingModule
        ],
        declarations: [_noticias_page__WEBPACK_IMPORTED_MODULE_1__.NoticiasPage]
    })
], NoticiasPageModule);



/***/ }),

/***/ 792:
/*!*************************************************!*\
  !*** ./src/app/pages/noticias/noticias.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPage": () => (/* binding */ NoticiasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_noticias_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./noticias.page.html */ 5110);
/* harmony import */ var _noticias_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page.scss */ 4399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/noticias.service */ 7987);





let NoticiasPage = class NoticiasPage {
    constructor(noticiasService) {
        this.noticiasService = noticiasService;
        //objeto tipo arreglo de la interfaz Article
        this.noticias = [];
    }
    ngOnInit() {
        this.noticiasService.getTopHeadLines().subscribe(resp => {
            console.log('noticias', resp);
            //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio.
            this.noticias.push(...resp.articles);
        });
    }
};
NoticiasPage.ctorParameters = () => [
    { type: src_app_services_noticias_service__WEBPACK_IMPORTED_MODULE_2__.NoticiasService }
];
NoticiasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-noticias',
        template: _raw_loader_noticias_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_noticias_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NoticiasPage);



/***/ }),

/***/ 7987:
/*!**********************************************!*\
  !*** ./src/app/services/noticias.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasService": () => (/* binding */ NoticiasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let NoticiasService = class NoticiasService {
    constructor(http) {
        this.http = http;
    }
    getTopHeadLines() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fc7d9914898440dbbd18848dcadd6851');
    }
};
NoticiasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
NoticiasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NoticiasService);



/***/ }),

/***/ 4399:
/*!***************************************************!*\
  !*** ./src/app/pages/noticias/noticias.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".text {\n  color: var(--ion-color-primary) !important;\n}\n\n.noticia-name {\n  font-size: 12px;\n  color: lightgray;\n  text-align: justify;\n}\n\n.noticia-description {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDBDQUFBO0FBQUo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESiIsImZpbGUiOiJub3RpY2lhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubm90aWNpYS1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6bGlnaHRncmF5O1xyXG4gICAgdGV4dC1hbGlnbjpqdXN0aWZ5XHJcbn1cclxuXHJcbi5ub3RpY2lhLWRlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjpqdXN0aWZ5XHJcbn0iXX0= */");

/***/ }),

/***/ 5110:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/noticias/noticias.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"dark\">\n    <ion-title>Duoc News</ion-title>   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"dark\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\n                  *ngFor =\"let noticia of noticias; let i= index\">\n\n            <ion-card  color=\"dark\">\n              <ion-card-header>\n                <ion-card-subtitle>\n                    <span class=\"text\">{{i + 1 }}</span>\n                    <span class=\"noticia-name\">{{noticia.source.name}} </span>\n                </ion-card-subtitle>\n                <ion-card-title>{{noticia.title}}</ion-card-title>\n              </ion-card-header>    \n              \n              <ion-img  *ngIf=\"noticia.urlToImage\"\n                        [src]=\"noticia.urlToImage\"></ion-img>   \n              \n              <ion-card-content>\n                <p class=\"noticia-description\">\n                  {{noticia.description}}\n                </p>\n              </ion-card-content>          \n            </ion-card>\n        </ion-col>  \n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_noticias_noticias_module_ts.js.map