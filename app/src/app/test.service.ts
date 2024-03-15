import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TestService {
  constructor(private readonly http: HttpClient) {}

  healtz() {
    return lastValueFrom(this.http.get('/api'));
  }
}
