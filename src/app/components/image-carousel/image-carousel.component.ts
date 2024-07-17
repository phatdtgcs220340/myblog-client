import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  @Input() images : Array<string> = []

}
