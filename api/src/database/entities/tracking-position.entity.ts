import { AddressDto } from 'src/shared/dtos/address.dto';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tracking')
export class TrackingPositionEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'json' })
  position: AddressDto;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
