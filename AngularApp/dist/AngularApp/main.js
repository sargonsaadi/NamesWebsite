(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-box{\r\n    width: 300px;\r\n    display:inline-block;\r\n    vertical-align: top;\r\n}\r\n.edit-wrapper{\r\n    display:inline-block;\r\n    width:800px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-wrapper jumbotron\"> \n  <span>ADD A NEW NAME</span>\n  <form (submit)=\"add()\">\n    <!-- NAMES -->\n    <div class=\"edit-box\"> \n      <div class=\"form-group has-success\">\n          <!-- <label class=\"form-control-label\" for=\"inputSuccess1\">English Name</label> -->\n          Name in Syriac<input type=\"text\" value=\"{{newName.syr_word}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"newName.syr_word\"[(ngModel)]=\"newName.syr_word\">\n          Name in Arabic<input type=\"text\" value=\"{{newName.arb_word}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"newName.arb_word\"[(ngModel)]=\"newName.arb_word\">\n          Name in English<input type=\"text\" value=\"{{newName.eng_word}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"newName.eng_word\"[(ngModel)]=\"newName.eng_word\">\n      </div>\n    </div>\n    <!-- MEANING AND DESC -->\n    <div class=\"edit-box\">\n      <div class=\"form-group has-success\">\n        Meaning<input type=\"text\" value=\"{{newName.meaning}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"newName.meaning\" [(ngModel)]=\"newName.meaning\">\n        Description in Arabic<input type=\"text\" value=\"{{newName.arb_desc}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"newName.arb_desc\"[(ngModel)]=\"newName.arb_desc\">\n        Description in Syriac<input type=\"text\" value=\"{{newName.eng_desc}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"newName.eng_desc\"[(ngModel)]=\"newName.eng_desc\">\n      </div>\n    </div>\n    <!-- GENDER /VARI -->\n    <div class=\"edit-box\">\n      <div class=\"form-group has-success\">\n        Variations<input type=\"text\" value=\"{{newName.variations}}\" class=\"form-control is-valid\" id=\"inputValid\"name=\"newName.variations\" [(ngModel)]=\"newName.variations\">\n        \n        <legend>Gender</legend>\n          <!-- <div *ngFor=\"let gndr of ['male','female','neutral']\">\n              <input type=\"radio\" name=\"gender\" [checked]=\"gndr==newName.gender\" >\n              <label  value=\"gndr\">{{gndr}}</label>\n          </div> -->\n          <div>\n            <input type=\"radio\" name=\"newName.gender\"value=\"male\" [(ngModel)]=\"newName.gender\">\n            <label >Male</label>\n          </div>\n          <div>\n            <input type=\"radio\" name=\"newName.gender\"value=\"female\" [(ngModel)]=\"newName.gender\">\n            <label >Female</label>\n          </div>\n          <div>\n            <input type=\"radio\" name=\"newName.gender\"  value=\"neutral\" [(ngModel)]=\"newName.gender\"checked>\n            <label >Neutral</label>\n          </div>\n      </div>\n    </div>\n    <!-- STATUS -->\n    <div class=\"edit-box\">\n      <div class=\"form-group has-success\">\n        <legend>Status</legend>\n        <p><input type=\"radio\" value=\"approved\" name=\"newName.status\" [(ngModel)]=\"newName.status\" >\n          <label checked>approved</label>\n        </p>\n        <p>\n        <input type=\"radio\" value=\"pending\" name=\"newName.status\" [(ngModel)]=\"newName.status\" >\n          <label>pending</label>\n        </p>\n        <p>\n        <input type=\"radio\" value=\"undefined\" name=\"newName.status\"[(ngModel)]=\"newName.status\" >\n          <label>undefined</label>\n        </p>\n      </div>\n    </div>\n    <!-- CATEGORIES -->\n    <div class=\"edit-box\">\n      <fieldset class=\"form-group\">\n        <legend>Categories</legend>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"1\"name=\"categories['1']\" [(ngModel)]=\"categories[1]\" checked=\"\" >Historic\n          </label>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"2\" name=\"categories['2']\" [(ngModel)]=\"categories[2]\" checked>religious\n          </label>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"8\"name=\"categories['8']\" [(ngModel)]=\"categories[8]\" >short\n          </label>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"3\"name=\"categories['3']\" [(ngModel)]=\"categories[3]\" >poetic\n          </label>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"5\" name=\"categories['5']\" [(ngModel)]=\"categories[5]\" >nature\n          </label>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"6\" name=\"categories['6']\" [(ngModel)]=\"categories[6]\" >traditional\n          </label>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"4\" name=\"categories['4']\" [(ngModel)]=\"categories[4]\" >creative\n          </label>\n          <label class=\"form-check-label\">\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"7\" name=\"categories['7']\" [(ngModel)]=\"categories[7]\" >non-syriac\n          </label>\n      </fieldset>        \n    </div>\n    <!-- Source -->\n    <div class=\"edit-box\">\n      <div class=\"form-group has-success\">\n        Sources<input type=\"text\" value=\"{{newName.src}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"newName.src\" [(ngModel)]=\"newName.src\">\n      </div>\n    </div>\n    <!-- SUBMIT -->\n    <div class=\"edit-box\">\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      <button class=\"btn btn-warning\" (click)=\"hideAdd()\">Cancel</button>\n    </div>\n  </form>\n</div>\n    \n      \n    \n    "

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = /** @class */ (function () {
    function AddComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.newName = {};
        this.categories = {
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': false,
            '6': false,
            '7': false,
            '8': false,
        };
        this.addEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.hideAdd = function () {
        // console.log("Inside Hide Add in Add comp");
        this.addEmitter.emit("hide");
    };
    AddComponent.prototype.add = function () {
        var _this = this;
        var cat_add_arr = [];
        console.log("INSIDE ADD COmp");
        for (var cat in this.categories) {
            if (this.categories[cat]) {
                cat_add_arr.push(cat);
            }
        }
        var newNameData = {
            name: this.newName,
            cat_add_arr: cat_add_arr,
        };
        console.log(newNameData);
        this._httpService.add(newNameData).subscribe(function (data) {
            console.log("data from ADD is ", data);
            if (data['results2']) {
                _this.hideAdd();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "addEmitter", void 0);
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { AppComponent } from './app.component';
var routes = [
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"] },
    // { path: 'app',component: AppComponent},
    { path: '', pathMatch: 'full', redirectTo: '/search' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* *{\r\n    font-family:'Comic Sans MS';\r\n} */\r\n#master{\r\n    padding:30px;\r\n    text-align: center;\r\n}\r\n.title{\r\n    height:auto;\r\n}\r\n.nav-bar{\r\n    background:rgb(230, 229, 229);\r\n    height:80px;\r\n    padding:10px;\r\n\r\n}\r\n.logo{\r\n    display: inline-block;\r\n    background:lightblue;\r\n    width: 120px; \r\n    height:60px;\r\n    left:20px;\r\n    margin:10px;\r\n    /* top:50%; */\r\n    /* position: absolute; */\r\n}\r\n.menu{\r\n    display: inline-block;\r\n    /* vertical-align: baseline; */\r\n    position: absolute;\r\n    /* width: 40%; */\r\n    right:30px;\r\n    /* font-size: 40pt; */\r\n    /* height: auto; */\r\n    /* background: red; */\r\n    /* color:blue; */\r\n}\r\n.menu-btn{\r\n    background-color: #4CAF50; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;  \r\n    /* right: 40px; */\r\n}\r\n@media only screen and (max-width: 600px){\r\n    .menu{\r\n        background: red;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <div id=\"master\">\n    <div class=\"navi-bar\">\n      <button type=\"button\" class=\"btn btn-info\"[routerLink]=\"['/search']\" (click)=\"checkMenu()\">Home</button>\n\n      <span *ngIf=\"!isLoggedIn\">\n        <button type=\"button\" class=\"btn btn-success\"[routerLink]=\"['/login']\">Admin Login</button>\n      </span>\n      <span *ngIf=\"isLoggedIn\">\n          <button type=\"button\" class=\"btn btn-danger\"(click)=\"logout()\">Logout</button>\n          <button type=\"button\" class=\"btn btn-success\"[routerLink]=\"['/dashboard']\">Go To Dashboard</button>\n          \n          <!-- <button class=\"menu-btn\" (click)=\"logout()\">Logout</button>  -->\n      </span>\n      \n      \n    </div>\n    \n    <div class=\"title\">\n      <div class=\"display-3\">Syriac name finder<img src=\"https://www.photospng.com/uploads/cartoon-baby-pic.png\" alt=\"img\" width=\"60px\"height=\"60px\"></div>\n    </div>\n\n    <router-outlet (loginEmitter)=\"toggleMenu()\"></router-outlet>\n\n\n    \n      <!-- <div class=\"nav-bar\">\n        <div class=\"logo\"> \n        </div>\n        <div class=\"menu\">\n          <button class=\"menu-btn\">Search</button>\n          <button class=\"menu-btn\">Add Name</button>\n          <button class=\"menu-btn\">About</button>\n          <button class=\"menu-btn\">Login</button>          \n        </div>\n      </div>   -->\n               \n      <!-- <button class=\"menu-btn\" [routerLink]=\"['/login']\">Admin Login</button>  -->\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    // const login_observable = new Observable();
    // toggleMenu:any;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.isLoggedIn().subscribe(function (data) {
            if (data['results']) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
            console.log("islogged in is in appcomp is ", _this.isLoggedIn);
        });
        this._httpService.getLoginStatus().subscribe(function (curr_loging_status) {
            _this.isLoggedIn = curr_loging_status;
            console.log("observable data from ngONINit in APP component is ", curr_loging_status);
        });
    };
    AppComponent.prototype.checkMenu = function () {
        var _this = this;
        this._httpService.isLoggedIn().subscribe(function (data) {
            if (data['results']) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
            console.log("islogged in is in appcomp is ", _this.isLoggedIn);
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        var observ = this._httpService.logout();
        observ.subscribe(function (data) {
            console.log("data logout is", data);
            if (data['message'] == "Success logout") {
                // this._httpService.signOut();
                _this.isLoggedIn = false;
                _this._router.navigate(['/']);
            }
            else {
                console.log("error loging out");
            }
        });
    };
    AppComponent.prototype.toggleMenu = function () {
        this.isLoggedIn = false;
        console.log("insdie toggleMenu in App");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { UserService } from './user.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-master{\r\n    /* margin:20px; */\r\n    margin-top: 10px;\r\n    /* background:lightgray; */\r\n    height:auto;\r\n    text-align: center;\r\n}\r\n.info-box-master{\r\n    /* text-align: center; */\r\n    display:inline-block;\r\n    /* width:800px; */\r\n}\r\n.separation{\r\n    \r\n}\r\n.thead{\r\n    position:relative;\r\n}\r\n.results-box{\r\n    /* background:#78dbbd; */\r\n    display:inline-block;\r\n    /* text-align: center; */\r\n    margin-top:40px;\r\n    height:800px;\r\n    width:800px;\r\n    overflow: auto;\r\n}\r\n.filter-wrapper{\r\n    /* text-align: center; */\r\n    /* background: red; */\r\n    margin-top:30px;\r\n}\r\n.filter-box{\r\n    /* background:lightblue; */\r\n    display:inline-block;\r\n    width:300px;\r\n    /* height:120px; */\r\n    margin:10px;\r\n    vertical-align: top;\r\n    /* text-align: center; */\r\n\r\n}\r\n.dot {\r\n    height: 80px;\r\n    width: 80px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin:5px;\r\n    position: relative;\r\n  }\r\n.dot1{\r\n    background:rgb(50, 206, 50);\r\n}\r\n.dot2{\r\n    background: rgb(255, 102, 102);\r\n}\r\n.filter-label{\r\n    display:inline-block;\r\n    /* margin: auto; */\r\n    font-size:auto;\r\n    top:30%;    \r\n    left:2%;\r\n    right:2%;\r\n    position: absolute;\r\n}\r\n.name-box{\r\n    background: #889596;\r\n    height: 100px;\r\n    margin:10px;\r\n    text-align: left;\r\n}\r\n.filters-choice{\r\n    /* background: yellow; */\r\n    height:30px;\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n}\r\n.btn{\r\n    margin:5px;\r\n}\r\n.badge{\r\n    margin:3px;\r\n}\r\n.off{\r\n    display:none;\r\n}\r\n.on{\r\n    display:inline-block;\r\n} \r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"filter-wrapper\" >\n    <div class=\"filter-box\">\n      <!-- SEARCH BY GENDER -->\n      <h3>GENDER</h3>\n      <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Male\"(click)=\"hideFilter('Male')\" (click)=\"addFilter('Male', 'gender')\">Male</button>\n      <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Female\" (click)=\"hideFilter('Female')\" (click)=\"addFilter('Female','gender')\">Female</button>\n      <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Neutral\" (click)=\"hideFilter('Neutral')\" (click)=\"addFilter('Neutral','gender')\">Neutral</button>\n    </div>\n    <div class=\"filter-box\">\n      <!-- SEARCH BY CATEGORY -->\n        <h3>CATEGORY</h3>\n        <div >\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Religious\" (click)=\"hideFilter('Religious')\" (click)=\"addFilter('Religious','cat')\">Religious</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Historic\" (click)=\"hideFilter('Historic')\"(click)=\"addFilter('Historic','cat')\">Historic</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Non-Syriac\" (click)=\"hideFilter('Non-Syriac')\"(click)=\"addFilter('Non-Syriac','cat')\">Non-Syriac</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Creative\" (click)=\"hideFilter('Creative')\"(click)=\"addFilter('Creative','cat')\">Creative</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Nature\" (click)=\"hideFilter('Nature')\"(click)=\"addFilter('Nature','cat')\">Nature</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Traditional\" (click)=\"hideFilter('Traditional')\"(click)=\"addFilter('Traditional','cat')\">Traditional</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Poetic\" (click)=\"hideFilter('Poetic')\"(click)=\"addFilter('Poetic','cat')\">Poetic</button>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" id=\"Short\" (click)=\"hideFilter('Short')\"(click)=\"addFilter('Short','cat')\">Short and Sweet</button>\n          \n        </div>\n    </div>\n    <!-- SEARCH BY NAME -->\n    <div class=\"filter-box\">\n        <h3>SEARCH BY NAME</h3>\n        <form (submit)=\"searchByName()\">\n          <div class=\"form-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"Search for name or meaning...\" id=\"inputLarge\" name=\"name\" [(ngModel)]=\"name\">\n              <input type=\"submit\" value=\"submit\">\n          </div>\n        </form>\n        \n    </div>\n  </div>\n  <!-- FILTERS CHOICES -->\n  <div class=\"filters-choice\">\n      <!-- <span class=\"badge badge-pill badge-danger\">filters:</span> -->\n      <span *ngIf=\"filtersSelected\">\n          <span class=\"badge badge-pill badge-warning\" (click)=\"reset()\">RESET</span>\n      </span>\n      <span *ngFor=\"let filter of filters\">\n        <span class=\"badge badge-pill badge-success\" (click)=\"showFilter(filter[0])\" (click)=\"removeFilter(filter[0])\" >{{filter[0]}}</span>    \n      </span>\n\n  </div>\n  <!-- EDIT -->\n  <div class=\"edit\">\n      <app-edit *ngIf=\"nameEditSelected\" [editName]=\"nameEditSelected\" (editEmitter)=\"closeEdit()\"></app-edit>\n  </div>\n  <!-- ADD -->\n  <div class=\"add\">\n    <app-add *ngIf=\"showAdd\" (addEmitter)=\"hideAdd()\"></app-add>\n  </div>\n    <!-- ADD NAME BUTTON -->\n    <div class=\"filter-box\">\n      <button type=\"button\" class=\"btn btn-info btn-lg btn-block\" id=\"add-btn\" (click)=\"add()\" >Add New Name</button>\n    </div>\n    \n    <!-- SEPARATION -->\n  <div class=\"separation\">\n    </div>\n  <!-- RESULTS BOX -->\n  <div class=\"results-box\">\n    \n      <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\"(click)=\"sort('eng_word')\">Name<img src=\"https://cdn3.iconfinder.com/data/icons/ssc-icons/512/sort_p-512.png\" alt=\"sort\" width=\"30px\"height=\"30px\"></th>\n              <!-- <th scope=\"col\">Gender</th> -->\n              <th scope=\"col\">Meaning</th>\n              <th scope=\"col\">In Arabic</th>\n              <th scope=\"col\">In Syriac</th>\n              <th scope=\"col\" (click)=\"sort('status')\">Status<img src=\"https://cdn3.iconfinder.com/data/icons/ssc-icons/512/sort_p-512.png\" alt=\"sort\" width=\"30px\"height=\"30px\"></th>\n              <th scope=\"col\">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n              <tr class=\"table-info\" *ngFor=\"let name of names\">\n                <th scope=\"row\">\n                  <span *ngIf=\"name.gender == 'female'\">\n                    <h1>{{name.eng_word}} <img src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-f4ce4116003b37a7933046e9ece2e19a-female.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n                  </span>\n                  <span *ngIf=\"name.gender == 'male'\">\n                      <h1>{{name.eng_word}} <img src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-5454771825f1a2c1a95625cfaf368b33-male.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n                  </span>\n                  <span *ngIf=\"name.gender == 'neutral'\">\n                      <h1>{{name.eng_word}} <img src=\"https://images.vexels.com/media/users/3/127690/isolated/lists/046013072aefe11afa99841eb692a8b3-flat-medical-gender-sign.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n                  </span>\n                  </th>\n                <!-- <td>{{name.gender}}</td> -->\n                <td>{{name.meaning}}</td>\n                <td>{{name.arb_word}}</td>\n                <td>{{name.syr_word}}</td>\n                \n                <td>{{name.status}}</td>\n                <td>\n                 \n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(name.id)\">Delete</button>                  \n                  <button type=\"button\" class=\"btn btn-warning\"(click)=\"showEdit(name.id)\">Edit</button>\n                </td>\n\n              </tr>\n          </tbody>\n        </table> \n        <div class=\"separation\"></div>\n\n        <!-- PAGINATION -->\n        <p>{{nameCount}} results</p>\n        <div class=\"filter-box\">\n          <ul  class=\"pagination pagination-sm\">\n            <li *ngFor=\"let page of pages\" class=\"page-item\">\n\n              <a class=\"page-link\" (click)=\"showPage(page)\">{{page}}</a>\n            </li>\n          </ul>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.names = [];
        this.filters = [];
        this.loggedIn = false;
        this.pages = [];
        this.byName = false;
        this.filtersSelected = false;
        this.showAdd = false;
        this.sorting = {
            filter: "eng_word",
            state: true
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAllAdmin();
        this.name = "";
    };
    DashboardComponent.prototype.getAllAdmin = function () {
        var _this = this;
        this.pages = [];
        this._httpService.isLoggedIn().subscribe(function (data) {
            if (data['results']) {
                _this.loggedIn = true;
                _this._httpService.filterNames("").subscribe(function (data) {
                    _this.nameCount = data['results'].length;
                    _this._httpService.filterNames("?limit=2").subscribe(function (data2) {
                        for (var i = 0; i < Math.ceil(_this.nameCount / 2); i++) {
                            _this.pages.push(i + 1);
                        }
                        _this.names = data2['results'];
                    });
                });
            }
            else {
                _this._router.navigate(['/login']);
            }
        });
    };
    DashboardComponent.prototype.filterNames = function (extra_filter) {
        var _this = this;
        this.pages = [];
        var filters_str = "?";
        if (this.sorting.state) {
            filters_str += "sort_by=asc." + this.sorting.filter + "&";
        }
        else {
            filters_str += "sort_by=desc." + this.sorting.filter + "&";
        }
        for (var i = 0; i < this.filters.length; i++) {
            filters_str += this.filters[i][1] + "=" + this.filters[i][0] + "&";
        }
        filters_str += extra_filter;
        this._httpService.filterNames(filters_str).subscribe(function (data) {
            _this.nameCount = data['results'].length;
            _this._httpService.filterNames(filters_str + "&limit=2").subscribe(function (data2) {
                for (var i = 0; i < Math.ceil(_this.nameCount / 2); i++) {
                    _this.pages.push(i + 1);
                }
                _this.names = data2['results'];
            });
        });
    };
    DashboardComponent.prototype.showPage = function (page) {
        var offset = (page * 2) - 2;
        if (this.byName) {
            this.filterNames("word=" + this.name + "&offset=" + offset);
        }
        else {
            this.filterNames("offset=" + offset);
        }
    };
    DashboardComponent.prototype.searchByName = function () {
        this.byName = true;
        this.filterNames("word=" + this.name);
    };
    DashboardComponent.prototype.addFilter = function (filter, filterType) {
        this.byName = false;
        var filterFound = false;
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i][0] == filter) {
                filterFound = true;
                this.showFilter(filter);
                this.removeFilter(filter);
            }
        }
        if (!filterFound) {
            this.filters.push([filter, filterType]);
            this.filterNames("");
            this.filtersSelected = true;
        }
    };
    DashboardComponent.prototype.showFilter = function (filter) {
        var element = document.getElementById(filter);
        element.style.opacity = "1";
    };
    DashboardComponent.prototype.hideFilter = function (filter) {
        var element = document.getElementById(filter);
        // element.style.display ="none"
        element.style.opacity = "0.2";
    };
    DashboardComponent.prototype.removeFilter = function (filter) {
        var index = -1;
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i][0] == filter) {
                index = i;
            }
        }
        if (index == this.filters.length - 1) {
            this.filters.pop();
        }
        else {
            var temp = this.filters[this.filters.length - 1];
            this.filters[this.filters.length - 1] = this.filters[index];
            this.filters[index] = temp;
            this.filters.pop();
        }
        if (this.filters.length == 0) {
            this.filtersSelected = false;
        }
        this.filterNames("");
    };
    DashboardComponent.prototype.sort = function (filter) {
        var sql = "";
        if (this.byName) {
            sql = "word=" + this.name;
        }
        this.sorting.filter = filter;
        this.filterNames(sql);
        this.sorting.state = !this.sorting.state;
    };
    DashboardComponent.prototype.delete = function (id) {
        var _this = this;
        if (this.isLoggedIn()) {
            var observ = this._httpService.delete(id);
            observ.subscribe(function (data) {
                if (!data['error']) {
                    _this._router.navigate(['/dashboard']);
                }
                _this.getAllAdmin();
            });
        }
        else {
            this._router.navigate(['/login']);
        }
    };
    DashboardComponent.prototype.showEdit = function (id) {
        var _this = this;
        // this.closeEdit();
        if (this.showAdd && !this.nameEditSelected) {
            this.showAdd = false;
            this.showAddBtn();
            var observ = this._httpService.filterNames("?id=" + id);
            observ.subscribe(function (data) {
                _this.nameEditSelected = data['results'][0];
            });
        }
        else if (!this.nameEditSelected) {
            var observ = this._httpService.filterNames("?id=" + id);
            observ.subscribe(function (data) {
                _this.nameEditSelected = data['results'][0];
            });
        }
    };
    DashboardComponent.prototype.closeEdit = function () {
        console.log("closing edit (dashboard)", this.nameEditSelected.eng_word);
        this.nameEditSelected = null;
        this.getAllAdmin();
    };
    // this is not working
    DashboardComponent.prototype.isLoggedIn = function () {
        // let result: boolean;
        var observ = this._httpService.isLoggedIn();
        observ.subscribe(function (data) {
            // console.log("islogged in data is.... ", data);
            // console.log("islogged in data.results is.... ", data['results']);
            return data['results'];
            // if(data['results']){
            //   return data['results']; 
            // }else{
            //   return false;
            // }
            // return true;
        });
        // return result;
        // if(this._httpService.isLoggedIn()){
        //   return true;
        // }else{
        //   return false;
        // }
    };
    DashboardComponent.prototype.reset = function () {
        this.filtersSelected = false;
        console.log("filters arr is ", this.filters);
        var length = this.filters.length;
        for (var i = 0; i < length; i++) {
            console.log(this.filters[0][0]);
            this.showFilter(this.filters[0][0]);
            this.filters.shift();
        }
        this.filterNames("");
    };
    DashboardComponent.prototype.add = function () {
        if (this.nameEditSelected) {
            this.showAdd = true;
            this.hideAddBtn();
            this.nameEditSelected = null;
        }
        else {
            this.showAdd = true;
            this.hideAddBtn();
        }
    };
    DashboardComponent.prototype.showAddBtn = function () {
        var element = document.getElementById("add-btn");
        element.style.display = "inline-block";
    };
    DashboardComponent.prototype.hideAddBtn = function () {
        var element = document.getElementById("add-btn");
        element.style.display = "none";
    };
    DashboardComponent.prototype.hideAdd = function () {
        this.showAdd = false;
        console.log("Inside HIDEADD in dashboard. showAdd is now ", this.showAdd);
        this.showAddBtn();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-box{\r\n    width: 300px;\r\n    display:inline-block;\r\n    vertical-align: top;\r\n}\r\n.edit-wrapper{\r\n    display:inline-block;\r\n    width:800px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-wrapper jumbotron\"> \n    <span>EDIT</span>\n\n  <form (submit)=\"edit2(editName.id)\">\n    <!-- NAMES -->\n    <div class=\"edit-box\"> \n      <div class=\"form-group has-success\">\n          <!-- <label class=\"form-control-label\" for=\"inputSuccess1\">English Name</label> -->\n          Name in Syriac<input type=\"text\" value=\"{{editName.syr_word}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"editName.syr_word\"[(ngModel)]=\"editName.syr_word\">\n          Name in Arabic<input type=\"text\" value=\"{{editName.arb_word}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"editName.arb_word\"[(ngModel)]=\"editName.arb_word\">\n          Name in English<input type=\"text\" value=\"{{editName.eng_word}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"editName.eng_word\"[(ngModel)]=\"editName.eng_word\">\n      </div>\n    </div>\n    <!-- MEANING AND DESC -->\n    <div class=\"edit-box\">\n      <div class=\"form-group has-success\">\n        Meaning<input type=\"text\" value=\"{{editName.meaning}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"editName.meaning\" [(ngModel)]=\"editName.meaning\">\n        Description in Arabic<input type=\"text\" value=\"{{editName.arb_desc}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"editName.arb_desc\"[(ngModel)]=\"editName.arb_desc\">\n        Description in Syriac<input type=\"text\" value=\"{{editName.eng_desc}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"editName.eng_desc\"[(ngModel)]=\"editName.eng_desc\">\n      </div>\n    </div>\n    <!-- GENDER /VARI -->\n    <div class=\"edit-box\">\n      <div class=\"form-group has-success\">\n        Variations<input type=\"text\" value=\"{{editName.variations}}\" class=\"form-control is-valid\" id=\"inputValid\"name=\"editName.variations\" [(ngModel)]=\"editName.variations\">\n        \n        <legend>Gender</legend>\n          <div *ngFor=\"let gndr of ['male','female','neutral']\">\n              <input type=\"radio\" name=\"gender\" [checked]=\"gndr==editName.gender\" >\n              <label  value=\"gndr\">{{gndr}}</label>\n          </div>\n          \n      </div>\n    </div>\n  \n    <!-- STATUS -->\n    <div class=\"edit-box\">\n      <div class=\"form-group has-success\">\n        <legend>Status</legend>\n        <p><input type=\"radio\" value=\"approved\" name=\"editName.status\" [checked]= \"'approved'==editName.status\" [(ngModel)]=\"editName.status\" >\n          <label>approved</label>\n        </p>\n        <p>\n        <input type=\"radio\" value=\"pending\" name=\"editName.status\" [checked]= \"'pending'==editName.status\"[(ngModel)]=\"editName.status\" >\n          <label>pending</label>\n        </p>\n        <p>\n        <input type=\"radio\" value=\"undefined\" name=\"editName.status\" [checked]= \"'undefined'==editName.status\"[(ngModel)]=\"editName.status\" >\n          <label>undefined</label>\n        </p>\n\n        <!-- <div *ngFor=\"let condition of ['approved','pending','undefined']\">\n          <input type=\"radio\" value=\"condition\" name=\"status\" [checked]= \"condition==editName.status\" >\n          <label>{{condition}}</label>\n        </div> -->\n      </div>\n    </div>\n    \n      <!-- CATEGORIES -->\n      <div class=\"edit-box\">\n        <fieldset class=\"form-group\">\n          <legend>Categories</legend>\n          \n            <!-- <span *ngFor=\"let cat of ['historic','religious','short','poetic','nature','tradional','creative','non-syriac']\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"{{cat}}\" >{{cat}}\n              </label>\n            </span> -->\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"1\"name=\"categories['1']\" [(ngModel)]=\"categories[1]\" [checked]= \"true==categories['1']\">Historic\n            </label>\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"2\" name=\"categories['2']\" [(ngModel)]=\"categories[2]\" [checked]= \"true==categories['2']\">religious\n            </label>\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"8\"name=\"categories['8']\" [(ngModel)]=\"categories[8]\" [checked]= \"true==categories['8']\">short\n            </label>\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"3\"name=\"categories['3']\" [(ngModel)]=\"categories[3]\" [checked]= \"true==categories['3']\">poetic\n            </label>\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"5\" name=\"categories['5']\" [(ngModel)]=\"categories[5]\" [checked]= \"true==categories['5']\">nature\n            </label>\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"6\" name=\"categories['6']\" [(ngModel)]=\"categories[6]\" [checked]= \"true==categories['6']\">traditional\n            </label>\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"4\" name=\"categories['4']\" [(ngModel)]=\"categories[4]\" [checked]= \"true==categories['4']\">creative\n            </label>\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"7\" name=\"categories['7']\" [(ngModel)]=\"categories[7]\" [checked]= \"true==categories['7']\">non-syriac\n            </label>\n        </fieldset>        \n      </div>\n    \n      <!-- Source -->\n      <div class=\"edit-box\">\n          <div class=\"form-group has-success\">\n            Sources<input type=\"text\" value=\"{{editName.src}}\" class=\"form-control is-valid\" id=\"inputValid\" name=\"editName.src\" [(ngModel)]=\"editName.src\">\n          </div>\n        </div>\n    <!-- SUBMIT -->\n    <div class=\"edit-box\">\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      <button class=\"btn btn-warning\" (click)=\"hideEdit()\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.editEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categories = {
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': false,
            '6': false,
            '7': false,
            '8': false,
        };
    }
    EditComponent.prototype.ngOnInit = function () {
        console.log("Word INIT is ", this.editName.eng_word);
        this.getCats(this.editName.id);
    };
    EditComponent.prototype.hideEdit = function () {
        // this.getCats(this.editName.id);
        this.editEmitter.emit("close edit");
        // console.log("Hiding ", this.editName.eng_word );
    };
    EditComponent.prototype.getCats = function (word_id) {
        var _this = this;
        var observ = this._httpService.getCats(word_id);
        observ.subscribe(function (data) {
            console.log("data from getCats is ", data);
            if (data['results']) {
                for (var i = 1; i < 9; i++) {
                    var found = false;
                    for (var k = 0; k < data['results'].length; k++) {
                        if (i == data['results'][k].id) {
                            found = true;
                        }
                    }
                    if (found) {
                        _this.categories[i] = true;
                        console.log(i + " is true");
                    }
                    else {
                        _this.categories[i] = false;
                        console.log(i + " is false");
                    }
                }
            }
        });
    };
    EditComponent.prototype.edit = function (id) {
        var _this = this;
        var observ = this._httpService.edit(this.editName);
        console.log("categories is", this.categories);
        observ.subscribe(function (data) {
            console.log("data from edit is ", data);
            if (!data['error']) {
                _this.hideEdit();
                // this._router.navigate(['/dashboard']);
            }
        });
    };
    EditComponent.prototype.edit2 = function (id) {
        var _this = this;
        // this.getCats(id);
        var cat_add_arr = [];
        var cat_remove_arr = [];
        for (var cat in this.categories) {
            if (this.categories[cat]) {
                cat_add_arr.push(cat);
            }
            else {
                cat_remove_arr.push(cat);
            }
        }
        var editData = {
            name: this.editName,
            cat_add_arr: cat_add_arr,
            cat_remove_arr: cat_remove_arr
        };
        var observ = this._httpService.edit2(editData);
        console.log("categories is", this.categories);
        observ.subscribe(function (data) {
            console.log("data from edit is ", data);
            if (!data['error']) {
                _this.hideEdit();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "editName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "editEmitter", void 0);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "../node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    // loggedIn:boolean=false;
    function HttpService(_http) {
        this._http = _http;
        this.loginCheck = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loginObservable = this.loginCheck.asObservable();
    }
    HttpService.prototype.getAll = function () {
        return this._http.get('api/v5/names?status=approved');
    };
    HttpService.prototype.getCats = function (word_id) {
        return this._http.get('api/v2/names/categories/' + word_id);
    };
    HttpService.prototype.getAllAdmin = function () {
        return this._http.get('api/v5/names');
    };
    HttpService.prototype.filterNames = function (filters_str) {
        console.log("Service filtername string is ", filters_str);
        return this._http.get('/api/v5/names' + filters_str);
    };
    HttpService.prototype.login = function (user) {
        return this._http.post('/api/v2/login', user);
    };
    HttpService.prototype.logout = function () {
        this.changeLoginTo(false);
        return this._http.delete('/api/v2/logout');
    };
    HttpService.prototype.delete = function (id) {
        return this._http.delete('api/v1/names/' + id);
    };
    HttpService.prototype.edit = function (name) {
        return this._http.put('api/v2/names/' + name.id, name);
    };
    HttpService.prototype.edit2 = function (editData) {
        return this._http.put('api/v3/names/' + editData.name.id, editData);
    };
    HttpService.prototype.changeLoginTo = function (status) {
        this.loginCheck.next(status);
    };
    HttpService.prototype.getLoginStatus = function () {
        return this.loginObservable;
    };
    HttpService.prototype.signIn = function () {
        // this.loggedIn = true;
    };
    HttpService.prototype.signOut = function () {
        // this.loggedIn = false;
    };
    HttpService.prototype.isLoggedIn = function () {
        console.log("inside service isLogged in");
        return this._http.get('/api/v2/names/check');
        // if(this.loggedIn){
        //   return true;
        // }else{
        //   return false
        // }
    };
    HttpService.prototype.add = function (nameData) {
        // console.log("inside service add method")
        return this._http.post('/api/v2/names', nameData);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert{\r\n    width:600px;\r\n    /* display:inline-block; */\r\n    /* text-align: center; */\r\n\r\n}\r\n.info-box{\r\n    text-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- <div class=\"alert alert-dismissible alert-success\">\n      <button type=\"button\" class=\"close\" id=\"{{showName.eng_word}}\"  (click)=\"closeInfo($event)\">&times;</button>\n      <strong>\n          <span *ngIf=\"showName.gender == 'female'\">\n              <h1>{{showName.eng_word}} <img src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-f4ce4116003b37a7933046e9ece2e19a-female.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n            </span>\n            <span *ngIf=\"showName.gender == 'male'\">\n                <h1>{{showName.eng_word}} <img src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-5454771825f1a2c1a95625cfaf368b33-male.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n            </span>\n            <span *ngIf=\"showName.gender == 'neutral'\">\n                <h1>{{showName.eng_word}} <img src=\"https://images.vexels.com/media/users/3/127690/isolated/lists/046013072aefe11afa99841eb692a8b3-flat-medical-gender-sign.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n            </span>\n      </strong>\n      <p>{{showName.syr_word}}, {{showName.arb_word}}</p>\n      <h3>Meaning: {{showName.meaning}}</h3>\n      <p>DESCRIPTION: {{showName.eng_desc}}</p> \n      <span *ngFor=\"let star of stars\">\n        <span><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/768px-Gold_Star.svg.png\" width=\"40px\" height=\"40px\"alt=\"star\"></span>\n      </span> -->\n      <!-- <p>Rating:{{showName.rating}}</p> -->\n      <!-- <div *ngIf=\"showName.src\">\n        <p>Sources: <a href=\"#\" class=\"alert-link\">click here for source</a></p>\n      </div>\n    </div> -->\n\n    <div class=\"card border-success mb-5 alert\" style=\"max-width: 30rem;\">\n        <button type=\"button\" class=\"close\" id=\"{{showName.eng_word}}\"  (click)=\"closeInfo($event)\">&times;</button>\n        <div class=\"card-header\" >{{showName.meaning}}\n            <!-- <span *ngFor=\"let star of stars\">\n                <span><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/768px-Gold_Star.svg.png\" width=\"30px\" height=\"30px\"alt=\"star\"></span>\n            </span> -->\n\n        </div>\n        <div class=\"card-body\">\n            <h1 class=\"card-title\">{{showName.eng_word}}</h1>\n            <h3 style=\"color:green;\">{{showName.syr_word}}, {{showName.arb_word}}</h3>\n            <p class=\"card-text\">{{showName.eng_desc}}</p>\n            <p>Variations: {{showName.variations}}</p>\n            \n        </div>\n    </div>\n    <!-- <div class=\"jumbotron\">\n            <h1 class=\"display-3\">Hello, world!</h1>\n            <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n            <hr class=\"my-4\">\n            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n            <p class=\"lead\">\n              <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n            </p>\n          </div> -->\n\n"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoComponent = /** @class */ (function () {
    function InfoComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stars = [];
    }
    InfoComponent.prototype.ngOnInit = function () {
        if (this.showName) {
            for (var i = 0; i < parseInt(this.showName.rating); i++) {
                this.stars.push("x");
            }
        }
    };
    InfoComponent.prototype.closeInfo = function (name_event) {
        this.closeEmitter.emit(name_event.srcElement.id);
        this.stars = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoComponent.prototype, "showName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InfoComponent.prototype, "closeEmitter", void 0);
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    width: 300px;\r\n    text-align: center;\r\n    display:inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <form (submit)=\"login()\">\n      <fieldset>\n        <legend>Login</legend>\n      \n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\"  aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name=\"user.email\" [(ngModel)]=\"user.email\">\n          <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" class=\"form-control\"  placeholder=\"Password\" name=\"user.password\" [(ngModel)]=\"user.password\">\n        </div>\n        \n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { EventEmitter } from 'protractor';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = {
            'email': "",
            'password': ""
        };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var observ = this._httpService.login(this.user);
        observ.subscribe(function (data) {
            console.log("data from login is ", data);
            if (data['message'] == "Success retrieving user") {
                _this._httpService.changeLoginTo(true);
                _this.toggleMenu();
                // this._router.reload();
                _this._router.navigate(['/dashboard']);
            }
            else {
                console.log(data['error']);
            }
        });
    };
    LoginComponent.prototype.toggleMenu = function () {
        this.loginEmitter.emit("toggle menu");
        console.log("inside toggleMenu Login");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "loginEmitter", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-master{\r\n    /* margin:20px; */\r\n    margin-top: 10px;\r\n    /* background:lightgray; */\r\n    height:auto;\r\n    text-align: center;\r\n}\r\n.navi-bar{\r\n    margin:30px;\r\n    display:inline-block\r\n    \r\n}\r\n.info-box-master{\r\n    /* text-align: center; */\r\n    display:inline-block;\r\n    /* width:800px; */\r\n}\r\n.separation{\r\n    \r\n}\r\n.results-box{\r\n    /* background:#78dbbd; */\r\n    display:inline-block;\r\n    /* text-align: center; */\r\n    margin-top:40px;\r\n    height:auto;\r\n    width:800px;\r\n    overflow: auto;\r\n}\r\n.filter-wrapper{\r\n    /* text-align: center; */\r\n    /* background: red; */\r\n    margin-top:30px;\r\n}\r\n.filter-box{\r\n    /* background:lightblue; */\r\n    display:inline-block;\r\n    width:300px;\r\n    /* height:120px; */\r\n    margin:10px;\r\n    vertical-align: top;\r\n    /* text-align: center; */\r\n\r\n}\r\n.dot {\r\n    height: 80px;\r\n    width: 80px;\r\n    background-color: #bbb;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin:5px;\r\n    position: relative;\r\n  }\r\n.dot1{\r\n    background:rgb(50, 206, 50);\r\n}\r\n.dot2{\r\n    background: rgb(255, 102, 102);\r\n}\r\n.filter-label{\r\n    display:inline-block;\r\n    /* margin: auto; */\r\n    font-size:auto;\r\n    top:30%;    \r\n    left:2%;\r\n    right:2%;\r\n    position: absolute;\r\n}\r\n.name-box{\r\n    background: #889596;\r\n    height: 100px;\r\n    margin:10px;\r\n    text-align: left;\r\n}\r\n.filters-choice{\r\n    /* background: yellow; */\r\n    height:30px;\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n}\r\n.btn{\r\n    margin:5px;\r\n}\r\n.badge{\r\n    margin:3px;\r\n}\r\n.off{\r\n    display:none;\r\n}\r\n.on{\r\n    display:inline-block;\r\n} \r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"search-master\">\n  <div class=\"filter-wrapper\" >\n    <div class=\"filter-box\">\n      <!-- SEARCH BY GENDER -->\n      <h3>GENDER<img src=\"http://laoblogger.com/images/cartoon-baby-boy-clipart-7.jpg\" alt=\"img\" width=\"60px\"height=\"60px\"></h3>\n      <button type=\"button\" class=\"btn btn-info\" id=\"Male\"(click)=\"hideFilter('Male')\" (click)=\"addFilter('Male', 'gender')\">Male</button>\n      <button type=\"button\" class=\"btn btn-info\" id=\"Female\" (click)=\"hideFilter('Female')\" (click)=\"addFilter('Female','gender')\">Female</button>\n      <button type=\"button\" class=\"btn btn-info\" id=\"Neutral\" (click)=\"hideFilter('Neutral')\" (click)=\"addFilter('Neutral','gender')\">Neutral</button>\n    </div>\n    <div class=\"filter-box\">\n      <!-- SEARCH BY CATEGORY -->\n        <h3>CATEGORY<img src=\"https://i.pinimg.com/originals/3d/2c/c9/3d2cc95207024ebb428021a34b6fc66d.png\" alt=\"img\" width=\"60px\"height=\"60px\"></h3>\n        <div >\n          <button type=\"button\" class=\"btn btn-info \" id=\"Religious\" (click)=\"hideFilter('Religious')\" (click)=\"addFilter('Religious','cat')\">Religious</button>\n          <button type=\"button\" class=\"btn btn-info\" id=\"Historic\" (click)=\"hideFilter('Historic')\"(click)=\"addFilter('Historic','cat')\">Historic</button>\n          <button type=\"button\" class=\"btn btn-info\" id=\"Non-Syriac\" (click)=\"hideFilter('Non-Syriac')\"(click)=\"addFilter('Non-Syriac','cat')\">Non-Syriac</button>\n          <button type=\"button\" class=\"btn btn-info\" id=\"Creative\" (click)=\"hideFilter('Creative')\"(click)=\"addFilter('Creative','cat')\">Creative</button>\n          <button type=\"button\" class=\"btn btn-info\" id=\"Nature\" (click)=\"hideFilter('Nature')\"(click)=\"addFilter('Nature','cat')\">Nature</button>\n          <button type=\"button\" class=\"btn btn-info\" id=\"Traditional\" (click)=\"hideFilter('Traditional')\"(click)=\"addFilter('Traditional','cat')\">Traditional</button>\n          <button type=\"button\" class=\"btn btn-info\" id=\"Poetic\" (click)=\"hideFilter('Poetic')\"(click)=\"addFilter('Poetic','cat')\">Poetic</button>\n          <button type=\"button\" class=\"btn btn-info\" id=\"Short\" (click)=\"hideFilter('Short')\"(click)=\"addFilter('Short','cat')\">Short and Sweet</button>\n          \n          \n        </div>\n    </div>\n    <!-- SEARCH BY NAME -->\n    <div class=\"filter-box\">\n        <h3>SEARCH BY NAME<img src=\"https://i1.wp.com/elephant-pictures.clipartonline.net/_/rsrc/1395606453801/funny-cartoon-elephant-clip-art/baby_cartoon_elephant-17.png\" alt=\"img\" width=\"60px\"height=\"60px\"></h3>\n        <form (submit)=\"searchByName()\">\n          <div class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Search for name or meaning...\" id=\"inputLarge\" name=\"name\" [(ngModel)]=\"name\">\n              <input type=\"submit\" value=\"submit\">\n          </div>\n        </form>\n        \n    </div>\n  </div>\n  <!-- FILTERS CHOICES -->\n  <div class=\"filters-choice\">\n    <span *ngIf=\"filtersSelected\">\n        <span class=\"badge badge-pill badge-warning\" (click)=\"reset()\">RESET</span>\n    </span>\n      <!-- <span class=\"badge badge-pill badge-danger\">filters:</span> -->\n      \n    <span *ngFor=\"let filter of filters\">\n      <span class=\"badge badge-pill badge-success\" (click)=\"showFilter(filter[0])\" (click)=\"removeFilter(filter[0])\" >{{filter[0]}}</span>    \n    </span>\n\n  </div>\n  <!-- MORE INFO BOX -->\n  <div class=\"info-box-master\">\n    <app-info  *ngIf=\"nameSelected\" [showName]=\"nameSelected\" (closeEmitter)=\"closeInfoBox($event)\"></app-info>\n  </div>\n  <div class=\"separation\">\n\n  </div>\n\n  <!-- RESULTS BOX -->\n\n  <div class=\"results-box\">\n    \n    <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\"(click)=\"sort('eng_word')\">Name <img src=\"https://cdn3.iconfinder.com/data/icons/ssc-icons/512/sort_p-512.png\" alt=\"sort\" width=\"30px\"height=\"30px\"></th>\n            <!-- <th scope=\"col\">Gender</th> -->\n            <th scope=\"col\">Meaning</th>\n            <th scope=\"col\">In Arabic</th>\n            <th scope=\"col\">In Syriac</th>\n            <!-- <th scope=\"col\" (click)=\"sort('rating')\" >Rating<img src=\"https://cdn3.iconfinder.com/data/icons/ssc-icons/512/sort_p-512.png\" alt=\"sort\" width=\"30px\"height=\"30px\"></th> -->\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr class=\"table-info\" *ngFor=\"let name of names\">\n              <th scope=\"row\">\n                <span *ngIf=\"name.gender == 'female'\">\n                  <h1>{{name.eng_word}} <img src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-f4ce4116003b37a7933046e9ece2e19a-female.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n                </span>\n                <span *ngIf=\"name.gender == 'male'\">\n                    <h1>{{name.eng_word}} <img src=\"http://www.myiconfinder.com/uploads/iconsets/256-256-5454771825f1a2c1a95625cfaf368b33-male.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n                </span>\n                <span *ngIf=\"name.gender == 'neutral'\">\n                    <h1>{{name.eng_word}} <img src=\"https://images.vexels.com/media/users/3/127690/isolated/lists/046013072aefe11afa99841eb692a8b3-flat-medical-gender-sign.png\" alt=\"gender\" width=\"30px\" height=\"30px\" ></h1>\n                </span>\n                </th>\n              <!-- <td>{{name.gender}}</td> -->\n              <td>{{name.meaning}}</td>\n              <td>{{name.arb_word}}</td>\n              <td>{{name.syr_word}}</td>\n              \n              <!-- <td>{{name.rating}}</td> -->\n              <td>\n                <!-- <span class=\"badge badge-pill badge-success\">Add to Favorite</span>\n                <span class=\"badge badge-pill badge-danger\">Love</span> -->\n                \n                <span class=\"badge badge-pill badge-info\" id=\"{{name.id}}\" (click)=\"showInfo(name.id)\">More Info</span>\n            \n            </tr>\n        </tbody>\n      </table> \n  </div>\n  <div class=\"separation\"></div>\n\n  <!-- PAGINATION -->\n  <p>{{nameCount}} results</p>\n  <div class=\"filter-box\">\n    <ul  class=\"pagination pagination-sm\">\n      <li *ngFor=\"let page of pages\" class=\"page-item\">\n\n        <a class=\"page-link\" (click)=\"showPage(page)\" >{{page}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.names = [];
        this.filters = [];
        this.sorting = {
            filter: "eng_word",
            state: true
        };
        this.pages = [];
        this.curr_page = 1;
        this.byName = false;
        this.filtersSelected = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        // this.getAll();
        this.filterNames("");
        this.name = "";
        this.nameCount = 0;
    };
    SearchComponent.prototype.getAll = function () {
        var _this = this;
        this.pages = [];
        var observ = this._httpService.getAll();
        observ.subscribe(function (data) {
            console.log("data is ", data);
            if (data['error']) {
                console.log("ERRORRR");
            }
            else {
                _this.names = data['results'];
            }
        });
    };
    SearchComponent.prototype.filterNames = function (extra_filter) {
        var _this = this;
        this.pages = [];
        var filters_str = "?";
        if (this.sorting.state) {
            filters_str += "sort_by=asc." + this.sorting.filter + "&";
        }
        else {
            filters_str += "sort_by=desc." + this.sorting.filter + "&";
        }
        for (var i = 0; i < this.filters.length; i++) {
            filters_str += this.filters[i][1] + "=" + this.filters[i][0] + "&";
        }
        filters_str += extra_filter + "&status=approved";
        this._httpService.filterNames(filters_str).subscribe(function (data) {
            console.log("data from fitler names!!!!", data);
            _this.nameCount = data['results'].length;
            _this._httpService.filterNames(filters_str + "&limit=2").subscribe(function (data2) {
                for (var i = 0; i < Math.ceil(_this.nameCount / 2); i++) {
                    _this.pages.push(i + 1);
                }
                _this.names = data2['results'];
            });
            // if(data['results'].length==0){
            //   this.nameCount =1;
            //   console.log("INSIDE nulling nameCount")
            // }
            // console.log("data array is ",data['results'].length)
            // console.log("pages array is ", this.pages);
            // console.log("nameCount is ",this.nameCount);
        });
    };
    SearchComponent.prototype.next = function (offset) {
        if (this.nameCount + offset == 0) {
            this.filterNames("");
        }
        else {
            this.nameCount += offset;
            this.filterNames("offset=" + this.nameCount);
        }
    };
    SearchComponent.prototype.showPage = function (page) {
        var offset = (page * 2) - 2;
        this.curr_page = page;
        if (this.byName) {
            this.filterNames("word=" + this.name + "&offset=" + offset);
        }
        else {
            this.filterNames("offset=" + offset);
        }
    };
    SearchComponent.prototype.addFilter = function (filter, filterType) {
        // this.name="";
        this.byName = false;
        var filterFound = false;
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i][0] == filter) {
                filterFound = true;
                this.showFilter(filter);
                this.removeFilter(filter);
            }
        }
        if (!filterFound) {
            this.filtersSelected = true;
            console.log("0000000000000000000000000000filter array is ", this.filters);
            this.filters.push([filter, filterType]);
            this.filterNames("");
        }
        // this.pages = [];
    };
    SearchComponent.prototype.showInfo = function (id) {
        var _this = this;
        if (this.nameSelected) {
            if (this.nameSelected.id == id) {
                this.nameSelected = null;
                var x = document.getElementById(id);
                if (x) {
                    x.innerHTML = 'More Info';
                    x.style.color = "white";
                }
            }
            else {
                //close the previous box. selected.id
                var prevElement = document.getElementById(this.nameSelected.id);
                if (prevElement) {
                    prevElement.innerHTML = "More Info";
                    prevElement.style.color = "white";
                }
                //replace it with new box. new id
                var newElement = document.getElementById(id);
                if (newElement) {
                    newElement.innerHTML = "close";
                    newElement.style.color = "yellow";
                    // make service request to get new info of new name. and update nameSelected
                    var observ = this._httpService.filterNames("?id=" + id);
                    observ.subscribe(function (data) {
                        _this.nameSelected = data['results'][0];
                    });
                }
            }
        }
        else {
            var x = document.getElementById(id);
            if (x) {
                x.innerHTML = 'Close';
                x.style.color = "yellow";
                var observ = this._httpService.filterNames("?id=" + id);
                observ.subscribe(function (data) {
                    _this.nameSelected = data['results'][0];
                    console.log("nameSelected is", data['results'][0]);
                    console.log("data name is ", data);
                });
            }
        }
    };
    SearchComponent.prototype.closeInfoBox = function (name_event) {
        console.log("closing element id(name) of ", name_event);
        this.nameSelected = null;
        var observ = this._httpService.filterNames("?word=" + name_event);
        observ.subscribe(function (data) {
            var id = data['results'][0].id;
            var x = document.getElementById(id);
            if (x) {
                x.innerHTML = 'More Info';
                x.style.color = "white";
            }
        });
    };
    SearchComponent.prototype.searchByName = function () {
        this.byName = true;
        this.filterNames("word=" + this.name);
    };
    SearchComponent.prototype.showFilter = function (filter) {
        console.log("showing ", filter);
        var element = document.getElementById(filter);
        element.style.opacity = "1";
    };
    SearchComponent.prototype.hideFilter = function (filter) {
        var element = document.getElementById(filter);
        // element.style.display ="none"
        element.style.opacity = "0.2";
    };
    SearchComponent.prototype.removeFilter = function (filter) {
        var index;
        // this.filtersSelected= false;
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i][0] == filter) {
                index = i;
            }
        }
        if (index == this.filters.length - 1) {
            this.filters.pop();
        }
        else {
            var temp = this.filters[this.filters.length - 1];
            this.filters[this.filters.length - 1] = this.filters[index];
            this.filters[index] = temp;
            this.filters.pop();
        }
        if (this.filters.length == 0) {
            this.filtersSelected = false;
        }
        this.filterNames("");
    };
    SearchComponent.prototype.sort = function (filter) {
        var sql = "";
        if (this.byName) {
            sql = "word=" + this.name;
        }
        this.sorting.filter = filter;
        this.filterNames(sql);
        this.sorting.state = !this.sorting.state;
        // this.sorting.state = !this.sorting.state;
        console.log("sorting after sorting is ", this.sorting);
    };
    SearchComponent.prototype.reset = function () {
        this.filtersSelected = false;
        console.log("filters arr is ", this.filters);
        var length = this.filters.length;
        for (var i = 0; i < length; i++) {
            console.log(this.filters[0][0]);
            this.showFilter(this.filters[0][0]);
            this.filters.shift();
        }
        this.filterNames("");
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sargo\Documents\CODING DOJO (Files)\MEAN Stack\NamesAPI\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map