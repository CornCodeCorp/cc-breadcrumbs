import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CcBreadcrumbsComponent} from './cc-breadcrumbs.component';

describe('CcBreadcrumbsComponent', () => {
    let component: CcBreadcrumbsComponent;
    let fixture: ComponentFixture<CcBreadcrumbsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CcBreadcrumbsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CcBreadcrumbsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
