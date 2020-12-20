import React from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Progress, Button } from 'antd';
import './Style.less';
import { getUsernameAvatar } from '../../components/UserAvatar';

const { Header } = Layout;
const { SubMenu } = Menu;

function LayoutBanner({ collapsed, handleOnCollapse }) {
  const getCollapseIcon = () => {
    if (collapsed) {
      return (
        <MenuUnfoldOutlined onClick={handleOnCollapse} className="trigger" />
      );
    }
    return <MenuFoldOutlined onClick={handleOnCollapse} className="trigger" />;
  };

  const handleSettingMenuClick = () => {};
  const handleLogout = () => {};

  return (
    <Header className="header" style={{ background: '#fff', padding: 0 }}>
      <div
        style={{
          float: 'left',
          width: '100%',
          alignSelf: 'center',
          display: 'flex',
        }}
      >
        {window.innerWidth > 992 && getCollapseIcon()}
        <Button type="default">
          Add Assessment
          <PlusOutlined />
        </Button>
      </div>
      <div style={{ width: 170, marginRight: 80 }}>
        <Progress percent={100} size="small" />
      </div>
      <div style={{ float: 'left' }}>
        <span> Kinara</span>
        <span>Kin@accessafya.com</span>
      </div>
      <Menu onClick={handleSettingMenuClick} mode="horizontal" className="menu">
        <SubMenu title={getUsernameAvatar('Kinara')}>
          <Menu.Item key="setting:1">
            <span>
              <UserOutlined />
              Profile
            </span>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <span>
              <LogoutOutlined onClick={handleLogout} />
              Logout
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default LayoutBanner;
