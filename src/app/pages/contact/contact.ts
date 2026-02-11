import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { EmailService } from '../../services/email-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // Loading state
  isLoading = false;

  contactForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private emailService: EmailService,
    private toast: ToastrService,
    private router: Router
  ) { }

  // Getters
  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  // Submit handler
  handleSubmit() {
    // Stop if form invalid
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.emailService.sendEmail(this.contactForm.value).subscribe({
      next: () => {
        this.toast.success('sent');

        this.contactForm.reset();
        this.isLoading = false;

        this.router.navigate(['/']);
      },

      error: (err) => {
        console.error(err);

        this.toast.error(
          'Something went wrong. Try again'
        );

        this.isLoading = false;
      },
    });
  }

  reset() {
    this.contactForm.reset();
  }

  // Route guard
  canDeactivate() {
    if (this.contactForm.dirty) {
      return confirm('You have unsaved changes. Leave?');
    }
    return true;
  }
}
