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
    var path = "/users/" + this.authService.getUserToken()
    this.item = this.db.object(path)
    this.item.update(student)
  }

  addParent(parent)
  {
    var path = "/users/" + this.authService.getUserToken()
    this.item = this.db.object(path)
    this.item.update(parent)
  }

  addConsultation(consultation, parentID, studentID, childID)
  {

  }

  addChild(child) 
  {
    var path = "/users/" + this.authService.getUserToken()
    this.item = this.db.object(path)
    this.item.update(child)
  }

  getDataStudent()
  {
    var path = "/users/" + this.authService.getUserToken() + "/data"
    return this.item = this.db.object(path).valueChanges()
  }

  getDataParent()
  {
    var path = "/users/" + this.authService.getUserToken() + "/data"
    return this.item = this.db.object(path).valueChanges()
  }

  getAllUsers()
  {
    var path = "/users"
    return this.db.object(path).valueChanges()
  }

  getAllChildrens()
  {
    var path = "/users/" + this.authService.getUserToken() + "/childrens"
    return this.db.object(path).valueChanges()
  }

  addConsultation(object)
  {
    var path = "/consultations"
    this.db.list(path).push(object).then((response) =>
    {
      console.log(response)
      console.log(response.path.pieces_[1])
      var key = response.path.pieces_[1]
      path = "/users/" + this.authService.getUserToken() + "/consultationID/"
      this.db.object(path).update({[key]:"true"})
      path = "/users/" + object.id_student + "/consultationsID"
      this.db.object(path).update({[key]:"true"})
    })
  }

  getType()
  {
    var path = "/users/" + this.authService.getUserToken() + "/type"
    return this.db.object(path).valueChanges()
  }
}
