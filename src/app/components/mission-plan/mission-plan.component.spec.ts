import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPlanComponent } from './mission-plan.component';

describe('MissionPlanComponent', () => {
  let component: MissionPlanComponent;
  let fixture: ComponentFixture<MissionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
