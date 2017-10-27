import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Stegoservice } from './services/stegoservice';
import { RandomService } from './services/randomservice';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DinoDetailComponent } from './dino-detail.component';
import { SaveNewDinoComponent } from './save-new-dino.component';
import { RandomDinoComponent } from './random-dino.component';
import { DinosOverviewComponent } from './dinos-overview.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'dinos', component: DinosOverviewComponent },
  { path: 'new-dino', component: SaveNewDinoComponent },
  { path: 'dinos/dinodetails/:id', component: DinoDetailComponent },
  { path: '', component: DinosOverviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DinoDetailComponent,
    SaveNewDinoComponent,
    DinosOverviewComponent,
    RandomDinoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [Stegoservice,
  RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
