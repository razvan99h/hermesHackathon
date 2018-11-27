import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider} from "../../providers/database/database"
import { OnDestroy } from "@angular/core";
import {ISubscription} from "rxjs/Subscription";
import { AuthService} from "../../providers/auth-service/auth-service"
import { TabsPages } from "../tabs/tabs"

/**
 * Generated class for the CreateConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-consultation',
  templateUrl: 'create-consultation.html',
})
export class CreateConsultationPage {
  student
  name
  discipline
  price
  childID
  listOfChildrens = []
  date
  time
  duration
  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, public authService : AuthService) {
    this.student = this.navParams.get("student")
    this.name = this.student.data.first_name + " " + this.student.data.last_name
    this.discipline = this.student.data.subject
    this.price = this.student.data.price
    this.database.getAllChildrens().subscribe(data =>
    {
      console.log(data)
      for(let i in data)
      {
        var object = data[i]
        object.id = i
        this.listOfChildrens.push(object)
      }
      console.log(this.listOfChildrens)
    })

  }

  goToHomePage()
  {
    var object = {
      "id_student" : this.student.id,
      "id_parent" : this.authService.getUserToken(),
      "id_child" : this.childID,
      "duration" : this.duration,
      "date" : this.date,
      "time" : this.time,
    };

    this.database.addConsultation(object)
    this.navCtrl.push(TabsPages)
    console.log(object)
  }

  cancelButton()
  {
    this.navCtrl.pop()
  }

  ionViewDidLoad() {


  }

}
