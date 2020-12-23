import React from 'react';
import useDataTable from '../../components/DataTable';
import * as constants from './Defaults';

function ShowProducts() {
  const { DataTable } = useDataTable({
    columns: constants.columns,
    dataSource: constants.data,
  });

  return (
    <>
      <DataTable />
    </>
  );
}

export default ShowProducts;
