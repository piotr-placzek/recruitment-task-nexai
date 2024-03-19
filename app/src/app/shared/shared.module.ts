import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AddressPreviewComponent } from './components/address-preview/address-preview.component';
import { ButtonComponent } from './components/button/button.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FleetTableComponent } from './components/fleet-table/fleet-table.component';
import { ConfirmationDialog } from './dialogs/confimation-dialog/confirmation-dialog.component';

const SharedComponents = [
  AddressPreviewComponent,
  ButtonComponent,
  CarDetailsComponent,
  FleetTableComponent,
  ConfirmationDialog,
];

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [...SharedComponents],
  exports: [...SharedComponents],
})
export class SharedModule {}
