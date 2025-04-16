import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-register',
  imports: [FormsModule],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {

  public product={
    name:"",
    description:""
  };

  register(){
    console.log(this.product)
    this.product.name=""
    this.product.description=""
  }
}
