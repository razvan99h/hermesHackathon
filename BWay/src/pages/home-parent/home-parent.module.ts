import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeParentPage } from './home-parent';

@NgModule({
  declarations: [
    HomeParentPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeParentPage),
  ],
})
export class HomeParentPageModule {}
