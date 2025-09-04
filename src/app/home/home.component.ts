import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonfunctionService } from '../service/commonfunction.service';
import { ApiService } from '../service/api.service';
import{Departure}from '../models/departure'
import{Station}from '../models/station'
import { Train} from '../models/train';
import { M } from "../../../node_modules/@angular/material/form-field.d-CMA_QQ0R";
import { RouterLink } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  fromDate: string = '';
  toDate: string = '';
  selectedDate: any;
  constructor(
    private easy:CommonfunctionService,
    private http :ApiService
  ) {}
  ngOnInit() {
  this.getStationsData();
}
from!:string;
to!:string;

getTrains(){
  this.http.getData(`https://railway.stepprojects.ge/api/getdeparture?from=${this.from}&to=${this.to}&date=${this.dateSelect}`)
  .subscribe((resp : any)=>{
    console.log(resp)
    this.trainArr=resp
    console.log(this.trainArr)
  })
}

dateSelect:any;
dateSelection(){
  console.log("date selected by user is"+this.dateSelect);
  this.getTrains()
}


  

  // station
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
    
    trainArr:Departure[]=[]



 


 }
