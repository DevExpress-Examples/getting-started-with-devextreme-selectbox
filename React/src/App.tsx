import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import SelectBox from 'devextreme-react/select-box';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import type { SelectBoxTypes } from 'devextreme-react/select-box';
import type { Item } from './types';

const data: Item[] = [
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

const dataSource = new DataSource({
  store: {
    data,
    type: 'array',
    key: 'ID',
  },
  group: 'Category',
});

const dropDownOptions = {
  height: 150,
};

function App(): JSX.Element {
  const onValueChanged = useCallback((e: SelectBoxTypes.ValueChangedEvent) => {
    notify(
      `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
      'info',
      2000,
    );
  }, []);

  return (
    <div className="App">
      <SelectBox
        dataSource={dataSource}
        valueExpr="ID"
        displayExpr="Name"
        searchEnabled={true}
        onValueChanged={onValueChanged}
        label="Product"
        labelMode="floating"
        grouped={true}
        dropDownOptions={dropDownOptions}
      />
    </div>
  );
}

export default App;
