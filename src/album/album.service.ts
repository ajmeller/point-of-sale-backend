import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './album.entity';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private readonly AlbumRepository: Repository<Album>,
  ) {}

  async findAll(): Promise<Album[]> {
    return this.AlbumRepository.find();
  }

  async findOne(id: number): Promise<Album> {
    return this.AlbumRepository.findOne(id);
  }

  async query(text: string): Promise<Album[]> {
    return await this.AlbumRepository.find({ albumname: text });
  }
}
