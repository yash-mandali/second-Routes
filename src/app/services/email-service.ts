import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  appiUrl = "https://localhost:7172/api/User/SendEmail"
  constructor(private readonly http: HttpClient) { }
  
  sendEmail(data: any): Observable<any> {
    return this.http.post<any>(this.appiUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
