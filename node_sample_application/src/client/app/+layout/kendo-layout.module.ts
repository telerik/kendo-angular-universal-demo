// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@progress/kendo-angular-layout';

// routes & components
import { routes } from './kendo-layout.routes';
import { KendoLayoutComponent } from './kendo-layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoLayoutComponent
  ]
})
export class KendoLayoutModule {
}
