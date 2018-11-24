import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BeforeSignUpPage } from '../pages/before-sign-up/before-sign-up';
import { SignUpStudentPage } from '../pages/sign-up-student/sign-up-student'
import { SignUpDetailsPage } from '../pages/sign-up-details/sign-up-details'
import { SignUpParentPage } from '../pages/sign-up-parent/sign-up-parent'
import { LoginPage } from '../pages/login/login';
import { TabsPages } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { FrgPasswordPage } from "../pages/frg-password/frg-password";


export const firebaseConfig = {
  apiKey: "AIzaSyAEm_npBxolAXgfj4Muwae7AwEuZISsPzQ",
  authDomain: "bway-66566.firebaseapp.com",
  databaseURL: "https://bway-66566.firebaseio.com",
  storageBucket: "bway-66566.appspot.com",
  messagingSenderId: "919488996075"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeforeSignUpPage,
    SignUpStudentPage,
    SignUpDetailsPage,
    SignUpParentPage,
    LoginPage,
    ProfilePage,
    TabsPages,
    FrgPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeforeSignUpPage,
    SignUpStudentPage,
    SignUpDetailsPage,
    SignUpParentPage,
    ProfilePage,
    LoginPage,
    TabsPages,
    FrgPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
