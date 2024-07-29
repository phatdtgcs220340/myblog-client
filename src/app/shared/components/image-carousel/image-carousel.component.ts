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
}
