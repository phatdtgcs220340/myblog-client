import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { LoginForm } from '../../models/interfaces/requests.interface';
import { FormsModule } from '@angular/forms';

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

  constructor(private readonly service : AuthService) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isLoading = true
    this.service.postData(this.form)
    setTimeout(() => this.isLoading = false, 2000)
  }
}
