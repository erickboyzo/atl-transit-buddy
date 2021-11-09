import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { FooterComponent } from './footer/footer.component';
import { TrainScheduleResultsComponent } from './train-schedule-results/train-schedule-results.component';
import { ScheduleResultCardComponent } from './train-schedule-results/schedule-result-card/schedule-result-card.component';
import { TrainScheduleService } from './train-schedule-results/train-schedule.service';
import { NoResultsComponent } from './train-schedule-results/no-results/no-results.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from './loading-spinner/loading-spinner.service';
import { TrainChipSelectorComponent } from './train-schedule-results/train-chip-selector/train-chip-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTabsComponent,
    FooterComponent,
    TrainScheduleResultsComponent,
    ScheduleResultCardComponent,
    NoResultsComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    TrainChipSelectorComponent
  ],
  imports: [
    // angular modules
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // material modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    MatStepperModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
  providers: [TrainScheduleService, LoadingSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
