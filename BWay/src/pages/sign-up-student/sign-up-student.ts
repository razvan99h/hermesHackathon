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

  firstName = ""
  lastName = ""
  email = ""
  passwordSignUp = ""
  passwordSignUp2 = ""

  student;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpStudentPage');
  }

  goToSignUpDetailsPage(){
    this.student = {
      "data" : {
            "birth_date" : "",
            "email" : this.email,
            "faculty" : "",
            "gender" : "",
            "location" : "",
            "first_name" : this.firstName,
            "last_name" : this.lastName,
            "payment" : "",
            "phone" : "",
            "rating" : "",
            "self_description" : "",
            "subject" : "",
            "level" : ""
          },
  		"type" : "student"
    };
    console.log(this.student)
    this.navCtrl.push( SignUpDetailsPage, {"student" : this.student} )
  }

  goToLoginPage(){

    this.navCtrl.push( LoginPage )
  }
}
