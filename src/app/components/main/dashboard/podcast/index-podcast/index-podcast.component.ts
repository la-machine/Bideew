import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PodcastService } from 'src/app/service/podcast.service';

@Component({
  selector: 'app-index-podcast',
  templateUrl: './index-podcast.component.html',
  styleUrls: ['./index-podcast.component.scss']
})
export class IndexPodcastComponent implements AfterViewInit{
  playAudio(arg0: any) {
  throw new Error('Method not implemented.');
  }

  allPodcasts: any= [];

  getImageUrl(imgData: any): string {
    const blob = new Blob([imgData], { type: 'image/jpeg' }); // Change the type based on your image type
    return URL.createObjectURL(blob);
  }

  getAudioUrl(audioData: any): string {
    const blob = new Blob([audioData], { type: 'audio/mpeg' }); // Change the type based on your audio type
    return URL.createObjectURL(blob);
  }

  constructor(private podcastService: PodcastService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.loadPodcasts();
  }

  loadPodcasts() {
    // Call your PodcastService to get the list of podcasts
    this.podcastService.getAllPodcasts().subscribe(
      data => {
        this.allPodcasts = data;
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error loading podcasts', error);
      }
    );
  }

}
