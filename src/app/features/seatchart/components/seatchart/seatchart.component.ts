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
  response: any = {
    "data": {
      "width": 5,
      "list": [
        {
          "rows": "A",
          "seat": [
            {
              "id": "1",
              "status": "none",
              "type": "default"
            },
            {
              "id": "2",
              "status": "free",
              "type": "default"
            },
            {
              "id": "3",
              "status": "free",
              "type": "default"
            },
            {
              "id": "4",
              "status": "free",
              "type": "default"
            },
            {
              "id": "5",
              "status": "none",
              "type": "default"
            }
          ]
        },
        {
          "rows": "B",
          "seat": [
            {
              "id": "1",
              "status": "free",
              "type": "default"
            },
            {
              "id": "2",
              "status": "free",
              "type": "default"
            },
            {
              "id": "3",
              "status": "free",
              "type": "default"
            },
            {
              "id": "4",
              "status": "free",
              "type": "default"
            },
            {
              "id": "5",
              "status": "free",
              "type": "default"
            }
          ]
        },
        {
          "rows": "none",
        },
        {
          "rows": "C",
          "seat": [
            {
              "id": "1",
              "status": "free",
              "type": "default"
            },
            {
              "id": "2",
              "status": "sold",
              "type": "default"
            },
            {
              "id": "3",
              "status": "sold",
              "type": "default"
            },
            {
              "id": "4",
              "status": "free",
              "type": "default"
            },
            {
              "id": "5",
              "status": "free",
              "type": "handicapped"
            }
          ]
        },
        {
          "rows": "D",
          "seat": [
            {
              "id": "1",
              "status": "free",
              "type": "default"
            },
            {
              "id": "2",
              "status": "free",
              "type": "default"
            },
            {
              "id": "3",
              "status": "free",
              "type": "default"
            },
            {
              "id": "4",
              "status": "lock",
              "type": "default"
            },
            {
              "id": "5",
              "status": "sold",
              "type": "handicapped"
            }
          ]
        }
      ]
    }
  }
  seatArray: string[] = [];
  width = Array(this.response.data.width).fill(0);
  ngOnInit(): void {

  }

  tt($event: SeatData): void {
    if ($event.isActive) {
      this.seatArray.push($event.seatId);
    } else {
      this.seatArray = this.seatArray.filter((item) => item !== $event.seatId);
    }
  }
}
