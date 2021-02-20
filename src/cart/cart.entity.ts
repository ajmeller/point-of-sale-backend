import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  albumId: number;

  @Column('int')
  quantity: number;
}
