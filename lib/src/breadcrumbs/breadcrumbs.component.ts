import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router} from '@angular/router';

export interface IBreadcrumb {
    label: string;
    params?: Params;
    url: string;
}

@Component({
    selector: 'cc-breadcrumbs',
    template: `
        <ol class="cc-breadcrumbs">
            <li
                class="cc-breadcrumbs__item"
                *ngFor="let breadcrumb of breadcrumbs; trackBy: trackByFn">
                <a
                    class="cc-breadcrumbs__item__link"
                    title="{{breadcrumb.label}}"
                    [routerLink]="[breadcrumb.url]">
                    {{breadcrumb.label}}
                </a>
            </li>
        </ol>
    `,
    styles: ['.cc-breadcrumbs{margin:0;padding:0;list-style:none;background:transparent;white-space:nowrap;display:flex}.cc-breadcrumbs__item{text-overflow:ellipsis;overflow:hidden;margin-left:6px;color:#fff}.cc-breadcrumbs__item__link{color:#fff;font-size:14px}.cc-breadcrumbs__item__link:hover{color:#a6a6a6}.cc-breadcrumbs__item__link:focus{color:#fff}.cc-breadcrumbs__item:first-child{overflow:visible;margin-left:0}.cc-breadcrumbs__item + li:before{content:"\\203A";padding:0;display:block;float:left;font-size:24px;line-height:.8;margin:0 6px 0 0}'],
    encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent implements OnInit {

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
        const ROUTE_DATA_BREADCRUMB = 'breadcrumbs';

        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {

            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            if (!child.routeConfig.data || !child.routeConfig.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            const routeURL = child.snapshot.url.map(segment => segment.path).join('/');

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

                const breadcrumb: IBreadcrumb = {
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

    private findParent(breadcrumbs: IBreadcrumb[], parent: any, childSnapshot: any, resolveParentKey?: any) {
        let label, url, pathFirstParent: any;

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

        const newParent = this.router.config.find((config) => {
            return config.path === pathFirstParent;
        });

        if (!newParent) {
            return;
        }

        url = parent.replace(this.paramKeyRegExp, (pattern: any, paramKey: any, resolveKey: any) => {
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

    public trackByFn(index: number, item: any) {
        return item.path;
    }

}

/**
 *
 * @param key
 * @param data
 * @returns {T}
 */
function deep(key: string, data: any) {
    return data.breadcrumbs.label.split('.').reduce((pv: any, cv: string) => pv[cv], data);
}
