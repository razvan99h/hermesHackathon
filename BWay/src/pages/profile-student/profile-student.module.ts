import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileStudentPage } from './profile-student';

@NgModule({
  declarations: [
    ProfileStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileStudentPage),
  ],
})
export class ProfileStudentPageModule {}
