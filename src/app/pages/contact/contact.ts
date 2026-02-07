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
    name: new FormControl('abc',[Validators.required]),
    email: new FormControl('abc@gmail.com', [Validators.required,Validators.email]),
    password: new FormControl('1234', [Validators.required,Validators.minLength(3)]),
  })

  get name() {
    return this.loginform.get("name");
  }
  get email() {
    return this.loginform.get("email");
  }
  get password() {
    return this.loginform.get("password");
  }
  
  // name = new FormControl("")
  // email = new FormControl("")

  // login() {
  //   this.name.setValue(this.name.value)
  //   this.email.setValue(this.email.value)
  //   console.log(this.name.value)
  //   console.log(this.email.value)
  // }

  // reset() {
  //   this.name.setValue("")
  //   this.email.setValue("")
  // }

  handlesubmit() {
    console.log(this.loginform.value);
  }
  reset() {
    this.loginform.setValue({name:'',email:'',password:''})
  }
}
