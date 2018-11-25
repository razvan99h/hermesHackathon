import { Component } from '@angular/core';
import { HomeParentPage } from '../home-parent/home-parent'
import { CalendarPage } from '../calendar/calendar'
import { InboxPage } from '../inbox/inbox'
import { ProfileStudentPage } from '../profile-student/profile-student';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPages {

  tab1Root = HomeParentPage;
  tab2Root = InboxPage;
  tab3Root = CalendarPage;
  tab4Root = ProfileStudentPage; 

  constructor() {

  }
}
