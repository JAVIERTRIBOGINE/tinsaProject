import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public logged: boolean = false; 
  public backendError: string;
  constructor(private http:HttpClient) { }

  register(data) {
    // return this.http.post('localhost:3000/register', {mail:data.mail, password: data.password})
    return this.http.post(environment.api.registerRoot+environment.endpoint.register, data)
  }

  login(data) {
    // return this.http.post('localhost:3000/register', {mail:data.mail, password: data.password})
    return this.http.post(environment.api.registerRoot+environment.endpoint.login, data)
  }

  public isLogged() {
    return this.logged;
  }
}
