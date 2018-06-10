import React from "react";
import { Layout, Menu, Icon, Avatar } from 'antd';
import UserLogo from '../../style/imgs/user-logo.png';

const { Header } = Layout
const { Item, SubMenu } = Menu;

/**
 * 右侧头部信息
 */
class Myheader extends React.Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
        <Menu mode='horizontal' style={{ lineHeight: '64px', float: 'right' }}>
          <SubMenu title={<Avatar size="large" src={UserLogo} />}>
            <Item key="1">
              <Icon type="setting" />
              <span>系统设置</span>
            </Item>
            <Item key="2">
              <Icon type="user" />
              <span>用户信息</span>
            </Item>
            <Item key='3'>
              <Icon type='logout' />
              <span>退出</span>
            </Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

export default Myheader;
