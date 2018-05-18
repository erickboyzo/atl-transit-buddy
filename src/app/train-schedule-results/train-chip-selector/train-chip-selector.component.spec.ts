import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainChipSelectorComponent } from './train-chip-selector.component';

describe('TrainChipSelectorComponent', () => {
  let component: TrainChipSelectorComponent;
  let fixture: ComponentFixture<TrainChipSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainChipSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainChipSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
