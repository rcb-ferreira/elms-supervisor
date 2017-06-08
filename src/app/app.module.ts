import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule,
        MdIconModule,
        MdListModule,
        MdCardModule,
        MdRadioModule,
        MdInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GeneralService } from './services/general.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClockSuperComponent } from './clock-super/clock-super.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClockSuperComponent,
    FooterComponent,
    SearchComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdRadioModule,
    MdInputModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
