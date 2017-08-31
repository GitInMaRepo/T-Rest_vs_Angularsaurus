import { Component } from '@angular/core';
import {stegoservice} from './services/stegoservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Dino List';
  dinos: string[];

  constructor(private dinoService: stegoservice){
      this.dinos = dinoService.getDinos();
  }
}
