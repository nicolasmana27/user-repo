import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComparePaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compare-payment',
  templateUrl: 'compare-payment.html',
})
export class ComparePaymentPage {
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

  // VARIABEL KE 2
  dp2 : any  ;
  cicilan12 : any  ;
  cicilan22 : any  ;
  waktu_dp2 : any  ;
  waktu_cicilan12 : any  ;
  waktu_cicilan22 : any  ;

  hsl12: any  ;
  hsl22: any  ;
  hsl32: any  ;
  
  add12: any  ;
  add22: any  ;
  add32: any  ;
  add42: any  ;
  add52: any  ;

  pangkat12: any;
  pangkat22: any;
  pangkat32: any;

  jml_pv2:any ;
  persen_pv2:any ;
  pv_loss2:any ;
  selisih2:any ;
  suggestion_price2:any ;
  persen_diskon2:any ;

  // variabel tambahan 3
  pv_compare:any ;
  pv_loss3:any ;

  suggested_price3 :any ;
  tempo :any ;
  selisih3 :any ;
  tempo2 :any ;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparePaymentPage');
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

    //////////////////////////////// YANG KE 2//////////////////////////////////////////////
 
    let  dp2 = this.dp2 ? parseFloat(this.dp2) : 0;
    let  waktu_dp2 = this.waktu_dp2 ? parseFloat(this.waktu_dp2) : 0;
    
    let  cicilan12 = this.cicilan12 ? parseFloat(this.cicilan12) : 0;
    let  waktu_cicilan12 = this.waktu_cicilan12 ? parseFloat(this.waktu_cicilan12) : 0;
    
    let  cicilan22= this.cicilan22 ? parseFloat(this.cicilan22) : 0;
    let  waktu_cicilan22 = this.waktu_cicilan22 ? parseFloat(this.waktu_cicilan22) : 0;
    
      
    ////////////////////////////////////////////////////////////////////////////////////

    this.hsl12 = dp/100*harga / waktu_dp2;
    this.hsl22 = cicilan12/100*harga / waktu_cicilan12;
    this.bulanan = bunga/100/12;

    this.pangkat12 = (1+this.bulanan)**-this.waktu_dp2;
 
    this.add12 = ((1-this.pangkat12)/this.bulanan)*this.hsl12;// pv DP
    this.pangkat22 = (1+this.bulanan)**-this.waktu_cicilan12;
    this.add22=((1-this.pangkat22)/this.bulanan)*this.hsl22;
    this.add32=this.add22/((1+this.bulanan)**waktu_dp2) // pv cicilan 1

    this.hsl32=cicilan22/100*harga/waktu_cicilan22;
    this.pangkat32=(1+this.bulanan)**-waktu_cicilan22;
    this.add42=((1-this.pangkat32)/this.bulanan)*this.hsl32;
    this.add52=this.add42/(1+this.bulanan)**(waktu_dp2+waktu_cicilan12); // pv cicilan 2

    ////////////////////////////////////////////////////////////////////////////////////

    this.jml_pv2=this.add12+this.add32+this.add52;
    //this.persen_diskon = (1-(harga/this.jml_pv))*100;
    this.persen_diskon2 = ((harga/this.jml_pv2)-1)*100;
    this.suggestion_price2 = ((100+this.persen_diskon2)*harga)/100;  
    this.persen_pv2 = this.jml_pv2/harga*100; //suggestion increase
    this.selisih2 = this.suggestion_price2-harga;
    this.pv_loss2 = 100-this.persen_pv2;

    ///////////////////////////// COMPARE /////////////////////////////////////////////
    //this.pv_compare = this.jml_pv / this.jml_pv2 ;
    this.pv_compare = this.jml_pv2 / this.jml_pv ;
    this.pv_loss3 = (1-this.pv_compare)*100;

    this.suggested_price3 = (1+this.pv_loss3/100)*this.harga;
    this.tempo = (100+this.suggested_price3)*this.harga;
    this.selisih3 =  this.harga -this.suggested_price3;
    this.tempo2 = (1-this.pv_compare)*100; // suggest inc

   

    console.log("clicked!");
  }

}
