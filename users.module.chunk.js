webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());

//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h1 class=\"my-4\">Administrar Usuarios</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h3 class=\"my-4\">Nuevo Usuario</h3>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Ingresar nombre\" [(ngModel)]='user_aux.name' autofocus><br>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Ingresar nombre de usuario\" [(ngModel)]='user_aux.username'><br>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Ingresar contraseña de usuario\" [(ngModel)]='user_aux.password'><br>\n      <button class=\"btn btn-primary\" (click)=\"addUser()\">Ingresar nuevo usuario</button>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h3 class=\"my-4\">Usuarios</h3>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>nombre</th>\n          <th>nombre de usuario</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let user of users; let i = index'>\n          <td>{{ i }}</td>\n          <td>{{ user.name }}</td>\n          <td>{{ user.username }}</td>\n          <td> <button class=\"btn btn-danger\" (click)=\"deleteUser(i)\">Eliminar usuario</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_users_service__ = __webpack_require__("../../../../../src/app/users/_service/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(_usersService) {
        this._usersService = _usersService;
        this.users = [];
        this.user_aux = { username: '', password: '', name: '' };
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._usersService.list().subscribe(function (data) { return _this.users = data; });
    };
    UsersComponent.prototype.addUser = function () {
        var _this = this;
        if (this.user_aux.name !== '' && this.user_aux.username !== ''
            && this.user_aux.password !== '') {
            this._usersService.insert(this.user_aux).subscribe(function (data) {
                console.log('DATA USER ADDED');
                console.log(data);
                _this.resp = data;
                var m = _this.resp.map(function (value, key) {
                    return key;
                });
                var i = _this.resp.map(function (value, key) {
                    return value;
                });
                _this.message_returned = m[0];
                _this.id_returned = i[0];
                alert(_this.message_returned);
                _this.user_aux.id = _this.id_returned;
                _this.users.push(_this.user_aux);
                // clean
                _this.user_aux = { username: '', password: '', name: '' };
            });
        }
        else {
            alert('No se ingresó nombre, nombre de usuario o contraseña del usuario, revise sus datos.');
        }
        // add to array.
    };
    UsersComponent.prototype.deleteUser = function (index) {
        var _this = this;
        this._usersService.delete(this.users[index]).subscribe(function (data) {
            if (data.status === 200) {
                alert('Usario eliminado correctamente');
                _this.users.splice(index, 1);
            }
            else {
                alert('El usuario no pudo ser eliminado');
            }
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'nr-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_users_service__["a" /* UsersService */]) === "function" && _a || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_rest_client_service__ = __webpack_require__("../../../../../src/app/_service/rest-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_users_service__ = __webpack_require__("../../../../../src/app/users/_service/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__users_routing_module__["a" /* UsersRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__users_component__["a" /* UsersComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_4__service_rest_client_service__["a" /* RestClientService */]]
        })
    ], UsersModule);
    return UsersModule;
}());

//# sourceMappingURL=users.module.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map