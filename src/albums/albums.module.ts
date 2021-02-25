import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albums } from '../albums/albums.entity';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';

@Module({
  imports: [TypeOrmModule.forFeature([Albums])],
  providers: [AlbumsService],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
