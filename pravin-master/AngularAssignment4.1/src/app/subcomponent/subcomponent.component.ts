
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Add input decorator as it will receve the data from parent
  
  @Input() public parentData;
  @Output() public MyEvent = new EventEmitter();
  public flage=true;
  public SendEvent()
  {
    // Send the event to parent
    
    this.MyEvent.emit('Hello parent');
  }
  constructor() {

    
   }

  ngOnInit() {
  }

}
