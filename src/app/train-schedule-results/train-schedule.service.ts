import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter} from 'lodash';
import {API_KEY} from '../app-constants';


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

  filterSchedule(primaryDirection, secondaryDirection, results, station): any[] {
    return (filter(results, (person: any) => {
      return (person.DIRECTION === primaryDirection || person.DIRECTION === secondaryDirection) && person.STATION === station;
    }));
  }

}
