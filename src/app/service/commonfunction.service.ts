import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionService {

  constructor() { }

  getInfo(){
    console.log("data")
  }
}


