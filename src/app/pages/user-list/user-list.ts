import { Component,signal} from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userData: any = signal("")
  constructor(public userService: UserService) { }
  ngOnInit() {
    const data = this.userService.userList()
    this.userData.set(data)
  }
}
