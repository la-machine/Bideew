import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmationmodal',
  template: `
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded-lg shadow-lg">
      <p class="mb-4">{{ message }}</p>
      <div class="flex justify-end">
        <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2" (click)="confirm.emit()">Yes</button>
        <button class="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded" (click)="cancel.emit()">No</button>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./confirmationmodal.component.scss']
})
export class ConfirmationmodalComponent {
  @Input() message!: string;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

}
