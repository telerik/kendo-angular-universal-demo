// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

// routes & components
import { routes } from './kendo-dropdowns.routes';
import { KendoDropDownsComponent } from './kendo-dropdowns.component';

@NgModule({
  imports: [
    CommonModule,
    DropDownsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoDropDownsComponent
  ]
})
export class KendoDropDownsModule {
}
