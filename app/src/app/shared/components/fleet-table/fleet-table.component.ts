import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExtendedCarDetails } from '../../interfaces/extended-car-details.interface';

@Component({
  selector: 'app-fleet-table',
  templateUrl: './fleet-table.component.html',
})
export class FleetTableComponent {
  @Input() fleet!: ExtendedCarDetails[];
  @Output() removeCarClicked = new EventEmitter<string>()
}
