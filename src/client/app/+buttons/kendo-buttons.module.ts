// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

// routes & components
import { routes } from './kendo-buttons.routes';
import { KendoButtonsComponent } from './kendo-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoButtonsComponent
  ]
})
export class KendoButtonsModule {
}
