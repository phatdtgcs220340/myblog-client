import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  standalone : true,
  selector: '[appHomeScroll]'
})
export class HomeScrollDirective {

  @Output() scrolledToBottom = new EventEmitter<void>()
  constructor() { }

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const target = event.target
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.scrolledToBottom.emit();
    }
  }
}
