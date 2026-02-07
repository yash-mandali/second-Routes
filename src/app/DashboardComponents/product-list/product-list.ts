import { Component, signal } from '@angular/core';
import { Product, ProductsApiResponse } from '../../services/product/productApiinterface';
import { Productser } from '../../services/product/productser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  
  constructor(public productServices: Productser) {}
  productsData = signal<Product[] | undefined>(undefined);

  deleteProductData(product: Product) {
    if (!product.id) {
      console.error('Product ID missing');
      return;
    }
    console.log("deleteproducts data called...");
    
  
    this.productServices.deleteProductData(product.id).subscribe({
      next: () => {
        this.productsData.update(data =>
          data?.filter(p => p.id !== product.id)
        );
      },
      error: err => console.error('Delete failed', err)
    });
  }

  ngOnInit() {
    this.productServices.getProductsData().subscribe((data) => {  
      // console.log("Product-list console:: "+data);
      
      this.productsData.set(data)
    })
  }
}
