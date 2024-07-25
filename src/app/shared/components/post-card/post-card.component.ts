import { AfterViewInit, Component, Input } from '@angular/core';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { PartialPost } from '../../models/interfaces/responses.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [ImageCarouselComponent, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements AfterViewInit {
  @Input() form : PartialPost = {
    id: 0,
    title: '',
    type: '',
    dateAudit: '',
    images: []
  }
  link : string = ""

  ngAfterViewInit(): void {
    this.link = `/post/${this.form.id}`
  }
}
