import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Customer {
  id?: string;
  customerName: string;
  email: string;
} 

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
 apiurl = "/api/Customer";

  constructor(private http: HttpClient) { }

  getCustomers() {
    console.log("getCustomer called");  
    return this.http.get<Customer[]>(this.apiurl)
  }
}
