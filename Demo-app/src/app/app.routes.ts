import { Routes } from '@angular/router';
import { BodyComponent } from './pages/dashboard/body.component';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './pages/price/price.component';

export const routes: Routes = [
    {
        path:"",
        component:BodyComponent

    },
    {
        path:"Product",
        component:ProductComponent

    },
    {
        path:"Price",
        component:PriceComponent
    }
];
