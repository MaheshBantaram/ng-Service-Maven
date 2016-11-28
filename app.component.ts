import { Component } from '@angular/core';
import { CountryService }          from './country.service';
import { Country }           from './Country';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: `
        Countries
		 <ul>
			<li *ngFor="let country of countries | async">
          {{country.id}}.{{country.name}}.
      </li>
		</ul>
        `,
})
export class AppComponent{ 

countries: Observable<any>;

constructor(private commentService: CountryService){
}
    ngOnInit(): void {
       this.countries = this.commentService.getCountry();           
    }


}