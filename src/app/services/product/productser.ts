import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductsApiResponse } from './productApiinterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class Productser {
  api = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getProductsData() {
    return this.http.get<Product[]>(this.api) 
  }

  addProductData(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

  deleteProductData(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`)
  }

}
