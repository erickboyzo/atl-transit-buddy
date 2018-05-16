import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainScheduleResultsComponent } from './train-schedule-results.component';

describe('TrainScheduleResultsComponent', () => {
  let component: TrainScheduleResultsComponent;
  let fixture: ComponentFixture<TrainScheduleResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainScheduleResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainScheduleResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
