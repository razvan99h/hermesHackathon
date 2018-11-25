import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-student',
  templateUrl: 'show-student.html',
})
export class ShowStudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = navParams.get("student")
    this.firstName = this.student.first_name
    this.lastName = this.student.last_name
    this.name = this.firstName + ' ' + this.lastName
    this.birthDate = this.student.birth_date
    this.accemail = this.student.email
    this.faculty = this.student.faculty
    this.gender = this.student.gender
    this.level = this.student.level
    this.location = this.student.location
    this.phone = this.student.phone
    this.rating = this.student.rating
    this.selfDescription = this.student.self_description
    this.subject = this.student.subject
    console.log(this.student)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowStudentPage');
  }

}
