import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {
    constructor(public http: Http) {

    }

    signup(user): Promise<any> {
        return this.http.post('https://eatsyd.herokuapp.com/api/auth/signup', user)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}