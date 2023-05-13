"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_navody_vnitrek_vnitrek_module_ts"],{

/***/ 9681:
/*!****************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/vnitrek-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VnitrekPageRoutingModule": () => (/* binding */ VnitrekPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _vnitrek_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnitrek.page */ 4225);




const routes = [
    {
        path: '',
        component: _vnitrek_page__WEBPACK_IMPORTED_MODULE_0__.VnitrekPage
    },
    {
        path: 'detail/:nazevDetailu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_navody_vnitrek_detail_detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./detail/detail.module */ 1662)).then(m => m.DetailPageModule)
    }
];
let VnitrekPageRoutingModule = class VnitrekPageRoutingModule {
};
VnitrekPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VnitrekPageRoutingModule);



/***/ }),

/***/ 1968:
/*!********************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/vnitrek.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VnitrekPageModule": () => (/* binding */ VnitrekPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _vnitrek_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnitrek-routing.module */ 9681);
/* harmony import */ var _vnitrek_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnitrek.page */ 4225);







let VnitrekPageModule = class VnitrekPageModule {
};
VnitrekPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vnitrek_routing_module__WEBPACK_IMPORTED_MODULE_0__.VnitrekPageRoutingModule
        ],
        declarations: [_vnitrek_page__WEBPACK_IMPORTED_MODULE_1__.VnitrekPage]
    })
], VnitrekPageModule);



/***/ }),

/***/ 4225:
/*!******************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/vnitrek.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VnitrekPage": () => (/* binding */ VnitrekPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _vnitrek_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnitrek.page.html?ngResource */ 1738);
/* harmony import */ var _vnitrek_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vnitrek.page.scss?ngResource */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 1866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let VnitrekPage = class VnitrekPage {
    router;
    navodyService;
    route;
    navod;
    name;
    element0;
    constructor(router, navodyService, route) {
        this.router = router;
        this.navodyService = navodyService;
        this.route = route;
        route.params.subscribe(val => {
            this.name = (this.router.url.split('/'))[3];
            this.navod = this.navodyService.getNavodyByName(this.name);
            this.element0 = document.getElementsByName("element0");
            try {
                if (localStorage.getItem("finished") != "null") {
                    if (this.element0.item(Number(localStorage.getItem("finished"))).getAttribute("style")) {
                        this.element0.item(Number(localStorage.getItem("finished"))).removeAttribute("style");
                    }
                    else {
                        this.element0.item(Number(localStorage.getItem("finished"))).setAttribute("style", "background-color: #32CD32");
                    }
                }
            }
            catch (e) {
            }
        });
    }
    ngOnInit() {
    }
    finished(nazevCasti) {
        if (this.element0.item(this.navod.popisy.findIndex(x => x.nazevCasti == nazevCasti)).getAttribute("style")) {
            localStorage.setItem("finished", "true");
        }
        else {
            localStorage.setItem("finished", "false");
        }
    }
    static ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.NavodyService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
    ];
};
VnitrekPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-vnitrek',
        template: _vnitrek_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vnitrek_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VnitrekPage);



/***/ }),

/***/ 8198:
/*!*******************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/vnitrek.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  padding: 20px;\n}\n\n.obraz {\n  height: auto;\n  width: 100%;\n  max-width: 120px;\n  border-radius: 10px;\n}\n\n.line {\n  height: 1px;\n  background-color: #000;\n  width: 100%;\n  margin: auto;\n  opacity: 50%;\n}\n\n.card {\n  width: 50%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n\n#cards {\n  display: flex;\n}\n\nbutton {\n  background-color: #FF7B7B;\n  color: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  width: 100%;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZuaXRyZWsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InZuaXRyZWsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ub2JyYXoge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNjYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGN0I3QjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */";

/***/ }),

/***/ 1738:
/*!*******************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/vnitrek.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"lista\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{navod.title}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <div id=\"cards\">\r\n      <div class=\"card\">\r\n        <b>Budeme potřebovat:</b>\r\n        <p>{{navod.pomucky}}</p>\r\n        <b>Použijeme tyto styly:</b>\r\n        <div>\r\n          {{navod.zkratky}}\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <img class=\"obraz\" src=\"assets/icon/{{navod.nazev}}.jpg\">\r\n      </div>\r\n    </div>\r\n    <div class=\"line\"></div>\r\n    <div style=\"height: 20px;\"></div>\r\n    <p *ngFor=\"let popis of navod.popisy\">\r\n      <button name=\"element0\" (click)=\"finished(popis.nazevCasti)\" routerLink=\"detail/{{popis.nazevCasti}}\">\r\n        {{popis.titulekCasti}}\r\n      </button>\r\n    </p>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_navody_vnitrek_vnitrek_module_ts.js.map