import { Component, OnInit } from '@angular/core';
import { ZeinsideService } from 'src/app/service/zeinside.service';

const fileUrl = 'https://bideew-2e4c9e77133a.herokuapp.com/api/files'

@Component({
  selector: 'app-the-inside',
  templateUrl: './the-inside.component.html',
  styleUrls: ['./the-inside.component.scss']
})
export class TheInsideComponent implements OnInit{
 allInterviews: any[]=[];

 constructor(private interviewService: ZeinsideService) {}

 showIframe = false;

  openVideoInIframe() {
    this.showIframe = true;
  }

  ngOnInit() {
    this.getPodcast();
  }

  getPodcast() {
    this.interviewService.getAllInterviews().subscribe(
      (response) => {
        this.allInterviews = response.map(podcast => ({
          ...podcast,
          img: `${fileUrl}/${podcast.img}`,
          audio: `${fileUrl}/${podcast.audio}`,
          video: `${fileUrl}/${podcast.video}`,
          
        }))
        // this.podcastResponses.forEach(podcast => {
        //   console.log(podcast.audio);
        //   console.log("image ",podcast.img);
        // });
      },
      (error) => {
        console.error('Error fetching podcast:', error);
        // Handle error, e.g., show an error message or log
      }
    );
  }
}
