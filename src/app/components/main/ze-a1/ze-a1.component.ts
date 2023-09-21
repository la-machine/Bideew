import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ze-a1',
  templateUrl: './ze-a1.component.html',
  styleUrls: ['./ze-a1.component.scss']
})
export class ZeA1Component {

  @Output() contactusEvent = new EventEmitter();

}
