import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Chatbotservice {
  apiurl = "https://localhost:7172/api/User/ask"

  constructor(private http: HttpClient) { }
  
  generateResponse(prompt: string): Observable<any> {

    return this.http.post<any>(this.apiurl,
      {
        prompt: prompt 
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );

  }

  // generateResponse(prompt: string): Observable<any> {
  //   return this.http.post<any>(this.apiurl, {
  //     prompt: prompt
  //   });
  // }



}
