import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
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
            if (event instanceof NavigationEnd) {
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
            if (child.outlet !== PRIMARY_OUTLET) {
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
export { CCBreadcrumbsComponent };
CCBreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cc-breadcrumbs',
                templateUrl: './cc-breadcrumbs.component.html',
                styleUrls: ['./cc-breadcrumbs.component.css'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
CCBreadcrumbsComponent.ctorParameters = function () { return [
    { type: ActivatedRoute, },
    { type: Router, },
]; };
/**
 *
 * @param key
 * @param data
 * @returns {T}
 */
function deep(key, data) {
    return data.breadcrumbs.label.split('.').reduce(function (pv, cv) { return pv[cv]; }, data);
}
