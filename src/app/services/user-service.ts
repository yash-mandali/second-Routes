import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from '../../model/User';

export interface User {
  id?: number;
  name: string;
  age: string;
  city: string;
} 

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = "http://localhost:5050/users";
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User[]>(this.apiUrl)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user)
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }
}
