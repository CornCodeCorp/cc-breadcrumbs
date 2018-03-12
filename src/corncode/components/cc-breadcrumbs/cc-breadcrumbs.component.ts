import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params, PRIMARY_OUTLET, Router} from '@angular/router';

interface IBreadcrumb {
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

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.breadcrumbs = [];
    }

    ngOnInit() {
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
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

            if (!child.routeConfig.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

            url += `/${routeURL}`;

            let label;
            if (route.snapshot.data[child.snapshot.data[ROUTE_DATA_BREADCRUMB].label]) {
                label = route.snapshot.data[child.snapshot.data[ROUTE_DATA_BREADCRUMB].label].displayName;
            } else if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].label) {
                label = child.snapshot.data[ROUTE_DATA_BREADCRUMB].label;
            }

            if (child.snapshot.data[ROUTE_DATA_BREADCRUMB].parent) {
                const parent = child.snapshot.data[ROUTE_DATA_BREADCRUMB].parent;
                let label, url;

                if (Object.prototype.toString.call(parent) === '[object Array]') {
                    url = '/' + parent.join('/').replace(/\:((\w+)Id)/, (a, b, c) => {
                        label = child.snapshot.data[c].displayName;
                        return child.snapshot.params[b];
                    });

                    let a = this.router.config.find((config) => {
                        return parent[0] === config.path;
                    });

                    if (a.data && a.data.breadcrumbs) {
                        if (a.data.breadcrumbs.parent) {
                            let b = this.router.config.find((config) => {
                                return a.data.breadcrumbs.parent === config.path;
                            });
                            breadcrumbs.unshift({
                                label: b.data.breadcrumbs.label,
                                url: '/' + b.path
                            });
                        }
                    }

                } else {
                    url = '/' + child.snapshot.data[ROUTE_DATA_BREADCRUMB].parent;
                    label = this.router.config.filter((config) => {
                        return config.path === parent && config.data && config.data.breadcrumbs;
                    })[0].data.breadcrumbs.label;
                }

                breadcrumbs.push({
                    label,
                    url
                });
            }


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

    public trackByFn(index, item) {
        return item.path;
    }

}
