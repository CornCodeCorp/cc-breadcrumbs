import { OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
export interface IBreadcrumb {
    label: string;
    params?: Params;
    url: string;
}
export declare class CCBreadcrumbsComponent implements OnInit {
    private activatedRoute;
    private router;
    breadcrumbs: IBreadcrumb[];
    private paramKeyRegExp;
    constructor(activatedRoute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    private getBreadcrumbs(route, url?, breadcrumbs?);
    private findParent(breadcrumbs, parent, childSnapshot, resolveParentKey?);
    trackByFn(index: number, item: any): any;
}
