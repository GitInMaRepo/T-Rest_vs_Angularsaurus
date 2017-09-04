import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DinoDetailComponent } from './dino_detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { stegoservice } from './services/stegoservice';

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
      providers: [stegoservice],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('The Dino List');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to The Dino List!');
  }));
});
