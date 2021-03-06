import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Coffee } from '../logic/coffee';
import { GeoLocationService } from '../geo-location.service'
import { TastingRating } from '../logic/TastingRating';



@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  
  coffee: Coffee;
  types = ["Expresso","Ristreto","Americao",
          "Capiccino","Frappe"];
  
  constructor(
    private route: ActivatedRoute,
    private geoLocation: GeoLocationService
  ) { }

  routingSubscription: any;

  tastingRatingChanges(checked: boolean){
    if(checked){
      this.coffee.tastingRating = new TastingRating();
    }
    else{
      this.coffee.tastingRating = null;
    }
  }


  ngOnInit() {

    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params =>{
      console.log(params["id"])
    });

    this.geoLocation.requestLocation(location => {
      if(location){
        this.coffee.location.latitude=location.latitude;
        this.coffee.location.longitude=location.longitude;
      }
      
    
    })
  }

  ngOnDestroy(){
    this.routingSubscription.unsubscribe();
  }

  cancel(){

  }

  save(){

  }

}
