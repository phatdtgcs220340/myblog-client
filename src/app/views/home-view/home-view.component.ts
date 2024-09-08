import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../shared/components/post-card/post-card.component';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { PartialPost } from '../../shared/models/interfaces/responses.interface';
import { LoadingCardComponent } from '../../shared/components/loading-card/loading-card.component';
import { SideBarComponent } from '../../layout/side-bar/side-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [PostCardComponent, LoadingCardComponent, SideBarComponent, RouterLink],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
  providers : [FetchPostsService]
})
export class HomeViewComponent implements OnInit {
  posts : Array<PartialPost> = []
  serverDown : boolean = false
  isLoading : boolean = false
  constructor (private readonly postService : FetchPostsService) { }
  ngOnInit() {
    this.isLoading = true
    this.postService.getPartialPost().subscribe({
      next : (response) => {
        this.posts = response.content
        this.serverDown = false
        this.isLoading = false
      },
      error : (error) => {
        this.serverDown = false
        this.isLoading = false
      }
    });
  }
}

