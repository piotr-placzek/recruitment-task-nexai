import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from './core/api.service';
// import { DefaultService } from 'typescript-angular-nexai-rt-api-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    // private readonly api: DefaultService
    private readonly api: ApiService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  title = 'nexai-rt';

  async ngOnInit(): Promise<void> {
    // const apiHealth = await lastValueFrom(this.api.appControllerHealth());
    // This is my first attempt to use openapi generated client
    // Unfortunately it provides some errors and I need to create own service for this recruitment task
    console.log('API:', await lastValueFrom(this.api.health()));
  }
}
