import {Component, OnInit} from '@angular/core';
import {TrainScheduleService} from '../train-schedule-results/train-schedule.service';
import {filter, uniqBy, map} from 'lodash';
import {LoadingSpinnerService} from '../loading-spinner/loading-spinner.service';
import {TrainSchedule} from '../train-schedule-results/model/train-schedule';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  northSouthBound: string[] = [];
  eastWestBound: string[] = [];
  northSouth = null;
  eastWest = null;
  serviceFailed = false;

  constructor(private trainScheduleService: TrainScheduleService, private loaderService: LoadingSpinnerService) {
  }

  ngOnInit() {
    this.loaderService.show();
    this.trainScheduleService.getTrainSchedule().subscribe(
      data => {
        this.northSouthBound = map(uniqBy(filter(data, (train: TrainSchedule) => train.DIRECTION === 'S' || train.DIRECTION === 'N'), 'STATION'), 'STATION');
        this.eastWestBound = map(uniqBy(filter(data, (train: TrainSchedule) => train.DIRECTION === 'E' || train.DIRECTION === 'W'), 'STATION'), 'STATION');
        this.northSouth = {primary: 'N', secondary: 'S'};
        this.eastWest = {primary: 'E', secondary: 'W'};
        this.loaderService.hide();
        this.serviceFailed = false;
      },
      error => {
        this.loaderService.hide();
        this.serviceFailed = true;
      });
  }

}
