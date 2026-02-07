import { Component, signal } from '@angular/core';
import { Productser } from '../../services/product/productser';
import { Product } from '../../services/product/productApiinterface';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-products',
  imports: [],
  templateUrl: './add-products.html',
  styleUrl: './add-products.css',
})
export class AddProducts {
  constructor(public productServices: Productser, private location: Location, private router:Router) { }
  

  goBack() {
    this.location.back();
  }

  updateCategory(event: Event) {
    this.category.set((event.target as HTMLSelectElement).value);
  }
  adddescription(event: Event) {
    this.description.set((event.target as HTMLSelectElement).value);
  }
  setSingleImage(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.images.set(value ? [value] : []);
  }



  productsData = signal<Product[] | any>(undefined);
  id = signal<string>('');
  title = signal<string>('');
  description = signal<string>('');
  category = signal<string>('');
  price = signal<number>(0);
  discountPercentage = signal<number>(0);
  rating = signal<number>(0);
  stock = signal<number>(0);
  tags = signal<string[]>([]);
  brand = signal<string | null>(null);
  sku = signal<string>('');
  weight = signal<number>(0);
  dimensions = signal<{
    width?: number;
    height?: number;
    depth?: number;
  }>({
    width: 0,
    height: 0,
    depth: 0
  });
  warrantyInformation = signal<string>('');
  shippingInformation = signal<string>('');
  availabilityStatus = signal<'In Stock' | 'Out of Stock' | string>('In Stock');
  reviews = signal<any>([]);
  returnPolicy = signal<string>('');
  minimumOrderQuantity = signal<number>(0);
  meta = signal<{
    createdAt?: string;
    updatedAt?: string;
    barcode?: string;
    qrCode?: string;
  }>({
    createdAt: '',
    updatedAt: '',
    barcode: '',
    qrCode: ''
  });
  images = signal<string[]>([]);
  thumbnail = signal<string>('');


  ngOnInit() {
    this.loadUser();

  }

  loadUser() {
    this.productServices.getProductsData().subscribe(data => {
      this.productsData.set(data)
    })
  }

  submitForm() {
    if (this.description()! || this.title()! || this.price()!) {
      const payload: Product = {
        id: (this.productsData()?.length ?? 0) + 1,
        title: this.title(),
        description: this.description(),
        category: this.category(),
        price: this.price(),
        discountPercentage: this.discountPercentage(),
        rating: this.rating(),
        stock: this.stock(),
        tags: this.tags(),
        brand: this.brand(),
        sku: this.sku(),
        weight: this.weight(),
        dimensions: this.dimensions(),
        warrantyInformation: this.warrantyInformation(),
        shippingInformation: this.shippingInformation(),
        availabilityStatus: this.availabilityStatus(),
        reviews: this.reviews(),
        returnPolicy: this.returnPolicy(),
        minimumOrderQuantity: this.minimumOrderQuantity(),
        meta: this.meta(),
        images: this.images(),
        thumbnail: this.thumbnail()
      };

      //Add product
      this.productServices.addProductData(payload).subscribe(() => {
        this.loadUser();
        this.description.set('')
        this.title.set('')
        this.price.set(0)
        this.category.set('')
        this.images.set([])
        this.thumbnail.set('')
        this.brand.set('')
        this.discountPercentage.set(0)
        this.router.navigate(['dashboard/product-list'])
       
      })
    }
  }

}
