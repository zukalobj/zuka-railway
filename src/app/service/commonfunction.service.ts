import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionService {

  constructor(http:HttpClient) { }

  getInfo(){
    console.log("data")
  }
}


