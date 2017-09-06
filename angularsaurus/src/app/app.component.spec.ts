import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DinoDetailComponent } from './dino_detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Stegoservice } from './services/stegoservice';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DinoDetailComponent
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers: [Stegoservice],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'The Dino List'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('The Dino List');
  }));
});
