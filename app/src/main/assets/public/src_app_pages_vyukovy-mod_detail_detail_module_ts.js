"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_vyukovy-mod_detail_detail_module_ts"],{

/***/ 960:
/*!*******************************************************************!*\
  !*** ./src/app/pages/vyukovy-mod/detail/detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageRoutingModule": () => (/* binding */ DetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page */ 6491);




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

/***/ 3204:
/*!***********************************************************!*\
  !*** ./src/app/pages/vyukovy-mod/detail/detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageModule": () => (/* binding */ DetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-routing.module */ 960);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page */ 6491);








let DetailPageModule = class DetailPageModule {
};
DetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailPageRoutingModule
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_1__.DetailPage]
    })
], DetailPageModule);



/***/ }),

/***/ 6491:
/*!*********************************************************!*\
  !*** ./src/app/pages/vyukovy-mod/detail/detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPage": () => (/* binding */ DetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page.html?ngResource */ 9503);
/* harmony import */ var _detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page.scss?ngResource */ 4796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 1866);







let DetailPage = class DetailPage {
    vyukaService;
    activatedRoute;
    sanitizer;
    swiper;
    config = {
        loop: true
    };
    vyrobek;
    kroky;
    constructor(vyukaService, activatedRoute, sanitizer) {
        this.vyukaService = vyukaService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        const nazev = this.activatedRoute.snapshot.paramMap.get('nazevVyrobku');
        this.vyrobek = this.vyukaService.getVyrobekByName(nazev);
        this.kroky = this.vyrobek.kroky;
    }
    ngOnInit() {
    }
    getEmbedVideo(embed) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embed}?showinfo=0&loop=1&modestbranding=1`);
    }
    goToNextSlide() {
        this.swiper.swiperRef.slideNext();
    }
    goToPreviousSlide() {
        this.swiper.swiperRef.slidePrev();
    }
    static ctorParameters = () => [
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.VyukaService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
    ];
    static propDecorators = {
        swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['swiper',] }]
    };
};
DetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detail',
        template: _detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailPage);



/***/ }),

/***/ 4796:
/*!**********************************************************************!*\
  !*** ./src/app/pages/vyukovy-mod/detail/detail.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".video-center {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n  height: auto;\n  text-align: center;\n}\n\n.video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n}\n\n.karta-popisu {\n  --background: #4FC4F5;\n  color: white;\n}\n\n.footer-button {\n  flex: 0 1 auto;\n  width: 20%;\n  --background: #4FC4F5;\n}\n\n.footer-buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmthcnRhLXBvcGlzdSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0RkM0RjU7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmZvb3Rlci1idXR0b24ge1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEZDNEY1O1xyXG59XHJcblxyXG4uZm9vdGVyLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMCA1JTtcclxufSJdfQ== */";

/***/ }),

/***/ 9503:
/*!**********************************************************************!*\
  !*** ./src/app/pages/vyukovy-mod/detail/detail.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"lista\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{vyrobek.title}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <swiper #swiper [config]=\"config\">\r\n    <ng-template swiperSlide *ngFor=\"let krok of kroky\">\r\n      <ion-card class=\"karta-popisu\">\r\n        <ion-card-content>\r\n          <div class=\"text\">\r\n            <b>Krok:</b>\r\n            {{krok.cislo}}\r\n            <br>\r\n            <div *ngIf=\"krok.styl != null\">\r\n              <b>Styl:</b>\r\n              {{krok.styl}}\r\n              <br>\r\n            </div>\r\n            <b>Pomůcky:</b> {{krok.pouzijeme}}\r\n            <br>\r\n            <b>Popis:</b>\r\n            <p class=\"popisek\" [innerHtml]=\"krok.popis\"></p>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <div class=\"video-center\">\r\n        <div class=\"video\">\r\n          <iframe width=\"100%\" height=\"100%\" [src]=getEmbedVideo(krok.videoUrl) title=\"YouTube video player\"\r\n            frameborder=\"0\"\r\n            allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\r\n            allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </swiper>\r\n</ion-content>\r\n\r\n<ion-toolbar>\r\n  <div class=\"footer-buttons\">\r\n    <ion-button start class=\"footer-button\" (click)=\"goToPreviousSlide()\" shape=\"round\">\r\n      <ion-icon size=\"small\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button end class=\"footer-button\" (click)=\"goToNextSlide()\" shape=\"round\">\r\n      <ion-icon size=\"small\" name=\"arrow-forward-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-toolbar>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vyukovy-mod_detail_detail_module_ts.js.map