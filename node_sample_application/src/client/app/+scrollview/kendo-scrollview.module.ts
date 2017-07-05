// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';

// routes & components
import { routes } from './kendo-scrollview.routes';
import { KendoScrollViewComponent } from './kendo-scrollview.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollViewModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoScrollViewComponent
  ]
})
export class KendoScrollViewModule {
}
