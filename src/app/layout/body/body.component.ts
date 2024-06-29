import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
