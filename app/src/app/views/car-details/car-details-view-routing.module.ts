import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarEditViewComponent } from './car-details-edit/car-details-view.component';

const routes: Routes = [
  {
    path: 'add',
    component: CarEditViewComponent,
  },
  {
    path: 'edit/:id',
    component: CarEditViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarDetailsViewRoutingModule {}
