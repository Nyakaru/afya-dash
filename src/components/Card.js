import React from 'react';
import { Card } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const ChartCard = ({ title, desc, highlight, color }) => {
  return (
    <Card
      style={{
        borderRadius: '4px',
        width: '200px',
        height: '40px',
        padding: '0px',
        margin: 10,
        backgroundColor: highlight ? highlight : 'white',
        color: color ? color : 'black',
      }}
      bodyStyle={{ padding: '0' }}
    >
      {' '}
      <p style={{ float: 'left', margin: 5, color: color ? color : '#4e1ed4' }}>
        {desc}
      </p>
      <p style={{ float: 'right', margin: 5 }}>
        {' '}
        <EllipsisOutlined rotate={90} style={{ fontSize: 24 }} />
      </p>
      <p style={{ textAlign: 'center', margin: 5 }}>{title}</p>
    </Card>
  );
};

export default ChartCard;
