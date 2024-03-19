import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() additionalClasses =
    'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50';
}
