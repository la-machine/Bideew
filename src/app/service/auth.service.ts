import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthRequest } from '../Class/AuthRequest';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService : UserService) { }

  login(request : AuthRequest){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        // "Authorization": "Bearer " + this.getAuthToken(), // If you have authentication
      }),}
      console.log("From the authService" + request.email)
       return this.http.post('http://localhost:8080/api/authenticate', request, httpOptions).pipe(
        catchError((error) => {
          // Handle authentication error here
          return throwError('Invalid credentials'); // Set your custom error message
        })
       );
  }

  getUsers(){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        "Authorization": "Bearer " + this.userService.getAuthToken(),
      }),}
    return this.http.get('http://localhost:8080/api/user/all-user', httpOptions).pipe(
        catchError((error) => {
          return throwError('Error fetching users');
        })
       );
  }

}
