import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service/auth-service';
import { StarRatingModule } from 'ionic3-star-rating';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';HomeParentPage
import { HomeParentPage } from '../pages/home-parent/home-parent';
import { BeforeSignUpPage } from '../pages/before-sign-up/before-sign-up';
import { SignUpStudentPage } from '../pages/sign-up-student/sign-up-student'
import { SignUpDetailsPage } from '../pages/sign-up-details/sign-up-details'
import { SignUpParentPage } from '../pages/sign-up-parent/sign-up-parent'
import { LoginPage } from '../pages/login/login';
import { TabsPages } from '../pages/tabs/tabs';
import { ProfileStudentPage } from '../pages/profile-student/profile-student';
import { FrgPasswordPage } from "../pages/frg-password/frg-password";
import { DatabaseProvider } from '../providers/database/database';
import { AddChildPage } from '../pages/add-child/add-child'
import { InboxPage } from "../pages/inbox/inbox";
import { CalendarPage } from "../pages/calendar/calendar";
import { MessagesPage } from "../pages/messages/messages";
import { ConsultationsPage } from "../pages/consultations/consultations";

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
    HomeParentPage,
    BeforeSignUpPage,
    SignUpStudentPage,
    SignUpDetailsPage,
    SignUpParentPage,
    LoginPage,
    ProfileStudentPage,
    TabsPages,
    FrgPasswordPage,
    AddChildPage,
    InboxPage,
    CalendarPage,
    ConsultationsPage,
    MessagesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeParentPage,
    BeforeSignUpPage, 
    SignUpStudentPage,
    SignUpDetailsPage,
    SignUpParentPage,
    ProfileStudentPage,
    LoginPage,
    TabsPages,
    FrgPasswordPage,
    AddChildPage,
    InboxPage,
    CalendarPage,
    MessagesPage,
    ConsultationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DatabaseProvider
  ]
})
export class AppModule {}
