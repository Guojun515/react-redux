import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { menus } from './menu';


const { Sider } = Layout
const { Item, SubMenu } = Menu;

/**
 * 侧边导航栏
 */
class Mysider extends React.Component {

  state = {
    openKey: null,      //代开某个导航栏的状态
    selectedKey: null   //单签导航栏的状态
  };

  /**
   * 组件加载完成后根据地址内容打开页面
   */
  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({
      selectedKey: pathname,
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
    });
  }

  /**
   * 点击菜单出发的动作，自动当前的菜单，自动展开当前菜单或关闭菜单
   * @param {*e 是一个合成事件。React 根据 W3C spec 来定义这些合成事件} e 
   */
  menuClick(e) {
    this.setState({
      selectedKey: e.key
    });
    if (e.key.indexOf(this.state.openKey)) {
      this.setState({
        openKey: null
      })
    }
  };

  /**
   * subMenu改变触发等事件，用于展开关闭子菜单
   * @param {*} v 
   */
  openMenu(v) {
    this.setState({
      openKey: v[v.length - 1],
    })
  };

  /**
   * 展开菜单的方法
   * @param {*} menu 
   */
  renderMenuItem(menu) {
    if (menu.sub && menu.sub.length) {
      let subMenu = menu.sub;
      return (
        <SubMenu key={menu.url} title={<span><Icon type={menu.icon} /><span>{menu.title}</span></span>} >
          {subMenu && subMenu.map(item => this.renderMenuItem(item))}
        </SubMenu>
      );
    } else {
      return (
        <Item key={menu.url} >
          <Link to={menu.url} onClick = {() => {this.props.currentMenuTitle(menu.url)}}>
            <Icon type={menu.icon} />
            <span>{menu.title}</span>
          </Link>
        </Item>
      );
    }
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo">React redux</div>
        <Menu theme="dark" mode="inline"
          selectedKeys={[this.state.selectedKey]}
          openKeys={[this.state.openKey]}
          onOpenChange={this.openMenu.bind(this)}
          onClick={this.menuClick.bind(this)}>
          {menus && menus.map(menu => this.renderMenuItem(menu))}
        </Menu>
      </Sider>
    );
  }
}

/**
 * react-router 提供了一个withRouter组件 
 * withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。 
 * 无需一级级传递react-router 的属性，当需要用的router 属性的时候，将组件包一层withRouter，就可以拿到需要的路由信息
 */
export default withRouter(Mysider);
