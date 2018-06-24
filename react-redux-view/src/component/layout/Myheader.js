import React from "react";
import { Layout, Menu, Icon, Avatar } from 'antd';
import { connect } from 'react-redux';

import { userAction } from './../../store/login/login-action';
import UserLogo from '../../style/imgs/user-logo.png';

const { Header } = Layout
const { Item, SubMenu } = Menu;

/**
 * 右侧头部信息
 */
class Myheader extends React.Component {

  componentWillMount() {
    if (this.props.userInfo.userName === '') {
      this.props.getUserSession();
    }
  }

  //刷新页面
  reload = () => {
    window.location.reload();
  };

  //退出登录
  loginout = () => {
    this.props.loginOut();
  }

  render() {
    let userInfo = this.props.userInfo;
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
        <Menu mode='horizontal' style={{ lineHeight: '64px', float: 'right' }}>
          <SubMenu title={<Avatar size="large" src={UserLogo} />}>
            <Item key="1">
              <Icon type="user" />
              <span>{userInfo.userName === '' ? '游客' : userInfo.userName}</span>
            </Item>
            <Item key="2">
              <Icon type="reload" />
              <span onClick={this.reload}>刷新</span>
            </Item>
            <Item key='3'>
              <Icon type='logout' />
              <span onClick={this.loginout}>退出</span>
            </Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

/**
 * 把state对象映射到props中
 */
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

/**
 * 用来建立 UI 组件的参数到store.dispatch方法的映射
 */
const mapDispatchToProps = {
  getUserSession: userAction.getUserSession,
  loginOut: userAction.loginOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Myheader);
