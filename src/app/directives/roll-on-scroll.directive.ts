import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRollOnScroll]'
})
export class RollOnScrollDirective {

  @HostListener('window:scroll', []) onWindowScroll() {
    const rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;

    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'transform',
      rotation
    );
  }

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2) {

    }

}
