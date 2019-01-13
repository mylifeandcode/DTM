import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';


@Component({
  selector: 'app-init-example',
  templateUrl: './init-example.component.html',
  styleUrls: ['./init-example.component.css']
})
export class InitExampleComponent implements OnInit {

  constructor(private _widgetSvc: WidgetService) { }

  ngOnInit() {
  }

}
