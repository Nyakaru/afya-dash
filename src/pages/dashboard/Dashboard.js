import React from 'react';
import { Col, Row, Tooltip, Card } from 'antd';
import {
  InfoCircleFilled,
  CaretUpFilled,
  EllipsisOutlined,
} from '@ant-design/icons';
import ChartCard from '../../components/charts/ChartCard';
import MiniArea from '../../components/charts/MiniArea';
import MiniBar from '../../components/charts/MiniBar';
import ShowProducts from './ShowTable';
import { movementSummary, visitSummary } from './Defaults';
import ChartsCard from '../../components/Card';

const gridStyle = {
  width: '200px',
  height: '60px',
  padding: '0px',
  margin: 10,
  padding: '0',
  borderRadius: '1px',
};

const selStyle = {
  ...gridStyle,
  border: '1px solid #4e1ed4',
};

const comboStyle = {
  padding: '0px',
  padding: '0',
  borderRadius: '1px',
  textAlign: 'center',
  height: '30px',
};

const periodStyle = {
  ...comboStyle,
  width: '100px',
  margin: 10,
};

const monStyle = {
  ...periodStyle,
  border: '1px solid #4e1ed4',
};

const dateStyle = {
  ...comboStyle,
  width: '200px',
  marginLeft: 30,
  marginTop: 10,
  color: '#4e1ed4',
};
const pStyle = {
  margin: 5,
};

const elipStyle = {
  fontSize: 28,
  marginTop: 10,
};

function Dashboard() {
  const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 8,
    style: { marginBottom: 24 },
  };

  return (
    <>
      <Row>
        <Col span={6} style={{ width: '30%' }}>
          <Card
            title="Visits"
            style={{ maxWidth: '207px', padding: '0' }}
            bodyStyle={{ padding: '0' }}
          ></Card>
          <ChartsCard
            title="Kiambu"
            desc="7"
            highlight="#4e1ed4"
            color="white"
          />
          <ChartsCard title="Mukuru kwa Ruben" desc="12" />
          <ChartsCard title="Mukuru kwa Njenga" desc="26" />
          <ChartsCard title="Baba Dogo" desc="38" />
          <ChartsCard title="Kosovo" desc="48" />
          <ChartsCard title="Mukuru Kayaba" desc="24" />
        </Col>
        <Col span={18} style={{ float: 'right', width: '60%' }}>
          <Row gutter={24} type="flex">
            <Card title="Key Issues" style={{ marginBottom: '25px' }}>
              <Card.Grid style={gridStyle}>
                <p style={{ float: 'right' }}>
                  {' '}
                  <EllipsisOutlined rotate={90} style={elipStyle} />
                </p>

                <p style={pStyle}>Wrong prescription</p>
                <p style={pStyle}> Kiambu</p>
              </Card.Grid>
              <Card.Grid style={selStyle}>
                <p style={{ float: 'right' }}>
                  {' '}
                  <EllipsisOutlined rotate={90} style={elipStyle} />
                </p>

                <p style={pStyle}>Opened Late</p>
                <p style={pStyle}>Kiambu</p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <p style={{ float: 'right' }}>
                  {' '}
                  <EllipsisOutlined rotate={90} style={elipStyle} />
                </p>

                <p style={pStyle}>Bad Receipts</p>
                <p style={pStyle}>Kiambu</p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <p style={{ float: 'right' }}>
                  {' '}
                  <EllipsisOutlined rotate={90} style={elipStyle} />
                </p>

                <p style={pStyle}>Late Check In</p>
                <p style={pStyle}>Kiambu</p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <p style={{ float: 'right' }}>
                  {' '}
                  <EllipsisOutlined rotate={90} style={elipStyle} />
                </p>

                <p style={pStyle}>Delay In Lab</p>
                <p style={pStyle}>Kiambu</p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <p style={{ float: 'right' }}>
                  {' '}
                  <EllipsisOutlined rotate={90} style={elipStyle} />
                </p>

                <p style={pStyle}>Careless Waste Dis..</p>
                <p style={pStyle}>Kiambu</p>
              </Card.Grid>
            </Card>
          </Row>
          <Row gutter={24} type="flex">
            <Card
              title="Monitoring Period"
              style={{ marginBottom: '25px', width: '100%' }}
            >
              <Card.Grid style={periodStyle}>
                <p style={pStyle}> Day</p>
              </Card.Grid>
              <Card.Grid style={periodStyle}>
                <p style={pStyle}> Week</p>
              </Card.Grid>
              <Card.Grid style={monStyle}>
                <p style={pStyle}> Month</p>
              </Card.Grid>
              <Card.Grid style={periodStyle}>
                <p style={pStyle}> Year</p>
              </Card.Grid>
              <Card.Grid style={dateStyle}>
                <p style={pStyle}> 10th Dec 2019 - 10 Jan 2020</p>
              </Card.Grid>
            </Card>
          </Row>
          <Row gutter={24} type="flex">
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="Foot Fall"
                action={
                  <Tooltip title="Patients fall rate over the last one month.">
                    <InfoCircleFilled />
                  </Tooltip>
                }
                loading={false}
                total="13K Patients"
                contentHeight={46}
              >
                <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
                  <CaretUpFilled style={{ color: '#52c41a' }} />
                  <sup> +0.2 </sup>
                </div>
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="Patient Satisfaction"
                action={
                  <Tooltip title="Patient Satisfaction in the last one month.">
                    <InfoCircleFilled />
                  </Tooltip>
                }
                loading={false}
                total="7.8 NPS"
                contentHeight={46}
              >
                <MiniArea color="#975FE4" data={visitSummary} />
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="Revenue in KSh"
                action={
                  <Tooltip title="Revenue in Kenyan Shillings in the last one month.">
                    <InfoCircleFilled />
                  </Tooltip>
                }
                loading={false}
                total="4.2 M"
                contentHeight={46}
              >
                <MiniBar data={movementSummary} />
              </ChartCard>
            </Col>
          </Row>
          <Row gutter={24} type="flex">
            <Col span={24}>
              <Card title="Weekly Report">
                <ShowProducts />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
