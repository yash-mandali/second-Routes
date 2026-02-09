import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { EmailService } from '../../services/email-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  loginform = new FormGroup({
    email: new FormControl('abc@gmail.com', [Validators.required, Validators.email]),
    message: new FormControl('hello i am abc', [Validators.required, Validators.minLength(5)]),
  })
  constructor(private Emailservice: EmailService, private toast: ToastrService, private route:Router) { }

  get email() {
    return this.loginform.get("email");
  }
  get message() {
    return this.loginform.get("message");
  }

  handlesubmit() {
    this.Emailservice.sendEmail(this.loginform.value).subscribe({
      next: () => {
        this.toast.success("submited")
        this.reset(),
        this.route.navigate(["/"])
        
      },
      error: (err) => {
        console.log(err);
        this.toast.error("status code: " + err.status)
      }
    })
  }

  reset() {
    this.loginform.setValue({ email: '', message: '' })
  }

  canDeactivate() {
    return confirm("you want to leave this page?")
  }
}
