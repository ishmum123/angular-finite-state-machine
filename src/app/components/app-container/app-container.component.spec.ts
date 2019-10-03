import { TestBed, async } from '@angular/core/testing';
import { AppContainerComponent } from './app-container.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppContainerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fsm'`, () => {
    const fixture = TestBed.createComponent(AppContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('fsm');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppContainerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('fsm app is running!');
  });
});
