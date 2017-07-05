// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SortableModule } from '@progress/kendo-angular-sortable';

// routes & components
import { routes } from './kendo-sortable.routes';
import { KendoSortableComponent } from './kendo-sortable.component';

@NgModule({
  imports: [
    CommonModule,
    SortableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoSortableComponent
  ]
})
export class KendoSortableModule {
}
