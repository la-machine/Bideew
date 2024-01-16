import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-back',
  templateUrl: './flash-back.component.html',
  styleUrls: ['./flash-back.component.scss']
})
export class FlashBackComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  flashbacks : any[] = [];
}
