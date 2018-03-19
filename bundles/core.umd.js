(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/router"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/router", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["cc-breadcrumbs"] = factory(require("@angular/core"), require("@angular/router"), require("@angular/common"));
	else
		root["cc-breadcrumbs"] = factory(root["@angular/core"], root["@angular/router"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CCBreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CCBreadcrumbsComponent = (function () {
    function CCBreadcrumbsComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.paramKeyRegExp = /:((\w+)Id)/g;
        this.breadcrumbs = [];
    }
    CCBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                _this.breadcrumbs = _this.getBreadcrumbs(_this.activatedRoute.root);
            }
        });
    };
    CCBreadcrumbsComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = 'breadcrumbs';
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child.outlet !== __WEBPACK_IMPORTED_MODULE_1__angular_router__["PRIMARY_OUTLET"]) {
                continue;
            }
            if (!child.routeConfig.data || !child.routeConfig.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
            url += "/" + routeURL;
            var label = void 0;
            var resolveParentKey = void 0;
            if (route.snapshot.data[child.snapshot.data[ROUTE_DATA_BREADCRUMB].label]) {
                label = route.snapshot.data[child.snapshot.data[ROUTE_DATA_BREADCRUMB].label].displayName;
            }
            else if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].label) {
                if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].label.split('.').length > 1) {
                    resolveParentKey = child.snapshot.data[ROUTE_DATA_BREADCRUMB].label.split('.')[0];
                    label = deep(child.snapshot.data[ROUTE_DATA_BREADCRUMB].label, child.snapshot.data).displayName;
                }
                else {
                    label = child.snapshot.data[ROUTE_DATA_BREADCRUMB].label;
                    resolveParentKey = label;
                }
            }
            this.findParent(breadcrumbs, child.snapshot.data[ROUTE_DATA_BREADCRUMB].parent, child.snapshot, resolveParentKey);
            if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].label) {
                var breadcrumb = {
                    label: label,
                    params: child.snapshot.params,
                    url: url
                };
                breadcrumbs.push(breadcrumb);
            }
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    };
    CCBreadcrumbsComponent.prototype.findParent = function (breadcrumbs, parent, childSnapshot, resolveParentKey) {
        var label, url, pathFirstParent;
        if (!parent) {
            return;
        }
        if (Array.isArray(parent)) {
            pathFirstParent = parent[0];
            parent = '/' + parent.join('/');
        }
        else {
            pathFirstParent = parent;
            parent = '/' + parent;
        }
        var newParent = this.router.config.find(function (config) {
            return config.path === pathFirstParent;
        });
        if (!newParent) {
            return;
        }
        url = parent.replace(this.paramKeyRegExp, function (pattern, paramKey, resolveKey) {
            if (resolveParentKey) {
                label = childSnapshot.data[resolveParentKey][resolveKey].displayName;
            }
            else {
                label = childSnapshot.data[resolveKey].displayName;
            }
            return childSnapshot.params[paramKey];
        });
        if (!label) {
            label = newParent.data.breadcrumbs.label;
        }
        breadcrumbs.unshift({
            label: label,
            url: url
        });
        if (newParent.data && newParent.data.breadcrumbs && newParent.data.breadcrumbs.parent) {
            this.findParent(breadcrumbs, newParent.data.breadcrumbs.parent, childSnapshot);
        }
    };
    CCBreadcrumbsComponent.prototype.trackByFn = function (index, item) {
        return item.path;
    };
    return CCBreadcrumbsComponent;
}());
CCBreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cc-breadcrumbs',
        templateUrl: './cc-breadcrumbs.component.html',
        styleUrls: ['./cc-breadcrumbs.component.css'],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
], CCBreadcrumbsComponent);

/**
 *
 * @param key
 * @param data
 * @returns {T}
 */
function deep(key, data) {
    return data.breadcrumbs.label.split('.').reduce(function (pv, cv) { return pv[cv]; }, data);
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornCodeModule", function() { return CornCodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cc_breadcrumbs_cc_breadcrumbs_component__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CCBreadcrumbsComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cc_breadcrumbs_cc_breadcrumbs_component__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CornCodeModule = (function () {
    function CornCodeModule() {
    }
    return CornCodeModule;
}());
CornCodeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot([])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__src_cc_breadcrumbs_cc_breadcrumbs_component__["a" /* CCBreadcrumbsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__src_cc_breadcrumbs_cc_breadcrumbs_component__["a" /* CCBreadcrumbsComponent */]
        ]
    })
], CornCodeModule);



