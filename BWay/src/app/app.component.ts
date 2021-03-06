import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { HomeParentPage } from '../pages/home-parent/home-parent';
import { LoginPage } from '../pages/login/login'
import { TabsPages } from '../pages/tabs/tabs'
import { TabsStudentPages} from "../pages/tabs-student/tabs-student";
import { DatabaseProvider} from "../providers/database/database"

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth : AngularFireAuth, public database: DatabaseProvider) {
    platform.ready().then(() => {
      setTimeout( () =>{
        this.afAuth.authState.subscribe(user =>
        {
          if(user)
          {
            this.database.getType().subscribe(data => {
              if(data == "parent")
                this.rootPage = TabsPages
              else
                this.rootPage = TabsStudentPages;
            })
          }
          else
            this.rootPage = LoginPage;
        });
      }, 1000);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
