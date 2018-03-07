import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomPaymentPage } from './custom-payment';

@NgModule({
  declarations: [
    CustomPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomPaymentPage),
  ],
})
export class CustomPaymentPageModule {}
