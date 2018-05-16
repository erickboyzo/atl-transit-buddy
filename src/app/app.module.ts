import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';


import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule, MatStepperModule, MatTabsModule, MatAutocompleteModule, MatMenuModule
} from '@angular/material';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { FooterComponent } from './footer/footer.component';
import { TrainScheduleResultsComponent } from './train-schedule-results/train-schedule-results.component';
import { ScheduleResultCardComponent } from './train-schedule-results/schedule-result-card/schedule-result-card.component';
import {TrainScheduleService} from './train-schedule.service';
import { NoResultsComponent } from './train-schedule-results/no-results/no-results.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTabsComponent,
    FooterComponent,
    TrainScheduleResultsComponent,
    ScheduleResultCardComponent,
    NoResultsComponent
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
  ],
  providers: [TrainScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
