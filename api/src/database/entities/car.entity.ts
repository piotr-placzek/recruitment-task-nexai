import { EntityBase } from 'src/database/entities/entity-base';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { TrackingPositionEntity } from './tracking-position.entity';
import { CustomerEntity } from './customer.entity';

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

  @OneToOne(() => CustomerEntity, { nullable: true })
  @JoinColumn()
  rentedBy: CustomerEntity | null;

  @OneToOne(() => TrackingPositionEntity)
  @JoinColumn()
  position: TrackingPositionEntity;
}
