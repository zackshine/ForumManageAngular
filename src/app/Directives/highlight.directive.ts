import { Directive,ElementRef, HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor:string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
   
 }
 @HostListener("mouseenter") onMouseenter(){
   this.highlight(this.highlightColor || this.defaultColor || 'red');
 }
 @HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}

 private highlight(color:string){
   this.el.nativeElement.style.backgroundColor = color;
 }
}
