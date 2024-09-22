import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserStorageService } from '../../browser-storage/browser-storage.service';
import { FullPost, Page, PartialPost, SearchPost } from '../../../../shared/models/interfaces/responses.interface';
import { API_V1_PATH } from '../../../../shared/constants/endpoints';
import { BlogFilter, UploadPostForm } from '../../../../shared/models/interfaces/requests.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchPostsService {
  private apiUrl = `${API_V1_PATH}/blog`

  constructor(private http: HttpClient, private storageService : BrowserStorageService) { }

  getPartialPost(filter : BlogFilter, _page : number = 0, _size : number = 10) : Observable<Page<PartialPost>> {
    if (_size < 1)
      throw new Error("Size mustn't be less than 1")
    return this.http.post<Page<PartialPost>>(`${this.apiUrl}/list`, filter, {
      params : { page : _page, size : _size },
     });
  }

  uploadForm(form : UploadPostForm) : Observable<any> {
    return this.http.post(this.apiUrl, form, {
      headers : this.storageService.generateTokenHeader()
    })
  }

  getFullPost(id : number) : Observable<FullPost> {
    return this.http.get<FullPost>(`${this.apiUrl}/${id}`)
  }
}
