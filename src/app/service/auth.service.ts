import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthRequest } from '../Class/AuthRequest';
import { UserService } from './user.service';
import { SubscribeRequest } from '../Class/SubscribeRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subscribe !: SubscribeRequest;

  constructor(private http: HttpClient, private userService : UserService) { }

  login(request : AuthRequest){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        // "Authorization": "Bearer " + this.getAuthToken(), // If you have authentication
      }),}
      console.log("From the authService" + request.email)
       return this.http.post('https://bideew-c7865089e3a7.herokuapp.com/api/authenticate', request, httpOptions).pipe(
        catchError((error) => {
          // Handle authentication error here
          return throwError('Invalid credentials'); // Set your custom error message
        })
       );
  }

  addSubscriber(email:string){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        // "Authorization": "Bearer " + this.getAuthToken(), // If you have authentication
      }),}
      this.subscribe.email=email;
    return this.http.post('https://bideew-c7865089e3a7.herokuapp.com/api/subscribe',this.subscribe,httpOptions).pipe();
  }

  getUsers(){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        "Authorization": "Bearer " + this.userService.getAuthToken(),
      }),}
    return this.http.get('https://bideew-c7865089e3a7.herokuapp.com/api/user/all-user', httpOptions).pipe(
        catchError((error) => {
          return throwError('Error fetching users');
        })
       );
  }

}
