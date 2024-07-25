import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  @ViewChild('carouselRef', { static: true }) carouselRef! : ElementRef
  @Input() images : Array<string> = []
  offsetX: number = 0;
  initialX!: number;
  isScroll : boolean = false

  onMouseDown(event : MouseEvent) {
    event.preventDefault()
    this.isScroll = !this.isScroll;
    this.initialX = event.x - this.offsetX
  }

  onMouseMove(event : MouseEvent) {
    if (this.isScroll)
      this.offsetX = event.x - this.initialX
  }

  onMouseUp(event : MouseEvent) {
    this.isScroll = false
  }
}
