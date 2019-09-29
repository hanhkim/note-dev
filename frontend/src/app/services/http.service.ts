import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    base_url: string = 'http://localhost:3000';
    constructor(
        private http: HttpClient
    ) { }

    get(url: string): Observable<any> {
        return this.http.get( `${this.base_url}/${url}`);
    }

    getParams(url: string, params: any): Observable<any> {
        // const options = {
        //     headers: new HttpHeaders({
        //         "Content-Type": "application/json"
        //     }),
        //     body: {
        //         idGroup: params
        //     }
        // }
        return this.http.get(`${this.base_url}/${url}/${params}`);
    }

    post(url: string, params: any): Observable<any>  {
        return this.http.post( `${this.base_url}/${url}`, {name: params});
    }

    put(url, params: any) {
        return this.http.put(`${this.base_url}/${url}`, params)
    }

    delete(url, param: any) {
        const options = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            }),
            body: {
                id: param
            }
        }
        return this.http.delete (`${this.base_url}/${url}`, options);
    }
}
