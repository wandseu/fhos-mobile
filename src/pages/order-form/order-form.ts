import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { OrderSummaryPage } from '../order-summary/order-summary';

/*
  Generated class for the OrderForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-form',
  templateUrl: 'order-form.html'
})
export class OrderFormPage {
	public orderFormList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderFormPage');
  }

  OrderSummary () {
  	let showOrderSumModal = this.modalCtrl.create(OrderSummaryPage);

  	showOrderSumModal.present((data => {
  		this.orderFormList.push(data);
  	}));
  }

}
