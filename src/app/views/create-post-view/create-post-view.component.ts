import { Component } from '@angular/core';
import { ImageFile, UploadPostForm } from '../../shared/models/interfaces/requests.interface';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';
import { PopupMessageComponent, PopupMessage } from '../../shared/components/popup-message/popup-message.component';

@Component({
  selector: 'app-create-post-view',
  standalone: true,
  imports: [FormsModule, PopupMessageComponent],
  templateUrl: './create-post-view.component.html'
})
export class CreatePostViewComponent {
  form: UploadPostForm = {
    title: '',
    type: 'THANH_HUYEN',
    content: '',
    files: new Array<ImageFile>()
  };
  isLoading: boolean = false
  uploadMessage : PopupMessage | null = null
  constructor(private readonly service: FetchPostsService) { }

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
    const formData = new FormData();
    formData.append('title', this.form.title);
    formData.append('content', this.form.content);
    formData.append('type', this.form.type);
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
}

