import { Injectable }                               from '@angular/core';
import { Headers, Http, RequestOptions, Response }  from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Member }                                   from '../models/member';

@Injectable()
export class MemberService {
    private url = '/m';
    private headers = new Headers({'Content-Type': 'application.'})
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getMembers()  {
      // return Promise.resolve(Users);
      console.log("get member");
      return this.http.get(this.url, this.jwt())
        .toPromise()
        .then(res => {
            console.log(res);
            return res.json().members as Member[]
        })
        .catch(this.handleError);
    }

    getMemberByStunum(stunum: string)  {
      // return Promise.resolve(Users);
      console.log("get member " + stunum);
      return this.http.get(this.url + "/" + stunum, this.jwt())
        .toPromise()
        .then(res => {
            console.log(res);
            return res.json() as Member;
        })
        .catch(this.handleError);
    }

    getMembersByDepartmentCode(code: string) {
        console.log("get members for " + code);
        return this.http.get(this.url + "/dept/" + code, this.jwt())
          .toPromise()
          .then(res => {
              console.log(res);
              return res.json().members as Member[]
          })
          .catch(this.handleError);
    }

    // getUser(id: number): Promise<Member> {
    //     // return this.getUsers()
    //     //     .then(Users => Users.find(User => User.id === id));
    //     const url = `${this.UsersUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(res => res.json().data as Member)
    //         .catch(this.handleError);
    // }

    // update(User: Member): Promise<Member> {
    //     const url = `${this.UsersUrl}/${User.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(User), {headers: this.headers})
    //         .toPromise()
    //         .then(() => User)
    //         .catch(this.handleError);
    // }
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            console.log(currentUser.token)
            return new RequestOptions({ headers: headers });
        }
    }
}
