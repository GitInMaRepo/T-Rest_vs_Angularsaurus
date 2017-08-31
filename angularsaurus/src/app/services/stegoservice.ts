import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Dinosaur } from 'app/models/dinosaur';

@Injectable()
export class stegoservice {

    constructor(private http: Http) {
    }

    getDinos() :Dinosaur[] {
        var arr: Dinosaur[] = [
            { "name": "T-Rex" },
            { "name": "Triceratops" },
            { "name": "Procompsognatus" }
        ];
        return arr;
    }

    getDinosFromTRest() :Observable<Dinosaur[]>{
        return this.http.get('http://localhost:8088/knowndinosaurs')
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}