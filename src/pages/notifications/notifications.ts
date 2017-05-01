import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Swipe left/right for more options.',
      duration: 3000
    });
    toast.present();
  }

}
