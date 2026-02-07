import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserApiservice } from '../../services/user-apiservice';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {

  constructor(private userApiService: UserApiservice, private toast: ToastrService, private router: Router) { }

  resetModel = {
    email: "",
    newPassword: "",
    conformPassword: ""
  };
  message = signal("")

  resetPassword() {
    if (this.resetModel.email && this.resetModel.newPassword && this.resetModel.conformPassword) {
      const payload = {
        email: this.resetModel.email,
        newPassword: this.resetModel.newPassword,
        conformPassword: this.resetModel.conformPassword,
      }

      this.userApiService.forgotPassword(payload).subscribe({
        next: res => {
          console.log("next log" + res.message);
          this.message.set(res.message)
          this.toast.success(this.message() || "Error")
          this.router.navigate(['/login'])
        },
        error: err => {
          console.log("error log" + err.error.message);
          this.message.set(err.error.message)
          this.toast.error(this.message() || "Error")
        }
      })

    } else {
      this.message.set("Enter Details")
      this.toast.error(this.message() || "Error")
    }

  }
}
