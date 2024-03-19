import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarDetails } from 'src/app/core/api.service';

export type FormDataType = Omit<CarDetails, 'id' | 'rentedBy' | 'position'>;

@Component({
  selector: 'app-car-details-form',
  templateUrl: './car-details-form.component.html',
})
export class CarDetailsFormComponent implements OnChanges {
  @Input() data?: FormDataType | null;
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  form = new FormGroup({
    manufacturer: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9\-]*$/),
    ]),
    license: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9\-]*$/),
    ]),
    vin: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]*$/),
      Validators.minLength(17),
      Validators.maxLength(17),
    ]),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.form.patchValue(changes['data'].currentValue);
    }
  }

  isControlInvalid(control: FormControl): boolean {
    return control.touched && control.invalid;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.submit.emit(this.form.value);
  }

  onCancel(): void {}
}