/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYzIwNWIzY2Y5NDMzNzI5MmM0YyIsIndlYnBhY2s6Ly8vLi9saWIvc3JjL2NjLWJyZWFkY3J1bWJzL2NjLWJyZWFkY3J1bWJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRW1FO0FBQzJCO0FBYzlGLElBQWEsc0JBQXNCO0lBSy9CLGdDQUFvQixjQUE4QixFQUM5QixNQUFjO1FBRGQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFI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RUFBVSxJQUFLLFNBQUUsQ0FBQyxFQUFFLENBQUMsRUFBTixDQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0YsQ0FBQzs7Ozs7OztBQ3hKRCwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNNO0FBQ0E7QUFFd0M7QUFFdkI7QUFjOUQsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQztBQURZLGNBQWM7SUFaMUIsOEVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLDZEQUFZO1lBQ1osNkRBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEdBQXNCO1NBQ3pCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsNEdBQXNCO1NBQ3pCO0tBQ0osQ0FBQztHQUNXLGNBQWMsQ0FDMUI7QUFEMEIiLCJmaWxlIjoiY29yZS51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2NvcmVcIiwgXCJAYW5ndWxhci9yb3V0ZXJcIiwgXCJAYW5ndWxhci9jb21tb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2MtYnJlYWRjcnVtYnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjYy1icmVhZGNydW1ic1wiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9yb3V0ZXJcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYzIwNWIzY2Y5NDMzNzI5MmM0YyIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQnJlYWRjcnVtYiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBwYXJhbXM/OiBQYXJhbXM7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2MtYnJlYWRjcnVtYnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYy1icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2MtYnJlYWRjcnVtYnMuY29tcG9uZW50LmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ0NCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgYnJlYWRjcnVtYnM6IElCcmVhZGNydW1iW107XG4gICAgcHJpdmF0ZSBwYXJhbUtleVJlZ0V4cDogUmVnRXhwID0gLzooKFxcdyspSWQpL2c7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBbXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnModGhpcy5hY3RpdmF0ZWRSb3V0ZS5yb290KTtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icyh0aGlzLmFjdGl2YXRlZFJvdXRlLnJvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJyZWFkY3J1bWJzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXJsOiBzdHJpbmcgPSAnJywgYnJlYWRjcnVtYnM6IElCcmVhZGNydW1iW10gPSBbXSk6IElCcmVhZGNydW1iW10ge1xuICAgICAgICBjb25zdCBST1VURV9EQVRBX0JSRUFEQ1JVTUIgPSAnYnJlYWRjcnVtYnMnO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuOiBBY3RpdmF0ZWRSb3V0ZVtdID0gcm91dGUuY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuXG4gICAgICAgICAgICBpZiAoY2hpbGQub3V0bGV0ICE9PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNoaWxkLnJvdXRlQ29uZmlnLmRhdGEgfHwgIWNoaWxkLnJvdXRlQ29uZmlnLmRhdGEuaGFzT3duUHJvcGVydHkoUk9VVEVfREFUQV9CUkVBRENSVU1CKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEJyZWFkY3J1bWJzKGNoaWxkLCB1cmwsIGJyZWFkY3J1bWJzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgcm91dGVVUkwgPSBjaGlsZC5zbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG5cbiAgICAgICAgICAgIHVybCArPSBgLyR7cm91dGVVUkx9YDtcblxuICAgICAgICAgICAgbGV0IGxhYmVsO1xuICAgICAgICAgICAgbGV0IHJlc29sdmVQYXJlbnRLZXk7XG5cbiAgICAgICAgICAgIGlmIChyb3V0ZS5zbmFwc2hvdC5kYXRhW2NoaWxkLnNuYXBzaG90LmRhdGFbUk9VVEVfREFUQV9CUkVBRENSVU1CXS5sYWJlbF0pIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHJvdXRlLnNuYXBzaG90LmRhdGFbY2hpbGQuc25hcHNob3QuZGF0YVtST1VURV9EQVRBX0JSRUFEQ1JVTUJdLmxhYmVsXS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuc25hcHNob3QuZGF0YVtST1VURV9EQVRBX0JSRUFEQ1JVTUJdLmxhYmVsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuc25hcHNob3QuZGF0YVtST1VURV9EQVRBX0JSRUFEQ1JVTUJdLmxhYmVsLnNwbGl0KCcuJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUGFyZW50S2V5ID0gY2hpbGQuc25hcHNob3QuZGF0YVtST1VURV9EQVRBX0JSRUFEQ1JVTUJdLmxhYmVsLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gZGVlcChjaGlsZC5zbmFwc2hvdC5kYXRhW1JPVVRFX0RBVEFfQlJFQURDUlVNQl0ubGFiZWwsIGNoaWxkLnNuYXBzaG90LmRhdGEpLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gY2hpbGQuc25hcHNob3QuZGF0YVtST1VURV9EQVRBX0JSRUFEQ1JVTUJdLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUGFyZW50S2V5ID0gbGFiZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZpbmRQYXJlbnQoYnJlYWRjcnVtYnMsIGNoaWxkLnNuYXBzaG90LmRhdGFbUk9VVEVfREFUQV9CUkVBRENSVU1CXS5wYXJlbnQsIGNoaWxkLnNuYXBzaG90LCByZXNvbHZlUGFyZW50S2V5KTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLnNuYXBzaG90LmRhdGFbUk9VVEVfREFUQV9CUkVBRENSVU1CXS5sYWJlbCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYnJlYWRjcnVtYjogSUJyZWFkY3J1bWIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmVhZGNydW1icyhjaGlsZCwgdXJsLCBicmVhZGNydW1icyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kUGFyZW50KGJyZWFkY3J1bWJzOiBJQnJlYWRjcnVtYltdLCBwYXJlbnQ6IGFueSwgY2hpbGRTbmFwc2hvdDogYW55LCByZXNvbHZlUGFyZW50S2V5PzogYW55KSB7XG4gICAgICAgIGxldCBsYWJlbCwgdXJsLCBwYXRoRmlyc3RQYXJlbnQ6IGFueTtcblxuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgICAgICAgcGF0aEZpcnN0UGFyZW50ID0gcGFyZW50WzBdO1xuICAgICAgICAgICAgcGFyZW50ID0gJy8nICsgcGFyZW50LmpvaW4oJy8nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGhGaXJzdFBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHBhcmVudCA9ICcvJyArIHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1BhcmVudCA9IHRoaXMucm91dGVyLmNvbmZpZy5maW5kKChjb25maWcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWcucGF0aCA9PT0gcGF0aEZpcnN0UGFyZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW5ld1BhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsID0gcGFyZW50LnJlcGxhY2UodGhpcy5wYXJhbUtleVJlZ0V4cCwgKHBhdHRlcm46IGFueSwgcGFyYW1LZXk6IGFueSwgcmVzb2x2ZUtleTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzb2x2ZVBhcmVudEtleSkge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gY2hpbGRTbmFwc2hvdC5kYXRhW3Jlc29sdmVQYXJlbnRLZXldW3Jlc29sdmVLZXldLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGNoaWxkU25hcHNob3QuZGF0YVtyZXNvbHZlS2V5XS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZFNuYXBzaG90LnBhcmFtc1twYXJhbUtleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbmV3UGFyZW50LmRhdGEuYnJlYWRjcnVtYnMubGFiZWw7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhZGNydW1icy51bnNoaWZ0KHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgdXJsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuZXdQYXJlbnQuZGF0YSAmJiBuZXdQYXJlbnQuZGF0YS5icmVhZGNydW1icyAmJiBuZXdQYXJlbnQuZGF0YS5icmVhZGNydW1icy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZmluZFBhcmVudChicmVhZGNydW1icywgbmV3UGFyZW50LmRhdGEuYnJlYWRjcnVtYnMucGFyZW50LCBjaGlsZFNuYXBzaG90KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0cmFja0J5Rm4oaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XG4gICAgICAgIHJldHVybiBpdGVtLnBhdGg7XG4gICAgfVxuXG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBrZXlcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZnVuY3Rpb24gZGVlcChrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIGRhdGEuYnJlYWRjcnVtYnMubGFiZWwuc3BsaXQoJy4nKS5yZWR1Y2UoKHB2OiBhbnksIGN2OiBzdHJpbmcpID0+IHB2W2N2XSwgZGF0YSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9saWIvc3JjL2NjLWJyZWFkY3J1bWJzL2NjLWJyZWFkY3J1bWJzLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7Q0NCcmVhZGNydW1ic0NvbXBvbmVudH0gZnJvbSAnLi9zcmMvY2MtYnJlYWRjcnVtYnMvY2MtYnJlYWRjcnVtYnMuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvY2MtYnJlYWRjcnVtYnMvY2MtYnJlYWRjcnVtYnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW10pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ0NCcmVhZGNydW1ic0NvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDQ0JyZWFkY3J1bWJzQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JuQ29kZU1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9saWIvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9