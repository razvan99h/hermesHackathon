import { Component } from '@angular/core';

import { ProfileStudentPage } from '../profile-student/profile-student';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPages {

  tab1Root = ProfileStudentPage;
  tab2Root = ProfileStudentPage;
  tab3Root = ProfileStudentPage;

  constructor() {

  }
}
