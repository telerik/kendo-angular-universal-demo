// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopupModule } from '@progress/kendo-angular-popup';

// routes & components
import { routes } from './kendo-popup.routes';
import { KendoPopupComponent } from './kendo-popup.component';

@NgModule({
  imports: [
    CommonModule,
    PopupModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoPopupComponent
  ]
})
export class KendoPopupModule {
}
