// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';

// routes & components
import { routes } from './kendo-label.routes';
import { KendoLabelComponent } from './kendo-label.component';

@NgModule({
  imports: [
    CommonModule,
    DateInputsModule,
    LabelModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoLabelComponent
  ]
})
export class KendoLabelModule {
}
