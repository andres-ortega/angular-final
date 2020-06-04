import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stakeholder3Component } from './stakeholder3.component';

describe('Stakeholder3Component', () => {
  let component: Stakeholder3Component;
  let fixture: ComponentFixture<Stakeholder3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stakeholder3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stakeholder3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
