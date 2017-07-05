// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from '@progress/kendo-angular-charts';

// routes & components
import { routes } from './kendo-charts.routes';
import { KendoChartsComponent } from './kendo-charts.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoChartsComponent
  ]
})
export class KendoChartsModule {
}
