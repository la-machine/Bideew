import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BigeventService } from 'src/app/service/bigevent.service';
import { FileService } from 'src/app/service/file.service';
import { PodcastService } from 'src/app/service/podcast.service';

@Component({
  selector: 'app-create-bigevent',
  templateUrl: './create-bigevent.component.html',
  styleUrls: ['./create-bigevent.component.scss']
})
export class CreateBigeventComponent {
  imageFile: File | null = null;
  title!: string;
  desc!: string;
  
  constructor(private eventService: BigeventService, private router: Router) {}
  onImageSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  // onAudioSelected(event: any) {
  //   this.audioFile = event.target.files[0];
  // }

  submitForm() {
    if (!this.imageFile) {
      console.error('Please select an image file.');
      return;
    }


    this.eventService.createEvent(this.title, this.desc, this.imageFile).subscribe(
      response => {
        // Handle the success response
        this.router.navigate(['/dashboard/index-bigevent'])
        console.log('Podcast created successfully!', response);
        // Optionally, you can reset the form here
      },
      error => {
        // Handle the error response
        console.error('Error creating podcast', error);
      }
    );
  }
}
