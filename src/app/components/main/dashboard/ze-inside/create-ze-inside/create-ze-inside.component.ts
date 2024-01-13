import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZeinsideService } from 'src/app/service/zeinside.service';

@Component({
  selector: 'app-create-ze-inside',
  templateUrl: './create-ze-inside.component.html',
  styleUrls: ['./create-ze-inside.component.scss']
})
export class CreateZeInsideComponent {
  imageFile: File | null = null;
  audioFile: File | null = null;
  videoFile: File | null = null;
  title!: string;
  desc!: string;
  
  constructor(private interviewService: ZeinsideService, private router : Router) {}
  onImageSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  onAudioSelected(event: any) {
    this.audioFile = event.target.files[0];
  }

  onVideoSelected(event: any) {
    this.videoFile = event.target.files[0];
  }

  submitForm() {
    if (!this.imageFile || !this.audioFile || !this.videoFile) {
      console.error('Please select both an image audio and video file.');
      return;
    }

    this.interviewService.createInterview(this.title, this.desc, this.imageFile, this.audioFile, this.videoFile).subscribe(
      response => {
        // Handle the success response
        this.router.navigate(['/dashboard/index-zeinside'])
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
