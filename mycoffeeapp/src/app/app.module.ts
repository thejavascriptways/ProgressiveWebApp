import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//service
import { GeoLocationService } from './geo-location.service';
import { DataService } from './data.service';

//material and animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations" 
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
        MatSliderModule,MatToolbarModule, MatCardModule, MatSlideToggleModule } from "@angular/material";
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';

import {Routes, RouterModule} from "@angular/router"

import { FormsModule } from '@angular/forms';

//routes
const routes: Routes =[
  { path: '', component: ListComponent},
  { path: 'coffee', component: CoffeeComponent},
  { path : 'coffee/:id' , component: CoffeeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule, 
    MatCardModule, 
    MatSlideToggleModule
  ],
  providers: [ 
    GeoLocationService,     DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
