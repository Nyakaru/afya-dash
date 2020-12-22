import React from 'react';
import { Progress } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

export const lineData2 = [
  { name: 'Page A', traffic: 200 },
  { name: 'Page B', traffic: 1100 },
  { name: 'Page C', traffic: 800 },
  { name: 'Page D', traffic: 1700 },
  { name: 'Page D', traffic: 600 },
  { name: 'Page D', traffic: 1800 },
  { name: 'Page D', traffic: 600 },
];

export const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Staff Name',
    dataIndex: 'owner',
    key: 'owner',
    render: text => <a style={{ color: '#4e1ed4' }}>{text}</a>,
  },
  {
    title: 'Efficiency Delta',
    dataIndex: 'description',
    key: 'description',
    render: desc => (
      <div>
        {desc}
        <sup>{(desc - 1.8).toFixed(1)}</sup>
        {desc > 1.5 ? (
          <CaretUpOutlined style={{ color: 'green' }} />
        ) : (
          <CaretDownOutlined style={{ color: 'red' }} />
        )}
      </div>
    ),
  },
  {
    title: 'NPS Delta',
    dataIndex: 'delta',
    key: 'delta',
    render: desc => (
      <div>
        {desc}
        <sup>{(desc - 1.8).toFixed(1)}</sup>
        {desc > 1.6 ? (
          <CaretUpOutlined style={{ color: 'green' }} />
        ) : (
          <CaretDownOutlined style={{ color: 'red' }} />
        )}
      </div>
    ),
  },
  {
    title: 'Efficiency',
    dataIndex: 'qty',
    key: 'qty',
    render: qty => (
      <Progress percent={qty} size="small" strokeColor="#4e1ed4" />
    ),
  },
  {
    title: 'Reported Issues',
    dataIndex: 'report',
    key: 'report',
    render: report => (
      <div>
        <span style={{ float: 'right', marginRight: 50 }}>{report / 10} </span>
        <Progress
          percent={report}
          size="small"
          strokeColor="#4e1ed4"
          showInfo={false}
          style={{ maxWidth: '70px' }}
        />
      </div>
    ),
  },
];

export const data = {
  totalElements: 4,
  content: [
    {
      key: '1',
      report: 30,
      description: 1.5,
      delta: 2.5,
      qty: 96,
      owner: 'Mercy Mukoya',
    },
    {
      key: '2',
      report: 60,
      description: 2.6,
      delta: 1.6,
      qty: 92,
      owner: 'Kennedy Ayako',
    },
    {
      key: '3',
      report: 10,
      description: 0.6,
      delta: 2.6,
      qty: 58,
      owner: 'Stephanie Tomsett',
    },
    {
      key: '4',
      report: 80,
      description: 3.2,
      delta: 1.2,
      qty: 74,
      owner: 'Faith Kitiyo',
    },
    // ...
  ],
};
export const visitSummary = [
  { x: '2020-09-18', y: 21 },
  { x: '2020-09-19', y: 9 },
  { x: '2020-09-20', y: 5 },
  { x: '2020-09-21', y: 6 },
  { x: '2020-09-22', y: 14 },
  { x: '2020-09-23', y: 17 },
  { x: '2020-09-24', y: 5 },
  { x: '2020-09-25', y: 3 },
  { x: '2020-09-26', y: 11 },
  { x: '2020-09-27', y: 14 },
  { x: '2020-09-28', y: 12 },
  { x: '2020-09-29', y: 19 },
  { x: '2020-09-30', y: 5 },
  { x: '2020-10-01', y: 20 },
  { x: '2020-10-02', y: 2 },
  { x: '2020-10-03', y: 16 },
  { x: '2020-10-04', y: 11 },
  { x: '2020-10-05', y: 21 },
  { x: '2020-10-06', y: 32 },
  { x: '2020-10-07', y: 16 },
  { x: '2020-10-08', y: 7 },
  { x: '2020-10-09', y: 0 },
  { x: '2020-10-10', y: 11 },
  { x: '2020-10-11', y: 13 },
  { x: '2020-10-12', y: 18 },
  { x: '2020-10-13', y: 13 },
  { x: '2020-10-14', y: 27 },
  { x: '2020-10-15', y: 14 },
  { x: '2020-10-16', y: 2 },
  { x: '2020-10-17', y: 15 },
];

export const movementSummary = [
  { x: '2019-11', y: 0 },
  { x: '2019-12', y: 0 },
  { x: '2020-1', y: 0 },
  { x: '2020-2', y: 0 },
  { x: '2020-3', y: 730 },
  { x: '2020-4', y: 178 },
  { x: '2020-5', y: 0 },
  { x: '2020-6', y: 6 },
  { x: '2020-7', y: 18 },
  { x: '2020-8', y: 222 },
  { x: '2020-9', y: 99 },
  { x: '2020-10', y: 978 },
];
