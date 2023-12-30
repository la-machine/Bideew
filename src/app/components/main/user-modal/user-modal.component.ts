import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  @Input() isModalOpen = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  username = ''; // Add other form fields as needed

  close() {
    this.closeModalEvent.emit();
  }

  onSubmit() {
    this.close();
  }
}
