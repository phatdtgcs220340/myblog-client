import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../core/services/token/token.service';
import { Router } from '@angular/router';
import { BrowserStorageService } from '../../core/services/browser-storage/browser-storage.service';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-authorize',
  standalone: true,
  imports: [],
  templateUrl: './authorize.component.html',
  styleUrl: './authorize.component.css'
})
export class AuthorizeComponent implements OnInit{
  constructor(
    private readonly tokenService : TokenService,
    private readonly router : Router,
    private readonly storageService : BrowserStorageService,
    private readonly authService : AuthService
  ) {}
  ngOnInit(): void {
    const code = (new URLSearchParams(window.location.search)).get("code")
    if (typeof code === 'string')
      this.tokenService.exchangeAuthCode(code).subscribe({
        next : response => {
          this.storageService.set("access_token", response.access_token)
          this.storageService.set("refresh_token", response.refresh_token)
          this.authService.registerResource(response.id_token).subscribe()
          this.router.navigate(['/home'])
        }
      })
  }

}
