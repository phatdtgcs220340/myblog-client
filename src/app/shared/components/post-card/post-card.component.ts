import { Component, Input } from '@angular/core';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { PartialPost } from '../../models/interfaces/responses.interface';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [ImageCarouselComponent],
  templateUrl: './post-card.component.html'
})
export class PostCardComponent {
  @Input() form : PartialPost = {
    id: 0,
    title: '',
    tags: [],
    dateAudit: '',
    images: [],
    content: ''
  }
}
