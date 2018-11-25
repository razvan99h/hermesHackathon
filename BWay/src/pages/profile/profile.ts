import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'
import { DatabaseProvider } from '../../providers/database/database'
import { AddChildPage } from '../add-child/add-child'

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public database: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logOut()
  {
    this.authService.logout()
  }

  addStudent()
  {
    this.database.getDataStudent().subscribe(data => {
      console.log(data)
    })

  }
}
