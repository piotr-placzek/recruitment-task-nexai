import { EntityBase } from 'src/database/entities/entity-base';
import { AddressDto } from 'src/shared/dtos/address.dto';
import { Column, Entity } from 'typeorm';

@Entity('customers')
export class CustomerEntity extends EntityBase {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  companyName: string;

  @Column()
  email: string;

  @Column({ type: 'json' })
  address: AddressDto;
}
