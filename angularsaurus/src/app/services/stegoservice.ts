import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
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

    getSingleDinoFromTRest(id: number): Observable<Dinosaur> {
        return this.http.get(`http://localhost:8088/dinosaur/${id}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addNewDinosaur(newDino: Dinosaur) {
        const requestHeaders = new Headers({'Content-Type': 'application/json'});
        const requestOptions = new RequestOptions({headers: requestHeaders});
        const body = JSON.stringify(newDino);
        this.http.post('http://localhost:8088/adddinosaur', body, requestOptions)
        .catch(this.handleError)
        .subscribe();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}
