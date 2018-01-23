import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[highlighter]' })
export class HighlighterDirective {
  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
