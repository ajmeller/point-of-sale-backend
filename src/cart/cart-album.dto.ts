import { Album } from 'src/albums/album.dto';
import { CartItem } from './cart-item.dto';

export class CartAlbum {
  cartItem: CartItem;
  album: Album;
}
