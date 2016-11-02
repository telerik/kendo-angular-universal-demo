import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,

    GridModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
