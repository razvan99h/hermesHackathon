import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService} from '../auth-service/auth-service'

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  public item
  constructor(public db: AngularFireDatabase, public authService : AuthService) {

  }

  addStudent(student)
  {
    student = {"data" : {
          "birth_date" : "31.12.1999",
          "email" : "test@yahoo.com",
          "faculty" : "UBB Info",
          "gender" : "male",
          "location" : "Cluj-Napoca",
          "name" : "Rusu Raul",
          "payment" : "bitcoin",
          "phone" : "0749500717",
          "rating" : "4",
          "self_description" : "Prost gramada",
          "subject" : "info"
        },
        "type" : "student"
      }
    var path = "/users/" + this.authService.getUserToken()
    console.log(path)
    this.item = this.db.object(path)
    this.item.update(student)
  }

}
