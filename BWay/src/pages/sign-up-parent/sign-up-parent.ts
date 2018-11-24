import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { AuthService } from '../../providers/auth-service/auth-service';
import { DatabaseProvider } from '../../providers/database/database'


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


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService,
              public databaseProvider: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpParentPage');
  }

  signUpParent()
  {
    parent = {
      "data" : {
        "firstName" : this.firstName,
        "lastName" : this.lastName,
        "email" : this.email,
        "payment" : this.payment,
        "phone" : this.phoneNumber
      },
      "type" : "parent"
    }

    this.authService.signupUser(parent.data.email, this.passwordSignUp).then(data =>
    {
      this.databaseProvider.addParent(parent)
    })
  }

  goToLoginPage()
  {
    this.navCtrl.push(LoginPage)
  }
}
