var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map