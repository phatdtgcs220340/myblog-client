import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../core/services/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorize',
  standalone: true,
  imports: [],
  templateUrl: './authorize.component.html',
  styleUrl: './authorize.component.css'
})
export class AuthorizeComponent implements OnInit{
  constructor(private readonly tokenService : TokenService,
    private readonly router : Router
  ) {}
  ngOnInit(): void {
    const code = (new URLSearchParams(window.location.search)).get("code")
    if (typeof code === 'string')
      this.tokenService.exchangeAuthCode(code).subscribe({
        next : response => {
          this.router.navigate(['/home'])
        }
      })
  }

}
