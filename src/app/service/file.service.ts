import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, ReplaySubject } from 'rxjs';
import { FileHandle } from '../Class/File-handle';
import { PodcastRequest } from '../Class/PodcastRequest';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private sanitizer:DomSanitizer) { }
  
  // JavaScript function to encode the selected file to base64
// public encodeFileToBase64(file : File) {
//   // Ensure a file is selected
//     // Get the selected file
//     const selectedFile = file;

//     // Create a FileReader
//     const reader = new FileReader();
    
//     // Set up the FileReader to read the file as Data URL (base64)
//     reader.readAsDataURL(selectedFile);

//     // Define the callback for when the file is loaded
//     reader.onload = function () {
//       const resultString = reader.result as string;
//       if (resultString) { // Add null check
//         const base64String = resultString.split(',')[1];
//         const imageType = selectedFile.type;
//          const imageBlob=this.dataURItoBlob(base64String,imageType);

//         // Further processing with the blob...
//       } else {
//         console.error('FileReader result is null.');
//       }
//     };
//     // Define the callback for any errors that occur during reading
//     reader.onerror = function (error) {
//       console.error('Error reading the file:', error);
//     };
//   }


  public dataURItoBlob(picBytes: string,imageType: any){
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i =0; i <byteString.length; i++ ){
       int8Array[i] = byteString.charCodeAt(i);
    }  
    const blob=new Blob([int8Array],{type:imageType});
    return blob;
  }
  
}