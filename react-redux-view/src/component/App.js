import React from "react";
import { Layout } from 'antd';

import Mysider from './layout/Mysider';
import Myheader from './layout/Myheader';
import AppRoute from "./routes/AppRoute";

import 'antd/dist/antd.css';
import './../style//app.less';


const { Content, Footer } = Layout

/**
 * APP的组装
 */
class App extends React.Component {

  state = {
    collapsed: false //导航栏隐藏显示的状态
  };


  /**
   * 展开关闭导航栏
   */
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout id='layout'>
        <Mysider collapsed={this.state.collapsed} />
        <Layout>
          <Myheader collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content style={{ margin: '24px 16px ', padding: 24, background: '#fff', minHeight: 680 }}>
            <AppRoute />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React-App ©2018 Created by 1552056317@qq.com
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
