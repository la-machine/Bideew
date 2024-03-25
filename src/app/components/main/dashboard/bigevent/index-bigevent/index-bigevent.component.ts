import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BigeventService } from 'src/app/service/bigevent.service';

const fileUrl = 'https://bideew-2e4c9e77133a.herokuapp.com/api/files'

@Component({
  selector: 'app-index-bigevent',
  templateUrl: './index-bigevent.component.html',
  styleUrls: ['./index-bigevent.component.scss']
})
export class IndexBigeventComponent {
  
    allPodcasts: any= [];
  
    constructor(private eventService: BigeventService, 
      private cdr: ChangeDetectorRef, private route : Router) {}
  
    ngAfterViewInit() {
      this.loadPodcasts();
    }
    
    loadPodcasts() {
      // Call your PodcastService to get the list of podcasts
      this.eventService.getAllEvents().subscribe(
        data => {
          this.allPodcasts = data.map(podcast => ({
            ...podcast,
            img: `${fileUrl}/${podcast.img}`,
            
          }));
          this.cdr.detectChanges();
          console.log("Loading resources ===  " + this.allPodcasts.im);
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
     
    }
}
