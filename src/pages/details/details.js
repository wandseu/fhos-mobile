var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { OrderFormPage } from '../order-form/order-form';
/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
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
    DetailsPage.prototype.showConfirmCart = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Add to Cart',
            message: 'Proceed to Order?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        console.log('Confirm clicked');
                        _this.navCtrl.setRoot(OrderFormPage);
                    }
                }
            ]
        });
        confirm.present();
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Component({
        selector: 'page-details',
        templateUrl: 'details.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], DetailsPage);
export { DetailsPage };
//# sourceMappingURL=details.js.map