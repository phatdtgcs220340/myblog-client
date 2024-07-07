import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent implements OnInit {
  imagesSQ : Array<number> = [1,1,1,1]
  index : number = 0
  ngOnInit(): void {
  }

  scrollLeft() : void {

  }
  scrollRight() : void {
  }
}
