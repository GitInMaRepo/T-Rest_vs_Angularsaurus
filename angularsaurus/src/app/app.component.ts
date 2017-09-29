import {Component, OnInit} from '@angular/core';
import {Stegoservice} from './services/stegoservice';
import {Dinosaur} from './models/dinosaur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./all_components.css']
})
export class AppComponent {
  title = 'The Dino List';
  dinosFromTRest: Dinosaur[];
  selectedDino: Dinosaur;
}
