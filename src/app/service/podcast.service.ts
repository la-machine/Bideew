import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserService } from './user.service';
import { PodcastResponse } from '../Class/PodcastResponse';
import { PodcastRequest } from '../Class/PodcastRequest';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private apiUrl = 'https://bideew-2e4c9e77133a.herokuapp.com/api/user'

  constructor(private http: HttpClient, private userservice: UserService) { }

  createPodcast(title: string, desc: string, image: File, audio: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        // "Content-Type": " application/json",
        "Authorization": "Bearer " + this.userservice.getAuthToken(), // If you have authentication
      }),
    }
    
    const formData: FormData = new FormData();
    formData.append('image', image);
    formData.append('audio', audio);
    formData.append('title', title);
    formData.append('desc', desc);
    

    // console.log(formData);

    return this.http.post('https://bideew-2e4c9e77133a.herokuapp.com/api/user/addpodcast', formData, httpOptions).pipe(
      catchError((error) => {
        return throwError('Invalid credentials'); // Set your custom error message
      })
    );
  }

  getPodcast(podcastTitle:string){
    return this.http.get(`${this.apiUrl}/find/${podcastTitle}`).pipe();
  }

  getAllPodcasts() {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer " + this.userservice.getAuthToken(), // If you have authentication
    //   }),
    // }

    return this.http.get<PodcastResponse[]>('https://bideew-2e4c9e77133a.herokuapp.com/api/user/podcasts').pipe();
  }

  deletePodcast(podcastTitle: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${podcastTitle}`);
  }


  // *#9900#, *#2663 , *#12580*369#
}
