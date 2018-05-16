import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter, uniqBy, map} from 'lodash';


@Injectable()
export class TrainScheduleService {

  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=e1eccb32-bdd5-4c5a-9044-d353e982f818';

  constructor(private http: HttpClient) { }


  getTrainSchedule() {
    return this.http.get(this.url);
  }

  filterSchedule(primaryDirection, secondaryDirection, results, station) {
    return (filter(results, (person: any) => (person.DIRECTION === primaryDirection || person.DIRECTION === secondaryDirection) && person.STATION === station));
  }

}
