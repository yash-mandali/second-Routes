import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from './services/auth-service';
import { CommonModule } from '@angular/common';
import { Dashboard } from './pages/dashboard/dashboard';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('second-Routes');

  menuOpen = false;
  userloggedin = computed(() => this.auth.isLoggedIn());

  loggedInUserRole = signal('')

  // checkRole = signal('')

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    if (this.auth.getRole() == "Admin") {
      this.loggedInUserRole.set("Admin")
    }
    else {
      this.loggedInUserRole.set("User")
    }
  }


  logout() {
    this.auth.Logout();
    // this.userloggedin.set(false)
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
}
