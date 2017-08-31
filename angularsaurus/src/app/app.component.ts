import { Component } from '@angular/core';
import {stegoservice} from './services/stegoservice';
import {Dinosaur} from './models/dinosaur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Dino List';
  dinoNames: string[];
  dinos: Dinosaur[];

  constructor(private dinoService: stegoservice){
      this.dinoNames = dinoService.getDinoNames();
      this.dinos = dinoService.getDinos();
  }
}
