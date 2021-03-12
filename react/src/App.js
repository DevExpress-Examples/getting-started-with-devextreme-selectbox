import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import './App.css';

import { SelectBox } from 'devextreme-react/select-box';
import DataSource from 'devextreme/data/data_source';

import { data } from './data';

const dataSource = new DataSource({
    store: {
        data: data,
        type: 'array',
        key: 'ID'
    },
    group: 'Category'
});

const dropDownOptions = {
    height: 150
};

class App extends React.Component {
    onValueChanged(e) {
        const item = data.filter((i) => i.ID === e.value)[0];
        console.log(item.ID + ': ' + item.Name);
    }

    render() {
        return (
            <div className="App">
                <SelectBox
                    dataSource={dataSource}
                    valueExpr="ID"
                    displayExpr="Name"
                    searchEnabled={true}
                    onValueChanged={this.onValueChanged}
                    grouped={true}
                    dropDownOptions={dropDownOptions}
                />
            </div>
        );
    }
}

export default App;
