import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  createUser(userData: UserData): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const createUserUrl = `${this.apiUrl}/users`;

    return this.http.post(createUserUrl, userData, { headers });
  }
}

export interface UserData {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  email: string;
  phone: string;
}