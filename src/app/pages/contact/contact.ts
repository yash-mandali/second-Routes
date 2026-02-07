import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  loginform = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    feedback: new FormControl('',[Validators.required,Validators.minLength(20)]),
  })

  get email() {
    return this.loginform.get("email");
  }
  get feedback() {
    return this.loginform.get("feedback");
  }
  


  handlesubmit() {
    console.log(this.loginform.value);
  }
  reset() {
    this.loginform.setValue({email:'',feedback:''})
  }
  canDeactivate() {
    return confirm("you want to leave this page?")
  }
}
