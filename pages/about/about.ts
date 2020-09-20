import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ["about.css"]
})
export class AboutPage {
  originalprice: number;
  percentoff: number;
  salestax: number;

  discountedprice: number;
  tax: number;
  finalprice: number;
  savings: number;
  constructor(public navCtrl: NavController) {


  }
compute() {

  this.discountedprice = (this.originalprice)*(1-(this.percentoff/100));
  this.tax = (this.discountedprice)*(this.salestax/100);
  this.finalprice = (this.discountedprice + this.tax);
  this.savings = ((this.originalprice - this.finalprice) + this.originalprice * this.salestax/100);
}
}
