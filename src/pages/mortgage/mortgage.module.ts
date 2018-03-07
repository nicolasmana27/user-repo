import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MortgagePage } from './mortgage';

@NgModule({
  declarations: [
    MortgagePage,
  ],
  imports: [
    IonicPageModule.forChild(MortgagePage),
  ],
})
export class MortgagePageModule {}
