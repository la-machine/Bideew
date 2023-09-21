import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  componentToShow: string = "ze-a1";
  // activeLink: string = '';

  constructor(){}

  showComponent(componentToShow: string): void {
    // this.activeLink = componentToShow;
    this.componentToShow = componentToShow;
  }

}
