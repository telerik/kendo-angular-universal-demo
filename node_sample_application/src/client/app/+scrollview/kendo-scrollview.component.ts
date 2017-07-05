import { Component } from '@angular/core';

@Component({
  template: `
    <kendo-scrollview
        [data]="items"
        [width]="width"
        [height]="height"
        [arrows]="true"
        [pageable]="true">
          <ng-template let-item="item">
              <h2 class="demo-title">{{item.title}}</h2>
              <img src='{{item.url}}' alt='{{item.title}}' [ngStyle]="{minWidth: width}" draggable="false" />
          </ng-template>
      </kendo-scrollview>
  `,
  styles: [`
    >>> .k-scrollview-wrap {
      margin: 0 auto;
    }
    >>> .demo-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      padding: 15px;
      color: #fff;
      background-color: rgba(0,0,0,.4);
      text-align: center;
      font-size: 24px;
    }
  `]
})
export class KendoScrollViewComponent {
  items: Array<any> = [
    { title: 'Flower', url: 'http://bit.ly/2cJjYuB' },
    { title: 'Mountain', url: 'http://bit.ly/2cTBNaL' },
    { title: 'Sky', url: 'http://bit.ly/2cJl3Cx' }
  ];
  width = '100%';
  height = '500px';
}
