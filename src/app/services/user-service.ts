import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList() {
    return [
      { id: 1, name: 'Yash', age: 21, city: 'Ahmedabad' },
      { id: 2, name: 'Amit', age: 24, city: 'Surat' },
      { id: 3, name: 'Ravi', age: 22, city: 'Vadodara' },
      { id: 4, name: 'Neha', age: 25, city: 'Rajkot' },
      { id: 5, name: 'Priya', age: 23, city: 'Bhavnagar' },
      // { id: 6, name: 'Karan', age: 26, city: 'Junagadh' },
      // { id: 7, name: 'Anjali', age: 21, city: 'Gandhinagar' },
      // { id: 8, name: 'Vikas', age: 28, city: 'Mumbai' },
      // { id: 9, name: 'Pooja', age: 24, city: 'Pune' },
      // { id: 10, name: 'Rahul', age: 27, city: 'Delhi' },
      // { id: 11, name: 'Sneha', age: 22, city: 'Jaipur' },
      // { id: 12, name: 'Arjun', age: 29, city: 'Indore' },
      // { id: 13, name: 'Nikita', age: 23, city: 'Bhopal' },
      // { id: 14, name: 'Sanjay', age: 31, city: 'Udaipur' },
      // { id: 15, name: 'Kavya', age: 20, city: 'Kota' },
      // { id: 16, name: 'Manish', age: 34, city: 'Noida' },
      // { id: 17, name: 'Riya', age: 21, city: 'Faridabad' },
      // { id: 18, name: 'Akash', age: 26, city: 'Chandigarh' },
      // { id: 19, name: 'Mehul', age: 28, city: 'Jamnagar' },
      // { id: 20, name: 'Isha', age: 24, city: 'Patna' },
      // { id: 21, name: 'Dev', age: 27, city: 'Lucknow' },
      // { id: 22, name: 'Rohit', age: 30, city: 'Kanpur' },
      // { id: 23, name: 'Simran', age: 22, city: 'Amritsar' },
      // { id: 24, name: 'Nilesh', age: 35, city: 'Nashik' },
      // { id: 25, name: 'Payal', age: 23, city: 'Aurangabad' },
      // { id: 26, name: 'Harsh', age: 25, city: 'Morbi' },
      // { id: 27, name: 'Ayesha', age: 24, city: 'Hyderabad' },
      // { id: 28, name: 'Suresh', age: 38, city: 'Chennai' },
      // { id: 29, name: 'Tanvi', age: 21, city: 'Nagpur' },
      // { id: 30, name: 'Om', age: 19, city: 'Kolhapur' }
    ]
  }
}
