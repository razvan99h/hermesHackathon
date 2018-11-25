import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateConsultationPage } from "../create-consultation/create-consultation";

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
  student;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = navParams.get("student")
    this.firstName = this.student.data.first_name
    this.lastName = this.student.data.last_name
    this.name = this.firstName + ' ' + this.lastName
    this.birthDate = this.student.data.birth_date
    this.accemail = this.student.data.email
    this.faculty = this.student.data.faculty
    this.gender = this.student.data.gender
    this.level = this.student.data.level
    this.location = this.student.data.location
    this.phone = this.student.data.phone
    this.rating = this.student.data.rating
    this.selfDescription = this.student.data.self_description
    this.subject = this.student.data.subject
    console.log(this.student.data, "de aici")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowStudentPage');
  }

  chooseStudent(){
    this.navCtrl.push(CreateConsultationPage, {"student": this.student})
  }
}
