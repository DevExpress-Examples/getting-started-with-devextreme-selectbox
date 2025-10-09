import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import { Item } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: DataSource;

  data: Item[];

  dropDownOptions: { height: number };

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

    this.dropDownOptions = {
      height: 150,
    };
  }

  onValueChanged(e: DxSelectBoxTypes.ValueChangedEvent): void {
    notify(
      `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
      'info',
      2000,
    );
  }
}
