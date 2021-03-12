<template>
    <div id="app">
        <DxSelectBox
            :data-source="dataSource"
            value-expr="ID"
            display-expr="Name"
            :search-enabled="true"
            @value-changed="onValueChange"
            :grouped="true"
            :drop-down-options="dropDownOptions"
        />
    </div>
</template>

<script>
import { DxSelectBox } from 'devextreme-vue';
import DataSource from 'devextreme/data/data_source';
import { data } from './data';

export default {
    name: 'App',
    components: {
        DxSelectBox
    },
    data() {
        return {
            dataSource: new DataSource({
                store: {
                    data: data,
                    type: 'array',
                    key: 'ID'
                },
                group: 'Category'
            }),
            dropDownOptions: {
                height: 150
            }
        };
    },
    methods: {
        onValueChange(e) {
            const item = data.filter((i) => i.ID === e.value)[0];
            console.log(item.ID + ': ' + item.Name);
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
