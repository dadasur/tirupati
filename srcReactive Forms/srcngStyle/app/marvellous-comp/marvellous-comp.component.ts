import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  templateUrl: './marvellous-comp.component.html',
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent
{
  // variable to place random number
  num:number;

  constructor() 
  {
    this.num = Math.random();
  }

  // This method returns the color to ngStyle
  GetColor()
  {
    if(this.num < 0.5)
      return 'red';
    else
      return 'green'
  }

}
