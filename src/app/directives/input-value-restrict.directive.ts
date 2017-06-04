import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputValueRestrict]',
})
export class InputValueRestrictDirective {
  @Input() minValue;
  @Input() maxValue;
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}
  @HostListener('keyup', ['$event']) onKeyUp(event) {
    if (this.minValue) {
        const el = <HTMLSelectElement> event.target;
        if (el.value <= this.minValue) {
          el.value = this.minValue;
        }
        if (el.value >= this.maxValue) {
          el.value = this.maxValue;
        }
    }
  }
}
