import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
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
  constructor(private readonly service : AuthService) { }

  ngOnInit() {
  }
  onFormSubmit() {
    this.service.postData(this.form).subscribe({
      next : response => {
        console.log('Response from server', response);
      },
      error : error => {
        console.log('Error', error);
      }
    })
  }
}
