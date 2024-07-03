import { Injectable } from '@angular/core';
import { authorizationURL } from '../../../app.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../../shared/models/interfaces/requests.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${authorizationURL}/api/login`
  private isAuthenticated = false;
  constructor(private http: HttpClient) { }

  postData(form : LoginForm) : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });
    return this.http.post<any>(`${this.apiUrl}?username=${form.username}&password=${form.password}`, { headers })
  }
}
