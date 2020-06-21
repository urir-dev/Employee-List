import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetinglineComponent } from './greetingline.component';

describe('GreetinglineComponent', () => {
  let component: GreetinglineComponent;
  let fixture: ComponentFixture<GreetinglineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetinglineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetinglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
