import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  imports: [FormsModule,CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  constructor(private http: ApiService) {}

  ngOnInit() {
    if (localStorage.getItem('selectedSeats')) {
      const selectedSeats = localStorage.getItem('selectedSeats');
      this.seats = selectedSeats ? JSON.parse(selectedSeats) : [];
    }
    this.date = localStorage.getItem('selectedDate') || null;
    this.trainId = localStorage.getItem('selectedTrain') || null;
    console.log(this.seats);
  }

  date!: string | null;
  trainId!: string | null;
  seats: any[] = [];
  email : string = ""
  phoneNumber : string = ""
  purchasedTickets: any[] = []; 
  ticketId!:number;

  postTicket() {
    console.log(this.seats);
    this.http.postDataTypeText('https://railway.stepprojects.ge/api/tickets/register', {
      trainId: this.trainId,
      date: this.date,
      email: this.email,
      phoneNumber: this.phoneNumber,
      people: this.seats,
    }).subscribe((resp: any)=> {
       console.log(resp);
       alert(resp)
      this.purchasedTickets = resp.tickets || this.seats;
       this.seats = [];
      this.email = '';
      this.phoneNumber = '';
       localStorage.removeItem("selectedSeats")
           localStorage.removeItem("selectedDate")
               localStorage.removeItem("selectedTrain")
    }); 

  // deleteTicketInfo() {
  // if (!confirm('ნამდვილად გსურთ ბილეთის წაშლა?')) return;
  // this.http.delete(`https://railway.stepprojects.ge/api/tickets/cancel${ticketId}`).subscribe({
  //   next: () => {
  //     // თუ წარმატებით წაიშალა სერვერზე, ადგილობრივ სიიდან ამოღებ
  //     this.purchasedTickets.splice(index []);
  //     localStorage.setItem('purchasedTickets', JSON.stringify(this.purchasedTickets));
  //     alert('ბილეთი წარმატებით წაიშალა');
  //   },
  //   error: (err) => {
  //     console.error('წაშლის შეცდომა:', err);
  //     alert('ბილეთის წაშლა ვერ მოხერხდა');
  //   }
  // });

    //

    //   {
    //   "trainId": 0,
    //   "date": "2025-09-11T09:48:00.044Z",
    //   "email": "string",
    //   "phoneNumber": "string",
    //   "people": [
    //     {
    //       "seatId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //       "name": "string",
    //       "surname": "string",
    //       "idNumber": "string",
    //       "status": "string",
    //       "payoutCompleted": true
    //     }
    //   ]
    // }
  }
}

