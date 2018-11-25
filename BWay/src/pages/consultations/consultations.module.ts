import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultationsPage } from './consultations';

@NgModule({
  declarations: [
    ConsultationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultationsPage),
  ],
})
export class ConsultationsPageModule {}
