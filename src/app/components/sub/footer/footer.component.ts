import { Component } from '@angular/core';
import { SubscribeRequest } from 'src/app/Class/SubscribeRequest';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  email!: string;

  successMessage: string | null = null; // Track success message


  constructor(private authService: AuthService){}

  submitForm(){
    console.log("This is the test  "+ this.email);
    this.authService.addSubscriber(this.email).subscribe( res =>{
      console.log(res);
      this.successMessage = 'Subscription successful!';
          setTimeout(() => {
            this.reloadPage();
          }, 2000);
    })
  }

  reloadPage() {
    window.location.reload();
  }

}
