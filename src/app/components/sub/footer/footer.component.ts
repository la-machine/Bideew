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
    console.log("This is the test  "+ this.email);
    const subcribe : SubscribeRequest = new SubscribeRequest();
    this.authService.addSubscriber(this.email).subscribe( res =>{
      console.log(res);
    })
  }

}
