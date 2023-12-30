// podcast-response.model.ts

export class PodcastResponse {
    title: string;
    desc: string;
    img: string; // Assuming it's a base64-encoded image string
    audio: string; // Assuming it's a base64-encoded audio string
  
    constructor(title: string, desc: string, img: string, audio: string) {
      this.title = title;
      this.desc = desc;
      this.img = img;
      this.audio = audio;
    }
  }
  