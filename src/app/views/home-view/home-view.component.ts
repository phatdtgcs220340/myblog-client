import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { FetchPostsService } from './services/fetch-posts.service';
import { PartialPost } from '../../api/interfaces/responses.interface';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
  providers : [FetchPostsService]
})
export class HomeViewComponent implements OnInit {
  posts : Array<PartialPost> = []
  serverDown : boolean = false
  constructor (private readonly postService : FetchPostsService) { }
  async ngOnInit(): Promise<void> {
    await this.postService.getData().subscribe(
      response => {
        this.posts = response.content
        this.serverDown = false
      },
      error => this.serverDown = true
    );
  }
}

