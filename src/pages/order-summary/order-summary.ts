import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/*
  Generated class for the OrderSummary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html'
})
export class OrderSummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSummaryPage');
  }

  dismiss() {
  	this.viewCtrl.dismiss();
  }

}
