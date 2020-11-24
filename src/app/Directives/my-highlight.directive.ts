import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

}
