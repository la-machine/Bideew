import { Component, OnInit } from '@angular/core';
import { PodcastResponse } from 'src/app/Class/PodcastResponse';
import { PodcastService } from 'src/app/service/podcast.service';

const fileUrl = 'https://bideew-2e4c9e77133a.herokuapp.com/api/files'

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  podcastResponses: any[] = [];

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    this.getPodcast();
  }

  getPodcast() {
    this.podcastService.getAllPodcasts().subscribe(
      (response) => {
        this.podcastResponses = response.map(podcast => ({
          ...podcast,
          img: `${fileUrl}/${podcast.img}`,
          audio: `${fileUrl}/${podcast.audio}`,
          
        }))
        this.podcastResponses.forEach(podcast => {
          console.log(podcast.audio);
          console.log("image ",podcast.img);
        });
      },
      (error) => {
        console.error('Error fetching podcast:', error);
        // Handle error, e.g., show an error message or log
      }
    );
  }
}
