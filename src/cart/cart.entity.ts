import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Album } from 'src/album/album.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantity: number;

  @OneToOne(() => Album)
  @JoinColumn()
  album: Album;
}
