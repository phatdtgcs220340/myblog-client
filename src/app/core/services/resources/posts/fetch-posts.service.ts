import { Injectable } from '@angular/core';
import { resourceURL } from '../../../../../app.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserStorageService } from '../../browser-storage/browser-storage.service';
import { UploadPostForm } from '../../../../shared/models/interfaces/requests.interface';
import { FullPost } from '../../../../shared/models/interfaces/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchPostsService {
  private apiUrl = `${resourceURL}/api/v1/blog`

  constructor(private http: HttpClient, private storageService : BrowserStorageService) { }

  getPartialPost(_page : number = 0, _size : number = 5) : Observable<any> {
    if (_size < 1)
      throw new Error("Size mustn't be less than 1")
    return this.http.get<any>(this.apiUrl, {
      params : { page : _page, size : _size }
     })
  }

  uploadForm(form : FormData) : Observable<any> {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.storageService.get("access_token")}`
    })

    return this.http.post(this.apiUrl, form, {
      headers : headers
    })
  }

  getFullPost(id : number) : Observable<FullPost> {
    return this.http.get<FullPost>(`this.apiUrl/${id}`)
  }

}
