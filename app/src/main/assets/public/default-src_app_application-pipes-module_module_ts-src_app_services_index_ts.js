"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_application-pipes-module_module_ts-src_app_services_index_ts"],{

/***/ 848:
/*!****************************************************!*\
  !*** ./src/app/application-pipes-module.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationPipesModuleModule": () => (/* binding */ ApplicationPipesModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _callback_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callback.pipe */ 7041);
/* harmony import */ var _premiove_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premiove.pipe */ 6460);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.pipe */ 9175);






let ApplicationPipesModuleModule = class ApplicationPipesModuleModule {
};
ApplicationPipesModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _callback_pipe__WEBPACK_IMPORTED_MODULE_0__.CallbackPipe,
            _premiove_pipe__WEBPACK_IMPORTED_MODULE_1__.PremiovePipe,
            _search_pipe__WEBPACK_IMPORTED_MODULE_2__.SearchPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ],
        exports: [
            _callback_pipe__WEBPACK_IMPORTED_MODULE_0__.CallbackPipe,
            _premiove_pipe__WEBPACK_IMPORTED_MODULE_1__.PremiovePipe,
            _search_pipe__WEBPACK_IMPORTED_MODULE_2__.SearchPipe
        ]
    })
], ApplicationPipesModuleModule);



/***/ }),

/***/ 7041:
/*!**********************************!*\
  !*** ./src/app/callback.pipe.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackPipe": () => (/* binding */ CallbackPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let CallbackPipe = class CallbackPipe {
    transform(records, property) {
        let sortedArray = [];
        if (property != null) {
            return records.filter(item => item.obtiznost == property);
        }
        else {
            return records;
        }
    }
};
CallbackPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'callback',
        pure: false
    })
], CallbackPipe);



/***/ }),

/***/ 6460:
/*!**********************************!*\
  !*** ./src/app/premiove.pipe.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PremiovePipe": () => (/* binding */ PremiovePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let PremiovePipe = class PremiovePipe {
    transform(records, property) {
        let sortedArray = [];
        if (property == true) {
            sortedArray = records.filter(item => item.premiove == property);
            return sortedArray;
        }
        else {
            return records;
        }
    }
};
PremiovePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'premiove',
        pure: false
    })
], PremiovePipe);



/***/ }),

/***/ 9175:
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SearchPipe = class SearchPipe {
    transform(records, property) {
        let sortedArray = [];
        if (property != null) {
            sortedArray = records.filter(item => item.nazev == property);
            return sortedArray;
        }
        else {
            return records;
        }
    }
};
SearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'search',
        pure: false
    })
], SearchPipe);



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

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DictionaryService": () => (/* reexport safe */ _dictionary_service__WEBPACK_IMPORTED_MODULE_0__.DictionaryService),
/* harmony export */   "NavodyService": () => (/* reexport safe */ _navody_service__WEBPACK_IMPORTED_MODULE_2__.NavodyService),
/* harmony export */   "PomuckyService": () => (/* reexport safe */ _pomucky_service__WEBPACK_IMPORTED_MODULE_3__.PomuckyService),
/* harmony export */   "VyukaService": () => (/* reexport safe */ _vyuka_service__WEBPACK_IMPORTED_MODULE_1__.VyukaService)
/* harmony export */ });
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary.service */ 3254);
/* harmony import */ var _vyuka_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vyuka.service */ 4212);
/* harmony import */ var _navody_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navody.service */ 5027);
/* harmony import */ var _pomucky_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pomucky.service */ 1393);






/***/ }),

/***/ 5027:
/*!********************************************!*\
  !*** ./src/app/services/navody.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavodyService": () => (/* binding */ NavodyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ 4984);



