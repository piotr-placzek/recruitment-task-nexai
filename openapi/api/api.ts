export * from './customers.service';
import { CustomersService } from './customers.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './fleet.service';
import { FleetService } from './fleet.service';
export * from './tracking.service';
import { TrackingService } from './tracking.service';
export const APIS = [CustomersService, DefaultService, FleetService, TrackingService];
