import { Component, OnInit } from '@angular/core';
import { PodcastService } from 'src/app/service/podcast.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{

  podcastResponse: any;
  showFullContent: boolean = false;

  constructor(private podcastService: PodcastService){}
  ngOnInit(): void {
    this.getDetails();
    console.log("Showing Podcast description " + this.podcastResponse.desc)
  }

  getDetails(){
    this.podcastResponse = this.podcastService.loadPodcast();
  }

}
