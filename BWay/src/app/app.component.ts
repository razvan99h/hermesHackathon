import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { SignUpStudentPage } from '../pages/sign-up-student/sign-up-student'

=======
import { TabsPage } from '../pages/tabs/tabs';
>>>>>>> de30ac20361a799d3338548259959f8845fcb3fd
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = SignUpStudentPage;
=======
  rootPage:any = TabsPage;
>>>>>>> de30ac20361a799d3338548259959f8845fcb3fd

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
