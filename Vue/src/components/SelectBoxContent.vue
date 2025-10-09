<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxSelectBox from 'devextreme-vue/select-box';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import type { DxSelectBoxTypes } from 'devextreme-vue/select-box';
import type { Item } from '../types';

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

const onValueChanged = (e: DxSelectBoxTypes.ValueChangedEvent): void => {
  notify(
    `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
    'info',
    2000,
  );
};
</script>
<template>
  <div id="app">
    <DxSelectBox
      :data-source="dataSource"
      value-expr="ID"
      display-expr="Name"
      :search-enabled="true"
      @value-changed="onValueChanged"
      label="Product"
      label-mode="floating"
      :grouped="true"
      :drop-down-options="dropDownOptions"
    />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
