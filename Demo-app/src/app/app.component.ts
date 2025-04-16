import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './commen/header/header.component';
import { BodyComponent } from './pages/dashboard/body.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductRegisterComponent } from './pages/product-register/product-register.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,BodyComponent,ProductComponent,ProductRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo-app';
}
