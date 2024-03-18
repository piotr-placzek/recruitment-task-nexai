import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class EntityBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({name: 'created_at'})
    cratedAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}