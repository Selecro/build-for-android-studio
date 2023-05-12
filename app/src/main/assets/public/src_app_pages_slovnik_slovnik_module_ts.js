"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_slovnik_slovnik_module_ts"],{

/***/ 7002:
/*!*********************************************************!*\
  !*** ./src/app/pages/slovnik/slovnik-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlovnikPageRoutingModule": () => (/* binding */ SlovnikPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _slovnik_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slovnik.page */ 1779);




const routes = [
    {
        path: '',
        component: _slovnik_page__WEBPACK_IMPORTED_MODULE_0__.SlovnikPage
    }
];
let SlovnikPageRoutingModule = class SlovnikPageRoutingModule {
};
SlovnikPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SlovnikPageRoutingModule);



/***/ }),

/***/ 88:
/*!*************************************************!*\
  !*** ./src/app/pages/slovnik/slovnik.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlovnikPageModule": () => (/* binding */ SlovnikPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _slovnik_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slovnik-routing.module */ 7002);
/* harmony import */ var _slovnik_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slovnik.page */ 1779);







let SlovnikPageModule = class SlovnikPageModule {
};
SlovnikPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _slovnik_routing_module__WEBPACK_IMPORTED_MODULE_0__.SlovnikPageRoutingModule
        ],
        declarations: [_slovnik_page__WEBPACK_IMPORTED_MODULE_1__.SlovnikPage]
    })
], SlovnikPageModule);



/***/ }),

/***/ 1779:
/*!***********************************************!*\
  !*** ./src/app/pages/slovnik/slovnik.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlovnikPage": () => (/* binding */ SlovnikPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _slovnik_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slovnik.page.html?ngResource */ 2964);
/* harmony import */ var _slovnik_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slovnik.page.scss?ngResource */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dictionary.service */ 3254);






let SlovnikPage = class SlovnikPage {
    dictionaryService;
    router;
    styl;
    constructor(dictionaryService, router) {
        this.dictionaryService = dictionaryService;
        this.router = router;
    }
    ngOnInit() {
        const nazev = (this.router.url.split('/'))[2];
        this.styl = this.dictionaryService.getStylByName(nazev);
    }
    static ctorParameters = () => [
        { type: src_app_services_dictionary_service__WEBPACK_IMPORTED_MODULE_2__.DictionaryService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
    ];
};
SlovnikPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-slovnik',
        template: _slovnik_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_slovnik_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SlovnikPage);



/***/ }),

/***/ 3254:
/*!************************************************!*\
  !*** ./src/app/services/dictionary.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DictionaryService": () => (/* binding */ DictionaryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const poleStylu = [
    {
        nazev: "retizkove-oko",
        title: "Řetízkové oko",
        zkratka: "Řo",
        popis: "Vytvoříme si jednoduchý uzlík, který upevníme přímo na háček. Utahujeme pouze tak, aby prošla další příze. Naberu na háček a přitáhnu vytvořeným okem. Opakováním tohoto tahu vytvářím řetěz."
    },
    {
        nazev: "pevne-oko",
        title: "Pevné oko",
        zkratka: "Po",
        popis: "Ve vytvořené řadě výrobku si mohu udělat pevná oka. Pomáhají tvarovat záhyby, lokty, kolena nebo zakončují výrobek. To oka zajedu háčkem a přitáhnu přízi na druhou stranu, ale tentokrát narozdíl od ks tu druhou přízi přitáhnu tou první. Čím více budu utahovat, tím hůř se do něj pak dostanu. Pokud zakončujete, tak se v tomto bodě už jen ustřihne dostatečně dlouhá část příze na přišití a protáhnete konec vytvořeným okem na háčku."
    },
    {
        nazev: "kratky-sloupek",
        title: "Krátký sloupek",
        zkratka: "Ks",
        popis: "Do vytvořené řady řo najdu první oko. Do oka zajedu háčkem a protáhnu přízí na druhou stranu. Na háčku se mi nyní objeví 2 nahozené provázky, znovu naberu přízi na háček a provleču ji těma dvěma, co už tam čekaly."
    },
    {
        nazev: "dlouhy-sloupek",
        title: "Dlouhý sloupek",
        zkratka: "Ds",
        popis: "Nabereme přízi na háček a teprve potom zajedeme do vytvořeného oka. Máme 3 příze na háčku. Naberu a protahuju po dvou. Takže první dvojicí protáhnu první nahození, pak zase naberu a protáhnu zbylými dvěma"
    },
    {
        nazev: "polodlouhy-sloupek",
        title: "Polodlouhý sloupek",
        zkratka: "Pds",
        popis: "Nabereme přízi na háček a teprve potom zajedeme do vytvořeného oka. Protáhnu a na háčku mám nyní 3krát ovinutou přízi. Naberu na háček a tuto přízi protáhnu všemi třemi."
    },
    {
        nazev: "rozhackovani",
        title: "Rozháčkování",
        zkratka: "V",
        popis: "Krátký sloupek tak, jak ho známe, ale uděláme ho dvakrát v jednom bodě"
    },
    {
        nazev: "shackovani",
        title: "Sháčkování",
        zkratka: "A",
        popis: "Jde to dvěma různými způsoby.</p> <p>1) Protáhnu přízi dvěma po sobě následujícími oky. Držím tedy na háčku 3 provázky příze. Jednou nahodím a přitáhnu všemitřemi najednou.</p><p>2) Zasunu háček za přední nic a hned jdu to toho dalšího, kde taky vezmu jen přední nit. Nahodím a protahuju po dvojicích.</p> <p>U druhého způsobu se docílí toho, že nevznikají mezery mezi oky, což je ne vždy vidět a jde i o to, jak moc člověk utahuje. Každopádně nevýhodou je menší stahování, které se dožene šitím."
    },
    {
        nazev: "magicky-krouzek",
        title: "Magický kroužek",
        zkratka: "Mk",
        popis: "Dostatečný kus příze si položím mezi prostředníček a ukazováček levé ruky (pokud jsem pravák). Omotám kolem vnější strany ukazováčku, celého palce a vracím se zpět tam, kde začíná příze. Mezi prostředníček a ukazováček. Vytvořím tak „znak nekonečna“.</p><p>Vezmu si háček a podeberu vnitřní u palce, vnější přízi za křížem a vnější před křížem. Pravým ukazováčkem si pak tyto tři přehozené části podržím a naberu si přízi na levou ruku, jako bych chtěla začít háčkovat. Pak naberu na háček a protáhnu všemi třemi oky, při tom levým palcem a prostředníčkem držím vznikající kruh.</p><p>V tomto okamžiku se dostáváme do pevného bodu. Máme kruh a máme volný „špagátek“. Háčkujeme směrem doleva, tedy v protisměru hodinových ručiček. Háčkem nabereme kruh tím, že půjdeme zevnitř ven. Společně s kruhem budeme nabírat i svěšený provázek, díky kterému nakonec kruh utáhneme, aby byl opravdu kruhem."
    },
];
let DictionaryService = class DictionaryService {
    constructor() {
    }
    getStylByName(name) {
        return poleStylu.find(element => element.nazev == name);
    }
    static ctorParameters = () => [];
};
DictionaryService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DictionaryService);



