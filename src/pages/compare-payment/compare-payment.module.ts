import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComparePaymentPage } from './compare-payment';

@NgModule({
  declarations: [
    ComparePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ComparePaymentPage),
  ],
})
export class ComparePaymentPageModule {}
