import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'
import { DatabaseProvider } from '../../providers/database/database'
import { StarRatingModule } from 'ionic3-star-rating';
/**
 * Generated class for the ProfileStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-student',
  templateUrl: 'profile-student.html',
})
export class ProfileStudentPage {
  public student
  public firstName : string
  public lastName : string
  public birthDay : string
  public accemail : string
  public faculty : string
  public gender : string
  public level : string
  public location : string
  public phone : string
  public selfDescription : string
  public subject : string
  public rating : string

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public database: DatabaseProvider) {
    this.database.getDataStudent().subscribe(data =>{
    this.student = data
    this.firstName = this.student.first_name
    this.lastName = this.student.last_name
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
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileStudentPage');
  }

  logOut()
  {
    this.authService.logout()
  }

}
