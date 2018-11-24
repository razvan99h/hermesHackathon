import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpStudentPage } from '../sign-up-student/sign-up-student';
import { SignUpParentPage } from '../sign-up-parent/sign-up-parent';

/**
 * Generated class for the BeforeSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-before-sign-up',
  templateUrl: 'before-sign-up.html',
})
export class BeforeSignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeforeSignUpPage');
  }

  goToSignUpStudentPage()
  {
    this.navCtrl.push(SignUpStudentPage)
  }

  goToSignUpParentPage()
  {
    this.navCtrl.push(SignUpParentPage)
  }

}
