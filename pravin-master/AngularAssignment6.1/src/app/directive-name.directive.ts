import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';
@Directive({
  selector: '[appDirectiveName]'
})
export class DirectiveNameDirective {

  constructor(private ele:ElementRef) 
  {
    //ele.nativeElement.style.background='yellow'
  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('red');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('black');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }

}
