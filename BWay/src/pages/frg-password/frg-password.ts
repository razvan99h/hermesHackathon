import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
/**
 * Generated class for the FrgPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frg-password',
  templateUrl: 'frg-password.html',
})
export class FrgPasswordPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrgPasswordPage');
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
