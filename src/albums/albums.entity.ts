import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Albums {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  artistName: string;

  @Column('text')
  albumName: string;

  @Column('text')
  albumArtSource: string;

  @Column('real')
  price: number;
}
