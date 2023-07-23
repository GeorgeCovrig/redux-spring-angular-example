
// import { AuthState } from './auth/reducer/auth.state';
// import { AccountState } from './account/reducer/account.state';
// import { ProductControlState } from './product-control/reducer/product-control.state';
// import { CommonState } from './common/reducer/common.state';
import { ListsState } from './lists/reducer/lists.state';
// import { WishlistState } from './wishlist/reducer/wishlist.state';

export interface AppState {
  list: ListsState;

}
