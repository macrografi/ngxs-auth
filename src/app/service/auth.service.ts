import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private userUrl = `${environment.user}`;

  login(param:any): Observable<any>{
    return this.http.get<any>(this.userUrl);
  }

  logout(param:any): Observable<any>{
    return this.http.get<any>(this.userUrl);
  }
}
