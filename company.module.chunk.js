webpackJsonp(["company.module"],{

/***/ "../../../../../src/app/company/company-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__company_component__["a" /* CompanyComponent */]
    }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());

//# sourceMappingURL=company-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <!-- Portfolio Item Row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-12\">\n          <h3 class=\"my-3\">¿ Quienes somos ?</h3>\n          <p>MA&amp;CO Montajes S.R.L., es una empresa creada para ofrecer una\n              amplia gama de servicios referidos al ámbito industrial y doméstico,\n              montajes, mantenimiento, instalación de equipos, obras eléctricas,\n              obras civiles y metal-mecánicas.\n              Contamos con un plantel de profesionales y técnicos con una vasta\n              experiencia cada uno en su especialidad lo que nos permite\n              adecuarnos a los requerimientos de nuestros clientes.\n              Disponemos de una amplia variedad de equipos, herramientas y\n              movilidades para poder desarrollar los trabajos en tiempo y forma.\n              </p>\n          \n          <h3 class=\"my-3\">Nuestra Mision</h3>\n          <p>\n            Es entregar a nuestros clientes un servicio integral, de\n            primera calidad, logrando la satisfacción de los mismos respetando los\n            estándares de calidad y seguridad industrial.\n          </p>\n\n          <h3 class=\"my-3\">Nuestra Vision </h3>\n          <p>\n              Ser una empresa líder a nivel regional en la prestación\n              de servicios, a través del esfuerzo de nuestros colaboradores, la\n              mejora continua y la constante inversión para impulsar el crecimiento\n              sustentable de nuestra empresa.\n          </p>\n              \n          <h3 class=\"my-3\">Contratos</h3>\n          <ul>\n            <li>Fecha de inicio de actividades: 30/09/2015</li>\n            <li>Inscripciones de la empresa</li>\n            <li>Dirección general impositiva CUIT: 30-71509871- 3</li>\n            <li>Responsable inscripto.</li>\n            <li>Convenio multilateral: 30-71509871- 3</li>\n          </ul>\n        </div>\n\n      </div>\n      <!-- /.row -->\n      <br>\n      <hr>\n      \n      <h3 class=\"my-4 text-left\">Equipo de trabajo</h3>\n      \n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <ul class=\"list-group\">\n            \n              <li class=\"list-group-item list-group-item-success\">Representante técnico/Socio gerente: Maximiliano Rey – Ing. Electrónico</li>\n              <li class=\"list-group-item list-group-item-warning\">Conductor obras metal mecánica: Sr. Hugo Sergio Fernández</li>\n              <li class=\"list-group-item list-group-item-success\">Conductor obras eléctricas: Ramón Marcial - Tec. Electricista</li>\n              <li class=\"list-group-item list-group-item-warning\">Responsable higiene y seguridad: Lic. Santiago Bustamante</li>\n              <li class=\"list-group-item list-group-item-success\">Oficial montador-cañista: Ángel Adrián Quiroz.</li>\n              <li class=\"list-group-item list-group-item-warning\">Oficial montador: Lucas cesar Quiroz.</li>\n              <li class=\"list-group-item list-group-item-success\">Soldador combinado: Miguel Rubén Ramírez.</li>\n              <li class=\"list-group-item list-group-item-warning\">Oficial electricista: Osman Gallardo.</li>\n              <li class=\"list-group-item list-group-item-success\">Obra Civil y Trabajos con Durlock: Ariel Vides.</li>\n              \n            </ul>\n          </div>\n      </div>\n      \n      \n      \n\n      \n      \n       \n      \n      \n      \n      \n      \n      \n      "

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'nr-company',
            template: __webpack_require__("../../../../../src/app/company/company.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());

//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_routing_module__ = __webpack_require__("../../../../../src/app/company/company-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__company_routing_module__["a" /* CompanyRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__company_component__["a" /* CompanyComponent */]]
        })
    ], CompanyModule);
    return CompanyModule;
}());

//# sourceMappingURL=company.module.js.map

/***/ })

});
//# sourceMappingURL=company.module.chunk.js.map