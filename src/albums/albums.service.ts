import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Albums } from '../albums/albums.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Albums)
    private readonly AlbumRepository: Repository<Albums>,
  ) {}

  async findAll(): Promise<Albums[]> {
    return this.AlbumRepository.find();
  }

  async findOne(id: number): Promise<Albums> {
    return this.AlbumRepository.findOne(id);
  }

  async query(text: string): Promise<Albums[]> {
    return await this.AlbumRepository.find({ albumname: text });
  }
}
