import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import App from '../App';
import NoMatch from '../error/404';
import Login from '../Login';

/**
 * 跳转登录 （redux-auth-wrapper 组件）
 */
const locationHelper = locationHelperBuilder({});
const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/landing',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
   // If selector is true, wrapper will not redirect
   // So if there is no user data, then we show the page
  authenticatedSelector: state => state.userInfo.userName === "",
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated'
});

/**
 * 系统级别的路由
 */
class GlobalRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' render = {()=><Redirect to = '/app/index'/>} />
                    <Route path = '/app' component = {App} />
                    <Route path = '/login' component = {userIsNotAuthenticated(Login)}/>
                    <Route path = '/404' component = {NoMatch} />
                    <Router component = {NoMatch} />
                </Switch>
            </Router>
        );
    }
}

export default GlobalRoute;