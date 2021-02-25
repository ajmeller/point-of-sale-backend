import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Albums {
  @PrimaryGeneratedColumn()
  albumid: number;

  @Column('text')
  artistname: string;

  @Column('text')
  albumname: string;

  @Column('text')
  albumartsource: string;

  @Column('real')
  price: number;
}
