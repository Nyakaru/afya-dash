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
    <Header
      className="header"
      style={{
        background: '#fff',
        padding: 0,
        justifyContent: 'space-between',
        height: 'auto',
      }}
    >
      <div
        style={{
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
      <div
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        <div>
          <Progress
            percent={60}
            size="small"
            strokeColor="#4e1ed4"
            showInfo={false}
          />
          <span>24/24k Tasks completed</span>
        </div>
      </div>
      <div>
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}
        >
          <div>
            <span> Sandra</span>
            <span>Sandra@accessafya.com</span>
          </div>
          <div>
            <Menu
              onClick={handleSettingMenuClick}
              mode="horizontal"
              className="menu"
            >
              <SubMenu title={getUsernameAvatar('Sandra')}>
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
          </div>
        </div>
      </div>
    </Header>
  );
}

export default LayoutBanner;
