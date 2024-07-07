import { Component, Input, output } from '@angular/core';
import { LoginComponent } from '../../shared/components/login/login.component';
import { HomeViewComponent } from '../../views/home-view/home-view.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PageNotFoundComponent } from '../../shared/components/page-not-found/page-not-found.component';
import { AuthorizeComponent } from '../../components/authorize/authorize.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LoginComponent, HomeViewComponent, PageNotFoundComponent, AuthorizeComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
}
