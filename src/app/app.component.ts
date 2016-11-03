import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app',
  template: `
    <div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
