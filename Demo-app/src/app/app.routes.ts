import { Routes } from '@angular/router';
import { BodyComponent } from './pages/dashboard/body.component';
import { ProductComponent } from './pages/product/product.component';

import { ProductRegisterComponent } from './pages/product-register/product-register.component';

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
        path:"Register",
        component:ProductRegisterComponent
    }
];
