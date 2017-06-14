import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdToolbarModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdRadioModule,
        MdInputModule,
        MdGridListModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GeneralService } from './services/general.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClockSuperComponent } from './clock-super/clock-super.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { TimesheetComponent } from './timesheet/timesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClockSuperComponent,
    FooterComponent,
    SearchComponent,
    SearchfilterPipe,
    TimesheetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    MdRadioModule,
    MdInputModule,
    MdGridListModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
