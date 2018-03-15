import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router} from '@angular/router';

export interface IBreadcrumb {
    label: string;
    params?: Params;
    url: string;
}

@Component({
    selector: 'cc-breadcrumbs',
    templateUrl: './cc-breadcrumbs.component.html',
    styleUrls: ['./cc-breadcrumbs.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CCBreadcrumbsComponent implements OnInit {

    public breadcrumbs: IBreadcrumb[];
    private paramKeyRegExp: RegExp = /:((\w+)Id)/g;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.breadcrumbs = [];
    }

    ngOnInit() {
        this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
            }
        });
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
        const ROUTE_DATA_BREADCRUMB: string = 'breadcrumbs';

        let children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        for (let child of children) {

            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            if (!child.routeConfig.data || !child.routeConfig.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

            url += `/${routeURL}`;

            let label;
            let resolveParentKey;

            if (route.snapshot.data[child.snapshot.data[ROUTE_DATA_BREADCRUMB].label]) {
                label = route.snapshot.data[child.snapshot.data[ROUTE_DATA_BREADCRUMB].label].displayName;
            } else if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].label) {

                if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].label.split('.').length > 1) {
                    resolveParentKey = child.snapshot.data[ROUTE_DATA_BREADCRUMB].label.split('.')[0];
                    label = deep(child.snapshot.data[ROUTE_DATA_BREADCRUMB].label, child.snapshot.data).displayName;
                } else {
                    label = child.snapshot.data[ROUTE_DATA_BREADCRUMB].label;
                    resolveParentKey = label;
                }
            }

            this.findParent(breadcrumbs, child.snapshot.data[ROUTE_DATA_BREADCRUMB].parent, child.snapshot, resolveParentKey);

            if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].label) {

                let breadcrumb: IBreadcrumb = {
                    label: label,
                    params: child.snapshot.params,
                    url: url
                };
                breadcrumbs.push(breadcrumb);
            }

            return this.getBreadcrumbs(child, url, breadcrumbs);
        }

        return breadcrumbs;
    }

    private findParent(breadcrumbs, parent, childSnapshot, resolveParentKey?) {
        let label, url, pathFirstParent;

        if (!parent) {
            return;
        }

        if (Array.isArray(parent)) {
            pathFirstParent = parent[0];
            parent = '/' + parent.join('/');
        } else {
            pathFirstParent = parent;
            parent = '/' + parent;
        }

        let newParent = this.router.config.find((config) => {
            return config.path === pathFirstParent;
        });

        if (!newParent) {
            return;
        }

        url = parent.replace(this.paramKeyRegExp, (pattern, paramKey, resolveKey) => {
            if (resolveParentKey) {
                label = childSnapshot.data[resolveParentKey][resolveKey].displayName;
            } else {
                label = childSnapshot.data[resolveKey].displayName;
            }
            return childSnapshot.params[paramKey];
        });

        if (!label) {
            label = newParent.data.breadcrumbs.label;
        }

        breadcrumbs.unshift({
            label,
            url
        });

        if (newParent.data && newParent.data.breadcrumbs && newParent.data.breadcrumbs.parent) {
            this.findParent(breadcrumbs, newParent.data.breadcrumbs.parent, childSnapshot);
        }
    }

    public trackByFn(index, item) {
        return item.path;
    }

}

/**
 *
 * @param key
 * @param data
 * @returns {T}
 */
function deep(key, data) {
    return data.breadcrumbs.label.split('.').reduce((pv, cv) => pv[cv], data);
}
