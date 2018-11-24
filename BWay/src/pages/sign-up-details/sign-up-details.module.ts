import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpDetailsPage } from './sign-up-details';

@NgModule({
  declarations: [
    SignUpDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpDetailsPage),
  ],
})
export class SignUpDetailsPageModule {}
