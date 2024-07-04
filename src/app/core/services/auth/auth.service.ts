import { Injectable } from '@angular/core';
import { authorizationURL } from '../../../../app.env';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginForm } from '../../../shared/models/interfaces/requests.interface';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${authorizationURL}/api/login`

  constructor(
    private readonly http: HttpClient,
    private readonly tokenService : TokenService
  ) { }

  postData(form : LoginForm) : void {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('username', form.username);
    body.set('password', form.password);

    this.http.post<any>(this.apiUrl, body.toString(), {
      headers: headers,
      withCredentials: true
    }).subscribe({
      next : response => {
        console.log(response)
      },
      error : e => {
        console.log(e)
      }
    });
  }
}
