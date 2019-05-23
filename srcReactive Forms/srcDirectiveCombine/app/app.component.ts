import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  // Create array named as serverElements
  SubArr = [];

  // Create variable to store Subject name
  SubjectName = '';

  // Create cariable to store practical contents
  SubjectContent = '';

  // Listener for Add subject button
  onAddSubject() 
  {
    // Insert element into array
    this.SubArr.push(
      {
      type: 'subject',
      name: this.SubjectName,
      content: this.SubjectContent
      }
    );
  }

  // Listener for add practical button
  onAddPractical() 
  {
    // Insert element into array
    this.SubArr.push(
      {
      type: 'practical',
      name: this.SubjectName,
      content: this.SubjectContent
      }
    );
  }
}