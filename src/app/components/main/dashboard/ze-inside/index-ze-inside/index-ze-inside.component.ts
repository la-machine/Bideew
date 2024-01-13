import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZeinsideService } from 'src/app/service/zeinside.service';

const fileUrl = 'https://bideew-c7865089e3a7.herokuapp.com/api/files'

@Component({
  selector: 'app-index-ze-inside',
  templateUrl: './index-ze-inside.component.html',
  styleUrls: ['./index-ze-inside.component.scss']
})
export class IndexZeInsideComponent {
  allInterview: any= [];

  constructor(private interviewService: ZeinsideService, private cdr: ChangeDetectorRef, private route : Router) {}

  ngAfterViewInit() {
    this.loadPodcasts();
  }

  loadPodcasts() {
    // Call your PodcastService to get the list of podcasts
    this.interviewService.getAllInterviews().subscribe(
      data => {
        this.allInterview = data.map(interview => ({
          ...interview,
          img: `${fileUrl}/${interview.img}`,
          audio: `${fileUrl}/${interview.audio}`,
          
        }));
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error loading podcasts', error);
      }
    );
  }

  editPodcast(podcastId: number): void {
    // Handle edit functionality, e.g., navigate to edit page with podcastId
    // You can use Angular Router to navigate to the edit page
    // Example: this.router.navigate(['/edit', podcastId]);
  }

  deletePodcast(podcastId: number): void {
    // Handle delete functionality, e.g., show confirmation modal
    // and then call a service method to delete the podcast
  }
}
