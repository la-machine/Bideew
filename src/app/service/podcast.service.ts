import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { UserService } from './user.service';
import { PodcastResponse } from '../Class/PodcastResponse';
import { PodcastRequest } from '../Class/PodcastRequest';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private apiUrl = 'https://bideew-2e4c9e77133a.herokuapp.com/api/user'

  podcast:any=[];

  sendData : BehaviorSubject<any> = new BehaviorSubject<any>(this.podcast);

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
    console.log('Deleting podcast:', podcastTitle);
    return this.http.delete<any>(`${this.apiUrl}/delete/${podcastTitle}`);
  }

  sendPodcast(podcast:any){
    this.sendData.next(podcast);
  }

  loadPodcast(){
    return this.sendData.asObservable();
  }

}
