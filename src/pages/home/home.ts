import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hutang : number = 0 ;
  total : any  ;
  cicilan : any  ;
  harga : any  ;
  dp : any  ;
  waktu : any  ;
  bunga : any  ;

  constructor(public navCtrl: NavController) {

  }

  addThemFunction () {
    let  harga = this.harga ? parseFloat(this.harga) : 0 ;
    let  dp = this.dp ? parseFloat(this.dp) : 0;
    let  waktu = this.waktu ? parseFloat(this.waktu) : 0;
    let  bunga = this.bunga ? parseFloat(this.bunga) : 0;
    
    this.hutang = harga - dp ;
    this.total = (bunga/100/12 * waktu * this.hutang) + this.hutang;
    this.cicilan = this.total/waktu;
    console.log("clicked!");
  }

}
