// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputsModule } from '@progress/kendo-angular-inputs';

// routes & components
import { routes } from './kendo-inputs.routes';
import { KendoInputsComponent } from './kendo-inputs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoInputsComponent
  ]
})
export class KendoInputsModule {
}
