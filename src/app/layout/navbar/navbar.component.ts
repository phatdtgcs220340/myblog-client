import { Component, output } from '@angular/core';
import { LoginComponent } from '../../shared/components/login/login.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavIconComponent } from '../../shared/components/nav-icon/nav-icon.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginComponent, NavIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
