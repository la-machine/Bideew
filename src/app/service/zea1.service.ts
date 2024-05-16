import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class Zea1Service {

  constructor(private http: HttpClient, private userservice: UserService) { }

  createZEA1(title: string, desc: string, image: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        // "Content-Type": " application/json",
        "Authorization": "Bearer " + this.userservice.getAuthToken(), // If you have authentication
      }),
    }
    
    const formData: FormData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('desc', desc);
    

    // console.log(formData);

    return this.http.post('https://bideew-2e4c9e77133a.herokuapp.com/api/zea1/add', formData, httpOptions).pipe(
      catchError((error) => {
        return throwError('Invalid credentials'); // Set your custom error message
      })
    );
  }

}
