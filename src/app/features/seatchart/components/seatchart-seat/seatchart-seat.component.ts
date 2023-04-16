import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface SeatData {
  seatId: string;
  isActive: boolean;
}

@Component({
  selector: 'app-seatchart-seat',
  templateUrl: './seatchart-seat.component.html',
  styleUrls: ['./seatchart-seat.component.scss']
})

export class SeatchartSeatComponent implements OnInit {
  constructor() { }
  @Input() seatId: string = '';
  @Input() isActive: boolean = false;
  @Input() status:string = '';
  @Input() type:string = '';
  @Output() activeOut = new EventEmitter<SeatData>();

  ngOnInit(): void {
  }

  active(): void {
    this.isActive = !this.isActive;
    this.activeOut.emit(
      {
        seatId: this.seatId,
        isActive: this.isActive
      }
    );

  }
}
