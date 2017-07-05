import { Component } from '@angular/core';

@Component({
  template: `
    <div>
        <p>MaskedTextBox</p>
        <kendo-maskedtextbox
            [(ngModel)]="maskedValue"
            [mask]="'9-000'"
        ></kendo-maskedtextbox>
    </div>
    <div>
        <p>NumericTextBox</p>
        <kendo-numerictextbox
            [(ngModel)] = "numericValue"
        ></kendo-numerictextbox>
    </div>
    <div>
        <p>Slider (value = {{sliderValue}})</p>
        <kendo-slider
            [min]="min"
            [max]="max"
            [smallStep]="smallStep"
            [(ngModel)] = "sliderValue"
        ></kendo-slider>
    </div>
    <div>
        <p>Switch</p>
        <kendo-switch [(ngModel)]="switchValue"></kendo-switch>
    </div>
  `
})
export class KendoInputsComponent {
  maskedValue: string;
  sliderValue = 5;
  numericValue = 5;
  switchValue = false;
  min = 0;
  max = 10;
  smallStep = 1;
}
