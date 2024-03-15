import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../evironments/environment';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: 'BASE_API_URL', useValue: environment.apiUrl }],
})
export class CoreModule {}
