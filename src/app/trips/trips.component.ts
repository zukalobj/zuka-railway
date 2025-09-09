import { Component, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import { CommonfunctionService } from '../service/commonfunction.service';
import { Station } from '../models/station';
import { Departure } from '../models/departure';
import { FormsModule } from '@angular/forms';
import { Vagon } from '../models/vagon';
import { Seat } from '../models/seat';
import { Train } from '../models/train';

@Component({
  selector: 'app-trips',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.scss'
})
export class TripsComponent {
    fromDate: string = '';
    toDate: string = '';
    selectedDate: any;
    selectedSeat: Seat | null = null;
    showSeat: boolean = false;
    vagons: any;
    seats: any;
    constructor(
      private easy:CommonfunctionService,
      private http :ApiService
    ) {}
    ngOnInit() {
    this.getStationsData();
    this.getTrains();
    this.getTrainInfo();
    
  }
  from!:string;
  to!:string;
  vagonId!:number;
  id!:number;
  trainId!:number
  
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
        
// train
      getTrainInfo(){
      this.easy.getInfo()
      this.http.getData("https://railway.stepprojects.ge/api/trains")
      .subscribe((resp : any)=>{
       console.log(resp)
       this.vagonArr=resp
       console.log(this.vagonArr)
      });

      }

      // vagons
      getVagnInfo(){
      this.easy.getInfo()
      this.http.getData("")
      .subscribe((resp : any)=>{
       console.log(resp)
       this.seatArr=resp
       console.log(this.seatArr)
      });

      }
      





      stationArr:Station[]=[] 
      trainArr:Departure[]=[]
      vagonArr:Vagon[]=[]
      seatArr:Seat[]=[]
  
  
      
   
  
}

  