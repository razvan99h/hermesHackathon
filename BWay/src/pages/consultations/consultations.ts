import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider} from '../../providers/database/database'
import { ShowStudentPage } from "../show-student/show-student";

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
  gender = ""
  public studentsToShow = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: DatabaseProvider) {
      this.cameFrom = navParams.get("cameFrom")
      this.database.getAllUsers().subscribe(users =>{
        this.studentsToShow = this.sortBy(this.toListAllStudents(users), this.cameFrom)

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
    console.log(array)
    return array
  }

  sortBy(users, cameFrom)
  {
    var temp_list = []
    for(let user in users)
      if(users[user].type == "student")
      {
        if(cameFrom == "career")
        {
          console.log("am ajuns aici")
          if(users[user].data.subject == "career")
          {
            var obj = users[user]
            obj.id = user
            temp_list.push(obj)
          }
        }
        else
        {
          if(users[user].data.subject != "career")
          {
            var obj = users[user]
            obj.id = user
            temp_list.push(obj)
          }
        }
      }
    console.log(temp_list, this.cameFrom)
    return temp_list
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationsPage');
  }

  goToStudentProfile(student)
  {
    console.log(student)
    this.navCtrl.push(ShowStudentPage, {"student":student})
  }
  search(event)
  {

  }
  filterGender()
  {

  }

}
