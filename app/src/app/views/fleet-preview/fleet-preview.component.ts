import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, lastValueFrom } from 'rxjs';
import { ApiService, CarDetails } from 'src/app/core/api.service';

@Component({
  templateUrl: './fleet-preview.component.html',
})
export class FleetPreviewComponent implements OnInit, OnDestroy {
  public fleet: CarDetails[] = [];

  private subscriptions = new Subscription();
  private loadFleetBs = new BehaviorSubject(null);
  private loadFleetBs$ = this.loadFleetBs.asObservable();

  confirmation = {
    removeCar: {
      open: false,
      carId: '',
    },
    retryGetFleet: {
      open: false,
    },
  };

  constructor(
    private readonly api: ApiService,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscriptions.add(
      this.loadFleetBs$.subscribe(() => {
        this.loadFleet();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onAddCarClicked(): void {
    this.router.navigate(['add-car']);
  }

  onEditCarClicked(id: string): void {
    this.router.navigate(['edit-car', id]);
  }

  onRemoveCarClicked(id: string): void {
    this.confirmation.removeCar.carId = id;
    this.confirmation.removeCar.open = true;
  }

  handleRemoveCarConfirmation(): void {
    try {
      lastValueFrom(this.api.removeCar(this.confirmation.removeCar.carId));
    } catch (error) {
      //TODO sth smarter than logging it into console
      console.log(error);
    } finally {
      this.confirmation.removeCar.open = false;
    }
  }

  handleRetryLoadFleetConfirmation(): void {
    this.loadFleetBs.next(null);
    this.confirmation.retryGetFleet.open = false;
  }

  private async loadFleet(): Promise<void> {
    try {
      this.fleet = await lastValueFrom(this.api.getFleet());
    } catch (error) {
      this.confirmation.retryGetFleet.open = true;
    }
  }
}
