import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent implements OnInit{
  showPodcast = false;
  showEvent = false;
  showFlashback = false;
  showZeInside = false;
  isLoggedIn: any;
  role: any;
  showCitizenBoard: boolean = false;
  showLandRegistryBoard: boolean = false;
  showNotaryBoard: boolean = false;
  showSubdivisionalOfficerBoard: boolean = false;
  showAdminBoard: boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    console.log("showing loggin condition === ", this.isLoggedIn);
    if(this.isLoggedIn){
      const user = this.userService.getUserName();
      console.log("From the sidebar  ==== ", this.role);
      this.showCitizenBoard = (this.role == "Citizen");
      this.showLandRegistryBoard = (this.role == "LandRegistry");
      this.showNotaryBoard = (this.role == "Notary");
      this.showSubdivisionalOfficerBoard = (this.role == "SubdivisionalOfficer");
      this.showAdminBoard = (this.role == "Admin");
    }
    throw new Error('Method not implemented.');
  }

  showMenu = false;
  isSidebarOpen = false;
  isAdmin = false;
  constructor(private userService : UserService, private router:Router){}
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout(){
    this.userService.clear()
    this.router.navigate(['']);
  }

}
