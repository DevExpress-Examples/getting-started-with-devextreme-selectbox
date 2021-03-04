import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AppService, Item } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    dataSource: DataSource;
    data: Item[];
    dropDownOptions: any;

    constructor(service: AppService) {
        this.data = service.getItems();

        this.dataSource = new DataSource({
            store: {
                data: this.data,
                type: 'array',
                key: 'ID'
            },
            group: "Category"
        });
        this.dropDownOptions = {
            height: 150,
          },
    }

    onValueChanged(e) {
        const item = this.data.filter(i => i.ID === e.value)[0];
        console.log(item.ID + ": " + item.Name);
    }
}
