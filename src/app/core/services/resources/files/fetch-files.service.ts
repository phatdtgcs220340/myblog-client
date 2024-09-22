import { Injectable } from '@angular/core';
import { API_V1_PATH } from '../../../../shared/constants/endpoints';
import { HttpClient } from '@angular/common/http';
import { BrowserStorageService } from '../../browser-storage/browser-storage.service';
import { Observable } from 'rxjs';
import { FileDetailResponse } from '../../../../shared/models/interfaces/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchFilesService {
  private readonly apiUrl = `${API_V1_PATH}/image`
  constructor(private http : HttpClient, private storageService : BrowserStorageService) { }

  uploadImages(form : FormData) : Observable<Array<FileDetailResponse>> {
    return this.http.post<Array<FileDetailResponse>>(`${this.apiUrl}/upload_multiple`, form, {
      headers : this.storageService.generateTokenHeader()
    })
  }
}
