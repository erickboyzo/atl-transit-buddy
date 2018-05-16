import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule-result-card',
  templateUrl: './schedule-result-card.component.html',
  styleUrls: ['./schedule-result-card.component.scss']
})
export class ScheduleResultCardComponent implements OnInit {
  direction = {
    'N': 'fa-arrow-up',
    'S': 'fa-arrow-down',
    'W': 'fa-arrow-left',
    'E': 'fa-arrow-right',
  };
  constructor() { }

  @Input() schedule: any;
  @Input() firstArrival: boolean;
  @Input() refreshDate: string;

  ngOnInit() {
  }

}
