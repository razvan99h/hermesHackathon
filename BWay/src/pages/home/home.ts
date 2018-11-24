import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items
  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase
  )
  {
      this.retriveAll()
  }


  retriveAll()
  {
    this.db.object('/item').valueChanges().subscribe(data =>
    {
      console.log(data)
    })

  }
}
