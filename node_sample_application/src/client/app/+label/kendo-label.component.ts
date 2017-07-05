import { Component } from '@angular/core';

@Component({
  template: `
    <div>
     Click on the label text to focus the associated input.
    </div>
    <div style="min-height: 450px;">
      <div>
        <label [for]="datepicker">DatePicker: </label>
        <kendo-datepicker #datepicker></kendo-datepicker>
      </div>
      <div>
        <label [for]="'input'">Input: </label>
        <input id="input" />
      </div>
    </div>
  `
})
export class KendoLabelComponent {
}
