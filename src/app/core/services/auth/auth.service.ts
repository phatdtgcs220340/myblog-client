import { Injectable } from '@angular/core';
import { authorizationURL } from '../../../../app.env';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginForm } from '../../../shared/models/interfaces/requests.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${authorizationURL}/api/login`
  private authenticated : boolean = false;

  constructor(private readonly http: HttpClient) {}

  login(form : LoginForm) : Observable<any> {
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

