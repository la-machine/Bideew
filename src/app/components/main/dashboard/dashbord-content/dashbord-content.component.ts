import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashbord-content',
  templateUrl: './dashbord-content.component.html',
  styleUrls: ['./dashbord-content.component.scss']
})
export class DashbordContentComponent implements OnInit, OnDestroy{
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  allUsers: any = [];

  constructor (private authService:AuthService ){}

  ngOnInit():void{
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10, // Specify the number of rows to show per page
      responsive: true,
      searching: true, // Enable or disable search bar
      lengthChange: true, // Enable or disable the dropdown indicating the number of items to show
    };
    this.users();
  }


  users(){
   this.authService.getUsers().subscribe((response) =>{
    this.allUsers = response;
    this.dtTrigger.next(null);
   });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
