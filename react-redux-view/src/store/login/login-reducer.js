import * as LoginType from './login-action-type';

const loginState = {
    isLogin : true,
    userName: '',
    role: []
}

export const userInfo = (state = loginState, action = {}) => {
    switch (action.type) {
        case LoginType.USER_INFO: {
            let userInfo = action.userInfo;
            if (userInfo.isLogin) {
                return { ...state, ...{ userName: userInfo.user_name, role: userInfo.role_name, isLogin: userInfo.isLogin } };
            } else {
                return { ...state, ...{ userName: loginState.userName, role: loginState.role, isLogin: userInfo.isLogin } };
            }
        }
        default:
            return state;
    }
}