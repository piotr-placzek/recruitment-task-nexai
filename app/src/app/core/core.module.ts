import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../evironments/environment';
import { ApiService } from './api.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    ApiService,
  ],
})
export class CoreModule {}
