import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsectores2Component } from './subsectores2.component';

describe('Subsectores2Component', () => {
  let component: Subsectores2Component;
  let fixture: ComponentFixture<Subsectores2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subsectores2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subsectores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
