import { Component, signal } from '@angular/core';
import { Customer, Customerservice } from '../../services/customerservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customerpage',
  imports: [CommonModule],
  templateUrl: './customerpage.html',
  styleUrl: './customerpage.css',
})
export class Customerpage {
  
  constructor(private customerService: Customerservice) { }
  customerData = signal<Customer[] | undefined>(undefined)

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      this.customerData.set(data)
    })
  }
}
