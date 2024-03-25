import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { catchError, throwError } from 'rxjs';
import { ZeinsideResponse } from '../Class/ZeinsideResponse';

@Injectable({
  providedIn: 'root'
})
export class ZeinsideService {

  constructor(private http: HttpClient, private userservice: UserService) { }
  
  createInterview(title: string, desc: string, image: File, audio: File, video: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        // "Content-Type": " application/json",
        "Authorization": "Bearer " + this.userservice.getAuthToken(), // If you have authentication
      }),
    }
    
    const formData: FormData = new FormData();
    formData.append('image', image);
    formData.append('audio', audio);
    formData.append('video', video);
    formData.append('title', title);
    formData.append('desc', desc);
    

    // console.log(formData);

    return this.http.post('https://bideew-2e4c9e77133a.herokuapp.com/api/zeinside/addInterview', formData, httpOptions).pipe(
      catchError((error) => {
        return throwError('Invalid credentials'); // Set your custom error message
      })
    );
  }

  // getPodcast(podcastTitle:string){
  //   return this.http.get(`${this.apiUrl}/find/${podcastTitle}`).pipe();
  // }

  getAllInterviews() {

    return this.http.get<ZeinsideResponse[]>('https://bideew-2e4c9e77133a.herokuapp.com/api/zeinside/all').pipe();
  }

  // deletePodcast(podcastTitle: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/delete/${podcastTitle}`);
  // }
}
