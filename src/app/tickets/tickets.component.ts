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
  }

   

  confirmTicketInfo(){
     if(!confirm('გსურთ დაადასტუროთ ბილეთი?'))return;
    this.http.getData(`https://railway.stepprojects.ge/api/tickets/confirm/${this.ticketId}`)
    .subscribe((resp:any) =>{
      alert(resp)
        Swal.fire({
        title: "თქვენ წარმატებით შეიძინეთ ბილეთი",
        icon: "success",
        draggable: true
});

  }
)
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