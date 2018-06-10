import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import Study from '../app/Study';
import Aaa from '../app/Aaa';

/**
 * 登录检测(redux-auth-wrapper 组件)
 */
const userIsAuthenticated = connectedRouterRedirect({
    // The url to redirect user to if they fail
   redirectPath: '/login',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains user data
   authenticatedSelector: state => state.userInfo.userName !== "",
   // A nice display name for this check
   wrapperDisplayName: 'UserIsAuthenticated'
 });

/**
 * 应用页面级别的路由
 */
class AppRoute extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/index" component={userIsAuthenticated(Study)} />
                <Route exact path="/app/task/aaa" component={userIsAuthenticated(Aaa)} />
                <Route render={() => <Redirect to='/404' />} />
            </Switch>
        );
    }
}

export default AppRoute;
