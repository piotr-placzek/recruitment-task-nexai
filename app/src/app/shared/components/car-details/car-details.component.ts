import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDetails } from 'src/app/core/api.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
})
export class CarDetailsComponent {
  @Input() carDetails!: CarDetails;
  @Output() removeClicked = new EventEmitter<string>();
}
