import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsController } from './albums/albums.controller';
import { AlbumsService } from './albums/albums.service';
import { AlbumsModule } from './albums/albums.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart/cart.entity';
import { Albums } from './albums/albums.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'album_shop',
      entities: [Albums, Cart],
      synchronize: true,
    }),
    AlbumsModule,
    CartModule,
  ],
  controllers: [AppController, AlbumsController, CartController],
  providers: [AppService, AlbumsService, CartService],
})
export class AppModule {}
