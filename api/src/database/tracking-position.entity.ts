import { Address } from 'src/shared/types';
import { Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('tracking')
export class TrackingPositionEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'json' })
  position: Address;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
