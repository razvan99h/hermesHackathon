import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider} from '../../providers/database/database'

/**
 * Generated class for the ConsultationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultations',
  templateUrl: 'consultations.html',
})
export class ConsultationsPage {
  cameFrom;
  public studentsToShow = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: DatabaseProvider) {
      this.cameFrom = navParams.get("cameFrom")
      this.database.getAllUsers().subscribe(users =>{
        this.studentsToShow = this.sortBy(this.toListAllStudents(users))

      } )
  }

  toListAllStudents(users)
  {
    var array = []
    for(let user in users)
      if(users[user].type == "student")
      {
        var obj = users[user]
        obj.id = user
        array.push(obj)
      }

    return array
  }

  sortBy(users)
  {
    return users
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationsPage');
  }

  goToStudentProfile(student)
  {
    console.log(student)
  }

}
