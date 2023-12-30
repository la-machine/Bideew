import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showMenu = false;
  
  @Output() zeA1 = new EventEmitter();
  @Output() flashBack = new EventEmitter();
  @Output() podcast = new EventEmitter();
  @Output() contactusEvent = new EventEmitter();
  @Output() theInside = new EventEmitter();
  @Output() bigEvents = new EventEmitter();

  activeLink: string ='';

  toogleNav = ()=>{
    if (document.getElementById("nav")?.classList.contains("slide-in")){
        document.getElementById("nav")?.classList.remove("slide-in")
        document.getElementById("nav")?.classList.add("slide-out")
    }
    else{
      document.getElementById("nav")?.classList.remove("slide-out")
      document.getElementById("nav")?.classList.add("slide-in")
    }
  }


}
