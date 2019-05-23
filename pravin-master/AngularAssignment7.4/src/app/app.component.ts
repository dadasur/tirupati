
   
import { Component } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
export interface PeriodicElement {
  name: string;
  Numberofpages: number;
  prise: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'c', Numberofpages: 10079, prise: 500},
  { name: 'c++', Numberofpages: 40026, prise: 600},
  {name: 'DataStructure', Numberofpages: 6941, prise: 700},
  {name: 'java', Numberofpages: 90122, prise: 800},
  {name: 'DataBase', Numberofpages: 10811, prise: 900},
 
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{

  displayedColumns: string[] = ['name', 'Numberofpages', 'prise'];
  dataSource = ELEMENT_DATA;
}