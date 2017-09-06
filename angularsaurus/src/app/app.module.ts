import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Stegoservice } from './services/stegoservice';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DinoDetailComponent } from './dino_detail.component';
import { SaveNewDinoComponent } from './save-new-dino.component';

@NgModule({
  declarations: [
    AppComponent,
    DinoDetailComponent,
    SaveNewDinoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Stegoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
