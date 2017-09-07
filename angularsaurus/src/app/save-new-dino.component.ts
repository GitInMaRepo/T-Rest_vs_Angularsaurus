import {Component} from '@angular/core';
import {Stegoservice} from './services/stegoservice';

@Component({
    selector: 'app-save-new-dino',
    templateUrl: './save-new-dino.component.html',
    styleUrls: ['./all_components.css']
  })
 export class SaveNewDinoComponent {
  constructor(private dinoService: Stegoservice) {
  }

  addANewDino(): void {
    this.dinoService.addNewDinosaur();
  }
}
