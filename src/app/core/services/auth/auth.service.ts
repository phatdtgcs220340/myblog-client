import { Injectable } from '@angular/core';
import { authorizationURL } from '../../../../app.env';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { LoginForm } from '../../../shared/models/interfaces/requests.interface';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${authorizationURL}/api/login`

  constructor(private readonly http: HttpClient) {}

  postData(form : LoginForm) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('username', form.username);
    body.set('password', form.password);
    return this.http.post<any>(this.apiUrl, body.toString(), {
      headers: headers,
      withCredentials: true,
      observe : 'response'
    })
  }
}
