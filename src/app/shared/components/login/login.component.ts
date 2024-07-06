import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { LoginForm } from '../../models/interfaces/requests.interface';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../../core/services/token/token.service';
import { authorizationLink } from '../../../../app.env';

@Component({
  standalone : true,
  selector: 'app-login',
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
  isLoading : boolean = false
  loginFailed : boolean = false
  constructor(private readonly service : AuthService) { }

  ngOnInit() {
  }

  async onFormSubmit() {
    this.isLoading = true
    const processLogin = this.service.postData(this.form).subscribe({
      next : response => console.log(response),
      error: error => {
        const responseUrl : string = error.url
        if (!responseUrl.includes("?error"))
          console.log(authorizationLink)
          window.location.assign(authorizationLink)
      }
    })
    await setTimeout(() => processLogin, 2000)
    this.isLoading = false
  }
}
