import { Component } from '@angular/core';

@Component({
  template: `
    <div>
        <h6>Items: {{items | json}}</h6>
    </div>
    <div class="container-fluid" style="width: 500px;">
        <kendo-sortable
            [navigatable]="true"
            [animation] = "true"
            [data]="items"
            class="row"
            itemClass="item col-xs-6 col-sm-3"
            activeItemClass="item col-xs-6 col-sm-3 active"
        >
        </kendo-sortable>
    </div>
  `,
  styles: [`
    >>> .item {
      background-color: #bfe7f9;
      color: #1494d0;
      border: 1px solid #fff;
      height: 70px;
      line-height: 68px;
      font-size: 16px;
      text-align: center;
      outline: none;
      cursor: move;
    }

    >>> .item:hover {
        opacity: 0.8;
    }

    >>> .item.active {
        background-color: #27aceb;
        color: #fff;
        border-color: #27aceb;
        z-index: 10;
    }

    >>> .item.disabled {
        opacity: 0.5;
        cursor: default;
    }

    >>> .empty {
        height: 150px;
    }
  `]
})
export class KendoSortableComponent {
  items: Array<string> = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'
  ];
}
