import { Injectable } from '@angular/core';

export class Item {
    ID: number;
    Name: string;
    Category: string;
}
  
const items: Item[] = [{
    ID: 1,
    Name: 'Banana',
    Category: 'Fruits',
}, {
    ID: 2,
    Name: 'Cucumber',
    Category: 'Vegetables',
}, {
    ID: 3,
    Name: 'Apple',
    Category: 'Fruits',
}, {
    ID: 4,
    Name: 'Tomato',
    Category: 'Vegetables',
}, {
    ID: 5,
    Name: 'Apricot',
    Category: 'Fruits',
}]

@Injectable({
  providedIn: 'root'
})
export class AppService {
    getItems(): Item[] {
        return items;
    }
}
