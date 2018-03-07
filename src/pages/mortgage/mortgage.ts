import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MortgagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mortgage',
  templateUrl: 'mortgage.html',
})
export class MortgagePage {

  hutang : number = 0 ;
  total : any  ;
  cicilan : any  ;
  harga : any  ;
  dp : any  ;
  waktu : any  ;
  bunga : any  ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MortgagePage');
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
