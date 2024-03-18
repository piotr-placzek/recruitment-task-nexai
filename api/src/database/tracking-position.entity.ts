import { AddressDto } from 'src/shared/dtos/address.dto';
import { Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('tracking')
export class TrackingPositionEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'json' })
  position: AddressDto;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
