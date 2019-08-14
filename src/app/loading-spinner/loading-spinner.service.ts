import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class LoadingSpinnerService {
  spinnerSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
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
