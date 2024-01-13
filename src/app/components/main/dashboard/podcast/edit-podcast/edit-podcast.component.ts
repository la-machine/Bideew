import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/service/file.service';
import { PodcastService } from 'src/app/service/podcast.service';

@Component({
  selector: 'app-edit-podcast',
  templateUrl: './edit-podcast.component.html',
  styleUrls: ['./edit-podcast.component.scss']
})
export class EditPodcastComponent implements OnInit{
  imageFile: File | null = null;
  audioFile: File | null = null;
  title!: string;
  desc!: string;
  podcastTitle! : string;
  podcastData:any;
  
  constructor(private podcasService: PodcastService, private route : ActivatedRoute) {}
  ngOnInit(): void {
    const podcast = this.route.snapshot.paramMap.get('title');
    console.log("Testing title ", podcast);
    if (podcast !== null) {
      this.podcasService.getPodcast(this.podcastTitle).subscribe(res =>{
        this.podcastData=res;
      },error => {
        console.log("Error could not found this podcast",error);
      })
    }
    throw new Error('Method not implemented.');
  }
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

    this.podcasService.createPodcast(this.title, this.desc, this.imageFile, this.audioFile).subscribe(
      response => {
        // Handle the success response
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
