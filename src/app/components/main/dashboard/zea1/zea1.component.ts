import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Zea1Service } from 'src/app/service/zea1.service';

@Component({
  selector: 'app-zea1',
  templateUrl: './zea1.component.html',
  styleUrls: ['./zea1.component.scss']
})
export class Zea1Component {

  imageFile: File | null = null;
  title!: string;
  desc!: string;
  
  constructor(private zea1Service: Zea1Service, private router : Router) {}

  onImageSelected(event: any) {
    this.imageFile = event.target.files[0];
  }


  submitForm() {
    if (!this.imageFile) {
      console.error('Please select both an image and an audio file.');
      return;
    }

    this.zea1Service.createZEA1(this.title, this.desc, this.imageFile).subscribe(
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
