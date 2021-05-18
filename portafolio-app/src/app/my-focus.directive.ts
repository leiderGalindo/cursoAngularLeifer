import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyFocus]'
})
export class MyFocusDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private rendered2: Renderer2
  ) { }

  ngOnInit(){
    const element = this.elementRef.nativeElement
    element.focus();
    this.rendered2.setStyle(element, 'border-color', 'red');
  }
}
