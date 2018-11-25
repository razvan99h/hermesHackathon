import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { TabsPages } from '../tabs/tabs'

/**
 * Generated class for the AddChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {

  name = ""
  gender = ""
  birthDate = ""
  location = ""
  phoneNumber = ""
  skills = ""
  schoolYear = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, public database : DatabaseProvider) {
  }

  ionViewDidLoad() {

  }

  AddChild()
  {
    var obj={
      gender : this.gender,
      birth_date: this.birthDate,
      name: this.name,
      location: this.location,
      phone: this.phoneNumber,
      skills: this.skills,
      schoolYear: this.schoolYear
    }
    this.database.addChild(obj)
    this.navCtrl.push(TabsPages)
  }

}
