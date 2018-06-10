import * as LoginType from './login-action-type';

const loginState = {
    userName : "",
    role : ""
}

export const userInfo = (state = loginState, action = {}) => {
    switch(action.type){
        case LoginType.USER_INFO:
          return {...state, ...{userName : action.userInfo.userName, role : action.userInfo.role}};
        default:
          return state;
      }
}