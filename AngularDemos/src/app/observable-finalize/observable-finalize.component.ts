import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-observable-finalize',
  templateUrl: './observable-finalize.component.html',
  styleUrls: ['./observable-finalize.component.css']
})
export class ObservableFinalizeComponent implements OnInit {

  observable1Processing: boolean = false;
  observable1Error: any;

  observable2Processing: boolean = false;
  observable2Error: any;

  constructor() { }

  ngOnInit() {
  }

  getObservableWithError(): Observable<string> {
    return throwError("Something bad happened!");
  }

  useObservableWithComplete(): void {
    this.observable1Processing = true;
    this.getObservableWithError()
      .subscribe(
          (value: string) => {}, 
          (error: any) => { this.observable1Error = error; }, 
          () => { this.observable1Processing = false;});
  }

  useObservableWithFinalize(): void {
    this.observable2Processing = true;
    this.getObservableWithError()
      .pipe(finalize(() => { this.observable2Processing = false; }))
      .subscribe(
          (value: string) => {}, 
          (error: any) => { this.observable2Error = error; });
  }
}
