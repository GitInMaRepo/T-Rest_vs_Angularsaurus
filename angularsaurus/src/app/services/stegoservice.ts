import { Injectable } from '@angular/core';
import { Optional } from '@angular/core';
import { Dinosaur } from 'app/models/dinosaur';

@Injectable()
export class stegoservice {
    constructor(@Optional() private dinoNames: string[]){
        this.dinoNames = new Array("T-Rex", "Triceratops", "Procompsognatus");
    }

    getDinoNames() : string[] {
        return this.dinoNames
    }

    getDinos() :Dinosaur[] {
        var arr: Dinosaur[] = [
            { "name": "T-Rex" },
            { "name": "Triceratops" },
            { "name": "Procompsognatus" }
        ];
        return arr;
    }
}