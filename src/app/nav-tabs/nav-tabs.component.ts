import {Component, OnInit} from '@angular/core';
import {TrainScheduleService} from '../train-schedule.service';
import {filter, uniqBy, map} from 'lodash';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  northSouthBound: any[] = [];
  eastWestBound: any[] = [];
  northSouth = null;
  eastWest = null;

  constructor(private trainScheduleService: TrainScheduleService) {
  }

  ngOnInit() {
    this.trainScheduleService.getTrainSchedule().subscribe(
      data => {
        console.log(data);
        this.northSouthBound = map(uniqBy(filter(data, (person: any) => person.DIRECTION === 'S' || person.DIRECTION === 'N'), 'STATION'), 'STATION');
        this.eastWestBound = map(uniqBy(filter(data, (person: any) => person.DIRECTION === 'E' || person.DIRECTION === 'W'), 'STATION'), 'STATION');
        this.northSouth = {primary: 'N', secondary: 'S'};
        this.eastWest = {primary: 'E', secondary: 'W'};

      },
      error => {
        console.log(error);
      });
  }

}
