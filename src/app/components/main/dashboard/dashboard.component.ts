import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.sessionService.userLoggedIn.subscribe((loggedIn) => {
      if (!loggedIn) {
        // Perform logout actions (e.g., clear cache, navigate to login page)
        localStorage.clear(); // Clear local storage
        this.router.navigate(['/login']); // Navigate to login page
      }
    });
  }

}

