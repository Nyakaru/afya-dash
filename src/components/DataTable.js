import React, { useState } from 'react';
import { Table } from 'antd';

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_NUMBER = 0;

function useDataTable({ columns, dataSource, updateEntityPath }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_NUMBER);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const hasSelected = selectedRowKeys.length > 0;

  const rowSelection = {
    selectedRowKeys,
    onChange: selected => {
      setSelectedRowKeys(selected);
    },
  };

  const resetPagination = () => {
    setCurrentPage(DEFAULT_PAGE_NUMBER);
  };

  const handleTableChange = pagination => {
    console.log('pagination:', pagination);
    setCurrentPage(pagination.current - 1);
  };

  const DataTable = () => (
    <Table
      rowKey={record => record.id}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource.content}
      onRow={record => {
        return {
          onClick: () => {
            setSelectedRow(record);
          },
        };
      }}
      onChange={handleTableChange}
      pagination={{
        pageSize: DEFAULT_PAGE_SIZE,
        current: currentPage + 1,
        total: dataSource.totalElements,
        showTotal: (total, range) => {
          return `${range[0]}-${range[1]} of ${total} items`;
        },
      }}
    />
  );

  return {
    DataTable,
    hasSelected,
    selectedRow,
    selectedRowKeys,
    currentPage,
    pageSize,
    resetPagination,
  };
}

export default useDataTable;