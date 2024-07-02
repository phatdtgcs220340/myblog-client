import { Injectable } from '@angular/core';
import { resourceURL } from '../../../../app.env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchPostsService {
  private apiUrl = `${resourceURL}/api/v1/blog`

  constructor(private http: HttpClient) { }

  getData(_page : number = 0, _size : number = 5) : Observable<any> {
    if (_size < 1)
      throw new Error("Size mustn't be less than 1")
    return this.http.get<any>(this.apiUrl, {
      params : { page : _page, size : _size }
     })
  }
}
