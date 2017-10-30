import { Injectable } from '@angular/core';
import { Http, Headers, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import { Server } from './server';

@Injectable()
export class Auth {

    constructor(public http: Http, public server: Server) {
    }

    AuthHeaders(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    }

    private() {
        let headers = new Headers();
        this.AuthHeaders(headers);
        return this.http.post(this.server.url + 'api/users/me', {}, {
            headers: headers
        }).map(res => res.json());
    }

    login(credentials) {
        return this.http.post(this.server.url + 'api/auth/signin', credentials).map(res => {
            let body = res.json();
            window.localStorage.setItem('token', body.loginToken);
            return body || {};
        });
    }

    fbLogin(facebookData) {
        return this.http.post(this.server.url + 'api/auth/signin', { facebookData: facebookData, facebookLogin: true }).map(res => {
            let body = res.json();
            window.localStorage.setItem('token', body.loginToken);
            return body || {};
        });
    }

    logout() {
        window.localStorage.removeItem('token');
        return true;
    }

    isLogedin() {
        if (window.localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }

}