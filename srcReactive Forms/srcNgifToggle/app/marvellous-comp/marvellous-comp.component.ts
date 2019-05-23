import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  templateUrl: './marvellous-comp.component.html',
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent
{
  // Flag used to toggle the button
  flag:boolean = true;

  constructor() { }

  // Event handler of the button
  fun()
  {
    // Toggle the state of the flag
    if(this.flag === true)
    {
      this.flag = false;
    }
    else
    {
      this.flag = true;
    }
  }

}
