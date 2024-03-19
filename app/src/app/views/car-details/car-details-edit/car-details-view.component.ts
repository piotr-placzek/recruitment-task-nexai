import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, lastValueFrom } from 'rxjs';
import { ApiService, CarDetails } from 'src/app/core/api.service';
import { FormDataType as CarDetailsFormData } from 'src/app/shared/components/car-details-form/car-details-form.component';

@Component({
  selector: 'app-car-detail-view',
  templateUrl: './car-details-view.component.html',
})
export class CarEditViewComponent implements OnInit, OnDestroy {
  carId?: string;
  carDetails: CarDetails | CarDetailsFormData | null = null;
  private subscriptions = new Subscription();
  private getCarDetailsSub = new Subject<string | undefined>();
  private getCarDetailsSub$ = this.getCarDetailsSub.asObservable();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location,
    private readonly api: ApiService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.getCarDetailsSub$.subscribe((id: string | undefined) =>
        this.getCarDetails(id)
      )
    );
    this.subscriptions.add(
      this.route.params.subscribe(async (params) => {
        this.getCarDetailsSub.next(params['id']);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  async onSubmit(formValue: CarDetailsFormData): Promise<void> {
    try {
      await lastValueFrom(
        this.api.putCar({
          manufacturer: formValue.manufacturer,
          license: formValue.license,
          vin: formValue.vin,
          id: this.carId,
        })
      );
      this.router.navigate(['/']);
    } catch (error) {
      //TODO sth smarter than logging it into console
      console.log(error);
    }
  }

  onCancel(): void {
    this.location.back();
  }

  private async getCarDetails(id?: string): Promise<void> {
    this.carId = id;
    this.carDetails = id
      ? await lastValueFrom(this.api.getCarDetails(id))
      : null;
  }
}
