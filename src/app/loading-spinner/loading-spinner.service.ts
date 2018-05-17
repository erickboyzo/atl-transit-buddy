import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingSpinnerService {


  private spinnerSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  loadingSpinnerState = this.spinnerSubject.asObservable();

  constructor() {
  }

  show() {
    this.spinnerSubject.next(true);
  }

  hide() {
    this.spinnerSubject.next(false);
  }
}
