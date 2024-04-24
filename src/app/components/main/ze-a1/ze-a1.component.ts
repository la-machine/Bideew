import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PodcastService } from 'src/app/service/podcast.service';

const fileUrl = 'https://bideew-2e4c9e77133a.herokuapp.com/api/files'

@Component({
  selector: 'app-ze-a1',
  templateUrl: './ze-a1.component.html',
  styleUrls: ['./ze-a1.component.scss']
})
export class ZeA1Component implements OnInit{
  podcastResponses: any[] = [];
  latestPodcast:any;
  showFullContent: boolean = false;

  constructor(private podcastService: PodcastService, private route: Router) { }

  ngOnInit(){
    this.getPodcast();
    console.log("displaying the last podcast " + this.latestPodcast.desc)
  }

  getPodcast() {

    this.podcastService.getAllPodcasts().subscribe(
      (response) => {
        this.podcastResponses = response.map(podcast => ({
          ...podcast,
          img: `${fileUrl}/${podcast.img}`,
          audio: `${fileUrl}/${podcast.audio}`,

        }))
        let latestTicketId = 0;
        this.podcastResponses.forEach(podcast => {
          
          if (podcast.evenType==="Podcast" && podcast.id>latestTicketId) {
            this.latestPodcast=podcast;
            console.log("testing loop"+ podcast.desc);
            latestTicketId = podcast.id;
          }
          console.log("testing loop before condition \n"+ podcast.desc);
          console.log(podcast.audio);
          console.log("image ", podcast.img);
        });
      },
      (error) => {
        console.error('Error fetching podcast:', error);
        // Handle error, e.g., show an error message or log
      }
    );
  }

  openAgency(agencyName:any){
    console.log(agencyName);
    this.podcastService.sendPodcast(agencyName);
    this.route.navigate(['/content'])
  }

}

