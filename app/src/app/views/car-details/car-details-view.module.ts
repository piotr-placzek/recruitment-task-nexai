import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarEditViewComponent } from './car-details-edit/car-details-view.component';
import { CarDetailsViewRoutingModule } from './car-details-view-routing.module';

@NgModule({
  declarations: [CarEditViewComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    CarDetailsViewRoutingModule,
  ],
})
export class CarDetailsViewModule {}
