import { Controller, Get, Param } from '@nestjs/common';
import { Album } from './album.entity';
import { AlbumService } from './album.service';

@Controller('Album')
export class AlbumController {
  constructor(private readonly AlbumService: AlbumService) {}

  @Get()
  findAll(): Promise<Album[]> {
    return this.AlbumService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Album> {
    return this.AlbumService.findOne(params.id);
  }

  @Get('search/:text')
  query(@Param('text') text): Promise<Album[]> {
    return this.AlbumService.query(text);
  }
}
