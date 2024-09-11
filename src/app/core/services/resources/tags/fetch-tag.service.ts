import { Injectable } from '@angular/core';
import { API_V1_PATH } from '../../../../shared/constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page, SearchTag } from '../../../../shared/models/interfaces/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchTagService {
  private readonly apiUrl = `${API_V1_PATH}/tag`

  constructor(private http: HttpClient) { }

  searchTag(name : string) : Observable<Page<SearchTag>> {
    return this.http.get<Page<SearchTag>>(`${this.apiUrl}/search`, {
      params : {
        name : name
      }
    })
  }
}
