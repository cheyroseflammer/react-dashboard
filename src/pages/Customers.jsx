import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Sort,
  Filter,
  Edit,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-gray-200 rounded-3xl'>
      <Header category='Page' title='Customers' />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'
        toolbar={['Delete']}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, Filter, Selection, Sort]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
