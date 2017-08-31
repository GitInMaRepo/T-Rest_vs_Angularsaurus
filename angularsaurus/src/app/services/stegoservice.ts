import { Injectable } from '@angular/core';
import { Optional } from '@angular/core';

@Injectable()
export class stegoservice {
    constructor(@Optional() private dinos: string[]){
        this.dinos = new Array("T-Rex", "Triceratops", "Procompsognatus");
    }

    getDinos() : string[] {
        return this.dinos
    }
}