import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NotificationsPage } from '../notifications/notifications';
import { WishlistPage } from '../wishlist/wishlist';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NotificationsPage;
  tab3Root: any = WishlistPage;
  tab4Root: any = CartPage;

  constructor() {

  }
}
