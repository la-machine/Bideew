import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  email!: string;
  name!: string;
  message!: string;

  constructor(private authService: AuthService){}

  onSubmitForm(){
    console.log("testing ", this.email);
    this.authService.sendMessage(this.name, this.email, this.message).subscribe( res => {
      console.log("responding to contact" , res);
      setTimeout(() => {
        this.reloadPage();
      }, 2000);
    });

  }

  reloadPage() {
    window.location.reload();
  } 

}
