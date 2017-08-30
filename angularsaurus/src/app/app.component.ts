import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Dino App';
  dinos: string[] = new Array("T-Rex", "Triceratops", "Procompsognatus");
}
