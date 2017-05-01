import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  // showCheckboxColors() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Choose Color(s):');

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Black',
  //     value: 'value1',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Army Green',
  //     value: 'value2'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Baby Pink',
  //     value: 'value3'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Brown',
  //     value: 'value4'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'White',
  //     value: 'value5'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Maroon',
  //     value: 'value6'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Confirm',
  //     handler: data => {
  //       console.log('Checkbox data:', data);
  //       // this.testCheckboxOpen = false;
  //       // this.testCheckboxResult = data;
  //     }
  //   });
  //   alert.present();
  // }

  // showCheckboxSizes() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Choose Size(s):');

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Freesize',
  //     value: 'value1',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Small',
  //     value: 'value2'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Medium',
  //     value: 'value3'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Large',
  //     value: 'value4'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Confirm',
  //     handler: data => {
  //       console.log('Checkbox data:', data);
  //       // this.testCheckboxOpen = false;
  //       // this.testCheckboxResult = data;
  //     }
  //   });
  //   alert.present();
  // }

  showConfirmCart() {
  //   let confirm = this.alertCtrl.create({
  //     title: 'Add to Cart',
  //     message: 'Proceed to Order?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Confirm',
  //         handler: () => {
  //           console.log('Confirm clicked');
  //           this.navCtrl.push(OrderFormPage);
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  let data = {
  	title: 'Add to Cart',
  	items: [
  		'item',
  		'color',
  		'size',
  		'qty',
  		'price'
  	],
  }

  this.navCtrl.push(CartPage, data);

	}

addToWishlist() {
    let toast = this.toastCtrl.create({
      message: 'Added to Wishlist.',
      duration: 3000
    });
    toast.present();
  }
}