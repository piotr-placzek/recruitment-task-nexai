import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { ExtendedCarDetails } from 'src/app/shared/interfaces/extended-car-details.interface';

@Component({
  templateUrl: './fleet-preview.component.html',
})
export class FleetPreviewComponent implements OnInit {
    constructor(private readonly api: ApiService, private readonly router: Router) { }
    
  public fleet: ExtendedCarDetails[] = [
    {
      id: 'id',
      manufacturer: 'm',
      license: 'l',
      vin: 'v',
      rentedBy: 'r',
      currentPosition: {
        streetName: 'sn',
        buildingNumber: 'bn',
        zipCode: 'zc',
      },
      customerDetails: {
        id: '',
        firstName: 'fn',
        lastName: 'ln',
        email: 'em',
        address: {
          streetName: 'sn',
          buildingNumber: 'bn',
          zipCode: 'zc',
        },
      },
    },
    {
      id: 'id2',
      manufacturer: 'm',
      license: 'l',
      vin: 'v',
      rentedBy: null,
      currentPosition: {
        streetName: 'sn',
        buildingNumber: 'bn',
        zipCode: 'zc',
      },
    },
  ];

  async ngOnInit(): Promise<void> {
    try {
    } catch (error) {}
  }

  onAddClick() {
      this.router.navigate(['car-edit']);
  }

  onRemoveCar(id: string) {
    console.log(id);
  }
}
