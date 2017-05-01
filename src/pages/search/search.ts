import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	searchQuery: string = '';
  	items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  initializeItems();

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SearchPage');
  // }

  initializeItems() {
    this.items = [
    	'Bangkok Knitted',
      	'Bangkok Pants',
      	'Bangkok Short',
      	'Cullot Cube',
      	'Collar Terno',
      	'Polo Crop',
      	'Slip Dress',
      	'Vest Plain',
      	'Zipper Tee',
      	'Zipper Tee Long Back'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

