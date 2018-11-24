import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpDetailsPage } from '../sign-up-details/sign-up-details'
import { LoginPage } from '../login/login'


/**
 * Generated class for the SignUpStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-student',
  templateUrl: 'sign-up-student.html'
})
export class SignUpStudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpStudentPage');
  }

  goToSignUpDetailsPage(){

    this.navCtrl.push( SignUpDetailsPage )
  }

  goToLoginPage(){

    this.navCtrl.push( LoginPage )
  }
}
