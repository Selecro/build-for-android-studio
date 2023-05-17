"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_navody_vnitrek_detail_detail_module_ts"],{

/***/ 3631:
/*!**********************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/detail/detail-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageRoutingModule": () => (/* binding */ DetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page */ 8018);




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_0__.DetailPage
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ 1662:
/*!**************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/detail/detail.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageModule": () => (/* binding */ DetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-routing.module */ 3631);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page */ 8018);







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailPageRoutingModule
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_1__.DetailPage]
    })
], DetailPageModule);



/***/ }),

/***/ 8018:
/*!************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/detail/detail.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPage": () => (/* binding */ DetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page.html?ngResource */ 3377);
/* harmony import */ var _detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page.scss?ngResource */ 4303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 1866);






let DetailPage = class DetailPage {
    router;
    navodyService;
    navod;
    name;
    element;
    intervalId;
    timer = 0;
    index;
    index0;
    executed = 0;
    constructor(router, navodyService) {
        this.router = router;
        this.navodyService = navodyService;
    }
    ngOnInit() {
        this.name = (this.router.url.split('/'))[3];
        this.navod = this.navodyService.getNavodyByName(this.name);
        this.index = this.navod.popisy.findIndex(x => x.nazevCasti === this.router.url.split('/')[5]);
        this.element = document.getElementsByName("element");
        this.index0 = 0;
        if (localStorage.getItem("time") != "null") {
            this.timer = Number(localStorage.getItem("time"));
        }
        this.time();
        localStorage.setItem("time", "null");
    }
    crossLine() {
        if (localStorage.getItem("finished") == "true") {
            this.element.forEach(x => x.setAttribute("style", "text-decoration: line-through; color: gray"));
            this.index0 = this.element.length;
        }
        else if (localStorage.getItem("finished") == "false") {
            this.element.forEach(x => x.removeAttribute("style"));
            this.index0 = 0;
        }
    }
    get minutes() {
        return Math.floor(this.timer / 60) % 60;
    }
    get seconds() {
        if (this.executed <= 2) {
            this.crossLine();
            this.executed++;
        }
        return ("00" + this.timer % 60).slice(-2);
    }
    time() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = 0;
        }
        else if (!this.intervalId) {
            this.intervalId = setInterval(() => this.timer++, 1000);
        }
    }
    previousIndex() {
        if (this.index0 > 0) {
            this.element?.item(--this.index0).removeAttribute("style");
        }
    }
    nextIndex() {
        if (this.index0 + 1 < this.navod.popisy[this.index].popis.length) {
            this.element?.item(this.index0++).setAttribute("style", "text-decoration: line-through; color: gray");
        }
        else {
            this.finished();
            this.router.navigate(["/navody/vnitrek/" + this.navod.nazev]);
        }
    }
    finished() {
        this.element.forEach(x => x.removeAttribute("style"));
        this.time();
        localStorage.setItem("time", this.timer);
        localStorage.setItem("finished", String(this.index));
    }
    back() {
        this.element.forEach(x => x.removeAttribute("style"));
        this.time();
        localStorage.setItem("time", this.timer);
        localStorage.setItem("finished", "null");
    }
    static ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.NavodyService }
    ];
};
DetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detail',
        template: _detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailPage);



/***/ }),

/***/ 4303:
/*!*************************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/detail/detail.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".footer-button {\n  flex: 0 1 auto;\n  width: 20%;\n  --background: #4FC4F5;\n}\n\n.footer-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n\n#container {\n  padding: 20px;\n}\n\n.card {\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px;\n}\n\n.obraz {\n  margin: unset;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  margin-right: 30px;\n}\n\n.popis {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJ1dHRvbiB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0RkM0RjU7XHJcbn1cclxuXHJcbi5mb290ZXItYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ub2JyYXoge1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnBvcGlzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 3377:
/*!*************************************************************************!*\
  !*** ./src/app/pages/navody/vnitrek/detail/detail.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"lista\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"back()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{navod.popisy[index].titulekCasti}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"container\">\r\n    <div class=\"card\">\r\n      <div class=\"column\">\r\n        <div *ngIf=\"navod.popisy[index].zkratkyCasti != null\"><strong>Použijeme tyto styly:</strong></div>\r\n        {{navod.popisy[index].zkratkyCasti}}\r\n      </div>\r\n      <img class=\"obraz\" src=\"assets/icon/{{navod.popisy[index].nazevCasti}}.jpg\">\r\n    </div>\r\n    <div class=\"line\"></div>\r\n    <br>\r\n    <button (click)=\"time()\">\r\n      {{ minutes }}:{{ seconds }}\r\n    </button>\r\n    <div class=\"popis\" name=\"element\" *ngFor=\"let item of navod.popisy[index].popis\">\r\n      {{item}}\r\n    </div>\r\n\r\n    <ion-toolbar>\r\n      <div class=\"footer-buttons\">\r\n        <ion-button start class=\"footer-button\" shape=\"round\" (click)=\"previousIndex()\">\r\n          <ion-icon size=\"small\" name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button routerLink=\"../../\" (click)=\"finished()\">Hotovo</ion-button>\r\n        <ion-button end class=\"footer-button\" shape=\"round\" (click)=\"nextIndex()\">\r\n          <ion-icon size=\"small\" name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-toolbar>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_navody_vnitrek_detail_detail_module_ts.js.map