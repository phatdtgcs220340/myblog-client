import { Component } from '@angular/core';
import { ImageFile, UploadPostForm } from '../../shared/models/interfaces/requests.interface';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, timer } from 'rxjs';
import { PopupMessageComponent, PopupMessage } from '../../shared/components/popup-message/popup-message.component';
import { FetchTagService } from '../../core/services/resources/tags/fetch-tag.service';
import { SearchTag } from '../../shared/models/interfaces/responses.interface';

@Component({
  selector: 'app-create-post-view',
  standalone: true,
  imports: [FormsModule, PopupMessageComponent],
  templateUrl: './create-post-view.component.html'
})
export class CreatePostViewComponent {
  form: UploadPostForm = {
    title: '',
    tags: [],
    content: '',
    files: new Array<ImageFile>()
  };
  searchTag : string = ''
  fetchTags : Array<SearchTag> = []
  searchSubject : BehaviorSubject<string> = new BehaviorSubject<string>('')
  isLoading: boolean = false
  uploadMessage : PopupMessage | null = null

  constructor(private readonly service: FetchPostsService,
    private readonly tagService: FetchTagService
  ) {
    this.searchSubject.pipe(debounceTime(550)).subscribe(search => {
      if (search === '')
        this.fetchTags = []
      else
        this.tagService.searchTag(search).subscribe({
          next : response => this.fetchTags = response.content
        })
    })
  }

  displayBlob($event: Event): void {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const blob = new Blob([arrayBuffer], { type: file.type });
        const newInput = this.cloneInputElement(input);
        this.form.files.push({
          input: newInput,
          blobUrl: URL.createObjectURL(blob)
        });
      };
      reader.readAsArrayBuffer(file);
    }
  }

  cloneInputElement(input: HTMLInputElement): HTMLInputElement {
    const clonedInput = document.createElement('input');
    clonedInput.type = 'file';
    clonedInput.files = input.files;
    return clonedInput;
  }

  upload($event: Event) {
    $event.preventDefault();
    var tagsString = '';
    this.form.tags.forEach(tag => tagsString = tagsString + tag + ', ')
    tagsString = tagsString.trim();
    tagsString = tagsString.substring(0, tagsString.length - 1);
    const formData = new FormData();
    formData.append('title', this.form.title);
    formData.append('content', this.form.content);
    formData.append('tags', tagsString);
    this.form.files.forEach(element => {
      if (element.input.files != null && element.input.files.length > 0) {
        formData.append('files', element.input.files[0]);
      }
    });
    this.isLoading = true;
    this.service.uploadForm(formData).subscribe({
      next: () => {
        this.isLoading = false
        this.uploadMessage = {
          message : 'The post has been uploaded successfully',
          type : 'SUCCESS'
        }
        timer(2000).subscribe(() => this.uploadMessage = null); // Hide after 2 seconds
      },
      error: error => {
        this.uploadMessage = {
          message : error.message,
          type : 'ERROR'
        }
        this.isLoading = false
        timer(2000).subscribe(() => this.uploadMessage = null); // Hide after 2 seconds
      },
    });
  }

  deleteBlob(index: number): void {
    this.form.files.splice(index, 1);
  }

  handleSearchTag(event : Event) {
    this.searchSubject.next(this.searchTag)
  }

  addNewTag(tag : string) {
    this.searchTag = ''
    if (tag.length == 0)
      return
    if (this.form.tags.includes(tag)) {
      this.form.tags = this.form.tags.filter(t => t != tag)
    }
    else
      this.form.tags.push(tag)
    console.log(this.form.tags)
  }
}

