"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pomucky_pomucky_module_ts"],{

/***/ 194:
/*!*********************************************************!*\
  !*** ./src/app/pages/pomucky/pomucky-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PomuckyPageRoutingModule": () => (/* binding */ PomuckyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pomucky_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pomucky.page */ 9180);




const routes = [
    {
        path: '',
        component: _pomucky_page__WEBPACK_IMPORTED_MODULE_0__.PomuckyPage
    }
];
let PomuckyPageRoutingModule = class PomuckyPageRoutingModule {
};
PomuckyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PomuckyPageRoutingModule);



/***/ }),

/***/ 9351:
/*!*************************************************!*\
  !*** ./src/app/pages/pomucky/pomucky.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PomuckyPageModule": () => (/* binding */ PomuckyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pomucky_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pomucky-routing.module */ 194);
/* harmony import */ var _pomucky_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pomucky.page */ 9180);







let PomuckyPageModule = class PomuckyPageModule {
};
PomuckyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pomucky_routing_module__WEBPACK_IMPORTED_MODULE_0__.PomuckyPageRoutingModule
        ],
        declarations: [_pomucky_page__WEBPACK_IMPORTED_MODULE_1__.PomuckyPage]
    })
], PomuckyPageModule);



/***/ }),

/***/ 9180:
/*!***********************************************!*\
  !*** ./src/app/pages/pomucky/pomucky.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PomuckyPage": () => (/* binding */ PomuckyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pomucky_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pomucky.page.html?ngResource */ 6410);
/* harmony import */ var _pomucky_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pomucky.page.scss?ngResource */ 4575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_pomucky_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pomucky.service */ 1393);







