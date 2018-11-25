import { Component } from '@angular/core';
import { HomeParentPage } from '../home-parent/home-parent'
import { CalendarPage } from '../calendar/calendar'
import { InboxPage } from '../inbox/inbox'
import { ProfileParentPage } from '../profile-parent/profile-parent';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPages {

  tab1Root = HomeParentPage;
  tab2Root = InboxPage;
  tab3Root = CalendarPage;
  tab4Root = ProfileParentPage;

  constructor() {

  }
}
