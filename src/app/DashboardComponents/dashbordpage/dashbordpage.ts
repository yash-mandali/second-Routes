import { Component, OnInit, signal } from '@angular/core';
import { Productser } from '../../services/product/productser';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-dashbordpage',
  imports: [],
  templateUrl: './dashbordpage.html',
  styleUrl: './dashbordpage.css',
})
export class Dashbordpage {
  userData: any = signal('')
  productsData: any = signal('');
  // orders = 247;          // final value
  // animatedOrders = 0;

  constructor(public productServices: Productser, private userService: UserService) {
  }

  ngOnInit() {
    this.productServices.getProductsData().subscribe((data) => {
      this.productsData.set(data);
    })
    this.userService.getUser().subscribe((data) => {
      this.userData.set(data)
    })
    // this.animateCounter(this.orders);
  }
}

  // private animateCounter(target: number) {
  //   const duration = 100; // ms
  //   const start = 0;
  //   const startTime = performance.now();

  //   const step = (currentTime: number) => {
  //     const elapsed = currentTime - startTime;
  //     const progress = Math.min(elapsed / duration, 1);

  //     this.animatedOrders = Math.floor(progress * (target - start) + start);

  //     if (progress < 1) {
  //       requestAnimationFrame(step);
  //     }
  //   };

  //   requestAnimationFrame(step);
  // }



