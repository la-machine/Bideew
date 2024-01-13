import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { PodcastRequest } from 'src/app/Class/PodcastRequest';
import { FileService } from 'src/app/service/file.service';
import { PodcastService } from 'src/app/service/podcast.service';


@Component({
  selector: 'app-create-podcast',
  templateUrl: './create-podcast.component.html',
  styleUrls: ['./create-podcast.component.scss']
})
export class CreatePodcastComponent {
  imageFile: File | null = null;
  audioFile: File | null = null;
  title!: string;
  desc!: string;
  
  constructor(private podcasService: PodcastService, private router : Router) {}
  onImageSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  onAudioSelected(event: any) {
    this.audioFile = event.target.files[0];
  }

  submitForm() {
    if (!this.imageFile || !this.audioFile) {
      console.error('Please select both an image and an audio file.');
      return;
    }
    // const formData = new PodcastRequest();
    // formData.desc=this.desc;
    // formData.title = this.title;
    // formData.img= this.imageFile;
    // formData.audio = this.podcast;

    // console.log(formData);

    this.podcasService.createPodcast(this.title, this.desc, this.imageFile, this.audioFile).subscribe(
      response => {
        // Handle the success response
        this.router.navigate(['/dashboard/index-podcast'])
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
