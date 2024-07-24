import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { LoginForm } from '../../models/interfaces/requests.interface';
import { FormsModule } from '@angular/forms';
import { authorizationLink } from '../../../../app.env';

@Component({
  standalone : true,
  selector: 'app-login-button',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports : [FormsModule],
  providers : [AuthService]
})
export class LoginComponent implements OnInit {
  form : LoginForm = {
    username : '',
    password : ''
  }
  displayForm : boolean = false
  isLoading : boolean = false
  loginFailed : boolean = false
  constructor(private readonly service : AuthService) { }

  ngOnInit() {
  }

  async onFormSubmit() {
    this.isLoading = true
    this.loginFailed = false
    await this.service.login(this.form).subscribe({
      next : response => window.location.assign(authorizationLink),
      error: error => this.loginFailed = true
    })
    this.isLoading = false
  }
}
