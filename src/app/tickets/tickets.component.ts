import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

 
@Component({
  selector: 'app-tickets',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  constructor(private http: ApiService,
    private router: Router,
     private rout: ActivatedRoute
  ) {
   
  }
 
 
 
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
  ticketPrice!:number;
 


  goBack(){
    this.router.navigate(['/trips'])
  }

  ticketPurchase(){
  Swal.fire({
  title: "გადახდა შესრულებულია",
  icon: "success",
  draggable: true
});
    
  }
 
 
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
              this.ticketId = resp.split(":")[1]
              console.log(this.ticketId);
             
    });  

 
 
 
 
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
 
 
  deleteTicketInfo() {
 
   
  if (!confirm('ნამდვილად გსურთ ბილეთის წაშლა?')) return;
  this.http.deleteData(`https://railway.stepprojects.ge/api/tickets/cancel/${this.ticketId}`)
  .subscribe((resp:any) => {
    alert(resp)
    this.router.navigateByUrl('/trips')
  })
 
 
  
 
}
}