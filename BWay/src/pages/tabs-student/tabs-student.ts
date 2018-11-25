import { Component } from '@angular/core';
import { CalendarPage } from '../calendar/calendar'
import { InboxPage } from '../inbox/inbox'
import { ProfileStudentPage } from '../profile-student/profile-student';

@Component({
  templateUrl: 'tabs-student.html'
})
export class TabsStudentPages {

  tab1Root = InboxPage;
  tab2Root = CalendarPage;
  tab3Root = ProfileStudentPage;

  constructor() {

  }
}
