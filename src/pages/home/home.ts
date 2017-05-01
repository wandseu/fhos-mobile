import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { SearchPage } from '../search/search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {	

	// detailsPage = DetailsPage;

  constructor(public navCtrl: NavController) {
  	
  }

  viewDetails() {
  	this.navCtrl.push(DetailsPage);
  }

  showSearch() {
  	this.navCtrl.push(SearchPage);
  }

}
