<script setup lang="ts">
import 'devextreme/dist/css/dx.fluent.blue.light.css';

import { DxSelectBox, DxDropDownOptions, type DxSelectBoxTypes } from 'devextreme-vue/select-box';
import { DataSource } from 'devextreme-vue/common/data';
import notify from 'devextreme/ui/notify';

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
    >
      <DxDropDownOptions :height="150" />
    </DxSelectBox>
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
