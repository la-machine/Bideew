import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private timeoutId: any;
  private timeoutDuration: number = 60000; // Timeout duration in milliseconds (e.g., 1 minute)
  public userLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.resetTimeout();
  }

  resetTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.userLoggedIn.next(false); // Emit false to indicate logout
    }, this.timeoutDuration);
  }

  onUserAction() {
    this.resetTimeout(); // Reset the timeout on user action (e.g., request)
  }
}
