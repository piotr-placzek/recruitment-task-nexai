import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDetails } from 'src/app/core/api.service';

@Component({
  selector: 'app-fleet-table',
  templateUrl: './fleet-table.component.html',
})
export class FleetTableComponent {
  @Input() fleet!: CarDetails[];
  @Output() removeCarClicked = new EventEmitter<string>();
  @Output() editCarClicked = new EventEmitter<string>();
}
