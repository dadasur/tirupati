import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
Batches =  [
  {name: 'swift', Fees:9000},
  {name: 'Alto', Fees:7500},
  {name: '800', Fees:4000},
  {name: 'wagnar', Fees:4000},
  {name: 'Ritz', Fees:6000}
];

selectedValue:string;
startDate = new Date(1990, 0, 1);
}
