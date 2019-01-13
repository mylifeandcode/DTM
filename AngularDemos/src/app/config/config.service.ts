import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _config;

  constructor() { }

  init(config: Config): void {
    this._config = config;
  }

}
