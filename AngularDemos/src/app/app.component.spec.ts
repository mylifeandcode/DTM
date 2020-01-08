import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularDemos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AngularDemos');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('DTM Angular Demos');
  });

  it('should include a link to GitHub', () => {
    //This test is just as a POC to show Quven how to get the attribute of an anchor tag in a unit test
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const githubLink = fixture.debugElement.nativeElement.querySelector('.githubLink');
    console.log("githubLink: ", githubLink);
    console.log("attributes: ", githubLink.attributes);
    console.log("href: ", githubLink.attributes["href"]);
  });
});
