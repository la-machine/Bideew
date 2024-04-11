import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showMenu = false;

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
