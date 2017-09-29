import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Stegoservice } from './services/stegoservice';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DinoDetailComponent } from './dino-detail.component';
import { SaveNewDinoComponent } from './save-new-dino.component';
import { DinosOverviewComponent } from './dinos-overview.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dinos', component: DinosOverviewComponent },
  { path: 'new-dino', component: SaveNewDinoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DinoDetailComponent,
    SaveNewDinoComponent,
    DinosOverviewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [Stegoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
