import { EntityBase } from 'src/database/entities/entity-base';
import { Column, Entity } from 'typeorm';

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

  @Column({ nullable: true })
  rentedBy: string | null;
}
