import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private http: HttpClient
    ) { }

    login(username: string, password: string):Observable<any> {
        console.log(username)
        return this.http.post('http://localhost:3000/login', { username: username, password: password});
    } 
}
