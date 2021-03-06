import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import AppIndex from '../app/AppIndex';
import Quartz from '../app/Quartz';

/**
 * 登录检测(redux-auth-wrapper 组件)
 */
const userIsAuthenticated = connectedRouterRedirect({
    // The url to redirect user to if they fail
    redirectPath: '/login',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains user data
    authenticatedSelector: state => {
        return state.userInfo.isLogin
    },
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
                <Route exact path="/app/index" component={userIsAuthenticated(AppIndex)} />
                <Route exact path="/app/task/quartz" component={userIsAuthenticated(Quartz)} />
                <Route render={() => <Redirect to='/404' />} />
            </Switch>
        );
    }
}

export default AppRoute;
