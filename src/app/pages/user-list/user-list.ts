import { Component, inject, signal, Signal } from '@angular/core';
import { User, UserService } from '../../services/user-service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  // userService = inject(UserService);
  // user:any = toSignal(this.userService.getUser(), { initialValue: [] });

  error = signal("")

  userData = signal<User[] | undefined>(undefined);
  name = signal<string>('');
  age = signal<string>('')
  city = signal<string>('');


  updateId = signal<number | null>(null)

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser().subscribe(data => {
      this.userData.set(data)
    })
  }

  // edit button fuction
  editUser(user: User) {
    this.updateId.set(user.id!)
    this.name.set(user.name)
    this.age.set(user.age)
    this.city.set(user.city)
  }

  // delete button fuction
  deleteUser(user: User) {
    this.userService.deleteUser(user.id!).subscribe(() => {
      this.userData.update(list =>
        list?.filter(u => u.id !== user.id)
      )
    })
  }
  
  // generateId() {
  //   return this.userData().length
  //     ? Math.max(...this.userData().map(u => u.id)) + 1
  //     : 1;
  // }
  submitForm() {
    if (this.name()! && this.age()! && this.city()!) {
      const payload: User = {
        // id: (this.userData()?.length ?? 0) + 1,
        name: this.name(),
        age: this.age(),
        city: this.city(),
      };

      //update User
      if (this.updateId() !== null) {

        this.userService.updateUser(
          this.updateId()!,
          payload
        ).subscribe(() => {
          this.loadUser();
          this.name.set('')
          this.age.set('')
          this.city.set('')
          this.updateId.set(null)
        })
      } else {
        // add user 
        this.userService.addUser(payload).subscribe(() => {
      
          this.loadUser();
          this.name.set('')
          this.age.set('')
          this.city.set('')
          this.updateId.set(null)
        })
      }
      this.error.set("")
    }
    else {
      this.error.set("*Enter Details")
    }
  }
}
