import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../evironments/environment';

export interface Address {
  streetName: string;
  buildingNumber: string;
  zipCode: string;
}

export interface CarDetails {
  id?: string;
  manufacturer: string;
  license: string;
  vin: string;
  rentedBy: CustomerDetails | null;
  position: Tracking;
}

export interface Manufacturer {
  manufacturer: string;
}

export interface Tracking {
  carId: string;
  address: Address;
  lastUpdate: Date;
}

export interface CustomerDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = `http://${window.location.host}${environment.apiUrl}/`;

  constructor(private readonly http: HttpClient) {}

  health(): Observable<string> {
    return this.http.get<string>(this.BASE_URL + 'health');
  }

  getFleet(): Observable<Required<CarDetails>[]> {
    return this.http.get<Required<CarDetails>[]>(this.BASE_URL + 'fleet');
  }

  putCar(carDetails: CarDetails): Observable<Required<CarDetails>> {
    return this.http.put<Required<CarDetails>>(
      this.BASE_URL + 'fleet',
      carDetails
    );
  }

  removeCar(id: string): Observable<unknown> {
    return this.http.delete(this.BASE_URL + 'fleet', { params: { id } });
  }
}
