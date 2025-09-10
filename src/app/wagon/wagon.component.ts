import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Train } from '../models/train';
import { Vagon } from '../models/vagon';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { CommonfunctionService } from '../service/commonfunction.service';
import { Seat } from '../models/seat';

@Component({
  selector: 'app-wagon',
  imports: [CommonModule],
  templateUrl: './wagon.component.html',
  styleUrl: './wagon.component.scss'
})
export class WagonComponent {
selectSeat(_t64: Seat) {
throw new Error('Method not implemented.');
}
  easy: any;
  train: any; 
  seats: Seat[] = [];  
  showSeats: boolean = false;
  
  
   constructor(private router: Router,
    private http:HttpClient
   ) {}

   getData(url:string){}
  //  ngOninit(){
  //    this.getTrainInfo();
  //  } ვერ გამოვსახე და ხელით შევავსე Json
   

    //  getTrainInfo(){
    //      this.easy.getInfo()
    //      this.http.get("https://railway.stepprojects.ge/api/trains")
    //      .subscribe((resp : any)=>{
    //       console.log(resp)
    //       this.trainArr=resp
    //       console.log(this.trainArr)
    //      });
  selectTrain(train: any) {
    this.train = train;

    this.seats = [
      { seatId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', number: '1A', price: 25, isOccupied: false, vagonId: 1 },
      { seatId: '3fa85f64-5717-4562-b3fc-2c963f66afa7', number: '2B', price: 25, isOccupied: true, vagonId: 1 },
      { seatId: '3fa85f64-5717-4562-b3fc-2c963f66afa8', number: '3C', price: 25, isOccupied: false, vagonId: 1 },
    ];
    this.showSeats = true;
         }
  closeSeats() {
    this.showSeats = false;
  }
       








  backPage(){
    this.router.navigate(['/trips'])
  }
  trainArr:Train[]=[]

}
