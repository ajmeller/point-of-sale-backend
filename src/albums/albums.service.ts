import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Albums } from './albums.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Albums)
    private readonly albumsRepository: Repository<Albums>,
  ) {}

  async findAll(): Promise<Albums[]> {
    return this.albumsRepository.find();
  }

  async findOne(id: number): Promise<Albums> {
    return this.albumsRepository.findOne(id);
  }

  async query(text: string): Promise<Albums[]> {
    return await this.albumsRepository.find({ albumname: text });
  }
}