/***/ }),

/***/ 4766:
/*!************************************************************!*\
  !*** ./src/app/pages/slovnik/slovnik.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  font-size: 1.2rem;\n}\n\nion-item-divider {\n  --background: none;\n  display: flex;\n  flex-direction: column;\n}\n\n.zkratka {\n  --background: #ffffff;\n  --color: #000000;\n  text-align: center;\n  padding: 25px;\n  font-size: xx-large;\n}\n\n.znacka {\n  background-color: #ffffff;\n  padding: 5px;\n}\n\nion-card {\n  --background: #c8e7f4;\n  --color: #000000;\n  border-radius: 10px;\n}\n\nion-card-header {\n  display: flex;\n}\n\nh4 {\n  text-align: center;\n}\n\n.obraz {\n  height: 78px;\n  width: 78.55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsb3ZuaWsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzbG92bmlrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5pb24taXRlbS1kaXZpZGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uemtyYXRrYSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi56bmFja2Ege1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzhlN2Y0O1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vYnJheiB7XHJcbiAgICBoZWlnaHQ6IDc4cHg7XHJcbiAgICB3aWR0aDogNzguNTVweDtcclxufSJdfQ== */";

/***/ }),

/***/ 2964:
/*!************************************************************!*\
  !*** ./src/app/pages/slovnik/slovnik.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"lista\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button slot=\"end\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{styl.title}}</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menuId=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item-divider>\r\n        <ion-card-title>Zkratka:</ion-card-title>\r\n        <ion-card class=\"zkratka\">\r\n          {{styl.zkratka}}\r\n        </ion-card>\r\n      </ion-item-divider>\r\n      <ion-item-divider>\r\n        <ion-card-title>Značka:</ion-card-title>\r\n        <ion-card class=\"znacka\">\r\n          <ion-img class=\"obraz\" src=\"assets/icon/{{styl.nazev}}.svg\"></ion-img>\r\n        </ion-card>\r\n      </ion-item-divider>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p><strong>Popis</strong></p>\r\n      <p innerHTML=\"{{styl.popis}}\"></p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <h4>Animace</h4>\r\n  <ion-card><ion-img src=\"assets/icon/{{styl.nazev}}.gif\"></ion-img></ion-card>\r\n  <h4>Ve skutečnosti</h4>\r\n  <ion-card><ion-img src=\"assets/icon/{{styl.nazev}}-real.png\"></ion-img></ion-card>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_slovnik_slovnik_module_ts.js.map