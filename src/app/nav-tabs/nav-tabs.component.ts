import { Component, OnInit } from '@angular/core';

import { TrainScheduleService } from '../train-schedule-results/train-schedule.service';
import { LoadingSpinnerService } from '../loading-spinner/loading-spinner.service';
import { northSouth, westEast } from './nav-tabs.constants';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  northSouthBound: string[] = northSouth;
  eastWestBound: string[] = westEast;
  northSouth: { [key: string]: string } = {primary: 'N', secondary: 'S'};
  eastWest: { [key: string]: string } = {primary: 'E', secondary: 'W'};
  serviceFailed = false;

  constructor(private trainScheduleService: TrainScheduleService,
              private loaderService: LoadingSpinnerService) {
  }

  ngOnInit() {
    this.loaderService.show();
    this.trainScheduleService.getTrainSchedule().subscribe(
      data => {
        this.loaderService.hide();
        this.serviceFailed = false;
      },
      error => {
        this.loaderService.hide();
        this.serviceFailed = true;
      });
  }

}
