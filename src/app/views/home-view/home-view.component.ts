import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { PartialPost } from '../../shared/models/interfaces/responses.interface';
import { LoadingCardComponent } from '../../components/loading-card/loading-card.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [PostCardComponent, LoadingCardComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
  providers : [FetchPostsService]
})
export class HomeViewComponent implements OnInit {
  posts : Array<PartialPost> = [
    {
      id : 1,
      title : "What is Lorem Ipsum",
      type : "",
      dateAudit : "",
      userId : 1,
      fullName : "",
      totalLike : 1,
      totalReply : 1
    },{
      id : 1,
      title : "What is Lorem Ipsum",
      type : "",
      dateAudit : "",
      userId : 1,
      fullName : "",
      totalLike : 1,
      totalReply : 1
    }
  ]
  serverDown : boolean = false
  isLoading : boolean = false
  constructor (private readonly postService : FetchPostsService) { }
  async ngOnInit(): Promise<void> {
    this.isLoading = true
    await this.postService.getData().subscribe({
      next : (response) => {
        this.posts = response.content
        this.serverDown = false
      },
      error : (error) => this.serverDown = false
    });
    this.isLoading = false
  }
}

