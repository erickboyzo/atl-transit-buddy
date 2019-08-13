import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'lodash';

import { TrainSchedule } from './models/train-schedule';

@Injectable()
export class TrainScheduleService {

  constructor(private http: HttpClient) {
  }

  getTrainSchedule() {
    return this.http.get('/.netlify/functions/realTimeTrain');
  }

  filterSchedule(primaryDirection:string,
                 secondaryDirection:string,
                 results:TrainSchedule[],
                 station:string): TrainSchedule[] {
    return filter(results, train => (train.DIRECTION === primaryDirection || train.DIRECTION === secondaryDirection) && train.STATION === station);
  }

}
