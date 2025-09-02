import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonfunctionService } from '../service/commonfunction.service';
import { ApiService } from '../service/api.service';
import{Departure}from '../models/departure'
import{Station}from '../models/station'
import { train  } from '../models/train';
import { M } from "../../../node_modules/@angular/material/form-field.d-CMA_QQ0R";
// import { MatNativeDateModule } from '@angular/material/core';



@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule,],
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
  this.getDepartureData();
  this.getStationsData();
}


DateSelect:any;
dateSelection(){
  console.log("date selected by user is"+this.DateSelect);
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



 


 }




//   onFromDateChange() {
//     if (this.toDate && this.toDate < this.fromDate) {
//       this.toDate = '';
// }
//   }
// }