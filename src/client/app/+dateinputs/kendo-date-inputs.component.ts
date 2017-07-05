import { Component } from '@angular/core';

@Component({
  template: `
    <div class="row example-wrapper" style="min-height: 450px;">
      <div class="col-xs-12 col-md-6 example-col">
          <p>DateInput</p>
          <kendo-dateinput [value]="value"></kendo-dateinput>
          <p>(use ← and →  to navigate, ↑ and ↓ to update)</p>

          <p>DatePicker</p>
          <kendo-datepicker [value]="value"></kendo-datepicker>
          <p>(use Alt+↓ to open the calendar)</p>
      </div>

      <div class="col-xs-12 col-md-6 example-col">
          <p>Calendar</p>
          <kendo-calendar [value]="value"></kendo-calendar>
      </div>
    </div>
  `
})
export class KendoDateInputsComponent {
  value: Date = new Date();
}
