import { Component, Input } from '@angular/core';
import { NavLink } from '../../models/types/router-link.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-icon',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-icon.component.html',
  styleUrl: './nav-icon.component.css'
})
export class NavIconComponent {
  @Input() link : NavLink = '/home'
}
