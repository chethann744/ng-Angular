import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThbsBackground]'
})
export class ThbsBackgroundDirective {

  constructor(private myelem:ElementRef) {
    this.myelem.nativeElement.style.backgroundColor='yellow';
  this.myelem.nativeElement.innerHTML = "dadsad";
 }
 @HostListener('mouseenter')
 onmouseenter(){
   this.myelem.nativeElement.style.fontSize='30px'
 }
 @HostListener('mouseleave')
 onmouseleave(){
   this.myelem.nativeElement.style.fontSize='15px'
 }
 @HostListener('dblclick')
 ondblclick(){
   this.myelem.nativeElement.style.color='red'
 }
 @HostListener('click')
 onclick(){
   this.myelem.nativeElement.style.color='yellow'
 }
}
