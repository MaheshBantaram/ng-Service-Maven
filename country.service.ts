import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Country }           from './Country';
import {Observable} from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()

@Injectable()

//CountryService exposes the getContacts() method that returns the data
export class CountryService {

 
private countryUrl = 'rest/countryService/getCountries';

    constructor(private http: Http) {

    }

    getCountry(): Observable<any> {
        return this.http.get(this.countryUrl)
            .map(this.extractData)
            .do(data => console.log("get Countries from json: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || {};
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || "500 internal server error");
    }
	 
   
}