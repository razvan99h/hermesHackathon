import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'
import { DatabaseProvider } from '../../providers/database/database'

/**
 * Generated class for the ProfileParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-parent',
  templateUrl: 'profile-parent.html',
})
export class ProfileParentPage {
  public parent
  public firstName : string
  public lastName : string
  public phone : string
  public payment : string
  public email : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public database: DatabaseProvider) {
    this.database.getDataParent().subscribe(data =>{
    this.parent = data
    this.firstName = this.parent.firstName
    this.lastName = this.parent.lastName
    this.phone = this.parent.phone
    this.payment = this.parent.payment
    this.email = this.parent.email
    console.log(this.parent)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileParentPage');
  }

  logOut()
  {
    this.authService.logout()
  }

}
