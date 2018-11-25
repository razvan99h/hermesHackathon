import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { DatabaseProvider } from '../../providers/database/database'

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
  minSchoolYear = ""
  maxSchoolYear = ""
  discipline = ""
  phone = ""


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService,
              public databaseProvider: DatabaseProvider) {
    this.student = navParams.get("student")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpDetailsPage');
  }

  goToHomePage()
  {
    this.student.data.gender = this.gender
    this.student.data.payment = this.payment
    this.student.data.faculty = this.faculty
    this.student.data.birth_date = this.birthDate
    this.student.data.self_description = this.selfDescription
    this.student.data.location = this.location
    this.student.data.level = this.level
    this.student.data.subject = this.subject
    this.student.data.phone = this.phone
    if(this.subject != this.career)
      this.student.data.subject = this.discipline
    this.student.data.max_school_year = this.maxSchoolYear
    this.student.data.min_school_year = this.minSchoolYear
    this.authService.signupUser(this.student.data.email, this.student.data.pass).then(data =>
    {
      this.databaseProvider.addStudent(this.student)
    })


    console.log(this.student)
  }
  parseInteger(str){
    return Number(str)
  }

}
