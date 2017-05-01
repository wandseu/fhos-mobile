import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController) {

  }

  showCart() {
  	this.navCtrl.push(CartPage);
  }

  viewDetails() {
  	this.navCtrl.push(DetailsPage);
  }

}
