import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetPreviewComponent } from './views/fleet-preview/fleet-preview.component';

const routes: Routes = [
  {
    path: '',
    component: FleetPreviewComponent,
  },
  {
    path: 'add-car',
    loadChildren: () =>
      import('./views/car-edit-view/car-edit-view.module').then(
        (m) => m.CarEditViewModule
      ),
  },
  {
    path: 'edit-car/:id',
    loadChildren: () =>
      import('./views/car-edit-view/car-edit-view.module').then(
        (m) => m.CarEditViewModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
