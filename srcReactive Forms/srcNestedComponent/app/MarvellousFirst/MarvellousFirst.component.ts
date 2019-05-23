// import package for the decorator
import { Component } from '@angular/core'

// Write one decorator
@Component(
    {
        // By using the name of selector we can use this component in other components html file.
          selector: 'app-MarvellousFirst',
          
          // It links our component with the html file
          templateUrl: './MarvellousFirst.component.html' 
    }
)

// Write one class for our component
export class MarvellousFirstComponent
{


}