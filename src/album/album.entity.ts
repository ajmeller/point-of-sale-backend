import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  artistname: string;

  @Column('text')
  albumname: string;

  @Column('text')
  albumartsource: string;

  @Column('real')
  price: number;
}
