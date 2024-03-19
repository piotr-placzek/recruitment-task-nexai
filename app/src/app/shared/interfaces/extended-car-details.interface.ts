import { Address, CarDetails, CustomerDetails } from 'src/app/core/api.service';

export interface ExtendedCarDetails extends CarDetails {
  customerDetails?: CustomerDetails;
  currentPosition: Address;
}
