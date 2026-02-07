
import { Component, signal } from '@angular/core';
import { UserApiservice } from '../../services/user-apiservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})

export class Signup {
 
  signupuser = {
    userName: "",
    email: "",
    password: "",
    role: 'User'
  }

  message = signal<string>("")


  constructor(
    private readonly userApiService: UserApiservice,
    private router: Router,
    private toast: ToastrService
  ) { }

  // selectRole(role: string) {
  //   this.signupuser.role = role;
  // }

  // isActive(role: string): boolean {
  //   return this.signupuser.role === role;
  // }
 
  
  // signupUserData = signal<UserSignup[] | undefined>(undefined)

  signupUser() {
    if (this.signupuser.userName && this.signupuser.email && this.signupuser.password && this.signupuser.role) {
      const payload = {
        userName: this.signupuser.userName,
        email: this.signupuser.email,
        password: this.signupuser.password,
        role: this.signupuser.role
      };

      this.userApiService.SignupUser(payload).subscribe({
        next: res => {
          this.message.set(res.message)
          this.toast.success(this.message() || "Error")
          this.router.navigate(['/login'])
        },
        error: err => {
          console.log(err);
          this.message.set(err.error.message)
          this.toast.error(this.message() || "Error")
        }
      })
    }
    else {
      this.message.set("Enter Details")
      this.toast.error(this.message() || "Error")
    }
  }
}