const poleNavodu = [
    {
        obtiznost: _types__WEBPACK_IMPORTED_MODULE_0__.Obtiznost.lehky,
        nazev: "dinosaurus",
        title: "Dinosaurus",
        zkratky: "Mk, V, Ks, A, Po, Řo",
        pomucky: "Háček (velikosti 2mm), jehla, značkovač, duté vlákno, bezpečnostní očka",
        premiove: false,
        popisy: [
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, A, Po",
                nazevCasti: "hlava-dinosaura",
                titulekCasti: "Hlava",
                popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "ks (6 řad)", "5ks, A", "4ks, A", "3ks, A", "2ks, A", "ks, A", "A", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, A, Po",
                nazevCasti: "nos-dinosaura",
                titulekCasti: "Nos",
                popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "ks (3 řady)", "3ks, A", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, A, Po",
                nazevCasti: "telo-dinosaura",
                titulekCasti: "Tělo",
                popis: ["Mk (6)", "V", "ks, V", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "ks (3 řady)", "6ks, A", "5ks, A", "4ks, A", "ks (3 řady)", "3ks, A", "ks (1 řada)", "2ks, A", "ks (1 řada)", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, Po",
                nazevCasti: "predni-noha-dinosaura",
                titulekCasti: "Přední noha (2x)",
                popis: ["Mk (6)", "V", "ks (7 řad)", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, A, Po",
                nazevCasti: "zadni-noha-dinosaura",
                titulekCasti: "Zadní noha (2x)",
                popis: ["Mk (6)", "V", "ks, V", "2ks, V", "ks (2 řady)", "2ks, A", "4A, 10ks", "2A, 10ks", "ks (8 řad)", "A", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, Po",
                nazevCasti: "ocas-dinosaura",
                titulekCasti: "Ocas",
                popis: ["Mk (6)", "V", "11ks, V", "12ks, V", "13ks, V", "14ks, V", "15ks, V", "16ks, V", "17ks, V", "18ks, V", "19ks, V", "20ks, V", "21ks, V", "22ks, V", "23ks, V", "Po", ""]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, Po",
                nazevCasti: "osten-dinosaura",
                titulekCasti: "Osten (6x)",
                popis: ["Mk (6)", "2ks, V", "3ks, V", "4ks, V", "5ks, V", "6ks, V", "Po"]
            }
        ]
    },
    {
        obtiznost: _types__WEBPACK_IMPORTED_MODULE_0__.Obtiznost.stredni,
        nazev: "harold",
        title: "Harold",
        zkratky: "Mk, Ks, Řo, Po, V, A",
        pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
        premiove: false,
        popisy: [
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, A, Po",
                nazevCasti: "hlava-harold",
                titulekCasti: "Hlava",
                popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (6 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Řo, V, Po",
                nazevCasti: "chapadla-harold",
                titulekCasti: "Chapadla",
                popis: ["6*(25řo, otočím směr háčkování a střídám 2V, W, Po do dalšího oka opět za vnější přízi) "]
            },
            {
                obrazek: true,
                zkratkyCasti: null,
                nazevCasti: "vyplneni-harold",
                titulekCasti: "Vyplnění",
                popis: ["Nezapomeňte v tomto bodě vyplnit."]
            },
            {
                obrazek: true,
                zkratkyCasti: "A, Po",
                nazevCasti: "uzavreni-harold",
                titulekCasti: "Uzavření",
                popis: ["A", "Po na zakončení, necháme si delší kus příze na zapošití."]
            },
            {
                obrazek: true,
                zkratkyCasti: null,
                nazevCasti: "doplnky-harold",
                titulekCasti: "Doplňky",
                popis: ["Obočí a pusinku našijeme černou přízí."]
            }
        ]
    },
    {
        obtiznost: _types__WEBPACK_IMPORTED_MODULE_0__.Obtiznost.tezky,
        nazev: "vodni-zelva",
        title: "Vodní želva",
        zkratky: "Mk, Ks, Řo, Po, V, A",
        pomucky: "Háček (velikost 3,5 mm), jehla, příze (Jeans), značkovač, bezpečnostní očka (10 mm), výplň",
        premiove: true,
        popisy: [
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, A, Po",
                nazevCasti: "hlava-zelva",
                titulekCasti: "Hlava",
                popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "ks (4 řad)", "4 ks, A", "3 ks, A", "2 ks, A", "ks, A", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, A, Po",
                nazevCasti: "horni-cast-krunyre-zelva",
                titulekCasti: "Horní část krunýře",
                popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "ks (3 řady)", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, Po",
                nazevCasti: "spodni-cast-krunyre-zelva",
                titulekCasti: "Spodní část krunýře",
                popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po"]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, Po",
                nazevCasti: "zadni-ploutev-zelva",
                titulekCasti: "Zadní ploutev (2x)",
                popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
            },
            {
                obrazek: true,
                zkratkyCasti: "Mk, V, Ks, Po",
                nazevCasti: "predni-ploutev-zelva",
                titulekCasti: "Přední ploutev (2x)",
                popis: ["Mk (8)", "V", "ks, V", "2 ks, V", "3 ks, V", "4 ks, V", "5 ks, V", "6ks, V", "Po", "Po dokončení kolečko ohneme napůl a sešijeme k sobě."]
            },
            {
                obrazek: false,
                zkratkyCasti: "Mk, Ks, Po",
                nazevCasti: "ocasek-zelva",
                titulekCasti: "Ocásek",
                popis: ["Mk (4)", "ks (2 řady)", "Po"]
            },
        ],
    },
];
let NavodyService = class NavodyService {
    constructor() {
    }
    getNavodyByName(name) {
        return poleNavodu.find(element => element.nazev == name);
    }
    getVsechnyNavody() {
        return poleNavodu;
    }
    getPopisy(titl) {
        let index = poleNavodu.findIndex(x => x.title == titl);
        return poleNavodu[index].popisy;
    }
    static ctorParameters = () => [];
};
NavodyService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NavodyService);



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

