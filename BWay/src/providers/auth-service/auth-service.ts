import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

@Injectable()
export class AuthService {
  public state={};
  public isValid={};

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.isValid = 0;
  }

  login_user(email, pass)
  {
      return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  signupUser(newEmail, newPass)
  {
    return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPass);
  }

  isLogged()
  {
      this.afAuth.authState.subscribe(state =>{
      this.state = state;
      });
  }
}
