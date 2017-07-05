import { Component } from '@angular/core';

@Component({
  template: `
  <kendo-upload
    [autoUpload]="false"
    [saveUrl]="uploadSaveUrl"
    [removeUrl]="uploadRemoveUrl">
  </kendo-upload>
  `
})
export class KendoUploadComponent {
  uploadSaveUrl = 'saveUrl';
  uploadRemoveUrl = 'removeUrl';
}
