import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { BeforeSignUpPage } from '../before-sign-up/before-sign-up';
import { FrgPasswordPage } from "../frg-password/frg-password";
import { AuthService } from '../../providers/auth-service/auth-service';
import { TabsPages} from '../tabs/tabs'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email;
  pass;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alerCtrl: AlertController,
    public authService: AuthService
  )
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHomePage(){
    if(!(this.email == undefined || this.pass == undefined))
    {
      console.log(this.email, this.pass);
      this.authService.login_user(this.email, this.pass).then((response) => {
          console.log(response);
        }, (error) =>{
          //this.invalidEmailPassAlert();
          console.log("no", error);
        });
    }
  }

  goToBeforeSignUpPage(){
    this.navCtrl.push(BeforeSignUpPage);
  }

  goToForgottenPasswordPage(){
    this.navCtrl.push(FrgPasswordPage);
  }

  loginWithFacebook(){
    this.presentLoading();
  }

  loginWithGoogle(){
    this.presentLoading();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
     content: "Connecting to server...",
     duration: 5000
    });
    setTimeout(()=>{
     this.presentAlert();
    },5100)
    loader.present();
  }

  presentAlert(){
    let alert = this.alerCtrl.create({
      title: 'Error',
      message: `Couldn't connect to the servers. Please try again later.`,
      buttons: ['Ok']
    });
    alert.present()
  }

}
