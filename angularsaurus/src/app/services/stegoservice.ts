import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Dinosaur } from '../models/dinosaur';

@Injectable()
export class Stegoservice {

    constructor(private http: Http) {
    }

    getDinosFromTRest(): Observable<Dinosaur[]> {
        return this.http.get('http://localhost:8088/knowndinosaurs')
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
