import { Component,inject,Inject,signal } from '@angular/core';
import { User, UserService } from '../../services/user-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
  
export class UserDetails {

  userService = inject(UserService)
  route = inject(ActivatedRoute)

  userData = signal<User | null>(null)

  // constructor(public userService: UserService,public route:ActivatedRoute) { }
  
  ngOnInit() {
    // const data: any = this.userService.getUser()
    // // console.log(this.userService.userList());  
    // this.route.params.subscribe((param) => {     
    //   const filterdata = data.filter((item:any) => item.id == param['id'])
    //   this.userData.set(filterdata[0])
    //   console.log(filterdata[0]);    
    // })
    
    const userId = this.route.snapshot.paramMap.get('id');

    this.userService.getUser().subscribe(users => {
      
      const user = users.find(u => u.id?.toString() === userId);
      if (user)
      {
        this.userData.set(user);
      };
    });
  }
}
