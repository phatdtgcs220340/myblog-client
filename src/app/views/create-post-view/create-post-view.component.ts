import { Component } from '@angular/core';
import { FileDetail, ImageFile, UploadPostForm } from '../../shared/models/interfaces/requests.interface';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, Observable, timer } from 'rxjs';
import { PopupMessageComponent, PopupMessage } from '../../shared/components/popup-message/popup-message.component';
import { FetchTagService } from '../../core/services/resources/tags/fetch-tag.service';
import { FileDetailResponse, SearchTag } from '../../shared/models/interfaces/responses.interface';
import { FetchFilesService } from '../../core/services/resources/files/fetch-files.service';

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
    files: new Array<FileDetail>()
  };
  blobImages : Array<ImageFile> = []
  searchTag : string = ''
  fetchTags : Array<SearchTag> = []
  searchSubject : BehaviorSubject<string> = new BehaviorSubject<string>('')
  isLoading: boolean = false
  uploadMessage : PopupMessage | null = null

  constructor(
    private readonly service: FetchPostsService,
    private readonly tagService: FetchTagService,
    private readonly fileService: FetchFilesService
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
        this.blobImages.push({
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

  uploadImage() : Observable<Array<FileDetailResponse>> {
    const formData = new FormData();
    this.blobImages.forEach(element => {
      if (element.input.files != null && element.input.files.length > 0) {
        formData.append('files', element.input.files[0]);
      }
    });
    return this.fileService.uploadImages(formData)
  }

  upload($event: Event) {
    $event.preventDefault();
    this.isLoading = true;
    this.uploadImage().subscribe({
      next : res => {
        this.form.files = [] // empty list again to prevent unexpected bug
        res.forEach(i => {
          this.form.files.push(i)
        })
        this.service.uploadForm(this.form).subscribe({
          next: () => {
            this.isLoading = false
            this.uploadMessage = {
              message : 'The post has been uploaded successfully',
              type : 'SUCCESS'
            }
            timer(2000).subscribe(() => {
              this.uploadMessage = null
              this.form = {
                title: '',
                tags: [],
                content: '',
                files: new Array<FileDetail>()
              }
              this.blobImages = []
            });
          },
          error: r => {
            this.uploadMessage = {
              message : r.error.message,
              type : 'ERROR'
            }
            this.isLoading = false
            timer(2000).subscribe(() => this.uploadMessage = null);
          },
        });
      },
      error: r => {
        this.uploadMessage = {
          message : r.error.message,
          type : 'ERROR'
        }
        this.isLoading = false
        timer(2000).subscribe(() => this.uploadMessage = null);
      },
    })
  }

  deleteBlob(index: number): void {
    this.blobImages.splice(index, 1);
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

