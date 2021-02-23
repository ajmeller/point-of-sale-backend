import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart/cart.entity';
import { Album } from './album/album.entity';
import { AlbumModule } from './album/album.module';
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
      entities: [Album, Cart],
      migrations: ['./migrations/*.js'],
      synchronize: false,
    }),
    AlbumModule,
    CartModule,
  ],
})
export class AppModule {}
