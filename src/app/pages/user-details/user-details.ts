import { Component,signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
  
export class UserDetails {
  userData: any = signal("")
  constructor(public userService: UserService,public route:ActivatedRoute) { }
  ngOnInit() {
    const data = this.userService.userList()
    // console.log(this.userService.userList());  
    this.route.params.subscribe((param) => {     
      const filterdata = data.filter((item) => item.id == param['id'])
      this.userData.set(filterdata[0])
      console.log(filterdata[0]);    
    })
  }
}
