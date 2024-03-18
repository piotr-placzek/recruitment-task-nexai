import { EntityBase } from 'src/database/entity-base';
import { Address } from 'src/shared/types';
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
  address: Address;
}
