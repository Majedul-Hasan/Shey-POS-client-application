import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  UserOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import '../resursers/layout.css';
import { Link } from 'react-router';
const { Header, Sider, Content } = Layout;

const DefaultLaout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}>
        <div className='demo-logo-vertical'>
          {' '}
          <h3>Shey POS</h3>{' '}
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={window.location.pathname}
          items={[
            {
              key: '/home',
              icon: <HomeOutlined />,
              label: (
                <Link
                  className=''
                  to={'/home'}>
                  Home
                </Link>
              ),
            },
            {
              key: '/bills',
              icon: <CopyOutlined />,
              label: (
                <Link
                  className=''
                  to={'/bills'}>
                  Bills
                </Link>
              ),
            },
            {
              key: '/items',
              icon: <UnorderedListOutlined />,
              label: (
                <Link
                  className=''
                  to={'/items'}>
                  Items
                </Link>
              ),
            },
            {
              key: '/customers',
              icon: <UserOutlined />,
              label: (
                <Link
                  className=''
                  to={'/customers'}>
                  Customers
                </Link>
              ),
            },
            {
              key: '/logout',
              icon: <LoginOutlined />,
              label: (
                <Link
                  className=''
                  to={'/logout'}>
                  Logout
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 10, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '10px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLaout;
