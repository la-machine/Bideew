import { Component } from '@angular/core';
import { PodcastService } from 'src/app/service/podcast.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  podcastResponse: any;
  showFullContent: boolean = false;

  constructor(private podcastService: PodcastService){}

  getDetails(){
    this.podcastResponse = this.podcastService.loadPodcast();
  }

}
