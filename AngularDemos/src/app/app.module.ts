import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitExampleComponent } from './init-example/init-example.component';
import { ConfigService } from './config/config.service';
import { environment } from 'src/environments/environment.prod';
import { WidgetService } from './widget.service';

@NgModule({
  declarations: [
    AppComponent,
    InitExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WidgetService, 
    ConfigService, 
    {
      provide: APP_INITIALIZER,
      useFactory: (widgetService: WidgetService) =>
        () => widgetService.init(environment.widgetApiRoot),
      deps: [WidgetService], 
      multi: true
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
