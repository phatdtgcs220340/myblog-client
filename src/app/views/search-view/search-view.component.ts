import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { SearchPost } from '../../shared/models/interfaces/responses.interface';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search-view.component.html'
})
export class SearchViewComponent {
  searchText : string = ''
  result : Array<SearchPost> = []
  searchSubject : BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(private service : FetchPostsService) {
    this.searchSubject.pipe(debounceTime(550)).subscribe(search => {
      if (search.length == 0)
        this.result = []
      else 
        this.service.getPostBySearchTitle(search).subscribe({
          next : response => this.result = response
        })
    })
  }

  handleSearch(event : Event) {
    this.searchSubject.next(this.searchText)
  }
}
