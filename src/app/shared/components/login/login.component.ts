import { LoginForm, RegisterForm } from './../../models/interfaces/requests.interface';
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { authorizationLink } from '../../../../app.env';

@Component({
  standalone : true,
  selector: 'app-login-button',
  templateUrl: './login.component.html',
  imports : [FormsModule]
})
export class LoginComponent {
  loginForm : LoginForm = {
    username : '',
    password : ''
  }

  registerForm : RegisterForm = {
    fullName: '',
    username: '',
    password: ''
  }
  displayForm : boolean = false
  isLoading : boolean = false
  loginFailed : boolean = false
  isSignUp: boolean = false
  constructor(private readonly service : AuthService) { }

  onLoginFormSubmit() {
    this.isLoading = true
    this.loginFailed = false
    this.service.login(this.loginForm).subscribe({
      next : () => window.location.assign(authorizationLink),
      error: () => this.loginFailed = true,
      complete : () => this.isLoading = false
    })
  }

  onRegisterFormSubmit(event : Event) {
    event.preventDefault()
    this.service.register(this.registerForm).subscribe({
      next : () => this.service.login(this.registerForm).subscribe({
          next : () => window.location.assign(authorizationLink),
          error: error => console.log(error)
        }),
      error : error => console.log(error)
    })
  }
}
