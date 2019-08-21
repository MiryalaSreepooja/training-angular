import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptdetailsComponent } from './deptdetails.component';

describe('DeptdetailsComponent', () => {
  let component: DeptdetailsComponent;
  let fixture: ComponentFixture<DeptdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
