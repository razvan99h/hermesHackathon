import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alerCtrl: AlertController)
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHomePage(){
    
  }

  goToRegisterPage(){

  }

  goToForgottenPasswordPage(){

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
