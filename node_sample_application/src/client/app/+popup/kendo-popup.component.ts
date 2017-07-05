import { Component } from '@angular/core';

@Component({
  template: `
    <div class="example-config">
        <button #anchor (click)="onToggle()" class="k-button">{{toggleText}} Popup</button>
      </div>
      <div class="example-wrapper">
        <kendo-popup [popupClass]="'content popup'" [anchor]="anchor" (anchorViewportLeave)="show = false" *ngIf="show">
            <!-- User-defined content -->
                Popup content.
        </kendo-popup>
      </div>
  `,
  styles: [`
      >>> .content {
        padding: 30px;
        color: #787878;
        background-color: #fcf7f8;
        border: 1px solid rgba(0,0,0,.05);
      }
      >>> .example-wrapper {
        min-height: 100px;
      }
    `]
})
export class KendoPopupComponent {
  toggleText = 'Hide';
  show = true;

  onToggle(): void {
      this.show = !this.show;
      this.toggleText = this.show ? 'Hidе' : 'Show';
  }
}
