import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
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
  rentedBy: string;
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
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: `http://${window.location.host}${environment.apiUrl}/`,
    });
  }

  async health(): Promise<string> {
    return this.axiosClient
      .get('health')
      .then((r) => r.data)
      .catch((e) => Promise.reject(this.errorHandler(e)));
  }

  async getManufacturers(): Promise<Manufacturer[]> {
    return this.axiosClient
      .get('fleet/manufacturers')
      .then((r) => r.data)
      .then((d) => d.json())
      .catch((e) => Promise.reject(this.errorHandler(e)));
  }

  async getFleet(): Promise<Required<CarDetails>[]> {
    return this.axiosClient
      .get('fleet')
      .then((r) => r.data)
      .then((d) => d.json())
      .catch((e) => Promise.reject(this.errorHandler(e)));
  }

  async putCar(carDetails: CarDetails): Promise<Required<CarDetails>> {
    return this.axiosClient
      .put('fleet', carDetails)
      .then((r) => r.data)
      .then((d) => d.json())
      .catch((e) => Promise.reject(this.errorHandler(e)));
  }

  async removeCar(id: string): Promise<void> {
    return this.axiosClient
      .delete('fleet', { params: { id } })
      .then((r) => r.data)
      .then((d) => d.json())
      .catch((e) => Promise.reject(this.errorHandler(e)));
  }

  async getCustomerDetails(id: string): Promise<CustomerDetails> {
    return this.axiosClient
      .delete('customers/details', { params: { id } })
      .then((r) => r.data)
      .then((d) => d.json())
      .catch((e) => Promise.reject(this.errorHandler(e)));
  }

  async getCarPosition(id: string): Promise<Tracking> {
    return this.axiosClient
      .delete('tracking', { params: { id } })
      .then((r) => r.data)
      .then((d) => d.json())
      .catch((e) => Promise.reject(this.errorHandler(e)));
  }

  private errorHandler(error: any) {
    return {
      code: error.code || -1,
      message: error.message || 'Unknown error',
    };
  }
}
