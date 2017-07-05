// angular
import { Routes } from '@angular/router';

// libs
import { MetaGuard } from '@ngx-meta/core';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './+home/home.module#HomeModule'
      },
      {
        path: 'grid',
        loadChildren: './+grid/kendo-grid.module#KendoGridModule'
      },
      {
        path: 'buttons',
        loadChildren: './+buttons/kendo-buttons.module#KendoButtonsModule'
      },
      {
        path: 'dropdowns',
        loadChildren: './+dropdowns/kendo-dropdowns.module#KendoDropDownsModule'
      },
      {
        path: 'layout',
        loadChildren: './+layout/kendo-layout.module#KendoLayoutModule'
      },
      {
        path: 'upload',
        loadChildren: './+upload/kendo-upload.module#KendoUploadModule'
      },
      {
        path: 'charts',
        loadChildren: './+charts/kendo-charts.module#KendoChartsModule'
      },
      {
        path: 'popup',
        loadChildren: './+popup/kendo-popup.module#KendoPopupModule'
      },
      {
        path: 'dateinputs',
        loadChildren: './+dateinputs/kendo-date-inputs.module#KendoDateInputsModule'
      },
      {
        path: 'inputs',
        loadChildren: './+inputs/kendo-inputs.module#KendoInputsModule'
      },
      {
        path: 'scrollview',
        loadChildren: './+scrollview/kendo-scrollview.module#KendoScrollViewModule'
      },
      {
        path: 'label',
        loadChildren: './+label/kendo-label.module#KendoLabelModule'
      },
      {
        path: 'sortable',
        loadChildren: './+sortable/kendo-sortable.module#KendoSortableModule'
      }
    ],
    canActivateChild: [MetaGuard],
    data: {
      i18n: {
        isRoot: true
      }
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
