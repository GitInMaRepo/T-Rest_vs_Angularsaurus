import { Component, Input } from '@angular/core';
import { Dinosaur } from './models/dinosaur';

@Component({
    selector: 'app-dino-detail',
    templateUrl: './dino-detail.component.html',
    styleUrls: ['./all_components.css']
})

export class DinoDetailComponent {
    @Input() dino: Dinosaur;
}
