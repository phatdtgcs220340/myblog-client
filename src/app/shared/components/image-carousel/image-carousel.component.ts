import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  @Input() images : Array<string> = []
  offsetX: number = 0;
  displayImage : number | null = null;

  convertedImage(url : string | undefined) : string | void {
    if (url !== undefined)
      return url.replace("_small", "")
  }
}
