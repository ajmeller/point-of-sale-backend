import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem } from './cart-item.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll(): Promise<any> {
    return this.cartService.findAll();
  }

  @Post('add')
  async create(@Body() cartItem: CartItem): Promise<any> {
    return this.cartService.create(cartItem);
  }

  @Post('update/:id')
  async update(@Body() cartItem: CartItem, @Param('id') cartid): Promise<any> {
    //cartItem.cartid = Number(cartid);
    return this.cartService.update(cartid, cartItem);
  }

  @Post('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.cartService.delete(id);
  }
}
