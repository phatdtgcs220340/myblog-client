import { Injectable } from '@angular/core';
import { authorizationURL } from '../../../../app.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../form.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${authorizationURL}/api/login`

  constructor(private http: HttpClient) { }

  postData(form : LoginForm) : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post<any>(this.apiUrl, form, { headers })
  }
}
