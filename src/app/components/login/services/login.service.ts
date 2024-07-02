import { Injectable } from '@angular/core';
import { authorizationURL } from '../../../../app.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../../../api/interfaces/requests.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${authorizationURL}/api/login`

  constructor(private http: HttpClient) { }

  postData(form : LoginForm) : Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });
    return this.http.post<any>(`${this.apiUrl}?username=${form.username}&password=${form.password}`, { headers })
  }
}
