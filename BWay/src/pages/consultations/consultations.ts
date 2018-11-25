import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsultationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultations',
  templateUrl: 'consultations.html',
})
export class ConsultationsPage {
  cameFrom;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.cameFrom = navParams.get("cameFrom")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationsPage');
  }

  goToStudentProfile()
  {
    console.log("aici merge Raul")
  }

}
