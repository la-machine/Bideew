import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PodcastService } from 'src/app/service/podcast.service';

const fileUrl = 'https://bideew-2e4c9e77133a.herokuapp.com/api/files'

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

  constructor(private podcastService: PodcastService, 
    private cdr: ChangeDetectorRef, private route : Router) {}

  ngAfterViewInit() {
    this.loadPodcasts();
  }
  
  loadPodcasts() {
    // Call your PodcastService to get the list of podcasts
    this.podcastService.getAllPodcasts().subscribe(
      data => {
        this.allPodcasts = data.map(podcast => ({
          ...podcast,
          img: `${fileUrl}/${podcast.img}`,
          audio: `${fileUrl}/${podcast.audio}`,
          
        }));
        this.cdr.detectChanges();
        console.log("Loading resources ===  " + this.allPodcasts);
      },
      error => {
        console.error('Error loading podcasts', error);
      }
    );
  }

  
  editPodcast(title: string): void {
    this.route.navigate(['/dashboard/edit-podcast', title])
  }

  deletePodcast(podcastTitle: string): void {
    // const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    //   width: '300px',
    //   data: { message: 'Are you sure you want to delete this podcast?' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.podcastService.deletePodcast(podcastTitle).subscribe(
    //       () => {
    //         // Podcast deleted successfully, reload data
    //         this.loadPodcasts();
    //       },
    //       (error) => {
    //         console.error('Error deleting podcast:', error);
    //         // Handle error, show a message, etc.
    //       }
    //     );
    //   }
    // });
  }

}
