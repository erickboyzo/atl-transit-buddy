import { Component, Input, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { TrainScheduleService } from './train-schedule.service';
import { LoadingSpinnerService } from '../loading-spinner/loading-spinner.service';
import { TrainSchedule } from './models/train-schedule';
import { InputType } from './models/input-type.enum';

@Component({
  selector: 'app-train-schedule-results',
  templateUrl: './train-schedule-results.component.html',
  styleUrls: ['./train-schedule-results.component.scss']
})
export class TrainScheduleResultsComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  scheduleResults: TrainSchedule[] = [];
  currentSelection: string;
  refreshDateTimeStamp: string;
  inputType = InputType.chip;
  inputTypes = InputType;

  @Input()
  set parsedTrainStationList(data) {
    this.options = data.sort();
  }

  @Input() directions: { [key: string]: string };

  constructor(private trainScheduleService: TrainScheduleService,
              private loaderService: LoadingSpinnerService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  getSchedule(showSpinner: boolean = false) {
    window.scroll(0, 0);
    if (showSpinner) {
      this.loaderService.show();
    }
    this.trainScheduleService.getTrainSchedule()
      .subscribe(
        (data: TrainSchedule[]) => {
          this.refreshDateTimeStamp = new Date().toLocaleString('en-US');
          this.scheduleResults = this.trainScheduleService.filterSchedule(
            this.directions.primary,
            this.directions.secondary,
            data,
            this.currentSelection);

          this.loaderService.hide();
          this.scrollToResults();
        },
        error => {
          console.error(error);
          this.loaderService.hide();
        });
  }

  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onSelectionChanged(data) {
    this.getSchedule(true);
  }

  onToggleChange(data) {
    this.inputType = data.value;
  }

  onTrainSelection(train: string) {
    this.currentSelection = train;
    this.getSchedule(true);
  }

  private scrollToResults() {
    setTimeout(() => {
      const resultsList = document.getElementById('results');
      resultsList.scrollIntoView({behavior: 'smooth'});
    });
  }
}
