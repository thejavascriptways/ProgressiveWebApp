import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback){
      //add code to access web service
    const list =[
      new coffee("Double Expresso","Sunny Cafe", new PlaceLocation(
        "123 Market Street", "San Francisco"
      )),
      new coffee("Caramel Americano","Star Coffee",new PlaceLocation(
        "Gram via 34","Madrid"
      ))
    ];
    callback(list);

  }

  save(coffee, callback){
    //add code to access web service
    callback();
  }

}
