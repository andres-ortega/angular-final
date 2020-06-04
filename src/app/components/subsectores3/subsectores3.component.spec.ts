import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsectores3Component } from './subsectores3.component';

describe('Subsectores3Component', () => {
  let component: Subsectores3Component;
  let fixture: ComponentFixture<Subsectores3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subsectores3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subsectores3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
