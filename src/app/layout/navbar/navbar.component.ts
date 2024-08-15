import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../shared/components/login/login.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavIconComponent } from '../../shared/components/nav-icon/nav-icon.component';
import { FetchUserService } from '../../core/services/resources/users/fetch-user.service';
import { BrowserStorageService } from '../../core/services/browser-storage/browser-storage.service';
import { User } from '../../shared/models/interfaces/responses.interface';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginComponent, NavIconComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isAuthenticated : boolean = false
  isAdmin : boolean = false

  constructor (private readonly userService : FetchUserService,
    private readonly storageService : BrowserStorageService
  ) {
  }

  async ngOnInit(): Promise<void> {
    var user : User | null = null;
    await this.userService.fetchCurrentUser().subscribe({
      next : r => {
        user = this.userService.getCurrentUser()
        if (user !== null) {
          this.isAuthenticated = true
          if (user.role.includes("ADMIN"))
            this.isAdmin = true
        }
      }
    })
  }

  logout() : void {
    this.storageService.clear()
    this.userService.logout()
    window.location.assign("/")
  }
}
