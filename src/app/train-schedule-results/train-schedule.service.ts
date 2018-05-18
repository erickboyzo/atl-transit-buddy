import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter} from 'lodash';
import {API_KEY} from '../app-constants';
import {TrainSchedule} from './model/train-schedule';


@Injectable()
export class TrainScheduleService {

  private proxyurl = 'https://cors-anywhere.herokuapp.com/';
  private url = `http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=${API_KEY}`;

  constructor(private http: HttpClient) {
  }


  getTrainSchedule() {
    return this.http.get(this.proxyurl + this.url);
    // return this.http.get(this.url);
  }

  filterSchedule(primaryDirection, secondaryDirection, results, station): TrainSchedule[] {
    return (filter(results, (train: TrainSchedule) => {
      return (train.DIRECTION === primaryDirection || train.DIRECTION === secondaryDirection) && train.STATION === station;
    }));
  }

}
