import { Controller, Get, Param } from '@nestjs/common';
import { Albums } from './albums.entity';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}

  @Get()
  findAll(): Promise<Albums[]> {
    return this.albumService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Albums> {
    return this.albumService.findOne(params.id);
  }

  @Get('search/:text')
  query(@Param('text') text): Promise<Albums[]> {
    return this.albumService.query(text);
  }
}
