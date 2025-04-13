import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  homePage:String="Shop More...";

  public demoFunction(){
    this.homePage="Kushan"
  }
  public demoFunction2(){
    this.homePage="Shop More"
  }
}
