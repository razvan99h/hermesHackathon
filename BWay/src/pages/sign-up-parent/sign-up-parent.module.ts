import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpParentPage } from './sign-up-parent';

@NgModule({
  declarations: [
    SignUpParentPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpParentPage),
  ],
})
export class SignUpParentPageModule {}
