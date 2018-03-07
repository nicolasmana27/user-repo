import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  hutang : number = 0 ;
  total : any  ;
  harga : any  ;
  dp : any  ;
  cicilan1 : any  ;
  cicilan2 : any  ;
  waktu_dp : any  ;
  waktu_cicilan1 : any  ;
  waktu_cicilan2 : any  ;
  bunga : any  ;
  bulanan : any ;

  hsl1: any  ;
  hsl2: any  ;
  hsl3: any  ;
  
  add1: any  ;
  add2: any  ;
  add3: any  ;
  add4: any  ;
  add5: any  ;

  pangkat1: any;
  pangkat2: any;
  pangkat3: any;

  jml_pv:any ;
  persen_pv:any ;
  pv_loss:any ;
  selisih:any ;
  suggestion_price:any ;
  persen_diskon:any ;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  addThemFunction () {
    let  harga = this.harga ? parseFloat(this.harga) : 0 ;
    let  bunga = this.bunga ? parseFloat(this.bunga) : 0;

    let  dp = this.dp ? parseFloat(this.dp) : 0;
    let  waktu_dp = this.waktu_dp ? parseFloat(this.waktu_dp) : 0;
    
    let  cicilan1 = this.cicilan1 ? parseFloat(this.cicilan1) : 0;
    let  waktu_cicilan1 = this.waktu_cicilan1 ? parseFloat(this.waktu_cicilan1) : 0;
    
    let  cicilan2= this.cicilan2 ? parseFloat(this.cicilan2) : 0;
    let  waktu_cicilan2 = this.waktu_cicilan2 ? parseFloat(this.waktu_cicilan2) : 0;
    
    ////////////////////////////////////////////////////////////////////////////////////

    this.hsl1 = dp/100*harga / waktu_dp;
    this.hsl2 = cicilan1/100*harga / waktu_cicilan1;
    this.bulanan = bunga/100/12;

    this.pangkat1 = (1+this.bulanan)**-this.waktu_dp;
 
    this.add1 = ((1-this.pangkat1)/this.bulanan)*this.hsl1;// pv DP
    this.pangkat2 = (1+this.bulanan)**-this.waktu_cicilan1;
    this.add2=((1-this.pangkat2)/this.bulanan)*this.hsl2;
    this.add3=this.add2/((1+this.bulanan)**waktu_dp) // pv cicilan 1

    this.hsl3=cicilan2/100*harga/waktu_cicilan2;
    this.pangkat3=(1+this.bulanan)**-waktu_cicilan2;
    this.add4=((1-this.pangkat3)/this.bulanan)*this.hsl3;
    this.add5=this.add4/(1+this.bulanan)**(waktu_dp+waktu_cicilan1); // pv cicilan 2

    ///////////////////////////////////////////////////////////////////////////////////

    this.jml_pv=this.add1+this.add3+this.add5;
    //this.persen_diskon = (1-(harga/this.jml_pv))*100;
    this.persen_diskon = ((harga/this.jml_pv)-1)*100;
    this.suggestion_price = ((100+this.persen_diskon)*harga)/100;  
    this.persen_pv = this.jml_pv/harga*100; //suggestion increase
    this.selisih = this.suggestion_price-harga;
    this.pv_loss = 100-this.persen_pv;

    console.log("clicked!");
  }

}
