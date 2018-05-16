import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleResultCardComponent } from './schedule-result-card.component';

describe('ScheduleResultCardComponent', () => {
  let component: ScheduleResultCardComponent;
  let fixture: ComponentFixture<ScheduleResultCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleResultCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
