import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { LoginForm } from './form.interface';
import { FormsModule } from '@angular/forms';

@Component({
  standalone : true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports : [FormsModule],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  form : LoginForm = {
    username : '',
    password : ''
  }
  constructor(private readonly service : LoginService) { }

  ngOnInit() {
  }
  onFormSubmit() {
    this.service.postData(this.form).subscribe(
      response => {
        console.log('Response from server', response);
      },
      error => {
        console.log('Error', error);
      }
    )
  }
}
