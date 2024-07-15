import { Component } from '@angular/core';
import { ImageFile, UploadPostForm } from '../../shared/models/interfaces/requests.interface';
import { FetchPostsService } from '../../core/services/resources/posts/fetch-posts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post-view.component.html',
  styleUrl: './create-post-view.component.css'
})
export class CreatePostViewComponent {
  form : UploadPostForm = {
    title : '',
    type : 'THANH_HUYEN',
    content : '',
    files : new Array<ImageFile>()
  }
  isLoading : boolean = false

  constructor(private readonly service: FetchPostsService) { }

  displayBlob($event : Event) : void {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const blob = new Blob([arrayBuffer], { type: file.type });
        this.form.files.push({
          input : input,
          blobUrl : URL.createObjectURL(blob)
        })
      };
      reader.readAsArrayBuffer(file);
    }
  }

  async upload($event : Event) {
    $event.preventDefault()
    this.isLoading = true

    const formData = new FormData()
    formData.append('title', this.form.title)
    formData.append('content', this.form.content)
    formData.append('type', this.form.type)
    await this.form.files.forEach(element => {
      if (element.input.files != null && element.input.files.length > 0)
        formData.append('files', element.input.files[0])
    });
    this.service.uploadForm(formData).subscribe({
      next : response => response,
      error : error => console.log(error)
    })
    setTimeout(() => this.isLoading = false, 2000)
  }

  deleteBlob(index : number) : void {
    this.form.files.splice(index, 1)
  }
}
