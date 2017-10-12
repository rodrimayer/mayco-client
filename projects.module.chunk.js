webpackJsonp(["projects.module"],{

/***/ "../../../../../src/app/projects/projects-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__projects_component__["a" /* ProjectsComponent */]
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());

//# sourceMappingURL=projects-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Heading -->\n<h1 class=\"my-4\">Nuestros proyectos\n  <!--small>Secondary Text</small-->\n</h1>\n\n<!-- ProjectS -->\n\n<div *ngIf=\"isLoading$; then ifcondition else elsecondition\"> ... </div>\n\n<ng-template #ifcondition>\n  <div>\n    <h4>Cargando proyectos ...</h4>\n  </div>\n</ng-template>\n<ng-template #elsecondition>\n\n  <div *ngIf=\"projects.length>0; then ifcondition else elsecondition\">...</div>\n\n  <ng-template #ifcondition>\n    <div *ngFor=\"let project of projects\">\n      <hr>\n      <div class=\"row animated fadeIn\">\n        <div class=\"col-md-7\">\n          <a href=\"#\">\n                 <img class=\"img-fluid rounded mb-3 mb-md-0\" id='base64image' src=\"{{'data:image/jpeg;base64,'+project.imageEncoded}}\">\n          </a>\n        </div>\n        <div class=\"col-md-5  animated fadeIn fast\">\n          <h3>{{project.name}}</h3>\n\n          <blockquote class=\"blockquote\">\n            <p class=\"mb-0\">{{project.description}}</p>\n          </blockquote>\n\n          <!--a class=\"btn btn-primary\" href=\"#\">View Project</a-->\n        </div>\n      </div>\n      <!-- /.row -->\n      <br>\n\n    </div>\n  </ng-template>\n\n  <ng-template #elsecondition>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      <strong>Atención: </strong>No se encontraron proyectos publicados.\n    </div>\n  </ng-template>\n\n\n\n</ng-template>\n\n\n<!-- Pagination -->\n<!--ul class=\"pagination justify-content-center\">\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">1</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">2</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\">3</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n      </ul-->"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_project_service__ = __webpack_require__("../../../../../src/app/projects/_service/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_projectService) {
        this._projectService = _projectService;
        this.projects = [];
        this.isLoading$ = false;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading$ = true;
        this._projectService.list().subscribe(function (data) {
            _this.projects = data;
            _this.isLoading$ = false;
        }
        /*,error => {
          this.error = error;
        },*/
        /*complete => {
          this.isLoading$ = (false);
        }*/ // NO FUNCIONÓ complete
        );
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'nr-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_project_service__["a" /* ProjectService */]) === "function" && _a || Object])
    ], ProjectsComponent);
    return ProjectsComponent;
    var _a;
}());

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rest_client_service__ = __webpack_require__("../../../../../src/app/_service/rest-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_project_service__ = __webpack_require__("../../../../../src/app/projects/_service/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_routing_module__ = __webpack_require__("../../../../../src/app/projects/projects-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__projects_routing_module__["a" /* ProjectsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__projects_component__["a" /* ProjectsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_1__service_rest_client_service__["a" /* RestClientService */]]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());

//# sourceMappingURL=projects.module.js.map

/***/ })

});
//# sourceMappingURL=projects.module.chunk.js.map