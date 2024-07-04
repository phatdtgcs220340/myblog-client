import { Injectable } from '@angular/core';
import { authorizationURL, clientId, clientSecret, redirectUri } from '../../../../app.env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenEndpoint : string = `${authorizationURL}/oauth2/token`
  private readonly headers : HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Authorization' : `Basic ${btoa(`${clientId}:${clientSecret}`)}`
  })

  constructor(private readonly http : HttpClient) { }

  exchangeAuthCode(_code : string) : Observable<any>{
    const body = new URLSearchParams();
    body.set('code', _code);
    body.set('grant_type', 'authorization_code');
    body.set('redirect_uri', redirectUri);
    return this.http.post<any>(this.tokenEndpoint, body.toString(), {
      headers : this.headers
    })
  }
}
