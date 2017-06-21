import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdRadioModule,
        MdInputModule,
        MdSidenavModule,
        MdButtonModule,
        MdGridListModule,
        MdDatepickerModule, 
        MdNativeDateModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GeneralService } from './services/general.service';

import { MyRoutesRoutingModule }     from './my-routes/my-routes-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClockSuperComponent } from './clock-super/clock-super.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { WorkforceComponent } from './workforce/workforce.component';
import { MainComponent } from './main/main.component';
import { TimesheetBreakdownComponent } from './timesheet-breakdown/timesheet-breakdown.component';
import { TimesheetViewComponent } from './timesheet-view/timesheet-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClockSuperComponent,
    FooterComponent,
    SearchComponent,
    SearchfilterPipe,
    TimesheetComponent,
    WorkforceComponent,
    MainComponent,
    TimesheetBreakdownComponent,
    TimesheetViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    MdRadioModule,
    MdInputModule,
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MyRoutesRoutingModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
