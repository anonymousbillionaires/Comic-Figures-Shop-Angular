import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/authenticate', {
      email,
      password
    });
  }

  logout(): Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/logout');
  }
}
