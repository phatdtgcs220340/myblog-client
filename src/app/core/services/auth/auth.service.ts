import { Injectable } from '@angular/core';
import { authorizationURL, resourceURL } from '../../../../app.env';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginForm, RegisterForm } from '../../../shared/models/interfaces/requests.interface';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { BrowserStorageService } from '../browser-storage/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginApi = `${authorizationURL}/api/login`
  private registerApi = `${authorizationURL}/api/register`
  private registerResourceApi = `${resourceURL}/api/register`

  constructor(
    private readonly http: HttpClient, 
    private readonly tokenService: TokenService,
    private readonly storageService: BrowserStorageService
  ) {}

  login(form : LoginForm) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('username', form.username);
    body.set('password', form.password);

    return this.http.post<any>(this.loginApi, body.toString(), {
      headers: headers,
      withCredentials: true,
      observe : 'response'
    })
  }

  register(form : RegisterForm) : Observable<any>{
    return this.http.post(this.registerApi, form)
  }

  registerResource(token : string) : Observable<any> {
    const headers = new HttpHeaders({
      'Id-Token' : token
    })
    return this.http.get(this.registerResourceApi, {
      headers : headers
    })
  }
}

