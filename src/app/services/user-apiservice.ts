import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserSignup {
  userName: string
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserApiservice {

  apiurl = "https://localhost:7172/api/User"


  constructor(private http: HttpClient) { }

  LoginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiurl}/login`, data, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    })
  }

  SignupUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiurl}/signup`, data, {

      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    })
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiurl}/reset-password`, data);
  }
}
