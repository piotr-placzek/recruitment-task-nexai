import { Component, Input } from '@angular/core';
import { Address } from 'src/app/core/api.service';

@Component({
  selector: 'app-address-preview',
  templateUrl: './address-preview.component.html',
})
export class AddressPreviewComponent {
  @Input() address!: Address;
}
