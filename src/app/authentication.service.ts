import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    private headers = new Headers({'Content-Type': 'application/json'})

    constructor(
        private http: Http,
        private router: Router) { }

    login(username: string, password: string) {
        console.log(JSON.stringify({ username: username, password: password }));
        return this.http.post('/u/auth', { username: username, password: password }, {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response);
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    getCurrentUser() {
        console.log("get current user");
        return localStorage.getItem('currentUser');
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}
