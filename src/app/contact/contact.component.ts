import { Component } from '@angular/core';
import { CommonfunctionService } from '../service/commonfunction.service';
import { ApiService } from '../service/api.service';
import{Departure}from '../models/departure'
import { CommonModule } from '@angular/common';
import{Station}from '../models/station'
import { Vagon } from '../models/vagon';
import { RouterLinkActive } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { Seat } from '../models/seat';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  selectedClass: string | null = null;

  openPopup(trainClass: string) {
    this.selectedClass = trainClass;
  }

  closePopup() {
    this.selectedClass = null;
  }
}

//   ngOnInit() {
//   // this.getDepartureData();
  
// }
//      getSeatData(){
//       this.easy.getInfo()
//       this.http.getData("https://railway.stepprojects.ge/api/seat/12")
//       .subscribe((resp :any)=>{
//         console.log(resp)
//         this.seatArr=resp
//         console.log(this.seatArr)
//       })
//      }
  // getDepartureData(){
  //   this.easy.getInfo()
  //   this.http.getData("https://railway.stepprojects.ge/api/departures")
  //   .subscribe((resp : any)=>{
  //    console.log(resp)
  //    this.departureArr=resp
  //    console.log(this.departureArr)
  //   })
  //   }

  // departureArr:Departure[]=[]

  // // stations
  //  getStationsData(){
  //   this.easy.getInfo()
  //   this.http.getData("https://railway.stepprojects.ge/api/stations")
  //   .subscribe((resp : any)=>{
  //    console.log(resp)
  //    this.stationArr=resp
  //    console.log(this.stationArr)
  //   })
  //   }
  //   stationArr:Station[]=[]

