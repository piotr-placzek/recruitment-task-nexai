import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExtendedCarDetails } from '../../interfaces/extended-car-details.interface';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
})
export class CarDetailsComponent {
  @Input() carDetails!: ExtendedCarDetails;
  @Output() removeClicked = new EventEmitter<string>();
}
