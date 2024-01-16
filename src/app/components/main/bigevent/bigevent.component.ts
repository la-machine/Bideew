import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BigeventService } from 'src/app/service/bigevent.service';

const fileUrl = 'https://bideew-c7865089e3a7.herokuapp.com/api/files'

@Component({
  selector: 'app-bigevent',
  templateUrl: './bigevent.component.html',
  styleUrls: ['./bigevent.component.scss']
})
export class BigeventComponent implements OnInit {

  allEvents : any[] = [];

  constructor(private eventService: BigeventService, 
    private cdr: ChangeDetectorRef, private route : Router) {}
  ngOnInit(): void {
    this.loadEvents;
  }

  loadEvents() {
    // Call your PodcastService to get the list of podcasts
    this.eventService.getAllEvents().subscribe(
      data => {
        this.allEvents = data.map(podcast => ({
          ...podcast,
          img: `${fileUrl}/${podcast.img}`,
          
        }));
        this.cdr.detectChanges();
        console.log("Loading resources ===  " + this.allEvents);
      },
      error => {
        console.error('Error loading podcasts', error);
      }
    );
  }

}
