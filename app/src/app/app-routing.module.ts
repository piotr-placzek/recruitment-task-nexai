import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetPreviewComponent } from './views/fleet-preview/fleet-preview.component';

const routes: Routes = [
  {
    path: '',
    component: FleetPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
