import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { UploadModule } from '@progress/kendo-angular-upload';

@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,

    DropDownsModule,
    LayoutModule,
    InputsModule,
    ButtonsModule,
    GridModule,
    ChartsModule,
    DialogModule,
    PopupModule,
    ScrollViewModule,
    SortableModule,
    UploadModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
