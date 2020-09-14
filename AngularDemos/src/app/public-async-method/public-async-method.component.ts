import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-public-async-method',
  templateUrl: './public-async-method.component.html',
  styleUrls: ['./public-async-method.component.css']
})
export class PublicAsyncMethodComponent implements OnInit {

  public codes: string[];

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() {
    this.codes = [];
  }

  public async saveAll(): Promise<void> {
    this.codes.push(await this._widgetService.getCode().toPromise());
    this.codes.push(await this._widgetService.getCode().toPromise());
    this.codes.push(await this._widgetService.getCode().toPromise());
  }

}
