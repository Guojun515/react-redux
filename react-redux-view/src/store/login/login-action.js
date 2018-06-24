import * as LoginType from './login-action-type';
import { get } from './../../axios/HttpUtils';

const createLogin = userInfo => {
    return {
        type : LoginType.USER_INFO,
        userInfo : userInfo
    }
}

/**
 * 获取用户的session
 */
const getUserSession = () => (dispatch, getState) => {
    //在函数体内可以使用 dispatch 方法来发射其他 action
    //在函数体内可以使用 getState 方法来获取当前的state
    get("/sys/getSession").then((response) => {
        // 发送数据到store，渲染页面
        if (response) {
            dispatch(createLogin({isLogin : true, ...response}));
        } else {
            dispatch(createLogin({isLogin : false}));
        }
    })
}

/**
 * 登录退出
 */
const loginOut = () => (dispatch, getState) => {
    //在函数体内可以使用 dispatch 方法来发射其他 action
    //在函数体内可以使用 getState 方法来获取当前的state
    get("/user/logout").then((response) => {
        // 发送数据到store，渲染页面
        if (response) {
            console.log(response);
            
            dispatch(createLogin({isLogin : false}));
        }
    })
}

export const userAction = {
    createLogin,
    getUserSession,
    loginOut
}