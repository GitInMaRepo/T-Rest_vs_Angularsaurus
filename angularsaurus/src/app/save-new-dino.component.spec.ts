import { TestBed, async } from '@angular/core/testing';
import { SaveNewDinoComponent } from './save-new-dino.component';

describe('SaveNewDinoComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
            SaveNewDinoComponent
        ],
      }).compileComponents();
    }));

    it('should create the SaveNewDinoComponent', async(() => {
        const fixture = TestBed.createComponent(SaveNewDinoComponent);
        const app = fixture.debugElement.componentInstance;
    }));
});
