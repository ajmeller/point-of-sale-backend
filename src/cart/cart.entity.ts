import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  cartid: number;

  @Column('int')
  quantity: number;

  @Column('int')
  albumid: number;
}
