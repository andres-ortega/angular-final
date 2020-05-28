import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalrelacionalComponent } from './capitalrelacional.component';

describe('CapitalrelacionalComponent', () => {
  let component: CapitalrelacionalComponent;
  let fixture: ComponentFixture<CapitalrelacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalrelacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalrelacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
