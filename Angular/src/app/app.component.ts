import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DxSelectBoxModule, type DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import { DataSource } from 'devextreme-angular/common/data';
import notify from 'devextreme/ui/notify';

import { Item } from './app.types';

@Component({
    selector: 'app-root',
    imports: [DxSelectBoxModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: DataSource;
  data: Item[];

  constructor() {
    this.data = [
      {
        ID: 1,
        Name: 'Banana',
        Category: 'Fruits',
      },
      {
        ID: 2,
        Name: 'Cucumber',
        Category: 'Vegetables',
      },
      {
        ID: 3,
        Name: 'Apple',
        Category: 'Fruits',
      },
      {
        ID: 4,
        Name: 'Tomato',
        Category: 'Vegetables',
      },
      {
        ID: 5,
        Name: 'Apricot',
        Category: 'Fruits',
      },
    ];

    this.dataSource = new DataSource({
      store: {
        data: this.data,
        type: 'array',
        key: 'ID',
      },
      group: 'Category',
    });
  }

  onValueChanged(e: DxSelectBoxTypes.ValueChangedEvent): void {
    notify(
      `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
      'info',
      2000,
    );
  }
}
