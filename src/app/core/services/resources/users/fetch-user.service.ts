import { Injectable } from '@angular/core';
import { resourceURL } from '../../../../../app.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrowserStorageService } from '../../browser-storage/browser-storage.service';
import { Observable, tap } from 'rxjs';
import { User } from '../../../../shared/models/interfaces/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {
  private readonly apiUrl = `${resourceURL}/api/v1/user`
  private currentUser !: User;
  constructor(private http : HttpClient, private storageService : BrowserStorageService) { }

  public fetchCurrentUser() : Observable<User> {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.storageService.get("access_token")}`
    })

    return this.http.get<User>(this.apiUrl, {
      headers : headers
    }).pipe(
      tap(u => this.currentUser = u)
    )
  }

  public getCurrentUser() : User {
    return this.currentUser;
  }
}
