import {Component, OnInit} from '@angular/core';
import {Dinosaur} from './models/dinosaur';
import {RandomService} from './services/randomservice';

@Component({
    selector: 'app-random-dino',
    templateUrl: './random-dino.component.html',
    styleUrls: ['./all_components.css']
})
export class RandomDinoComponent implements OnInit {
    dino: Dinosaur;
    constructor(private randoService: RandomService) {
    }

    ngOnInit() {
        this.randoService.getARandomDino().subscribe(p => this.dino = p);
    }
}
