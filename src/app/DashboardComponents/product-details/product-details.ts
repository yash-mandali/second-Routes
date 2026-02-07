import { Component, NgModule, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Productser } from '../../services/product/productser';
import { Product } from '../../services/product/productApiinterface'
import { CommonModule, Location } from '@angular/common';



@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  // productsData = signal<Product[] | undefined>(undefined);
  productsData = signal<Product>(undefined as unknown as Product);

  constructor(private route: ActivatedRoute, private products: Productser, private location:Location) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    
    
    this.products.getProductsData().subscribe((data) => {
      console.log("product-details ngoninit called---", data);
      

      const product = data.find(item => item.id == String(productId))
      console.log(product);
      
      if (product) {
        this.productsData.set(product)
    }
    })
  }
}
