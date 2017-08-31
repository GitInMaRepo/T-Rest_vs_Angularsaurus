import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { stegoservice } from './services/stegoservice'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [stegoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
