// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UploadModule } from '@progress/kendo-angular-upload';

// routes & components
import { routes } from './kendo-upload.routes';
import { KendoUploadComponent } from './kendo-upload.component';

@NgModule({
  imports: [
    CommonModule,
    UploadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KendoUploadComponent
  ]
})
export class KendoUploadModule {
}
