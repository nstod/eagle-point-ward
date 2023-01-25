import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public links = [
    // { path: '/dinners', label: 'DINNERS' },
    { path: '/plan', label: 'MISSION PLAN' }
  ];
}
