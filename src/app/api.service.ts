import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api-staging-etda.ibotnoi.com/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const url = this.apiUrl + 'etda/login';
    let body = { username, password };
    return this.http.post(url, body);
  }


}
