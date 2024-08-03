import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../shared/components/post-card/post-card.component';
import { FullPost } from '../../shared/models/interfaces/responses.interface';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplyCardComponent } from '../../shared/components/reply/reply-card/reply-card.component';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [PostCardComponent, ReplyCardComponent],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent implements OnInit {
  post : FullPost = {
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    totalLikes: 0,
    totalReplies: 0,
    id: 0,
    title: 'What is Lorem Ipsum?',
    type: 'Thanh Huyen',
    dateAudit: '26/02/2022',
    images: [
      "https://butwhytho.net/wp-content/uploads/2023/11/Frieren-Beyond-Journeys-End-Ep-12-But-Why-Tho.jpg",
      "https://butwhytho.net/wp-content/uploads/2023/11/Frieren-Beyond-Journeys-End-Ep-12-But-Why-Tho.jpg",
      "https://butwhytho.net/wp-content/uploads/2023/11/Frieren-Beyond-Journeys-End-Ep-12-But-Why-Tho.jpg",
      "https://butwhytho.net/wp-content/uploads/2023/11/Frieren-Beyond-Journeys-End-Ep-12-But-Why-Tho.jpg"]
  }

  constructor(
    private readonly service: FetchPostsService,
    private readonly routes : ActivatedRoute,
    private readonly router : Router) {}

  ngOnInit(): void {
    // this.routes.paramMap.subscribe(params => {
    //   const id = params.get('id')
    //   if (typeof id == 'string') {
    //     const _id : number = +id
    //     this.service.getFullPost(_id).subscribe({
    //       next : response => this.post = response,
    //       error : e => this.router.navigate(['not-found'])
    //     })
    //   }

    //   else this.router.navigate(['not-found'])
    // });

  }
}
