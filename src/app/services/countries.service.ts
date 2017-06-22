import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

// All the RxJS stuff we need
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CountriesService {

  constructor(private _http: Http) { }

  // public getCountryDetails() {
  //   let _url: string = 'https://restcountries.eu/rest/v2/name/india?fullText=true';
  //   return this._http.get( _url );
  // }

  getCountry(value: string): Observable<any> {
    let _url: string = `https://restcountries.eu/rest/v2/name/${value}?fullText=true`;
    return this._http.get(_url)
        .map(this.parseData)
        .catch(this.handleError);
  }

  // Method retrieve all the posts
  getCountryDetails(): Observable<any> {
      let _url: string = 'https://restcountries.eu/rest/v2/name/india?fullText=true';
      return this._http.get(_url)
          .map(this.parseData)
          .catch(this.handleError);
  }

  // This method parses the data to JSON
  private parseData(res: Response)  {
    return res.json() || [];
  }

  // Displays the error message
  private handleError(error: Response | any) {
      let errorMessage: string;

      errorMessage = error.message ? error.message : error.toString();

      // In real world application, call to log error to remote server
      // logError(error);

      // This returns another Observable for the observer to subscribe to
      return Observable.throw(errorMessage);
  }
}