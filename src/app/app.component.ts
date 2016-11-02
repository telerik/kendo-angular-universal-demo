import { Component } from '@angular/core';


@Component({
  selector: 'app',
  template: `
    <div>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
