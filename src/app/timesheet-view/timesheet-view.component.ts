import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.css'],
})
export class TimesheetViewComponent implements OnInit {

  constructor(private countries: CountriesService) {}

  public title:string = 'This is the timesheet view page';
  public countryObj: any;
  public country: any;

  private searchUser: string;
  private errorMessage: string;

  ngOnInit() {
    this.getCountyInfo();
    this.searchUser = '';
    this.country = [];
  }

  getCountyInfo() {
    this.countries.getCountryDetails().subscribe(
      res  => this.countryObj = res[0],
      error =>  this.errorMessage = <any>error
    );
  }

  getCountry(value:string) {

    this.countries.getCountry(value).subscribe(
      res => this.country = res,
      error =>  this.errorMessage = <any>error
    );
  }
}

