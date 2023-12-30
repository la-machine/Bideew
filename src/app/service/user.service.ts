import { Injectable } from '@angular/core';
import { AuthResponse } from '../Class/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  setAuthUser(auth: AuthResponse | null){
    if(auth!== null){
      window.localStorage.setItem("auth_name",auth.firstName);
      window.localStorage.setItem("auth_email", auth.email);
    }else{
      window.localStorage.removeItem("auth_name");
      window.localStorage.removeItem("auth_email");
    }
  }

  // public setRoles(roles: []) {
  //   localStorage.setItem('roles', JSON.stringify(roles));
  // }

  public getEmail(): any {
    const UserEmail = window.localStorage.getItem('auth_email');
    console.log("User service testing getRole  ", UserEmail);
    if(UserEmail !== null){
      // return JSON.parse(UserRole);
      return UserEmail;
    }
    return null;
  }

  public getUserName():any{
    return window.localStorage.getItem('auth_name');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getEmail() && this.getAuthToken();
  }

}
