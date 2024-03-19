import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetPreviewComponent } from './views/fleet-preview/fleet-preview.component';

const routes: Routes = [
  {
    path: '',
    component: FleetPreviewComponent,
  },
  {
    path: 'car/details',
    loadChildren: () =>
      import('./views/car-details/car-details-view.module').then(
        (m) => m.CarDetailsViewModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
