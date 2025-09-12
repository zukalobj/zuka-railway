import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm',
  imports: [],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent {
  
active: number | null = null;
toggle(index: number) {
  if (this.active === index) {
    this.active = null;
  } else {
    this.active = index;
  }
}
}
