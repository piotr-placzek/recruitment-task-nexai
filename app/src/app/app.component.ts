import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { DefaultService } from 'typescript-angular-nexai-rt-api-client'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  title = 'nexai-rt';
}
