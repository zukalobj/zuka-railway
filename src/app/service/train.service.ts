import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../models/train';
import { Vagon } from '../models/vagon';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private baseUrl ='https://railway.stepprojects.ge/api/trains'



  constructor(private http:HttpClient) { }


    getVagById(trainId:number){
      return this.http.get(`${this.baseUrl}getVagById?id=${trainId}`)
      }

     getSeatById(vagonId:number){
    return this.http.get(`${this.baseUrl}getseatById?id=${vagonId}`)
    }

    
}
