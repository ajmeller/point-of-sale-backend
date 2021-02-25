import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './cart-item.dto';
import { Cart } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  async findAll(): Promise<any> {
    const query = await this.cartRepository.query(`select *
    from cart
    join albums on cart.albumid = albums.albumid`);

    return query;
  }

  async create(cartItem: CartItem): Promise<CartItem> {
    return await this.cartRepository.save(cartItem);
  }

  async update(id: number, cartItem: CartItem): Promise<any> {
    return await this.cartRepository.update(id, cartItem);
  }

  async delete(id: number): Promise<any> {
    return this.cartRepository.delete(id);
  }
}
