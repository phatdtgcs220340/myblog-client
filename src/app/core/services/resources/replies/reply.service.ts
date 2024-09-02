import { Injectable } from '@angular/core';
import { BrowserStorageService } from '../../browser-storage/browser-storage.service';
import { API_V1_PATH } from '../../../../shared/constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reply } from '../../../../shared/models/interfaces/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  private readonly apiUrl = `${API_V1_PATH}/reply`

  constructor(private http : HttpClient, private storageService: BrowserStorageService) { }

  getAllFromBlog(blogId : number) : Observable<Array<Reply>> {
    return this.http.get<Array<Reply>>(`${this.apiUrl}?blogId=${blogId}`)
  }
}
