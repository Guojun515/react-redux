import * as LoginType from './login-action-type';

export const createLogin = userInfo => {
    return {
        type : LoginType.USER_INFO,
        userInfo : userInfo
    }
}