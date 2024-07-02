import { Component, Input, output } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { HomeViewComponent } from '../../views/home-view/home-view.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [LoginComponent, HomeViewComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Input() displayLoginBox : boolean = false;
}
