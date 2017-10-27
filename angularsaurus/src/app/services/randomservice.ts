import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Dinosaur } from '../models/dinosaur';

@Injectable()
export class RandomService {
    constructor(private http: Http) {
    }

    getARandomDino(): Observable<Dinosaur> {
        return this.http.get('http://localhost:8080')
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
