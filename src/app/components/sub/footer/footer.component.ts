import { Component } from '@angular/core';
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
    this.authService.addSubscriber(this.email).subscribe( res =>{
      console.log(res);
    })
  }

}
