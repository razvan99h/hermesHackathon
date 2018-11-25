import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateConsultationPage } from './create-consultation';

@NgModule({
  declarations: [
    CreateConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateConsultationPage),
  ],
})
export class CreateConsultationPageModule {}
