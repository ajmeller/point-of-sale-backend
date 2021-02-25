import { Controller, Get, Param } from '@nestjs/common';
import { Albums } from '../albums/albums.entity';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Get()
  findAll(): Promise<Albums[]> {
    return this.albumsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Albums> {
    return this.albumsService.findOne(params.id);
  }

  @Get('search/:text')
  query(@Param('text') text): Promise<Albums[]> {
    return this.albumsService.query(text);
  }
}
