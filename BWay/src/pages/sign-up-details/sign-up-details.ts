import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignUpDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-details',
  templateUrl: 'sign-up-details.html',
})
export class SignUpDetailsPage {
  student
  gender = ""
  payment = ""
  subject = ""
  level = ""
  faculty = ""
  location = ""
  birthDate = ""
  selfDescription = ""



  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.student = navParams.get("student")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpDetailsPage');
  }

  goToHomePage()
  {
    this.student.data.gender = this.gender
    this.student.data.payment = this.paymemt
    this.student.data.faculty = this.faculty
    this.student.data.birth_date = this.birthDate
    this.student.data.self_description = this.selfDescription
    this.student.data.location = this.location
    this.student.data.level = this.level
    this.student.data.subject = this.subject

    

    console.log(this.student)
  }

}
