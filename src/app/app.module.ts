import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CovalentCommonModule, CovalentLayoutModule, CovalentLoadingModule, CovalentMediaModule, CovalentStepsModule} from '@covalent/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule, MatStepperModule, MatTabsModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular modules
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
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
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
