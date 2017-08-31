import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { stegoservice } from './services/stegoservice'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [stegoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
