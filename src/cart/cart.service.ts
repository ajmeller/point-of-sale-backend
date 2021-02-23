import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './cart-item.interface';
import { Cart } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  async findAll(): Promise<any> {
    const albumCart = await this.cartRepository.find({ relations: ['album'] });
    /*     const albumCart = await this.cartRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.album', 'album')
      .getMany(); */

    return albumCart;
  }

  async create(cartItem: CartItem): Promise<any> {
    return await this.cartRepository.save(cartItem);
  }

  async update(cartItem: CartItem): Promise<any> {
    return await this.cartRepository.update(cartItem.id, cartItem);
  }

  async delete(id: number): Promise<any> {
    return this.cartRepository.delete(id);
  }
}
