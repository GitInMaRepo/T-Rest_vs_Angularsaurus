import { Component, Input, OnInit } from '@angular/core';
import { Dinosaur } from './models/dinosaur';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {Stegoservice} from './services/stegoservice';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-dino-detail',
    templateUrl: './dino-detail.component.html',
    styleUrls: ['./all_components.css']
})

export class DinoDetailComponent implements OnInit {
    dino: Dinosaur;
    constructor(private dinoService: Stegoservice,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.dinoService.getSingleDinoFromTRest(+params.get('id')))
        .subscribe(dino => this.dino = dino);
    }
}
