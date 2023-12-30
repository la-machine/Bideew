import { Component } from '@angular/core';
import { Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/Class/AuthRequest';
import { AuthResponse } from 'src/app/Class/AuthResponse';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.nonNullable.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });
  errorMessage = '';
  
  constructor(private fb: FormBuilder,private authService:AuthService,
    private userAuthRespone : UserService, private router:Router){}


  onSubmit(): void{
    console.log('SUBMIT: ', this.form.value);
    const {email, password} = this.form.getRawValue();
    let authUser : AuthRequest = new AuthRequest();
    
    authUser.email = email;
    authUser.password = password;
    this.authService.login(authUser).subscribe((res: any)=> {
			this.userAuthRespone.setAuthToken(res.token);
      console.log(res);
      // user.firstName = res.firstName;
      // user.role = res.role;
      let user : AuthResponse = new AuthResponse(res.firstName,res.email,res.token);
      this.userAuthRespone.setAuthUser(user);
      this.userAuthRespone.setAuthToken(res.token);
      console.log(res.token);
        this.router.navigate(['dashboard']);     
		},
      (error) => {
        this.errorMessage = error;
    });
  }

}
