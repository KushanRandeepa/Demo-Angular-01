import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent,NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  ngOnInit(): void {
   this.loaddProductInformation()
  }


  public productInfo:any=[]

  loaddProductInformation(){
    fetch("https://fakestoreapi.com/products/")
    .then(res=>res.json())
    .then(data=>{
      this.productInfo=data;
      console.log(this.productInfo)
    })
  }
}
