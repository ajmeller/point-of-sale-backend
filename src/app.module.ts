import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart/cart.entity';
import { Albums } from './albums/albums.entity';
import { AlbumsModule } from './albums/albums.module';
import { CartModule } from './cart/cart.module';

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
      synchronize: false,
    }),
    AlbumsModule,
    CartModule,
  ],
})
export class AppModule {}
