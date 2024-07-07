import { Component, Input } from '@angular/core';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [ImageCarouselComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() title : string = ''
}
