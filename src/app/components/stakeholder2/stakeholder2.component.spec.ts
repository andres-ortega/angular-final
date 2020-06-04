import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stakeholder2Component } from './stakeholder2.component';

describe('Stakeholder2Component', () => {
  let component: Stakeholder2Component;
  let fixture: ComponentFixture<Stakeholder2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stakeholder2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stakeholder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
