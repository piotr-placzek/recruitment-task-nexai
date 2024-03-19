import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { DefaultService } from 'lib/openapi';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly ts: TestService,
  // private readonly apiGateway: DefaultService
  ) { }
  
  title = 'nexai-rt';

  async ngOnInit() {
    console.log('init')
    console.log(await this.ts.healtz());
  }
}
