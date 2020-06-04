import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectoresComponent } from './subsectores.component';

describe('SubsectoresComponent', () => {
  let component: SubsectoresComponent;
  let fixture: ComponentFixture<SubsectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsectoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
