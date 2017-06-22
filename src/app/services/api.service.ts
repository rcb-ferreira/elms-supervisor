import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

// All the RxJS stuff we need
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


// import { Post } from './post';

@Injectable()
export class ApiService {

    // // Url to API
    // private postUrl = 'https://jsonplaceholder.typicode.com/posts';
 
    // // Injecting the http client into the service
    // constructor(private http: Http) {}
 
    // // Method retrieve all the posts
    // getPosts (): Observable<Post[]> {
    //     return this.http.get(this.postUrl)
    //         .map(this.parseData)
    //         .catch(this.handleError);
    // }
 
    // // This method parses the data to JSON
    // private parseData(res: Response)  {
    //     return res.json() || [];
    // }
 
    // // Displays the error message
    // private handleError(error: Response | any) {
    //     let errorMessage: string;
 
    //     errorMessage = error.message ? error.message : error.toString();
 
    //     // In real world application, call to log error to remote server
    //     // logError(error);
 
    //     // This returns another Observable for the observer to subscribe to
    //     return Observable.throw(errorMessage);
    // }

}