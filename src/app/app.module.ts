import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotificationsPage } from '../pages/notifications/notifications';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { CartPage } from '../pages/cart/cart';
import { DetailsPage } from '../pages/details/details';
import { OrderFormPage } from '../pages/order-form/order-form';
import { OrderSummaryPage } from '../pages/order-summary/order-summary';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    NotificationsPage,
    HomePage,
    TabsPage,
    SettingsPage,
    WishlistPage,
    CartPage,
    DetailsPage,
    OrderFormPage,
    OrderSummaryPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationsPage,
    HomePage,
    TabsPage,
    WishlistPage,
    SettingsPage,
    CartPage,
    DetailsPage,
    OrderFormPage,
    OrderSummaryPage,
    SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
