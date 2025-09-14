import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonfunctionService } from '../service/commonfunction.service';
import { ApiService } from '../service/api.service';
import{Departure}from '../models/departure'
import{Station}from '../models/station'
import { Train} from '../models/train';
import { M } from "../../../node_modules/@angular/material/form-field.d-CMA_QQ0R";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
   images = [
      { src: 'https://gff.ge/under21/wp-content/uploads/2022/10/Tbilisi-1.jpg', alt: 'თბილისი - ბათუმი', label: 'თბილისი ბათუმი' },
      { src: 'https://visitajara.com/storage/images/KS4zXRHqxH30MMh2mnwK8f4wIhgxyeDpYOLpmXnN.jpg', alt: 'ბათუმი - თბილისი', label: 'თბილისი ფოთი' },
      { src: 'https://static01.nyt.com/images/2018/06/17/travel/17hours1/merlin_138493119_dc17f17f-96a2-4487-a9ea-214914926374-superJumbo.jpg', alt: 'ბათუმი - თბილისი', label: 'ბათუმი თბილისი' },
      { src: 'https://cdn.georgiantravelguide.com/storage/thumbnails/dji-0407-2.jpg', alt: 'ფოთი - თბილისი', label: 'ფოთი თბილისი' }
    ];  
  
  currentIndex = 0;
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

prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length -1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.images.length -1) ? 0 : this.currentIndex + 1;
  }

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
