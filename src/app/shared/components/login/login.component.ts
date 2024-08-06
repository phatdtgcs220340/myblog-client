import { LoginForm, RegisterForm } from './../../models/interfaces/requests.interface';
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { authorizationLink } from '../../../../app.env';

@Component({
  standalone : true,
  selector: 'app-login-button',
  templateUrl: './login.component.html',
  imports : [FormsModule],
  providers : [AuthService]
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

  async onLoginFormSubmit() {
    this.isLoading = true
    this.loginFailed = false
    await this.service.login(this.loginForm).subscribe({
      next : response => window.location.assign(authorizationLink),
      error: error => this.loginFailed = true
    })
    this.isLoading = false
  }

  async onRegisterFormSubmit(event : Event) {
    event.preventDefault()
    await this.service.register(this.registerForm).subscribe({
      next : async (response) => {
        await this.service.login(this.registerForm).subscribe({
          next : response => window.location.assign(authorizationLink),
          error: error => console.log(error)
        })
      },
      error : error => console.log(error)
    })
  }
}
