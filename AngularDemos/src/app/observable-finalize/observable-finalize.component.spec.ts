import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableFinalizeComponent } from './observable-finalize.component';

describe('ObservableFinalizeComponent', () => {
  let component: ObservableFinalizeComponent;
  let fixture: ComponentFixture<ObservableFinalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableFinalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableFinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
