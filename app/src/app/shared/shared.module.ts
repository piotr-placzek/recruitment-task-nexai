import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FleetTableComponent } from './components/fleet-table/fleet-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { AddressPreviewComponent } from './components/address-preview/address-preview.component';
import { ButtonComponent } from './components/button/button.component';

const SharedComponents = [
  FleetTableComponent,
  CarDetailsComponent,
  AddressPreviewComponent,
  ButtonComponent,
];

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [...SharedComponents],
  exports: [...SharedComponents],
})
export class SharedModule {}
