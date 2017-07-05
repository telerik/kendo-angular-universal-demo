// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';

// routes & components
import { routes } from './kendo-grid.routes';
import { KendoGridComponent } from './kendo-grid.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoGridComponent
  ]
})
export class KendoGridModule {
}
