import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTry]'
})
export class TryDirective {

  constructor(private el:ElementRef ) {
    el.nativeElement.style.color="blue"
   }

}
