import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { WidgetService } from '../widget.service';

import { PublicAsyncMethodComponent } from './public-async-method.component';

class WidgetServiceMock {
  getCode = jasmine.createSpy('getCode').and.returnValue(of('some code'));
}

describe('PublicAsyncMethodComponent', () => {
  let component: PublicAsyncMethodComponent;
  let fixture: ComponentFixture<PublicAsyncMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAsyncMethodComponent ], 
      providers: [ 
        {
          provide: WidgetService, 
          useClass: WidgetServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAsyncMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the WidgetService getCode() method 3 times when we call saveAll()', fakeAsync(() => {

    //ARRANGE
    let widgetService: WidgetService = TestBed.get(WidgetService);

    //ACT
    //This method is async. We can call it here without awaiting it, but use tick() to resolve 
    //all three 
    component.saveAll(); 
    tick();
    
    //ASSERT
    expect(widgetService.getCode).toHaveBeenCalledTimes(3);
    expect(component.codes.length).toBe(3);
    for(let x = 0; x < 3; x++)
      expect(component.codes[x]).toEqual("some code");
  }));
});
