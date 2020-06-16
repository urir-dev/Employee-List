import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOfTheMonthComponent } from './employees-of-the-month.component';

describe('EmployeesOfTheMonthComponent', () => {
  let component: EmployeesOfTheMonthComponent;
  let fixture: ComponentFixture<EmployeesOfTheMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesOfTheMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesOfTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
