import { Component, signal } from '@angular/core';
import { UserApiservice, UserLogin } from '../../services/user-apiservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth-service';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, NgSelectModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginuser = {
    email: "",
    password: "",
    role: "User"
  }
  message = signal("")

  constructor(
    private readonly userApiService: UserApiservice,
    private router: Router,
    private toast: ToastrService,
    private authService: AuthService
  ) { }


  loginUser() {
    if (this.loginuser.email && this.loginuser.password && this.loginuser.role) {
      const payload = {
        email: this.loginuser.email,
        password: this.loginuser.password,
        role: this.loginuser.role
      }

      this.userApiService.LoginUser(payload).subscribe({
        next: res => {
          this.authService.setToken(res.token);
          this.message.set(res.message)
          this.toast.success(this.message() || "Error")

          if (payload.role === "Admin") {
            this.router.navigate(['/dashboard/dashbordpage'])
          } else {
            this.router.navigate(['/'])
          } 
        
        },
        error: err => {
          this.message.set(err.error.message)
          this.toast.error(this.message() || "Error")
        }
      }
      )

    } else {
      this.message.set("Enter Details")
      this.toast.error(this.message() || "Error")
    }
  }
}

