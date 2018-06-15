import React from "react";
import { Layout, Breadcrumb } from 'antd';

import Mysider from './layout/Mysider';
import Myheader from './layout/Myheader';
import AppRoute from "./routes/AppRoute";
import { menus } from './layout/menu';

import 'antd/dist/antd.css';
import './../style//app.less';


const { Content, Footer } = Layout

/**
 * APP的组装
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, //导航栏隐藏显示的状态
      menuTitles: [] //菜单对应的标题，用于做面包屑导航
    };
  }

  componentWillMount() {
    let currentPath = this.props.history.location.pathname;
    this.currentMenuTitle(currentPath);
  }

  /**
   * 获取当前的面包屑导航
   */
  currentMenuTitle = (currentPath) => {
    let menuTitles = [];
    for (let i = 0, len = menus.length; i < len; i++) {
      let menu = menus[i];
      if (currentPath.indexOf(menu.url) >= 0) {
        menuTitles.push(menu.title);

        let subs = menu.sub;
        if (!subs || subs.length <= 0) {
          continue;
        }

        let needBreak = false;
        for (let j = 0, subLen = subs.length; j < subLen; j++) {
          let sub = subs[j];
          if (currentPath === sub.url) {
            menuTitles.push(sub.title);

            needBreak = true
            break;
          }
        }

        if (needBreak) {
          break;
        }
      }

      this.setState({
        menuTitles
      });
    }

  }

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
        <Mysider collapsed={this.state.collapsed} currentMenuTitle = {this.currentMenuTitle} />
        <Layout>
          <Myheader collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content style={{ margin: '10px 16px ', padding: 10, minHeight: 680 }}>
            <Breadcrumb style={{ marginBottom: '10Px' }}>
              {
                this.state.menuTitles.map((menu, index) => {
                  return (
                    <Breadcrumb.Item key={index}>{menu}</Breadcrumb.Item>
                  );
                })
              }
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <AppRoute />
            </div>
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
