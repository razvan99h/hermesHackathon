import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpStudentPage } from './sign-up-student';

@NgModule({
  declarations: [
    SignUpStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpStudentPage),
  ],
})
export class SignUpStudentPageModule {}
