// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

// routes & components
import { routes } from './kendo-date-inputs.routes';
import { KendoDateInputsComponent } from './kendo-date-inputs.component';

@NgModule({
  imports: [
    CommonModule,
    DateInputsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoDateInputsComponent
  ]
})
export class KendoDateInputsModule {
}
