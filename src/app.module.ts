import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart/cart.entity';
import { CartModule } from './cart/cart.module';
import { AlbumsModule } from './albums/albums.module';
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
      entities: [Cart, Albums],
      migrations: ['./migrations/*.js'],
      synchronize: false,
    }),
    CartModule,
    AlbumsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