let PomuckyPage = class PomuckyPage {
    pomuckyService;
    router;
    sanitizer;
    pomucka;
    kroky;
    constructor(pomuckyService, router, sanitizer) {
        this.pomuckyService = pomuckyService;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        const nazev = (this.router.url.split('/'))[2];
        this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
        this.kroky = this.pomucka.kroky;
    }
    getEmbedVideo(embed) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embed}?showinfo=0&loop=1&modestbranding=1`);
    }
    static ctorParameters = () => [
        { type: src_app_services_pomucky_service__WEBPACK_IMPORTED_MODULE_2__.PomuckyService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
    ];
};
PomuckyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pomucky',
        template: _pomucky_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pomucky_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PomuckyPage);



/***/ }),

/***/ 1393:
/*!*********************************************!*\
  !*** ./src/app/services/pomucky.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PomuckyService": () => (/* binding */ PomuckyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const polePomucek = [
    {
        nazev: "hacek",
        title: "Háček",
        videoURL: "XL4ze9vLC3s",
        kroky: [
            {
                popis: "Existuje široká škála velikostí.",
                obrazek: null,
                exist: false,
            },
            {
                popis: "Háčky se dělají z různých materiálů.",
                obrazek: "hacek",
                exist: true,
            },
            {
                popis: "Mohou být zdobeny rukojeťmi, ergonomickými úchyty a podobně.",
                obrazek: "okrasny-hacek",
                exist: true,
            },
        ]
    },
    {
        nazev: "prize",
        title: "Příze",
        videoURL: "XL4ze9vLC3s",
        kroky: [
            {
                popis: "Dnes můžeme najít obrovské množství značek a materiálů (akrylové, bavlněné, směsové).",
                obrazek: "prize",
                exist: true,
            },
            {
                popis: "Na přebalu klubíčka bývá napsáno, kolik metrů obsahuje a na jak velký háček (popř. jehlice) je dělaná.",
                obrazek: null,
                exist: false,
            },
            {
                popis: "Samozřejmě můžete využít více velikostí na jeden typ příze (např.: Dolphin Baby se dá háčkovat s háčkem velikosti 4, 4.5 nebo 5 mm), ovlivňuje se tím však velikost oček.",
                obrazek: null,
                exist: false,
            },
        ]
    },
    {
        nazev: "znackovac",
        title: "Značkovač",
        videoURL: "XL4ze9vLC3s",
        kroky: [
            {
                popis: "Slouží nám k označení počátku řady, ale dá se použít i jiný kousek příze.",
                obrazek: null,
                exist: false,
            },
            {
                popis: "Značkovač je příjemná pomůcka, která se na trhu objevuje ve více variantách. Spirála je vhodnější pro silnější příze.",
                obrazek: "znackovac-spirala",
                exist: true,
            },
            {
                popis: "Tento má výhodu v tom, že se dá zavřít a je vhodný pro všechny typy příze.",
                obrazek: "znackovac",
                exist: true,
            },
        ]
    },
    {
        nazev: "jehla",
        title: "Jehla",
        videoURL: null,
        kroky: [
            {
                popis: "Na přišívání jednotlivých dílů, zapošívání nitě. Upřednostňované plastové jehly se více hodí, pokud děláte se silnějším typem příze.",
                obrazek: "jehla",
                exist: true,
            },
        ]
    },
    {
        nazev: "nuzky",
        title: "Nůžky",
        videoURL: null,
        kroky: [
            {
                popis: "Nůžky asi už někdy používal každý z nás a u háčkování to není nějak zvlášť jiné.",
                obrazek: "nuzky",
                exist: true,
            },
            {
                popis: "Klasické nůžky na papír nejsou na některé příze vhodné, protože potom ji přestříháváme na několikrát a akorát se nám konec třepí.",
                obrazek: "zdobneNuzky",
                exist: true,
            },
            {
                popis: "Můžete si pořídit nůžky na látku, nebo různé speciálně zdobené, tvarované.",
                obrazek: null,
                exist: false,
            },
        ]
    },
    {
        nazev: "bezpecnostni-oci-a-nos",
        title: "Bezpečnostní oči a nos",
        videoURL: null,
        kroky: [
            {
                popis: "Dnes se dá pořídit spousta tvarů, velikostí a barev očí a nosů s bezpečnostní pojistkou.",
                obrazek: "bezpecnostni-nos",
                exist: true,
            },
            {
                popis: "Uzavírají se jednoduše. Na závit se postupně nasouvá pojistka, která jde zaklapnout tolikrát, kolik má očko závitů.",
                obrazek: "zavit-a-pojistka",
                exist: true,
            },
            {
                popis: "Čím pevněji oko uzavřeme tím hezčí, nebo ošklivější efekt můžeme vytvořit. Je to kus od kusu, výrobek od výrobku.",
                obrazek: "bezpecnostni-oko",
                exist: true,
            },
        ]
    },
    {
        nazev: "chrastitko",
        title: "Chrastítko",
        videoURL: null,
        kroky: [
            {
                popis: "Pokud chcete svůj výrobek nějak ozvláštnit pro dítě, nebo třeba domácího mazlíčka, můžete dovnitř přidat chrastítko.",
                obrazek: "chrastitko",
                exist: true,
            },
            {
                popis: "Ty se dnes vyrábí v různých velikostech, tvarech a každé chrastí jinou intenzitou.",
                obrazek: "chrastitko-kulate",
                exist: true,
            },
        ]
    },
    {
        nazev: "pocitadlo",
        title: "Počítadlo",
        videoURL: null,
        kroky: [
            {
                popis: "Existuje počítadlo manuální a digitální. Obě mají stejný účel. Počítat řady, co jsme dosud vytvořili.",
                obrazek: null,
                exist: false,
            },
            {
                popis: "Manuální může vypadat jako válec a každá jeho strana se dá otáčet. Měníme tak číslovky od 0 do 9. Některá se dají připojit na háček, jiná musíte stále brát a pokládat bokem.",
                obrazek: "manualni",
                exist: true,
            },
            {
                popis: "Mnohem pohodlnější je z tohoto důvodu počítadlo digitální, které se dá připevnit na palec a pouhým mačkáním tlačítek buď posouváte číslo o , nebo celý proces resetujete. Existují i taková počítadla, která umí displej rozsvítit.",
                obrazek: "digitalni",
                exist: true,
            },
        ]
    },
    {
        nazev: "navijec-prize",
        title: "Navíječ příze",
        videoURL: null,
        kroky: [
            {
                popis: "Když se vám klubíčko zasukuje tak, že ho musíte celé rozplést, nebo se vám rozkutálí, tak je navíječ pomocník pro vás. Jedná se o nástroj, který dělá z kusu provázku opět klubíčko. Jednoduše upevníte jeden konec na horní otáčecí válec, přízi napnete a pak už jen točíte kličkou. Navíječ vytvoří klubíčko",
                obrazek: "navijec-prize",
                exist: true,
            },
        ]
    },
    {
        nazev: "vypln",
        title: "Výplň",
        videoURL: null,
        kroky: [
            {
                popis: "Pokud vytváříte něco prostorového (zvířátka, hračky, atd...), tak se vám bude hodit nějaká výplň. Tu může tvořit vata, nebo duté vlákno. Po delší době háčkování můžete použít i zbytky přízí z minulého tvoření. Je to taková recyklace, kterou já uplatňuji třeba u jehelníčků",
                obrazek: "vypln",
                exist: false,
            },
        ]
    }
];
let PomuckyService = class PomuckyService {
    pomucky;
    constructor() {
        this.initMap();
    }
    getPomuckaByName(name) {
        return this.pomucky.get(name);
    }
    initMap() {
        this.pomucky = new Map();
        polePomucek.forEach(pomucka => {
            this.pomucky.set(pomucka.nazev, pomucka);
        });
    }
    static ctorParameters = () => [];
};
PomuckyService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PomuckyService);



/***/ }),

/***/ 4575:
/*!************************************************************!*\
  !*** ./src/app/pages/pomucky/pomucky.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  background-color: #c8e7f4;\n  text-align: center;\n  color: #000;\n  border-radius: 10px;\n}\n\np {\n  text-align: left;\n}\n\nion-card-content {\n  margin-right: auto;\n}\n\n.pomucka {\n  max-width: 140px;\n  border-radius: 20px;\n  margin-top: 10px;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\n}\n\n.video {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  margin-top: 50px;\n}\n\n.video iframe {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n}\n\n.video-center {\n  margin: 16px;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbXVja3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InBvbXVja3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTdmNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnBvbXVja2Ege1xyXG4gICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi52aWRlbyBpZnJhbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udmlkZW8tY2VudGVyIHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 6410:
/*!************************************************************!*\
  !*** ./src/app/pages/pomucky/pomucky.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"lista\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{pomucka.title}}</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menuId=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let krok of kroky\">\r\n    <ion-card-content>\r\n        <p>{{krok.popis}} <br></p>\r\n        <img *ngIf=\"krok.exist\" src=\"../assets/icon/{{krok.obrazek}}.png\" class=\"pomucka\">\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div class=\"video-center\">\r\n    <div class=\"video\">\r\n      <iframe width=\"100%\" height=\"100%\" [src]=getEmbedVideo(pomucka.videoURL) title=\"YouTube video player\"\r\n        frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\r\n        allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pomucky_pomucky_module_ts.js.map