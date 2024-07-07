import { Component, output } from '@angular/core';
import { LoginComponent } from '../../shared/components/login/login.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleLoginBox = output<void>();

  toggleLoginBoxEvent() {
    this.toggleLoginBox.emit()
  }
}
