import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionsectoresComponent } from './informacionsectores.component';

describe('InformacionsectoresComponent', () => {
  let component: InformacionsectoresComponent;
  let fixture: ComponentFixture<InformacionsectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionsectoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionsectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
