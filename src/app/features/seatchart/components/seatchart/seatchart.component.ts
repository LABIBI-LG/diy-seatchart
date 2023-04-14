import { Component, OnInit } from '@angular/core';
interface SeatData {
  seatId: string;
  isActive: boolean;
}
@Component({
  selector: 'app-seatchart',
  templateUrl: './seatchart.component.html',
  styleUrls: ['./seatchart.component.scss']
})
export class SeatchartComponent implements OnInit {

  constructor() { }
  data: any = {
    map: {
      rows: 5,
      columns: 10,
    }
  }
  columns = Array(this.data.map.columns).fill({});
  rows:string[] = [];

  seatArray:string[] = [];

  ngOnInit(): void {
    for (let i: number = 0; i < this.data.map.rows; i++) {
      this.rows.push(String.fromCharCode(65 + i));
    }
  }

  tt($event:SeatData):void{
    if($event.isActive){
      this.seatArray.push($event.seatId);
    }else{
      this.seatArray = this.seatArray.filter((item)=> item!== $event.seatId );
    }
  }
}
