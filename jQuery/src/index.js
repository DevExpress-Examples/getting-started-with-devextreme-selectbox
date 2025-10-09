$(() => {
  const data = [
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

  const dataSource = new DevExpress.data.DataSource({
    store: {
      data,
      type: 'array',
      key: 'ID',
    },
    group: 'Category',
  });

  $('#selectBox').dxSelectBox({
    dataSource,
    valueExpr: 'ID',
    displayExpr: 'Name',
    searchEnabled: true,
    onValueChanged(e) {
      DevExpress.ui.notify(
        `Previous Value: ${e.previousValue}, Current Value: ${e.value}`,
        'info',
        2000,
      );
    },
    grouped: true,
    label: 'Product',
    labelMode: 'floating',
    dropDownOptions: {
      height: 150,
    },
  });
});
