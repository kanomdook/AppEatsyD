import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { IntroModel } from "./intro.model";


@Injectable()
export class IntroService {
    constructor(public http: Http) {

    }

    getData(greetingID): Promise<IntroModel> {
        return this.http.get('https://eatsyd.herokuapp.com/api/greetings/' + greetingID)
            .toPromise()
            .then(response => response.json() as IntroModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}