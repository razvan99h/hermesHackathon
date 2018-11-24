import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeforeSignUpPage } from './before-sign-up';

@NgModule({
  declarations: [
    BeforeSignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(BeforeSignUpPage),
  ],
})
export class BeforeSignUpPageModule {}
