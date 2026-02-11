import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private _loggedIn = signal<boolean | null>(this.hastoken());

  private hastoken(): boolean {
    return !!localStorage.getItem('token')
  }

  loggedInSignal() {
    return this._loggedIn;
  }

  isLoggedIn() {
    return this._loggedIn();
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this._loggedIn.set(true);
  }

  Logout() {
    localStorage.removeItem('token');
    this._loggedIn.set(false);
  } 

  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const decode: any = jwtDecode(token);

    return (decode.role || decode['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'])
  }

  



  // ------------------------------
  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // isLoggedIn():boolean {
  //   return !!localStorage.getItem('token');
  // }

  // setToken(token: string) {
  //   localStorage.setItem('token',token) 
  // }

  // Logout() {
  //   localStorage.removeItem('token'); 
  // }
  
}
