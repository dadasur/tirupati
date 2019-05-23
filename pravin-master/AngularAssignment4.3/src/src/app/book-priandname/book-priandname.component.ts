import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
@Component({
  selector: 'app-book-priandname',
  templateUrl: './book-priandname.component.html',
  styleUrls: ['./book-priandname.component.css']
})
export class BookPriandnameComponent implements OnInit {

  public batches = [];

  // Add the instance of service in side constructor
  constructor(private _batchservice: BatchService)
  {

  }

  // call the service method once in ngOnInit method
  ngOnInit() 
  {
    this.batches = this._batchservice.GetBatchDetails();
  }
}
