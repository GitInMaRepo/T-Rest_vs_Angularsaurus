import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Stegoservice} from './services/stegoservice';
import {Dinosaur} from './models/dinosaur';

@Component({
    selector: 'app-save-new-dino',
    templateUrl: './save-new-dino.component.html',
    styleUrls: ['./all_components.css']
  })
 export class SaveNewDinoComponent {
   newDino = new Dinosaur(0, 'name', 'size', 'date');
   submitted = false;

  constructor(private dinoService: Stegoservice,
              private router: Router) {
  }

  onSubmit() {
    this.submitted = true;
    this.addANewDino();
  }

  addANewDino(): void {
    this.dinoService.addNewDinosaur(this.newDino);
  }
}
