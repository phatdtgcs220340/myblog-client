import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { SearchPost } from '../../shared/models/interfaces/responses.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search-view.component.html'
})
export class SearchViewComponent {
  searchText : string = ''

  result : Array<SearchPost> = []

  constructor(private service : FetchPostsService) {}

  searchPost(event : Event) {
    event.preventDefault()
    this.service.getPostBySearchTitle(this.searchText).subscribe({
      next : response => this.result = response
    })
  }
}
