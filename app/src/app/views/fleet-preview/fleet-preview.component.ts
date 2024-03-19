import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService, CarDetails } from 'src/app/core/api.service';

@Component({
  templateUrl: './fleet-preview.component.html',
})
export class FleetPreviewComponent implements OnInit, OnDestroy {
  public fleet: CarDetails[] = [];

  private subscriptions = new Subscription();

  constructor(
    private readonly api: ApiService,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscriptions.add(
      this.api.getFleet().subscribe((data) => this.fleetHandler(data))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onAddClick() {
    this.router.navigate(['car-edit']);
  }

  onRemoveCar(id: string) {
    console.log(id);
  }

  private fleetHandler(fleet: Required<CarDetails[]>): void {
    this.fleet = fleet;
  }
}
