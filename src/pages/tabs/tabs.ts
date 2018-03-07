import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';


import { CustomPaymentPage } from '../custom-payment/custom-payment';
import { ComparePaymentPage } from '../compare-payment/compare-payment';
import { PaymentPage } from '../payment/payment';
import { MortgagePage } from '../mortgage/mortgage';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MortgagePage;
  tab2Root = PaymentPage;
  tab3Root = ComparePaymentPage;
  tab4Root = CustomPaymentPage;

  constructor() {

  }
}
