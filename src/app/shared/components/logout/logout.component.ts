import { Component } from '@angular/core';
import { BrowserStorageService } from '../../../core/services/browser-storage/browser-storage.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  constructor(private readonly storageService : BrowserStorageService) {}

  logout() {
    this.storageService.clear()
  }
}
