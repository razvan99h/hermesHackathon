import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileParentPage } from './profile-parent';

@NgModule({
  declarations: [
    ProfileParentPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileParentPage),
  ],
})
export class ProfileParentPageModule {}
