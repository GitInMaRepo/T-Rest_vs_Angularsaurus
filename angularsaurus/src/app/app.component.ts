import {Component, OnInit} from '@angular/core';
import {stegoservice} from './services/stegoservice';
import {Dinosaur} from './models/dinosaur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./all_components.css']
})
export class AppComponent implements OnInit {
  title = 'The Dino List';
  dinosFromTRest: Dinosaur[];
  selectedDino: Dinosaur;

  constructor(private dinoService: stegoservice) {
  }
  ngOnInit() {
      this.dinoService.getDinosFromTRest().subscribe(p => this.dinosFromTRest = p);
  }

  onclick(dino: Dinosaur) {
    this.selectedDino = dino;
  }
}
