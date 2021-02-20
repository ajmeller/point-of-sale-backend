import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { CartItem } from './cart-item.interface';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Post('add')
  async create(@Body() cartItem: CartItem): Promise<Cart[]> {
    return this.cartService.create(cartItem);
  }

  @Post('update/:id')
  async update(@Body() cartItem: CartItem, @Param('id') id): Promise<any> {
    cartItem.id = Number(id);
    return this.cartService.update(cartItem);
  }

  @Post('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.cartService.delete(id);
  }
}
