import { Component } from '@angular/core';
import { CommonfunctionService } from '../service/commonfunction.service';
import { ApiService } from '../service/api.service';
import{Departure}from '../models/departure'
import { CommonModule } from '@angular/common';
import{Station}from '../models/station'
import { RouterLinkActive } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(
    private easy:CommonfunctionService,
    private http:ApiService
  ){}

  ngOnInit() {
  this.getDepartureData();
  
}
  getDepartureData(){
    this.easy.getInfo()
    this.http.getData("https://railway.stepprojects.ge/api/departures")
    .subscribe((resp : any)=>{
     console.log(resp)
     this.departureArr=resp
     console.log(this.departureArr)
    })
    }

  departureArr:Departure[]=[]

  // stations
   getStationsData(){
    this.easy.getInfo()
    this.http.getData("https://railway.stepprojects.ge/api/stations")
    .subscribe((resp : any)=>{
     console.log(resp)
     this.stationArr=resp
     console.log(this.stationArr)
    })
    }
    stationArr:Station[]=[]

  

  }