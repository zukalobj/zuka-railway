import { Component } from '@angular/core';
import { CommonfunctionService } from '../service/commonfunction.service';
import { ApiService } from '../service/api.service';
import{Departure}from '../models/departure'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(
    private easy:CommonfunctionService,
    private http:ApiService
  ){}
  getDepartureData(){
    this.easy.getInfo()
    this.http.getData("https://railway.stepprojects.ge/api/stations")
    .subscribe((resp : any)=>{
      console.log(resp)
      this.departureArr=resp
      console.log(this.departureArr)
    })
    }
  

  departureArr:Departure[]=[]

  }