import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable, catchError, throwError } from 'rxjs';
import { BigEventResponse } from '../Class/BigEventResponse';

@Injectable({
  providedIn: 'root'
})
export class BigeventService {

  private apiUrl = 'https://bideew-c7865089e3a7.herokuapp.com/api/user'

  constructor(private http: HttpClient, private userservice: UserService) { }

  createEvent(title: string, desc: string, image: File) {
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

    return this.http.post('https://bideew-c7865089e3a7.herokuapp.com/api/bigevent/addEvent', formData, httpOptions).pipe();
  }

  getBigevent(podcastTitle:string){
    return this.http.get(`${this.apiUrl}/find/${podcastTitle}`).pipe();
  }

  getAllEvents() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer " + this.userservice.getAuthToken(), // If you have authentication
    //   }),
    // }

    return this.http.get<BigEventResponse[]>('https://bideew-c7865089e3a7.herokuapp.com/api/bigevent/all').pipe();
  }

  deleteEvent(podcastTitle: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${podcastTitle}`);
  }
}
