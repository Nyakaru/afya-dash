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
        lineHeight: '0px',
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
          justifyContent: 'space-around',
          flexDirection: 'column',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            lineHeight: '16px',
          }}
        >
          <Progress
            percent={10}
            size="small"
            strokeColor="#4e1ed4"
            showInfo={false}
            style={{
              lineHeight: '0',
            }}
          />
          <div>24/24k Tasks completed</div>
        </div>
      </div>

      <div
        style={{
          paddingTop: '20px',
          width: '100%',
          display: 'flex',
          lineHeight: '16px',
          marginRight: '0px',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <span> Sandra</span>
            <span>Sandra@accessafya.com</span>
          </div>
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
    </Header>
  );
}

export default LayoutBanner;
