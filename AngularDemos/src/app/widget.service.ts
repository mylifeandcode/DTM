import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private _apiRoot: string;

  init(apiRoot: string): void { 
    this._apiRoot = apiRoot;
    console.log(`Initilizing WidgetService using API root ${this._apiRoot}`);
  }

  getCode(): Observable<string> {
    return of("some code");
  }

}
