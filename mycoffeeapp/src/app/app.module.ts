import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//service
import { GeoLocationService } from './geo-location.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GeoLocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
