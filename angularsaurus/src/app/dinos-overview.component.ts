import {Component, OnInit} from '@angular/core';
import {Stegoservice} from './services/stegoservice';
import {Dinosaur} from './models/dinosaur';

@Component({
  selector: 'app-dinos-overview',
  templateUrl: './dinos-overview.component.html',
  styleUrls: ['./all_components.css']
})
export class DinosOverviewComponent implements OnInit {
  title = 'The Dino List';
  dinosFromTRest: Dinosaur[];
  selectedDino: Dinosaur;

  constructor(private dinoService: Stegoservice) {
  }
  ngOnInit() {
      this.dinoService.getDinosFromTRest().subscribe(p => this.dinosFromTRest = p);
  }

  onclick(dino: Dinosaur) {
    this.selectedDino = dino;
  }
}
