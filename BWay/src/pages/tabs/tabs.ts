import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = ProfilePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
