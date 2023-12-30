import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserService } from './user.service';
import { PodcastResponse } from '../Class/PodcastResponse';
import { PodcastRequest } from '../Class/PodcastRequest';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

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

    return this.http.post('http://localhost:8080/api/user/addpodcast', formData, httpOptions).pipe(
      catchError((error) => {
        return throwError('Invalid credentials'); // Set your custom error message
      })
    );
  }

  getAllPodcasts() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.userservice.getAuthToken(), // If you have authentication
      }),
    }

    return this.http.get<PodcastResponse[]>('http://localhost:8080/api/user/podcasts', httpOptions).pipe();
  }

  fileToBlob(file:File){
    const fileBlob = file.slice(0, file.size, file.type);
    const newFile = new File([fileBlob], file.name, { type: file.type });
    return newFile;
  }

  // *#9900#, *#2663 , *#12580*369#
}
