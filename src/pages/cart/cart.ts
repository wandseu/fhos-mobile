import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderFormPage } from '../order-form/order-form';
import { DetailsPage } from '../details/details';

/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CartPage');
    console.log(this.navParams.get('title'));
  }

  showCheckout() {
  	this.navCtrl.push(OrderFormPage);
  }

  viewDetails() {
  	this.navCtrl.push(DetailsPage);
  }

}
