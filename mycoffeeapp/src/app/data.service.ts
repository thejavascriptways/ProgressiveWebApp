import { Injectable } from '@angular/core';
import { Coffee } from './logic/coffee';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback){
      //add code to access web service
    const list =[
      new Coffee("Double Expresso","Sunny Cafe", new PlaceLocation(
        "123 Market Street", "San Francisco"
      )),
      new Coffee("Caramel Americano","Star Coffee",new PlaceLocation(
        "Gram via 34","Madrid"
      ))
    ];
    callback(list);

  }

  save(Coffee, callback){
    //add code to access web service
    callback();
  }

}