/***/ 4212:
/*!*******************************************!*\
  !*** ./src/app/services/vyuka.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VyukaService": () => (/* binding */ VyukaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const poleVyrobku = [
    {
        nazev: "chobotnice",
        title: "Chobotnička",
        popis: "Navod na vytvoreni chobotnicky",
        pocet: "12",
        cas: "60min",
        kroky: [{
                cislo: "1.",
                styl: "Mk",
                pouzijeme: "Háček, značkovač",
                popis: "Nejdůležitější na tomto kroku je neutahovat, abyste byli schopni konečný výsledek utáhnout. Neustále si hlídám zadní nit, aby mi neutekla. Potřebujeme ji tam mít zaháčkovanou, abychom měli vůbec možnost utáhnout celý kroužek.</p><p>Postup na magický kroužek je uveden ve slovníku v jeho samostatné kapitole. Existuje však spousta způsobů, jak jej vytvořit. Ve většině způsobů se dostanete ke stejnému základu, jako ve videu (viz 35 vteřina). Můžeme k tomu však použít i pouhá 2 řetízková oka, vrátit se a udělat do toho prvního 6 ks.",
                videoUrl: "06DsV4I1fN8"
            },
            {
                cislo: "2.",
                styl: "V",
                pouzijeme: "Háček, značkovač",
                popis: "Tomuto kroku se říká rozháčkování, nebo-li rozšiřování. Díky němu budeme schopni náš výrobek zvětšovat. Rozháčkování lze aplikovat na skoro na každý styl. Nejčastěji je používám v souvislosti s krátkým, dlouhými, nebo polodlouhými sloupky.</p><p>Stále si budeme udržovat zadní nit v kroku, abychom mohli utáhnout a zbavit se tak případné mezery v magickém kroužku.",
                videoUrl: "TW0VbGVXBps"
            },
            {
                cislo: "3.",
                styl: "Ks, V",
                pouzijeme: "Háček, značkovač",
                popis: "Postupné rozšiřování. Pokud chceme tvořit pravidelný tvar, je potřeba pravidelně výrobek zvětšovat. Kvůli tomu budeme postupovat tak, že budeme stále používat rozháčkování, ale v kombinaci s krátkými sloupky. </p><p>Představte si to, jako by minulý krok byl 0ks, V a teď budeme pokračovat 1ks, V a pak 2ks, V.",
                videoUrl: "Ivyrl2Mb2o8"
            },
            {
                cislo: "4. a 5.",
                styl: "Ks",
                pouzijeme: "Háček, značkovač",
                popis: "Následující 2 řady budou stejné, abychom docílili nějakého tvaru. Rozšířili jsme dostatečně, ale za pomoci těchto řad se nám chobotnička ještě trošku zvětší. Kdybyste ji chtěli vyšší, musíte přidat více řad.",
                videoUrl: "WJJbSN6qTpc"
            },
            {
                cislo: "6.",
                styl: "Ks, A",
                pouzijeme: "Háček, značkovač",
                popis: "Stejně jako u kroku 3 jsme zvětšovali chobotničku, tak teď ji budeme pro změnu uzavírat. Opět to napomáhá k tvarování hlavičky chobotnice. Značka <i>A</i> je stažení, jinak řečeno sháčkování. Docílíme ho za pomoci spojení 2 krátkých sloupků.",
                videoUrl: "MwfZ48fExG0"
            },
            {
                cislo: "7.",
                styl: "A",
                pouzijeme: "Háček, značkovač",
                popis: "Tímto krokem pokračujeme v postupném sháčkování. U většiny výrobků by byl tohle poslední krok, ale tím, že mi děláme chapadla jednolitě s hlavičkou, budeme pokračovat. Je potřeba tento krok moc nestahovat. Snažit se dělat větší mezery, aby se dalo navázat chapadly.</p><p>Posledním pevným okem celý výrobek uzavřeme a je nutné nechat si delší konečnou nit, abychom měli po vyplnění, jak uzavřít spodek chobotničky.",
                videoUrl: "GAR5JQXzk88"
            },
            {
                cislo: "8.",
                styl: "Po, Pds, Ds",
                pouzijeme: "Háček, značkovač",
                popis: "Pevné očko, polodlouhý sloupek, dlouhý sloupek, polodlouhý. Tato kombinace půjde do každého jednoho oka. Čili v konečném výsledku budeme opakovat 6krát. Vytváříme tím obloučky, které v našem případě zastávají chapadla. </p><p>Pevné očko v tomto případě tvoří přechod mezi jednotlivými chapadly, dlouhé a polodlouhé sloupky naopak dodávají tvar.</p><p>Je to docela blízko sebe, tak dávejte pozor, ať nevynecháte.",
                videoUrl: "iXgXMEuX-HE"
            },
            {
                cislo: "9.",
                styl: null,
                pouzijeme: "Bezpečnostní očka",
                popis: " Přidělávání bezpečnostních oček není vždy úplně jednoduché. Je spousta z nás, co se dívají, aby očka nebyla křivě a dlouze si nad tím lámeme hlavu. Nebojte, mám to stejně.</p><p>Takovou malou pomůckou by nám mělo být počítání řad. Pak by se očka měla nacházet v rovině. </p><p>Vždy vyrovnání očí kontrolujte před použitím pojistky. Některá očka k sobě mají pojistky, které se dají horko těžko zacvaknout, natož oddělat.",
                videoUrl: "MPAzRwy3-g0"
            },
            {
                cislo: "10.",
                styl: null,
                pouzijeme: "Pojistka, výplň",
                popis: "Bezpečnostní očko se dá zacvaknout tolikrát, kolik máme závitů na očku. Ovšem čím větší je pojistka a tenčí je příze, tím více je pojistka znatelná. Někdy nám pomáhá v optickém zkrášlení obličeje (jako mělo zvířátko najednou hezčí očka). </p><p>Chobotničku si musíme samozřejmě vyplnit. Takže popadněte vadu, duté vlákno, staré odstřižky a jdeme na to. S vyplňováním to nemusíte moc přehánět, aby se vám povedlo zapošití.",
                videoUrl: "dBmU8n4AfDg"
            },
            {
                cislo: "11.",
                styl: null,
                pouzijeme: "Jehla",
                popis: "Zašíváme tak, že si na jehlu navlečeme přízi, kterou jsme ukončovali. Tu budeme nejprve provlékat všemi oky typu A. Tímto krokem docílíme stažení. Ovšem pokud to někdo při plnění trochu přehnal, tak nám stále zůstává otvor. </p><p>Šití je podle mého názoru hodně individuální, proto je čistě na vás, zda budete šít podle mého vzoru, nebo si najedete vlastní styl. Každopádně hodně utahujte. </p><p>Nejdůležitější je však zakončení celé práce tak, aby se vám výrobek nerozpletl. Respektive to šití se nevyvléklo.",
                videoUrl: "IwOXPcn8H3E"
            },
            {
                cislo: "12.",
                styl: null,
                pouzijeme: "Jehla, nůžky",
                popis: "Zakončení probíhá následovně. Vyberu si nějaké nahodilé místo, kde s nití vyjedu (většinou na zádech tvorečka), zabořím se do očka vedle s tím, že vyjedu ve stejném oku jako poprvé. Nestáhnu to úplně, ale tak, aby mi zůstal malinký oblouček, kterým konec protáhneme a stáhneme. Vznikne uzlík a na jehle zůstane nit. Tu nahodile zasuneme do výrobku a vynoříme se nejlépe na druhé straně. </p><p>Jehlu můžeme zahodit a vezmeme si nůžky. Nitku napneme a co nejblíže výrobku ustřihneme.",
                videoUrl: "70BrpsQ4lzo"
            }
        ]
    },
    {
        nazev: "ruze",
        title: "Růže",
        popis: "Vytvořme si společně okrasnou růži společně s listem.",
        cas: "60 min",
        pocet: "17",
        kroky: [{
                cislo: "1.",
                styl: null,
                pouzijeme: "Háček",
                popis: "Vytvoříme si základ pro tvoření řetízkového oka. Kolem ukazováčku a prostředníčku levé ruky obmotáme přízi. Položím na vnitřní stranu prstů a palcem přidržím, obtočím jednou, vytvořím na vnitřku kříž a rovnoběžně znovu obtočím kolem prstů. Přední nit podeberu spodem a druhou vrchem. Zaháknu se za ni a protáhnu ji přes tu první. ",
                videoUrl: "XL4ze9vLC3s"
            },
            {
                cislo: "2.",
                styl: "Řo",
                pouzijeme: "Háček",
                popis: "Teď máme na háčku vytvořený uzlík, nabereme přízi a protáhneme ji okem. Zase je jedno na háčku, naberu přízi a protáhnu. Takto celkem 27krát.",
                videoUrl: "jOlXPt2eARQ"
            },
            {
                cislo: "3.",
                styl: "Ds, Řo",
                pouzijeme: "Háček",
                popis: "Začneme odpočítáním třetího očka, a tam vytvoříme dlouhé sloupky, celkem 2 do jednoho oka. Přidáme řetízkové oko, které nám pomáhá vytvářet květy.",
                videoUrl: "X8WGTnnEC_A"
            },
            {
                cislo: "4.",
                styl: "Ds, Řo",
                pouzijeme: "Háček",
                popis: "Abychom vynahradili mezeru vzniklou řetízkovým okem, tak jedno oko na řetězu vynecháme. Další krok tedy bude ob jedno oko. 3 dlouhé sloupky do jednoho oka, řetízkové oko a takto pořád dokola, dokud nejsme na konci.",
                videoUrl: "Y_pbeKZayz8"
            },
            {
                cislo: "5.",
                styl: "Ds, Řo",
                pouzijeme: "Háček",
                popis: "Vytvoříme 2 řetízková oka, abych nám vznikla jakási nadstavba. Otočíme celý výrobek na druhou stranu (tzv. výrobek převrátíme) a pokračujeme druhou řadou.</p><p>Háčkujeme opakovaně dlouhý sloupek, do dalšího oka 2krát dlouhý sloupek, další oko opět jednou a 2 řetízková oka, která ukončíme v místě předešlého řetízkového očka z kroku 3 a 4.</p><p>Konkrétně si můžete vybrat mezi krátkým sloupkem, nebo pevným očkem (obojí ukázáno na videu), rozdíl je ve stažení a tedy i mezeře mezi listy.",
                videoUrl: "i67kKrqFqRY"
            },
            {
                cislo: "6.",
                styl: "Ds, Řo",
                pouzijeme: "Háček",
                popis: "Pokračujeme stejným způsobem. 2 řetízková oka, nahodím, vytvořím dlouhý sloupek do dalšího oka, pak 2 dlouhé sloupky do jednoho, v dalším bude opět jedno a pak 2 řetízková oka, ukončena krátkým sloupkem, nebo pevným očkem v místě řetízkového očka předešlé řady.",
                videoUrl: "oPUgWP9Lglw"
            },
            {
                cislo: "7.",
                styl: "Řo, Ds, Po",
                pouzijeme: "Háček",
                popis: "Poslední lístek se dělá stejně, jako ty doposud, jediný rozdíl je v tom, že poslední dvojice řetízkových oček se ukončí 2 očka dolů po straně. </p><p>Po zakončení pevným okem, máme kytičku hotovou a můžeme ji jít točit a tvarovat.",
                videoUrl: "p-SBATchhlo"
            },
            {
                cislo: "8.",
                styl: null,
                pouzijeme: "Jehla",
                popis: "Růži se snažím smotat, co nejvíc to jde, aby jako růže vypadala. Hodně tahám a tlačím při rolování. Pak to musíme podchytit tím, že to zašijeme. Šití je podle mě intuitivní, takže je to čistě na vás, já jen ukazuju příklad toho, jak to dělám já.",
                videoUrl: "vO_Qf_xJh9w"
            },
            {
                cislo: "9.",
                styl: null,
                pouzijeme: "Jehla",
                popis: "Zakončení je vždy to nejdůležitější a dělá se to poměrně jednoduše. Když jsme spokojená s šitím a drží mi výrobek tvar, tak mohu zakončit. Vyberu si bod, ve kterém vyjedu jehlou a protáhnu nit. Následně bodnu do očka vedle mého místa výsunu a mířím do očka, z něhož vychází nit. Opatrně utahuju, ale ne moc, potřebujeme se dostat do onoho oka, co se tvoří.</p><p>Opět je to individuální, jak to uděláte a tohle je jenom můj příklad.",
                videoUrl: "vELtmQHUzOM"
            },
            {
                cislo: "10.",
                styl: "Řo",
                pouzijeme: "Háček",
                popis: "Počneme si list. Můžete jich mít libovolné množství, ale musíte se vrátit zpět k tomuto kroku, abyste mohli podle videí tvořit znova. </p><p>Uděláme 13 řetízkových ok.",
                videoUrl: "oqk38lrk-JQ"
            },
            {
                cislo: "11.",
                styl: "Ds",
                pouzijeme: "Háček",
                popis: "Odpočítám si 3 očka a do toho třetího udělám 2 DS. Další oko je pro mě obohaceno dlouhými sloupky s rozdílem toho, že místo jednoho nahození nastanou dvě. Je to pořád to samé. Do jednoho oka celkem 2 krát.",
                videoUrl: "StfiMAJ2POc"
            },
            {
                cislo: "12.",
                styl: "Ds",
                pouzijeme: "Háček",
                popis: "Stejně pokračuju i nadále s rozdílem toho, že do každého jednoho oka padne jeden dlouhý sloupek s dvojitým nahozením. Do následujících 3 oček.",
                videoUrl: "fxHwZU5r5fw"
            },
            {
                cislo: "13.",
                styl: "Ds, Pds",
                pouzijeme: "Háček",
                popis: "Do dvou po sobě jdoucích ok uděláme klasický dlouhý sloupek, jednou nahodím, dvakrát protáhnu. Pak polodlouhý, jednou nahodím a jednou protáhnu.",
                videoUrl: "ebjvvrVYHnI"
            },
            {
                cislo: "14.",
                styl: "Pds, Ks",
                pouzijeme: "Háček",
                popis: "Jeden krátký sloupek, do dalšího oka 3 a zase jedno. Potom děláme to samé, co na druhé straně akorát obráceně. Tak pojďme na to. Jeden polodlouhý sloupek prosím!",
                videoUrl: "Qf99mIRTvas"
            },
            {
                cislo: "15.",
                styl: "Ds",
                pouzijeme: "Háček",
                popis: "Dva klasické dlouhé sloupky, jedno nahození a dvě protažení. Potom třikrát dlouhý sloupek po dvou nahozeních a 3 protaženích. Dva krát do jednoho očka ten dlouhý sloupek o dvou nahozeních. Předposlední očko si ponese 3 dlouhé sloupky.",
                videoUrl: "KYN4iC1lsKA"
            },
            {
                cislo: "16.",
                styl: "Po, Řo, Ks",
                pouzijeme: "Háček",
                popis: "Pevným okem propojíme náš konec se začátkem výrobku a pokračujeme 3 řetízkovými očky. Výrobek otočím a udělám 2 krátké sloupky. Pak pevným okem zakončím a mám list i s malým stonkem. Ovšem není nutný a pokud se vám nelíbí, nemusí tam vůbec být.</p><p>List přišijeme k růži.",
                videoUrl: "Rt7hW4sszoo"
            },
            {
                cislo: "17.",
                styl: null,
                pouzijeme: "Jehla",
                popis: "Dá se zakončit poměrně neviditelně, uvnitř jednoho kvítku, jako je ve videu.",
                videoUrl: "0eHFJNXWfUw"
            }
        ]
    },
    {
        nazev: "zalozka",
        title: "Záložka",
        popis: "Veselá záložka do knihy pro malé i velké.",
        cas: "60min",
        pocet: "18",
        kroky: [{
                cislo: "1.",
                styl: "Mk",
                pouzijeme: "Háček",
                popis: "Začneme jedním z nejtěžších stylů, a to je magický kroužek. Buď ho můžete dělat jako já na videu, nebo si práci zjednodušit za pomoci 2 řetízkových ok a následného píchnutí 6krát do prvního oka.",
                videoUrl: "NOXIskqmC0Q"
            },
            {
                cislo: "2.",
                styl: "V",
                pouzijeme: "Háček, značkovač",
                popis: "Označíme si nějakým způsobem začátek řady. Já mám značkovače, ale vám může stačit i nit jiné příze. Rozháčkování je o tom, že dělám 2 krátké sloupky do každého jednoho oka. </p><p>První očko není vždycky úplně zřetelné a mnohdy se do něj nedá ani dostat, to je ovšem ovlivněno samotným utahováním. </p><p>Nit, kterou jsem kroužek stahovala, si držím stále pod výrobkem, abych mohla mírně utáhnout.",
                videoUrl: "8COmvVjuNCI"
            },
            {
                cislo: "3.",
                styl: "Ks, V",
                pouzijeme: "Háček, značkovač",
                popis: "Postupné rozháčkování. Přidáváme mezi rozháčkování krátké sloupky. V tomto případě to bude jeden krátký sloupek, rozháčkování. Celkem 6krát. Kontrolou vám může být přepočítání ok. Vždycky se zvyšuje počet o 6, pokud nejedeme zrovna rovné řady, tam se nic nemění.",
                videoUrl: "s61YbmAz8ig"
            },
            {
                cislo: "4.",
                styl: "Ks, V",
                pouzijeme: "Háček, značkovač",
                popis: "Pokračujeme v postupném rozháčkování, takže už vás asi napadne, že budeme postupovat 2 krátké sloupky, rozháčkování. Na konci celkem 24 oček. </p><p> Už na konci tohoto kroku vidíte, jak se naše kolečko plynule zvětšuje.",
                videoUrl: "Eu2U2H1vOsM"
            },
            {
                cislo: "5.",
                styl: "Ks, V",
                pouzijeme: "Háček, značkovač",
                popis: "Co asi bude dál? Ano, správně! 3 krátké sloupky a rozháčkování, zase celkem 6krát a nakonec bude 30 oček k napočítání.</p><p>Naposledy se rozšíříme. 4 krátké sloupky a rozháčkování. Celkem 6krát, z toho plyne, že nakonec bude 36 oček.",
                videoUrl: "Soz8p-_p0gk"
            },
            {
                cislo: "6., 7. a 8.",
                styl: "ks",
                pouzijeme: "Háček, značkovač",
                popis: "Následující 3 řady budou stejné. Skládat je budeme pouze z krátkých sloupků, čili rovných řad, abychom výrobku dali nějakou velikost.",
                videoUrl: "nFvPTp6DPl0"
            },
            {
                cislo: "9.",
                styl: "Ks, A",
                pouzijeme: "Háček, značkovač",
                popis: "Vytvořenou kopuli budeme teď stahovat, abychom z ní udělali kouli. Stejně jako existuje postupné rozháčkování, tak teď se seznámíme s postupným sháčkováním. To funguje úplně stejně, ale s opačným pořadím. Rozháčkování přidává krátké sloupky do mezer, sháčkování ubírá. </p><p>Takže teď nás čekají 4 krátké sloupky, sháčkování. Celkem 6krát a budeme očka zase po 6 odebírat. Závěr této řady bude vyjádřen 30 očky.",
                videoUrl: "qKeh_ILkgm4"
            },
            {
                cislo: "10.",
                styl: "Ks, A",
                pouzijeme: "Háček, značkovač",
                popis: "Tentokrát 3 krátké sloupky a stažení. Už v tomto bodě jde hezky vidět, jak se nám výrobek stahuje a tvaruje. </p><p>Pokud vlastníte bezpečnostní očka, tak je teď můžete přidat a upevnit. Já je budu pro tento okamžik háčkovat.",
                videoUrl: "eM3djYCpFu0"
            },
            {
                cislo: "11. a 12.",
                styl: "Ks, A",
                pouzijeme: "Háček, značkovač",
                popis: "Postupně pokračujeme dolů s počtem krátkých sloupků. Teď 2 krátké sloupky a stáhnu.</p><p>Stažení na 1 krátký sloupek a sháčkování. Po tomto kroku budeme hlavičku vyplňovat a pro vás s bezpečnostními očky je tohle poslední možnost je přidat. </p><p>Vyplníme výrobek vatou, dutým vláknem, zbytky přízí, nebo výplní ze starých polštářů.",
                videoUrl: "oXCrwIgnyfE"
            },
            {
                cislo: "13. ",
                styl: "A",
                pouzijeme: "Háček, značkovač",
                popis: "Když jsme s vyplněním spokojeni, tak jednoduše po dvojicích stáhneme všech 12 současných oček. Bodneme do dalšího oka, jako když se začíná další řada a uděláme pevné očko, ukončíme, necháme nit delší na zapošití.",
                videoUrl: "LRfLBApNgvQ"
            },
            {
                cislo: "14.",
                styl: null,
                pouzijeme: "Jehla, nůžky",
                popis: "Zašijeme kouli tak, aby zmizela díra uprostřed a projedeme ji tak, aby se nám schovaly veškeré nedokonalosti. Zapošijeme, zakončíme. Upravíme kouli.",
                videoUrl: "BP8IxCX-xR4"
            },
            {
                cislo: "15.",
                styl: "Mk, Po",
                pouzijeme: "Háček, nůžky",
                popis: "Vytvoříme si spolu oči. Pokud se vám nechce je háčkovat, můžete si vzít filc a vystřihnout i oči. Pokud vás to háčkování zatím baví, pojďte si je se mnou uháčkovat. Magický kroužek, stejně jako v prvním kroku.</p><p>Do prvního oka uděláme pevné očko. Vytvoříme jen takto malinká očko. Postup opakujeme a vytvoříme si druhé.",
                videoUrl: "SyGaT44H728"
            },
            {
                cislo: "16.",
                styl: null,
                pouzijeme: "Jehla, nůžky",
                popis: "Našijeme očka. Opět je to na vás, video jen ukazuje, jak bych to dělala já.",
                videoUrl: "7VhN_yctywY"
            },
            {
                cislo: "17.",
                styl: null,
                pouzijeme: "Jehla",
                popis: "Našijeme pusinku, a to buď opět nějak individuálně, nebo podle mého typu z videa. Samozřejmě můžete mít i jiný výraz. Smajlík může být smutný, naštvaný… prostě jaký chcete.",
                videoUrl: "7iNCCeg7G1Q"
            },
            {
                cislo: "18.",
                styl: "Řo, ks",
                pouzijeme: "Háček",
                popis: "Teď k tomu té záložce. Buď uděláme řetízkové oko, nebo jenom natáhneme provázek, nebo podle videa můžeme vytvořit širší pruh. Řetízková oka podle šířky, udělám si jedno navíc. Výrobek otočím a vracím se krátkými sloupky, na konci si udělám jedno řetízkové a zase se vracím sloupky zpět. Takto opakuju, dokud nemám vyhovující délku.",
                videoUrl: "c0hboILLyRI"
            },
            {
                cislo: "17.",
                styl: "Po",
                pouzijeme: "Háček, nůžky",
                popis: "Připevníme pás k hlavičce. Naberu oko z pásu a zároveň z hlavičky, pevným okem spojím. Na konci po, ustřihnu a zakončím.",
                videoUrl: "6mgPGFgQMCg"
            },
            {
                cislo: "18.",
                styl: "Řo",
                pouzijeme: "Háček",
                popis: "Druhý způsob je udělat si jenom jeden jednoduchý řetízek, který se pak jedním jednoduchým utažením připevní k hlavičce smajlíka.",
                videoUrl: "JF-W5Dk3IE0"
            },
        ]
    }
];
let VyukaService = class VyukaService {
    mapaVyrobku;
    constructor() {
        this.initMap();
    }
    getVideoByName(name) {
        return this.mapaVyrobku.get(name);
    }
    initMap() {
        this.mapaVyrobku = new Map();
        poleVyrobku.forEach(vyuka => {
            this.mapaVyrobku.set(vyuka.nazev, vyuka);
        });
    }
    getVyrobekByName(name) {
        return this.mapaVyrobku.get(name);
    }
    getVsechnyVyrobky() {
        return poleVyrobku;
    }
    static ctorParameters = () => [];
};
VyukaService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], VyukaService);



