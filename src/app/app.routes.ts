import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BasketComponent } from './page/basket/basket.component';
import { CheckoutComponent } from './page/checkout/checkout.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }, {
        path: "basket",
        component: BasketComponent
    },
    {
        path: "checkout",
        component: CheckoutComponent
    },
    {
        path: "**",
        redirectTo: ''
    }
];
