import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-notfound',
  imports: [RouterLink],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css',
})
export class Notfound {

  loggedInUserRole = signal('')
  constructor(private readonly auth: AuthService) { }
  ngOnInit() {
    if (this.auth.getRole() == "Admin") {
      this.loggedInUserRole.set("Admin")
    }
    else {
      this.loggedInUserRole.set("User")
    }
  }
}
