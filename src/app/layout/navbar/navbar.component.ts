import { Component, output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleLoginBox = output<void>();

  toggleLoginBoxEvent() {
    this.toggleLoginBox.emit()
  }
}
