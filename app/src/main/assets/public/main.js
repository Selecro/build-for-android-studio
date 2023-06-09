(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'slovnik/:nazevStylu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_slovnik_slovnik_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/slovnik/slovnik.module */ 88)).then(m => m.SlovnikPageModule)
    },
    {
        path: 'pomucky/:nazevPomucky',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pomucky_pomucky_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pomucky/pomucky.module */ 9351)).then(m => m.PomuckyPageModule)
    },
    {
        path: 'vyukovy-mod',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_application-pipes-module_module_ts-src_app_services_index_ts"), __webpack_require__.e("src_app_pages_vyukovy-mod_vyukovy-mod_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/vyukovy-mod/vyukovy-mod.module */ 2464)).then(m => m.VyukovyModPageModule)
    },
    {
        path: 'navody',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_application-pipes-module_module_ts-src_app_services_index_ts"), __webpack_require__.e("src_app_pages_navody_navody_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/navody/navody.module */ 1270)).then(m => m.NavodyPageModule)
    },
    {
        path: 'prihlaseni',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_prihlaseni_prihlaseni_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/prihlaseni/prihlaseni.module */ 712)).then(m => m.PrihlaseniPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
    static ctorParameters = () => [];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ 341);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [swiper_angular__WEBPACK_IMPORTED_MODULE_4__.SwiperModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy, }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header ion-toolbar ion-back-button {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGNBQUE7QUFEWiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-menu menuId=\"main-menu\" content-id=\"main\">\r\n    <ion-header>\r\n      <ion-toolbar class=\"lista\">\r\n        <ion-title>\r\n          Menu\r\n        </ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/home\">\r\n            <ion-icon slot=\"primary\"></ion-icon>\r\n            <ion-label>Selecro</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-accordion-group>\r\n          <ion-accordion>\r\n            <ion-item slot=\"header\">\r\n              <ion-label>Pomůcky</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-list slot=\"content\">\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/hacek\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Háček</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/prize\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Příze</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/znackovac\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Značkovač</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/jehla\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Jehla</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/nuzky\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Nůžky</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/bezpecnostni-oci-a-nos\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Bezpečnostní oči a nos</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/chrastitko\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Chrastítko</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/pocitadlo\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Počítadlo</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/navijec-prize\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Navíječ příze</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"pomucky/vypln\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Výplň</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n            </ion-list>\r\n          </ion-accordion>\r\n        </ion-accordion-group>\r\n\r\n        <ion-accordion-group>\r\n          <ion-accordion>\r\n            <ion-item slot=\"header\">\r\n              <ion-label>Slovník</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-list slot=\"content\">\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/retizkove-oko\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Řetízkové oko</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/pevne-oko\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Pevné oko</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/kratky-sloupek\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Krátký sloupek</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/polodlouhy-sloupek\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Polodlouhý sloupek</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/dlouhy-sloupek\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Dlouhý sloupek</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/rozhackovani\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Rozháčkování</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/shackovani\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Sháčkování</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle>\r\n                <ion-item routerLink=\"slovnik/magicky-krouzek\">\r\n                  <ion-icon></ion-icon>\r\n                  <ion-label>Magický kroužek</ion-label>\r\n                </ion-item>\r\n              </ion-menu-toggle>\r\n            </ion-list>\r\n          </ion-accordion>\r\n        </ion-accordion-group>\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/vyukovy-mod\">\r\n            <ion-icon slot=\"primary\"></ion-icon>\r\n            <ion-label>Výukový mód</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle>\r\n          <ion-item routerLink=\"/navody\">\r\n            <ion-icon slot=\"primary\"></ion-icon>\r\n            <ion-label>Návody</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"main\">\r\n\r\n  </ion-router-outlet>\r\n</ion-app>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map