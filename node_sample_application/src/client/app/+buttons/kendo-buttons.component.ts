import { Component } from '@angular/core';

@Component({
    styles: ['.example-wrapper,.example-col{ vertical-align: top; }'],
    template: `
        <div class="example-wrapper">
            <div class="example-col">
              <p>Button</p>
              <button kendoButton (click)="onButtonClick()">Default</button>
              <button kendoButton (click)="onButtonClick()" [primary]="true">Primary</button>
              <button kendoButton (click)="onButtonClick()" [disabled]="true">Disabled</button>
            </div>
            <div class="example-col">
              <p>ButtonGroup</p>
              <kendo-buttongroup>
                <button kendoButton [togglable]="true">
                  Option A
                </button>
                <button kendoButton [togglable]="true">
                  Option B
                </button>
                <button kendoButton [togglable]="true">
                  Option C
                </button>
              </kendo-buttongroup>
            </div>
            <div class="example-col">
                <p>DropDownButton</p>
                <kendo-dropdownbutton
                    [data]="dropDownButtonItems"
                    [icon]="'cog'"
                    (itemClick)="onSplitButtonItemClick($event)">
                        User Settings
                </kendo-dropdownbutton>
            </div>
            <div class="example-col">
                <p>SplitButton</p>
                <kendo-splitbutton
                    [data]="splitButtonItems"
                    [icon]="'paste'"
                    (itemClick)="onSplitButtonItemClick($event)"
                    (buttonClick)="onSplitButtonClick()">
                        Paste
                </kendo-splitbutton>
            </div>
        </div>
    `
})

export class KendoButtonsComponent {
    imageUrl = 'http://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';

    splitButtonItems: Array<any> = [{
        text: 'Keep Text Only',
        icon: 'paste-plain-text',
        // tslint:disable-next-line:no-console
        click: () => { console.log('Keep Text Only click handler'); }
    }, {
        text: 'Paste as HTML',
        icon: 'paste-as-html'
    }, {
        text: 'Paste Markdown',
        icon: 'paste-markdown'
    }, {
        text: 'Set Default Paste'
    }];

    dropDownButtonItems: Array<any> = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];

    onSplitButtonClick(dataItem?: any): void {
        // tslint:disable-next-line:no-console
        console.log('Paste');
    }

    onSplitButtonItemClick(dataItem?: any): void {
        if (dataItem) {
            // tslint:disable-next-line:no-console
            console.log(dataItem.text);
        }
    }

    onButtonClick(e?: any): void {
        // tslint:disable-next-line:no-console
        console.log('click');
    }
}
