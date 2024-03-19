import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialog {
  @Input() open = false;
  @Input() title = 'Confirmation dialog';
  @Input() content = 'Message';

  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();

  handleCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }

  handleConfirmClick(event: Event) {
    event.preventDefault();
    this.confirm.emit();
  }
}