/***/ }),

/***/ 4984:
/*!********************************!*\
  !*** ./src/app/types/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Obtiznost": () => (/* reexport safe */ _navod__WEBPACK_IMPORTED_MODULE_3__.Obtiznost)
/* harmony export */ });
/* harmony import */ var _styly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styly */ 7519);
/* harmony import */ var _vyuka__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vyuka */ 9315);
/* harmony import */ var _pomucka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pomucka */ 1998);
/* harmony import */ var _navod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navod */ 3745);






/***/ }),

/***/ 3745:
/*!********************************!*\
  !*** ./src/app/types/navod.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Obtiznost": () => (/* binding */ Obtiznost)
/* harmony export */ });
var Obtiznost;
(function (Obtiznost) {
    Obtiznost["tezky"] = "tezky";
    Obtiznost["stredni"] = "stredni";
    Obtiznost["lehky"] = "lehky";
})(Obtiznost || (Obtiznost = {}));


/***/ }),

/***/ 1998:
/*!**********************************!*\
  !*** ./src/app/types/pomucka.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7519:
/*!********************************!*\
  !*** ./src/app/types/styly.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9315:
/*!********************************!*\
  !*** ./src/app/types/vyuka.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ })

}]);
//# sourceMappingURL=default-src_app_application-pipes-module_module_ts-src_app_services_index_ts.js.map