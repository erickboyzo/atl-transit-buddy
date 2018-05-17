import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LoadingSpinnerService} from './loading-spinner/loading-spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showLoadingSpinner = true;
  private subscription: Subscription;

  constructor(private loaderService: LoadingSpinnerService) {
  }

  ngOnInit() {
    this.subscription = this.loaderService.loadingSpinnerState
      .subscribe((state: boolean) => {
        this.showLoadingSpinner = state;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
