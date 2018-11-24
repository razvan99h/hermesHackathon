import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'


/**
 * Generated class for the SignUpParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-parent',
  templateUrl: 'sign-up-parent.html',
})
export class SignUpParentPage {

  firstName = ""
  lastName = ""
  email = ""
  passwordSignUp = ""
  passwordSignUp2 = ""
  phoneNumber = ""
  payment = ""


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpParentPage');
  }

  goToLoginPage()
  {
    this.navCtrl.push( LoginPage )
  }

}
