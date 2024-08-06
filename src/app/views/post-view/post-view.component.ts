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
    content: '',
    totalLikes: 0,
    totalReplies: 0,
    id: 0,
    title: '',
    type: '',
    dateAudit: '',
    images: []
  }

  constructor(
    private readonly service: FetchPostsService,
    private readonly routes : ActivatedRoute,
    private readonly router : Router) {}

  ngOnInit(): void {
    this.routes.paramMap.subscribe(params => {
      const id = params.get('id')
      if (typeof id == 'string') {
        const _id : number = +id
        this.service.getFullPost(_id).subscribe({
          next : response => this.post = response,
          error : e => this.router.navigate(['not-found'])
        })
      }

      else this.router.navigate(['not-found'])
    });

  }
}
