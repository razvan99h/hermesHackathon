import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultationsPage } from "../consultations/consultations";
import { DatabaseProvider} from "../../providers/database/database"

/**
 * Generated class for the HomeParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-parent',
  templateUrl: 'home-parent.html',
})
export class HomeParentPage {
  name
  constructor(public navCtrl: NavController, public navParams: NavParams, public database : DatabaseProvider) {
    this.database.getName().subscribe(data =>{
      this.name = data.lastName
      console.log(this.name)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeParentPage');
  }
  goToConsultationsPage(cameFrom){
    this.navCtrl.push(ConsultationsPage, {'cameFrom': cameFrom})
  }
}
