import { EntityBase } from 'src/database/entity-base';
import { CustomerEntity } from 'src/database/customer.entity';
import { TrackingPositionEntity } from 'src/database/tracking-position.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('fleet')
export class CarEntity extends EntityBase {
  @Column({ nullable: false })
  manufacturer: string;

  @Column({
    nullable: false,
    unique: true,
    transformer: {
      to: (v: string) => v.toUpperCase(),
      from: (v: string) => v,
    },
  })
  license: string;

  @Column({
    nullable: false,
    unique: true,
    transformer: {
      to: (v: string) => v.toUpperCase(),
      from: (v: string) => v,
    },
  })
  vin: string;

  @Column({ default: false })
  rented: boolean;

  @OneToOne(() => CustomerEntity, { nullable: true })
  @JoinColumn()
  customer: CustomerEntity;

  @OneToOne(() => TrackingPositionEntity)
  @JoinColumn()
  position: TrackingPositionEntity;
}
