import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalhumanoComponent } from './capitalhumano.component';

describe('CapitalhumanoComponent', () => {
  let component: CapitalhumanoComponent;
  let fixture: ComponentFixture<CapitalhumanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalhumanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalhumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
