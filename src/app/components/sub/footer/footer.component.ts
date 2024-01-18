import { Component } from '@angular/core';
import { SubscribeRequest } from 'src/app/Class/SubscribeRequest';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  email!:string;

  constructor(private authService: AuthService){}

  submitForm(){
    
    const subscribe : SubscribeRequest = new SubscribeRequest();
    subscribe.email = this.email;
    console.log("This is the test  "+ subscribe.email);
    this.authService.addSubscriber(subscribe).subscribe( res =>{
      console.log(res);
    })
  }

}
