import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { Train } from '../models/train';
import { Vagon } from '../models/vagon';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { CommonfunctionService } from '../service/commonfunction.service';
import { Seat } from '../models/seat';

@Component({
  selector: 'app-wagon',
  imports: [CommonModule, RouterModule],
  templateUrl: './wagon.component.html',
  styleUrl: './wagon.component.scss',
})
export class WagonComponent {
  seatPrice!: number;
  train: any;
  seats: Seat[] = [];
  showSeats: boolean = false;
  selecSeats: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private rout: ActivatedRoute
  ) {
    this.rout.params.subscribe((id: any) => {
      console.log(id);

      this.vagonId = id['id'];
      console.log(this.vagonId);
    });
    
    
  }

  vagonId!: number;
  getData(url: string) {}
  ngOnInit() {
    this.getTrainInfo();
  
  }
  selected = 'notSeletced';
  selectSeat(seatId: string) {
    const existingSeatIndex = this.selecSeats.findIndex(seat => seat.seatId === seatId);
    if (existingSeatIndex !== -1) {
      this.selecSeats.splice(existingSeatIndex, 1);
    } else {
 
      this.selecSeats.push({
        seatId: seatId,
        name: '',
        surname: '',
        idNumber: '',
        status: '',
        payoutCompleted: true,
      });
    }

    localStorage.setItem('selectedSeats', JSON.stringify(this.selecSeats))
  }
    isSeatSelected(seatId: string): boolean {
    return this.selecSeats.some(seat => seat.seatId === seatId);
  }
  getTrainInfo() {
    this.http
      .get(`https://railway.stepprojects.ge/api/getvagon/${this.vagonId}`)
      .subscribe((resp: any) => {
        console.log(resp);
        this.trainArr = resp;
        this.seats = resp[0].seats;
        console.log(this.seats);
        this.seatPrice = this.seats[0].price;
      });
  }


  backPage() {
    this.router.navigate(['/trips']);
  }
  trainArr: Train[] = [];
}
function generateSeatRows() {
  throw new Error('Function not implemented.');
}

