import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Productser } from '../../services/product/productser';
import { Product } from '../../services/product/productApiinterface'
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
//   userDetails:any = ""
//   onsubmit(data: NgForm) {
//     console.log(data);
//     this.userDetails = data;
  // }
  productsData = signal<Product[] | undefined>(undefined);

  constructor(public productServices: Productser) {
  }
 
  ngOnInit(){
    this.productServices.getProductsData().subscribe((data) => {
      
      this.productsData.set(data)
  
    })
  }
}
